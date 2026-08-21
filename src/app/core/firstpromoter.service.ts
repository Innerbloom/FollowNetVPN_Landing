import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

type FprFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    fpr?: FprFn;
  }
}

/**
 * FirstPromoter JS bridge. Click tracking loads from index.html;
 * call trackReferral when we know the lead (web checkout email).
 */
@Injectable({ providedIn: 'root' })
export class FirstPromoterService {
  private readonly platformId = inject(PLATFORM_ID);
  private lastReferralKey: string | null = null;

  trackReferral(opts: { email?: string; uid?: string }): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const email = opts.email?.trim();
    const uid = opts.uid?.trim();
    if (!email && !uid) return;

    const key = email ? `email:${email.toLowerCase()}` : `uid:${uid}`;
    if (this.lastReferralKey === key) return;
    this.lastReferralKey = key;

    const fpr = window.fpr;
    if (typeof fpr !== 'function') return;

    if (email) {
      fpr('referral', { email });
    } else if (uid) {
      fpr('referral', { uid });
    }
  }
}
