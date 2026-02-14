
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quick-links',
  imports: [RouterLink],
  template: `
    <section class="py-12 md:py-16 bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-2xl md:text-4xl font-medium text-gray-800 mb-8 md:mb-12">Choose what's right for you</h2>
        
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
          @for (link of links; track link.label) {
            <a [routerLink]="link.path" class="group flex flex-col items-center p-2">
              <div class="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-4 flex items-center justify-center transition-transform group-hover:scale-110">
                <i [class]="link.icon + ' text-2xl md:text-3xl text-gray-600 group-hover:text-blue-600'"></i>
              </div>
              <span class="text-blue-600 font-medium text-sm md:text-base group-hover:underline">{{link.label}}</span>
            </a>
          }
        </div>

        <!-- Carousel Indicators Mock -->
        <div class="flex justify-center items-center mt-8 md:mt-12 space-x-4">
          <button class="text-blue-600"><i class="fa-solid fa-chevron-left"></i></button>
          <div class="flex space-x-2">
            <span class="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            <span class="w-2.5 h-2.5 rounded-full border border-gray-400"></span>
          </div>
          <button class="text-blue-600"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuickLinksComponent {
  links = [
    { label: 'Business', icon: 'fa-solid fa-briefcase', path: '/business' },
    { label: 'Credit cards', icon: 'fa-regular fa-credit-card', path: '/credit-cards' },
    { label: 'Checking', icon: 'fa-solid fa-money-check', path: '/checking' },
    { label: 'Investing', icon: 'fa-solid fa-chart-line', path: '/investing' },
    { label: 'Savings', icon: 'fa-solid fa-piggy-bank', path: '/savings' },
    { label: 'Home loans', icon: 'fa-solid fa-house', path: '/mortgage' }
  ];
}
