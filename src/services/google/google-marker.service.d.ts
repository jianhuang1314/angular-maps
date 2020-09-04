import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { IPoint } from '../../interfaces/ipoint';
import { ILatLong } from '../../interfaces/ilatlong';
import { Marker } from '../../models/marker';
import { MapMarkerDirective } from '../../components/map-marker';
import { MarkerService } from '../marker.service';
import { MapService } from '../map.service';
import { LayerService } from '../layer.service';
import { ClusterService } from '../cluster.service';
/**
 * Concrete implementation of the MarkerService abstract class for Google.
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class GoogleMarkerService implements MarkerService {
    private _mapService;
    private _layerService;
    private _clusterService;
    private _zone;
    private _markers;
    /**
     * Creates an instance of GoogleMarkerService.
     * @param _mapService - {@link MapService} instance.
     * The concrete {@link GoogleMapService} implementation is expected.
     * @param _layerService - {@link LayerService} instance.
     * The concrete {@link GoogleLayerService} implementation is expected.
     * @param _clusterService - {@link ClusterService} instance.
     * The concrete {@link GoogleClusterService} implementation is expected.
     * @param _zone - NgZone instance to support zone aware promises.
     *
     * @memberof GoogleMarkerService
     */
    constructor(_mapService: MapService, _layerService: LayerService, _clusterService: ClusterService, _zone: NgZone);
    /**
     * Adds a marker. Depending on the marker context, the marker will either by added to the map or a correcsponding layer.
     *
     * @param marker - The {@link MapMarkerDirective} to be added.
     * @memberof GoogleMarkerService
     */
    AddMarker(marker: MapMarkerDirective): void;
    /**
     * Registers an event delegate for a marker.
     *
     * @param eventName - The name of the event to register (e.g. 'click')
     * @param marker - The {@link MapMarkerDirective} for which to register the event.
     * @returns - Observable emiting an instance of T each time the event occurs.
     * @memberof GoogleMarkerService
     */
    CreateEventObservable<T>(eventName: string, marker: MapMarkerDirective): Observable<T>;
    /**
     * Deletes a marker.
     *
     * @param marker - {@link MapMarkerDirective} to be deleted.
     * @returns - A promise fullfilled once the marker has been deleted.
     * @memberof GoogleMarkerService
     */
    DeleteMarker(marker: MapMarkerDirective): Promise<void>;
    /**
     * Obtains geo coordinates for the marker on the click location
     *
     * @param e - The mouse event.
     * @returns - {@link ILatLong} containing the geo coordinates of the clicked marker.
     * @memberof GoogleMarkerService
     */
    GetCoordinatesFromClick(e: MouseEvent | any): ILatLong;
    /**
     * Obtains the marker model for the marker allowing access to native implementation functionatiliy.
     *
     * @param marker - The {@link MapMarkerDirective} for which to obtain the marker model.
     * @returns - A promise that when fullfilled contains the {@link Marker} implementation of the underlying platform.
     * @memberof GoogleMarkerService
     */
    GetNativeMarker(marker: MapMarkerDirective): Promise<Marker>;
    /**
     * Obtains the marker pixel location for the marker on the click location
     *
     * @param e - The mouse event.
     * @returns - {@link ILatLong} containing the pixels of the marker on the map canvas.
     * @memberof GoogleMarkerService
     */
    GetPixelsFromClick(e: MouseEvent | any): IPoint;
    /**
     * Converts a geo location to a pixel location relative to the map canvas.
     *
     * @param target - Either a {@link MapMarkerDirective}
     * or a {@link ILatLong} for the basis of translation.
     * @returns - A promise that when fullfilled contains a {@link IPoint}
     * with the pixel coordinates of the MapMarker or ILatLong relative to the map canvas.
     * @memberof GoogleMarkerService
     */
    LocationToPoint(target: MapMarkerDirective | ILatLong): Promise<IPoint>;
    /**
     * Updates the anchor position for the marker.
     *
     * @param - The {@link MapMarkerDirective} object for which to upate the anchor.
     * Anchor information is present in the underlying {@link Marker} model object.
     * @returns - A promise that is fullfilled when the anchor position has been updated.
     * @memberof GoogleMarkerService
     */
    UpdateAnchor(marker: MapMarkerDirective): Promise<void>;
    /**
     * Updates whether the marker is draggable.
     *
     * @param - The {@link MapMarkerDirective} object for which to upate dragability.
     * Dragability information is present in the underlying {@link Marker} model object.
     * @returns - A promise that is fullfilled when the marker has been updated.
     * @memberof GoogleMarkerService
     */
    UpdateDraggable(marker: MapMarkerDirective): Promise<void>;
    /**
     * Updates the Icon on the marker.
     *
     * @param - The {@link MapMarkerDirective} object for which to upate the icon. Icon information is present
     * in the underlying {@link Marker} model object.
     * @returns - A promise that is fullfilled when the icon information has been updated.
     * @memberof GoogleMarkerService
     */
    UpdateIcon(marker: MapMarkerDirective): Promise<void>;
    /**
     * Updates the label on the marker.
     *
     * @param - The {@link MapMarkerDirective} object for which to upate the label.
     * Label information is present in the underlying {@link Marker} model object.
     * @returns - A promise that is fullfilled when the label has been updated.
     * @memberof GoogleMarkerService
     */
    UpdateLabel(marker: MapMarkerDirective): Promise<void>;
    /**
     * Updates the geo coordinates for the marker.
     *
     * @param - The {@link MapMarkerDirective} object for which to upate the coordinates.
     * Coordinate information is present in the underlying {@link Marker} model object.
     * @returns - A promise that is fullfilled when the position has been updated.
     * @memberof GoogleMarkerService
     */
    UpdateMarkerPosition(marker: MapMarkerDirective): Promise<void>;
    /**
     * Updates the title on the marker.
     *
     * @param - The {@link MapMarkerDirective} object for which to upate the title.
     * Title information is present in the underlying {@link Marker} model object.
     * @returns - A promise that is fullfilled when the title has been updated.
     * @memberof GoogleMarkerService
     */
    UpdateTitle(marker: MapMarkerDirective): Promise<void>;
    /**
     * Updates the visibility on the marker.
     *
     * @param - The {@link MapMarkerDirective} object for which to upate the title.
     * Title information is present in the underlying {@link Marker} model object.
     * @returns - A promise that is fullfilled when the title has been updated.
     * @memberof GoogleMarkerService
     */
    UpdateVisible(marker: MapMarkerDirective): Promise<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GoogleMarkerService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<GoogleMarkerService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcmtlci5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImdvb2dsZS1tYXJrZXIuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IElQb2ludCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaXBvaW50JztcclxuaW1wb3J0IHsgSUxhdExvbmcgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2lsYXRsb25nJztcclxuaW1wb3J0IHsgTWFya2VyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL21hcmtlcic7XHJcbmltcG9ydCB7IE1hcE1hcmtlckRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWFwLW1hcmtlcic7XHJcbmltcG9ydCB7IE1hcmtlclNlcnZpY2UgfSBmcm9tICcuLi9tYXJrZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9tYXAuc2VydmljZSc7XHJcbmltcG9ydCB7IExheWVyU2VydmljZSB9IGZyb20gJy4uL2xheWVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDbHVzdGVyU2VydmljZSB9IGZyb20gJy4uL2NsdXN0ZXIuc2VydmljZSc7XHJcbi8qKlxyXG4gKiBDb25jcmV0ZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgTWFya2VyU2VydmljZSBhYnN0cmFjdCBjbGFzcyBmb3IgR29vZ2xlLlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHb29nbGVNYXJrZXJTZXJ2aWNlIGltcGxlbWVudHMgTWFya2VyU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9tYXBTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBfbGF5ZXJTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBfY2x1c3RlclNlcnZpY2U7XHJcbiAgICBwcml2YXRlIF96b25lO1xyXG4gICAgcHJpdmF0ZSBfbWFya2VycztcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBHb29nbGVNYXJrZXJTZXJ2aWNlLlxyXG4gICAgICogQHBhcmFtIF9tYXBTZXJ2aWNlIC0ge0BsaW5rIE1hcFNlcnZpY2V9IGluc3RhbmNlLlxyXG4gICAgICogVGhlIGNvbmNyZXRlIHtAbGluayBHb29nbGVNYXBTZXJ2aWNlfSBpbXBsZW1lbnRhdGlvbiBpcyBleHBlY3RlZC5cclxuICAgICAqIEBwYXJhbSBfbGF5ZXJTZXJ2aWNlIC0ge0BsaW5rIExheWVyU2VydmljZX0gaW5zdGFuY2UuXHJcbiAgICAgKiBUaGUgY29uY3JldGUge0BsaW5rIEdvb2dsZUxheWVyU2VydmljZX0gaW1wbGVtZW50YXRpb24gaXMgZXhwZWN0ZWQuXHJcbiAgICAgKiBAcGFyYW0gX2NsdXN0ZXJTZXJ2aWNlIC0ge0BsaW5rIENsdXN0ZXJTZXJ2aWNlfSBpbnN0YW5jZS5cclxuICAgICAqIFRoZSBjb25jcmV0ZSB7QGxpbmsgR29vZ2xlQ2x1c3RlclNlcnZpY2V9IGltcGxlbWVudGF0aW9uIGlzIGV4cGVjdGVkLlxyXG4gICAgICogQHBhcmFtIF96b25lIC0gTmdab25lIGluc3RhbmNlIHRvIHN1cHBvcnQgem9uZSBhd2FyZSBwcm9taXNlcy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlTWFya2VyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihfbWFwU2VydmljZTogTWFwU2VydmljZSwgX2xheWVyU2VydmljZTogTGF5ZXJTZXJ2aWNlLCBfY2x1c3RlclNlcnZpY2U6IENsdXN0ZXJTZXJ2aWNlLCBfem9uZTogTmdab25lKTtcclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIG1hcmtlci4gRGVwZW5kaW5nIG9uIHRoZSBtYXJrZXIgY29udGV4dCwgdGhlIG1hcmtlciB3aWxsIGVpdGhlciBieSBhZGRlZCB0byB0aGUgbWFwIG9yIGEgY29ycmVjc3BvbmRpbmcgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1hcmtlciAtIFRoZSB7QGxpbmsgTWFwTWFya2VyRGlyZWN0aXZlfSB0byBiZSBhZGRlZC5cclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVNYXJrZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIEFkZE1hcmtlcihtYXJrZXI6IE1hcE1hcmtlckRpcmVjdGl2ZSk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVycyBhbiBldmVudCBkZWxlZ2F0ZSBmb3IgYSBtYXJrZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byByZWdpc3RlciAoZS5nLiAnY2xpY2snKVxyXG4gICAgICogQHBhcmFtIG1hcmtlciAtIFRoZSB7QGxpbmsgTWFwTWFya2VyRGlyZWN0aXZlfSBmb3Igd2hpY2ggdG8gcmVnaXN0ZXIgdGhlIGV2ZW50LlxyXG4gICAgICogQHJldHVybnMgLSBPYnNlcnZhYmxlIGVtaXRpbmcgYW4gaW5zdGFuY2Ugb2YgVCBlYWNoIHRpbWUgdGhlIGV2ZW50IG9jY3Vycy5cclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVNYXJrZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIENyZWF0ZUV2ZW50T2JzZXJ2YWJsZTxUPihldmVudE5hbWU6IHN0cmluZywgbWFya2VyOiBNYXBNYXJrZXJEaXJlY3RpdmUpOiBPYnNlcnZhYmxlPFQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGVzIGEgbWFya2VyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtYXJrZXIgLSB7QGxpbmsgTWFwTWFya2VyRGlyZWN0aXZlfSB0byBiZSBkZWxldGVkLlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgZnVsbGZpbGxlZCBvbmNlIHRoZSBtYXJrZXIgaGFzIGJlZW4gZGVsZXRlZC5cclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVNYXJrZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIERlbGV0ZU1hcmtlcihtYXJrZXI6IE1hcE1hcmtlckRpcmVjdGl2ZSk6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgZ2VvIGNvb3JkaW5hdGVzIGZvciB0aGUgbWFya2VyIG9uIHRoZSBjbGljayBsb2NhdGlvblxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlIC0gVGhlIG1vdXNlIGV2ZW50LlxyXG4gICAgICogQHJldHVybnMgLSB7QGxpbmsgSUxhdExvbmd9IGNvbnRhaW5pbmcgdGhlIGdlbyBjb29yZGluYXRlcyBvZiB0aGUgY2xpY2tlZCBtYXJrZXIuXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlTWFya2VyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBHZXRDb29yZGluYXRlc0Zyb21DbGljayhlOiBNb3VzZUV2ZW50IHwgYW55KTogSUxhdExvbmc7XHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgdGhlIG1hcmtlciBtb2RlbCBmb3IgdGhlIG1hcmtlciBhbGxvd2luZyBhY2Nlc3MgdG8gbmF0aXZlIGltcGxlbWVudGF0aW9uIGZ1bmN0aW9uYXRpbGl5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtYXJrZXIgLSBUaGUge0BsaW5rIE1hcE1hcmtlckRpcmVjdGl2ZX0gZm9yIHdoaWNoIHRvIG9idGFpbiB0aGUgbWFya2VyIG1vZGVsLlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCB3aGVuIGZ1bGxmaWxsZWQgY29udGFpbnMgdGhlIHtAbGluayBNYXJrZXJ9IGltcGxlbWVudGF0aW9uIG9mIHRoZSB1bmRlcmx5aW5nIHBsYXRmb3JtLlxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZU1hcmtlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgR2V0TmF0aXZlTWFya2VyKG1hcmtlcjogTWFwTWFya2VyRGlyZWN0aXZlKTogUHJvbWlzZTxNYXJrZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIHRoZSBtYXJrZXIgcGl4ZWwgbG9jYXRpb24gZm9yIHRoZSBtYXJrZXIgb24gdGhlIGNsaWNrIGxvY2F0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGUgLSBUaGUgbW91c2UgZXZlbnQuXHJcbiAgICAgKiBAcmV0dXJucyAtIHtAbGluayBJTGF0TG9uZ30gY29udGFpbmluZyB0aGUgcGl4ZWxzIG9mIHRoZSBtYXJrZXIgb24gdGhlIG1hcCBjYW52YXMuXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlTWFya2VyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBHZXRQaXhlbHNGcm9tQ2xpY2soZTogTW91c2VFdmVudCB8IGFueSk6IElQb2ludDtcclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgYSBnZW8gbG9jYXRpb24gdG8gYSBwaXhlbCBsb2NhdGlvbiByZWxhdGl2ZSB0byB0aGUgbWFwIGNhbnZhcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IC0gRWl0aGVyIGEge0BsaW5rIE1hcE1hcmtlckRpcmVjdGl2ZX1cclxuICAgICAqIG9yIGEge0BsaW5rIElMYXRMb25nfSBmb3IgdGhlIGJhc2lzIG9mIHRyYW5zbGF0aW9uLlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCB3aGVuIGZ1bGxmaWxsZWQgY29udGFpbnMgYSB7QGxpbmsgSVBvaW50fVxyXG4gICAgICogd2l0aCB0aGUgcGl4ZWwgY29vcmRpbmF0ZXMgb2YgdGhlIE1hcE1hcmtlciBvciBJTGF0TG9uZyByZWxhdGl2ZSB0byB0aGUgbWFwIGNhbnZhcy5cclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVNYXJrZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIExvY2F0aW9uVG9Qb2ludCh0YXJnZXQ6IE1hcE1hcmtlckRpcmVjdGl2ZSB8IElMYXRMb25nKTogUHJvbWlzZTxJUG9pbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBhbmNob3IgcG9zaXRpb24gZm9yIHRoZSBtYXJrZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIC0gVGhlIHtAbGluayBNYXBNYXJrZXJEaXJlY3RpdmV9IG9iamVjdCBmb3Igd2hpY2ggdG8gdXBhdGUgdGhlIGFuY2hvci5cclxuICAgICAqIEFuY2hvciBpbmZvcm1hdGlvbiBpcyBwcmVzZW50IGluIHRoZSB1bmRlcmx5aW5nIHtAbGluayBNYXJrZXJ9IG1vZGVsIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsbGZpbGxlZCB3aGVuIHRoZSBhbmNob3IgcG9zaXRpb24gaGFzIGJlZW4gdXBkYXRlZC5cclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVNYXJrZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIFVwZGF0ZUFuY2hvcihtYXJrZXI6IE1hcE1hcmtlckRpcmVjdGl2ZSk6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgd2hldGhlciB0aGUgbWFya2VyIGlzIGRyYWdnYWJsZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gLSBUaGUge0BsaW5rIE1hcE1hcmtlckRpcmVjdGl2ZX0gb2JqZWN0IGZvciB3aGljaCB0byB1cGF0ZSBkcmFnYWJpbGl0eS5cclxuICAgICAqIERyYWdhYmlsaXR5IGluZm9ybWF0aW9uIGlzIHByZXNlbnQgaW4gdGhlIHVuZGVybHlpbmcge0BsaW5rIE1hcmtlcn0gbW9kZWwgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCBpcyBmdWxsZmlsbGVkIHdoZW4gdGhlIG1hcmtlciBoYXMgYmVlbiB1cGRhdGVkLlxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZU1hcmtlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgVXBkYXRlRHJhZ2dhYmxlKG1hcmtlcjogTWFwTWFya2VyRGlyZWN0aXZlKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgSWNvbiBvbiB0aGUgbWFya2VyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAtIFRoZSB7QGxpbmsgTWFwTWFya2VyRGlyZWN0aXZlfSBvYmplY3QgZm9yIHdoaWNoIHRvIHVwYXRlIHRoZSBpY29uLiBJY29uIGluZm9ybWF0aW9uIGlzIHByZXNlbnRcclxuICAgICAqIGluIHRoZSB1bmRlcmx5aW5nIHtAbGluayBNYXJrZXJ9IG1vZGVsIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsbGZpbGxlZCB3aGVuIHRoZSBpY29uIGluZm9ybWF0aW9uIGhhcyBiZWVuIHVwZGF0ZWQuXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlTWFya2VyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBVcGRhdGVJY29uKG1hcmtlcjogTWFwTWFya2VyRGlyZWN0aXZlKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgbGFiZWwgb24gdGhlIG1hcmtlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gLSBUaGUge0BsaW5rIE1hcE1hcmtlckRpcmVjdGl2ZX0gb2JqZWN0IGZvciB3aGljaCB0byB1cGF0ZSB0aGUgbGFiZWwuXHJcbiAgICAgKiBMYWJlbCBpbmZvcm1hdGlvbiBpcyBwcmVzZW50IGluIHRoZSB1bmRlcmx5aW5nIHtAbGluayBNYXJrZXJ9IG1vZGVsIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsbGZpbGxlZCB3aGVuIHRoZSBsYWJlbCBoYXMgYmVlbiB1cGRhdGVkLlxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZU1hcmtlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgVXBkYXRlTGFiZWwobWFya2VyOiBNYXBNYXJrZXJEaXJlY3RpdmUpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBnZW8gY29vcmRpbmF0ZXMgZm9yIHRoZSBtYXJrZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIC0gVGhlIHtAbGluayBNYXBNYXJrZXJEaXJlY3RpdmV9IG9iamVjdCBmb3Igd2hpY2ggdG8gdXBhdGUgdGhlIGNvb3JkaW5hdGVzLlxyXG4gICAgICogQ29vcmRpbmF0ZSBpbmZvcm1hdGlvbiBpcyBwcmVzZW50IGluIHRoZSB1bmRlcmx5aW5nIHtAbGluayBNYXJrZXJ9IG1vZGVsIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsbGZpbGxlZCB3aGVuIHRoZSBwb3NpdGlvbiBoYXMgYmVlbiB1cGRhdGVkLlxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZU1hcmtlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgVXBkYXRlTWFya2VyUG9zaXRpb24obWFya2VyOiBNYXBNYXJrZXJEaXJlY3RpdmUpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSB0aXRsZSBvbiB0aGUgbWFya2VyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAtIFRoZSB7QGxpbmsgTWFwTWFya2VyRGlyZWN0aXZlfSBvYmplY3QgZm9yIHdoaWNoIHRvIHVwYXRlIHRoZSB0aXRsZS5cclxuICAgICAqIFRpdGxlIGluZm9ybWF0aW9uIGlzIHByZXNlbnQgaW4gdGhlIHVuZGVybHlpbmcge0BsaW5rIE1hcmtlcn0gbW9kZWwgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCBpcyBmdWxsZmlsbGVkIHdoZW4gdGhlIHRpdGxlIGhhcyBiZWVuIHVwZGF0ZWQuXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlTWFya2VyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBVcGRhdGVUaXRsZShtYXJrZXI6IE1hcE1hcmtlckRpcmVjdGl2ZSk6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIHZpc2liaWxpdHkgb24gdGhlIG1hcmtlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gLSBUaGUge0BsaW5rIE1hcE1hcmtlckRpcmVjdGl2ZX0gb2JqZWN0IGZvciB3aGljaCB0byB1cGF0ZSB0aGUgdGl0bGUuXHJcbiAgICAgKiBUaXRsZSBpbmZvcm1hdGlvbiBpcyBwcmVzZW50IGluIHRoZSB1bmRlcmx5aW5nIHtAbGluayBNYXJrZXJ9IG1vZGVsIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsbGZpbGxlZCB3aGVuIHRoZSB0aXRsZSBoYXMgYmVlbiB1cGRhdGVkLlxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZU1hcmtlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgVXBkYXRlVmlzaWJsZShtYXJrZXI6IE1hcE1hcmtlckRpcmVjdGl2ZSk6IFByb21pc2U8dm9pZD47XHJcbn1cclxuIl19