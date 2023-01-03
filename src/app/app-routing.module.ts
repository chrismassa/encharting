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
    component: HomeComponent
  },
  {
    path: 'getting-started',
    component: GettingStartedComponent
  },
  {
    path: 'line',
    component: LineChartComponent
  },
  {
    path: 'scatter',
    component: ScatterChartComponent
  },
  {
    path: 'bar',
    component: BarChartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
