import { IClusterIconInfo } from '../interfaces/icluster-icon-info';
import { OnInit, OnDestroy, OnChanges, SimpleChange, ViewContainerRef } from '@angular/core';
import { Marker } from '../models/marker';
import { ClusterPlacementMode } from '../models/cluster-placement-mode';
import { ClusterClickAction } from '../models/cluster-click-action';
import { IPoint } from '../interfaces/ipoint';
import { IMarkerIconInfo } from '../interfaces/imarker-icon-info';
import { ClusterService } from '../services/cluster.service';
import { ISpiderClusterOptions } from '../interfaces/ispider-cluster-options';
import { MapLayerDirective } from './map-layer';
/**
 *
 * Creates a cluster layer on a {@link MapComponent}.
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
 *     <x-cluster-layer [Visible]='visible'>
 *         <x-map-marker [Latitude]='lat' [Longitude]='lng' [Label]=''M''></x-map-marker>
 *     </x-cluster-layer>
 *   </x-map>
 * `
 * })
 * ```
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class ClusterLayerDirective extends MapLayerDirective implements OnInit, OnDestroy, OnChanges {
    private _clusteringEnabled;
    private _clusterPlacementMode;
    private _clusterClickAction;
    private _spiderClusterOptions;
    private _zIndex;
    private _gridSize;
    private _layerOffset;
    private _iconInfo;
    private _minimumClusterSize;
    private _styles;
    private _useDynamicSizeMarker;
    private _dynamicMarkerBaseSize;
    private _dynamicMarkerRanges;
    private _zoomOnClick;
    private _iconCreationCallback;
    /**
     * Gets or sets the the Cluster Click Action {@link ClusterClickAction}.
     *
     * @memberof ClusterLayerDirective
     */
    ClusterClickAction: ClusterClickAction;
    /**
     * Gets or sets whether the clustering layer enables clustering. When set to false, the layer
     * behaves like a generic layer. This is handy if you want to prevent clustering at certain zoom levels.
     *
     * @memberof ClusterLayerDirective
     */
    ClusteringEnabled: boolean;
    /**
     * Gets or sets the cluster placement mode. {@link ClusterPlacementMode}
     *
     * @memberof ClusterLayerDirective
     */
    ClusterPlacementMode: ClusterPlacementMode;
    /**
     * Gets or sets the callback invoked to create a custom cluster marker. Note that when {@link UseDynamicSizeMarkers} is enabled,
     * you cannot set a custom marker callback.
     *
     * @memberof ClusterLayerDirective
     */
    CustomMarkerCallback: (m: Array<Marker>, i: IMarkerIconInfo) => string;
    /**
     * Gets or sets the base size of dynamic markers in pixels. The actualy size of the dynamic marker is based on this.
     * See {@link UseDynamicSizeMarkers}.
     *
     * @memberof ClusterLayerDirective
     */
    DynamicMarkerBaseSize: number;
    /**
     * Gets or sets the ranges to use to calculate breakpoints and colors for dynamic markers.
     * The map contains key/value pairs, with the keys being
     * the breakpoint sizes and the values the colors to be used for the dynamic marker in that range. See {@link UseDynamicSizeMarkers}.
     *
     * @memberof ClusterLayerDirective
     */
    DynamicMarkerRanges: Map<number, string>;
    /**
     * Gets or sets the grid size to be used for clustering.
     *
     * @memberof ClusterLayerDirective
     */
    GridSize: number;
    /**
     * Gets or sets the IconInfo to be used to create a custom cluster marker. Supports font-based, SVG, graphics and more.
     * See {@link IMarkerIconInfo}.
     *
     * @memberof ClusterLayerDirective
     */
    IconInfo: IMarkerIconInfo;
    /**
     * Gets or sets An offset applied to the positioning of the layer.
     *
     * @memberof ClusterLayerDirective
     */
    LayerOffset: IPoint;
    /**
     * Gets or sets the minimum pins required to form a cluster
     *
     * @readonly
     * @memberof ClusterLayerDirective
     */
    MinimumClusterSize: number;
    /**
     * Gets or sets the options for spider clustering behavior. See {@link ISpiderClusterOptions}
     *
     * @memberof ClusterLayerDirective
     */
    SpiderClusterOptions: ISpiderClusterOptions;
    /**
     * Gets or sets the cluster styles
     *
     * @readonly
     * @memberof ClusterLayerDirective
     */
    Styles: Array<IClusterIconInfo>;
    /**
     * Gets or sets whether to use dynamic markers. Dynamic markers change in size and color depending on the number of
     * pins in the cluster. If set to true, this will take precendence over any custom marker creation.
     *
     * @memberof ClusterLayerDirective
     */
    UseDynamicSizeMarkers: boolean;
    /**
     * Gets or sets the z-index of the layer. If not used, layers get stacked in the order created.
     *
     * @memberof ClusterLayerDirective
     */
    ZIndex: number;
    /**
     * Gets or sets whether the cluster should zoom in on click
     *
     * @readonly
     * @memberof ClusterLayerDirective
     */
    ZoomOnClick: boolean;
    /**
     * Creates the dynamic size marker to be used for cluster markers if UseDynamicSizeMarkers is set to true.
     *
     * @param size - The number of markers in the cluster.
     * @param info  - The icon info to be used. This will be hydrated with
     * the actualy dimensions of the created markers and is used by the underlying model/services
     * to correctly offset the marker for correct positioning.
     * @param baseMarkerSize - The base size for dynmic markers.
     * @param ranges - The ranges to use to calculate breakpoints and colors for dynamic markers.
     * The map contains key/value pairs, with the keys being
     * the breakpoint sizes and the values the colors to be used for the dynamic marker in that range.
     * @returns - An string containing the SVG for the marker.
     *
     * @memberof ClusterLayerDirective
     */
    static CreateDynamicSizeMarker(size: number, info: IMarkerIconInfo, baseMarkerSize: number, ranges: Map<number, string>): string;
    /**
     * Creates an instance of ClusterLayerDirective.
     *
     * @param _layerService - Concreted implementation of a cluster layer service for the underlying maps
     * implementations. Generally provided via injections.
     * @param _containerRef - A reference to the view container of the layer. Generally provided via injection.
     *
     * @memberof ClusterLayerDirective
     */
    constructor(_layerService: ClusterService, _containerRef: ViewContainerRef);
    /**
     * Reacts to changes in data-bound properties of the component and actuates property changes in the underling layer model.
     *
     * @param changes - collection of changes.
     *
     * @memberof ClusterLayerDirective
     */
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ClusterLayerDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ClusterLayerDirective, "x-cluster-layer", never, { "ClusterClickAction": "ClusterClickAction"; "ClusteringEnabled": "ClusteringEnabled"; "ClusterPlacementMode": "ClusterPlacementMode"; "CustomMarkerCallback": "CustomMarkerCallback"; "DynamicMarkerBaseSize": "DynamicMarkerBaseSize"; "DynamicMarkerRanges": "DynamicMarkerRanges"; "GridSize": "GridSize"; "IconInfo": "IconInfo"; "LayerOffset": "LayerOffset"; "MinimumClusterSize": "MinimumClusterSize"; "SpiderClusterOptions": "SpiderClusterOptions"; "Styles": "Styles"; "UseDynamicSizeMarkers": "UseDynamicSizeMarkers"; "ZIndex": "ZIndex"; "ZoomOnClick": "ZoomOnClick"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2x1c3Rlci1sYXllci5kLnRzIiwic291cmNlcyI6WyJjbHVzdGVyLWxheWVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDbHVzdGVySWNvbkluZm8gfSBmcm9tICcuLi9pbnRlcmZhY2VzL2ljbHVzdGVyLWljb24taW5mbyc7XHJcbmltcG9ydCB7IE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXJrZXIgfSBmcm9tICcuLi9tb2RlbHMvbWFya2VyJztcclxuaW1wb3J0IHsgQ2x1c3RlclBsYWNlbWVudE1vZGUgfSBmcm9tICcuLi9tb2RlbHMvY2x1c3Rlci1wbGFjZW1lbnQtbW9kZSc7XHJcbmltcG9ydCB7IENsdXN0ZXJDbGlja0FjdGlvbiB9IGZyb20gJy4uL21vZGVscy9jbHVzdGVyLWNsaWNrLWFjdGlvbic7XHJcbmltcG9ydCB7IElQb2ludCB9IGZyb20gJy4uL2ludGVyZmFjZXMvaXBvaW50JztcclxuaW1wb3J0IHsgSU1hcmtlckljb25JbmZvIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbWFya2VyLWljb24taW5mbyc7XHJcbmltcG9ydCB7IENsdXN0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2x1c3Rlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSVNwaWRlckNsdXN0ZXJPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pc3BpZGVyLWNsdXN0ZXItb3B0aW9ucyc7XHJcbmltcG9ydCB7IE1hcExheWVyRGlyZWN0aXZlIH0gZnJvbSAnLi9tYXAtbGF5ZXInO1xyXG4vKipcclxuICpcclxuICogQ3JlYXRlcyBhIGNsdXN0ZXIgbGF5ZXIgb24gYSB7QGxpbmsgTWFwQ29tcG9uZW50fS5cclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbiAqIGltcG9ydCB7TWFwQ29tcG9uZW50LCBNYXBNYXJrZXJEaXJlY3RpdmV9IGZyb20gJy4uLic7XHJcbiAqXHJcbiAqIEBDb21wb25lbnQoe1xyXG4gKiAgc2VsZWN0b3I6ICdteS1tYXAtY21wJyxcclxuICogIHN0eWxlczogW2BcclxuICogICAubWFwLWNvbnRhaW5lciB7XHJcbiAqICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gKiAgIH1cclxuICogYF0sXHJcbiAqIHRlbXBsYXRlOiBgXHJcbiAqICAgPHgtbWFwIFtMYXRpdHVkZV09J2xhdCcgW0xvbmdpdHVkZV09J2xuZycgW1pvb21dPSd6b29tJz5cclxuICogICAgIDx4LWNsdXN0ZXItbGF5ZXIgW1Zpc2libGVdPSd2aXNpYmxlJz5cclxuICogICAgICAgICA8eC1tYXAtbWFya2VyIFtMYXRpdHVkZV09J2xhdCcgW0xvbmdpdHVkZV09J2xuZycgW0xhYmVsXT0nJ00nJz48L3gtbWFwLW1hcmtlcj5cclxuICogICAgIDwveC1jbHVzdGVyLWxheWVyPlxyXG4gKiAgIDwveC1tYXA+XHJcbiAqIGBcclxuICogfSlcclxuICogYGBgXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENsdXN0ZXJMYXllckRpcmVjdGl2ZSBleHRlbmRzIE1hcExheWVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgICBwcml2YXRlIF9jbHVzdGVyaW5nRW5hYmxlZDtcclxuICAgIHByaXZhdGUgX2NsdXN0ZXJQbGFjZW1lbnRNb2RlO1xyXG4gICAgcHJpdmF0ZSBfY2x1c3RlckNsaWNrQWN0aW9uO1xyXG4gICAgcHJpdmF0ZSBfc3BpZGVyQ2x1c3Rlck9wdGlvbnM7XHJcbiAgICBwcml2YXRlIF96SW5kZXg7XHJcbiAgICBwcml2YXRlIF9ncmlkU2l6ZTtcclxuICAgIHByaXZhdGUgX2xheWVyT2Zmc2V0O1xyXG4gICAgcHJpdmF0ZSBfaWNvbkluZm87XHJcbiAgICBwcml2YXRlIF9taW5pbXVtQ2x1c3RlclNpemU7XHJcbiAgICBwcml2YXRlIF9zdHlsZXM7XHJcbiAgICBwcml2YXRlIF91c2VEeW5hbWljU2l6ZU1hcmtlcjtcclxuICAgIHByaXZhdGUgX2R5bmFtaWNNYXJrZXJCYXNlU2l6ZTtcclxuICAgIHByaXZhdGUgX2R5bmFtaWNNYXJrZXJSYW5nZXM7XHJcbiAgICBwcml2YXRlIF96b29tT25DbGljaztcclxuICAgIHByaXZhdGUgX2ljb25DcmVhdGlvbkNhbGxiYWNrO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIHRoZSBDbHVzdGVyIENsaWNrIEFjdGlvbiB7QGxpbmsgQ2x1c3RlckNsaWNrQWN0aW9ufS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2x1c3RlckxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIENsdXN0ZXJDbGlja0FjdGlvbjogQ2x1c3RlckNsaWNrQWN0aW9uO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgd2hldGhlciB0aGUgY2x1c3RlcmluZyBsYXllciBlbmFibGVzIGNsdXN0ZXJpbmcuIFdoZW4gc2V0IHRvIGZhbHNlLCB0aGUgbGF5ZXJcclxuICAgICAqIGJlaGF2ZXMgbGlrZSBhIGdlbmVyaWMgbGF5ZXIuIFRoaXMgaXMgaGFuZHkgaWYgeW91IHdhbnQgdG8gcHJldmVudCBjbHVzdGVyaW5nIGF0IGNlcnRhaW4gem9vbSBsZXZlbHMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIENsdXN0ZXJMYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBDbHVzdGVyaW5nRW5hYmxlZDogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBjbHVzdGVyIHBsYWNlbWVudCBtb2RlLiB7QGxpbmsgQ2x1c3RlclBsYWNlbWVudE1vZGV9XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIENsdXN0ZXJMYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBDbHVzdGVyUGxhY2VtZW50TW9kZTogQ2x1c3RlclBsYWNlbWVudE1vZGU7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgY2FsbGJhY2sgaW52b2tlZCB0byBjcmVhdGUgYSBjdXN0b20gY2x1c3RlciBtYXJrZXIuIE5vdGUgdGhhdCB3aGVuIHtAbGluayBVc2VEeW5hbWljU2l6ZU1hcmtlcnN9IGlzIGVuYWJsZWQsXHJcbiAgICAgKiB5b3UgY2Fubm90IHNldCBhIGN1c3RvbSBtYXJrZXIgY2FsbGJhY2suXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIENsdXN0ZXJMYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBDdXN0b21NYXJrZXJDYWxsYmFjazogKG06IEFycmF5PE1hcmtlcj4sIGk6IElNYXJrZXJJY29uSW5mbykgPT4gc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIGJhc2Ugc2l6ZSBvZiBkeW5hbWljIG1hcmtlcnMgaW4gcGl4ZWxzLiBUaGUgYWN0dWFseSBzaXplIG9mIHRoZSBkeW5hbWljIG1hcmtlciBpcyBiYXNlZCBvbiB0aGlzLlxyXG4gICAgICogU2VlIHtAbGluayBVc2VEeW5hbWljU2l6ZU1hcmtlcnN9LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBDbHVzdGVyTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgRHluYW1pY01hcmtlckJhc2VTaXplOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgcmFuZ2VzIHRvIHVzZSB0byBjYWxjdWxhdGUgYnJlYWtwb2ludHMgYW5kIGNvbG9ycyBmb3IgZHluYW1pYyBtYXJrZXJzLlxyXG4gICAgICogVGhlIG1hcCBjb250YWlucyBrZXkvdmFsdWUgcGFpcnMsIHdpdGggdGhlIGtleXMgYmVpbmdcclxuICAgICAqIHRoZSBicmVha3BvaW50IHNpemVzIGFuZCB0aGUgdmFsdWVzIHRoZSBjb2xvcnMgdG8gYmUgdXNlZCBmb3IgdGhlIGR5bmFtaWMgbWFya2VyIGluIHRoYXQgcmFuZ2UuIFNlZSB7QGxpbmsgVXNlRHluYW1pY1NpemVNYXJrZXJzfS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2x1c3RlckxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIER5bmFtaWNNYXJrZXJSYW5nZXM6IE1hcDxudW1iZXIsIHN0cmluZz47XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgZ3JpZCBzaXplIHRvIGJlIHVzZWQgZm9yIGNsdXN0ZXJpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIENsdXN0ZXJMYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBHcmlkU2l6ZTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIEljb25JbmZvIHRvIGJlIHVzZWQgdG8gY3JlYXRlIGEgY3VzdG9tIGNsdXN0ZXIgbWFya2VyLiBTdXBwb3J0cyBmb250LWJhc2VkLCBTVkcsIGdyYXBoaWNzIGFuZCBtb3JlLlxyXG4gICAgICogU2VlIHtAbGluayBJTWFya2VySWNvbkluZm99LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBDbHVzdGVyTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgSWNvbkluZm86IElNYXJrZXJJY29uSW5mbztcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIEFuIG9mZnNldCBhcHBsaWVkIHRvIHRoZSBwb3NpdGlvbmluZyBvZiB0aGUgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIENsdXN0ZXJMYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBMYXllck9mZnNldDogSVBvaW50O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIG1pbmltdW0gcGlucyByZXF1aXJlZCB0byBmb3JtIGEgY2x1c3RlclxyXG4gICAgICpcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQG1lbWJlcm9mIENsdXN0ZXJMYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBNaW5pbXVtQ2x1c3RlclNpemU6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBvcHRpb25zIGZvciBzcGlkZXIgY2x1c3RlcmluZyBiZWhhdmlvci4gU2VlIHtAbGluayBJU3BpZGVyQ2x1c3Rlck9wdGlvbnN9XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIENsdXN0ZXJMYXllckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBTcGlkZXJDbHVzdGVyT3B0aW9uczogSVNwaWRlckNsdXN0ZXJPcHRpb25zO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIGNsdXN0ZXIgc3R5bGVzXHJcbiAgICAgKlxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAbWVtYmVyb2YgQ2x1c3RlckxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFN0eWxlczogQXJyYXk8SUNsdXN0ZXJJY29uSW5mbz47XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB3aGV0aGVyIHRvIHVzZSBkeW5hbWljIG1hcmtlcnMuIER5bmFtaWMgbWFya2VycyBjaGFuZ2UgaW4gc2l6ZSBhbmQgY29sb3IgZGVwZW5kaW5nIG9uIHRoZSBudW1iZXIgb2ZcclxuICAgICAqIHBpbnMgaW4gdGhlIGNsdXN0ZXIuIElmIHNldCB0byB0cnVlLCB0aGlzIHdpbGwgdGFrZSBwcmVjZW5kZW5jZSBvdmVyIGFueSBjdXN0b20gbWFya2VyIGNyZWF0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBDbHVzdGVyTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgVXNlRHluYW1pY1NpemVNYXJrZXJzOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIHotaW5kZXggb2YgdGhlIGxheWVyLiBJZiBub3QgdXNlZCwgbGF5ZXJzIGdldCBzdGFja2VkIGluIHRoZSBvcmRlciBjcmVhdGVkLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBDbHVzdGVyTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgWkluZGV4OiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB3aGV0aGVyIHRoZSBjbHVzdGVyIHNob3VsZCB6b29tIGluIG9uIGNsaWNrXHJcbiAgICAgKlxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAbWVtYmVyb2YgQ2x1c3RlckxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFpvb21PbkNsaWNrOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBkeW5hbWljIHNpemUgbWFya2VyIHRvIGJlIHVzZWQgZm9yIGNsdXN0ZXIgbWFya2VycyBpZiBVc2VEeW5hbWljU2l6ZU1hcmtlcnMgaXMgc2V0IHRvIHRydWUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHNpemUgLSBUaGUgbnVtYmVyIG9mIG1hcmtlcnMgaW4gdGhlIGNsdXN0ZXIuXHJcbiAgICAgKiBAcGFyYW0gaW5mbyAgLSBUaGUgaWNvbiBpbmZvIHRvIGJlIHVzZWQuIFRoaXMgd2lsbCBiZSBoeWRyYXRlZCB3aXRoXHJcbiAgICAgKiB0aGUgYWN0dWFseSBkaW1lbnNpb25zIG9mIHRoZSBjcmVhdGVkIG1hcmtlcnMgYW5kIGlzIHVzZWQgYnkgdGhlIHVuZGVybHlpbmcgbW9kZWwvc2VydmljZXNcclxuICAgICAqIHRvIGNvcnJlY3RseSBvZmZzZXQgdGhlIG1hcmtlciBmb3IgY29ycmVjdCBwb3NpdGlvbmluZy5cclxuICAgICAqIEBwYXJhbSBiYXNlTWFya2VyU2l6ZSAtIFRoZSBiYXNlIHNpemUgZm9yIGR5bm1pYyBtYXJrZXJzLlxyXG4gICAgICogQHBhcmFtIHJhbmdlcyAtIFRoZSByYW5nZXMgdG8gdXNlIHRvIGNhbGN1bGF0ZSBicmVha3BvaW50cyBhbmQgY29sb3JzIGZvciBkeW5hbWljIG1hcmtlcnMuXHJcbiAgICAgKiBUaGUgbWFwIGNvbnRhaW5zIGtleS92YWx1ZSBwYWlycywgd2l0aCB0aGUga2V5cyBiZWluZ1xyXG4gICAgICogdGhlIGJyZWFrcG9pbnQgc2l6ZXMgYW5kIHRoZSB2YWx1ZXMgdGhlIGNvbG9ycyB0byBiZSB1c2VkIGZvciB0aGUgZHluYW1pYyBtYXJrZXIgaW4gdGhhdCByYW5nZS5cclxuICAgICAqIEByZXR1cm5zIC0gQW4gc3RyaW5nIGNvbnRhaW5pbmcgdGhlIFNWRyBmb3IgdGhlIG1hcmtlci5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2x1c3RlckxheWVyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBDcmVhdGVEeW5hbWljU2l6ZU1hcmtlcihzaXplOiBudW1iZXIsIGluZm86IElNYXJrZXJJY29uSW5mbywgYmFzZU1hcmtlclNpemU6IG51bWJlciwgcmFuZ2VzOiBNYXA8bnVtYmVyLCBzdHJpbmc+KTogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENsdXN0ZXJMYXllckRpcmVjdGl2ZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gX2xheWVyU2VydmljZSAtIENvbmNyZXRlZCBpbXBsZW1lbnRhdGlvbiBvZiBhIGNsdXN0ZXIgbGF5ZXIgc2VydmljZSBmb3IgdGhlIHVuZGVybHlpbmcgbWFwc1xyXG4gICAgICogaW1wbGVtZW50YXRpb25zLiBHZW5lcmFsbHkgcHJvdmlkZWQgdmlhIGluamVjdGlvbnMuXHJcbiAgICAgKiBAcGFyYW0gX2NvbnRhaW5lclJlZiAtIEEgcmVmZXJlbmNlIHRvIHRoZSB2aWV3IGNvbnRhaW5lciBvZiB0aGUgbGF5ZXIuIEdlbmVyYWxseSBwcm92aWRlZCB2aWEgaW5qZWN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBDbHVzdGVyTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoX2xheWVyU2VydmljZTogQ2x1c3RlclNlcnZpY2UsIF9jb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWFjdHMgdG8gY2hhbmdlcyBpbiBkYXRhLWJvdW5kIHByb3BlcnRpZXMgb2YgdGhlIGNvbXBvbmVudCBhbmQgYWN0dWF0ZXMgcHJvcGVydHkgY2hhbmdlcyBpbiB0aGUgdW5kZXJsaW5nIGxheWVyIG1vZGVsLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjaGFuZ2VzIC0gY29sbGVjdGlvbiBvZiBjaGFuZ2VzLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBDbHVzdGVyTGF5ZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1xyXG4gICAgICAgIFtwcm9wTmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlO1xyXG4gICAgfSk6IHZvaWQ7XHJcbn1cclxuIl19