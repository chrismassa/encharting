/**
 * Interface to define the Chart model.
 *
 * @export
 * @interface Chart
 */
export interface Chart {
    title?: string;
    showLegend?: boolean;
    xAxisType?: AxisType;
    xAxisName?: string;
    xAxisData?: string[];
    xAxisUom?: string;
    xMin?: number;
    xMax?: number;
    yAxisType?: AxisType;
    yAxisName?: string;
    yAxisUom?: string;
    yMin?: number;
    yMax?: number;
    /**
     * The maximum decimals that can have the values on the x and y axes.
     * If omitted the default is 3 decimals.
     *
     * @type {number}
     * @memberof Chart
     */
    maxAxesDecimals?: number;
    /**
     * If the chart should have rendering animations.
     *
     * @type {boolean}
     * @memberof Chart
     */
    hasAnimations?: boolean;
    /**
     * How long chart animations should last.
     * Expressed in milliseconds. If omitted the Default is 500 ms.
     *
     * @type {number}
     * @memberof Chart
     */
    animationDuration?: number;
    /**
     * The list of chart components. Every component object
     * must be identified by the "type" property. 
     *
     * @type {Component[]}
     * @memberof Chart
     */
    components: Component[];
    /**
     * Adds the possibility to use the mouse scroll 
     * to zoom in/out the chart area.
     *
     * @type {boolean}
     * @memberof Chart
     */
    scrollToZoom?: boolean;
    /**
     * Tells the chart to render or not the grid lines.
     *
     * @type {boolean}
     * @memberof Chart
     */
    showGrid?: boolean;
}

export type Component = Trace | Bar;

export interface BasePlot {
    name: string;
    color?: string;
    points: Point[];
    /**
     * Option to make the Trace selected/deselected by default.
     * A deselected Trace is obscured from the chart and can be toggled from the legend.   
     *
     * @type {boolean}
     * @memberof BasePlot
     */
    selectedByDefault?: boolean;
    opacity?: number;
}

export interface Trace extends BasePlot {
    /**
     * The type of the Trace drawn by the chart.
     * Can be a line or a scatter. 
     *
     * @type {TraceType}
     * @memberof Trace
     */
    type: 'line' | 'scatter';
    width?: number;
    /**
     * Whether to show a smooth curve or a segmented curve.
     *
     * @type {boolean}
     * @memberof Trace
     */
    smooth?: boolean;
    /**
     * The style of the Trace.
     * Can be solid, dashed or dotted.
     *
     * @type {TraceStyle}
     * @memberof Trace
     */
    style?: TraceStyle;
}

export interface Bar extends BasePlot {
    type: 'bar';
    barWidth?: number;
}

export interface Point extends BasePoint {
    name?: string;
    /**
     * Symbol used to represent the point in the chart.
     *
     * @type {PointSymbol}
     * @memberof Point
     */
    symbol?: PointSymbol;
    symbolSize?: number;
    color?: string;
}

export interface BasePoint {
    x: number;
    y: number
}

export enum PointSymbol {
    NONE = "none",
    CIRCLE = "circle",
    TRIANGLE = "triangle",
    PIN = "pin",
    DIAMOND = "diamond"
}

export enum TraceStyle {
    SOLID = "solid",
    DASHED = "dashed",
    DOTTED = "dotted"
}

export enum AxisType {
    VALUE = "value"
}