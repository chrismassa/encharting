import { RouterModule } from '@angular/router';
import { ThemeService } from 'src/app/core/services/theme.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SidemenuService } from '../../services/sidemenu.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { EnchartingTheme } from 'encharting';
import { SlideInDirective } from 'src/app/shared/directives/slide-in.directive';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatRadioModule,
    SlideInDirective,
    RouterModule
  ],
  template: `
    <mat-toolbar slideIn direction="top" color="primary" class="topbar row justify-between align-center gap-20 mat-elevation-z4">
      <button mat-icon-button (click)="sidemenu.toggle()">
        <mat-icon>menu</mat-icon>
      </button>
      <div class="row gap-20 align-center">
        <img width="30" src="assets/logo/logo.png">
        <h2 routerLink="/">Encharting</h2>
      </div>
      <button mat-icon-button [matMenuTriggerFor]="themes">
        <mat-icon>format_color_fill</mat-icon>
      </button>
    </mat-toolbar>
    <mat-menu #themes="matMenu">
      <button mat-menu-item *ngFor="let theme of themeService.themes" (click)="switchTheme(theme.value)">
        <mat-radio-button color="primary" [checked]="(themeService.theme$ | async) === theme.value">
          {{theme.name}}
        </mat-radio-button>
      </button>
    </mat-menu>
  `,
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  constructor(
    public sidemenu: SidemenuService,
    public themeService: ThemeService
  ) { }
  switchTheme(theme: EnchartingTheme): void {
    this.themeService.theme$.next(theme);
    localStorage.setItem('encharting-theme', theme ?? JSON.stringify(theme));
  }
}
