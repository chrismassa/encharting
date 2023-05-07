import { SCATTER_LEGEND_ICON } from './../constants/chart.constants';
// Angular Imports
import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnDestroy, Output } from '@angular/core';

/* Echarts tree-shakeable Imports */
import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts/types/dist/shared';
import {
  BarChart,
  // The series option types are defined with the SeriesOption suffix
  BarSeriesOption,
  CustomChart,
  CustomSeriesOption,
  LineChart,
  LineSeriesOption,
  ScatterChart,
  ScatterSeriesOption
} from 'echarts/charts';
import {
  TitleComponent,
  // The component option types are defined with the ComponentOption suffix
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  // Dataset
  DatasetComponent,
  DatasetComponentOption,
  // Built-in transform (filter, sort)
  TransformComponent,
  LegendComponent,
  ToolboxComponent,
  ToolboxComponentOption,
  DataZoomInsideComponent,
  DataZoomComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer, SVGRenderer } from 'echarts/renderers';
import { ComposeOption, ECElementEvent, ECharts, init, registerTheme } from 'echarts/core';
import { ElementEvent, LegendComponentOption } from 'echarts';

// Create an Option type with only the required components and charts via ComposeOption
export type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | CustomSeriesOption
  | ScatterSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | LegendComponentOption
  | ToolboxComponentOption
>;

// Register the required components
echarts.use([
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  CustomChart,
  ScatterChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  SVGRenderer,
  CanvasRenderer
]);

// Themes
import { chalk } from '../themes/chalk.theme';
import { macarons } from '../themes/macarons.theme';
import { westeros } from '../themes/westeros.theme';
import { wonderland } from '../themes/wonderland.theme';

// Encharting Models & Constants
import { AxisType, Bar, BasePoint, Chart, Component, EnchartingTheme, Point, Trace } from '../models/chart.model';
import { BAR_LEGEND_ICON, DEFAULT_CHART_NAME, DEFAULT_X_NAME, DEFAULT_Y_NAME, LINE_LEGEND_ICON, RESTORE, SAVE_AS_SVG, ZOOM_IN, ZOOM_OUT } from '../constants/chart.constants';

@Directive({
  selector: 'div[encharting]',
  standalone: true
})
export class EnchartingDirective implements AfterViewInit, OnChanges, OnDestroy {

  @Input() config: Chart = {
    components: []
  };
  @Input() width: string = '600px';
  @Input() height: string = '400px';
  /**
   * Default Encharting Themes
   *
   * @type {(EnchartingTheme)}
   * @memberof EnchartingDirective
   */
  @Input() theme: EnchartingTheme = 'default';
  /**
   * CSS Font Family property valid for the whole chart style.
   * If you want to use an external font, you must import it first.
   *
   * @type {string}
   * @memberof EnchartingDirective
   */
  @Input() fontFamily: string = '';

  /**
   * Emits an object of type ECElementEvent every time we click on a chart component (a point of a line for example...). 
   *
   * @memberof EnchartingDirective
   */
  @Output() onClick = new EventEmitter<ECElementEvent>();
  /**
   * Emits an object of type BasePoint every time we click on a blank space in the grid. 
   *
   * @memberof EnchartingDirective
   */
  @Output() onBlankClick = new EventEmitter<BasePoint>();

  /**
   * The instance of the Chart.
   *
   * @type {ECharts}
   * @memberof EnchartingDirective
   */
  chart!: ECharts;

  constructor(
    private el: ElementRef<HTMLDivElement>
  ) {

    registerTheme('chalk', chalk);
    registerTheme('macarons', macarons);
    registerTheme('westeros', westeros);
    registerTheme('wonderland', wonderland);

    this.el.nativeElement.style.overflowX = "hidden";

  }

