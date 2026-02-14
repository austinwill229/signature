
import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-savings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white" *ngIf="data$ | async as data">
      <section class="bg-blue-50 py-16">
        <div class="max-w-7xl mx-auto px-4">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Savings & CDs</h1>
          <p class="text-xl text-gray-600 max-w-3xl leading-relaxed">Put your money to work. From high-yield savings to guaranteed CD returns, we help your future grow faster.</p>
        </div>
      </section>

      <section class="py-20 max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <span class="text-blue-600 font-bold uppercase tracking-widest text-sm">Featured Product</span>
            <h2 class="text-3xl font-bold mt-2 mb-6">{{ data.featured.title }}</h2>
            <div class="bg-blue-600 text-white p-8 rounded-xl shadow-lg inline-block mb-8">
              <div class="text-5xl font-bold">{{ data.featured.apy }} <span class="text-xl font-normal">APY</span></div>
              <p class="mt-2 opacity-90">{{ data.featured.detail }}</p>
            </div>
            <p class="text-gray-600 mb-8 leading-relaxed">{{ data.featured.description }}</p>
            <button class="bg-blue-600 text-white font-bold py-3 px-10 rounded-md hover:bg-blue-700 transition-colors">Open Now</button>
          </div>
          <div class="relative">
            <img [src]="data.featured.image" class="rounded-2xl shadow-2xl" alt="Savings Growth">
          </div>
        </div>

        <div class="mb-24">
          <h3 class="text-2xl font-bold mb-8">Certificate of Deposit (CD) Rates</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b-2 border-gray-100">
                  <th class="py-4 font-bold text-gray-400 uppercase text-xs tracking-wider">Term</th>
                  <th class="py-4 font-bold text-gray-400 uppercase text-xs tracking-wider">Interest Rate</th>
                  <th class="py-4 font-bold text-gray-400 uppercase text-xs tracking-wider">Annual Percentage Yield (APY)</th>
                  <th class="py-4"></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr *ngFor="let rate of data.cd_rates" [class.bg-blue-50/30]="rate.is_best_value">
                  <td class="py-6 font-bold">
                    {{ rate.term }}
                    <span *ngIf="rate.is_best_value" class="ml-2 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded">BEST VALUE</span>
                  </td>
                  <td class="py-6">{{ rate.rate }}</td>
                  <td class="py-6 text-blue-600 font-bold">{{ rate.apy }}</td>
                  <td class="py-6 text-right">
                    <button [class]="rate.is_best_value ? 'text-sm font-bold bg-blue-600 text-white rounded px-4 py-1 hover:bg-blue-700' : 'text-sm font-bold border rounded px-4 py-1 hover:bg-gray-50'">
                      Open
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="mt-4 text-xs text-gray-400 italic">Rates are effective as of today and are subject to change. Fees could reduce earnings. A penalty may be imposed for early withdrawal.</p>
        </div>
      </section>

      <section class="bg-gray-900 text-white py-20">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-6">Ready to reach your goals?</h2>
          <p class="text-lg opacity-70 mb-10">Whether it's for an emergency fund, a new home, or your next vacation, we have the right account to help you get there.</p>
          <div class="flex flex-col sm:flex-row justify-center gap-6">
            <div class="flex items-center gap-3"><i class="fa-solid fa-check text-green-500"></i> No monthly fees</div>
            <div class="flex items-center gap-3"><i class="fa-solid fa-check text-green-500"></i> FDIC insured</div>
            <div class="flex items-center gap-3"><i class="fa-solid fa-check text-green-500"></i> 24/7 Mobile access</div>
          </div>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SavingsComponent {
  private http = inject(HttpClient);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  data$: Observable<any> = this.http.get('api/savings.php');

  constructor() {
    this.titleService.setTitle('High-Yield Savings Accounts | Signature Trust Bank');
    this.metaService.updateTag({ name: 'description', content: 'Grow your wealth with our high-yield savings accounts. Competitive rates and flexible access to your funds.' });
  }
}
