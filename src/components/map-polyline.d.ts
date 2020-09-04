import { OnDestroy, OnChanges, ViewContainerRef, EventEmitter, AfterContentInit, SimpleChanges } from '@angular/core';
import { ILatLong } from '../interfaces/ilatlong';
import { PolylineService } from '../services/polyline.service';
import { IPolylineEvent } from '../interfaces/ipolyline-event';
import { InfoBoxComponent } from './infobox';
/**
 *
 * MapPolylineDirective renders a polyline inside a {@link MapComponent}.
 *
 * ### Example
 * ```typescript
 * import {Component} from '@angular/core';
 * import {MapComponent, MapPolylineDirective} from '...';
 *
 * @Component({
 *  selector: 'my-map,
 *  styles: [`
 *   .map-container { height: 300px; }
 * `],
 * template: `
 *   <x-map [Latitude]="lat" [Longitude]="lng" [Zoom]="zoom">
 *      <x-map-polyline [Paths]="path"></x-map-polyline>
 *   </x-map>
 * `
 * })
 * ```
 *
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class MapPolylineDirective implements OnDestroy, OnChanges, AfterContentInit {
    private _polylineService;
    private _containerRef;
    private _inCustomLayer;
    private _id;
    private _layerId;
    private _addedToService;
    private _events;
    protected _infoBox: InfoBoxComponent;
    /**
     * Gets or sets whether this Polyline handles mouse events.
     *
     * @memberof MapPolylineDirective
     */
    Clickable: boolean;
    /**
     * If set to true, the user can drag this shape over the map.
     *
     * @memberof MapPolylineDirective
     */
    Draggable: boolean;
    /**
     * If set to true, the user can edit this shape by dragging the control
     * points shown at the vertices and on each segment.
     *
     * @memberof MapPolylineDirective
     */
    Editable: boolean;
    /**
     * When true, edges of the polyline are interpreted as geodesic and will
     * follow the curvature of the Earth. When false, edges of the polyline are
     * rendered as straight lines in screen space. Note that the shape of a
     * geodesic polyline may appear to change when dragged, as the dimensions
     * are maintained relative to the surface of the earth. Defaults to false.
     *
     * @memberof MapPolylineDirective
     */
    Geodesic: boolean;
    /**
     * Arbitary metadata to assign to the Polyline. This is useful for events
     *
     * @memberof MapPolylineDirective
     */
    Metadata: Map<string, any>;
    /**
     * The ordered sequence of coordinates that designates a polyline.
     * Simple polylines may be defined using a single array of LatLngs. More
     * complex polylines may specify an array of arrays.
     *
     * @memberof MapPolylineDirective
     */
    Path: Array<ILatLong> | Array<Array<ILatLong>>;
    /**
     * Whether to show the title of the polyline as the tooltip on the polygon.
     *
     * @memberof MapPolylineDirective
     */
    ShowTooltip: boolean;
    /**
     * The stroke color.
     *
     * @memberof MapPolylineDirective
     */
    StrokeColor: string;
    /**
     * The stroke opacity between 0.0 and 1.0
     *
     * @memberof MapPolylineDirective
     */
    StrokeOpacity: number;
    /**
     * The stroke width in pixels.
     *
     * @memberof MapPolylineDirective
     */
    StrokeWeight: number;
    /**
     * The title of the polygon.
     *
     * @memberof MapPolylineDirective
     */
    Title: string;
    /**
     * Whether this polyline is visible on the map. Defaults to true.
     *
     * @memberof MapPolylineDirective
     */
    Visible: boolean;
    /**
     * The zIndex compared to other polys.
     *
     * @memberof MapPolylineDirective
     */
    zIndex: number;
    /**
     * This event is fired when the DOM click event is fired on the Polyline.
     *
     * @memberof MapPolylineDirective
     */
    Click: EventEmitter<IPolylineEvent>;
    /**
     * This event is fired when the DOM dblclick event is fired on the Polyline.
     *
     * @memberof MapPolylineDirective
     */
    DblClick: EventEmitter<IPolylineEvent>;
    /**
     * This event is repeatedly fired while the user drags the polyline.
     *
     * @memberof MapPolylineDirective
     */
    Drag: EventEmitter<IPolylineEvent>;
    /**
     * This event is fired when the user stops dragging the polyline.
     *
     * @memberof MapPolylineDirective
     */
    DragEnd: EventEmitter<IPolylineEvent>;
    /**
     * This event is fired when the user starts dragging the polyline.
     *
     * @memberof MapPolylineDirective
     */
    DragStart: EventEmitter<IPolylineEvent>;
    /**
     * This event is fired when the DOM mousedown event is fired on the Polyline.
     *
     * @memberof MapPolylineDirective
     */
    MouseDown: EventEmitter<IPolylineEvent>;
    /**
     * This event is fired when the DOM mousemove event is fired on the Polyline.
     *
     * @memberof MapPolylineDirective
     */
    MouseMove: EventEmitter<IPolylineEvent>;
    /**
     * This event is fired on Polyline mouseout.
     *
     * @memberof MapPolylineDirective
     */
    MouseOut: EventEmitter<IPolylineEvent>;
    /**
     * This event is fired on Polyline mouseover.
     *
     * @memberof MapPolylineDirective
     */
    MouseOver: EventEmitter<IPolylineEvent>;
    /**
     * This event is fired whe the DOM mouseup event is fired on the Polyline
     *
     * @memberof MapPolylineDirective
     */
    MouseUp: EventEmitter<IPolylineEvent>;
    /**
     * This even is fired when the Polyline is right-clicked on.
     *
     * @memberof MapPolylineDirective
     */
    RightClick: EventEmitter<IPolylineEvent>;
    /**
     * Gets whether the polyline has been registered with the service.
     * @readonly
     * @memberof MapPolylineDirective
     */
    readonly AddedToService: boolean;
    /**
     * Get the id of the polyline.
     *
     * @readonly
     * @memberof MapPolylineDirective
     */
    readonly Id: number;
    /**
     * Gets the id of the polyline as a string.
     *
     * @readonly
     * @memberof MapPolylineDirective
     */
    readonly IdAsString: string;
    /**
     * Gets whether the polyline is in a custom layer. See {@link MapLayer}.
     *
     * @readonly
     * @memberof MapPolylineDirective
     */
    readonly InCustomLayer: boolean;
    /**
     * gets the id of the Layer the polyline belongs to.
     *
     * @readonly
     * @memberof MapPolylineDirective
     */
    readonly LayerId: number;
    /**
     * Creates an instance of MapPolylineDirective.
     * @param _polylineManager
     *
     * @memberof MapPolylineDirective
     */
    constructor(_polylineService: PolylineService, _containerRef: ViewContainerRef);
    /**
     * Called after the content intialization of the directive is complete. Part of the ng Component life cycle.
     *
     * @memberof MapPolylineDirective
     */
    ngAfterContentInit(): void;
    /**
     * Called when changes to the databoud properties occur. Part of the ng Component life cycle.
     *
     * @param changes - Changes that have occured.
     *
     * @memberof MapPolylineDirective
     */
    ngOnChanges(changes: SimpleChanges): any;
    /**
     * Called when the polyline is being destroyed. Part of the ng Component life cycle. Release resources.
     *
     *
     * @memberof MapPolylineDirective
     */
    ngOnDestroy(): void;
    /**
     * Wires up the event receivers.
     *
     * @memberof MapPolylineDirective
     */
    private AddEventListeners();
    /**
     * Generates IPolyline option changeset from directive settings.
     *
     * @param changes - {@link SimpleChanges} identifying the changes that occured.
     * @returns - {@link IPolylineOptions} containing the polyline options.
     *
     * @memberof MapPolylineDirective
     */
    private GeneratePolylineChangeSet(changes);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MapPolylineDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MapPolylineDirective, "x-map-polyline", never, { "Clickable": "Clickable"; "Draggable": "Draggable"; "Editable": "Editable"; "Geodesic": "Geodesic"; "Metadata": "Metadata"; "Path": "Path"; "ShowTooltip": "ShowTooltip"; "StrokeColor": "StrokeColor"; "StrokeOpacity": "StrokeOpacity"; "StrokeWeight": "StrokeWeight"; "Title": "Title"; "Visible": "Visible"; "zIndex": "zIndex"; }, { "Click": "Click"; "DblClick": "DblClick"; "Drag": "Drag"; "DragEnd": "DragEnd"; "DragStart": "DragStart"; "MouseDown": "MouseDown"; "MouseMove": "MouseMove"; "MouseOut": "MouseOut"; "MouseOver": "MouseOver"; "MouseUp": "MouseUp"; "RightClick": "RightClick"; }, ["_infoBox"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXBvbHlsaW5lLmQudHMiLCJzb3VyY2VzIjpbIm1hcC1wb2x5bGluZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkNoYW5nZXMsIFZpZXdDb250YWluZXJSZWYsIEV2ZW50RW1pdHRlciwgQWZ0ZXJDb250ZW50SW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJTGF0TG9uZyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaWxhdGxvbmcnO1xyXG5pbXBvcnQgeyBQb2x5bGluZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wb2x5bGluZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSVBvbHlsaW5lRXZlbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2lwb2x5bGluZS1ldmVudCc7XHJcbmltcG9ydCB7IEluZm9Cb3hDb21wb25lbnQgfSBmcm9tICcuL2luZm9ib3gnO1xyXG4vKipcclxuICpcclxuICogTWFwUG9seWxpbmVEaXJlY3RpdmUgcmVuZGVycyBhIHBvbHlsaW5lIGluc2lkZSBhIHtAbGluayBNYXBDb21wb25lbnR9LlxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuICogaW1wb3J0IHtNYXBDb21wb25lbnQsIE1hcFBvbHlsaW5lRGlyZWN0aXZlfSBmcm9tICcuLi4nO1xyXG4gKlxyXG4gKiBAQ29tcG9uZW50KHtcclxuICogIHNlbGVjdG9yOiAnbXktbWFwLFxyXG4gKiAgc3R5bGVzOiBbYFxyXG4gKiAgIC5tYXAtY29udGFpbmVyIHsgaGVpZ2h0OiAzMDBweDsgfVxyXG4gKiBgXSxcclxuICogdGVtcGxhdGU6IGBcclxuICogICA8eC1tYXAgW0xhdGl0dWRlXT1cImxhdFwiIFtMb25naXR1ZGVdPVwibG5nXCIgW1pvb21dPVwiem9vbVwiPlxyXG4gKiAgICAgIDx4LW1hcC1wb2x5bGluZSBbUGF0aHNdPVwicGF0aFwiPjwveC1tYXAtcG9seWxpbmU+XHJcbiAqICAgPC94LW1hcD5cclxuICogYFxyXG4gKiB9KVxyXG4gKiBgYGBcclxuICpcclxuICpcclxuICogQGV4cG9ydFxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTWFwUG9seWxpbmVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgICBwcml2YXRlIF9wb2x5bGluZVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIF9jb250YWluZXJSZWY7XHJcbiAgICBwcml2YXRlIF9pbkN1c3RvbUxheWVyO1xyXG4gICAgcHJpdmF0ZSBfaWQ7XHJcbiAgICBwcml2YXRlIF9sYXllcklkO1xyXG4gICAgcHJpdmF0ZSBfYWRkZWRUb1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIF9ldmVudHM7XHJcbiAgICBwcm90ZWN0ZWQgX2luZm9Cb3g6IEluZm9Cb3hDb21wb25lbnQ7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB3aGV0aGVyIHRoaXMgUG9seWxpbmUgaGFuZGxlcyBtb3VzZSBldmVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIENsaWNrYWJsZTogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogSWYgc2V0IHRvIHRydWUsIHRoZSB1c2VyIGNhbiBkcmFnIHRoaXMgc2hhcGUgb3ZlciB0aGUgbWFwLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5bGluZURpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBEcmFnZ2FibGU6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIElmIHNldCB0byB0cnVlLCB0aGUgdXNlciBjYW4gZWRpdCB0aGlzIHNoYXBlIGJ5IGRyYWdnaW5nIHRoZSBjb250cm9sXHJcbiAgICAgKiBwb2ludHMgc2hvd24gYXQgdGhlIHZlcnRpY2VzIGFuZCBvbiBlYWNoIHNlZ21lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIEVkaXRhYmxlOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIHRydWUsIGVkZ2VzIG9mIHRoZSBwb2x5bGluZSBhcmUgaW50ZXJwcmV0ZWQgYXMgZ2VvZGVzaWMgYW5kIHdpbGxcclxuICAgICAqIGZvbGxvdyB0aGUgY3VydmF0dXJlIG9mIHRoZSBFYXJ0aC4gV2hlbiBmYWxzZSwgZWRnZXMgb2YgdGhlIHBvbHlsaW5lIGFyZVxyXG4gICAgICogcmVuZGVyZWQgYXMgc3RyYWlnaHQgbGluZXMgaW4gc2NyZWVuIHNwYWNlLiBOb3RlIHRoYXQgdGhlIHNoYXBlIG9mIGFcclxuICAgICAqIGdlb2Rlc2ljIHBvbHlsaW5lIG1heSBhcHBlYXIgdG8gY2hhbmdlIHdoZW4gZHJhZ2dlZCwgYXMgdGhlIGRpbWVuc2lvbnNcclxuICAgICAqIGFyZSBtYWludGFpbmVkIHJlbGF0aXZlIHRvIHRoZSBzdXJmYWNlIG9mIHRoZSBlYXJ0aC4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIEdlb2Rlc2ljOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBcmJpdGFyeSBtZXRhZGF0YSB0byBhc3NpZ24gdG8gdGhlIFBvbHlsaW5lLiBUaGlzIGlzIHVzZWZ1bCBmb3IgZXZlbnRzXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIE1ldGFkYXRhOiBNYXA8c3RyaW5nLCBhbnk+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgb3JkZXJlZCBzZXF1ZW5jZSBvZiBjb29yZGluYXRlcyB0aGF0IGRlc2lnbmF0ZXMgYSBwb2x5bGluZS5cclxuICAgICAqIFNpbXBsZSBwb2x5bGluZXMgbWF5IGJlIGRlZmluZWQgdXNpbmcgYSBzaW5nbGUgYXJyYXkgb2YgTGF0TG5ncy4gTW9yZVxyXG4gICAgICogY29tcGxleCBwb2x5bGluZXMgbWF5IHNwZWNpZnkgYW4gYXJyYXkgb2YgYXJyYXlzLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5bGluZURpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBQYXRoOiBBcnJheTxJTGF0TG9uZz4gfCBBcnJheTxBcnJheTxJTGF0TG9uZz4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRvIHNob3cgdGhlIHRpdGxlIG9mIHRoZSBwb2x5bGluZSBhcyB0aGUgdG9vbHRpcCBvbiB0aGUgcG9seWdvbi5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWxpbmVEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgU2hvd1Rvb2x0aXA6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzdHJva2UgY29sb3IuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFN0cm9rZUNvbG9yOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzdHJva2Ugb3BhY2l0eSBiZXR3ZWVuIDAuMCBhbmQgMS4wXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFN0cm9rZU9wYWNpdHk6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHN0cm9rZSB3aWR0aCBpbiBwaXhlbHMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFN0cm9rZVdlaWdodDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGl0bGUgb2YgdGhlIHBvbHlnb24uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFRpdGxlOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhpcyBwb2x5bGluZSBpcyB2aXNpYmxlIG9uIHRoZSBtYXAuIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFZpc2libGU6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB6SW5kZXggY29tcGFyZWQgdG8gb3RoZXIgcG9seXMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIHpJbmRleDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBjbGljayBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWxpbmUuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIENsaWNrOiBFdmVudEVtaXR0ZXI8SVBvbHlsaW5lRXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBkYmxjbGljayBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWxpbmUuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIERibENsaWNrOiBFdmVudEVtaXR0ZXI8SVBvbHlsaW5lRXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGlzIHJlcGVhdGVkbHkgZmlyZWQgd2hpbGUgdGhlIHVzZXIgZHJhZ3MgdGhlIHBvbHlsaW5lLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5bGluZURpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBEcmFnOiBFdmVudEVtaXR0ZXI8SVBvbHlsaW5lRXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgc3RvcHMgZHJhZ2dpbmcgdGhlIHBvbHlsaW5lLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5bGluZURpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBEcmFnRW5kOiBFdmVudEVtaXR0ZXI8SVBvbHlsaW5lRXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgc3RhcnRzIGRyYWdnaW5nIHRoZSBwb2x5bGluZS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWxpbmVEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8SVBvbHlsaW5lRXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZWRvd24gZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlsaW5lLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5bGluZURpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBNb3VzZURvd246IEV2ZW50RW1pdHRlcjxJUG9seWxpbmVFdmVudD47XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIG1vdXNlbW92ZSBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWxpbmUuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIE1vdXNlTW92ZTogRXZlbnRFbWl0dGVyPElQb2x5bGluZUV2ZW50PjtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCBvbiBQb2x5bGluZSBtb3VzZW91dC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWxpbmVEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgTW91c2VPdXQ6IEV2ZW50RW1pdHRlcjxJUG9seWxpbmVFdmVudD47XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgb24gUG9seWxpbmUgbW91c2VvdmVyLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5bGluZURpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBNb3VzZU92ZXI6IEV2ZW50RW1pdHRlcjxJUG9seWxpbmVFdmVudD47XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlIHRoZSBET00gbW91c2V1cCBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWxpbmVcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWxpbmVEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgTW91c2VVcDogRXZlbnRFbWl0dGVyPElQb2x5bGluZUV2ZW50PjtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBldmVuIGlzIGZpcmVkIHdoZW4gdGhlIFBvbHlsaW5lIGlzIHJpZ2h0LWNsaWNrZWQgb24uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFJpZ2h0Q2xpY2s6IEV2ZW50RW1pdHRlcjxJUG9seWxpbmVFdmVudD47XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgd2hldGhlciB0aGUgcG9seWxpbmUgaGFzIGJlZW4gcmVnaXN0ZXJlZCB3aXRoIHRoZSBzZXJ2aWNlLlxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWxpbmVEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgQWRkZWRUb1NlcnZpY2U6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgaWQgb2YgdGhlIHBvbHlsaW5lLlxyXG4gICAgICpcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IElkOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGlkIG9mIHRoZSBwb2x5bGluZSBhcyBhIHN0cmluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5bGluZURpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBJZEFzU3RyaW5nOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgd2hldGhlciB0aGUgcG9seWxpbmUgaXMgaW4gYSBjdXN0b20gbGF5ZXIuIFNlZSB7QGxpbmsgTWFwTGF5ZXJ9LlxyXG4gICAgICpcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IEluQ3VzdG9tTGF5ZXI6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIGdldHMgdGhlIGlkIG9mIHRoZSBMYXllciB0aGUgcG9seWxpbmUgYmVsb25ncyB0by5cclxuICAgICAqXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5bGluZURpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBMYXllcklkOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTWFwUG9seWxpbmVEaXJlY3RpdmUuXHJcbiAgICAgKiBAcGFyYW0gX3BvbHlsaW5lTWFuYWdlclxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5bGluZURpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihfcG9seWxpbmVTZXJ2aWNlOiBQb2x5bGluZVNlcnZpY2UsIF9jb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgdGhlIGNvbnRlbnQgaW50aWFsaXphdGlvbiBvZiB0aGUgZGlyZWN0aXZlIGlzIGNvbXBsZXRlLiBQYXJ0IG9mIHRoZSBuZyBDb21wb25lbnQgbGlmZSBjeWNsZS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWxpbmVEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIGNoYW5nZXMgdG8gdGhlIGRhdGFib3VkIHByb3BlcnRpZXMgb2NjdXIuIFBhcnQgb2YgdGhlIG5nIENvbXBvbmVudCBsaWZlIGN5Y2xlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjaGFuZ2VzIC0gQ2hhbmdlcyB0aGF0IGhhdmUgb2NjdXJlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWxpbmVEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIHBvbHlsaW5lIGlzIGJlaW5nIGRlc3Ryb3llZC4gUGFydCBvZiB0aGUgbmcgQ29tcG9uZW50IGxpZmUgY3ljbGUuIFJlbGVhc2UgcmVzb3VyY2VzLlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWxpbmVEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogV2lyZXMgdXAgdGhlIGV2ZW50IHJlY2VpdmVycy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWxpbmVEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBBZGRFdmVudExpc3RlbmVycygpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZXMgSVBvbHlsaW5lIG9wdGlvbiBjaGFuZ2VzZXQgZnJvbSBkaXJlY3RpdmUgc2V0dGluZ3MuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNoYW5nZXMgLSB7QGxpbmsgU2ltcGxlQ2hhbmdlc30gaWRlbnRpZnlpbmcgdGhlIGNoYW5nZXMgdGhhdCBvY2N1cmVkLlxyXG4gICAgICogQHJldHVybnMgLSB7QGxpbmsgSVBvbHlsaW5lT3B0aW9uc30gY29udGFpbmluZyB0aGUgcG9seWxpbmUgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWxpbmVEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBHZW5lcmF0ZVBvbHlsaW5lQ2hhbmdlU2V0KGNoYW5nZXMpO1xyXG59XHJcbiJdfQ==