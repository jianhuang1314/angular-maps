import { EventEmitter, OnChanges, OnInit, OnDestroy, SimpleChange, NgZone } from '@angular/core';
import { MapServiceFactory } from '../services/mapservicefactory';
import { MapService } from '../services/map.service';
import { MarkerService } from '../services/marker.service';
import { InfoBoxService } from '../services/infobox.service';
import { LayerService } from '../services/layer.service';
import { PolygonService } from '../services/polygon.service';
import { PolylineService } from '../services/polyline.service';
import { ClusterService } from '../services/cluster.service';
import { ILatLong } from '../interfaces/ilatlong';
import { IBox } from '../interfaces/ibox';
import { IMapOptions } from '../interfaces/imap-options';
/**
 * Renders a map based on a given provider.
 * **Important note**: To be able see a map in the browser, you have to define a height for the CSS
 * class `map-container`.
 *
 * ### Example
 * ```typescript
 * import {Component} from '@angular/core';
 * import {MapComponent} from '...';
 *
 * @Component({
 *  selector: 'my-map',
 *  styles: [`
 *    .map-container { height: 300px; }
 * `],
 *  template: `
 *    <x-map [Latitude]="lat" [Longitude]="lng" [Zoom]="zoom"></x-map>
 *  `
 * })
 * ```
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class MapComponent implements OnChanges, OnInit, OnDestroy {
    private _mapService;
    private _zone;
    private _longitude;
    private _latitude;
    private _zoom;
    private _clickTimeout;
    private _options;
    private _box;
    private _mapPromise;
    _containerClass: boolean;
    private _container;
    private _markers;
    /**
     * Get or sets the maximum and minimum bounding box for map.
     *
     * @memberof MapComponent
     */
    Box: IBox;
    /**
     * Gets or sets the latitude that sets the center of the map.
     *
     * @memberof MapComponent
     */
    Latitude: number | string;
    /**
     * Gets or sets the longitude that sets the center of the map.
     *
     * @memberof MapComponent
     */
    Longitude: number | string;
    /**
     * Gets or sets general map Options
     *
     * @memberof MapComponent
     */
    Options: IMapOptions;
    /**
     * Gets or sets the zoom level of the map. The default value is `8`.
     *
     * @memberof MapComponent
     */
    Zoom: number | string;
    /**
     * This event emitter is fired when the map bounding box changes.
     *
     * @memberof MapComponent
     */
    BoundsChange: EventEmitter<IBox>;
    /**
     * This event emitter is fired when the map center changes.
     *
     * @memberof MapComponent
     */
    CenterChange: EventEmitter<ILatLong>;
    /**
     * This event emitter gets emitted when the user clicks on the map (but not when they click on a
     * marker or infoWindow).
     *
     * @memberof MapComponent
     */
    MapClick: EventEmitter<MouseEvent>;
    /**
     * This event emitter gets emitted when the user double-clicks on the map (but not when they click
     * on a marker or infoWindow).
     *
     * @memberof MapComponent
     */
    MapDblClick: EventEmitter<MouseEvent>;
    /**
     * This event emitter gets emitted when the user right-clicks on the map (but not when they click
     * on a marker or infoWindow).
     *
     * @memberof MapComponent
     */
    MapRightClick: EventEmitter<MouseEvent>;
    /**
     * This event emitter gets emitted when the user double-clicks on the map (but not when they click
     * on a marker or infoWindow).
     *
     * @memberof MapComponent
     */
    MapMouseOver: EventEmitter<MouseEvent>;
    /**
     * This event emitter gets emitted when the user double-clicks on the map (but not when they click
     * on a marker or infoWindow).
     *
     * @memberof MapComponent
     */
    MapMouseOut: EventEmitter<MouseEvent>;
    /**
     * This event emitter gets emitted when the user double-clicks on the map (but not when they click
     * on a marker or infoWindow).
     *
     * @memberof MapComponent
     */
    MapMouseMove: EventEmitter<MouseEvent>;
    /**
     * The event emitter is fired when the map service is available and the maps has been
     * Initialized (but not necessarily created). It contains a Promise that when fullfilled returns
     * the main map object of the underlying platform.
     *
     * @memberof MapComponent
     */
    MapPromise: EventEmitter<Promise<any>>;
    /**
     * This event emiiter is fired when the map zoom changes
     *
     * @memberof MapComponent
     */
    ZoomChange: EventEmitter<Number>;
    /**
     * This event emitter is fired when the map service is available and the maps has been
     * Initialized
     * @memberOf MapComponent
     */
    MapService: EventEmitter<MapService>;
    /**
     * Creates an instance of MapComponent.
     *
     * @param _mapService - Concreted implementation of a map service for the underlying maps implementations.
     *                                   Generally provided via injections.
     * @memberof MapComponent
     */
    constructor(_mapService: MapService, _zone: NgZone);
    /**
     * Called on Component initialization. Part of ng Component life cycle.
     *
     * @memberof MapComponent
     */
    ngOnInit(): void;
    /**
     * Called when changes to the databoud properties occur. Part of the ng Component life cycle.
     *
     * @param changes - Changes that have occured.
     *
     * @memberof MapComponent
     */
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    /**
     * Called on component destruction. Frees the resources used by the component. Part of the ng Component life cycle.
     *
     * @memberof MapComponent
     */
    ngOnDestroy(): void;
    /**
     * Triggers a resize event on the map instance.
     *
     * @returns - A promise that gets resolved after the event was triggered.
     *
     * @memberof MapComponent
     */
    TriggerResize(): Promise<void>;
    /**
     * Converts a number-ish value to a number.
     *
     * @param value - The value to convert.
     * @param [defaultValue=null] - Default value to use if the conversion cannot be performed.
     * @returns - Converted number of the default.
     *
     * @memberof MapComponent
     */
    private ConvertToDecimal(value, defaultValue?);
    /**
     * Delegate handling the map click events.
     *
     * @memberof MapComponent
     */
    private HandleMapClickEvents();
    /**
     * Delegate handling map center change events.
     *
     * @memberof MapComponent
     */
    private HandleMapBoundsChange();
    /**
     * Delegate handling map center change events.
     *
     * @memberof MapComponent
     */
    private HandleMapCenterChange();
    /**
     * Delegate handling map zoom change events.
     *
     * @memberof MapComponent
     */
    private HandleMapZoomChange();
    /**
     * Initializes the map.
     *
     * @param el - Html elements which will host the map canvas.
     *
     * @memberof MapComponent
     */
    private InitMapInstance(el);
    /**
     * Updates the map center based on the geo properties of the component.
     *
     * @memberof MapComponent
     */
    private UpdateCenter();
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MapComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MapComponent, "x-map", never, { "Box": "Box"; "Latitude": "Latitude"; "Longitude": "Longitude"; "Options": "Options"; "Zoom": "Zoom"; }, { "BoundsChange": "BoundsChange"; "CenterChange": "CenterChange"; "MapClick": "MapClick"; "MapDblClick": "MapDblClick"; "MapRightClick": "MapRightClick"; "MapMouseOver": "MapMouseOver"; "MapMouseOut": "MapMouseOut"; "MapMouseMove": "MapMouseMove"; "MapPromise": "MapPromise"; "ZoomChange": "ZoomChange"; "MapService": "MapService"; }, ["_markers"], ["*"]>;
}
/**
 * Factory function to generate a cluster service instance. This is necessary because of constraints with AOT that do no allow
 * us to use lamda functions inline.
 *
 * @export
 * @param f - The {@link MapServiceFactory} implementation.
 * @param m - A {@link MapService} instance.
 * @returns - A concrete instance of a Cluster Service based on the underlying map architecture
 */
