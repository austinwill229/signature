
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-commercial',
  imports: [RouterLink],
  template: `
    <div class="bg-white">
      <!-- Commercial Hero -->
      <section class="relative h-[550px] flex items-center bg-slate-900 text-white overflow-hidden">
        <img src="https://picsum.photos/id/122/1920/1080" class="absolute inset-0 w-full h-full object-cover opacity-40" alt="Skyscraper">
        <div class="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <div class="max-w-3xl">
            <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">Empowering Global Enterprise</h1>
            <p class="text-xl md:text-2xl opacity-90 mb-10 font-light">Strategic financial solutions designed for corporations, institutions, and government entities to navigate complex markets.</p>
            <div class="flex flex-col sm:flex-row gap-6">
              <a routerLink="/contact-advisor" class="bg-blue-600 text-white font-bold py-4 px-12 rounded-sm hover:bg-blue-700 transition-colors text-center">Partner with us</a>
              <button class="border-2 border-white text-white font-bold py-4 px-12 rounded-sm hover:bg-white hover:text-slate-900 transition-colors">Client Logins</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Matrix -->
      <section class="py-24 max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div class="space-y-4">
            <div class="text-blue-600 text-3xl"><i class="fa-solid fa-vault"></i></div>
            <h3 class="text-xl font-bold">Treasury Management</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Optimize your cash flow with advanced liquidity solutions and fraud protection tools.</p>
          </div>
          <div class="space-y-4">
            <div class="text-blue-600 text-3xl"><i class="fa-solid fa-chart-pie"></i></div>
            <h3 class="text-xl font-bold">Capital Markets</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Strategic advisory and capital raising services to fuel your next phase of growth.</p>
          </div>
          <div class="space-y-4">
            <div class="text-blue-600 text-3xl"><i class="fa-solid fa-building-columns"></i></div>
            <h3 class="text-xl font-bold">Institutional Banking</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Customized credit facilities and global transaction services for large-scale operations.</p>
          </div>
          <div class="space-y-4">
            <div class="text-blue-600 text-3xl"><i class="fa-solid fa-globe"></i></div>
            <h3 class="text-xl font-bold">International Trade</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Export financing and global supply chain solutions across 50+ countries.</p>
          </div>
        </div>
      </section>

      <!-- Industry Expertise Section -->
      <section class="bg-gray-50 py-24">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex flex-col md:flex-row gap-16 items-center">
            <div class="md:w-1/2">
              <img src="https://picsum.photos/id/201/800/600" class="rounded shadow-2xl" alt="Industry Meeting">
            </div>
            <div class="md:w-1/2">
              <h2 class="text-3xl font-bold mb-8">Deep Industry Specialization</h2>
              <div class="grid grid-cols-2 gap-8">
                <div>
                  <h4 class="font-bold border-l-4 border-blue-600 pl-3 mb-2">Real Estate</h4>
                  <p class="text-xs text-gray-500">Commercial mortgages and development financing.</p>
                </div>
                <div>
                  <h4 class="font-bold border-l-4 border-blue-600 pl-3 mb-2">Technology</h4>
                  <p class="text-xs text-gray-500">Venture debt and growth equity solutions.</p>
                </div>
                <div>
                  <h4 class="font-bold border-l-4 border-blue-600 pl-3 mb-2">Healthcare</h4>
                  <p class="text-xs text-gray-500">Specialized equipment leasing and acquisition.</p>
                </div>
                <div>
                  <h4 class="font-bold border-l-4 border-blue-600 pl-3 mb-2">Public Sector</h4>
                  <p class="text-xs text-gray-500">Tax-exempt financing and deposit management.</p>
                </div>
              </div>
              <button class="mt-12 text-blue-600 font-bold flex items-center gap-2 hover:underline">
                Explore all industries <i class="fa-solid fa-arrow-right text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom CTA -->
      <section class="py-24 text-center">
        <div class="max-w-3xl mx-auto px-4">
          <h2 class="text-4xl font-bold mb-6">Let's discuss your objectives</h2>
          <p class="text-gray-600 mb-10">Our Relationship Managers are ready to design a financial architecture that supports your long-term vision.</p>
          <a routerLink="/contact-advisor" class="bg-slate-900 text-white font-bold py-4 px-12 rounded-sm hover:bg-slate-800 shadow-xl inline-block">Contact an Advisor</a>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommercialComponent {}
