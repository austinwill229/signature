import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    private http = inject(HttpClient);

    private settingsSubject = new BehaviorSubject<any>(null);
    settings$ = this.settingsSubject.asObservable();

    settings = signal<any>({
        site_name: '',
        online_banking_link: '',
        signin_link: '',
        signup_link: '',
        learn_more_link: '',
        logo_url: '',
        favicon_url: ''
    });

    constructor() {
        this.loadSettings();
    }

    loadSettings() {
        this.http.get('api/settings.php').pipe(
            tap(s => {
                this.settingsSubject.next(s);
                this.settings.set(s);
            }),
            shareReplay(1)
        ).subscribe();
    }

    refreshSettings() {
        this.loadSettings();
    }
}
