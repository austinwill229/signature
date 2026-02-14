import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { SettingsService } from '../services/settings.service';

@Component({
    selector: 'app-security',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="bg-gray-50 min-h-screen" *ngIf="settings() as s">
      <!-- Header -->
      <section class="bg-gray-900 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
            <i class="fa-solid fa-lock"></i>
          </div>
          <h1 class="text-3xl md:text-5xl font-bold mb-4">Security Center</h1>
          <p class="text-xl text-gray-400 max-w-2xl mx-auto">How we protect you, your money, and your data.</p>
        </div>
      </section>

      <div class="max-w-7xl mx-auto px-4 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <i class="fa-solid fa-shield-virus text-green-500"></i> Encryption Technology
            </h3>
            <p class="text-gray-600">
              We use 256-bit AES encryption to protect your data during transmission and storage. This is the same level of security used by the military and government agencies.
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <i class="fa-solid fa-user-shield text-blue-500"></i> Fraud Monitoring
            </h3>
            <p class="text-gray-600">
              Our systems monitor your accounts 24/7 for suspicious activity. If we detect something unusual, we'll notify you immediately via text, email, or phone.
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <i class="fa-solid fa-mobile-screen-button text-purple-500"></i> Multi-Factor Authentication
            </h3>
            <p class="text-gray-600">
              We offer biometric login (Face ID, Touch ID) and two-step verification to ensure that only you can access your accounts.
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <i class="fa-solid fa-circle-check text-teal-500"></i> Zero Liability
            </h3>
            <p class="text-gray-600">
              You're not responsible for unauthorized transactions made with your debit or credit card if you report them promptly.
            </p>
          </div>
        </div>

        <!-- Tips -->
        <div class="bg-blue-50 rounded-2xl p-8 md:p-12">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Protect Yourself Online</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 class="font-bold text-gray-900 mb-2">Create Strong Passwords</h4>
              <p class="text-sm text-gray-600">Use a unique combination of letters, numbers, and symbols. Never reuse passwords across sites.</p>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 mb-2">Spot Phishing</h4>
              <p class="text-sm text-gray-600">We will never ask for your password or PIN via email or text. Be wary of urgent requests for info.</p>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 mb-2">Update Software</h4>
              <p class="text-sm text-gray-600">Keep your browser, operating system, and antivirus software up to date to patch vulnerabilities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecurityComponent {
    private settingsService = inject(SettingsService);
    private titleService = inject(Title);
    private metaService = inject(Meta);
    settings = this.settingsService.settings;

    constructor() {
        this.titleService.setTitle('Security Center | Signature Trust Bank');
        this.metaService.updateTag({ name: 'description', content: 'Learn about our advanced security measures including encryption, fraud monitoring, and zero liability protection.' });
    }
}
