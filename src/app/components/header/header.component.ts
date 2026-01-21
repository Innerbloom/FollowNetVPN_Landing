import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT, NgFor, NgIf } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { AppLang, I18nService, SUPPORTED_LANGS } from '../../core/i18n.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgIf, NgFor],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
})
export class HeaderComponent {
  logoSrc = '/assets/new_logo.png';
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
    public i18n: I18nService,
  ) {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMenu();
        // Only track anchors on the landing page
        const url = this.router.url;
        if (!url.startsWith('/privacy') && !url.startsWith('/terms')) {
          // allow scroll handler to set activeSection
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
    // Prevent background scroll when mobile menu is open
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
}
