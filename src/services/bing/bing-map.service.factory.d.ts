import { NgZone } from '@angular/core';
import { MapServiceFactory } from '../mapservicefactory';
import { MapService } from '../map.service';
import { MapAPILoader } from '../mapapiloader';
import { MarkerService } from '../marker.service';
import { InfoBoxService } from '../infobox.service';
import { LayerService } from '../layer.service';
import { ClusterService } from '../cluster.service';
import { PolygonService } from '../polygon.service';
import { PolylineService } from '../polyline.service';
import { BingMapService } from './bing-map.service';
import { BingLayerService } from './bing-layer.service';
import { BingClusterService } from './bing-cluster.service';
/**
 * Implements a factory to create thre necessary Bing Maps V8 specific service instances.
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class BingMapServiceFactory implements MapServiceFactory {
    private _loader;
    private _zone;
    /**
     * Creates an instance of BingMapServiceFactory.
     * @param _loader - {@link MapAPILoader} implementation for the Bing Map V8 provider.
     * @param _zone - NgZone object to implement zone aware promises.
     *
     * @memberof BingMapServiceFactory
     */
    constructor(_loader: MapAPILoader, _zone: NgZone);
    /**
     * Creates the map service for the Bing Maps V8 implementation.
     *
     * @returns - {@link MapService}. A concreted instance of the {@link BingMapService}.
     *
     * @memberof BingMapServiceFactory
     */
    Create(): MapService;
    /**
     * Creates the cluster service for the Bing Maps V8 implementation.
     *
     * @param map - {@link MapService}. A concreted instance of the {@link BingMapService}.
     * @returns - {@link ClusterService}. A concreted instance of the {@link BingClusterService}.
     *
     * @memberof BingMapServiceFactory
     */
    CreateClusterService(_mapService: BingMapService): ClusterService;
    /**
     * Creates thh info box service for the Bing Maps V8 implementation.
     *
     * @param map - {@link MapService}. A concreted instance of the {@link BingMapService}.
     * @returns - {@link InfoBoxService}. A concreted instance of the {@link BingInfoBoxService}.
     *
     * @memberof BingMapServiceFactory
     */
    CreateInfoBoxService(_mapService: BingMapService): InfoBoxService;
    /**
     * Creates the layer service for the Bing Maps V8 implementation.
     *
     * @param map - {@link MapService}. A concreted instance of the {@link BingMapService}.
     * @returns - {@link LayerService}. A concreted instance of the {@link BingLayerService}.
     *
     * @memberof BingMapServiceFactory
     */
    CreateLayerService(_mapService: BingMapService): LayerService;
    /**
     * Creates the marker service for the Bing Maps V8 implementation.
     *
     * @param map - {@link MapService}. A concreted instance of the {@link BingMapService}.
     * @param layers - {@link LayerService}. A concreted instance of the {@link BingLayerService}.
     * @param clusters  - {@link ClusterService}. A concreted instance of the {@link BingClusterService}.
     * @returns - {@link MarkerService}. A concreted instance of the {@link BingMarkerService}.
     *
     * @memberof BingMapServiceFactory
     */
    CreateMarkerService(_mapService: BingMapService, _layerService: BingLayerService, _clusterService: BingClusterService): MarkerService;
    /**
     * Creates the polygon service for the Bing Maps V8 implementation.
     *
     * @param map - {@link MapService} implementation for thh underlying map archticture.
     * @param layers - {@link LayerService} implementation for the underlying map architecture.
     * @returns - {@link PolygonService} implementation for the underlying map architecture.
     *
     * @memberof MapServiceFactory
     */
    CreatePolygonService(map: MapService, layers: LayerService): PolygonService;
    /**
     * Creates the polyline service for the Bing Maps V8 implementation.
     *
     * @param map - {@link MapService} implementation for thh underlying map archticture.
     * @param layers - {@link LayerService} implementation for the underlying map architecture.
     * @returns - {@link PolylineService} implementation for the underlying map architecture.
     *
     * @memberof MapServiceFactory
     */
    CreatePolylineService(map: MapService, layers: LayerService): PolylineService;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BingMapServiceFactory, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BingMapServiceFactory>;
}
/**
 * Creates a new instance of a plaform specific MapServiceFactory.
 *
 * @export
 * @param apiLoader - An {@link MapAPILoader} instance. This is expected to the a {@link BingMapAPILoader}.
 * @param zone - An NgZone instance to provide zone aware promises.
 *
 * @returns -  A {@link MapServiceFactory} instance.
 */
