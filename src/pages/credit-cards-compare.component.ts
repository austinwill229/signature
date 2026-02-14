
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-credit-cards-compare',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-white min-h-screen" *ngIf="settings() as s">
      <!-- Breadcrumbs -->
      <nav class="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500">
        <a routerLink="/credit-cards" class="hover:text-blue-600">Credit Cards</a>
        <span class="mx-2">/</span>
        <span class="text-gray-900 font-medium">Compare Cards</span>
      </nav>

      <section class="py-10 max-w-7xl mx-auto px-4">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Compare our top credit cards</h1>

        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b">
                <th class="py-6 px-4 bg-gray-50 text-left align-top w-1/4">
                  <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Features</p>
                  <p class="text-sm text-gray-600 font-normal">Find the right card for your lifestyle and spending habits.</p>
                </th>
                
                <!-- Card Column 1 -->
                <th class="py-6 px-8 text-center align-top min-w-[280px]">
                  <div class="w-48 h-32 bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg mx-auto mb-4 shadow-lg p-4 text-white text-left relative overflow-hidden">
                    <div class="text-xs font-bold italic">{{ s.site_name }}</div>
                    <div class="mt-4 text-[10px] tracking-tighter opacity-70 uppercase">SAPPHIRE PREFERRED®</div>
                    <div class="absolute bottom-4 right-4"><i class="fa-brands fa-cc-visa text-2xl opacity-50"></i></div>
                  </div>
                  <h3 class="font-bold text-lg mb-2">Sapphire Preferred®</h3>
                  <button class="bg-blue-600 text-white text-sm font-bold py-2 px-6 rounded hover:bg-blue-700 w-full mb-2">Apply Now</button>
                </th>

                <!-- Card Column 2 -->
                <th class="py-6 px-8 text-center align-top min-w-[280px]">
                  <div class="w-48 h-32 bg-gradient-to-br from-green-500 to-green-700 rounded-lg mx-auto mb-4 shadow-lg p-4 text-white text-left relative overflow-hidden">
                    <div class="text-xs font-bold italic">{{ s.site_name }}</div>
                    <div class="mt-4 text-[10px] tracking-tighter opacity-70 uppercase">FREEDOM UNLIMITED®</div>
                    <div class="absolute bottom-4 right-4"><i class="fa-brands fa-cc-mastercard text-2xl opacity-50"></i></div>
                  </div>
                  <h3 class="font-bold text-lg mb-2">Freedom Unlimited®</h3>
                  <button class="bg-blue-600 text-white text-sm font-bold py-2 px-6 rounded hover:bg-blue-700 w-full mb-2">Apply Now</button>
                </th>

                <!-- Card Column 3 -->
                <th class="py-6 px-8 text-center align-top min-w-[280px]">
                  <div class="w-48 h-32 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg mx-auto mb-4 shadow-lg p-4 text-white text-left relative overflow-hidden">
                    <div class="text-xs font-bold italic">{{ s.site_name }}</div>
                    <div class="mt-4 text-[10px] tracking-tighter opacity-70 uppercase">SLATE EDGE℠</div>
                    <div class="absolute bottom-4 right-4"><i class="fa-brands fa-cc-visa text-2xl opacity-50"></i></div>
                  </div>
                  <h3 class="font-bold text-lg mb-2">Slate Edge℠</h3>
                  <button class="bg-blue-600 text-white text-sm font-bold py-2 px-6 rounded hover:bg-blue-700 w-full mb-2">Apply Now</button>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y text-sm">
              <!-- Row: Best For -->
              <tr>
                <td class="py-6 px-4 font-bold bg-gray-50 text-gray-700">Best For</td>
                <td class="py-6 px-8 text-center font-medium">Travel & Dining</td>
                <td class="py-6 px-8 text-center font-medium">Everyday Cash Back</td>
                <td class="py-6 px-8 text-center font-medium">Building Credit</td>
              </tr>
              <!-- Row: Rewards -->
              <tr>
                <td class="py-6 px-4 font-bold bg-gray-50 text-gray-700">Rewards Rate</td>
                <td class="py-6 px-8 text-center">5x on Travel, 3x on Dining, 2x on other Travel</td>
                <td class="py-6 px-8 text-center">Unlimited 1.5% on everything</td>
                <td class="py-6 px-8 text-center">N/A - Focused on lower rates</td>
              </tr>
              <!-- Row: Welcome Bonus -->
              <tr>
                <td class="py-6 px-4 font-bold bg-gray-50 text-gray-700">Welcome Bonus</td>
                <td class="py-6 px-8 text-center text-blue-700 font-bold">60,000 Points ($750 value)</td>
                <td class="py-6 px-8 text-center text-blue-700 font-bold">$200 Bonus</td>
                <td class="py-6 px-8 text-center">Automatic APR review</td>
              </tr>
              <!-- Row: Annual Fee -->
              <tr>
                <td class="py-6 px-4 font-bold bg-gray-50 text-gray-700">Annual Fee</td>
                <td class="py-6 px-8 text-center font-bold">$95</td>
                <td class="py-6 px-8 text-center font-bold">$0</td>
                <td class="py-6 px-8 text-center font-bold">$0</td>
              </tr>
              <!-- Row: Intro APR -->
              <tr>
                <td class="py-6 px-4 font-bold bg-gray-50 text-gray-700">Intro APR</td>
                <td class="py-6 px-8 text-center">N/A</td>
                <td class="py-6 px-8 text-center">0% for 15 months on purchases</td>
                <td class="py-6 px-8 text-center">0% for 18 months on balance transfers</td>
              </tr>
              <!-- Row: Credit Needed -->
              <tr>
                <td class="py-6 px-4 font-bold bg-gray-50 text-gray-700">Credit Needed</td>
                <td class="py-6 px-8 text-center">Excellent</td>
                <td class="py-6 px-8 text-center">Good to Excellent</td>
                <td class="py-6 px-8 text-center">Fair to Good</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="bg-slate-50 py-16 border-t border-b">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h2 class="text-2xl font-bold mb-4">Still not sure?</h2>
          <p class="text-gray-600 mb-8">We'll help you find the best credit card based on your spending and rewards goals.</p>
          <button class="bg-white border-2 border-blue-600 text-blue-600 font-bold py-3 px-10 rounded hover:bg-blue-50">Help me choose</button>
        </div>
      </section>
      
      <!-- Disclaimers -->
      <section class="py-12 max-w-7xl mx-auto px-4">
        <p class="text-[10px] text-gray-400 leading-relaxed uppercase">
          Pricing and Rewards: The information above is a summary of certain terms and is subject to change. Please see the cardmember agreement for complete details on fees, interest rates, and reward programs. Points values are estimates based on travel redemptions.
        </p>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditCardsCompareComponent {
  private settingsService = inject(SettingsService);
  settings = this.settingsService.settings;
}
