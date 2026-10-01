import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { I18nService } from './core/i18n.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
    // Event replay + client language switch breaks routerLink clicks
    // (prerendered jsaction="click:;" swallows navigation after i18n DOM updates).
    provideClientHydration(),
    // Resolve the language (and legacy ?lang= / saved-choice redirect) before the first navigation.
    provideAppInitializer(() => {
      inject(I18nService);
      // Keep #fragment targets clear of the sticky header.
      inject(ViewportScroller).setOffset([0, 96]);
    }),
  ],
};
