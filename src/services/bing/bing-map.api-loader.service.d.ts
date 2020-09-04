import { MapAPILoader, WindowRef, DocumentRef } from '../mapapiloader';
/**
 * Protocol enumeration
 *
 * @export
 * @enum {number}
 */
import * as ɵngcc0 from '@angular/core';
export declare enum ScriptProtocol {
    HTTP = 0,
    HTTPS = 1,
    AUTO = 2,
}
/**
 * Bing Maps V8 specific loader configuration to be used with the {@link BingMapAPILoader}
 *
 * @export
 */
export declare class BingMapAPILoaderConfig {
    apiKey: string;
    hostAndPath: string;
    protocol: ScriptProtocol;
    branch: string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BingMapAPILoaderConfig, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BingMapAPILoaderConfig>;
}
/**
 * Bing Maps V8 implementation for the {@link MapAPILoader} service.
 *
 * @export
 */
export declare class BingMapAPILoader extends MapAPILoader {
    private _config;
    private _windowRef;
    private _documentRef;
    private _scriptLoadingPromise;
    /**
     * Gets the loader configuration.
     *
     * @readonly
     * @memberof BingMapAPILoader
     */
    readonly Config: BingMapAPILoaderConfig;
    /**
     * Creates an instance of BingMapAPILoader.
     * @param _config  - The loader configuration.
     * @param _windowRef - An instance of {@link WindowRef}. Necessary because Bing Map V8 interacts with the window object.
     * @param _documentRef - An instance of {@link DocumentRef}.
     * Necessary because Bing Map V8 interacts with the document object.
     *
     * @memberof BingMapAPILoader
     */
    constructor(_config: BingMapAPILoaderConfig, _windowRef: WindowRef, _documentRef: DocumentRef);
    /**
     * Loads the necessary resources for Bing Maps V8.
     *
     * @memberof BingMapAPILoader
     */
    Load(): Promise<void>;
    /**
     * Gets the Bing Map V8 scripts url for injections into the header.
     *
     * @param callbackName - Name of the function to be called when the Bing Maps V8 scripts are loaded.
     * @returns - The url to be used to load the Bing Map scripts.
     *
     * @memberof BingMapAPILoader
     */
    private GetScriptSrc(callbackName);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BingMapAPILoader, [{ optional: true; }, null, null]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BingMapAPILoader>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZy1tYXAuYXBpLWxvYWRlci5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImJpbmctbWFwLmFwaS1sb2FkZXIuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwQVBJTG9hZGVyLCBXaW5kb3dSZWYsIERvY3VtZW50UmVmIH0gZnJvbSAnLi4vbWFwYXBpbG9hZGVyJztcclxuLyoqXHJcbiAqIFByb3RvY29sIGVudW1lcmF0aW9uXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGVudW0ge251bWJlcn1cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGVudW0gU2NyaXB0UHJvdG9jb2wge1xyXG4gICAgSFRUUCA9IDAsXHJcbiAgICBIVFRQUyA9IDEsXHJcbiAgICBBVVRPID0gMixcclxufVxyXG4vKipcclxuICogQmluZyBNYXBzIFY4IHNwZWNpZmljIGxvYWRlciBjb25maWd1cmF0aW9uIHRvIGJlIHVzZWQgd2l0aCB0aGUge0BsaW5rIEJpbmdNYXBBUElMb2FkZXJ9XHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEJpbmdNYXBBUElMb2FkZXJDb25maWcge1xyXG4gICAgYXBpS2V5OiBzdHJpbmc7XHJcbiAgICBob3N0QW5kUGF0aDogc3RyaW5nO1xyXG4gICAgcHJvdG9jb2w6IFNjcmlwdFByb3RvY29sO1xyXG4gICAgYnJhbmNoOiBzdHJpbmc7XHJcbn1cclxuLyoqXHJcbiAqIEJpbmcgTWFwcyBWOCBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIHtAbGluayBNYXBBUElMb2FkZXJ9IHNlcnZpY2UuXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEJpbmdNYXBBUElMb2FkZXIgZXh0ZW5kcyBNYXBBUElMb2FkZXIge1xyXG4gICAgcHJpdmF0ZSBfY29uZmlnO1xyXG4gICAgcHJpdmF0ZSBfd2luZG93UmVmO1xyXG4gICAgcHJpdmF0ZSBfZG9jdW1lbnRSZWY7XHJcbiAgICBwcml2YXRlIF9zY3JpcHRMb2FkaW5nUHJvbWlzZTtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbG9hZGVyIGNvbmZpZ3VyYXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ01hcEFQSUxvYWRlclxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBDb25maWc6IEJpbmdNYXBBUElMb2FkZXJDb25maWc7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQmluZ01hcEFQSUxvYWRlci5cclxuICAgICAqIEBwYXJhbSBfY29uZmlnICAtIFRoZSBsb2FkZXIgY29uZmlndXJhdGlvbi5cclxuICAgICAqIEBwYXJhbSBfd2luZG93UmVmIC0gQW4gaW5zdGFuY2Ugb2Yge0BsaW5rIFdpbmRvd1JlZn0uIE5lY2Vzc2FyeSBiZWNhdXNlIEJpbmcgTWFwIFY4IGludGVyYWN0cyB3aXRoIHRoZSB3aW5kb3cgb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIF9kb2N1bWVudFJlZiAtIEFuIGluc3RhbmNlIG9mIHtAbGluayBEb2N1bWVudFJlZn0uXHJcbiAgICAgKiBOZWNlc3NhcnkgYmVjYXVzZSBCaW5nIE1hcCBWOCBpbnRlcmFjdHMgd2l0aCB0aGUgZG9jdW1lbnQgb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nTWFwQVBJTG9hZGVyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKF9jb25maWc6IEJpbmdNYXBBUElMb2FkZXJDb25maWcsIF93aW5kb3dSZWY6IFdpbmRvd1JlZiwgX2RvY3VtZW50UmVmOiBEb2N1bWVudFJlZik7XHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIHRoZSBuZWNlc3NhcnkgcmVzb3VyY2VzIGZvciBCaW5nIE1hcHMgVjguXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdNYXBBUElMb2FkZXJcclxuICAgICAqL1xyXG4gICAgTG9hZCgpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBCaW5nIE1hcCBWOCBzY3JpcHRzIHVybCBmb3IgaW5qZWN0aW9ucyBpbnRvIHRoZSBoZWFkZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrTmFtZSAtIE5hbWUgb2YgdGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBCaW5nIE1hcHMgVjggc2NyaXB0cyBhcmUgbG9hZGVkLlxyXG4gICAgICogQHJldHVybnMgLSBUaGUgdXJsIHRvIGJlIHVzZWQgdG8gbG9hZCB0aGUgQmluZyBNYXAgc2NyaXB0cy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ01hcEFQSUxvYWRlclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIEdldFNjcmlwdFNyYyhjYWxsYmFja05hbWUpO1xyXG59XHJcbiJdfQ==