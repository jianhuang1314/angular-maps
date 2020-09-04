import { OnDestroy, OnChanges, ViewContainerRef, EventEmitter, AfterContentInit, SimpleChanges } from '@angular/core';
import { IPolygonEvent } from '../interfaces/ipolygon-event';
import { ILatLong } from '../interfaces/ilatlong';
import { PolygonService } from '../services/polygon.service';
import { InfoBoxComponent } from './infobox';
/**
 *
 * MapPolygonDirective renders a polygon inside a {@link MapComponent}.
 *
 * ### Example
 * ```typescript
 * import {Component} from '@angular/core';
 * import {MapComponent, MapPolygonDirective} from '...';
 *
 * @Component({
 *  selector: 'my-map,
 *  styles: [`
 *   .map-container { height: 300px; }
 * `],
 * template: `
 *   <x-map [Latitude]="lat" [Longitude]="lng" [Zoom]="zoom">
 *      <x-map-polygon [Paths]="path"></x-map-polygon>
 *   </x-map>
 * `
 * })
 * ```
 *
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class MapPolygonDirective implements OnDestroy, OnChanges, AfterContentInit {
    private _polygonService;
    private _containerRef;
    private _inCustomLayer;
    private _id;
    private _layerId;
    private _addedToService;
    private _events;
    protected _infoBox: InfoBoxComponent;
    /**
     * Gets or sets whether this Polygon handles mouse events.
     *
     * @memberof MapPolygonDirective
     */
    Clickable: boolean;
    /**
     * If set to true, the user can drag this shape over the map.
     *
     * @memberof MapPolygonDirective
     */
    Draggable: boolean;
    /**
     * If set to true, the user can edit this shape by dragging the control
     * points shown at the vertices and on each segment.
     *
     * @memberof MapPolygonDirective
     */
    Editable: boolean;
    /**
     * The fill color of the polygon.
     *
     * @memberof MapPolygonDirective
     */
    FillColor: string;
    /**
     * The fill opacity between 0.0 and 1.0
     *
     * @memberof MapPolygonDirective
     */
    FillOpacity: number;
    /**
     * When true, edges of the polygon are interpreted as geodesic and will
     * follow the curvature of the Earth. When false, edges of the polygon are
     * rendered as straight lines in screen space. Note that the shape of a
     * geodesic polygon may appear to change when dragged, as the dimensions
     * are maintained relative to the surface of the earth. Defaults to false.
     *
     * @memberof MapPolygonDirective
     */
    Geodesic: boolean;
    /**
     * Set the maximum zoom at which the polygon lable is visible. Ignored if ShowLabel is false.
     * @memberof MapPolygonDirective
     */
    LabelMaxZoom: number;
    /**
     * Set the minimum zoom at which the polygon lable is visible. Ignored if ShowLabel is false.
     * @memberof MapPolygonDirective
     */
    LabelMinZoom: number;
    /**
     * Arbitary metadata to assign to the Polygon. This is useful for events
     *
     * @memberof MapPolygonDirective
     */
    Metadata: Map<string, any>;
    /**
     * The ordered sequence of coordinates that designates a closed loop.
     * Unlike polylines, a polygon may consist of one or more paths.
     * As a result, the paths property may specify one or more arrays of
     * LatLng coordinates. Paths are closed automatically; do not repeat the
     * first vertex of the path as the last vertex. Simple polygons may be
     * defined using a single array of LatLngs. More complex polygons may
     * specify an array of arrays (for inner loops ). Any simple arrays are converted into Arrays.
     * Inserting or removing LatLngs from the Array will automatically update
     * the polygon on the map.
     *
     * @memberof MapPolygonDirective
     */
    Paths: Array<ILatLong> | Array<Array<ILatLong>>;
    /**
     * Whether to show the title as the label on the polygon.
     *
     * @memberof MapPolygonDirective
     */
    ShowLabel: boolean;
    /**
     * Whether to show the title of the polygon as the tooltip on the polygon.
     *
     * @memberof MapPolygonDirective
     */
    ShowTooltip: boolean;
    /**
     * The stroke color.
     *
     * @memberof MapPolygonDirective
     */
    StrokeColor: string;
    /**
     * The stroke opacity between 0.0 and 1.0
     *
     * @memberof MapPolygonDirective
     */
    StrokeOpacity: number;
    /**
     * The stroke width in pixels.
     *
     * @memberof MapPolygonDirective
     */
    StrokeWeight: number;
    /**
     * The title of the polygon.
     *
     * @memberof MapPolygonDirective
     */
    Title: string;
    /**
     * Whether this polygon is visible on the map. Defaults to true.
     *
     * @memberof MapPolygonDirective
     */
    Visible: boolean;
    /**
     * The zIndex compared to other polys.
     *
     * @memberof MapPolygonDirective
     */
    zIndex: number;
    /**
     * This event is fired when the DOM click event is fired on the Polygon.
     *
     * @memberof MapPolygonDirective
     */
    Click: EventEmitter<IPolygonEvent>;
    /**
     * This event is fired when the DOM dblclick event is fired on the Polygon.
     *
     * @memberof MapPolygonDirective
     */
    DblClick: EventEmitter<IPolygonEvent>;
    /**
     * This event is repeatedly fired while the user drags the polygon.
     *
     * @memberof MapPolygonDirective
     */
    Drag: EventEmitter<IPolygonEvent>;
    /**
     * This event is fired when the user stops dragging the polygon.
     *
     * @memberof MapPolygonDirective
     */
    DragEnd: EventEmitter<IPolygonEvent>;
    /**
     * This event is fired when the user starts dragging the polygon.
     *
     * @memberof MapPolygonDirective
     */
    DragStart: EventEmitter<IPolygonEvent>;
    /**
     * This event is fired when the DOM mousedown event is fired on the Polygon.
     *
     * @memberof MapPolygonDirective
     */
    MouseDown: EventEmitter<IPolygonEvent>;
    /**
     * This event is fired when the DOM mousemove event is fired on the Polygon.
     *
     * @memberof MapPolygonDirective
     */
    MouseMove: EventEmitter<IPolygonEvent>;
    /**
     * This event is fired on Polygon mouseout.
     *
     * @memberof MapPolygonDirective
     */
    MouseOut: EventEmitter<IPolygonEvent>;
    /**
     * This event is fired on Polygon mouseover.
     *
     * @memberof MapPolygonDirective
     */
    MouseOver: EventEmitter<IPolygonEvent>;
    /**
     * This event is fired whe the DOM mouseup event is fired on the Polygon
     *
     * @memberof MapPolygonDirective
     */
    MouseUp: EventEmitter<IPolygonEvent>;
    /**
     * This event is fired when the Polygon is right-clicked on.
     *
     * @memberof MapPolygonDirective
     */
    RightClick: EventEmitter<IPolygonEvent>;
    /**
     * This event is fired when editing has completed.
     *
     * @memberof MapPolygonDirective
     */
    PathChanged: EventEmitter<IPolygonEvent>;
    /**
     * Gets whether the polygon has been registered with the service.
     * @readonly
     * @memberof MapPolygonDirective
     */
    readonly AddedToService: boolean;
    /**
     * Get the id of the polygon.
     *
     * @readonly
     * @memberof MapPolygonDirective
     */
    readonly Id: number;
    /**
     * Gets the id of the polygon as a string.
     *
     * @readonly
     * @memberof MapPolygonDirective
     */
    readonly IdAsString: string;
    /**
     * Gets whether the polygon is in a custom layer. See {@link MapLayer}.
     *
     * @readonly
     * @memberof MapPolygonDirective
     */
    readonly InCustomLayer: boolean;
    /**
     * gets the id of the Layer the polygon belongs to.
     *
     * @readonly
     * @memberof MapPolygonDirective
     */
    readonly LayerId: number;
    /**
     * Creates an instance of MapPolygonDirective.
     * @param _polygonManager
     *
     * @memberof MapPolygonDirective
     */
    constructor(_polygonService: PolygonService, _containerRef: ViewContainerRef);
    /**
     * Called after the content intialization of the directive is complete. Part of the ng Component life cycle.
     *
     * @memberof MapPolygonDirective
     */
    ngAfterContentInit(): void;
    /**
     * Called when changes to the databoud properties occur. Part of the ng Component life cycle.
     *
     * @param changes - Changes that have occured.
     *
     * @memberof MapPolygonDirective
     */
    ngOnChanges(changes: SimpleChanges): any;
    /**
     * Called when the poygon is being destroyed. Part of the ng Component life cycle. Release resources.
     *
     *
     * @memberof MapPolygonDirective
     */
    ngOnDestroy(): void;
    /**
     * Wires up the event receivers.
     *
     * @memberof MapPolygonDirective
     */
    private AddEventListeners();
    /**
     * Generates IPolygon option changeset from directive settings.
     *
     * @param changes - {@link SimpleChanges} identifying the changes that occured.
     * @returns - {@link IPolygonOptions} containing the polygon options.
     *
     * @memberof MapPolygonDirective
     */
    private GeneratePolygonChangeSet(changes);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MapPolygonDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MapPolygonDirective, "x-map-polygon", never, { "Clickable": "Clickable"; "Draggable": "Draggable"; "Editable": "Editable"; "Geodesic": "Geodesic"; "Metadata": "Metadata"; "Paths": "Paths"; "ShowTooltip": "ShowTooltip"; "FillColor": "FillColor"; "FillOpacity": "FillOpacity"; "LabelMaxZoom": "LabelMaxZoom"; "LabelMinZoom": "LabelMinZoom"; "ShowLabel": "ShowLabel"; "StrokeColor": "StrokeColor"; "StrokeOpacity": "StrokeOpacity"; "StrokeWeight": "StrokeWeight"; "Title": "Title"; "Visible": "Visible"; "zIndex": "zIndex"; }, { "Click": "Click"; "DblClick": "DblClick"; "Drag": "Drag"; "DragEnd": "DragEnd"; "DragStart": "DragStart"; "MouseDown": "MouseDown"; "MouseMove": "MouseMove"; "MouseOut": "MouseOut"; "MouseOver": "MouseOver"; "MouseUp": "MouseUp"; "RightClick": "RightClick"; "PathChanged": "PathChanged"; }, ["_infoBox"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXBvbHlnb24uZC50cyIsInNvdXJjZXMiOlsibWFwLXBvbHlnb24uZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkNoYW5nZXMsIFZpZXdDb250YWluZXJSZWYsIEV2ZW50RW1pdHRlciwgQWZ0ZXJDb250ZW50SW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJUG9seWdvbkV2ZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pcG9seWdvbi1ldmVudCc7XHJcbmltcG9ydCB7IElMYXRMb25nIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbGF0bG9uZyc7XHJcbmltcG9ydCB7IFBvbHlnb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcG9seWdvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW5mb0JveENvbXBvbmVudCB9IGZyb20gJy4vaW5mb2JveCc7XHJcbi8qKlxyXG4gKlxyXG4gKiBNYXBQb2x5Z29uRGlyZWN0aXZlIHJlbmRlcnMgYSBwb2x5Z29uIGluc2lkZSBhIHtAbGluayBNYXBDb21wb25lbnR9LlxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuICogaW1wb3J0IHtNYXBDb21wb25lbnQsIE1hcFBvbHlnb25EaXJlY3RpdmV9IGZyb20gJy4uLic7XHJcbiAqXHJcbiAqIEBDb21wb25lbnQoe1xyXG4gKiAgc2VsZWN0b3I6ICdteS1tYXAsXHJcbiAqICBzdHlsZXM6IFtgXHJcbiAqICAgLm1hcC1jb250YWluZXIgeyBoZWlnaHQ6IDMwMHB4OyB9XHJcbiAqIGBdLFxyXG4gKiB0ZW1wbGF0ZTogYFxyXG4gKiAgIDx4LW1hcCBbTGF0aXR1ZGVdPVwibGF0XCIgW0xvbmdpdHVkZV09XCJsbmdcIiBbWm9vbV09XCJ6b29tXCI+XHJcbiAqICAgICAgPHgtbWFwLXBvbHlnb24gW1BhdGhzXT1cInBhdGhcIj48L3gtbWFwLXBvbHlnb24+XHJcbiAqICAgPC94LW1hcD5cclxuICogYFxyXG4gKiB9KVxyXG4gKiBgYGBcclxuICpcclxuICpcclxuICogQGV4cG9ydFxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTWFwUG9seWdvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0IHtcclxuICAgIHByaXZhdGUgX3BvbHlnb25TZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBfY29udGFpbmVyUmVmO1xyXG4gICAgcHJpdmF0ZSBfaW5DdXN0b21MYXllcjtcclxuICAgIHByaXZhdGUgX2lkO1xyXG4gICAgcHJpdmF0ZSBfbGF5ZXJJZDtcclxuICAgIHByaXZhdGUgX2FkZGVkVG9TZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBfZXZlbnRzO1xyXG4gICAgcHJvdGVjdGVkIF9pbmZvQm94OiBJbmZvQm94Q29tcG9uZW50O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgd2hldGhlciB0aGlzIFBvbHlnb24gaGFuZGxlcyBtb3VzZSBldmVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlnb25EaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgQ2xpY2thYmxlOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuIGRyYWcgdGhpcyBzaGFwZSBvdmVyIHRoZSBtYXAuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlnb25EaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgRHJhZ2dhYmxlOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuIGVkaXQgdGhpcyBzaGFwZSBieSBkcmFnZ2luZyB0aGUgY29udHJvbFxyXG4gICAgICogcG9pbnRzIHNob3duIGF0IHRoZSB2ZXJ0aWNlcyBhbmQgb24gZWFjaCBzZWdtZW50LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5Z29uRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIEVkaXRhYmxlOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZmlsbCBjb2xvciBvZiB0aGUgcG9seWdvbi5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBGaWxsQ29sb3I6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGZpbGwgb3BhY2l0eSBiZXR3ZWVuIDAuMCBhbmQgMS4wXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlnb25EaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgRmlsbE9wYWNpdHk6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogV2hlbiB0cnVlLCBlZGdlcyBvZiB0aGUgcG9seWdvbiBhcmUgaW50ZXJwcmV0ZWQgYXMgZ2VvZGVzaWMgYW5kIHdpbGxcclxuICAgICAqIGZvbGxvdyB0aGUgY3VydmF0dXJlIG9mIHRoZSBFYXJ0aC4gV2hlbiBmYWxzZSwgZWRnZXMgb2YgdGhlIHBvbHlnb24gYXJlXHJcbiAgICAgKiByZW5kZXJlZCBhcyBzdHJhaWdodCBsaW5lcyBpbiBzY3JlZW4gc3BhY2UuIE5vdGUgdGhhdCB0aGUgc2hhcGUgb2YgYVxyXG4gICAgICogZ2VvZGVzaWMgcG9seWdvbiBtYXkgYXBwZWFyIHRvIGNoYW5nZSB3aGVuIGRyYWdnZWQsIGFzIHRoZSBkaW1lbnNpb25zXHJcbiAgICAgKiBhcmUgbWFpbnRhaW5lZCByZWxhdGl2ZSB0byB0aGUgc3VyZmFjZSBvZiB0aGUgZWFydGguIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5Z29uRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIEdlb2Rlc2ljOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIG1heGltdW0gem9vbSBhdCB3aGljaCB0aGUgcG9seWdvbiBsYWJsZSBpcyB2aXNpYmxlLiBJZ25vcmVkIGlmIFNob3dMYWJlbCBpcyBmYWxzZS5cclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5Z29uRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIExhYmVsTWF4Wm9vbTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIG1pbmltdW0gem9vbSBhdCB3aGljaCB0aGUgcG9seWdvbiBsYWJsZSBpcyB2aXNpYmxlLiBJZ25vcmVkIGlmIFNob3dMYWJlbCBpcyBmYWxzZS5cclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5Z29uRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIExhYmVsTWluWm9vbTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBcmJpdGFyeSBtZXRhZGF0YSB0byBhc3NpZ24gdG8gdGhlIFBvbHlnb24uIFRoaXMgaXMgdXNlZnVsIGZvciBldmVudHNcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBNZXRhZGF0YTogTWFwPHN0cmluZywgYW55PjtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG9yZGVyZWQgc2VxdWVuY2Ugb2YgY29vcmRpbmF0ZXMgdGhhdCBkZXNpZ25hdGVzIGEgY2xvc2VkIGxvb3AuXHJcbiAgICAgKiBVbmxpa2UgcG9seWxpbmVzLCBhIHBvbHlnb24gbWF5IGNvbnNpc3Qgb2Ygb25lIG9yIG1vcmUgcGF0aHMuXHJcbiAgICAgKiBBcyBhIHJlc3VsdCwgdGhlIHBhdGhzIHByb3BlcnR5IG1heSBzcGVjaWZ5IG9uZSBvciBtb3JlIGFycmF5cyBvZlxyXG4gICAgICogTGF0TG5nIGNvb3JkaW5hdGVzLiBQYXRocyBhcmUgY2xvc2VkIGF1dG9tYXRpY2FsbHk7IGRvIG5vdCByZXBlYXQgdGhlXHJcbiAgICAgKiBmaXJzdCB2ZXJ0ZXggb2YgdGhlIHBhdGggYXMgdGhlIGxhc3QgdmVydGV4LiBTaW1wbGUgcG9seWdvbnMgbWF5IGJlXHJcbiAgICAgKiBkZWZpbmVkIHVzaW5nIGEgc2luZ2xlIGFycmF5IG9mIExhdExuZ3MuIE1vcmUgY29tcGxleCBwb2x5Z29ucyBtYXlcclxuICAgICAqIHNwZWNpZnkgYW4gYXJyYXkgb2YgYXJyYXlzIChmb3IgaW5uZXIgbG9vcHMgKS4gQW55IHNpbXBsZSBhcnJheXMgYXJlIGNvbnZlcnRlZCBpbnRvIEFycmF5cy5cclxuICAgICAqIEluc2VydGluZyBvciByZW1vdmluZyBMYXRMbmdzIGZyb20gdGhlIEFycmF5IHdpbGwgYXV0b21hdGljYWxseSB1cGRhdGVcclxuICAgICAqIHRoZSBwb2x5Z29uIG9uIHRoZSBtYXAuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlnb25EaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgUGF0aHM6IEFycmF5PElMYXRMb25nPiB8IEFycmF5PEFycmF5PElMYXRMb25nPj47XHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdG8gc2hvdyB0aGUgdGl0bGUgYXMgdGhlIGxhYmVsIG9uIHRoZSBwb2x5Z29uLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5Z29uRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFNob3dMYWJlbDogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0byBzaG93IHRoZSB0aXRsZSBvZiB0aGUgcG9seWdvbiBhcyB0aGUgdG9vbHRpcCBvbiB0aGUgcG9seWdvbi5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBTaG93VG9vbHRpcDogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHN0cm9rZSBjb2xvci5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBTdHJva2VDb2xvcjogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc3Ryb2tlIG9wYWNpdHkgYmV0d2VlbiAwLjAgYW5kIDEuMFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5Z29uRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFN0cm9rZU9wYWNpdHk6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHN0cm9rZSB3aWR0aCBpbiBwaXhlbHMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlnb25EaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgU3Ryb2tlV2VpZ2h0OiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgcG9seWdvbi5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBUaXRsZTogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoaXMgcG9seWdvbiBpcyB2aXNpYmxlIG9uIHRoZSBtYXAuIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlnb25EaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgVmlzaWJsZTogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHpJbmRleCBjb21wYXJlZCB0byBvdGhlciBwb2x5cy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICB6SW5kZXg6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gY2xpY2sgZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlnb24uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlnb25EaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgQ2xpY2s6IEV2ZW50RW1pdHRlcjxJUG9seWdvbkV2ZW50PjtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gZGJsY2xpY2sgZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlnb24uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlnb25EaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgRGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxJUG9seWdvbkV2ZW50PjtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBldmVudCBpcyByZXBlYXRlZGx5IGZpcmVkIHdoaWxlIHRoZSB1c2VyIGRyYWdzIHRoZSBwb2x5Z29uLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5Z29uRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIERyYWc6IEV2ZW50RW1pdHRlcjxJUG9seWdvbkV2ZW50PjtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIHN0b3BzIGRyYWdnaW5nIHRoZSBwb2x5Z29uLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5Z29uRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIERyYWdFbmQ6IEV2ZW50RW1pdHRlcjxJUG9seWdvbkV2ZW50PjtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIHN0YXJ0cyBkcmFnZ2luZyB0aGUgcG9seWdvbi5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBEcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxJUG9seWdvbkV2ZW50PjtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gbW91c2Vkb3duIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBQb2x5Z29uLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5Z29uRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIE1vdXNlRG93bjogRXZlbnRFbWl0dGVyPElQb2x5Z29uRXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZW1vdmUgZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlnb24uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlnb25EaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgTW91c2VNb3ZlOiBFdmVudEVtaXR0ZXI8SVBvbHlnb25FdmVudD47XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgb24gUG9seWdvbiBtb3VzZW91dC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBNb3VzZU91dDogRXZlbnRFbWl0dGVyPElQb2x5Z29uRXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIG9uIFBvbHlnb24gbW91c2VvdmVyLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5Z29uRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIE1vdXNlT3ZlcjogRXZlbnRFbWl0dGVyPElQb2x5Z29uRXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZSB0aGUgRE9NIG1vdXNldXAgZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlnb25cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBNb3VzZVVwOiBFdmVudEVtaXR0ZXI8SVBvbHlnb25FdmVudD47XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgUG9seWdvbiBpcyByaWdodC1jbGlja2VkIG9uLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5Z29uRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFJpZ2h0Q2xpY2s6IEV2ZW50RW1pdHRlcjxJUG9seWdvbkV2ZW50PjtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIGVkaXRpbmcgaGFzIGNvbXBsZXRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBQYXRoQ2hhbmdlZDogRXZlbnRFbWl0dGVyPElQb2x5Z29uRXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHdoZXRoZXIgdGhlIHBvbHlnb24gaGFzIGJlZW4gcmVnaXN0ZXJlZCB3aXRoIHRoZSBzZXJ2aWNlLlxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBBZGRlZFRvU2VydmljZTogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBpZCBvZiB0aGUgcG9seWdvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5Z29uRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IElkOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGlkIG9mIHRoZSBwb2x5Z29uIGFzIGEgc3RyaW5nLlxyXG4gICAgICpcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlnb25EaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgSWRBc1N0cmluZzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHdoZXRoZXIgdGhlIHBvbHlnb24gaXMgaW4gYSBjdXN0b20gbGF5ZXIuIFNlZSB7QGxpbmsgTWFwTGF5ZXJ9LlxyXG4gICAgICpcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlnb25EaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgSW5DdXN0b21MYXllcjogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogZ2V0cyB0aGUgaWQgb2YgdGhlIExheWVyIHRoZSBwb2x5Z29uIGJlbG9uZ3MgdG8uXHJcbiAgICAgKlxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBMYXllcklkOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTWFwUG9seWdvbkRpcmVjdGl2ZS5cclxuICAgICAqIEBwYXJhbSBfcG9seWdvbk1hbmFnZXJcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihfcG9seWdvblNlcnZpY2U6IFBvbHlnb25TZXJ2aWNlLCBfY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKTtcclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGFmdGVyIHRoZSBjb250ZW50IGludGlhbGl6YXRpb24gb2YgdGhlIGRpcmVjdGl2ZSBpcyBjb21wbGV0ZS4gUGFydCBvZiB0aGUgbmcgQ29tcG9uZW50IGxpZmUgY3ljbGUuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlnb25EaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIGNoYW5nZXMgdG8gdGhlIGRhdGFib3VkIHByb3BlcnRpZXMgb2NjdXIuIFBhcnQgb2YgdGhlIG5nIENvbXBvbmVudCBsaWZlIGN5Y2xlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjaGFuZ2VzIC0gQ2hhbmdlcyB0aGF0IGhhdmUgb2NjdXJlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgcG95Z29uIGlzIGJlaW5nIGRlc3Ryb3llZC4gUGFydCBvZiB0aGUgbmcgQ29tcG9uZW50IGxpZmUgY3ljbGUuIFJlbGVhc2UgcmVzb3VyY2VzLlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaXJlcyB1cCB0aGUgZXZlbnQgcmVjZWl2ZXJzLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5Z29uRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgQWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIElQb2x5Z29uIG9wdGlvbiBjaGFuZ2VzZXQgZnJvbSBkaXJlY3RpdmUgc2V0dGluZ3MuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNoYW5nZXMgLSB7QGxpbmsgU2ltcGxlQ2hhbmdlc30gaWRlbnRpZnlpbmcgdGhlIGNoYW5nZXMgdGhhdCBvY2N1cmVkLlxyXG4gICAgICogQHJldHVybnMgLSB7QGxpbmsgSVBvbHlnb25PcHRpb25zfSBjb250YWluaW5nIHRoZSBwb2x5Z29uIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlnb25EaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBHZW5lcmF0ZVBvbHlnb25DaGFuZ2VTZXQoY2hhbmdlcyk7XHJcbn1cclxuIl19