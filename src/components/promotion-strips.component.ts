
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-promotion-strips',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-12 bg-white" *ngIf="settings() as s">
      <div class="max-w-7xl mx-auto px-4 space-y-12 md:space-y-16">
        
        <!-- Student Offer -->
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
          <div class="w-full md:w-1/3 bg-blue-700 text-white p-10 md:p-12 text-center rounded-sm">
            <h2 class="text-4xl md:text-5xl font-bold">Enjoy</h2>
            <p class="text-6xl md:text-7xl font-bold mt-2">$150</p>
          </div>
          <div class="md:w-2/3">
            <h3 class="text-2xl md:text-3xl font-bold mb-4">College students: This offer is for you</h3>
            <p class="text-gray-600 mb-6 max-w-2xl leading-relaxed text-sm md:text-base">
              As a new {{ s.site_name }} checking customer, earn $150 when you open {{ s.site_name }} College Checking℠ and complete 10 qualifying transactions. <span class="font-bold">$0 Monthly Service Fee</span> while in school (5 years maximum). Ages 17-24.
            </p>
            <a [href]="s.signup_link || s.online_banking_link" class="apex-green text-center text-white font-bold py-2 px-8 rounded transition-colors w-full md:w-auto inline-block">Continue</a>
          </div>
        </div>

        <hr class="border-gray-100">

        <!-- Investing Offer -->
        <div class="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 text-center md:text-left">
          <div class="w-full md:w-1/2 bg-gray-50 border p-8 md:p-10 rounded-sm relative text-center">
             <div class="text-gray-400 text-xl line-through">$800</div>
             <div class="text-5xl md:text-6xl font-bold text-gray-800">$1,200</div>
             <div class="text-xl md:text-2xl text-gray-500 font-medium">cash bonus</div>
          </div>
          <div class="md:w-1/2">
            <h3 class="text-2xl md:text-3xl font-bold mb-4">Commission-free online trades – plus a bonus</h3>
            <p class="text-gray-600 mb-6 max-w-2xl leading-relaxed text-sm md:text-base">
              This is an invitation to get up to $1,200 when you open and fund an {{ s.site_name }} Self-Directed Investing account—an investing experience that puts you in control.
            </p>
            <a [href]="s.signup_link || s.online_banking_link" class="apex-green text-center text-white font-bold py-2 px-8 rounded transition-colors w-full md:w-auto inline-block">Continue</a>
          </div>
        </div>

        <hr class="border-gray-100">

        <!-- Auto Promo -->
        <div class="flex flex-col md:flex-row items-center gap-6 md:gap-12 py-4 md:py-8 text-center md:text-left">
          <div class="md:w-1/3 flex justify-center">
            <i class="fa-solid fa-car-side text-8xl md:text-[120px] text-blue-600 opacity-80"></i>
          </div>
          <div class="md:w-2/3">
            <h3 class="text-2xl md:text-3xl font-bold mb-4">Get prequalified in seconds with {{ s.site_name }} Auto</h3>
            <p class="text-gray-600 mb-6 max-w-2xl leading-relaxed text-base md:text-lg">
              Learn how much you can borrow with no impact on your credit score.
            </p>
            <a [href]="s.learn_more_link || s.online_banking_link" class="apex-green text-center text-white font-bold py-2 px-8 rounded transition-colors w-full md:w-auto inline-block">Get prequalified</a>
          </div>
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromotionStripsComponent {
  private settingsService = inject(SettingsService);
  settings = this.settingsService.settings;
}
