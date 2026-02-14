
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-investing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white" *ngIf="settings() as s">
      <section class="bg-gradient-to-br from-blue-950 to-blue-800 py-24 text-white">
        <div class="max-w-7xl mx-auto px-4 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
          <div class="md:w-2/3">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">Investing for your future</h1>
            <p class="text-xl opacity-80 mb-10 max-w-2xl leading-relaxed">Whether you want to trade on your own or have our experts manage it for you, {{ s.site_name }} Wealth Management gives you the tools to invest with confidence.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button class="bg-blue-600 text-white font-bold py-3 px-10 rounded-md hover:bg-blue-700 shadow-xl">Get Started</button>
              <button class="bg-white text-blue-950 font-bold py-3 px-10 rounded-md hover:bg-gray-100">See Portfolio Options</button>
            </div>
          </div>
          <div class="md:w-1/3 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
             <div class="text-sm font-bold uppercase opacity-60 mb-2">Featured Offer</div>
             <div class="text-3xl font-bold mb-4">Up to $1,200</div>
             <p class="text-sm opacity-80 mb-6 leading-relaxed">Open and fund a new {{ s.site_name }} Self-Directed Investing account to qualify for a cash bonus.</p>
             <a href="#" class="text-blue-400 font-bold text-sm hover:underline">Learn more <i class="fa-solid fa-chevron-right text-[10px]"></i></a>
          </div>
        </div>
      </section>

      <section class="py-24 max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div class="bg-gray-50 p-10 rounded-2xl border flex flex-col h-full">
            <div class="text-blue-600 text-4xl mb-6"><i class="fa-solid fa-user-gear"></i></div>
            <h2 class="text-2xl font-bold mb-4">Self-Directed Investing</h2>
            <p class="text-gray-600 mb-8 flex-grow leading-relaxed">An investing experience that puts you in control. Trade stocks, ETFs, and options commission-free on our award-winning platform.</p>
            <ul class="space-y-3 mb-10 text-sm">
              <li class="flex items-center gap-3"><i class="fa-solid fa-check text-green-600"></i> $0 Commission online trades</li>
              <li class="flex items-center gap-3"><i class="fa-solid fa-check text-green-600"></i> Powerful research tools</li>
              <li class="flex items-center gap-3"><i class="fa-solid fa-check text-green-600"></i> No account minimums to start</li>
            </ul>
            <button class="w-full bg-slate-900 text-white font-bold py-3 rounded-md hover:bg-slate-800">Explore Self-Directed</button>
          </div>

          <div class="bg-gray-50 p-10 rounded-2xl border flex flex-col h-full">
            <div class="text-blue-600 text-4xl mb-6"><i class="fa-solid fa-chart-line"></i></div>
            <h2 class="text-2xl font-bold mb-4">Managed Portfolios</h2>
            <p class="text-gray-600 mb-8 flex-grow leading-relaxed">Let our professional advisors build and manage a diversified portfolio based on your goals, risk tolerance, and timeline.</p>
            <ul class="space-y-3 mb-10 text-sm">
              <li class="flex items-center gap-3"><i class="fa-solid fa-check text-green-600"></i> Expert asset allocation</li>
              <li class="flex items-center gap-3"><i class="fa-solid fa-check text-green-600"></i> Automatic rebalancing</li>
              <li class="flex items-center gap-3"><i class="fa-solid fa-check text-green-600"></i> Ongoing professional oversight</li>
            </ul>
            <button class="w-full bg-slate-900 text-white font-bold py-3 rounded-md hover:bg-slate-800">Explore Managed</button>
          </div>
        </div>

        <div class="mt-24 text-center">
          <h2 class="text-3xl font-bold mb-8">Planning for retirement?</h2>
          <p class="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">Whether you're just starting your career or nearing retirement, we offer traditional IRAs, Roth IRAs, and rollover options to help you save tax-efficiently.</p>
          <div class="flex flex-wrap justify-center gap-12">
             <div class="text-center">
                <div class="text-3xl font-bold text-blue-900">Traditional IRA</div>
                <p class="text-sm text-gray-500 mt-2">Potential tax-deductible contributions</p>
             </div>
             <div class="text-center">
                <div class="text-3xl font-bold text-blue-900">Roth IRA</div>
                <p class="text-sm text-gray-500 mt-2">Tax-free withdrawals in retirement</p>
             </div>
          </div>
        </div>
      </section>

      <section class="bg-slate-100 py-12">
        <div class="max-w-7xl mx-auto px-4 text-[10px] text-gray-500 leading-relaxed uppercase space-y-4">
           <p><strong>INVESTMENT AND INSURANCE PRODUCTS ARE: NOT A DEPOSIT • NOT FDIC INSURED • NOT GUARANTEED BY THE BANK • MAY LOSE VALUE</strong></p>
           <p>Investing involves market risk, including possible loss of principal, and there is no guarantee that investment objectives will be achieved.</p>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvestingComponent {
  private settingsService = inject(SettingsService);
  settings = this.settingsService.settings;
}