export declare function ClusterServiceFactory(f: MapServiceFactory, m: MapService): ClusterService;
/**
 * Factory function to generate a infobox service instance. This is necessary because of constraints with AOT that do no allow
 * us to use lamda functions inline.
 *
 * @export
 * @param f - The {@link MapServiceFactory} implementation.
 * @param m - A {@link MapService} instance.
 * @param m - A {@link MarkerService} instance.
 * @returns - A concrete instance of a InfoBox Service based on the underlying map architecture.
 */
export declare function InfoBoxServiceFactory(f: MapServiceFactory, m: MapService, ma: MarkerService): InfoBoxService;
/**
 * Factory function to generate a layer service instance. This is necessary because of constraints with AOT that do no allow
 * us to use lamda functions inline.
 *
 * @export
 * @param f - The {@link MapServiceFactory} implementation.
 * @param m - A {@link MapService} instance.
 * @returns - A concrete instance of a Layer Service based on the underlying map architecture.
 */
export declare function LayerServiceFactory(f: MapServiceFactory, m: MapService): LayerService;
/**
 * Factory function to generate a map service instance. This is necessary because of constraints with AOT that do no allow
 * us to use lamda functions inline.
 *
 * @export
 * @param f - The {@link MapServiceFactory} implementation.
 * @returns - A concrete instance of a MapService based on the underlying map architecture.
 */
