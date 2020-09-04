import { IMarkerOptions } from '../interfaces/imarker-options';
import { IPolygonOptions } from '../interfaces/ipolygon-options';
import { IPolylineOptions } from '../interfaces/ipolyline-options';
import { IMarkerIconInfo } from '../interfaces/imarker-icon-info';
import { Marker } from '../models/marker';
import { Polygon } from '../models/polygon';
import { Polyline } from '../models/polyline';
import { Layer } from '../models/layer';
import { MapLayerDirective } from '../components/map-layer';
/**
 * Abstract class to to define the layer service contract. Must be realized by implementing provider.
 *
 * @export
 * @abstract
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class LayerService {
    /**
     * Adds a layer to the map.
     *
     * @abstract
     * @param layer - MapLayerDirective component object.
     * Generally, MapLayerDirective will be injected with an instance of the
     * LayerService and then self register on initialization.
     *
     * @memberof LayerService
     */
    abstract AddLayer(layer: MapLayerDirective): void;
    /**
     * Adds a marker to the layer.
     *
     * @abstract
     * @param layer - The id of the layer to which to add the marker.
     * @param options - Marker options defining the marker.
     * @returns - A promise that when fullfilled contains the an instance of the Marker model.
     *
     * @memberof LayerService
     */
    abstract CreateMarker(layer: number, options: IMarkerOptions): Promise<Marker>;
    /**
     * Creates an array of unbound markers. Use this method to create arrays of markers to be used in bulk
     * operations.
     *
     * @abstract
     * @param options - Marker options defining the markers.
     * @param markerIcon - Optional information to generate custom markers. This will be applied to all markers.
     * @returns - A promise that when fullfilled contains the an arrays of the Marker models.
     *
     * @memberof LayerService
     */
    abstract CreateMarkers(options: Array<IMarkerOptions>, markerIcon?: IMarkerIconInfo): Promise<Array<Marker>>;
    /**
     * Adds a polygon to the layer.
     *
     * @abstract
     * @param layer - The id of the layer to which to add the line.
     * @param options - Polygon options defining the line.
     * @returns - A promise that when fullfilled contains the an instance of the Polygon model.
     *
     * @memberof LayerService
     */
    abstract CreatePolygon(layer: number, options: IPolygonOptions): Promise<Polygon>;
    /**
     * Creates an array of unbound polygons. Use this method to create arrays of polygons to be used in bulk
     * operations.
     *
     * @param layer - The id of the layer to which to add the polygon.
     * @param options - Polygon options defining the polygons.
     * @returns - A promise that when fullfilled contains the an arrays of the Polygon models.
     *
     * @memberof LayerService
     */
    abstract CreatePolygons(layer: number, options: Array<IPolygonOptions>): Promise<Array<Polygon>>;
    /**
     * Adds a polyline to the layer.
     *
     * @abstract
     * @param layer - The id of the layer to which to add the line.
     * @param options - Polyline options defining the marker.
     * @returns - A promise that when fullfilled contains the an instance of the Polyline (or an
     * array of polylines for complex paths) model.
     *
     * @memberof LayerService
     */
    abstract CreatePolyline(layer: number, options: IPolygonOptions): Promise<Polyline | Array<Polyline>>;
    /**
     * Creates an array of unbound polylines. Use this method to create arrays of polylines to be used in bulk
     * operations.
     *
     * @param layer - The id of the layer to which to add the polylines.
     * @param options - Polyline options defining the polylines.
     * @returns - A promise that when fullfilled contains the an arrays of the Polyline models.
     *
     * @memberof LayerService
     */
    abstract CreatePolylines(layer: number, options: Array<IPolylineOptions>): Promise<Array<Polyline | Array<Polyline>>>;
    /**
     * Deletes the layer
     *
     * @abstract
     * @param layer - MapLayerDirective component object for which to retrieve the layer.
     * @returns - A promise that is fullfilled when the layer has been removed.
     *
     * @memberof LayerService
     */
    abstract DeleteLayer(layer: MapLayerDirective): Promise<void>;
    /**
     * Returns the Layer model represented by this layer.
     *
     * @abstract
     * @param layer - MapLayerDirective component object or MapLayerId for which to retrieve the layer model.
     * @returns - A promise that when resolved contains the Layer model.
     *
     * @memberof LayerService
     */
    abstract GetNativeLayer(layer: MapLayerDirective | number): Promise<Layer>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LayerService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<LayerService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJsYXllci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElNYXJrZXJPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbWFya2VyLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBJUG9seWdvbk9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2lwb2x5Z29uLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBJUG9seWxpbmVPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pcG9seWxpbmUtb3B0aW9ucyc7XHJcbmltcG9ydCB7IElNYXJrZXJJY29uSW5mbyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW1hcmtlci1pY29uLWluZm8nO1xyXG5pbXBvcnQgeyBNYXJrZXIgfSBmcm9tICcuLi9tb2RlbHMvbWFya2VyJztcclxuaW1wb3J0IHsgUG9seWdvbiB9IGZyb20gJy4uL21vZGVscy9wb2x5Z29uJztcclxuaW1wb3J0IHsgUG9seWxpbmUgfSBmcm9tICcuLi9tb2RlbHMvcG9seWxpbmUnO1xyXG5pbXBvcnQgeyBMYXllciB9IGZyb20gJy4uL21vZGVscy9sYXllcic7XHJcbmltcG9ydCB7IE1hcExheWVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9tYXAtbGF5ZXInO1xyXG4vKipcclxuICogQWJzdHJhY3QgY2xhc3MgdG8gdG8gZGVmaW5lIHRoZSBsYXllciBzZXJ2aWNlIGNvbnRyYWN0LiBNdXN0IGJlIHJlYWxpemVkIGJ5IGltcGxlbWVudGluZyBwcm92aWRlci5cclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAYWJzdHJhY3RcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIExheWVyU2VydmljZSB7XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBsYXllciB0byB0aGUgbWFwLlxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQHBhcmFtIGxheWVyIC0gTWFwTGF5ZXJEaXJlY3RpdmUgY29tcG9uZW50IG9iamVjdC5cclxuICAgICAqIEdlbmVyYWxseSwgTWFwTGF5ZXJEaXJlY3RpdmUgd2lsbCBiZSBpbmplY3RlZCB3aXRoIGFuIGluc3RhbmNlIG9mIHRoZVxyXG4gICAgICogTGF5ZXJTZXJ2aWNlIGFuZCB0aGVuIHNlbGYgcmVnaXN0ZXIgb24gaW5pdGlhbGl6YXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIExheWVyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBBZGRMYXllcihsYXllcjogTWFwTGF5ZXJEaXJlY3RpdmUpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgbWFya2VyIHRvIHRoZSBsYXllci5cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBsYXllciAtIFRoZSBpZCBvZiB0aGUgbGF5ZXIgdG8gd2hpY2ggdG8gYWRkIHRoZSBtYXJrZXIuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIE1hcmtlciBvcHRpb25zIGRlZmluaW5nIHRoZSBtYXJrZXIuXHJcbiAgICAgKiBAcmV0dXJucyAtIEEgcHJvbWlzZSB0aGF0IHdoZW4gZnVsbGZpbGxlZCBjb250YWlucyB0aGUgYW4gaW5zdGFuY2Ugb2YgdGhlIE1hcmtlciBtb2RlbC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTGF5ZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IENyZWF0ZU1hcmtlcihsYXllcjogbnVtYmVyLCBvcHRpb25zOiBJTWFya2VyT3B0aW9ucyk6IFByb21pc2U8TWFya2VyPjtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBhcnJheSBvZiB1bmJvdW5kIG1hcmtlcnMuIFVzZSB0aGlzIG1ldGhvZCB0byBjcmVhdGUgYXJyYXlzIG9mIG1hcmtlcnMgdG8gYmUgdXNlZCBpbiBidWxrXHJcbiAgICAgKiBvcGVyYXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBNYXJrZXIgb3B0aW9ucyBkZWZpbmluZyB0aGUgbWFya2Vycy5cclxuICAgICAqIEBwYXJhbSBtYXJrZXJJY29uIC0gT3B0aW9uYWwgaW5mb3JtYXRpb24gdG8gZ2VuZXJhdGUgY3VzdG9tIG1hcmtlcnMuIFRoaXMgd2lsbCBiZSBhcHBsaWVkIHRvIGFsbCBtYXJrZXJzLlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCB3aGVuIGZ1bGxmaWxsZWQgY29udGFpbnMgdGhlIGFuIGFycmF5cyBvZiB0aGUgTWFya2VyIG1vZGVscy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTGF5ZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IENyZWF0ZU1hcmtlcnMob3B0aW9uczogQXJyYXk8SU1hcmtlck9wdGlvbnM+LCBtYXJrZXJJY29uPzogSU1hcmtlckljb25JbmZvKTogUHJvbWlzZTxBcnJheTxNYXJrZXI+PjtcclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIHBvbHlnb24gdG8gdGhlIGxheWVyLlxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQHBhcmFtIGxheWVyIC0gVGhlIGlkIG9mIHRoZSBsYXllciB0byB3aGljaCB0byBhZGQgdGhlIGxpbmUuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIFBvbHlnb24gb3B0aW9ucyBkZWZpbmluZyB0aGUgbGluZS5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgd2hlbiBmdWxsZmlsbGVkIGNvbnRhaW5zIHRoZSBhbiBpbnN0YW5jZSBvZiB0aGUgUG9seWdvbiBtb2RlbC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTGF5ZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IENyZWF0ZVBvbHlnb24obGF5ZXI6IG51bWJlciwgb3B0aW9uczogSVBvbHlnb25PcHRpb25zKTogUHJvbWlzZTxQb2x5Z29uPjtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBhcnJheSBvZiB1bmJvdW5kIHBvbHlnb25zLiBVc2UgdGhpcyBtZXRob2QgdG8gY3JlYXRlIGFycmF5cyBvZiBwb2x5Z29ucyB0byBiZSB1c2VkIGluIGJ1bGtcclxuICAgICAqIG9wZXJhdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGxheWVyIC0gVGhlIGlkIG9mIHRoZSBsYXllciB0byB3aGljaCB0byBhZGQgdGhlIHBvbHlnb24uXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIFBvbHlnb24gb3B0aW9ucyBkZWZpbmluZyB0aGUgcG9seWdvbnMuXHJcbiAgICAgKiBAcmV0dXJucyAtIEEgcHJvbWlzZSB0aGF0IHdoZW4gZnVsbGZpbGxlZCBjb250YWlucyB0aGUgYW4gYXJyYXlzIG9mIHRoZSBQb2x5Z29uIG1vZGVscy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTGF5ZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IENyZWF0ZVBvbHlnb25zKGxheWVyOiBudW1iZXIsIG9wdGlvbnM6IEFycmF5PElQb2x5Z29uT3B0aW9ucz4pOiBQcm9taXNlPEFycmF5PFBvbHlnb24+PjtcclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIHBvbHlsaW5lIHRvIHRoZSBsYXllci5cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBsYXllciAtIFRoZSBpZCBvZiB0aGUgbGF5ZXIgdG8gd2hpY2ggdG8gYWRkIHRoZSBsaW5lLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBQb2x5bGluZSBvcHRpb25zIGRlZmluaW5nIHRoZSBtYXJrZXIuXHJcbiAgICAgKiBAcmV0dXJucyAtIEEgcHJvbWlzZSB0aGF0IHdoZW4gZnVsbGZpbGxlZCBjb250YWlucyB0aGUgYW4gaW5zdGFuY2Ugb2YgdGhlIFBvbHlsaW5lIChvciBhblxyXG4gICAgICogYXJyYXkgb2YgcG9seWxpbmVzIGZvciBjb21wbGV4IHBhdGhzKSBtb2RlbC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTGF5ZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IENyZWF0ZVBvbHlsaW5lKGxheWVyOiBudW1iZXIsIG9wdGlvbnM6IElQb2x5Z29uT3B0aW9ucyk6IFByb21pc2U8UG9seWxpbmUgfCBBcnJheTxQb2x5bGluZT4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGFycmF5IG9mIHVuYm91bmQgcG9seWxpbmVzLiBVc2UgdGhpcyBtZXRob2QgdG8gY3JlYXRlIGFycmF5cyBvZiBwb2x5bGluZXMgdG8gYmUgdXNlZCBpbiBidWxrXHJcbiAgICAgKiBvcGVyYXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsYXllciAtIFRoZSBpZCBvZiB0aGUgbGF5ZXIgdG8gd2hpY2ggdG8gYWRkIHRoZSBwb2x5bGluZXMuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIFBvbHlsaW5lIG9wdGlvbnMgZGVmaW5pbmcgdGhlIHBvbHlsaW5lcy5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgd2hlbiBmdWxsZmlsbGVkIGNvbnRhaW5zIHRoZSBhbiBhcnJheXMgb2YgdGhlIFBvbHlsaW5lIG1vZGVscy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTGF5ZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IENyZWF0ZVBvbHlsaW5lcyhsYXllcjogbnVtYmVyLCBvcHRpb25zOiBBcnJheTxJUG9seWxpbmVPcHRpb25zPik6IFByb21pc2U8QXJyYXk8UG9seWxpbmUgfCBBcnJheTxQb2x5bGluZT4+PjtcclxuICAgIC8qKlxyXG4gICAgICogRGVsZXRlcyB0aGUgbGF5ZXJcclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBsYXllciAtIE1hcExheWVyRGlyZWN0aXZlIGNvbXBvbmVudCBvYmplY3QgZm9yIHdoaWNoIHRvIHJldHJpZXZlIHRoZSBsYXllci5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsbGZpbGxlZCB3aGVuIHRoZSBsYXllciBoYXMgYmVlbiByZW1vdmVkLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBMYXllclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgRGVsZXRlTGF5ZXIobGF5ZXI6IE1hcExheWVyRGlyZWN0aXZlKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgTGF5ZXIgbW9kZWwgcmVwcmVzZW50ZWQgYnkgdGhpcyBsYXllci5cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBsYXllciAtIE1hcExheWVyRGlyZWN0aXZlIGNvbXBvbmVudCBvYmplY3Qgb3IgTWFwTGF5ZXJJZCBmb3Igd2hpY2ggdG8gcmV0cmlldmUgdGhlIGxheWVyIG1vZGVsLlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCB3aGVuIHJlc29sdmVkIGNvbnRhaW5zIHRoZSBMYXllciBtb2RlbC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTGF5ZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IEdldE5hdGl2ZUxheWVyKGxheWVyOiBNYXBMYXllckRpcmVjdGl2ZSB8IG51bWJlcik6IFByb21pc2U8TGF5ZXI+O1xyXG59XHJcbiJdfQ==