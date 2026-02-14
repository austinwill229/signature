
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-checking',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white" *ngIf="settings() as s">
      <!-- Page Header -->
      <section class="bg-gray-50 py-16 border-b">
        <div class="max-w-7xl mx-auto px-4">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Checking Accounts</h1>
          <p class="text-xl text-gray-600 max-w-3xl">Find the checking account that fits your lifestyle. From rewards to simplicity, {{ s.site_name }} has you covered.</p>
        </div>
      </section>

      <!-- Account Tiers -->
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Total Checking -->
            <div class="border rounded-lg p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
              <h2 class="text-2xl font-bold mb-4">{{ s.site_name }} Total Checking®</h2>
              <p class="text-gray-600 mb-8 flex-grow">Our most popular account. Easy to manage and perfect for everyday banking.</p>
              <div class="mb-8">
                <span class="text-3xl font-bold">$12</span>
                <span class="text-gray-500 text-sm ml-1">Monthly service fee</span>
                <p class="text-xs text-blue-600 mt-2 font-semibold">Multiple ways to waive fee</p>
              </div>
              <ul class="space-y-4 mb-10 text-sm">
                <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-600 mt-1"></i> 15,000+ {{ s.site_name }} ATMs</li>
                <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-600 mt-1"></i> Mobile check deposit</li>
                <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-600 mt-1"></i> Send money with Zelle®</li>
              </ul>
              <a [href]="s.signup_link || s.online_banking_link" class="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition-colors text-center inline-block">Open Now</a>
            </div>

            <!-- Premier Plus -->
            <div class="border-2 border-blue-600 rounded-lg p-8 flex flex-col h-full shadow-lg relative">
              <span class="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-xs font-bold rounded-bl-lg uppercase">Best Value</span>
              <h2 class="text-2xl font-bold mb-4">Premier Plus℠</h2>
              <p class="text-gray-600 mb-8 flex-grow">Earn interest and enjoy more benefits with our premium checking solution.</p>
              <div class="mb-8">
                <span class="text-3xl font-bold">$25</span>
                <span class="text-gray-500 text-sm ml-1">Monthly service fee</span>
                <p class="text-xs text-blue-600 mt-2 font-semibold">Free with $15,000 balance</p>
              </div>
              <ul class="space-y-4 mb-10 text-sm">
                <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-600 mt-1"></i> No fee for {{ s.site_name }} design checks</li>
                <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-600 mt-1"></i> Earn interest on balances</li>
                <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-600 mt-1"></i> Up to 4 non-{{ s.site_name }} ATM fee waivers</li>
              </ul>
              <a [href]="s.signup_link || s.online_banking_link" class="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition-colors text-center inline-block">Open Now</a>
            </div>

            <!-- Sapphire -->
            <div class="border rounded-lg p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
              <h2 class="text-2xl font-bold mb-4">{{ s.site_name }} Sapphire℠</h2>
              <p class="text-gray-600 mb-8 flex-grow">Exclusively for our high-net-worth clients with dedicated priority service.</p>
              <div class="mb-8">
                <span class="text-3xl font-bold">$0</span>
                <span class="text-gray-500 text-sm ml-1">Monthly service fee</span>
                <p class="text-xs text-gray-400 mt-2 italic">With $75,000+ investment balance</p>
              </div>
              <ul class="space-y-4 mb-10 text-sm">
                <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-600 mt-1"></i> No fees for wire transfers</li>
                <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-600 mt-1"></i> Priority 24/7 service access</li>
                <li class="flex items-start gap-3"><i class="fa-solid fa-check text-green-600 mt-1"></i> Worldwide ATM fee refunds</li>
              </ul>
              <a [href]="s.learn_more_link || s.online_banking_link" class="w-full border-2 border-blue-600 text-blue-600 font-bold py-3 rounded-md hover:bg-blue-50 transition-colors text-center inline-block">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Banner -->
      <section class="bg-blue-900 py-16 text-white text-center">
        <div class="max-w-4xl mx-auto px-4">
          <h2 class="text-3xl font-bold mb-6">Switching is easier than you think</h2>
          <p class="text-lg opacity-80 mb-8">Use our digital switch kit to move your direct deposits and automatic payments in just a few clicks.</p>
          <a [href]="s.signup_link || s.online_banking_link" class="inline-block bg-white text-blue-900 font-bold px-10 py-3 rounded-md hover:bg-gray-100">Start Switching</a>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckingComponent {
  private settingsService = inject(SettingsService);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  settings = this.settingsService.settings;

  constructor() {
    this.titleService.setTitle('Checking Accounts | Signature Trust Bank');
    this.metaService.updateTag({ name: 'description', content: 'Explore our checking account options. No monthly fees, free ATMs, and secure mobile banking with Signature Trust Bank.' });
  }
}
