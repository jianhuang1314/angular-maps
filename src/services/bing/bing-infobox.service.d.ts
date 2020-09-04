import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { IInfoWindowOptions } from '../../interfaces/iinfo-window-options';
import { ILatLong } from '../../interfaces/ilatlong';
import { InfoBoxService } from '../infobox.service';
import { MapService } from '../../services/map.service';
import { InfoBoxComponent } from '../../components/infobox';
/**
 * Concrete implementation of the {@link InfoBoxService} contract for the Bing Maps V8 architecture.
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class BingInfoBoxService implements InfoBoxService {
    private _mapService;
    private _zone;
    private _boxes;
    /**
     * Creates an instance of BingInfoBoxService.
     * @param _mapService - Concrete {@link MapService} implementation for Bing Maps V8. An instance of {@link BingMapService}.
     * @param _zone - An instance of NgZone to provide zone aware promises.
     *
     * @memberof BingInfoBoxService
     */
    constructor(_mapService: MapService, _zone: NgZone);
    /**
     * Adds an info window to the map or layer.
     *
     * @param info - {@link InfoBoxComponent} component object representing the infobox.
     *
     * @memberof BingInfoBoxService
     */
    AddInfoWindow(info: InfoBoxComponent): void;
    /**
     * Closes an InfoBoxComponent that is open.
     *
     * @abstract
     * @param info - {@link InfoBoxComponent} component object representing the infobox.
     * @returns - A promise that is fullfilled when the infobox has been closed.
     *
     * @memberof InfoBoxService
     */
    Close(info: InfoBoxComponent): Promise<void>;
    /**
     * Registers an event delegate for an info window.
     *
     * @param eventName - The name of the event to register (e.g. 'click')
     * @param infoComponent - The {@link InfoBoxComponent} for which to register the event.
     * @returns - Observable emiting an instance of T each time the event occurs.
     *
     * @memberof GoogleInfoBoxService
     */
    CreateEventObservable<T>(eventName: string, infoComponent: InfoBoxComponent): Observable<T>;
    /**
     * Deletes an infobox.
     *
     * @abstract
     * @param info - {@link InfoBoxComponent} component object representing the infobox.
     * @returns - A promise that is fullfilled when the infobox has been deleted.
     *
     * @memberof InfoBoxService
     */
    DeleteInfoWindow(info: InfoBoxComponent): Promise<void>;
    /**
     * Opens an infobox that is closed.
     *
     * @abstract
     * @param info - {@link InfoBoxComponent} component object representing the infobox.
     * @returns - A promise that is fullfilled when the infobox has been opened.
     *
     * @memberof InfoBoxService
     */
    Open(info: InfoBoxComponent, loc?: ILatLong): Promise<void>;
    /**
     * Sets the infobox options.
     *
     * @abstract
     * @param info - {@link InfoBoxComponent} component object representing the infobox.
     * @param options - {@link IInfoWindowOptions} object containing the options to set. Options provided are
     * merged with the existing options of the underlying infobox.
     * @returns - A promise that is fullfilled when the infobox options have been updated.
     *
     * @memberof InfoBoxService
     */
    SetOptions(info: InfoBoxComponent, options: IInfoWindowOptions): Promise<void>;
    /**
     * Set the position of the infobox based on the properties set on the InfoBox component.
     *
     * @abstract
     * @param info - {@link InfoBoxComponent} component object representing the infobox.
     * @returns - A promise that is fullfilled when the infobox position has been updated.
     *
     * @memberof InfoBoxService
     */
    SetPosition(info: InfoBoxComponent): Promise<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BingInfoBoxService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BingInfoBoxService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZy1pbmZvYm94LnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiYmluZy1pbmZvYm94LnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSUluZm9XaW5kb3dPcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9paW5mby13aW5kb3ctb3B0aW9ucyc7XHJcbmltcG9ydCB7IElMYXRMb25nIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbGF0bG9uZyc7XHJcbmltcG9ydCB7IEluZm9Cb3hTZXJ2aWNlIH0gZnJvbSAnLi4vaW5mb2JveC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21hcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW5mb0JveENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5mb2JveCc7XHJcbi8qKlxyXG4gKiBDb25jcmV0ZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUge0BsaW5rIEluZm9Cb3hTZXJ2aWNlfSBjb250cmFjdCBmb3IgdGhlIEJpbmcgTWFwcyBWOCBhcmNoaXRlY3R1cmUuXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEJpbmdJbmZvQm94U2VydmljZSBpbXBsZW1lbnRzIEluZm9Cb3hTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX21hcFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIF96b25lO1xyXG4gICAgcHJpdmF0ZSBfYm94ZXM7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQmluZ0luZm9Cb3hTZXJ2aWNlLlxyXG4gICAgICogQHBhcmFtIF9tYXBTZXJ2aWNlIC0gQ29uY3JldGUge0BsaW5rIE1hcFNlcnZpY2V9IGltcGxlbWVudGF0aW9uIGZvciBCaW5nIE1hcHMgVjguIEFuIGluc3RhbmNlIG9mIHtAbGluayBCaW5nTWFwU2VydmljZX0uXHJcbiAgICAgKiBAcGFyYW0gX3pvbmUgLSBBbiBpbnN0YW5jZSBvZiBOZ1pvbmUgdG8gcHJvdmlkZSB6b25lIGF3YXJlIHByb21pc2VzLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nSW5mb0JveFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoX21hcFNlcnZpY2U6IE1hcFNlcnZpY2UsIF96b25lOiBOZ1pvbmUpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGFuIGluZm8gd2luZG93IHRvIHRoZSBtYXAgb3IgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGluZm8gLSB7QGxpbmsgSW5mb0JveENvbXBvbmVudH0gY29tcG9uZW50IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGluZm9ib3guXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdJbmZvQm94U2VydmljZVxyXG4gICAgICovXHJcbiAgICBBZGRJbmZvV2luZG93KGluZm86IEluZm9Cb3hDb21wb25lbnQpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZXMgYW4gSW5mb0JveENvbXBvbmVudCB0aGF0IGlzIG9wZW4uXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gaW5mbyAtIHtAbGluayBJbmZvQm94Q29tcG9uZW50fSBjb21wb25lbnQgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgaW5mb2JveC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsbGZpbGxlZCB3aGVuIHRoZSBpbmZvYm94IGhhcyBiZWVuIGNsb3NlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5mb0JveFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgQ2xvc2UoaW5mbzogSW5mb0JveENvbXBvbmVudCk6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVycyBhbiBldmVudCBkZWxlZ2F0ZSBmb3IgYW4gaW5mbyB3aW5kb3cuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byByZWdpc3RlciAoZS5nLiAnY2xpY2snKVxyXG4gICAgICogQHBhcmFtIGluZm9Db21wb25lbnQgLSBUaGUge0BsaW5rIEluZm9Cb3hDb21wb25lbnR9IGZvciB3aGljaCB0byByZWdpc3RlciB0aGUgZXZlbnQuXHJcbiAgICAgKiBAcmV0dXJucyAtIE9ic2VydmFibGUgZW1pdGluZyBhbiBpbnN0YW5jZSBvZiBUIGVhY2ggdGltZSB0aGUgZXZlbnQgb2NjdXJzLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVJbmZvQm94U2VydmljZVxyXG4gICAgICovXHJcbiAgICBDcmVhdGVFdmVudE9ic2VydmFibGU8VD4oZXZlbnROYW1lOiBzdHJpbmcsIGluZm9Db21wb25lbnQ6IEluZm9Cb3hDb21wb25lbnQpOiBPYnNlcnZhYmxlPFQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGVzIGFuIGluZm9ib3guXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gaW5mbyAtIHtAbGluayBJbmZvQm94Q29tcG9uZW50fSBjb21wb25lbnQgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgaW5mb2JveC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsbGZpbGxlZCB3aGVuIHRoZSBpbmZvYm94IGhhcyBiZWVuIGRlbGV0ZWQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEluZm9Cb3hTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIERlbGV0ZUluZm9XaW5kb3coaW5mbzogSW5mb0JveENvbXBvbmVudCk6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIE9wZW5zIGFuIGluZm9ib3ggdGhhdCBpcyBjbG9zZWQuXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gaW5mbyAtIHtAbGluayBJbmZvQm94Q29tcG9uZW50fSBjb21wb25lbnQgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgaW5mb2JveC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsbGZpbGxlZCB3aGVuIHRoZSBpbmZvYm94IGhhcyBiZWVuIG9wZW5lZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5mb0JveFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgT3BlbihpbmZvOiBJbmZvQm94Q29tcG9uZW50LCBsb2M/OiBJTGF0TG9uZyk6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGluZm9ib3ggb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBpbmZvIC0ge0BsaW5rIEluZm9Cb3hDb21wb25lbnR9IGNvbXBvbmVudCBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBpbmZvYm94LlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSB7QGxpbmsgSUluZm9XaW5kb3dPcHRpb25zfSBvYmplY3QgY29udGFpbmluZyB0aGUgb3B0aW9ucyB0byBzZXQuIE9wdGlvbnMgcHJvdmlkZWQgYXJlXHJcbiAgICAgKiBtZXJnZWQgd2l0aCB0aGUgZXhpc3Rpbmcgb3B0aW9ucyBvZiB0aGUgdW5kZXJseWluZyBpbmZvYm94LlxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCBpcyBmdWxsZmlsbGVkIHdoZW4gdGhlIGluZm9ib3ggb3B0aW9ucyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5mb0JveFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgU2V0T3B0aW9ucyhpbmZvOiBJbmZvQm94Q29tcG9uZW50LCBvcHRpb25zOiBJSW5mb1dpbmRvd09wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBpbmZvYm94IGJhc2VkIG9uIHRoZSBwcm9wZXJ0aWVzIHNldCBvbiB0aGUgSW5mb0JveCBjb21wb25lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gaW5mbyAtIHtAbGluayBJbmZvQm94Q29tcG9uZW50fSBjb21wb25lbnQgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgaW5mb2JveC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsbGZpbGxlZCB3aGVuIHRoZSBpbmZvYm94IHBvc2l0aW9uIGhhcyBiZWVuIHVwZGF0ZWQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEluZm9Cb3hTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIFNldFBvc2l0aW9uKGluZm86IEluZm9Cb3hDb21wb25lbnQpOiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcbiJdfQ==