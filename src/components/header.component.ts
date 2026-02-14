import { Component, OnInit, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="w-full relative z-50 bg-white shadow-sm" *ngIf="settings() as s">
      <!-- Top Alert Bar -->
      @if (showAlert()) {
        <div class="bg-gray-100 border-b py-2 px-4 flex justify-between items-center text-sm">
          <div class="flex items-center gap-2 max-w-7xl mx-auto w-full px-4">
            <span class="w-3 h-3 rounded-full apex-blue hidden sm:inline-block"></span>
            <span class="truncate">
              {{ s.header_alert_text }} 
              <a [href]="s.header_alert_link" class="text-blue-600 underline" *ngIf="s.header_alert_link">Learn more</a>
            </span>
          </div>
          <button (click)="dismissAlert()" class="text-gray-500 hover:text-black">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
      }

      <nav class="max-w-7xl mx-auto px-4 w-full">
        <!-- Main Top Header -->
        <div class="flex items-center justify-between h-16 md:h-20">
          <!-- Logo Section -->
          <div class="flex items-center gap-8">
            <a routerLink="/" class="flex items-center space-x-2">
              <img *ngIf="s.logo_url" [src]="s.logo_url" alt="Logo" class="h-8 w-auto md:h-10">
              <ng-container *ngIf="!s.logo_url">
                <div class="apex-blue w-8 h-8 flex items-center justify-center rounded-sm">
                   <span class="text-white font-bold text-xl">{{ s.site_name?.charAt(0) }}</span>
                </div>
                <h1 class="text-xl md:text-2xl font-bold tracking-tight apex-blue-text" style="color: #004a99;">
                  {{ s.site_name }}
                </h1>
              </ng-container>
            </a>

            <!-- User Segment Nav (Desktop Only) -->
            <div class="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-600 border-l pl-8">
              <a routerLink="/" routerLinkActive="text-blue-600" [routerLinkActiveOptions]="{exact: true}" class="hover:text-blue-600 transition-colors">Personal</a>
              <a routerLink="/business" routerLinkActive="text-blue-600" class="hover:text-blue-600 transition-colors">Business</a>
              <a routerLink="/commercial" routerLinkActive="text-blue-600" class="hover:text-blue-600 transition-colors">Commercial</a>
            </div>
          </div>

          <!-- Top Right Utilities (Desktop) -->
          <div class="hidden md:flex items-center gap-6">
            <div class="flex items-center gap-5 text-sm font-medium text-gray-700">
              <a routerLink="/locations" class="hover:text-blue-600 flex items-center gap-1.5">
                <i class="fa-solid fa-location-dot"></i> Locations
              </a>
              <a routerLink="/contact-advisor" class="hover:text-blue-600">Schedule a meeting</a>
              <div class="relative group">
                <button class="hover:text-blue-600 flex items-center gap-1">
                  Customer service <i class="fa-solid fa-chevron-down text-[10px] mt-0.5"></i>
                </button>
              </div>
              <!-- Translation Script Placeholder -->
              <div class="gtranslate_wrapper"></div>
            </div>
            
            <button class="text-gray-600 hover:text-black transition-colors">
              <i class="fa-solid fa-magnifying-glass text-lg"></i>
            </button>
            
            <a [href]="s.signin_link || s.online_banking_link" class="hidden md:block bg-blue-600 text-white text-sm font-bold px-4 py-1.5 rounded hover:bg-blue-700 transition-colors">
              Sign In
            </a>
          </div>

          <!-- Mobile Menu Toggle -->
          <button (click)="toggleMobileMenu($event)" class="md:hidden text-gray-600 p-2">
            <i class="fa-solid" [ngClass]="mobileMenuOpen() ? 'fa-xmark' : 'fa-bars'"></i>
          </button>
        </div>

        <!-- Main Product Navigation (Desktop) -->
        <div class="hidden md:flex items-center gap-8 py-3 text-sm font-bold text-gray-700 border-t border-gray-100">
          <!-- Banking Dropdown -->
          <div class="relative dropdown-container">
            <button (click)="toggleDropdown('banking', $event)" class="hover:text-blue-600 flex items-center gap-1.5">
              Banking <i class="fa-solid fa-chevron-down text-[10px] mt-0.5" [ngClass]="{'rotate-180': activeDropdown() === 'banking'}"></i>
            </button>
            @if (activeDropdown() === 'banking') {
              <div class="absolute left-0 top-full mt-2 w-64 bg-white shadow-2xl rounded-lg py-4 z-50 border border-gray-100 animate-in fade-in slide-in-from-top-2">
                <div class="px-6 py-2 border-b border-gray-50 mb-2">
                  <h3 class="text-xs uppercase tracking-wider text-gray-400">Everything Online</h3>
                </div>
                <a routerLink="/checking" (click)="closeAllMenus()" class="block px-6 py-3 hover:bg-gray-50 text-blue-600 flex justify-between items-center group">
                  Checking <i class="fa-solid fa-chevron-right text-[10px] opacity-0 group-hover:opacity-100 transition-all"></i>
                </a>
                <a routerLink="/savings" (click)="closeAllMenus()" class="block px-6 py-3 hover:bg-gray-50 flex justify-between items-center group">
                  Savings \u0026 CDs <i class="fa-solid fa-chevron-right text-[10px] opacity-0 group-hover:opacity-100 transition-all"></i>
                </a>
                <a routerLink="/debit-cards" (click)="closeAllMenus()" class="block px-6 py-3 hover:bg-gray-50 flex justify-between items-center group">
                  Debit Cards <i class="fa-solid fa-chevron-right text-[10px] opacity-0 group-hover:opacity-100 transition-all"></i>
                </a>
              </div>
            }
          </div>

          <div class="relative dropdown-container">
            <button (click)="toggleDropdown('cards', $event)" class="hover:text-blue-600 flex items-center gap-1.5">
              Credit cards <i class="fa-solid fa-chevron-down text-[10px] mt-0.5" [ngClass]="{'rotate-180': activeDropdown() === 'cards'}"></i>
            </button>
            @if (activeDropdown() === 'cards') {
              <div class="absolute left-0 top-full mt-2 w-72 bg-white shadow-2xl rounded-lg py-4 z-50 border border-gray-100">
                <a routerLink="/credit-cards" (click)="closeAllMenus()" class="block px-6 py-3 hover:bg-gray-50 flex justify-between items-center group">
                  <span>Explore All Cards</span> <i class="fa-solid fa-chevron-right text-[10px] opacity-0 group-hover:opacity-100"></i>
                </a>
                <a routerLink="/credit-cards/compare" (click)="closeAllMenus()" class="block px-6 py-3 hover:bg-gray-50 flex justify-between items-center group">
                  <span>Compare Cards</span> <i class="fa-solid fa-chevron-right text-[10px] opacity-0 group-hover:opacity-100"></i>
                </a>
              </div>
            }
          </div>

          <div class="relative dropdown-container">
            <button (click)="toggleDropdown('lending', $event)" class="hover:text-blue-600 flex items-center gap-1.5">
              Lending <i class="fa-solid fa-chevron-down text-[10px] mt-0.5" [ngClass]="{'rotate-180': activeDropdown() === 'lending'}"></i>
            </button>
            @if (activeDropdown() === 'lending') {
              <div class="absolute left-0 top-full mt-2 w-64 bg-white shadow-2xl rounded-lg py-4 z-50 border border-gray-100">
                <a routerLink="/auto" (click)="closeAllMenus()" class="block px-6 py-3 hover:bg-gray-50 flex justify-between items-center group">
                  Auto Loan <i class="fa-solid fa-chevron-right text-[10px] opacity-0 group-hover:opacity-100"></i>
                </a>
              </div>
            }
          </div>

          <div class="relative dropdown-container">
            <button (click)="toggleDropdown('investing', $event)" class="hover:text-blue-600 flex items-center gap-1.5">
              Investing <i class="fa-solid fa-chevron-down text-[10px] mt-0.5" [ngClass]="{'rotate-180': activeDropdown() === 'investing'}"></i>
            </button>
            @if (activeDropdown() === 'investing') {
              <div class="absolute left-0 top-full mt-2 w-72 bg-white shadow-2xl rounded-lg py-4 z-50 border border-gray-100">
                <a routerLink="/investing" (click)="closeAllMenus()" class="block px-6 py-3 hover:bg-gray-50 flex justify-between items-center group">
                  Self-Directed Investing <i class="fa-solid fa-chevron-right text-[10px] opacity-0 group-hover:opacity-100"></i>
                </a>
                <a routerLink="/wealth" (click)="closeAllMenus()" class="block px-6 py-3 hover:bg-gray-50 flex justify-between items-center group">
                   Private Banking <i class="fa-solid fa-chevron-right text-[10px] opacity-0 group-hover:opacity-100"></i>
                </a>
              </div>
            }
          </div>

          <a routerLink="/support" class="hover:text-blue-600">Help \u0026 Support</a>
          <a routerLink="/contact-us" class="hover:text-blue-600">Contact Us</a>
        </div>
      </nav>

      <!-- Mobile Menu -->
      @if (mobileMenuOpen()) {
        <div class="md:hidden bg-white border-t border-gray-100 overflow-y-auto max-h-[80vh] px-4 py-6 space-y-4 animate-in slide-in-from-right">
          <a [href]="s.signin_link || s.online_banking_link" class="block w-full bg-blue-600 text-white text-center font-bold py-3 rounded-md">Sign In</a>
          
          <div class="space-y-6 pt-4">
            <div>
              <h4 class="text-xs font-bold text-gray-400 uppercase mb-3 px-2">Main Navigation</h4>
              <div class="space-y-1">
                <a routerLink="/" (click)="closeAllMenus()" class="block p-3 rounded-md hover:bg-gray-50 font-semibold">Home</a>
                <a routerLink="/checking" (click)="closeAllMenus()" class="block p-3 rounded-md hover:bg-gray-50 font-semibold">Checking</a>
                <a routerLink="/business" (click)="closeAllMenus()" class="block p-3 rounded-md hover:bg-gray-50 font-semibold">Business</a>
                <a routerLink="/wealth" (click)="closeAllMenus()" class="block p-3 rounded-md hover:bg-gray-50 font-semibold">Wealth Management</a>
                <a routerLink="/support" (click)="closeAllMenus()" class="block p-3 rounded-md hover:bg-gray-50 font-semibold">Support</a>
              </div>
            </div>
          </div>
        </div>
      }
    </header>
  `,
  host: {
    '(document:click)': 'closeAllMenus()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  private settingsService = inject(SettingsService);

  settings = this.settingsService.settings;
  showAlert = signal(true);
  activeDropdown = signal<string | null>(null);
  mobileMenuOpen = signal(false);

  ngOnInit() {
    // Settings are handled by the service
  }

  dismissAlert() {
    this.showAlert.set(false);
  }

  toggleDropdown(name: string, event: Event) {
    event.stopPropagation();
    this.activeDropdown.update(curr => curr === name ? null : name);
  }

  toggleMobileMenu(event: Event) {
    event.stopPropagation();
    this.mobileMenuOpen.update(v => !v);
  }

  closeAllMenus() {
    this.activeDropdown.set(null);
    this.mobileMenuOpen.set(false);
  }
}
