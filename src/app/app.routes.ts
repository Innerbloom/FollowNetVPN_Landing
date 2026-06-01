import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { SeoLandingComponent } from './pages/seo-landing/seo-landing.component';
import { GuidesRedirectComponent } from './pages/guides-redirect/guides-redirect.component';
import { landingSlugs } from './core/seo-landing.slugs';

const seoLandingRoutes: Routes = landingSlugs().map((slug) => ({
  path: slug,
  component: SeoLandingComponent,
}));

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'ios-vpn-guides', component: GuidesRedirectComponent },
      ...seoLandingRoutes,
      { path: 'checkout', component: CheckoutComponent },
      { path: 'privacy', component: PrivacyPolicyComponent },
      { path: 'terms', component: TermsComponent },
    ],
  },
];
