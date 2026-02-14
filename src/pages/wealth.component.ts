
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-wealth',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-white" *ngIf="settings() as s">
      <!-- Luxury Hero -->
      <section class="relative h-[600px] flex items-center">
        <img src="https://picsum.photos/id/102/1920/1080" class="absolute inset-0 w-full h-full object-cover" alt="Private Banking">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-transparent"></div>
        <div class="max-w-7xl mx-auto px-4 relative z-10 text-white">
          <div class="max-w-2xl">
            <h1 class="text-4xl md:text-6xl font-serif font-bold mb-6 italic">{{ s.site_name }} Private Banking</h1>
            <p class="text-xl opacity-90 mb-10 leading-relaxed font-light">Exceptional wealth management tailored to your unique legacy. We provide the personalized attention and exclusive access your financial life requires.</p>
            <a routerLink="/contact-advisor" class="bg-white text-blue-900 font-bold py-3 px-10 rounded-sm hover:bg-gray-100 transition-colors inline-block">Request a Consultation</a>
          </div>
        </div>
      </section>

      <!-- Benefits -->
      <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div class="text-center">
            <div class="text-blue-900 text-4xl mb-6"><i class="fa-solid fa-chess-king"></i></div>
            <h3 class="text-2xl font-bold mb-4">Dedicated Team</h3>
            <p class="text-gray-600 leading-relaxed">A personal advisor supported by a team of tax, trust, and estate specialists working solely for you.</p>
          </div>
          <div class="text-center">
            <div class="text-blue-900 text-4xl mb-6"><i class="fa-solid fa-gem"></i></div>
            <h3 class="text-2xl font-bold mb-4">Exclusive Access</h3>
            <p class="text-gray-600 leading-relaxed">Priority access to alternative investments, private equity, and bespoke credit solutions.</p>
          </div>
          <div class="text-center">
            <div class="text-blue-900 text-4xl mb-6"><i class="fa-solid fa-landmark"></i></div>
            <h3 class="text-2xl font-bold mb-4">Legacy Planning</h3>
            <p class="text-gray-600 leading-relaxed">Comprehensive strategies for generational wealth transfer and philanthropic impact.</p>
          </div>
        </div>
      </section>

      <!-- Lifestyle Section -->
      <section class="py-24 max-w-7xl mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="lg:w-1/2 order-2 lg:order-1">
            <h2 class="text-3xl font-bold mb-8">Managing your wealth is only the beginning</h2>
            <p class="text-gray-600 mb-8 text-lg leading-relaxed">We understand that wealth is about more than numbers—it's about the security of your family and the realization of your life's ambitions.</p>
            <div class="space-y-6">
              <div class="flex gap-4">
                <i class="fa-solid fa-circle-check text-blue-900 mt-1"></i>
                <div>
                  <h4 class="font-bold">Bespoke Portfolios</h4>
                  <p class="text-sm text-gray-500">Custom-built around your specific risk appetite and time horizon.</p>
                </div>
              </div>
              <div class="flex gap-4">
                <i class="fa-solid fa-circle-check text-blue-900 mt-1"></i>
                <div>
                  <h4 class="font-bold">Family Office Services</h4>
                  <p class="text-sm text-gray-500">Coordinated management for multifaceted financial structures.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 order-1 lg:order-2">
            <img src="https://picsum.photos/id/369/800/600" class="rounded-lg shadow-xl" alt="Estate Planning">
          </div>
        </div>
      </section>

      <!-- Disclaimer Footer -->
      <section class="bg-gray-100 py-12">
        <div class="max-w-7xl mx-auto px-4 text-[10px] text-gray-500 leading-relaxed uppercase space-y-4">
           <p><strong>INVESTMENT AND INSURANCE PRODUCTS ARE: NOT A DEPOSIT • NOT FDIC INSURED • NOT GUARANTEED BY THE BANK • MAY LOSE VALUE</strong></p>
           <p>{{ s.site_name }} Wealth Management is a brand name used by {{ s.site_name }} Financial Group, Inc. and its affiliates. Wealth management services are provided by {{ s.site_name }} Bank, N.A. through its trust and private banking departments.</p>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WealthComponent {
  private settingsService = inject(SettingsService);
  settings = this.settingsService.settings;
}