export declare function MapServiceCreator(f: MapServiceFactory): MapService;
/**
 * Factory function to generate a marker service instance. This is necessary because of constraints with AOT that do no allow
 * us to use lamda functions inline.
 *
 * @export
 * @param f - The {@link MapServiceFactory} implementation.
 * @param m - A {@link MapService} instance.
 * @param l - A {@link LayerService} instance.
 * @param c - A {@link ClusterService} instance.
 * @returns - A concrete instance of a Marker Service based on the underlying map architecture.
 */
export declare function MarkerServiceFactory(f: MapServiceFactory, m: MapService, l: LayerService, c: ClusterService): MarkerService;
/**
 * Factory function to generate a polygon service instance. This is necessary because of constraints with AOT that do no allow
 * us to use lamda functions inline.
 *
 * @export
 * @param f - The {@link MapServiceFactory} implementation.
 * @param m - A {@link MapService} instance.
 * @param l - A {@link LayerService} instance.
 * @returns - A concrete instance of a Polygon Service based on the underlying map architecture.
 */
export declare function PolygonServiceFactory(f: MapServiceFactory, m: MapService, l: LayerService): PolygonService;
/**
 * Factory function to generate a polyline service instance. This is necessary because of constraints with AOT that do no allow
 * us to use lamda functions inline.
 *
 * @export
 * @param f - The {@link MapServiceFactory} implementation.
 * @param m - A {@link MapService} instance.
 * @param l - A {@link LayerService} instance.
 * @returns - A concrete instance of a Polyline Service based on the underlying map architecture.
 */
