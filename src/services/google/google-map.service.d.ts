import { GoogleInfoWindow } from '../../models/google/google-info-window';
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { MapService } from '../map.service';
import { MapAPILoader } from '../mapapiloader';
import { ILayerOptions } from '../../interfaces/ilayer-options';
import { IClusterOptions } from '../../interfaces/icluster-options';
import { IMapOptions } from '../../interfaces/imap-options';
import { ILatLong } from '../../interfaces/ilatlong';
import { IPoint } from '../../interfaces/ipoint';
import { ISize } from '../../interfaces/isize';
import { IMarkerOptions } from '../../interfaces/imarker-options';
import { IPolygonOptions } from '../../interfaces/ipolygon-options';
import { IPolylineOptions } from '../../interfaces/ipolyline-options';
import { IInfoWindowOptions } from '../../interfaces/iinfo-window-options';
import { Marker } from '../../models/marker';
import { Polygon } from '../../models/polygon';
import { Polyline } from '../../models/polyline';
import { CanvasOverlay } from '../../models/canvas-overlay';
import { Layer } from '../../models/layer';
import { IBox } from '../../interfaces/ibox';
import * as GoogleMapTypes from './google-map-types';
/**
 * Concrete implementation of the MapService abstract implementing a Google Maps provider
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class GoogleMapService implements MapService {
    private _loader;
    private _zone;
    private _map;
    private _mapInstance;
    private _mapResolver;
    private _config;
    /**
     * Gets the Google Map control instance underlying the implementation
     *
     * @readonly
     * @memberof GoogleMapService
     */
    readonly MapInstance: GoogleMapTypes.GoogleMap;
    /**
     * Gets a Promise for a Google Map control instance underlying the implementation. Use this instead of {@link MapInstance} if you
     * are not sure if and when the instance will be created.
     * @readonly
     * @memberof GoogleMapService
     */
    readonly MapPromise: Promise<GoogleMapTypes.GoogleMap>;
    /**
     * Gets the maps physical size.
     *
     * @readonly
     * @abstract
     * @memberof BingMapService
     */
    readonly MapSize: ISize;
    /**
     * Creates an instance of GoogleMapService.
     * @param _loader MapAPILoader instance implemented for Google Maps. This instance will generally be injected.
     * @param _zone NgZone object to enable zone aware promises. This will generally be injected.
     *
     * @memberof GoogleMapService
     */
    constructor(_loader: MapAPILoader, _zone: NgZone);
    /**
     * Creates a canvas overlay layer to perform custom drawing over the map with out
     * some of the overhead associated with going through the Map objects.
     * @param drawCallback A callback function that is triggered when the canvas is ready to be
     * rendered for the current map view.
     * @returns - Promise of a {@link CanvasOverlay} object.
     * @memberof GoogleMapService
     */
    CreateCanvasOverlay(drawCallback: (canvas: HTMLCanvasElement) => void): Promise<CanvasOverlay>;
    CreateClusterLayer(options: IClusterOptions): Promise<Layer>;
    /**
     * Creates an information window for a map position
     *
     * @param [options] - Infowindow options. See {@link IInfoWindowOptions}
     * @returns - Promise of a {@link InfoWindow} object, which models the underlying Microsoft.Maps.Infobox object.
     *
     * @memberof GoogleMapService
     */
    CreateInfoWindow(options?: IInfoWindowOptions): Promise<GoogleInfoWindow>;
    /**
     * Creates a map layer within the map context
     *
     * @param options - Options for the layer. See {@link ILayerOptions}
     * @returns - Promise of a {@link Layer} object, which models the underlying Microsoft.Maps.Layer object.
     *
     * @memberof GoogleMapService
     */
    CreateLayer(options: ILayerOptions): Promise<Layer>;
    /**
     * Creates a map instance
     *
     * @param el - HTML element to host the map.
     * @param mapOptions - Map options
     * @returns - Promise fullfilled once the map has been created.
     *
     * @memberof GoogleMapService
     */
    CreateMap(el: HTMLElement, mapOptions: IMapOptions): Promise<void>;
    /**
     * Creates a Google map marker within the map context
     *
     * @param [options=<IMarkerOptions>{}] - Options for the marker. See {@link IMarkerOptions}.
     * @returns - Promise of a {@link Marker} object, which models the underlying Microsoft.Maps.PushPin object.
     *
     * @memberof GoogleMapService
     */
    CreateMarker(options?: IMarkerOptions): Promise<Marker>;
    /**
     * Creates a polygon within the Google Map map context
     *
     * @abstract
     * @param options - Options for the polygon. See {@link IPolygonOptions}.
     * @returns - Promise of a {@link Polygon} object, which models the underlying native polygon.
     *
     * @memberof MapService
     */
    CreatePolygon(options: IPolygonOptions): Promise<Polygon>;
    /**
     * Creates a polyline within the Google Map map context
     *
     * @abstract
     * @param options - Options for the polyline. See {@link IPolylineOptions}.
     * @returns - Promise of a {@link Polyline} object (or an array therefore for complex paths)
     * which models the underlying native polyline.
     *
     * @memberof MapService
     */
    CreatePolyline(options: IPolylineOptions): Promise<Polyline | Array<Polyline>>;
    /**
     * Deletes a layer from the map.
     *
     * @param layer - Layer to delete. See {@link Layer}. This method expects the Google specific Layer model implementation.
     * @returns - Promise fullfilled when the layer has been removed.
     *
     * @memberof GoogleMapService
     */
    DeleteLayer(layer: Layer): Promise<void>;
    /**
     * Dispaose the map and associated resoures.
     *
     * @memberof GoogleMapService
     */
    DisposeMap(): void;
    /**
     * Gets the geo coordinates of the map center
     *
     * @returns - A promise that when fullfilled contains the goe location of the center. See {@link ILatLong}.
     *
     * @memberof GoogleMapService
     */
    GetCenter(): Promise<ILatLong>;
    /**
     * Gets the geo coordinates of the map bounding box
     *
     * @returns - A promise that when fullfilled contains the geo location of the bounding box. See {@link IBox}.
     *
     * @memberof GoogleMapService
     */
    GetBounds(): Promise<IBox>;
    /**
     * Gets the current zoom level of the map.
     *
     * @returns - A promise that when fullfilled contains the zoom level.
     *
     * @memberof GoogleMapService
     */
    GetZoom(): Promise<number>;
    /**
     * Provides a conversion of geo coordinates to pixels on the map control.
     *
     * @param loc - The geo coordinates to translate.
     * @returns - Promise of an {@link IPoint} interface representing the pixels. This promise resolves to null
     * if the goe coordinates are not in the view port.
     *
     * @memberof GoogleMapService
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
     * @memberof GoogleMapService
     */
    SetCenter(latLng: ILatLong): Promise<void>;
    /**
     * Sets the generic map options.
     *
     * @param options - Options to set.
     *
     * @memberof GoogleMapService
     */
    SetMapOptions(options: IMapOptions): void;
    /**
     * Sets the view options of the map.
     *
     * @param options - Options to set.
     *
     * @memberof GoogleMapService
     */
    SetViewOptions(options: IMapOptions): void;
    /**
     * Sets the zoom level of the map.
     *
     * @param zoom - Zoom level to set.
     * @returns - A Promise that is fullfilled once the zoom operation is complete.
     *
     * @memberof GoogleMapService
     */
    SetZoom(zoom: number): Promise<void>;
    /**
     * Creates an event subscription
     *
     * @param eventName - The name of the event (e.g. 'click')
     * @returns - An observable of type E that fires when the event occurs.
     *
     * @memberof GoogleMapService
     */
    SubscribeToMapEvent<E>(eventName: string): Observable<E>;
    /**
     * Triggers the given event name on the map instance.
     *
     * @param eventName - Event to trigger.
     * @returns - A promise that is fullfilled once the event is triggered.
     *
     * @memberof GoogleMapService
     */
    TriggerMapEvent(eventName: string): Promise<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GoogleMapService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<GoogleMapService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImdvb2dsZS1tYXAuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvb2dsZUluZm9XaW5kb3cgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ29vZ2xlL2dvb2dsZS1pbmZvLXdpbmRvdyc7XHJcbmltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9tYXAuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcEFQSUxvYWRlciB9IGZyb20gJy4uL21hcGFwaWxvYWRlcic7XHJcbmltcG9ydCB7IElMYXllck9wdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2lsYXllci1vcHRpb25zJztcclxuaW1wb3J0IHsgSUNsdXN0ZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pY2x1c3Rlci1vcHRpb25zJztcclxuaW1wb3J0IHsgSU1hcE9wdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2ltYXAtb3B0aW9ucyc7XHJcbmltcG9ydCB7IElMYXRMb25nIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbGF0bG9uZyc7XHJcbmltcG9ydCB7IElQb2ludCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaXBvaW50JztcclxuaW1wb3J0IHsgSVNpemUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2lzaXplJztcclxuaW1wb3J0IHsgSU1hcmtlck9wdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2ltYXJrZXItb3B0aW9ucyc7XHJcbmltcG9ydCB7IElQb2x5Z29uT3B0aW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaXBvbHlnb24tb3B0aW9ucyc7XHJcbmltcG9ydCB7IElQb2x5bGluZU9wdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2lwb2x5bGluZS1vcHRpb25zJztcclxuaW1wb3J0IHsgSUluZm9XaW5kb3dPcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9paW5mby13aW5kb3ctb3B0aW9ucyc7XHJcbmltcG9ydCB7IE1hcmtlciB9IGZyb20gJy4uLy4uL21vZGVscy9tYXJrZXInO1xyXG5pbXBvcnQgeyBQb2x5Z29uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BvbHlnb24nO1xyXG5pbXBvcnQgeyBQb2x5bGluZSB9IGZyb20gJy4uLy4uL21vZGVscy9wb2x5bGluZSc7XHJcbmltcG9ydCB7IENhbnZhc092ZXJsYXkgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2FudmFzLW92ZXJsYXknO1xyXG5pbXBvcnQgeyBMYXllciB9IGZyb20gJy4uLy4uL21vZGVscy9sYXllcic7XHJcbmltcG9ydCB7IElCb3ggfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2lib3gnO1xyXG5pbXBvcnQgKiBhcyBHb29nbGVNYXBUeXBlcyBmcm9tICcuL2dvb2dsZS1tYXAtdHlwZXMnO1xyXG4vKipcclxuICogQ29uY3JldGUgaW1wbGVtZW50YXRpb24gb2YgdGhlIE1hcFNlcnZpY2UgYWJzdHJhY3QgaW1wbGVtZW50aW5nIGEgR29vZ2xlIE1hcHMgcHJvdmlkZXJcclxuICpcclxuICogQGV4cG9ydFxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgR29vZ2xlTWFwU2VydmljZSBpbXBsZW1lbnRzIE1hcFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfbG9hZGVyO1xyXG4gICAgcHJpdmF0ZSBfem9uZTtcclxuICAgIHByaXZhdGUgX21hcDtcclxuICAgIHByaXZhdGUgX21hcEluc3RhbmNlO1xyXG4gICAgcHJpdmF0ZSBfbWFwUmVzb2x2ZXI7XHJcbiAgICBwcml2YXRlIF9jb25maWc7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIEdvb2dsZSBNYXAgY29udHJvbCBpbnN0YW5jZSB1bmRlcmx5aW5nIHRoZSBpbXBsZW1lbnRhdGlvblxyXG4gICAgICpcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZU1hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgTWFwSW5zdGFuY2U6IEdvb2dsZU1hcFR5cGVzLkdvb2dsZU1hcDtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIFByb21pc2UgZm9yIGEgR29vZ2xlIE1hcCBjb250cm9sIGluc3RhbmNlIHVuZGVybHlpbmcgdGhlIGltcGxlbWVudGF0aW9uLiBVc2UgdGhpcyBpbnN0ZWFkIG9mIHtAbGluayBNYXBJbnN0YW5jZX0gaWYgeW91XHJcbiAgICAgKiBhcmUgbm90IHN1cmUgaWYgYW5kIHdoZW4gdGhlIGluc3RhbmNlIHdpbGwgYmUgY3JlYXRlZC5cclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZU1hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgTWFwUHJvbWlzZTogUHJvbWlzZTxHb29nbGVNYXBUeXBlcy5Hb29nbGVNYXA+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBtYXBzIHBoeXNpY2FsIHNpemUuXHJcbiAgICAgKlxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBNYXBTaXplOiBJU2l6ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBHb29nbGVNYXBTZXJ2aWNlLlxyXG4gICAgICogQHBhcmFtIF9sb2FkZXIgTWFwQVBJTG9hZGVyIGluc3RhbmNlIGltcGxlbWVudGVkIGZvciBHb29nbGUgTWFwcy4gVGhpcyBpbnN0YW5jZSB3aWxsIGdlbmVyYWxseSBiZSBpbmplY3RlZC5cclxuICAgICAqIEBwYXJhbSBfem9uZSBOZ1pvbmUgb2JqZWN0IHRvIGVuYWJsZSB6b25lIGF3YXJlIHByb21pc2VzLiBUaGlzIHdpbGwgZ2VuZXJhbGx5IGJlIGluamVjdGVkLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVNYXBTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKF9sb2FkZXI6IE1hcEFQSUxvYWRlciwgX3pvbmU6IE5nWm9uZSk7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBjYW52YXMgb3ZlcmxheSBsYXllciB0byBwZXJmb3JtIGN1c3RvbSBkcmF3aW5nIG92ZXIgdGhlIG1hcCB3aXRoIG91dFxyXG4gICAgICogc29tZSBvZiB0aGUgb3ZlcmhlYWQgYXNzb2NpYXRlZCB3aXRoIGdvaW5nIHRocm91Z2ggdGhlIE1hcCBvYmplY3RzLlxyXG4gICAgICogQHBhcmFtIGRyYXdDYWxsYmFjayBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNhbnZhcyBpcyByZWFkeSB0byBiZVxyXG4gICAgICogcmVuZGVyZWQgZm9yIHRoZSBjdXJyZW50IG1hcCB2aWV3LlxyXG4gICAgICogQHJldHVybnMgLSBQcm9taXNlIG9mIGEge0BsaW5rIENhbnZhc092ZXJsYXl9IG9iamVjdC5cclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVNYXBTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIENyZWF0ZUNhbnZhc092ZXJsYXkoZHJhd0NhbGxiYWNrOiAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkgPT4gdm9pZCk6IFByb21pc2U8Q2FudmFzT3ZlcmxheT47XHJcbiAgICBDcmVhdGVDbHVzdGVyTGF5ZXIob3B0aW9uczogSUNsdXN0ZXJPcHRpb25zKTogUHJvbWlzZTxMYXllcj47XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5mb3JtYXRpb24gd2luZG93IGZvciBhIG1hcCBwb3NpdGlvblxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBbb3B0aW9uc10gLSBJbmZvd2luZG93IG9wdGlvbnMuIFNlZSB7QGxpbmsgSUluZm9XaW5kb3dPcHRpb25zfVxyXG4gICAgICogQHJldHVybnMgLSBQcm9taXNlIG9mIGEge0BsaW5rIEluZm9XaW5kb3d9IG9iamVjdCwgd2hpY2ggbW9kZWxzIHRoZSB1bmRlcmx5aW5nIE1pY3Jvc29mdC5NYXBzLkluZm9ib3ggb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVNYXBTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIENyZWF0ZUluZm9XaW5kb3cob3B0aW9ucz86IElJbmZvV2luZG93T3B0aW9ucyk6IFByb21pc2U8R29vZ2xlSW5mb1dpbmRvdz47XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBtYXAgbGF5ZXIgd2l0aGluIHRoZSBtYXAgY29udGV4dFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9ucyBmb3IgdGhlIGxheWVyLiBTZWUge0BsaW5rIElMYXllck9wdGlvbnN9XHJcbiAgICAgKiBAcmV0dXJucyAtIFByb21pc2Ugb2YgYSB7QGxpbmsgTGF5ZXJ9IG9iamVjdCwgd2hpY2ggbW9kZWxzIHRoZSB1bmRlcmx5aW5nIE1pY3Jvc29mdC5NYXBzLkxheWVyIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBDcmVhdGVMYXllcihvcHRpb25zOiBJTGF5ZXJPcHRpb25zKTogUHJvbWlzZTxMYXllcj47XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBtYXAgaW5zdGFuY2VcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZWwgLSBIVE1MIGVsZW1lbnQgdG8gaG9zdCB0aGUgbWFwLlxyXG4gICAgICogQHBhcmFtIG1hcE9wdGlvbnMgLSBNYXAgb3B0aW9uc1xyXG4gICAgICogQHJldHVybnMgLSBQcm9taXNlIGZ1bGxmaWxsZWQgb25jZSB0aGUgbWFwIGhhcyBiZWVuIGNyZWF0ZWQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZU1hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgQ3JlYXRlTWFwKGVsOiBIVE1MRWxlbWVudCwgbWFwT3B0aW9uczogSU1hcE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgR29vZ2xlIG1hcCBtYXJrZXIgd2l0aGluIHRoZSBtYXAgY29udGV4dFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBbb3B0aW9ucz08SU1hcmtlck9wdGlvbnM+e31dIC0gT3B0aW9ucyBmb3IgdGhlIG1hcmtlci4gU2VlIHtAbGluayBJTWFya2VyT3B0aW9uc30uXHJcbiAgICAgKiBAcmV0dXJucyAtIFByb21pc2Ugb2YgYSB7QGxpbmsgTWFya2VyfSBvYmplY3QsIHdoaWNoIG1vZGVscyB0aGUgdW5kZXJseWluZyBNaWNyb3NvZnQuTWFwcy5QdXNoUGluIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBDcmVhdGVNYXJrZXIob3B0aW9ucz86IElNYXJrZXJPcHRpb25zKTogUHJvbWlzZTxNYXJrZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgcG9seWdvbiB3aXRoaW4gdGhlIEdvb2dsZSBNYXAgbWFwIGNvbnRleHRcclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9ucyBmb3IgdGhlIHBvbHlnb24uIFNlZSB7QGxpbmsgSVBvbHlnb25PcHRpb25zfS5cclxuICAgICAqIEByZXR1cm5zIC0gUHJvbWlzZSBvZiBhIHtAbGluayBQb2x5Z29ufSBvYmplY3QsIHdoaWNoIG1vZGVscyB0aGUgdW5kZXJseWluZyBuYXRpdmUgcG9seWdvbi5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBDcmVhdGVQb2x5Z29uKG9wdGlvbnM6IElQb2x5Z29uT3B0aW9ucyk6IFByb21pc2U8UG9seWdvbj47XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBwb2x5bGluZSB3aXRoaW4gdGhlIEdvb2dsZSBNYXAgbWFwIGNvbnRleHRcclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9ucyBmb3IgdGhlIHBvbHlsaW5lLiBTZWUge0BsaW5rIElQb2x5bGluZU9wdGlvbnN9LlxyXG4gICAgICogQHJldHVybnMgLSBQcm9taXNlIG9mIGEge0BsaW5rIFBvbHlsaW5lfSBvYmplY3QgKG9yIGFuIGFycmF5IHRoZXJlZm9yZSBmb3IgY29tcGxleCBwYXRocylcclxuICAgICAqIHdoaWNoIG1vZGVscyB0aGUgdW5kZXJseWluZyBuYXRpdmUgcG9seWxpbmUuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgQ3JlYXRlUG9seWxpbmUob3B0aW9uczogSVBvbHlsaW5lT3B0aW9ucyk6IFByb21pc2U8UG9seWxpbmUgfCBBcnJheTxQb2x5bGluZT4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGVzIGEgbGF5ZXIgZnJvbSB0aGUgbWFwLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsYXllciAtIExheWVyIHRvIGRlbGV0ZS4gU2VlIHtAbGluayBMYXllcn0uIFRoaXMgbWV0aG9kIGV4cGVjdHMgdGhlIEdvb2dsZSBzcGVjaWZpYyBMYXllciBtb2RlbCBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAqIEByZXR1cm5zIC0gUHJvbWlzZSBmdWxsZmlsbGVkIHdoZW4gdGhlIGxheWVyIGhhcyBiZWVuIHJlbW92ZWQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZU1hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgRGVsZXRlTGF5ZXIobGF5ZXI6IExheWVyKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogRGlzcGFvc2UgdGhlIG1hcCBhbmQgYXNzb2NpYXRlZCByZXNvdXJlcy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBEaXNwb3NlTWFwKCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGdlbyBjb29yZGluYXRlcyBvZiB0aGUgbWFwIGNlbnRlclxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgd2hlbiBmdWxsZmlsbGVkIGNvbnRhaW5zIHRoZSBnb2UgbG9jYXRpb24gb2YgdGhlIGNlbnRlci4gU2VlIHtAbGluayBJTGF0TG9uZ30uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZU1hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgR2V0Q2VudGVyKCk6IFByb21pc2U8SUxhdExvbmc+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBnZW8gY29vcmRpbmF0ZXMgb2YgdGhlIG1hcCBib3VuZGluZyBib3hcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyAtIEEgcHJvbWlzZSB0aGF0IHdoZW4gZnVsbGZpbGxlZCBjb250YWlucyB0aGUgZ2VvIGxvY2F0aW9uIG9mIHRoZSBib3VuZGluZyBib3guIFNlZSB7QGxpbmsgSUJveH0uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZU1hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgR2V0Qm91bmRzKCk6IFByb21pc2U8SUJveD47XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGN1cnJlbnQgem9vbSBsZXZlbCBvZiB0aGUgbWFwLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgd2hlbiBmdWxsZmlsbGVkIGNvbnRhaW5zIHRoZSB6b29tIGxldmVsLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVNYXBTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIEdldFpvb20oKTogUHJvbWlzZTxudW1iZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQcm92aWRlcyBhIGNvbnZlcnNpb24gb2YgZ2VvIGNvb3JkaW5hdGVzIHRvIHBpeGVscyBvbiB0aGUgbWFwIGNvbnRyb2wuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGxvYyAtIFRoZSBnZW8gY29vcmRpbmF0ZXMgdG8gdHJhbnNsYXRlLlxyXG4gICAgICogQHJldHVybnMgLSBQcm9taXNlIG9mIGFuIHtAbGluayBJUG9pbnR9IGludGVyZmFjZSByZXByZXNlbnRpbmcgdGhlIHBpeGVscy4gVGhpcyBwcm9taXNlIHJlc29sdmVzIHRvIG51bGxcclxuICAgICAqIGlmIHRoZSBnb2UgY29vcmRpbmF0ZXMgYXJlIG5vdCBpbiB0aGUgdmlldyBwb3J0LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVNYXBTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIExvY2F0aW9uVG9Qb2ludChsb2M6IElMYXRMb25nKTogUHJvbWlzZTxJUG9pbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQcm92aWRlcyBhIGNvbnZlcnNpb24gb2YgZ2VvIGNvb3JkaW5hdGVzIHRvIHBpeGVscyBvbiB0aGUgbWFwIGNvbnRyb2wuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGxvYyAtIFRoZSBnZW8gY29vcmRpbmF0ZXMgdG8gdHJhbnNsYXRlLlxyXG4gICAgICogQHJldHVybnMgLSBQcm9taXNlIG9mIGFuIHtAbGluayBJUG9pbnR9IGludGVyZmFjZSBhcnJheSByZXByZXNlbnRpbmcgdGhlIHBpeGVscy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ01hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgTG9jYXRpb25zVG9Qb2ludHMobG9jczogQXJyYXk8SUxhdExvbmc+KTogUHJvbWlzZTxBcnJheTxJUG9pbnQ+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ2VudGVycyB0aGUgbWFwIG9uIGEgZ2VvIGxvY2F0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsYXRMbmcgLSBHZW9Db29yZGluYXRlcyBhcm91bmQgd2hpY2ggdG8gY2VudGVyIHRoZSBtYXAuIFNlZSB7QGxpbmsgSUxhdExvbmd9XHJcbiAgICAgKiBAcmV0dXJucyAtIFByb21pc2UgdGhhdCBpcyBmdWxsZmlsbGVkIHdoZW4gdGhlIGNlbnRlciBvcGVyYXRpb25zIGhhcyBiZWVuIGNvbXBsZXRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBTZXRDZW50ZXIobGF0TG5nOiBJTGF0TG9uZyk6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGdlbmVyaWMgbWFwIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zIHRvIHNldC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBTZXRNYXBPcHRpb25zKG9wdGlvbnM6IElNYXBPcHRpb25zKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdmlldyBvcHRpb25zIG9mIHRoZSBtYXAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zIHRvIHNldC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBTZXRWaWV3T3B0aW9ucyhvcHRpb25zOiBJTWFwT3B0aW9ucyk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHpvb20gbGV2ZWwgb2YgdGhlIG1hcC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gem9vbSAtIFpvb20gbGV2ZWwgdG8gc2V0LlxyXG4gICAgICogQHJldHVybnMgLSBBIFByb21pc2UgdGhhdCBpcyBmdWxsZmlsbGVkIG9uY2UgdGhlIHpvb20gb3BlcmF0aW9uIGlzIGNvbXBsZXRlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVNYXBTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIFNldFpvb20oem9vbTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBldmVudCBzdWJzY3JpcHRpb25cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IChlLmcuICdjbGljaycpXHJcbiAgICAgKiBAcmV0dXJucyAtIEFuIG9ic2VydmFibGUgb2YgdHlwZSBFIHRoYXQgZmlyZXMgd2hlbiB0aGUgZXZlbnQgb2NjdXJzLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVNYXBTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIFN1YnNjcmliZVRvTWFwRXZlbnQ8RT4oZXZlbnROYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEU+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUcmlnZ2VycyB0aGUgZ2l2ZW4gZXZlbnQgbmFtZSBvbiB0aGUgbWFwIGluc3RhbmNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBldmVudE5hbWUgLSBFdmVudCB0byB0cmlnZ2VyLlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCBpcyBmdWxsZmlsbGVkIG9uY2UgdGhlIGV2ZW50IGlzIHRyaWdnZXJlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBUcmlnZ2VyTWFwRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcbiJdfQ==