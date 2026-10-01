import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../core/i18n.service';
import { LocalizePipe } from '../../shared/localize.pipe';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink, LocalizePipe],
  template: `
    <section class="not-found">
      <p class="code">404</p>
      <h1>{{ i18n.t('NOT_FOUND_TITLE') }}</h1>
      <p class="lead">{{ i18n.t('NOT_FOUND_TEXT') }}</p>
      <div class="actions">
        <a class="btn primary" [routerLink]="'/' | localize">{{ i18n.t('SEO_LANDING_BACK_HOME') }}</a>
        <a class="btn ghost" [routerLink]="'/guides' | localize">{{ i18n.t('NAV_GUIDES') }}</a>
      </div>
    </section>
  `,
  styles: `
    .not-found {
      max-width: 640px;
      margin: 0 auto;
      padding: 140px 20px 120px;
      text-align: center;
    }
    .code {
      font-family: 'Sora', sans-serif;
      font-size: 72px;
      font-weight: 800;
      line-height: 1;
      margin: 0 0 16px;
      opacity: 0.25;
    }
    h1 {
      margin: 0 0 12px;
    }
    .lead {
      margin: 0 0 28px;
      opacity: 0.75;
    }
    .actions {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 48px;
      padding: 0 20px;
      border-radius: 999px;
      text-decoration: none;
      font-weight: 800;
    }
    .btn.primary {
      background: var(--green);
      color: rgba(0, 0, 0, 0.85);
    }
    .btn.ghost {
      border: 1px solid var(--border-2);
      color: var(--text);
    }
  `,
})
export class NotFoundComponent {
  constructor(public i18n: I18nService) {}
}
