import { Component } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css'],
})
export class TermsComponent {
  constructor(public i18n: I18nService) {}
}


