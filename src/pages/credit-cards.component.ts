
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-credit-cards',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-white" *ngIf="settings() as s">
      <section class="relative h-[400px] flex items-center">
        <img src="https://picsum.photos/id/180/1920/1080" class="absolute inset-0 w-full h-full object-cover" alt="Credit Cards">
        <div class="absolute inset-0 bg-blue-900/60"></div>
        <div class="max-w-7xl mx-auto px-4 relative z-10 text-white">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">Credit Cards</h1>
          <p class="text-xl opacity-90 max-w-2xl leading-relaxed">Choose the card that works for you. From cash back to premium travel rewards, find your perfect match today.</p>
        </div>
      </section>

      <section class="py-20 max-w-7xl mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 class="text-3xl font-bold text-gray-900">Featured Cards</h2>
            <p class="text-gray-500 mt-2">Explore our most popular rewards programs</p>
          </div>
          <div class="flex gap-4">
            <button class="px-6 py-2 border rounded-full text-sm font-semibold hover:bg-gray-50">All Cards</button>
            <button class="px-6 py-2 border rounded-full text-sm font-semibold hover:bg-gray-50">Travel</button>
            <button class="px-6 py-2 border rounded-full text-sm font-semibold hover:bg-gray-50">Cash Back</button>
          </div>
        </div>

        <div class="space-y-12">
          <!-- Card 1 -->
          <div class="flex flex-col md:flex-row border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
            <div class="md:w-1/3 bg-gray-100 p-8 flex items-center justify-center">
              <div class="relative w-64 h-40 bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl shadow-2xl p-6 text-white transform hover:rotate-2 transition-transform cursor-pointer">
                <div class="text-xl font-bold mb-4 italic uppercase">{{ s.site_name }}</div>
                <div class="text-[10px] tracking-widest opacity-70 mb-8 uppercase">Sapphire Preferred</div>
                <div class="flex justify-between items-end">
                  <div class="text-xs opacity-50 font-mono">**** **** **** 8821</div>
                  <i class="fa-brands fa-cc-visa text-3xl"></i>
                </div>
              </div>
            </div>
            <div class="md:w-2/3 p-8 md:p-12">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-2xl font-bold">{{ s.site_name }} Sapphire Preferred®</h3>
                <span class="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">Travel Rewards</span>
              </div>
              <p class="text-gray-600 mb-6 text-lg">Earn 60,000 bonus points after you spend $4,000 on purchases in the first 3 months from account opening. That's $750 toward travel when redeemed through {{ s.site_name }} Travel℠.</p>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8 border-t pt-8">
                <div>
                  <p class="text-xs text-gray-400 font-bold uppercase mb-1">Annual Fee</p>
                  <p class="text-lg font-bold">$95</p>
                </div>
                <div>
                  <p class="text-xs text-gray-400 font-bold uppercase mb-1">APR</p>
                  <p class="text-lg font-bold">21.49% - 28.49%</p>
                </div>
                <div>
                  <p class="text-xs text-gray-400 font-bold uppercase mb-1">Credit Level</p>
                  <p class="text-lg font-bold">Excellent</p>
                </div>
              </div>
              <div class="flex flex-col sm:flex-row gap-4">
                <button class="bg-blue-600 text-white font-bold py-3 px-10 rounded-md hover:bg-blue-700">Apply Now</button>
                <a routerLink="/credit-cards/compare" class="border-2 border-gray-200 text-gray-700 font-bold py-3 px-10 rounded-md hover:bg-gray-50 text-center">Compare</a>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="flex flex-col md:flex-row border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
            <div class="md:w-1/3 bg-gray-100 p-8 flex items-center justify-center">
              <div class="relative w-64 h-40 bg-gradient-to-br from-green-500 to-green-700 rounded-xl shadow-2xl p-6 text-white transform hover:-rotate-2 transition-transform cursor-pointer">
                <div class="text-xl font-bold mb-4 italic uppercase">{{ s.site_name }}</div>
                <div class="text-[10px] tracking-widest opacity-70 mb-8 uppercase">Freedom Unlimited</div>
                <div class="flex justify-between items-end">
                  <div class="text-xs opacity-50 font-mono">**** **** **** 4012</div>
                  <i class="fa-brands fa-cc-mastercard text-3xl"></i>
                </div>
              </div>
            </div>
            <div class="md:w-2/3 p-8 md:p-12">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-2xl font-bold">{{ s.site_name }} Freedom Unlimited®</h3>
                <span class="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold">Cash Back</span>
              </div>
              <p class="text-gray-600 mb-6 text-lg">Earn an extra 1.5% on everything you buy (on up to $20,000 spent in the first year) — worth up to $300 cash back.</p>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8 border-t pt-8">
                <div>
                  <p class="text-xs text-gray-400 font-bold uppercase mb-1">Annual Fee</p>
                  <p class="text-lg font-bold">$0</p>
                </div>
                <div>
                  <p class="text-xs text-gray-400 font-bold uppercase mb-1">Intro APR</p>
                  <p class="text-lg font-bold">0% for 15 months</p>
                </div>
                <div>
                  <p class="text-xs text-gray-400 font-bold uppercase mb-1">Credit Level</p>
                  <p class="text-lg font-bold">Good to Excellent</p>
                </div>
              </div>
              <div class="flex flex-col sm:flex-row gap-4">
                <button class="bg-blue-600 text-white font-bold py-3 px-10 rounded-md hover:bg-blue-700">Apply Now</button>
                <a routerLink="/credit-cards/compare" class="border-2 border-gray-200 text-gray-700 font-bold py-3 px-10 rounded-md hover:bg-gray-50 text-center">Compare</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-gray-50 py-20 border-t">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-8">Not sure which card is right?</h2>
          <p class="text-gray-600 mb-10 max-w-xl mx-auto">Answer a few questions and we'll recommend the best {{ s.site_name }} credit card for your spending habits and goals.</p>
          <a routerLink="/credit-cards/compare" class="bg-white border-2 border-blue-600 text-blue-600 font-bold py-3 px-12 rounded-md hover:bg-blue-50 transition-colors">Help Me Choose</a>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditCardsComponent {
  private settingsService = inject(SettingsService);
  settings = this.settingsService.settings;
}
