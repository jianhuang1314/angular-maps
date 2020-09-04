import { NgZone } from '@angular/core';
import { IPolygonOptions } from '../../interfaces/ipolygon-options';
import { IPolylineOptions } from '../../interfaces/ipolyline-options';
import { Polygon } from '../../models/polygon';
import { Polyline } from '../../models/polyline';
import { MapService } from '../map.service';
import { ClusterLayerDirective } from '../../components/cluster-layer';
import { ClusterService } from '../cluster.service';
import { BingLayerBase } from './bing-layer-base';
/**
 * Implements the {@link ClusterService} contract for a  Bing Maps V8 specific implementation.
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class BingClusterService extends BingLayerBase implements ClusterService {
    /**
     * Creates an instance of BingClusterService.
     * @param _mapService - Concrete {@link MapService} implementation for Bing Maps V8. An instance of {@link BingMapService}.
     * @param _zone - NgZone instance to provide zone aware promises.
     *
     * @memberof BingClusterService
     */
    constructor(_mapService: MapService, _zone: NgZone);
    /**
     * Adds a layer to the map.
     *
     * @abstract
     * @param layer - ClusterLayerDirective component object.
     * Generally, MapLayer will be injected with an instance of the
     * LayerService and then self register on initialization.
     *
     * @memberof BingClusterService
     */
    AddLayer(layer: ClusterLayerDirective): void;
    /**
     * Adds a polygon to the layer.
     *
     * @abstract
     * @param layer - The id of the layer to which to add the polygon.
     * @param options - Polygon options defining the polygon.
     * @returns - A promise that when fullfilled contains the an instance of the Polygon model.
     *
     * @memberof BingClusterService
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
     * @memberof BingClusterService
     */
    CreatePolygons(layer: number, options: Array<IPolygonOptions>): Promise<Array<Polygon>>;
    /**
     * Adds a polyline to the layer.
     *
     * @abstract
     * @param layer - The id of the layer to which to add the line.
     * @param options - Polyline options defining the line.
     * @returns - A promise that when fullfilled contains the an instance of the Polyline (or an array
     * of polygons for complex paths) model.
     *
     * @memberof BingClusterService
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
     * @memberof BingClusterService
     */
    CreatePolylines(layer: number, options: Array<IPolylineOptions>): Promise<Array<Polyline | Array<Polyline>>>;
    /**
     * Start to actually cluster the entities in a cluster layer. This method should be called after the initial set of entities
     * have been added to the cluster. This method is used for performance reasons as adding an entitiy will recalculate all clusters.
     * As such, StopClustering should be called before adding many entities and StartClustering should be called once adding is
     * complete to recalculate the clusters.
     *
     * @param layer - ClusterLayerDirective component object for which to retrieve the layer.
     *
     * @memberof BingClusterService
     */
    StartClustering(layer: ClusterLayerDirective): Promise<void>;
    /**
     * Stop to actually cluster the entities in a cluster layer.
     * This method is used for performance reasons as adding an entitiy will recalculate all clusters.
     * As such, StopClustering should be called before adding many entities and StartClustering should be called once adding is
     * complete to recalculate the clusters.
     *
     * @param layer - ClusterLayerDirective component object for which to retrieve the layer.
     *
     * @memberof BingClusterService
     */
    StopClustering(layer: ClusterLayerDirective): Promise<void>;
    /**
     * Creates the default cluster pushpin as a callback from BingMaps when clustering occurs. The {@link ClusterLayerDirective} model
     * can provide an IconInfo property that would govern the apparenace of the pin. This method will assign the same pin to all
     * clusters in the layer.
     *
     * @param cluster - The cluster for which to create the pushpin.
     * @param layer - The {@link ClusterLayerDirective} component representing the layer.
     *
     * @memberof BingClusterService
     */
    private CreateClusterPushPin(cluster, layer);
    /**
     * Provides a hook for consumers to provide a custom function to create cluster bins for a cluster. This is particuarily useful
     * in situation where the pin should differ to represent information about the pins in the cluster.
     *
     * @param cluster - The cluster for which to create the pushpin.
     * @param layer - The {@link ClusterLayerDirective} component
     * representing the layer. Set the {@link ClusterLayerDirective.CustomMarkerCallback}
     * property to define the callback generating the pin.
     *
     * @memberof BingClusterService
     */
    private CreateCustomClusterPushPin(cluster, layer);
    /**
     * Zooms into the cluster on click so that the members of the cluster comfortable fit into the zommed area.
     *
     * @param e - Mouse Event.
     *
     * @memberof BingClusterService
     */
    private ZoomIntoCluster(e);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BingClusterService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BingClusterService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZy1jbHVzdGVyLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiYmluZy1jbHVzdGVyLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJUG9seWdvbk9wdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2lwb2x5Z29uLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBJUG9seWxpbmVPcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pcG9seWxpbmUtb3B0aW9ucyc7XHJcbmltcG9ydCB7IFBvbHlnb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvcG9seWdvbic7XHJcbmltcG9ydCB7IFBvbHlsaW5lIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BvbHlsaW5lJztcclxuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL21hcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2x1c3RlckxheWVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jbHVzdGVyLWxheWVyJztcclxuaW1wb3J0IHsgQ2x1c3RlclNlcnZpY2UgfSBmcm9tICcuLi9jbHVzdGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCaW5nTGF5ZXJCYXNlIH0gZnJvbSAnLi9iaW5nLWxheWVyLWJhc2UnO1xyXG4vKipcclxuICogSW1wbGVtZW50cyB0aGUge0BsaW5rIENsdXN0ZXJTZXJ2aWNlfSBjb250cmFjdCBmb3IgYSAgQmluZyBNYXBzIFY4IHNwZWNpZmljIGltcGxlbWVudGF0aW9uLlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBCaW5nQ2x1c3RlclNlcnZpY2UgZXh0ZW5kcyBCaW5nTGF5ZXJCYXNlIGltcGxlbWVudHMgQ2x1c3RlclNlcnZpY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEJpbmdDbHVzdGVyU2VydmljZS5cclxuICAgICAqIEBwYXJhbSBfbWFwU2VydmljZSAtIENvbmNyZXRlIHtAbGluayBNYXBTZXJ2aWNlfSBpbXBsZW1lbnRhdGlvbiBmb3IgQmluZyBNYXBzIFY4LiBBbiBpbnN0YW5jZSBvZiB7QGxpbmsgQmluZ01hcFNlcnZpY2V9LlxyXG4gICAgICogQHBhcmFtIF96b25lIC0gTmdab25lIGluc3RhbmNlIHRvIHByb3ZpZGUgem9uZSBhd2FyZSBwcm9taXNlcy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ0NsdXN0ZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKF9tYXBTZXJ2aWNlOiBNYXBTZXJ2aWNlLCBfem9uZTogTmdab25lKTtcclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIGxheWVyIHRvIHRoZSBtYXAuXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gbGF5ZXIgLSBDbHVzdGVyTGF5ZXJEaXJlY3RpdmUgY29tcG9uZW50IG9iamVjdC5cclxuICAgICAqIEdlbmVyYWxseSwgTWFwTGF5ZXIgd2lsbCBiZSBpbmplY3RlZCB3aXRoIGFuIGluc3RhbmNlIG9mIHRoZVxyXG4gICAgICogTGF5ZXJTZXJ2aWNlIGFuZCB0aGVuIHNlbGYgcmVnaXN0ZXIgb24gaW5pdGlhbGl6YXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdDbHVzdGVyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBBZGRMYXllcihsYXllcjogQ2x1c3RlckxheWVyRGlyZWN0aXZlKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIHBvbHlnb24gdG8gdGhlIGxheWVyLlxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQHBhcmFtIGxheWVyIC0gVGhlIGlkIG9mIHRoZSBsYXllciB0byB3aGljaCB0byBhZGQgdGhlIHBvbHlnb24uXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIFBvbHlnb24gb3B0aW9ucyBkZWZpbmluZyB0aGUgcG9seWdvbi5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgd2hlbiBmdWxsZmlsbGVkIGNvbnRhaW5zIHRoZSBhbiBpbnN0YW5jZSBvZiB0aGUgUG9seWdvbiBtb2RlbC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ0NsdXN0ZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIENyZWF0ZVBvbHlnb24obGF5ZXI6IG51bWJlciwgb3B0aW9uczogSVBvbHlnb25PcHRpb25zKTogUHJvbWlzZTxQb2x5Z29uPjtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBhcnJheSBvZiB1bmJvdW5kIHBvbHlnb25zLiBVc2UgdGhpcyBtZXRob2QgdG8gY3JlYXRlIGFycmF5cyBvZiBwb2x5Z29ucyB0byBiZSB1c2VkIGluIGJ1bGtcclxuICAgICAqIG9wZXJhdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGxheWVyIC0gVGhlIGlkIG9mIHRoZSBsYXllciB0byB3aGljaCB0byBhZGQgdGhlIHBvbHlnb24uXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIFBvbHlnb24gb3B0aW9ucyBkZWZpbmluZyB0aGUgcG9seWdvbnMuXHJcbiAgICAgKiBAcmV0dXJucyAtIEEgcHJvbWlzZSB0aGF0IHdoZW4gZnVsbGZpbGxlZCBjb250YWlucyB0aGUgYW4gYXJyYXlzIG9mIHRoZSBQb2x5Z29uIG1vZGVscy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ0NsdXN0ZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIENyZWF0ZVBvbHlnb25zKGxheWVyOiBudW1iZXIsIG9wdGlvbnM6IEFycmF5PElQb2x5Z29uT3B0aW9ucz4pOiBQcm9taXNlPEFycmF5PFBvbHlnb24+PjtcclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIHBvbHlsaW5lIHRvIHRoZSBsYXllci5cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBsYXllciAtIFRoZSBpZCBvZiB0aGUgbGF5ZXIgdG8gd2hpY2ggdG8gYWRkIHRoZSBsaW5lLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBQb2x5bGluZSBvcHRpb25zIGRlZmluaW5nIHRoZSBsaW5lLlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCB3aGVuIGZ1bGxmaWxsZWQgY29udGFpbnMgdGhlIGFuIGluc3RhbmNlIG9mIHRoZSBQb2x5bGluZSAob3IgYW4gYXJyYXlcclxuICAgICAqIG9mIHBvbHlnb25zIGZvciBjb21wbGV4IHBhdGhzKSBtb2RlbC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ0NsdXN0ZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIENyZWF0ZVBvbHlsaW5lKGxheWVyOiBudW1iZXIsIG9wdGlvbnM6IElQb2x5bGluZU9wdGlvbnMpOiBQcm9taXNlPFBvbHlsaW5lIHwgQXJyYXk8UG9seWxpbmU+PjtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBhcnJheSBvZiB1bmJvdW5kIHBvbHlsaW5lcy4gVXNlIHRoaXMgbWV0aG9kIHRvIGNyZWF0ZSBhcnJheXMgb2YgcG9seWxpbmVzIHRvIGJlIHVzZWQgaW4gYnVsa1xyXG4gICAgICogb3BlcmF0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbGF5ZXIgLSBUaGUgaWQgb2YgdGhlIGxheWVyIHRvIHdoaWNoIHRvIGFkZCB0aGUgcG9seWxpbmVzLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBQb2x5bGluZSBvcHRpb25zIGRlZmluaW5nIHRoZSBwb2x5bGluZXMuXHJcbiAgICAgKiBAcmV0dXJucyAtIEEgcHJvbWlzZSB0aGF0IHdoZW4gZnVsbGZpbGxlZCBjb250YWlucyB0aGUgYW4gYXJyYXlzIG9mIHRoZSBQb2x5bGluZSBtb2RlbHMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdDbHVzdGVyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBDcmVhdGVQb2x5bGluZXMobGF5ZXI6IG51bWJlciwgb3B0aW9uczogQXJyYXk8SVBvbHlsaW5lT3B0aW9ucz4pOiBQcm9taXNlPEFycmF5PFBvbHlsaW5lIHwgQXJyYXk8UG9seWxpbmU+Pj47XHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0IHRvIGFjdHVhbGx5IGNsdXN0ZXIgdGhlIGVudGl0aWVzIGluIGEgY2x1c3RlciBsYXllci4gVGhpcyBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBhZnRlciB0aGUgaW5pdGlhbCBzZXQgb2YgZW50aXRpZXNcclxuICAgICAqIGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgY2x1c3Rlci4gVGhpcyBtZXRob2QgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucyBhcyBhZGRpbmcgYW4gZW50aXRpeSB3aWxsIHJlY2FsY3VsYXRlIGFsbCBjbHVzdGVycy5cclxuICAgICAqIEFzIHN1Y2gsIFN0b3BDbHVzdGVyaW5nIHNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIGFkZGluZyBtYW55IGVudGl0aWVzIGFuZCBTdGFydENsdXN0ZXJpbmcgc2hvdWxkIGJlIGNhbGxlZCBvbmNlIGFkZGluZyBpc1xyXG4gICAgICogY29tcGxldGUgdG8gcmVjYWxjdWxhdGUgdGhlIGNsdXN0ZXJzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsYXllciAtIENsdXN0ZXJMYXllckRpcmVjdGl2ZSBjb21wb25lbnQgb2JqZWN0IGZvciB3aGljaCB0byByZXRyaWV2ZSB0aGUgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdDbHVzdGVyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBTdGFydENsdXN0ZXJpbmcobGF5ZXI6IENsdXN0ZXJMYXllckRpcmVjdGl2ZSk6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIFN0b3AgdG8gYWN0dWFsbHkgY2x1c3RlciB0aGUgZW50aXRpZXMgaW4gYSBjbHVzdGVyIGxheWVyLlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucyBhcyBhZGRpbmcgYW4gZW50aXRpeSB3aWxsIHJlY2FsY3VsYXRlIGFsbCBjbHVzdGVycy5cclxuICAgICAqIEFzIHN1Y2gsIFN0b3BDbHVzdGVyaW5nIHNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIGFkZGluZyBtYW55IGVudGl0aWVzIGFuZCBTdGFydENsdXN0ZXJpbmcgc2hvdWxkIGJlIGNhbGxlZCBvbmNlIGFkZGluZyBpc1xyXG4gICAgICogY29tcGxldGUgdG8gcmVjYWxjdWxhdGUgdGhlIGNsdXN0ZXJzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsYXllciAtIENsdXN0ZXJMYXllckRpcmVjdGl2ZSBjb21wb25lbnQgb2JqZWN0IGZvciB3aGljaCB0byByZXRyaWV2ZSB0aGUgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdDbHVzdGVyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBTdG9wQ2x1c3RlcmluZyhsYXllcjogQ2x1c3RlckxheWVyRGlyZWN0aXZlKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGUgZGVmYXVsdCBjbHVzdGVyIHB1c2hwaW4gYXMgYSBjYWxsYmFjayBmcm9tIEJpbmdNYXBzIHdoZW4gY2x1c3RlcmluZyBvY2N1cnMuIFRoZSB7QGxpbmsgQ2x1c3RlckxheWVyRGlyZWN0aXZlfSBtb2RlbFxyXG4gICAgICogY2FuIHByb3ZpZGUgYW4gSWNvbkluZm8gcHJvcGVydHkgdGhhdCB3b3VsZCBnb3Zlcm4gdGhlIGFwcGFyZW5hY2Ugb2YgdGhlIHBpbi4gVGhpcyBtZXRob2Qgd2lsbCBhc3NpZ24gdGhlIHNhbWUgcGluIHRvIGFsbFxyXG4gICAgICogY2x1c3RlcnMgaW4gdGhlIGxheWVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjbHVzdGVyIC0gVGhlIGNsdXN0ZXIgZm9yIHdoaWNoIHRvIGNyZWF0ZSB0aGUgcHVzaHBpbi5cclxuICAgICAqIEBwYXJhbSBsYXllciAtIFRoZSB7QGxpbmsgQ2x1c3RlckxheWVyRGlyZWN0aXZlfSBjb21wb25lbnQgcmVwcmVzZW50aW5nIHRoZSBsYXllci5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ0NsdXN0ZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgQ3JlYXRlQ2x1c3RlclB1c2hQaW4oY2x1c3RlciwgbGF5ZXIpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQcm92aWRlcyBhIGhvb2sgZm9yIGNvbnN1bWVycyB0byBwcm92aWRlIGEgY3VzdG9tIGZ1bmN0aW9uIHRvIGNyZWF0ZSBjbHVzdGVyIGJpbnMgZm9yIGEgY2x1c3Rlci4gVGhpcyBpcyBwYXJ0aWN1YXJpbHkgdXNlZnVsXHJcbiAgICAgKiBpbiBzaXR1YXRpb24gd2hlcmUgdGhlIHBpbiBzaG91bGQgZGlmZmVyIHRvIHJlcHJlc2VudCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcGlucyBpbiB0aGUgY2x1c3Rlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY2x1c3RlciAtIFRoZSBjbHVzdGVyIGZvciB3aGljaCB0byBjcmVhdGUgdGhlIHB1c2hwaW4uXHJcbiAgICAgKiBAcGFyYW0gbGF5ZXIgLSBUaGUge0BsaW5rIENsdXN0ZXJMYXllckRpcmVjdGl2ZX0gY29tcG9uZW50XHJcbiAgICAgKiByZXByZXNlbnRpbmcgdGhlIGxheWVyLiBTZXQgdGhlIHtAbGluayBDbHVzdGVyTGF5ZXJEaXJlY3RpdmUuQ3VzdG9tTWFya2VyQ2FsbGJhY2t9XHJcbiAgICAgKiBwcm9wZXJ0eSB0byBkZWZpbmUgdGhlIGNhbGxiYWNrIGdlbmVyYXRpbmcgdGhlIHBpbi5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ0NsdXN0ZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgQ3JlYXRlQ3VzdG9tQ2x1c3RlclB1c2hQaW4oY2x1c3RlciwgbGF5ZXIpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBab29tcyBpbnRvIHRoZSBjbHVzdGVyIG9uIGNsaWNrIHNvIHRoYXQgdGhlIG1lbWJlcnMgb2YgdGhlIGNsdXN0ZXIgY29tZm9ydGFibGUgZml0IGludG8gdGhlIHpvbW1lZCBhcmVhLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlIC0gTW91c2UgRXZlbnQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdDbHVzdGVyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIFpvb21JbnRvQ2x1c3RlcihlKTtcclxufVxyXG4iXX0=