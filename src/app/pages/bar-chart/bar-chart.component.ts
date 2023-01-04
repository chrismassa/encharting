import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, EnchartingModule } from 'encharting';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [
    CommonModule,
    EnchartingModule
  ],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  constructor(public themeService: ThemeService) { }

  config: Chart = {
    title: 'Bar Chart',
    components: [
      {
        type: 'bar',
        name: 'Bar 1',
        points: [
          { x: 1, y: 120 },
          { x: 2, y: 200 },
          { x: 3, y: 150 },
          { x: 4, y: 80 },
          { x: 5, y: 70 },
          { x: 6, y: 110 },
          { x: 7, y: 130 }
        ],
      },
    ],
  };

}
