
import { Component, OnInit, signal, inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-gray-100 p-8">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div class="bg-blue-600 px-8 py-6 flex justify-between items-center shadow-md">
            <h1 class="text-2xl font-bold text-white text-center">Admin Dashboard - Site Settings</h1>
            <button (click)="logout()" class="text-white font-semibold hover:underline">Logout</button>
          </div>
          
          <div class="p-8 space-y-8">
            <div *ngIf="successMessage()" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative shadow-sm" role="alert">
              <span class="block sm:inline">{{ successMessage() }}</span>
            </div>

            <!-- Branding Section -->
            <section class="space-y-6">
              <h2 class="text-xl font-bold text-gray-800 border-b pb-2">Branding & Identity</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-700">Site Name</label>
                  <input [(ngModel)]="settings.site_name" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. APEX BANK">
                </div>
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-700">Contact Email</label>
                  <input [(ngModel)]="settings.contact_email" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="support@bank.com">
                </div>
                
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-700">Site Logo</label>
                  <div class="flex items-center gap-4">
                    <img *ngIf="settings.logo_url" [src]="settings.logo_url" class="h-10 w-auto border rounded p-1">
                    <input type="file" (change)="onFileSelected($event, 'logo_url')" class="text-sm">
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-700">Site Favicon</label>
                  <div class="flex items-center gap-4">
                    <img *ngIf="settings.favicon_url" [src]="settings.favicon_url" class="h-8 w-8 border rounded p-1">
                    <input type="file" (change)="onFileSelected($event, 'favicon_url')" class="text-sm">
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-700">Contact Receiver Email</label>
                  <input [(ngModel)]="settings.contact_receiver_email" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="admin@bank.com">
                </div>

                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-700">Chaport App ID</label>
                  <input [(ngModel)]="settings.live_chat_property_id" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx">
                </div>
              </div>
            </section>

            <!-- Links Section -->
            <section class="space-y-6">
              <h2 class="text-xl font-bold text-gray-800 border-b pb-2">Navigation Links</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-700">Main Online Banking Link (Sign In)</label>
                  <input [(ngModel)]="settings.signin_link" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Sign In URL">
                </div>
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-700">Sign Up Link (Open Account)</label>
                  <input [(ngModel)]="settings.signup_link" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Sign Up URL">
                </div>
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-700">Learn More Link (Default Fallback)</label>
                  <input [(ngModel)]="settings.learn_more_link" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Learn More URL">
                </div>
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-700">Customer Service Link</label>
                  <input [(ngModel)]="settings.customer_service_link" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="/contact-us">
                </div>
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-700">Locations Link</label>
                  <input [(ngModel)]="settings.locations_link" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="/locations">
                </div>
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-700">Online Banking Page Link</label>
                  <input [(ngModel)]="settings.online_banking_link" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Sign In URL">
                </div>
              </div>
            </section>

            <!-- Header Alerts -->
            <section class="space-y-6">
              <h2 class="text-xl font-bold text-gray-800 border-b pb-2">Header Notifications</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-700">Header Alert Link</label>
                  <input [(ngModel)]="settings.header_alert_link" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="#">
                </div>
                <div class="space-y-2 md:col-span-1">
                  <label class="block text-sm font-bold text-gray-700">Header Alert Text</label>
                  <textarea [(ngModel)]="settings.header_alert_text" rows="2" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Alert message..."></textarea>
                </div>
              </div>
            </section>
            <!-- Email Configuration (SMTP) -->
            <section class="space-y-6">
              <h2 class="text-xl font-bold text-gray-800 border-b pb-2">Email Configuration (SMTP)</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-700">SMTP Host</label>
                  <input [(ngModel)]="settings.smtp_host" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="smtp.gmail.com">
                </div>
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-700">SMTP Port</label>
                  <input [(ngModel)]="settings.smtp_port" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="587">
                </div>
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-700">SMTP Username</label>
                  <input [(ngModel)]="settings.smtp_user" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="user@example.com">
                </div>
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-700">SMTP Password</label>
                  <input [(ngModel)]="settings.smtp_pass" type="password" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="********">
                </div>
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-700">Encryption</label>
                  <select [(ngModel)]="settings.smtp_encryption" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white">
                    <option value="tls">TLS</option>
                    <option value="ssl">SSL</option>
                    <option value="">None</option>
                  </select>
                </div>
              </div>
            </section>

            <!-- SEO & Metadata -->
            <section class="space-y-6">
              <h2 class="text-xl font-bold text-gray-800 border-b pb-2">SEO & Metadata</h2>
              <div class="grid grid-cols-1 gap-6">
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-700">Meta Description</label>
                  <textarea [(ngModel)]="settings.meta_description" rows="3" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Brief description of your bank..."></textarea>
                </div>
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-700">Meta Keywords</label>
                  <input [(ngModel)]="settings.meta_keywords" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="banking, finance, loans...">
                </div>
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-700">OG Image URL (Social Share)</label>
                  <div class="flex items-center gap-4">
                    <img *ngIf="settings.og_image" [src]="settings.og_image" class="h-16 w-auto border rounded p-1 object-cover">
                    <input type="file" (change)="onFileSelected($event, 'og_image')" class="text-sm">
                  </div>
                </div>

                <!-- Rich Snippets -->
                <div class="border-t pt-4 mt-2">
                  <h3 class="text-lg font-semibold text-gray-800 mb-4">Rich Snippets (Schema.org)</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                      <label class="block text-sm font-bold text-gray-700">Star Rating (0-5)</label>
                      <input [(ngModel)]="settings.seo_rating_value" type="number" step="0.1" max="5" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="4.9">
                    </div>
                    <div class="space-y-2">
                      <label class="block text-sm font-bold text-gray-700">Review Count</label>
                      <input [(ngModel)]="settings.seo_review_count" type="number" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="9758">
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Contact Information -->
            <section class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div class="p-6 border-b border-gray-100 bg-gray-50">
                <h2 class="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <i class="fa-solid fa-address-book text-blue-600"></i> Contact Information
                </h2>
              </div>
              <div class="p-6 space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="block text-sm font-bold text-gray-700">Bank Phone Number</label>
                    <input [(ngModel)]="settings.bank_phone" type="text" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="1-800-555-0199">
                  </div>
                  <div class="space-y-2">
                    <label class="block text-sm font-bold text-gray-700">Address Line 1</label>
                    <input [(ngModel)]="settings.bank_address_1" type="text" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="123 Financial District Blvd">
                  </div>
                  <div class="space-y-2">
                    <label class="block text-sm font-bold text-gray-700">Address Line 2</label>
                    <input [(ngModel)]="settings.bank_address_2" type="text" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="New York, NY 10005">
                  </div>
                </div>
              </div>
            </section>

            <!-- Custom Scripts -->
            <section class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div class="p-6 border-b border-gray-100 bg-gray-50">
                <h2 class="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <i class="fa-brands fa-js text-yellow-500"></i> Custom Scripts & Integrations
                </h2>
              </div>
              <div class="p-6 space-y-6">
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-700">Custom JavaScript (e.g., Translator)</label>
                  <p class="text-xs text-gray-500">Paste your script code here. It will be injected into the page footer.</p>
                  <textarea [(ngModel)]="settings.custom_js_script" rows="6" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 font-mono text-sm" placeholder="<script>...</script>"></textarea>
                </div>
              </div>
            </section>

            <div class="pt-6 border-t flex justify-end">
              <button (click)="saveSettings()" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-all shadow-md active:scale-95">
                Save All Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDashboardComponent implements OnInit {
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);

  settings: any = {
    site_name: '',
    online_banking_link: '',
    contact_email: '',
    customer_service_link: '',
    locations_link: '',
    header_alert_text: '',
    header_alert_link: '',
    signin_link: '',
    signup_link: '',
    learn_more_link: '',
    logo_url: '',
    favicon_url: '',
    contact_receiver_email: '',
    live_chat_property_id: '',
    smtp_host: '',
    smtp_port: '',
    smtp_user: '',
    smtp_pass: '',
    smtp_encryption: '',
    meta_description: '',
    meta_keywords: '',
    og_image: '',
    seo_rating_value: '',
    seo_review_count: '',
    bank_phone: '',
    bank_address_1: '',
    bank_address_2: '',
    custom_js_script: ''
  };

  successMessage = signal('');

  ngOnInit() {
    this.loadSettings();
  }

  loadSettings() {
    this.http.get('api/settings.php').subscribe((res: any) => {
      this.settings = { ...this.settings, ...res };
      this.cdr.markForCheck();
    });
  }

  onFileSelected(event: any, type: string) {
    const file: File = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      this.http.post('api/admin/upload_image.php', formData).subscribe({
        next: (res: any) => {
          if (res.success) {
            this.settings[type] = res.url;
            this.cdr.markForCheck();
          }
        },
        error: (err) => {
          alert('Failed to upload image');
        }
      });
    }
  }

  saveSettings() {
    this.http.post('api/admin/update_settings.php', this.settings).subscribe({
      next: (res: any) => {
        if (res && res.success) {
          this.successMessage.set('Settings updated successfully!');
          this.cdr.markForCheck();
          setTimeout(() => {
            this.successMessage.set('');
            this.cdr.markForCheck();
          }, 3000);
        }
      },
      error: (err) => {
        alert('Failed to update settings');
      }
    });
  }

  logout() {
    window.location.href = '/';
  }
}
