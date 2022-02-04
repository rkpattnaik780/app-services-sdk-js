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


import { Consumer } from './consumer';

/**
 * A group of Kafka consumers
 * @export
 * @interface ConsumerGroup
 */
export interface ConsumerGroup {
    /**
     * Unique identifier for the consumer group
     * @type {string}
     * @memberof ConsumerGroup
     */
    'groupId': string;
    /**
     * 
     * @type {string}
     * @memberof ConsumerGroup
     */
    'state'?: ConsumerGroupStateEnum;
    /**
     * The list of consumers associated with this consumer group
     * @type {Array<Consumer>}
     * @memberof ConsumerGroup
     */
    'consumers': Array<Consumer>;
}

export const ConsumerGroupStateEnum = {
    Stable: 'STABLE',
    Dead: 'DEAD',
    Empty: 'EMPTY',
    CompletingRebalance: 'COMPLETING_REBALANCE',
    PreparingRebalance: 'PREPARING_REBALANCE',
    Unknown: 'UNKNOWN'
} as const;

export type ConsumerGroupStateEnum = typeof ConsumerGroupStateEnum[keyof typeof ConsumerGroupStateEnum];


