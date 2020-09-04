import { OnInit, OnDestroy, OnChanges, SimpleChange, ViewContainerRef } from '@angular/core';
import { LayerService } from '../services/layer.service';
import { MapMarkerDirective } from './map-marker';
/**
 * MapLayerDirective creates a layer on a {@link MapComponent}.
 *
 * ### Example
 * ```typescript
 * import {Component} from '@angular/core';
 * import {MapComponent, MapMarkerDirective} from '...';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *   .map-container {
 *     height: 300px;
 *   }
 * `],
 * template: `
 *   <x-map [Latitude]='lat' [Longitude]='lng' [Zoom]='zoom'>
 *     <x-map-layer [Visible]='visible'>
 *         <x-map-marker [Latitude]='lat' [Longitude]='lng' [Label]=''M''></x-map-marker>
 *     </x-map-layer>
 *   </x-map>
 * `
 * })
 * ```
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class MapLayerDirective implements OnInit, OnDestroy, OnChanges {
    protected _layerService: LayerService;
    protected _containerRef: ViewContainerRef;
    protected _visible: boolean;
    protected _addedToManager: boolean;
    protected _id: number;
    protected _markers: Array<MapMarkerDirective>;
    /**
     * Gets or sets the layer visibility.
     *
     * @memberof MapLayerDirective
     */
    Visible: boolean;
    /**
     * Gets the layer id.
     *
     * @readonly
     * @memberof MapLayerDirective
     */
    readonly Id: number;
    /**
     * Creates an instance of MapLayerDirective.
     * @param _layerService - Concreted implementation of a layer service for the underlying maps implementations.
     * Generally provided via injections.
     * @param _containerRef - Reference to the container hosting the map canvas. Generally provided via injection.
     *
     * @memberof MapLayerDirective
     */
    constructor(_layerService: LayerService, _containerRef: ViewContainerRef);
    /**
     * Called on Component initialization. Part of ng Component life cycle.
     *
     * @memberof MapLayerDirective
     */
    ngOnInit(): void;
    /**
     * Called when changes to the databoud properties occur. Part of the ng Component life cycle.
     *
     * @param changes - Changes that have occured.
     *
     * @memberof MapLayerDirective
     */
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    /**
     * Called on component destruction. Frees the resources used by the component. Part of the ng Component life cycle.
     *
     *
     * @memberof MapLayerDirective
     */
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MapLayerDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MapLayerDirective, "x-map-layer", never, { "Visible": "Visible"; }, {}, ["_markers"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheWVyLmQudHMiLCJzb3VyY2VzIjpbIm1hcC1sYXllci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2UsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTGF5ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGF5ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcE1hcmtlckRpcmVjdGl2ZSB9IGZyb20gJy4vbWFwLW1hcmtlcic7XHJcbi8qKlxyXG4gKiBNYXBMYXllckRpcmVjdGl2ZSBjcmVhdGVzIGEgbGF5ZXIgb24gYSB7QGxpbmsgTWFwQ29tcG9uZW50fS5cclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbiAqIGltcG9ydCB7TWFwQ29tcG9uZW50LCBNYXBNYXJrZXJEaXJlY3RpdmV9IGZyb20gJy4uLic7XHJcbiAqXHJcbiAqIEBDb21wb25lbnQoe1xyXG4gKiAgc2VsZWN0b3I6ICdteS1tYXAtY21wJyxcclxuICogIHN0eWxlczogW2BcclxuICogICAubWFwLWNvbnRhaW5lciB7XHJcbiAqICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gKiAgIH1cclxuICogYF0sXHJcbiAqIHRlbXBsYXRlOiBgXHJcbiAqICAgPHgtbWFwIFtMYXRpdHVkZV09J2xhdCcgW0xvbmdpdHVkZV09J2xuZycgW1pvb21dPSd6b29tJz5cclxuICogICAgIDx4LW1hcC1sYXllciBbVmlzaWJsZV09J3Zpc2libGUnPlxyXG4gKiAgICAgICAgIDx4LW1hcC1tYXJrZXIgW0xhdGl0dWRlXT0nbGF0JyBbTG9uZ2l0dWRlXT0nbG5nJyBbTGFiZWxdPScnTScnPjwveC1tYXAtbWFya2VyPlxyXG4gKiAgICAgPC94LW1hcC1sYXllcj5cclxuICogICA8L3gtbWFwPlxyXG4gKiBgXHJcbiAqIH0pXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNYXBMYXllckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gICAgcHJvdGVjdGVkIF9sYXllclNlcnZpY2U6IExheWVyU2VydmljZTtcclxuICAgIHByb3RlY3RlZCBfY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xyXG4gICAgcHJvdGVjdGVkIF92aXNpYmxlOiBib29sZWFuO1xyXG4gICAgcHJvdGVjdGVkIF9hZGRlZFRvTWFuYWdlcjogYm9vbGVhbjtcclxuICAgIHByb3RlY3RlZCBfaWQ6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBfbWFya2VyczogQXJyYXk8TWFwTWFya2VyRGlyZWN0aXZlPjtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBsYXllciB2aXNpYmlsaXR5LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBMYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBWaXNpYmxlOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBsYXllciBpZC5cclxuICAgICAqXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEBtZW1iZXJvZiBNYXBMYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBJZDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIE1hcExheWVyRGlyZWN0aXZlLlxyXG4gICAgICogQHBhcmFtIF9sYXllclNlcnZpY2UgLSBDb25jcmV0ZWQgaW1wbGVtZW50YXRpb24gb2YgYSBsYXllciBzZXJ2aWNlIGZvciB0aGUgdW5kZXJseWluZyBtYXBzIGltcGxlbWVudGF0aW9ucy5cclxuICAgICAqIEdlbmVyYWxseSBwcm92aWRlZCB2aWEgaW5qZWN0aW9ucy5cclxuICAgICAqIEBwYXJhbSBfY29udGFpbmVyUmVmIC0gUmVmZXJlbmNlIHRvIHRoZSBjb250YWluZXIgaG9zdGluZyB0aGUgbWFwIGNhbnZhcy4gR2VuZXJhbGx5IHByb3ZpZGVkIHZpYSBpbmplY3Rpb24uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcExheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKF9sYXllclNlcnZpY2U6IExheWVyU2VydmljZSwgX2NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZik7XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBDb21wb25lbnQgaW5pdGlhbGl6YXRpb24uIFBhcnQgb2YgbmcgQ29tcG9uZW50IGxpZmUgY3ljbGUuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcExheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIGNoYW5nZXMgdG8gdGhlIGRhdGFib3VkIHByb3BlcnRpZXMgb2NjdXIuIFBhcnQgb2YgdGhlIG5nIENvbXBvbmVudCBsaWZlIGN5Y2xlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjaGFuZ2VzIC0gQ2hhbmdlcyB0aGF0IGhhdmUgb2NjdXJlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1xyXG4gICAgICAgIFtwcm9wTmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlO1xyXG4gICAgfSk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBjb21wb25lbnQgZGVzdHJ1Y3Rpb24uIEZyZWVzIHRoZSByZXNvdXJjZXMgdXNlZCBieSB0aGUgY29tcG9uZW50LiBQYXJ0IG9mIHRoZSBuZyBDb21wb25lbnQgbGlmZSBjeWNsZS5cclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcExheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbn1cclxuIl19