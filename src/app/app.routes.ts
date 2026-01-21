import { Routes } from '@angular/router';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import { MainComponent } from './components/main/main.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsComponent } from './pages/terms/terms.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'privacy', component: PrivacyPolicyComponent },
      { path: 'terms', component: TermsComponent },
    ],
  }
];
