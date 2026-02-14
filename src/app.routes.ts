
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { CheckingComponent } from './pages/checking.component';
import { CreditCardsComponent } from './pages/credit-cards.component';
import { CreditCardsCompareComponent } from './pages/credit-cards-compare.component';
import { SupportComponent } from './pages/support.component';
import { BusinessComponent } from './pages/business.component';
import { SavingsComponent } from './pages/savings.component';
import { MortgageComponent } from './pages/mortgage.component';
import { AutoComponent } from './pages/auto.component';
import { InvestingComponent } from './pages/investing.component';
import { CommercialComponent } from './pages/commercial.component';
import { WealthComponent } from './pages/wealth.component';
import { LocationsComponent } from './pages/locations.component';
import { ContactUsComponent } from './pages/contact-us.component';
import { ContactAdvisorComponent } from './pages/contact-advisor.component';
import { AdminLoginComponent } from './pages/admin-login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard.component';
import { AboutComponent } from './pages/about.component';
import { PrivacyComponent } from './pages/privacy.component';
import { SecurityComponent } from './pages/security.component';
import { TermsComponent } from './pages/terms.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'checking', component: CheckingComponent },
  { path: 'savings', component: SavingsComponent },
  {
    path: 'credit-cards',
    children: [
      { path: '', component: CreditCardsComponent },
      { path: 'compare', component: CreditCardsCompareComponent }
    ]
  },
  { path: 'mortgage', component: MortgageComponent },
  { path: 'auto', component: AutoComponent },
  { path: 'investing', component: InvestingComponent },
  { path: 'support', component: SupportComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'commercial', component: CommercialComponent },
  { path: 'wealth', component: WealthComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'contact-advisor', component: ContactAdvisorComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'terms', component: TermsComponent },
  { path: '**', redirectTo: '' }
];
