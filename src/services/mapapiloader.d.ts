/**
 * Abstract implementation. USed for defintion only and as a base to implement your
 * own provider.
 *
 * @export
 * @abstract
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class MapAPILoader {
    /**
     * Loads the necessary resources for a given map architecture.
     *
     * @abstract
     * @returns - Promise fullfilled when the resources have been loaded.
     *
     * @memberof MapAPILoader
     */
    abstract Load(): Promise<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MapAPILoader, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<MapAPILoader>;
}
/**
 * Document Reference service to assist with abstracting the availability of document. Needed for AOT and
 * Server Side rendering
 *
 * @export
 */
export declare class DocumentRef {
    /**
     * Gets whether a document implementation is available. Generally will be true in the browser and false otherwise, unless there
     * there is a browser-less implementation in the current non-browser environment.
     *
     * @readonly
     * @memberof DocumentRef
     */
    readonly IsAvailable: boolean;
    /**
     * Returns the document object of the current environment.
     *
     * @returns - The document object.
     *
     * @memberof DocumentRef
     */
    GetNativeDocument(): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DocumentRef, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<DocumentRef>;
}
/**
 * Window Reference service to assist with abstracting the availability of window. Needed for AOT and
 * Server Side rendering
 *
 * @export
 */
export declare class WindowRef {
    /**
     * Gets whether a window implementation is available. Generally will be true in the browser and false otherwise, unless there
     * there is a browser-less implementation in the current non-browser environment.
     *
     * @readonly
     * @memberof WindowRef
     */
    readonly IsAvailable: boolean;
    /**
     * Returns the window object of the current environment.
     *
     * @returns - The window object.
     *
     * @memberof WindowRef
     */
    GetNativeWindow(): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<WindowRef, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<WindowRef>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwYXBpbG9hZGVyLmQudHMiLCJzb3VyY2VzIjpbIm1hcGFwaWxvYWRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQWJzdHJhY3QgaW1wbGVtZW50YXRpb24uIFVTZWQgZm9yIGRlZmludGlvbiBvbmx5IGFuZCBhcyBhIGJhc2UgdG8gaW1wbGVtZW50IHlvdXJcclxuICogb3duIHByb3ZpZGVyLlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBhYnN0cmFjdFxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgTWFwQVBJTG9hZGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgdGhlIG5lY2Vzc2FyeSByZXNvdXJjZXMgZm9yIGEgZ2l2ZW4gbWFwIGFyY2hpdGVjdHVyZS5cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEByZXR1cm5zIC0gUHJvbWlzZSBmdWxsZmlsbGVkIHdoZW4gdGhlIHJlc291cmNlcyBoYXZlIGJlZW4gbG9hZGVkLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBBUElMb2FkZXJcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgTG9hZCgpOiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcbi8qKlxyXG4gKiBEb2N1bWVudCBSZWZlcmVuY2Ugc2VydmljZSB0byBhc3Npc3Qgd2l0aCBhYnN0cmFjdGluZyB0aGUgYXZhaWxhYmlsaXR5IG9mIGRvY3VtZW50LiBOZWVkZWQgZm9yIEFPVCBhbmRcclxuICogU2VydmVyIFNpZGUgcmVuZGVyaW5nXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERvY3VtZW50UmVmIHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB3aGV0aGVyIGEgZG9jdW1lbnQgaW1wbGVtZW50YXRpb24gaXMgYXZhaWxhYmxlLiBHZW5lcmFsbHkgd2lsbCBiZSB0cnVlIGluIHRoZSBicm93c2VyIGFuZCBmYWxzZSBvdGhlcndpc2UsIHVubGVzcyB0aGVyZVxyXG4gICAgICogdGhlcmUgaXMgYSBicm93c2VyLWxlc3MgaW1wbGVtZW50YXRpb24gaW4gdGhlIGN1cnJlbnQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAbWVtYmVyb2YgRG9jdW1lbnRSZWZcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgSXNBdmFpbGFibGU6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGRvY3VtZW50IG9iamVjdCBvZiB0aGUgY3VycmVudCBlbnZpcm9ubWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyAtIFRoZSBkb2N1bWVudCBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIERvY3VtZW50UmVmXHJcbiAgICAgKi9cclxuICAgIEdldE5hdGl2ZURvY3VtZW50KCk6IGFueTtcclxufVxyXG4vKipcclxuICogV2luZG93IFJlZmVyZW5jZSBzZXJ2aWNlIHRvIGFzc2lzdCB3aXRoIGFic3RyYWN0aW5nIHRoZSBhdmFpbGFiaWxpdHkgb2Ygd2luZG93LiBOZWVkZWQgZm9yIEFPVCBhbmRcclxuICogU2VydmVyIFNpZGUgcmVuZGVyaW5nXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFdpbmRvd1JlZiB7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgd2hldGhlciBhIHdpbmRvdyBpbXBsZW1lbnRhdGlvbiBpcyBhdmFpbGFibGUuIEdlbmVyYWxseSB3aWxsIGJlIHRydWUgaW4gdGhlIGJyb3dzZXIgYW5kIGZhbHNlIG90aGVyd2lzZSwgdW5sZXNzIHRoZXJlXHJcbiAgICAgKiB0aGVyZSBpcyBhIGJyb3dzZXItbGVzcyBpbXBsZW1lbnRhdGlvbiBpbiB0aGUgY3VycmVudCBub24tYnJvd3NlciBlbnZpcm9ubWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEBtZW1iZXJvZiBXaW5kb3dSZWZcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgSXNBdmFpbGFibGU6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHdpbmRvdyBvYmplY3Qgb2YgdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgLSBUaGUgd2luZG93IG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgV2luZG93UmVmXHJcbiAgICAgKi9cclxuICAgIEdldE5hdGl2ZVdpbmRvdygpOiBhbnk7XHJcbn1cclxuIl19