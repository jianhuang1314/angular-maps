import { SimpleChange, OnDestroy, OnChanges, EventEmitter, AfterContentInit, ViewContainerRef } from '@angular/core';
import { IPoint } from '../interfaces/ipoint';
import { ILatLong } from '../interfaces/ilatlong';
import { IMarkerEvent } from '../interfaces/imarker-event';
import { IMarkerIconInfo } from '../interfaces/imarker-icon-info';
import { MarkerService } from '../services/marker.service';
import { InfoBoxComponent } from './infobox';
/**
 * MapMarkerDirective renders a map marker inside a {@link MapComponent}.
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
 *   <x-map [Latitude]="lat" [Longitude]="lng" [Zoom]="zoom">
 *      <x-map-marker [Latitude]="lat" [Longitude]="lng" [Label]="'M'"></x-map-marker>
 *   </x-map>
 * `
 * })
 * ```
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class MapMarkerDirective implements OnDestroy, OnChanges, AfterContentInit {
    private _markerService;
    private _containerRef;
    private _clickTimeout;
    private _events;
    private _id;
    private _inClusterLayer;
    private _inCustomLayer;
    /**
     * Any InfoBox that is a direct children of the marker
     *
     * @protected
     * @memberof MapMarkerDirective
     */
    protected _infoBox: InfoBoxComponent;
    private _layerId;
    private _markerAddedToManger;
    /**
     *  Icon anchor relative to marker root
     *
     * @memberof MapMarkerDirective
     */
    Anchor: IPoint;
    /**
     * This event is fired when the DOM dblclick event is fired on the marker.
     *
     * @memberof MapMarkerDirective
     */
    DblClick: EventEmitter<IMarkerEvent>;
    /**
     * This event is repeatedly fired while the user drags the marker.
     *
     * @memberof MapMarkerDirective
     */
    Drag: EventEmitter<IMarkerEvent>;
    /**
     * This event is fired when the user stops dragging the marker.
     *
     * @memberof MapMarkerDirective
     */
    DragEnd: EventEmitter<IMarkerEvent>;
    /**
     * If true, the marker can be dragged. Default value is false.
     *
     * @memberof MapMarkerDirective
     */
    Draggable: boolean;
    /**
     * This event is fired when the user starts dragging the marker.
     *
     * @memberof MapMarkerDirective
     */
    DragStart: EventEmitter<IMarkerEvent>;
    /**
     * This event emitter gets emitted when a marker icon is being created.
     *
     * @memberof MapMarkerDirective
     */
    DynamicMarkerCreated: EventEmitter<IMarkerIconInfo>;
    /**
     * Icon height
     *
     * @memberof MapMarkerDirective
     */
    Height: number;
    /**
     * Information for dynamic, custom created icons.
     *
     * @memberof MapMarkerDirective
     */
    IconInfo: IMarkerIconInfo;
    /**
     * Icon (the URL of the image) for the foreground.
     *
     * @memberof MapMarkerDirective
     */
    IconUrl: string;
    /**
     * True to indiciate whether this is the first marker in a set.
     * Use this for bulk operations (particularily clustering) to ensure performance.
     *
     * @memberof MapMarkerDirective
     */
    IsFirstInSet: boolean;
    /**
     * True to indiciate whether this is the last marker in a set.
     * Use this for bulk operations (particularily clustering) to ensure performance.
     *
     * @memberof MapMarkerDirective
     */
    IsLastInSet: boolean;
    /**
     * The label (a single uppercase character) for the marker.
     *
     * @memberof MapMarkerDirective
     */
    Label: string;
    /**
     * The latitude position of the marker.
     *
     * @memberof MapMarkerDirective
     */
    Latitude: number;
    /**
     * The longitude position of the marker.
     *
     * @memberof MapMarkerDirective
     */
    Longitude: number;
    /**
     * This event emitter gets emitted when the user clicks on the marker.
     *
     * @memberof MapMarkerDirective
     */
    MarkerClick: EventEmitter<IMarkerEvent>;
    /**
     * Arbitary metadata to assign to the Marker. This is useful for events
     *
     * @memberof MapMarkerDirective
     */
    Metadata: Map<string, any>;
    /**
     * This event is fired when the DOM mousedown event is fired on the marker.
     *
     * @memberof MapMarkerDirective
     */
    MouseDown: EventEmitter<IMarkerEvent>;
    /**
     * This event is fired when the DOM mousemove event is fired on the marker.
     *
     * @memberof MapMarkerDirective
     */
    MouseMove: EventEmitter<IMarkerEvent>;
    /**
     * This event is fired on marker mouseout.
     *
     * @memberof MapMarkerDirective
     */
    MouseOut: EventEmitter<IMarkerEvent>;
    /**
     * This event is fired on marker mouseover.
     *
     * @memberof MapMarkerDirective
     */
    MouseOver: EventEmitter<IMarkerEvent>;
    /**
     * This event is fired whe the DOM mouseup event is fired on the marker
     *
     * @memberof MapMarkerDirective
     */
    MouseUp: EventEmitter<IMarkerEvent>;
    /**
     * This even is fired when the marker is right-clicked on.
     *
     * @memberof MapMarkerDirective
     */
    RightClick: EventEmitter<IMarkerEvent>;
    /**
     *  The title of the marker.
     *
     * @memberof MapMarkerDirective
     */
    Title: string;
    /**
     * Sets the visibility of the marker
     *
     * @memberof MapMarkerDirective
     */
    Visible: boolean;
    /**
     * Icon Width
     *
     * @memberof MapMarkerDirective
     */
    Width: number;
    /**
     * Getswhether the marker has already been added to the marker service and is ready for use.
     *
     * @readonly
     * @memberof MapMarkerDirective
     */
    readonly AddedToManager: boolean;
    /**
     * Gets the id of the marker as a string.
     *
     * @readonly
     * @memberof MapMarkerDirective
     */
    readonly Id: string;
    /**
     * Gets whether the marker is in a cluster layer. See {@link ClusterLayer}.
     *
     * @readonly
     * @memberof MapMarkerDirective
     */
    readonly InClusterLayer: boolean;
    /**
     * Gets whether the marker is in a custom layer. See {@link MapLayer}.
     *
     * @readonly
     * @memberof MapMarkerDirective
     */
    readonly InCustomLayer: boolean;
    /**
     * gets the id of the Layer the marker belongs to.
     *
     * @readonly
     * @memberof MapMarkerDirective
     */
    readonly LayerId: number;
    /**
     * Creates an instance of MapMarkerDirective.
     * @param _markerService - Concreate implementation of a {@link MarkerService}.
     * @param _containerRef - View container hosting the marker.
     * Used to determine parent layer through markup.
     *
     * @memberof MapMarkerDirective
     */
    constructor(_markerService: MarkerService, _containerRef: ViewContainerRef);
    /**
     * Translates a marker geo location to a pixel location relative to the map viewport.
     *
     * @param [loc] - {@link ILatLong} containing the geo coordinates. If null, the marker's coordinates are used.
     * @returns - A promise that when fullfilled contains an {@link IPoint} representing the pixel coordinates.
     *
     * @memberof MapMarkerDirective
     */
    LocationToPixel(loc?: ILatLong): Promise<IPoint>;
    /**
     * Called after Component content initialization. Part of ng Component life cycle.
     *
     * @memberof MapMarkerDirective
     */
    ngAfterContentInit(): void;
    /**
     * Reacts to changes in data-bound properties of the component and actuates property changes in the underling layer model.
     *
     * @param changes - collection of changes.
     *
     * @memberof MapMarkerDirective
     */
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    /**
     * Called on component destruction. Frees the resources used by the component. Part of the ng Component life cycle.
     *
     *
     * @memberof MapMarkerDirective
     */
    ngOnDestroy(): void;
    /**
     * Obtains a string representation of the Marker Id.
     * @returns - string representation of the marker id.
     * @memberof MapMarkerDirective
     */
    toString(): string;
    /**
     * Adds various event listeners for the marker.
     *
     * @memberof MapMarkerDirective
     */
    private AddEventListeners();
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MapMarkerDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MapMarkerDirective, "x-map-marker", never, { "Draggable": "Draggable"; "IsFirstInSet": "IsFirstInSet"; "IsLastInSet": "IsLastInSet"; "Metadata": "Metadata"; "Anchor": "Anchor"; "Height": "Height"; "IconInfo": "IconInfo"; "IconUrl": "IconUrl"; "Label": "Label"; "Latitude": "Latitude"; "Longitude": "Longitude"; "Title": "Title"; "Visible": "Visible"; "Width": "Width"; }, { "DblClick": "DblClick"; "Drag": "Drag"; "DragEnd": "DragEnd"; "DragStart": "DragStart"; "DynamicMarkerCreated": "DynamicMarkerCreated"; "MarkerClick": "MarkerClick"; "MouseDown": "MouseDown"; "MouseMove": "MouseMove"; "MouseOut": "MouseOut"; "MouseOver": "MouseOver"; "MouseUp": "MouseUp"; "RightClick": "RightClick"; }, ["_infoBox"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLW1hcmtlci5kLnRzIiwic291cmNlcyI6WyJtYXAtbWFya2VyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbXBsZUNoYW5nZSwgT25EZXN0cm95LCBPbkNoYW5nZXMsIEV2ZW50RW1pdHRlciwgQWZ0ZXJDb250ZW50SW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJUG9pbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2lwb2ludCc7XHJcbmltcG9ydCB7IElMYXRMb25nIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbGF0bG9uZyc7XHJcbmltcG9ydCB7IElNYXJrZXJFdmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW1hcmtlci1ldmVudCc7XHJcbmltcG9ydCB7IElNYXJrZXJJY29uSW5mbyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW1hcmtlci1pY29uLWluZm8nO1xyXG5pbXBvcnQgeyBNYXJrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbWFya2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJbmZvQm94Q29tcG9uZW50IH0gZnJvbSAnLi9pbmZvYm94JztcclxuLyoqXHJcbiAqIE1hcE1hcmtlckRpcmVjdGl2ZSByZW5kZXJzIGEgbWFwIG1hcmtlciBpbnNpZGUgYSB7QGxpbmsgTWFwQ29tcG9uZW50fS5cclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbiAqIGltcG9ydCB7TWFwQ29tcG9uZW50LCBNYXBNYXJrZXJEaXJlY3RpdmV9IGZyb20gJy4uLic7XHJcbiAqXHJcbiAqIEBDb21wb25lbnQoe1xyXG4gKiAgc2VsZWN0b3I6ICdteS1tYXAtY21wJyxcclxuICogIHN0eWxlczogW2BcclxuICogICAubWFwLWNvbnRhaW5lciB7XHJcbiAqICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gKiAgIH1cclxuICogYF0sXHJcbiAqIHRlbXBsYXRlOiBgXHJcbiAqICAgPHgtbWFwIFtMYXRpdHVkZV09XCJsYXRcIiBbTG9uZ2l0dWRlXT1cImxuZ1wiIFtab29tXT1cInpvb21cIj5cclxuICogICAgICA8eC1tYXAtbWFya2VyIFtMYXRpdHVkZV09XCJsYXRcIiBbTG9uZ2l0dWRlXT1cImxuZ1wiIFtMYWJlbF09XCInTSdcIj48L3gtbWFwLW1hcmtlcj5cclxuICogICA8L3gtbWFwPlxyXG4gKiBgXHJcbiAqIH0pXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNYXBNYXJrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgICBwcml2YXRlIF9tYXJrZXJTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBfY29udGFpbmVyUmVmO1xyXG4gICAgcHJpdmF0ZSBfY2xpY2tUaW1lb3V0O1xyXG4gICAgcHJpdmF0ZSBfZXZlbnRzO1xyXG4gICAgcHJpdmF0ZSBfaWQ7XHJcbiAgICBwcml2YXRlIF9pbkNsdXN0ZXJMYXllcjtcclxuICAgIHByaXZhdGUgX2luQ3VzdG9tTGF5ZXI7XHJcbiAgICAvKipcclxuICAgICAqIEFueSBJbmZvQm94IHRoYXQgaXMgYSBkaXJlY3QgY2hpbGRyZW4gb2YgdGhlIG1hcmtlclxyXG4gICAgICpcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEBtZW1iZXJvZiBNYXBNYXJrZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbmZvQm94OiBJbmZvQm94Q29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBfbGF5ZXJJZDtcclxuICAgIHByaXZhdGUgX21hcmtlckFkZGVkVG9NYW5nZXI7XHJcbiAgICAvKipcclxuICAgICAqICBJY29uIGFuY2hvciByZWxhdGl2ZSB0byBtYXJrZXIgcm9vdFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBNYXJrZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgQW5jaG9yOiBJUG9pbnQ7XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIGRibGNsaWNrIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBtYXJrZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBEYmxDbGljazogRXZlbnRFbWl0dGVyPElNYXJrZXJFdmVudD47XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZXZlbnQgaXMgcmVwZWF0ZWRseSBmaXJlZCB3aGlsZSB0aGUgdXNlciBkcmFncyB0aGUgbWFya2VyLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBNYXJrZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgRHJhZzogRXZlbnRFbWl0dGVyPElNYXJrZXJFdmVudD47XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzdG9wcyBkcmFnZ2luZyB0aGUgbWFya2VyLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBNYXJrZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgRHJhZ0VuZDogRXZlbnRFbWl0dGVyPElNYXJrZXJFdmVudD47XHJcbiAgICAvKipcclxuICAgICAqIElmIHRydWUsIHRoZSBtYXJrZXIgY2FuIGJlIGRyYWdnZWQuIERlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBEcmFnZ2FibGU6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzdGFydHMgZHJhZ2dpbmcgdGhlIG1hcmtlci5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwTWFya2VyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIERyYWdTdGFydDogRXZlbnRFbWl0dGVyPElNYXJrZXJFdmVudD47XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiBhIG1hcmtlciBpY29uIGlzIGJlaW5nIGNyZWF0ZWQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBEeW5hbWljTWFya2VyQ3JlYXRlZDogRXZlbnRFbWl0dGVyPElNYXJrZXJJY29uSW5mbz47XHJcbiAgICAvKipcclxuICAgICAqIEljb24gaGVpZ2h0XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBIZWlnaHQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogSW5mb3JtYXRpb24gZm9yIGR5bmFtaWMsIGN1c3RvbSBjcmVhdGVkIGljb25zLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBNYXJrZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgSWNvbkluZm86IElNYXJrZXJJY29uSW5mbztcclxuICAgIC8qKlxyXG4gICAgICogSWNvbiAodGhlIFVSTCBvZiB0aGUgaW1hZ2UpIGZvciB0aGUgZm9yZWdyb3VuZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwTWFya2VyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIEljb25Vcmw6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogVHJ1ZSB0byBpbmRpY2lhdGUgd2hldGhlciB0aGlzIGlzIHRoZSBmaXJzdCBtYXJrZXIgaW4gYSBzZXQuXHJcbiAgICAgKiBVc2UgdGhpcyBmb3IgYnVsayBvcGVyYXRpb25zIChwYXJ0aWN1bGFyaWx5IGNsdXN0ZXJpbmcpIHRvIGVuc3VyZSBwZXJmb3JtYW5jZS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwTWFya2VyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIElzRmlyc3RJblNldDogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogVHJ1ZSB0byBpbmRpY2lhdGUgd2hldGhlciB0aGlzIGlzIHRoZSBsYXN0IG1hcmtlciBpbiBhIHNldC5cclxuICAgICAqIFVzZSB0aGlzIGZvciBidWxrIG9wZXJhdGlvbnMgKHBhcnRpY3VsYXJpbHkgY2x1c3RlcmluZykgdG8gZW5zdXJlIHBlcmZvcm1hbmNlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBNYXJrZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgSXNMYXN0SW5TZXQ6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsYWJlbCAoYSBzaW5nbGUgdXBwZXJjYXNlIGNoYXJhY3RlcikgZm9yIHRoZSBtYXJrZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBMYWJlbDogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbGF0aXR1ZGUgcG9zaXRpb24gb2YgdGhlIG1hcmtlci5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwTWFya2VyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIExhdGl0dWRlOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsb25naXR1ZGUgcG9zaXRpb24gb2YgdGhlIG1hcmtlci5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwTWFya2VyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIExvbmdpdHVkZTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBtYXJrZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBNYXJrZXJDbGljazogRXZlbnRFbWl0dGVyPElNYXJrZXJFdmVudD47XHJcbiAgICAvKipcclxuICAgICAqIEFyYml0YXJ5IG1ldGFkYXRhIHRvIGFzc2lnbiB0byB0aGUgTWFya2VyLiBUaGlzIGlzIHVzZWZ1bCBmb3IgZXZlbnRzXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBNZXRhZGF0YTogTWFwPHN0cmluZywgYW55PjtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gbW91c2Vkb3duIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBtYXJrZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBNb3VzZURvd246IEV2ZW50RW1pdHRlcjxJTWFya2VyRXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZW1vdmUgZXZlbnQgaXMgZmlyZWQgb24gdGhlIG1hcmtlci5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwTWFya2VyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIE1vdXNlTW92ZTogRXZlbnRFbWl0dGVyPElNYXJrZXJFdmVudD47XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgb24gbWFya2VyIG1vdXNlb3V0LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBNYXJrZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgTW91c2VPdXQ6IEV2ZW50RW1pdHRlcjxJTWFya2VyRXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIG9uIG1hcmtlciBtb3VzZW92ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBNb3VzZU92ZXI6IEV2ZW50RW1pdHRlcjxJTWFya2VyRXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZSB0aGUgRE9NIG1vdXNldXAgZXZlbnQgaXMgZmlyZWQgb24gdGhlIG1hcmtlclxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBNYXJrZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgTW91c2VVcDogRXZlbnRFbWl0dGVyPElNYXJrZXJFdmVudD47XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZXZlbiBpcyBmaXJlZCB3aGVuIHRoZSBtYXJrZXIgaXMgcmlnaHQtY2xpY2tlZCBvbi5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwTWFya2VyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFJpZ2h0Q2xpY2s6IEV2ZW50RW1pdHRlcjxJTWFya2VyRXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiAgVGhlIHRpdGxlIG9mIHRoZSBtYXJrZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBUaXRsZTogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBtYXJrZXJcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwTWFya2VyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFZpc2libGU6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIEljb24gV2lkdGhcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwTWFya2VyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIFdpZHRoOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIEdldHN3aGV0aGVyIHRoZSBtYXJrZXIgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgbWFya2VyIHNlcnZpY2UgYW5kIGlzIHJlYWR5IGZvciB1c2UuXHJcbiAgICAgKlxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwTWFya2VyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IEFkZGVkVG9NYW5hZ2VyOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBpZCBvZiB0aGUgbWFya2VyIGFzIGEgc3RyaW5nLlxyXG4gICAgICpcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBJZDogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHdoZXRoZXIgdGhlIG1hcmtlciBpcyBpbiBhIGNsdXN0ZXIgbGF5ZXIuIFNlZSB7QGxpbmsgQ2x1c3RlckxheWVyfS5cclxuICAgICAqXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEBtZW1iZXJvZiBNYXBNYXJrZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgSW5DbHVzdGVyTGF5ZXI6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgd2hldGhlciB0aGUgbWFya2VyIGlzIGluIGEgY3VzdG9tIGxheWVyLiBTZWUge0BsaW5rIE1hcExheWVyfS5cclxuICAgICAqXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEBtZW1iZXJvZiBNYXBNYXJrZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgSW5DdXN0b21MYXllcjogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogZ2V0cyB0aGUgaWQgb2YgdGhlIExheWVyIHRoZSBtYXJrZXIgYmVsb25ncyB0by5cclxuICAgICAqXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEBtZW1iZXJvZiBNYXBNYXJrZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgTGF5ZXJJZDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIE1hcE1hcmtlckRpcmVjdGl2ZS5cclxuICAgICAqIEBwYXJhbSBfbWFya2VyU2VydmljZSAtIENvbmNyZWF0ZSBpbXBsZW1lbnRhdGlvbiBvZiBhIHtAbGluayBNYXJrZXJTZXJ2aWNlfS5cclxuICAgICAqIEBwYXJhbSBfY29udGFpbmVyUmVmIC0gVmlldyBjb250YWluZXIgaG9zdGluZyB0aGUgbWFya2VyLlxyXG4gICAgICogVXNlZCB0byBkZXRlcm1pbmUgcGFyZW50IGxheWVyIHRocm91Z2ggbWFya3VwLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBNYXJrZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoX21hcmtlclNlcnZpY2U6IE1hcmtlclNlcnZpY2UsIF9jb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2xhdGVzIGEgbWFya2VyIGdlbyBsb2NhdGlvbiB0byBhIHBpeGVsIGxvY2F0aW9uIHJlbGF0aXZlIHRvIHRoZSBtYXAgdmlld3BvcnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIFtsb2NdIC0ge0BsaW5rIElMYXRMb25nfSBjb250YWluaW5nIHRoZSBnZW8gY29vcmRpbmF0ZXMuIElmIG51bGwsIHRoZSBtYXJrZXIncyBjb29yZGluYXRlcyBhcmUgdXNlZC5cclxuICAgICAqIEByZXR1cm5zIC0gQSBwcm9taXNlIHRoYXQgd2hlbiBmdWxsZmlsbGVkIGNvbnRhaW5zIGFuIHtAbGluayBJUG9pbnR9IHJlcHJlc2VudGluZyB0aGUgcGl4ZWwgY29vcmRpbmF0ZXMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcE1hcmtlckRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBMb2NhdGlvblRvUGl4ZWwobG9jPzogSUxhdExvbmcpOiBQcm9taXNlPElQb2ludD47XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBhZnRlciBDb21wb25lbnQgY29udGVudCBpbml0aWFsaXphdGlvbi4gUGFydCBvZiBuZyBDb21wb25lbnQgbGlmZSBjeWNsZS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwTWFya2VyRGlyZWN0aXZlXHJcbiAgICAgKi9cclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWFjdHMgdG8gY2hhbmdlcyBpbiBkYXRhLWJvdW5kIHByb3BlcnRpZXMgb2YgdGhlIGNvbXBvbmVudCBhbmQgYWN0dWF0ZXMgcHJvcGVydHkgY2hhbmdlcyBpbiB0aGUgdW5kZXJsaW5nIGxheWVyIG1vZGVsLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjaGFuZ2VzIC0gY29sbGVjdGlvbiBvZiBjaGFuZ2VzLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBNYXJrZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZTtcclxuICAgIH0pOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gY29tcG9uZW50IGRlc3RydWN0aW9uLiBGcmVlcyB0aGUgcmVzb3VyY2VzIHVzZWQgYnkgdGhlIGNvbXBvbmVudC4gUGFydCBvZiB0aGUgbmcgQ29tcG9uZW50IGxpZmUgY3ljbGUuXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBNYXJrZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgTWFya2VyIElkLlxyXG4gICAgICogQHJldHVybnMgLSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hcmtlciBpZC5cclxuICAgICAqIEBtZW1iZXJvZiBNYXBNYXJrZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHZhcmlvdXMgZXZlbnQgbGlzdGVuZXJzIGZvciB0aGUgbWFya2VyLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBNYXJrZXJEaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBBZGRFdmVudExpc3RlbmVycygpO1xyXG59XHJcbiJdfQ==