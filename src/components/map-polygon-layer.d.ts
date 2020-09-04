import { SimpleChange, OnDestroy, OnChanges, EventEmitter, AfterContentInit, NgZone } from '@angular/core';
import { IPoint } from '../interfaces/ipoint';
import { IPolygonEvent } from '../interfaces/ipolygon-event';
import { IPolygonOptions } from '../interfaces/ipolygon-options';
import { ILabelOptions } from '../interfaces/ilabel-options';
import { LayerService } from '../services/layer.service';
import { MapService } from '../services/map.service';
/**
 * MapPolygonLayerDirective performantly renders a large set of polygons on a {@link MapComponent}.
 *
 * ### Example
 * ```typescript
 * import {Component} from '@angular/core';
 * import {MapComponent} from '...';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *   .map-container {
 *     height: 300px;
 *   }
 * `],
 * template: `
 *   <x-map [Latitude]="lat" [Longitude]="lng" [Zoom]="zoom">
 *      <x-map-polygon-layer [PolygonOptions]="_polygons"></x-map-polygon-layer>
 *   </x-map>
 * `
 * })
 * ```
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class MapPolygonLayerDirective implements OnDestroy, OnChanges, AfterContentInit {
    private _layerService;
    private _mapService;
    private _zone;
    private _id;
    private _layerPromise;
    private _service;
    private _canvas;
    private _labels;
    private _tooltip;
    private _tooltipSubscriptions;
    private _tooltipVisible;
    private _defaultOptions;
    private _streaming;
    private _polygons;
    private _polygonsLast;
    /**
     * Set the maximum zoom at which the polygon labels are visible. Ignored if ShowLabel is false.
     * @memberof MapPolygonLayerDirective
     */
    LabelMaxZoom: number;
    /**
     * Set the minimum zoom at which the polygon labels are visible. Ignored if ShowLabel is false.
     * @memberof MapPolygonLayerDirective
     */
    LabelMinZoom: number;
    /**
     * Sepcifies styleing options for on-map polygon labels.
     *
     * @memberof MapPolygonLayerDirective
     */
    LabelOptions: ILabelOptions;
    /**
     * Gets or sets An offset applied to the positioning of the layer.
     *
     * @memberof MapPolygonLayerDirective
     */
    LayerOffset: IPoint;
    /**
     * An array of polygon options representing the polygons in the layer.
     *
     * @memberof MapPolygonLayerDirective
     */
    PolygonOptions: Array<IPolygonOptions>;
    /**
     * Whether to show the polygon titles as the labels on the polygons.
     *
     * @memberof MapPolygonLayerDirective
     */
    ShowLabels: boolean;
    /**
     * Whether to show the titles of the polygosn as the tooltips on the polygons.
     *
     * @memberof MapPolygonLayerDirective
     */
    ShowTooltips: boolean;
    /**
     * Sets whether to treat changes in the PolygonOptions as streams of new markers. In this mode, changing the
     * Array supplied in PolygonOptions will be incrementally drawn on the map as opposed to replace the polygons on the map.
     *
     * @memberof MapPolygonLayerDirective
     */
    TreatNewPolygonOptionsAsStream: boolean;
    /**
     * Sets the visibility of the marker layer
     *
     * @memberof MapPolygonLayerDirective
     */
    Visible: boolean;
    /**
     * Gets or sets the z-index of the layer. If not used, layers get stacked in the order created.
     *
     * @memberof MapPolygonLayerDirective
     */
    ZIndex: number;
    /**
     * This event emitter gets emitted when the user clicks a polygon in the layer.
     *
     * @memberof MapPolygonLayerDirective
     */
    PolygonClick: EventEmitter<IPolygonEvent>;
    /**
     * This event is fired when the DOM dblclick event is fired on a polygon in the layer.
     *
     * @memberof MapPolygonLayerDirective
     */
    PolygonDblClick: EventEmitter<IPolygonEvent>;
    /**
     * This event is fired when the DOM mousemove event is fired on a polygon in the layer.
     *
     * @memberof MapPolygonLayerDirective
     */
    PolygonMouseMove: EventEmitter<IPolygonEvent>;
    /**
     * This event is fired on mouseout on a polygon in the layer.
     *
     * @memberof MapPolygonLayerDirective
     */
    PolygonMouseOut: EventEmitter<IPolygonEvent>;
    /**
     * This event is fired on mouseover on a polygon in a layer.
     *
     * @memberof MapPolygonLayerDirective
     */
    PolygonMouseOver: EventEmitter<IPolygonEvent>;
    /**
     * Gets the id of the marker layer.
     *
     * @readonly
     * @memberof MapPolygonLayerDirective
     */
    readonly Id: number;
    /**
     * Creates an instance of MapPolygonLayerDirective.
     * @param _layerService - Concreate implementation of a {@link LayerService}.
     * @param _mapService - Concreate implementation of a {@link MapService}.
     * @param _zone - Concreate implementation of a {@link NgZone} service.
     * @memberof MapPolygonLayerDirective
     */
    constructor(_layerService: LayerService, _mapService: MapService, _zone: NgZone);
    /**
     * Called after Component content initialization. Part of ng Component life cycle.
     *
     * @memberof MapPolygonLayerDirective
     */
    ngAfterContentInit(): void;
    /**
     * Called on component destruction. Frees the resources used by the component. Part of the ng Component life cycle.
     *
     * @memberof MapPolygonLayerDirective
     */
    ngOnDestroy(): void;
    /**
     * Reacts to changes in data-bound properties of the component and actuates property changes in the underling layer model.
     *
     * @param changes - collection of changes.
     * @memberof MapPolygonLayerDirective
     */
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    /**
     * Obtains a string representation of the Marker Id.
     * @returns - string representation of the marker id.
     * @memberof MapPolygonLayerDirective
     */
    toString(): string;
    /**
     * Adds various event listeners for the marker.
     *
     * @param p - the polygon for which to add the event.
     *
     * @memberof MapPolygonLayerDirective
     */
    private AddEventListeners(p);
    /**
     * Draws the polygon labels. Called by the Canvas overlay.
     *
     * @param el - The canvas on which to draw the labels.
     * @memberof MapPolygonLayerDirective
     */
    private DrawLabels(el);
    /**
     * Draws the label text at the appropriate place on the canvas.
     * @param ctx - Canvas drawing context.
     * @param loc - Pixel location on the canvas where to center the text.
     * @param text - Text to draw.
     */
    private DrawText(ctx, loc, text);
    /**
     * Manages the tooltip and the attachment of the associated events.
     *
     * @param show - True to enable the tooltip, false to disable.
     * @memberof MapPolygonLayerDirective
     */
    private ManageTooltip(show);
    /**
     * Sets or updates the polygons based on the polygon options. This will place the polygons on the map
     * and register the associated events.
     *
     * @memberof MapPolygonLayerDirective
     * @method
     */
    private UpdatePolygons();
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MapPolygonLayerDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MapPolygonLayerDirective, "x-map-polygon-layer", never, { "LabelMaxZoom": "LabelMaxZoom"; "LabelMinZoom": "LabelMinZoom"; "LayerOffset": "LayerOffset"; "ShowLabels": "ShowLabels"; "ShowTooltips": "ShowTooltips"; "ZIndex": "ZIndex"; "PolygonOptions": "PolygonOptions"; "TreatNewPolygonOptionsAsStream": "TreatNewPolygonOptionsAsStream"; "LabelOptions": "LabelOptions"; "Visible": "Visible"; }, { "PolygonClick": "PolygonClick"; "PolygonDblClick": "PolygonDblClick"; "PolygonMouseMove": "PolygonMouseMove"; "PolygonMouseOut": "PolygonMouseOut"; "PolygonMouseOver": "PolygonMouseOver"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXBvbHlnb24tbGF5ZXIuZC50cyIsInNvdXJjZXMiOlsibWFwLXBvbHlnb24tbGF5ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbXBsZUNoYW5nZSwgT25EZXN0cm95LCBPbkNoYW5nZXMsIEV2ZW50RW1pdHRlciwgQWZ0ZXJDb250ZW50SW5pdCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElQb2ludCB9IGZyb20gJy4uL2ludGVyZmFjZXMvaXBvaW50JztcclxuaW1wb3J0IHsgSVBvbHlnb25FdmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvaXBvbHlnb24tZXZlbnQnO1xyXG5pbXBvcnQgeyBJUG9seWdvbk9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2lwb2x5Z29uLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBJTGFiZWxPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbGFiZWwtb3B0aW9ucyc7XHJcbmltcG9ydCB7IExheWVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xheWVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbWFwLnNlcnZpY2UnO1xyXG4vKipcclxuICogTWFwUG9seWdvbkxheWVyRGlyZWN0aXZlIHBlcmZvcm1hbnRseSByZW5kZXJzIGEgbGFyZ2Ugc2V0IG9mIHBvbHlnb25zIG9uIGEge0BsaW5rIE1hcENvbXBvbmVudH0uXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4gKiBpbXBvcnQge01hcENvbXBvbmVudH0gZnJvbSAnLi4uJztcclxuICpcclxuICogQENvbXBvbmVudCh7XHJcbiAqICBzZWxlY3RvcjogJ215LW1hcC1jbXAnLFxyXG4gKiAgc3R5bGVzOiBbYFxyXG4gKiAgIC5tYXAtY29udGFpbmVyIHtcclxuICogICAgIGhlaWdodDogMzAwcHg7XHJcbiAqICAgfVxyXG4gKiBgXSxcclxuICogdGVtcGxhdGU6IGBcclxuICogICA8eC1tYXAgW0xhdGl0dWRlXT1cImxhdFwiIFtMb25naXR1ZGVdPVwibG5nXCIgW1pvb21dPVwiem9vbVwiPlxyXG4gKiAgICAgIDx4LW1hcC1wb2x5Z29uLWxheWVyIFtQb2x5Z29uT3B0aW9uc109XCJfcG9seWdvbnNcIj48L3gtbWFwLXBvbHlnb24tbGF5ZXI+XHJcbiAqICAgPC94LW1hcD5cclxuICogYFxyXG4gKiB9KVxyXG4gKiBgYGBcclxuICpcclxuICogQGV4cG9ydFxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTWFwUG9seWdvbkxheWVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQge1xyXG4gICAgcHJpdmF0ZSBfbGF5ZXJTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBfbWFwU2VydmljZTtcclxuICAgIHByaXZhdGUgX3pvbmU7XHJcbiAgICBwcml2YXRlIF9pZDtcclxuICAgIHByaXZhdGUgX2xheWVyUHJvbWlzZTtcclxuICAgIHByaXZhdGUgX3NlcnZpY2U7XHJcbiAgICBwcml2YXRlIF9jYW52YXM7XHJcbiAgICBwcml2YXRlIF9sYWJlbHM7XHJcbiAgICBwcml2YXRlIF90b29sdGlwO1xyXG4gICAgcHJpdmF0ZSBfdG9vbHRpcFN1YnNjcmlwdGlvbnM7XHJcbiAgICBwcml2YXRlIF90b29sdGlwVmlzaWJsZTtcclxuICAgIHByaXZhdGUgX2RlZmF1bHRPcHRpb25zO1xyXG4gICAgcHJpdmF0ZSBfc3RyZWFtaW5nO1xyXG4gICAgcHJpdmF0ZSBfcG9seWdvbnM7XHJcbiAgICBwcml2YXRlIF9wb2x5Z29uc0xhc3Q7XHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgbWF4aW11bSB6b29tIGF0IHdoaWNoIHRoZSBwb2x5Z29uIGxhYmVscyBhcmUgdmlzaWJsZS4gSWdub3JlZCBpZiBTaG93TGFiZWwgaXMgZmFsc2UuXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIExhYmVsTWF4Wm9vbTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIG1pbmltdW0gem9vbSBhdCB3aGljaCB0aGUgcG9seWdvbiBsYWJlbHMgYXJlIHZpc2libGUuIElnbm9yZWQgaWYgU2hvd0xhYmVsIGlzIGZhbHNlLlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlnb25MYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBMYWJlbE1pblpvb206IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogU2VwY2lmaWVzIHN0eWxlaW5nIG9wdGlvbnMgZm9yIG9uLW1hcCBwb2x5Z29uIGxhYmVscy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIExhYmVsT3B0aW9uczogSUxhYmVsT3B0aW9ucztcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIEFuIG9mZnNldCBhcHBsaWVkIHRvIHRoZSBwb3NpdGlvbmluZyBvZiB0aGUgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlnb25MYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBMYXllck9mZnNldDogSVBvaW50O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhcnJheSBvZiBwb2x5Z29uIG9wdGlvbnMgcmVwcmVzZW50aW5nIHRoZSBwb2x5Z29ucyBpbiB0aGUgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlnb25MYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBQb2x5Z29uT3B0aW9uczogQXJyYXk8SVBvbHlnb25PcHRpb25zPjtcclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0byBzaG93IHRoZSBwb2x5Z29uIHRpdGxlcyBhcyB0aGUgbGFiZWxzIG9uIHRoZSBwb2x5Z29ucy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFNob3dMYWJlbHM6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdG8gc2hvdyB0aGUgdGl0bGVzIG9mIHRoZSBwb2x5Z29zbiBhcyB0aGUgdG9vbHRpcHMgb24gdGhlIHBvbHlnb25zLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5Z29uTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgU2hvd1Rvb2x0aXBzOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHdoZXRoZXIgdG8gdHJlYXQgY2hhbmdlcyBpbiB0aGUgUG9seWdvbk9wdGlvbnMgYXMgc3RyZWFtcyBvZiBuZXcgbWFya2Vycy4gSW4gdGhpcyBtb2RlLCBjaGFuZ2luZyB0aGVcclxuICAgICAqIEFycmF5IHN1cHBsaWVkIGluIFBvbHlnb25PcHRpb25zIHdpbGwgYmUgaW5jcmVtZW50YWxseSBkcmF3biBvbiB0aGUgbWFwIGFzIG9wcG9zZWQgdG8gcmVwbGFjZSB0aGUgcG9seWdvbnMgb24gdGhlIG1hcC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFRyZWF0TmV3UG9seWdvbk9wdGlvbnNBc1N0cmVhbTogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgbWFya2VyIGxheWVyXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlnb25MYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBWaXNpYmxlOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIHotaW5kZXggb2YgdGhlIGxheWVyLiBJZiBub3QgdXNlZCwgbGF5ZXJzIGdldCBzdGFja2VkIGluIHRoZSBvcmRlciBjcmVhdGVkLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5Z29uTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgWkluZGV4OiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBjbGlja3MgYSBwb2x5Z29uIGluIHRoZSBsYXllci5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFBvbHlnb25DbGljazogRXZlbnRFbWl0dGVyPElQb2x5Z29uRXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBkYmxjbGljayBldmVudCBpcyBmaXJlZCBvbiBhIHBvbHlnb24gaW4gdGhlIGxheWVyLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5Z29uTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgUG9seWdvbkRibENsaWNrOiBFdmVudEVtaXR0ZXI8SVBvbHlnb25FdmVudD47XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIG1vdXNlbW92ZSBldmVudCBpcyBmaXJlZCBvbiBhIHBvbHlnb24gaW4gdGhlIGxheWVyLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5Z29uTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgUG9seWdvbk1vdXNlTW92ZTogRXZlbnRFbWl0dGVyPElQb2x5Z29uRXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIG9uIG1vdXNlb3V0IG9uIGEgcG9seWdvbiBpbiB0aGUgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlnb25MYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBQb2x5Z29uTW91c2VPdXQ6IEV2ZW50RW1pdHRlcjxJUG9seWdvbkV2ZW50PjtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCBvbiBtb3VzZW92ZXIgb24gYSBwb2x5Z29uIGluIGEgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlnb25MYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBQb2x5Z29uTW91c2VPdmVyOiBFdmVudEVtaXR0ZXI8SVBvbHlnb25FdmVudD47XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGlkIG9mIHRoZSBtYXJrZXIgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IElkOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTWFwUG9seWdvbkxheWVyRGlyZWN0aXZlLlxyXG4gICAgICogQHBhcmFtIF9sYXllclNlcnZpY2UgLSBDb25jcmVhdGUgaW1wbGVtZW50YXRpb24gb2YgYSB7QGxpbmsgTGF5ZXJTZXJ2aWNlfS5cclxuICAgICAqIEBwYXJhbSBfbWFwU2VydmljZSAtIENvbmNyZWF0ZSBpbXBsZW1lbnRhdGlvbiBvZiBhIHtAbGluayBNYXBTZXJ2aWNlfS5cclxuICAgICAqIEBwYXJhbSBfem9uZSAtIENvbmNyZWF0ZSBpbXBsZW1lbnRhdGlvbiBvZiBhIHtAbGluayBOZ1pvbmV9IHNlcnZpY2UuXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKF9sYXllclNlcnZpY2U6IExheWVyU2VydmljZSwgX21hcFNlcnZpY2U6IE1hcFNlcnZpY2UsIF96b25lOiBOZ1pvbmUpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgQ29tcG9uZW50IGNvbnRlbnQgaW5pdGlhbGl6YXRpb24uIFBhcnQgb2YgbmcgQ29tcG9uZW50IGxpZmUgY3ljbGUuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlnb25MYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIGNvbXBvbmVudCBkZXN0cnVjdGlvbi4gRnJlZXMgdGhlIHJlc291cmNlcyB1c2VkIGJ5IHRoZSBjb21wb25lbnQuIFBhcnQgb2YgdGhlIG5nIENvbXBvbmVudCBsaWZlIGN5Y2xlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5Z29uTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogUmVhY3RzIHRvIGNoYW5nZXMgaW4gZGF0YS1ib3VuZCBwcm9wZXJ0aWVzIG9mIHRoZSBjb21wb25lbnQgYW5kIGFjdHVhdGVzIHByb3BlcnR5IGNoYW5nZXMgaW4gdGhlIHVuZGVybGluZyBsYXllciBtb2RlbC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY2hhbmdlcyAtIGNvbGxlY3Rpb24gb2YgY2hhbmdlcy5cclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5Z29uTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZTtcclxuICAgIH0pOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBNYXJrZXIgSWQuXHJcbiAgICAgKiBAcmV0dXJucyAtIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWFya2VyIGlkLlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlnb25MYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgdmFyaW91cyBldmVudCBsaXN0ZW5lcnMgZm9yIHRoZSBtYXJrZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHAgLSB0aGUgcG9seWdvbiBmb3Igd2hpY2ggdG8gYWRkIHRoZSBldmVudC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgQWRkRXZlbnRMaXN0ZW5lcnMocCk7XHJcbiAgICAvKipcclxuICAgICAqIERyYXdzIHRoZSBwb2x5Z29uIGxhYmVscy4gQ2FsbGVkIGJ5IHRoZSBDYW52YXMgb3ZlcmxheS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZWwgLSBUaGUgY2FudmFzIG9uIHdoaWNoIHRvIGRyYXcgdGhlIGxhYmVscy5cclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5Z29uTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBEcmF3TGFiZWxzKGVsKTtcclxuICAgIC8qKlxyXG4gICAgICogRHJhd3MgdGhlIGxhYmVsIHRleHQgYXQgdGhlIGFwcHJvcHJpYXRlIHBsYWNlIG9uIHRoZSBjYW52YXMuXHJcbiAgICAgKiBAcGFyYW0gY3R4IC0gQ2FudmFzIGRyYXdpbmcgY29udGV4dC5cclxuICAgICAqIEBwYXJhbSBsb2MgLSBQaXhlbCBsb2NhdGlvbiBvbiB0aGUgY2FudmFzIHdoZXJlIHRvIGNlbnRlciB0aGUgdGV4dC5cclxuICAgICAqIEBwYXJhbSB0ZXh0IC0gVGV4dCB0byBkcmF3LlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIERyYXdUZXh0KGN0eCwgbG9jLCB0ZXh0KTtcclxuICAgIC8qKlxyXG4gICAgICogTWFuYWdlcyB0aGUgdG9vbHRpcCBhbmQgdGhlIGF0dGFjaG1lbnQgb2YgdGhlIGFzc29jaWF0ZWQgZXZlbnRzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBzaG93IC0gVHJ1ZSB0byBlbmFibGUgdGhlIHRvb2x0aXAsIGZhbHNlIHRvIGRpc2FibGUuXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgTWFuYWdlVG9vbHRpcChzaG93KTtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBvciB1cGRhdGVzIHRoZSBwb2x5Z29ucyBiYXNlZCBvbiB0aGUgcG9seWdvbiBvcHRpb25zLiBUaGlzIHdpbGwgcGxhY2UgdGhlIHBvbHlnb25zIG9uIHRoZSBtYXBcclxuICAgICAqIGFuZCByZWdpc3RlciB0aGUgYXNzb2NpYXRlZCBldmVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlnb25MYXllckRpcmVjdGl2ZVxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIFVwZGF0ZVBvbHlnb25zKCk7XHJcbn1cclxuIl19