export declare function PolylineServiceFactory(f: MapServiceFactory, m: MapService, l: LayerService): PolylineService;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmQudHMiLCJzb3VyY2VzIjpbIm1hcC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2UsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXBTZXJ2aWNlRmFjdG9yeSB9IGZyb20gJy4uL3NlcnZpY2VzL21hcHNlcnZpY2VmYWN0b3J5JztcclxuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21hcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFya2VyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21hcmtlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW5mb0JveFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9pbmZvYm94LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMYXllclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sYXllci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9seWdvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wb2x5Z29uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb2x5bGluZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wb2x5bGluZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2x1c3RlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbHVzdGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJTGF0TG9uZyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaWxhdGxvbmcnO1xyXG5pbXBvcnQgeyBJQm94IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pYm94JztcclxuaW1wb3J0IHsgSU1hcE9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2ltYXAtb3B0aW9ucyc7XHJcbi8qKlxyXG4gKiBSZW5kZXJzIGEgbWFwIGJhc2VkIG9uIGEgZ2l2ZW4gcHJvdmlkZXIuXHJcbiAqICoqSW1wb3J0YW50IG5vdGUqKjogVG8gYmUgYWJsZSBzZWUgYSBtYXAgaW4gdGhlIGJyb3dzZXIsIHlvdSBoYXZlIHRvIGRlZmluZSBhIGhlaWdodCBmb3IgdGhlIENTU1xyXG4gKiBjbGFzcyBgbWFwLWNvbnRhaW5lcmAuXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4gKiBpbXBvcnQge01hcENvbXBvbmVudH0gZnJvbSAnLi4uJztcclxuICpcclxuICogQENvbXBvbmVudCh7XHJcbiAqICBzZWxlY3RvcjogJ215LW1hcCcsXHJcbiAqICBzdHlsZXM6IFtgXHJcbiAqICAgIC5tYXAtY29udGFpbmVyIHsgaGVpZ2h0OiAzMDBweDsgfVxyXG4gKiBgXSxcclxuICogIHRlbXBsYXRlOiBgXHJcbiAqICAgIDx4LW1hcCBbTGF0aXR1ZGVdPVwibGF0XCIgW0xvbmdpdHVkZV09XCJsbmdcIiBbWm9vbV09XCJ6b29tXCI+PC94LW1hcD5cclxuICogIGBcclxuICogfSlcclxuICogYGBgXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSBfbWFwU2VydmljZTtcclxuICAgIHByaXZhdGUgX3pvbmU7XHJcbiAgICBwcml2YXRlIF9sb25naXR1ZGU7XHJcbiAgICBwcml2YXRlIF9sYXRpdHVkZTtcclxuICAgIHByaXZhdGUgX3pvb207XHJcbiAgICBwcml2YXRlIF9jbGlja1RpbWVvdXQ7XHJcbiAgICBwcml2YXRlIF9vcHRpb25zO1xyXG4gICAgcHJpdmF0ZSBfYm94O1xyXG4gICAgcHJpdmF0ZSBfbWFwUHJvbWlzZTtcclxuICAgIF9jb250YWluZXJDbGFzczogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX2NvbnRhaW5lcjtcclxuICAgIHByaXZhdGUgX21hcmtlcnM7XHJcbiAgICAvKipcclxuICAgICAqIEdldCBvciBzZXRzIHRoZSBtYXhpbXVtIGFuZCBtaW5pbXVtIGJvdW5kaW5nIGJveCBmb3IgbWFwLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgQm94OiBJQm94O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIGxhdGl0dWRlIHRoYXQgc2V0cyB0aGUgY2VudGVyIG9mIHRoZSBtYXAuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcENvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBMYXRpdHVkZTogbnVtYmVyIHwgc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIGxvbmdpdHVkZSB0aGF0IHNldHMgdGhlIGNlbnRlciBvZiB0aGUgbWFwLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgTG9uZ2l0dWRlOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyBnZW5lcmFsIG1hcCBPcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcENvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBPcHRpb25zOiBJTWFwT3B0aW9ucztcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSB6b29tIGxldmVsIG9mIHRoZSBtYXAuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGA4YC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIFpvb206IG51bWJlciB8IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBldmVudCBlbWl0dGVyIGlzIGZpcmVkIHdoZW4gdGhlIG1hcCBib3VuZGluZyBib3ggY2hhbmdlcy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIEJvdW5kc0NoYW5nZTogRXZlbnRFbWl0dGVyPElCb3g+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgaXMgZmlyZWQgd2hlbiB0aGUgbWFwIGNlbnRlciBjaGFuZ2VzLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgQ2VudGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8SUxhdExvbmc+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBtYXAgKGJ1dCBub3Qgd2hlbiB0aGV5IGNsaWNrIG9uIGFcclxuICAgICAqIG1hcmtlciBvciBpbmZvV2luZG93KS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIE1hcENsaWNrOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBkb3VibGUtY2xpY2tzIG9uIHRoZSBtYXAgKGJ1dCBub3Qgd2hlbiB0aGV5IGNsaWNrXHJcbiAgICAgKiBvbiBhIG1hcmtlciBvciBpbmZvV2luZG93KS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIE1hcERibENsaWNrOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciByaWdodC1jbGlja3Mgb24gdGhlIG1hcCAoYnV0IG5vdCB3aGVuIHRoZXkgY2xpY2tcclxuICAgICAqIG9uIGEgbWFya2VyIG9yIGluZm9XaW5kb3cpLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgTWFwUmlnaHRDbGljazogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgZG91YmxlLWNsaWNrcyBvbiB0aGUgbWFwIChidXQgbm90IHdoZW4gdGhleSBjbGlja1xyXG4gICAgICogb24gYSBtYXJrZXIgb3IgaW5mb1dpbmRvdykuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcENvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBNYXBNb3VzZU92ZXI6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PjtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGRvdWJsZS1jbGlja3Mgb24gdGhlIG1hcCAoYnV0IG5vdCB3aGVuIHRoZXkgY2xpY2tcclxuICAgICAqIG9uIGEgbWFya2VyIG9yIGluZm9XaW5kb3cpLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgTWFwTW91c2VPdXQ6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PjtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGRvdWJsZS1jbGlja3Mgb24gdGhlIG1hcCAoYnV0IG5vdCB3aGVuIHRoZXkgY2xpY2tcclxuICAgICAqIG9uIGEgbWFya2VyIG9yIGluZm9XaW5kb3cpLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgTWFwTW91c2VNb3ZlOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBldmVudCBlbWl0dGVyIGlzIGZpcmVkIHdoZW4gdGhlIG1hcCBzZXJ2aWNlIGlzIGF2YWlsYWJsZSBhbmQgdGhlIG1hcHMgaGFzIGJlZW5cclxuICAgICAqIEluaXRpYWxpemVkIChidXQgbm90IG5lY2Vzc2FyaWx5IGNyZWF0ZWQpLiBJdCBjb250YWlucyBhIFByb21pc2UgdGhhdCB3aGVuIGZ1bGxmaWxsZWQgcmV0dXJuc1xyXG4gICAgICogdGhlIG1haW4gbWFwIG9iamVjdCBvZiB0aGUgdW5kZXJseWluZyBwbGF0Zm9ybS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIE1hcFByb21pc2U6IEV2ZW50RW1pdHRlcjxQcm9taXNlPGFueT4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGVtaWl0ZXIgaXMgZmlyZWQgd2hlbiB0aGUgbWFwIHpvb20gY2hhbmdlc1xyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgWm9vbUNoYW5nZTogRXZlbnRFbWl0dGVyPE51bWJlcj47XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZXZlbnQgZW1pdHRlciBpcyBmaXJlZCB3aGVuIHRoZSBtYXAgc2VydmljZSBpcyBhdmFpbGFibGUgYW5kIHRoZSBtYXBzIGhhcyBiZWVuXHJcbiAgICAgKiBJbml0aWFsaXplZFxyXG4gICAgICogQG1lbWJlck9mIE1hcENvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBNYXBTZXJ2aWNlOiBFdmVudEVtaXR0ZXI8TWFwU2VydmljZT47XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTWFwQ29tcG9uZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBfbWFwU2VydmljZSAtIENvbmNyZXRlZCBpbXBsZW1lbnRhdGlvbiBvZiBhIG1hcCBzZXJ2aWNlIGZvciB0aGUgdW5kZXJseWluZyBtYXBzIGltcGxlbWVudGF0aW9ucy5cclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZW5lcmFsbHkgcHJvdmlkZWQgdmlhIGluamVjdGlvbnMuXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKF9tYXBTZXJ2aWNlOiBNYXBTZXJ2aWNlLCBfem9uZTogTmdab25lKTtcclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIENvbXBvbmVudCBpbml0aWFsaXphdGlvbi4gUGFydCBvZiBuZyBDb21wb25lbnQgbGlmZSBjeWNsZS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIGNoYW5nZXMgdG8gdGhlIGRhdGFib3VkIHByb3BlcnRpZXMgb2NjdXIuIFBhcnQgb2YgdGhlIG5nIENvbXBvbmVudCBsaWZlIGN5Y2xlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjaGFuZ2VzIC0gQ2hhbmdlcyB0aGF0IGhhdmUgb2NjdXJlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHtcclxuICAgICAgICBbcHJvcE5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZTtcclxuICAgIH0pOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gY29tcG9uZW50IGRlc3RydWN0aW9uLiBGcmVlcyB0aGUgcmVzb3VyY2VzIHVzZWQgYnkgdGhlIGNvbXBvbmVudC4gUGFydCBvZiB0aGUgbmcgQ29tcG9uZW50IGxpZmUgY3ljbGUuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcENvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUcmlnZ2VycyBhIHJlc2l6ZSBldmVudCBvbiB0aGUgbWFwIGluc3RhbmNlLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgZ2V0cyByZXNvbHZlZCBhZnRlciB0aGUgZXZlbnQgd2FzIHRyaWdnZXJlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIFRyaWdnZXJSZXNpemUoKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgYSBudW1iZXItaXNoIHZhbHVlIHRvIGEgbnVtYmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxyXG4gICAgICogQHBhcmFtIFtkZWZhdWx0VmFsdWU9bnVsbF0gLSBEZWZhdWx0IHZhbHVlIHRvIHVzZSBpZiB0aGUgY29udmVyc2lvbiBjYW5ub3QgYmUgcGVyZm9ybWVkLlxyXG4gICAgICogQHJldHVybnMgLSBDb252ZXJ0ZWQgbnVtYmVyIG9mIHRoZSBkZWZhdWx0LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBDb252ZXJ0VG9EZWNpbWFsKHZhbHVlLCBkZWZhdWx0VmFsdWU/KTtcclxuICAgIC8qKlxyXG4gICAgICogRGVsZWdhdGUgaGFuZGxpbmcgdGhlIG1hcCBjbGljayBldmVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcENvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIEhhbmRsZU1hcENsaWNrRXZlbnRzKCk7XHJcbiAgICAvKipcclxuICAgICAqIERlbGVnYXRlIGhhbmRsaW5nIG1hcCBjZW50ZXIgY2hhbmdlIGV2ZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgSGFuZGxlTWFwQm91bmRzQ2hhbmdlKCk7XHJcbiAgICAvKipcclxuICAgICAqIERlbGVnYXRlIGhhbmRsaW5nIG1hcCBjZW50ZXIgY2hhbmdlIGV2ZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgSGFuZGxlTWFwQ2VudGVyQ2hhbmdlKCk7XHJcbiAgICAvKipcclxuICAgICAqIERlbGVnYXRlIGhhbmRsaW5nIG1hcCB6b29tIGNoYW5nZSBldmVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcENvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIEhhbmRsZU1hcFpvb21DaGFuZ2UoKTtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIG1hcC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZWwgLSBIdG1sIGVsZW1lbnRzIHdoaWNoIHdpbGwgaG9zdCB0aGUgbWFwIGNhbnZhcy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgSW5pdE1hcEluc3RhbmNlKGVsKTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgbWFwIGNlbnRlciBiYXNlZCBvbiB0aGUgZ2VvIHByb3BlcnRpZXMgb2YgdGhlIGNvbXBvbmVudC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgVXBkYXRlQ2VudGVyKCk7XHJcbn1cclxuLyoqXHJcbiAqIEZhY3RvcnkgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgYSBjbHVzdGVyIHNlcnZpY2UgaW5zdGFuY2UuIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugb2YgY29uc3RyYWludHMgd2l0aCBBT1QgdGhhdCBkbyBubyBhbGxvd1xyXG4gKiB1cyB0byB1c2UgbGFtZGEgZnVuY3Rpb25zIGlubGluZS5cclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAcGFyYW0gZiAtIFRoZSB7QGxpbmsgTWFwU2VydmljZUZhY3Rvcnl9IGltcGxlbWVudGF0aW9uLlxyXG4gKiBAcGFyYW0gbSAtIEEge0BsaW5rIE1hcFNlcnZpY2V9IGluc3RhbmNlLlxyXG4gKiBAcmV0dXJucyAtIEEgY29uY3JldGUgaW5zdGFuY2Ugb2YgYSBDbHVzdGVyIFNlcnZpY2UgYmFzZWQgb24gdGhlIHVuZGVybHlpbmcgbWFwIGFyY2hpdGVjdHVyZVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ2x1c3RlclNlcnZpY2VGYWN0b3J5KGY6IE1hcFNlcnZpY2VGYWN0b3J5LCBtOiBNYXBTZXJ2aWNlKTogQ2x1c3RlclNlcnZpY2U7XHJcbi8qKlxyXG4gKiBGYWN0b3J5IGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGEgaW5mb2JveCBzZXJ2aWNlIGluc3RhbmNlLiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIG9mIGNvbnN0cmFpbnRzIHdpdGggQU9UIHRoYXQgZG8gbm8gYWxsb3dcclxuICogdXMgdG8gdXNlIGxhbWRhIGZ1bmN0aW9ucyBpbmxpbmUuXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQHBhcmFtIGYgLSBUaGUge0BsaW5rIE1hcFNlcnZpY2VGYWN0b3J5fSBpbXBsZW1lbnRhdGlvbi5cclxuICogQHBhcmFtIG0gLSBBIHtAbGluayBNYXBTZXJ2aWNlfSBpbnN0YW5jZS5cclxuICogQHBhcmFtIG0gLSBBIHtAbGluayBNYXJrZXJTZXJ2aWNlfSBpbnN0YW5jZS5cclxuICogQHJldHVybnMgLSBBIGNvbmNyZXRlIGluc3RhbmNlIG9mIGEgSW5mb0JveCBTZXJ2aWNlIGJhc2VkIG9uIHRoZSB1bmRlcmx5aW5nIG1hcCBhcmNoaXRlY3R1cmUuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBJbmZvQm94U2VydmljZUZhY3RvcnkoZjogTWFwU2VydmljZUZhY3RvcnksIG06IE1hcFNlcnZpY2UsIG1hOiBNYXJrZXJTZXJ2aWNlKTogSW5mb0JveFNlcnZpY2U7XHJcbi8qKlxyXG4gKiBGYWN0b3J5IGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGEgbGF5ZXIgc2VydmljZSBpbnN0YW5jZS4gVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBvZiBjb25zdHJhaW50cyB3aXRoIEFPVCB0aGF0IGRvIG5vIGFsbG93XHJcbiAqIHVzIHRvIHVzZSBsYW1kYSBmdW5jdGlvbnMgaW5saW5lLlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBwYXJhbSBmIC0gVGhlIHtAbGluayBNYXBTZXJ2aWNlRmFjdG9yeX0gaW1wbGVtZW50YXRpb24uXHJcbiAqIEBwYXJhbSBtIC0gQSB7QGxpbmsgTWFwU2VydmljZX0gaW5zdGFuY2UuXHJcbiAqIEByZXR1cm5zIC0gQSBjb25jcmV0ZSBpbnN0YW5jZSBvZiBhIExheWVyIFNlcnZpY2UgYmFzZWQgb24gdGhlIHVuZGVybHlpbmcgbWFwIGFyY2hpdGVjdHVyZS5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExheWVyU2VydmljZUZhY3RvcnkoZjogTWFwU2VydmljZUZhY3RvcnksIG06IE1hcFNlcnZpY2UpOiBMYXllclNlcnZpY2U7XHJcbi8qKlxyXG4gKiBGYWN0b3J5IGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGEgbWFwIHNlcnZpY2UgaW5zdGFuY2UuIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugb2YgY29uc3RyYWludHMgd2l0aCBBT1QgdGhhdCBkbyBubyBhbGxvd1xyXG4gKiB1cyB0byB1c2UgbGFtZGEgZnVuY3Rpb25zIGlubGluZS5cclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAcGFyYW0gZiAtIFRoZSB7QGxpbmsgTWFwU2VydmljZUZhY3Rvcnl9IGltcGxlbWVudGF0aW9uLlxyXG4gKiBAcmV0dXJucyAtIEEgY29uY3JldGUgaW5zdGFuY2Ugb2YgYSBNYXBTZXJ2aWNlIGJhc2VkIG9uIHRoZSB1bmRlcmx5aW5nIG1hcCBhcmNoaXRlY3R1cmUuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBNYXBTZXJ2aWNlQ3JlYXRvcihmOiBNYXBTZXJ2aWNlRmFjdG9yeSk6IE1hcFNlcnZpY2U7XHJcbi8qKlxyXG4gKiBGYWN0b3J5IGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGEgbWFya2VyIHNlcnZpY2UgaW5zdGFuY2UuIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugb2YgY29uc3RyYWludHMgd2l0aCBBT1QgdGhhdCBkbyBubyBhbGxvd1xyXG4gKiB1cyB0byB1c2UgbGFtZGEgZnVuY3Rpb25zIGlubGluZS5cclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAcGFyYW0gZiAtIFRoZSB7QGxpbmsgTWFwU2VydmljZUZhY3Rvcnl9IGltcGxlbWVudGF0aW9uLlxyXG4gKiBAcGFyYW0gbSAtIEEge0BsaW5rIE1hcFNlcnZpY2V9IGluc3RhbmNlLlxyXG4gKiBAcGFyYW0gbCAtIEEge0BsaW5rIExheWVyU2VydmljZX0gaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSBjIC0gQSB7QGxpbmsgQ2x1c3RlclNlcnZpY2V9IGluc3RhbmNlLlxyXG4gKiBAcmV0dXJucyAtIEEgY29uY3JldGUgaW5zdGFuY2Ugb2YgYSBNYXJrZXIgU2VydmljZSBiYXNlZCBvbiB0aGUgdW5kZXJseWluZyBtYXAgYXJjaGl0ZWN0dXJlLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTWFya2VyU2VydmljZUZhY3RvcnkoZjogTWFwU2VydmljZUZhY3RvcnksIG06IE1hcFNlcnZpY2UsIGw6IExheWVyU2VydmljZSwgYzogQ2x1c3RlclNlcnZpY2UpOiBNYXJrZXJTZXJ2aWNlO1xyXG4vKipcclxuICogRmFjdG9yeSBmdW5jdGlvbiB0byBnZW5lcmF0ZSBhIHBvbHlnb24gc2VydmljZSBpbnN0YW5jZS4gVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBvZiBjb25zdHJhaW50cyB3aXRoIEFPVCB0aGF0IGRvIG5vIGFsbG93XHJcbiAqIHVzIHRvIHVzZSBsYW1kYSBmdW5jdGlvbnMgaW5saW5lLlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBwYXJhbSBmIC0gVGhlIHtAbGluayBNYXBTZXJ2aWNlRmFjdG9yeX0gaW1wbGVtZW50YXRpb24uXHJcbiAqIEBwYXJhbSBtIC0gQSB7QGxpbmsgTWFwU2VydmljZX0gaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSBsIC0gQSB7QGxpbmsgTGF5ZXJTZXJ2aWNlfSBpbnN0YW5jZS5cclxuICogQHJldHVybnMgLSBBIGNvbmNyZXRlIGluc3RhbmNlIG9mIGEgUG9seWdvbiBTZXJ2aWNlIGJhc2VkIG9uIHRoZSB1bmRlcmx5aW5nIG1hcCBhcmNoaXRlY3R1cmUuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBQb2x5Z29uU2VydmljZUZhY3RvcnkoZjogTWFwU2VydmljZUZhY3RvcnksIG06IE1hcFNlcnZpY2UsIGw6IExheWVyU2VydmljZSk6IFBvbHlnb25TZXJ2aWNlO1xyXG4vKipcclxuICogRmFjdG9yeSBmdW5jdGlvbiB0byBnZW5lcmF0ZSBhIHBvbHlsaW5lIHNlcnZpY2UgaW5zdGFuY2UuIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugb2YgY29uc3RyYWludHMgd2l0aCBBT1QgdGhhdCBkbyBubyBhbGxvd1xyXG4gKiB1cyB0byB1c2UgbGFtZGEgZnVuY3Rpb25zIGlubGluZS5cclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAcGFyYW0gZiAtIFRoZSB7QGxpbmsgTWFwU2VydmljZUZhY3Rvcnl9IGltcGxlbWVudGF0aW9uLlxyXG4gKiBAcGFyYW0gbSAtIEEge0BsaW5rIE1hcFNlcnZpY2V9IGluc3RhbmNlLlxyXG4gKiBAcGFyYW0gbCAtIEEge0BsaW5rIExheWVyU2VydmljZX0gaW5zdGFuY2UuXHJcbiAqIEByZXR1cm5zIC0gQSBjb25jcmV0ZSBpbnN0YW5jZSBvZiBhIFBvbHlsaW5lIFNlcnZpY2UgYmFzZWQgb24gdGhlIHVuZGVybHlpbmcgbWFwIGFyY2hpdGVjdHVyZS5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFBvbHlsaW5lU2VydmljZUZhY3RvcnkoZjogTWFwU2VydmljZUZhY3RvcnksIG06IE1hcFNlcnZpY2UsIGw6IExheWVyU2VydmljZSk6IFBvbHlsaW5lU2VydmljZTtcclxuIl19