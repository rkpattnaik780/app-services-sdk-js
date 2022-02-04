/* tslint:disable */
/* eslint-disable */
/**
 * Connector Service Fleet Manager
 * Connector Service Fleet Manager is a Rest API to manage connectors.
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Channel } from './channel';
import { ConnectorDesiredState } from './connector-desired-state';
import { DeploymentLocation } from './deployment-location';

/**
 * 
 * @export
 * @interface ConnectorRequestMeta
 */
export interface ConnectorRequestMeta {
    /**
     * 
     * @type {string}
     * @memberof ConnectorRequestMeta
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof ConnectorRequestMeta
     */
    'connector_type_id': string;
    /**
     * 
     * @type {Channel}
     * @memberof ConnectorRequestMeta
     */
    'channel'?: Channel;
    /**
     * 
     * @type {DeploymentLocation}
     * @memberof ConnectorRequestMeta
     */
    'deployment_location': DeploymentLocation;
    /**
     * 
     * @type {ConnectorDesiredState}
     * @memberof ConnectorRequestMeta
     */
    'desired_state': ConnectorDesiredState;
}

