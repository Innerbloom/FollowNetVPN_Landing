import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import type { PremiumPlanId } from './premium-plans';

declare global {
  interface Window {
    Wayforpay?: new () => {
      run: (
        params: Record<string, unknown>,
        onApproved?: (response: unknown) => void,
        onDeclined?: (response: unknown) => void,
        onPending?: (response: unknown) => void,
      ) => void;
      closeit?: () => void;
    };
  }
}

export interface WayForPayWidgetPayload {
  merchantAccount: string;
  merchantDomainName: string;
  merchantAuthType: string;
  merchantTransactionType: string;
  merchantTransactionSecureType: string;
  merchantSignature: string;
  orderReference: string;
  orderDate: number;
  amount: string;
  currency: string;
  productName: string[];
  productPrice: string[];
  productCount: string[];
  clientEmail: string;
  clientFirstName: string;
  clientLastName: string;
  clientPhone: string;
  language: string;
  returnUrl: string;
  serviceUrl: string;
  regularMode?: string;
  regularAmount?: string;
  regularOn?: number;
}

@Injectable({ providedIn: 'root' })
export class WayForPayCheckoutService {
  private readonly http = inject(HttpClient);
  private scriptPromise: Promise<void> | null = null;

  isConfigured(): boolean {
    return environment.webWayForPayCheckoutEnabled;
  }

  private loadScript(): Promise<void> {
    if (typeof window === 'undefined') {
      return Promise.reject(new Error('No window'));
    }
    if (window.Wayforpay) {
      return Promise.resolve();
    }
    if (this.scriptPromise) {
      return this.scriptPromise;
    }
    this.scriptPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector(
        'script[src="https://secure.wayforpay.com/server/pay-widget.js"]',
      );
      if (existing) {
        existing.addEventListener('load', () => resolve(), { once: true });
        existing.addEventListener(
          'error',
          () => reject(new Error('WayForPay script failed')),
          { once: true },
        );
        return;
      }
      const s = document.createElement('script');
      s.src = 'https://secure.wayforpay.com/server/pay-widget.js';
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error('Failed to load WayForPay widget'));
      document.head.appendChild(s);
    });
    return this.scriptPromise;
  }

  private apiBase(): string {
    return environment.apiBaseUrl.replace(/\/$/, '');
  }

  async createCheckoutSession(
    identity: { email?: string; checkoutToken?: string },
    planId: PremiumPlanId,
    language?: string,
  ): Promise<WayForPayWidgetPayload> {
    const body: {
      planId: PremiumPlanId;
      language: string;
      returnUrl: string;
      checkoutToken?: string;
      email?: string;
    } = {
      planId,
      language: language ?? 'UA',
      returnUrl: `${window.location.origin}/checkout?checkout=success`,
    };
    const token = identity.checkoutToken?.trim();
    const email = identity.email?.trim().toLowerCase();
    if (token) {
      body.checkoutToken = token;
    } else if (email) {
      body.email = email;
    }
    const res = await firstValueFrom(
      this.http.post<{ widget: WayForPayWidgetPayload }>(
        `${this.apiBase()}/subscription/wayforpay/checkout`,
        body,
      ),
    );
    return res.widget;
  }

  async openWidgetCheckout(
    identity: { email?: string; checkoutToken?: string },
    planId: PremiumPlanId,
    language?: string,
  ): Promise<void> {
    await this.loadScript();
    const widget = await this.createCheckoutSession(identity, planId, language);
    const Wfp = window.Wayforpay;
    if (!Wfp) {
      throw new Error('WayForPay widget is not available');
    }
    const instance = new Wfp();
    return new Promise((resolve, reject) => {
      instance.run(
        widget as unknown as Record<string, unknown>,
        () => resolve(),
        () => reject(new Error('Payment declined')),
        () => undefined,
      );
    });
  }
}
