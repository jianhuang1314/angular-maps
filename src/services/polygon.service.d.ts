import { Observable } from 'rxjs';
import { IPolygonOptions } from '../interfaces/ipolygon-options';
import { ILatLong } from '../interfaces/ilatlong';
import { Polygon } from '../models/polygon';
import { MapPolygonDirective } from '../components/map-polygon';
/**
 * The abstract class represents the contract defintions for a polygon service to be implemented by an acutaly underlying
 * map architecture.
 *
 * @export
 * @abstract
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class PolygonService {
    /**
     * Adds a polygon to a map. Depending on the polygon context, the polygon will either by added to the map or a
     * correcsponding layer.
     *
     * @abstract
     * @param polygon - The {@link MapPolygonDirective} to be added.
     *
     * @memberof PolygonService
     */
    abstract AddPolygon(polygon: MapPolygonDirective): void;
    /**
      * Registers an event delegate for a marker.
      *
      * @abstract
      * @param eventName - The name of the event to register (e.g. 'click')
      * @param polygon - The {@link MapPolygonDirective} for which to register the event.
      * @returns - Observable emiting an instance of T each time the event occurs.
      *
      * @memberof PolygonService
      */
    abstract CreateEventObservable<T>(eventName: string, polygon: MapPolygonDirective): Observable<T>;
    /**
      * Deletes a polygon.
      *
      * @abstract
      * @param polygon - {@link MapPolygonDirective} to be deleted.
      * @returns - A promise fullfilled once the polygon has been deleted.
      *
      * @memberof PolygonService
      */
    abstract DeletePolygon(polygon: MapPolygonDirective): Promise<void>;
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
     * Obtains the polygon model for the polygon allowing access to native implementation functionatiliy.
     *
     * @abstract
     * @param polygon - The {@link MapPolygonDirective} for which to obtain the polygon model.
     * @returns - A promise that when fullfilled contains the {@link Polygon} implementation of the underlying platform.
     *
     * @memberof PolygonService
     */
    abstract GetNativePolygon(polygon: MapPolygonDirective): Promise<Polygon>;
    /**
     * Set the polygon options.
     *
     * @abstract
     * @param polygon - {@link MapPolygonDirective} to be updated.
     * @param options - {@link IPolygonOptions} object containing the options. Options will be merged with the
     * options already on the underlying object.
     * @returns - A promise fullfilled once the polygon options have been set.
     *
     * @memberof PolygonService
     */
    abstract SetOptions(polygon: MapPolygonDirective, options: IPolygonOptions): Promise<void>;
    /**
     * Updates the Polygon path
     *
     * @abstract
     * @param polygon - {@link MapPolygonDirective} to be updated.
     * @returns - A promise fullfilled once the polygon has been updated.
     *
     * @memberof PolygonService
     */
    abstract UpdatePolygon(polygon: MapPolygonDirective): Promise<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PolygonService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<PolygonService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWdvbi5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInBvbHlnb24uc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSVBvbHlnb25PcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pcG9seWdvbi1vcHRpb25zJztcclxuaW1wb3J0IHsgSUxhdExvbmcgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2lsYXRsb25nJztcclxuaW1wb3J0IHsgUG9seWdvbiB9IGZyb20gJy4uL21vZGVscy9wb2x5Z29uJztcclxuaW1wb3J0IHsgTWFwUG9seWdvbkRpcmVjdGl2ZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWFwLXBvbHlnb24nO1xyXG4vKipcclxuICogVGhlIGFic3RyYWN0IGNsYXNzIHJlcHJlc2VudHMgdGhlIGNvbnRyYWN0IGRlZmludGlvbnMgZm9yIGEgcG9seWdvbiBzZXJ2aWNlIHRvIGJlIGltcGxlbWVudGVkIGJ5IGFuIGFjdXRhbHkgdW5kZXJseWluZ1xyXG4gKiBtYXAgYXJjaGl0ZWN0dXJlLlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBhYnN0cmFjdFxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgUG9seWdvblNlcnZpY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgcG9seWdvbiB0byBhIG1hcC4gRGVwZW5kaW5nIG9uIHRoZSBwb2x5Z29uIGNvbnRleHQsIHRoZSBwb2x5Z29uIHdpbGwgZWl0aGVyIGJ5IGFkZGVkIHRvIHRoZSBtYXAgb3IgYVxyXG4gICAgICogY29ycmVjc3BvbmRpbmcgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gcG9seWdvbiAtIFRoZSB7QGxpbmsgTWFwUG9seWdvbkRpcmVjdGl2ZX0gdG8gYmUgYWRkZWQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFBvbHlnb25TZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IEFkZFBvbHlnb24ocG9seWdvbjogTWFwUG9seWdvbkRpcmVjdGl2ZSk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgZGVsZWdhdGUgZm9yIGEgbWFya2VyLlxyXG4gICAgICAqXHJcbiAgICAgICogQGFic3RyYWN0XHJcbiAgICAgICogQHBhcmFtIGV2ZW50TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byByZWdpc3RlciAoZS5nLiAnY2xpY2snKVxyXG4gICAgICAqIEBwYXJhbSBwb2x5Z29uIC0gVGhlIHtAbGluayBNYXBQb2x5Z29uRGlyZWN0aXZlfSBmb3Igd2hpY2ggdG8gcmVnaXN0ZXIgdGhlIGV2ZW50LlxyXG4gICAgICAqIEByZXR1cm5zIC0gT2JzZXJ2YWJsZSBlbWl0aW5nIGFuIGluc3RhbmNlIG9mIFQgZWFjaCB0aW1lIHRoZSBldmVudCBvY2N1cnMuXHJcbiAgICAgICpcclxuICAgICAgKiBAbWVtYmVyb2YgUG9seWdvblNlcnZpY2VcclxuICAgICAgKi9cclxuICAgIGFic3RyYWN0IENyZWF0ZUV2ZW50T2JzZXJ2YWJsZTxUPihldmVudE5hbWU6IHN0cmluZywgcG9seWdvbjogTWFwUG9seWdvbkRpcmVjdGl2ZSk6IE9ic2VydmFibGU8VD47XHJcbiAgICAvKipcclxuICAgICAgKiBEZWxldGVzIGEgcG9seWdvbi5cclxuICAgICAgKlxyXG4gICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICAqIEBwYXJhbSBwb2x5Z29uIC0ge0BsaW5rIE1hcFBvbHlnb25EaXJlY3RpdmV9IHRvIGJlIGRlbGV0ZWQuXHJcbiAgICAgICogQHJldHVybnMgLSBBIHByb21pc2UgZnVsbGZpbGxlZCBvbmNlIHRoZSBwb2x5Z29uIGhhcyBiZWVuIGRlbGV0ZWQuXHJcbiAgICAgICpcclxuICAgICAgKiBAbWVtYmVyb2YgUG9seWdvblNlcnZpY2VcclxuICAgICAgKi9cclxuICAgIGFic3RyYWN0IERlbGV0ZVBvbHlnb24ocG9seWdvbjogTWFwUG9seWdvbkRpcmVjdGl2ZSk6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgZ2VvIGNvb3JkaW5hdGVzIGZvciB0aGUgbWFya2VyIG9uIHRoZSBjbGljayBsb2NhdGlvblxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQHBhcmFtIGUgLSBUaGUgbW91c2UgZXZlbnQuXHJcbiAgICAgKiBAcmV0dXJucyAtIHtAbGluayBJTGF0TG9uZ30gY29udGFpbmluZyB0aGUgZ2VvIGNvb3JkaW5hdGVzIG9mIHRoZSBjbGlja2VkIG1hcmtlci5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFya2VyU2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBHZXRDb29yZGluYXRlc0Zyb21DbGljayhlOiBNb3VzZUV2ZW50IHwgYW55KTogSUxhdExvbmc7XHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgdGhlIHBvbHlnb24gbW9kZWwgZm9yIHRoZSBwb2x5Z29uIGFsbG93aW5nIGFjY2VzcyB0byBuYXRpdmUgaW1wbGVtZW50YXRpb24gZnVuY3Rpb25hdGlsaXkuXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gcG9seWdvbiAtIFRoZSB7QGxpbmsgTWFwUG9seWdvbkRpcmVjdGl2ZX0gZm9yIHdoaWNoIHRvIG9idGFpbiB0aGUgcG9seWdvbiBtb2RlbC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgd2hlbiBmdWxsZmlsbGVkIGNvbnRhaW5zIHRoZSB7QGxpbmsgUG9seWdvbn0gaW1wbGVtZW50YXRpb24gb2YgdGhlIHVuZGVybHlpbmcgcGxhdGZvcm0uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFBvbHlnb25TZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IEdldE5hdGl2ZVBvbHlnb24ocG9seWdvbjogTWFwUG9seWdvbkRpcmVjdGl2ZSk6IFByb21pc2U8UG9seWdvbj47XHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgcG9seWdvbiBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQHBhcmFtIHBvbHlnb24gLSB7QGxpbmsgTWFwUG9seWdvbkRpcmVjdGl2ZX0gdG8gYmUgdXBkYXRlZC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0ge0BsaW5rIElQb2x5Z29uT3B0aW9uc30gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9wdGlvbnMuIE9wdGlvbnMgd2lsbCBiZSBtZXJnZWQgd2l0aCB0aGVcclxuICAgICAqIG9wdGlvbnMgYWxyZWFkeSBvbiB0aGUgdW5kZXJseWluZyBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyAtIEEgcHJvbWlzZSBmdWxsZmlsbGVkIG9uY2UgdGhlIHBvbHlnb24gb3B0aW9ucyBoYXZlIGJlZW4gc2V0LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBQb2x5Z29uU2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBTZXRPcHRpb25zKHBvbHlnb246IE1hcFBvbHlnb25EaXJlY3RpdmUsIG9wdGlvbnM6IElQb2x5Z29uT3B0aW9ucyk6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIFBvbHlnb24gcGF0aFxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQHBhcmFtIHBvbHlnb24gLSB7QGxpbmsgTWFwUG9seWdvbkRpcmVjdGl2ZX0gdG8gYmUgdXBkYXRlZC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIGZ1bGxmaWxsZWQgb25jZSB0aGUgcG9seWdvbiBoYXMgYmVlbiB1cGRhdGVkLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBQb2x5Z29uU2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBVcGRhdGVQb2x5Z29uKHBvbHlnb246IE1hcFBvbHlnb25EaXJlY3RpdmUpOiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcbiJdfQ==