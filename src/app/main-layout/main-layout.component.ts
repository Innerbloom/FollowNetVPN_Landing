import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { filter } from 'rxjs';
import { StarfieldComponent } from '../shared/starfield/starfield.component';
import { I18nService } from '../core/i18n.service';
import { SeoService } from '../core/seo.service';
import { AnalyticsService } from '../core/analytics.service';

@Component({
  selector: 'app-main-layout',
  imports: [
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
  constructor(
    private router: Router,
    public i18n: I18nService,
    private seo: SeoService,
    analytics: AnalyticsService,
  ) {
    analytics.start();
    this.refreshSeo(this.router.url);

    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => this.refreshSeo(e.urlAfterRedirects));

    this.i18n.lang$.subscribe(() => this.refreshSeo(this.router.url));
  }

  private refreshSeo(url: string): void {
    this.seo.updateForRoute(url, this.i18n.current);
  }
}
