import { MapService } from './map.service';
import { MarkerService } from './marker.service';
import { InfoBoxService } from './infobox.service';
import { LayerService } from './layer.service';
import { ClusterService } from './cluster.service';
import { PolygonService } from './polygon.service';
import { PolylineService } from './polyline.service';
/**
 * Implements a factory to create all the implementation specifc services for a map implementation
 *
 * @export
 * @abstract
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class MapServiceFactory {
    /**
     * Creates the map service.
     *
     * @abstract
     * @returns - {@link MapService} implementing a specific underlying map architecture.
     *
     * @memberof MapServiceFactory
     */
    abstract Create(): MapService;
    /**
     * Creates the cluster service.
     *
     * @abstract
     * @param map - {@link MapService} implementation for thh underlying map archticture.
     * @returns - {@link ClusterService} implementation for the underlying map architecture.
     *
     * @memberof MapServiceFactory
     */
    abstract CreateClusterService(map: MapService): ClusterService;
    /**
     * Creates the info box service.
     *
     * @abstract
     * @param map - {@link MapService} implementation for thh underlying map archticture.
     * @param marker - {@link MarkerService} implementation for thh underlying marker archticture.
     * @returns - {@link InfoBoxService} implementation for the underlying map architecture.
     *
     * @memberof MapServiceFactory
     */
    abstract CreateInfoBoxService(map: MapService, marker: MarkerService): InfoBoxService;
    /**
     * Creates the layer service.
     *
     * @abstract
     * @param map - {@link MapService} implementation for thh underlying map archticture.
     * @returns - {@link LayerService} implementation for the underlying map architecture.
     *
     * @memberof MapServiceFactory
     */
    abstract CreateLayerService(map: MapService): LayerService;
    /**
     * Creates the marker service.
     *
     * @abstract
     * @param map - {@link MapService} implementation for thh underlying map archticture.
     * @param layers - {@link LayerService} implementation for the underlying map architecture.
     * @param clusters  - {@link ClusterService} implementation for the underlying map architecture.
     * @returns - {@link MarkerService} implementation for the underlying map architecture.
     *
     * @memberof MapServiceFactory
     */
    abstract CreateMarkerService(map: MapService, layers: LayerService, clusters: ClusterService): MarkerService;
    /**
     * Creates the polygon service.
     *
     * @abstract
     * @param map - {@link MapService} implementation for thh underlying map archticture.
     * @param layers - {@link LayerService} implementation for the underlying map architecture.
     * @returns - {@link PolygonService} implementation for the underlying map architecture.
     *
     * @memberof MapServiceFactory
     */
    abstract CreatePolygonService(map: MapService, layers: LayerService): PolygonService;
    /**
     * Creates the polyline service.
     *
     * @abstract
     * @param map - {@link MapService} implementation for thh underlying map archticture.
     * @param layers - {@link LayerService} implementation for the underlying map architecture.
     * @returns - {@link PolylineService} implementation for the underlying map architecture.
     *
     * @memberof MapServiceFactory
     */
    abstract CreatePolylineService(map: MapService, layers: LayerService): PolylineService;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MapServiceFactory, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<MapServiceFactory>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwc2VydmljZWZhY3RvcnkuZC50cyIsInNvdXJjZXMiOlsibWFwc2VydmljZWZhY3RvcnkuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4vbWFwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXJrZXJTZXJ2aWNlIH0gZnJvbSAnLi9tYXJrZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEluZm9Cb3hTZXJ2aWNlIH0gZnJvbSAnLi9pbmZvYm94LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMYXllclNlcnZpY2UgfSBmcm9tICcuL2xheWVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDbHVzdGVyU2VydmljZSB9IGZyb20gJy4vY2x1c3Rlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9seWdvblNlcnZpY2UgfSBmcm9tICcuL3BvbHlnb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFBvbHlsaW5lU2VydmljZSB9IGZyb20gJy4vcG9seWxpbmUuc2VydmljZSc7XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRzIGEgZmFjdG9yeSB0byBjcmVhdGUgYWxsIHRoZSBpbXBsZW1lbnRhdGlvbiBzcGVjaWZjIHNlcnZpY2VzIGZvciBhIG1hcCBpbXBsZW1lbnRhdGlvblxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBhYnN0cmFjdFxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgTWFwU2VydmljZUZhY3Rvcnkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBtYXAgc2VydmljZS5cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEByZXR1cm5zIC0ge0BsaW5rIE1hcFNlcnZpY2V9IGltcGxlbWVudGluZyBhIHNwZWNpZmljIHVuZGVybHlpbmcgbWFwIGFyY2hpdGVjdHVyZS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwU2VydmljZUZhY3RvcnlcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgQ3JlYXRlKCk6IE1hcFNlcnZpY2U7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIGNsdXN0ZXIgc2VydmljZS5cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBtYXAgLSB7QGxpbmsgTWFwU2VydmljZX0gaW1wbGVtZW50YXRpb24gZm9yIHRoaCB1bmRlcmx5aW5nIG1hcCBhcmNodGljdHVyZS5cclxuICAgICAqIEByZXR1cm5zIC0ge0BsaW5rIENsdXN0ZXJTZXJ2aWNlfSBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIHVuZGVybHlpbmcgbWFwIGFyY2hpdGVjdHVyZS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwU2VydmljZUZhY3RvcnlcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgQ3JlYXRlQ2x1c3RlclNlcnZpY2UobWFwOiBNYXBTZXJ2aWNlKTogQ2x1c3RlclNlcnZpY2U7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIGluZm8gYm94IHNlcnZpY2UuXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gbWFwIC0ge0BsaW5rIE1hcFNlcnZpY2V9IGltcGxlbWVudGF0aW9uIGZvciB0aGggdW5kZXJseWluZyBtYXAgYXJjaHRpY3R1cmUuXHJcbiAgICAgKiBAcGFyYW0gbWFya2VyIC0ge0BsaW5rIE1hcmtlclNlcnZpY2V9IGltcGxlbWVudGF0aW9uIGZvciB0aGggdW5kZXJseWluZyBtYXJrZXIgYXJjaHRpY3R1cmUuXHJcbiAgICAgKiBAcmV0dXJucyAtIHtAbGluayBJbmZvQm94U2VydmljZX0gaW1wbGVtZW50YXRpb24gZm9yIHRoZSB1bmRlcmx5aW5nIG1hcCBhcmNoaXRlY3R1cmUuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFNlcnZpY2VGYWN0b3J5XHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IENyZWF0ZUluZm9Cb3hTZXJ2aWNlKG1hcDogTWFwU2VydmljZSwgbWFya2VyOiBNYXJrZXJTZXJ2aWNlKTogSW5mb0JveFNlcnZpY2U7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIGxheWVyIHNlcnZpY2UuXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gbWFwIC0ge0BsaW5rIE1hcFNlcnZpY2V9IGltcGxlbWVudGF0aW9uIGZvciB0aGggdW5kZXJseWluZyBtYXAgYXJjaHRpY3R1cmUuXHJcbiAgICAgKiBAcmV0dXJucyAtIHtAbGluayBMYXllclNlcnZpY2V9IGltcGxlbWVudGF0aW9uIGZvciB0aGUgdW5kZXJseWluZyBtYXAgYXJjaGl0ZWN0dXJlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBTZXJ2aWNlRmFjdG9yeVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBDcmVhdGVMYXllclNlcnZpY2UobWFwOiBNYXBTZXJ2aWNlKTogTGF5ZXJTZXJ2aWNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBtYXJrZXIgc2VydmljZS5cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBtYXAgLSB7QGxpbmsgTWFwU2VydmljZX0gaW1wbGVtZW50YXRpb24gZm9yIHRoaCB1bmRlcmx5aW5nIG1hcCBhcmNodGljdHVyZS5cclxuICAgICAqIEBwYXJhbSBsYXllcnMgLSB7QGxpbmsgTGF5ZXJTZXJ2aWNlfSBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIHVuZGVybHlpbmcgbWFwIGFyY2hpdGVjdHVyZS5cclxuICAgICAqIEBwYXJhbSBjbHVzdGVycyAgLSB7QGxpbmsgQ2x1c3RlclNlcnZpY2V9IGltcGxlbWVudGF0aW9uIGZvciB0aGUgdW5kZXJseWluZyBtYXAgYXJjaGl0ZWN0dXJlLlxyXG4gICAgICogQHJldHVybnMgLSB7QGxpbmsgTWFya2VyU2VydmljZX0gaW1wbGVtZW50YXRpb24gZm9yIHRoZSB1bmRlcmx5aW5nIG1hcCBhcmNoaXRlY3R1cmUuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcFNlcnZpY2VGYWN0b3J5XHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IENyZWF0ZU1hcmtlclNlcnZpY2UobWFwOiBNYXBTZXJ2aWNlLCBsYXllcnM6IExheWVyU2VydmljZSwgY2x1c3RlcnM6IENsdXN0ZXJTZXJ2aWNlKTogTWFya2VyU2VydmljZTtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGUgcG9seWdvbiBzZXJ2aWNlLlxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQHBhcmFtIG1hcCAtIHtAbGluayBNYXBTZXJ2aWNlfSBpbXBsZW1lbnRhdGlvbiBmb3IgdGhoIHVuZGVybHlpbmcgbWFwIGFyY2h0aWN0dXJlLlxyXG4gICAgICogQHBhcmFtIGxheWVycyAtIHtAbGluayBMYXllclNlcnZpY2V9IGltcGxlbWVudGF0aW9uIGZvciB0aGUgdW5kZXJseWluZyBtYXAgYXJjaGl0ZWN0dXJlLlxyXG4gICAgICogQHJldHVybnMgLSB7QGxpbmsgUG9seWdvblNlcnZpY2V9IGltcGxlbWVudGF0aW9uIGZvciB0aGUgdW5kZXJseWluZyBtYXAgYXJjaGl0ZWN0dXJlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBTZXJ2aWNlRmFjdG9yeVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBDcmVhdGVQb2x5Z29uU2VydmljZShtYXA6IE1hcFNlcnZpY2UsIGxheWVyczogTGF5ZXJTZXJ2aWNlKTogUG9seWdvblNlcnZpY2U7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIHBvbHlsaW5lIHNlcnZpY2UuXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gbWFwIC0ge0BsaW5rIE1hcFNlcnZpY2V9IGltcGxlbWVudGF0aW9uIGZvciB0aGggdW5kZXJseWluZyBtYXAgYXJjaHRpY3R1cmUuXHJcbiAgICAgKiBAcGFyYW0gbGF5ZXJzIC0ge0BsaW5rIExheWVyU2VydmljZX0gaW1wbGVtZW50YXRpb24gZm9yIHRoZSB1bmRlcmx5aW5nIG1hcCBhcmNoaXRlY3R1cmUuXHJcbiAgICAgKiBAcmV0dXJucyAtIHtAbGluayBQb2x5bGluZVNlcnZpY2V9IGltcGxlbWVudGF0aW9uIGZvciB0aGUgdW5kZXJseWluZyBtYXAgYXJjaGl0ZWN0dXJlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBTZXJ2aWNlRmFjdG9yeVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBDcmVhdGVQb2x5bGluZVNlcnZpY2UobWFwOiBNYXBTZXJ2aWNlLCBsYXllcnM6IExheWVyU2VydmljZSk6IFBvbHlsaW5lU2VydmljZTtcclxufVxyXG4iXX0=