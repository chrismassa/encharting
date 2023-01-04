import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, EnchartingModule } from 'encharting';
import { ThemeService } from 'src/app/core/services/theme.service';
import { SlideInDirective } from 'src/app/shared/directives/slide-in.directive';
@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [
    CommonModule,
    EnchartingModule,
    SlideInDirective
  ],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {

  constructor(public themeService: ThemeService) { }

  config: Chart = {
    title: 'Line Chart',
    components: [
      {
        type: 'line',
        name: 'Line 1',
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 2 },
          { x: 2, y: 5 },
          { x: 3, y: 2 },
          { x: 4, y: 4 },
          { x: 5, y: 1 },
        ],
        smooth: true,
        width: 2
      },
      {
        type: 'line',
        name: 'Line 2',
        points: [
          { x: 0, y: 2 },
          { x: 1, y: 1 },
          { x: 2, y: 0 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 5 },
        ],
        smooth: true,
        width: 2
      },
      {
        type: 'line',
        name: 'Line 3',
        points: [
          { x: 0, y: 3 },
          { x: 1, y: 0 },
          { x: 2, y: 3 },
          { x: 3, y: 0 },
          { x: 4, y: 1 },
          { x: 5, y: 3 },
        ],
        smooth: true,
        width: 2
      },
    ],
  };

}
