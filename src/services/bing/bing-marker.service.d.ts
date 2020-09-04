import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { ILatLong } from '../../interfaces/ilatlong';
import { IPoint } from '../../interfaces/ipoint';
import { MapMarkerDirective } from '../../components/map-marker';
import { MarkerService } from '../../services/marker.service';
import { MapService } from '../../services/map.service';
import { LayerService } from '../../services/layer.service';
import { ClusterService } from '../../services/cluster.service';
import { Marker } from '../../models/marker';
/**
 * Concrete implementation of the MarkerService abstract class for Bing Maps V8.
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class BingMarkerService implements MarkerService {
    private _mapService;
    private _layerService;
    private _clusterService;
    private _zone;
    private _markers;
    /**
     * Creates an instance of BingMarkerService.
     * @param _mapService - {@link MapService} instance. The concrete {@link BingMapService} implementation is expected.
     * @param _layerService - {@link LayerService} instance.
     * The concrete {@link BingLayerService} implementation is expected.
     * @param _clusterService - {@link ClusterService} instance.
     * The concrete {@link BingClusterService} implementation is expected.
     * @param _zone - NgZone instance to support zone aware promises.
     *
     * @memberof BingMarkerService
     */
    constructor(_mapService: MapService, _layerService: LayerService, _clusterService: ClusterService, _zone: NgZone);
    /**
     * Adds a marker. Depending on the marker context, the marker will either by added to the map or a correcsponding layer.
     *
     * @param marker - The {@link MapMarkerDirective} to be added.
     *
     * @memberof BingMarkerService
     */
    AddMarker(marker: MapMarkerDirective): void;
    /**
     * Registers an event delegate for a marker.
     *
     * @param eventName - The name of the event to register (e.g. 'click')
     * @param marker - The {@link MapMarker} for which to register the event.
     * @returns - Observable emiting an instance of T each time the event occurs.
     *
     * @memberof BingMarkerService
     */
    CreateEventObservable<T>(eventName: string, marker: MapMarkerDirective): Observable<T>;
    /**
     * Deletes a marker.
     *
     * @param marker - {@link MapMarker} to be deleted.
     * @returns - A promise fullfilled once the marker has been deleted.
     *
     * @memberof BingMarkerService
     */
    DeleteMarker(marker: MapMarkerDirective): Promise<void>;
    /**
     * Obtains geo coordinates for the marker on the click location
     *
     * @param e - The mouse event.
     * @returns - {@link ILatLong} containing the geo coordinates of the clicked marker.
     *
     * @memberof BingMarkerService
     */
    GetCoordinatesFromClick(e: MouseEvent | any): ILatLong;
    /**
     * Obtains the marker model for the marker allowing access to native implementation functionatiliy.
     *
     * @param marker - The {@link MapMarker} for which to obtain the marker model.
     * @returns - A promise that when fullfilled contains the {@link Marker} implementation of the underlying platform.
     *
     * @memberof BingMarkerService
     */
    GetNativeMarker(marker: MapMarkerDirective): Promise<Marker>;
    /**
     * Obtains the marker pixel location for the marker on the click location
     *
     * @param e - The mouse event.
     * @returns - {@link ILatLong} containing the pixels of the marker on the map canvas.
     *
     * @memberof BingMarkerService
     */
    GetPixelsFromClick(e: MouseEvent | any): IPoint;
    /**
     * Converts a geo location to a pixel location relative to the map canvas.
     *
     * @param target - Either a {@link MapMarker} or a {@link ILatLong} for the basis of translation.
     * @returns - A promise that when fullfilled contains a {@link IPoint}
     * with the pixel coordinates of the MapMarker or ILatLong relative to the map canvas.
     *
     * @memberof BingMarkerService
     */
    LocationToPoint(target: MapMarkerDirective | ILatLong): Promise<IPoint>;
    /**
     * Updates the anchor position for the marker.
     *
     * @param - The {@link MapMarker} object for which to upate the anchor.
     * Anchor information is present in the underlying {@link Marker} model object.
     * @returns - A promise that is fullfilled when the anchor position has been updated.
     *
     * @memberof BingMarkerService
     */
    UpdateAnchor(marker: MapMarkerDirective): Promise<void>;
    /**
     * Updates whether the marker is draggable.
     *
     * @param - The {@link MapMarker} object for which to upate dragability.
     * Dragability information is present in the underlying {@link Marker} model object.
     * @returns - A promise that is fullfilled when the marker has been updated.
     *
     * @memberof BingMarkerService
     */
    UpdateDraggable(marker: MapMarkerDirective): Promise<void>;
    /**
     * Updates the Icon on the marker.
     *
     * @param - The {@link MapMarker} object for which to upate the icon.
     * Icon information is present in the underlying {@link Marker} model object.
     * @returns - A promise that is fullfilled when the icon information has been updated.
     *
     * @memberof BingMarkerService
     */
    UpdateIcon(marker: MapMarkerDirective): Promise<void>;
    /**
     * Updates the label on the marker.
     *
     * @param - The {@link MapMarkerDirective} object for which to upate the label.
     * Label information is present in the underlying {@link Marker} model object.
     * @returns - A promise that is fullfilled when the label has been updated.
     *
     * @memberof BingMarkerService
     */
    UpdateLabel(marker: MapMarkerDirective): Promise<void>;
    /**
     * Updates the geo coordinates for the marker.
     *
     * @param - The {@link MapMarkerDirective} object for which to upate the coordinates.
     * Coordinate information is present in the underlying {@link Marker} model object.
     * @returns - A promise that is fullfilled when the position has been updated.
     *
     * @memberof BingMarkerService
     */
    UpdateMarkerPosition(marker: MapMarkerDirective): Promise<void>;
    /**
     * Updates the title on the marker.
     *
     * @param - The {@link MapMarkerDirective} object for which to upate the title.
     * Title information is present in the underlying {@link Marker} model object.
     * @returns - A promise that is fullfilled when the title has been updated.
     *
     * @memberof BingMarkerService
     */
    UpdateTitle(marker: MapMarkerDirective): Promise<void>;
    /**
     * Updates the visibility on the marker.
     *
     * @param - The {@link MapMarkerDirective} object for which to upate the visiblity.
     * Visibility information is present in the underlying {@link Marker} model object.
     * @returns - A promise that is fullfilled when the visibility has been updated.
     *
     * @memberof BingMarkerService
     */
    UpdateVisible(marker: MapMarkerDirective): Promise<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BingMarkerService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BingMarkerService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZy1tYXJrZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJiaW5nLW1hcmtlci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSUxhdExvbmcgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2lsYXRsb25nJztcclxuaW1wb3J0IHsgSVBvaW50IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pcG9pbnQnO1xyXG5pbXBvcnQgeyBNYXBNYXJrZXJEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL21hcC1tYXJrZXInO1xyXG5pbXBvcnQgeyBNYXJrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWFya2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWFwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMYXllclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXllci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2x1c3RlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jbHVzdGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXJrZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvbWFya2VyJztcclxuLyoqXHJcbiAqIENvbmNyZXRlIGltcGxlbWVudGF0aW9uIG9mIHRoZSBNYXJrZXJTZXJ2aWNlIGFic3RyYWN0IGNsYXNzIGZvciBCaW5nIE1hcHMgVjguXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEJpbmdNYXJrZXJTZXJ2aWNlIGltcGxlbWVudHMgTWFya2VyU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9tYXBTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBfbGF5ZXJTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBfY2x1c3RlclNlcnZpY2U7XHJcbiAgICBwcml2YXRlIF96b25lO1xyXG4gICAgcHJpdmF0ZSBfbWFya2VycztcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBCaW5nTWFya2VyU2VydmljZS5cclxuICAgICAqIEBwYXJhbSBfbWFwU2VydmljZSAtIHtAbGluayBNYXBTZXJ2aWNlfSBpbnN0YW5jZS4gVGhlIGNvbmNyZXRlIHtAbGluayBCaW5nTWFwU2VydmljZX0gaW1wbGVtZW50YXRpb24gaXMgZXhwZWN0ZWQuXHJcbiAgICAgKiBAcGFyYW0gX2xheWVyU2VydmljZSAtIHtAbGluayBMYXllclNlcnZpY2V9IGluc3RhbmNlLlxyXG4gICAgICogVGhlIGNvbmNyZXRlIHtAbGluayBCaW5nTGF5ZXJTZXJ2aWNlfSBpbXBsZW1lbnRhdGlvbiBpcyBleHBlY3RlZC5cclxuICAgICAqIEBwYXJhbSBfY2x1c3RlclNlcnZpY2UgLSB7QGxpbmsgQ2x1c3RlclNlcnZpY2V9IGluc3RhbmNlLlxyXG4gICAgICogVGhlIGNvbmNyZXRlIHtAbGluayBCaW5nQ2x1c3RlclNlcnZpY2V9IGltcGxlbWVudGF0aW9uIGlzIGV4cGVjdGVkLlxyXG4gICAgICogQHBhcmFtIF96b25lIC0gTmdab25lIGluc3RhbmNlIHRvIHN1cHBvcnQgem9uZSBhd2FyZSBwcm9taXNlcy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ01hcmtlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoX21hcFNlcnZpY2U6IE1hcFNlcnZpY2UsIF9sYXllclNlcnZpY2U6IExheWVyU2VydmljZSwgX2NsdXN0ZXJTZXJ2aWNlOiBDbHVzdGVyU2VydmljZSwgX3pvbmU6IE5nWm9uZSk7XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBtYXJrZXIuIERlcGVuZGluZyBvbiB0aGUgbWFya2VyIGNvbnRleHQsIHRoZSBtYXJrZXIgd2lsbCBlaXRoZXIgYnkgYWRkZWQgdG8gdGhlIG1hcCBvciBhIGNvcnJlY3Nwb25kaW5nIGxheWVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtYXJrZXIgLSBUaGUge0BsaW5rIE1hcE1hcmtlckRpcmVjdGl2ZX0gdG8gYmUgYWRkZWQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdNYXJrZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIEFkZE1hcmtlcihtYXJrZXI6IE1hcE1hcmtlckRpcmVjdGl2ZSk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVycyBhbiBldmVudCBkZWxlZ2F0ZSBmb3IgYSBtYXJrZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byByZWdpc3RlciAoZS5nLiAnY2xpY2snKVxyXG4gICAgICogQHBhcmFtIG1hcmtlciAtIFRoZSB7QGxpbmsgTWFwTWFya2VyfSBmb3Igd2hpY2ggdG8gcmVnaXN0ZXIgdGhlIGV2ZW50LlxyXG4gICAgICogQHJldHVybnMgLSBPYnNlcnZhYmxlIGVtaXRpbmcgYW4gaW5zdGFuY2Ugb2YgVCBlYWNoIHRpbWUgdGhlIGV2ZW50IG9jY3Vycy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ01hcmtlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgQ3JlYXRlRXZlbnRPYnNlcnZhYmxlPFQ+KGV2ZW50TmFtZTogc3RyaW5nLCBtYXJrZXI6IE1hcE1hcmtlckRpcmVjdGl2ZSk6IE9ic2VydmFibGU8VD47XHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZXMgYSBtYXJrZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1hcmtlciAtIHtAbGluayBNYXBNYXJrZXJ9IHRvIGJlIGRlbGV0ZWQuXHJcbiAgICAgKiBAcmV0dXJucyAtIEEgcHJvbWlzZSBmdWxsZmlsbGVkIG9uY2UgdGhlIG1hcmtlciBoYXMgYmVlbiBkZWxldGVkLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nTWFya2VyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBEZWxldGVNYXJrZXIobWFya2VyOiBNYXBNYXJrZXJEaXJlY3RpdmUpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIGdlbyBjb29yZGluYXRlcyBmb3IgdGhlIG1hcmtlciBvbiB0aGUgY2xpY2sgbG9jYXRpb25cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZSAtIFRoZSBtb3VzZSBldmVudC5cclxuICAgICAqIEByZXR1cm5zIC0ge0BsaW5rIElMYXRMb25nfSBjb250YWluaW5nIHRoZSBnZW8gY29vcmRpbmF0ZXMgb2YgdGhlIGNsaWNrZWQgbWFya2VyLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nTWFya2VyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBHZXRDb29yZGluYXRlc0Zyb21DbGljayhlOiBNb3VzZUV2ZW50IHwgYW55KTogSUxhdExvbmc7XHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgdGhlIG1hcmtlciBtb2RlbCBmb3IgdGhlIG1hcmtlciBhbGxvd2luZyBhY2Nlc3MgdG8gbmF0aXZlIGltcGxlbWVudGF0aW9uIGZ1bmN0aW9uYXRpbGl5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtYXJrZXIgLSBUaGUge0BsaW5rIE1hcE1hcmtlcn0gZm9yIHdoaWNoIHRvIG9idGFpbiB0aGUgbWFya2VyIG1vZGVsLlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCB3aGVuIGZ1bGxmaWxsZWQgY29udGFpbnMgdGhlIHtAbGluayBNYXJrZXJ9IGltcGxlbWVudGF0aW9uIG9mIHRoZSB1bmRlcmx5aW5nIHBsYXRmb3JtLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nTWFya2VyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBHZXROYXRpdmVNYXJrZXIobWFya2VyOiBNYXBNYXJrZXJEaXJlY3RpdmUpOiBQcm9taXNlPE1hcmtlcj47XHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgdGhlIG1hcmtlciBwaXhlbCBsb2NhdGlvbiBmb3IgdGhlIG1hcmtlciBvbiB0aGUgY2xpY2sgbG9jYXRpb25cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZSAtIFRoZSBtb3VzZSBldmVudC5cclxuICAgICAqIEByZXR1cm5zIC0ge0BsaW5rIElMYXRMb25nfSBjb250YWluaW5nIHRoZSBwaXhlbHMgb2YgdGhlIG1hcmtlciBvbiB0aGUgbWFwIGNhbnZhcy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ01hcmtlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgR2V0UGl4ZWxzRnJvbUNsaWNrKGU6IE1vdXNlRXZlbnQgfCBhbnkpOiBJUG9pbnQ7XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIGEgZ2VvIGxvY2F0aW9uIHRvIGEgcGl4ZWwgbG9jYXRpb24gcmVsYXRpdmUgdG8gdGhlIG1hcCBjYW52YXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHRhcmdldCAtIEVpdGhlciBhIHtAbGluayBNYXBNYXJrZXJ9IG9yIGEge0BsaW5rIElMYXRMb25nfSBmb3IgdGhlIGJhc2lzIG9mIHRyYW5zbGF0aW9uLlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCB3aGVuIGZ1bGxmaWxsZWQgY29udGFpbnMgYSB7QGxpbmsgSVBvaW50fVxyXG4gICAgICogd2l0aCB0aGUgcGl4ZWwgY29vcmRpbmF0ZXMgb2YgdGhlIE1hcE1hcmtlciBvciBJTGF0TG9uZyByZWxhdGl2ZSB0byB0aGUgbWFwIGNhbnZhcy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ01hcmtlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgTG9jYXRpb25Ub1BvaW50KHRhcmdldDogTWFwTWFya2VyRGlyZWN0aXZlIHwgSUxhdExvbmcpOiBQcm9taXNlPElQb2ludD47XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIGFuY2hvciBwb3NpdGlvbiBmb3IgdGhlIG1hcmtlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gLSBUaGUge0BsaW5rIE1hcE1hcmtlcn0gb2JqZWN0IGZvciB3aGljaCB0byB1cGF0ZSB0aGUgYW5jaG9yLlxyXG4gICAgICogQW5jaG9yIGluZm9ybWF0aW9uIGlzIHByZXNlbnQgaW4gdGhlIHVuZGVybHlpbmcge0BsaW5rIE1hcmtlcn0gbW9kZWwgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCBpcyBmdWxsZmlsbGVkIHdoZW4gdGhlIGFuY2hvciBwb3NpdGlvbiBoYXMgYmVlbiB1cGRhdGVkLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nTWFya2VyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBVcGRhdGVBbmNob3IobWFya2VyOiBNYXBNYXJrZXJEaXJlY3RpdmUpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHdoZXRoZXIgdGhlIG1hcmtlciBpcyBkcmFnZ2FibGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIC0gVGhlIHtAbGluayBNYXBNYXJrZXJ9IG9iamVjdCBmb3Igd2hpY2ggdG8gdXBhdGUgZHJhZ2FiaWxpdHkuXHJcbiAgICAgKiBEcmFnYWJpbGl0eSBpbmZvcm1hdGlvbiBpcyBwcmVzZW50IGluIHRoZSB1bmRlcmx5aW5nIHtAbGluayBNYXJrZXJ9IG1vZGVsIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsbGZpbGxlZCB3aGVuIHRoZSBtYXJrZXIgaGFzIGJlZW4gdXBkYXRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ01hcmtlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgVXBkYXRlRHJhZ2dhYmxlKG1hcmtlcjogTWFwTWFya2VyRGlyZWN0aXZlKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgSWNvbiBvbiB0aGUgbWFya2VyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAtIFRoZSB7QGxpbmsgTWFwTWFya2VyfSBvYmplY3QgZm9yIHdoaWNoIHRvIHVwYXRlIHRoZSBpY29uLlxyXG4gICAgICogSWNvbiBpbmZvcm1hdGlvbiBpcyBwcmVzZW50IGluIHRoZSB1bmRlcmx5aW5nIHtAbGluayBNYXJrZXJ9IG1vZGVsIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsbGZpbGxlZCB3aGVuIHRoZSBpY29uIGluZm9ybWF0aW9uIGhhcyBiZWVuIHVwZGF0ZWQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdNYXJrZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIFVwZGF0ZUljb24obWFya2VyOiBNYXBNYXJrZXJEaXJlY3RpdmUpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBsYWJlbCBvbiB0aGUgbWFya2VyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAtIFRoZSB7QGxpbmsgTWFwTWFya2VyRGlyZWN0aXZlfSBvYmplY3QgZm9yIHdoaWNoIHRvIHVwYXRlIHRoZSBsYWJlbC5cclxuICAgICAqIExhYmVsIGluZm9ybWF0aW9uIGlzIHByZXNlbnQgaW4gdGhlIHVuZGVybHlpbmcge0BsaW5rIE1hcmtlcn0gbW9kZWwgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCBpcyBmdWxsZmlsbGVkIHdoZW4gdGhlIGxhYmVsIGhhcyBiZWVuIHVwZGF0ZWQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdNYXJrZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIFVwZGF0ZUxhYmVsKG1hcmtlcjogTWFwTWFya2VyRGlyZWN0aXZlKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgZ2VvIGNvb3JkaW5hdGVzIGZvciB0aGUgbWFya2VyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAtIFRoZSB7QGxpbmsgTWFwTWFya2VyRGlyZWN0aXZlfSBvYmplY3QgZm9yIHdoaWNoIHRvIHVwYXRlIHRoZSBjb29yZGluYXRlcy5cclxuICAgICAqIENvb3JkaW5hdGUgaW5mb3JtYXRpb24gaXMgcHJlc2VudCBpbiB0aGUgdW5kZXJseWluZyB7QGxpbmsgTWFya2VyfSBtb2RlbCBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyAtIEEgcHJvbWlzZSB0aGF0IGlzIGZ1bGxmaWxsZWQgd2hlbiB0aGUgcG9zaXRpb24gaGFzIGJlZW4gdXBkYXRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ01hcmtlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgVXBkYXRlTWFya2VyUG9zaXRpb24obWFya2VyOiBNYXBNYXJrZXJEaXJlY3RpdmUpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSB0aXRsZSBvbiB0aGUgbWFya2VyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAtIFRoZSB7QGxpbmsgTWFwTWFya2VyRGlyZWN0aXZlfSBvYmplY3QgZm9yIHdoaWNoIHRvIHVwYXRlIHRoZSB0aXRsZS5cclxuICAgICAqIFRpdGxlIGluZm9ybWF0aW9uIGlzIHByZXNlbnQgaW4gdGhlIHVuZGVybHlpbmcge0BsaW5rIE1hcmtlcn0gbW9kZWwgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCBpcyBmdWxsZmlsbGVkIHdoZW4gdGhlIHRpdGxlIGhhcyBiZWVuIHVwZGF0ZWQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdNYXJrZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIFVwZGF0ZVRpdGxlKG1hcmtlcjogTWFwTWFya2VyRGlyZWN0aXZlKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgdmlzaWJpbGl0eSBvbiB0aGUgbWFya2VyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAtIFRoZSB7QGxpbmsgTWFwTWFya2VyRGlyZWN0aXZlfSBvYmplY3QgZm9yIHdoaWNoIHRvIHVwYXRlIHRoZSB2aXNpYmxpdHkuXHJcbiAgICAgKiBWaXNpYmlsaXR5IGluZm9ybWF0aW9uIGlzIHByZXNlbnQgaW4gdGhlIHVuZGVybHlpbmcge0BsaW5rIE1hcmtlcn0gbW9kZWwgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCBpcyBmdWxsZmlsbGVkIHdoZW4gdGhlIHZpc2liaWxpdHkgaGFzIGJlZW4gdXBkYXRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ01hcmtlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgVXBkYXRlVmlzaWJsZShtYXJrZXI6IE1hcE1hcmtlckRpcmVjdGl2ZSk6IFByb21pc2U8dm9pZD47XHJcbn1cclxuIl19