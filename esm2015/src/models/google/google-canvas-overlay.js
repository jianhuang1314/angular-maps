/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CanvasOverlay } from '../canvas-overlay';
import { GoogleMapLabel } from './google-label';
import { Extender } from '../extender';
/**
 * Concrete implementing a canvas overlay to be placed on the map for Google Maps.
 *
 * @export
 */
export class GoogleCanvasOverlay extends CanvasOverlay {
    /**
     * Creates a new instance of the GoogleCanvasOverlay class.
     * \@memberof GoogleCanvasOverlay
     * @param {?} drawCallback A callback function that is triggered when the canvas is ready to be
     * rendered for the current map view.
     */
    constructor(drawCallback) {
        super(drawCallback);
    }
    /**
     * Obtains geo coordinates for the click location
     *
     * \@memberof GoogleCanvasOverlay
     * @param {?} e - The mouse event.
     * @return {?} - {\@link ILatLong} containing the geo coordinates of the clicked marker.
     */
    GetCoordinatesFromClick(e) {
        if (!e) {
            return null;
        }
        if (!e.latLng) {
            return null;
        }
        if (!e.latLng.lat || !e.latLng.lng) {
            return null;
        }
        return { latitude: e.latLng.lat(), longitude: e.latLng.lng() };
    }
    /**
     * Gets the map associted with the label.
     *
     * \@memberof GoogleCanvasOverlay
     * \@method
     * @return {?}
     */
    GetMap() {
        return (/** @type {?} */ (this)).getMap();
    }
    /**
     * Returns a MapLabel instance for the current platform that can be used as a tooltip.
     * This method only generates the map label. Content and placement is the responsibility
     * of the caller.
     *
     * \@memberof GoogleCanvasOverlay
     * \@method
     * @return {?} - The label to be used for the tooltip.
     */
    GetToolTipOverlay() {
        const /** @type {?} */ o = {
            align: 'left',
            offset: new google.maps.Point(0, 25),
            backgroundColor: 'bisque',
            hidden: true,
            fontSize: 12,
            fontColor: '#000000',
            strokeWeight: 0
        };
        o["zIndex"] = 100000;
        const /** @type {?} */ label = new GoogleMapLabel(o);
        label.SetMap(this.GetMap());
        return label;
    }
    /**
     * Called when the custom overlay is added to the map. Triggers Onload....
     * \@memberof GoogleCanvasOverlay
     * @return {?}
     */
    OnAdd() {
        super.OnAdd();
        this.OnLoad();
        this._canvas.style.zIndex = '100';
        // move the canvas above primitives such as polygons.
        // set the overlay to ready state
        this._readyResolver(true);
    }
    /**
     * Called whenever the canvas needs to be redrawn. This method does not do the actual
     * update, it simply scales the canvas. The actual redraw happens once the map is idle.
     * \@memberof GoogleCanvasOverly
     * \@method
     * @return {?}
     */
    OnDraw() {
        const /** @type {?} */ isStreetView = false;
        const /** @type {?} */ map = this.GetMap();
        if (isStreetView) {
            // Don't show the canvas if the map is in Streetside mode.
            this._canvas.style.display = 'none';
        }
        else {
            // Re-drawing the canvas as it moves would be too slow. Instead, scale and translate canvas element.
            // Upon idle or drag end, we can then redraw the canvas....
            const /** @type {?} */ zoomCurrent = map.getZoom();
            const /** @type {?} */ centerCurrent = map.getCenter();
            // Calculate map scale based on zoom level difference.
            const /** @type {?} */ scale = Math.pow(2, zoomCurrent - this._zoomStart);
            // Calculate the scaled dimensions of the canvas.
            const /** @type {?} */ el = map.getDiv();
            const /** @type {?} */ w = el.offsetWidth;
            const /** @type {?} */ h = el.offsetHeight;
            const /** @type {?} */ newWidth = w * scale;
            const /** @type {?} */ newHeight = h * scale;
            // Calculate offset of canvas based on zoom and center offsets.
            const /** @type {?} */ projection = (/** @type {?} */ (this)).getProjection();
            const /** @type {?} */ cc = projection.fromLatLngToDivPixel(centerCurrent);
            // Update the canvas CSS position and dimensions.
            this.UpdatePosition(cc.x - newWidth / 2, cc.y - newHeight / 2, newWidth, newHeight);
        }
    }
    /**
     * CanvasOverlay loaded, attach map events for updating canvas.
     * \@method
     * \@memberof GoogleCanvasOverlay
     * @return {?}
     */
    OnLoad() {
        const /** @type {?} */ isStreetView = false;
        const /** @type {?} */ map = (/** @type {?} */ (this)).getMap();
        // Get the current map view information.
        this._zoomStart = map.getZoom();
        const /** @type {?} */ c = map.getCenter();
        this._centerStart = {
            latitude: c.lat(),
            longitude: c.lng()
        };
        // When the map stops moving, render new data on the canvas.
        this._viewChangeEndEvent = google.maps.event.addListener(map, 'idle', (e) => {
            this.UpdateCanvas();
        });
        // Update the position of the overlay when the map is resized.
        this._mapResizeEvent = google.maps.event.addListener(map, 'resize', (e) => {
            this.UpdateCanvas();
        });
    }
    /**
     * Associates the cnavas overlay with a map.
     * \@method
     * \@memberof GoogleCanvasOverlay
     * @param {?} map
     * @return {?}
     */
    SetMap(map) {
        (/** @type {?} */ (this)).setMap(map);
    }
    /**
     * Attaches the canvas to the map.
     * \@memberof CanvasOverlay
     * \@method
     * @param {?} el
     * @return {?}
     */
    SetCanvasElement(el) {
        const /** @type {?} */ panes = (/** @type {?} */ (this)).getPanes();
        if (panes) {
            if (el != null) {
                panes.overlayLayer.appendChild(el);
                // 4: floatPane (infowindow)
                // 3: overlayMouseTarget (mouse events)
                // 2: markerLayer (marker images)
                // 1: overlayLayer (polygons, polylines, ground overlays, tile layer overlays)
                // 0: mapPane (lowest pane above the map tiles)
            }
            else {
                panes.overlayLayer.removeChild(this._canvas);
            }
        }
    }
    /**
     * Remove the map event handlers.
     * \@memberof CanvasOverlay
     * \@method
     * @protected
     * @return {?}
     */
    RemoveEventHandlers() {
        // Remove all event handlers from the map.
        if (this._viewChangeEndEvent) {
            google.maps.event.removeListener(this._viewChangeEndEvent);
        }
        if (this._mapResizeEvent) {
            google.maps.event.removeListener(this._mapResizeEvent);
        }
    }
    /**
     * Updates the Canvas size based on the map size.
     * \@memberof CanvasOverlay
     * \@method
     * @protected
     * @return {?}
     */
    Resize() {
        const /** @type {?} */ map = (/** @type {?} */ (this)).getMap();
        // Clear canvas by updating dimensions. This also ensures canvas stays the same size as the map.
        const /** @type {?} */ el = map.getDiv();
        this._canvas.width = el.offsetWidth;
        this._canvas.height = el.offsetHeight;
    }
    /**
     * Updates the Canvas.
     * \@memberof CanvasOverlay
     * \@method
     * @protected
     * @return {?}
     */
    UpdateCanvas() {
        const /** @type {?} */ map = (/** @type {?} */ (this)).getMap();
        // Only render the canvas if it isn't in streetside mode.
        if (true) {
            this._canvas.style.display = '';
            // Reset CSS position and dimensions of canvas.
            const /** @type {?} */ el = map.getDiv();
            const /** @type {?} */ w = el.offsetWidth;
            const /** @type {?} */ h = el.offsetHeight;
            const /** @type {?} */ centerPoint = (/** @type {?} */ (this)).getProjection().fromLatLngToDivPixel(map.getCenter());
            this.UpdatePosition((centerPoint.x - w / 2), (centerPoint.y - h / 2), w, h);
            // Redraw the canvas.
            this.Redraw(true);
            // Get the current map view information.
            this._zoomStart = map.getZoom();
            const /** @type {?} */ c = map.getCenter();
            this._centerStart = {
                latitude: c.lat(),
                longitude: c.lng()
            };
        }
    }
}
function GoogleCanvasOverlay_tsickle_Closure_declarations() {
    /** @type {?} */
    GoogleCanvasOverlay.prototype._viewChangeEndEvent;
    /** @type {?} */
    GoogleCanvasOverlay.prototype._mapResizeEvent;
}
/**
 * Helper function to extend the OverlayView into the CanvasOverlay
 *
 * @export
 * \@method
 * @return {?}
 */
