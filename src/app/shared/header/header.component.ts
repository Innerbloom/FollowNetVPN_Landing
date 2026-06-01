import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser, NgFor, NgIf } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { AppLang, I18nService, SUPPORTED_LANGS } from '../../core/i18n.service';
import { appStoreUrl } from '../../core/app-store-url';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgIf, NgFor],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
})
export class HeaderComponent {
  readonly iosAppStoreUrl = appStoreUrl('header');
  logoSrc = '/assets/logo.png';
  isMenuOpen = false;
  activeSection: 'top' | 'features' | 'pricing' | 'download' | null = null;
  readonly langs = SUPPORTED_LANGS;
  isLangOpen = false;

  onLogoError() {
    this.logoSrc = 'logo.svg';
  }

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object,
    public i18n: I18nService,
  ) {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMenu();
        const url = this.router.url;
        if (!url.startsWith('/privacy') && !url.startsWith('/terms') && isPlatformBrowser(this.platformId)) {
          setTimeout(() => this.updateActiveSection(), 0);
        } else {
          this.activeSection = null;
        }
      });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.setScrollLock(this.isMenuOpen);
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.setScrollLock(false);
  }

  @HostListener('document:pointerdown', ['$event'])
  onDocPointerDown(ev: PointerEvent) {
    const target = ev.target as HTMLElement | null;
    if (target && target.closest('.lang-dd')) return;
    this.isLangOpen = false;
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.isLangOpen = false;
  }

  @HostListener('window:scroll')
  onScroll() {
    if (this.router.url.startsWith('/privacy') || this.router.url.startsWith('/terms')) return;
    this.updateActiveSection();
  }

  private updateActiveSection() {
    if (!isPlatformBrowser(this.platformId)) return;

    const sections: Array<{ id: 'top' | 'features' | 'pricing' | 'download' }> = [
      { id: 'top' },
      { id: 'features' },
      { id: 'pricing' },
      { id: 'download' },
    ];
    const viewportMid = window.innerHeight * 0.35;
    let best: { id: typeof sections[number]['id']; dist: number } | null = null;
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (!el) continue;
      const r = el.getBoundingClientRect();
      const dist = Math.abs(r.top - viewportMid);
      if (!best || dist < best.dist) best = { id: s.id, dist };
    }
    this.activeSection = best?.id ?? null;
  }

  private setScrollLock(locked: boolean) {
    if (!isPlatformBrowser(this.platformId)) return;

    const el = this.document.documentElement;
    if (locked) {
      el.style.overflow = 'hidden';
    } else {
      el.style.overflow = '';
    }
  }

  setLang(lang: AppLang) {
    this.i18n.setLang(lang);
    this.isLangOpen = false;
  }

  toggleLangMenu(ev: MouseEvent) {
    ev.stopPropagation();
    this.isLangOpen = !this.isLangOpen;
  }

  mobileDownloadLabel(): string {
    switch (this.i18n.current) {
      case 'ru':
        return 'Скачать';
      case 'de':
        return 'Download';
      case 'es':
        return 'Descargar';
      case 'fr':
        return 'Telecharger';
      case 'pt':
        return 'Baixar';
      case 'uk':
        return 'Скачати';
      case 'en':
      default:
        return 'Download';
    }
  }
}
