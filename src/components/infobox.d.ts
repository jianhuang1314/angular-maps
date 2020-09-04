import { AfterViewInit, EventEmitter, OnChanges, OnDestroy, QueryList, SimpleChange } from '@angular/core';
import { ILatLong } from '../interfaces/ilatlong';
import { InfoBoxService } from '../services/infobox.service';
import { MapMarkerDirective } from './map-marker';
import { InfoBoxActionDirective } from './infobox-action';
/**
 * InfoBox renders a info window inside a {@link MapMarkerDirective} or standalone.
 *
 * ### Example
 * ```typescript
 * import {Component} from '@angular/core';
 * import {MapComponent, MapMarkerDirective, InfoBoxComponent, InfoBoxActionDirective} from '...';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .map-container { height: 300px; }
 * `],
 *  template: `
 *    <x-map [Latitude]="lat" [Longitude]="lng" [Zoom]="zoom">
 *      <x-map-marker [Latitude]="lat" [Longitude]="lng" [Label]="'M'">
 *        <x-info-box [DisableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *         </x-info-box>
 *       </x-map-marker>
 *     </x-map>
 *  `
 * })
 * ```
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class InfoBoxComponent implements OnDestroy, OnChanges, AfterViewInit {
    private _infoBoxService;
    private _infoBoxAddedToManager;
    private _id;
    /**
     * HTML conent of the infobox
     *
     * @memberof InfoBoxComponent
     */
    private _content;
    /**
     * Zero or more actions to show on the info window
     *
     * @memberof InfoBoxComponent
     */
    InfoWindowActions: QueryList<InfoBoxActionDirective>;
    /**
     * The latitude position of the info window (only usefull if you use it ouside of a {@link MapMarker}).
     *
     * @memberof InfoBoxComponent
     */
    Latitude: number;
    /**
     * The longitude position of the info window (only usefull if you use it ouside of a {@link MapMarker}).
     *
     * @memberof InfoBoxComponent
     */
    Longitude: number;
    /**
     * The title to display in the info window
     *
     * @memberof InfoBoxComponent
     */
    Title: string;
    /**
     * The description to display in the info window.
     *
     * @memberof InfoBoxComponent
     */
    Description: string;
    /**
     * Disable auto-pan on open. By default, the info window will pan the map so that it is fully
     * visible when it opens.
     *
     * @memberof InfoBoxComponent
     */
    DisableAutoPan: boolean;
    /**
     *  Maximum width of the infowindow, regardless of content's width. This value is only considered
     *  if it is set before a call to open. To change the maximum width when changing content, call
     *  close, update maxWidth, and then open.
     *
     * @memberof InfoBoxComponent
     */
    MaxWidth: number;
    /**
     * Determine whether only one infobox can be open at a time. Note that ANY info box settings.
     *
     * @memberof InfoBoxComponent
     */
    Modal: boolean;
    /**
     * Holds the marker that is the host of the info window (if available)
     *
     * @memberof InfoBoxComponent
     */
    HostMarker: MapMarkerDirective;
    /**
     * Determines visibility of infobox
     *
     * @memberof InfoBoxComponent
     */
    Visible: boolean;
    /**
     * Horizontal offset of the infobox from the host marker lat/long or the sepecified coordinates.
     *
     * @memberof InfoBoxComponent
     */
    xOffset: number;
    /**
     * Vertical offset for the infobox from the host marker lat/long or the specified coordinates.
     *
     * @memberof InfoBoxComponent
     */
    yOffset: number;
    /**
     * Determines if other info boxes should be closed before opening this one
     *
     * @memberof InfoBoxComponent
     */
    CloseInfoBoxesOnOpen: boolean;
    /**
     * Emits an event when the info window is closed.
     *
     * @memberof InfoBoxComponent
     */
    InfoBoxClose: EventEmitter<string>;
    /**
     * Gets the HTML content of the info box.
     *
     * @readonly
     * @memberof InfoBoxComponent
     */
    readonly HtmlContent: string;
    /**
     * Gets the Id of the info box as a string.
     *
     * @readonly
     * @memberof InfoBoxComponent
     */
    readonly Id: string;
    /**
     * Creates an instance of InfoBoxComponent.
     * @param _infoBoxService - Concrete {@link InfoBoxService} implementation for underlying Map architecture.
     *
     * @memberof InfoBoxComponent
     */
    constructor(_infoBoxService: InfoBoxService);
    /**
     * Closes the Infobox.
     *
     * @memberof InfoBoxComponent
     */
    Close(): Promise<void>;
    /**
     * Called on after component view as been initialized. Part of the ng Component life cycle.
     *
     * @memberof Map
     */
    ngAfterViewInit(): void;
    /**
     * Called when changes to the databoud properties occur. Part of the ng Component life cycle.
     *
     * @param changes - Changes that have occured.
     *
     * @memberof Map
     */
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    /**
     * Called on component destruction. Frees the resources used by the component. Part of the ng Component life cycle.
     *
     * @memberof Map
     */
    ngOnDestroy(): void;
    /**
     * Opens a closed info window.
     *
     * @param [loc]  - {@link ILatLong } representing position on which to open the window.
     * @returns - Promise that is fullfilled when the infobox has been opened.
     *
     * @memberof InfoBoxComponent
     */
    Open(loc?: ILatLong): Promise<void>;
    /**
     * Returns a string representation of the info box.
     *
     * @returns - string representation of the info box.
     *
     * @memberof InfoBoxComponent
     */
    ToString(): string;
    /**
     * Delegate handling the map click events.
     *
     * @memberof MapComponent
     */
    private HandleEvents();
    /**
     * Sets the info window options
     *
     * @param changes
     *
     * @memberof InfoBoxComponent
     */
    private SetInfoWindowOptions(changes);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InfoBoxComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InfoBoxComponent, "x-info-box", never, { "Modal": "Modal"; "Visible": "Visible"; "CloseInfoBoxesOnOpen": "CloseInfoBoxesOnOpen"; "Latitude": "Latitude"; "Longitude": "Longitude"; "Title": "Title"; "Description": "Description"; "DisableAutoPan": "DisableAutoPan"; "MaxWidth": "MaxWidth"; "HostMarker": "HostMarker"; "xOffset": "xOffset"; "yOffset": "yOffset"; }, { "InfoBoxClose": "InfoBoxClose"; }, ["InfoWindowActions"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mb2JveC5kLnRzIiwic291cmNlcyI6WyJpbmZvYm94LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgUXVlcnlMaXN0LCBTaW1wbGVDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUxhdExvbmcgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2lsYXRsb25nJztcclxuaW1wb3J0IHsgSW5mb0JveFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9pbmZvYm94LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXBNYXJrZXJEaXJlY3RpdmUgfSBmcm9tICcuL21hcC1tYXJrZXInO1xyXG5pbXBvcnQgeyBJbmZvQm94QWN0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9pbmZvYm94LWFjdGlvbic7XHJcbi8qKlxyXG4gKiBJbmZvQm94IHJlbmRlcnMgYSBpbmZvIHdpbmRvdyBpbnNpZGUgYSB7QGxpbmsgTWFwTWFya2VyRGlyZWN0aXZlfSBvciBzdGFuZGFsb25lLlxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuICogaW1wb3J0IHtNYXBDb21wb25lbnQsIE1hcE1hcmtlckRpcmVjdGl2ZSwgSW5mb0JveENvbXBvbmVudCwgSW5mb0JveEFjdGlvbkRpcmVjdGl2ZX0gZnJvbSAnLi4uJztcclxuICpcclxuICogQENvbXBvbmVudCh7XHJcbiAqICBzZWxlY3RvcjogJ215LW1hcC1jbXAnLFxyXG4gKiAgc3R5bGVzOiBbYFxyXG4gKiAgICAubWFwLWNvbnRhaW5lciB7IGhlaWdodDogMzAwcHg7IH1cclxuICogYF0sXHJcbiAqICB0ZW1wbGF0ZTogYFxyXG4gKiAgICA8eC1tYXAgW0xhdGl0dWRlXT1cImxhdFwiIFtMb25naXR1ZGVdPVwibG5nXCIgW1pvb21dPVwiem9vbVwiPlxyXG4gKiAgICAgIDx4LW1hcC1tYXJrZXIgW0xhdGl0dWRlXT1cImxhdFwiIFtMb25naXR1ZGVdPVwibG5nXCIgW0xhYmVsXT1cIidNJ1wiPlxyXG4gKiAgICAgICAgPHgtaW5mby1ib3ggW0Rpc2FibGVBdXRvUGFuXT1cInRydWVcIj5cclxuICogICAgICAgICAgSGksIHRoaXMgaXMgdGhlIGNvbnRlbnQgb2YgdGhlIDxzdHJvbmc+aW5mbyB3aW5kb3c8L3N0cm9uZz5cclxuICogICAgICAgICA8L3gtaW5mby1ib3g+XHJcbiAqICAgICAgIDwveC1tYXAtbWFya2VyPlxyXG4gKiAgICAgPC94LW1hcD5cclxuICogIGBcclxuICogfSlcclxuICogYGBgXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEluZm9Cb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBwcml2YXRlIF9pbmZvQm94U2VydmljZTtcclxuICAgIHByaXZhdGUgX2luZm9Cb3hBZGRlZFRvTWFuYWdlcjtcclxuICAgIHByaXZhdGUgX2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBIVE1MIGNvbmVudCBvZiB0aGUgaW5mb2JveFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbmZvQm94Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2NvbnRlbnQ7XHJcbiAgICAvKipcclxuICAgICAqIFplcm8gb3IgbW9yZSBhY3Rpb25zIHRvIHNob3cgb24gdGhlIGluZm8gd2luZG93XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEluZm9Cb3hDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgSW5mb1dpbmRvd0FjdGlvbnM6IFF1ZXJ5TGlzdDxJbmZvQm94QWN0aW9uRGlyZWN0aXZlPjtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGxhdGl0dWRlIHBvc2l0aW9uIG9mIHRoZSBpbmZvIHdpbmRvdyAob25seSB1c2VmdWxsIGlmIHlvdSB1c2UgaXQgb3VzaWRlIG9mIGEge0BsaW5rIE1hcE1hcmtlcn0pLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbmZvQm94Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIExhdGl0dWRlOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsb25naXR1ZGUgcG9zaXRpb24gb2YgdGhlIGluZm8gd2luZG93IChvbmx5IHVzZWZ1bGwgaWYgeW91IHVzZSBpdCBvdXNpZGUgb2YgYSB7QGxpbmsgTWFwTWFya2VyfSkuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEluZm9Cb3hDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgTG9uZ2l0dWRlOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0aXRsZSB0byBkaXNwbGF5IGluIHRoZSBpbmZvIHdpbmRvd1xyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbmZvQm94Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIFRpdGxlOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBkZXNjcmlwdGlvbiB0byBkaXNwbGF5IGluIHRoZSBpbmZvIHdpbmRvdy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5mb0JveENvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNhYmxlIGF1dG8tcGFuIG9uIG9wZW4uIEJ5IGRlZmF1bHQsIHRoZSBpbmZvIHdpbmRvdyB3aWxsIHBhbiB0aGUgbWFwIHNvIHRoYXQgaXQgaXMgZnVsbHlcclxuICAgICAqIHZpc2libGUgd2hlbiBpdCBvcGVucy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5mb0JveENvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBEaXNhYmxlQXV0b1BhbjogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogIE1heGltdW0gd2lkdGggb2YgdGhlIGluZm93aW5kb3csIHJlZ2FyZGxlc3Mgb2YgY29udGVudCdzIHdpZHRoLiBUaGlzIHZhbHVlIGlzIG9ubHkgY29uc2lkZXJlZFxyXG4gICAgICogIGlmIGl0IGlzIHNldCBiZWZvcmUgYSBjYWxsIHRvIG9wZW4uIFRvIGNoYW5nZSB0aGUgbWF4aW11bSB3aWR0aCB3aGVuIGNoYW5naW5nIGNvbnRlbnQsIGNhbGxcclxuICAgICAqICBjbG9zZSwgdXBkYXRlIG1heFdpZHRoLCBhbmQgdGhlbiBvcGVuLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbmZvQm94Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIE1heFdpZHRoOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZSB3aGV0aGVyIG9ubHkgb25lIGluZm9ib3ggY2FuIGJlIG9wZW4gYXQgYSB0aW1lLiBOb3RlIHRoYXQgQU5ZIGluZm8gYm94IHNldHRpbmdzLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbmZvQm94Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIE1vZGFsOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBIb2xkcyB0aGUgbWFya2VyIHRoYXQgaXMgdGhlIGhvc3Qgb2YgdGhlIGluZm8gd2luZG93IChpZiBhdmFpbGFibGUpXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEluZm9Cb3hDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgSG9zdE1hcmtlcjogTWFwTWFya2VyRGlyZWN0aXZlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmVzIHZpc2liaWxpdHkgb2YgaW5mb2JveFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbmZvQm94Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIFZpc2libGU6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIEhvcml6b250YWwgb2Zmc2V0IG9mIHRoZSBpbmZvYm94IGZyb20gdGhlIGhvc3QgbWFya2VyIGxhdC9sb25nIG9yIHRoZSBzZXBlY2lmaWVkIGNvb3JkaW5hdGVzLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbmZvQm94Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHhPZmZzZXQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogVmVydGljYWwgb2Zmc2V0IGZvciB0aGUgaW5mb2JveCBmcm9tIHRoZSBob3N0IG1hcmtlciBsYXQvbG9uZyBvciB0aGUgc3BlY2lmaWVkIGNvb3JkaW5hdGVzLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbmZvQm94Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHlPZmZzZXQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lcyBpZiBvdGhlciBpbmZvIGJveGVzIHNob3VsZCBiZSBjbG9zZWQgYmVmb3JlIG9wZW5pbmcgdGhpcyBvbmVcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5mb0JveENvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBDbG9zZUluZm9Cb3hlc09uT3BlbjogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgaW5mbyB3aW5kb3cgaXMgY2xvc2VkLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbmZvQm94Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIEluZm9Cb3hDbG9zZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIEhUTUwgY29udGVudCBvZiB0aGUgaW5mbyBib3guXHJcbiAgICAgKlxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAbWVtYmVyb2YgSW5mb0JveENvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBIdG1sQ29udGVudDogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBJZCBvZiB0aGUgaW5mbyBib3ggYXMgYSBzdHJpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAbWVtYmVyb2YgSW5mb0JveENvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBJZDogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEluZm9Cb3hDb21wb25lbnQuXHJcbiAgICAgKiBAcGFyYW0gX2luZm9Cb3hTZXJ2aWNlIC0gQ29uY3JldGUge0BsaW5rIEluZm9Cb3hTZXJ2aWNlfSBpbXBsZW1lbnRhdGlvbiBmb3IgdW5kZXJseWluZyBNYXAgYXJjaGl0ZWN0dXJlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbmZvQm94Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKF9pbmZvQm94U2VydmljZTogSW5mb0JveFNlcnZpY2UpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZXMgdGhlIEluZm9ib3guXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEluZm9Cb3hDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgQ2xvc2UoKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIGFmdGVyIGNvbXBvbmVudCB2aWV3IGFzIGJlZW4gaW5pdGlhbGl6ZWQuIFBhcnQgb2YgdGhlIG5nIENvbXBvbmVudCBsaWZlIGN5Y2xlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBcclxuICAgICAqL1xyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIGNoYW5nZXMgdG8gdGhlIGRhdGFib3VkIHByb3BlcnRpZXMgb2NjdXIuIFBhcnQgb2YgdGhlIG5nIENvbXBvbmVudCBsaWZlIGN5Y2xlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjaGFuZ2VzIC0gQ2hhbmdlcyB0aGF0IGhhdmUgb2NjdXJlZC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwXHJcbiAgICAgKi9cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2U7XHJcbiAgICB9KTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIGNvbXBvbmVudCBkZXN0cnVjdGlvbi4gRnJlZXMgdGhlIHJlc291cmNlcyB1c2VkIGJ5IHRoZSBjb21wb25lbnQuIFBhcnQgb2YgdGhlIG5nIENvbXBvbmVudCBsaWZlIGN5Y2xlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXBcclxuICAgICAqL1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogT3BlbnMgYSBjbG9zZWQgaW5mbyB3aW5kb3cuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIFtsb2NdICAtIHtAbGluayBJTGF0TG9uZyB9IHJlcHJlc2VudGluZyBwb3NpdGlvbiBvbiB3aGljaCB0byBvcGVuIHRoZSB3aW5kb3cuXHJcbiAgICAgKiBAcmV0dXJucyAtIFByb21pc2UgdGhhdCBpcyBmdWxsZmlsbGVkIHdoZW4gdGhlIGluZm9ib3ggaGFzIGJlZW4gb3BlbmVkLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbmZvQm94Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIE9wZW4obG9jPzogSUxhdExvbmcpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBpbmZvIGJveC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyAtIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgaW5mbyBib3guXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEluZm9Cb3hDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgVG9TdHJpbmcoKTogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxlZ2F0ZSBoYW5kbGluZyB0aGUgbWFwIGNsaWNrIGV2ZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFwQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgSGFuZGxlRXZlbnRzKCk7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGluZm8gd2luZG93IG9wdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY2hhbmdlc1xyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbmZvQm94Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgU2V0SW5mb1dpbmRvd09wdGlvbnMoY2hhbmdlcyk7XHJcbn1cclxuIl19