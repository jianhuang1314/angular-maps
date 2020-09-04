import { IClusterIconInfo } from '../../interfaces/icluster-icon-info';
import { NgZone } from '@angular/core';
import { IMarkerOptions } from '../../interfaces/imarker-options';
import { Marker } from '../../models/marker';
import { Layer } from '../../models/layer';
import { ClusterLayerDirective } from '../../components/cluster-layer';
import { ClusterService } from '../cluster.service';
import { MapService } from '../map.service';
import { GoogleLayerBase } from './google-layer-base';
import { IPolygonOptions } from '../../interfaces/ipolygon-options';
import { IPolylineOptions } from '../../interfaces/ipolyline-options';
import { Polygon } from '../../models/polygon';
import { Polyline } from '../../models/polyline';
import * as GoogleMapTypes from './google-map-types';
import * as ɵngcc0 from '@angular/core';
export declare class GoogleClusterService extends GoogleLayerBase implements ClusterService {
    protected _layers: Map<number, Promise<Layer>>;
    protected _layerStyles: Map<number, Array<GoogleMapTypes.ClusterStyle>>;
    /**
     * Creates the cluster icon from the styles
     *
     * @param styles
     * @returns - Promise that when resolved contains an Array of IClusterIconInfo objects
     * containing the hydrated cluster icons.
     * @memberof GoogleClusterService
     */
    static CreateClusterIcons(styles: Array<IClusterIconInfo>): Promise<Array<IClusterIconInfo>>;
    /**
     * Creates an instance of GoogleClusterService.
     * @param _mapService
     * @param _zone
     * @memberof GoogleClusterService
     */
    constructor(_mapService: MapService, _zone: NgZone);
    /**
     * Adds the cluster layer to the map
     *
     * @param layer
     * @memberof GoogleClusterService
     */
    AddLayer(layer: ClusterLayerDirective): void;
    /**
     * Create a marker in the cluster
     *
     * @param layer
     * @param options
     * @memberof GoogleClusterService
     */
    CreateMarker(layer: number, options: IMarkerOptions): Promise<Marker>;
    /**
     * Starts the clustering
     *
     * @param layer
     * @memberof GoogleClusterService
     */
    StartClustering(layer: ClusterLayerDirective): Promise<void>;
    /**
     * Stops the clustering
     *
     * @param layer
     * @memberof GoogleClusterService
     */
    StopClustering(layer: ClusterLayerDirective): Promise<void>;
    /**
     * Adds a polygon to the layer.
     *
     * @abstract
     * @param layer - The id of the layer to which to add the polygon.
     * @param options - Polygon options defining the polygon.
     * @returns - A promise that when fullfilled contains the an instance of the Polygon model.
     *
     * @memberof GoogleClusterService
     */
    CreatePolygon(layer: number, options: IPolygonOptions): Promise<Polygon>;
    /**
     * Creates an array of unbound polygons. Use this method to create arrays of polygons to be used in bulk
     * operations.
     *
     * @param layer - The id of the layer to which to add the polygon.
     * @param options - Polygon options defining the polygons.
     * @returns - A promise that when fullfilled contains the an arrays of the Polygon models.
     *
     * @memberof GoogleClusterService
     */
    CreatePolygons(layer: number, options: Array<IPolygonOptions>): Promise<Array<Polygon>>;
    /**
     * Adds a polyline to the layer.
     *
     * @abstract
     * @param layer - The id of the layer to which to add the line.
     * @param options - Polyline options defining the line.
     * @returns - A promise that when fullfilled contains the an instance of the Polyline (or an
     * array of polygons for complex paths) model.
     *
     * @memberof GoogleClusterService
     */
    CreatePolyline(layer: number, options: IPolylineOptions): Promise<Polyline | Array<Polyline>>;
    /**
     * Creates an array of unbound polylines. Use this method to create arrays of polylines to be used in bulk
     * operations.
     *
     * @param layer - The id of the layer to which to add the polylines.
     * @param options - Polyline options defining the polylines.
     * @returns - A promise that when fullfilled contains the an arrays of the Polyline models.
     *
     * @memberof GoogleClusterService
     */
    CreatePolylines(layer: number, options: Array<IPolylineOptions>): Promise<Array<Polyline | Array<Polyline>>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GoogleClusterService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<GoogleClusterService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWNsdXN0ZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJnb29nbGUtY2x1c3Rlci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUNsdXN0ZXJJY29uSW5mbyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaWNsdXN0ZXItaWNvbi1pbmZvJztcclxuaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElNYXJrZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbWFya2VyLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBNYXJrZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvbWFya2VyJztcclxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvbGF5ZXInO1xyXG5pbXBvcnQgeyBDbHVzdGVyTGF5ZXJEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NsdXN0ZXItbGF5ZXInO1xyXG5pbXBvcnQgeyBDbHVzdGVyU2VydmljZSB9IGZyb20gJy4uL2NsdXN0ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9tYXAuc2VydmljZSc7XHJcbmltcG9ydCB7IEdvb2dsZUxheWVyQmFzZSB9IGZyb20gJy4vZ29vZ2xlLWxheWVyLWJhc2UnO1xyXG5pbXBvcnQgeyBJUG9seWdvbk9wdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2lwb2x5Z29uLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBJUG9seWxpbmVPcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pcG9seWxpbmUtb3B0aW9ucyc7XHJcbmltcG9ydCB7IFBvbHlnb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvcG9seWdvbic7XHJcbmltcG9ydCB7IFBvbHlsaW5lIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BvbHlsaW5lJztcclxuaW1wb3J0ICogYXMgR29vZ2xlTWFwVHlwZXMgZnJvbSAnLi9nb29nbGUtbWFwLXR5cGVzJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgR29vZ2xlQ2x1c3RlclNlcnZpY2UgZXh0ZW5kcyBHb29nbGVMYXllckJhc2UgaW1wbGVtZW50cyBDbHVzdGVyU2VydmljZSB7XHJcbiAgICBwcm90ZWN0ZWQgX2xheWVyczogTWFwPG51bWJlciwgUHJvbWlzZTxMYXllcj4+O1xyXG4gICAgcHJvdGVjdGVkIF9sYXllclN0eWxlczogTWFwPG51bWJlciwgQXJyYXk8R29vZ2xlTWFwVHlwZXMuQ2x1c3RlclN0eWxlPj47XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIGNsdXN0ZXIgaWNvbiBmcm9tIHRoZSBzdHlsZXNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc3R5bGVzXHJcbiAgICAgKiBAcmV0dXJucyAtIFByb21pc2UgdGhhdCB3aGVuIHJlc29sdmVkIGNvbnRhaW5zIGFuIEFycmF5IG9mIElDbHVzdGVySWNvbkluZm8gb2JqZWN0c1xyXG4gICAgICogY29udGFpbmluZyB0aGUgaHlkcmF0ZWQgY2x1c3RlciBpY29ucy5cclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVDbHVzdGVyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgQ3JlYXRlQ2x1c3Rlckljb25zKHN0eWxlczogQXJyYXk8SUNsdXN0ZXJJY29uSW5mbz4pOiBQcm9taXNlPEFycmF5PElDbHVzdGVySWNvbkluZm8+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBHb29nbGVDbHVzdGVyU2VydmljZS5cclxuICAgICAqIEBwYXJhbSBfbWFwU2VydmljZVxyXG4gICAgICogQHBhcmFtIF96b25lXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlQ2x1c3RlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoX21hcFNlcnZpY2U6IE1hcFNlcnZpY2UsIF96b25lOiBOZ1pvbmUpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHRoZSBjbHVzdGVyIGxheWVyIHRvIHRoZSBtYXBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbGF5ZXJcclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVDbHVzdGVyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBBZGRMYXllcihsYXllcjogQ2x1c3RlckxheWVyRGlyZWN0aXZlKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbWFya2VyIGluIHRoZSBjbHVzdGVyXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGxheWVyXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZUNsdXN0ZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIENyZWF0ZU1hcmtlcihsYXllcjogbnVtYmVyLCBvcHRpb25zOiBJTWFya2VyT3B0aW9ucyk6IFByb21pc2U8TWFya2VyPjtcclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIHRoZSBjbHVzdGVyaW5nXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGxheWVyXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlQ2x1c3RlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgU3RhcnRDbHVzdGVyaW5nKGxheWVyOiBDbHVzdGVyTGF5ZXJEaXJlY3RpdmUpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyB0aGUgY2x1c3RlcmluZ1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsYXllclxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZUNsdXN0ZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIFN0b3BDbHVzdGVyaW5nKGxheWVyOiBDbHVzdGVyTGF5ZXJEaXJlY3RpdmUpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgcG9seWdvbiB0byB0aGUgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gbGF5ZXIgLSBUaGUgaWQgb2YgdGhlIGxheWVyIHRvIHdoaWNoIHRvIGFkZCB0aGUgcG9seWdvbi5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gUG9seWdvbiBvcHRpb25zIGRlZmluaW5nIHRoZSBwb2x5Z29uLlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCB3aGVuIGZ1bGxmaWxsZWQgY29udGFpbnMgdGhlIGFuIGluc3RhbmNlIG9mIHRoZSBQb2x5Z29uIG1vZGVsLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVDbHVzdGVyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBDcmVhdGVQb2x5Z29uKGxheWVyOiBudW1iZXIsIG9wdGlvbnM6IElQb2x5Z29uT3B0aW9ucyk6IFByb21pc2U8UG9seWdvbj47XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdW5ib3VuZCBwb2x5Z29ucy4gVXNlIHRoaXMgbWV0aG9kIHRvIGNyZWF0ZSBhcnJheXMgb2YgcG9seWdvbnMgdG8gYmUgdXNlZCBpbiBidWxrXHJcbiAgICAgKiBvcGVyYXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsYXllciAtIFRoZSBpZCBvZiB0aGUgbGF5ZXIgdG8gd2hpY2ggdG8gYWRkIHRoZSBwb2x5Z29uLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBQb2x5Z29uIG9wdGlvbnMgZGVmaW5pbmcgdGhlIHBvbHlnb25zLlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCB3aGVuIGZ1bGxmaWxsZWQgY29udGFpbnMgdGhlIGFuIGFycmF5cyBvZiB0aGUgUG9seWdvbiBtb2RlbHMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZUNsdXN0ZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIENyZWF0ZVBvbHlnb25zKGxheWVyOiBudW1iZXIsIG9wdGlvbnM6IEFycmF5PElQb2x5Z29uT3B0aW9ucz4pOiBQcm9taXNlPEFycmF5PFBvbHlnb24+PjtcclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIHBvbHlsaW5lIHRvIHRoZSBsYXllci5cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBsYXllciAtIFRoZSBpZCBvZiB0aGUgbGF5ZXIgdG8gd2hpY2ggdG8gYWRkIHRoZSBsaW5lLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBQb2x5bGluZSBvcHRpb25zIGRlZmluaW5nIHRoZSBsaW5lLlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCB3aGVuIGZ1bGxmaWxsZWQgY29udGFpbnMgdGhlIGFuIGluc3RhbmNlIG9mIHRoZSBQb2x5bGluZSAob3IgYW5cclxuICAgICAqIGFycmF5IG9mIHBvbHlnb25zIGZvciBjb21wbGV4IHBhdGhzKSBtb2RlbC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlQ2x1c3RlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgQ3JlYXRlUG9seWxpbmUobGF5ZXI6IG51bWJlciwgb3B0aW9uczogSVBvbHlsaW5lT3B0aW9ucyk6IFByb21pc2U8UG9seWxpbmUgfCBBcnJheTxQb2x5bGluZT4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGFycmF5IG9mIHVuYm91bmQgcG9seWxpbmVzLiBVc2UgdGhpcyBtZXRob2QgdG8gY3JlYXRlIGFycmF5cyBvZiBwb2x5bGluZXMgdG8gYmUgdXNlZCBpbiBidWxrXHJcbiAgICAgKiBvcGVyYXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsYXllciAtIFRoZSBpZCBvZiB0aGUgbGF5ZXIgdG8gd2hpY2ggdG8gYWRkIHRoZSBwb2x5bGluZXMuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIFBvbHlsaW5lIG9wdGlvbnMgZGVmaW5pbmcgdGhlIHBvbHlsaW5lcy5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgd2hlbiBmdWxsZmlsbGVkIGNvbnRhaW5zIHRoZSBhbiBhcnJheXMgb2YgdGhlIFBvbHlsaW5lIG1vZGVscy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlQ2x1c3RlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgQ3JlYXRlUG9seWxpbmVzKGxheWVyOiBudW1iZXIsIG9wdGlvbnM6IEFycmF5PElQb2x5bGluZU9wdGlvbnM+KTogUHJvbWlzZTxBcnJheTxQb2x5bGluZSB8IEFycmF5PFBvbHlsaW5lPj4+O1xyXG59XHJcbiJdfQ==