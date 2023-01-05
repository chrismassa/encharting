import { BarChartComponent } from './pages/bar-chart/bar-chart.component';
import { ScatterChartComponent } from './pages/scatter-chart/scatter-chart.component';
import { LineChartComponent } from './pages/line-chart/line-chart.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'getting-started',
    pathMatch: 'full'
  },
  {
    path: 'getting-started',
    loadComponent: () => import('./pages/getting-started/getting-started.component').then(c => c.GettingStartedComponent)
  },
  {
    path: 'line',
    loadComponent: () => import('./pages/line-chart/line-chart.component').then(c => c.LineChartComponent)
  },
  {
    path: 'scatter',
    loadComponent: () => import('./pages/scatter-chart/scatter-chart.component').then(c => c.ScatterChartComponent)
  },
  {
    path: 'bar',
    loadComponent: () => import('./pages/bar-chart/bar-chart.component').then(c => c.BarChartComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
