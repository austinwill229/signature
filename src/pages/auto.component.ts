
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-auto',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white" *ngIf="settings() as s">
      <section class="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div class="md:w-1/2">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">Drive your dream car today</h1>
            <p class="text-xl opacity-80 mb-8 leading-relaxed">Competitive rates, flexible terms, and a decision in seconds. Whether you're buying new or used, we've got you covered.</p>
            <div class="bg-blue-600 inline-block p-6 rounded-lg mb-8">
              <span class="block text-xs uppercase font-bold tracking-widest opacity-80 mb-1">Rates as low as</span>
              <span class="text-4xl font-bold">5.49% <span class="text-xl font-normal">APR</span></span>
            </div>
            <div class="flex gap-4">
               <button class="bg-white text-slate-900 font-bold py-3 px-10 rounded-md hover:bg-gray-100">Get Prequalified</button>
            </div>
          </div>
          <div class="md:w-1/2">
             <i class="fa-solid fa-car-side text-[200px] opacity-20 transform -rotate-12"></i>
          </div>
        </div>
      </section>

      <section class="py-20 max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-24">
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
              <i class="fa-solid fa-clock text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Fast Decisions</h3>
            <p class="text-gray-500">Apply online in minutes and get an instant decision in most cases.</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
              <i class="fa-solid fa-calendar-days text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Flexible Terms</h3>
            <p class="text-gray-500">Choose from payment terms ranging from 24 to 84 months.</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
              <i class="fa-solid fa-percent text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Competitive Rates</h3>
            <p class="text-gray-500">Low fixed rates for new, used, or refinanced vehicles.</p>
          </div>
        </div>

        <div class="bg-blue-50 rounded-2xl p-12 overflow-hidden relative">
          <div class="max-w-2xl">
            <h2 class="text-3xl font-bold mb-6 text-blue-900">Refinance and save</h2>
            <p class="text-lg text-gray-700 mb-8 leading-relaxed">Lower your monthly payment or reduce your interest rate by moving your current auto loan to {{ s.site_name }}. Many customers save an average of $80 per month.</p>
            <button class="bg-blue-600 text-white font-bold py-3 px-10 rounded-md hover:bg-blue-700 shadow-lg">Check My Savings</button>
          </div>
          <div class="hidden lg:block absolute right-0 top-0 h-full w-1/3 opacity-10">
            <i class="fa-solid fa-sack-dollar text-[300px] mt-10"></i>
          </div>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutoComponent {
  private settingsService = inject(SettingsService);
  settings = this.settingsService.settings;
}
