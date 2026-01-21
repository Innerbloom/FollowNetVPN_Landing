import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import {
  ChartLine,
  Globe,
  LucideAngularModule,
  Server,
  ShieldCheck,
  ShieldOff,
  Zap,
} from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
    importProvidersFrom(
      LucideAngularModule.pick({
        ShieldCheck,
        Zap,
        Globe,
        ShieldOff,
        Server,
        ChartLine,
      }),
    ),
  ],
};
