import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface PaddleCheckoutEligibility {
  readonly canStartNewCheckout: boolean;
  readonly activePaddlePeriodEndsAt: string | null;
  /** Сервер отключил веб‑checkout (`WEB_PADDLE_CHECKOUT_DISABLED`). */
  readonly webCheckoutDisabled?: boolean;
}

@Injectable({ providedIn: 'root' })
export class PaddleCheckoutEligibilityService {
  private readonly http = inject(HttpClient);

  check(email: string): Observable<PaddleCheckoutEligibility> {
    const normalized = email.trim().toLowerCase();
    if (!normalized) {
      return of({
        canStartNewCheckout: true,
        activePaddlePeriodEndsAt: null,
      });
    }
    const base = environment.apiBaseUrl.replace(/\/$/, '');
    const url = `${base}/subscription/paddle-checkout-eligibility`;
    return this.http
      .get<PaddleCheckoutEligibility>(url, {
        params: { email: normalized },
      })
      .pipe(
        catchError(() =>
          of({
            canStartNewCheckout: true,
            activePaddlePeriodEndsAt: null,
          }),
        ),
      );
  }
}
