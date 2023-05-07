import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
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