  /**
   * If you resize the page, the chart is automatically re-rendered wiht the right proportions.
   *
   * @memberof EnchartingDirective
   */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.chart.resize();
  }

  ngAfterViewInit(): void {
    this.renderChart();
  }

  ngOnChanges(): void {
    if (this.chart) {
      // Every time we have an external change we
      // destroy the chart and re-initialize it 
      this.chart.dispose();
      this.renderChart();
    }
  }

  renderChart(): void {

    // Update ElementRef styles
    this.el.nativeElement.style.width = this.width;
    this.el.nativeElement.style.height = this.height;

    // Initialize ECharts
    this.chart = init(
      this.el.nativeElement,
      this.theme,
      {
        renderer: 'svg'
      }
    );

    // Setup Chart Configuration & Event Handlers
    if (this.chart) {
      this.chart.setOption(
        this.createOption(this.config, this.fontFamily)
      );
      // Echarts Events
      this.chart.on('click', (params: ECElementEvent) => {
        this.onClick.emit(params);
      });
      // ZRender Events
      this.zrEventHandler();
    }

  }

  zrEventHandler(): void {

    const zr = this.chart.getZr();

    /**
     * Intercepts the click event on the grid
     * and emits the point coordinates.
     */
    zr.on('click', (event: ElementEvent) => {
      const pointInPixel = [event.offsetX, event.offsetY];
      const pointInGrid = this.chart.convertFromPixel('grid', pointInPixel);
      if (this.chart.containPixel('grid', pointInPixel) && pointInGrid) {
        let newPoint: BasePoint = {
          x: +pointInGrid[0],
          y: +pointInGrid[1]
        };
        this.onBlankClick.emit(newPoint);
      }
    });

  }

  createOption(chart: Chart, font: string): EChartsOption {
    return {
      title: {
        text: chart.title ?? DEFAULT_CHART_NAME,
        padding: 20,
        textStyle: {
          fontFamily: font
        },
      },
      grid: {
        width: '75%'
      },
      legend: {
        show: chart.showLegend ?? true,
        data: chart.components.map(
          (component: Component) => ({
            name: component.name,
            icon: this.getLegendIconByComponentType(component.type)
          })
        ),
        selected: chart.components.reduce((accumulator, plot: Component) => ({ ...accumulator, [plot.name as string]: plot.selectedByDefault ?? true }), {}),
        orient: 'vertical',
        left: 'right',
        padding: [60, 40],
        type: 'scroll',
        textStyle: {
          width: 120,
          fontWeight: 'bold',
          overflow: 'break',
          fontFamily: font
        }
      },
      tooltip: {
        textStyle: {
          fontFamily: font
        },
      },
      toolbox: {
        orient: 'horizontal',
        left: 'center',
        padding: 20,
        feature: {
          dataZoom: {
            title: {
              zoom: 'Zoom',
              back: 'Undo Zoom'
            },
            icon: {
              zoom: ZOOM_IN,
              back: ZOOM_OUT
            },
          },
          saveAsImage: {
            icon: SAVE_AS_SVG,
          },
          restore: {
            icon: RESTORE,
          },
        },
      },
      dataZoom: [
        {
          type: 'inside',
          xAxisIndex: [0],
          throttle: 0,
          filterMode: 'none',
          disabled: !chart.scrollToZoom ?? true
        },
        {
          type: 'inside',
          yAxisIndex: [0],
          throttle: 0,
          filterMode: 'none',
          disabled: !chart.scrollToZoom ?? true
        },
      ],
      xAxis: {
        axisLabel: {
          fontFamily: font
        },
        type: chart.xAxisType ?? AxisType.VALUE,
        name: chart.xAxisName ? chart.xAxisUom ? `${chart.xAxisName} [ ${chart.xAxisUom} ]` : chart.xAxisName : DEFAULT_X_NAME,
        nameLocation: 'middle',
        nameGap: 30,
        splitLine: {
          show: chart.showGrid ?? true,
        },
        min: chart.xMin?.toFixed(chart.maxAxesDecimals ?? 3),
        max: chart.xMax?.toFixed(chart.maxAxesDecimals ?? 3),
      },
      yAxis: {
        nameTextStyle: {
          padding: -15
        },
        axisLabel: {
          fontFamily: font
        },
        type: chart.yAxisType ?? AxisType.VALUE,
        name: chart.yAxisName ? chart.yAxisUom ? `${chart.yAxisName} [ ${chart.yAxisUom} ]` : chart.yAxisName : DEFAULT_Y_NAME,
        nameLocation: 'middle',
        nameGap: 50,
        splitLine: {
          show: chart.showGrid ?? true,
        },
        min: chart.yMin?.toFixed(chart.maxAxesDecimals ?? 3),
        max: chart.yMax?.toFixed(chart.maxAxesDecimals ?? 3),
      },
      series: this.createSeries(chart),
      animation: chart.hasAnimations ?? true,
      animationDuration: chart.animationDuration ?? 500,
    };
  }

  getLegendIconByComponentType(type: 'line' | 'scatter' | 'bar'): string {
    switch (type) {
      case 'line':
        return LINE_LEGEND_ICON;
      case 'scatter':
        return SCATTER_LEGEND_ICON;
      case 'bar':
        return BAR_LEGEND_ICON;
      default:
        return 'circle';
    }
  }

  createSeries(chart: Chart): Array<LineSeriesOption | CustomSeriesOption | ScatterSeriesOption | BarSeriesOption> {
    let series: Array<LineSeriesOption | CustomSeriesOption | ScatterSeriesOption | BarSeriesOption> = [];
    chart.components.forEach(
      (component: Component) => {
        switch (component.type) {
          case 'line':
          case 'scatter':
            series.push(this.createTrace(component as Trace))
            break;
          case 'bar':
            series.push(this.createBar(component as Bar))
            break;
          default:
            break;
        }
      }
    )
    return series;
  }

  createTrace(trace: Trace): LineSeriesOption | ScatterSeriesOption {
    return {
      type: trace.type,
      name: trace.name,
      data: trace.points.map(
        (point: Point) => ({
          value: [point.x, point.y],
          symbol: point.symbol ?? 'circle',
          name: point.name,
          symbolSize: point.symbolSize,
          itemStyle: {
            color: point.color
          },
          emphasis: {
            disabled: true
          },
          label: {
            show: true,
            position: 'bottom',
            align: 'left',
            verticalAlign: 'bottom',
            formatter: () => `${point.name ?? ''}`,
            fontSize: 13,
            padding: [0, 0, 0, 10],
            width: 100,
            overflow: 'truncate',
            ellipsis: '...',
            fontWeight: 'bold',
          },
          tooltip: {
            formatter: ({ value }: { value: number[] }) => this.formatComponentTooltip(trace, value)
          }
        })
      ),
      color: trace.color,
      lineStyle: {
        width: trace.width,
        type: trace.style,
        opacity: trace.opacity ?? 1
      },
      smooth: trace.smooth ?? false
    };
  }

  createBar(bar: Bar): BarSeriesOption {
    return {
      type: 'bar',
      name: bar.name,
      showBackground: bar.showBackground ?? false,
      barWidth: bar.barWidth ?? 50,
      itemStyle: {
        opacity: 0.8,
      },
      data: bar.points.map(
        (point: Point) => ({
          value: [point.x, point.y],
          symbol: point.symbol ?? 'circle',
          name: point.name,
          symbolSize: point.symbolSize,
          itemStyle: {
            color: point.color
          },
          emphasis: {
            disabled: true
          },
          label: {
            show: true,
            position: 'bottom',
            align: 'left',
            verticalAlign: 'bottom',
            formatter: () => `${point.name ?? ''}`,
            fontSize: 13,
            padding: [0, 0, 0, 10],
            width: 100,
            overflow: 'truncate',
            ellipsis: '...',
            fontWeight: 'bold',
          },
          tooltip: {
            formatter: ({ value }: { value: number[] }) => this.formatComponentTooltip(bar, value)
          }
        })
      ),
      color: bar.color,
    };
  }

  formatComponentTooltip(component: Component, value: number[]): string {
    return `
      <h3>${component.name}</h3>
      <strong>${this.config['xAxisName'] ?? DEFAULT_X_NAME}:</strong> ${value[0].toFixed(3).replace(/[.,]000$/, "")}
      <br>
      <strong>${this.config['yAxisName'] ?? DEFAULT_Y_NAME}:</strong> ${value[1].toFixed(3).replace(/[.,]000$/, "")}
    `;
  }

  ngOnDestroy(): void {
    this.chart.dispose();
  }

}
