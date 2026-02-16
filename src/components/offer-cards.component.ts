
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-offer-cards',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="py-16 bg-gray-50" *ngIf="offers$ | async as offers">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div *ngFor="let offer of offers" class="bg-white shadow-md rounded-sm overflow-hidden flex flex-col transition-transform hover:shadow-xl">
          <div class="h-48 relative overflow-hidden">
            <img [src]="offer.image" [alt]="offer.title" class="w-full h-full object-cover">
            <div [class]="'absolute inset-0 p-6 flex justify-between items-start text-white ' + offer.bg_color">
              <h3 class="text-2xl font-bold leading-tight drop-shadow-md" [innerHTML]="offer.title"></h3>
              <i [class]="offer.icon + ' text-4xl opacity-80 drop-shadow-md'"></i>
            </div>
          </div>
          <div class="p-8 flex-grow">
            <h4 class="text-xl font-bold mb-4">{{ offer.subtitle }}</h4>
            <p class="text-gray-600 mb-6 text-sm leading-relaxed">
              {{ offer.description }}
            </p>
            <a [routerLink]="offer.link" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded transition-colors mt-auto text-center">{{ offer.button_text }}</a>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferCardsComponent {
  private http = inject(HttpClient);
  offers$: Observable<any[]> = this.http.get<any[]>('api/offers.php');
}
