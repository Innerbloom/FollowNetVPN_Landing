import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { I18nService } from '../../core/i18n.service';
import { localizedPath } from '../../core/locale-url';

/** Legacy /ios-vpn-guides → /guides hub. */
@Component({
  selector: 'app-guides-redirect',
  standalone: true,
  template: '',
})
export class GuidesRedirectComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly i18n = inject(I18nService);

  ngOnInit(): void {
    void this.router.navigateByUrl(localizedPath('/guides', this.i18n.current), { replaceUrl: true });
  }
}
