import { Subject, takeUntil } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Component, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { SidemenuService } from '../../services/sidemenu.service';
import { MatListModule } from '@angular/material/list';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { SlideInDirective } from 'src/app/shared/directives/slide-in.directive';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    RouterModule,
    MatIconModule,
    LayoutModule,
    SlideInDirective
  ],
  template: `
    <mat-drawer-container class="container" autosize>
      <mat-drawer #drawer class="sidenav" [mode]="mode" [opened]="mode === 'side'" slideIn direction="left">
        <mat-nav-list>
          <mat-list-item class="nav-item" *ngFor="let link of menu"
            [routerLink]="link.path"  
            routerLinkActive="mdc-list-item--selected" 
            [routerLinkActiveOptions]="{exact: true}">
            <a>{{ link.name }}</a>
          </mat-list-item>
        </mat-nav-list>
      </mat-drawer>
      <div style="overflow-x: hidden;">
        <ng-content></ng-content>
      </div>
    </mat-drawer-container>
  `,
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnDestroy {

  mode: 'side' | 'over' = 'side';

  menu = [
    {
      name: 'Getting Started',
      path: 'getting-started',
      icon: 'code'
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

  destroyed = new Subject<void>();

  constructor(
    private sidemenu: SidemenuService,
    private breakpointObserver: BreakpointObserver
  ) {

    this.sidemenu.toggle$
      .pipe(takeUntil(this.destroyed))
      .subscribe({
        next: () => {
          this.drawer.toggle();
        },
      })

    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
    ])
      .pipe(takeUntil(this.destroyed))
      .subscribe({
        next: ({ matches }) => {
          if (matches) {
            this.mode = 'over';
          }
        }
      });

    this.breakpointObserver.observe([
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ])
      .pipe(takeUntil(this.destroyed))
      .subscribe({
        next: ({ matches }) => {
          if (matches) {
            this.mode = 'side';
          }
        }
      });

  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

}
