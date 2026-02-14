
import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-admin-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <div class="flex justify-center">
            <div class="apex-blue w-12 h-12 flex items-center justify-center rounded-sm">
               <span class="text-white font-bold text-2xl">A</span>
            </div>
          </div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Portal Login
          </h2>
        </div>
        <form class="mt-8 space-y-6" (submit)="login($event)">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="username" class="sr-only">Username</label>
              <input [(ngModel)]="username" name="username" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Username">
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input [(ngModel)]="password" name="password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Password">
            </div>
          </div>

          <div *ngIf="errorMessage()" class="text-red-500 text-sm text-center">
            {{ errorMessage() }}
          </div>

          <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminLoginComponent {
    private http = inject(HttpClient);
    private router = inject(Router);

    username = '';
    password = '';
    errorMessage = signal('');

    login(event: Event) {
        event.preventDefault();
        this.http.post('api/admin/login.php', { username: this.username, password: this.password })
            .subscribe({
                next: (res: any) => {
                    if (res.success) {
                        this.router.navigate(['/admin-dashboard']);
                    }
                },
                error: (err) => {
                    this.errorMessage.set(err.error?.error || 'Login failed');
                }
            });
    }
}
