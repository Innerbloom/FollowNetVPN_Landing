import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LocalizePipe } from '../../shared/localize.pipe';
import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import { pressKit, type PressKit } from '../../core/press-page.content';
import { appStoreUrl } from '../../core/app-store-url';

@Component({
  selector: 'app-press-page',
  standalone: true,
  imports: [LocalizePipe, NgFor, NgIf, RouterLink],
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.css'],
})
export class PressPageComponent implements OnInit {
  kit!: PressKit;
  readonly appStoreHref = appStoreUrl('press');

  constructor(
    public i18n: I18nService,
    private seo: SeoService,
  ) {}

  ngOnInit(): void {
    this.refresh();
    this.i18n.lang$.subscribe(() => this.refresh());
  }

  isMail(href: string): boolean {
    return href.startsWith('mailto:');
  }

  private refresh(): void {
    this.kit = pressKit(this.i18n.current);
    this.seo.updateForRoute('/press', this.i18n.current);
  }
}
