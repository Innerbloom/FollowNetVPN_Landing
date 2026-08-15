import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export type WebCheckoutBlockReason = 'apple' | 'wayforpay' | 'premium';

export interface WayForPayCheckoutEligibility {
  readonly canStartNewCheckout: boolean;
  readonly activeWayForPayPeriodEndsAt: string | null;
  readonly blockReason?: WebCheckoutBlockReason | null;
  readonly webCheckoutDisabled?: boolean;
  readonly ticketInvalid?: boolean;
}

@Injectable({ providedIn: 'root' })
export class WayForPayCheckoutEligibilityService {
  private readonly http = inject(HttpClient);

  check(email: string): Observable<WayForPayCheckoutEligibility> {
    const normalized = email.trim().toLowerCase();
    if (!normalized) {
      return of({
        canStartNewCheckout: true,
        activeWayForPayPeriodEndsAt: null,
      });
    }
    const base = environment.apiBaseUrl.replace(/\/$/, '');
    const url = `${base}/subscription/wayforpay-checkout-eligibility`;
    return this.http
      .get<WayForPayCheckoutEligibility>(url, {
        params: { email: normalized },
      })
      .pipe(
        catchError(() =>
          of({
            canStartNewCheckout: true,
            activeWayForPayPeriodEndsAt: null,
          }),
        ),
      );
  }

  checkByTicket(ticket: string): Observable<WayForPayCheckoutEligibility> {
    const token = ticket.trim();
    if (!token) {
      return of({
        canStartNewCheckout: false,
        activeWayForPayPeriodEndsAt: null,
        ticketInvalid: true,
      });
    }
    const base = environment.apiBaseUrl.replace(/\/$/, '');
    const url = `${base}/subscription/wayforpay-checkout-eligibility`;
    return this.http
      .get<WayForPayCheckoutEligibility>(url, {
        params: { ticket: token },
      })
      .pipe(
        catchError(() =>
          of({
            canStartNewCheckout: false,
            activeWayForPayPeriodEndsAt: null,
            ticketInvalid: true,
          }),
        ),
      );
  }
}
