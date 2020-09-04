import { Observable } from 'rxjs';
import { IPolylineOptions } from '../interfaces/ipolyline-options';
import { ILatLong } from '../interfaces/ilatlong';
import { Polyline } from '../models/polyline';
import { MapPolylineDirective } from '../components/map-polyline';
/**
 * The abstract class represents the contract defintions for a polyline service to be implemented by an acutaly underlying
 * map architecture.
 *
 * @export
 * @abstract
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class PolylineService {
    /**
     * Adds a polyline to a map. Depending on the polyline context, the polyline will either by added to the map or a
     * correcsponding layer.
     *
     * @abstract
     * @param polyline - The {@link MapPolylineDirective} to be added.
     *
     * @memberof PolylineService
     */
    abstract AddPolyline(polyline: MapPolylineDirective): void;
    /**
      * Registers an event delegate for a marker.
      *
      * @abstract
      * @param eventName - The name of the event to register (e.g. 'click')
      * @param polyline - The {@link MapPolylineDirective} for which to register the event.
      * @returns - Observable emiting an instance of T each time the event occurs.
      *
      * @memberof PolylineService
      */
    abstract CreateEventObservable<T>(eventName: string, polyline: MapPolylineDirective): Observable<T>;
    /**
      * Deletes a polyline.
      *
      * @abstract
      * @param polyline - {@link MapPolylineDirective} to be deleted.
      * @returns - A promise fullfilled once the polyline has been deleted.
      *
      * @memberof PolylineService
      */
    abstract DeletePolyline(polyline: MapPolylineDirective): Promise<void>;
    /**
     * Obtains geo coordinates for the marker on the click location
     *
     * @abstract
     * @param e - The mouse event.
     * @returns - {@link ILatLong} containing the geo coordinates of the clicked marker.
     *
     * @memberof MarkerService
     */
    abstract GetCoordinatesFromClick(e: MouseEvent | any): ILatLong;
    /**
     * Obtains the polyline model for the polyline allowing access to native implementation functionatiliy.
     *
     * @abstract
     * @param polyline - The {@link MapPolylineDirective} for which to obtain the polyline model.
     * @returns - A promise that when fullfilled contains the {@link Polyline} implementation (or an
     * array of polylines) for complex paths of the underlying platform.
     *
     * @memberof PolylineService
     */
    abstract GetNativePolyline(polyline: MapPolylineDirective): Promise<Polyline | Array<Polyline>>;
    /**
     * Set the polyline options.
     *
     * @abstract
     * @param polyline - {@link MapPolylineDirective} to be updated.
     * @param options - {@link IPolylineOptions} object containing the options. Options will be merged with the
     * options already on the underlying object.
     * @returns - A promise fullfilled once the polyline options have been set.
     *
     * @memberof PolylineService
     */
    abstract SetOptions(polyline: MapPolylineDirective, options: IPolylineOptions): Promise<void>;
    /**
     * Updates the Polyline path
     *
     * @abstract
     * @param polyline - {@link MapPolylineDirective} to be updated.
     * @returns - A promise fullfilled once the polyline has been updated.
     *
     * @memberof PolylineService
     */
    abstract UpdatePolyline(polyline: MapPolylineDirective): Promise<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PolylineService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<PolylineService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJwb2x5bGluZS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IElQb2x5bGluZU9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2lwb2x5bGluZS1vcHRpb25zJztcclxuaW1wb3J0IHsgSUxhdExvbmcgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2lsYXRsb25nJztcclxuaW1wb3J0IHsgUG9seWxpbmUgfSBmcm9tICcuLi9tb2RlbHMvcG9seWxpbmUnO1xyXG5pbXBvcnQgeyBNYXBQb2x5bGluZURpcmVjdGl2ZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWFwLXBvbHlsaW5lJztcclxuLyoqXHJcbiAqIFRoZSBhYnN0cmFjdCBjbGFzcyByZXByZXNlbnRzIHRoZSBjb250cmFjdCBkZWZpbnRpb25zIGZvciBhIHBvbHlsaW5lIHNlcnZpY2UgdG8gYmUgaW1wbGVtZW50ZWQgYnkgYW4gYWN1dGFseSB1bmRlcmx5aW5nXHJcbiAqIG1hcCBhcmNoaXRlY3R1cmUuXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGFic3RyYWN0XHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBQb2x5bGluZVNlcnZpY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgcG9seWxpbmUgdG8gYSBtYXAuIERlcGVuZGluZyBvbiB0aGUgcG9seWxpbmUgY29udGV4dCwgdGhlIHBvbHlsaW5lIHdpbGwgZWl0aGVyIGJ5IGFkZGVkIHRvIHRoZSBtYXAgb3IgYVxyXG4gICAgICogY29ycmVjc3BvbmRpbmcgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gcG9seWxpbmUgLSBUaGUge0BsaW5rIE1hcFBvbHlsaW5lRGlyZWN0aXZlfSB0byBiZSBhZGRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUG9seWxpbmVTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IEFkZFBvbHlsaW5lKHBvbHlsaW5lOiBNYXBQb2x5bGluZURpcmVjdGl2ZSk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgZGVsZWdhdGUgZm9yIGEgbWFya2VyLlxyXG4gICAgICAqXHJcbiAgICAgICogQGFic3RyYWN0XHJcbiAgICAgICogQHBhcmFtIGV2ZW50TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byByZWdpc3RlciAoZS5nLiAnY2xpY2snKVxyXG4gICAgICAqIEBwYXJhbSBwb2x5bGluZSAtIFRoZSB7QGxpbmsgTWFwUG9seWxpbmVEaXJlY3RpdmV9IGZvciB3aGljaCB0byByZWdpc3RlciB0aGUgZXZlbnQuXHJcbiAgICAgICogQHJldHVybnMgLSBPYnNlcnZhYmxlIGVtaXRpbmcgYW4gaW5zdGFuY2Ugb2YgVCBlYWNoIHRpbWUgdGhlIGV2ZW50IG9jY3Vycy5cclxuICAgICAgKlxyXG4gICAgICAqIEBtZW1iZXJvZiBQb2x5bGluZVNlcnZpY2VcclxuICAgICAgKi9cclxuICAgIGFic3RyYWN0IENyZWF0ZUV2ZW50T2JzZXJ2YWJsZTxUPihldmVudE5hbWU6IHN0cmluZywgcG9seWxpbmU6IE1hcFBvbHlsaW5lRGlyZWN0aXZlKTogT2JzZXJ2YWJsZTxUPjtcclxuICAgIC8qKlxyXG4gICAgICAqIERlbGV0ZXMgYSBwb2x5bGluZS5cclxuICAgICAgKlxyXG4gICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICAqIEBwYXJhbSBwb2x5bGluZSAtIHtAbGluayBNYXBQb2x5bGluZURpcmVjdGl2ZX0gdG8gYmUgZGVsZXRlZC5cclxuICAgICAgKiBAcmV0dXJucyAtIEEgcHJvbWlzZSBmdWxsZmlsbGVkIG9uY2UgdGhlIHBvbHlsaW5lIGhhcyBiZWVuIGRlbGV0ZWQuXHJcbiAgICAgICpcclxuICAgICAgKiBAbWVtYmVyb2YgUG9seWxpbmVTZXJ2aWNlXHJcbiAgICAgICovXHJcbiAgICBhYnN0cmFjdCBEZWxldGVQb2x5bGluZShwb2x5bGluZTogTWFwUG9seWxpbmVEaXJlY3RpdmUpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIGdlbyBjb29yZGluYXRlcyBmb3IgdGhlIG1hcmtlciBvbiB0aGUgY2xpY2sgbG9jYXRpb25cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBlIC0gVGhlIG1vdXNlIGV2ZW50LlxyXG4gICAgICogQHJldHVybnMgLSB7QGxpbmsgSUxhdExvbmd9IGNvbnRhaW5pbmcgdGhlIGdlbyBjb29yZGluYXRlcyBvZiB0aGUgY2xpY2tlZCBtYXJrZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcmtlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgR2V0Q29vcmRpbmF0ZXNGcm9tQ2xpY2soZTogTW91c2VFdmVudCB8IGFueSk6IElMYXRMb25nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIHRoZSBwb2x5bGluZSBtb2RlbCBmb3IgdGhlIHBvbHlsaW5lIGFsbG93aW5nIGFjY2VzcyB0byBuYXRpdmUgaW1wbGVtZW50YXRpb24gZnVuY3Rpb25hdGlsaXkuXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gcG9seWxpbmUgLSBUaGUge0BsaW5rIE1hcFBvbHlsaW5lRGlyZWN0aXZlfSBmb3Igd2hpY2ggdG8gb2J0YWluIHRoZSBwb2x5bGluZSBtb2RlbC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgd2hlbiBmdWxsZmlsbGVkIGNvbnRhaW5zIHRoZSB7QGxpbmsgUG9seWxpbmV9IGltcGxlbWVudGF0aW9uIChvciBhblxyXG4gICAgICogYXJyYXkgb2YgcG9seWxpbmVzKSBmb3IgY29tcGxleCBwYXRocyBvZiB0aGUgdW5kZXJseWluZyBwbGF0Zm9ybS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUG9seWxpbmVTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IEdldE5hdGl2ZVBvbHlsaW5lKHBvbHlsaW5lOiBNYXBQb2x5bGluZURpcmVjdGl2ZSk6IFByb21pc2U8UG9seWxpbmUgfCBBcnJheTxQb2x5bGluZT4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIHBvbHlsaW5lIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gcG9seWxpbmUgLSB7QGxpbmsgTWFwUG9seWxpbmVEaXJlY3RpdmV9IHRvIGJlIHVwZGF0ZWQuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIHtAbGluayBJUG9seWxpbmVPcHRpb25zfSBvYmplY3QgY29udGFpbmluZyB0aGUgb3B0aW9ucy4gT3B0aW9ucyB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZVxyXG4gICAgICogb3B0aW9ucyBhbHJlYWR5IG9uIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIGZ1bGxmaWxsZWQgb25jZSB0aGUgcG9seWxpbmUgb3B0aW9ucyBoYXZlIGJlZW4gc2V0LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBQb2x5bGluZVNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgU2V0T3B0aW9ucyhwb2x5bGluZTogTWFwUG9seWxpbmVEaXJlY3RpdmUsIG9wdGlvbnM6IElQb2x5bGluZU9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBQb2x5bGluZSBwYXRoXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gcG9seWxpbmUgLSB7QGxpbmsgTWFwUG9seWxpbmVEaXJlY3RpdmV9IHRvIGJlIHVwZGF0ZWQuXHJcbiAgICAgKiBAcmV0dXJucyAtIEEgcHJvbWlzZSBmdWxsZmlsbGVkIG9uY2UgdGhlIHBvbHlsaW5lIGhhcyBiZWVuIHVwZGF0ZWQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFBvbHlsaW5lU2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBVcGRhdGVQb2x5bGluZShwb2x5bGluZTogTWFwUG9seWxpbmVEaXJlY3RpdmUpOiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcbiJdfQ==