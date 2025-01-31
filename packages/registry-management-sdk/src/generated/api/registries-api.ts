/* tslint:disable */
/* eslint-disable */
/**
 * Service Registry Fleet Manager
 * Managed Service Registry cloud.redhat.com API Management API that lets you create new registry instances. Registry is a datastore for standard event schemas and API designs. Service Registry enables developers to manage and share the structure of their data using a REST interface. For example, client applications can dynamically push or pull the latest updates to or from the registry without needing to redeploy. Registry is an Managed version of upstream project called Apicurio Registry. Apicurio Registry also enables developers to create rules that govern how registry content can evolve over time. For example, this includes rules for content validation and version compatibility.
 *
 * The version of the OpenAPI document: 0.0.5
 * Contact: rhosak-eval-support@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorRest } from '../model';
// @ts-ignore
import { RegistryCreateRest } from '../model';
// @ts-ignore
import { RegistryListRest } from '../model';
// @ts-ignore
import { RegistryRest } from '../model';
/**
 * RegistriesApi - axios parameter creator
 * @export
 */
export const RegistriesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a new Registry instance
         * @param {RegistryCreateRest} registryCreateRest A new &#x60;Registry&#x60; to be created.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRegistry: async (registryCreateRest: RegistryCreateRest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'registryCreateRest' is not null or undefined
            assertParamExists('createRegistry', 'registryCreateRest', registryCreateRest)
            const localVarPath = `/api/serviceregistry_mgmt/v1/registries`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(registryCreateRest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes an existing `Registry`.
         * @summary Delete a Registry
         * @param {string} id A unique identifier for a &#x60;Registry&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRegistry: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteRegistry', 'id', id)
            const localVarPath = `/api/serviceregistry_mgmt/v1/registries/{id}`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get the list of all registries.
         * @param {number} [page] Page index
         * @param {number} [size] Number of items in each page
         * @param {string} [orderBy] Specifies the order by criteria. The syntax of this parameter is similar to the syntax of the _order by_ clause of an SQL statement. Each query can be ordered by any of the kafkaRequests fields. For example, in order to retrieve all kafkas ordered by their name:  &#x60;&#x60;&#x60;sql name asc &#x60;&#x60;&#x60;  Or in order to retrieve all kafkas ordered by their name _and_ created date:  &#x60;&#x60;&#x60;sql name asc, created_at asc &#x60;&#x60;&#x60;  If the parameter isn\&#39;t provided, or if the value is empty, then the results will be ordered by name.
         * @param {string} [search] Search criteria.  The syntax of this parameter is similar to the syntax of the _where_ clause of an SQL statement. Allowed fields in the search are: name, status. Allowed comparators are &#x60;&#x3D;&#x60; or &#x60;LIKE&#x60;. Allowed joins are &#x60;AND&#x60; and &#x60;OR&#x60;, however there is a limit of max 10 joins in the search query.  Examples:  To retrieve request with name equal &#x60;my-registry&#x60;  the value should be:  &#x60;&#x60;&#x60; name &#x3D; my-registry  &#x60;&#x60;&#x60;  To retrieve kafka request with its name starting with &#x60;my&#x60;, the value should be:  &#x60;&#x60;&#x60; name like my%25 &#x60;&#x60;&#x60;  If the parameter isn\&#39;t provided, or if the value is empty, then all the kafkas that the user has permission to see will be returned.  Note. If the query is invalid, an error will be returned 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRegistries: async (page?: number, size?: number, orderBy?: string, search?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/serviceregistry_mgmt/v1/registries`;
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

            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets the details of a single instance of a `Registry`.
         * @summary Get a Registry
         * @param {string} id A unique identifier for a &#x60;Registry&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRegistry: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getRegistry', 'id', id)
            const localVarPath = `/api/serviceregistry_mgmt/v1/registries/{id}`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RegistriesApi - functional programming interface
 * @export
 */
export const RegistriesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RegistriesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create a new Registry instance
         * @param {RegistryCreateRest} registryCreateRest A new &#x60;Registry&#x60; to be created.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRegistry(registryCreateRest: RegistryCreateRest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RegistryRest>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRegistry(registryCreateRest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an existing `Registry`.
         * @summary Delete a Registry
         * @param {string} id A unique identifier for a &#x60;Registry&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteRegistry(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRegistry(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get the list of all registries.
         * @param {number} [page] Page index
         * @param {number} [size] Number of items in each page
         * @param {string} [orderBy] Specifies the order by criteria. The syntax of this parameter is similar to the syntax of the _order by_ clause of an SQL statement. Each query can be ordered by any of the kafkaRequests fields. For example, in order to retrieve all kafkas ordered by their name:  &#x60;&#x60;&#x60;sql name asc &#x60;&#x60;&#x60;  Or in order to retrieve all kafkas ordered by their name _and_ created date:  &#x60;&#x60;&#x60;sql name asc, created_at asc &#x60;&#x60;&#x60;  If the parameter isn\&#39;t provided, or if the value is empty, then the results will be ordered by name.
         * @param {string} [search] Search criteria.  The syntax of this parameter is similar to the syntax of the _where_ clause of an SQL statement. Allowed fields in the search are: name, status. Allowed comparators are &#x60;&#x3D;&#x60; or &#x60;LIKE&#x60;. Allowed joins are &#x60;AND&#x60; and &#x60;OR&#x60;, however there is a limit of max 10 joins in the search query.  Examples:  To retrieve request with name equal &#x60;my-registry&#x60;  the value should be:  &#x60;&#x60;&#x60; name &#x3D; my-registry  &#x60;&#x60;&#x60;  To retrieve kafka request with its name starting with &#x60;my&#x60;, the value should be:  &#x60;&#x60;&#x60; name like my%25 &#x60;&#x60;&#x60;  If the parameter isn\&#39;t provided, or if the value is empty, then all the kafkas that the user has permission to see will be returned.  Note. If the query is invalid, an error will be returned 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRegistries(page?: number, size?: number, orderBy?: string, search?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RegistryListRest>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRegistries(page, size, orderBy, search, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets the details of a single instance of a `Registry`.
         * @summary Get a Registry
         * @param {string} id A unique identifier for a &#x60;Registry&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRegistry(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RegistryRest>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRegistry(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RegistriesApi - factory interface
 * @export
 */
export const RegistriesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RegistriesApiFp(configuration)
    return {
        /**
         * 
         * @summary Create a new Registry instance
         * @param {RegistryCreateRest} registryCreateRest A new &#x60;Registry&#x60; to be created.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRegistry(registryCreateRest: RegistryCreateRest, options?: any): AxiosPromise<RegistryRest> {
            return localVarFp.createRegistry(registryCreateRest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an existing `Registry`.
         * @summary Delete a Registry
         * @param {string} id A unique identifier for a &#x60;Registry&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRegistry(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteRegistry(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get the list of all registries.
         * @param {number} [page] Page index
         * @param {number} [size] Number of items in each page
         * @param {string} [orderBy] Specifies the order by criteria. The syntax of this parameter is similar to the syntax of the _order by_ clause of an SQL statement. Each query can be ordered by any of the kafkaRequests fields. For example, in order to retrieve all kafkas ordered by their name:  &#x60;&#x60;&#x60;sql name asc &#x60;&#x60;&#x60;  Or in order to retrieve all kafkas ordered by their name _and_ created date:  &#x60;&#x60;&#x60;sql name asc, created_at asc &#x60;&#x60;&#x60;  If the parameter isn\&#39;t provided, or if the value is empty, then the results will be ordered by name.
         * @param {string} [search] Search criteria.  The syntax of this parameter is similar to the syntax of the _where_ clause of an SQL statement. Allowed fields in the search are: name, status. Allowed comparators are &#x60;&#x3D;&#x60; or &#x60;LIKE&#x60;. Allowed joins are &#x60;AND&#x60; and &#x60;OR&#x60;, however there is a limit of max 10 joins in the search query.  Examples:  To retrieve request with name equal &#x60;my-registry&#x60;  the value should be:  &#x60;&#x60;&#x60; name &#x3D; my-registry  &#x60;&#x60;&#x60;  To retrieve kafka request with its name starting with &#x60;my&#x60;, the value should be:  &#x60;&#x60;&#x60; name like my%25 &#x60;&#x60;&#x60;  If the parameter isn\&#39;t provided, or if the value is empty, then all the kafkas that the user has permission to see will be returned.  Note. If the query is invalid, an error will be returned 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRegistries(page?: number, size?: number, orderBy?: string, search?: string, options?: any): AxiosPromise<RegistryListRest> {
            return localVarFp.getRegistries(page, size, orderBy, search, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets the details of a single instance of a `Registry`.
         * @summary Get a Registry
         * @param {string} id A unique identifier for a &#x60;Registry&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRegistry(id: string, options?: any): AxiosPromise<RegistryRest> {
            return localVarFp.getRegistry(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RegistriesApi - interface
 * @export
 * @interface RegistriesApi
 */
export interface RegistriesApiInterface {
    /**
     * 
     * @summary Create a new Registry instance
     * @param {RegistryCreateRest} registryCreateRest A new &#x60;Registry&#x60; to be created.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistriesApiInterface
     */
    createRegistry(registryCreateRest: RegistryCreateRest, options?: any): AxiosPromise<RegistryRest>;

    /**
     * Deletes an existing `Registry`.
     * @summary Delete a Registry
     * @param {string} id A unique identifier for a &#x60;Registry&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistriesApiInterface
     */
    deleteRegistry(id: string, options?: any): AxiosPromise<void>;

    /**
     * 
     * @summary Get the list of all registries.
     * @param {number} [page] Page index
     * @param {number} [size] Number of items in each page
     * @param {string} [orderBy] Specifies the order by criteria. The syntax of this parameter is similar to the syntax of the _order by_ clause of an SQL statement. Each query can be ordered by any of the kafkaRequests fields. For example, in order to retrieve all kafkas ordered by their name:  &#x60;&#x60;&#x60;sql name asc &#x60;&#x60;&#x60;  Or in order to retrieve all kafkas ordered by their name _and_ created date:  &#x60;&#x60;&#x60;sql name asc, created_at asc &#x60;&#x60;&#x60;  If the parameter isn\&#39;t provided, or if the value is empty, then the results will be ordered by name.
     * @param {string} [search] Search criteria.  The syntax of this parameter is similar to the syntax of the _where_ clause of an SQL statement. Allowed fields in the search are: name, status. Allowed comparators are &#x60;&#x3D;&#x60; or &#x60;LIKE&#x60;. Allowed joins are &#x60;AND&#x60; and &#x60;OR&#x60;, however there is a limit of max 10 joins in the search query.  Examples:  To retrieve request with name equal &#x60;my-registry&#x60;  the value should be:  &#x60;&#x60;&#x60; name &#x3D; my-registry  &#x60;&#x60;&#x60;  To retrieve kafka request with its name starting with &#x60;my&#x60;, the value should be:  &#x60;&#x60;&#x60; name like my%25 &#x60;&#x60;&#x60;  If the parameter isn\&#39;t provided, or if the value is empty, then all the kafkas that the user has permission to see will be returned.  Note. If the query is invalid, an error will be returned 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistriesApiInterface
     */
    getRegistries(page?: number, size?: number, orderBy?: string, search?: string, options?: any): AxiosPromise<RegistryListRest>;

    /**
     * Gets the details of a single instance of a `Registry`.
     * @summary Get a Registry
     * @param {string} id A unique identifier for a &#x60;Registry&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistriesApiInterface
     */
    getRegistry(id: string, options?: any): AxiosPromise<RegistryRest>;

}

/**
 * RegistriesApi - object-oriented interface
 * @export
 * @class RegistriesApi
 * @extends {BaseAPI}
 */
export class RegistriesApi extends BaseAPI implements RegistriesApiInterface {
    /**
     * 
     * @summary Create a new Registry instance
     * @param {RegistryCreateRest} registryCreateRest A new &#x60;Registry&#x60; to be created.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistriesApi
     */
    public createRegistry(registryCreateRest: RegistryCreateRest, options?: any) {
        return RegistriesApiFp(this.configuration).createRegistry(registryCreateRest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an existing `Registry`.
     * @summary Delete a Registry
     * @param {string} id A unique identifier for a &#x60;Registry&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistriesApi
     */
    public deleteRegistry(id: string, options?: any) {
        return RegistriesApiFp(this.configuration).deleteRegistry(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get the list of all registries.
     * @param {number} [page] Page index
     * @param {number} [size] Number of items in each page
     * @param {string} [orderBy] Specifies the order by criteria. The syntax of this parameter is similar to the syntax of the _order by_ clause of an SQL statement. Each query can be ordered by any of the kafkaRequests fields. For example, in order to retrieve all kafkas ordered by their name:  &#x60;&#x60;&#x60;sql name asc &#x60;&#x60;&#x60;  Or in order to retrieve all kafkas ordered by their name _and_ created date:  &#x60;&#x60;&#x60;sql name asc, created_at asc &#x60;&#x60;&#x60;  If the parameter isn\&#39;t provided, or if the value is empty, then the results will be ordered by name.
     * @param {string} [search] Search criteria.  The syntax of this parameter is similar to the syntax of the _where_ clause of an SQL statement. Allowed fields in the search are: name, status. Allowed comparators are &#x60;&#x3D;&#x60; or &#x60;LIKE&#x60;. Allowed joins are &#x60;AND&#x60; and &#x60;OR&#x60;, however there is a limit of max 10 joins in the search query.  Examples:  To retrieve request with name equal &#x60;my-registry&#x60;  the value should be:  &#x60;&#x60;&#x60; name &#x3D; my-registry  &#x60;&#x60;&#x60;  To retrieve kafka request with its name starting with &#x60;my&#x60;, the value should be:  &#x60;&#x60;&#x60; name like my%25 &#x60;&#x60;&#x60;  If the parameter isn\&#39;t provided, or if the value is empty, then all the kafkas that the user has permission to see will be returned.  Note. If the query is invalid, an error will be returned 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistriesApi
     */
    public getRegistries(page?: number, size?: number, orderBy?: string, search?: string, options?: any) {
        return RegistriesApiFp(this.configuration).getRegistries(page, size, orderBy, search, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets the details of a single instance of a `Registry`.
     * @summary Get a Registry
     * @param {string} id A unique identifier for a &#x60;Registry&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistriesApi
     */
    public getRegistry(id: string, options?: any) {
        return RegistriesApiFp(this.configuration).getRegistry(id, options).then((request) => request(this.axios, this.basePath));
    }
}
