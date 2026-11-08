import { Component, Input } from '@angular/core';
import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { I18nService } from '../../core/i18n.service';

export type BlogVisualKind = 'tunnel' | 'protocols' | 'smart' | 'devices' | 'quota' | 'dns' | 'chrome' | 'autoconnect';

/** Diagrams drawn in HTML/CSS inside blog posts, so the labels follow the page language. */
@Component({
  selector: 'app-blog-visual',
  standalone: true,
  imports: [NgFor, NgSwitch, NgSwitchCase],
  styleUrls: ['./blog-visual.component.css'],
  template: `
    <figure class="bv" [ngSwitch]="kind">
      <!-- Device → tunnel → server → site -->
      <div *ngSwitchCase="'tunnel'" class="flow">
        <div class="node"><span class="ic"><svg viewBox="0 0 24 24"><rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M10.5 5.5h3"/></svg></span><b>{{ t('BV_YOU') }}</b></div>
        <div class="pipe">
          <span class="pipe__label">{{ t('BV_TUNNEL') }}</span>
          <span class="pipe__bar"><i></i></span>
          <span class="pipe__note">{{ t('BV_NET') }}: {{ t('BV_NET_SEES') }}</span>
        </div>
        <div class="node node--accent"><span class="ic"><svg viewBox="0 0 24 24"><path d="M12 2.8 4.5 6v5.6c0 4.6 3.2 8.4 7.5 9.6 4.3-1.2 7.5-5 7.5-9.6V6z"/><path d="m8.8 12 2.2 2.2 4.3-4.4"/></svg></span><b>{{ t('BV_SERVER') }}</b></div>
        <div class="pipe pipe--plain"><span class="pipe__bar"></span></div>
        <div class="node"><span class="ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></svg></span><b>{{ t('BV_SITE') }}</b><small>{{ t('BV_SITE_SEES') }}</small></div>
      </div>

      <!-- Protocol cards -->
      <div *ngSwitchCase="'protocols'">
        <p class="bv__title">{{ t('BV_PROTO_TITLE') }}</p>
        <div class="cards5">
          <div class="pc" *ngFor="let p of protocols"><b>{{ p.name }}</b><span>{{ t(p.key) }}</span></div>
        </div>
      </div>

      <!-- Smart Connect fallback ladder -->
      <div *ngSwitchCase="'smart'">
        <p class="bv__title">{{ t('BV_SMART_TITLE') }}</p>
        <div class="ladder">
          <div class="step step--fail"><b>WireGuard</b><span>✕ {{ t('BV_SMART_FAIL') }}</span></div>
          <span class="arrow">→</span>
          <div class="step step--fail"><b>AmneziaWG</b><span>✕ {{ t('BV_SMART_FAIL') }}</span></div>
          <span class="arrow">→</span>
          <div class="step step--ok"><b>Hysteria2</b><span>✓ {{ t('BV_SMART_OK') }}</span></div>
        </div>
      </div>

      <!-- One account, many devices -->
      <div *ngSwitchCase="'devices'" class="hub">
        <div class="hub__center"><span class="ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c1.4-3.4 4.2-5.2 7.5-5.2s6.1 1.8 7.5 5.2"/></svg></span><b>{{ t('BV_ACCOUNT') }}</b><small>{{ t('BV_SEATS') }}</small></div>
        <div class="hub__ring">
          <span *ngFor="let d of devices" class="chip">{{ d }}</span>
        </div>
      </div>

      <!-- Free vs Premium traffic -->
      <div *ngSwitchCase="'quota'" class="quota">
        <div class="q">
          <div class="q__head"><b>Free</b><small>{{ t('BV_FREE_D') }}</small></div>
          <div class="bar"><i style="width: 62%"></i></div>
          <small class="q__foot">62% {{ t('BV_USED') }}</small>
        </div>
        <div class="q q--prem">
          <div class="q__head"><b>Premium</b><small>{{ t('BV_PREM_D') }}</small></div>
          <div class="bar bar--inf"><i></i></div>
          <small class="q__foot">∞ {{ t('BV_UNLIM') }}</small>
        </div>
      </div>

      <!-- DNS inside the tunnel -->
      <div *ngSwitchCase="'dns'">
        <p class="bv__title">{{ t('BV_DNS_TITLE') }}</p>
        <div class="flow flow--dns">
          <div class="node"><span class="ic"><svg viewBox="0 0 24 24"><rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M10.5 5.5h3"/></svg></span><b>{{ t('BV_YOU') }}</b><small>“{{ t('BV_DNS_Q') }}”</small></div>
          <div class="pipe"><span class="pipe__label">{{ t('BV_TUNNEL') }}</span><span class="pipe__bar"><i></i></span></div>
          <div class="node node--accent">
            <b>{{ t('BV_DNS_PICK') }}</b>
            <div class="mini"><span>Cloudflare</span><span>Google</span><span>AdGuard</span><span>Quad9</span></div>
          </div>
        </div>
      </div>

      <!-- Chrome extension vs app -->
      <div *ngSwitchCase="'chrome'" class="split2">
        <div class="col">
          <p class="col__h"><b>{{ t('BV_EXT') }}</b><small>{{ t('BV_EXT_D') }}</small></p>
          <div class="row row--ok">Chrome <span>{{ t('BV_PROTECTED') }}</span></div>
          <div class="row row--off">{{ t('BV_OTHER_APPS') }} <span>{{ t('BV_DIRECT') }}</span></div>
        </div>
        <div class="col col--accent">
          <p class="col__h"><b>{{ t('BV_APP') }}</b><small>{{ t('BV_APP_D') }}</small></p>
          <div class="row row--ok">Chrome, Safari <span>{{ t('BV_PROTECTED') }}</span></div>
          <div class="row row--ok">{{ t('BV_OTHER_APPS') }} <span>{{ t('BV_PROTECTED') }}</span></div>
        </div>
      </div>

      <!-- Auto-connect modes -->
      <div *ngSwitchCase="'autoconnect'">
        <p class="bv__title">{{ t('BV_AC_T') }}</p>
        <div class="modes">
          <div class="mode"><span class="ic"><svg viewBox="0 0 24 24"><path d="M3 9.5c5-4.6 13-4.6 18 0M6.3 13c3.2-2.9 8.2-2.9 11.4 0M9.5 16.4c1.4-1.2 3.6-1.2 5 0"/><circle cx="12" cy="19.5" r="1"/></svg></span><b>{{ t('BV_AC_WIFI') }}</b><small>{{ t('BV_AC_WIFI_D') }}</small></div>
          <div class="mode"><span class="ic"><svg viewBox="0 0 24 24"><path d="M12 11v10M8 21h8"/><path d="M8.2 7.2a5.4 5.4 0 0 0 0 7.6M15.8 7.2a5.4 5.4 0 0 1 0 7.6M5.4 4.4a9.4 9.4 0 0 0 0 13.2M18.6 4.4a9.4 9.4 0 0 1 0 13.2"/><circle cx="12" cy="11" r="1.4"/></svg></span><b>{{ t('BV_AC_LTE') }}</b><small>{{ t('BV_AC_LTE_D') }}</small></div>
          <div class="mode mode--on"><span class="ic"><svg viewBox="0 0 24 24"><path d="M12 2.8 4.5 6v5.6c0 4.6 3.2 8.4 7.5 9.6 4.3-1.2 7.5-5 7.5-9.6V6z"/><path d="m8.8 12 2.2 2.2 4.3-4.4"/></svg></span><b>{{ t('BV_AC_ALWAYS') }}</b><small>{{ t('BV_AC_ALWAYS_D') }}</small></div>
        </div>
      </div>
    </figure>
  `,
})
export class BlogVisualComponent {
  @Input({ required: true }) kind!: BlogVisualKind;

  readonly protocols = [
    { name: 'WireGuard', key: 'BV_P_WG' },
    { name: 'IKEv2', key: 'BV_P_IKE' },
    { name: 'AmneziaWG', key: 'BV_P_AWG' },
    { name: 'Hysteria2', key: 'BV_P_HY2' },
    { name: 'VLESS Reality', key: 'BV_P_VLESS' },
  ];

  readonly devices = ['iPhone', 'iPad', 'Mac', 'Android', 'Chrome'];

  constructor(private i18n: I18nService) {}

  t(key: string): string {
    return this.i18n.t(key);
  }
}
