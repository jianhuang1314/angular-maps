/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { MapTypeId } from '../../models/map-type-id';
import { ClusterPlacementMode } from '../../models/cluster-placement-mode';
/**
 * This class contains helperfunctions to map various interfaces used to represent options and structures into the
 * corresponding Bing Maps V8 specific implementations.
 *
 * @export
 */
var BingConversions = /** @class */ (function () {
    function BingConversions() {
    }
    /**
     * Maps an IInfoWindowAction to a Microsoft.Maps.IInfoboxActions
     *
     * \@memberof BingConversions
     * @param {?} action - Object to be mapped.
     * @return {?} - Navtive mapped object.
     *
     */
    BingConversions.TranslateAction = /**
     * Maps an IInfoWindowAction to a Microsoft.Maps.IInfoboxActions
     *
     * \@memberof BingConversions
     * @param {?} action - Object to be mapped.
     * @return {?} - Navtive mapped object.
     *
     */
    function (action) {
        var /** @type {?} */ a = {
            eventHandler: action.eventHandler,
            label: action.label
        };
        return a;
    };
    /**
     * Maps an Array of IInfoWindowAction to an Array of Microsoft.Maps.IInfoboxActions
     *
     * \@memberof BingConversions
     * @param {?} actions - Array of objects to be mapped.
     * @return {?} - Array of mapped objects.
     *
     */
    BingConversions.TranslateActions = /**
     * Maps an Array of IInfoWindowAction to an Array of Microsoft.Maps.IInfoboxActions
     *
     * \@memberof BingConversions
     * @param {?} actions - Array of objects to be mapped.
     * @return {?} - Array of mapped objects.
     *
     */
    function (actions) {
        var /** @type {?} */ a = new Array();
        actions.forEach(function (x) { return a.push(BingConversions.TranslateAction(x)); });
        return a;
    };
    /**
     * Maps an IBox object to a Microsoft.Maps.LocationRect object.
     *
     * \@memberof BingConversions
     * @param {?} box - Object to be mapped.
     * @return {?} - Mapped object.
     *
     */
    BingConversions.TranslateBounds = /**
     * Maps an IBox object to a Microsoft.Maps.LocationRect object.
     *
     * \@memberof BingConversions
     * @param {?} box - Object to be mapped.
     * @return {?} - Mapped object.
     *
     */
    function (box) {
        var /** @type {?} */ r = Microsoft.Maps.LocationRect.fromEdges(box.maxLatitude, box.minLongitude, box.minLatitude, box.maxLongitude);
        return r;
    };
    /**
     * Maps an IClusterOptions object to a Microsoft.Maps.IClusterLayerOptions object.
     *
     * \@memberof BingConversions
     * @param {?} options - Object to be mapped.
     * @return {?} - Mapped object.
     *
     */
    BingConversions.TranslateClusterOptions = /**
     * Maps an IClusterOptions object to a Microsoft.Maps.IClusterLayerOptions object.
     *
     * \@memberof BingConversions
     * @param {?} options - Object to be mapped.
     * @return {?} - Mapped object.
     *
     */
    function (options) {
        var /** @type {?} */ o = {};
        Object.keys(options)
            .filter(function (k) { return BingConversions._clusterOptionsAttributes.indexOf(k) !== -1; })
            .forEach(function (k) {
            if (k === 'layerOffset') {
                o.layerOffset = BingConversions.TranslatePoint(options.layerOffset);
            }
            if (k === 'placementMode') {
                if (options.placementMode === ClusterPlacementMode.FirstPin) {
                    o.placementMode = Microsoft.Maps.ClusterPlacementType.FirstLocation;
                }
                else {
                    o.placementMode = Microsoft.Maps.ClusterPlacementType.MeanAverage;
                }
            }
            else {
                o[k] = (/** @type {?} */ (options))[k];
            }
        });
        return o;
    };
    /**
     * Maps an IInfoWindowOptions object to a Microsoft.Maps.IInfoboxOptions object.
     *
     * \@memberof BingConversions
     * @param {?} options - Object to be mapped.
     * @return {?} - Mapped object.
     *
     */
    BingConversions.TranslateInfoBoxOptions = /**
     * Maps an IInfoWindowOptions object to a Microsoft.Maps.IInfoboxOptions object.
     *
     * \@memberof BingConversions
     * @param {?} options - Object to be mapped.
     * @return {?} - Mapped object.
     *
     */
    function (options) {
        var /** @type {?} */ o = {};
        Object.keys(options)
            .filter(function (k) { return BingConversions._infoWindowOptionsAttributes.indexOf(k) !== -1; })
            .forEach(function (k) {
            if (k === 'pixelOffset') {
                o.offset = BingConversions.TranslatePoint(options.pixelOffset);
            }
            else if (k === 'position') {
                o.location = BingConversions.TranslateLocation(options.position);
            }
            else if (k === 'actions') {
                o.actions = BingConversions.TranslateActions(options.actions);
            }
            else {
                o[k] = (/** @type {?} */ (options))[k];
            }
        });
        return o;
    };
    /**
     * Maps an IMapOptions object to a Microsoft.Maps.IMapLoadOptions object.
     *
     * \@memberof BingConversions
     * @param {?} options - Object to be mapped.
     * @return {?} - Mapped object.
     *
     */
    BingConversions.TranslateLoadOptions = /**
     * Maps an IMapOptions object to a Microsoft.Maps.IMapLoadOptions object.
     *
     * \@memberof BingConversions
     * @param {?} options - Object to be mapped.
     * @return {?} - Mapped object.
     *
     */
    function (options) {
        var /** @type {?} */ o = {};
        Object.keys(options)
            .filter(function (k) {
            return BingConversions._mapOptionsAttributes.indexOf(k) !== -1 || BingConversions._viewOptionsAttributes.indexOf(k) !== -1;
        })
            .forEach(function (k) {
            if (k === 'center') {
                o.center = BingConversions.TranslateLocation(options.center);
            }
            else if (k === 'mapTypeId') {
                if (options.mapTypeId === MapTypeId.hybrid) {
                    o.mapTypeId = Microsoft.Maps.MapTypeId.aerial;
                    o.labelOverlay = Microsoft.Maps.LabelOverlay.visible;
                }
                else if (options.mapTypeId === MapTypeId.aerial) {
                    o.mapTypeId = Microsoft.Maps.MapTypeId.aerial;
                    o.labelOverlay = Microsoft.Maps.LabelOverlay.hidden;
                }
                else {
                    o.mapTypeId = Microsoft.Maps.MapTypeId[(/** @type {?} */ (MapTypeId))[options.mapTypeId]];
                }
            }
            else if (k === 'bounds') {
                o.bounds = BingConversions.TranslateBounds(options.bounds);
            }
            else {
                o[k] = (/** @type {?} */ (options))[k];
            }
        });
        return o;
    };
    /**
     * Maps an ILatLong object to a Microsoft.Maps.Location object.
     *
     * \@memberof BingConversions
     * @param {?} latlong - Object to be mapped.
     * @return {?} - Mapped object.
     *
     */
    BingConversions.TranslateLocation = /**
     * Maps an ILatLong object to a Microsoft.Maps.Location object.
     *
     * \@memberof BingConversions
     * @param {?} latlong - Object to be mapped.
     * @return {?} - Mapped object.
     *
     */
    function (latlong) {
        var /** @type {?} */ l = new Microsoft.Maps.Location(latlong.latitude, latlong.longitude);
        return l;
    };
    /**
     * Maps an IMarkerOptions object to a Microsoft.Maps.IPushpinOptions object.
     *
     * \@memberof BingConversions
     * @param {?} options - Object to be mapped.
     * @return {?} - The mapped object.
     *
     */
    BingConversions.TranslateMarkerOptions = /**
     * Maps an IMarkerOptions object to a Microsoft.Maps.IPushpinOptions object.
     *
     * \@memberof BingConversions
     * @param {?} options - Object to be mapped.
     * @return {?} - The mapped object.
     *
     */
    function (options) {
        var /** @type {?} */ o = {};
        Object.keys(options)
            .filter(function (k) { return BingConversions._markerOptionsAttributes.indexOf(k) !== -1; })
            .forEach(function (k) {
            if (k === 'anchor') {
                o.anchor = BingConversions.TranslatePoint(options.anchor);
            }
            else {
                (/** @type {?} */ (o))[k] = (/** @type {?} */ (options))[k];
            }
        });
        return o;
    };
    /**
     * Maps an IMapOptions object to a Microsoft.Maps.IMapOptions object.
     *
     * \@memberof BingConversions
     * @param {?} options - Object to be mapped.
     * @return {?} - Mapped object.
     *
     */
    BingConversions.TranslateOptions = /**
     * Maps an IMapOptions object to a Microsoft.Maps.IMapOptions object.
     *
     * \@memberof BingConversions
     * @param {?} options - Object to be mapped.
     * @return {?} - Mapped object.
     *
     */
    function (options) {
        var /** @type {?} */ o = {};
        Object.keys(options)
            .filter(function (k) { return BingConversions._mapOptionsAttributes.indexOf(k) !== -1; })
            .forEach(function (k) {
            if (k === 'center') {
                o.center = BingConversions.TranslateLocation(options.center);
            }
            else if (k === 'mapTypeId') {
                o.mapTypeId = Microsoft.Maps.MapTypeId[(/** @type {?} */ (MapTypeId))[options.mapTypeId]];
            }
            else {
                o[k] = (/** @type {?} */ (options))[k];
            }
        });
        return o;
    };
    /**
     * Translates an array of locations or an array or arrays of location to and array of arrays of Bing Map Locations
     *
     * \@memberof BingConversions
     * @param {?} paths - ILatLong based locations to convert.
     * @return {?} - converted locations.
     *
     */
    BingConversions.TranslatePaths = /**
     * Translates an array of locations or an array or arrays of location to and array of arrays of Bing Map Locations
     *
     * \@memberof BingConversions
     * @param {?} paths - ILatLong based locations to convert.
     * @return {?} - converted locations.
     *
     */
    function (paths) {
        var /** @type {?} */ p = new Array();
        if (paths == null || !Array.isArray(paths) || paths.length === 0) {
            p.push(new Array());
        }
        else if (Array.isArray(paths[0])) {
            // parameter is an array or arrays
            // us for loop for performance
            var /** @type {?} */ p1 = /** @type {?} */ (paths);
            for (var /** @type {?} */ i = 0; i < p1.length; i++) {
                var /** @type {?} */ _p = new Array();
                for (var /** @type {?} */ j = 0; j < p1[i].length; j++) {
                    _p.push(new Microsoft.Maps.Location(p1[i][j].latitude, p1[i][j].longitude));
                }
                p.push(_p);
            }
        }
        else {
            // parameter is a simple array....
            var /** @type {?} */ y = new Array();
            var /** @type {?} */ p1 = /** @type {?} */ (paths);
            for (var /** @type {?} */ i = 0; i < p1.length; i++) {
                y.push(new Microsoft.Maps.Location(p1[i].latitude, p1[i].longitude));
            }
            p.push(y);
        }
        return p;
    };
    /**
     *  Maps an IPoint object to a Microsoft.Maps.Point object.
     *
     * \@memberof BingConversions
     * @param {?} point - Object to be mapped.
     * @return {?} - Mapped object.
     *
     */
    BingConversions.TranslatePoint = /**
     *  Maps an IPoint object to a Microsoft.Maps.Point object.
     *
     * \@memberof BingConversions
     * @param {?} point - Object to be mapped.
     * @return {?} - Mapped object.
     *
     */
    function (point) {
        var /** @type {?} */ p = new Microsoft.Maps.Point(point.x, point.y);
        return p;
    };
    /**
     *  Maps an IPolygonOptions object to a Microsoft.Maps.IPolygonOptions.
     *
     * \@memberof BingConversions
     * @param {?} options - Object to be mapped.
     * @return {?} - Mapped object.
     *
     */
    BingConversions.TranslatePolygonOptions = /**
     *  Maps an IPolygonOptions object to a Microsoft.Maps.IPolygonOptions.
     *
     * \@memberof BingConversions
     * @param {?} options - Object to be mapped.
     * @return {?} - Mapped object.
     *
     */
    function (options) {
        var /** @type {?} */ o = {};
        var /** @type {?} */ f = function (s, a) {
            var /** @type {?} */ m = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[\.\d+]*)*\)/g.exec(s);
            if (m && m.length > 3) {
                a = a > 1 ? (a / 100) : a;
                return 'rgba(' + [m[1], m[2], m[3], a].join(',') + ')';
            }
            else if (s[0] === '#') {
                var /** @type {?} */ x = a > 1 ? a : Math.floor(a * 255);
                var /** @type {?} */ z = s.substr(1);
                var /** @type {?} */ r = parseInt(z.substr(0, 2), 16);
                var /** @type {?} */ g = parseInt(z.substr(2, 2), 16);
                var /** @type {?} */ b = parseInt(z.substr(4, 2), 16);
                return 'rgba(' + [r, g, b, a].join(',') + ')';
            }
            else {
                return s;
            }
        };
        Object.keys(options)
            .filter(function (k) { return BingConversions._polygonOptionsAttributes.indexOf(k) !== -1; })
            .forEach(function (k) {
            if (k === 'strokeWeight') {
                o.strokeThickness = options.strokeWeight;
            }
            else if (k === 'strokeColor') {
                if (options.strokeOpacity) {
                    o.strokeColor = f(options.strokeColor, options.strokeOpacity);
                }
                else {
                    o.strokeColor = options.strokeColor;
                }
            }
            else if (k === 'strokeOpacity') { }
            else if (k === 'fillColor') {
                if (options.fillOpacity) {
                    o.fillColor = f(options.fillColor, options.fillOpacity);
                }
                else {
                    o.fillColor = options.fillColor;
                }
            }
            else if (k === 'fillOpacity') { }
            else {
                (/** @type {?} */ (o))[k] = (/** @type {?} */ (options))[k];
            }
        });
        return o;
    };
    /**
     *  Maps an IPolylineOptions object to a Microsoft.Maps.IPolylineOptions.
     *
     * \@memberof BingConversions
     * @param {?} options - Object to be mapped.
     * @return {?} - Mapped object.
     *
     */
    BingConversions.TranslatePolylineOptions = /**
     *  Maps an IPolylineOptions object to a Microsoft.Maps.IPolylineOptions.
     *
     * \@memberof BingConversions
     * @param {?} options - Object to be mapped.
     * @return {?} - Mapped object.
     *
     */
    function (options) {
        var /** @type {?} */ o = {};
        var /** @type {?} */ f = function (s, a) {
            var /** @type {?} */ m = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[\.\d+]*)*\)/g.exec(s);
            if (m && m.length > 3) {
                a = a > 1 ? (a / 100) : a;
                return 'rgba(' + [m[1], m[2], m[3], a].join(',') + ')';
            }
            else if (s[0] === '#') {
                var /** @type {?} */ x = a > 1 ? a : Math.floor(a * 255);
                var /** @type {?} */ z = s.substr(1);
                var /** @type {?} */ r = parseInt(z.substr(0, 2), 16);
                var /** @type {?} */ g = parseInt(z.substr(2, 2), 16);
                var /** @type {?} */ b = parseInt(z.substr(4, 2), 16);
                return 'rgba(' + [r, g, b, a].join(',') + ')';
            }
            else {
                return s;
            }
        };
        Object.keys(options)
            .filter(function (k) { return BingConversions._polylineOptionsAttributes.indexOf(k) !== -1; })
            .forEach(function (k) {
            if (k === 'strokeWeight') {
                o.strokeThickness = options.strokeWeight;
            }
            else if (k === 'strokeColor') {
                if (options.strokeOpacity) {
                    o.strokeColor = f(options.strokeColor, options.strokeOpacity);
                }
                else {
                    o.strokeColor = options.strokeColor;
                }
            }
            else if (k === 'strokeOpacity') {
            }
            else {
                o[k] = (/** @type {?} */ (options))[k];
            }
        });
        return o;
    };
    /**
     * Maps an IMapOptions object to a Microsoft.Maps.IViewOptions object.
     *
     * \@memberof BingConversions
     * @param {?} options - Object to be mapped.
     * @return {?} - Mapped object.
     *
     */
    BingConversions.TranslateViewOptions = /**
     * Maps an IMapOptions object to a Microsoft.Maps.IViewOptions object.
     *
     * \@memberof BingConversions
     * @param {?} options - Object to be mapped.
     * @return {?} - Mapped object.
     *
     */
    function (options) {
        var /** @type {?} */ o = {};
        Object.keys(options)
            .filter(function (k) { return BingConversions._viewOptionsAttributes.indexOf(k) !== -1; })
            .forEach(function (k) {
            if (k === 'center') {
                o.center = BingConversions.TranslateLocation(options.center);
            }
            else if (k === 'bounds') {
                o.bounds = BingConversions.TranslateBounds(options.bounds);
            }
            else if (k === 'centerOffset') {
                o.centerOffset = BingConversions.TranslatePoint(options.centerOffset);
            }
            else if (k === 'mapTypeId') {
                o.mapTypeId = Microsoft.Maps.MapTypeId[(/** @type {?} */ (MapTypeId))[options.mapTypeId]];
            }
            else {
                o[k] = (/** @type {?} */ (options))[k];
            }
        });
        return o;
    };
    /**
     * Map option attributes that are supported for conversion to Bing Map properties
     *
     * \@memberof BingConversions
     */
    BingConversions._mapOptionsAttributes = [
        'backgroundColor',
        'credentials',
        'customizeOverlays',
        'customMapStyle',
        'disableBirdseye',
        'disableKeyboardInput',
        'disableMouseInput',
        'disablePanning',
        'disableTouchInput',
        'disableUserInput',
        'disableZooming',
        'disableStreetside',
        'enableClickableLogo',
        'enableSearchLogo',
        'fixedMapPosition',
        'height',
        'inertiaIntensity',
        'navigationBarMode',
        'showBreadcrumb',
        'showCopyright',
        'showDashboard',
        'showMapTypeSelector',
        'showScalebar',
        'theme',
        'tileBuffer',
        'useInertia',
        'width',
        'center',
        'zoom',
        'mapTypeId',
        'liteMode'
    ];
    /**
     * View option attributes that are supported for conversion to Bing Map properties
     *
     * \@memberof BingConversions
     */
    BingConversions._viewOptionsAttributes = [
        'animate',
        'bounds',
        'center',
        'centerOffset',
        'heading',
        'labelOverlay',
        'mapTypeId',
        'padding',
        'zoom'
    ];
    /**
     * InfoWindow option attributes that are supported for conversion to Bing Map properties
     *
     * \@memberof BingConversions
     */
    BingConversions._infoWindowOptionsAttributes = [
        'actions',
        'description',
        'htmlContent',
        'id',
        'position',
        'pixelOffset',
        'showCloseButton',
        'showPointer',
        'pushpin',
        'title',
        'titleClickHandler',
        'typeName',
        'visible',
        'width',
        'height'
    ];
    /**
     * Marker option attributes that are supported for conversion to Bing Map properties
     *
     * \@memberof BingConversions
     */
    BingConversions._markerOptionsAttributes = [
        'anchor',
        'draggable',
        'height',
        'htmlContent',
        'icon',
        'infobox',
        'state',
        'title',
        'textOffset',
        'typeName',
        'visible',
        'width',
        'zIndex'
    ];
    /**
     * Polygon option attributes that are supported for conversion to Bing Map Polygon properties
     *
     * \@memberof BingConversions
     */
    BingConversions._polygonOptionsAttributes = [
        'cursor',
        'fillColor',
        'fillOpacity',
        'strokeColor',
        'strokeOpacity',
        'strokeWeight',
        'visible'
    ];
    /**
     * Polyline option attributes that are supported for conversion to Bing Map Polyline properties
     *
     * \@memberof BingConversions
     */
    BingConversions._polylineOptionsAttributes = [
        'cursor',
        'strokeColor',
        'strokeOpacity',
        'strokeWeight',
        'visible'
    ];
    /**
     * Cluster option attributes that are supported for conversion to Bing Map properties
     *
     * \@memberof BingConversions
     */
    BingConversions._clusterOptionsAttributes = [
        'callback',
        'clusteredPinCallback',
        'clusteringEnabled',
        'gridSize',
        'layerOffset',
        'placementMode',
        'visible',
        'zIndex'
    ];
    return BingConversions;
}());
export { BingConversions };
function BingConversions_tsickle_Closure_declarations() {
    /**
     * Map option attributes that are supported for conversion to Bing Map properties
     *
     * \@memberof BingConversions
     * @type {?}
     */
    BingConversions._mapOptionsAttributes;
    /**
     * View option attributes that are supported for conversion to Bing Map properties
     *
     * \@memberof BingConversions
     * @type {?}
     */
    BingConversions._viewOptionsAttributes;
    /**
     * InfoWindow option attributes that are supported for conversion to Bing Map properties
     *
     * \@memberof BingConversions
     * @type {?}
     */
    BingConversions._infoWindowOptionsAttributes;
    /**
     * Marker option attributes that are supported for conversion to Bing Map properties
     *
     * \@memberof BingConversions
     * @type {?}
     */
    BingConversions._markerOptionsAttributes;
    /**
     * Polygon option attributes that are supported for conversion to Bing Map Polygon properties
     *
     * \@memberof BingConversions
     * @type {?}
     */
    BingConversions._polygonOptionsAttributes;
    /**
     * Polyline option attributes that are supported for conversion to Bing Map Polyline properties
     *
     * \@memberof BingConversions
     * @type {?}
     */
    BingConversions._polylineOptionsAttributes;
    /**
     * Cluster option attributes that are supported for conversion to Bing Map properties
     *
     * \@memberof BingConversions
     * @type {?}
     */
    BingConversions._clusterOptionsAttributes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZy1jb252ZXJzaW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbWFwcy8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9iaW5nL2JpbmctY29udmVyc2lvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQVdBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMkt6RCwrQkFBZTs7Ozs7Ozs7Y0FBQyxNQUF5QjtRQUNuRCxxQkFBTSxDQUFDLEdBQW1DO1lBQ3RDLFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWTtZQUNqQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7U0FDdEIsQ0FBQztRQUNGLE1BQU0sQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7SUFXQyxnQ0FBZ0I7Ozs7Ozs7O2NBQUMsT0FBaUM7UUFDNUQscUJBQU0sQ0FBQyxHQUEwQyxJQUFJLEtBQUssRUFBa0MsQ0FBQztRQUM3RixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQTFDLENBQTBDLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0lBV0MsK0JBQWU7Ozs7Ozs7O2NBQUMsR0FBUztRQUNuQyxxQkFBTSxDQUFDLEdBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoSCxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0lBV0MsdUNBQXVCOzs7Ozs7OztjQUFDLE9BQXdCO1FBQzFELHFC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T0FBTztRQUNQLE9BQU87UUFDUCxZQUFZO1FBQ1osVUFBVTtRQUNWLFNBQVM7UUFDVCxPQUFPO1FBQ1AsUUFBUTtLQUNYOzs7Ozs7Z0RBT29EO1FBQ2pELFFBQVE7UUFDUixXQUFXO1FBQ1gsYUFBYTtRQUNiLGFBQWE7UUFDYixlQUFlO1FBQ2YsY0FBYztRQUNkLFNBQVM7S0FDWjs7Ozs7O2lEQU9xRDtRQUNsRCxRQUFRO1FBQ1IsYUFBYTtRQUNiLGVBQWU7UUFDZixjQUFjO1FBQ2QsU0FBUztLQUNaOzs7Ozs7Z0RBT29EO1FBQ2pELFVBQVU7UUFDVixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFVBQVU7UUFDVixhQUFhO1FBQ2IsZUFBZTtRQUNmLFNBQVM7UUFDVCxRQUFRO0tBQ1g7MEJBMUtMOztTQXNCYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU1hcE9wdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2ltYXAtb3B0aW9ucyc7XHJcbmltcG9ydCB7IElCb3ggfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2lib3gnO1xyXG5pbXBvcnQgeyBJTGF0TG9uZyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaWxhdGxvbmcnO1xyXG5pbXBvcnQgeyBJTWFya2VyT3B0aW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW1hcmtlci1vcHRpb25zJztcclxuaW1wb3J0IHsgSU1hcmtlckljb25JbmZvIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbWFya2VyLWljb24taW5mbyc7XHJcbmltcG9ydCB7IElDbHVzdGVyT3B0aW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaWNsdXN0ZXItb3B0aW9ucyc7XHJcbmltcG9ydCB7IElJbmZvV2luZG93T3B0aW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaWluZm8td2luZG93LW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBJSW5mb1dpbmRvd0FjdGlvbiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaWluZm8td2luZG93LWFjdGlvbic7XHJcbmltcG9ydCB7IElQb2x5Z29uT3B0aW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaXBvbHlnb24tb3B0aW9ucyc7XHJcbmltcG9ydCB7IElQb2x5bGluZU9wdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2lwb2x5bGluZS1vcHRpb25zJztcclxuaW1wb3J0IHsgSVBvaW50IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pcG9pbnQnO1xyXG5pbXBvcnQgeyBNYXBUeXBlSWQgfSBmcm9tICcuLi8uLi9tb2RlbHMvbWFwLXR5cGUtaWQnO1xyXG5pbXBvcnQgeyBNYXJrZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvbWFya2VyJztcclxuaW1wb3J0IHsgQ2x1c3RlclBsYWNlbWVudE1vZGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2x1c3Rlci1wbGFjZW1lbnQtbW9kZSc7XHJcbmltcG9ydCB7IEJpbmdNYXBTZXJ2aWNlIH0gZnJvbSAnLi9iaW5nLW1hcC5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIGhlbHBlcmZ1bmN0aW9ucyB0byBtYXAgdmFyaW91cyBpbnRlcmZhY2VzIHVzZWQgdG8gcmVwcmVzZW50IG9wdGlvbnMgYW5kIHN0cnVjdHVyZXMgaW50byB0aGVcclxuICogY29ycmVzcG9uZGluZyBCaW5nIE1hcHMgVjggc3BlY2lmaWMgaW1wbGVtZW50YXRpb25zLlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmluZ0NvbnZlcnNpb25zIHtcclxuXHJcbiAgICAvLy9cclxuICAgIC8vLyBGaWVsZCBkZWNsYXJhdGlvbnNcclxuICAgIC8vL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFwIG9wdGlvbiBhdHRyaWJ1dGVzIHRoYXQgYXJlIHN1cHBvcnRlZCBmb3IgY29udmVyc2lvbiB0byBCaW5nIE1hcCBwcm9wZXJ0aWVzXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdDb252ZXJzaW9uc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfbWFwT3B0aW9uc0F0dHJpYnV0ZXM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICdiYWNrZ3JvdW5kQ29sb3InLFxyXG4gICAgICAgICdjcmVkZW50aWFscycsXHJcbiAgICAgICAgJ2N1c3RvbWl6ZU92ZXJsYXlzJyxcclxuICAgICAgICAnY3VzdG9tTWFwU3R5bGUnLFxyXG4gICAgICAgICdkaXNhYmxlQmlyZHNleWUnLFxyXG4gICAgICAgICdkaXNhYmxlS2V5Ym9hcmRJbnB1dCcsXHJcbiAgICAgICAgJ2Rpc2FibGVNb3VzZUlucHV0JyxcclxuICAgICAgICAnZGlzYWJsZVBhbm5pbmcnLFxyXG4gICAgICAgICdkaXNhYmxlVG91Y2hJbnB1dCcsXHJcbiAgICAgICAgJ2Rpc2FibGVVc2VySW5wdXQnLFxyXG4gICAgICAgICdkaXNhYmxlWm9vbWluZycsXHJcbiAgICAgICAgJ2Rpc2FibGVTdHJlZXRzaWRlJyxcclxuICAgICAgICAnZW5hYmxlQ2xpY2thYmxlTG9nbycsXHJcbiAgICAgICAgJ2VuYWJsZVNlYXJjaExvZ28nLFxyXG4gICAgICAgICdmaXhlZE1hcFBvc2l0aW9uJyxcclxuICAgICAgICAnaGVpZ2h0JyxcclxuICAgICAgICAnaW5lcnRpYUludGVuc2l0eScsXHJcbiAgICAgICAgJ25hdmlnYXRpb25CYXJNb2RlJyxcclxuICAgICAgICAnc2hvd0JyZWFkY3J1bWInLFxyXG4gICAgICAgICdzaG93Q29weXJpZ2h0JyxcclxuICAgICAgICAnc2hvd0Rhc2hib2FyZCcsXHJcbiAgICAgICAgJ3Nob3dNYXBUeXBlU2VsZWN0b3InLFxyXG4gICAgICAgICdzaG93U2NhbGViYXInLFxyXG4gICAgICAgICd0aGVtZScsXHJcbiAgICAgICAgJ3RpbGVCdWZmZXInLFxyXG4gICAgICAgICd1c2VJbmVydGlhJyxcclxuICAgICAgICAnd2lkdGgnLFxyXG4gICAgICAgICdjZW50ZXInLFxyXG4gICAgICAgICd6b29tJyxcclxuICAgICAgICAnbWFwVHlwZUlkJyxcclxuICAgICAgICAnbGl0ZU1vZGUnXHJcbiAgICBdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmlldyBvcHRpb24gYXR0cmlidXRlcyB0aGF0IGFyZSBzdXBwb3J0ZWQgZm9yIGNvbnZlcnNpb24gdG8gQmluZyBNYXAgcHJvcGVydGllc1xyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nQ29udmVyc2lvbnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3ZpZXdPcHRpb25zQXR0cmlidXRlczogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgJ2FuaW1hdGUnLFxyXG4gICAgICAgICdib3VuZHMnLFxyXG4gICAgICAgICdjZW50ZXInLFxyXG4gICAgICAgICdjZW50ZXJPZmZzZXQnLFxyXG4gICAgICAgICdoZWFkaW5nJyxcclxuICAgICAgICAnbGFiZWxPdmVybGF5JyxcclxuICAgICAgICAnbWFwVHlwZUlkJyxcclxuICAgICAgICAncGFkZGluZycsXHJcbiAgICAgICAgJ3pvb20nXHJcbiAgICBdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5mb1dpbmRvdyBvcHRpb24gYXR0cmlidXRlcyB0aGF0IGFyZSBzdXBwb3J0ZWQgZm9yIGNvbnZlcnNpb24gdG8gQmluZyBNYXAgcHJvcGVydGllc1xyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nQ29udmVyc2lvbnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luZm9XaW5kb3dPcHRpb25zQXR0cmlidXRlczogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgJ2FjdGlvbnMnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICAgJ2h0bWxDb250ZW50JyxcclxuICAgICAgICAnaWQnLFxyXG4gICAgICAgICdwb3NpdGlvbicsXHJcbiAgICAgICAgJ3BpeGVsT2Zmc2V0JyxcclxuICAgICAgICAnc2hvd0Nsb3NlQnV0dG9uJyxcclxuICAgICAgICAnc2hvd1BvaW50ZXInLFxyXG4gICAgICAgICdwdXNocGluJyxcclxuICAgICAgICAndGl0bGUnLFxyXG4gICAgICAgICd0aXRsZUNsaWNrSGFuZGxlcicsXHJcbiAgICAgICAgJ3R5cGVOYW1lJyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ3dpZHRoJyxcclxuICAgICAgICAnaGVpZ2h0J1xyXG4gICAgXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcmtlciBvcHRpb24gYXR0cmlidXRlcyB0aGF0IGFyZSBzdXBwb3J0ZWQgZm9yIGNvbnZlcnNpb24gdG8gQmluZyBNYXAgcHJvcGVydGllc1xyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nQ29udmVyc2lvbnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX21hcmtlck9wdGlvbnNBdHRyaWJ1dGVzOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICAnYW5jaG9yJyxcclxuICAgICAgICAnZHJhZ2dhYmxlJyxcclxuICAgICAgICAnaGVpZ2h0JyxcclxuICAgICAgICAnaHRtbENvbnRlbnQnLFxyXG4gICAgICAgICdpY29uJyxcclxuICAgICAgICAnaW5mb2JveCcsXHJcbiAgICAgICAgJ3N0YXRlJyxcclxuICAgICAgICAndGl0bGUnLFxyXG4gICAgICAgICd0ZXh0T2Zmc2V0JyxcclxuICAgICAgICAndHlwZU5hbWUnLFxyXG4gICAgICAgICd2aXNpYmxlJyxcclxuICAgICAgICAnd2lkdGgnLFxyXG4gICAgICAgICd6SW5kZXgnXHJcbiAgICBdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUG9seWdvbiBvcHRpb24gYXR0cmlidXRlcyB0aGF0IGFyZSBzdXBwb3J0ZWQgZm9yIGNvbnZlcnNpb24gdG8gQmluZyBNYXAgUG9seWdvbiBwcm9wZXJ0aWVzXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdDb252ZXJzaW9uc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfcG9seWdvbk9wdGlvbnNBdHRyaWJ1dGVzOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICAnY3Vyc29yJyxcclxuICAgICAgICAnZmlsbENvbG9yJyxcclxuICAgICAgICAnZmlsbE9wYWNpdHknLFxyXG4gICAgICAgICdzdHJva2VDb2xvcicsXHJcbiAgICAgICAgJ3N0cm9rZU9wYWNpdHknLFxyXG4gICAgICAgICdzdHJva2VXZWlnaHQnLFxyXG4gICAgICAgICd2aXNpYmxlJ1xyXG4gICAgXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFBvbHlsaW5lIG9wdGlvbiBhdHRyaWJ1dGVzIHRoYXQgYXJlIHN1cHBvcnRlZCBmb3IgY29udmVyc2lvbiB0byBCaW5nIE1hcCBQb2x5bGluZSBwcm9wZXJ0aWVzXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdDb252ZXJzaW9uc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfcG9seWxpbmVPcHRpb25zQXR0cmlidXRlczogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgJ2N1cnNvcicsXHJcbiAgICAgICAgJ3N0cm9rZUNvbG9yJyxcclxuICAgICAgICAnc3Ryb2tlT3BhY2l0eScsXHJcbiAgICAgICAgJ3N0cm9rZVdlaWdodCcsXHJcbiAgICAgICAgJ3Zpc2libGUnXHJcbiAgICBdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2x1c3RlciBvcHRpb24gYXR0cmlidXRlcyB0aGF0IGFyZSBzdXBwb3J0ZWQgZm9yIGNvbnZlcnNpb24gdG8gQmluZyBNYXAgcHJvcGVydGllc1xyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nQ29udmVyc2lvbnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2NsdXN0ZXJPcHRpb25zQXR0cmlidXRlczogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgJ2NhbGxiYWNrJyxcclxuICAgICAgICAnY2x1c3RlcmVkUGluQ2FsbGJhY2snLFxyXG4gICAgICAgICdjbHVzdGVyaW5nRW5hYmxlZCcsXHJcbiAgICAgICAgJ2dyaWRTaXplJyxcclxuICAgICAgICAnbGF5ZXJPZmZzZXQnLFxyXG4gICAgICAgICdwbGFjZW1lbnRNb2RlJyxcclxuICAgICAgICAndmlzaWJsZScsXHJcbiAgICAgICAgJ3pJbmRleCdcclxuICAgIF07XHJcblxyXG4gICAgLy8vXHJcbiAgICAvLy8gUHVibGljIG1ldGhvZHNcclxuICAgIC8vL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFwcyBhbiBJSW5mb1dpbmRvd0FjdGlvbiB0byBhIE1pY3Jvc29mdC5NYXBzLklJbmZvYm94QWN0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhY3Rpb24gLSBPYmplY3QgdG8gYmUgbWFwcGVkLlxyXG4gICAgICogQHJldHVybnMgLSBOYXZ0aXZlIG1hcHBlZCBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdDb252ZXJzaW9uc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRyYW5zbGF0ZUFjdGlvbihhY3Rpb246IElJbmZvV2luZG93QWN0aW9uKTogTWljcm9zb2Z0Lk1hcHMuSUluZm9ib3hBY3Rpb25zIHtcclxuICAgICAgICBjb25zdCBhOiBNaWNyb3NvZnQuTWFwcy5JSW5mb2JveEFjdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlcjogYWN0aW9uLmV2ZW50SGFuZGxlcixcclxuICAgICAgICAgICAgbGFiZWw6IGFjdGlvbi5sYWJlbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXBzIGFuIEFycmF5IG9mIElJbmZvV2luZG93QWN0aW9uIHRvIGFuIEFycmF5IG9mIE1pY3Jvc29mdC5NYXBzLklJbmZvYm94QWN0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhY3Rpb25zIC0gQXJyYXkgb2Ygb2JqZWN0cyB0byBiZSBtYXBwZWQuXHJcbiAgICAgKiBAcmV0dXJucyAtIEFycmF5IG9mIG1hcHBlZCBvYmplY3RzLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nQ29udmVyc2lvbnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBUcmFuc2xhdGVBY3Rpb25zKGFjdGlvbnM6IEFycmF5PElJbmZvV2luZG93QWN0aW9uPik6IEFycmF5PE1pY3Jvc29mdC5NYXBzLklJbmZvYm94QWN0aW9ucz4ge1xyXG4gICAgICAgIGNvbnN0IGE6IEFycmF5PE1pY3Jvc29mdC5NYXBzLklJbmZvYm94QWN0aW9ucz4gPSBuZXcgQXJyYXk8TWljcm9zb2Z0Lk1hcHMuSUluZm9ib3hBY3Rpb25zPigpO1xyXG4gICAgICAgIGFjdGlvbnMuZm9yRWFjaCh4ID0+IGEucHVzaChCaW5nQ29udmVyc2lvbnMuVHJhbnNsYXRlQWN0aW9uKHgpKSk7XHJcbiAgICAgICAgcmV0dXJuIGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXBzIGFuIElCb3ggb2JqZWN0IHRvIGEgTWljcm9zb2Z0Lk1hcHMuTG9jYXRpb25SZWN0IG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYm94IC0gT2JqZWN0IHRvIGJlIG1hcHBlZC5cclxuICAgICAqIEByZXR1cm5zIC0gTWFwcGVkIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ0NvbnZlcnNpb25zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVHJhbnNsYXRlQm91bmRzKGJveDogSUJveCk6IE1pY3Jvc29mdC5NYXBzLkxvY2F0aW9uUmVjdCB7XHJcbiAgICAgICAgY29uc3QgcjogTWljcm9zb2Z0Lk1hcHMuTG9jYXRpb25SZWN0ID1cclxuICAgICAgICAgICAgTWljcm9zb2Z0Lk1hcHMuTG9jYXRpb25SZWN0LmZyb21FZGdlcyhib3gubWF4TGF0aXR1ZGUsIGJveC5taW5Mb25naXR1ZGUsIGJveC5taW5MYXRpdHVkZSwgYm94Lm1heExvbmdpdHVkZSk7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXBzIGFuIElDbHVzdGVyT3B0aW9ucyBvYmplY3QgdG8gYSBNaWNyb3NvZnQuTWFwcy5JQ2x1c3RlckxheWVyT3B0aW9ucyBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBPYmplY3QgdG8gYmUgbWFwcGVkLlxyXG4gICAgICogQHJldHVybnMgLSBNYXBwZWQgb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nQ29udmVyc2lvbnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBUcmFuc2xhdGVDbHVzdGVyT3B0aW9ucyhvcHRpb25zOiBJQ2x1c3Rlck9wdGlvbnMpOiBNaWNyb3NvZnQuTWFwcy5JQ2x1c3RlckxheWVyT3B0aW9ucyB7XHJcbiAgICAgICAgY29uc3QgbzogTWljcm9zb2Z0Lk1hcHMuSUNsdXN0ZXJMYXllck9wdGlvbnMgfCBhbnkgPSB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGsgPT4gQmluZ0NvbnZlcnNpb25zLl9jbHVzdGVyT3B0aW9uc0F0dHJpYnV0ZXMuaW5kZXhPZihrKSAhPT0gLTEpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoayA9PT0gJ2xheWVyT2Zmc2V0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIG8ubGF5ZXJPZmZzZXQgPSBCaW5nQ29udmVyc2lvbnMuVHJhbnNsYXRlUG9pbnQob3B0aW9ucy5sYXllck9mZnNldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoayA9PT0gJ3BsYWNlbWVudE1vZGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucGxhY2VtZW50TW9kZSA9PT0gQ2x1c3RlclBsYWNlbWVudE1vZGUuRmlyc3RQaW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgby5wbGFjZW1lbnRNb2RlID0gTWljcm9zb2Z0Lk1hcHMuQ2x1c3RlclBsYWNlbWVudFR5cGUuRmlyc3RMb2NhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8ucGxhY2VtZW50TW9kZSA9IE1pY3Jvc29mdC5NYXBzLkNsdXN0ZXJQbGFjZW1lbnRUeXBlLk1lYW5BdmVyYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ba10gPSAoPGFueT5vcHRpb25zKVtrXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXBzIGFuIElJbmZvV2luZG93T3B0aW9ucyBvYmplY3QgdG8gYSBNaWNyb3NvZnQuTWFwcy5JSW5mb2JveE9wdGlvbnMgb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gT2JqZWN0IHRvIGJlIG1hcHBlZC5cclxuICAgICAqIEByZXR1cm5zIC0gTWFwcGVkIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ0NvbnZlcnNpb25zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVHJhbnNsYXRlSW5mb0JveE9wdGlvbnMob3B0aW9uczogSUluZm9XaW5kb3dPcHRpb25zKTogTWljcm9zb2Z0Lk1hcHMuSUluZm9ib3hPcHRpb25zIHtcclxuICAgICAgICBjb25zdCBvOiBNaWNyb3NvZnQuTWFwcy5JSW5mb2JveE9wdGlvbnMgfCBhbnkgPSB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGsgPT4gQmluZ0NvbnZlcnNpb25zLl9pbmZvV2luZG93T3B0aW9uc0F0dHJpYnV0ZXMuaW5kZXhPZihrKSAhPT0gLTEpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoayA9PT0gJ3BpeGVsT2Zmc2V0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIG8ub2Zmc2V0ID0gQmluZ0NvbnZlcnNpb25zLlRyYW5zbGF0ZVBvaW50KG9wdGlvbnMucGl4ZWxPZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoayA9PT0gJ3Bvc2l0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG8ubG9jYXRpb24gPSBCaW5nQ29udmVyc2lvbnMuVHJhbnNsYXRlTG9jYXRpb24ob3B0aW9ucy5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChrID09PSAnYWN0aW9ucycpIHtcclxuICAgICAgICAgICAgICAgICAgICBvLmFjdGlvbnMgPSBCaW5nQ29udmVyc2lvbnMuVHJhbnNsYXRlQWN0aW9ucyhvcHRpb25zLmFjdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb1trXSA9ICg8YW55Pm9wdGlvbnMpW2tdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgYW4gSU1hcE9wdGlvbnMgb2JqZWN0IHRvIGEgTWljcm9zb2Z0Lk1hcHMuSU1hcExvYWRPcHRpb25zIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIE9iamVjdCB0byBiZSBtYXBwZWQuXHJcbiAgICAgKiBAcmV0dXJucyAtIE1hcHBlZCBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdDb252ZXJzaW9uc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRyYW5zbGF0ZUxvYWRPcHRpb25zKG9wdGlvbnM6IElNYXBPcHRpb25zKTogTWljcm9zb2Z0Lk1hcHMuSU1hcExvYWRPcHRpb25zIHtcclxuICAgICAgICBjb25zdCBvOiBNaWNyb3NvZnQuTWFwcy5JTWFwTG9hZE9wdGlvbnMgfCBhbnkgPSB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGsgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEJpbmdDb252ZXJzaW9ucy5fbWFwT3B0aW9uc0F0dHJpYnV0ZXMuaW5kZXhPZihrKSAhPT0gLTEgfHwgQmluZ0NvbnZlcnNpb25zLl92aWV3T3B0aW9uc0F0dHJpYnV0ZXMuaW5kZXhPZihrKSAhPT0gLTE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoayA9PT0gJ2NlbnRlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBvLmNlbnRlciA9IEJpbmdDb252ZXJzaW9ucy5UcmFuc2xhdGVMb2NhdGlvbihvcHRpb25zLmNlbnRlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChrID09PSAnbWFwVHlwZUlkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm1hcFR5cGVJZCA9PT0gTWFwVHlwZUlkLmh5YnJpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvLm1hcFR5cGVJZCA9IE1pY3Jvc29mdC5NYXBzLk1hcFR5cGVJZC5hZXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8ubGFiZWxPdmVybGF5ID0gTWljcm9zb2Z0Lk1hcHMuTGFiZWxPdmVybGF5LnZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMubWFwVHlwZUlkID09PSBNYXBUeXBlSWQuYWVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8ubWFwVHlwZUlkID0gTWljcm9zb2Z0Lk1hcHMuTWFwVHlwZUlkLmFlcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgby5sYWJlbE92ZXJsYXkgPSBNaWNyb3NvZnQuTWFwcy5MYWJlbE92ZXJsYXkuaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgby5tYXBUeXBlSWQgPSBNaWNyb3NvZnQuTWFwcy5NYXBUeXBlSWRbKDxhbnk+TWFwVHlwZUlkKVtvcHRpb25zLm1hcFR5cGVJZF1dO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGsgPT09ICdib3VuZHMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgby5ib3VuZHMgPSBCaW5nQ29udmVyc2lvbnMuVHJhbnNsYXRlQm91bmRzKG9wdGlvbnMuYm91bmRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ba10gPSAoPGFueT5vcHRpb25zKVtrXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXBzIGFuIElMYXRMb25nIG9iamVjdCB0byBhIE1pY3Jvc29mdC5NYXBzLkxvY2F0aW9uIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbGF0bG9uZyAtIE9iamVjdCB0byBiZSBtYXBwZWQuXHJcbiAgICAgKiBAcmV0dXJucyAtIE1hcHBlZCBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdDb252ZXJzaW9uc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRyYW5zbGF0ZUxvY2F0aW9uKGxhdGxvbmc6IElMYXRMb25nKTogTWljcm9zb2Z0Lk1hcHMuTG9jYXRpb24ge1xyXG4gICAgICAgIGNvbnN0IGw6IE1pY3Jvc29mdC5NYXBzLkxvY2F0aW9uID0gbmV3IE1pY3Jvc29mdC5NYXBzLkxvY2F0aW9uKGxhdGxvbmcubGF0aXR1ZGUsIGxhdGxvbmcubG9uZ2l0dWRlKTtcclxuICAgICAgICByZXR1cm4gbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgYW4gSU1hcmtlck9wdGlvbnMgb2JqZWN0IHRvIGEgTWljcm9zb2Z0Lk1hcHMuSVB1c2hwaW5PcHRpb25zIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIE9iamVjdCB0byBiZSBtYXBwZWQuXHJcbiAgICAgKiBAcmV0dXJucyAtIFRoZSBtYXBwZWQgb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nQ29udmVyc2lvbnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBUcmFuc2xhdGVNYXJrZXJPcHRpb25zKG9wdGlvbnM6IElNYXJrZXJPcHRpb25zKTogTWljcm9zb2Z0Lk1hcHMuSVB1c2hwaW5PcHRpb25zIHtcclxuICAgICAgICBjb25zdCBvOiBNaWNyb3NvZnQuTWFwcy5JUHVzaHBpbk9wdGlvbnMgPSB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGsgPT4gQmluZ0NvbnZlcnNpb25zLl9tYXJrZXJPcHRpb25zQXR0cmlidXRlcy5pbmRleE9mKGspICE9PSAtMSlcclxuICAgICAgICAgICAgLmZvckVhY2goKGspID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChrID09PSAnYW5jaG9yJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG8uYW5jaG9yID0gQmluZ0NvbnZlcnNpb25zLlRyYW5zbGF0ZVBvaW50KG9wdGlvbnMuYW5jaG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICg8YW55Pm8pW2tdID0gKDxhbnk+b3B0aW9ucylba107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBvO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFwcyBhbiBJTWFwT3B0aW9ucyBvYmplY3QgdG8gYSBNaWNyb3NvZnQuTWFwcy5JTWFwT3B0aW9ucyBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBPYmplY3QgdG8gYmUgbWFwcGVkLlxyXG4gICAgICogQHJldHVybnMgLSBNYXBwZWQgb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nQ29udmVyc2lvbnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBUcmFuc2xhdGVPcHRpb25zKG9wdGlvbnM6IElNYXBPcHRpb25zKTogTWljcm9zb2Z0Lk1hcHMuSU1hcE9wdGlvbnMge1xyXG4gICAgICAgIGNvbnN0IG86IE1pY3Jvc29mdC5NYXBzLklNYXBPcHRpb25zIHwgYW55ID0ge307XHJcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucylcclxuICAgICAgICAgICAgLmZpbHRlcihrID0+IEJpbmdDb252ZXJzaW9ucy5fbWFwT3B0aW9uc0F0dHJpYnV0ZXMuaW5kZXhPZihrKSAhPT0gLTEpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoayA9PT0gJ2NlbnRlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBvLmNlbnRlciA9IEJpbmdDb252ZXJzaW9ucy5UcmFuc2xhdGVMb2NhdGlvbihvcHRpb25zLmNlbnRlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChrID09PSAnbWFwVHlwZUlkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG8ubWFwVHlwZUlkID0gTWljcm9zb2Z0Lk1hcHMuTWFwVHlwZUlkWyg8YW55Pk1hcFR5cGVJZClbb3B0aW9ucy5tYXBUeXBlSWRdXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ba10gPSAoPGFueT5vcHRpb25zKVtrXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2xhdGVzIGFuIGFycmF5IG9mIGxvY2F0aW9ucyBvciBhbiBhcnJheSBvciBhcnJheXMgb2YgbG9jYXRpb24gdG8gYW5kIGFycmF5IG9mIGFycmF5cyBvZiBCaW5nIE1hcCBMb2NhdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcGF0aHMgLSBJTGF0TG9uZyBiYXNlZCBsb2NhdGlvbnMgdG8gY29udmVydC5cclxuICAgICAqIEByZXR1cm5zIC0gY29udmVydGVkIGxvY2F0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ0NvbnZlcnNpb25zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVHJhbnNsYXRlUGF0aHMocGF0aHM6IEFycmF5PElMYXRMb25nPiB8IEFycmF5PEFycmF5PElMYXRMb25nPj4pOiBBcnJheTxBcnJheTxNaWNyb3NvZnQuTWFwcy5Mb2NhdGlvbj4+IHtcclxuICAgICAgICBjb25zdCBwOiBBcnJheTxBcnJheTxNaWNyb3NvZnQuTWFwcy5Mb2NhdGlvbj4+ID0gbmV3IEFycmF5PEFycmF5PE1pY3Jvc29mdC5NYXBzLkxvY2F0aW9uPj4oKTtcclxuICAgICAgICBpZiAocGF0aHMgPT0gbnVsbCB8fCAhQXJyYXkuaXNBcnJheShwYXRocykgfHwgcGF0aHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHAucHVzaChuZXcgQXJyYXk8TWljcm9zb2Z0Lk1hcHMuTG9jYXRpb24+KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHBhdGhzWzBdKSkge1xyXG4gICAgICAgICAgICAvLyBwYXJhbWV0ZXIgaXMgYW4gYXJyYXkgb3IgYXJyYXlzXHJcbiAgICAgICAgICAgIC8vIHVzIGZvciBsb29wIGZvciBwZXJmb3JtYW5jZVxyXG4gICAgICAgICAgICBjb25zdCBwMSA9IDxBcnJheTxBcnJheTxJTGF0TG9uZz4+PnBhdGhzO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBfcDogQXJyYXk8TWljcm9zb2Z0Lk1hcHMuTG9jYXRpb24+ID0gbmV3IEFycmF5PE1pY3Jvc29mdC5NYXBzLkxvY2F0aW9uPigpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwMVtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIF9wLnB1c2gobmV3IE1pY3Jvc29mdC5NYXBzLkxvY2F0aW9uKHAxW2ldW2pdLmxhdGl0dWRlLCBwMVtpXVtqXS5sb25naXR1ZGUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHAucHVzaChfcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHBhcmFtZXRlciBpcyBhIHNpbXBsZSBhcnJheS4uLi5cclxuICAgICAgICAgICAgY29uc3QgeTogQXJyYXk8TWljcm9zb2Z0Lk1hcHMuTG9jYXRpb24+ID0gbmV3IEFycmF5PE1pY3Jvc29mdC5NYXBzLkxvY2F0aW9uPigpO1xyXG4gICAgICAgICAgICBjb25zdCBwMSA9IDxBcnJheTxJTGF0TG9uZz4+cGF0aHM7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcDEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHkucHVzaChuZXcgTWljcm9zb2Z0Lk1hcHMuTG9jYXRpb24ocDFbaV0ubGF0aXR1ZGUsIHAxW2ldLmxvbmdpdHVkZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAucHVzaCh5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgTWFwcyBhbiBJUG9pbnQgb2JqZWN0IHRvIGEgTWljcm9zb2Z0Lk1hcHMuUG9pbnQgb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwb2ludCAtIE9iamVjdCB0byBiZSBtYXBwZWQuXHJcbiAgICAgKiBAcmV0dXJucyAtIE1hcHBlZCBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEJpbmdDb252ZXJzaW9uc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRyYW5zbGF0ZVBvaW50KHBvaW50OiBJUG9pbnQpOiBNaWNyb3NvZnQuTWFwcy5Qb2ludCB7XHJcbiAgICAgICAgY29uc3QgcDogTWljcm9zb2Z0Lk1hcHMuUG9pbnQgPSBuZXcgTWljcm9zb2Z0Lk1hcHMuUG9pbnQocG9pbnQueCwgcG9pbnQueSk7XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgTWFwcyBhbiBJUG9seWdvbk9wdGlvbnMgb2JqZWN0IHRvIGEgTWljcm9zb2Z0Lk1hcHMuSVBvbHlnb25PcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gT2JqZWN0IHRvIGJlIG1hcHBlZC5cclxuICAgICAqIEByZXR1cm5zIC0gTWFwcGVkIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQmluZ0NvbnZlcnNpb25zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVHJhbnNsYXRlUG9seWdvbk9wdGlvbnMob3B0aW9uczogSVBvbHlnb25PcHRpb25zKTogTWljcm9zb2Z0Lk1hcHMuSVBvbHlnb25PcHRpb25zIHtcclxuICAgICAgICBjb25zdCBvOiBNaWNyb3NvZnQuTWFwcy5JUG9seWdvbk9wdGlvbnMgPSB7fTtcclxuICAgICAgICBjb25zdCBmOiAoczogc3RyaW5nLCBhOiBudW1iZXIpID0+IHN0cmluZyA9IChzLCBhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG0gPSAvcmdiYT9cXCgoXFxkKylcXHMqLFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqKCxcXHMqXFxkK1tcXC5cXGQrXSopKlxcKS9nLmV4ZWMocyk7XHJcbiAgICAgICAgICAgIGlmIChtICYmIG0ubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgYSA9IGEgPiAxID8gKGEgLyAxMDApIDogYTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAncmdiYSgnICsgW21bMV0sIG1bMl0sIG1bM10sIGFdLmpvaW4oJywnKSArICcpJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzWzBdID09PSAnIycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHg6IG51bWJlciA9IGEgPiAxID8gYSA6IE1hdGguZmxvb3IoYSAqIDI1NSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB6OiBzdHJpbmcgPSBzLnN1YnN0cigxKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHI6IG51bWJlciA9IHBhcnNlSW50KHouc3Vic3RyKDAsIDIpLCAxNik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnOiBudW1iZXIgPSBwYXJzZUludCh6LnN1YnN0cigyLCAyKSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYjogbnVtYmVyID0gcGFyc2VJbnQoei5zdWJzdHIoNCwgMiksIDE2KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAncmdiYSgnICsgW3IgLCBnLCBiLCBhXS5qb2luKCcsJykgKyAnKSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoayA9PiBCaW5nQ29udmVyc2lvbnMuX3BvbHlnb25PcHRpb25zQXR0cmlidXRlcy5pbmRleE9mKGspICE9PSAtMSlcclxuICAgICAgICAgICAgLmZvckVhY2goKGspID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChrID09PSAnc3Ryb2tlV2VpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIG8uc3Ryb2tlVGhpY2tuZXNzID0gb3B0aW9ucy5zdHJva2VXZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChrID09PSAnc3Ryb2tlQ29sb3InKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvLnN0cm9rZUNvbG9yID0gZihvcHRpb25zLnN0cm9rZUNvbG9yLCBvcHRpb25zLnN0cm9rZU9wYWNpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgby5zdHJva2VDb2xvciA9IG9wdGlvbnMuc3Ryb2tlQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoayA9PT0gJ3N0cm9rZU9wYWNpdHknKSB7fVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoayA9PT0gJ2ZpbGxDb2xvcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5maWxsT3BhY2l0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvLmZpbGxDb2xvciA9IGYob3B0aW9ucy5maWxsQ29sb3IsIG9wdGlvbnMuZmlsbE9wYWNpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgby5maWxsQ29sb3IgPSBvcHRpb25zLmZpbGxDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChrID09PSAnZmlsbE9wYWNpdHknKSB7fVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKDxhbnk+bylba10gPSAoPGFueT5vcHRpb25zKVtrXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgTWFwcyBhbiBJUG9seWxpbmVPcHRpb25zIG9iamVjdCB0byBhIE1pY3Jvc29mdC5NYXBzLklQb2x5bGluZU9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBPYmplY3QgdG8gYmUgbWFwcGVkLlxyXG4gICAgICogQHJldHVybnMgLSBNYXBwZWQgb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nQ29udmVyc2lvbnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBUcmFuc2xhdGVQb2x5bGluZU9wdGlvbnMob3B0aW9uczogSVBvbHlsaW5lT3B0aW9ucyk6IE1pY3Jvc29mdC5NYXBzLklQb2x5bGluZU9wdGlvbnMge1xyXG4gICAgICAgIGNvbnN0IG86IE1pY3Jvc29mdC5NYXBzLklQb2x5bGluZU9wdGlvbnMgfCBhbnkgPSB7fTtcclxuICAgICAgICBjb25zdCBmOiAoczogc3RyaW5nLCBhOiBudW1iZXIpID0+IHN0cmluZyA9IChzLCBhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG0gPSAvcmdiYT9cXCgoXFxkKylcXHMqLFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqKCxcXHMqXFxkK1tcXC5cXGQrXSopKlxcKS9nLmV4ZWMocyk7XHJcbiAgICAgICAgICAgIGlmIChtICYmIG0ubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgYSA9IGEgPiAxID8gKGEgLyAxMDApIDogYTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAncmdiYSgnICsgW21bMV0sIG1bMl0sIG1bM10sIGFdLmpvaW4oJywnKSArICcpJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzWzBdID09PSAnIycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHg6IG51bWJlciA9IGEgPiAxID8gYSA6IE1hdGguZmxvb3IoYSAqIDI1NSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB6OiBzdHJpbmcgPSBzLnN1YnN0cigxKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHI6IG51bWJlciA9IHBhcnNlSW50KHouc3Vic3RyKDAsIDIpLCAxNik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnOiBudW1iZXIgPSBwYXJzZUludCh6LnN1YnN0cigyLCAyKSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYjogbnVtYmVyID0gcGFyc2VJbnQoei5zdWJzdHIoNCwgMiksIDE2KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAncmdiYSgnICsgW3IgLCBnLCBiLCBhXS5qb2luKCcsJykgKyAnKSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucylcclxuICAgICAgICAgICAgLmZpbHRlcihrID0+IEJpbmdDb252ZXJzaW9ucy5fcG9seWxpbmVPcHRpb25zQXR0cmlidXRlcy5pbmRleE9mKGspICE9PSAtMSlcclxuICAgICAgICAgICAgLmZvckVhY2goKGspID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChrID09PSAnc3Ryb2tlV2VpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIG8uc3Ryb2tlVGhpY2tuZXNzID0gb3B0aW9ucy5zdHJva2VXZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGsgPT09ICdzdHJva2VDb2xvcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zdHJva2VPcGFjaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uc3Ryb2tlQ29sb3IgPSBmKG9wdGlvbnMuc3Ryb2tlQ29sb3IsIG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvLnN0cm9rZUNvbG9yID0gb3B0aW9ucy5zdHJva2VDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChrID09PSAnc3Ryb2tlT3BhY2l0eScpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ba10gPSAoPGFueT5vcHRpb25zKVtrXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXBzIGFuIElNYXBPcHRpb25zIG9iamVjdCB0byBhIE1pY3Jvc29mdC5NYXBzLklWaWV3T3B0aW9ucyBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBPYmplY3QgdG8gYmUgbWFwcGVkLlxyXG4gICAgICogQHJldHVybnMgLSBNYXBwZWQgb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCaW5nQ29udmVyc2lvbnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBUcmFuc2xhdGVWaWV3T3B0aW9ucyhvcHRpb25zOiBJTWFwT3B0aW9ucyk6IE1pY3Jvc29mdC5NYXBzLklWaWV3T3B0aW9ucyB7XHJcbiAgICAgICAgY29uc3QgbzogTWljcm9zb2Z0Lk1hcHMuSVZpZXdPcHRpb25zIHwgYW55ID0ge307XHJcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucylcclxuICAgICAgICAgICAgLmZpbHRlcihrID0+IEJpbmdDb252ZXJzaW9ucy5fdmlld09wdGlvbnNBdHRyaWJ1dGVzLmluZGV4T2YoaykgIT09IC0xKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGsgPT09ICdjZW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgby5jZW50ZXIgPSBCaW5nQ29udmVyc2lvbnMuVHJhbnNsYXRlTG9jYXRpb24ob3B0aW9ucy5jZW50ZXIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrID09PSAnYm91bmRzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG8uYm91bmRzID0gQmluZ0NvbnZlcnNpb25zLlRyYW5zbGF0ZUJvdW5kcyhvcHRpb25zLmJvdW5kcyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGsgPT09ICdjZW50ZXJPZmZzZXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgby5jZW50ZXJPZmZzZXQgPSBCaW5nQ29udmVyc2lvbnMuVHJhbnNsYXRlUG9pbnQob3B0aW9ucy5jZW50ZXJPZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrID09PSAnbWFwVHlwZUlkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG8ubWFwVHlwZUlkID0gTWljcm9zb2Z0Lk1hcHMuTWFwVHlwZUlkWyg8YW55Pk1hcFR5cGVJZClbb3B0aW9ucy5tYXBUeXBlSWRdXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb1trXSA9ICg8YW55Pm9wdGlvbnMpW2tdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbztcclxuICAgIH1cclxuXHJcbn1cclxuIl19