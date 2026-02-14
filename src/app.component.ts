import { Component, inject, ChangeDetectionStrategy, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterOutlet
  ],
  template: `
    <div class="min-h-screen flex flex-col">
      <app-header />
      <main class="flex-grow">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private settingsService = inject(SettingsService);

  constructor() {
    effect(() => {
      const s = this.settingsService.settings();
      if (s?.site_name) {
        this.titleService.setTitle(`${s.site_name} | Checking, Savings, Credit Cards & More`);
      }
      if (s?.favicon_url) {
        let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
        if (!link) {
          link = document.createElement('link');
          link.rel = 'icon';
          document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = s.favicon_url;
      }

      if (s?.meta_description) {
        this.metaService.updateTag({ name: 'description', content: s.meta_description });
        this.metaService.updateTag({ property: 'og:description', content: s.meta_description });
      }

      if (s?.meta_keywords) {
        this.metaService.updateTag({ name: 'keywords', content: s.meta_keywords });
      }

      if (s?.og_image) {
        this.metaService.updateTag({ property: 'og:image', content: s.og_image });
      }

      this.metaService.updateTag({ property: 'og:title', content: this.titleService.getTitle() });

      if (s?.live_chat_property_id) {
        this.injectChaport(s.live_chat_property_id);
      }

      if (s?.custom_js_script) {
        this.injectCustomScript(s.custom_js_script);
      }
    });
  }

  private injectCustomScript(scriptContent: string) {
    const scriptId = 'custom-user-script';
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // Extract content if it's wrapped in <script> tags
    let content = scriptContent;
    if (content.includes('<script>')) {
      content = content.replace(/<\/?script>/g, '');
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.text = content;
    document.body.appendChild(script);
  }

  private injectChaport(appId: string) {
    if (document.getElementById('chaport-script')) return;

    (window as any).chaportConfig = {
      appId: appId
    };

    if ((window as any).chaport) return;

    const v3: any = (window as any).chaport = {};
    v3._q = [];
    v3._l = {};
    v3.q = function () { v3._q.push(arguments) };
    v3.on = function (e: string, fn: any) {
      if (!v3._l[e]) v3._l[e] = [];
      v3._l[e].push(fn);
    };

    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://app.chaport.com/javascripts/insert.js';
    s.id = 'chaport-script';

    const ss = document.getElementsByTagName('script')[0];
    ss.parentNode?.insertBefore(s, ss);
  }
}
