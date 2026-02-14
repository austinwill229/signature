import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { SettingsService } from '../services/settings.service';

@Component({
    selector: 'app-terms',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="bg-white min-h-screen" *ngIf="settings() as s">
      <div class="max-w-4xl mx-auto px-4 py-16">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Terms of Use</h1>
        <p class="text-gray-500 mb-12">Last Updated: {{ lastUpdated | date:'longDate' }}</p>

        <div class="prose prose-blue max-w-none text-gray-600">
          <p class="lead text-lg">
            Please read these Terms of Use ("Terms", "Terms of Use") carefully before using the {{ s.site_name }} website.
          </p>
          
          <h3 class="text-xl font-bold text-gray-800 mt-8 mb-4">Conditions of Use</h3>
          <p>
            By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to leave the website accordingly. {{ s.site_name }} only grants use and access of this website, its products, and its services to those who have accepted its terms.
          </p>

          <h3 class="text-xl font-bold text-gray-800 mt-8 mb-4">Intellectual Property</h3>
          <p>
            You agree that all materials, products, and services provided on this website are the property of {{ s.site_name }}, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute the {{ s.site_name }}'s intellectual property in any way, including electronic, digital, or new trademark registrations.
          </p>

          <h3 class="text-xl font-bold text-gray-800 mt-8 mb-4">User Accounts</h3>
          <p>
            As a user of this website, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information. You are also responsible for all activities that occur under your account or password.
          </p>

          <h3 class="text-xl font-bold text-gray-800 mt-8 mb-4">Indemnification</h3>
          <p>
            You agree to indemnify {{ s.site_name }} and its affiliates and hold {{ s.site_name }} harmless against legal claims and demands that may arise from your use or misuse of our services. We reserve the right to select our own legal counsel.
          </p>

          <h3 class="text-xl font-bold text-gray-800 mt-8 mb-4">Limitation on Liability</h3>
          <p>
            {{ s.site_name }} is not liable for any damages that may occur to you as a result of your misuse of our website. {{ s.site_name }} reserves the right to edit, modify, and change this Agreement any time.
          </p>
        </div>
      </div>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TermsComponent {
    private settingsService = inject(SettingsService);
    private titleService = inject(Title);
    private metaService = inject(Meta);
    settings = this.settingsService.settings;
    lastUpdated = new Date();

    constructor() {
        this.titleService.setTitle('Terms of Use | Signature Trust Bank');
        this.metaService.updateTag({ name: 'description', content: 'Review the Terms of Use for accessing and using Signature Trust Bank services and digital platforms.' });
    }
}
