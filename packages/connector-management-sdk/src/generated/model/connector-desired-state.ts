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



/**
 * 
 * @export
 * @enum {string}
 */

export const ConnectorDesiredState = {
    Ready: 'ready',
    Stopped: 'stopped',
    Deleted: 'deleted'
} as const;

export type ConnectorDesiredState = typeof ConnectorDesiredState[keyof typeof ConnectorDesiredState];



