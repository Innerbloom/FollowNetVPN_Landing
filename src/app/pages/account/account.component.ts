import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import {
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild,
  afterNextRender,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { I18nService } from '../../core/i18n.service';
import { localizedPath } from '../../core/locale-url';
import { LocalizePipe } from '../../shared/localize.pipe';
import { WayForPayCheckoutService } from '../../core/wayforpay-checkout.service';
import {
  PREMIUM_PLANS,
  PremiumPlanId,
  PremiumPlanRow,
  premiumPlanPerMonth,
  premiumPlanSavePercent,
  premiumPlanTotal,
} from '../../core/premium-plans';
import { environment } from '../../../environments/environment';
import { AccountKey, accountT } from './account.i18n';
import {
  AccountApiService,
  AccountDevice,
  Billing,
  PairingSlot,
  Profile,
  WeekDay,
  WeeklyTraffic,
  apiErrorCode,
  isUnauthorized,
} from './account-api.service';

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize(config: Record<string, unknown>): void;
          renderButton(el: HTMLElement, options: Record<string, unknown>): void;
          disableAutoSelect(): void;
        };
      };
    };
  }
}

type View = 'init' | 'signin' | 'account' | 'deleted';

const APPLE_VERIFIER_KEY = 'follownet_apple_verifier';
const PAIRING_POLL_MS = 2000;
const APPLE_MANAGE_URL = 'https://apps.apple.com/account/subscriptions';
const GOOGLE_MANAGE_URL = 'https://play.google.com/store/account/subscriptions';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, FormsModule, RouterLink, LocalizePipe],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnDestroy {
  readonly i18n = inject(I18nService);
  private readonly api = inject(AccountApiService);
  private readonly wayForPay = inject(WayForPayCheckoutService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly zone = inject(NgZone);

  readonly appleManageUrl = APPLE_MANAGE_URL;
  readonly googleManageUrl = GOOGLE_MANAGE_URL;
  readonly iosUrl = environment.iosAppStoreUrl;
  readonly chromeUrl = environment.chromeWebStoreUrl;
  readonly webCheckoutEnabled = environment.webWayForPayCheckoutEnabled;

  view: View = 'init';
  error = '';

  // Sign-in: QR pairing
  pairing: PairingSlot | null = null;
  qrDataUrl = '';
  pairingState: 'loading' | 'waiting' | 'expired' | 'error' = 'loading';
  private pairingExpiresAt = 0;
  private pollTimer: ReturnType<typeof setInterval> | null = null;
  private polling = false;

  // Sign-in: email code
  showEmail = false;
  email = '';
  code = '';
  emailStep: 'email' | 'code' = 'email';
  busy = false;

  /** Fires whenever the sign-in view (re)creates the slot, so the button is never skipped. */
  @ViewChild('googleBtn') set googleBtnRef(ref: ElementRef<HTMLElement> | undefined) {
    if (ref && ref.nativeElement !== this.googleEl) {
      this.googleEl = ref.nativeElement;
      void this.renderGoogle(ref.nativeElement);
    }
    if (!ref) this.googleEl = null;
  }
  private googleEl: HTMLElement | null = null;
  googleReady = false;

  // Account
  profile: Profile | null = null;
  billing: Billing | null = null;
  traffic: WeeklyTraffic | null = null;
  /** Last 30 days, oldest first; the 7-day view is the tail of it (one request for both). */
  days: WeekDay[] = [];
  range: 7 | 30 = 7;
  /** Bar under the pointer / focus; defaults to the latest day. */
  activeDay: WeekDay | null = null;
  readonly plans = PREMIUM_PLANS;
  selectedPlan: PremiumPlanId = 'y1';
  payState: 'idle' | 'busy' | 'processing' = 'idle';
  payMessage = '';
  payError = '';

  devices: AccountDevice[] = [];
  confirmDeviceId: string | null = null;
  deviceBusy = false;
  deviceMessage = '';
  deviceError = '';
  confirmCancel = false;
  cancelBusy = false;
  cancelMessage = '';
  showDelete = false;
  deleteAck = false;
  deleteBusy = false;
  deleteError = '';

  t(key: AccountKey, params?: Record<string, string | number>): string {
    return accountT(this.i18n.current, key, params);
  }

  constructor() {
    // Browser-only and after hydration: switching views before hydration finishes leaves the
    // prerendered "Loading…" block orphaned in the DOM.
    // The extra macrotask keeps the first view switch out of the current change-detection pass
    // (otherwise dev mode throws NG0100 on `view === 'init'`).
    afterNextRender(() => setTimeout(() => this.zone.run(() => void this.boot())));
  }

  private async boot(): Promise<void> {
    const query = this.route.snapshot.queryParamMap;
    const appleCode = query.get('apple_code');
    if (appleCode) {
      await this.finishApple(appleCode);
      return;
    }
    if (this.api.token) {
      await this.loadAccount();
    } else {
      // Start fetching Google's script now so the button is ready by the time the card renders.
      void loadGsi(this.i18n.current);
      this.showSignIn();
    }
  }

  ngOnDestroy(): void {
    this.stopPolling();
  }

  // ——— Sign-in ———

  private showSignIn(): void {
    this.view = 'signin';
    this.profile = null;
    this.billing = null;
    void this.startPairing();
  }

  async startPairing(): Promise<void> {
    this.stopPolling();
    this.pairingState = 'loading';
    this.qrDataUrl = '';
    try {
      const slot = await this.api.createPairing();
      this.pairing = slot;
      this.pairingExpiresAt = Date.now() + slot.expiresIn * 1000;
      // CommonJS package: the production bundle exposes it only as `default`.
      const mod = await import('qrcode');
      const QR = ((mod as unknown as { default?: typeof mod }).default ?? mod) as typeof mod;
      this.qrDataUrl = await QR.toDataURL(slot.qrPayload, {
        width: 440,
        margin: 1,
        color: { dark: '#0f172a', light: '#ffffff' },
      });
      this.pairingState = 'waiting';
      // Outside the zone: a live interval keeps the app "unstable", which stalls hydration (NG0506)
      // and runs change detection every tick. Ticks re-enter the zone only when state changes.
      this.zone.runOutsideAngular(() => {
        this.pollTimer = setInterval(() => void this.pollPairing(), PAIRING_POLL_MS);
      });
    } catch {
      this.pairingState = 'error';
    }
  }

  private async pollPairing(): Promise<void> {
    if (!this.pairing || this.polling || this.view !== 'signin') return;
    if (Date.now() > this.pairingExpiresAt) {
      this.stopPolling();
      this.zone.run(() => (this.pairingState = 'expired'));
      return;
    }
    this.polling = true;
    try {
      const res = await this.api.pollPairing(this.pairing.code, this.pairing.pollToken);
      if (res.status === 'ready') {
        this.stopPolling();
        await this.zone.run(() => this.signedIn(res.accessToken));
      }
    } catch (e) {
      if (apiErrorCode(e) === 'PAIRING_CODE_EXPIRED' || apiErrorCode(e) === 'PAIRING_CODE_INVALID') {
        this.stopPolling();
        this.zone.run(() => (this.pairingState = 'expired'));
      }
    } finally {
      this.polling = false;
    }
  }

  private stopPolling(): void {
    if (this.pollTimer) clearInterval(this.pollTimer);
    this.pollTimer = null;
  }

  pairingCodeDisplay(): string {
    const code = this.pairing?.code ?? '';
    return code.length === 6 ? `${code.slice(0, 3)} ${code.slice(3)}` : code;
  }

  private async renderGoogle(el: HTMLElement): Promise<void> {
    const ok = await loadGsi(this.i18n.current);
    const g = window.google?.accounts?.id;
    // The slot may have been replaced (sign-out / sign-in) while the script was loading.
    if (!ok || !g || el !== this.googleEl) return;
    g.initialize({
      client_id: environment.googleWebClientId,
      ux_mode: 'popup',
      callback: (resp: { credential?: string }) =>
        this.zone.run(() => void this.finishGoogle(resp.credential)),
    });
    g.renderButton(el, {
      type: 'standard',
      theme: 'outline',
      size: 'large',
      shape: 'pill',
      text: 'continue_with',
      logo_alignment: 'center',
      width: Math.min(360, el.clientWidth || 320),
      locale: this.i18n.current,
    });
    this.zone.run(() => (this.googleReady = true));
  }

  private async finishGoogle(idToken?: string): Promise<void> {
    if (!idToken) {
      this.error = this.t('errSocial');
      return;
    }
    this.busy = true;
    this.error = '';
    try {
      const res = await this.api.google(idToken);
      await this.signedIn(res.accessToken);
    } catch {
      this.error = this.t('errSocial');
    } finally {
      this.busy = false;
    }
  }

  async startApple(): Promise<void> {
    this.error = '';
    const verifier = base64url(crypto.getRandomValues(new Uint8Array(32)));
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(verifier));
    const challenge = base64url(new Uint8Array(digest));
    try {
      sessionStorage.setItem(APPLE_VERIFIER_KEY, verifier);
    } catch {
      this.error = this.t('errSocial');
      return;
    }
    const nonce = base64url(crypto.getRandomValues(new Uint8Array(16)));
    const returnTo = environment.siteUrl + localizedPath('/account', this.i18n.current);
    const state = base64url(
      new TextEncoder().encode(JSON.stringify({ r: returnTo, n: nonce, c: challenge })),
    );
    const params = new URLSearchParams({
      client_id: environment.appleServicesId,
      redirect_uri: environment.appleRelayUrl,
      response_type: 'code id_token',
      response_mode: 'form_post',
      scope: 'email',
      state,
      nonce,
    });
    window.location.href = `https://appleid.apple.com/auth/authorize?${params.toString()}`;
  }

  private async finishApple(code: string): Promise<void> {
    let verifier: string | null = null;
    try {
      verifier = sessionStorage.getItem(APPLE_VERIFIER_KEY);
      sessionStorage.removeItem(APPLE_VERIFIER_KEY);
    } catch {
      verifier = null;
    }
    // Drop the one-time code from the address bar right away.
    void this.router.navigate([], { relativeTo: this.route, queryParams: {}, replaceUrl: true });
    if (!verifier) {
      this.showSignIn();
      this.error = this.t('errSocial');
      return;
    }
    try {
      const res = await this.api.appleRedeem(code, verifier);
      await this.signedIn(res.accessToken);
    } catch {
      this.showSignIn();
      this.error = this.t('errSocial');
    }
  }

  async sendCode(): Promise<void> {
    const email = this.email.trim();
    if (!email || this.busy) return;
    this.busy = true;
    this.error = '';
    try {
      await this.api.sendCode(email, this.i18n.current);
      this.emailStep = 'code';
    } catch {
      this.error = this.t('errGeneric');
    } finally {
      this.busy = false;
    }
  }

  async verifyCode(): Promise<void> {
    const code = this.code.replace(/\s/g, '');
    if (!code || this.busy) return;
    this.busy = true;
    this.error = '';
    try {
      const res = await this.api.verifyCode(this.email.trim(), code);
      await this.signedIn(res.accessToken);
    } catch {
      this.error = this.t('errCode');
    } finally {
      this.busy = false;
    }
  }

  backToEmail(): void {
    this.emailStep = 'email';
    this.code = '';
    this.error = '';
  }

  private async signedIn(token: string): Promise<void> {
    this.api.saveToken(token);
    this.stopPolling();
    this.error = '';
    await this.loadAccount();
  }

  // ——— Account ———

  private async loadAccount(): Promise<void> {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
    try {
      const [profile, billing] = await Promise.all([this.api.profile(), this.api.billing()]);
      this.profile = profile;
      this.billing = billing;
      this.view = 'account';
    } catch (e) {
      if (isUnauthorized(e)) this.api.clearToken();
      // Full sign-in view either way (QR + Google), so the page never sits on a blank QR.
      void loadGsi(this.i18n.current);
      this.showSignIn();
      if (!isUnauthorized(e)) this.error = this.t('errGeneric');
      return;
    }
    // Usage is secondary: the page stays useful if stats are briefly unavailable.
    const [traffic, days, devices] = await Promise.allSettled([
      this.api.traffic(tz),
      this.api.recentDays(30, tz),
      this.api.devices(),
    ]);
    this.traffic = traffic.status === 'fulfilled' ? traffic.value : null;
    this.days = days.status === 'fulfilled' ? days.value : [];
    this.devices = devices.status === 'fulfilled' ? devices.value : [];
  }

  signOut(): void {
    this.api.clearToken();
    window.google?.accounts?.id?.disableAutoSelect();
    this.resetAccountState();
    this.showSignIn();
  }

  private resetAccountState(): void {
    this.profile = null;
    this.billing = null;
    this.traffic = null;
    this.days = [];
    this.devices = [];
    this.payState = 'idle';
    this.payMessage = '';
    this.payError = '';
    this.confirmDeviceId = null;
    this.deviceMessage = '';
    this.deviceError = '';
    this.range = 7;
    this.activeDay = null;
    this.confirmCancel = false;
    this.cancelMessage = '';
    this.showDelete = false;
    this.deleteAck = false;
    this.deleteError = '';
    this.emailStep = 'email';
    this.code = '';
  }

  planLabel(): string {
    const b = this.billing;
    if (!b || b.plan === 'free') return this.t('planFree');
    return b.isTrial ? this.t('planTrial') : this.t('planPremium');
  }

  planTotal(plan: PremiumPlanRow): string {
    return premiumPlanTotal(plan) + (plan.id === 'y1' ? this.t('perYear') : this.t('perMonth'));
  }

  planPerMonth(plan: PremiumPlanRow): string | null {
    return plan.id === 'y1' ? premiumPlanPerMonth(plan, this.t('perMonth')) : null;
  }

  planSave(plan: PremiumPlanRow): number | null {
    return premiumPlanSavePercent(plan);
  }

  /** Card checkout bound to this account through a one-time ticket, so no email is needed. */
  async payWithCard(): Promise<void> {
    if (this.payState !== 'idle') return;
    this.payState = 'busy';
    this.payError = '';
    this.payMessage = '';
    let paid = false;
    try {
      const ticket = await this.api.createCheckoutTicket(this.selectedPlan);
      await this.wayForPay.openWidgetCheckout(
        { checkoutToken: ticket.token },
        this.selectedPlan,
        wayForPayLanguage(this.i18n.current),
        localizedPath('/account', this.i18n.current),
      );
      paid = true;
    } catch (e) {
      const code = apiErrorCode(e);
      const closed = e instanceof Error && e.message === 'Payment closed';
      this.payError = closed
        ? ''
        : code === 'SUBSCRIPTION_ALREADY_ACTIVE'
          ? this.t('payAlreadyActive')
          : e instanceof Error && e.message === 'Payment declined'
            ? this.t('payDeclined')
            : this.t('errGeneric');
    }
    if (!paid) {
      this.payState = 'idle';
      return;
    }
    // The widget only says the card was approved; Premium lands when WayForPay's webhook reaches us.
    this.payState = 'processing';
    this.payMessage = this.t('payProcessing');
    for (let i = 0; i < 15; i++) {
      await new Promise((r) => setTimeout(r, 2000));
      try {
        const billing = await this.api.billing();
        if (billing.plan !== 'free') {
          this.billing = billing;
          this.profile = await this.api.profile();
          this.payState = 'idle';
          this.payMessage = this.t('paySuccess');
          return;
        }
      } catch {
        /* keep polling */
      }
    }
    this.payState = 'idle';
    this.payMessage = this.t('payLater');
  }

  async cancelRenewal(): Promise<void> {
    this.cancelBusy = true;
    this.cancelMessage = '';
    try {
      await this.api.cancelCardRenewal();
      this.confirmCancel = false;
      this.cancelMessage = this.t('canceledOk');
      this.billing = await this.api.billing();
    } catch {
      this.cancelMessage = this.t('cancelFailed');
    } finally {
      this.cancelBusy = false;
    }
  }

  async deleteAccount(): Promise<void> {
    if (!this.deleteAck) return;
    this.deleteBusy = true;
    this.deleteError = '';
    try {
      await this.api.deleteAccount();
      this.api.clearToken();
      this.resetAccountState();
      this.view = 'deleted';
    } catch {
      this.deleteError = this.t('deleteFailed');
    } finally {
      this.deleteBusy = false;
    }
  }

  // ——— Formatting ———

  formatDate(iso: string | null | undefined): string {
    if (!iso) return '';
    return new Intl.DateTimeFormat(this.i18n.current, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(iso));
  }

  formatMb(mb: number): string {
    const nf = (max: number) =>
      new Intl.NumberFormat(this.i18n.current, { maximumFractionDigits: max });
    return mb >= 1024 ? `${nf(1).format(mb / 1024)} GB` : `${nf(0).format(mb)} MB`;
  }

  formatBytes(bytes: number): string {
    return this.formatMb(bytes / (1024 * 1024));
  }

  formatDuration(seconds: number): string {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const unit = (value: number, u: 'hour' | 'minute') =>
      new Intl.NumberFormat(this.i18n.current, { style: 'unit', unit: u, unitDisplay: 'narrow' }).format(value);
    return h > 0 ? `${unit(h, 'hour')} ${unit(m, 'minute')}` : unit(m, 'minute');
  }

  trafficPercent(): number {
    const t = this.traffic;
    if (!t?.limitMb) return 0;
    return Math.min(100, Math.round((t.usedMb / t.limitMb) * 100));
  }

  setRange(range: 7 | 30): void {
    this.range = range;
    this.activeDay = null;
  }

  rangeDays(): WeekDay[] {
    return this.days.slice(-this.range);
  }

  shownDay(): WeekDay | null {
    const days = this.rangeDays();
    return this.activeDay ?? days[days.length - 1] ?? null;
  }

  totals(): {
    time: number;
    traffic: number;
    sessions: number;
    activeDays: number;
    best: WeekDay | null;
    avgActive: number;
  } {
    const days = this.rangeDays();
    let time = 0;
    let traffic = 0;
    let sessions = 0;
    let activeDays = 0;
    let best: WeekDay | null = null;
    for (const d of days) {
      time += d.totalTime || 0;
      traffic += d.traffic || 0;
      sessions += d.sessions || 0;
      if ((d.totalTime || 0) > 0) activeDays += 1;
      if (!best || (d.totalTime || 0) > (best.totalTime || 0)) best = d;
    }
    return {
      time,
      traffic,
      sessions,
      activeDays,
      best: best && best.totalTime > 0 ? best : null,
      avgActive: activeDays ? Math.round(time / activeDays) : 0,
    };
  }

  protocolShares(): Array<{ protocol: string; bytes: number; pct: number }> {
    const sums = new Map<string, number>();
    for (const d of this.rangeDays()) {
      for (const p of d.trafficByProtocol ?? []) {
        sums.set(p.protocol, (sums.get(p.protocol) ?? 0) + p.bytes);
      }
    }
    const total = [...sums.values()].reduce((a, b) => a + b, 0);
    if (!total) return [];
    return [...sums.entries()]
      .map(([protocol, bytes]) => ({ protocol, bytes, pct: Math.round((bytes / total) * 100) }))
      .sort((a, b) => b.bytes - a.bytes)
      .slice(0, 5);
  }

  barHeight(day: WeekDay): number {
    const max = Math.max(...this.rangeDays().map((d) => d.totalTime || 0), 1);
    return day.totalTime ? Math.max(6, Math.round((day.totalTime / max) * 100)) : 0;
  }

  /** Every bar on the week view; roughly weekly ticks on the month view. */
  showBarLabel(index: number): boolean {
    return this.range === 7 || index % 5 === 0 || index === this.range - 1;
  }

  barLabel(date: string): string {
    const d = new Date(`${date}T12:00:00Z`);
    return this.range === 7
      ? new Intl.DateTimeFormat(this.i18n.current, { weekday: 'short', timeZone: 'UTC' }).format(d)
      : new Intl.DateTimeFormat(this.i18n.current, { day: 'numeric', timeZone: 'UTC' }).format(d);
  }

  dayTitle(date: string): string {
    return new Intl.DateTimeFormat(this.i18n.current, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      timeZone: 'UTC',
    }).format(new Date(`${date}T12:00:00Z`));
  }

  /** Days until the current period ends and how much of it has passed (0–100), if known. */
  periodProgress(): { daysLeft: number; pct: number | null } | null {
    const end = this.billing?.card?.periodEndsAt ?? this.billing?.expiresAt;
    if (!end) return null;
    const endMs = new Date(end).getTime();
    const now = Date.now();
    const daysLeft = Math.max(0, Math.ceil((endMs - now) / 86_400_000));
    const startMs = this.periodStartMs(endMs);
    const pct =
      Number.isFinite(startMs) && endMs > startMs
        ? Math.min(100, Math.max(0, Math.round(((now - startMs) / (endMs - startMs)) * 100)))
        : null;
    return { daysLeft, pct };
  }

  /**
   * Renewing subscriptions keep their original start date, so the current period is derived from
   * the plan length; trials and grants use the actual start.
   */
  private periodStartMs(endMs: number): number {
    const b = this.billing;
    const day = 86_400_000;
    const planDays = (id: string | undefined): number | null => {
      if (!id) return null;
      if (id === 'y1' || id.includes('year')) return 365;
      if (id.includes('6month')) return 182;
      if (id === 'm1' || id.includes('month')) return 30;
      return null;
    };
    const days = b?.isTrial
      ? null
      : planDays(b?.card?.planId) ?? planDays(b?.apple?.productId) ?? planDays(b?.google?.productId);
    if (days) return endMs - days * day;
    const startIso = this.profile?.subscriptionStartedAt;
    return startIso ? new Date(startIso).getTime() : NaN;
  }

  readonly perks: AccountKey[] = ['perkLocations', 'perkUnlimited', 'perkDevices', 'perkProtocols'];

  async signOutDevice(device: AccountDevice): Promise<void> {
    this.deviceBusy = true;
    this.deviceError = '';
    this.deviceMessage = '';
    try {
      await this.api.signOutDevice(device.id);
      this.devices = this.devices.filter((d) => d.id !== device.id);
      if (this.profile) {
        this.profile = { ...this.profile, deviceCount: Math.max(0, this.profile.deviceCount - 1) };
      }
      this.confirmDeviceId = null;
      this.deviceMessage = this.t('deviceRemoved');
    } catch {
      this.deviceError = this.t('errGeneric');
    } finally {
      this.deviceBusy = false;
    }
  }

  platformLabel(platform: string): string {
    if (platform === 'android') return this.t('platformAndroid');
    if (platform === 'browser') return this.t('platformBrowser');
    return this.t('platformIos');
  }

  lastSeenLabel(iso: string): string {
    const diffSec = Math.round((new Date(iso).getTime() - Date.now()) / 1000);
    if (diffSec > -300) return this.t('deviceOnlineNow');
    const rtf = new Intl.RelativeTimeFormat(this.i18n.current, { numeric: 'auto' });
    const abs = Math.abs(diffSec);
    const time =
      abs < 3600
        ? rtf.format(Math.round(diffSec / 60), 'minute')
        : abs < 86_400
          ? rtf.format(Math.round(diffSec / 3600), 'hour')
          : abs < 30 * 86_400
            ? rtf.format(Math.round(diffSec / 86_400), 'day')
            : this.formatDate(iso);
    return this.t('deviceLastSeen', { time });
  }

  deviceSlots(): boolean[] {
    const p = this.profile;
    if (!p) return [];
    return Array.from({ length: Math.min(p.deviceLimit, 10) }, (_, i) => i < p.deviceCount);
  }

  initial(): string {
    return (this.profile?.email?.trim()[0] ?? 'F').toUpperCase();
  }
}

/** WayForPay widget languages; ru/uk visitors get the Ukrainian widget like on /checkout. */
function wayForPayLanguage(lang: string): string {
  const map: Record<string, string> = { en: 'EN', de: 'DE', es: 'ES', fr: 'FR', pt: 'PT' };
  return map[lang] ?? 'UA';
}

let gsiPromise: Promise<boolean> | null = null;

/** Loads Google Identity Services once per page; resolves false if it is blocked or fails. */
function loadGsi(lang: string): Promise<boolean> {
  if (window.google?.accounts?.id) return Promise.resolve(true);
  if (!gsiPromise) {
    gsiPromise = new Promise((resolve) => {
      const script = document.createElement('script');
      // `hl` sets the button language; without it GIS follows the browser, not the page.
      script.src = `https://accounts.google.com/gsi/client?hl=${encodeURIComponent(lang)}`;
      script.async = true;
      script.onload = () => resolve(!!window.google?.accounts?.id);
      script.onerror = () => {
        gsiPromise = null;
        resolve(false);
      };
      document.head.appendChild(script);
    });
  }
  return gsiPromise;
}

function base64url(bytes: Uint8Array): string {
  let bin = '';
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
