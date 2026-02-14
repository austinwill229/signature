
import { Component, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-contact-advisor',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  template: `
    <div class="bg-white min-h-screen" *ngIf="settings() as s">
      <!-- Luxury Branding Strip -->
      <div class="bg-blue-950 py-3 text-white text-center text-[10px] font-bold uppercase tracking-[0.2em]">
        {{ s.site_name }} Private & Commercial Advisory
      </div>

      <div class="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row gap-20">
        <!-- Left Column: Content -->
        <div class="lg:w-1/2">
          <h1 class="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight text-slate-900">Elevate your financial strategy</h1>
          <p class="text-xl text-gray-600 mb-10 leading-relaxed font-light">Our specialists provide the sophisticated expertise required to manage complex portfolios and scale enterprise operations. Request a consultation to speak with a dedicated advisor who understands your vision.</p>
          
          <div class="space-y-12">
            <div class="flex gap-6">
              <div class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-900 text-xl flex-shrink-0">
                <i class="fa-solid fa-briefcase"></i>
              </div>
              <div>
                <h3 class="text-lg font-bold mb-2 text-slate-800">Bespoke Solutions</h3>
                <p class="text-gray-500 text-sm leading-relaxed">Every client relationship begins with a deep discovery process to tailor our strategies to your specific goals and risk tolerance.</p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-900 text-xl flex-shrink-0">
                <i class="fa-solid fa-shield-halved"></i>
              </div>
              <div>
                <h3 class="text-lg font-bold mb-2 text-slate-800">Institutional Strength</h3>
                <p class="text-gray-500 text-sm leading-relaxed">Leverage the global resources, market insights, and stability of one of the world's leading financial institutions.</p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-900 text-xl flex-shrink-0">
                <i class="fa-solid fa-globe"></i>
              </div>
              <div>
                <h3 class="text-lg font-bold mb-2 text-slate-800">Global Network</h3>
                <p class="text-gray-500 text-sm leading-relaxed">Access cross-border opportunities across international markets through our extensive network of on-the-ground specialists.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Form -->
        <div class="lg:w-1/2">
          <div class="bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-gray-100">
            <h2 class="text-2xl font-bold mb-4 text-slate-900">Request a Consultation</h2>
            <p class="text-sm text-gray-400 mb-10 font-medium">Please provide your details below. A senior advisor will contact you within one business day.</p>
            
            <form [formGroup]="advisorForm" (ngSubmit)="onSubmit()" class="space-y-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="flex flex-col gap-2">
                  <label class="text-xs font-bold text-gray-400 uppercase tracking-widest">First Name</label>
                  <input formControlName="firstName" type="text" class="border-b-2 border-gray-200 bg-transparent py-2.5 focus:border-blue-600 outline-none transition-all text-slate-800 font-medium">
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-xs font-bold text-gray-400 uppercase tracking-widest">Last Name</label>
                  <input formControlName="lastName" type="text" class="border-b-2 border-gray-200 bg-transparent py-2.5 focus:border-blue-600 outline-none transition-all text-slate-800 font-medium">
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-xs font-bold text-gray-400 uppercase tracking-widest">Business or Personal Email</label>
                <input formControlName="email" type="email" class="border-b-2 border-gray-200 bg-transparent py-2.5 focus:border-blue-600 outline-none transition-all text-slate-800 font-medium">
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-xs font-bold text-gray-400 uppercase tracking-widest">Primary Area of Interest</label>
                <select formControlName="interest" class="border-b-2 border-gray-200 bg-transparent py-2.5 focus:border-blue-600 outline-none transition-all cursor-pointer text-slate-800 font-medium">
                  <option value="wealth">Private Wealth Management</option>
                  <option value="commercial">Commercial & Corporate Banking</option>
                  <option value="investing">Institutional Investing</option>
                  <option value="realestate">Commercial Real Estate Finance</option>
                </select>
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-xs font-bold text-gray-400 uppercase tracking-widest">AUM / Annual Revenue Segment</label>
                <select formControlName="range" class="border-b-2 border-gray-200 bg-transparent py-2.5 focus:border-blue-600 outline-none transition-all cursor-pointer text-slate-800 font-medium">
                  <option value="sub1m">Under $1M</option>
                  <option value="1m-5m">$1M - $5M</option>
                  <option value="5m-25m">$5M - $25M</option>
                  <option value="plus25m">$25M+</option>
                </select>
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-xs font-bold text-gray-400 uppercase tracking-widest">Financial Objectives</label>
                <textarea formControlName="notes" rows="3" class="border-b-2 border-gray-200 bg-transparent py-2.5 focus:border-blue-600 outline-none transition-all resize-none text-slate-800 font-medium placeholder:text-gray-300" placeholder="e.g. Asset diversification, capital raising..."></textarea>
              </div>

              <div class="pt-8">
                <button 
                  type="submit" 
                  [disabled]="submitted()"
                  class="w-full bg-blue-950 text-white font-bold py-4.5 rounded-sm hover:bg-slate-900 transition-all disabled:bg-gray-400 shadow-xl active:scale-[0.98]"
                >
                  {{ submitted() ? 'Request Submitted' : 'Request Private Consultation' }}
                </button>
              </div>

              @if (submitted()) {
                <div class="mt-6 p-5 bg-green-50 text-green-800 text-sm rounded border border-green-200 flex items-center gap-4 animate-pulse">
                  <i class="fa-solid fa-check-circle text-xl"></i>
                  <div>
                    <p class="font-bold">Prioritized Request Received</p>
                    <p class="opacity-80">A relationship manager will be assigned to your case shortly.</p>
                  </div>
                </div>
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactAdvisorComponent {
  private fb = inject(FormBuilder);
  private settingsService = inject(SettingsService);
  settings = this.settingsService.settings;
  submitted = signal(false);

  advisorForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    interest: ['wealth', Validators.required],
    range: ['1m-5m', Validators.required],
    notes: ['']
  });

  onSubmit() {
    if (this.advisorForm.valid) {
      console.log('Advisor Request', this.advisorForm.value);
      this.submitted.set(true);
      this.advisorForm.disable();
    }
  }
}
