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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Connector } from '../model';
// @ts-ignore
import { ConnectorList } from '../model';
// @ts-ignore
import { ConnectorRequest } from '../model';
/**
 * ConnectorsApi - axios parameter creator
 * @export
 */
export const ConnectorsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new connector
         * @summary Create a new connector
         * @param {boolean} async Perform the action in an asynchronous manner
         * @param {ConnectorRequest} connectorRequest Connector data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createConnector: async (async: boolean, connectorRequest: ConnectorRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'async' is not null or undefined
            assertParamExists('createConnector', 'async', async)
            // verify required parameter 'connectorRequest' is not null or undefined
            assertParamExists('createConnector', 'connectorRequest', connectorRequest)
            const localVarPath = `/api/connector_mgmt/v1/kafka_connectors`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (async !== undefined) {
                localVarQueryParameter['async'] = async;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(connectorRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a connector
         * @summary Delete a connector
         * @param {string} id The ID of record
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteConnector: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteConnector', 'id', id)
            const localVarPath = `/api/connector_mgmt/v1/kafka_connectors/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a connector
         * @summary Get a connector
         * @param {string} id The ID of record
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConnector: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getConnector', 'id', id)
            const localVarPath = `/api/connector_mgmt/v1/kafka_connectors/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of connector types
         * @summary Returns a list of connector types
         * @param {string} [page] Page index
         * @param {string} [size] Number of items in each page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listConnectors: async (page?: string, size?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/connector_mgmt/v1/kafka_connectors`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Patch a connector
         * @summary Patch a connector
         * @param {string} id The ID of record
         * @param {object} body Data to patch the connector with
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchConnector: async (id: string, body: object, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('patchConnector', 'id', id)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('patchConnector', 'body', body)
            const localVarPath = `/api/connector_mgmt/v1/kafka_connectors/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/merge-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ConnectorsApi - functional programming interface
 * @export
 */
export const ConnectorsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ConnectorsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new connector
         * @summary Create a new connector
         * @param {boolean} async Perform the action in an asynchronous manner
         * @param {ConnectorRequest} connectorRequest Connector data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createConnector(async: boolean, connectorRequest: ConnectorRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Connector>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createConnector(async, connectorRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a connector
         * @summary Delete a connector
         * @param {string} id The ID of record
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteConnector(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Error>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteConnector(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a connector
         * @summary Get a connector
         * @param {string} id The ID of record
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConnector(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Connector>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConnector(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of connector types
         * @summary Returns a list of connector types
         * @param {string} [page] Page index
         * @param {string} [size] Number of items in each page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listConnectors(page?: string, size?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConnectorList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listConnectors(page, size, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Patch a connector
         * @summary Patch a connector
         * @param {string} id The ID of record
         * @param {object} body Data to patch the connector with
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchConnector(id: string, body: object, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Connector>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchConnector(id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ConnectorsApi - factory interface
 * @export
 */
export const ConnectorsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ConnectorsApiFp(configuration)
    return {
        /**
         * Create a new connector
         * @summary Create a new connector
         * @param {boolean} async Perform the action in an asynchronous manner
         * @param {ConnectorRequest} connectorRequest Connector data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createConnector(async: boolean, connectorRequest: ConnectorRequest, options?: any): AxiosPromise<Connector> {
            return localVarFp.createConnector(async, connectorRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a connector
         * @summary Delete a connector
         * @param {string} id The ID of record
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteConnector(id: string, options?: any): AxiosPromise<Error> {
            return localVarFp.deleteConnector(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a connector
         * @summary Get a connector
         * @param {string} id The ID of record
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConnector(id: string, options?: any): AxiosPromise<Connector> {
            return localVarFp.getConnector(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of connector types
         * @summary Returns a list of connector types
         * @param {string} [page] Page index
         * @param {string} [size] Number of items in each page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listConnectors(page?: string, size?: string, options?: any): AxiosPromise<ConnectorList> {
            return localVarFp.listConnectors(page, size, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch a connector
         * @summary Patch a connector
         * @param {string} id The ID of record
         * @param {object} body Data to patch the connector with
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchConnector(id: string, body: object, options?: any): AxiosPromise<Connector> {
            return localVarFp.patchConnector(id, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ConnectorsApi - interface
 * @export
 * @interface ConnectorsApi
 */
export interface ConnectorsApiInterface {
    /**
     * Create a new connector
     * @summary Create a new connector
     * @param {boolean} async Perform the action in an asynchronous manner
     * @param {ConnectorRequest} connectorRequest Connector data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorsApiInterface
     */
    createConnector(async: boolean, connectorRequest: ConnectorRequest, options?: AxiosRequestConfig): AxiosPromise<Connector>;

    /**
     * Delete a connector
     * @summary Delete a connector
     * @param {string} id The ID of record
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorsApiInterface
     */
    deleteConnector(id: string, options?: AxiosRequestConfig): AxiosPromise<Error>;

    /**
     * Get a connector
     * @summary Get a connector
     * @param {string} id The ID of record
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorsApiInterface
     */
    getConnector(id: string, options?: AxiosRequestConfig): AxiosPromise<Connector>;

    /**
     * Returns a list of connector types
     * @summary Returns a list of connector types
     * @param {string} [page] Page index
     * @param {string} [size] Number of items in each page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorsApiInterface
     */
    listConnectors(page?: string, size?: string, options?: AxiosRequestConfig): AxiosPromise<ConnectorList>;

    /**
     * Patch a connector
     * @summary Patch a connector
     * @param {string} id The ID of record
     * @param {object} body Data to patch the connector with
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorsApiInterface
     */
    patchConnector(id: string, body: object, options?: AxiosRequestConfig): AxiosPromise<Connector>;

}

/**
 * ConnectorsApi - object-oriented interface
 * @export
 * @class ConnectorsApi
 * @extends {BaseAPI}
 */
export class ConnectorsApi extends BaseAPI implements ConnectorsApiInterface {
    /**
     * Create a new connector
     * @summary Create a new connector
     * @param {boolean} async Perform the action in an asynchronous manner
     * @param {ConnectorRequest} connectorRequest Connector data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorsApi
     */
    public createConnector(async: boolean, connectorRequest: ConnectorRequest, options?: AxiosRequestConfig) {
        return ConnectorsApiFp(this.configuration).createConnector(async, connectorRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a connector
     * @summary Delete a connector
     * @param {string} id The ID of record
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorsApi
     */
    public deleteConnector(id: string, options?: AxiosRequestConfig) {
        return ConnectorsApiFp(this.configuration).deleteConnector(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a connector
     * @summary Get a connector
     * @param {string} id The ID of record
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorsApi
     */
    public getConnector(id: string, options?: AxiosRequestConfig) {
        return ConnectorsApiFp(this.configuration).getConnector(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of connector types
     * @summary Returns a list of connector types
     * @param {string} [page] Page index
     * @param {string} [size] Number of items in each page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorsApi
     */
    public listConnectors(page?: string, size?: string, options?: AxiosRequestConfig) {
        return ConnectorsApiFp(this.configuration).listConnectors(page, size, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch a connector
     * @summary Patch a connector
     * @param {string} id The ID of record
     * @param {object} body Data to patch the connector with
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorsApi
     */
    public patchConnector(id: string, body: object, options?: AxiosRequestConfig) {
        return ConnectorsApiFp(this.configuration).patchConnector(id, body, options).then((request) => request(this.axios, this.basePath));
    }
}
