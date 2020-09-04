import { Observable } from 'rxjs';
import { InfoBoxComponent } from '../components/infobox';
import { IInfoWindowOptions } from '../interfaces/iinfo-window-options';
import { ILatLong } from '../interfaces/ilatlong';
/**
 * This class defines the contract for an InfoBoxService. Each Map Architecture provider is expected the furnish a concrete implementation.
 *
 * @export
 * @abstract
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class InfoBoxService {
    /**
     * Adds an info window to the map or layer.
     *
     * @abstract
     * @param info - {@link InfoBoxComponent} component object representing the infobox.
     *
     * @memberof InfoBoxService
     */
    abstract AddInfoWindow(info: InfoBoxComponent): void;
    /**
     * Closes an infobox that is open.
     *
     * @abstract
     * @param info - {@link InfoBoxComponent} component object representing the infobox.
     * @returns - A promise that is fullfilled when the infobox has been closed.
     *
     * @memberof InfoBoxService
     */
    abstract Close(info: InfoBoxComponent): Promise<void>;
    /**
     * Subscribe to events on the infowindow.
     *
     * @abstract
     * @param eventName - The name of the event to register (e.g. 'click')
     * @param infoComponent - The {@link InfoBoxComponent} for which to register the event.
     * @returns - Observable emiting an instance of T each time the event occurs.
     *
     * @memberof InfoBoxService
     */
    abstract CreateEventObservable<T>(event: string, infoBoxComponent: InfoBoxComponent): Observable<T>;
    /**
     * Deletes an infobox.
     *
     * @abstract
     * @param info - {@link InfoBoxComponent} component object representing the infobox.
     * @returns - A promise that is fullfilled when the infobox has been deleted.
     *
     * @memberof InfoBoxService
     */
    abstract DeleteInfoWindow(info: InfoBoxComponent): Promise<void>;
    /**
     * Opens an infobox that is closed.
     *
     * @abstract
     * @param info - {@link InfoBoxComponent} component object representing the infobox.
     * @returns - A promise that is fullfilled when the infobox has been opened.
     *
     * @memberof InfoBoxService
     */
    abstract Open(info: InfoBoxComponent, loc?: ILatLong): Promise<void>;
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
    abstract SetOptions(info: InfoBoxComponent, options: IInfoWindowOptions): Promise<void>;
    /**
     * Set the position of the infobox based on the properties set on the InfoBox component.
     *
     * @abstract
     * @param info - {@link InfoBoxComponent} component object representing the infobox.
     * @param latlng - The position to set
     * @returns - A promise that is fullfilled when the infobox position has been updated.
     *
     * @memberof InfoBoxService
     */
    abstract SetPosition(info: InfoBoxComponent, latlng?: ILatLong): Promise<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InfoBoxService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<InfoBoxService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mb2JveC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImluZm9ib3guc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBJbmZvQm94Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9pbmZvYm94JztcclxuaW1wb3J0IHsgSUluZm9XaW5kb3dPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9paW5mby13aW5kb3ctb3B0aW9ucyc7XHJcbmltcG9ydCB7IElMYXRMb25nIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbGF0bG9uZyc7XHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGRlZmluZXMgdGhlIGNvbnRyYWN0IGZvciBhbiBJbmZvQm94U2VydmljZS4gRWFjaCBNYXAgQXJjaGl0ZWN0dXJlIHByb3ZpZGVyIGlzIGV4cGVjdGVkIHRoZSBmdXJuaXNoIGEgY29uY3JldGUgaW1wbGVtZW50YXRpb24uXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGFic3RyYWN0XHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBJbmZvQm94U2VydmljZSB7XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYW4gaW5mbyB3aW5kb3cgdG8gdGhlIG1hcCBvciBsYXllci5cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBpbmZvIC0ge0BsaW5rIEluZm9Cb3hDb21wb25lbnR9IGNvbXBvbmVudCBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBpbmZvYm94LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbmZvQm94U2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBBZGRJbmZvV2luZG93KGluZm86IEluZm9Cb3hDb21wb25lbnQpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZXMgYW4gaW5mb2JveCB0aGF0IGlzIG9wZW4uXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gaW5mbyAtIHtAbGluayBJbmZvQm94Q29tcG9uZW50fSBjb21wb25lbnQgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgaW5mb2JveC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsbGZpbGxlZCB3aGVuIHRoZSBpbmZvYm94IGhhcyBiZWVuIGNsb3NlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5mb0JveFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgQ2xvc2UoaW5mbzogSW5mb0JveENvbXBvbmVudCk6IFByb21pc2U8dm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIFN1YnNjcmliZSB0byBldmVudHMgb24gdGhlIGluZm93aW5kb3cuXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIHJlZ2lzdGVyIChlLmcuICdjbGljaycpXHJcbiAgICAgKiBAcGFyYW0gaW5mb0NvbXBvbmVudCAtIFRoZSB7QGxpbmsgSW5mb0JveENvbXBvbmVudH0gZm9yIHdoaWNoIHRvIHJlZ2lzdGVyIHRoZSBldmVudC5cclxuICAgICAqIEByZXR1cm5zIC0gT2JzZXJ2YWJsZSBlbWl0aW5nIGFuIGluc3RhbmNlIG9mIFQgZWFjaCB0aW1lIHRoZSBldmVudCBvY2N1cnMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEluZm9Cb3hTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IENyZWF0ZUV2ZW50T2JzZXJ2YWJsZTxUPihldmVudDogc3RyaW5nLCBpbmZvQm94Q29tcG9uZW50OiBJbmZvQm94Q29tcG9uZW50KTogT2JzZXJ2YWJsZTxUPjtcclxuICAgIC8qKlxyXG4gICAgICogRGVsZXRlcyBhbiBpbmZvYm94LlxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQHBhcmFtIGluZm8gLSB7QGxpbmsgSW5mb0JveENvbXBvbmVudH0gY29tcG9uZW50IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGluZm9ib3guXHJcbiAgICAgKiBAcmV0dXJucyAtIEEgcHJvbWlzZSB0aGF0IGlzIGZ1bGxmaWxsZWQgd2hlbiB0aGUgaW5mb2JveCBoYXMgYmVlbiBkZWxldGVkLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbmZvQm94U2VydmljZVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBEZWxldGVJbmZvV2luZG93KGluZm86IEluZm9Cb3hDb21wb25lbnQpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBPcGVucyBhbiBpbmZvYm94IHRoYXQgaXMgY2xvc2VkLlxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQHBhcmFtIGluZm8gLSB7QGxpbmsgSW5mb0JveENvbXBvbmVudH0gY29tcG9uZW50IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGluZm9ib3guXHJcbiAgICAgKiBAcmV0dXJucyAtIEEgcHJvbWlzZSB0aGF0IGlzIGZ1bGxmaWxsZWQgd2hlbiB0aGUgaW5mb2JveCBoYXMgYmVlbiBvcGVuZWQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEluZm9Cb3hTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IE9wZW4oaW5mbzogSW5mb0JveENvbXBvbmVudCwgbG9jPzogSUxhdExvbmcpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBpbmZvYm94IG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gaW5mbyAtIHtAbGluayBJbmZvQm94Q29tcG9uZW50fSBjb21wb25lbnQgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgaW5mb2JveC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0ge0BsaW5rIElJbmZvV2luZG93T3B0aW9uc30gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9wdGlvbnMgdG8gc2V0LiBPcHRpb25zIHByb3ZpZGVkIGFyZVxyXG4gICAgICogbWVyZ2VkIHdpdGggdGhlIGV4aXN0aW5nIG9wdGlvbnMgb2YgdGhlIHVuZGVybHlpbmcgaW5mb2JveC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsbGZpbGxlZCB3aGVuIHRoZSBpbmZvYm94IG9wdGlvbnMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEluZm9Cb3hTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IFNldE9wdGlvbnMoaW5mbzogSW5mb0JveENvbXBvbmVudCwgb3B0aW9uczogSUluZm9XaW5kb3dPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgaW5mb2JveCBiYXNlZCBvbiB0aGUgcHJvcGVydGllcyBzZXQgb24gdGhlIEluZm9Cb3ggY29tcG9uZW50LlxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQHBhcmFtIGluZm8gLSB7QGxpbmsgSW5mb0JveENvbXBvbmVudH0gY29tcG9uZW50IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGluZm9ib3guXHJcbiAgICAgKiBAcGFyYW0gbGF0bG5nIC0gVGhlIHBvc2l0aW9uIHRvIHNldFxyXG4gICAgICogQHJldHVybnMgLSBBIHByb21pc2UgdGhhdCBpcyBmdWxsZmlsbGVkIHdoZW4gdGhlIGluZm9ib3ggcG9zaXRpb24gaGFzIGJlZW4gdXBkYXRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5mb0JveFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgU2V0UG9zaXRpb24oaW5mbzogSW5mb0JveENvbXBvbmVudCwgbGF0bG5nPzogSUxhdExvbmcpOiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcbiJdfQ==