import { Component, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-white" *ngIf="settings() as s">
      <!-- Search Header -->
      <section class="apex-blue py-20 text-white">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h1 class="text-4xl font-bold mb-8">How can we help you today?</h1>
          <div class="relative max-w-2xl mx-auto">
            <input type="text" placeholder="Search for answers, like 'lost card' or 'mortgage rates'" class="w-full py-5 px-6 rounded-full text-gray-900 focus:ring-4 focus:ring-blue-400 outline-none text-lg">
            <button class="absolute right-3 top-3 bg-blue-600 p-2.5 rounded-full hover:bg-blue-700 transition-colors">
              <i class="fa-solid fa-magnifying-glass w-6 h-6 flex items-center justify-center"></i>
            </button>
          </div>
        </div>
      </section>

      <!-- Topic Grid -->
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="text-2xl font-bold mb-12 text-center">Quick help by topic</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            @for (topic of topics; track topic.label) {
              <a routerLink="/contact-us" class="flex flex-col items-center p-8 border rounded-xl hover:shadow-lg transition-all text-center group">
                <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <i [class]="topic.icon + ' text-2xl'"></i>
                </div>
                <h3 class="font-bold text-gray-800">{{topic.label}}</h3>
              </a>
            }
          </div>
        </div>
      </section>

      <!-- Common Questions -->
      <section class="bg-gray-50 py-20">
        <div class="max-w-3xl mx-auto px-4">
          <h2 class="text-3xl font-bold mb-10 text-center">Frequently asked questions</h2>
          <div class="space-y-4">
            @for (faq of faqs; track faq.q; let i = $index) {
              <div class="bg-white border rounded-lg overflow-hidden transition-all hover:border-blue-300">
                <button (click)="toggleFaq(i)" class="w-full text-left p-6 flex justify-between items-center bg-white">
                  <h4 class="font-bold text-gray-800">{{faq.q}}</h4>
                  <i class="fa-solid" [ngClass]="openFaqIndex() === i ? 'fa-minus text-gray-400' : 'fa-plus text-blue-600'"></i>
                </button>
                <div class="px-6 pb-6 text-gray-600 leading-relaxed text-sm lg:text-base border-t border-gray-50 pt-4" *ngIf="openFaqIndex() === i">
                  {{faq.a}}
                </div>
              </div>
            }
          </div>
          <div class="text-center mt-10">
            <a routerLink="/contact-us" class="text-blue-600 font-bold hover:underline">See all help topics <i class="fa-solid fa-chevron-right text-[10px] ml-1"></i></a>
          </div>
        </div>
      </section>

      <!-- Contact Options -->
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div class="text-center">
              <i class="fa-solid fa-phone text-3xl text-gray-400 mb-6"></i>
              <h3 class="text-xl font-bold mb-4">Call us</h3>
              <p class="text-gray-600 mb-4">Speak with a specialist who can help with your specific needs.</p>
              <a [href]="'tel:' + s.customer_service_link" class="text-blue-600 font-bold text-lg">1-800-{{ s.site_name?.toUpperCase()?.replace(' ', '-') }}-BANK</a>
            </div>
            <div class="text-center">
              <i class="fa-solid fa-comments text-3xl text-gray-400 mb-6"></i>
              <h3 class="text-xl font-bold mb-4">Chat with us</h3>
              <p class="text-gray-600 mb-4">Available 24/7 in our mobile app or online after you sign in.</p>
              <button (click)="startChat()" class="bg-blue-600 text-white px-8 py-2 rounded font-bold hover:bg-blue-700">Start Chat</button>
            </div>
            <div class="text-center">
              <i class="fa-solid fa-location-dot text-3xl text-gray-400 mb-6"></i>
              <h3 class="text-xl font-bold mb-4">Visit a branch</h3>
              <p class="text-gray-600 mb-4">Schedule a meeting with a local specialist at a branch near you.</p>
              <a routerLink="/locations" class="text-blue-600 font-bold hover:underline">Find a location</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupportComponent {
  private settingsService = inject(SettingsService);
  settings = this.settingsService.settings;
  openFaqIndex = signal<number | null>(null);

  topics = [
    { label: 'Security & Fraud', icon: 'fa-solid fa-shield-halved' },
    { label: 'Lost/Stolen Card', icon: 'fa-solid fa-credit-card' },
    { label: 'Login Help', icon: 'fa-solid fa-user-lock' },
    { label: 'ATM Locator', icon: 'fa-solid fa-money-bill-transfer' },
    { label: 'Direct Deposit', icon: 'fa-solid fa-file-invoice-dollar' },
    { label: 'Mobile App', icon: 'fa-solid fa-mobile-screen' },
    { label: 'Rates & Fees', icon: 'fa-solid fa-percent' },
    { label: 'Closing Account', icon: 'fa-solid fa-rectangle-xmark' }
  ];

  faqs = [
    {
      q: 'How do I activate my new debit card?',
      a: 'You can activate your card by signing into our mobile app or online banking and selecting "Card Management", or by calling the activation number found on the sticker on the front of your card.'
    },
    {
      q: 'Where can I find my routing and account number?',
      a: 'After signing in, select your account. Click on the "Account Details" or "Show Details" link under the account balance to view your full account number and routing number.'
    },
    {
      q: 'How do I report a suspicious transaction?',
      a: 'Please contact us immediately if you notice transactions you didn\'t authorize. You can "Lock" your card in the mobile app instantly, or call our 24/7 fraud department at 1-800-FRAUD-HELP.'
    },
    {
      q: 'Can I use my card while traveling internationally?',
      a: 'Yes, your card is accepted globally wherever Visa/Mastercard is accepted. To ensure uninterrupted service, please use the "Travel Notice" feature in the app to let us know your travel dates and destination.'
    },
    {
      q: 'How long does it take for a transfer to process?',
      a: 'Internal transfers between your accounts are typically instant. External transfers to other banks usually take 1-3 business days depending on the receiving institution\'s policies.'
    }
  ];

  toggleFaq(index: number) {
    this.openFaqIndex.update(curr => curr === index ? null : index);
  }

  startChat() {
    if ((window as any).chaport && (window as any).chaport.q) {
      (window as any).chaport.q('open');
    } else {
      alert('Live chat is currently unavailable. Please try again later.');
    }
  }
}
