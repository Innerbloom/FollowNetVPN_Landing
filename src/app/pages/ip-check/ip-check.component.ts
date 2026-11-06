import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser, NgFor, NgIf } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { firstValueFrom } from 'rxjs';
import { appStoreUrl } from '../../core/app-store-url';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import { environment } from '../../../environments/environment';
import { IP_CHECK_COPY, IpCheckCopy } from './ip-check.content';
import { detectIpv6, detectWebRtcAddresses, otherPublicAddress } from './ip-check.probes';

const SEO_PATH = '/ip-check';

interface PublicIpCheck {
  ip: string;
  country: string | null;
  region: string | null;
  city: string | null;
  isp: string | null;
  timeZone: string | null;
  isOurNode: boolean;
  blacklist: { checked: number; listed: string[] };
}

type RowTone = 'ok' | 'warn' | 'plain';

@Component({
  selector: 'app-ip-check',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './ip-check.component.html',
  styleUrls: ['./ip-check.component.css'],
})
export class IpCheckComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly seo = inject(SeoService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  readonly i18n = inject(I18nService);

  copy: IpCheckCopy = IP_CHECK_COPY.en;
  state: 'idle' | 'loading' | 'ready' | 'failed' = 'idle';
  result: PublicIpCheck | null = null;
  ipv6: string | null = null;
  /** null = this browser has no WebRTC. */
  webrtcAddresses: string[] | null = null;
  copied = false;
  readonly appUrl = appStoreUrl('ip-check');

  ngOnInit(): void {
    this.applyLang();
    this.i18n.lang$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.applyLang());
    // The prerendered page is the SEO text; the check itself only means anything in a browser.
    if (this.isBrowser) void this.run();
  }

  async run(): Promise<void> {
    this.state = 'loading';
    this.ipv6 = null;
    this.webrtcAddresses = null;
    try {
      const url = `${environment.apiBaseUrl.replace(/\/$/, '')}/geo/ip-check/public`;
      const [result, ipv6, webrtc] = await Promise.all([
        firstValueFrom(this.http.get<PublicIpCheck>(url)),
        detectIpv6(),
        detectWebRtcAddresses(),
      ]);
      this.result = result;
      this.ipv6 = ipv6;
      this.webrtcAddresses = webrtc;
      this.state = 'ready';
    } catch {
      this.state = 'failed';
    }
  }

  async copyIp(): Promise<void> {
    if (!this.result) return;
    try {
      await navigator.clipboard.writeText(this.result.ip);
      this.copied = true;
      setTimeout(() => (this.copied = false), 2000);
    } catch {
      // Clipboard denied: the address is on screen and selectable.
    }
  }

  get rows(): Array<{ label: string; value: string; tone: RowTone }> {
    const r = this.result;
    if (!r) return [];
    const { rows, values } = this.copy;
    const location = [r.city, r.region, r.country].filter(Boolean).join(', ');
    const leaked = this.webrtcAddresses && otherPublicAddress(this.webrtcAddresses, r.ip, this.ipv6);
    const deviceZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const listed = r.blacklist.listed.length;

    return [
      { label: rows.location, value: location || values.unknown, tone: 'plain' },
      { label: rows.isp, value: r.isp ?? values.unknown, tone: 'plain' },
      { label: rows.ipv6, value: this.ipv6 ?? values.none, tone: 'plain' },
      {
        label: rows.webrtc,
        value:
          this.webrtcAddresses === null
            ? values.webrtcOff
            : leaked
              ? values.webrtcLeak.replace('{ip}', leaked)
              : values.webrtcClean,
        tone: this.webrtcAddresses === null ? 'plain' : leaked ? 'warn' : 'ok',
      },
      {
        label: rows.timezone,
        // A VPN abroad differs on purpose, so this informs and is never a warning.
        value: !r.timeZone
          ? deviceZone
          : r.timeZone === deviceZone
            ? values.tzSame
            : values.tzDifferent.replace('{device}', deviceZone).replace('{ip}', r.timeZone),
        tone: 'plain',
      },
      {
        label: rows.blacklist,
        value:
          listed > 0
            ? values.blacklistListed.replace('{n}', String(listed))
            : values.blacklistClean.replace('{n}', String(r.blacklist.checked)),
        tone: listed > 0 ? 'warn' : 'ok',
      },
    ];
  }

  private applyLang(): void {
    const lang = this.i18n.current;
    this.copy = IP_CHECK_COPY[lang] ?? IP_CHECK_COPY.en;
    this.seo.setPageOverride(SEO_PATH, lang, { faq: this.copy.faq });
    this.seo.updateForRoute(SEO_PATH, lang);
  }
}
