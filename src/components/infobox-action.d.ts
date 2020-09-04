import { EventEmitter } from '@angular/core';
/**
 * InfoBoxAction renders an action in an info window {@link InfoBox}
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
 *  `],
 *  template: `
 *    <x-map [Latitude]="lat" [Longitude]="lng" [Zoom]="zoom">
 *      <x-map-marker [Latitude]="lat" [Longitude]="lng" [Label]="'M'">
 *        <x-info-box>
 *          <x-info-box-action [Label]="actionlabel" (ActionClicked)="actionClicked(this)"></x-info-box-action>
 *        </x-info-box>
 *      </x-map-marker>
 *    </x-map>
 *  `
 * })
 * ```
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class InfoBoxActionDirective {
    /**
     * The label to display on the action
     *
     * @memberof InfoBoxActionDirective
     */
    Label: string;
    /**
     * Emits an event when the action has been clicked
     *
     * @memberof InfoBoxActionDirective
     */
    ActionClicked: EventEmitter<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InfoBoxActionDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<InfoBoxActionDirective, "x-info-box-action", never, { "Label": "Label"; }, { "ActionClicked": "ActionClicked"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mb2JveC1hY3Rpb24uZC50cyIsInNvdXJjZXMiOlsiaW5mb2JveC1hY3Rpb24uZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLyoqXHJcbiAqIEluZm9Cb3hBY3Rpb24gcmVuZGVycyBhbiBhY3Rpb24gaW4gYW4gaW5mbyB3aW5kb3cge0BsaW5rIEluZm9Cb3h9XHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4gKiBpbXBvcnQge01hcENvbXBvbmVudCwgTWFwTWFya2VyRGlyZWN0aXZlLCBJbmZvQm94Q29tcG9uZW50LCBJbmZvQm94QWN0aW9uRGlyZWN0aXZlfSBmcm9tICcuLi4nO1xyXG4gKlxyXG4gKiBAQ29tcG9uZW50KHtcclxuICogIHNlbGVjdG9yOiAnbXktbWFwLWNtcCcsXHJcbiAqICBzdHlsZXM6IFtgXHJcbiAqICAgIC5tYXAtY29udGFpbmVyIHsgaGVpZ2h0OiAzMDBweDsgfVxyXG4gKiAgYF0sXHJcbiAqICB0ZW1wbGF0ZTogYFxyXG4gKiAgICA8eC1tYXAgW0xhdGl0dWRlXT1cImxhdFwiIFtMb25naXR1ZGVdPVwibG5nXCIgW1pvb21dPVwiem9vbVwiPlxyXG4gKiAgICAgIDx4LW1hcC1tYXJrZXIgW0xhdGl0dWRlXT1cImxhdFwiIFtMb25naXR1ZGVdPVwibG5nXCIgW0xhYmVsXT1cIidNJ1wiPlxyXG4gKiAgICAgICAgPHgtaW5mby1ib3g+XHJcbiAqICAgICAgICAgIDx4LWluZm8tYm94LWFjdGlvbiBbTGFiZWxdPVwiYWN0aW9ubGFiZWxcIiAoQWN0aW9uQ2xpY2tlZCk9XCJhY3Rpb25DbGlja2VkKHRoaXMpXCI+PC94LWluZm8tYm94LWFjdGlvbj5cclxuICogICAgICAgIDwveC1pbmZvLWJveD5cclxuICogICAgICA8L3gtbWFwLW1hcmtlcj5cclxuICogICAgPC94LW1hcD5cclxuICogIGBcclxuICogfSlcclxuICogYGBgXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEluZm9Cb3hBY3Rpb25EaXJlY3RpdmUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbGFiZWwgdG8gZGlzcGxheSBvbiB0aGUgYWN0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEluZm9Cb3hBY3Rpb25EaXJlY3RpdmVcclxuICAgICAqL1xyXG4gICAgTGFiZWw6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgYWN0aW9uIGhhcyBiZWVuIGNsaWNrZWRcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5mb0JveEFjdGlvbkRpcmVjdGl2ZVxyXG4gICAgICovXHJcbiAgICBBY3Rpb25DbGlja2VkOiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbn1cclxuIl19