export declare function BingMapServiceFactoryFactory(apiLoader: MapAPILoader, zone: NgZone): MapServiceFactory;
/**
 * Creates a new instance of a plaform specific MapLoaderFactory.
 *
 * @export
 * @returns - A {@link MapAPILoader} instance.
 */
export declare function BingMapLoaderFactory(): MapAPILoader;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZy1tYXAuc2VydmljZS5mYWN0b3J5LmQudHMiLCJzb3VyY2VzIjpbImJpbmctbWFwLnNlcnZpY2UuZmFjdG9yeS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWFwU2VydmljZUZhY3RvcnkgfSBmcm9tICcuLi9tYXBzZXJ2aWNlZmFjdG9yeSc7XHJcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9tYXAuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcEFQSUxvYWRlciB9IGZyb20gJy4uL21hcGFwaWxvYWRlcic7XHJcbmltcG9ydCB7IE1hcmtlclNlcnZpY2UgfSBmcm9tICcuLi9tYXJrZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEluZm9Cb3hTZXJ2aWNlIH0gZnJvbSAnLi4vaW5mb2JveC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGF5ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbGF5ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IENsdXN0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY2x1c3Rlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9seWdvblNlcnZpY2UgfSBmcm9tICcuLi9wb2x5Z29uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb2x5bGluZVNlcnZpY2UgfSBmcm9tICcuLi9wb2x5bGluZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQmluZ01hcFNlcnZpY2UgfSBmcm9tICcuL2JpbmctbWFwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCaW5nTGF5ZXJTZXJ2aWNlIH0gZnJvbSAnLi9iaW5nLWxheWVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCaW5nQ2x1c3RlclNlcnZpY2UgfSBmcm9tICcuL2JpbmctY2x1c3Rlci5zZXJ2aWNlJztcclxuLyoqXHJcbiAqIEltcGxlbWVudHMgYSBmYWN0b3J5IHRvIGNyZWF0ZSB0aHJlIG5lY2Vzc2FyeSBCaW5nIE1hcHMgVjggc3BlY2lmaWMgc2VydmljZSBpbnN0YW5jZXMuXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEJpbmdNYXBTZXJ2aWNlRmFjdG9yeSBpbXBsZW1lbnRzIE1hcFNlcnZpY2VGYWN0b3J5IHtcclxuICAgIHByaXZhdGUgX2xvYWRlcjtcclxuICAgIHByaXZhdGUgX3pvbmU7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQmluZ01hcFNlcnZpY2VGYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIF9sb2FkZXIgLSB7QGxpbmsgTWFwQVBJTG9hZGVyfSBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIEJpbmcgTWFwIFY4IHByb3ZpZGVyLlxyXG4gICAgICogQHBhcmFtIF96b25lIC0gTmdab25lIG9iamVjdCB0byBpbXBsZW1lbnQgem9uZSBhd2FyZSBwcm9taXNlcy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ01hcFNlcnZpY2VGYWN0b3J5XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKF9sb2FkZXI6IE1hcEFQSUxvYWRlciwgX3pvbmU6IE5nWm9uZSk7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIG1hcCBzZXJ2aWNlIGZvciB0aGUgQmluZyBNYXBzIFY4IGltcGxlbWVudGF0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIC0ge0BsaW5rIE1hcFNlcnZpY2V9LiBBIGNvbmNyZXRlZCBpbnN0YW5jZSBvZiB0aGUge0BsaW5rIEJpbmdNYXBTZXJ2aWNlfS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ01hcFNlcnZpY2VGYWN0b3J5XHJcbiAgICAgKi9cclxuICAgIENyZWF0ZSgpOiBNYXBTZXJ2aWNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBjbHVzdGVyIHNlcnZpY2UgZm9yIHRoZSBCaW5nIE1hcHMgVjggaW1wbGVtZW50YXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1hcCAtIHtAbGluayBNYXBTZXJ2aWNlfS4gQSBjb25jcmV0ZWQgaW5zdGFuY2Ugb2YgdGhlIHtAbGluayBCaW5nTWFwU2VydmljZX0uXHJcbiAgICAgKiBAcmV0dXJucyAtIHtAbGluayBDbHVzdGVyU2VydmljZX0uIEEgY29uY3JldGVkIGluc3RhbmNlIG9mIHRoZSB7QGxpbmsgQmluZ0NsdXN0ZXJTZXJ2aWNlfS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ01hcFNlcnZpY2VGYWN0b3J5XHJcbiAgICAgKi9cclxuICAgIENyZWF0ZUNsdXN0ZXJTZXJ2aWNlKF9tYXBTZXJ2aWNlOiBCaW5nTWFwU2VydmljZSk6IENsdXN0ZXJTZXJ2aWNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoaCBpbmZvIGJveCBzZXJ2aWNlIGZvciB0aGUgQmluZyBNYXBzIFY4IGltcGxlbWVudGF0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtYXAgLSB7QGxpbmsgTWFwU2VydmljZX0uIEEgY29uY3JldGVkIGluc3RhbmNlIG9mIHRoZSB7QGxpbmsgQmluZ01hcFNlcnZpY2V9LlxyXG4gICAgICogQHJldHVybnMgLSB7QGxpbmsgSW5mb0JveFNlcnZpY2V9LiBBIGNvbmNyZXRlZCBpbnN0YW5jZSBvZiB0aGUge0BsaW5rIEJpbmdJbmZvQm94U2VydmljZX0uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdNYXBTZXJ2aWNlRmFjdG9yeVxyXG4gICAgICovXHJcbiAgICBDcmVhdGVJbmZvQm94U2VydmljZShfbWFwU2VydmljZTogQmluZ01hcFNlcnZpY2UpOiBJbmZvQm94U2VydmljZTtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGUgbGF5ZXIgc2VydmljZSBmb3IgdGhlIEJpbmcgTWFwcyBWOCBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWFwIC0ge0BsaW5rIE1hcFNlcnZpY2V9LiBBIGNvbmNyZXRlZCBpbnN0YW5jZSBvZiB0aGUge0BsaW5rIEJpbmdNYXBTZXJ2aWNlfS5cclxuICAgICAqIEByZXR1cm5zIC0ge0BsaW5rIExheWVyU2VydmljZX0uIEEgY29uY3JldGVkIGluc3RhbmNlIG9mIHRoZSB7QGxpbmsgQmluZ0xheWVyU2VydmljZX0uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdNYXBTZXJ2aWNlRmFjdG9yeVxyXG4gICAgICovXHJcbiAgICBDcmVhdGVMYXllclNlcnZpY2UoX21hcFNlcnZpY2U6IEJpbmdNYXBTZXJ2aWNlKTogTGF5ZXJTZXJ2aWNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBtYXJrZXIgc2VydmljZSBmb3IgdGhlIEJpbmcgTWFwcyBWOCBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWFwIC0ge0BsaW5rIE1hcFNlcnZpY2V9LiBBIGNvbmNyZXRlZCBpbnN0YW5jZSBvZiB0aGUge0BsaW5rIEJpbmdNYXBTZXJ2aWNlfS5cclxuICAgICAqIEBwYXJhbSBsYXllcnMgLSB7QGxpbmsgTGF5ZXJTZXJ2aWNlfS4gQSBjb25jcmV0ZWQgaW5zdGFuY2Ugb2YgdGhlIHtAbGluayBCaW5nTGF5ZXJTZXJ2aWNlfS5cclxuICAgICAqIEBwYXJhbSBjbHVzdGVycyAgLSB7QGxpbmsgQ2x1c3RlclNlcnZpY2V9LiBBIGNvbmNyZXRlZCBpbnN0YW5jZSBvZiB0aGUge0BsaW5rIEJpbmdDbHVzdGVyU2VydmljZX0uXHJcbiAgICAgKiBAcmV0dXJucyAtIHtAbGluayBNYXJrZXJTZXJ2aWNlfS4gQSBjb25jcmV0ZWQgaW5zdGFuY2Ugb2YgdGhlIHtAbGluayBCaW5nTWFya2VyU2VydmljZX0uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdNYXBTZXJ2aWNlRmFjdG9yeVxyXG4gICAgICovXHJcbiAgICBDcmVhdGVNYXJrZXJTZXJ2aWNlKF9tYXBTZXJ2aWNlOiBCaW5nTWFwU2VydmljZSwgX2xheWVyU2VydmljZTogQmluZ0xheWVyU2VydmljZSwgX2NsdXN0ZXJTZXJ2aWNlOiBCaW5nQ2x1c3RlclNlcnZpY2UpOiBNYXJrZXJTZXJ2aWNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBwb2x5Z29uIHNlcnZpY2UgZm9yIHRoZSBCaW5nIE1hcHMgVjggaW1wbGVtZW50YXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1hcCAtIHtAbGluayBNYXBTZXJ2aWNlfSBpbXBsZW1lbnRhdGlvbiBmb3IgdGhoIHVuZGVybHlpbmcgbWFwIGFyY2h0aWN0dXJlLlxyXG4gICAgICogQHBhcmFtIGxheWVycyAtIHtAbGluayBMYXllclNlcnZpY2V9IGltcGxlbWVudGF0aW9uIGZvciB0aGUgdW5kZXJseWluZyBtYXAgYXJjaGl0ZWN0dXJlLlxyXG4gICAgICogQHJldHVybnMgLSB7QGxpbmsgUG9seWdvblNlcnZpY2V9IGltcGxlbWVudGF0aW9uIGZvciB0aGUgdW5kZXJseWluZyBtYXAgYXJjaGl0ZWN0dXJlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBTZXJ2aWNlRmFjdG9yeVxyXG4gICAgICovXHJcbiAgICBDcmVhdGVQb2x5Z29uU2VydmljZShtYXA6IE1hcFNlcnZpY2UsIGxheWVyczogTGF5ZXJTZXJ2aWNlKTogUG9seWdvblNlcnZpY2U7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIHBvbHlsaW5lIHNlcnZpY2UgZm9yIHRoZSBCaW5nIE1hcHMgVjggaW1wbGVtZW50YXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1hcCAtIHtAbGluayBNYXBTZXJ2aWNlfSBpbXBsZW1lbnRhdGlvbiBmb3IgdGhoIHVuZGVybHlpbmcgbWFwIGFyY2h0aWN0dXJlLlxyXG4gICAgICogQHBhcmFtIGxheWVycyAtIHtAbGluayBMYXllclNlcnZpY2V9IGltcGxlbWVudGF0aW9uIGZvciB0aGUgdW5kZXJseWluZyBtYXAgYXJjaGl0ZWN0dXJlLlxyXG4gICAgICogQHJldHVybnMgLSB7QGxpbmsgUG9seWxpbmVTZXJ2aWNlfSBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIHVuZGVybHlpbmcgbWFwIGFyY2hpdGVjdHVyZS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwU2VydmljZUZhY3RvcnlcclxuICAgICAqL1xyXG4gICAgQ3JlYXRlUG9seWxpbmVTZXJ2aWNlKG1hcDogTWFwU2VydmljZSwgbGF5ZXJzOiBMYXllclNlcnZpY2UpOiBQb2x5bGluZVNlcnZpY2U7XHJcbn1cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgYSBwbGFmb3JtIHNwZWNpZmljIE1hcFNlcnZpY2VGYWN0b3J5LlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBwYXJhbSBhcGlMb2FkZXIgLSBBbiB7QGxpbmsgTWFwQVBJTG9hZGVyfSBpbnN0YW5jZS4gVGhpcyBpcyBleHBlY3RlZCB0byB0aGUgYSB7QGxpbmsgQmluZ01hcEFQSUxvYWRlcn0uXHJcbiAqIEBwYXJhbSB6b25lIC0gQW4gTmdab25lIGluc3RhbmNlIHRvIHByb3ZpZGUgem9uZSBhd2FyZSBwcm9taXNlcy5cclxuICpcclxuICogQHJldHVybnMgLSAgQSB7QGxpbmsgTWFwU2VydmljZUZhY3Rvcnl9IGluc3RhbmNlLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQmluZ01hcFNlcnZpY2VGYWN0b3J5RmFjdG9yeShhcGlMb2FkZXI6IE1hcEFQSUxvYWRlciwgem9uZTogTmdab25lKTogTWFwU2VydmljZUZhY3Rvcnk7XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIGEgcGxhZm9ybSBzcGVjaWZpYyBNYXBMb2FkZXJGYWN0b3J5LlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEByZXR1cm5zIC0gQSB7QGxpbmsgTWFwQVBJTG9hZGVyfSBpbnN0YW5jZS5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIEJpbmdNYXBMb2FkZXJGYWN0b3J5KCk6IE1hcEFQSUxvYWRlcjtcclxuIl19