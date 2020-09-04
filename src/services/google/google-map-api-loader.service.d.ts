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
 * Bing Maps V8 specific loader configuration to be used with the {@link GoogleMapAPILoader}
 *
 * @export
 */
export declare class GoogleMapAPILoaderConfig {
    /**
       * The Google Maps API Key (see:
       * https://developers.google.com/maps/documentation/javascript/get-api-key)
       */
    apiKey?: string;
    /**
     * The Google Maps client ID (for premium plans).
     * When you have a Google Maps APIs Premium Plan license, you must authenticate
     * your application with either an API key or a client ID.
     * The Google Maps API will fail to load if both a client ID and an API key are included.
     */
    clientId?: string;
    /**
     * The Google Maps channel name (for premium plans).
     * A channel parameter is an optional parameter that allows you to track usage under your client
     * ID by assigning a distinct channel to each of your applications.
     */
    channel?: string;
    /**
     * Google Maps API version.
     */
    apiVersion?: string;
    /**
     * Host and Path used for the `<script>` tag.
     */
    hostAndPath?: string;
    /**
     * Protocol used for the `<script>` tag.
     */
    protocol?: ScriptProtocol;
    /**
     * Defines which Google Maps libraries should get loaded.
     */
    libraries?: string[];
    /**
     * The default bias for the map behavior is US.
     * If you wish to alter your application to serve different map tiles or bias the
     * application, you can overwrite the default behavior (US) by defining a `region`.
     * See https://developers.google.com/maps/documentation/javascript/basics#Region
     */
    region?: string;
    /**
     * The Google Maps API uses the browser's preferred language when displaying
     * textual information. If you wish to overwrite this behavior and force the API
     * to use a given language, you can use this setting.
     * See https://developers.google.com/maps/documentation/javascript/basics#Language
     */
    language?: string;
    /**
     * The Google Maps API requires a separate library for clustering. Set the property
     * to true in order to load this library.
     * See https://developers.google.com/maps/documentation/javascript/marker-clustering
     */
    enableClustering?: boolean;
    /**
     * Host and Path used for the cluster library `<script>` tag.
     */
    clusterHostAndPath?: string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GoogleMapAPILoaderConfig, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<GoogleMapAPILoaderConfig>;
}
/**
 * Bing Maps V8 implementation for the {@link MapAPILoader} service.
 *
 * @export
 */
