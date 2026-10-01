import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LocalizePipe } from '../localize.pipe';
import { AppLang, I18nService, SUPPORTED_LANGS } from '../../core/i18n.service';

@Component({
  selector: 'app-footer',
  imports: [LocalizePipe, RouterLink, NgFor],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
})
export class FooterComponent {
  readonly langs = SUPPORTED_LANGS;

  constructor(public i18n: I18nService) {}

  setLang(lang: AppLang, ev: MouseEvent) {
    if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.button !== 0) return;
    ev.preventDefault();
    this.i18n.setLang(lang);
  }
}