export function MixinCanvasOverlay() {
    new Extender(GoogleCanvasOverlay)
        .Extend(new google.maps.OverlayView)
        .Map('onAdd', 'OnAdd')
        .Map('draw', 'OnDraw')
        .Map('onRemove', 'OnRemove');
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWNhbnZhcy1vdmVybGF5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1tYXBzLyIsInNvdXJjZXMiOlsic3JjL21vZGVscy9nb29nbGUvZ29vZ2xlLWNhbnZhcy1vdmVybGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7OztBQVF2QyxNQUFNLDBCQUEyQixTQUFRLGFBQWE7Ozs7Ozs7SUFjbEQsWUFBWSxZQUFpRDtRQUN6RCxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDdkI7Ozs7Ozs7O0lBYU0sdUJBQXVCLENBQUMsQ0FBNEI7UUFDdkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztTQUFFO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQUU7UUFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FBRTtRQUNwRCxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDOzs7Ozs7Ozs7SUFTNUQsTUFBTTtRQUNULE1BQU0sQ0FBQyxtQkFBTSxJQUFJLEVBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7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QU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFHbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDaEMsdUJBQU0sQ0FBQyxHQUEwQixHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRztnQkFDaEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pCLFNBQVMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFO2FBQ3JCLENBQUM7U0FDTDtLQUNKO0NBQ0o7Ozs7Ozs7Ozs7Ozs7O0FBUUQsTUFBTTtJQUVGLElBQUksUUFBUSxDQUFDLG1CQUFtQixDQUFDO1NBQzVCLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ25DLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO1NBQ3JCLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO1NBQ3JCLEdBQUcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7Q0FDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTGF0TG9uZyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaWxhdGxvbmcnO1xyXG5pbXBvcnQgeyBHb29nbGVDb252ZXJzaW9ucyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dvb2dsZS9nb29nbGUtY29udmVyc2lvbnMnO1xyXG5pbXBvcnQgeyBDYW52YXNPdmVybGF5IH0gZnJvbSAnLi4vY2FudmFzLW92ZXJsYXknO1xyXG5pbXBvcnQgeyBNYXBMYWJlbCB9IGZyb20gJy4uL21hcC1sYWJlbCc7XHJcbmltcG9ydCB7IEdvb2dsZU1hcExhYmVsIH0gZnJvbSAnLi9nb29nbGUtbGFiZWwnO1xyXG5pbXBvcnQgKiBhcyBHb29nbGVNYXBUeXBlcyBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nb29nbGUvZ29vZ2xlLW1hcC10eXBlcyc7XHJcbmltcG9ydCB7IEV4dGVuZGVyIH0gZnJvbSAnLi4vZXh0ZW5kZXInO1xyXG5kZWNsYXJlIHZhciBnb29nbGU6IGFueTtcclxuXHJcbi8qKlxyXG4gKiBDb25jcmV0ZSBpbXBsZW1lbnRpbmcgYSBjYW52YXMgb3ZlcmxheSB0byBiZSBwbGFjZWQgb24gdGhlIG1hcCBmb3IgR29vZ2xlIE1hcHMuXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVDYW52YXNPdmVybGF5IGV4dGVuZHMgQ2FudmFzT3ZlcmxheSB7XHJcblxyXG4gICAgLy8vXHJcbiAgICAvLy8gZmllbGQgZGVjbGFyYXRpb25zXHJcbiAgICAvLy9cclxuICAgIHByaXZhdGUgX3ZpZXdDaGFuZ2VFbmRFdmVudDogR29vZ2xlTWFwVHlwZXMuTWFwc0V2ZW50TGlzdGVuZXI7XHJcbiAgICBwcml2YXRlIF9tYXBSZXNpemVFdmVudDogR29vZ2xlTWFwVHlwZXMuTWFwc0V2ZW50TGlzdGVuZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBHb29nbGVDYW52YXNPdmVybGF5IGNsYXNzLlxyXG4gICAgICogQHBhcmFtIGRyYXdDYWxsYmFjayBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNhbnZhcyBpcyByZWFkeSB0byBiZVxyXG4gICAgICogcmVuZGVyZWQgZm9yIHRoZSBjdXJyZW50IG1hcCB2aWV3LlxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZUNhbnZhc092ZXJsYXlcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZHJhd0NhbGxiYWNrOiAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkgPT4gdm9pZCkge1xyXG4gICAgICAgIHN1cGVyKGRyYXdDYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vXHJcbiAgICAvLy8gUHVibGljIG1ldGhvZHNcclxuICAgIC8vL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyBnZW8gY29vcmRpbmF0ZXMgZm9yIHRoZSBjbGljayBsb2NhdGlvblxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlIC0gVGhlIG1vdXNlIGV2ZW50LlxyXG4gICAgICogQHJldHVybnMgLSB7QGxpbmsgSUxhdExvbmd9IGNvbnRhaW5pbmcgdGhlIGdlbyBjb29yZGluYXRlcyBvZiB0aGUgY2xpY2tlZCBtYXJrZXIuXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlQ2FudmFzT3ZlcmxheVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgR2V0Q29vcmRpbmF0ZXNGcm9tQ2xpY2soZTogR29vZ2xlTWFwVHlwZXMuTW91c2VFdmVudCk6IElMYXRMb25nIHtcclxuICAgICAgICBpZiAoIWUpIHsgcmV0dXJuIG51bGw7IH1cclxuICAgICAgICBpZiAoIWUubGF0TG5nKSB7IHJldHVybiBudWxsOyB9XHJcbiAgICAgICAgaWYgKCFlLmxhdExuZy5sYXQgfHwgIWUubGF0TG5nLmxuZykgeyByZXR1cm4gbnVsbDsgfVxyXG4gICAgICAgIHJldHVybiB7IGxhdGl0dWRlOiBlLmxhdExuZy5sYXQoKSwgbG9uZ2l0dWRlOiBlLmxhdExuZy5sbmcoKSB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbWFwIGFzc29jaXRlZCB3aXRoIHRoZSBsYWJlbC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlQ2FudmFzT3ZlcmxheVxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgR2V0TWFwKCk6IEdvb2dsZU1hcFR5cGVzLkdvb2dsZU1hcCB7XHJcbiAgICAgICAgcmV0dXJuICg8YW55PnRoaXMpLmdldE1hcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIE1hcExhYmVsIGluc3RhbmNlIGZvciB0aGUgY3VycmVudCBwbGF0Zm9ybSB0aGF0IGNhbiBiZSB1c2VkIGFzIGEgdG9vbHRpcC5cclxuICAgICAqIFRoaXMgbWV0aG9kIG9ubHkgZ2VuZXJhdGVzIHRoZSBtYXAgbGFiZWwuIENvbnRlbnQgYW5kIHBsYWNlbWVudCBpcyB0aGUgcmVzcG9uc2liaWxpdHlcclxuICAgICAqIG9mIHRoZSBjYWxsZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgLSBUaGUgbGFiZWwgdG8gYmUgdXNlZCBmb3IgdGhlIHRvb2x0aXAuXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlQ2FudmFzT3ZlcmxheVxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgR2V0VG9vbFRpcE92ZXJsYXkoKTogTWFwTGFiZWwge1xyXG4gICAgICAgIGNvbnN0IG86IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7XHJcbiAgICAgICAgICAgIGFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgICAgIG9mZnNldDogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsIDI1KSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmlzcXVlJyxcclxuICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgIGZvbnRDb2xvcjogJyMwMDAwMDAnLFxyXG4gICAgICAgICAgICBzdHJva2VXZWlnaHQ6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIG8uekluZGV4ID0gMTAwMDAwO1xyXG4gICAgICAgIGNvbnN0IGxhYmVsOiBNYXBMYWJlbCA9IG5ldyBHb29nbGVNYXBMYWJlbChvKTtcclxuICAgICAgICBsYWJlbC5TZXRNYXAodGhpcy5HZXRNYXAoKSk7XHJcbiAgICAgICAgcmV0dXJuIGxhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGN1c3RvbSBvdmVybGF5IGlzIGFkZGVkIHRvIHRoZSBtYXAuIFRyaWdnZXJzIE9ubG9hZC4uLi5cclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVDYW52YXNPdmVybGF5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBPbkFkZCgpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5PbkFkZCgpO1xyXG4gICAgICAgIHRoaXMuT25Mb2FkKCk7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xyXG4gICAgICAgICAgICAvLyBtb3ZlIHRoZSBjYW52YXMgYWJvdmUgcHJpbWl0aXZlcyBzdWNoIGFzIHBvbHlnb25zLlxyXG5cclxuICAgICAgICAvLyBzZXQgdGhlIG92ZXJsYXkgdG8gcmVhZHkgc3RhdGVcclxuICAgICAgICB0aGlzLl9yZWFkeVJlc29sdmVyKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW5ldmVyIHRoZSBjYW52YXMgbmVlZHMgdG8gYmUgcmVkcmF3bi4gVGhpcyBtZXRob2QgZG9lcyBub3QgZG8gdGhlIGFjdHVhbFxyXG4gICAgICogdXBkYXRlLCBpdCBzaW1wbHkgc2NhbGVzIHRoZSBjYW52YXMuIFRoZSBhY3R1YWwgcmVkcmF3IGhhcHBlbnMgb25jZSB0aGUgbWFwIGlzIGlkbGUuXHJcbiAgICAgKiBAbWVtYmVyb2YgR29vZ2xlQ2FudmFzT3Zlcmx5XHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBPbkRyYXcoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaXNTdHJlZXRWaWV3OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgbWFwOiBHb29nbGVNYXBUeXBlcy5Hb29nbGVNYXAgPSB0aGlzLkdldE1hcCgpO1xyXG5cclxuICAgICAgICBpZiAoaXNTdHJlZXRWaWV3KSB7XHJcbiAgICAgICAgICAgIC8vIERvbid0IHNob3cgdGhlIGNhbnZhcyBpZiB0aGUgbWFwIGlzIGluIFN0cmVldHNpZGUgbW9kZS5cclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBSZS1kcmF3aW5nIHRoZSBjYW52YXMgYXMgaXQgbW92ZXMgd291bGQgYmUgdG9vIHNsb3cuIEluc3RlYWQsIHNjYWxlIGFuZCB0cmFuc2xhdGUgY2FudmFzIGVsZW1lbnQuXHJcbiAgICAgICAgICAgIC8vIFVwb24gaWRsZSBvciBkcmFnIGVuZCwgd2UgY2FuIHRoZW4gcmVkcmF3IHRoZSBjYW52YXMuLi4uXHJcbiAgICAgICAgICAgIGNvbnN0IHpvb21DdXJyZW50OiBudW1iZXIgPSBtYXAuZ2V0Wm9vbSgpO1xyXG4gICAgICAgICAgICBjb25zdCBjZW50ZXJDdXJyZW50OiBHb29nbGVNYXBUeXBlcy5MYXRMbmcgPSBtYXAuZ2V0Q2VudGVyKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgbWFwIHNjYWxlIGJhc2VkIG9uIHpvb20gbGV2ZWwgZGlmZmVyZW5jZS5cclxuICAgICAgICAgICAgY29uc3Qgc2NhbGU6IG51bWJlciA9IE1hdGgucG93KDIsIHpvb21DdXJyZW50IC0gdGhpcy5fem9vbVN0YXJ0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgc2NhbGVkIGRpbWVuc2lvbnMgb2YgdGhlIGNhbnZhcy5cclxuICAgICAgICAgICAgY29uc3QgZWw6IEhUTUxEaXZFbGVtZW50ID0gbWFwLmdldERpdigpO1xyXG4gICAgICAgICAgICBjb25zdCB3OiBudW1iZXIgPSBlbC5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaDogbnVtYmVyID0gZWwub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICBjb25zdCBuZXdXaWR0aDogbnVtYmVyID0gdyAqIHNjYWxlO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdIZWlnaHQ6IG51bWJlciA9IGggKiBzY2FsZTtcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBvZmZzZXQgb2YgY2FudmFzIGJhc2VkIG9uIHpvb20gYW5kIGNlbnRlciBvZmZzZXRzLlxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0aW9uID0gKDxhbnk+dGhpcykuZ2V0UHJvamVjdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBjYyA9IHByb2plY3Rpb24uZnJvbUxhdExuZ1RvRGl2UGl4ZWwoY2VudGVyQ3VycmVudCk7XHJcblxyXG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGNhbnZhcyBDU1MgcG9zaXRpb24gYW5kIGRpbWVuc2lvbnMuXHJcbiAgICAgICAgICAgIHRoaXMuVXBkYXRlUG9zaXRpb24oY2MueCAtIG5ld1dpZHRoIC8gMiwgY2MueSAtIG5ld0hlaWdodCAvIDIsIG5ld1dpZHRoLCBuZXdIZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbnZhc092ZXJsYXkgbG9hZGVkLCBhdHRhY2ggbWFwIGV2ZW50cyBmb3IgdXBkYXRpbmcgY2FudmFzLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIEdvb2dsZUNhbnZhc092ZXJsYXlcclxuICAgICAqL1xyXG4gICAgcHVibGljIE9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpc1N0cmVldFZpZXc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBtYXA6IEdvb2dsZU1hcFR5cGVzLkdvb2dsZU1hcCA9ICg8YW55PnRoaXMpLmdldE1hcCgpO1xyXG5cclxuICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgbWFwIHZpZXcgaW5mb3JtYXRpb24uXHJcbiAgICAgICAgdGhpcy5fem9vbVN0YXJ0ID0gbWFwLmdldFpvb20oKTtcclxuICAgICAgICBjb25zdCBjOiBHb29nbGVNYXBUeXBlcy5MYXRMbmcgPSBtYXAuZ2V0Q2VudGVyKCk7XHJcbiAgICAgICAgdGhpcy5fY2VudGVyU3RhcnQgPSB7XHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBjLmxhdCgpLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGMubG5nKClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBXaGVuIHRoZSBtYXAgc3RvcHMgbW92aW5nLCByZW5kZXIgbmV3IGRhdGEgb24gdGhlIGNhbnZhcy5cclxuICAgICAgICB0aGlzLl92aWV3Q2hhbmdlRW5kRXZlbnQgPSBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXAsICdpZGxlJywgKGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlVwZGF0ZUNhbnZhcygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBvdmVybGF5IHdoZW4gdGhlIG1hcCBpcyByZXNpemVkLlxyXG4gICAgICAgIHRoaXMuX21hcFJlc2l6ZUV2ZW50ID0gZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFwLCAncmVzaXplJywgKGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlVwZGF0ZUNhbnZhcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXNzb2NpYXRlcyB0aGUgY25hdmFzIG92ZXJsYXkgd2l0aCBhIG1hcC5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBHb29nbGVDYW52YXNPdmVybGF5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBTZXRNYXAobWFwOiBHb29nbGVNYXBUeXBlcy5Hb29nbGVNYXApOiB2b2lkIHtcclxuICAgICAgICAoPGFueT50aGlzKS5zZXRNYXAobWFwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLy9cclxuICAgIC8vLyBQcm90ZWN0ZWQgbWV0aG9kc1xyXG4gICAgLy8vXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBdHRhY2hlcyB0aGUgY2FudmFzIHRvIHRoZSBtYXAuXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzT3ZlcmxheVxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgU2V0Q2FudmFzRWxlbWVudChlbDogSFRNTENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBwYW5lcyA9ICg8YW55PnRoaXMpLmdldFBhbmVzKCk7XHJcbiAgICAgICAgaWYgKHBhbmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChlbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBwYW5lcy5vdmVybGF5TGF5ZXIuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgICAgICAgICAgLy8gNDogZmxvYXRQYW5lIChpbmZvd2luZG93KVxyXG4gICAgICAgICAgICAgICAgLy8gMzogb3ZlcmxheU1vdXNlVGFyZ2V0IChtb3VzZSBldmVudHMpXHJcbiAgICAgICAgICAgICAgICAvLyAyOiBtYXJrZXJMYXllciAobWFya2VyIGltYWdlcylcclxuICAgICAgICAgICAgICAgIC8vIDE6IG92ZXJsYXlMYXllciAocG9seWdvbnMsIHBvbHlsaW5lcywgZ3JvdW5kIG92ZXJsYXlzLCB0aWxlIGxheWVyIG92ZXJsYXlzKVxyXG4gICAgICAgICAgICAgICAgLy8gMDogbWFwUGFuZSAobG93ZXN0IHBhbmUgYWJvdmUgdGhlIG1hcCB0aWxlcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhbmVzLm92ZXJsYXlMYXllci5yZW1vdmVDaGlsZCh0aGlzLl9jYW52YXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIHRoZSBtYXAgZXZlbnQgaGFuZGxlcnMuXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzT3ZlcmxheVxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgUmVtb3ZlRXZlbnRIYW5kbGVycygpOiB2b2lkIHtcclxuICAgICAgICAvLyBSZW1vdmUgYWxsIGV2ZW50IGhhbmRsZXJzIGZyb20gdGhlIG1hcC5cclxuICAgICAgICBpZiAodGhpcy5fdmlld0NoYW5nZUVuZEV2ZW50KSB7IGdvb2dsZS5tYXBzLmV2ZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMuX3ZpZXdDaGFuZ2VFbmRFdmVudCk7IH1cclxuICAgICAgICBpZiAodGhpcy5fbWFwUmVzaXplRXZlbnQpIHsgZ29vZ2xlLm1hcHMuZXZlbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5fbWFwUmVzaXplRXZlbnQpOyB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBDYW52YXMgc2l6ZSBiYXNlZCBvbiB0aGUgbWFwIHNpemUuXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzT3ZlcmxheVxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG1hcDogR29vZ2xlTWFwVHlwZXMuR29vZ2xlTWFwID0gKDxhbnk+dGhpcykuZ2V0TWFwKCk7XHJcblxyXG4gICAgICAgIC8vIENsZWFyIGNhbnZhcyBieSB1cGRhdGluZyBkaW1lbnNpb25zLiBUaGlzIGFsc28gZW5zdXJlcyBjYW52YXMgc3RheXMgdGhlIHNhbWUgc2l6ZSBhcyB0aGUgbWFwLlxyXG4gICAgICAgIGNvbnN0IGVsOiBIVE1MRGl2RWxlbWVudCA9IG1hcC5nZXREaXYoKTtcclxuICAgICAgICB0aGlzLl9jYW52YXMud2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcclxuICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gZWwub2Zmc2V0SGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgQ2FudmFzLlxyXG4gICAgICogQG1lbWJlcm9mIENhbnZhc092ZXJsYXlcclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIFVwZGF0ZUNhbnZhcygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBtYXA6IEdvb2dsZU1hcFR5cGVzLkdvb2dsZU1hcCA9ICg8YW55PnRoaXMpLmdldE1hcCgpO1xyXG5cclxuICAgICAgICAvLyBPbmx5IHJlbmRlciB0aGUgY2FudmFzIGlmIGl0IGlzbid0IGluIHN0cmVldHNpZGUgbW9kZS5cclxuICAgICAgICBpZiAodHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXMuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVzZXQgQ1NTIHBvc2l0aW9uIGFuZCBkaW1lbnNpb25zIG9mIGNhbnZhcy5cclxuICAgICAgICAgICAgY29uc3QgZWw6IEhUTUxEaXZFbGVtZW50ID0gbWFwLmdldERpdigpO1xyXG4gICAgICAgICAgICBjb25zdCB3OiBudW1iZXIgPSBlbC5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaDogbnVtYmVyID0gZWwub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICBjb25zdCBjZW50ZXJQb2ludCA9ICg8YW55PnRoaXMpLmdldFByb2plY3Rpb24oKS5mcm9tTGF0TG5nVG9EaXZQaXhlbChtYXAuZ2V0Q2VudGVyKCkpO1xyXG4gICAgICAgICAgICB0aGlzLlVwZGF0ZVBvc2l0aW9uKChjZW50ZXJQb2ludC54IC0gdyAvIDIpLCAoY2VudGVyUG9pbnQueSAtIGggLyAyKSwgdywgaCk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZWRyYXcgdGhlIGNhbnZhcy5cclxuICAgICAgICAgICAgdGhpcy5SZWRyYXcodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgbWFwIHZpZXcgaW5mb3JtYXRpb24uXHJcbiAgICAgICAgICAgIHRoaXMuX3pvb21TdGFydCA9IG1hcC5nZXRab29tKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGM6IEdvb2dsZU1hcFR5cGVzLkxhdExuZyA9IG1hcC5nZXRDZW50ZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5fY2VudGVyU3RhcnQgPSB7XHJcbiAgICAgICAgICAgICAgICBsYXRpdHVkZTogYy5sYXQoKSxcclxuICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogYy5sbmcoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBleHRlbmQgdGhlIE92ZXJsYXlWaWV3IGludG8gdGhlIENhbnZhc092ZXJsYXlcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAbWV0aG9kXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gTWl4aW5DYW52YXNPdmVybGF5KCkge1xyXG5cclxuICAgIG5ldyBFeHRlbmRlcihHb29nbGVDYW52YXNPdmVybGF5KVxyXG4gICAgICAgIC5FeHRlbmQobmV3IGdvb2dsZS5tYXBzLk92ZXJsYXlWaWV3KVxyXG4gICAgICAgIC5NYXAoJ29uQWRkJywgJ09uQWRkJylcclxuICAgICAgICAuTWFwKCdkcmF3JywgJ09uRHJhdycpXHJcbiAgICAgICAgLk1hcCgnb25SZW1vdmUnLCAnT25SZW1vdmUnKTtcclxufVxyXG4iXX0=