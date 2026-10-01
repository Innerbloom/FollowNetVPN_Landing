import { Component, DestroyRef, afterNextRender, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AppLang, I18nService } from '../../core/i18n.service';

const SHOW_DELAY_MS = 600;

/** Shown in the suggested language itself — the visitor may not read the current one. */
const COPY: Record<AppLang, { text: string; open: string; close: string }> = {
  en: { text: 'This page is available in English', open: 'Open', close: 'Close' },
  ru: { text: 'Эта страница есть на русском', open: 'Открыть', close: 'Закрыть' },
  uk: { text: 'Ця сторінка є українською', open: 'Відкрити', close: 'Закрити' },
  de: { text: 'Diese Seite gibt es auf Deutsch', open: 'Öffnen', close: 'Schließen' },
  es: { text: 'Esta página está disponible en español', open: 'Abrir', close: 'Cerrar' },
  fr: { text: 'Cette page existe en français', open: 'Ouvrir', close: 'Fermer' },
  pt: { text: 'Esta página está disponível em português', open: 'Abrir', close: 'Fechar' },
};

/**
 * Offers the browser's language instead of redirecting to it. Fixed overlay, so appearing after
 * hydration doesn't shift the page.
 */
@Component({
  selector: 'app-lang-suggest',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="lang-suggest" *ngIf="target as lang" role="region" [attr.lang]="lang" [attr.aria-label]="copy(lang).text">
      <span class="lang-suggest__text">{{ copy(lang).text }}</span>
      <button type="button" class="lang-suggest__open" (click)="open(lang)">{{ copy(lang).open }}</button>
      <button type="button" class="lang-suggest__close" (click)="dismiss()" [attr.aria-label]="copy(lang).close">×</button>
    </div>
  `,
  styles: `
    .lang-suggest {
      position: fixed;
      left: 50%;
      bottom: calc(16px + env(safe-area-inset-bottom, 0px));
      transform: translateX(-50%);
      z-index: 60;
      display: flex;
      align-items: center;
      gap: 10px;
      width: max-content;
      max-width: calc(100vw - 32px);
      padding: 10px 10px 10px 16px;
      border-radius: 14px;
      border: 1px solid var(--border);
      background: var(--surface);
      box-shadow: 0 12px 32px rgba(15, 23, 42, 0.16);
      font-size: 0.92rem;
      font-weight: 600;
      color: var(--text);
    }
    .lang-suggest__text {
      min-width: 0;
    }
    .lang-suggest__open {
      flex: none;
      padding: 7px 14px;
      border: 0;
      border-radius: 10px;
      background: var(--green-2);
      color: #fff;
      font: inherit;
      font-weight: 700;
      cursor: pointer;
    }
    .lang-suggest__close {
      flex: none;
      width: 32px;
      height: 32px;
      border: 0;
      border-radius: 8px;
      background: transparent;
      color: var(--muted);
      font-size: 1.3rem;
      line-height: 1;
      cursor: pointer;
    }
    .lang-suggest__close:hover {
      background: var(--green-soft);
    }
  `,
})
export class LangSuggestComponent {
  private readonly i18n = inject(I18nService);
  private readonly destroyRef = inject(DestroyRef);
  target: AppLang | null = null;

  constructor() {
    // Browser-only and after hydration: the prerendered HTML must not contain the banner.
    // setTimeout runs inside the zone, so the banner change is picked up by change detection.
    afterNextRender(() => {
      setTimeout(() => {
        this.i18n.lang$
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe(() => (this.target = this.i18n.suggestedLang()));
      }, SHOW_DELAY_MS);
    });
  }

  copy(lang: AppLang) {
    return COPY[lang];
  }

  open(lang: AppLang) {
    this.target = null;
    this.i18n.setLang(lang);
  }

  dismiss() {
    this.target = null;
    this.i18n.dismissSuggestion();
  }
}
