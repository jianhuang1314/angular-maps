import { NgZone } from '@angular/core';
import { MapServiceFactory } from '../mapservicefactory';
import { MapService } from '../map.service';
import { MapAPILoader } from '../mapapiloader';
import { MarkerService } from '../marker.service';
import { LayerService } from '../layer.service';
import { ClusterService } from '../cluster.service';
import { PolygonService } from '../polygon.service';
import { PolylineService } from '../polyline.service';
import { GoogleInfoBoxService } from './google-infobox.service';
import { GoogleMarkerService } from './google-marker.service';
import { GoogleLayerService } from './google-layer.service';
import { GoogleClusterService } from './google-cluster.service';
/**
 * Implements a factory to create three necessary Google Maps specific service instances.
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class GoogleMapServiceFactory implements MapServiceFactory {
    private _loader;
    private _zone;
    private _map;
    private _mapResolver;
    /**
     * Creates an instance of GoogleMapServiceFactory.
     * @param _loader - {@link MapAPILoader} implementation for the Google Map provider.
     * @param _zone - NgZone object to implement zone aware promises.
     *
     * @memberof GoogleMapServiceFactory
     */
    constructor(_loader: MapAPILoader, _zone: NgZone);
    /**
     * Creates the map service for the Google Maps implementation.
     *
     * @returns - {@link MapService}. A concreted instance of the {@link GoogleMapService}.
     *
     * @memberof GoogleMapServiceFactory
     */
    Create(): MapService;
    /**
     * Creates the cluster service for the Google Maps implementation.
     *
     * @param map - {@link MapService}. A concreted instance of the {@link GoogleMapService}.
     * @returns - {@link ClusterService}. A concreted instance of the {@link GoogleClusterService}.
     *
     * @memberof GoogleMapServiceFactory
     */
    CreateClusterService(_mapService: MapService): ClusterService;
    /**
     * Creates thh info box service for the Google Maps implementation.
     *
     * @param map - {@link MapService}. A concreted instance of the {@link GoogleMapService}.
     * @param map - {@link MarkerService}. A concreted instance of the {@link GoogleMarkerService}.
     * @returns - {@link InfoBoxService}. A concreted instance of the {@link GoogleInfoBoxService}.
     *
     * @memberof GoogleMapServiceFactory
     */
    CreateInfoBoxService(_mapService: MapService, _markerService: MarkerService): GoogleInfoBoxService;
    /**
     * Creates the layer service for the Google Maps implementation.
     *
     * @param map - {@link MapService}. A concreted instance of the {@link GoogleMapService}.
     * @returns - {@link LayerService}. A concreted instance of the {@link GoogleLayerService}.
     *
     * @memberof GoogleMapServiceFactory
     */
    CreateLayerService(_mapService: MapService): GoogleLayerService;
    /**
     * Creates the marker service for the Google Maps implementation.
     *
     * @param map - {@link MapService}. A concreted instance of the {@link GoogleMapService}.
     * @param layers - {@link LayerService}. A concreted instance of the {@link GoogleLayerService}.
     * @param clusters  - {@link ClusterService}. A concreted instance of the {@link GoogleClusterService}.
     * @returns - {@link MarkerService}. A concreted instance of the {@link GoogleMarkerService}.
     *
     * @memberof GoogleMapServiceFactory
     */
    CreateMarkerService(_mapService: MapService, _layerService: GoogleLayerService, _clusterService: GoogleClusterService): GoogleMarkerService;
    /**
     * Creates the polygon service for the Google Maps implementation.
     *
     * @param map - {@link MapService} implementation for thh underlying map archticture.
     * @param layers - {@link LayerService} implementation for the underlying map architecture.
     * @returns - {@link PolygonService} implementation for the underlying map architecture.
     *
     * @memberof MapServiceFactory
     */
    CreatePolygonService(map: MapService, layers: LayerService): PolygonService;
    /**
     * Creates the polyline service for the Google Maps implementation.
     *
     * @param map - {@link MapService} implementation for thh underlying map archticture.
     * @param layers - {@link LayerService} implementation for the underlying map architecture.
     * @returns - {@link PolylineService} implementation for the underlying map architecture.
     *
     * @memberof MapServiceFactory
     */
    CreatePolylineService(map: MapService, layers: LayerService): PolylineService;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GoogleMapServiceFactory, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<GoogleMapServiceFactory>;
}
/**
 *  Creates a new instance of a plaform specific MapServiceFactory.
 *
 * @param apiLoader - An {@link MapAPILoader} instance. This is expected to the a {@link GoogleMapAPILoader}.
 * @param zone - An NgZone instance to provide zone aware promises.
 *
 * @returns - A {@link MapServiceFactory} instance.
 */
