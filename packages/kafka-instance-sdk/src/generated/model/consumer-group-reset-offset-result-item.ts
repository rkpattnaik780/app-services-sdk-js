/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Admin REST API
 * An API to provide REST endpoints for query Kafka for admin operations
 *
 * The version of the OpenAPI document: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ConsumerGroupResetOffsetResultItem
 */
export interface ConsumerGroupResetOffsetResultItem {
    /**
     * 
     * @type {string}
     * @memberof ConsumerGroupResetOffsetResultItem
     */
    'topic'?: string;
    /**
     * 
     * @type {number}
     * @memberof ConsumerGroupResetOffsetResultItem
     */
    'partition'?: number;
    /**
     * 
     * @type {number}
     * @memberof ConsumerGroupResetOffsetResultItem
     */
    'offset'?: number;
}

