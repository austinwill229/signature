
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from '../components/hero.component';
import { QuickLinksComponent } from '../components/quick-links.component';
import { OfferCardsComponent } from '../components/offer-cards.component';
import { PromotionStripsComponent } from '../components/promotion-strips.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    QuickLinksComponent,
    OfferCardsComponent,
    PromotionStripsComponent
  ],
  template: `
    <app-hero />
    <app-quick-links />
    <app-offer-cards />
    <app-promotion-strips />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
