/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { MarkerTypeId } from '../models/marker-type-id';
/**
 * This interface defines the contract for an icon cache entry.
 * @record
 */
function IMarkerIconCacheEntry() { }
function IMarkerIconCacheEntry_tsickle_Closure_declarations() {
    /**
     * The icon string of the cache entry.
     *
     * \@memberof IMarkerIconCacheEntry
     * @type {?}
     */
    IMarkerIconCacheEntry.prototype.markerIconString;
    /**
     * The Size of the icon.
     *
     * \@memberof IMarkerIconCacheEntry
     *
     * @type {?}
     */
    IMarkerIconCacheEntry.prototype.markerSize;
}
/**
 * This class defines the contract for a marker.
 *
 * @export
 * @abstract
 * @abstract
 */
export class Marker {
    /**
     * Creates a marker based on the marker info. In turn calls a number of internal members to
     * create the actual marker.
     *
     * \@memberof Marker
     * @param {?} iconInfo - icon information. Depending on the marker type, various properties
     * need to be present. For performance, it is recommended to use an id for markers that are common to facilitate
     * reuse.
     * @return {?} - a string or a promise for a string containing
     * a data url with the marker image.
     */
    static CreateMarker(iconInfo) {
        switch (iconInfo.markerType) {
            case MarkerTypeId.CanvasMarker: return Marker.CreateCanvasMarker(iconInfo);
            case MarkerTypeId.DynamicCircleMarker: return Marker.CreateDynamicCircleMarker(iconInfo);
            case MarkerTypeId.FontMarker: return Marker.CreateFontBasedMarker(iconInfo);
            case MarkerTypeId.RotatedImageMarker: return Marker.CreateRotatedImageMarker(iconInfo);
            case MarkerTypeId.RoundedImageMarker: return Marker.CreateRoundedImageMarker(iconInfo);
            case MarkerTypeId.ScaledImageMarker: return Marker.CreateScaledImageMarker(iconInfo);
            case MarkerTypeId.Custom: throw Error('Custom Marker Creators are not currently supported.');
        }
        throw Error('Unsupported marker type: ' + iconInfo.markerType);
    }
    /**
     * Obtains a shared img element for a marker icon to prevent unecessary creation of
     * DOM items. This has sped up large scale makers on Bing Maps by about 70%
     * \@memberof Marker
     * @param {?} icon - The icon string (url, data url, svg) for which to obtain the image.
     * @return {?} - The obtained image element.
     */
    static GetImageForMarker(icon) {
        if (icon == null || icon === '') {
            return null;
        }
        let /** @type {?} */ img = null;
        img = Marker.ImageElementCache.get(icon);
        if (img != null) {
            return img;
        }
        if (typeof (document) !== 'undefined' && document != null) {
            img = document.createElement('img');
            img.src = icon;
            Marker.ImageElementCache.set(icon, img);
        }
        return img;
    }
    /**
     * Creates a canvased based marker using the point collection contained in the iconInfo parameter.
     *
     * @protected
     * \@memberof Marker
     * @param {?} iconInfo - {\@link IMarkerIconInfo} containing the information necessary to create the icon.
     * @return {?} - String with the data url for the marker image.
     *
     */
    static CreateCanvasMarker(iconInfo) {
        if (document == null) {
            throw Error('Document context (window.document) is required for canvas markers.');
        }
        if (iconInfo == null || iconInfo.size == null || iconInfo.points == null) {
            throw Error('IMarkerIconInfo.size, and IMarkerIConInfo.points are required for canvas markers.');
        }
        if (iconInfo.id != null && Marker.MarkerCache.has(iconInfo.id)) {
            const /** @type {?} */ mi = Marker.MarkerCache.get(iconInfo.id);
            iconInfo.size = mi.markerSize;
            return mi.markerIconString;
        }
        const /** @type {?} */ c = document.createElement('canvas');
        const /** @type {?} */ ctx = c.getContext('2d');
        c.width = iconInfo.size.width;
        c.height = iconInfo.size.height;
        if (iconInfo.rotation) {
            // Offset the canvas such that we will rotate around the center of our arrow
            ctx.translate(c.width * 0.5, c.height * 0.5);
            // Rotate the canvas by the desired heading
            ctx.rotate(iconInfo.rotation * Math.PI / 180);
            // Return the canvas offset back to it's original position
            ctx.translate(-c.width * 0.5, -c.height * 0.5);
        }
        ctx.fillStyle = iconInfo.color || 'red';
        // Draw a path in the shape of an arrow.
        ctx.beginPath();
        if (iconInfo.drawingOffset) {
            ctx.moveTo(iconInfo.drawingOffset.x, iconInfo.drawingOffset.y);
        }
        iconInfo.points.forEach((p) => { ctx.lineTo(p.x, p.y); });
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        const /** @type {?} */ s = c.toDataURL();
        if (iconInfo.id != null) {
            Marker.MarkerCache.set(iconInfo.id, { markerIconString: s, markerSize: iconInfo.size });
        }
        return s;
    }
    /**
     * Creates a circle marker image using information contained in the iconInfo parameter.
     *
     * @protected
     * \@memberof Marker
     * @param {?} iconInfo - {\@link IMarkerIconInfo} containing the information necessary to create the icon.
     * @return {?} - String with the data url for the marker image.
     *
     */
    static CreateDynamicCircleMarker(iconInfo) {
        if (document == null) {
            throw Error('Document context (window.document) is required for dynamic circle markers.');
        }
        if (iconInfo == null || iconInfo.size == null) {
            throw Error('IMarkerIconInfo.size is required for dynamic circle markers.');
        }
        if (iconInfo.id != null && Marker.MarkerCache.has(iconInfo.id)) {
            const /** @type {?} */ mi = Marker.MarkerCache.get(iconInfo.id);
            iconInfo.size = mi.markerSize;
            return mi.markerIconString;
        }
        const /** @type {?} */ strokeWidth = iconInfo.strokeWidth || 0;
        // Create an SVG string of a circle with the specified radius and color.
        const /** @type {?} */ svg = [
            '<svg xmlns="http://www.w3.org/2000/svg" width="',
            iconInfo.size.width.toString(),
            '" height="',
            iconInfo.size.width.toString(),
            '"><circle cx="',
            (iconInfo.size.width / 2).toString(),
            '" cy="',
            (iconInfo.size.width / 2).toString(),
            '" r="',
            ((iconInfo.size.width / 2) - strokeWidth).toString(),
            '" stroke="',
            iconInfo.color || 'red',
            '" stroke-width="',
            strokeWidth.toString(),
            '" fill="',
            iconInfo.color || 'red',
            '"/></svg>'
        ];
        const /** @type {?} */ s = svg.join('');
        if (iconInfo.id != null) {
            Marker.MarkerCache.set(iconInfo.id, { markerIconString: s, markerSize: iconInfo.size });
        }
        return s;
    }
    /**
     * Creates a font based marker image (such as Font-Awesome), by using information supplied in the parameters (such as Font-Awesome).
     *
     * @protected
     * \@memberof Marker
     * @param {?} iconInfo - {\@link IMarkerIconInfo} containing the information necessary to create the icon.
     * @return {?} - String with the data url for the marker image.
     *
     */
    static CreateFontBasedMarker(iconInfo) {
        if (document == null) {
            throw Error('Document context (window.document) is required for font based markers');
        }
        if (iconInfo == null || iconInfo.fontName == null || iconInfo.fontSize == null) {
            throw Error('IMarkerIconInfo.fontName, IMarkerIconInfo.fontSize and IMarkerIConInfo.text are required for font based markers.');
        }
        if (iconInfo.id != null && Marker.MarkerCache.has(iconInfo.id)) {
            const /** @type {?} */ mi = Marker.MarkerCache.get(iconInfo.id);
            iconInfo.size = mi.markerSize;
            return mi.markerIconString;
        }
        const /** @type {?} */ c = document.createElement('canvas');
        const /** @type {?} */ ctx = c.getContext('2d');
        const /** @type {?} */ font = iconInfo.fontSize + 'px ' + iconInfo.fontName;
        ctx.font = font;
        // Resize canvas based on sie of text.
        const /** @type {?} */ size = ctx.measureText(iconInfo.text);
        c.width = size.width;
        c.height = iconInfo.fontSize;
        if (iconInfo.rotation) {
            // Offset the canvas such that we will rotate around the center of our arrow
            ctx.translate(c.width * 0.5, c.height * 0.5);
            // Rotate the canvas by the desired heading
            ctx.rotate(iconInfo.rotation * Math.PI / 180);
            // Return the canvas offset back to it's original position
            ctx.translate(-c.width * 0.5, -c.height * 0.5);
        }
        // Reset font as it will be cleared by the resize.
        ctx.font = font;
        ctx.textBaseline = 'top';
        ctx.fillStyle = iconInfo.color || 'red';
        ctx.fillText(iconInfo.text, 0, 0);
        iconInfo.size = { width: c.width, height: c.height };
        const /** @type {?} */ s = c.toDataURL();
        if (iconInfo.id != null) {
            Marker.MarkerCache.set(iconInfo.id, { markerIconString: s, markerSize: iconInfo.size });
        }
        return s;
    }
    /**
     * Creates an image marker by applying a roation to a supplied image.
     *
     * @protected
     * \@memberof Marker
     * @param {?} iconInfo - {\@link IMarkerIconInfo} containing the information necessary to create the icon.
     * @return {?} - a string or a promise for a string containing
     * a data url with the marker image. In case of a cached image, the image will be returned, otherwise the promise.
     *
     */
    static CreateRotatedImageMarker(iconInfo) {
        if (document == null) {
            throw Error('Document context (window.document) is required for rotated image markers');
        }
        if (iconInfo == null || iconInfo.rotation == null || iconInfo.url == null) {
            throw Error('IMarkerIconInfo.rotation, IMarkerIconInfo.url are required for rotated image markers.');
        }
        if (iconInfo.id != null && Marker.MarkerCache.has(iconInfo.id)) {
            const /** @type {?} */ mi = Marker.MarkerCache.get(iconInfo.id);
            iconInfo.size = mi.markerSize;
            return mi.markerIconString;
        }
        const /** @type {?} */ image = new Image();
        const /** @type {?} */ promise = new Promise((resolve, reject) => {
            // Allow cross domain image editting.
            image.crossOrigin = 'anonymous';
            image.src = iconInfo.url;
            if (iconInfo.size) {
                image.width = iconInfo.size.width;
                image.height = iconInfo.size.height;
            }
            image.onload = function () {
                const /** @type {?} */ c = document.createElement('canvas');
                const /** @type {?} */ ctx = c.getContext('2d');
                const /** @type {?} */ rads = iconInfo.rotation * Math.PI / 180;
                // Calculate rotated image size.
                c.width = Math.ceil(Math.abs(image.width * Math.cos(rads)) + Math.abs(image.height * Math.sin(rads)));
                c.height = Math.ceil(Math.abs(image.width * Math.sin(rads)) + Math.abs(image.height * Math.cos(rads)));
                // Move to the center of the canvas.
                ctx.translate(c.width / 2, c.height / 2);
                // Rotate the canvas to the specified angle in degrees.
                ctx.rotate(rads);
                // Draw the image, since the context is rotated, the image will be rotated also.
                ctx.drawImage(image, -image.width / 2, -image.height / 2, image.width, image.height);
                iconInfo.size = { width: c.width, height: c.height };
                const /** @type {?} */ s = c.toDataURL();
                if (iconInfo.id != null) {
                    Marker.MarkerCache.set(iconInfo.id, { markerIconString: s, markerSize: iconInfo.size });
                }
                resolve({ icon: s, iconInfo: iconInfo });
            };
        });
        return promise;
    }
    /**
     * Creates a rounded image marker by applying a circle mask to a supplied image.
     *
     * @protected
     * \@memberof Marker
     * @param {?} iconInfo - {\@link IMarkerIconInfo} containing the information necessary to create the icon.
     * @return {?} - a string or a promise for a string containing
     * a data url with the marker image. In case of a cached image, the image will be returned, otherwise the promise.
     *
     */
    static CreateRoundedImageMarker(iconInfo) {
        if (document == null) {
            throw Error('Document context (window.document) is required for rounded image markers');
        }
        if (iconInfo == null || iconInfo.size == null || iconInfo.url == null) {
            throw Error('IMarkerIconInfo.size, IMarkerIconInfo.url are required for rounded image markers.');
        }
        if (iconInfo.id != null && Marker.MarkerCache.has(iconInfo.id)) {
            const /** @type {?} */ mi = Marker.MarkerCache.get(iconInfo.id);
            iconInfo.size = mi.markerSize;
            return mi.markerIconString;
        }
        const /** @type {?} */ promise = new Promise((resolve, reject) => {
            const /** @type {?} */ radius = iconInfo.size.width / 2;
            const /** @type {?} */ image = new Image();
            const /** @type {?} */ offset = iconInfo.drawingOffset || { x: 0, y: 0 };
            // Allow cross domain image editting.
            image.crossOrigin = 'anonymous';
            image.src = iconInfo.url;
            image.onload = function () {
                const /** @type {?} */ c = document.createElement('canvas');
                const /** @type {?} */ ctx = c.getContext('2d');
                c.width = iconInfo.size.width;
                c.height = iconInfo.size.width;
                // Draw a circle which can be used to clip the image, then draw the image.
                ctx.beginPath();
                ctx.arc(radius, radius, radius, 0, 2 * Math.PI, false);
                ctx.fill();
                ctx.clip();
                ctx.drawImage(image, offset.x, offset.y, iconInfo.size.width, iconInfo.size.width);
                iconInfo.size = { width: c.width, height: c.height };
                const /** @type {?} */ s = c.toDataURL();
                if (iconInfo.id != null) {
                    Marker.MarkerCache.set(iconInfo.id, { markerIconString: s, markerSize: iconInfo.size });
                }
                resolve({ icon: s, iconInfo: iconInfo });
            };
        });
        return promise;
    }
    /**
     * Creates a scaled image marker by scaling a supplied image by a factor using a canvas.
     *
     * @protected
     * \@memberof Marker
     * @param {?} iconInfo - {\@link IMarkerIconInfo} containing the information necessary to create the icon.
     * @return {?} - a string or a promise for a string containing
     * a data url with the marker image. In case of a cached image, the image will be returned, otherwise the promise.
     *
     */
    static CreateScaledImageMarker(iconInfo) {
        if (document == null) {
            throw Error('Document context (window.document) is required for scaled image markers');
        }
        if (iconInfo == null || iconInfo.scale == null || iconInfo.url == null) {
            throw Error('IMarkerIconInfo.scale, IMarkerIconInfo.url are required for scaled image markers.');
        }
        if (iconInfo.id != null && Marker.MarkerCache.has(iconInfo.id)) {
            const /** @type {?} */ mi = Marker.MarkerCache.get(iconInfo.id);
            iconInfo.size = mi.markerSize;
            return mi.markerIconString;
        }
        const /** @type {?} */ promise = new Promise((resolve, reject) => {
            const /** @type {?} */ image = new Image();
            // Allow cross domain image editting.
            image.crossOrigin = 'anonymous';
            image.src = iconInfo.url;
            image.onload = function () {
                const /** @type {?} */ c = document.createElement('canvas');
                const /** @type {?} */ ctx = c.getContext('2d');
                c.width = image.width * iconInfo.scale;
                c.height = image.height * iconInfo.scale;
                // Draw a circle which can be used to clip the image, then draw the image.
                ctx.drawImage(image, 0, 0, c.width, c.height);
                iconInfo.size = { width: c.width, height: c.height };
                const /** @type {?} */ s = c.toDataURL();
                if (iconInfo.id != null) {
                    Marker.MarkerCache.set(iconInfo.id, { markerIconString: s, markerSize: iconInfo.size });
                }
                resolve({ icon: s, iconInfo: iconInfo });
            };
        });
        return promise;
    }
}
/**
 * Caches concrete img elements for marker icons to accelerate patining.
 *
 * \@memberof Marker
 */
