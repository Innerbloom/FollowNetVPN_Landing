import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LocalizePipe } from '../../shared/localize.pipe';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import { SHELL_APP_STORE_URL, SHELL_PRICE, ShellContent, shellContent } from '../../core/shell.content';

@Component({
  selector: 'app-shell-page',
  standalone: true,
  imports: [LocalizePipe, NgFor, NgIf, NgTemplateOutlet, RouterLink],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
})
export class ShellPageComponent implements OnInit {
  c!: ShellContent;
  readonly price = SHELL_PRICE;
  /** False until the App Store listing exists — store buttons then read "Coming soon". */
  readonly isLive = SHELL_APP_STORE_URL.length > 0;

  constructor(
    public i18n: I18nService,
    private seo: SeoService,
  ) {}

  ngOnInit(): void {
    this.refresh();
    this.i18n.lang$.subscribe(() => this.refresh());
  }

  private refresh(): void {
    this.c = shellContent(this.i18n.current);
    this.seo.setPageOverride('/shell', this.i18n.current, { faq: this.c.faq });
    this.seo.updateForRoute('/shell', this.i18n.current);
  }

  storeUrl(placement: string): string | null {
    if (!this.isLive) return null;
    const url = new URL(SHELL_APP_STORE_URL);
    url.searchParams.set('ct', `shell-${placement}`);
    url.searchParams.set('mt', '8');
    return url.toString();
  }
}
