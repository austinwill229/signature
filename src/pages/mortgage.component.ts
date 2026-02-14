
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mortgage',
  template: `
    <div class="bg-white">
      <section class="relative h-[450px] flex items-center text-white">
        <img src="https://picsum.photos/id/351/1920/1080" class="absolute inset-0 w-full h-full object-cover" alt="Happy Homeowner">
        <div class="absolute inset-0 bg-blue-950/70"></div>
        <div class="max-w-7xl mx-auto px-4 relative z-10">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">Home Lending</h1>
          <p class="text-xl max-w-2xl opacity-90 leading-relaxed mb-8">From your first home to your dream home, we'll help you find the right mortgage with competitive rates and expert guidance.</p>
          <div class="flex gap-4">
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-md">Prequalify Now</button>
            <button class="bg-white text-blue-900 hover:bg-gray-100 font-bold py-3 px-10 rounded-md">View Today's Rates</button>
          </div>
        </div>
      </section>

      <section class="py-20 max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">Today's Featured Mortgage Rates</h2>
          <p class="text-gray-500">Rates based on a $400,000 loan with 20% down payment.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div class="border rounded-xl p-8 text-center bg-gray-50">
            <h3 class="font-bold text-gray-500 uppercase text-xs tracking-widest mb-4">30-Year Fixed</h3>
            <div class="text-4xl font-bold text-blue-900 mb-2">6.875%</div>
            <div class="text-sm text-gray-400 mb-6">7.102% APR</div>
            <button class="w-full border-2 border-blue-600 text-blue-600 font-bold py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors">Apply</button>
          </div>
          <div class="border-2 border-blue-600 rounded-xl p-8 text-center bg-white shadow-xl scale-105 relative z-10">
            <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold py-1 px-4 rounded-full">POPULAR</span>
            <h3 class="font-bold text-gray-500 uppercase text-xs tracking-widest mb-4">15-Year Fixed</h3>
            <div class="text-4xl font-bold text-blue-900 mb-2">6.125%</div>
            <div class="text-sm text-gray-400 mb-6">6.452% APR</div>
            <button class="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700">Apply</button>
          </div>
          <div class="border rounded-xl p-8 text-center bg-gray-50">
            <h3 class="font-bold text-gray-500 uppercase text-xs tracking-widest mb-4">5/1 ARM</h3>
            <div class="text-4xl font-bold text-blue-900 mb-2">6.375%</div>
            <div class="text-sm text-gray-400 mb-6">7.658% APR</div>
            <button class="w-full border-2 border-blue-600 text-blue-600 font-bold py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors">Apply</button>
          </div>
        </div>

        <div class="bg-gray-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
          <div class="md:w-1/2">
            <h2 class="text-3xl font-bold mb-6">Ready to start house hunting?</h2>
            <p class="text-gray-600 mb-8 leading-relaxed text-lg">Getting prequalified gives you a better idea of how much you can afford and shows sellers you're a serious buyer.</p>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center gap-3"><i class="fa-solid fa-bolt text-yellow-500"></i> Decision in as little as 24 hours</li>
              <li class="flex items-center gap-3"><i class="fa-solid fa-shield-check text-green-600"></i> No impact on your credit score to check</li>
              <li class="flex items-center gap-3"><i class="fa-solid fa-file-invoice text-blue-600"></i> Digital document upload</li>
            </ul>
            <button class="bg-slate-900 text-white font-bold py-4 px-12 rounded-md hover:bg-slate-800">Start Prequalification</button>
          </div>
          <div class="md:w-1/2">
             <img src="https://picsum.photos/id/160/600/500" class="rounded-xl shadow-lg" alt="Prequalify">
          </div>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MortgageComponent {}
