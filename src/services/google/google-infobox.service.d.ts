import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoBoxComponent } from '../../components/infobox';
import { IInfoWindowOptions } from '../../interfaces/iinfo-window-options';
import { ILatLong } from '../../interfaces/ilatlong';
import { InfoBoxService } from '../infobox.service';
import { MarkerService } from '../marker.service';
import { MapService } from '../map.service';
import * as ɵngcc0 from '@angular/core';
export declare class GoogleInfoBoxService extends InfoBoxService {
    private _mapService;
    private _markerService;
    private _zone;
    private _boxes;
    /**
     * Creates an instance of GoogleInfoBoxService.
     * @param _mapService
     * @param _markerService
     * @param _zone
     *
     * @memberof GoogleInfoBoxService
     */
    constructor(_mapService: MapService, _markerService: MarkerService, _zone: NgZone);
    /**
     * Creates a new instance of an info window
     *
     * @param info
     *
     * @memberof GoogleInfoBoxService
     */
    AddInfoWindow(info: InfoBoxComponent): void;
    /**
     * Closes the info window
     *
     * @param info
     * @returns -  A promise that is resolved when the info box is closed.
     *
     * @memberof GoogleInfoBoxService
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
     * Deletes the info window
     *
     * @param info
     *
     * @memberof GoogleInfoBoxService
     */
    DeleteInfoWindow(info: InfoBoxComponent): Promise<void>;
    /**
     * Opens the info window. Window opens on a marker, if supplied, or a specific location if given
     *
     * @param info
     * @param [loc]
     *
     * @memberof GoogleInfoBoxService
     */
    Open(info: InfoBoxComponent, loc?: ILatLong): Promise<void>;
    /**
     * Sets the info window options
     *
     * @param info
     * @param options
     *
     * @memberof GoogleInfoBoxService
     */
    SetOptions(info: InfoBoxComponent, options: IInfoWindowOptions): Promise<void>;
    /**
     * Sets the info window position
     *
     * @param info
     * @param latlng
     *
     * @memberof GoogleInfoBoxService
     */
    SetPosition(info: InfoBoxComponent, latlng: ILatLong): Promise<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GoogleInfoBoxService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<GoogleInfoBoxService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWluZm9ib3guc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJnb29nbGUtaW5mb2JveC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBJbmZvQm94Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbmZvYm94JztcclxuaW1wb3J0IHsgSUluZm9XaW5kb3dPcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9paW5mby13aW5kb3ctb3B0aW9ucyc7XHJcbmltcG9ydCB7IElMYXRMb25nIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbGF0bG9uZyc7XHJcbmltcG9ydCB7IEluZm9Cb3hTZXJ2aWNlIH0gZnJvbSAnLi4vaW5mb2JveC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFya2VyU2VydmljZSB9IGZyb20gJy4uL21hcmtlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL21hcC5zZXJ2aWNlJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgR29vZ2xlSW5mb0JveFNlcnZpY2UgZXh0ZW5kcyBJbmZvQm94U2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9tYXBTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBfbWFya2VyU2VydmljZTtcclxuICAgIHByaXZhdGUgX3pvbmU7XHJcbiAgICBwcml2YXRlIF9ib3hlcztcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBHb29nbGVJbmZvQm94U2VydmljZS5cclxuICAgICAqIEBwYXJhbSBfbWFwU2VydmljZVxyXG4gICAgICogQHBhcmFtIF9tYXJrZXJTZXJ2aWNlXHJcbiAgICAgKiBAcGFyYW0gX3pvbmVcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlSW5mb0JveFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoX21hcFNlcnZpY2U6IE1hcFNlcnZpY2UsIF9tYXJrZXJTZXJ2aWNlOiBNYXJrZXJTZXJ2aWNlLCBfem9uZTogTmdab25lKTtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBhbiBpbmZvIHdpbmRvd1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpbmZvXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZUluZm9Cb3hTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIEFkZEluZm9XaW5kb3coaW5mbzogSW5mb0JveENvbXBvbmVudCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIENsb3NlcyB0aGUgaW5mbyB3aW5kb3dcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5mb1xyXG4gICAgICogQHJldHVybnMgLSAgQSBwcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgd2hlbiB0aGUgaW5mbyBib3ggaXMgY2xvc2VkLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVJbmZvQm94U2VydmljZVxyXG4gICAgICovXHJcbiAgICBDbG9zZShpbmZvOiBJbmZvQm94Q29tcG9uZW50KTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGRlbGVnYXRlIGZvciBhbiBpbmZvIHdpbmRvdy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIHJlZ2lzdGVyIChlLmcuICdjbGljaycpXHJcbiAgICAgKiBAcGFyYW0gaW5mb0NvbXBvbmVudCAtIFRoZSB7QGxpbmsgSW5mb0JveENvbXBvbmVudH0gZm9yIHdoaWNoIHRvIHJlZ2lzdGVyIHRoZSBldmVudC5cclxuICAgICAqIEByZXR1cm5zIC0gT2JzZXJ2YWJsZSBlbWl0aW5nIGFuIGluc3RhbmNlIG9mIFQgZWFjaCB0aW1lIHRoZSBldmVudCBvY2N1cnMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZUluZm9Cb3hTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIENyZWF0ZUV2ZW50T2JzZXJ2YWJsZTxUPihldmVudE5hbWU6IHN0cmluZywgaW5mb0NvbXBvbmVudDogSW5mb0JveENvbXBvbmVudCk6IE9ic2VydmFibGU8VD47XHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZXMgdGhlIGluZm8gd2luZG93XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGluZm9cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlSW5mb0JveFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgRGVsZXRlSW5mb1dpbmRvdyhpbmZvOiBJbmZvQm94Q29tcG9uZW50KTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogT3BlbnMgdGhlIGluZm8gd2luZG93LiBXaW5kb3cgb3BlbnMgb24gYSBtYXJrZXIsIGlmIHN1cHBsaWVkLCBvciBhIHNwZWNpZmljIGxvY2F0aW9uIGlmIGdpdmVuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGluZm9cclxuICAgICAqIEBwYXJhbSBbbG9jXVxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVJbmZvQm94U2VydmljZVxyXG4gICAgICovXHJcbiAgICBPcGVuKGluZm86IEluZm9Cb3hDb21wb25lbnQsIGxvYz86IElMYXRMb25nKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgaW5mbyB3aW5kb3cgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpbmZvXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVJbmZvQm94U2VydmljZVxyXG4gICAgICovXHJcbiAgICBTZXRPcHRpb25zKGluZm86IEluZm9Cb3hDb21wb25lbnQsIG9wdGlvbnM6IElJbmZvV2luZG93T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGluZm8gd2luZG93IHBvc2l0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGluZm9cclxuICAgICAqIEBwYXJhbSBsYXRsbmdcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlSW5mb0JveFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgU2V0UG9zaXRpb24oaW5mbzogSW5mb0JveENvbXBvbmVudCwgbGF0bG5nOiBJTGF0TG9uZyk6IFByb21pc2U8dm9pZD47XHJcbn1cclxuIl19