Marker.ImageElementCache = new Map();
/**
 * Used to cache generated markers for performance and reusability.
 *
 * \@memberof Marker
 */
Marker.MarkerCache = new Map();
function Marker_tsickle_Closure_declarations() {
    /**
     * Caches concrete img elements for marker icons to accelerate patining.
     *
     * \@memberof Marker
     * @type {?}
     */
    Marker.ImageElementCache;
    /**
     * Used to cache generated markers for performance and reusability.
     *
     * \@memberof Marker
     * @type {?}
     */
    Marker.MarkerCache;
    /**
     * Indicates that the marker is the first marker in a set.
     *
     * @abstract
     * \@memberof Marker
     * @abstract
     * @return {?}
     */
    Marker.prototype.IsFirst = function () { };
    /**
     * @abstract
     * @param {?} val
     * @return {?}
     */
    Marker.prototype.IsFirst = function (val) { };
    /**
     * Indicates that the marker is the last marker in the set.
     *
     * @abstract
     * \@memberof Marker
     * @abstract
     * @return {?}
     */
    Marker.prototype.IsLast = function () { };
    /**
     * @abstract
     * @param {?} val
     * @return {?}
     */
    Marker.prototype.IsLast = function (val) { };
    /**
     * Gets the Location of the marker
     *
     * \@readonly
     * @abstract
     * \@memberof Marker
     * @abstract
     * @return {?}
     */
    Marker.prototype.Location = function () { };
    /**
     * Gets the marker metadata.
     *
     * \@readonly
     * @abstract
     * \@memberof Marker
     * @abstract
     * @return {?}
     */
    Marker.prototype.Metadata = function () { };
    /**
     * Gets the native primitve implementing the marker (e.g. Microsoft.Maps.Pushpin)
     *
     * \@readonly
     * @abstract
     * \@memberof Marker
     * @abstract
     * @return {?}
     */
    Marker.prototype.NativePrimitve = function () { };
    /**
     * Adds an event listener to the marker.
     *
     * @abstract
     * \@memberof Marker
     * @abstract
     * @param {?} eventType - String containing the event for which to register the listener (e.g. "click")
     * @param {?} fn - Delegate invoked when the event occurs.
     *
     * @return {?}
     */
    Marker.prototype.AddListener = function (eventType, fn) { };
    /**
     * Deletes the marker.
     *
     * @abstract
     *
     * \@memberof Marker
     * @abstract
     * @return {?}
     */
    Marker.prototype.DeleteMarker = function () { };
    /**
     * Gets the marker label
     *
     * @abstract
     *
     * \@memberof Marker
     * @abstract
     * @return {?}
     */
    Marker.prototype.GetLabel = function () { };
    /**
     * Gets the marker visibility
     *
     * @abstract
     *
     * \@memberof Marker
     * @abstract
     * @return {?}
     */
    Marker.prototype.GetVisible = function () { };
    /**
     * Sets the anchor for the marker. Use this to adjust the root location for the marker to accomodate various marker image sizes.
     *
     * @abstract
     * \@memberof Marker
     * @abstract
     * @param {?} anchor - Point coordinates for the marker anchor.
     *
     * @return {?}
     */
    Marker.prototype.SetAnchor = function (anchor) { };
    /**
     * Sets the draggability of a marker.
     *
     * @abstract
     * \@memberof Marker
     * @abstract
     * @param {?} draggable - True to mark the marker as draggable, false otherwise.
     *
     * @return {?}
     */
    Marker.prototype.SetDraggable = function (draggable) { };
    /**
     * Sets the icon for the marker.
     *
     * @abstract
     * \@memberof Marker
     * @abstract
     * @param {?} icon - String containing the icon in various forms (url, data url, etc.)
     *
     * @return {?}
     */
    Marker.prototype.SetIcon = function (icon) { };
    /**
     * Sets the marker label.
     *
     * @abstract
     * \@memberof Marker
     * @abstract
     * @param {?} label - String containing the label to set.
     *
     * @return {?}
     */
    Marker.prototype.SetLabel = function (label) { };
    /**
     * Sets the marker position.
     *
     * @abstract
     * \@memberof Marker
     * @abstract
     * @param {?} latLng - Geo coordinates to set the marker position to.
     *
     * @return {?}
     */
    Marker.prototype.SetPosition = function (latLng) { };
    /**
     * Sets the marker title.
     *
     * @abstract
     * \@memberof Marker
     * @abstract
     * @param {?} title - String containing the title to set.
     *
     * @return {?}
     */
    Marker.prototype.SetTitle = function (title) { };
    /**
     * Sets the marker options.
     *
     * @abstract
     * \@memberof Marker
     * @abstract
     * @param {?} options - {\@link IMarkerOptions} object containing the marker options to set. The supplied options are
     * merged with the underlying marker options.
     * @return {?}
     */
    Marker.prototype.SetOptions = function (options) { };
    /**
     * Sets the visiblilty of the marker.
     *
     * @abstract
     * \@memberof Marker
     * @abstract
     * @param {?} visible - Boolean which determines if the marker is visible or not.
     *
     * @return {?}
     */
    Marker.prototype.SetVisible = function (visible) { };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1tYXBzLyIsInNvdXJjZXMiOlsic3JjL21vZGVscy9tYXJrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJ4RCxNQUFNOzs7Ozs7Ozs7Ozs7SUFrQ0ssTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUF5QjtRQUNoRCxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUMxQixLQUFLLFlBQVksQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzRSxLQUFLLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pGLEtBQUssWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVFLEtBQUssWUFBWSxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkYsS0FBSyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2RixLQUFLLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JGLEtBQUssWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1NBQ2hHO1FBQ0QsTUFBTSxLQUFLLENBQUMsMkJBQTJCLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FB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QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElMYXRMb25nIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbGF0bG9uZyc7XHJcbmltcG9ydCB7IElNYXJrZXJPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbWFya2VyLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBJTWFya2VySWNvbkluZm8gfSBmcm9tICcuLi9pbnRlcmZhY2VzL2ltYXJrZXItaWNvbi1pbmZvJztcclxuaW1wb3J0IHsgSVBvaW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pcG9pbnQnO1xyXG5pbXBvcnQgeyBJU2l6ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaXNpemUnO1xyXG5pbXBvcnQgeyBNYXJrZXJUeXBlSWQgfSBmcm9tICcuLi9tb2RlbHMvbWFya2VyLXR5cGUtaWQnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgaW50ZXJmYWNlIGRlZmluZXMgdGhlIGNvbnRyYWN0IGZvciBhbiBpY29uIGNhY2hlIGVudHJ5LlxyXG4gKi9cclxuaW50ZXJmYWNlIElNYXJrZXJJY29uQ2FjaGVFbnRyeSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBpY29uIHN0cmluZyBvZiB0aGUgY2FjaGUgZW50cnkuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIElNYXJrZXJJY29uQ2FjaGVFbnRyeVxyXG4gICAgICovXHJcbiAgICBtYXJrZXJJY29uU3RyaW5nOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgU2l6ZSBvZiB0aGUgaWNvbi5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSU1hcmtlckljb25DYWNoZUVudHJ5XHJcbiAgICAqICovXHJcbiAgICBtYXJrZXJTaXplOiBJU2l6ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgZGVmaW5lcyB0aGUgY29udHJhY3QgZm9yIGEgbWFya2VyLlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBhYnN0cmFjdFxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1hcmtlciB7XHJcblxyXG4gICAgLy8vXHJcbiAgICAvLy8gRmllbGQgZGVmaW5pdGlvbnNcclxuICAgIC8vL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FjaGVzIGNvbmNyZXRlIGltZyBlbGVtZW50cyBmb3IgbWFya2VyIGljb25zIHRvIGFjY2VsZXJhdGUgcGF0aW5pbmcuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcmtlclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBJbWFnZUVsZW1lbnRDYWNoZTogTWFwPHN0cmluZywgSFRNTEltYWdlRWxlbWVudD4gPSBuZXcgTWFwPHN0cmluZywgSFRNTEltYWdlRWxlbWVudD4oKTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VkIHRvIGNhY2hlIGdlbmVyYXRlZCBtYXJrZXJzIGZvciBwZXJmb3JtYW5jZSBhbmQgcmV1c2FiaWxpdHkuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcmtlclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBNYXJrZXJDYWNoZTogTWFwPHN0cmluZywgSU1hcmtlckljb25DYWNoZUVudHJ5PiA9IG5ldyBNYXA8c3RyaW5nLCBJTWFya2VySWNvbkNhY2hlRW50cnk+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbWFya2VyIGJhc2VkIG9uIHRoZSBtYXJrZXIgaW5mby4gSW4gdHVybiBjYWxscyBhIG51bWJlciBvZiBpbnRlcm5hbCBtZW1iZXJzIHRvXHJcbiAgICAgKiBjcmVhdGUgdGhlIGFjdHVhbCBtYXJrZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGljb25JbmZvIC0gaWNvbiBpbmZvcm1hdGlvbi4gRGVwZW5kaW5nIG9uIHRoZSBtYXJrZXIgdHlwZSwgdmFyaW91cyBwcm9wZXJ0aWVzXHJcbiAgICAgKiBuZWVkIHRvIGJlIHByZXNlbnQuIEZvciBwZXJmb3JtYW5jZSwgaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIGFuIGlkIGZvciBtYXJrZXJzIHRoYXQgYXJlIGNvbW1vbiB0byBmYWNpbGl0YXRlXHJcbiAgICAgKiByZXVzZS5cclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayAtIGEgY2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIG9uIG1hcmtlcnMgdGhhdCByZXF1aXJlIGFzeW5jcm9ub3VzXHJcbiAgICAgKiBwcm9jZXNzaW5nIGR1cmluZyBjcmVhdGlvbi4gRm9yIG1hcmtlcnMgdGhhdCBkbyBub3QgcmVxdWlyZSBhc3luYyBwcm9jZXNzaW5nLCB0aGlzIHBhcmFtZXRlciBpcyBpZ25vcmVkLlxyXG4gICAgICogQHJldHVybnMgLSBhIHN0cmluZyBvciBhIHByb21pc2UgZm9yIGEgc3RyaW5nIGNvbnRhaW5pbmdcclxuICAgICAqIGEgZGF0YSB1cmwgd2l0aCB0aGUgbWFya2VyIGltYWdlLlxyXG4gICAgICogQG1lbWJlcm9mIE1hcmtlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZU1hcmtlcihpY29uSW5mbzogSU1hcmtlckljb25JbmZvKTogc3RyaW5nfFByb21pc2U8e2ljb246IHN0cmluZywgaWNvbkluZm86IElNYXJrZXJJY29uSW5mb30+IHtcclxuICAgICAgICBzd2l0Y2ggKGljb25JbmZvLm1hcmtlclR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBNYXJrZXJUeXBlSWQuQ2FudmFzTWFya2VyOiByZXR1cm4gTWFya2VyLkNyZWF0ZUNhbnZhc01hcmtlcihpY29uSW5mbyk7XHJcbiAgICAgICAgICAgIGNhc2UgTWFya2VyVHlwZUlkLkR5bmFtaWNDaXJjbGVNYXJrZXI6IHJldHVybiBNYXJrZXIuQ3JlYXRlRHluYW1pY0NpcmNsZU1hcmtlcihpY29uSW5mbyk7XHJcbiAgICAgICAgICAgIGNhc2UgTWFya2VyVHlwZUlkLkZvbnRNYXJrZXI6IHJldHVybiBNYXJrZXIuQ3JlYXRlRm9udEJhc2VkTWFya2VyKGljb25JbmZvKTtcclxuICAgICAgICAgICAgY2FzZSBNYXJrZXJUeXBlSWQuUm90YXRlZEltYWdlTWFya2VyOiByZXR1cm4gTWFya2VyLkNyZWF0ZVJvdGF0ZWRJbWFnZU1hcmtlcihpY29uSW5mbyk7XHJcbiAgICAgICAgICAgIGNhc2UgTWFya2VyVHlwZUlkLlJvdW5kZWRJbWFnZU1hcmtlcjogcmV0dXJuIE1hcmtlci5DcmVhdGVSb3VuZGVkSW1hZ2VNYXJrZXIoaWNvbkluZm8pO1xyXG4gICAgICAgICAgICBjYXNlIE1hcmtlclR5cGVJZC5TY2FsZWRJbWFnZU1hcmtlcjogcmV0dXJuIE1hcmtlci5DcmVhdGVTY2FsZWRJbWFnZU1hcmtlcihpY29uSW5mbyk7XHJcbiAgICAgICAgICAgIGNhc2UgTWFya2VyVHlwZUlkLkN1c3RvbTogdGhyb3cgRXJyb3IoJ0N1c3RvbSBNYXJrZXIgQ3JlYXRvcnMgYXJlIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBFcnJvcignVW5zdXBwb3J0ZWQgbWFya2VyIHR5cGU6ICcgKyBpY29uSW5mby5tYXJrZXJUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9idGFpbnMgYSBzaGFyZWQgaW1nIGVsZW1lbnQgZm9yIGEgbWFya2VyIGljb24gdG8gcHJldmVudCB1bmVjZXNzYXJ5IGNyZWF0aW9uIG9mXHJcbiAgICAgKiBET00gaXRlbXMuIFRoaXMgaGFzIHNwZWQgdXAgbGFyZ2Ugc2NhbGUgbWFrZXJzIG9uIEJpbmcgTWFwcyBieSBhYm91dCA3MCVcclxuICAgICAqIEBwYXJhbSBpY29uIC0gVGhlIGljb24gc3RyaW5nICh1cmwsIGRhdGEgdXJsLCBzdmcpIGZvciB3aGljaCB0byBvYnRhaW4gdGhlIGltYWdlLlxyXG4gICAgICogQHJldHVybnMgLSBUaGUgb2J0YWluZWQgaW1hZ2UgZWxlbWVudC5cclxuICAgICAqIEBtZW1iZXJvZiBNYXJrZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRJbWFnZUZvck1hcmtlcihpY29uOiBzdHJpbmcpOiBIVE1MSW1hZ2VFbGVtZW50IHtcclxuICAgICAgICBpZiAoaWNvbiA9PSBudWxsIHx8IGljb24gPT09ICcnICkgeyByZXR1cm4gIG51bGw7IH1cclxuXHJcbiAgICAgICAgbGV0IGltZzogSFRNTEltYWdlRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgaW1nID0gTWFya2VyLkltYWdlRWxlbWVudENhY2hlLmdldChpY29uKTtcclxuICAgICAgICBpZiAoaW1nICE9IG51bGwpIHsgcmV0dXJuIGltZzsgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mKGRvY3VtZW50KSAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IGljb247XHJcbiAgICAgICAgICAgIE1hcmtlci5JbWFnZUVsZW1lbnRDYWNoZS5zZXQoaWNvbiwgaW1nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGltZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBjYW52YXNlZCBiYXNlZCBtYXJrZXIgdXNpbmcgdGhlIHBvaW50IGNvbGxlY3Rpb24gY29udGFpbmVkIGluIHRoZSBpY29uSW5mbyBwYXJhbWV0ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHBhcmFtIGljb25JbmZvIC0ge0BsaW5rIElNYXJrZXJJY29uSW5mb30gY29udGFpbmluZyB0aGUgaW5mb3JtYXRpb24gbmVjZXNzYXJ5IHRvIGNyZWF0ZSB0aGUgaWNvbi5cclxuICAgICAqIEByZXR1cm5zIC0gU3RyaW5nIHdpdGggdGhlIGRhdGEgdXJsIGZvciB0aGUgbWFya2VyIGltYWdlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXJrZXJcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBDcmVhdGVDYW52YXNNYXJrZXIoaWNvbkluZm86IElNYXJrZXJJY29uSW5mbyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50ID09IG51bGwpIHsgdGhyb3cgRXJyb3IoJ0RvY3VtZW50IGNvbnRleHQgKHdpbmRvdy5kb2N1bWVudCkgaXMgcmVxdWlyZWQgZm9yIGNhbnZhcyBtYXJrZXJzLicpOyB9XHJcbiAgICAgICAgaWYgKGljb25JbmZvID09IG51bGwgfHwgaWNvbkluZm8uc2l6ZSA9PSBudWxsIHx8IGljb25JbmZvLnBvaW50cyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdJTWFya2VySWNvbkluZm8uc2l6ZSwgYW5kIElNYXJrZXJJQ29uSW5mby5wb2ludHMgYXJlIHJlcXVpcmVkIGZvciBjYW52YXMgbWFya2Vycy4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGljb25JbmZvLmlkICE9IG51bGwgJiYgTWFya2VyLk1hcmtlckNhY2hlLmhhcyhpY29uSW5mby5pZCkpIHtcclxuICAgICAgICAgICAgY29uc3QgbWk6IElNYXJrZXJJY29uQ2FjaGVFbnRyeSA9IE1hcmtlci5NYXJrZXJDYWNoZS5nZXQoaWNvbkluZm8uaWQpO1xyXG4gICAgICAgICAgICBpY29uSW5mby5zaXplID0gbWkubWFya2VyU2l6ZTtcclxuICAgICAgICAgICAgcmV0dXJuIG1pLm1hcmtlckljb25TdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gYy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGMud2lkdGggPSBpY29uSW5mby5zaXplLndpZHRoO1xyXG4gICAgICAgIGMuaGVpZ2h0ID0gaWNvbkluZm8uc2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKGljb25JbmZvLnJvdGF0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vIE9mZnNldCB0aGUgY2FudmFzIHN1Y2ggdGhhdCB3ZSB3aWxsIHJvdGF0ZSBhcm91bmQgdGhlIGNlbnRlciBvZiBvdXIgYXJyb3dcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShjLndpZHRoICogMC41LCBjLmhlaWdodCAqIDAuNSk7XHJcbiAgICAgICAgICAgIC8vIFJvdGF0ZSB0aGUgY2FudmFzIGJ5IHRoZSBkZXNpcmVkIGhlYWRpbmdcclxuICAgICAgICAgICAgY3R4LnJvdGF0ZShpY29uSW5mby5yb3RhdGlvbiAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIGNhbnZhcyBvZmZzZXQgYmFjayB0byBpdCdzIG9yaWdpbmFsIHBvc2l0aW9uXHJcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoLWMud2lkdGggKiAwLjUsIC1jLmhlaWdodCAqIDAuNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gaWNvbkluZm8uY29sb3IgfHwgJ3JlZCc7XHJcblxyXG4gICAgICAgIC8vIERyYXcgYSBwYXRoIGluIHRoZSBzaGFwZSBvZiBhbiBhcnJvdy5cclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgaWYgKGljb25JbmZvLmRyYXdpbmdPZmZzZXQpIHsgY3R4Lm1vdmVUbyhpY29uSW5mby5kcmF3aW5nT2Zmc2V0LngsIGljb25JbmZvLmRyYXdpbmdPZmZzZXQueSk7IH1cclxuICAgICAgICBpY29uSW5mby5wb2ludHMuZm9yRWFjaCgocDogSVBvaW50KSA9PiB7IGN0eC5saW5lVG8ocC54LCBwLnkpOyB9KTtcclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHM6IHN0cmluZyA9IGMudG9EYXRhVVJMKCk7XHJcbiAgICAgICAgaWYgKGljb25JbmZvLmlkICE9IG51bGwpIHsgTWFya2VyLk1hcmtlckNhY2hlLnNldChpY29uSW5mby5pZCwgeyBtYXJrZXJJY29uU3RyaW5nOiBzLCBtYXJrZXJTaXplOiBpY29uSW5mby5zaXplIH0pOyB9XHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgY2lyY2xlIG1hcmtlciBpbWFnZSB1c2luZyBpbmZvcm1hdGlvbiBjb250YWluZWQgaW4gdGhlIGljb25JbmZvIHBhcmFtZXRlci5cclxuICAgICAqXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAcGFyYW0gaWNvbkluZm8gLSB7QGxpbmsgSU1hcmtlckljb25JbmZvfSBjb250YWluaW5nIHRoZSBpbmZvcm1hdGlvbiBuZWNlc3NhcnkgdG8gY3JlYXRlIHRoZSBpY29uLlxyXG4gICAgICogQHJldHVybnMgLSBTdHJpbmcgd2l0aCB0aGUgZGF0YSB1cmwgZm9yIHRoZSBtYXJrZXIgaW1hZ2UuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcmtlclxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIENyZWF0ZUR5bmFtaWNDaXJjbGVNYXJrZXIoaWNvbkluZm86IElNYXJrZXJJY29uSW5mbyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50ID09IG51bGwpIHsgdGhyb3cgRXJyb3IoJ0RvY3VtZW50IGNvbnRleHQgKHdpbmRvdy5kb2N1bWVudCkgaXMgcmVxdWlyZWQgZm9yIGR5bmFtaWMgY2lyY2xlIG1hcmtlcnMuJyk7IH1cclxuICAgICAgICBpZiAoaWNvbkluZm8gPT0gbnVsbCB8fCBpY29uSW5mby5zaXplID09IG51bGwpIHsgdGhyb3cgRXJyb3IoJ0lNYXJrZXJJY29uSW5mby5zaXplIGlzIHJlcXVpcmVkIGZvciBkeW5hbWljIGNpcmNsZSBtYXJrZXJzLicpOyB9XHJcbiAgICAgICAgaWYgKGljb25JbmZvLmlkICE9IG51bGwgJiYgTWFya2VyLk1hcmtlckNhY2hlLmhhcyhpY29uSW5mby5pZCkpIHtcclxuICAgICAgICAgICAgY29uc3QgbWk6IElNYXJrZXJJY29uQ2FjaGVFbnRyeSA9IE1hcmtlci5NYXJrZXJDYWNoZS5nZXQoaWNvbkluZm8uaWQpO1xyXG4gICAgICAgICAgICBpY29uSW5mby5zaXplID0gbWkubWFya2VyU2l6ZTtcclxuICAgICAgICAgICAgcmV0dXJuIG1pLm1hcmtlckljb25TdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzdHJva2VXaWR0aDogbnVtYmVyID0gaWNvbkluZm8uc3Ryb2tlV2lkdGggfHwgMDtcclxuICAgICAgICAvLyBDcmVhdGUgYW4gU1ZHIHN0cmluZyBvZiBhIGNpcmNsZSB3aXRoIHRoZSBzcGVjaWZpZWQgcmFkaXVzIGFuZCBjb2xvci5cclxuICAgICAgICBjb25zdCBzdmc6IEFycmF5PHN0cmluZz4gPSBbXHJcbiAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIicsXHJcbiAgICAgICAgICAgIGljb25JbmZvLnNpemUud2lkdGgudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgJ1wiIGhlaWdodD1cIicsXHJcbiAgICAgICAgICAgIGljb25JbmZvLnNpemUud2lkdGgudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgJ1wiPjxjaXJjbGUgY3g9XCInLFxyXG4gICAgICAgICAgICAoaWNvbkluZm8uc2l6ZS53aWR0aCAvIDIpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICdcIiBjeT1cIicsXHJcbiAgICAgICAgICAgIChpY29uSW5mby5zaXplLndpZHRoIC8gMikudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgJ1wiIHI9XCInLFxyXG4gICAgICAgICAgICAoKGljb25JbmZvLnNpemUud2lkdGggLyAyKSAtIHN0cm9rZVdpZHRoKS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAnXCIgc3Ryb2tlPVwiJyxcclxuICAgICAgICAgICAgaWNvbkluZm8uY29sb3IgfHwgJ3JlZCcsXHJcbiAgICAgICAgICAgICdcIiBzdHJva2Utd2lkdGg9XCInLFxyXG4gICAgICAgICAgICBzdHJva2VXaWR0aC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAnXCIgZmlsbD1cIicsXHJcbiAgICAgICAgICAgIGljb25JbmZvLmNvbG9yIHx8ICdyZWQnLFxyXG4gICAgICAgICAgICAnXCIvPjwvc3ZnPidcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBjb25zdCBzOiBzdHJpbmcgPSBzdmcuam9pbignJyk7XHJcbiAgICAgICAgaWYgKGljb25JbmZvLmlkICE9IG51bGwpIHsgTWFya2VyLk1hcmtlckNhY2hlLnNldChpY29uSW5mby5pZCwgeyBtYXJrZXJJY29uU3RyaW5nOiBzLCBtYXJrZXJTaXplOiBpY29uSW5mby5zaXplIH0pOyB9XHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgZm9udCBiYXNlZCBtYXJrZXIgaW1hZ2UgKHN1Y2ggYXMgRm9udC1Bd2Vzb21lKSwgYnkgdXNpbmcgaW5mb3JtYXRpb24gc3VwcGxpZWQgaW4gdGhlIHBhcmFtZXRlcnMgKHN1Y2ggYXMgRm9udC1Bd2Vzb21lKS5cclxuICAgICAqXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAcGFyYW0gaWNvbkluZm8gLSB7QGxpbmsgSU1hcmtlckljb25JbmZvfSBjb250YWluaW5nIHRoZSBpbmZvcm1hdGlvbiBuZWNlc3NhcnkgdG8gY3JlYXRlIHRoZSBpY29uLlxyXG4gICAgICogQHJldHVybnMgLSBTdHJpbmcgd2l0aCB0aGUgZGF0YSB1cmwgZm9yIHRoZSBtYXJrZXIgaW1hZ2UuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcmtlclxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIENyZWF0ZUZvbnRCYXNlZE1hcmtlcihpY29uSW5mbzogSU1hcmtlckljb25JbmZvKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQgPT0gbnVsbCkgeyB0aHJvdyBFcnJvcignRG9jdW1lbnQgY29udGV4dCAod2luZG93LmRvY3VtZW50KSBpcyByZXF1aXJlZCBmb3IgZm9udCBiYXNlZCBtYXJrZXJzJyk7IH1cclxuICAgICAgICBpZiAoaWNvbkluZm8gPT0gbnVsbCB8fCBpY29uSW5mby5mb250TmFtZSA9PSBudWxsIHx8IGljb25JbmZvLmZvbnRTaXplID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0lNYXJrZXJJY29uSW5mby5mb250TmFtZSwgSU1hcmtlckljb25JbmZvLmZvbnRTaXplIGFuZCBJTWFya2VySUNvbkluZm8udGV4dCBhcmUgcmVxdWlyZWQgZm9yIGZvbnQgYmFzZWQgbWFya2Vycy4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGljb25JbmZvLmlkICE9IG51bGwgJiYgTWFya2VyLk1hcmtlckNhY2hlLmhhcyhpY29uSW5mby5pZCkpIHtcclxuICAgICAgICAgICAgY29uc3QgbWk6IElNYXJrZXJJY29uQ2FjaGVFbnRyeSA9IE1hcmtlci5NYXJrZXJDYWNoZS5nZXQoaWNvbkluZm8uaWQpO1xyXG4gICAgICAgICAgICBpY29uSW5mby5zaXplID0gbWkubWFya2VyU2l6ZTtcclxuICAgICAgICAgICAgcmV0dXJuIG1pLm1hcmtlckljb25TdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gYy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGNvbnN0IGZvbnQ6IHN0cmluZyA9IGljb25JbmZvLmZvbnRTaXplICsgJ3B4ICcgKyBpY29uSW5mby5mb250TmFtZTtcclxuICAgICAgICBjdHguZm9udCA9IGZvbnQ7XHJcblxyXG4gICAgICAgIC8vIFJlc2l6ZSBjYW52YXMgYmFzZWQgb24gc2llIG9mIHRleHQuXHJcbiAgICAgICAgY29uc3Qgc2l6ZTogVGV4dE1ldHJpY3MgPSBjdHgubWVhc3VyZVRleHQoaWNvbkluZm8udGV4dCk7XHJcbiAgICAgICAgYy53aWR0aCA9IHNpemUud2lkdGg7XHJcbiAgICAgICAgYy5oZWlnaHQgPSBpY29uSW5mby5mb250U2l6ZTtcclxuXHJcbiAgICAgICAgaWYgKGljb25JbmZvLnJvdGF0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vIE9mZnNldCB0aGUgY2FudmFzIHN1Y2ggdGhhdCB3ZSB3aWxsIHJvdGF0ZSBhcm91bmQgdGhlIGNlbnRlciBvZiBvdXIgYXJyb3dcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShjLndpZHRoICogMC41LCBjLmhlaWdodCAqIDAuNSk7XHJcbiAgICAgICAgICAgIC8vIFJvdGF0ZSB0aGUgY2FudmFzIGJ5IHRoZSBkZXNpcmVkIGhlYWRpbmdcclxuICAgICAgICAgICAgY3R4LnJvdGF0ZShpY29uSW5mby5yb3RhdGlvbiAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIGNhbnZhcyBvZmZzZXQgYmFjayB0byBpdCdzIG9yaWdpbmFsIHBvc2l0aW9uXHJcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoLWMud2lkdGggKiAwLjUsIC1jLmhlaWdodCAqIDAuNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZXNldCBmb250IGFzIGl0IHdpbGwgYmUgY2xlYXJlZCBieSB0aGUgcmVzaXplLlxyXG4gICAgICAgIGN0eC5mb250ID0gZm9udDtcclxuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gJ3RvcCc7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGljb25JbmZvLmNvbG9yIHx8ICdyZWQnO1xyXG5cclxuICAgICAgICBjdHguZmlsbFRleHQoaWNvbkluZm8udGV4dCwgMCwgMCk7XHJcbiAgICAgICAgaWNvbkluZm8uc2l6ZSA9IHsgd2lkdGg6IGMud2lkdGgsIGhlaWdodDogYy5oZWlnaHQgfTtcclxuICAgICAgICBjb25zdCBzOiBzdHJpbmcgPSBjLnRvRGF0YVVSTCgpO1xyXG4gICAgICAgIGlmIChpY29uSW5mby5pZCAhPSBudWxsKSB7IE1hcmtlci5NYXJrZXJDYWNoZS5zZXQoaWNvbkluZm8uaWQsIHsgbWFya2VySWNvblN0cmluZzogcywgbWFya2VyU2l6ZTogaWNvbkluZm8uc2l6ZSB9KTsgfVxyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbWFnZSBtYXJrZXIgYnkgYXBwbHlpbmcgYSByb2F0aW9uIHRvIGEgc3VwcGxpZWQgaW1hZ2UuXHJcbiAgICAgKlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHBhcmFtIGljb25JbmZvIC0ge0BsaW5rIElNYXJrZXJJY29uSW5mb30gY29udGFpbmluZyB0aGUgaW5mb3JtYXRpb24gbmVjZXNzYXJ5IHRvIGNyZWF0ZSB0aGUgaWNvbi5cclxuICAgICAqIEByZXR1cm5zIC0gYSBzdHJpbmcgb3IgYSBwcm9taXNlIGZvciBhIHN0cmluZyBjb250YWluaW5nXHJcbiAgICAgKiBhIGRhdGEgdXJsIHdpdGggdGhlIG1hcmtlciBpbWFnZS4gSW4gY2FzZSBvZiBhIGNhY2hlZCBpbWFnZSwgdGhlIGltYWdlIHdpbGwgYmUgcmV0dXJuZWQsIG90aGVyd2lzZSB0aGUgcHJvbWlzZS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFya2VyXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgQ3JlYXRlUm90YXRlZEltYWdlTWFya2VyKGljb25JbmZvOiBJTWFya2VySWNvbkluZm8pOiBzdHJpbmd8UHJvbWlzZTx7aWNvbjogc3RyaW5nLCBpY29uSW5mbzogSU1hcmtlckljb25JbmZvfT4ge1xyXG4gICAgICAgIGlmIChkb2N1bWVudCA9PSBudWxsKSB7IHRocm93IEVycm9yKCdEb2N1bWVudCBjb250ZXh0ICh3aW5kb3cuZG9jdW1lbnQpIGlzIHJlcXVpcmVkIGZvciByb3RhdGVkIGltYWdlIG1hcmtlcnMnKTsgfVxyXG4gICAgICAgIGlmIChpY29uSW5mbyA9PSBudWxsIHx8IGljb25JbmZvLnJvdGF0aW9uID09IG51bGwgfHwgaWNvbkluZm8udXJsID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0lNYXJrZXJJY29uSW5mby5yb3RhdGlvbiwgSU1hcmtlckljb25JbmZvLnVybCBhcmUgcmVxdWlyZWQgZm9yIHJvdGF0ZWQgaW1hZ2UgbWFya2Vycy4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGljb25JbmZvLmlkICE9IG51bGwgJiYgTWFya2VyLk1hcmtlckNhY2hlLmhhcyhpY29uSW5mby5pZCkpIHtcclxuICAgICAgICAgICAgY29uc3QgbWk6IElNYXJrZXJJY29uQ2FjaGVFbnRyeSA9IE1hcmtlci5NYXJrZXJDYWNoZS5nZXQoaWNvbkluZm8uaWQpO1xyXG4gICAgICAgICAgICBpY29uSW5mby5zaXplID0gbWkubWFya2VyU2l6ZTtcclxuICAgICAgICAgICAgcmV0dXJuIG1pLm1hcmtlckljb25TdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGNvbnN0IHByb21pc2U6IFByb21pc2U8e2ljb246IHN0cmluZywgaWNvbkluZm86IElNYXJrZXJJY29uSW5mb30+ID1cclxuICAgICAgICAgICAgbmV3IFByb21pc2U8e2ljb246IHN0cmluZywgaWNvbkluZm86IElNYXJrZXJJY29uSW5mb30+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy8gQWxsb3cgY3Jvc3MgZG9tYWluIGltYWdlIGVkaXR0aW5nLlxyXG4gICAgICAgICAgICBpbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBpY29uSW5mby51cmw7XHJcbiAgICAgICAgICAgIGlmIChpY29uSW5mby5zaXplKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS53aWR0aCA9IGljb25JbmZvLnNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5oZWlnaHQgPSBpY29uSW5mby5zaXplLmhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYWRzOiBudW1iZXIgPSBpY29uSW5mby5yb3RhdGlvbiAqIE1hdGguUEkgLyAxODA7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHJvdGF0ZWQgaW1hZ2Ugc2l6ZS5cclxuICAgICAgICAgICAgICAgIGMud2lkdGggPSBNYXRoLmNlaWwoTWF0aC5hYnMoaW1hZ2Uud2lkdGggKiBNYXRoLmNvcyhyYWRzKSkgKyBNYXRoLmFicyhpbWFnZS5oZWlnaHQgKiBNYXRoLnNpbihyYWRzKSkpO1xyXG4gICAgICAgICAgICAgICAgYy5oZWlnaHQgPSBNYXRoLmNlaWwoTWF0aC5hYnMoaW1hZ2Uud2lkdGggKiBNYXRoLnNpbihyYWRzKSkgKyBNYXRoLmFicyhpbWFnZS5oZWlnaHQgKiBNYXRoLmNvcyhyYWRzKSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE1vdmUgdG8gdGhlIGNlbnRlciBvZiB0aGUgY2FudmFzLlxyXG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShjLndpZHRoIC8gMiwgYy5oZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgIC8vIFJvdGF0ZSB0aGUgY2FudmFzIHRvIHRoZSBzcGVjaWZpZWQgYW5nbGUgaW4gZGVncmVlcy5cclxuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUocmFkcyk7XHJcbiAgICAgICAgICAgICAgICAvLyBEcmF3IHRoZSBpbWFnZSwgc2luY2UgdGhlIGNvbnRleHQgaXMgcm90YXRlZCwgdGhlIGltYWdlIHdpbGwgYmUgcm90YXRlZCBhbHNvLlxyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgLWltYWdlLndpZHRoIC8gMiwgLWltYWdlLmhlaWdodCAvIDIsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgaWNvbkluZm8uc2l6ZSA9IHsgd2lkdGg6IGMud2lkdGgsIGhlaWdodDogYy5oZWlnaHQgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzOiBzdHJpbmcgPSBjLnRvRGF0YVVSTCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGljb25JbmZvLmlkICE9IG51bGwpIHsgTWFya2VyLk1hcmtlckNhY2hlLnNldChpY29uSW5mby5pZCwgeyBtYXJrZXJJY29uU3RyaW5nOiBzLCBtYXJrZXJTaXplOiBpY29uSW5mby5zaXplIH0pOyB9XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtpY29uOiBzLCBpY29uSW5mbzogaWNvbkluZm99KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSByb3VuZGVkIGltYWdlIG1hcmtlciBieSBhcHBseWluZyBhIGNpcmNsZSBtYXNrIHRvIGEgc3VwcGxpZWQgaW1hZ2UuXHJcbiAgICAgKlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHBhcmFtIGljb25JbmZvIC0ge0BsaW5rIElNYXJrZXJJY29uSW5mb30gY29udGFpbmluZyB0aGUgaW5mb3JtYXRpb24gbmVjZXNzYXJ5IHRvIGNyZWF0ZSB0aGUgaWNvbi5cclxuICAgICAqIEBwYXJhbSBpY29uSW5mbyAtIENhbGxiYWNrIGludm9rZWQgb25jZSBtYXJrZXIgZ2VuZXJhdGlvbiBpcyBjb21wbGV0ZS4gVGhlIGNhbGxiYWNrXHJcbiAgICAgKiBwYXJhbWV0ZXJzIGFyZSB0aGUgZGF0YSB1cmkgYW5kIHRoZSBJTWFya2VySWNvbkluZm8uXHJcbiAgICAgKiBAcmV0dXJucyAtIGEgc3RyaW5nIG9yIGEgcHJvbWlzZSBmb3IgYSBzdHJpbmcgY29udGFpbmluZ1xyXG4gICAgICogYSBkYXRhIHVybCB3aXRoIHRoZSBtYXJrZXIgaW1hZ2UuIEluIGNhc2Ugb2YgYSBjYWNoZWQgaW1hZ2UsIHRoZSBpbWFnZSB3aWxsIGJlIHJldHVybmVkLCBvdGhlcndpc2UgdGhlIHByb21pc2UuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcmtlclxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIENyZWF0ZVJvdW5kZWRJbWFnZU1hcmtlcihpY29uSW5mbzogSU1hcmtlckljb25JbmZvKTogc3RyaW5nfFByb21pc2U8e2ljb246IHN0cmluZywgaWNvbkluZm86IElNYXJrZXJJY29uSW5mb30+IHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQgPT0gbnVsbCkgeyB0aHJvdyBFcnJvcignRG9jdW1lbnQgY29udGV4dCAod2luZG93LmRvY3VtZW50KSBpcyByZXF1aXJlZCBmb3Igcm91bmRlZCBpbWFnZSBtYXJrZXJzJyk7IH1cclxuICAgICAgICBpZiAoaWNvbkluZm8gPT0gbnVsbCB8fCBpY29uSW5mby5zaXplID09IG51bGwgfHwgaWNvbkluZm8udXJsID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0lNYXJrZXJJY29uSW5mby5zaXplLCBJTWFya2VySWNvbkluZm8udXJsIGFyZSByZXF1aXJlZCBmb3Igcm91bmRlZCBpbWFnZSBtYXJrZXJzLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaWNvbkluZm8uaWQgIT0gbnVsbCAmJiBNYXJrZXIuTWFya2VyQ2FjaGUuaGFzKGljb25JbmZvLmlkKSkge1xyXG4gICAgICAgICAgICBjb25zdCBtaTogSU1hcmtlckljb25DYWNoZUVudHJ5ID0gTWFya2VyLk1hcmtlckNhY2hlLmdldChpY29uSW5mby5pZCk7XHJcbiAgICAgICAgICAgIGljb25JbmZvLnNpemUgPSBtaS5tYXJrZXJTaXplO1xyXG4gICAgICAgICAgICByZXR1cm4gbWkubWFya2VySWNvblN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2U6IFByb21pc2U8e2ljb246IHN0cmluZywgaWNvbkluZm86IElNYXJrZXJJY29uSW5mb30+ID1cclxuICAgICAgICAgICAgbmV3IFByb21pc2U8e2ljb246IHN0cmluZywgaWNvbkluZm86IElNYXJrZXJJY29uSW5mb30+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmFkaXVzOiBudW1iZXIgPSBpY29uSW5mby5zaXplLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0OiBJUG9pbnQgPSBpY29uSW5mby5kcmF3aW5nT2Zmc2V0IHx8IHsgeDogMCwgeTogMCB9O1xyXG5cclxuICAgICAgICAgICAgLy8gQWxsb3cgY3Jvc3MgZG9tYWluIGltYWdlIGVkaXR0aW5nLlxyXG4gICAgICAgICAgICBpbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBpY29uSW5mby51cmw7XHJcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgICAgIGMud2lkdGggPSBpY29uSW5mby5zaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgYy5oZWlnaHQgPSBpY29uSW5mby5zaXplLndpZHRoO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERyYXcgYSBjaXJjbGUgd2hpY2ggY2FuIGJlIHVzZWQgdG8gY2xpcCB0aGUgaW1hZ2UsIHRoZW4gZHJhdyB0aGUgaW1hZ2UuXHJcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBjdHguYXJjKHJhZGl1cywgcmFkaXVzLCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmNsaXAoKTtcclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIG9mZnNldC54LCBvZmZzZXQueSwgaWNvbkluZm8uc2l6ZS53aWR0aCwgaWNvbkluZm8uc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICBpY29uSW5mby5zaXplID0geyB3aWR0aDogYy53aWR0aCwgaGVpZ2h0OiBjLmhlaWdodCB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHM6IHN0cmluZyA9IGMudG9EYXRhVVJMKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWNvbkluZm8uaWQgIT0gbnVsbCkgeyBNYXJrZXIuTWFya2VyQ2FjaGUuc2V0KGljb25JbmZvLmlkLCB7IG1hcmtlckljb25TdHJpbmc6IHMsIG1hcmtlclNpemU6IGljb25JbmZvLnNpemUgfSk7IH1cclxuICAgICAgICAgICAgICAgIHJlc29sdmUoe2ljb246IHMsIGljb25JbmZvOiBpY29uSW5mb30pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIHNjYWxlZCBpbWFnZSBtYXJrZXIgYnkgc2NhbGluZyBhIHN1cHBsaWVkIGltYWdlIGJ5IGEgZmFjdG9yIHVzaW5nIGEgY2FudmFzLlxyXG4gICAgICpcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEBwYXJhbSBpY29uSW5mbyAtIHtAbGluayBJTWFya2VySWNvbkluZm99IGNvbnRhaW5pbmcgdGhlIGluZm9ybWF0aW9uIG5lY2Vzc2FyeSB0byBjcmVhdGUgdGhlIGljb24uXHJcbiAgICAgKiBAcGFyYW0gaWNvbkluZm8gLSBDYWxsYmFjayBpbnZva2VkIG9uY2UgbWFya2VyIGdlbmVyYXRpb24gaXMgY29tcGxldGUuIFRoZSBjYWxsYmFja1xyXG4gICAgICogcGFyYW1ldGVycyBhcmUgdGhlIGRhdGEgdXJpIGFuZCB0aGUgSU1hcmtlckljb25JbmZvLlxyXG4gICAgICogQHJldHVybnMgLSBhIHN0cmluZyBvciBhIHByb21pc2UgZm9yIGEgc3RyaW5nIGNvbnRhaW5pbmdcclxuICAgICAqIGEgZGF0YSB1cmwgd2l0aCB0aGUgbWFya2VyIGltYWdlLiBJbiBjYXNlIG9mIGEgY2FjaGVkIGltYWdlLCB0aGUgaW1hZ2Ugd2lsbCBiZSByZXR1cm5lZCwgb3RoZXJ3aXNlIHRoZSBwcm9taXNlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXJrZXJcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBDcmVhdGVTY2FsZWRJbWFnZU1hcmtlcihpY29uSW5mbzogSU1hcmtlckljb25JbmZvKTogc3RyaW5nfFByb21pc2U8e2ljb246IHN0cmluZywgaWNvbkluZm86IElNYXJrZXJJY29uSW5mb30+IHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQgPT0gbnVsbCkgeyB0aHJvdyBFcnJvcignRG9jdW1lbnQgY29udGV4dCAod2luZG93LmRvY3VtZW50KSBpcyByZXF1aXJlZCBmb3Igc2NhbGVkIGltYWdlIG1hcmtlcnMnKTsgfVxyXG4gICAgICAgIGlmIChpY29uSW5mbyA9PSBudWxsIHx8IGljb25JbmZvLnNjYWxlID09IG51bGwgfHwgaWNvbkluZm8udXJsID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0lNYXJrZXJJY29uSW5mby5zY2FsZSwgSU1hcmtlckljb25JbmZvLnVybCBhcmUgcmVxdWlyZWQgZm9yIHNjYWxlZCBpbWFnZSBtYXJrZXJzLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaWNvbkluZm8uaWQgIT0gbnVsbCAmJiBNYXJrZXIuTWFya2VyQ2FjaGUuaGFzKGljb25JbmZvLmlkKSkge1xyXG4gICAgICAgICAgICBjb25zdCBtaTogSU1hcmtlckljb25DYWNoZUVudHJ5ID0gTWFya2VyLk1hcmtlckNhY2hlLmdldChpY29uSW5mby5pZCk7XHJcbiAgICAgICAgICAgIGljb25JbmZvLnNpemUgPSBtaS5tYXJrZXJTaXplO1xyXG4gICAgICAgICAgICByZXR1cm4gbWkubWFya2VySWNvblN0cmluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZTogUHJvbWlzZTx7aWNvbjogc3RyaW5nLCBpY29uSW5mbzogSU1hcmtlckljb25JbmZvfT4gPVxyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZTx7aWNvbjogc3RyaW5nLCBpY29uSW5mbzogSU1hcmtlckljb25JbmZvfT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gQWxsb3cgY3Jvc3MgZG9tYWluIGltYWdlIGVkaXR0aW5nLlxyXG4gICAgICAgICAgICBpbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBpY29uSW5mby51cmw7XHJcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgICAgIGMud2lkdGggPSBpbWFnZS53aWR0aCAqIGljb25JbmZvLnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgYy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQgKiBpY29uSW5mby5zY2FsZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEcmF3IGEgY2lyY2xlIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGNsaXAgdGhlIGltYWdlLCB0aGVuIGRyYXcgdGhlIGltYWdlLlxyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgaWNvbkluZm8uc2l6ZSA9IHsgd2lkdGg6IGMud2lkdGgsIGhlaWdodDogYy5oZWlnaHQgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzOiBzdHJpbmcgPSBjLnRvRGF0YVVSTCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGljb25JbmZvLmlkICE9IG51bGwpIHsgTWFya2VyLk1hcmtlckNhY2hlLnNldChpY29uSW5mby5pZCwgeyBtYXJrZXJJY29uU3RyaW5nOiBzLCBtYXJrZXJTaXplOiBpY29uSW5mby5zaXplIH0pOyB9XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtpY29uOiBzLCBpY29uSW5mbzogaWNvbkluZm99KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLy9cclxuICAgIC8vLyBQcm9wZXJ0eSBkZWZpbml0aW9uc1xyXG4gICAgLy8vXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgbWFya2VyIGlzIHRoZSBmaXJzdCBtYXJrZXIgaW4gYSBzZXQuXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAbWVtYmVyb2YgTWFya2VyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgSXNGaXJzdCgpOiBib29sZWFuO1xyXG4gICAgcHVibGljIGFic3RyYWN0IHNldCBJc0ZpcnN0KHZhbDogYm9vbGVhbik7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgbWFya2VyIGlzIHRoZSBsYXN0IG1hcmtlciBpbiB0aGUgc2V0LlxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQG1lbWJlcm9mIE1hcmtlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IElzTGFzdCgpOiBib29sZWFuO1xyXG4gICAgcHVibGljIGFic3RyYWN0IHNldCBJc0xhc3QodmFsOiBib29sZWFuKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIExvY2F0aW9uIG9mIHRoZSBtYXJrZXJcclxuICAgICAqXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQG1lbWJlcm9mIE1hcmtlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IExvY2F0aW9uKCk6IElMYXRMb25nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbWFya2VyIG1ldGFkYXRhLlxyXG4gICAgICpcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAbWVtYmVyb2YgTWFya2VyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgTWV0YWRhdGEoKTogTWFwPHN0cmluZywgYW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIG5hdGl2ZSBwcmltaXR2ZSBpbXBsZW1lbnRpbmcgdGhlIG1hcmtlciAoZS5nLiBNaWNyb3NvZnQuTWFwcy5QdXNocGluKVxyXG4gICAgICpcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAbWVtYmVyb2YgTWFya2VyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgTmF0aXZlUHJpbWl0dmUoKTogYW55O1xyXG5cclxuICAgIC8vL1xyXG4gICAgLy8vIFB1YmxpYyBtZXRob2RzXHJcbiAgICAvLy9cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIG1hcmtlci5cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBldmVudFR5cGUgLSBTdHJpbmcgY29udGFpbmluZyB0aGUgZXZlbnQgZm9yIHdoaWNoIHRvIHJlZ2lzdGVyIHRoZSBsaXN0ZW5lciAoZS5nLiBcImNsaWNrXCIpXHJcbiAgICAgKiBAcGFyYW0gZm4gLSBEZWxlZ2F0ZSBpbnZva2VkIHdoZW4gdGhlIGV2ZW50IG9jY3Vycy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFya2VyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBBZGRMaXN0ZW5lcihldmVudFR5cGU6IHN0cmluZywgZm46IEZ1bmN0aW9uKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZXMgdGhlIG1hcmtlci5cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFya2VyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBEZWxldGVNYXJrZXIoKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIG1hcmtlciBsYWJlbFxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXJrZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IEdldExhYmVsKCk6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIG1hcmtlciB2aXNpYmlsaXR5XHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcmtlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgR2V0VmlzaWJsZSgpOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgYW5jaG9yIGZvciB0aGUgbWFya2VyLiBVc2UgdGhpcyB0byBhZGp1c3QgdGhlIHJvb3QgbG9jYXRpb24gZm9yIHRoZSBtYXJrZXIgdG8gYWNjb21vZGF0ZSB2YXJpb3VzIG1hcmtlciBpbWFnZSBzaXplcy5cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBhbmNob3IgLSBQb2ludCBjb29yZGluYXRlcyBmb3IgdGhlIG1hcmtlciBhbmNob3IuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcmtlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgU2V0QW5jaG9yKGFuY2hvcjogSVBvaW50KTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGRyYWdnYWJpbGl0eSBvZiBhIG1hcmtlci5cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBkcmFnZ2FibGUgLSBUcnVlIHRvIG1hcmsgdGhlIG1hcmtlciBhcyBkcmFnZ2FibGUsIGZhbHNlIG90aGVyd2lzZS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFya2VyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBTZXREcmFnZ2FibGUoZHJhZ2dhYmxlOiBib29sZWFuKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGljb24gZm9yIHRoZSBtYXJrZXIuXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gaWNvbiAtIFN0cmluZyBjb250YWluaW5nIHRoZSBpY29uIGluIHZhcmlvdXMgZm9ybXMgKHVybCwgZGF0YSB1cmwsIGV0Yy4pXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcmtlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgU2V0SWNvbihpY29uOiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgbWFya2VyIGxhYmVsLlxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQHBhcmFtIGxhYmVsIC0gU3RyaW5nIGNvbnRhaW5pbmcgdGhlIGxhYmVsIHRvIHNldC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFya2VyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBTZXRMYWJlbChsYWJlbDogc3RyaW5nKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIG1hcmtlciBwb3NpdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAYWJzdHJhY3RcclxuICAgICAqIEBwYXJhbSBsYXRMbmcgLSBHZW8gY29vcmRpbmF0ZXMgdG8gc2V0IHRoZSBtYXJrZXIgcG9zaXRpb24gdG8uXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE1hcmtlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgU2V0UG9zaXRpb24obGF0TG5nOiBJTGF0TG9uZyk6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBtYXJrZXIgdGl0bGUuXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gdGl0bGUgLSBTdHJpbmcgY29udGFpbmluZyB0aGUgdGl0bGUgdG8gc2V0LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBNYXJrZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IFNldFRpdGxlKHRpdGxlOiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgbWFya2VyIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIHtAbGluayBJTWFya2VyT3B0aW9uc30gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG1hcmtlciBvcHRpb25zIHRvIHNldC4gVGhlIHN1cHBsaWVkIG9wdGlvbnMgYXJlXHJcbiAgICAgKiBtZXJnZWQgd2l0aCB0aGUgdW5kZXJseWluZyBtYXJrZXIgb3B0aW9ucy5cclxuICAgICAqIEBtZW1iZXJvZiBNYXJrZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IFNldE9wdGlvbnMob3B0aW9uczogSU1hcmtlck9wdGlvbnMpOiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdmlzaWJsaWx0eSBvZiB0aGUgbWFya2VyLlxyXG4gICAgICpcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICogQHBhcmFtIHZpc2libGUgLSBCb29sZWFuIHdoaWNoIGRldGVybWluZXMgaWYgdGhlIG1hcmtlciBpcyB2aXNpYmxlIG9yIG5vdC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTWFya2VyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBTZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxufVxyXG4iXX0=