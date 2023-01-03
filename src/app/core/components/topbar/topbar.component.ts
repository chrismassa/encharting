import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SidemenuService } from '../../services/sidemenu.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <mat-toolbar color="primary" class="row justify-between gap-20 mat-elevation-z4">
      <button mat-icon-button (click)="sidemenu.toggle()">
        <mat-icon>menu</mat-icon>
      </button>
      <span>Encharting Docs</span>
      <button mat-icon-button>
        <mat-icon>format_color_fill</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  constructor(public sidemenu: SidemenuService) { }
}
