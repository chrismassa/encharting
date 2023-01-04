import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, EnchartingModule } from 'encharting';
import { ThemeService } from 'src/app/core/services/theme.service';
import { SCATTER_DATA_1, SCATTER_DATA_2 } from 'src/app/core/mock/scatter.mock';

@Component({
  selector: 'app-scatter-chart',
  standalone: true,
  imports: [
    CommonModule,
    EnchartingModule
  ],
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.scss']
})
export class ScatterChartComponent {

  constructor(public themeService: ThemeService) { }

  config: Chart = {
    title: 'Scatter Chart',
    components: [
      {
        type: 'scatter',
        name: 'Scatter 2',
        points: SCATTER_DATA_1,
      },
      {
        type: 'scatter',
        name: 'Scatter 3',
        points: SCATTER_DATA_2,
      },
    ],
  };

}
