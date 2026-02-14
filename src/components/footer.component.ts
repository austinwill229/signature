import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-gray-100 mt-20" *ngIf="settings() as s">
      <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-200 pb-12">
          <div class="space-y-4">
            <h4 class="font-bold text-gray-900">About {{ s.site_name }}</h4>
            <ul class="space-y-2 text-sm text-gray-600">
              <li><a routerLink="/about" class="hover:underline">About us</a></li>
              <li><a href="#" class="hover:underline">Careers</a></li>
              <li><a href="#" class="hover:underline">Inclusion \u0026 Diversity</a></li>
              <li><a href="#" class="hover:underline">Media Center</a></li>
            </ul>
          </div>
          <div class="space-y-4">
            <h4 class="font-bold text-gray-900">Help \u0026 Support</h4>
            <ul class="space-y-2 text-sm text-gray-600">
              <li><a [href]="s.customer_service_link" class="hover:underline">Contact us</a></li>
              <li><a routerLink="/security" class="hover:underline">Security Center</a></li>
              <li><a routerLink="/privacy" class="hover:underline">Privacy Center</a></li>
              <li><a href="#" class="hover:underline">Accessibility</a></li>
            </ul>
          </div>
          <div class="space-y-4">
            <h4 class="font-bold text-gray-900">Popular Links</h4>
            <ul class="space-y-2 text-sm text-gray-600">
              <li><a href="#" class="hover:underline">ATM \u0026 Branch</a></li>
              <li><a routerLink="/credit-cards" class="hover:underline">Credit Cards</a></li>
              <li><a routerLink="/checking" class="hover:underline">Checking</a></li>
              <li><a routerLink="/savings" class="hover:underline">Savings</a></li>
            </ul>
          </div>
          <div class="space-y-4">
            <h4 class="font-bold text-gray-900">Legal</h4>
            <ul class="space-y-2 text-sm text-gray-600">
              <li><a routerLink="/privacy" class="hover:underline">Privacy Statement</a></li>
              <li><a routerLink="/terms" class="hover:underline">Terms of Use</a></li>
              <li><a routerLink="/security" class="hover:underline">Security Information</a></li>
              <li><a href="#" class="hover:underline">Sitemap</a></li>
            </ul>
          </div>
        </div>

        <div class="py-12 space-y-6 text-xs text-gray-500">
          <div class="flex flex-wrap gap-4">
            <p>Member FDIC</p>
            <p>Equal Housing Lender <i class="fa-solid fa-house"></i></p>
          </div>
          
          <p class="leading-relaxed">
            Investment and insurance products are not FDIC insured, are not bank guaranteed, may lose value, and are not offered by {{ s.site_name }}. 
            "{{ s.site_name }}," the {{ s.site_name }} Symbol, and other related marks are trademarks of {{ s.site_name }}, N.A. 
            {{ s.site_name }}, N.A. is a wholly-owned subsidiary of {{ s.site_name }} Financial Group Inc.
          </p>

          <p>
            Deposit products provided by {{ s.site_name }}, N.A. Member FDIC.
          </p>

          <div class="flex flex-wrap gap-6 pt-6 border-t border-gray-200">
            <a routerLink="/about" class="hover:underline">About {{ s.site_name }}</a>
            <a routerLink="/privacy" class="hover:underline">Privacy</a>
            <a routerLink="/security" class="hover:underline">Security</a>
            <a routerLink="/terms" class="hover:underline">Terms of Use</a>
            <a [href]="'mailto:' + s.contact_email" class="hover:underline">Contact Us</a>
          </div>

          <p class="pt-4 italic">
            © {{ currentYear }} {{ s.site_name }} Financial Group Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  private settingsService = inject(SettingsService);
  settings = this.settingsService.settings;
  currentYear = new Date().getFullYear();
}
