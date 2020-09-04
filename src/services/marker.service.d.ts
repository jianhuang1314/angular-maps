import { Observable } from 'rxjs';
import { IPoint } from '../interfaces/ipoint';
import { ILatLong } from '../interfaces/ilatlong';
import { Marker } from '../models/marker';
import { MapMarkerDirective } from '../components/map-marker';
/**
 * The abstract class represents the contract defintions for a marker service to be implemented by an acutaly underlying
 * map architecture.
 *
 * @export
 * @abstract
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class MarkerService {
    /**
     * Adds a marker. Depending on the marker context, the marker will either by added to the map or a correcsponding layer.
     *
     * @abstract
     * @param marker - The {@link MapMarkerDirective} to be added.
     *
     * @memberof MarkerService
     */
    abstract AddMarker(marker: MapMarkerDirective): void;
    /**
     * Registers an event delegate for a marker.
     *
     * @abstract
     * @param eventName - The name of the event to register (e.g. 'click')
     * @param marker - The {@link MapMarker} for which to register the event.
     * @returns - Observable emiting an instance of T each time the event occurs.
     *
     * @memberof MarkerService
     */
    abstract CreateEventObservable<T>(eventName: string, marker: MapMarkerDirective): Observable<T>;
    /**
     * Deletes a marker.
     *
     * @abstract
     * @param marker - {@link MapMarkerDirective} to be deleted.
     * @returns - A promise fullfilled once the marker has been deleted.
     *
     * @memberof MarkerService
     */
    abstract DeleteMarker(marker: MapMarkerDirective): Promise<void>;
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
     * Obtains the marker model for the marker allowing access to native implementation functionatiliy.
     *
     * @abstract
     * @param marker - The {@link MapMarkerDirective} for which to obtain the marker model.
     * @returns - A promise that when fullfilled contains the {@link Marker} implementation of the underlying platform.
     *
     * @memberof MarkerService
     */
    abstract GetNativeMarker(marker: MapMarkerDirective): Promise<Marker>;
    /**
     * Obtains the marker pixel location for the marker on the click location
     *
     * @abstract
     * @param e - The mouse event.
     * @returns - {@link ILatLong} containing the pixels of the marker on the map canvas.
     *
     * @memberof MarkerService
     */
    abstract GetPixelsFromClick(e: MouseEvent | any): IPoint;
    /**
     * Converts a geo location to a pixel location relative to the map canvas.
     *
     * @abstract
     * @param target - Either a {@link MapMarkerDirective} or a {@link ILatLong}
     * for the basis of translation.
     * @returns - A promise that when fullfilled contains a {@link IPoint}
     * with the pixel coordinates of the MapMarkerDirective or ILatLong relative to the map canvas.
     *
     * @memberof MarkerService
     */
    abstract LocationToPoint(target: MapMarkerDirective | ILatLong): Promise<IPoint>;
    /**
     * Updates the anchor position for the marker.
     *
     * @abstract
     * @param - The {@link MapMarkerDirective} object for which to upate the anchor.
     * Anchor information is present in the underlying {@link Marker} model object.
     * @returns - A promise that is fullfilled when the anchor position has been updated.
     *
     * @memberof MarkerService
     */
    abstract UpdateAnchor(maker: MapMarkerDirective): Promise<void>;
    /**
     * Updates whether the marker is draggable.
     *
     * @abstract
     * @param - The {@link MapMarkerDirective} object for which to upate dragability.
     * Dragability information is present in the underlying {@link Marker} model object.
     * @returns - A promise that is fullfilled when the marker has been updated.
     *
     * @memberof MarkerService
     */
    abstract UpdateDraggable(marker: MapMarkerDirective): Promise<void>;
    /**
     * Updates the Icon on the marker.
     *
     * @abstract
     * @param - The {@link MapMarkerDirective} object for which to upate the icon.
     * Icon information is present in the underlying {@link Marker} model object.
     * @returns - A promise that is fullfilled when the icon information has been updated.
     *
     * @memberof MarkerService
     */
    abstract UpdateIcon(marker: MapMarkerDirective): Promise<void>;
    /**
     * Updates the label on the marker.
     *
     * @abstract
     * @param - The {@link MapMarkerDirective} object for which to upate the label.
     * Label information is present in the underlying {@link Marker} model object.
     * @returns - A promise that is fullfilled when the label has been updated.
     *
     * @memberof MarkerService
     */
    abstract UpdateLabel(marker: MapMarkerDirective): Promise<void>;
    /**
     * Updates the geo coordinates for the marker.
     *
     * @abstract
     * @param - The {@link MapMarkerDirective} object for which to upate the coordinates.
     * Coordinate information is present in the underlying {@link Marker} model object.
     * @returns - A promise that is fullfilled when the position has been updated.
     *
     * @memberof MarkerService
     */
    abstract UpdateMarkerPosition(marker: MapMarkerDirective): Promise<void>;
    /**
     * Updates the title on the marker.
     *
     * @abstract
     * @param - The {@link MapMarkerDirective} object for which to upate the title.
     * Title information is present in the underlying {@link Marker} model object.
     * @returns - A promise that is fullfilled when the title has been updated.
     *
     * @memberof MarkerService
     */
    abstract UpdateTitle(marker: MapMarkerDirective): Promise<void>;
    /**
     * Updates the visibility on the marker.
     *
     * @abstract
     * @param - The {@link MapMarkerDirective} object for which to upate the visibility.
     * Visibility information is present in the underlying {@link Marker} model object.
     * @returns - A promise that is fullfilled when the visibility has been updated.
     *
     * @memberof MarkerService
     */
    abstract UpdateVisible(marker: MapMarkerDirective): Promise<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MarkerService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<MarkerService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsibWFya2VyLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSVBvaW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pcG9pbnQnO1xyXG5pbXBvcnQgeyBJTGF0TG9uZyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaWxhdGxvbmcnO1xyXG5pbXBvcnQgeyBNYXJrZXIgfSBmcm9tICcuLi9tb2RlbHMvbWFya2VyJztcclxuaW1wb3J0IHsgTWFwTWFya2VyRGlyZWN0aXZlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9tYXAtbWFya2VyJztcclxuLyoqXHJcbiAqIFRoZSBhYnN0cmFjdCBjbGFzcyByZXByZXNlbnRzIHRoZSBjb250cmFjdCBkZWZpbnRpb25zIGZvciBhIG1hcmtlciBzZXJ2aWNlIHRvIGJlIGltcGxlbWVudGVkIGJ5IGFuIGFjdXRhbHkgdW5kZXJseWluZ1xyXG4gKiBtYXAgYXJjaGl0ZWN0dXJlLlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBhYnN0cmFjdFxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgTWFya2VyU2VydmljZSB7XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBtYXJrZXIuIERlcGVuZGluZyBvbiB0aGUgbWFya2VyIGNvbnRleHQsIHRoZSBtYXJrZXIgd2lsbCBlaXRoZXIgYnkgYWRkZWQgdG8gdGhlIG1hcCBvciBhIGNvcnJlY3Nwb25kaW5nIGxheWVyLlxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQHBhcmFtIG1hcmtlciAtIFRoZSB7QGxpbmsgTWFwTWFya2VyRGlyZWN0aXZlfSB0byBiZSBhZGRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFya2VyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBBZGRNYXJrZXIobWFya2VyOiBNYXBNYXJrZXJEaXJlY3RpdmUpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgZGVsZWdhdGUgZm9yIGEgbWFya2VyLlxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byByZWdpc3RlciAoZS5nLiAnY2xpY2snKVxyXG4gICAgICogQHBhcmFtIG1hcmtlciAtIFRoZSB7QGxpbmsgTWFwTWFya2VyfSBmb3Igd2hpY2ggdG8gcmVnaXN0ZXIgdGhlIGV2ZW50LlxyXG4gICAgICogQHJldHVybnMgLSBPYnNlcnZhYmxlIGVtaXRpbmcgYW4gaW5zdGFuY2Ugb2YgVCBlYWNoIHRpbWUgdGhlIGV2ZW50IG9jY3Vycy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFya2VyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBDcmVhdGVFdmVudE9ic2VydmFibGU8VD4oZXZlbnROYW1lOiBzdHJpbmcsIG1hcmtlcjogTWFwTWFya2VyRGlyZWN0aXZlKTogT2JzZXJ2YWJsZTxUPjtcclxuICAgIC8qKlxyXG4gICAgICogRGVsZXRlcyBhIG1hcmtlci5cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBtYXJrZXIgLSB7QGxpbmsgTWFwTWFya2VyRGlyZWN0aXZlfSB0byBiZSBkZWxldGVkLlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgZnVsbGZpbGxlZCBvbmNlIHRoZSBtYXJrZXIgaGFzIGJlZW4gZGVsZXRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFya2VyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBEZWxldGVNYXJrZXIobWFya2VyOiBNYXBNYXJrZXJEaXJlY3RpdmUpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIGdlbyBjb29yZGluYXRlcyBmb3IgdGhlIG1hcmtlciBvbiB0aGUgY2xpY2sgbG9jYXRpb25cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBlIC0gVGhlIG1vdXNlIGV2ZW50LlxyXG4gICAgICogQHJldHVybnMgLSB7QGxpbmsgSUxhdExvbmd9IGNvbnRhaW5pbmcgdGhlIGdlbyBjb29yZGluYXRlcyBvZiB0aGUgY2xpY2tlZCBtYXJrZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcmtlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgR2V0Q29vcmRpbmF0ZXNGcm9tQ2xpY2soZTogTW91c2VFdmVudCB8IGFueSk6IElMYXRMb25nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIHRoZSBtYXJrZXIgbW9kZWwgZm9yIHRoZSBtYXJrZXIgYWxsb3dpbmcgYWNjZXNzIHRvIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiBmdW5jdGlvbmF0aWxpeS5cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBtYXJrZXIgLSBUaGUge0BsaW5rIE1hcE1hcmtlckRpcmVjdGl2ZX0gZm9yIHdoaWNoIHRvIG9idGFpbiB0aGUgbWFya2VyIG1vZGVsLlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCB3aGVuIGZ1bGxmaWxsZWQgY29udGFpbnMgdGhlIHtAbGluayBNYXJrZXJ9IGltcGxlbWVudGF0aW9uIG9mIHRoZSB1bmRlcmx5aW5nIHBsYXRmb3JtLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXJrZXJTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IEdldE5hdGl2ZU1hcmtlcihtYXJrZXI6IE1hcE1hcmtlckRpcmVjdGl2ZSk6IFByb21pc2U8TWFya2VyPjtcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgbWFya2VyIHBpeGVsIGxvY2F0aW9uIGZvciB0aGUgbWFya2VyIG9uIHRoZSBjbGljayBsb2NhdGlvblxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQHBhcmFtIGUgLSBUaGUgbW91c2UgZXZlbnQuXHJcbiAgICAgKiBAcmV0dXJucyAtIHtAbGluayBJTGF0TG9uZ30gY29udGFpbmluZyB0aGUgcGl4ZWxzIG9mIHRoZSBtYXJrZXIgb24gdGhlIG1hcCBjYW52YXMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcmtlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgR2V0UGl4ZWxzRnJvbUNsaWNrKGU6IE1vdXNlRXZlbnQgfCBhbnkpOiBJUG9pbnQ7XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIGEgZ2VvIGxvY2F0aW9uIHRvIGEgcGl4ZWwgbG9jYXRpb24gcmVsYXRpdmUgdG8gdGhlIG1hcCBjYW52YXMuXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IC0gRWl0aGVyIGEge0BsaW5rIE1hcE1hcmtlckRpcmVjdGl2ZX0gb3IgYSB7QGxpbmsgSUxhdExvbmd9XHJcbiAgICAgKiBmb3IgdGhlIGJhc2lzIG9mIHRyYW5zbGF0aW9uLlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCB3aGVuIGZ1bGxmaWxsZWQgY29udGFpbnMgYSB7QGxpbmsgSVBvaW50fVxyXG4gICAgICogd2l0aCB0aGUgcGl4ZWwgY29vcmRpbmF0ZXMgb2YgdGhlIE1hcE1hcmtlckRpcmVjdGl2ZSBvciBJTGF0TG9uZyByZWxhdGl2ZSB0byB0aGUgbWFwIGNhbnZhcy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFya2VyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBMb2NhdGlvblRvUG9pbnQodGFyZ2V0OiBNYXBNYXJrZXJEaXJlY3RpdmUgfCBJTGF0TG9uZyk6IFByb21pc2U8SVBvaW50PjtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgYW5jaG9yIHBvc2l0aW9uIGZvciB0aGUgbWFya2VyLlxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQHBhcmFtIC0gVGhlIHtAbGluayBNYXBNYXJrZXJEaXJlY3RpdmV9IG9iamVjdCBmb3Igd2hpY2ggdG8gdXBhdGUgdGhlIGFuY2hvci5cclxuICAgICAqIEFuY2hvciBpbmZvcm1hdGlvbiBpcyBwcmVzZW50IGluIHRoZSB1bmRlcmx5aW5nIHtAbGluayBNYXJrZXJ9IG1vZGVsIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsbGZpbGxlZCB3aGVuIHRoZSBhbmNob3IgcG9zaXRpb24gaGFzIGJlZW4gdXBkYXRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFya2VyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBVcGRhdGVBbmNob3IobWFrZXI6IE1hcE1hcmtlckRpcmVjdGl2ZSk6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgd2hldGhlciB0aGUgbWFya2VyIGlzIGRyYWdnYWJsZS5cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSAtIFRoZSB7QGxpbmsgTWFwTWFya2VyRGlyZWN0aXZlfSBvYmplY3QgZm9yIHdoaWNoIHRvIHVwYXRlIGRyYWdhYmlsaXR5LlxyXG4gICAgICogRHJhZ2FiaWxpdHkgaW5mb3JtYXRpb24gaXMgcHJlc2VudCBpbiB0aGUgdW5kZXJseWluZyB7QGxpbmsgTWFya2VyfSBtb2RlbCBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyAtIEEgcHJvbWlzZSB0aGF0IGlzIGZ1bGxmaWxsZWQgd2hlbiB0aGUgbWFya2VyIGhhcyBiZWVuIHVwZGF0ZWQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcmtlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgVXBkYXRlRHJhZ2dhYmxlKG1hcmtlcjogTWFwTWFya2VyRGlyZWN0aXZlKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgSWNvbiBvbiB0aGUgbWFya2VyLlxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQHBhcmFtIC0gVGhlIHtAbGluayBNYXBNYXJrZXJEaXJlY3RpdmV9IG9iamVjdCBmb3Igd2hpY2ggdG8gdXBhdGUgdGhlIGljb24uXHJcbiAgICAgKiBJY29uIGluZm9ybWF0aW9uIGlzIHByZXNlbnQgaW4gdGhlIHVuZGVybHlpbmcge0BsaW5rIE1hcmtlcn0gbW9kZWwgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCBpcyBmdWxsZmlsbGVkIHdoZW4gdGhlIGljb24gaW5mb3JtYXRpb24gaGFzIGJlZW4gdXBkYXRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFya2VyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBVcGRhdGVJY29uKG1hcmtlcjogTWFwTWFya2VyRGlyZWN0aXZlKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgbGFiZWwgb24gdGhlIG1hcmtlci5cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSAtIFRoZSB7QGxpbmsgTWFwTWFya2VyRGlyZWN0aXZlfSBvYmplY3QgZm9yIHdoaWNoIHRvIHVwYXRlIHRoZSBsYWJlbC5cclxuICAgICAqIExhYmVsIGluZm9ybWF0aW9uIGlzIHByZXNlbnQgaW4gdGhlIHVuZGVybHlpbmcge0BsaW5rIE1hcmtlcn0gbW9kZWwgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCBpcyBmdWxsZmlsbGVkIHdoZW4gdGhlIGxhYmVsIGhhcyBiZWVuIHVwZGF0ZWQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcmtlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgVXBkYXRlTGFiZWwobWFya2VyOiBNYXBNYXJrZXJEaXJlY3RpdmUpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBnZW8gY29vcmRpbmF0ZXMgZm9yIHRoZSBtYXJrZXIuXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gLSBUaGUge0BsaW5rIE1hcE1hcmtlckRpcmVjdGl2ZX0gb2JqZWN0IGZvciB3aGljaCB0byB1cGF0ZSB0aGUgY29vcmRpbmF0ZXMuXHJcbiAgICAgKiBDb29yZGluYXRlIGluZm9ybWF0aW9uIGlzIHByZXNlbnQgaW4gdGhlIHVuZGVybHlpbmcge0BsaW5rIE1hcmtlcn0gbW9kZWwgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCBpcyBmdWxsZmlsbGVkIHdoZW4gdGhlIHBvc2l0aW9uIGhhcyBiZWVuIHVwZGF0ZWQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcmtlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgVXBkYXRlTWFya2VyUG9zaXRpb24obWFya2VyOiBNYXBNYXJrZXJEaXJlY3RpdmUpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSB0aXRsZSBvbiB0aGUgbWFya2VyLlxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQHBhcmFtIC0gVGhlIHtAbGluayBNYXBNYXJrZXJEaXJlY3RpdmV9IG9iamVjdCBmb3Igd2hpY2ggdG8gdXBhdGUgdGhlIHRpdGxlLlxyXG4gICAgICogVGl0bGUgaW5mb3JtYXRpb24gaXMgcHJlc2VudCBpbiB0aGUgdW5kZXJseWluZyB7QGxpbmsgTWFya2VyfSBtb2RlbCBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyAtIEEgcHJvbWlzZSB0aGF0IGlzIGZ1bGxmaWxsZWQgd2hlbiB0aGUgdGl0bGUgaGFzIGJlZW4gdXBkYXRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFya2VyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBVcGRhdGVUaXRsZShtYXJrZXI6IE1hcE1hcmtlckRpcmVjdGl2ZSk6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIHZpc2liaWxpdHkgb24gdGhlIG1hcmtlci5cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSAtIFRoZSB7QGxpbmsgTWFwTWFya2VyRGlyZWN0aXZlfSBvYmplY3QgZm9yIHdoaWNoIHRvIHVwYXRlIHRoZSB2aXNpYmlsaXR5LlxyXG4gICAgICogVmlzaWJpbGl0eSBpbmZvcm1hdGlvbiBpcyBwcmVzZW50IGluIHRoZSB1bmRlcmx5aW5nIHtAbGluayBNYXJrZXJ9IG1vZGVsIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsbGZpbGxlZCB3aGVuIHRoZSB2aXNpYmlsaXR5IGhhcyBiZWVuIHVwZGF0ZWQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcmtlclNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgVXBkYXRlVmlzaWJsZShtYXJrZXI6IE1hcE1hcmtlckRpcmVjdGl2ZSk6IFByb21pc2U8dm9pZD47XHJcbn1cclxuIl19