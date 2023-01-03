import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { SidemenuService } from '../../services/sidemenu.service';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    RouterModule,
    MatIconModule
  ],
  template: `
    <mat-drawer-container class="container">
      <mat-drawer #drawer class="sidenav" mode="side" [opened]="true">
      <mat-selection-list #shoes [multiple]="false">
        <mat-list-option *ngFor="let item of menu" [value]="item" [routerLink]="item.path" [selected]="isActive(item.path)">
          <mat-icon matListItemIcon>{{item.icon}}</mat-icon>
          {{item.name}}
        </mat-list-option>
      </mat-selection-list>
      </mat-drawer>
      <mat-drawer-content>
        <div style="padding: 20px;">
          <ng-content></ng-content>
        </div>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {
  menu = [
    {
      name: 'Home',
      path: '',
      icon: 'house'
    },
    {
      name: 'Getting Started',
      path: 'getting-started',
      icon: 'done'
    },
    {
      name: 'Line Chart',
      path: 'line',
      icon: 'ssid_chart'
    },
    {
      name: 'Scatter Chart',
      path: 'scatter',
      icon: 'scatter_plot'
    },
    {
      name: 'Bar Chart',
      path: 'bar',
      icon: 'bar_chart'
    },
  ]
  @ViewChild('drawer') drawer!: MatDrawer;
  constructor(public sidemenu: SidemenuService) {
    this.sidemenu.toggle$.subscribe({
      next: () => {
        this.drawer.toggle();
      }
    })
  }
  isActive(path: string): boolean {
    return location.pathname === `/${path}`;
  }
}
