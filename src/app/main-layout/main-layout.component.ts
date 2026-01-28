import { Component, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import {HeaderComponent} from '../components/header/header.component';
import {FooterComponent} from '../components/footer/footer.component';
import { filter } from 'rxjs';
import { StarfieldComponent } from '../components/starfield/starfield.component';
import { DOCUMENT, NgIf } from '@angular/common';
import { I18nService, AppLang } from '../core/i18n.service';

@Component({
  selector: 'app-main-layout',
  imports: [
    NgIf,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    StarfieldComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  standalone: true,
})
export class MainLayoutComponent {
  isLegalRoute = false;

  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta,
    public i18n: I18nService,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.setThemeByUrl(this.router.url);

    // initial SEO
    this.updateSeo(this.router.url);

    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        this.setThemeByUrl(e.urlAfterRedirects);
        this.updateSeo(e.urlAfterRedirects);
      });

    // Update SEO on language change as well
    this.i18n.lang$.subscribe(() => this.updateSeo(this.router.url));
  }

  private setThemeByUrl(url: string) {
    this.isLegalRoute = url.startsWith('/privacy') || url.startsWith('/terms');
  }

  private updateSeo(url: string) {
    const lang = this.i18n.current;
    const origin = this.document.location?.origin || '';
    const cleanPath = url.split('?')[0] || '/';
    const pageUrl = `${origin}${cleanPath}`;
    const ogImage = `${origin}/og/og.png`;

    const copy = this.getSeoCopy(lang, cleanPath);
    this.title.setTitle(copy.title);
    this.meta.updateTag({ name: 'description', content: copy.description });
    this.meta.updateTag({ rel: 'canonical', href: pageUrl });

    this.meta.updateTag({ property: 'og:title', content: copy.ogTitle });
    this.meta.updateTag({ property: 'og:description', content: copy.description });
    this.meta.updateTag({ property: 'og:image', content: ogImage });
    this.meta.updateTag({ property: 'og:url', content: pageUrl });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'FollowNet VPN' });
  }

  private getSeoCopy(lang: AppLang, path: string): { title: string; ogTitle: string; description: string } {
    const isPrivacy = path.startsWith('/privacy');
    const isTerms = path.startsWith('/terms');

    if (isPrivacy) {
      const byLang: Record<AppLang, { title: string; ogTitle: string; description: string }> = {
        ru: {
          title: 'Конфиденциальность — FollowNet VPN',
          ogTitle: 'Политика конфиденциальности — FollowNet VPN',
          description:
            'Как FollowNet VPN обрабатывает данные: вход без пароля, подписки, VPN‑метаданные, DNS‑провайдеры, поддержка и аналитика.',
        },
        uk: {
          title: 'Конфіденційність — FollowNet VPN',
          ogTitle: 'Політика конфіденційності — FollowNet VPN',
          description:
            'Як FollowNet VPN обробляє дані: вхід без пароля, підписки, VPN‑метадані, DNS‑провайдери, підтримка й аналітика.',
        },
        en: {
          title: 'Privacy — FollowNet VPN',
          ogTitle: 'Privacy Policy — FollowNet VPN',
          description:
            'How FollowNet VPN processes data: passwordless login, subscriptions, VPN metadata, DNS providers, support, and analytics.',
        },
        de: {
          title: 'Datenschutz — FollowNet VPN',
          ogTitle: 'Datenschutzerklärung — FollowNet VPN',
          description:
            'Wie FollowNet VPN Daten verarbeitet: Passwortloser Login, Abos, VPN‑Metadaten, DNS‑Anbieter, Support und Analytics.',
        },
        es: {
          title: 'Privacidad — FollowNet VPN',
          ogTitle: 'Política de privacidad — FollowNet VPN',
          description:
            'Cómo FollowNet VPN procesa datos: inicio de sesión sin contraseña, suscripciones, metadatos de VPN, DNS, soporte y analítica.',
        },
        fr: {
          title: 'Confidentialité — FollowNet VPN',
          ogTitle: 'Politique de confidentialité — FollowNet VPN',
          description:
            'Comment FollowNet VPN traite les données : connexion sans mot de passe, abonnements, métadonnées VPN, DNS, support et analytique.',
        },
        pt: {
          title: 'Privacidade — FollowNet VPN',
          ogTitle: 'Política de privacidade — FollowNet VPN',
          description:
            'Como o FollowNet VPN processa dados: login sem senha, assinaturas, metadados de VPN, DNS, suporte e analytics.',
        },
      };
      return byLang[lang] ?? byLang.en;
    }

    if (isTerms) {
      const byLang: Record<AppLang, { title: string; ogTitle: string; description: string }> = {
        ru: {
          title: 'Условия — FollowNet VPN',
          ogTitle: 'Условия использования — FollowNet VPN',
          description:
            'Правила использования FollowNet VPN: аккаунт, подписки, допустимое использование и ограничения ответственности.',
        },
        uk: {
          title: 'Умови — FollowNet VPN',
          ogTitle: 'Умови використання — FollowNet VPN',
          description:
            'Правила використання FollowNet VPN: акаунт, підписки, допустиме використання та обмеження відповідальності.',
        },
        en: {
          title: 'Terms — FollowNet VPN',
          ogTitle: 'Terms of Use — FollowNet VPN',
          description:
            'Rules for using FollowNet VPN: account, subscriptions, acceptable use, and limitation of liability.',
        },
        de: {
          title: 'Nutzung — FollowNet VPN',
          ogTitle: 'Nutzungsbedingungen — FollowNet VPN',
          description:
            'Regeln für die Nutzung von FollowNet VPN: Konto, Abos, zulässige Nutzung und Haftungsbeschränkung.',
        },
        es: {
          title: 'Términos — FollowNet VPN',
          ogTitle: 'Términos de uso — FollowNet VPN',
          description:
            'Reglas de uso de FollowNet VPN: cuenta, suscripciones, uso aceptable y limitación de responsabilidad.',
        },
        fr: {
          title: 'Conditions — FollowNet VPN',
          ogTitle: 'Conditions d’utilisation — FollowNet VPN',
          description:
            'Règles d’utilisation de FollowNet VPN : compte, abonnements, utilisation acceptable et limitation de responsabilité.',
        },
        pt: {
          title: 'Termos — FollowNet VPN',
          ogTitle: 'Termos de uso — FollowNet VPN',
          description:
            'Regras de uso do FollowNet VPN: conta, assinaturas, uso aceitável e limitação de responsabilidade.',
        },
      };
      return byLang[lang] ?? byLang.en;
    }

    // Landing (short title for tab, full ogTitle for sharing)
    const byLang: Record<AppLang, { title: string; ogTitle: string; description: string }> = {
      ru: {
        title: 'FollowNet VPN',
        ogTitle: 'FollowNet VPN — быстрый VPN для iOS',
        description:
          'Быстрый VPN для iOS: WireGuard и IKEv2, Kill Switch, выбор DNS, статистика и виджеты. Premium — внутри приложения.',
      },
      uk: {
        title: 'FollowNet VPN',
        ogTitle: 'FollowNet VPN — швидкий VPN для iOS',
        description:
          'Швидкий VPN для iOS: WireGuard та IKEv2, Kill Switch, вибір DNS, статистика і віджети. Premium — у застосунку.',
      },
      en: {
        title: 'FollowNet VPN',
        ogTitle: 'FollowNet VPN — fast VPN for iOS',
        description:
          'Fast VPN for iOS: WireGuard and IKEv2, Kill Switch, DNS profiles, stats and widgets. Premium is inside the app.',
      },
      de: {
        title: 'FollowNet VPN',
        ogTitle: 'FollowNet VPN — schneller VPN für iOS',
        description:
          'Schneller VPN für iOS: WireGuard und IKEv2, Kill Switch, DNS‑Profile, Statistiken und Widgets. Premium in der App.',
      },
      es: {
        title: 'FollowNet VPN',
        ogTitle: 'FollowNet VPN — VPN rápido para iOS',
        description:
          'VPN rápido para iOS: WireGuard e IKEv2, Kill Switch, perfiles DNS, estadísticas y widgets. Premium dentro de la app.',
      },
      fr: {
        title: 'FollowNet VPN',
        ogTitle: 'FollowNet VPN — VPN rapide pour iOS',
        description:
          'VPN rapide pour iOS : WireGuard et IKEv2, Kill Switch, profils DNS, statistiques et widgets. Premium dans l’app.',
      },
      pt: {
        title: 'FollowNet VPN',
        ogTitle: 'FollowNet VPN — VPN rápido para iOS',
        description:
          'VPN rápido para iOS: WireGuard e IKEv2, Kill Switch, perfis DNS, estatísticas e widgets. Premium dentro do app.',
      },
    };
    return byLang[lang] ?? byLang.en;
  }
}
