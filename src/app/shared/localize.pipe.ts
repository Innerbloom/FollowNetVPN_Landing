import { Pipe, PipeTransform } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { localizeLink } from '../core/locale-url';

/** `[routerLink]="'/guides' | localize"` → /guides, /ru/guides, /de/guides… */
@Pipe({ name: 'localize', standalone: true, pure: false })
export class LocalizePipe implements PipeTransform {
  constructor(private readonly i18n: I18nService) {}

  transform(link: string | readonly unknown[]): string | unknown[] {
    return localizeLink(link, this.i18n.current);
  }
}
