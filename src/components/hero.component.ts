
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden" *ngIf="settings() as s">
      <!-- Background Image with Gradient Overlay -->
      <div class="absolute inset-0 z-0">
        <img src="https://picsum.photos/id/442/1920/1080" alt="Bank interior" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/80 to-blue-900/40 md:to-transparent"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row justify-between items-center relative z-10 py-12">
        <!-- Promo Content -->
        <div class="md:w-1/2 mb-12 md:mb-0 text-white text-center md:text-left">
          <div class="flex items-baseline justify-center md:justify-start space-x-4">
            <span class="text-xl md:text-2xl font-light">Enjoy</span>
            <h2 class="text-5xl md:text-7xl font-bold">$500</h2>
          </div>
          <h3 class="text-3xl md:text-4xl font-bold mt-4 leading-tight">
            New {{ s.site_name }} Premier checking customers
          </h3>
          <p class="text-base md:text-lg mt-4 max-w-md mx-auto md:mx-0 opacity-90">
            Open an {{ s.site_name }} Premier Checking℠ account with qualifying activities and start banking better today.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <a [href]="s.signup_link || s.online_banking_link" class="apex-green text-white px-8 py-3 rounded-md font-bold transition-all transform hover:scale-105 text-center">
              Open an account
            </a>
            <a [href]="s.learn_more_link || s.online_banking_link" class="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-bold transition-all hover:bg-white hover:text-blue-900 text-center">
              Learn more
            </a>
          </div>
        </div>

        <!-- Access Card (Simplified) -->
        <div class="md:w-[400px] w-full bg-white rounded-lg shadow-2xl p-6 md:p-8 text-gray-800">
          <h4 class="text-xl md:text-2xl font-medium mb-6 text-center md:text-left">Access your account</h4>
          
          <div class="space-y-4">
            <a [href]="s.signin_link || s.online_banking_link" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-md shadow-md transition-all flex items-center justify-center gap-2">
              <i class="fa-solid fa-lock text-sm opacity-70"></i>
              Sign In
            </a>
            
            <a [href]="s.signup_link || s.online_banking_link" class="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 rounded-md transition-colors text-center inline-block">
              Register / Sign Up
            </a>
          </div>

          <div class="mt-8 pt-6 border-t border-gray-100 space-y-4 text-sm font-semibold">
            <a [href]="s.online_banking_link" class="flex justify-between items-center text-blue-600 hover:underline group">
              <span>Forgot username or password?</span>
              <i class="fa-solid fa-chevron-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a [href]="s.online_banking_link" class="flex justify-between items-center text-blue-600 hover:underline group">
              <span>Security Center</span>
              <i class="fa-solid fa-chevron-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a [href]="s.signup_link || s.online_banking_link" class="flex justify-between items-center text-blue-600 hover:underline group">
              <span>Not Enrolled? Sign Up Now.</span>
              <i class="fa-solid fa-chevron-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
          
          <div class="mt-6 p-4 bg-gray-50 rounded text-xs text-gray-500 leading-relaxed">
            Protect yourself from fraud. {{ s.site_name }} will never ask for your password in an email or text.
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  private settingsService = inject(SettingsService);
  settings = this.settingsService.settings;
}
