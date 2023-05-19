import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, EnchartingDirective, PointSymbol } from 'encharting';
import { ThemeService } from 'src/app/core/services/theme.service';
import { SCATTER_DATA_1, SCATTER_DATA_2 } from 'src/app/core/mock/scatter.mock';
import { SlideInDirective } from 'src/app/shared/directives/slide-in.directive';
import { MatTabsModule } from '@angular/material/tabs';
import { CodeSnippetComponent } from 'src/app/shared/components/code-snippet/code-snippet.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-scatter-chart',
  standalone: true,
  imports: [
    CommonModule,
    EnchartingDirective,
    SlideInDirective,
    MatTabsModule,
    CodeSnippetComponent,
    MatDividerModule
  ],
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.scss']
})
export class ScatterChartComponent {

  bashCode: string = `
    # Create a new component
    ng generate component scatter-chart --standalone
  `;
  htmlCode: string = `
    <!-- Must be a div element to use encharting directive -->
    <div encharting [config]="config"></div>
  `;
  tsCode: string = `
    // ...
    import { EnchartingDirective, Chart } from 'encharting';

    @Component({
      selector: 'app-scatter-chart',
      standalone: true,
      imports: [
        CommonModule,
        // Be sure to have in your imports EnchartingDirective before using the directive!
        EnchartingDirective,
      ],
      templateUrl: './scatter-chart.component.html',
    })
    export class ScatterChartComponent {
            
      config: Chart = {
        title: 'Scatter Chart',
        xAxisName: 'Scatter X',
        yAxisName: 'Scatter Y',
        components: [
          {
            type: 'scatter',
            name: 'Scatter 1',
            points: [
              { x: 147.200, y: 49.800 },
              { x: 149.500, y: 44.800 },
              // ...
            ],
          },
          {
            type: 'scatter',
            name: 'Scatter 2',
            points: [
              { x: 157.200, y: 58.400 },
              { x: 160, y: 72.300 },
              // ...
            ],
          },
          // For a single point just create a scatter with a single element list
          {
            type: 'scatter',
            name: 'Big Point',
            points: [
              {
                x: 90,
                y: 80,
                name: 'Big Point',
                symbol: PointSymbol.DIAMOND,
                symbolSize: 20,
              }
            ],
          },
        ],
      };
    
    }
  `;

  constructor(public themeService: ThemeService) { }

  config: Chart = {
    title: 'Scatter Chart',
    xAxisName: 'X',
    yAxisName: 'Y',
    components: [
      {
        type: 'scatter',
        name: 'Scatter 1',
        points: SCATTER_DATA_1,
      },
      {
        type: 'scatter',
        name: 'Scatter 2',
        points: SCATTER_DATA_2,
      },
      {
        type: 'scatter',
        name: 'Big Point',
        points: [
          {
            x: 170,
            y: 80,
            name: 'Big Point',
            symbol: PointSymbol.CIRCLE,
            symbolSize: 20,
            color: 'crimson'
          }
        ],
      },
    ],
  };

}
