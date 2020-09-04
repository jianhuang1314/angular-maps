import { Observable } from 'rxjs';
import { IMapOptions } from '../interfaces/imap-options';
import { ILayerOptions } from '../interfaces/ilayer-options';
import { ILatLong } from '../interfaces/ilatlong';
import { IPoint } from '../interfaces/ipoint';
import { ISize } from '../interfaces/isize';
import { IBox } from '../interfaces/ibox';
import { IPolygonOptions } from '../interfaces/ipolygon-options';
import { IPolylineOptions } from '../interfaces/ipolyline-options';
import { IMarkerOptions } from '../interfaces/imarker-options';
import { IInfoWindowOptions } from '../interfaces/iinfo-window-options';
import { Marker } from '../models/marker';
import { Layer } from '../models/layer';
import { Polygon } from '../models/polygon';
import { Polyline } from '../models/polyline';
import { InfoWindow } from '../models/info-window';
import { CanvasOverlay } from '../models/canvas-overlay';
/**
 * Abstract class to implement map api. A concrete implementation should be created for each
 * Map provider supported (e.g. Bing, Goolge, ESRI)
 *
 * @export
 * @abstract
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class MapService {
    /**
     * Gets the Map control instance underlying the implementation
     *
     * @readonly
     * @memberof MapService
     */
    readonly abstract MapInstance: any;
    /**
     * Gets a Promise for a Map control instance underlying the implementation. Use this instead of {@link MapInstance} if you
     * are not sure if and when the instance will be created.
     * @readonly
     * @memberof MapService
     */
    readonly abstract MapPromise: Promise<any>;
    /**
     * Gets the maps physical size.
     *
     * @readonly
     * @abstract
     * @memberof MapService
     */
    readonly abstract MapSize: ISize;
    /**
     * Gets a random geo locations filling the bounding box.
     *
     * @param count - number of locations to return
     * @param bounds  - bounding box.
     * @returns - Array of geo locations.
     * @memberof MapService
     */
    static GetRandonLocations(count: number, bounds: IBox): Array<ILatLong>;
    /**
     * Creates a canvas overlay layer to perform custom drawing over the map with out
     * some of the overhead associated with going through the Map objects.
     * @param drawCallback A callback function that is triggered when the canvas is ready to be
     * rendered for the current map view.
     * @returns - Promise of a {@link CanvasOverlay} object.
     * @memberof MapService
     * @abstract
     */
    abstract CreateCanvasOverlay(drawCallback: (canvas: HTMLCanvasElement) => void): Promise<CanvasOverlay>;
    /**
     * Creates a map cluster layer within the map context
     *
     * @param options - Options for the layer. See {@link IClusterOptions}.
     * @returns - Promise of a {@link Layer} object, which models the underlying native layer object.
     *
     * @memberof MapService
     */
    abstract CreateClusterLayer(options: ILayerOptions): Promise<Layer>;
    /**
     * Creates an information window for a map position
     *
     * @param [options] - Infowindow options. See {@link IInfoWindowOptions}
     * @returns - Promise of a {@link InfoWindow} object, which models the underlying natvie infobox object.
     *
     * @memberof MapService
     */
    abstract CreateInfoWindow(options?: IInfoWindowOptions): Promise<InfoWindow>;
    /**
     * Creates a map layer within the map context
     *
     * @param options - Options for the layer. See {@link ILayerOptions}
     * @returns - Promise of a {@link Layer} object, which models the underlying native layer object.
     *
     * @memberof MapService
     */
    abstract CreateLayer(options: ILayerOptions): Promise<Layer>;
    /**
     * Creates a map instance
     *
     * @param el - HTML element to host the map.
     * @param mapOptions - Map options
     * @returns - Promise fullfilled once the map has been created.
     *
     * @memberof MapService
     */
    abstract CreateMap(el: HTMLElement, mapOptions: IMapOptions): Promise<void>;
    /**
     * Creates a map marker within the map context
     *
     * @param [options=<IMarkerOptions>{}] - Options for the marker. See {@link IMarkerOptions}.
     * @returns - Promise of a {@link Marker} object, which models the underlying native pushpin object.
     *
     * @memberof MapService
     */
    abstract CreateMarker(options: IMarkerOptions): Promise<Marker>;
    /**
     * Creates a polygon within the map context
     *
     * @abstract
     * @param options - Options for the polygon. See {@link IPolygonOptions}.
     * @returns - Promise of a {@link Polygon} object, which models the underlying native polygon.
     *
     * @memberof MapService
     */
    abstract CreatePolygon(options: IPolygonOptions): Promise<Polygon>;
    /**
     * Creates a polyline within the map context
     *
     * @abstract
     * @param options - Options for the polyline. See {@link IPolylineOptions}.
     * @returns - Promise of a {@link Polyline} object (or an array thereof for complex paths),
     * which models the underlying native polyline.
     *
     * @memberof MapService
     */
    abstract CreatePolyline(options: IPolylineOptions): Promise<Polyline | Array<Polyline>>;
    /**
     * Deletes a layer from the map.
     *
     * @param layer - Layer to delete. See {@link Layer}.
     * @returns - Promise fullfilled when the layer has been removed.
     *
     * @memberof MapService
     */
    abstract DeleteLayer(layer: Layer): Promise<void>;
    /**
     * Dispaose the map and associated resoures.
     *
     * @memberof MapService
     */
    abstract DisposeMap(): void;
    /**
     * Gets the geo coordinates of the map bounds
     *
     * @returns - A promise that when fullfilled contains the bounding box of the screen. See {@link IBox}.
     *
     * @memberof MapService
     */
    abstract GetBounds(): Promise<IBox>;
    /**
     * Gets the geo coordinates of the map center
     *
     * @returns - A promise that when fullfilled contains the goe location of the center. See {@link ILatLong}.
     *
     * @memberof MapService
     */
    abstract GetCenter(): Promise<ILatLong>;
    /**
     * Gets the current zoom level of the map.
     *
     * @returns - A promise that when fullfilled contains the zoom level.
     *
     * @memberof MapService
     */
    abstract GetZoom(): Promise<number>;
    /**
     * Provides a conversion of geo coordinates to pixels on the map control.
     *
     * @param loc - The geo coordinates to translate.
     * @returns - Promise of an {@link IPoint} interface representing the pixels. This promise resolves to null
     * if the goe coordinates are not in the view port.
     *
     * @memberof MapService
     */
    abstract LocationToPoint(loc: ILatLong): Promise<IPoint>;
    /**
     * Provides a conversion of geo coordinates to pixels on the map control.
     *
     * @param loc - The geo coordinates to translate.
     * @returns - Promise of an {@link IPoint} interface array representing the pixels.
     *
     * @memberof MapService
     */
    abstract LocationsToPoints(locs: Array<ILatLong>): Promise<Array<IPoint>>;
    /**
     * Centers the map on a geo location.
     *
     * @param latLng - GeoCoordinates around which to center the map. See {@link ILatLong}
     * @returns - Promise that is fullfilled when the center operations has been completed.
     *
     * @memberof MapService
     */
    abstract SetCenter(latLng: ILatLong): Promise<void>;
    /**
     * Sets the generic map options.
     *
     * @param options - Options to set.
     *
     * @memberof MapService
     */
    abstract SetMapOptions(options: IMapOptions): void;
    /**
     * Sets the view options of the map.
     *
     * @param options - Options to set.
     *
     * @memberof MapService
     */
    abstract SetViewOptions(options: IMapOptions): void;
    /**
     * Sets the zoom level of the map.
     *
     * @param zoom - Zoom level to set.
     * @returns - A Promise that is fullfilled once the zoom operation is complete.
     *
     * @memberof MapService
     */
    abstract SetZoom(zoom: number): Promise<void>;
    /**
     * Creates an event subscription
     *
     * @param eventName - The name of the event (e.g. 'click')
     * @returns - An observable of tpye E that fires when the event occurs.
     *
     * @memberof MapService
     */
    abstract SubscribeToMapEvent<E>(eventName: string): Observable<E>;
    /**
     * Triggers the given event name on the map instance.
     *
     * @param eventName - Event to trigger.
     * @returns - A promise that is fullfilled once the event is triggered.
     *
     * @memberof MapService
     */
    abstract TriggerMapEvent(eventName: string): Promise<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MapService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<MapService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsibWFwLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSU1hcE9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2ltYXAtb3B0aW9ucyc7XHJcbmltcG9ydCB7IElMYXllck9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2lsYXllci1vcHRpb25zJztcclxuaW1wb3J0IHsgSUxhdExvbmcgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2lsYXRsb25nJztcclxuaW1wb3J0IHsgSVBvaW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pcG9pbnQnO1xyXG5pbXBvcnQgeyBJU2l6ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaXNpemUnO1xyXG5pbXBvcnQgeyBJQm94IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pYm94JztcclxuaW1wb3J0IHsgSVBvbHlnb25PcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pcG9seWdvbi1vcHRpb25zJztcclxuaW1wb3J0IHsgSVBvbHlsaW5lT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaXBvbHlsaW5lLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBJTWFya2VyT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW1hcmtlci1vcHRpb25zJztcclxuaW1wb3J0IHsgSUluZm9XaW5kb3dPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9paW5mby13aW5kb3ctb3B0aW9ucyc7XHJcbmltcG9ydCB7IE1hcmtlciB9IGZyb20gJy4uL21vZGVscy9tYXJrZXInO1xyXG5pbXBvcnQgeyBMYXllciB9IGZyb20gJy4uL21vZGVscy9sYXllcic7XHJcbmltcG9ydCB7IFBvbHlnb24gfSBmcm9tICcuLi9tb2RlbHMvcG9seWdvbic7XHJcbmltcG9ydCB7IFBvbHlsaW5lIH0gZnJvbSAnLi4vbW9kZWxzL3BvbHlsaW5lJztcclxuaW1wb3J0IHsgSW5mb1dpbmRvdyB9IGZyb20gJy4uL21vZGVscy9pbmZvLXdpbmRvdyc7XHJcbmltcG9ydCB7IENhbnZhc092ZXJsYXkgfSBmcm9tICcuLi9tb2RlbHMvY2FudmFzLW92ZXJsYXknO1xyXG4vKipcclxuICogQWJzdHJhY3QgY2xhc3MgdG8gaW1wbGVtZW50IG1hcCBhcGkuIEEgY29uY3JldGUgaW1wbGVtZW50YXRpb24gc2hvdWxkIGJlIGNyZWF0ZWQgZm9yIGVhY2hcclxuICogTWFwIHByb3ZpZGVyIHN1cHBvcnRlZCAoZS5nLiBCaW5nLCBHb29sZ2UsIEVTUkkpXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGFic3RyYWN0XHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBNYXBTZXJ2aWNlIHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgTWFwIGNvbnRyb2wgaW5zdGFuY2UgdW5kZXJseWluZyB0aGUgaW1wbGVtZW50YXRpb25cclxuICAgICAqXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEBtZW1iZXJvZiBNYXBTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGFic3RyYWN0IE1hcEluc3RhbmNlOiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBQcm9taXNlIGZvciBhIE1hcCBjb250cm9sIGluc3RhbmNlIHVuZGVybHlpbmcgdGhlIGltcGxlbWVudGF0aW9uLiBVc2UgdGhpcyBpbnN0ZWFkIG9mIHtAbGluayBNYXBJbnN0YW5jZX0gaWYgeW91XHJcbiAgICAgKiBhcmUgbm90IHN1cmUgaWYgYW5kIHdoZW4gdGhlIGluc3RhbmNlIHdpbGwgYmUgY3JlYXRlZC5cclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQG1lbWJlcm9mIE1hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgYWJzdHJhY3QgTWFwUHJvbWlzZTogUHJvbWlzZTxhbnk+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBtYXBzIHBoeXNpY2FsIHNpemUuXHJcbiAgICAgKlxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBtZW1iZXJvZiBNYXBTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGFic3RyYWN0IE1hcFNpemU6IElTaXplO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgcmFuZG9tIGdlbyBsb2NhdGlvbnMgZmlsbGluZyB0aGUgYm91bmRpbmcgYm94LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjb3VudCAtIG51bWJlciBvZiBsb2NhdGlvbnMgdG8gcmV0dXJuXHJcbiAgICAgKiBAcGFyYW0gYm91bmRzICAtIGJvdW5kaW5nIGJveC5cclxuICAgICAqIEByZXR1cm5zIC0gQXJyYXkgb2YgZ2VvIGxvY2F0aW9ucy5cclxuICAgICAqIEBtZW1iZXJvZiBNYXBTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBHZXRSYW5kb25Mb2NhdGlvbnMoY291bnQ6IG51bWJlciwgYm91bmRzOiBJQm94KTogQXJyYXk8SUxhdExvbmc+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgY2FudmFzIG92ZXJsYXkgbGF5ZXIgdG8gcGVyZm9ybSBjdXN0b20gZHJhd2luZyBvdmVyIHRoZSBtYXAgd2l0aCBvdXRcclxuICAgICAqIHNvbWUgb2YgdGhlIG92ZXJoZWFkIGFzc29jaWF0ZWQgd2l0aCBnb2luZyB0aHJvdWdoIHRoZSBNYXAgb2JqZWN0cy5cclxuICAgICAqIEBwYXJhbSBkcmF3Q2FsbGJhY2sgQSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjYW52YXMgaXMgcmVhZHkgdG8gYmVcclxuICAgICAqIHJlbmRlcmVkIGZvciB0aGUgY3VycmVudCBtYXAgdmlldy5cclxuICAgICAqIEByZXR1cm5zIC0gUHJvbWlzZSBvZiBhIHtAbGluayBDYW52YXNPdmVybGF5fSBvYmplY3QuXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwU2VydmljZVxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IENyZWF0ZUNhbnZhc092ZXJsYXkoZHJhd0NhbGxiYWNrOiAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkgPT4gdm9pZCk6IFByb21pc2U8Q2FudmFzT3ZlcmxheT47XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBtYXAgY2x1c3RlciBsYXllciB3aXRoaW4gdGhlIG1hcCBjb250ZXh0XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zIGZvciB0aGUgbGF5ZXIuIFNlZSB7QGxpbmsgSUNsdXN0ZXJPcHRpb25zfS5cclxuICAgICAqIEByZXR1cm5zIC0gUHJvbWlzZSBvZiBhIHtAbGluayBMYXllcn0gb2JqZWN0LCB3aGljaCBtb2RlbHMgdGhlIHVuZGVybHlpbmcgbmF0aXZlIGxheWVyIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBDcmVhdGVDbHVzdGVyTGF5ZXIob3B0aW9uczogSUxheWVyT3B0aW9ucyk6IFByb21pc2U8TGF5ZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluZm9ybWF0aW9uIHdpbmRvdyBmb3IgYSBtYXAgcG9zaXRpb25cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gW29wdGlvbnNdIC0gSW5mb3dpbmRvdyBvcHRpb25zLiBTZWUge0BsaW5rIElJbmZvV2luZG93T3B0aW9uc31cclxuICAgICAqIEByZXR1cm5zIC0gUHJvbWlzZSBvZiBhIHtAbGluayBJbmZvV2luZG93fSBvYmplY3QsIHdoaWNoIG1vZGVscyB0aGUgdW5kZXJseWluZyBuYXR2aWUgaW5mb2JveCBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgQ3JlYXRlSW5mb1dpbmRvdyhvcHRpb25zPzogSUluZm9XaW5kb3dPcHRpb25zKTogUHJvbWlzZTxJbmZvV2luZG93PjtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG1hcCBsYXllciB3aXRoaW4gdGhlIG1hcCBjb250ZXh0XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zIGZvciB0aGUgbGF5ZXIuIFNlZSB7QGxpbmsgSUxheWVyT3B0aW9uc31cclxuICAgICAqIEByZXR1cm5zIC0gUHJvbWlzZSBvZiBhIHtAbGluayBMYXllcn0gb2JqZWN0LCB3aGljaCBtb2RlbHMgdGhlIHVuZGVybHlpbmcgbmF0aXZlIGxheWVyIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBDcmVhdGVMYXllcihvcHRpb25zOiBJTGF5ZXJPcHRpb25zKTogUHJvbWlzZTxMYXllcj47XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBtYXAgaW5zdGFuY2VcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZWwgLSBIVE1MIGVsZW1lbnQgdG8gaG9zdCB0aGUgbWFwLlxyXG4gICAgICogQHBhcmFtIG1hcE9wdGlvbnMgLSBNYXAgb3B0aW9uc1xyXG4gICAgICogQHJldHVybnMgLSBQcm9taXNlIGZ1bGxmaWxsZWQgb25jZSB0aGUgbWFwIGhhcyBiZWVuIGNyZWF0ZWQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgQ3JlYXRlTWFwKGVsOiBIVE1MRWxlbWVudCwgbWFwT3B0aW9uczogSU1hcE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbWFwIG1hcmtlciB3aXRoaW4gdGhlIG1hcCBjb250ZXh0XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIFtvcHRpb25zPTxJTWFya2VyT3B0aW9ucz57fV0gLSBPcHRpb25zIGZvciB0aGUgbWFya2VyLiBTZWUge0BsaW5rIElNYXJrZXJPcHRpb25zfS5cclxuICAgICAqIEByZXR1cm5zIC0gUHJvbWlzZSBvZiBhIHtAbGluayBNYXJrZXJ9IG9iamVjdCwgd2hpY2ggbW9kZWxzIHRoZSB1bmRlcmx5aW5nIG5hdGl2ZSBwdXNocGluIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBDcmVhdGVNYXJrZXIob3B0aW9uczogSU1hcmtlck9wdGlvbnMpOiBQcm9taXNlPE1hcmtlcj47XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBwb2x5Z29uIHdpdGhpbiB0aGUgbWFwIGNvbnRleHRcclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9ucyBmb3IgdGhlIHBvbHlnb24uIFNlZSB7QGxpbmsgSVBvbHlnb25PcHRpb25zfS5cclxuICAgICAqIEByZXR1cm5zIC0gUHJvbWlzZSBvZiBhIHtAbGluayBQb2x5Z29ufSBvYmplY3QsIHdoaWNoIG1vZGVscyB0aGUgdW5kZXJseWluZyBuYXRpdmUgcG9seWdvbi5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBDcmVhdGVQb2x5Z29uKG9wdGlvbnM6IElQb2x5Z29uT3B0aW9ucyk6IFByb21pc2U8UG9seWdvbj47XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBwb2x5bGluZSB3aXRoaW4gdGhlIG1hcCBjb250ZXh0XHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbnMgZm9yIHRoZSBwb2x5bGluZS4gU2VlIHtAbGluayBJUG9seWxpbmVPcHRpb25zfS5cclxuICAgICAqIEByZXR1cm5zIC0gUHJvbWlzZSBvZiBhIHtAbGluayBQb2x5bGluZX0gb2JqZWN0IChvciBhbiBhcnJheSB0aGVyZW9mIGZvciBjb21wbGV4IHBhdGhzKSxcclxuICAgICAqIHdoaWNoIG1vZGVscyB0aGUgdW5kZXJseWluZyBuYXRpdmUgcG9seWxpbmUuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgQ3JlYXRlUG9seWxpbmUob3B0aW9uczogSVBvbHlsaW5lT3B0aW9ucyk6IFByb21pc2U8UG9seWxpbmUgfCBBcnJheTxQb2x5bGluZT4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGVzIGEgbGF5ZXIgZnJvbSB0aGUgbWFwLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsYXllciAtIExheWVyIHRvIGRlbGV0ZS4gU2VlIHtAbGluayBMYXllcn0uXHJcbiAgICAgKiBAcmV0dXJucyAtIFByb21pc2UgZnVsbGZpbGxlZCB3aGVuIHRoZSBsYXllciBoYXMgYmVlbiByZW1vdmVkLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IERlbGV0ZUxheWVyKGxheWVyOiBMYXllcik6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIERpc3Bhb3NlIHRoZSBtYXAgYW5kIGFzc29jaWF0ZWQgcmVzb3VyZXMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgRGlzcG9zZU1hcCgpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBnZW8gY29vcmRpbmF0ZXMgb2YgdGhlIG1hcCBib3VuZHNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyAtIEEgcHJvbWlzZSB0aGF0IHdoZW4gZnVsbGZpbGxlZCBjb250YWlucyB0aGUgYm91bmRpbmcgYm94IG9mIHRoZSBzY3JlZW4uIFNlZSB7QGxpbmsgSUJveH0uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgR2V0Qm91bmRzKCk6IFByb21pc2U8SUJveD47XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGdlbyBjb29yZGluYXRlcyBvZiB0aGUgbWFwIGNlbnRlclxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgd2hlbiBmdWxsZmlsbGVkIGNvbnRhaW5zIHRoZSBnb2UgbG9jYXRpb24gb2YgdGhlIGNlbnRlci4gU2VlIHtAbGluayBJTGF0TG9uZ30uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgR2V0Q2VudGVyKCk6IFByb21pc2U8SUxhdExvbmc+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50IHpvb20gbGV2ZWwgb2YgdGhlIG1hcC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyAtIEEgcHJvbWlzZSB0aGF0IHdoZW4gZnVsbGZpbGxlZCBjb250YWlucyB0aGUgem9vbSBsZXZlbC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBHZXRab29tKCk6IFByb21pc2U8bnVtYmVyPjtcclxuICAgIC8qKlxyXG4gICAgICogUHJvdmlkZXMgYSBjb252ZXJzaW9uIG9mIGdlbyBjb29yZGluYXRlcyB0byBwaXhlbHMgb24gdGhlIG1hcCBjb250cm9sLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsb2MgLSBUaGUgZ2VvIGNvb3JkaW5hdGVzIHRvIHRyYW5zbGF0ZS5cclxuICAgICAqIEByZXR1cm5zIC0gUHJvbWlzZSBvZiBhbiB7QGxpbmsgSVBvaW50fSBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIHRoZSBwaXhlbHMuIFRoaXMgcHJvbWlzZSByZXNvbHZlcyB0byBudWxsXHJcbiAgICAgKiBpZiB0aGUgZ29lIGNvb3JkaW5hdGVzIGFyZSBub3QgaW4gdGhlIHZpZXcgcG9ydC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBMb2NhdGlvblRvUG9pbnQobG9jOiBJTGF0TG9uZyk6IFByb21pc2U8SVBvaW50PjtcclxuICAgIC8qKlxyXG4gICAgICogUHJvdmlkZXMgYSBjb252ZXJzaW9uIG9mIGdlbyBjb29yZGluYXRlcyB0byBwaXhlbHMgb24gdGhlIG1hcCBjb250cm9sLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsb2MgLSBUaGUgZ2VvIGNvb3JkaW5hdGVzIHRvIHRyYW5zbGF0ZS5cclxuICAgICAqIEByZXR1cm5zIC0gUHJvbWlzZSBvZiBhbiB7QGxpbmsgSVBvaW50fSBpbnRlcmZhY2UgYXJyYXkgcmVwcmVzZW50aW5nIHRoZSBwaXhlbHMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgTG9jYXRpb25zVG9Qb2ludHMobG9jczogQXJyYXk8SUxhdExvbmc+KTogUHJvbWlzZTxBcnJheTxJUG9pbnQ+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ2VudGVycyB0aGUgbWFwIG9uIGEgZ2VvIGxvY2F0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsYXRMbmcgLSBHZW9Db29yZGluYXRlcyBhcm91bmQgd2hpY2ggdG8gY2VudGVyIHRoZSBtYXAuIFNlZSB7QGxpbmsgSUxhdExvbmd9XHJcbiAgICAgKiBAcmV0dXJucyAtIFByb21pc2UgdGhhdCBpcyBmdWxsZmlsbGVkIHdoZW4gdGhlIGNlbnRlciBvcGVyYXRpb25zIGhhcyBiZWVuIGNvbXBsZXRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBTZXRDZW50ZXIobGF0TG5nOiBJTGF0TG9uZyk6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGdlbmVyaWMgbWFwIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zIHRvIHNldC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBTZXRNYXBPcHRpb25zKG9wdGlvbnM6IElNYXBPcHRpb25zKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdmlldyBvcHRpb25zIG9mIHRoZSBtYXAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zIHRvIHNldC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBTZXRWaWV3T3B0aW9ucyhvcHRpb25zOiBJTWFwT3B0aW9ucyk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHpvb20gbGV2ZWwgb2YgdGhlIG1hcC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gem9vbSAtIFpvb20gbGV2ZWwgdG8gc2V0LlxyXG4gICAgICogQHJldHVybnMgLSBBIFByb21pc2UgdGhhdCBpcyBmdWxsZmlsbGVkIG9uY2UgdGhlIHpvb20gb3BlcmF0aW9uIGlzIGNvbXBsZXRlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IFNldFpvb20oem9vbTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBldmVudCBzdWJzY3JpcHRpb25cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IChlLmcuICdjbGljaycpXHJcbiAgICAgKiBAcmV0dXJucyAtIEFuIG9ic2VydmFibGUgb2YgdHB5ZSBFIHRoYXQgZmlyZXMgd2hlbiB0aGUgZXZlbnQgb2NjdXJzLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IFN1YnNjcmliZVRvTWFwRXZlbnQ8RT4oZXZlbnROYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEU+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUcmlnZ2VycyB0aGUgZ2l2ZW4gZXZlbnQgbmFtZSBvbiB0aGUgbWFwIGluc3RhbmNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBldmVudE5hbWUgLSBFdmVudCB0byB0cmlnZ2VyLlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCBpcyBmdWxsZmlsbGVkIG9uY2UgdGhlIGV2ZW50IGlzIHRyaWdnZXJlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwU2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBUcmlnZ2VyTWFwRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcbiJdfQ==