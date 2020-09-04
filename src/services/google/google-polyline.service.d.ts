import { ILatLong } from '../../interfaces/ilatlong';
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { IPolylineOptions } from '../../interfaces/ipolyline-options';
import { Polyline } from '../../models/polyline';
import { MapPolylineDirective } from '../../components/map-polyline';
import { PolylineService } from '../polyline.service';
import { MapService } from '../map.service';
import { LayerService } from '../layer.service';
/**
 * Concrete implementation of the Polyline Service abstract class for Google Maps.
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class GooglePolylineService implements PolylineService {
    private _mapService;
    private _layerService;
    private _zone;
    private _polylines;
    /**
     * Creates an instance of GooglePolylineService.
     * @param _mapService - {@link MapService} instance. The concrete {@link GoogleMapService} implementation is expected.
     * @param _layerService - {@link LayerService} instance.
     * The concrete {@link GoogleLayerService} implementation is expected.
     * @param _zone - NgZone instance to support zone aware promises.
     *
     * @memberof GooglePolylineService
     */
    constructor(_mapService: MapService, _layerService: LayerService, _zone: NgZone);
    /**
     * Adds a polyline to a map. Depending on the polyline context, the polyline will either by added to the map or a
     * correcsponding layer.
     *
     * @param polyline - The {@link MapPolylineDirective} to be added.
     *
     * @memberof GooglePolylineService
     */
    AddPolyline(polyline: MapPolylineDirective): void;
    /**
      * Registers an event delegate for a line.
      *
      * @param eventName - The name of the event to register (e.g. 'click')
      * @param polyline - The {@link MapPolylineDirective} for which to register the event.
      * @returns - Observable emiting an instance of T each time the event occurs.
      *
      * @memberof GooglePolylineService
      */
    CreateEventObservable<T>(eventName: string, polyline: MapPolylineDirective): Observable<T>;
    /**
      * Deletes a polyline.
      *
      * @param polyline - {@link MapPolylineDirective} to be deleted.
      * @returns - A promise fullfilled once the polyline has been deleted.
      *
      * @memberof GooglePolylineService
      */
    DeletePolyline(polyline: MapPolylineDirective): Promise<void>;
    /**
     * Obtains geo coordinates for the line on the click location
     *
     * @abstract
     * @param e - The mouse event.
     * @returns - {@link ILatLong} containing the geo coordinates of the clicked line.
     *
     * @memberof GooglePolylineService
     */
    GetCoordinatesFromClick(e: MouseEvent | any): ILatLong;
    /**
     * Obtains the polyline model for the line allowing access to native implementation functionatiliy.
     *
     * @param polyline - The {@link MapPolylineDirective} for which to obtain the polyline model.
     * @returns - A promise that when fullfilled contains the {@link Polyline}
     * implementation of the underlying platform. For complex paths, returns an array of polylines.
     *
     * @memberof GooglePolylineService
     */
    GetNativePolyline(polyline: MapPolylineDirective): Promise<Polyline | Array<Polyline>>;
    /**
     * Set the polyline options.
     *
     * @param polyline - {@link MapPolylineDirective} to be updated.
     * @param options - {@link IPolylineOptions} object containing the options. Options will be merged with the
     * options already on the underlying object.
     * @returns - A promise fullfilled once the polyline options have been set.
     *
     * @memberof GooglePolylineService
     */
    SetOptions(polyline: MapPolylineDirective, options: IPolylineOptions): Promise<void>;
    /**
     * Updates the Polyline path
     *
     * @param polyline - {@link MapPolylineDirective} to be updated.
     * @returns - A promise fullfilled once the polyline has been updated.
     *
     * @memberof GooglePolylineService
     */
    UpdatePolyline(polyline: MapPolylineDirective): Promise<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GooglePolylineService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<GooglePolylineService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXBvbHlsaW5lLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiZ29vZ2xlLXBvbHlsaW5lLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUxhdExvbmcgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2lsYXRsb25nJztcclxuaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSVBvbHlsaW5lT3B0aW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaXBvbHlsaW5lLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBQb2x5bGluZSB9IGZyb20gJy4uLy4uL21vZGVscy9wb2x5bGluZSc7XHJcbmltcG9ydCB7IE1hcFBvbHlsaW5lRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tYXAtcG9seWxpbmUnO1xyXG5pbXBvcnQgeyBQb2x5bGluZVNlcnZpY2UgfSBmcm9tICcuLi9wb2x5bGluZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL21hcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGF5ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbGF5ZXIuc2VydmljZSc7XHJcbi8qKlxyXG4gKiBDb25jcmV0ZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUG9seWxpbmUgU2VydmljZSBhYnN0cmFjdCBjbGFzcyBmb3IgR29vZ2xlIE1hcHMuXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEdvb2dsZVBvbHlsaW5lU2VydmljZSBpbXBsZW1lbnRzIFBvbHlsaW5lU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9tYXBTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBfbGF5ZXJTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBfem9uZTtcclxuICAgIHByaXZhdGUgX3BvbHlsaW5lcztcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBHb29nbGVQb2x5bGluZVNlcnZpY2UuXHJcbiAgICAgKiBAcGFyYW0gX21hcFNlcnZpY2UgLSB7QGxpbmsgTWFwU2VydmljZX0gaW5zdGFuY2UuIFRoZSBjb25jcmV0ZSB7QGxpbmsgR29vZ2xlTWFwU2VydmljZX0gaW1wbGVtZW50YXRpb24gaXMgZXhwZWN0ZWQuXHJcbiAgICAgKiBAcGFyYW0gX2xheWVyU2VydmljZSAtIHtAbGluayBMYXllclNlcnZpY2V9IGluc3RhbmNlLlxyXG4gICAgICogVGhlIGNvbmNyZXRlIHtAbGluayBHb29nbGVMYXllclNlcnZpY2V9IGltcGxlbWVudGF0aW9uIGlzIGV4cGVjdGVkLlxyXG4gICAgICogQHBhcmFtIF96b25lIC0gTmdab25lIGluc3RhbmNlIHRvIHN1cHBvcnQgem9uZSBhd2FyZSBwcm9taXNlcy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlUG9seWxpbmVTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKF9tYXBTZXJ2aWNlOiBNYXBTZXJ2aWNlLCBfbGF5ZXJTZXJ2aWNlOiBMYXllclNlcnZpY2UsIF96b25lOiBOZ1pvbmUpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgcG9seWxpbmUgdG8gYSBtYXAuIERlcGVuZGluZyBvbiB0aGUgcG9seWxpbmUgY29udGV4dCwgdGhlIHBvbHlsaW5lIHdpbGwgZWl0aGVyIGJ5IGFkZGVkIHRvIHRoZSBtYXAgb3IgYVxyXG4gICAgICogY29ycmVjc3BvbmRpbmcgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHBvbHlsaW5lIC0gVGhlIHtAbGluayBNYXBQb2x5bGluZURpcmVjdGl2ZX0gdG8gYmUgYWRkZWQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZVBvbHlsaW5lU2VydmljZVxyXG4gICAgICovXHJcbiAgICBBZGRQb2x5bGluZShwb2x5bGluZTogTWFwUG9seWxpbmVEaXJlY3RpdmUpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGRlbGVnYXRlIGZvciBhIGxpbmUuXHJcbiAgICAgICpcclxuICAgICAgKiBAcGFyYW0gZXZlbnROYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIHJlZ2lzdGVyIChlLmcuICdjbGljaycpXHJcbiAgICAgICogQHBhcmFtIHBvbHlsaW5lIC0gVGhlIHtAbGluayBNYXBQb2x5bGluZURpcmVjdGl2ZX0gZm9yIHdoaWNoIHRvIHJlZ2lzdGVyIHRoZSBldmVudC5cclxuICAgICAgKiBAcmV0dXJucyAtIE9ic2VydmFibGUgZW1pdGluZyBhbiBpbnN0YW5jZSBvZiBUIGVhY2ggdGltZSB0aGUgZXZlbnQgb2NjdXJzLlxyXG4gICAgICAqXHJcbiAgICAgICogQG1lbWJlcm9mIEdvb2dsZVBvbHlsaW5lU2VydmljZVxyXG4gICAgICAqL1xyXG4gICAgQ3JlYXRlRXZlbnRPYnNlcnZhYmxlPFQ+KGV2ZW50TmFtZTogc3RyaW5nLCBwb2x5bGluZTogTWFwUG9seWxpbmVEaXJlY3RpdmUpOiBPYnNlcnZhYmxlPFQ+O1xyXG4gICAgLyoqXHJcbiAgICAgICogRGVsZXRlcyBhIHBvbHlsaW5lLlxyXG4gICAgICAqXHJcbiAgICAgICogQHBhcmFtIHBvbHlsaW5lIC0ge0BsaW5rIE1hcFBvbHlsaW5lRGlyZWN0aXZlfSB0byBiZSBkZWxldGVkLlxyXG4gICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIGZ1bGxmaWxsZWQgb25jZSB0aGUgcG9seWxpbmUgaGFzIGJlZW4gZGVsZXRlZC5cclxuICAgICAgKlxyXG4gICAgICAqIEBtZW1iZXJvZiBHb29nbGVQb2x5bGluZVNlcnZpY2VcclxuICAgICAgKi9cclxuICAgIERlbGV0ZVBvbHlsaW5lKHBvbHlsaW5lOiBNYXBQb2x5bGluZURpcmVjdGl2ZSk6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgZ2VvIGNvb3JkaW5hdGVzIGZvciB0aGUgbGluZSBvbiB0aGUgY2xpY2sgbG9jYXRpb25cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBlIC0gVGhlIG1vdXNlIGV2ZW50LlxyXG4gICAgICogQHJldHVybnMgLSB7QGxpbmsgSUxhdExvbmd9IGNvbnRhaW5pbmcgdGhlIGdlbyBjb29yZGluYXRlcyBvZiB0aGUgY2xpY2tlZCBsaW5lLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVQb2x5bGluZVNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgR2V0Q29vcmRpbmF0ZXNGcm9tQ2xpY2soZTogTW91c2VFdmVudCB8IGFueSk6IElMYXRMb25nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIHRoZSBwb2x5bGluZSBtb2RlbCBmb3IgdGhlIGxpbmUgYWxsb3dpbmcgYWNjZXNzIHRvIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiBmdW5jdGlvbmF0aWxpeS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcG9seWxpbmUgLSBUaGUge0BsaW5rIE1hcFBvbHlsaW5lRGlyZWN0aXZlfSBmb3Igd2hpY2ggdG8gb2J0YWluIHRoZSBwb2x5bGluZSBtb2RlbC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgd2hlbiBmdWxsZmlsbGVkIGNvbnRhaW5zIHRoZSB7QGxpbmsgUG9seWxpbmV9XHJcbiAgICAgKiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgdW5kZXJseWluZyBwbGF0Zm9ybS4gRm9yIGNvbXBsZXggcGF0aHMsIHJldHVybnMgYW4gYXJyYXkgb2YgcG9seWxpbmVzLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVQb2x5bGluZVNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgR2V0TmF0aXZlUG9seWxpbmUocG9seWxpbmU6IE1hcFBvbHlsaW5lRGlyZWN0aXZlKTogUHJvbWlzZTxQb2x5bGluZSB8IEFycmF5PFBvbHlsaW5lPj47XHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgcG9seWxpbmUgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcG9seWxpbmUgLSB7QGxpbmsgTWFwUG9seWxpbmVEaXJlY3RpdmV9IHRvIGJlIHVwZGF0ZWQuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIHtAbGluayBJUG9seWxpbmVPcHRpb25zfSBvYmplY3QgY29udGFpbmluZyB0aGUgb3B0aW9ucy4gT3B0aW9ucyB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZVxyXG4gICAgICogb3B0aW9ucyBhbHJlYWR5IG9uIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIGZ1bGxmaWxsZWQgb25jZSB0aGUgcG9seWxpbmUgb3B0aW9ucyBoYXZlIGJlZW4gc2V0LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVQb2x5bGluZVNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgU2V0T3B0aW9ucyhwb2x5bGluZTogTWFwUG9seWxpbmVEaXJlY3RpdmUsIG9wdGlvbnM6IElQb2x5bGluZU9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBQb2x5bGluZSBwYXRoXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHBvbHlsaW5lIC0ge0BsaW5rIE1hcFBvbHlsaW5lRGlyZWN0aXZlfSB0byBiZSB1cGRhdGVkLlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgZnVsbGZpbGxlZCBvbmNlIHRoZSBwb2x5bGluZSBoYXMgYmVlbiB1cGRhdGVkLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVQb2x5bGluZVNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgVXBkYXRlUG9seWxpbmUocG9seWxpbmU6IE1hcFBvbHlsaW5lRGlyZWN0aXZlKTogUHJvbWlzZTx2b2lkPjtcclxufVxyXG4iXX0=