export declare class GoogleMapAPILoader extends MapAPILoader {
    private _config;
    private _windowRef;
    private _documentRef;
    private _scriptLoadingPromise;
    /**
     * Gets the loader configuration.
     *
     * @readonly
     * @memberof GoogleMapAPILoader
     */
    readonly Config: GoogleMapAPILoaderConfig;
    /**
     * Creates an instance of GoogleMapAPILoader.
     * @param _config - The loader configuration.
     * @param _windowRef - An instance of {@link WindowRef}. Necessary because Bing Map V8 interacts with the window object.
     * @param _documentRef - An instance of {@link DocumentRef}.
     *                                     Necessary because Bing Map V8 interacts with the document object.
     * @memberof GoogleMapAPILoader
     */
    constructor(_config: GoogleMapAPILoaderConfig, _windowRef: WindowRef, _documentRef: DocumentRef);
    /**
     * Loads the necessary resources for Bing Maps V8.
     *
     * @memberof GoogleMapAPILoader
     */
    Load(): Promise<void>;
    /**
     * Gets the Google Maps scripts url for injections into the header.
     *
     * @param callbackName - Name of the function to be called when the Google Maps scripts are loaded.
     * @returns - The url to be used to load the Google Map scripts.
     *
     * @memberof GoogleMapAPILoader
     */
    private GetMapsScriptSrc(callbackName);
    /**
     * Gets the Google Maps Cluster library url for injections into the header.
     *
     * @returns - The url to be used to load the Google Map Cluster library.
     *
     * @memberof GoogleMapAPILoader
     */
    private GetClusterScriptSrc();
    /**
     * Gets a scripts url for injections into the header.
     *
     * @param hostAndPath - Host and path name of the script to load.
     * @param queryParams - Url query parameters.
     * @returns - The url with correct protocol, path, and query parameters.
     *
     * @memberof GoogleMapAPILoader
     */
    private GetScriptSrc(hostAndPath, queryParams);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GoogleMapAPILoader, [{ optional: true; }, null, null]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<GoogleMapAPILoader>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcC1hcGktbG9hZGVyLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiZ29vZ2xlLW1hcC1hcGktbG9hZGVyLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXBBUElMb2FkZXIsIFdpbmRvd1JlZiwgRG9jdW1lbnRSZWYgfSBmcm9tICcuLi9tYXBhcGlsb2FkZXInO1xyXG4vKipcclxuICogUHJvdG9jb2wgZW51bWVyYXRpb25cclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAZW51bSB7bnVtYmVyfVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZW51bSBTY3JpcHRQcm90b2NvbCB7XHJcbiAgICBIVFRQID0gMCxcclxuICAgIEhUVFBTID0gMSxcclxuICAgIEFVVE8gPSAyLFxyXG59XHJcbi8qKlxyXG4gKiBCaW5nIE1hcHMgVjggc3BlY2lmaWMgbG9hZGVyIGNvbmZpZ3VyYXRpb24gdG8gYmUgdXNlZCB3aXRoIHRoZSB7QGxpbmsgR29vZ2xlTWFwQVBJTG9hZGVyfVxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHb29nbGVNYXBBUElMb2FkZXJDb25maWcge1xyXG4gICAgLyoqXHJcbiAgICAgICAqIFRoZSBHb29nbGUgTWFwcyBBUEkgS2V5IChzZWU6XHJcbiAgICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L2dldC1hcGkta2V5KVxyXG4gICAgICAgKi9cclxuICAgIGFwaUtleT86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogVGhlIEdvb2dsZSBNYXBzIGNsaWVudCBJRCAoZm9yIHByZW1pdW0gcGxhbnMpLlxyXG4gICAgICogV2hlbiB5b3UgaGF2ZSBhIEdvb2dsZSBNYXBzIEFQSXMgUHJlbWl1bSBQbGFuIGxpY2Vuc2UsIHlvdSBtdXN0IGF1dGhlbnRpY2F0ZVxyXG4gICAgICogeW91ciBhcHBsaWNhdGlvbiB3aXRoIGVpdGhlciBhbiBBUEkga2V5IG9yIGEgY2xpZW50IElELlxyXG4gICAgICogVGhlIEdvb2dsZSBNYXBzIEFQSSB3aWxsIGZhaWwgdG8gbG9hZCBpZiBib3RoIGEgY2xpZW50IElEIGFuZCBhbiBBUEkga2V5IGFyZSBpbmNsdWRlZC5cclxuICAgICAqL1xyXG4gICAgY2xpZW50SWQ/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBHb29nbGUgTWFwcyBjaGFubmVsIG5hbWUgKGZvciBwcmVtaXVtIHBsYW5zKS5cclxuICAgICAqIEEgY2hhbm5lbCBwYXJhbWV0ZXIgaXMgYW4gb3B0aW9uYWwgcGFyYW1ldGVyIHRoYXQgYWxsb3dzIHlvdSB0byB0cmFjayB1c2FnZSB1bmRlciB5b3VyIGNsaWVudFxyXG4gICAgICogSUQgYnkgYXNzaWduaW5nIGEgZGlzdGluY3QgY2hhbm5lbCB0byBlYWNoIG9mIHlvdXIgYXBwbGljYXRpb25zLlxyXG4gICAgICovXHJcbiAgICBjaGFubmVsPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHb29nbGUgTWFwcyBBUEkgdmVyc2lvbi5cclxuICAgICAqL1xyXG4gICAgYXBpVmVyc2lvbj86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogSG9zdCBhbmQgUGF0aCB1c2VkIGZvciB0aGUgYDxzY3JpcHQ+YCB0YWcuXHJcbiAgICAgKi9cclxuICAgIGhvc3RBbmRQYXRoPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQcm90b2NvbCB1c2VkIGZvciB0aGUgYDxzY3JpcHQ+YCB0YWcuXHJcbiAgICAgKi9cclxuICAgIHByb3RvY29sPzogU2NyaXB0UHJvdG9jb2w7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hpY2ggR29vZ2xlIE1hcHMgbGlicmFyaWVzIHNob3VsZCBnZXQgbG9hZGVkLlxyXG4gICAgICovXHJcbiAgICBsaWJyYXJpZXM/OiBzdHJpbmdbXTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGRlZmF1bHQgYmlhcyBmb3IgdGhlIG1hcCBiZWhhdmlvciBpcyBVUy5cclxuICAgICAqIElmIHlvdSB3aXNoIHRvIGFsdGVyIHlvdXIgYXBwbGljYXRpb24gdG8gc2VydmUgZGlmZmVyZW50IG1hcCB0aWxlcyBvciBiaWFzIHRoZVxyXG4gICAgICogYXBwbGljYXRpb24sIHlvdSBjYW4gb3ZlcndyaXRlIHRoZSBkZWZhdWx0IGJlaGF2aW9yIChVUykgYnkgZGVmaW5pbmcgYSBgcmVnaW9uYC5cclxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9iYXNpY3MjUmVnaW9uXHJcbiAgICAgKi9cclxuICAgIHJlZ2lvbj86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogVGhlIEdvb2dsZSBNYXBzIEFQSSB1c2VzIHRoZSBicm93c2VyJ3MgcHJlZmVycmVkIGxhbmd1YWdlIHdoZW4gZGlzcGxheWluZ1xyXG4gICAgICogdGV4dHVhbCBpbmZvcm1hdGlvbi4gSWYgeW91IHdpc2ggdG8gb3ZlcndyaXRlIHRoaXMgYmVoYXZpb3IgYW5kIGZvcmNlIHRoZSBBUElcclxuICAgICAqIHRvIHVzZSBhIGdpdmVuIGxhbmd1YWdlLCB5b3UgY2FuIHVzZSB0aGlzIHNldHRpbmcuXHJcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvYmFzaWNzI0xhbmd1YWdlXHJcbiAgICAgKi9cclxuICAgIGxhbmd1YWdlPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgR29vZ2xlIE1hcHMgQVBJIHJlcXVpcmVzIGEgc2VwYXJhdGUgbGlicmFyeSBmb3IgY2x1c3RlcmluZy4gU2V0IHRoZSBwcm9wZXJ0eVxyXG4gICAgICogdG8gdHJ1ZSBpbiBvcmRlciB0byBsb2FkIHRoaXMgbGlicmFyeS5cclxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9tYXJrZXItY2x1c3RlcmluZ1xyXG4gICAgICovXHJcbiAgICBlbmFibGVDbHVzdGVyaW5nPzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogSG9zdCBhbmQgUGF0aCB1c2VkIGZvciB0aGUgY2x1c3RlciBsaWJyYXJ5IGA8c2NyaXB0PmAgdGFnLlxyXG4gICAgICovXHJcbiAgICBjbHVzdGVySG9zdEFuZFBhdGg/OiBzdHJpbmc7XHJcbn1cclxuLyoqXHJcbiAqIEJpbmcgTWFwcyBWOCBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIHtAbGluayBNYXBBUElMb2FkZXJ9IHNlcnZpY2UuXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEdvb2dsZU1hcEFQSUxvYWRlciBleHRlbmRzIE1hcEFQSUxvYWRlciB7XHJcbiAgICBwcml2YXRlIF9jb25maWc7XHJcbiAgICBwcml2YXRlIF93aW5kb3dSZWY7XHJcbiAgICBwcml2YXRlIF9kb2N1bWVudFJlZjtcclxuICAgIHByaXZhdGUgX3NjcmlwdExvYWRpbmdQcm9taXNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBsb2FkZXIgY29uZmlndXJhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVNYXBBUElMb2FkZXJcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgQ29uZmlnOiBHb29nbGVNYXBBUElMb2FkZXJDb25maWc7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgR29vZ2xlTWFwQVBJTG9hZGVyLlxyXG4gICAgICogQHBhcmFtIF9jb25maWcgLSBUaGUgbG9hZGVyIGNvbmZpZ3VyYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gX3dpbmRvd1JlZiAtIEFuIGluc3RhbmNlIG9mIHtAbGluayBXaW5kb3dSZWZ9LiBOZWNlc3NhcnkgYmVjYXVzZSBCaW5nIE1hcCBWOCBpbnRlcmFjdHMgd2l0aCB0aGUgd2luZG93IG9iamVjdC5cclxuICAgICAqIEBwYXJhbSBfZG9jdW1lbnRSZWYgLSBBbiBpbnN0YW5jZSBvZiB7QGxpbmsgRG9jdW1lbnRSZWZ9LlxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVjZXNzYXJ5IGJlY2F1c2UgQmluZyBNYXAgVjggaW50ZXJhY3RzIHdpdGggdGhlIGRvY3VtZW50IG9iamVjdC5cclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVNYXBBUElMb2FkZXJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoX2NvbmZpZzogR29vZ2xlTWFwQVBJTG9hZGVyQ29uZmlnLCBfd2luZG93UmVmOiBXaW5kb3dSZWYsIF9kb2N1bWVudFJlZjogRG9jdW1lbnRSZWYpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyB0aGUgbmVjZXNzYXJ5IHJlc291cmNlcyBmb3IgQmluZyBNYXBzIFY4LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVNYXBBUElMb2FkZXJcclxuICAgICAqL1xyXG4gICAgTG9hZCgpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBHb29nbGUgTWFwcyBzY3JpcHRzIHVybCBmb3IgaW5qZWN0aW9ucyBpbnRvIHRoZSBoZWFkZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrTmFtZSAtIE5hbWUgb2YgdGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBHb29nbGUgTWFwcyBzY3JpcHRzIGFyZSBsb2FkZWQuXHJcbiAgICAgKiBAcmV0dXJucyAtIFRoZSB1cmwgdG8gYmUgdXNlZCB0byBsb2FkIHRoZSBHb29nbGUgTWFwIHNjcmlwdHMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZU1hcEFQSUxvYWRlclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIEdldE1hcHNTY3JpcHRTcmMoY2FsbGJhY2tOYW1lKTtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgR29vZ2xlIE1hcHMgQ2x1c3RlciBsaWJyYXJ5IHVybCBmb3IgaW5qZWN0aW9ucyBpbnRvIHRoZSBoZWFkZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgLSBUaGUgdXJsIHRvIGJlIHVzZWQgdG8gbG9hZCB0aGUgR29vZ2xlIE1hcCBDbHVzdGVyIGxpYnJhcnkuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZU1hcEFQSUxvYWRlclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIEdldENsdXN0ZXJTY3JpcHRTcmMoKTtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIHNjcmlwdHMgdXJsIGZvciBpbmplY3Rpb25zIGludG8gdGhlIGhlYWRlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaG9zdEFuZFBhdGggLSBIb3N0IGFuZCBwYXRoIG5hbWUgb2YgdGhlIHNjcmlwdCB0byBsb2FkLlxyXG4gICAgICogQHBhcmFtIHF1ZXJ5UGFyYW1zIC0gVXJsIHF1ZXJ5IHBhcmFtZXRlcnMuXHJcbiAgICAgKiBAcmV0dXJucyAtIFRoZSB1cmwgd2l0aCBjb3JyZWN0IHByb3RvY29sLCBwYXRoLCBhbmQgcXVlcnkgcGFyYW1ldGVycy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlTWFwQVBJTG9hZGVyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgR2V0U2NyaXB0U3JjKGhvc3RBbmRQYXRoLCBxdWVyeVBhcmFtcyk7XHJcbn1cclxuIl19