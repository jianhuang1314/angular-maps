import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { IPolylineOptions } from '../../interfaces/ipolyline-options';
import { ILatLong } from '../../interfaces/ilatlong';
import { Polyline } from '../../models/polyline';
import { MapPolylineDirective } from '../../components/map-polyline';
import { PolylineService } from '../polyline.service';
import { MapService } from '../map.service';
import { LayerService } from '../layer.service';
/**
 * Concrete implementation of the Polyline Service abstract class for Bing Maps V8.
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class BingPolylineService implements PolylineService {
    private _mapService;
    private _layerService;
    private _zone;
    private _polylines;
    /**
     * Creates an instance of BingPolylineService.
     * @param _mapService - {@link MapService} instance. The concrete {@link BingMapService} implementation is expected.
     * @param _layerService - {@link LayerService} instance.
     * The concrete {@link BingLayerService} implementation is expected.
     * @param _zone - NgZone instance to support zone aware promises.
     *
     * @memberof BingPolylineService
     */
    constructor(_mapService: MapService, _layerService: LayerService, _zone: NgZone);
    /**
     * Adds a polyline to a map. Depending on the polyline context, the polyline will either by added to the map or a
     * corresponding layer.
     *
     * @param polyline - The {@link MapPolylineDirective} to be added.
     *
     * @memberof BingPolylineService
     */
    AddPolyline(polyline: MapPolylineDirective): void;
    /**
      * Registers an event delegate for a line.
      *
      * @param eventName - The name of the event to register (e.g. 'click')
      * @param polyline - The {@link MapPolylineDirective} for which to register the event.
      * @returns - Observable emiting an instance of T each time the event occurs.
      *
      * @memberof BingPolylineService
      */
    CreateEventObservable<T>(eventName: string, polyline: MapPolylineDirective): Observable<T>;
    /**
      * Deletes a polyline.
      *
      * @param polyline - {@link MapPolylineDirective} to be deleted.
      * @returns - A promise fullfilled once the polyline has been deleted.
      *
      * @memberof BingPolylineService
      */
    DeletePolyline(polyline: MapPolylineDirective): Promise<void>;
    /**
     * Obtains geo coordinates for the marker on the click location
     *
     * @abstract
     * @param e - The mouse event.
     * @returns - {@link ILatLong} containing the geo coordinates of the clicked marker.
     *
     * @memberof BingPolylineService
     */
    GetCoordinatesFromClick(e: Microsoft.Maps.IMouseEventArgs): ILatLong;
    /**
     * Obtains the marker model for the marker allowing access to native implementation functionatiliy.
     *
     * @param polyline - The {@link MapPolylineDirective} for which to obtain the polyline model.
     * @returns - A promise that when fullfilled contains the {@link Polyline}
     * implementation of the underlying platform. For complex paths, returns an array of polylines.
     *
     * @memberof BingPolylineService
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
     * @memberof BingPolylineService
     */
    SetOptions(polyline: MapPolylineDirective, options: IPolylineOptions): Promise<void>;
    /**
     * Updates the Polyline path
     *
     * @param polyline - {@link MapPolylineDirective} to be updated.
     * @returns - A promise fullfilled once the polyline has been updated.
     *
     * @memberof BingPolylineService
     */
    UpdatePolyline(polyline: MapPolylineDirective): Promise<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BingPolylineService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BingPolylineService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZy1wb2x5bGluZS5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImJpbmctcG9seWxpbmUuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBJUG9seWxpbmVPcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pcG9seWxpbmUtb3B0aW9ucyc7XHJcbmltcG9ydCB7IElMYXRMb25nIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbGF0bG9uZyc7XHJcbmltcG9ydCB7IFBvbHlsaW5lIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BvbHlsaW5lJztcclxuaW1wb3J0IHsgTWFwUG9seWxpbmVEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL21hcC1wb2x5bGluZSc7XHJcbmltcG9ydCB7IFBvbHlsaW5lU2VydmljZSB9IGZyb20gJy4uL3BvbHlsaW5lLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vbWFwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMYXllclNlcnZpY2UgfSBmcm9tICcuLi9sYXllci5zZXJ2aWNlJztcclxuLyoqXHJcbiAqIENvbmNyZXRlIGltcGxlbWVudGF0aW9uIG9mIHRoZSBQb2x5bGluZSBTZXJ2aWNlIGFic3RyYWN0IGNsYXNzIGZvciBCaW5nIE1hcHMgVjguXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEJpbmdQb2x5bGluZVNlcnZpY2UgaW1wbGVtZW50cyBQb2x5bGluZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfbWFwU2VydmljZTtcclxuICAgIHByaXZhdGUgX2xheWVyU2VydmljZTtcclxuICAgIHByaXZhdGUgX3pvbmU7XHJcbiAgICBwcml2YXRlIF9wb2x5bGluZXM7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQmluZ1BvbHlsaW5lU2VydmljZS5cclxuICAgICAqIEBwYXJhbSBfbWFwU2VydmljZSAtIHtAbGluayBNYXBTZXJ2aWNlfSBpbnN0YW5jZS4gVGhlIGNvbmNyZXRlIHtAbGluayBCaW5nTWFwU2VydmljZX0gaW1wbGVtZW50YXRpb24gaXMgZXhwZWN0ZWQuXHJcbiAgICAgKiBAcGFyYW0gX2xheWVyU2VydmljZSAtIHtAbGluayBMYXllclNlcnZpY2V9IGluc3RhbmNlLlxyXG4gICAgICogVGhlIGNvbmNyZXRlIHtAbGluayBCaW5nTGF5ZXJTZXJ2aWNlfSBpbXBsZW1lbnRhdGlvbiBpcyBleHBlY3RlZC5cclxuICAgICAqIEBwYXJhbSBfem9uZSAtIE5nWm9uZSBpbnN0YW5jZSB0byBzdXBwb3J0IHpvbmUgYXdhcmUgcHJvbWlzZXMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdQb2x5bGluZVNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoX21hcFNlcnZpY2U6IE1hcFNlcnZpY2UsIF9sYXllclNlcnZpY2U6IExheWVyU2VydmljZSwgX3pvbmU6IE5nWm9uZSk7XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBwb2x5bGluZSB0byBhIG1hcC4gRGVwZW5kaW5nIG9uIHRoZSBwb2x5bGluZSBjb250ZXh0LCB0aGUgcG9seWxpbmUgd2lsbCBlaXRoZXIgYnkgYWRkZWQgdG8gdGhlIG1hcCBvciBhXHJcbiAgICAgKiBjb3JyZXNwb25kaW5nIGxheWVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwb2x5bGluZSAtIFRoZSB7QGxpbmsgTWFwUG9seWxpbmVEaXJlY3RpdmV9IHRvIGJlIGFkZGVkLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nUG9seWxpbmVTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIEFkZFBvbHlsaW5lKHBvbHlsaW5lOiBNYXBQb2x5bGluZURpcmVjdGl2ZSk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgZGVsZWdhdGUgZm9yIGEgbGluZS5cclxuICAgICAgKlxyXG4gICAgICAqIEBwYXJhbSBldmVudE5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gcmVnaXN0ZXIgKGUuZy4gJ2NsaWNrJylcclxuICAgICAgKiBAcGFyYW0gcG9seWxpbmUgLSBUaGUge0BsaW5rIE1hcFBvbHlsaW5lRGlyZWN0aXZlfSBmb3Igd2hpY2ggdG8gcmVnaXN0ZXIgdGhlIGV2ZW50LlxyXG4gICAgICAqIEByZXR1cm5zIC0gT2JzZXJ2YWJsZSBlbWl0aW5nIGFuIGluc3RhbmNlIG9mIFQgZWFjaCB0aW1lIHRoZSBldmVudCBvY2N1cnMuXHJcbiAgICAgICpcclxuICAgICAgKiBAbWVtYmVyb2YgQmluZ1BvbHlsaW5lU2VydmljZVxyXG4gICAgICAqL1xyXG4gICAgQ3JlYXRlRXZlbnRPYnNlcnZhYmxlPFQ+KGV2ZW50TmFtZTogc3RyaW5nLCBwb2x5bGluZTogTWFwUG9seWxpbmVEaXJlY3RpdmUpOiBPYnNlcnZhYmxlPFQ+O1xyXG4gICAgLyoqXHJcbiAgICAgICogRGVsZXRlcyBhIHBvbHlsaW5lLlxyXG4gICAgICAqXHJcbiAgICAgICogQHBhcmFtIHBvbHlsaW5lIC0ge0BsaW5rIE1hcFBvbHlsaW5lRGlyZWN0aXZlfSB0byBiZSBkZWxldGVkLlxyXG4gICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIGZ1bGxmaWxsZWQgb25jZSB0aGUgcG9seWxpbmUgaGFzIGJlZW4gZGVsZXRlZC5cclxuICAgICAgKlxyXG4gICAgICAqIEBtZW1iZXJvZiBCaW5nUG9seWxpbmVTZXJ2aWNlXHJcbiAgICAgICovXHJcbiAgICBEZWxldGVQb2x5bGluZShwb2x5bGluZTogTWFwUG9seWxpbmVEaXJlY3RpdmUpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIGdlbyBjb29yZGluYXRlcyBmb3IgdGhlIG1hcmtlciBvbiB0aGUgY2xpY2sgbG9jYXRpb25cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBlIC0gVGhlIG1vdXNlIGV2ZW50LlxyXG4gICAgICogQHJldHVybnMgLSB7QGxpbmsgSUxhdExvbmd9IGNvbnRhaW5pbmcgdGhlIGdlbyBjb29yZGluYXRlcyBvZiB0aGUgY2xpY2tlZCBtYXJrZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdQb2x5bGluZVNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgR2V0Q29vcmRpbmF0ZXNGcm9tQ2xpY2soZTogTWljcm9zb2Z0Lk1hcHMuSU1vdXNlRXZlbnRBcmdzKTogSUxhdExvbmc7XHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgdGhlIG1hcmtlciBtb2RlbCBmb3IgdGhlIG1hcmtlciBhbGxvd2luZyBhY2Nlc3MgdG8gbmF0aXZlIGltcGxlbWVudGF0aW9uIGZ1bmN0aW9uYXRpbGl5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwb2x5bGluZSAtIFRoZSB7QGxpbmsgTWFwUG9seWxpbmVEaXJlY3RpdmV9IGZvciB3aGljaCB0byBvYnRhaW4gdGhlIHBvbHlsaW5lIG1vZGVsLlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCB3aGVuIGZ1bGxmaWxsZWQgY29udGFpbnMgdGhlIHtAbGluayBQb2x5bGluZX1cclxuICAgICAqIGltcGxlbWVudGF0aW9uIG9mIHRoZSB1bmRlcmx5aW5nIHBsYXRmb3JtLiBGb3IgY29tcGxleCBwYXRocywgcmV0dXJucyBhbiBhcnJheSBvZiBwb2x5bGluZXMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdQb2x5bGluZVNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgR2V0TmF0aXZlUG9seWxpbmUocG9seWxpbmU6IE1hcFBvbHlsaW5lRGlyZWN0aXZlKTogUHJvbWlzZTxQb2x5bGluZSB8IEFycmF5PFBvbHlsaW5lPj47XHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgcG9seWxpbmUgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcG9seWxpbmUgLSB7QGxpbmsgTWFwUG9seWxpbmVEaXJlY3RpdmV9IHRvIGJlIHVwZGF0ZWQuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIHtAbGluayBJUG9seWxpbmVPcHRpb25zfSBvYmplY3QgY29udGFpbmluZyB0aGUgb3B0aW9ucy4gT3B0aW9ucyB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZVxyXG4gICAgICogb3B0aW9ucyBhbHJlYWR5IG9uIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIGZ1bGxmaWxsZWQgb25jZSB0aGUgcG9seWxpbmUgb3B0aW9ucyBoYXZlIGJlZW4gc2V0LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nUG9seWxpbmVTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIFNldE9wdGlvbnMocG9seWxpbmU6IE1hcFBvbHlsaW5lRGlyZWN0aXZlLCBvcHRpb25zOiBJUG9seWxpbmVPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgUG9seWxpbmUgcGF0aFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwb2x5bGluZSAtIHtAbGluayBNYXBQb2x5bGluZURpcmVjdGl2ZX0gdG8gYmUgdXBkYXRlZC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIGZ1bGxmaWxsZWQgb25jZSB0aGUgcG9seWxpbmUgaGFzIGJlZW4gdXBkYXRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ1BvbHlsaW5lU2VydmljZVxyXG4gICAgICovXHJcbiAgICBVcGRhdGVQb2x5bGluZShwb2x5bGluZTogTWFwUG9seWxpbmVEaXJlY3RpdmUpOiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcbiJdfQ==