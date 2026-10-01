import { Component } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../core/i18n.service';
import { LocalizePipe } from '../../shared/localize.pipe';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault, RouterLink, LocalizePipe],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css'],
})
export class PrivacyPolicyComponent {
  constructor(public i18n: I18nService) {}
}


