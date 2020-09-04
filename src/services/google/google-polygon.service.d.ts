import { ILatLong } from '../../interfaces/ilatlong';
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { IPolygonOptions } from '../../interfaces/ipolygon-options';
import { Polygon } from '../../models/polygon';
import { MapPolygonDirective } from '../../components/map-polygon';
import { PolygonService } from '../polygon.service';
import { MapService } from '../map.service';
import { LayerService } from '../layer.service';
/**
 * Concrete implementation of the Polygon Service abstract class for Google Maps.
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class GooglePolygonService implements PolygonService {
    private _mapService;
    private _layerService;
    private _zone;
    private _polygons;
    /**
     * Creates an instance of GooglePolygonService.
     * @param _mapService - {@link MapService} instance. The concrete {@link GoogleMapService} implementation is expected.
     * @param _layerService - {@link GoogleLayerService} instance.
     * The concrete {@link GoogleLayerService} implementation is expected.
     * @param _zone - NgZone instance to support zone aware promises.
     *
     * @memberof GooglePolygonService
     */
    constructor(_mapService: MapService, _layerService: LayerService, _zone: NgZone);
    /**
     * Adds a polygon to a map. Depending on the polygon context, the polygon will either by added to the map or a
     * correcsponding layer.
     *
     * @param polygon - The {@link MapPolygonDirective} to be added.
     *
     * @memberof GooglePolygonService
     */
    AddPolygon(polygon: MapPolygonDirective): void;
    /**
      * Registers an event delegate for a polygon.
      *
      * @param eventName - The name of the event to register (e.g. 'click')
      * @param polygon - The {@link MapPolygonDirective} for which to register the event.
      * @returns - Observable emiting an instance of T each time the event occurs.
      *
      * @memberof GooglePolygonService
      */
    CreateEventObservable<T>(eventName: string, polygon: MapPolygonDirective): Observable<T>;
    /**
      * Deletes a polygon.
      *
      * @param polygon - {@link MapPolygonDirective} to be deleted.
      * @returns - A promise fullfilled once the polygon has been deleted.
      *
      * @memberof GooglePolygonService
      */
    DeletePolygon(polygon: MapPolygonDirective): Promise<void>;
    /**
     * Obtains geo coordinates for the polygon on the click location
     *
     * @abstract
     * @param e - The mouse event.
     * @returns - {@link ILatLong} containing the geo coordinates of the clicked marker.
     *
     * @memberof GooglePolygonService
     */
    GetCoordinatesFromClick(e: MouseEvent | any): ILatLong;
    /**
     * Obtains the polygon model for the polygon allowing access to native implementation functionatiliy.
     *
     * @param polygon - The {@link MapPolygonDirective} for which to obtain the polygon model.
     * @returns - A promise that when fullfilled contains the {@link Polygon} implementation of the underlying platform.
     *
     * @memberof GooglePolygonService
     */
    GetNativePolygon(polygon: MapPolygonDirective): Promise<Polygon>;
    /**
     * Set the polygon options.
     *
     * @param polygon - {@link MapPolygonDirective} to be updated.
     * @param options - {@link IPolygonOptions} object containing the options. Options will be merged with the
     * options already on the underlying object.
     * @returns - A promise fullfilled once the polygon options have been set.
     *
     * @memberof GooglePolygonService
     */
    SetOptions(polygon: MapPolygonDirective, options: IPolygonOptions): Promise<void>;
    /**
     * Updates the Polygon path
     *
     * @param polygon - {@link MapPolygonDirective} to be updated.
     * @returns - A promise fullfilled once the polygon has been updated.
     *
     * @memberof GooglePolygonService
     */
    UpdatePolygon(polygon: MapPolygonDirective): Promise<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GooglePolygonService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<GooglePolygonService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXBvbHlnb24uc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJnb29nbGUtcG9seWdvbi5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTGF0TG9uZyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaWxhdGxvbmcnO1xyXG5pbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBJUG9seWdvbk9wdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2lwb2x5Z29uLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBQb2x5Z29uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BvbHlnb24nO1xyXG5pbXBvcnQgeyBNYXBQb2x5Z29uRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tYXAtcG9seWdvbic7XHJcbmltcG9ydCB7IFBvbHlnb25TZXJ2aWNlIH0gZnJvbSAnLi4vcG9seWdvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL21hcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGF5ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbGF5ZXIuc2VydmljZSc7XHJcbi8qKlxyXG4gKiBDb25jcmV0ZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUG9seWdvbiBTZXJ2aWNlIGFic3RyYWN0IGNsYXNzIGZvciBHb29nbGUgTWFwcy5cclxuICpcclxuICogQGV4cG9ydFxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgR29vZ2xlUG9seWdvblNlcnZpY2UgaW1wbGVtZW50cyBQb2x5Z29uU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9tYXBTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBfbGF5ZXJTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBfem9uZTtcclxuICAgIHByaXZhdGUgX3BvbHlnb25zO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEdvb2dsZVBvbHlnb25TZXJ2aWNlLlxyXG4gICAgICogQHBhcmFtIF9tYXBTZXJ2aWNlIC0ge0BsaW5rIE1hcFNlcnZpY2V9IGluc3RhbmNlLiBUaGUgY29uY3JldGUge0BsaW5rIEdvb2dsZU1hcFNlcnZpY2V9IGltcGxlbWVudGF0aW9uIGlzIGV4cGVjdGVkLlxyXG4gICAgICogQHBhcmFtIF9sYXllclNlcnZpY2UgLSB7QGxpbmsgR29vZ2xlTGF5ZXJTZXJ2aWNlfSBpbnN0YW5jZS5cclxuICAgICAqIFRoZSBjb25jcmV0ZSB7QGxpbmsgR29vZ2xlTGF5ZXJTZXJ2aWNlfSBpbXBsZW1lbnRhdGlvbiBpcyBleHBlY3RlZC5cclxuICAgICAqIEBwYXJhbSBfem9uZSAtIE5nWm9uZSBpbnN0YW5jZSB0byBzdXBwb3J0IHpvbmUgYXdhcmUgcHJvbWlzZXMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZVBvbHlnb25TZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKF9tYXBTZXJ2aWNlOiBNYXBTZXJ2aWNlLCBfbGF5ZXJTZXJ2aWNlOiBMYXllclNlcnZpY2UsIF96b25lOiBOZ1pvbmUpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgcG9seWdvbiB0byBhIG1hcC4gRGVwZW5kaW5nIG9uIHRoZSBwb2x5Z29uIGNvbnRleHQsIHRoZSBwb2x5Z29uIHdpbGwgZWl0aGVyIGJ5IGFkZGVkIHRvIHRoZSBtYXAgb3IgYVxyXG4gICAgICogY29ycmVjc3BvbmRpbmcgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHBvbHlnb24gLSBUaGUge0BsaW5rIE1hcFBvbHlnb25EaXJlY3RpdmV9IHRvIGJlIGFkZGVkLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVQb2x5Z29uU2VydmljZVxyXG4gICAgICovXHJcbiAgICBBZGRQb2x5Z29uKHBvbHlnb246IE1hcFBvbHlnb25EaXJlY3RpdmUpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGRlbGVnYXRlIGZvciBhIHBvbHlnb24uXHJcbiAgICAgICpcclxuICAgICAgKiBAcGFyYW0gZXZlbnROYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIHJlZ2lzdGVyIChlLmcuICdjbGljaycpXHJcbiAgICAgICogQHBhcmFtIHBvbHlnb24gLSBUaGUge0BsaW5rIE1hcFBvbHlnb25EaXJlY3RpdmV9IGZvciB3aGljaCB0byByZWdpc3RlciB0aGUgZXZlbnQuXHJcbiAgICAgICogQHJldHVybnMgLSBPYnNlcnZhYmxlIGVtaXRpbmcgYW4gaW5zdGFuY2Ugb2YgVCBlYWNoIHRpbWUgdGhlIGV2ZW50IG9jY3Vycy5cclxuICAgICAgKlxyXG4gICAgICAqIEBtZW1iZXJvZiBHb29nbGVQb2x5Z29uU2VydmljZVxyXG4gICAgICAqL1xyXG4gICAgQ3JlYXRlRXZlbnRPYnNlcnZhYmxlPFQ+KGV2ZW50TmFtZTogc3RyaW5nLCBwb2x5Z29uOiBNYXBQb2x5Z29uRGlyZWN0aXZlKTogT2JzZXJ2YWJsZTxUPjtcclxuICAgIC8qKlxyXG4gICAgICAqIERlbGV0ZXMgYSBwb2x5Z29uLlxyXG4gICAgICAqXHJcbiAgICAgICogQHBhcmFtIHBvbHlnb24gLSB7QGxpbmsgTWFwUG9seWdvbkRpcmVjdGl2ZX0gdG8gYmUgZGVsZXRlZC5cclxuICAgICAgKiBAcmV0dXJucyAtIEEgcHJvbWlzZSBmdWxsZmlsbGVkIG9uY2UgdGhlIHBvbHlnb24gaGFzIGJlZW4gZGVsZXRlZC5cclxuICAgICAgKlxyXG4gICAgICAqIEBtZW1iZXJvZiBHb29nbGVQb2x5Z29uU2VydmljZVxyXG4gICAgICAqL1xyXG4gICAgRGVsZXRlUG9seWdvbihwb2x5Z29uOiBNYXBQb2x5Z29uRGlyZWN0aXZlKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyBnZW8gY29vcmRpbmF0ZXMgZm9yIHRoZSBwb2x5Z29uIG9uIHRoZSBjbGljayBsb2NhdGlvblxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQHBhcmFtIGUgLSBUaGUgbW91c2UgZXZlbnQuXHJcbiAgICAgKiBAcmV0dXJucyAtIHtAbGluayBJTGF0TG9uZ30gY29udGFpbmluZyB0aGUgZ2VvIGNvb3JkaW5hdGVzIG9mIHRoZSBjbGlja2VkIG1hcmtlci5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlUG9seWdvblNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgR2V0Q29vcmRpbmF0ZXNGcm9tQ2xpY2soZTogTW91c2VFdmVudCB8IGFueSk6IElMYXRMb25nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRhaW5zIHRoZSBwb2x5Z29uIG1vZGVsIGZvciB0aGUgcG9seWdvbiBhbGxvd2luZyBhY2Nlc3MgdG8gbmF0aXZlIGltcGxlbWVudGF0aW9uIGZ1bmN0aW9uYXRpbGl5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwb2x5Z29uIC0gVGhlIHtAbGluayBNYXBQb2x5Z29uRGlyZWN0aXZlfSBmb3Igd2hpY2ggdG8gb2J0YWluIHRoZSBwb2x5Z29uIG1vZGVsLlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCB3aGVuIGZ1bGxmaWxsZWQgY29udGFpbnMgdGhlIHtAbGluayBQb2x5Z29ufSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgdW5kZXJseWluZyBwbGF0Zm9ybS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlUG9seWdvblNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgR2V0TmF0aXZlUG9seWdvbihwb2x5Z29uOiBNYXBQb2x5Z29uRGlyZWN0aXZlKTogUHJvbWlzZTxQb2x5Z29uPjtcclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBwb2x5Z29uIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHBvbHlnb24gLSB7QGxpbmsgTWFwUG9seWdvbkRpcmVjdGl2ZX0gdG8gYmUgdXBkYXRlZC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0ge0BsaW5rIElQb2x5Z29uT3B0aW9uc30gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9wdGlvbnMuIE9wdGlvbnMgd2lsbCBiZSBtZXJnZWQgd2l0aCB0aGVcclxuICAgICAqIG9wdGlvbnMgYWxyZWFkeSBvbiB0aGUgdW5kZXJseWluZyBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyAtIEEgcHJvbWlzZSBmdWxsZmlsbGVkIG9uY2UgdGhlIHBvbHlnb24gb3B0aW9ucyBoYXZlIGJlZW4gc2V0LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVQb2x5Z29uU2VydmljZVxyXG4gICAgICovXHJcbiAgICBTZXRPcHRpb25zKHBvbHlnb246IE1hcFBvbHlnb25EaXJlY3RpdmUsIG9wdGlvbnM6IElQb2x5Z29uT3B0aW9ucyk6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIFBvbHlnb24gcGF0aFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwb2x5Z29uIC0ge0BsaW5rIE1hcFBvbHlnb25EaXJlY3RpdmV9IHRvIGJlIHVwZGF0ZWQuXHJcbiAgICAgKiBAcmV0dXJucyAtIEEgcHJvbWlzZSBmdWxsZmlsbGVkIG9uY2UgdGhlIHBvbHlnb24gaGFzIGJlZW4gdXBkYXRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlUG9seWdvblNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgVXBkYXRlUG9seWdvbihwb2x5Z29uOiBNYXBQb2x5Z29uRGlyZWN0aXZlKTogUHJvbWlzZTx2b2lkPjtcclxufVxyXG4iXX0=