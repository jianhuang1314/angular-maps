import { SimpleChange, OnDestroy, OnChanges, EventEmitter, AfterContentInit, NgZone } from '@angular/core';
import { IPoint } from '../interfaces/ipoint';
import { IPolylineEvent } from '../interfaces/ipolyline-event';
import { IPolylineOptions } from '../interfaces/ipolyline-options';
import { ILabelOptions } from '../interfaces/ilabel-options';
import { LayerService } from '../services/layer.service';
import { MapService } from '../services/map.service';
/**
 * MapPolylineLayerDirective performantly renders a large set of polyline on a {@link MapComponent}.
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
 *      <x-map-polyline-layer [PolygonOptions]="_polyline"></x-map-polyline-layer>
 *   </x-map>
 * `
 * })
 * ```
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class MapPolylineLayerDirective implements OnDestroy, OnChanges, AfterContentInit {
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
    private _polylines;
    private _polylinesLast;
    /**
     * Set the maximum zoom at which the polyline labels are visible. Ignored if ShowLabel is false.
     * @memberof MapPolylineLayerDirective
     */
    LabelMaxZoom: number;
    /**
     * Set the minimum zoom at which the polyline labels are visible. Ignored if ShowLabel is false.
     * @memberof MapPolylineLayerDirective
     */
    LabelMinZoom: number;
    /**
     * Sepcifies styleing options for on-map polyline labels.
     *
     * @memberof MapPolylineLayerDirective
     */
    LabelOptions: ILabelOptions;
    /**
     * Gets or sets An offset applied to the positioning of the layer.
     *
     * @memberof MapPolylineLayerDirective
     */
    LayerOffset: IPoint;
    /**
     * An array of polyline options representing the polylines in the layer.
     *
     * @memberof MapPolylineLayerDirective
     */
    PolylineOptions: Array<IPolylineOptions>;
    /**
     * Whether to show the polylines titles as the labels on the polylines.
     *
     * @memberof MapPolylineLayerDirective
     */
    ShowLabels: boolean;
    /**
     * Whether to show the titles of the polylines as the tooltips on the polylines.
     *
     * @memberof MapPolylineLayerDirective
     */
    ShowTooltips: boolean;
    /**
     * Sets whether to treat changes in the PolylineOptions as streams of new markers. In this mode, changing the
     * Array supplied in PolylineOptions will be incrementally drawn on the map as opposed to replace the polylines on the map.
     *
     * @memberof MapPolylineLayerDirective
     */
    TreatNewPolylineOptionsAsStream: boolean;
    /**
     * Sets the visibility of the marker layer
     *
     * @memberof MapPolylineLayerDirective
     */
    Visible: boolean;
    /**
     * Gets or sets the z-index of the layer. If not used, layers get stacked in the order created.
     *
     * @memberof MapPolylineLayerDirective
     */
    ZIndex: number;
    /**
     * This event emitter gets emitted when the user clicks a polyline in the layer.
     *
     * @memberof MapPolylineLayerDirective
     */
    PolylineClick: EventEmitter<IPolylineEvent>;
    /**
     * This event is fired when the DOM dblclick event is fired on a polyline in the layer.
     *
     * @memberof MapPolylineLayerDirective
     */
    PolylineDblClick: EventEmitter<IPolylineEvent>;
    /**
     * This event is fired when the DOM mousemove event is fired on a polyline in the layer.
     *
     * @memberof MapPolylineLayerDirective
     */
    PolylineMouseMove: EventEmitter<IPolylineEvent>;
    /**
     * This event is fired on mouseout on a polyline in the layer.
     *
     * @memberof MapPolylineLayerDirective
     */
    PolylineMouseOut: EventEmitter<IPolylineEvent>;
    /**
     * This event is fired on mouseover on a polyline in a layer.
     *
     * @memberof MapPolylineLayerDirective
     */
    PolylineMouseOver: EventEmitter<IPolylineEvent>;
    /**
     * Gets the id of the polyline layer.
     *
     * @readonly
     * @memberof MapPolylineLayerDirective
     */
    readonly Id: number;
    /**
     * Creates an instance of MapPolylineLayerDirective.
     * @param _layerService - Concreate implementation of a {@link LayerService}.
     * @param _mapService - Concreate implementation of a {@link MapService}.
     * @param _zone - Concreate implementation of a {@link NgZone} service.
     * @memberof MapPolylineLayerDirective
     */
    constructor(_layerService: LayerService, _mapService: MapService, _zone: NgZone);
    /**
     * Called after Component content initialization. Part of ng Component life cycle.
     *
     * @memberof MapPolylineLayerDirective
     */
    ngAfterContentInit(): void;
    /**
     * Called on component destruction. Frees the resources used by the component. Part of the ng Component life cycle.
     *
     * @memberof MapPolylineLayerDirective
     */
    ngOnDestroy(): void;
    /**
     * Reacts to changes in data-bound properties of the component and actuates property changes in the underling layer model.
     *
     * @param changes - collection of changes.
     * @memberof MapPolylineLayerDirective
     */
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    /**
     * Obtains a string representation of the Layer Id.
     * @returns - string representation of the layer id.
     * @memberof MapPolylineLayerDirective
     */
    toString(): string;
    /**
     * Adds various event listeners for the polylines.
     *
     * @param p - the polyline for which to add the event.
     *
     * @memberof MapPolylineLayerDirective
     */
    private AddEventListeners(p);
    /**
     * Draws the polyline labels. Called by the Canvas overlay.
     *
     * @param el - The canvas on which to draw the labels.
     * @memberof MapPolylineLayerDirective
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
     * Sets or updates the polyliness based on the polyline options. This will place the polylines on the map
     * and register the associated events.
     *
     * @memberof MapPolylineLayerDirective
     * @method
     */
    private UpdatePolylines();
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MapPolylineLayerDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MapPolylineLayerDirective, "x-map-polyline-layer", never, { "LabelMaxZoom": "LabelMaxZoom"; "LabelMinZoom": "LabelMinZoom"; "LayerOffset": "LayerOffset"; "ShowLabels": "ShowLabels"; "ShowTooltips": "ShowTooltips"; "ZIndex": "ZIndex"; "PolylineOptions": "PolylineOptions"; "TreatNewPolylineOptionsAsStream": "TreatNewPolylineOptionsAsStream"; "LabelOptions": "LabelOptions"; "Visible": "Visible"; }, { "PolylineClick": "PolylineClick"; "PolylineDblClick": "PolylineDblClick"; "PolylineMouseMove": "PolylineMouseMove"; "PolylineMouseOut": "PolylineMouseOut"; "PolylineMouseOver": "PolylineMouseOver"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXBvbHlsaW5lLWxheWVyLmQudHMiLCJzb3VyY2VzIjpbIm1hcC1wb2x5bGluZS1sYXllci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2ltcGxlQ2hhbmdlLCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgRXZlbnRFbWl0dGVyLCBBZnRlckNvbnRlbnRJbml0LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVBvaW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pcG9pbnQnO1xyXG5pbXBvcnQgeyBJUG9seWxpbmVFdmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvaXBvbHlsaW5lLWV2ZW50JztcclxuaW1wb3J0IHsgSVBvbHlsaW5lT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaXBvbHlsaW5lLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBJTGFiZWxPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbGFiZWwtb3B0aW9ucyc7XHJcbmltcG9ydCB7IExheWVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xheWVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbWFwLnNlcnZpY2UnO1xyXG4vKipcclxuICogTWFwUG9seWxpbmVMYXllckRpcmVjdGl2ZSBwZXJmb3JtYW50bHkgcmVuZGVycyBhIGxhcmdlIHNldCBvZiBwb2x5bGluZSBvbiBhIHtAbGluayBNYXBDb21wb25lbnR9LlxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuICogaW1wb3J0IHtNYXBDb21wb25lbnR9IGZyb20gJy4uLic7XHJcbiAqXHJcbiAqIEBDb21wb25lbnQoe1xyXG4gKiAgc2VsZWN0b3I6ICdteS1tYXAtY21wJyxcclxuICogIHN0eWxlczogW2BcclxuICogICAubWFwLWNvbnRhaW5lciB7XHJcbiAqICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gKiAgIH1cclxuICogYF0sXHJcbiAqIHRlbXBsYXRlOiBgXHJcbiAqICAgPHgtbWFwIFtMYXRpdHVkZV09XCJsYXRcIiBbTG9uZ2l0dWRlXT1cImxuZ1wiIFtab29tXT1cInpvb21cIj5cclxuICogICAgICA8eC1tYXAtcG9seWxpbmUtbGF5ZXIgW1BvbHlnb25PcHRpb25zXT1cIl9wb2x5bGluZVwiPjwveC1tYXAtcG9seWxpbmUtbGF5ZXI+XHJcbiAqICAgPC94LW1hcD5cclxuICogYFxyXG4gKiB9KVxyXG4gKiBgYGBcclxuICpcclxuICogQGV4cG9ydFxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTWFwUG9seWxpbmVMYXllckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0IHtcclxuICAgIHByaXZhdGUgX2xheWVyU2VydmljZTtcclxuICAgIHByaXZhdGUgX21hcFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIF96b25lO1xyXG4gICAgcHJpdmF0ZSBfaWQ7XHJcbiAgICBwcml2YXRlIF9sYXllclByb21pc2U7XHJcbiAgICBwcml2YXRlIF9zZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBfY2FudmFzO1xyXG4gICAgcHJpdmF0ZSBfbGFiZWxzO1xyXG4gICAgcHJpdmF0ZSBfdG9vbHRpcDtcclxuICAgIHByaXZhdGUgX3Rvb2x0aXBTdWJzY3JpcHRpb25zO1xyXG4gICAgcHJpdmF0ZSBfdG9vbHRpcFZpc2libGU7XHJcbiAgICBwcml2YXRlIF9kZWZhdWx0T3B0aW9ucztcclxuICAgIHByaXZhdGUgX3N0cmVhbWluZztcclxuICAgIHByaXZhdGUgX3BvbHlsaW5lcztcclxuICAgIHByaXZhdGUgX3BvbHlsaW5lc0xhc3Q7XHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgbWF4aW11bSB6b29tIGF0IHdoaWNoIHRoZSBwb2x5bGluZSBsYWJlbHMgYXJlIHZpc2libGUuIElnbm9yZWQgaWYgU2hvd0xhYmVsIGlzIGZhbHNlLlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgTGFiZWxNYXhab29tOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgbWluaW11bSB6b29tIGF0IHdoaWNoIHRoZSBwb2x5bGluZSBsYWJlbHMgYXJlIHZpc2libGUuIElnbm9yZWQgaWYgU2hvd0xhYmVsIGlzIGZhbHNlLlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgTGFiZWxNaW5ab29tOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFNlcGNpZmllcyBzdHlsZWluZyBvcHRpb25zIGZvciBvbi1tYXAgcG9seWxpbmUgbGFiZWxzLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5bGluZUxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIExhYmVsT3B0aW9uczogSUxhYmVsT3B0aW9ucztcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIEFuIG9mZnNldCBhcHBsaWVkIHRvIHRoZSBwb3NpdGlvbmluZyBvZiB0aGUgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgTGF5ZXJPZmZzZXQ6IElQb2ludDtcclxuICAgIC8qKlxyXG4gICAgICogQW4gYXJyYXkgb2YgcG9seWxpbmUgb3B0aW9ucyByZXByZXNlbnRpbmcgdGhlIHBvbHlsaW5lcyBpbiB0aGUgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgUG9seWxpbmVPcHRpb25zOiBBcnJheTxJUG9seWxpbmVPcHRpb25zPjtcclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0byBzaG93IHRoZSBwb2x5bGluZXMgdGl0bGVzIGFzIHRoZSBsYWJlbHMgb24gdGhlIHBvbHlsaW5lcy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWxpbmVMYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBTaG93TGFiZWxzOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRvIHNob3cgdGhlIHRpdGxlcyBvZiB0aGUgcG9seWxpbmVzIGFzIHRoZSB0b29sdGlwcyBvbiB0aGUgcG9seWxpbmVzLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5bGluZUxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFNob3dUb29sdGlwczogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB3aGV0aGVyIHRvIHRyZWF0IGNoYW5nZXMgaW4gdGhlIFBvbHlsaW5lT3B0aW9ucyBhcyBzdHJlYW1zIG9mIG5ldyBtYXJrZXJzLiBJbiB0aGlzIG1vZGUsIGNoYW5naW5nIHRoZVxyXG4gICAgICogQXJyYXkgc3VwcGxpZWQgaW4gUG9seWxpbmVPcHRpb25zIHdpbGwgYmUgaW5jcmVtZW50YWxseSBkcmF3biBvbiB0aGUgbWFwIGFzIG9wcG9zZWQgdG8gcmVwbGFjZSB0aGUgcG9seWxpbmVzIG9uIHRoZSBtYXAuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgVHJlYXROZXdQb2x5bGluZU9wdGlvbnNBc1N0cmVhbTogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgbWFya2VyIGxheWVyXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgVmlzaWJsZTogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSB6LWluZGV4IG9mIHRoZSBsYXllci4gSWYgbm90IHVzZWQsIGxheWVycyBnZXQgc3RhY2tlZCBpbiB0aGUgb3JkZXIgY3JlYXRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWxpbmVMYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBaSW5kZXg6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBhIHBvbHlsaW5lIGluIHRoZSBsYXllci5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWxpbmVMYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBQb2x5bGluZUNsaWNrOiBFdmVudEVtaXR0ZXI8SVBvbHlsaW5lRXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBkYmxjbGljayBldmVudCBpcyBmaXJlZCBvbiBhIHBvbHlsaW5lIGluIHRoZSBsYXllci5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWxpbmVMYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBQb2x5bGluZURibENsaWNrOiBFdmVudEVtaXR0ZXI8SVBvbHlsaW5lRXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZW1vdmUgZXZlbnQgaXMgZmlyZWQgb24gYSBwb2x5bGluZSBpbiB0aGUgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgUG9seWxpbmVNb3VzZU1vdmU6IEV2ZW50RW1pdHRlcjxJUG9seWxpbmVFdmVudD47XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgb24gbW91c2VvdXQgb24gYSBwb2x5bGluZSBpbiB0aGUgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgUG9seWxpbmVNb3VzZU91dDogRXZlbnRFbWl0dGVyPElQb2x5bGluZUV2ZW50PjtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCBvbiBtb3VzZW92ZXIgb24gYSBwb2x5bGluZSBpbiBhIGxheWVyLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5bGluZUxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFBvbHlsaW5lTW91c2VPdmVyOiBFdmVudEVtaXR0ZXI8SVBvbHlsaW5lRXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBpZCBvZiB0aGUgcG9seWxpbmUgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWxpbmVMYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBJZDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIE1hcFBvbHlsaW5lTGF5ZXJEaXJlY3RpdmUuXHJcbiAgICAgKiBAcGFyYW0gX2xheWVyU2VydmljZSAtIENvbmNyZWF0ZSBpbXBsZW1lbnRhdGlvbiBvZiBhIHtAbGluayBMYXllclNlcnZpY2V9LlxyXG4gICAgICogQHBhcmFtIF9tYXBTZXJ2aWNlIC0gQ29uY3JlYXRlIGltcGxlbWVudGF0aW9uIG9mIGEge0BsaW5rIE1hcFNlcnZpY2V9LlxyXG4gICAgICogQHBhcmFtIF96b25lIC0gQ29uY3JlYXRlIGltcGxlbWVudGF0aW9uIG9mIGEge0BsaW5rIE5nWm9uZX0gc2VydmljZS5cclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5bGluZUxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKF9sYXllclNlcnZpY2U6IExheWVyU2VydmljZSwgX21hcFNlcnZpY2U6IE1hcFNlcnZpY2UsIF96b25lOiBOZ1pvbmUpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgQ29tcG9uZW50IGNvbnRlbnQgaW5pdGlhbGl6YXRpb24uIFBhcnQgb2YgbmcgQ29tcG9uZW50IGxpZmUgY3ljbGUuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBjb21wb25lbnQgZGVzdHJ1Y3Rpb24uIEZyZWVzIHRoZSByZXNvdXJjZXMgdXNlZCBieSB0aGUgY29tcG9uZW50LiBQYXJ0IG9mIHRoZSBuZyBDb21wb25lbnQgbGlmZSBjeWNsZS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWxpbmVMYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWFjdHMgdG8gY2hhbmdlcyBpbiBkYXRhLWJvdW5kIHByb3BlcnRpZXMgb2YgdGhlIGNvbXBvbmVudCBhbmQgYWN0dWF0ZXMgcHJvcGVydHkgY2hhbmdlcyBpbiB0aGUgdW5kZXJsaW5nIGxheWVyIG1vZGVsLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjaGFuZ2VzIC0gY29sbGVjdGlvbiBvZiBjaGFuZ2VzLlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZTtcclxuICAgIH0pOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBMYXllciBJZC5cclxuICAgICAqIEByZXR1cm5zIC0gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBsYXllciBpZC5cclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5bGluZUxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogQWRkcyB2YXJpb3VzIGV2ZW50IGxpc3RlbmVycyBmb3IgdGhlIHBvbHlsaW5lcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcCAtIHRoZSBwb2x5bGluZSBmb3Igd2hpY2ggdG8gYWRkIHRoZSBldmVudC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWxpbmVMYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIEFkZEV2ZW50TGlzdGVuZXJzKHApO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEcmF3cyB0aGUgcG9seWxpbmUgbGFiZWxzLiBDYWxsZWQgYnkgdGhlIENhbnZhcyBvdmVybGF5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlbCAtIFRoZSBjYW52YXMgb24gd2hpY2ggdG8gZHJhdyB0aGUgbGFiZWxzLlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFBvbHlsaW5lTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBEcmF3TGFiZWxzKGVsKTtcclxuICAgIC8qKlxyXG4gICAgICogRHJhd3MgdGhlIGxhYmVsIHRleHQgYXQgdGhlIGFwcHJvcHJpYXRlIHBsYWNlIG9uIHRoZSBjYW52YXMuXHJcbiAgICAgKiBAcGFyYW0gY3R4IC0gQ2FudmFzIGRyYXdpbmcgY29udGV4dC5cclxuICAgICAqIEBwYXJhbSBsb2MgLSBQaXhlbCBsb2NhdGlvbiBvbiB0aGUgY2FudmFzIHdoZXJlIHRvIGNlbnRlciB0aGUgdGV4dC5cclxuICAgICAqIEBwYXJhbSB0ZXh0IC0gVGV4dCB0byBkcmF3LlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIERyYXdUZXh0KGN0eCwgbG9jLCB0ZXh0KTtcclxuICAgIC8qKlxyXG4gICAgICogTWFuYWdlcyB0aGUgdG9vbHRpcCBhbmQgdGhlIGF0dGFjaG1lbnQgb2YgdGhlIGFzc29jaWF0ZWQgZXZlbnRzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBzaG93IC0gVHJ1ZSB0byBlbmFibGUgdGhlIHRvb2x0aXAsIGZhbHNlIHRvIGRpc2FibGUuXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwUG9seWdvbkxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgTWFuYWdlVG9vbHRpcChzaG93KTtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBvciB1cGRhdGVzIHRoZSBwb2x5bGluZXNzIGJhc2VkIG9uIHRoZSBwb2x5bGluZSBvcHRpb25zLiBUaGlzIHdpbGwgcGxhY2UgdGhlIHBvbHlsaW5lcyBvbiB0aGUgbWFwXHJcbiAgICAgKiBhbmQgcmVnaXN0ZXIgdGhlIGFzc29jaWF0ZWQgZXZlbnRzLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBQb2x5bGluZUxheWVyRGlyZWN0aXZlXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgVXBkYXRlUG9seWxpbmVzKCk7XHJcbn1cclxuIl19