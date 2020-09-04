import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { MapService } from '../map.service';
import { MapAPILoader } from '../mapapiloader';
import { Marker } from '../../models/marker';
import { Polygon } from '../../models/polygon';
import { Polyline } from '../../models/polyline';
import { InfoWindow } from '../../models/info-window';
import { Layer } from '../../models/layer';
import { CanvasOverlay } from '../../models/canvas-overlay';
import { ILayerOptions } from '../../interfaces/ilayer-options';
import { IClusterOptions } from '../../interfaces/icluster-options';
import { IMapOptions } from '../../interfaces/imap-options';
import { ILatLong } from '../../interfaces/ilatlong';
import { IPoint } from '../../interfaces/ipoint';
import { ISize } from '../../interfaces/isize';
import { IMarkerOptions } from '../../interfaces/imarker-options';
import { IInfoWindowOptions } from '../../interfaces/iinfo-window-options';
import { IPolygonOptions } from '../../interfaces/ipolygon-options';
import { IPolylineOptions } from '../../interfaces/ipolyline-options';
import { IBox } from '../../interfaces/ibox';
/**
 * Concrete implementation of the MapService abstract implementing a Bin Map V8 provider
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class BingMapService implements MapService {
    private _loader;
    private _zone;
    private _map;
    private _mapInstance;
    private _mapResolver;
    private _config;
    private _modules;
    /**
     * Gets an array of loaded Bong modules.
     *
     * @readonly
     * @memberof BingMapService
     */
    readonly LoadedModules: Map<string, Object>;
    /**
     * Gets the Bing Map control instance underlying the implementation
     *
     * @readonly
     * @memberof BingMapService
     */
    readonly MapInstance: Microsoft.Maps.Map;
    /**
     * Gets a Promise for a Bing Map control instance underlying the implementation. Use this instead of {@link MapInstance} if you
     * are not sure if and when the instance will be created.
     * @readonly
     * @memberof BingMapService
     */
    readonly MapPromise: Promise<Microsoft.Maps.Map>;
    /**
     * Gets the maps physical size.
     *
     * @readonly
     * @abstract
     * @memberof BingMapService
     */
    readonly MapSize: ISize;
    /**
     * Creates an instance of BingMapService.
     * @param _loader MapAPILoader instance implemented for Bing Maps. This instance will generally be injected.
     * @param _zone NgZone object to enable zone aware promises. This will generally be injected.
     *
     * @memberof BingMapService
     */
    constructor(_loader: MapAPILoader, _zone: NgZone);
    /**
     * Creates a canvas overlay layer to perform custom drawing over the map with out
     * some of the overhead associated with going through the Map objects.
     * @param drawCallback A callback function that is triggered when the canvas is ready to be
     * rendered for the current map view.
     * @returns - Promise of a {@link CanvasOverlay} object.
     * @memberof BingMapService
     */
    CreateCanvasOverlay(drawCallback: (canvas: HTMLCanvasElement) => void): Promise<CanvasOverlay>;
    /**
     * Creates a Bing map cluster layer within the map context
     *
     * @param options - Options for the layer. See {@link IClusterOptions}.
     * @returns - Promise of a {@link Layer} object, which models the underlying Microsoft.Maps.ClusterLayer object.
     *
     * @memberof BingMapService
     */
    CreateClusterLayer(options: IClusterOptions): Promise<Layer>;
    /**
     * Creates an information window for a map position
     *
     * @param [options] - Infowindow options. See {@link IInfoWindowOptions}
     * @returns - Promise of a {@link InfoWindow} object, which models the underlying Microsoft.Maps.Infobox object.
     *
     * @memberof BingMapService
     */
    CreateInfoWindow(options?: IInfoWindowOptions): Promise<InfoWindow>;
    /**
     * Creates a map layer within the map context
     *
     * @param options - Options for the layer. See {@link ILayerOptions}
     * @returns - Promise of a {@link Layer} object, which models the underlying Microsoft.Maps.Layer object.
     *
     * @memberof BingMapService
     */
    CreateLayer(options: ILayerOptions): Promise<Layer>;
    /**
     * Creates a map instance
     *
     * @param el - HTML element to host the map.
     * @param mapOptions - Map options
     * @returns - Promise fullfilled once the map has been created.
     *
     * @memberof BingMapService
     */
    CreateMap(el: HTMLElement, mapOptions: IMapOptions): Promise<void>;
    /**
     * Creates a Bing map marker within the map context
     *
     * @param [options=<IMarkerOptions>{}] - Options for the marker. See {@link IMarkerOptions}.
     * @returns - Promise of a {@link Marker} object, which models the underlying Microsoft.Maps.PushPin object.
     *
     * @memberof BingMapService
     */
    CreateMarker(options?: IMarkerOptions): Promise<Marker>;
    /**
     * Creates a polygon within the Bing Maps V8 map context
     *
     * @abstract
     * @param options - Options for the polygon. See {@link IPolygonOptions}.
     * @returns - Promise of a {@link Polygon} object, which models the underlying native polygon.
     *
     * @memberof MapService
     */
    CreatePolygon(options: IPolygonOptions): Promise<Polygon>;
    /**
     * Creates a polyline within the Bing Maps V8 map context
     *
     * @abstract
     * @param options - Options for the polyline. See {@link IPolylineOptions}.
     * @returns - Promise of a {@link Polyline} object (or an array thereof for complex paths),
     * which models the underlying native polygon.
     *
     * @memberof MapService
     */
    CreatePolyline(options: IPolylineOptions): Promise<Polyline | Array<Polyline>>;
    /**
     * Deletes a layer from the map.
     *
     * @param layer - Layer to delete. See {@link Layer}. This method expects the Bing specific Layer model implementation.
     * @returns - Promise fullfilled when the layer has been removed.
     *
     * @memberof BingMapService
     */
    DeleteLayer(layer: Layer): Promise<void>;
    /**
     * Dispaose the map and associated resoures.
     *
     * @memberof BingMapService
     */
    DisposeMap(): void;
    /**
     * Gets the geo coordinates of the map center
     *
     * @returns - A promise that when fullfilled contains the goe location of the center. See {@link ILatLong}.
     *
     * @memberof BingMapService
     */
    GetCenter(): Promise<ILatLong>;
    /**
     * Gets the geo coordinates of the map bounding box
     *
     * @returns - A promise that when fullfilled contains the goe location of the bounding box. See {@link IBox}.
     *
     * @memberof BingMapService
     */
    GetBounds(): Promise<IBox>;
    /**
     * Gets a shared or private instance of the map drawing tools.
     *
     * @param [useSharedInstance=true] - Set to false to create a private instance.
     * @returns - Promise that when resolved containst an instance of the drawing tools.
     * @memberof BingMapService
     */
    GetDrawingTools(useSharedInstance?: boolean): Promise<Microsoft.Maps.DrawingTools>;
    /**
     * Gets the current zoom level of the map.
     *
     * @returns - A promise that when fullfilled contains the zoom level.
     *
     * @memberof BingMapService
     */
    GetZoom(): Promise<number>;
    /**
     * Loads a module into the Map.
     *
     * @param moduleName - The module to load.
     * @param callback - Callback to call once loading is complete.
     * @method
     * @memberof BingMapService
     */
    LoadModule(moduleName: string, callback: () => void): void;
    /**
     * Loads a module into the Map and delivers and instance of the module payload.
     *
     * @param moduleName - The module to load.
     * @param useSharedInstance- Use a shared instance if true, create a new instance if false.
     * @method
     * @memberof BingMapService
     */
    LoadModuleInstance(moduleName: string, useSharedInstance?: boolean): Promise<Object>;
    /**
     * Provides a conversion of geo coordinates to pixels on the map control.
     *
     * @param loc - The geo coordinates to translate.
     * @returns - Promise of an {@link IPoint} interface representing the pixels. This promise resolves to null
     * if the goe coordinates are not in the view port.
     *
     * @memberof BingMapService
     */
    LocationToPoint(loc: ILatLong): Promise<IPoint>;
    /**
     * Provides a conversion of geo coordinates to pixels on the map control.
     *
     * @param loc - The geo coordinates to translate.
     * @returns - Promise of an {@link IPoint} interface array representing the pixels.
     *
     * @memberof BingMapService
     */
    LocationsToPoints(locs: Array<ILatLong>): Promise<Array<IPoint>>;
    /**
     * Centers the map on a geo location.
     *
     * @param latLng - GeoCoordinates around which to center the map. See {@link ILatLong}
     * @returns - Promise that is fullfilled when the center operations has been completed.
     *
     * @memberof BingMapService
     */
    SetCenter(latLng: ILatLong): Promise<void>;
    /**
     * Sets the generic map options.
     *
     * @param options - Options to set.
     *
     * @memberof BingMapService
     */
    SetMapOptions(options: IMapOptions): void;
    /**
     * Sets the view options of the map.
     *
     * @param options - Options to set.
     *
     * @memberof BingMapService
     */
    SetViewOptions(options: IMapOptions): void;
    /**
     * Sets the zoom level of the map.
     *
     * @param zoom - Zoom level to set.
     * @returns - A Promise that is fullfilled once the zoom operation is complete.
     *
     * @memberof BingMapService
     */
    SetZoom(zoom: number): Promise<void>;
    /**
     * Creates an event subscription
     *
     * @param eventName - The name of the event (e.g. 'click')
     * @returns - An observable of tpye E that fires when the event occurs.
     *
     * @memberof BingMapService
     */
    SubscribeToMapEvent<E>(eventName: string): Observable<E>;
    /**
     * Triggers the given event name on the map instance.
     *
     * @param eventName - Event to trigger.
     * @returns - A promise that is fullfilled once the event is triggered.
     *
     * @memberof BingMapService
     */
    TriggerMapEvent(eventName: string): Promise<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BingMapService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BingMapService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZy1tYXAuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJiaW5nLW1hcC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9tYXAuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcEFQSUxvYWRlciB9IGZyb20gJy4uL21hcGFwaWxvYWRlcic7XHJcbmltcG9ydCB7IE1hcmtlciB9IGZyb20gJy4uLy4uL21vZGVscy9tYXJrZXInO1xyXG5pbXBvcnQgeyBQb2x5Z29uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BvbHlnb24nO1xyXG5pbXBvcnQgeyBQb2x5bGluZSB9IGZyb20gJy4uLy4uL21vZGVscy9wb2x5bGluZSc7XHJcbmltcG9ydCB7IEluZm9XaW5kb3cgfSBmcm9tICcuLi8uLi9tb2RlbHMvaW5mby13aW5kb3cnO1xyXG5pbXBvcnQgeyBMYXllciB9IGZyb20gJy4uLy4uL21vZGVscy9sYXllcic7XHJcbmltcG9ydCB7IENhbnZhc092ZXJsYXkgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2FudmFzLW92ZXJsYXknO1xyXG5pbXBvcnQgeyBJTGF5ZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbGF5ZXItb3B0aW9ucyc7XHJcbmltcG9ydCB7IElDbHVzdGVyT3B0aW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaWNsdXN0ZXItb3B0aW9ucyc7XHJcbmltcG9ydCB7IElNYXBPcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbWFwLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBJTGF0TG9uZyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaWxhdGxvbmcnO1xyXG5pbXBvcnQgeyBJUG9pbnQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2lwb2ludCc7XHJcbmltcG9ydCB7IElTaXplIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pc2l6ZSc7XHJcbmltcG9ydCB7IElNYXJrZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbWFya2VyLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBJSW5mb1dpbmRvd09wdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2lpbmZvLXdpbmRvdy1vcHRpb25zJztcclxuaW1wb3J0IHsgSVBvbHlnb25PcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pcG9seWdvbi1vcHRpb25zJztcclxuaW1wb3J0IHsgSVBvbHlsaW5lT3B0aW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaXBvbHlsaW5lLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBJQm94IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pYm94JztcclxuLyoqXHJcbiAqIENvbmNyZXRlIGltcGxlbWVudGF0aW9uIG9mIHRoZSBNYXBTZXJ2aWNlIGFic3RyYWN0IGltcGxlbWVudGluZyBhIEJpbiBNYXAgVjggcHJvdmlkZXJcclxuICpcclxuICogQGV4cG9ydFxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQmluZ01hcFNlcnZpY2UgaW1wbGVtZW50cyBNYXBTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX2xvYWRlcjtcclxuICAgIHByaXZhdGUgX3pvbmU7XHJcbiAgICBwcml2YXRlIF9tYXA7XHJcbiAgICBwcml2YXRlIF9tYXBJbnN0YW5jZTtcclxuICAgIHByaXZhdGUgX21hcFJlc29sdmVyO1xyXG4gICAgcHJpdmF0ZSBfY29uZmlnO1xyXG4gICAgcHJpdmF0ZSBfbW9kdWxlcztcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhbiBhcnJheSBvZiBsb2FkZWQgQm9uZyBtb2R1bGVzLlxyXG4gICAgICpcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdNYXBTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IExvYWRlZE1vZHVsZXM6IE1hcDxzdHJpbmcsIE9iamVjdD47XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIEJpbmcgTWFwIGNvbnRyb2wgaW5zdGFuY2UgdW5kZXJseWluZyB0aGUgaW1wbGVtZW50YXRpb25cclxuICAgICAqXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBNYXBJbnN0YW5jZTogTWljcm9zb2Z0Lk1hcHMuTWFwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgUHJvbWlzZSBmb3IgYSBCaW5nIE1hcCBjb250cm9sIGluc3RhbmNlIHVuZGVybHlpbmcgdGhlIGltcGxlbWVudGF0aW9uLiBVc2UgdGhpcyBpbnN0ZWFkIG9mIHtAbGluayBNYXBJbnN0YW5jZX0gaWYgeW91XHJcbiAgICAgKiBhcmUgbm90IHN1cmUgaWYgYW5kIHdoZW4gdGhlIGluc3RhbmNlIHdpbGwgYmUgY3JlYXRlZC5cclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdNYXBTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IE1hcFByb21pc2U6IFByb21pc2U8TWljcm9zb2Z0Lk1hcHMuTWFwPjtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbWFwcyBwaHlzaWNhbCBzaXplLlxyXG4gICAgICpcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ01hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgTWFwU2l6ZTogSVNpemU7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQmluZ01hcFNlcnZpY2UuXHJcbiAgICAgKiBAcGFyYW0gX2xvYWRlciBNYXBBUElMb2FkZXIgaW5zdGFuY2UgaW1wbGVtZW50ZWQgZm9yIEJpbmcgTWFwcy4gVGhpcyBpbnN0YW5jZSB3aWxsIGdlbmVyYWxseSBiZSBpbmplY3RlZC5cclxuICAgICAqIEBwYXJhbSBfem9uZSBOZ1pvbmUgb2JqZWN0IHRvIGVuYWJsZSB6b25lIGF3YXJlIHByb21pc2VzLiBUaGlzIHdpbGwgZ2VuZXJhbGx5IGJlIGluamVjdGVkLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihfbG9hZGVyOiBNYXBBUElMb2FkZXIsIF96b25lOiBOZ1pvbmUpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgY2FudmFzIG92ZXJsYXkgbGF5ZXIgdG8gcGVyZm9ybSBjdXN0b20gZHJhd2luZyBvdmVyIHRoZSBtYXAgd2l0aCBvdXRcclxuICAgICAqIHNvbWUgb2YgdGhlIG92ZXJoZWFkIGFzc29jaWF0ZWQgd2l0aCBnb2luZyB0aHJvdWdoIHRoZSBNYXAgb2JqZWN0cy5cclxuICAgICAqIEBwYXJhbSBkcmF3Q2FsbGJhY2sgQSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjYW52YXMgaXMgcmVhZHkgdG8gYmVcclxuICAgICAqIHJlbmRlcmVkIGZvciB0aGUgY3VycmVudCBtYXAgdmlldy5cclxuICAgICAqIEByZXR1cm5zIC0gUHJvbWlzZSBvZiBhIHtAbGluayBDYW52YXNPdmVybGF5fSBvYmplY3QuXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ01hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgQ3JlYXRlQ2FudmFzT3ZlcmxheShkcmF3Q2FsbGJhY2s6IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSA9PiB2b2lkKTogUHJvbWlzZTxDYW52YXNPdmVybGF5PjtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIEJpbmcgbWFwIGNsdXN0ZXIgbGF5ZXIgd2l0aGluIHRoZSBtYXAgY29udGV4dFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9ucyBmb3IgdGhlIGxheWVyLiBTZWUge0BsaW5rIElDbHVzdGVyT3B0aW9uc30uXHJcbiAgICAgKiBAcmV0dXJucyAtIFByb21pc2Ugb2YgYSB7QGxpbmsgTGF5ZXJ9IG9iamVjdCwgd2hpY2ggbW9kZWxzIHRoZSB1bmRlcmx5aW5nIE1pY3Jvc29mdC5NYXBzLkNsdXN0ZXJMYXllciBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdNYXBTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIENyZWF0ZUNsdXN0ZXJMYXllcihvcHRpb25zOiBJQ2x1c3Rlck9wdGlvbnMpOiBQcm9taXNlPExheWVyPjtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbmZvcm1hdGlvbiB3aW5kb3cgZm9yIGEgbWFwIHBvc2l0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIFtvcHRpb25zXSAtIEluZm93aW5kb3cgb3B0aW9ucy4gU2VlIHtAbGluayBJSW5mb1dpbmRvd09wdGlvbnN9XHJcbiAgICAgKiBAcmV0dXJucyAtIFByb21pc2Ugb2YgYSB7QGxpbmsgSW5mb1dpbmRvd30gb2JqZWN0LCB3aGljaCBtb2RlbHMgdGhlIHVuZGVybHlpbmcgTWljcm9zb2Z0Lk1hcHMuSW5mb2JveCBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdNYXBTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIENyZWF0ZUluZm9XaW5kb3cob3B0aW9ucz86IElJbmZvV2luZG93T3B0aW9ucyk6IFByb21pc2U8SW5mb1dpbmRvdz47XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBtYXAgbGF5ZXIgd2l0aGluIHRoZSBtYXAgY29udGV4dFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9ucyBmb3IgdGhlIGxheWVyLiBTZWUge0BsaW5rIElMYXllck9wdGlvbnN9XHJcbiAgICAgKiBAcmV0dXJucyAtIFByb21pc2Ugb2YgYSB7QGxpbmsgTGF5ZXJ9IG9iamVjdCwgd2hpY2ggbW9kZWxzIHRoZSB1bmRlcmx5aW5nIE1pY3Jvc29mdC5NYXBzLkxheWVyIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ01hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgQ3JlYXRlTGF5ZXIob3B0aW9uczogSUxheWVyT3B0aW9ucyk6IFByb21pc2U8TGF5ZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbWFwIGluc3RhbmNlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGVsIC0gSFRNTCBlbGVtZW50IHRvIGhvc3QgdGhlIG1hcC5cclxuICAgICAqIEBwYXJhbSBtYXBPcHRpb25zIC0gTWFwIG9wdGlvbnNcclxuICAgICAqIEByZXR1cm5zIC0gUHJvbWlzZSBmdWxsZmlsbGVkIG9uY2UgdGhlIG1hcCBoYXMgYmVlbiBjcmVhdGVkLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBDcmVhdGVNYXAoZWw6IEhUTUxFbGVtZW50LCBtYXBPcHRpb25zOiBJTWFwT3B0aW9ucyk6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBCaW5nIG1hcCBtYXJrZXIgd2l0aGluIHRoZSBtYXAgY29udGV4dFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBbb3B0aW9ucz08SU1hcmtlck9wdGlvbnM+e31dIC0gT3B0aW9ucyBmb3IgdGhlIG1hcmtlci4gU2VlIHtAbGluayBJTWFya2VyT3B0aW9uc30uXHJcbiAgICAgKiBAcmV0dXJucyAtIFByb21pc2Ugb2YgYSB7QGxpbmsgTWFya2VyfSBvYmplY3QsIHdoaWNoIG1vZGVscyB0aGUgdW5kZXJseWluZyBNaWNyb3NvZnQuTWFwcy5QdXNoUGluIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ01hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgQ3JlYXRlTWFya2VyKG9wdGlvbnM/OiBJTWFya2VyT3B0aW9ucyk6IFByb21pc2U8TWFya2VyPjtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIHBvbHlnb24gd2l0aGluIHRoZSBCaW5nIE1hcHMgVjggbWFwIGNvbnRleHRcclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9ucyBmb3IgdGhlIHBvbHlnb24uIFNlZSB7QGxpbmsgSVBvbHlnb25PcHRpb25zfS5cclxuICAgICAqIEByZXR1cm5zIC0gUHJvbWlzZSBvZiBhIHtAbGluayBQb2x5Z29ufSBvYmplY3QsIHdoaWNoIG1vZGVscyB0aGUgdW5kZXJseWluZyBuYXRpdmUgcG9seWdvbi5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBDcmVhdGVQb2x5Z29uKG9wdGlvbnM6IElQb2x5Z29uT3B0aW9ucyk6IFByb21pc2U8UG9seWdvbj47XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBwb2x5bGluZSB3aXRoaW4gdGhlIEJpbmcgTWFwcyBWOCBtYXAgY29udGV4dFxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zIGZvciB0aGUgcG9seWxpbmUuIFNlZSB7QGxpbmsgSVBvbHlsaW5lT3B0aW9uc30uXHJcbiAgICAgKiBAcmV0dXJucyAtIFByb21pc2Ugb2YgYSB7QGxpbmsgUG9seWxpbmV9IG9iamVjdCAob3IgYW4gYXJyYXkgdGhlcmVvZiBmb3IgY29tcGxleCBwYXRocyksXHJcbiAgICAgKiB3aGljaCBtb2RlbHMgdGhlIHVuZGVybHlpbmcgbmF0aXZlIHBvbHlnb24uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgQ3JlYXRlUG9seWxpbmUob3B0aW9uczogSVBvbHlsaW5lT3B0aW9ucyk6IFByb21pc2U8UG9seWxpbmUgfCBBcnJheTxQb2x5bGluZT4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGVzIGEgbGF5ZXIgZnJvbSB0aGUgbWFwLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsYXllciAtIExheWVyIHRvIGRlbGV0ZS4gU2VlIHtAbGluayBMYXllcn0uIFRoaXMgbWV0aG9kIGV4cGVjdHMgdGhlIEJpbmcgc3BlY2lmaWMgTGF5ZXIgbW9kZWwgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgKiBAcmV0dXJucyAtIFByb21pc2UgZnVsbGZpbGxlZCB3aGVuIHRoZSBsYXllciBoYXMgYmVlbiByZW1vdmVkLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBEZWxldGVMYXllcihsYXllcjogTGF5ZXIpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwYW9zZSB0aGUgbWFwIGFuZCBhc3NvY2lhdGVkIHJlc291cmVzLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBEaXNwb3NlTWFwKCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGdlbyBjb29yZGluYXRlcyBvZiB0aGUgbWFwIGNlbnRlclxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgd2hlbiBmdWxsZmlsbGVkIGNvbnRhaW5zIHRoZSBnb2UgbG9jYXRpb24gb2YgdGhlIGNlbnRlci4gU2VlIHtAbGluayBJTGF0TG9uZ30uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdNYXBTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIEdldENlbnRlcigpOiBQcm9taXNlPElMYXRMb25nPjtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgZ2VvIGNvb3JkaW5hdGVzIG9mIHRoZSBtYXAgYm91bmRpbmcgYm94XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCB3aGVuIGZ1bGxmaWxsZWQgY29udGFpbnMgdGhlIGdvZSBsb2NhdGlvbiBvZiB0aGUgYm91bmRpbmcgYm94LiBTZWUge0BsaW5rIElCb3h9LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBHZXRCb3VuZHMoKTogUHJvbWlzZTxJQm94PjtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIHNoYXJlZCBvciBwcml2YXRlIGluc3RhbmNlIG9mIHRoZSBtYXAgZHJhd2luZyB0b29scy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gW3VzZVNoYXJlZEluc3RhbmNlPXRydWVdIC0gU2V0IHRvIGZhbHNlIHRvIGNyZWF0ZSBhIHByaXZhdGUgaW5zdGFuY2UuXHJcbiAgICAgKiBAcmV0dXJucyAtIFByb21pc2UgdGhhdCB3aGVuIHJlc29sdmVkIGNvbnRhaW5zdCBhbiBpbnN0YW5jZSBvZiB0aGUgZHJhd2luZyB0b29scy5cclxuICAgICAqIEBtZW1iZXJvZiBCaW5nTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBHZXREcmF3aW5nVG9vbHModXNlU2hhcmVkSW5zdGFuY2U/OiBib29sZWFuKTogUHJvbWlzZTxNaWNyb3NvZnQuTWFwcy5EcmF3aW5nVG9vbHM+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50IHpvb20gbGV2ZWwgb2YgdGhlIG1hcC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyAtIEEgcHJvbWlzZSB0aGF0IHdoZW4gZnVsbGZpbGxlZCBjb250YWlucyB0aGUgem9vbSBsZXZlbC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ01hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgR2V0Wm9vbSgpOiBQcm9taXNlPG51bWJlcj47XHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIGEgbW9kdWxlIGludG8gdGhlIE1hcC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbW9kdWxlTmFtZSAtIFRoZSBtb2R1bGUgdG8gbG9hZC5cclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayAtIENhbGxiYWNrIHRvIGNhbGwgb25jZSBsb2FkaW5nIGlzIGNvbXBsZXRlLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdNYXBTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIExvYWRNb2R1bGUobW9kdWxlTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIGEgbW9kdWxlIGludG8gdGhlIE1hcCBhbmQgZGVsaXZlcnMgYW5kIGluc3RhbmNlIG9mIHRoZSBtb2R1bGUgcGF5bG9hZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbW9kdWxlTmFtZSAtIFRoZSBtb2R1bGUgdG8gbG9hZC5cclxuICAgICAqIEBwYXJhbSB1c2VTaGFyZWRJbnN0YW5jZS0gVXNlIGEgc2hhcmVkIGluc3RhbmNlIGlmIHRydWUsIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZSBpZiBmYWxzZS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBMb2FkTW9kdWxlSW5zdGFuY2UobW9kdWxlTmFtZTogc3RyaW5nLCB1c2VTaGFyZWRJbnN0YW5jZT86IGJvb2xlYW4pOiBQcm9taXNlPE9iamVjdD47XHJcbiAgICAvKipcclxuICAgICAqIFByb3ZpZGVzIGEgY29udmVyc2lvbiBvZiBnZW8gY29vcmRpbmF0ZXMgdG8gcGl4ZWxzIG9uIHRoZSBtYXAgY29udHJvbC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbG9jIC0gVGhlIGdlbyBjb29yZGluYXRlcyB0byB0cmFuc2xhdGUuXHJcbiAgICAgKiBAcmV0dXJucyAtIFByb21pc2Ugb2YgYW4ge0BsaW5rIElQb2ludH0gaW50ZXJmYWNlIHJlcHJlc2VudGluZyB0aGUgcGl4ZWxzLiBUaGlzIHByb21pc2UgcmVzb2x2ZXMgdG8gbnVsbFxyXG4gICAgICogaWYgdGhlIGdvZSBjb29yZGluYXRlcyBhcmUgbm90IGluIHRoZSB2aWV3IHBvcnQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdNYXBTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIExvY2F0aW9uVG9Qb2ludChsb2M6IElMYXRMb25nKTogUHJvbWlzZTxJUG9pbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQcm92aWRlcyBhIGNvbnZlcnNpb24gb2YgZ2VvIGNvb3JkaW5hdGVzIHRvIHBpeGVscyBvbiB0aGUgbWFwIGNvbnRyb2wuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGxvYyAtIFRoZSBnZW8gY29vcmRpbmF0ZXMgdG8gdHJhbnNsYXRlLlxyXG4gICAgICogQHJldHVybnMgLSBQcm9taXNlIG9mIGFuIHtAbGluayBJUG9pbnR9IGludGVyZmFjZSBhcnJheSByZXByZXNlbnRpbmcgdGhlIHBpeGVscy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ01hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgTG9jYXRpb25zVG9Qb2ludHMobG9jczogQXJyYXk8SUxhdExvbmc+KTogUHJvbWlzZTxBcnJheTxJUG9pbnQ+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ2VudGVycyB0aGUgbWFwIG9uIGEgZ2VvIGxvY2F0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsYXRMbmcgLSBHZW9Db29yZGluYXRlcyBhcm91bmQgd2hpY2ggdG8gY2VudGVyIHRoZSBtYXAuIFNlZSB7QGxpbmsgSUxhdExvbmd9XHJcbiAgICAgKiBAcmV0dXJucyAtIFByb21pc2UgdGhhdCBpcyBmdWxsZmlsbGVkIHdoZW4gdGhlIGNlbnRlciBvcGVyYXRpb25zIGhhcyBiZWVuIGNvbXBsZXRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ01hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgU2V0Q2VudGVyKGxhdExuZzogSUxhdExvbmcpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBnZW5lcmljIG1hcCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9ucyB0byBzZXQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdNYXBTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIFNldE1hcE9wdGlvbnMob3B0aW9uczogSU1hcE9wdGlvbnMpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB2aWV3IG9wdGlvbnMgb2YgdGhlIG1hcC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbnMgdG8gc2V0LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBTZXRWaWV3T3B0aW9ucyhvcHRpb25zOiBJTWFwT3B0aW9ucyk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHpvb20gbGV2ZWwgb2YgdGhlIG1hcC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gem9vbSAtIFpvb20gbGV2ZWwgdG8gc2V0LlxyXG4gICAgICogQHJldHVybnMgLSBBIFByb21pc2UgdGhhdCBpcyBmdWxsZmlsbGVkIG9uY2UgdGhlIHpvb20gb3BlcmF0aW9uIGlzIGNvbXBsZXRlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBTZXRab29tKHpvb206IG51bWJlcik6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gZXZlbnQgc3Vic2NyaXB0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudCAoZS5nLiAnY2xpY2snKVxyXG4gICAgICogQHJldHVybnMgLSBBbiBvYnNlcnZhYmxlIG9mIHRweWUgRSB0aGF0IGZpcmVzIHdoZW4gdGhlIGV2ZW50IG9jY3Vycy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ01hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgU3Vic2NyaWJlVG9NYXBFdmVudDxFPihldmVudE5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8RT47XHJcbiAgICAvKipcclxuICAgICAqIFRyaWdnZXJzIHRoZSBnaXZlbiBldmVudCBuYW1lIG9uIHRoZSBtYXAgaW5zdGFuY2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSAtIEV2ZW50IHRvIHRyaWdnZXIuXHJcbiAgICAgKiBAcmV0dXJucyAtIEEgcHJvbWlzZSB0aGF0IGlzIGZ1bGxmaWxsZWQgb25jZSB0aGUgZXZlbnQgaXMgdHJpZ2dlcmVkLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBUcmlnZ2VyTWFwRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcbiJdfQ==