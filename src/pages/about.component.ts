import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-50 min-h-screen" *ngIf="settings() as s">
      <!-- Hero -->
      <section class="bg-blue-900 text-white py-20 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div class="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">About {{ s.site_name }}</h1>
          <p class="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">Building a legacy of trust, innovation, and community since 1985.</p>
        </div>
      </section>

      <!-- Mission -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span class="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Mission</span>
              <h2 class="text-3xl font-bold mt-2 mb-6">Empowering Your Financial Future</h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                At {{ s.site_name }}, we believe banking represents more than just numbers—it represents your dreams, your hard work, and your future. Our mission is to provide secure, innovative, and accessible financial tools that empower individuals and businesses to thrive.
              </p>
              <p class="text-gray-600 leading-relaxed">
                We are committed to maintaining the highest standards of integrity and transparency, ensuring that every interaction with us adds value to your life.
              </p>
            </div>
            <div class="relative">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80" alt="Team meeting" class="rounded-lg shadow-xl">
              <div class="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 rounded-lg shadow-lg hidden md:block">
                <p class="text-4xl font-bold">40+</p>
                <p class="text-sm opacity-80 uppercase tracking-wider">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Values -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-16">Our Core Values</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 text-2xl">
                <i class="fa-solid fa-shield-halved"></i>
              </div>
              <h3 class="text-xl font-bold mb-4">Integrity First</h3>
              <p class="text-gray-600">We hold ourselves to the highest ethical standards in everything we do, treating your assets with the respect they deserve.</p>
            </div>
            <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 text-2xl">
                <i class="fa-solid fa-users"></i>
              </div>
              <h3 class="text-xl font-bold mb-4">Community Focused</h3>
              <p class="text-gray-600">We are deeply rooted in the communities we serve, investing in local growth and supporting charitable initiatives.</p>
            </div>
            <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 text-2xl">
                <i class="fa-solid fa-lightbulb"></i>
              </div>
              <h3 class="text-xl font-bold mb-4">Innovation</h3>
              <p class="text-gray-600">We continuously evolve our technology and services to meet the changing needs of the modern world.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  private settingsService = inject(SettingsService);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  settings = this.settingsService.settings;

  constructor() {
    this.titleService.setTitle('About Us | Signature Trust Bank');
    this.metaService.updateTag({ name: 'description', content: 'Learn about Signature Trust Bank. Our history, mission, and commitment to serving our community with integrity and innovation.' });
  }
}