export declare function GoogleMapServiceFactoryFactory(apiLoader: MapAPILoader, zone: NgZone): MapServiceFactory;
/**
 * Creates a new instance of a plaform specific MapLoaderFactory.
 *
 * @export
 * @returns - A {@link MapAPILoader} instance.
 */
export declare function GoogleMapLoaderFactory(): MapAPILoader;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcC5zZXJ2aWNlLmZhY3RvcnkuZC50cyIsInNvdXJjZXMiOlsiZ29vZ2xlLW1hcC5zZXJ2aWNlLmZhY3RvcnkuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXBTZXJ2aWNlRmFjdG9yeSB9IGZyb20gJy4uL21hcHNlcnZpY2VmYWN0b3J5JztcclxuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL21hcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFwQVBJTG9hZGVyIH0gZnJvbSAnLi4vbWFwYXBpbG9hZGVyJztcclxuaW1wb3J0IHsgTWFya2VyU2VydmljZSB9IGZyb20gJy4uL21hcmtlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGF5ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbGF5ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IENsdXN0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY2x1c3Rlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9seWdvblNlcnZpY2UgfSBmcm9tICcuLi9wb2x5Z29uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb2x5bGluZVNlcnZpY2UgfSBmcm9tICcuLi9wb2x5bGluZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR29vZ2xlSW5mb0JveFNlcnZpY2UgfSBmcm9tICcuL2dvb2dsZS1pbmZvYm94LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBHb29nbGVNYXJrZXJTZXJ2aWNlIH0gZnJvbSAnLi9nb29nbGUtbWFya2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBHb29nbGVMYXllclNlcnZpY2UgfSBmcm9tICcuL2dvb2dsZS1sYXllci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR29vZ2xlQ2x1c3RlclNlcnZpY2UgfSBmcm9tICcuL2dvb2dsZS1jbHVzdGVyLnNlcnZpY2UnO1xyXG4vKipcclxuICogSW1wbGVtZW50cyBhIGZhY3RvcnkgdG8gY3JlYXRlIHRocmVlIG5lY2Vzc2FyeSBHb29nbGUgTWFwcyBzcGVjaWZpYyBzZXJ2aWNlIGluc3RhbmNlcy5cclxuICpcclxuICogQGV4cG9ydFxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgR29vZ2xlTWFwU2VydmljZUZhY3RvcnkgaW1wbGVtZW50cyBNYXBTZXJ2aWNlRmFjdG9yeSB7XHJcbiAgICBwcml2YXRlIF9sb2FkZXI7XHJcbiAgICBwcml2YXRlIF96b25lO1xyXG4gICAgcHJpdmF0ZSBfbWFwO1xyXG4gICAgcHJpdmF0ZSBfbWFwUmVzb2x2ZXI7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgR29vZ2xlTWFwU2VydmljZUZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gX2xvYWRlciAtIHtAbGluayBNYXBBUElMb2FkZXJ9IGltcGxlbWVudGF0aW9uIGZvciB0aGUgR29vZ2xlIE1hcCBwcm92aWRlci5cclxuICAgICAqIEBwYXJhbSBfem9uZSAtIE5nWm9uZSBvYmplY3QgdG8gaW1wbGVtZW50IHpvbmUgYXdhcmUgcHJvbWlzZXMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZU1hcFNlcnZpY2VGYWN0b3J5XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKF9sb2FkZXI6IE1hcEFQSUxvYWRlciwgX3pvbmU6IE5nWm9uZSk7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIG1hcCBzZXJ2aWNlIGZvciB0aGUgR29vZ2xlIE1hcHMgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgLSB7QGxpbmsgTWFwU2VydmljZX0uIEEgY29uY3JldGVkIGluc3RhbmNlIG9mIHRoZSB7QGxpbmsgR29vZ2xlTWFwU2VydmljZX0uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZU1hcFNlcnZpY2VGYWN0b3J5XHJcbiAgICAgKi9cclxuICAgIENyZWF0ZSgpOiBNYXBTZXJ2aWNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBjbHVzdGVyIHNlcnZpY2UgZm9yIHRoZSBHb29nbGUgTWFwcyBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWFwIC0ge0BsaW5rIE1hcFNlcnZpY2V9LiBBIGNvbmNyZXRlZCBpbnN0YW5jZSBvZiB0aGUge0BsaW5rIEdvb2dsZU1hcFNlcnZpY2V9LlxyXG4gICAgICogQHJldHVybnMgLSB7QGxpbmsgQ2x1c3RlclNlcnZpY2V9LiBBIGNvbmNyZXRlZCBpbnN0YW5jZSBvZiB0aGUge0BsaW5rIEdvb2dsZUNsdXN0ZXJTZXJ2aWNlfS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlTWFwU2VydmljZUZhY3RvcnlcclxuICAgICAqL1xyXG4gICAgQ3JlYXRlQ2x1c3RlclNlcnZpY2UoX21hcFNlcnZpY2U6IE1hcFNlcnZpY2UpOiBDbHVzdGVyU2VydmljZTtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGggaW5mbyBib3ggc2VydmljZSBmb3IgdGhlIEdvb2dsZSBNYXBzIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtYXAgLSB7QGxpbmsgTWFwU2VydmljZX0uIEEgY29uY3JldGVkIGluc3RhbmNlIG9mIHRoZSB7QGxpbmsgR29vZ2xlTWFwU2VydmljZX0uXHJcbiAgICAgKiBAcGFyYW0gbWFwIC0ge0BsaW5rIE1hcmtlclNlcnZpY2V9LiBBIGNvbmNyZXRlZCBpbnN0YW5jZSBvZiB0aGUge0BsaW5rIEdvb2dsZU1hcmtlclNlcnZpY2V9LlxyXG4gICAgICogQHJldHVybnMgLSB7QGxpbmsgSW5mb0JveFNlcnZpY2V9LiBBIGNvbmNyZXRlZCBpbnN0YW5jZSBvZiB0aGUge0BsaW5rIEdvb2dsZUluZm9Cb3hTZXJ2aWNlfS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlTWFwU2VydmljZUZhY3RvcnlcclxuICAgICAqL1xyXG4gICAgQ3JlYXRlSW5mb0JveFNlcnZpY2UoX21hcFNlcnZpY2U6IE1hcFNlcnZpY2UsIF9tYXJrZXJTZXJ2aWNlOiBNYXJrZXJTZXJ2aWNlKTogR29vZ2xlSW5mb0JveFNlcnZpY2U7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIGxheWVyIHNlcnZpY2UgZm9yIHRoZSBHb29nbGUgTWFwcyBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWFwIC0ge0BsaW5rIE1hcFNlcnZpY2V9LiBBIGNvbmNyZXRlZCBpbnN0YW5jZSBvZiB0aGUge0BsaW5rIEdvb2dsZU1hcFNlcnZpY2V9LlxyXG4gICAgICogQHJldHVybnMgLSB7QGxpbmsgTGF5ZXJTZXJ2aWNlfS4gQSBjb25jcmV0ZWQgaW5zdGFuY2Ugb2YgdGhlIHtAbGluayBHb29nbGVMYXllclNlcnZpY2V9LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVNYXBTZXJ2aWNlRmFjdG9yeVxyXG4gICAgICovXHJcbiAgICBDcmVhdGVMYXllclNlcnZpY2UoX21hcFNlcnZpY2U6IE1hcFNlcnZpY2UpOiBHb29nbGVMYXllclNlcnZpY2U7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIG1hcmtlciBzZXJ2aWNlIGZvciB0aGUgR29vZ2xlIE1hcHMgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1hcCAtIHtAbGluayBNYXBTZXJ2aWNlfS4gQSBjb25jcmV0ZWQgaW5zdGFuY2Ugb2YgdGhlIHtAbGluayBHb29nbGVNYXBTZXJ2aWNlfS5cclxuICAgICAqIEBwYXJhbSBsYXllcnMgLSB7QGxpbmsgTGF5ZXJTZXJ2aWNlfS4gQSBjb25jcmV0ZWQgaW5zdGFuY2Ugb2YgdGhlIHtAbGluayBHb29nbGVMYXllclNlcnZpY2V9LlxyXG4gICAgICogQHBhcmFtIGNsdXN0ZXJzICAtIHtAbGluayBDbHVzdGVyU2VydmljZX0uIEEgY29uY3JldGVkIGluc3RhbmNlIG9mIHRoZSB7QGxpbmsgR29vZ2xlQ2x1c3RlclNlcnZpY2V9LlxyXG4gICAgICogQHJldHVybnMgLSB7QGxpbmsgTWFya2VyU2VydmljZX0uIEEgY29uY3JldGVkIGluc3RhbmNlIG9mIHRoZSB7QGxpbmsgR29vZ2xlTWFya2VyU2VydmljZX0uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZU1hcFNlcnZpY2VGYWN0b3J5XHJcbiAgICAgKi9cclxuICAgIENyZWF0ZU1hcmtlclNlcnZpY2UoX21hcFNlcnZpY2U6IE1hcFNlcnZpY2UsIF9sYXllclNlcnZpY2U6IEdvb2dsZUxheWVyU2VydmljZSwgX2NsdXN0ZXJTZXJ2aWNlOiBHb29nbGVDbHVzdGVyU2VydmljZSk6IEdvb2dsZU1hcmtlclNlcnZpY2U7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIHBvbHlnb24gc2VydmljZSBmb3IgdGhlIEdvb2dsZSBNYXBzIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtYXAgLSB7QGxpbmsgTWFwU2VydmljZX0gaW1wbGVtZW50YXRpb24gZm9yIHRoaCB1bmRlcmx5aW5nIG1hcCBhcmNodGljdHVyZS5cclxuICAgICAqIEBwYXJhbSBsYXllcnMgLSB7QGxpbmsgTGF5ZXJTZXJ2aWNlfSBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIHVuZGVybHlpbmcgbWFwIGFyY2hpdGVjdHVyZS5cclxuICAgICAqIEByZXR1cm5zIC0ge0BsaW5rIFBvbHlnb25TZXJ2aWNlfSBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIHVuZGVybHlpbmcgbWFwIGFyY2hpdGVjdHVyZS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwU2VydmljZUZhY3RvcnlcclxuICAgICAqL1xyXG4gICAgQ3JlYXRlUG9seWdvblNlcnZpY2UobWFwOiBNYXBTZXJ2aWNlLCBsYXllcnM6IExheWVyU2VydmljZSk6IFBvbHlnb25TZXJ2aWNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBwb2x5bGluZSBzZXJ2aWNlIGZvciB0aGUgR29vZ2xlIE1hcHMgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1hcCAtIHtAbGluayBNYXBTZXJ2aWNlfSBpbXBsZW1lbnRhdGlvbiBmb3IgdGhoIHVuZGVybHlpbmcgbWFwIGFyY2h0aWN0dXJlLlxyXG4gICAgICogQHBhcmFtIGxheWVycyAtIHtAbGluayBMYXllclNlcnZpY2V9IGltcGxlbWVudGF0aW9uIGZvciB0aGUgdW5kZXJseWluZyBtYXAgYXJjaGl0ZWN0dXJlLlxyXG4gICAgICogQHJldHVybnMgLSB7QGxpbmsgUG9seWxpbmVTZXJ2aWNlfSBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIHVuZGVybHlpbmcgbWFwIGFyY2hpdGVjdHVyZS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwU2VydmljZUZhY3RvcnlcclxuICAgICAqL1xyXG4gICAgQ3JlYXRlUG9seWxpbmVTZXJ2aWNlKG1hcDogTWFwU2VydmljZSwgbGF5ZXJzOiBMYXllclNlcnZpY2UpOiBQb2x5bGluZVNlcnZpY2U7XHJcbn1cclxuLyoqXHJcbiAqICBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIGEgcGxhZm9ybSBzcGVjaWZpYyBNYXBTZXJ2aWNlRmFjdG9yeS5cclxuICpcclxuICogQHBhcmFtIGFwaUxvYWRlciAtIEFuIHtAbGluayBNYXBBUElMb2FkZXJ9IGluc3RhbmNlLiBUaGlzIGlzIGV4cGVjdGVkIHRvIHRoZSBhIHtAbGluayBHb29nbGVNYXBBUElMb2FkZXJ9LlxyXG4gKiBAcGFyYW0gem9uZSAtIEFuIE5nWm9uZSBpbnN0YW5jZSB0byBwcm92aWRlIHpvbmUgYXdhcmUgcHJvbWlzZXMuXHJcbiAqXHJcbiAqIEByZXR1cm5zIC0gQSB7QGxpbmsgTWFwU2VydmljZUZhY3Rvcnl9IGluc3RhbmNlLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gR29vZ2xlTWFwU2VydmljZUZhY3RvcnlGYWN0b3J5KGFwaUxvYWRlcjogTWFwQVBJTG9hZGVyLCB6b25lOiBOZ1pvbmUpOiBNYXBTZXJ2aWNlRmFjdG9yeTtcclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgYSBwbGFmb3JtIHNwZWNpZmljIE1hcExvYWRlckZhY3RvcnkuXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQHJldHVybnMgLSBBIHtAbGluayBNYXBBUElMb2FkZXJ9IGluc3RhbmNlLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gR29vZ2xlTWFwTG9hZGVyRmFjdG9yeSgpOiBNYXBBUElMb2FkZXI7XHJcbiJdfQ==