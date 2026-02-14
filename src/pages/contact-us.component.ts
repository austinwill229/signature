
import { Component, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  template: `
    <div class="bg-gray-50 min-h-screen" *ngIf="settings() as s">
      <!-- Contact Hero -->
      <section class="bg-white py-16 border-b">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Contact Us</h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto font-light">We're here to help with your banking needs 24 hours a day, 7 days a week.</p>
        </div>
      </section>

      <div class="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Main Contact Form -->
        <div class="lg:col-span-2 space-y-12">
          <div class="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
            <h2 class="text-2xl font-bold mb-8 text-gray-800">Send us a message</h2>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="flex flex-col gap-2">
                <label class="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                <input formControlName="name" type="text" class="border border-gray-200 rounded-md p-3 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white transition-all" placeholder="John Doe">
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                <input formControlName="email" type="email" class="border border-gray-200 rounded-md p-3 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white transition-all" placeholder="john@example.com">
              </div>
              <div class="flex flex-col gap-2 md:col-span-2">
                <label class="text-xs font-bold text-gray-500 uppercase tracking-wider">Inquiry Topic</label>
                <select formControlName="topic" class="border border-gray-200 rounded-md p-3 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white transition-all cursor-pointer">
                  <option value="general">General Inquiry</option>
                  <option value="checking">Checking & Savings</option>
                  <option value="credit-card">Credit Card Support</option>
                  <option value="tech">Technical Issues</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="flex flex-col gap-2 md:col-span-2">
                <label class="text-xs font-bold text-gray-500 uppercase tracking-wider">Your Message</label>
                <textarea formControlName="message" rows="5" class="border border-gray-200 rounded-md p-3 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white transition-all resize-none" placeholder="How can we help?"></textarea>
              </div>
              <div class="md:col-span-2 pt-4">
                <button 
                  type="submit" 
                  [disabled]="submitted()"
                  class="bg-blue-600 text-white font-bold py-4 px-12 rounded-md hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl disabled:bg-gray-400"
                >
                  {{ submitted() ? 'Message Sent!' : 'Send Message' }}
                </button>
                @if (submitted()) {
                  <div class="mt-6 p-4 bg-green-50 text-green-700 rounded-md border border-green-100 flex items-center gap-3">
                    <i class="fa-solid fa-circle-check"></i>
                    <span>Thank you! We've received your inquiry and will respond within 24 hours.</span>
                  </div>
                }
              </div>
            </form>
          </div>

          <!-- FAQ Quick Links -->
          <div class="pt-4">
            <h2 class="text-2xl font-bold mb-8 text-gray-800">Common Questions</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="#" class="p-5 bg-white border border-gray-100 rounded-lg flex justify-between items-center hover:shadow-md transition-all group">
                <span class="font-medium text-gray-700 group-hover:text-blue-600">How do I reset my password?</span>
                <i class="fa-solid fa-chevron-right text-xs text-blue-600 group-hover:translate-x-1 transition-transform"></i>
              </a>
              <a href="#" class="p-5 bg-white border border-gray-100 rounded-lg flex justify-between items-center hover:shadow-md transition-all group">
                <span class="font-medium text-gray-700 group-hover:text-blue-600">Where is my tax document?</span>
                <i class="fa-solid fa-chevron-right text-xs text-blue-600 group-hover:translate-x-1 transition-transform"></i>
              </a>
              <a href="#" class="p-5 bg-white border border-gray-100 rounded-lg flex justify-between items-center hover:shadow-md transition-all group">
                <span class="font-medium text-gray-700 group-hover:text-blue-600">Report a lost or stolen card</span>
                <i class="fa-solid fa-chevron-right text-xs text-blue-600 group-hover:translate-x-1 transition-transform"></i>
              </a>
              <a href="#" class="p-5 bg-white border border-gray-100 rounded-lg flex justify-between items-center hover:shadow-md transition-all group">
                <span class="font-medium text-gray-700 group-hover:text-blue-600">View routing numbers</span>
                <i class="fa-solid fa-chevron-right text-xs text-blue-600 group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Sidebar Contact Info -->
        <div class="space-y-8">
          <div class="bg-blue-900 text-white p-8 rounded-xl shadow-xl">
            <h3 class="text-xl font-bold mb-6">Call us anytime</h3>
            <div class="space-y-6">
              <div>
                <p class="text-[10px] uppercase font-bold opacity-60 mb-1 tracking-widest">Personal Banking</p>
                <p class="text-xl font-bold">{{ s.bank_phone || '1-800-555-0199' }}</p>
              </div>
              <div>
                <p class="text-[10px] uppercase font-bold opacity-60 mb-1 tracking-widest">Business Banking</p>
                <p class="text-xl font-bold">1-888-{{ s.site_name?.toUpperCase()?.replace(' ', '-') }}-BIZ</p>
              </div>
              <div>
                <p class="text-[10px] uppercase font-bold opacity-60 mb-1 tracking-widest">International</p>
                <p class="text-xl font-bold">+1 (212) 555-0198</p>
              </div>
            </div>
            <hr class="my-8 opacity-20">
            <button (click)="startChat()" class="w-full bg-white text-blue-900 font-bold py-3.5 rounded-md hover:bg-gray-100 transition-colors shadow-lg">Start Live Chat</button>
          </div>

          <div class="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
            <h3 class="text-xl font-bold mb-4">Find us in person</h3>
            <p class="text-gray-600 mb-6 text-sm leading-relaxed">Visit one of our 500+ branches for personalized service from our local experts.</p>
            <a routerLink="/locations" class="text-blue-600 font-bold flex items-center gap-2 hover:underline group">
              Find a branch or ATM <i class="fa-solid fa-location-dot group-hover:scale-110 transition-transform"></i>
            </a>
          </div>

          <div class="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
            <h3 class="text-xl font-bold mb-4 text-gray-800">Follow our updates</h3>
            <div class="flex gap-6 text-2xl text-gray-400">
              <a href="#" class="hover:text-blue-600 transition-colors"><i class="fa-brands fa-facebook"></i></a>
              <a href="#" class="hover:text-blue-400 transition-colors"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="#" class="hover:text-blue-700 transition-colors"><i class="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactUsComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private settingsService = inject(SettingsService);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  settings = this.settingsService.settings;
  submitted = signal(false);

  constructor() {
    this.titleService.setTitle('Contact Us | Signature Trust Bank');
    this.metaService.updateTag({ name: 'description', content: 'Get in touch with Signature Trust Bank. Our support team is available 24/7 to assist with your banking needs.' });
    this.injectJsonLd();
  }

  private injectJsonLd() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Us",
      "description": "Contact Signature Trust Bank customer support.",
      "url": window.location.href,
      "mainEntity": {
        "@type": "BankOrCreditUnion",
        "name": "Signature Trust Bank",
        "telephone": "+1-800-555-0199",
        "email": "support@signaturetrust.com",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-800-555-0199",
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": ["en", "es"]
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    topic: ['general', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  onSubmit() {
    if (this.contactForm.valid) {
      this.http.post('api/contact.php', this.contactForm.value).subscribe({
        next: (res: any) => {
          if (res.success) {
            this.submitted.set(true);
            this.contactForm.reset();
          }
        },
        error: (err) => {
          alert('Failed to send message. Please try again later.');
        }
      });
    }
  }

  startChat() {
    if ((window as any).chaport && (window as any).chaport.q) {
      (window as any).chaport.q('open');
    } else {
      alert('Live chat is currently unavailable. Please try again later.');
    }
  }
}
