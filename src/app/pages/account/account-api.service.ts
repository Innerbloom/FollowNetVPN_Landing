import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

const TOKEN_KEY = 'follownet_account_token';

export interface AuthResponse {
  accessToken: string;
}

export interface PairingSlot {
  code: string;
  expiresIn: number;
  qrPayload: string;
  pollToken: string;
}

export type PairingPoll = { status: 'pending' } | ({ status: 'ready' } & AuthResponse);

export interface Profile {
  id: string;
  email: string | null;
  isAnonymous: boolean;
  subscriptionStartedAt: string | null;
  deviceCount: number;
  deviceLimit: number;
}

export interface Billing {
  plan: 'free' | 'trial' | 'premium';
  isActive: boolean;
  isTrial: boolean;
  expiresAt: string | null;
  apple: { productId: string; expiresAt: string } | null;
  google: { productId: string; expiresAt: string } | null;
  card: { planId: string; periodEndsAt: string; autoRenew: boolean } | null;
}

export interface AccountDevice {
  id: string;
  platform: 'ios' | 'android' | 'browser' | string;
  appVersion: string | null;
  createdAt: string;
  lastSeenAt: string;
  isCurrent: boolean;
}

export interface WeeklyTraffic {
  ok: boolean;
  usedMb: number;
  limitMb: number | null;
  percentUsed: number | null;
}

export interface WeekDay {
  date: string;
  /** Seconds */
  totalTime: number;
  sessions: number;
  /** Bytes */
  traffic: number;
  trafficByProtocol?: Array<{ protocol: string; bytes: number }>;
}

/** Thin client for the account page. The token lives only in this browser's localStorage. */
@Injectable({ providedIn: 'root' })
export class AccountApiService {
  private readonly http = inject(HttpClient);
  private readonly base = environment.apiBaseUrl;

  get token(): string | null {
    try {
      return localStorage.getItem(TOKEN_KEY);
    } catch {
      return null;
    }
  }

  saveToken(token: string): void {
    try {
      localStorage.setItem(TOKEN_KEY, token);
    } catch {
      /* private mode: the session simply won't survive a reload */
    }
  }

  clearToken(): void {
    try {
      localStorage.removeItem(TOKEN_KEY);
    } catch {
      /* ignore */
    }
  }

  sendCode(email: string, locale: string) {
    return this.post<{ message: string }>('/auth/send-code', { email, locale });
  }

  verifyCode(email: string, code: string) {
    return this.post<AuthResponse>('/auth/verify-code', { email, code });
  }

  createPairing() {
    return this.post<PairingSlot>('/auth/device-pairing', {});
  }

  pollPairing(code: string, pollToken: string) {
    return this.post<PairingPoll>('/auth/device-pairing/poll', { code, pollToken });
  }

  google(idToken: string) {
    return this.post<AuthResponse>('/auth/social/google', { token: idToken });
  }

  appleRedeem(code: string, verifier: string) {
    return this.post<AuthResponse>('/auth/social/apple/redeem', { code, verifier });
  }

  profile() {
    return this.get<Profile>('/users/profile');
  }

  billing() {
    return this.get<Billing>('/subscription/billing');
  }

  traffic(tz: string) {
    return this.get<WeeklyTraffic>(`/stats/me/traffic?tz=${encodeURIComponent(tz)}`);
  }

  /** Rolling last `days` days ending today (local), oldest first. */
  recentDays(days: number, tz: string) {
    return this.get<WeekDay[]>(`/stats/me/days?days=${days}&tz=${encodeURIComponent(tz)}`);
  }

  devices() {
    return this.get<AccountDevice[]>('/users/devices');
  }

  signOutDevice(id: string) {
    return firstValueFrom(
      this.http.delete<{ ok: boolean }>(`${this.base}/users/devices/${encodeURIComponent(id)}`, {
        headers: this.headers(true),
      }),
    );
  }

  /** One-time ticket that binds a card payment to this account (no email needed). */
  createCheckoutTicket(planId: string) {
    return this.post<{ token: string; expiresIn: number }>(
      '/subscription/wayforpay/checkout-ticket',
      { planId },
      true,
    );
  }

  cancelCardRenewal() {
    return this.post<{ accessUntil: string | null }>('/subscription/cancel', {}, true);
  }

  deleteAccount() {
    return this.post<{ message: string }>('/auth/delete', {}, true);
  }

  private headers(auth: boolean): HttpHeaders {
    const token = auth ? this.token : null;
    return token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : new HttpHeaders();
  }

  private get<T>(path: string): Promise<T> {
    return firstValueFrom(this.http.get<T>(this.base + path, { headers: this.headers(true) }));
  }

  private post<T>(path: string, body: unknown, auth = false): Promise<T> {
    return firstValueFrom(
      this.http.post<T>(this.base + path, body, { headers: this.headers(auth) }),
    );
  }
}

export function apiErrorCode(e: unknown): string | null {
  if (e instanceof HttpErrorResponse) {
    const code = (e.error as { code?: unknown } | null)?.code;
    return typeof code === 'string' ? code : null;
  }
  return null;
}

export function isUnauthorized(e: unknown): boolean {
  return e instanceof HttpErrorResponse && e.status === 401;
}
