import { SimpleChange, OnDestroy, OnChanges, EventEmitter, AfterContentInit, NgZone } from '@angular/core';
import { IPoint } from '../interfaces/ipoint';
import { ILatLong } from '../interfaces/ilatlong';
import { IMarkerEvent } from '../interfaces/imarker-event';
import { IMarkerOptions } from '../interfaces/imarker-options';
import { IMarkerIconInfo } from '../interfaces/imarker-icon-info';
import { IClusterIconInfo } from '../interfaces/icluster-icon-info';
import { MarkerService } from '../services/marker.service';
import { LayerService } from '../services/layer.service';
import { ClusterService } from '../services/cluster.service';
import { MapService } from '../services/map.service';
import { Marker } from '../models/marker';
import { ClusterClickAction } from '../models/cluster-click-action';
import { ClusterPlacementMode } from '../models/cluster-placement-mode';
/**
 * MapMarkerLayerDirective performantly renders a large set of map marker inside a {@link MapComponent}.
 *
 * ### Example
 * ```typescript
 * import {Component} from '@angular/core';
 * import {MapComponent, MapMarkerDirective} from '...';
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
 *      <x-map-marker-layer [MarkerOptions]="_markers"></x-map-marker-layer>
 *   </x-map>
 * `
 * })
 * ```
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class MapMarkerLayerDirective implements OnDestroy, OnChanges, AfterContentInit {
    private _markerService;
    private _layerService;
    private _clusterService;
    private _mapService;
    private _zone;
    private _id;
    private _layerPromise;
    private _service;
    private _styles;
    private _useDynamicSizeMarker;
    private _dynamicMarkerBaseSize;
    private _dynamicMarkerRanges;
    private _iconCreationCallback;
    private _streaming;
    private _markers;
    private _markersLast;
    /**
     * Gets or sets the the Cluster Click Action {@link ClusterClickAction}.
     *
     * @memberof MapMarkerLayerDirective
     */
    ClusterClickAction: ClusterClickAction;
    /**
     * Gets or sets the IconInfo to be used to create a custom cluster marker. Supports font-based, SVG, graphics and more.
     * See {@link IMarkerIconInfo}.
     *
     * @memberof MapMarkerLayerDirective
     */
    ClusterIconInfo: IMarkerIconInfo;
    /**
     * Gets or sets the cluster placement mode. {@link ClusterPlacementMode}
     *
     * @memberof MapMarkerLayerDirective
     */
    ClusterPlacementMode: ClusterPlacementMode;
    /**
     * Gets or sets the callback invoked to create a custom cluster marker. Note that when {@link UseDynamicSizeMarkers} is enabled,
     * you cannot set a custom marker callback.
     *
     * @memberof MapMarkerLayerDirective
     */
    CustomMarkerCallback: (m: Array<Marker>, i: IMarkerIconInfo) => string;
    /**
     * Gets or sets the base size of dynamic markers in pixels. The actualy size of the dynamic marker is based on this.
     * See {@link UseDynamicSizeMarkers}.
     *
     * @memberof ClusterLayerDirective
     */
    DynamicMarkerBaseSize: number;
    /**
     * Gets or sets the ranges to use to calculate breakpoints and colors for dynamic markers.
     * The map contains key/value pairs, with the keys being
     * the breakpoint sizes and the values the colors to be used for the dynamic marker in that range. See {@link UseDynamicSizeMarkers}.
     *
     * @memberof ClusterLayerDirective
     */
    DynamicMarkerRanges: Map<number, string>;
    /**
     * Determines whether the layer clusters. This property can only be set on creation of the layer.
     *
     * @memberof MapMarkerLayerDirective
     */
    EnableClustering: boolean;
    /**
     * Gets or sets the grid size to be used for clustering.
     *
     * @memberof MapMarkerLayerDirective
     */
    GridSize: number;
    /**
     * Gets or sets the IconInfo to be used to create a custom marker images. Supports font-based, SVG, graphics and more.
     * See {@link IMarkerIconInfo}.
     *
     * @memberof MapMarkerLayerDirective
     */
    IconInfo: IMarkerIconInfo;
    /**
     * Gets or sets An offset applied to the positioning of the layer.
     *
     * @memberof MapMarkerLayerDirective
     */
    LayerOffset: IPoint;
    /**
     *  IMarkerOptions array holding the marker info.
     *
     * @memberof MapMarkerLayerDirective
     */
    MarkerOptions: Array<IMarkerOptions>;
    /**
     * Gets or sets the cluster styles
     *
     * @memberof MapMarkerLayerDirective
     */
    Styles: Array<IClusterIconInfo>;
    /**
     * Sets whether to treat changes in the MarkerOptions as streams of new markers. In thsi mode, changing the
     * Array supplied in MarkerOptions will be incrementally drawn on the map as opposed to replace the markers on the map.
     *
     * @memberof MapMarkerLayerDirective
     */
    TreatNewMarkerOptionsAsStream: boolean;
    /**
     * Gets or sets whether to use dynamic markers. Dynamic markers change in size and color depending on the number of
     * pins in the cluster. If set to true, this will take precendence over any custom marker creation.
     *
     * @memberof MapMarkerLayerDirective
     */
    UseDynamicSizeMarkers: boolean;
    /**
     * Sets the visibility of the marker layer
     *
     * @memberof MapMarkerLayerDirective
     */
    Visible: boolean;
    /**
     * Gets or sets the z-index of the layer. If not used, layers get stacked in the order created.
     *
     * @memberof MapMarkerLayerDirective
     */
    ZIndex: number;
    /**
     * Gets or sets whether the cluster should zoom in on click
     *
     * @readonly
     * @memberof MapMarkerLayerDirective
     */
    ZoomOnClick: boolean;
    /**
     * This event emitter gets emitted when the dynamic icon for a marker is being created.
     *
     * @memberof MapMarkerLayerDirective
     */
    DynamicMarkerCreated: EventEmitter<IMarkerIconInfo>;
    /**
     * This event emitter gets emitted when the user clicks a marker in the layer.
     *
     * @memberof MapMarkerLayerDirective
     */
    MarkerClick: EventEmitter<IMarkerEvent>;
    /**
     * This event is fired when the user stops dragging a marker.
     *
     * @memberof MapMarkerLayerDirective
     */
    DragEnd: EventEmitter<IMarkerEvent>;
    /**
     * Gets the id of the marker layer.
     *
     * @readonly
     * @memberof MapMarkerLayerDirective
     */
    readonly Id: number;
    /**
     * Creates an instance of MapMarkerLayerDirective.
     * @param _markerService - Concreate implementation of a {@link MarkerService}.
     * @param _layerService - Concreate implementation of a {@link LayerService}.
     * @param _clusterService - Concreate implementation of a {@link ClusterService}.
     * @param _mapService - Concreate implementation of a {@link MapService}.
     * @param _zone - Concreate implementation of a {@link NgZone} service.
     *
     * @memberof MapMarkerLayerDirective
     */
    constructor(_markerService: MarkerService, _layerService: LayerService, _clusterService: ClusterService, _mapService: MapService, _zone: NgZone);
    /**
     * Translates a geo location to a pixel location relative to the map viewport.
     *
     * @param [loc] - {@link ILatLong} containing the geo coordinates.
     * @returns - A promise that when fullfilled contains an {@link IPoint} representing the pixel coordinates.
     *
     * @memberof MapMarkerLayerDirective
     */
    LocationToPixel(loc: ILatLong): Promise<IPoint>;
    /**
     * Called after Component content initialization. Part of ng Component life cycle.
     *
     * @memberof MapMarkerLayerDirective
     */
    ngAfterContentInit(): void;
    /**
     * Called on component destruction. Frees the resources used by the component. Part of the ng Component life cycle.
     *
     *
     * @memberof MapMarkerLayerDirective
     */
    ngOnDestroy(): void;
    /**
     * Reacts to changes in data-bound properties of the component and actuates property changes in the underling layer model.
     *
     * @param changes - collection of changes.
     *
     * @memberof MapMarkerLayerDirective
     */
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    /**
     * Obtains a string representation of the Marker Id.
     * @returns - string representation of the marker id.
     * @memberof MapMarkerLayerDirective
     */
    toString(): string;
    /**
     * Adds various event listeners for the marker.
     *
     * @param m - the marker for which to add the event.
     *
     * @memberof MapMarkerLayerDirective
     */
    private AddEventListeners(m);
    /**
     * Sets or updates the markers based on the marker options. This will place the markers on the map
     * and register the associated events.
     *
     * @memberof MapMarkerLayerDirective
     * @method
     */
    private UpdateMarkers();
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MapMarkerLayerDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MapMarkerLayerDirective, "x-map-marker-layer", never, { "ClusterClickAction": "ClusterClickAction"; "ClusterPlacementMode": "ClusterPlacementMode"; "EnableClustering": "EnableClustering"; "GridSize": "GridSize"; "LayerOffset": "LayerOffset"; "ZIndex": "ZIndex"; "ZoomOnClick": "ZoomOnClick"; "CustomMarkerCallback": "CustomMarkerCallback"; "DynamicMarkerBaseSize": "DynamicMarkerBaseSize"; "DynamicMarkerRanges": "DynamicMarkerRanges"; "MarkerOptions": "MarkerOptions"; "Styles": "Styles"; "TreatNewMarkerOptionsAsStream": "TreatNewMarkerOptionsAsStream"; "UseDynamicSizeMarkers": "UseDynamicSizeMarkers"; "ClusterIconInfo": "ClusterIconInfo"; "IconInfo": "IconInfo"; "Visible": "Visible"; }, { "DynamicMarkerCreated": "DynamicMarkerCreated"; "MarkerClick": "MarkerClick"; "DragEnd": "DragEnd"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLW1hcmtlci1sYXllci5kLnRzIiwic291cmNlcyI6WyJtYXAtbWFya2VyLWxheWVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2ltcGxlQ2hhbmdlLCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgRXZlbnRFbWl0dGVyLCBBZnRlckNvbnRlbnRJbml0LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVBvaW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pcG9pbnQnO1xyXG5pbXBvcnQgeyBJTGF0TG9uZyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaWxhdGxvbmcnO1xyXG5pbXBvcnQgeyBJTWFya2VyRXZlbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2ltYXJrZXItZXZlbnQnO1xyXG5pbXBvcnQgeyBJTWFya2VyT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW1hcmtlci1vcHRpb25zJztcclxuaW1wb3J0IHsgSU1hcmtlckljb25JbmZvIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbWFya2VyLWljb24taW5mbyc7XHJcbmltcG9ydCB7IElDbHVzdGVySWNvbkluZm8gfSBmcm9tICcuLi9pbnRlcmZhY2VzL2ljbHVzdGVyLWljb24taW5mbyc7XHJcbmltcG9ydCB7IE1hcmtlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYXJrZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IExheWVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xheWVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDbHVzdGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NsdXN0ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYXAuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcmtlciB9IGZyb20gJy4uL21vZGVscy9tYXJrZXInO1xyXG5pbXBvcnQgeyBDbHVzdGVyQ2xpY2tBY3Rpb24gfSBmcm9tICcuLi9tb2RlbHMvY2x1c3Rlci1jbGljay1hY3Rpb24nO1xyXG5pbXBvcnQgeyBDbHVzdGVyUGxhY2VtZW50TW9kZSB9IGZyb20gJy4uL21vZGVscy9jbHVzdGVyLXBsYWNlbWVudC1tb2RlJztcclxuLyoqXHJcbiAqIE1hcE1hcmtlckxheWVyRGlyZWN0aXZlIHBlcmZvcm1hbnRseSByZW5kZXJzIGEgbGFyZ2Ugc2V0IG9mIG1hcCBtYXJrZXIgaW5zaWRlIGEge0BsaW5rIE1hcENvbXBvbmVudH0uXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4gKiBpbXBvcnQge01hcENvbXBvbmVudCwgTWFwTWFya2VyRGlyZWN0aXZlfSBmcm9tICcuLi4nO1xyXG4gKlxyXG4gKiBAQ29tcG9uZW50KHtcclxuICogIHNlbGVjdG9yOiAnbXktbWFwLWNtcCcsXHJcbiAqICBzdHlsZXM6IFtgXHJcbiAqICAgLm1hcC1jb250YWluZXIge1xyXG4gKiAgICAgaGVpZ2h0OiAzMDBweDtcclxuICogICB9XHJcbiAqIGBdLFxyXG4gKiB0ZW1wbGF0ZTogYFxyXG4gKiAgIDx4LW1hcCBbTGF0aXR1ZGVdPVwibGF0XCIgW0xvbmdpdHVkZV09XCJsbmdcIiBbWm9vbV09XCJ6b29tXCI+XHJcbiAqICAgICAgPHgtbWFwLW1hcmtlci1sYXllciBbTWFya2VyT3B0aW9uc109XCJfbWFya2Vyc1wiPjwveC1tYXAtbWFya2VyLWxheWVyPlxyXG4gKiAgIDwveC1tYXA+XHJcbiAqIGBcclxuICogfSlcclxuICogYGBgXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1hcE1hcmtlckxheWVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQge1xyXG4gICAgcHJpdmF0ZSBfbWFya2VyU2VydmljZTtcclxuICAgIHByaXZhdGUgX2xheWVyU2VydmljZTtcclxuICAgIHByaXZhdGUgX2NsdXN0ZXJTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBfbWFwU2VydmljZTtcclxuICAgIHByaXZhdGUgX3pvbmU7XHJcbiAgICBwcml2YXRlIF9pZDtcclxuICAgIHByaXZhdGUgX2xheWVyUHJvbWlzZTtcclxuICAgIHByaXZhdGUgX3NlcnZpY2U7XHJcbiAgICBwcml2YXRlIF9zdHlsZXM7XHJcbiAgICBwcml2YXRlIF91c2VEeW5hbWljU2l6ZU1hcmtlcjtcclxuICAgIHByaXZhdGUgX2R5bmFtaWNNYXJrZXJCYXNlU2l6ZTtcclxuICAgIHByaXZhdGUgX2R5bmFtaWNNYXJrZXJSYW5nZXM7XHJcbiAgICBwcml2YXRlIF9pY29uQ3JlYXRpb25DYWxsYmFjaztcclxuICAgIHByaXZhdGUgX3N0cmVhbWluZztcclxuICAgIHByaXZhdGUgX21hcmtlcnM7XHJcbiAgICBwcml2YXRlIF9tYXJrZXJzTGFzdDtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSB0aGUgQ2x1c3RlciBDbGljayBBY3Rpb24ge0BsaW5rIENsdXN0ZXJDbGlja0FjdGlvbn0uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIENsdXN0ZXJDbGlja0FjdGlvbjogQ2x1c3RlckNsaWNrQWN0aW9uO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIEljb25JbmZvIHRvIGJlIHVzZWQgdG8gY3JlYXRlIGEgY3VzdG9tIGNsdXN0ZXIgbWFya2VyLiBTdXBwb3J0cyBmb250LWJhc2VkLCBTVkcsIGdyYXBoaWNzIGFuZCBtb3JlLlxyXG4gICAgICogU2VlIHtAbGluayBJTWFya2VySWNvbkluZm99LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBNYXJrZXJMYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBDbHVzdGVySWNvbkluZm86IElNYXJrZXJJY29uSW5mbztcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBjbHVzdGVyIHBsYWNlbWVudCBtb2RlLiB7QGxpbmsgQ2x1c3RlclBsYWNlbWVudE1vZGV9XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIENsdXN0ZXJQbGFjZW1lbnRNb2RlOiBDbHVzdGVyUGxhY2VtZW50TW9kZTtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBjYWxsYmFjayBpbnZva2VkIHRvIGNyZWF0ZSBhIGN1c3RvbSBjbHVzdGVyIG1hcmtlci4gTm90ZSB0aGF0IHdoZW4ge0BsaW5rIFVzZUR5bmFtaWNTaXplTWFya2Vyc30gaXMgZW5hYmxlZCxcclxuICAgICAqIHlvdSBjYW5ub3Qgc2V0IGEgY3VzdG9tIG1hcmtlciBjYWxsYmFjay5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwTWFya2VyTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgQ3VzdG9tTWFya2VyQ2FsbGJhY2s6IChtOiBBcnJheTxNYXJrZXI+LCBpOiBJTWFya2VySWNvbkluZm8pID0+IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBiYXNlIHNpemUgb2YgZHluYW1pYyBtYXJrZXJzIGluIHBpeGVscy4gVGhlIGFjdHVhbHkgc2l6ZSBvZiB0aGUgZHluYW1pYyBtYXJrZXIgaXMgYmFzZWQgb24gdGhpcy5cclxuICAgICAqIFNlZSB7QGxpbmsgVXNlRHluYW1pY1NpemVNYXJrZXJzfS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2x1c3RlckxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIER5bmFtaWNNYXJrZXJCYXNlU2l6ZTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIHJhbmdlcyB0byB1c2UgdG8gY2FsY3VsYXRlIGJyZWFrcG9pbnRzIGFuZCBjb2xvcnMgZm9yIGR5bmFtaWMgbWFya2Vycy5cclxuICAgICAqIFRoZSBtYXAgY29udGFpbnMga2V5L3ZhbHVlIHBhaXJzLCB3aXRoIHRoZSBrZXlzIGJlaW5nXHJcbiAgICAgKiB0aGUgYnJlYWtwb2ludCBzaXplcyBhbmQgdGhlIHZhbHVlcyB0aGUgY29sb3JzIHRvIGJlIHVzZWQgZm9yIHRoZSBkeW5hbWljIG1hcmtlciBpbiB0aGF0IHJhbmdlLiBTZWUge0BsaW5rIFVzZUR5bmFtaWNTaXplTWFya2Vyc30uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIENsdXN0ZXJMYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBEeW5hbWljTWFya2VyUmFuZ2VzOiBNYXA8bnVtYmVyLCBzdHJpbmc+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGxheWVyIGNsdXN0ZXJzLiBUaGlzIHByb3BlcnR5IGNhbiBvbmx5IGJlIHNldCBvbiBjcmVhdGlvbiBvZiB0aGUgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIEVuYWJsZUNsdXN0ZXJpbmc6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgZ3JpZCBzaXplIHRvIGJlIHVzZWQgZm9yIGNsdXN0ZXJpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIEdyaWRTaXplOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgSWNvbkluZm8gdG8gYmUgdXNlZCB0byBjcmVhdGUgYSBjdXN0b20gbWFya2VyIGltYWdlcy4gU3VwcG9ydHMgZm9udC1iYXNlZCwgU1ZHLCBncmFwaGljcyBhbmQgbW9yZS5cclxuICAgICAqIFNlZSB7QGxpbmsgSU1hcmtlckljb25JbmZvfS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwTWFya2VyTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgSWNvbkluZm86IElNYXJrZXJJY29uSW5mbztcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIEFuIG9mZnNldCBhcHBsaWVkIHRvIHRoZSBwb3NpdGlvbmluZyBvZiB0aGUgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIExheWVyT2Zmc2V0OiBJUG9pbnQ7XHJcbiAgICAvKipcclxuICAgICAqICBJTWFya2VyT3B0aW9ucyBhcnJheSBob2xkaW5nIHRoZSBtYXJrZXIgaW5mby5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwTWFya2VyTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgTWFya2VyT3B0aW9uczogQXJyYXk8SU1hcmtlck9wdGlvbnM+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIGNsdXN0ZXIgc3R5bGVzXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFN0eWxlczogQXJyYXk8SUNsdXN0ZXJJY29uSW5mbz47XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgd2hldGhlciB0byB0cmVhdCBjaGFuZ2VzIGluIHRoZSBNYXJrZXJPcHRpb25zIGFzIHN0cmVhbXMgb2YgbmV3IG1hcmtlcnMuIEluIHRoc2kgbW9kZSwgY2hhbmdpbmcgdGhlXHJcbiAgICAgKiBBcnJheSBzdXBwbGllZCBpbiBNYXJrZXJPcHRpb25zIHdpbGwgYmUgaW5jcmVtZW50YWxseSBkcmF3biBvbiB0aGUgbWFwIGFzIG9wcG9zZWQgdG8gcmVwbGFjZSB0aGUgbWFya2VycyBvbiB0aGUgbWFwLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBNYXJrZXJMYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBUcmVhdE5ld01hcmtlck9wdGlvbnNBc1N0cmVhbTogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHdoZXRoZXIgdG8gdXNlIGR5bmFtaWMgbWFya2Vycy4gRHluYW1pYyBtYXJrZXJzIGNoYW5nZSBpbiBzaXplIGFuZCBjb2xvciBkZXBlbmRpbmcgb24gdGhlIG51bWJlciBvZlxyXG4gICAgICogcGlucyBpbiB0aGUgY2x1c3Rlci4gSWYgc2V0IHRvIHRydWUsIHRoaXMgd2lsbCB0YWtlIHByZWNlbmRlbmNlIG92ZXIgYW55IGN1c3RvbSBtYXJrZXIgY3JlYXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFVzZUR5bmFtaWNTaXplTWFya2VyczogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgbWFya2VyIGxheWVyXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFZpc2libGU6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgei1pbmRleCBvZiB0aGUgbGF5ZXIuIElmIG5vdCB1c2VkLCBsYXllcnMgZ2V0IHN0YWNrZWQgaW4gdGhlIG9yZGVyIGNyZWF0ZWQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFpJbmRleDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgd2hldGhlciB0aGUgY2x1c3RlciBzaG91bGQgem9vbSBpbiBvbiBjbGlja1xyXG4gICAgICpcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFpvb21PbkNsaWNrOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIGR5bmFtaWMgaWNvbiBmb3IgYSBtYXJrZXIgaXMgYmVpbmcgY3JlYXRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwTWFya2VyTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgRHluYW1pY01hcmtlckNyZWF0ZWQ6IEV2ZW50RW1pdHRlcjxJTWFya2VySWNvbkluZm8+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIGEgbWFya2VyIGluIHRoZSBsYXllci5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwTWFya2VyTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgTWFya2VyQ2xpY2s6IEV2ZW50RW1pdHRlcjxJTWFya2VyRXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgc3RvcHMgZHJhZ2dpbmcgYSBtYXJrZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIERyYWdFbmQ6IEV2ZW50RW1pdHRlcjxJTWFya2VyRXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBpZCBvZiB0aGUgbWFya2VyIGxheWVyLlxyXG4gICAgICpcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IElkOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTWFwTWFya2VyTGF5ZXJEaXJlY3RpdmUuXHJcbiAgICAgKiBAcGFyYW0gX21hcmtlclNlcnZpY2UgLSBDb25jcmVhdGUgaW1wbGVtZW50YXRpb24gb2YgYSB7QGxpbmsgTWFya2VyU2VydmljZX0uXHJcbiAgICAgKiBAcGFyYW0gX2xheWVyU2VydmljZSAtIENvbmNyZWF0ZSBpbXBsZW1lbnRhdGlvbiBvZiBhIHtAbGluayBMYXllclNlcnZpY2V9LlxyXG4gICAgICogQHBhcmFtIF9jbHVzdGVyU2VydmljZSAtIENvbmNyZWF0ZSBpbXBsZW1lbnRhdGlvbiBvZiBhIHtAbGluayBDbHVzdGVyU2VydmljZX0uXHJcbiAgICAgKiBAcGFyYW0gX21hcFNlcnZpY2UgLSBDb25jcmVhdGUgaW1wbGVtZW50YXRpb24gb2YgYSB7QGxpbmsgTWFwU2VydmljZX0uXHJcbiAgICAgKiBAcGFyYW0gX3pvbmUgLSBDb25jcmVhdGUgaW1wbGVtZW50YXRpb24gb2YgYSB7QGxpbmsgTmdab25lfSBzZXJ2aWNlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBNYXJrZXJMYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihfbWFya2VyU2VydmljZTogTWFya2VyU2VydmljZSwgX2xheWVyU2VydmljZTogTGF5ZXJTZXJ2aWNlLCBfY2x1c3RlclNlcnZpY2U6IENsdXN0ZXJTZXJ2aWNlLCBfbWFwU2VydmljZTogTWFwU2VydmljZSwgX3pvbmU6IE5nWm9uZSk7XHJcbiAgICAvKipcclxuICAgICAqIFRyYW5zbGF0ZXMgYSBnZW8gbG9jYXRpb24gdG8gYSBwaXhlbCBsb2NhdGlvbiByZWxhdGl2ZSB0byB0aGUgbWFwIHZpZXdwb3J0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBbbG9jXSAtIHtAbGluayBJTGF0TG9uZ30gY29udGFpbmluZyB0aGUgZ2VvIGNvb3JkaW5hdGVzLlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCB3aGVuIGZ1bGxmaWxsZWQgY29udGFpbnMgYW4ge0BsaW5rIElQb2ludH0gcmVwcmVzZW50aW5nIHRoZSBwaXhlbCBjb29yZGluYXRlcy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwTWFya2VyTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgTG9jYXRpb25Ub1BpeGVsKGxvYzogSUxhdExvbmcpOiBQcm9taXNlPElQb2ludD47XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBhZnRlciBDb21wb25lbnQgY29udGVudCBpbml0aWFsaXphdGlvbi4gUGFydCBvZiBuZyBDb21wb25lbnQgbGlmZSBjeWNsZS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwTWFya2VyTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBjb21wb25lbnQgZGVzdHJ1Y3Rpb24uIEZyZWVzIHRoZSByZXNvdXJjZXMgdXNlZCBieSB0aGUgY29tcG9uZW50LiBQYXJ0IG9mIHRoZSBuZyBDb21wb25lbnQgbGlmZSBjeWNsZS5cclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFJlYWN0cyB0byBjaGFuZ2VzIGluIGRhdGEtYm91bmQgcHJvcGVydGllcyBvZiB0aGUgY29tcG9uZW50IGFuZCBhY3R1YXRlcyBwcm9wZXJ0eSBjaGFuZ2VzIGluIHRoZSB1bmRlcmxpbmcgbGF5ZXIgbW9kZWwuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNoYW5nZXMgLSBjb2xsZWN0aW9uIG9mIGNoYW5nZXMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2U7XHJcbiAgICB9KTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgTWFya2VyIElkLlxyXG4gICAgICogQHJldHVybnMgLSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hcmtlciBpZC5cclxuICAgICAqIEBtZW1iZXJvZiBNYXBNYXJrZXJMYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgdmFyaW91cyBldmVudCBsaXN0ZW5lcnMgZm9yIHRoZSBtYXJrZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG0gLSB0aGUgbWFya2VyIGZvciB3aGljaCB0byBhZGQgdGhlIGV2ZW50LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBNYXJrZXJMYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIEFkZEV2ZW50TGlzdGVuZXJzKG0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIG9yIHVwZGF0ZXMgdGhlIG1hcmtlcnMgYmFzZWQgb24gdGhlIG1hcmtlciBvcHRpb25zLiBUaGlzIHdpbGwgcGxhY2UgdGhlIG1hcmtlcnMgb24gdGhlIG1hcFxyXG4gICAgICogYW5kIHJlZ2lzdGVyIHRoZSBhc3NvY2lhdGVkIGV2ZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwTWFya2VyTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqIEBtZXRob2RcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBVcGRhdGVNYXJrZXJzKCk7XHJcbn1cclxuIl19