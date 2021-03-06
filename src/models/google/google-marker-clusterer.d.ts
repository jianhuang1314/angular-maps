import { IClusterOptions } from '../../interfaces/icluster-options';
import { Layer } from '../layer';
import { Marker } from '../marker';
import * as GoogleMapTypes from '../../services/google/google-map-types';
/**
 * Concrete implementation of a clustering layer for the Google Map Provider.
 *
 * @export
 */
export declare class GoogleMarkerClusterer implements Layer {
    private _layer;
    private _isClustering;
    private _markerLookup;
    private _markers;
    private _pendingMarkers;
    private _mapclicks;
    private _currentZoom;
    private _visible;
    /**
     * Get the native primitive underneath the abstraction layer.
     *
     * @returns GoogleMapTypes.MarkerClusterer.
     *
     * @memberof GoogleMarkerClusterer
     */
    readonly NativePrimitve: GoogleMapTypes.MarkerClusterer;
    /**
     * Creates a new instance of the GoogleMarkerClusterer class.
     *
     * @param _layer GoogleMapTypes.MarkerClusterer. Native Google Maps Marker Clusterer supporting the cluster layer.
     * @param _maps MapService. MapService implementation to leverage for the layer.
     *
     * @memberof GoogleMarkerClusterer
     */
    constructor(_layer: GoogleMapTypes.MarkerClusterer);
    /**
     * Adds an event listener for the layer.
     *
     * @param eventType string. Type of event to add (click, mouseover, etc). You can use any event that the underlying native
     * layer supports.
     * @param fn function. Handler to call when the event occurs.
     *
     * @memberof GoogleMarkerClusterer
     */
    AddListener(eventType: string, fn: Function): void;
    /**
     * Adds an entity to the layer. Use this method with caution as it will
     * trigger a recaluation of the clusters (and associated markers if approprite) for
     * each invocation. If you use this method to add many markers to the cluster, use
     *
     * @param entity Marker. Entity to add to the layer.
     *
     * @memberof GoogleMarkerClusterer
     */
    AddEntity(entity: Marker): void;
    /**
     * Adds a number of markers to the layer.
     *
     * @param entities Array<Marker>. Entities to add to the layer.
     *
     * @memberof GoogleMarkerClusterer
     */
    AddEntities(entities: Array<Marker>): void;
    /**
     * Deletes the clustering layer.
     *
     * @memberof GoogleMarkerClusterer
     */
    Delete(): void;
    /**
     * Returns the abstract marker used to wrap the Google Marker.
     *
     * @returns Marker. The abstract marker object representing the pushpin.
     *
     * @memberof GoogleMarkerClusterer
     */
    GetMarkerFromGoogleMarker(pin: GoogleMapTypes.Marker): Marker;
    /**
     * Returns the options governing the behavior of the layer.
     *
     * @returns IClusterOptions. The layer options.
     *
     * @memberof GoogleMarkerClusterer
     */
    GetOptions(): IClusterOptions;
    /**
     * Returns the visibility state of the layer.
     *
     * @returns Boolean. True is the layer is visible, false otherwise.
     *
     * @memberof GoogleMarkerClusterer
     */
    GetVisible(): boolean;
    /**
     * Removes an entity from the cluster layer.
     *
     * @param entity Marker Entity to be removed from the layer.
     *
     * @memberof GoogleMarkerClusterer
     */
    RemoveEntity(entity: Marker): void;
    /**
     * Sets the entities for the cluster layer.
     *
     * @param entities Array<Marker> containing
     * the entities to add to the cluster. This replaces any existing entities.
     *
     * @memberof GoogleMarkerClusterer
     */
    SetEntities(entities: Array<Marker>): void;
    /**
     * Sets the options for the cluster layer.
     *
     * @param options IClusterOptions containing the options enumeration controlling the layer behavior. The supplied options
     * are merged with the default/existing options.
     *
     * @memberof GoogleMarkerClusterer
     */
    SetOptions(options: IClusterOptions): void;
    /**
     * Toggles the cluster layer visibility.
     *
     * @param visible Boolean true to make the layer visible, false to hide the layer.
     *
     * @memberof GoogleMarkerClusterer
     */
    SetVisible(visible: boolean): void;
    /**
     * Start to actually cluster the entities in a cluster layer. This method should be called after the initial set of entities
     * have been added to the cluster. This method is used for performance reasons as adding an entitiy will recalculate all clusters.
     * As such, StopClustering should be called before adding many entities and StartClustering should be called once adding is
     * complete to recalculate the clusters.
     *
     * @memberof GoogleMarkerClusterer
     */
    StartClustering(): void;
    /**
     * Stop to actually cluster the entities in a cluster layer.
     * This method is used for performance reasons as adding an entitiy will recalculate all clusters.
     * As such, StopClustering should be called before adding many entities and StartClustering should be called once adding is
     * complete to recalculate the clusters.
     *
     * @returns
     *
     * @memberof GoogleMarkerClusterer
     */
    StopClustering(): void;
}
