import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { SettingsService } from '../services/settings.service';

@Component({
    selector: 'app-privacy',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="bg-white min-h-screen" *ngIf="settings() as s">
      <div class="max-w-4xl mx-auto px-4 py-16">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p class="text-gray-500 mb-12">Last Updated: {{ lastUpdated | date:'longDate' }}</p>

        <div class="prose prose-blue max-w-none text-gray-600">
          <p class="lead text-lg">
            At {{ s.site_name }}, maintaining the trust and confidence of our clients is a high priority. That is why we want you to understand how we protect your privacy when we collect and use information about you, and the steps that we take to safeguard that information.
          </p>

          <h3 class="text-xl font-bold text-gray-800 mt-8 mb-4">Information We Collect</h3>
          <p>
            We may collect non-public personal information about you from the following sources:
          </p>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li>Information we receive from you on applications or other forms.</li>
            <li>Information about your transactions with us or others.</li>
            <li>Information we receive from a consumer reporting agency.</li>
          </ul>

          <h3 class="text-xl font-bold text-gray-800 mt-8 mb-4">Information We Disclose</h3>
          <p>
            We do not disclose any non-public personal information about our customers or former customers to anyone, except as permitted by law. We may disclose the information we collect, as described above, to companies that perform marketing services on our behalf or to other financial institutions with whom we have joint marketing agreements.
          </p>

          <h3 class="text-xl font-bold text-gray-800 mt-8 mb-4">Security of Information</h3>
          <p>
            We restrict access to your personal and account information to those employees who need to know that information to provide products or services to you. We maintain physical, electronic, and procedural safeguards that comply with federal standards to guard your non-public personal information.
          </p>

          <h3 class="text-xl font-bold text-gray-800 mt-8 mb-4">Changes to this Policy</h3>
          <p>
            {{ s.site_name }} reserves the right to amend this privacy policy at any time. We will provide existing customers with a new notice if there are any changes to our privacy practices.
          </p>

          <div class="bg-gray-50 p-6 rounded-lg mt-12 border border-gray-100">
            <h4 class="font-bold text-gray-800 mb-2">Questions?</h4>
            <p class="text-sm">
              If you have questions about this privacy policy, please contact us at 
              <a [href]="'mailto:' + s.contact_email" class="text-blue-600 hover:underline">{{ s.contact_email || 'privacy@signaturetrust.com' }}</a>
              or call us at {{ s.bank_phone || '1-800-555-0199' }}.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivacyComponent {
    private settingsService = inject(SettingsService);
    private titleService = inject(Title);
    private metaService = inject(Meta);
    settings = this.settingsService.settings;
    lastUpdated = new Date();

    constructor() {
        this.titleService.setTitle('Privacy Policy | Signature Trust Bank');
        this.metaService.updateTag({ name: 'description', content: 'Our commitment to protecting your personal and financial information. Read the full Privacy Policy.' });
    }
}
