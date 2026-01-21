import { Component } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css'],
})
export class PrivacyPolicyComponent {
  constructor(public i18n: I18nService) {}
}


