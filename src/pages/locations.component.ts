
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-locations',
  template: `
    <div class="bg-white min-h-screen">
      <section class="apex-blue py-12 text-white">
        <div class="max-w-7xl mx-auto px-4">
          <h1 class="text-3xl font-bold mb-6">Find a Branch or ATM</h1>
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-grow relative">
              <input 
                type="text" 
                placeholder="Address, City, or Zip Code" 
                class="w-full py-3 px-5 rounded text-gray-900 outline-none focus:ring-2 focus:ring-blue-400"
              >
              <i class="fa-solid fa-location-crosshairs absolute right-4 top-4 text-gray-400 cursor-pointer"></i>
            </div>
            <select class="py-3 px-5 rounded text-gray-900 outline-none bg-white">
              <option>All Services</option>
              <option>Full Service Branch</option>
              <option>ATM Only</option>
              <option>Business Banking</option>
            </select>
            <button class="bg-blue-600 text-white font-bold py-3 px-10 rounded hover:bg-blue-700 transition-colors">Search</button>
          </div>
        </div>
      </section>

      <div class="flex flex-col lg:flex-row h-[calc(100vh-250px)]">
        <!-- Sidebar Results -->
        <div class="w-full lg:w-[450px] overflow-y-auto border-r p-4 space-y-4 bg-gray-50">
          <div class="text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest">Showing 3 results near you</div>
          
          @for (loc of locations; track loc.name) {
            <div class="bg-white p-6 rounded-lg shadow-sm border hover:border-blue-600 cursor-pointer transition-colors group">
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-bold text-lg group-hover:text-blue-600">{{loc.name}}</h3>
                <span class="text-xs font-bold text-gray-400">{{loc.distance}} mi</span>
              </div>
              <p class="text-sm text-gray-600 mb-4">{{loc.address}}<br>{{loc.city}}, {{loc.state}} {{loc.zip}}</p>
              
              <div class="flex flex-wrap gap-2 mb-4">
                @for (tag of loc.tags; track tag) {
                  <span class="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-500 font-bold uppercase">{{tag}}</span>
                }
              </div>

              <div class="flex gap-4 pt-4 border-t border-gray-100">
                <button class="text-blue-600 text-sm font-bold hover:underline">Get Directions</button>
                <button class="text-blue-600 text-sm font-bold hover:underline">View Details</button>
              </div>
            </div>
          }
        </div>

        <!-- Mock Map Area -->
        <div class="flex-grow bg-blue-50 relative flex items-center justify-center overflow-hidden">
          <div class="absolute inset-0 opacity-20">
             <div class="w-full h-full" style="background-image: radial-gradient(#004a99 1px, transparent 1px); background-size: 20px 20px;"></div>
          </div>
          <div class="relative z-10 text-center">
            <i class="fa-solid fa-map-location-dot text-6xl text-blue-200 mb-4"></i>
            <p class="text-blue-900 font-medium italic">Interactive map view would be initialized here</p>
          </div>
          
          <!-- Marker Pins Mock -->
          <div class="absolute top-1/4 left-1/3 text-blue-600 text-3xl drop-shadow-lg"><i class="fa-solid fa-location-dot"></i></div>
          <div class="absolute top-1/2 right-1/4 text-blue-600 text-3xl drop-shadow-lg"><i class="fa-solid fa-location-dot"></i></div>
          <div class="absolute bottom-1/3 left-1/2 text-blue-600 text-3xl drop-shadow-lg"><i class="fa-solid fa-location-dot"></i></div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationsComponent {
  locations = [
    {
      name: 'Downtown Financial Center',
      address: '100 Main St',
      city: 'Metropolis',
      state: 'NY',
      zip: '10001',
      distance: '0.4',
      tags: ['Branch', '24h ATM', 'Safe Deposit', 'Mortgage Advisor']
    },
    {
      name: 'South Side ATM',
      address: '550 Broadway',
      city: 'Metropolis',
      state: 'NY',
      zip: '10012',
      distance: '1.2',
      tags: ['ATM Only', 'No Deposits']
    },
    {
      name: 'East Village Branch',
      address: '12 Avenue A',
      city: 'Metropolis',
      state: 'NY',
      zip: '10003',
      distance: '2.8',
      tags: ['Branch', 'Business Banking', 'Notary']
    }
  ];
}
