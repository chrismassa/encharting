import { CodeSnippetComponent } from 'src/app/shared/components/code-snippet/code-snippet.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, EnchartingDirective } from 'encharting';
import { ThemeService } from 'src/app/core/services/theme.service';
import { SlideInDirective } from 'src/app/shared/directives/slide-in.directive';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [
    CommonModule,
    EnchartingDirective,
    SlideInDirective,
    MatTabsModule,
    CodeSnippetComponent,
    MatDividerModule
  ],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {

  bashCode: string = `
    # Create a new component
    ng generate component line-chart --standalone
  `;
  htmlCode: string = `
    <!-- Must be a div element to use encharting directive -->
    <div encharting [config]="config"></div>
  `;
  tsCode: string = `
    // ...
    import { EnchartingDirective, Chart } from 'encharting';

    @Component({
      selector: 'app-line-chart',
      standalone: true,
      imports: [
        CommonModule,
        // Be sure to have in your imports EnchartingDirective before using the directive!
        EnchartingDirective,
      ],
      templateUrl: './line-chart.component.html',
    })
    export class LineChartComponent {
            
      config: Chart = {
        title: 'Line Chart',
        xAxisName: 'Line X',
        yAxisName: 'Line Y',
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
  `;

  constructor(public themeService: ThemeService) { }

  config: Chart = {
    title: 'Line Chart',
    xAxisName: 'Line X',
    yAxisName: 'Line Y',
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
