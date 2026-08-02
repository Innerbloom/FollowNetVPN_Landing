import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { landingSlugs } from './core/seo-landing.slugs';

const seoLandingRoutes: Routes = landingSlugs().map((slug) => ({
  path: slug,
  loadComponent: () =>
    import('./pages/seo-landing/seo-landing.component').then((m) => m.SeoLandingComponent),
}));

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'ios-vpn-guides',
        loadComponent: () =>
          import('./pages/guides-redirect/guides-redirect.component').then(
            (m) => m.GuidesRedirectComponent,
          ),
      },
      {
        path: 'guides',
        loadComponent: () =>
          import('./pages/guides/guides-hub.component').then((m) => m.GuidesHubComponent),
      },
      {
        path: 'blog',
        loadComponent: () =>
          import('./pages/blog/blog-list.component').then((m) => m.BlogListComponent),
      },
      {
        path: 'blog/:slug',
        loadComponent: () =>
          import('./pages/blog/blog-post.component').then((m) => m.BlogPostComponent),
      },
      {
        path: 'download',
        loadComponent: () =>
          import('./pages/download/download-hub.component').then((m) => m.DownloadHubComponent),
      },
      {
        path: 'download/ios',
        loadComponent: () =>
          import('./pages/download/download-ios.component').then((m) => m.DownloadIosComponent),
      },
      {
        path: 'download/chrome',
        loadComponent: () =>
          import('./pages/download/download-chrome.component').then(
            (m) => m.DownloadChromeComponent,
          ),
      },
      {
        path: 'features',
        loadComponent: () =>
          import('./pages/features/features.component').then((m) => m.FeaturesPageComponent),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about.component').then((m) => m.AboutPageComponent),
      },
      {
        path: 'support',
        loadComponent: () =>
          import('./pages/support/support.component').then((m) => m.SupportPageComponent),
      },
      {
        path: 'status',
        loadComponent: () =>
          import('./pages/status/status.component').then((m) => m.StatusPageComponent),
      },
      ...seoLandingRoutes,
      {
        path: 'checkout',
        loadComponent: () =>
          import('./pages/checkout/checkout.component').then((m) => m.CheckoutComponent),
      },
      {
        path: 'privacy',
        loadComponent: () =>
          import('./pages/privacy-policy/privacy-policy.component').then(
            (m) => m.PrivacyPolicyComponent,
          ),
      },
      {
        path: 'terms',
        loadComponent: () =>
          import('./pages/terms/terms.component').then((m) => m.TermsComponent),
      },
    ],
  },
];
