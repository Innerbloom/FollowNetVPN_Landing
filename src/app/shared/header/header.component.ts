import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser, NgFor, NgIf } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { LocalizePipe } from '../localize.pipe';
import { filter } from 'rxjs';
import { AppLang, I18nService, SUPPORTED_LANGS } from '../../core/i18n.service';
import { appStoreUrl, isAndroidBrowser, playStoreUrl } from '../../core/app-store-url';
import { splitLangPrefix } from '../../core/locale-url';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  imports: [LocalizePipe, RouterLink, NgIf, NgFor],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
})
export class HeaderComponent {
  /** Top CTA: App Store, or Google Play on Android browsers. */
  iosAppStoreUrl = appStoreUrl('header');
  readonly appStoreMenuUrl = appStoreUrl('header-menu');
  readonly playStoreMenuUrl = playStoreUrl('header-menu');
  logoSrc = '/assets/new_logo-96.png?v=fn5';
  isMenuOpen = false;
  activeSection: 'top' | 'features' | 'pricing' | 'download' | null = null;
  readonly langs = SUPPORTED_LANGS;
  isLangOpen = false;

  onLogoError() {
    this.logoSrc = '/assets/logo.png?v=fn5';
  }

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object,
    public i18n: I18nService,
  ) {
    if (isPlatformBrowser(this.platformId) && isAndroidBrowser()) {
      this.iosAppStoreUrl = playStoreUrl('header');
    }
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMenu();
        if (!this.isLegalPage() && isPlatformBrowser(this.platformId)) {
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
    if (this.isLegalPage()) return;
    this.updateActiveSection();
  }

  private isLegalPage(): boolean {
    const { path } = splitLangPrefix(this.router.url);
    return path.startsWith('/privacy') || path.startsWith('/terms');
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

  setLang(lang: AppLang, ev?: MouseEvent) {
    // Plain href stays for crawlers and cmd-click; normal clicks switch in-app.
    if (ev && (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.button !== 0)) return;
    ev?.preventDefault();
    this.i18n.setLang(lang);
    this.isLangOpen = false;
  }

  toggleLangMenu(ev: MouseEvent) {
    ev.stopPropagation();
    this.isLangOpen = !this.isLangOpen;
  }

  mobileDownloadLabel(): string {
    return this.i18n.t('NAV_DOWNLOAD_PAGE');
  }
}
