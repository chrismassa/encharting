import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, EnchartingModule } from 'encharting';
import { ThemeService } from 'src/app/core/services/theme.service';
import { SlideInDirective } from 'src/app/shared/directives/slide-in.directive';
import { MatTabsModule } from '@angular/material/tabs';
import { CodeSnippetComponent } from 'src/app/shared/components/code-snippet/code-snippet.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [
    CommonModule,
    EnchartingModule,
    SlideInDirective,
    MatTabsModule,
    CodeSnippetComponent,
    MatDividerModule
  ],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  bashCode: string = `
    # Create a new component
    ng generate component bar-chart --standalone
  `;
  htmlCode: string = `
    <!-- Must be a div element to use encharting directive -->
    <div encharting [config]="config"></div>
  `;
  tsCode: string = `
    @Component({
      selector: 'app-bar-chart',
      standalone: true,
      imports: [
        CommonModule,
        // Be sure to import the Encharting Module before using the directive!
        EnchartingModule,
      ],
      templateUrl: './bar-chart.component.html',
    })
    export class BarChartComponent {
            
      config: Chart = {
        title: 'Bar Chart',
        xAxisName: 'Bar X',
        yAxisName: 'Bar Y',
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
            showBackground: true
          },
        ],
      };
    
    }
  `;

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
        showBackground: true
      },
    ],
  };

}
