import { ThemeService } from './core/services/theme.service';
import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FooterComponent } from './core/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { SidemenuComponent } from './core/components/sidemenu/sidemenu.component';
import { TopbarComponent } from './core/components/topbar/topbar.component';

@Component({
  selector: 'app-root',
  template: `
    <div [class]="themeService.theme$ | async" style="overflow-y: hidden;">
      <app-topbar></app-topbar>
      <div class="main-content">
          <app-sidemenu>
              <router-outlet></router-outlet>
          </app-sidemenu>
      </div>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    @import "variables";
    .main-content {
        height: calc(100vh - ($topbar-height + $footer-height));
    }
  `],
  standalone: true,
  imports: [
    AsyncPipe,
    TopbarComponent,
    SidemenuComponent,
    RouterOutlet,
    FooterComponent,
  ]
})
export class AppComponent { themeService = inject(ThemeService); }
