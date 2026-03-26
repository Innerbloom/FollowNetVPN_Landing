import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { PADDLE_SETTINGS } from './paddle.settings';

declare global {
  interface Window {
    Paddle?: {
      Environment?: { set: (env: string) => void };
      Initialize: (opts: {
        token: string;
        eventCallback?: (data: unknown) => void;
      }) => void;
      Checkout: { open: (opts: Record<string, unknown>) => void };
    };
  }
}

/** Детали из события Paddle `checkout.error` (для UI и отладки). */
export interface PaddleCheckoutErrorPayload {
  readonly code?: unknown;
  readonly detail?: unknown;
  readonly documentation_url?: unknown;
}

/** Включить полный лог всех событий Paddle: ?paddleDebug=1 в URL (удобно на проде). */
function paddleDebugEnabled(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  try {
    return (
      new URLSearchParams(window.location.search).get('paddleDebug') === '1'
    );
  } catch {
    return false;
  }
}

function safeJsonForLog(value: unknown): string {
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}

/**
 * successUrl должен быть на том же origin, с которого открыт checkout (www / apex / localhost).
 * Иначе Paddle часто падает с общей «Something went wrong».
 * Берём path + query из конфига, подставляя текущий origin.
 */
function resolveCheckoutSuccessUrl(): string {
  if (typeof window === 'undefined') {
    return PADDLE_SETTINGS.successUrl;
  }
  try {
    const configured = new URL(PADDLE_SETTINGS.successUrl);
    return `${window.location.origin}${configured.pathname}${configured.search}`;
  } catch {
    return `${window.location.origin}/checkout?checkout=success`;
  }
}

function warnIfClientTokenLooksTruncated(token: string): void {
  const t = token.trim();
  if (!t.startsWith('live_') && !t.startsWith('test_')) {
    return;
  }
  // Реальный client-side token в Paddle Billing обычно заметно длиннее; обрезка копипастом = типичная причина generic error
  if (t.length < 50) {
    console.error(
      '[FollowNet Paddle] Client token looks too short. Open Paddle Dashboard → Developer tools → Authentication and paste the entire client-side token into paddle.secrets.ts (a truncated token causes “Something went wrong”).',
    );
  }
}

@Injectable({ providedIn: 'root' })
export class PaddleCheckoutService {
  private scriptPromise: Promise<void> | null = null;
  private initialized = false;

  private readonly checkoutErrorSubject =
    new Subject<PaddleCheckoutErrorPayload>();
  /** Подпишись на странице checkout, чтобы показать текст из `checkout.error`. */
  readonly checkoutError$ = this.checkoutErrorSubject.asObservable();

  isConfigured(): boolean {
    return (
      !!PADDLE_SETTINGS.clientToken?.trim() &&
      PADDLE_SETTINGS.clientToken.trim().length > 8
    );
  }

  priceIdForPlan(planId: 'm1' | 'm3' | 'm6'): string {
    return PADDLE_SETTINGS.priceIds[planId]?.trim() ?? '';
  }

  private loadScript(): Promise<void> {
    if (typeof window === 'undefined') {
      return Promise.reject(new Error('No window'));
    }
    if (window.Paddle?.Checkout) {
      return Promise.resolve();
    }
    if (this.scriptPromise) {
      return this.scriptPromise;
    }
    this.scriptPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector(
        'script[src="https://cdn.paddle.com/paddle/v2/paddle.js"]',
      );
      if (existing) {
        existing.addEventListener('load', () => resolve(), { once: true });
        existing.addEventListener(
          'error',
          () => reject(new Error('Paddle script failed')),
          { once: true },
        );
        return;
      }
      const s = document.createElement('script');
      s.src = 'https://cdn.paddle.com/paddle/v2/paddle.js';
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error('Failed to load Paddle.js'));
      document.head.appendChild(s);
    });
    return this.scriptPromise;
  }

  /**
   * Paddle шлёт детали в `checkout.error`: code, detail, documentation_url.
   * Модалка «Something went wrong» без текста — смотри консоль, Network и блок под кнопкой.
   */
  private onPaddleEvent(data: unknown): void {
    const verbose = !environment.production || paddleDebugEnabled();

    if (verbose) {
      console.info('[FollowNet Paddle event]', safeJsonForLog(data));
    }

    try {
      const d = data as Record<string, unknown>;
      const name = String(d['name'] ?? '');
      const type = String(d['type'] ?? '');

      if (name === 'checkout.error') {
        const payload: PaddleCheckoutErrorPayload = {
          code: d['code'],
          detail: d['detail'],
          documentation_url: d['documentation_url'],
        };
        console.error('[FollowNet Paddle checkout.error]', {
          code: payload.code,
          type,
          detail: payload.detail,
          documentation_url: payload.documentation_url,
          raw: data,
        });
        this.checkoutErrorSubject.next(payload);
        return;
      }

      if (
        name.includes('error') ||
        name.includes('failed') ||
        type.includes('error')
      ) {
        console.warn('[FollowNet Paddle]', data);
      }
    } catch {
      /* ignore */
    }
  }

  private async ensureInitialized(): Promise<void> {
    await this.loadScript();
    const P = window.Paddle;
    if (!P?.Initialize || !P.Checkout?.open) {
      throw new Error('Paddle.js is not available');
    }
    if (this.initialized) {
      return;
    }

    const token = PADDLE_SETTINGS.clientToken.trim();
    warnIfClientTokenLooksTruncated(token);

    if (P.Environment?.set) {
      P.Environment.set(
        PADDLE_SETTINGS.environment === 'sandbox' ? 'sandbox' : 'production',
      );
    }
    P.Initialize({
      token,
      eventCallback: (data: unknown) => {
        this.onPaddleEvent(data);
      },
    });
    this.initialized = true;
  }

  async openOverlayCheckout(priceId: string, email: string): Promise<void> {
    const pid = priceId?.trim();
    if (!pid) {
      throw new Error('Missing Paddle price ID for this plan');
    }
    const customerEmail = email?.trim().toLowerCase();
    if (!customerEmail) {
      throw new Error('Missing customer email');
    }
    await this.ensureInitialized();
    const P = window.Paddle!;
    const successUrl = resolveCheckoutSuccessUrl();

    if (!environment.production || paddleDebugEnabled()) {
      console.info('[FollowNet Paddle] checkout successUrl:', successUrl);
    }

    // Как в доках Paddle: overlay + one-page (без лишних опций для изоляции сбоев)
    P.Checkout.open({
      items: [{ priceId: pid, quantity: 1 }],
      customer: { email: customerEmail },
      customData: { email: customerEmail },
      settings: {
        displayMode: 'overlay',
        variant: 'one-page',
        successUrl,
      },
    });
  }
}
