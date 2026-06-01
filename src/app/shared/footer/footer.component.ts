import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../core/i18n.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
})
export class FooterComponent {
  readonly chromeWebStoreUrl = environment.chromeWebStoreUrl;

  constructor(public i18n: I18nService) {}
}
