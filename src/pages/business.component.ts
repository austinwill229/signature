
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white" *ngIf="settings() as s">
      <!-- Business Hero -->
      <section class="relative h-[500px] flex items-center overflow-hidden">
        <img src="https://picsum.photos/id/447/1920/1080" class="absolute inset-0 w-full h-full object-cover" alt="Business Owner">
        <div class="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent"></div>
        <div class="max-w-7xl mx-auto px-4 relative z-10 text-white">
          <span class="inline-block px-3 py-1 bg-blue-600 text-xs font-bold rounded mb-4 uppercase tracking-widest">For Small Business</span>
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-2xl">Fuel your business growth with {{ s.site_name }}</h1>
          <p class="text-xl opacity-90 max-w-xl leading-relaxed mb-8">From flexible checking to smart lending solutions, we provide the tools you need to manage and scale your business effectively.</p>
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="bg-blue-600 text-white font-bold py-3 px-10 rounded-md hover:bg-blue-700 transition-colors">Find Solutions</button>
            <button class="bg-white text-slate-900 font-bold py-3 px-10 rounded-md hover:bg-gray-100 transition-colors">Speak with an Expert</button>
          </div>
        </div>
      </section>

      <!-- Solutions Grid -->
      <section class="py-20 max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900">Banking built for your business needs</h2>
          <p class="text-gray-500 mt-4 max-w-2xl mx-auto">Whether you're just starting out or managing an established enterprise, our tailored solutions help you move forward.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Business Checking -->
          <div class="border rounded-xl p-8 hover:shadow-xl transition-shadow flex flex-col h-full group">
            <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <i class="fa-solid fa-money-check-dollar text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Business Checking</h3>
            <p class="text-gray-600 mb-8 flex-grow">Scale your operations with accounts that offer unlimited electronic transactions and advanced cash management tools.</p>
            <ul class="space-y-3 mb-8 text-sm text-gray-700">
              <li class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-green-500"></i> No monthly fee options</li>
              <li class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-green-500"></i> {{ s.site_name }} Business Online access</li>
              <li class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-green-500"></i> Integrated payroll services</li>
            </ul>
            <button class="text-blue-600 font-bold hover:underline inline-flex items-center gap-2">
              Learn about checking <i class="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>

          <!-- Lending & Credit -->
          <div class="border rounded-xl p-8 hover:shadow-xl transition-shadow flex flex-col h-full group">
            <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <i class="fa-solid fa-hand-holding-dollar text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Lending & Credit</h3>
            <p class="text-gray-600 mb-8 flex-grow">Access the capital you need to expand. We offer SBA loans, lines of credit, and commercial real estate financing.</p>
            <ul class="space-y-3 mb-8 text-sm text-gray-700">
              <li class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-green-500"></i> Term loans up to $5M</li>
              <li class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-green-500"></i> Flexible lines of credit</li>
              <li class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-green-500"></i> Competitive fixed rates</li>
            </ul>
            <button class="text-blue-600 font-bold hover:underline inline-flex items-center gap-2">
              Explore lending <i class="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>

          <!-- Merchant Services -->
          <div class="border rounded-xl p-8 hover:shadow-xl transition-shadow flex flex-col h-full group">
            <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <i class="fa-solid fa-cash-register text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Merchant Services</h3>
            <p class="text-gray-600 mb-8 flex-grow">Accept payments anywhere. Get fast, secure, and reliable processing for in-person, online, and mobile sales.</p>
            <ul class="space-y-3 mb-8 text-sm text-gray-700">
              <li class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-green-500"></i> Next-day funding</li>
              <li class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-green-500"></i> Latest POS hardware</li>
              <li class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-green-500"></i> 24/7 technical support</li>
            </ul>
            <button class="text-blue-600 font-bold hover:underline inline-flex items-center gap-2">
              Get processing <i class="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>
      </section>

      <!-- Business Insights -->
      <section class="bg-slate-50 py-20">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="md:w-1/2">
              <img src="https://picsum.photos/id/160/800/600" class="rounded-2xl shadow-lg" alt="Business Meeting">
            </div>
            <div class="md:w-1/2">
              <h2 class="text-3xl font-bold mb-6">Expertise to help you navigate whatever's next</h2>
              <p class="text-gray-600 mb-8 leading-relaxed">Our Business Relationship Managers are here to understand your unique challenges and goals. We don't just provide accounts; we provide strategic partnership.</p>
              <div class="space-y-6">
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 class="font-bold">Personalized Service</h4>
                    <p class="text-sm text-gray-500">Dedicated managers who understand your industry.</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 class="font-bold">Financial Strategy</h4>
                    <p class="text-sm text-gray-500">Helping you optimize cash flow and manage risk.</p>
                  </div>
                </div>
              </div>
              <button class="mt-10 bg-slate-900 text-white font-bold py-3 px-8 rounded-md hover:bg-slate-800 transition-colors">Meet a Specialist</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="py-20 text-center">
        <div class="max-w-4xl mx-auto px-4">
          <h2 class="text-3xl font-bold mb-6">Ready to take the next step?</h2>
          <p class="text-lg text-gray-600 mb-10">Join thousands of business owners who trust {{ s.site_name }} for their financial success.</p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <button class="bg-blue-600 text-white font-bold py-3 px-12 rounded-md hover:bg-blue-700">Open Account Online</button>
            <button class="border-2 border-gray-200 text-gray-700 font-bold py-3 px-12 rounded-md hover:bg-gray-50">Find a Branch</button>
          </div>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessComponent {
  private settingsService = inject(SettingsService);
  settings = this.settingsService.settings;
}
