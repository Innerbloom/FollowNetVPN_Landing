import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LocalizePipe } from '../localize.pipe';
import { AppLang, I18nService, SUPPORTED_LANGS } from '../../core/i18n.service';
import { SHELL_PUBLIC } from '../../core/shell.content';
import { PULSE_PUBLIC } from '../../core/pulse.content';

@Component({
  selector: 'app-footer',
  imports: [LocalizePipe, RouterLink, NgFor, NgIf],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
})
export class FooterComponent {
  readonly langs = SUPPORTED_LANGS;
  readonly shellPublic = SHELL_PUBLIC;
  readonly pulsePublic = PULSE_PUBLIC;

  constructor(public i18n: I18nService) {}

  setLang(lang: AppLang, ev: MouseEvent) {
    if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.button !== 0) return;
    ev.preventDefault();
    this.i18n.setLang(lang);
  }
}
