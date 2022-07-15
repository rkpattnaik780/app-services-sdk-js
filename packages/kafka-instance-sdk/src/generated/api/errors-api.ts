/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Instance API
 * API for interacting with Kafka Instance. Includes Produce, Consume and Admin APIs
 *
 * The version of the OpenAPI document: 0.12.0
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
import { ErrorList } from '../model';
/**
 * ErrorsApi - axios parameter creator
 * @export
 */
export const ErrorsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get an error by its unique ID
         * @param {string} errorId Error identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getError: async (errorId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'errorId' is not null or undefined
            assertParamExists('getError', 'errorId', errorId)
            const localVarPath = `/api/v1/errors/{errorId}`
                .replace(`{${"errorId"}}`, encodeURIComponent(String(errorId)));
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
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get list of errors
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getErrors: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/errors`;
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
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
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
 * ErrorsApi - functional programming interface
 * @export
 */
export const ErrorsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ErrorsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get an error by its unique ID
         * @param {string} errorId Error identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getError(errorId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Error>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getError(errorId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get list of errors
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getErrors(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ErrorList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getErrors(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ErrorsApi - factory interface
 * @export
 */
export const ErrorsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ErrorsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get an error by its unique ID
         * @param {string} errorId Error identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getError(errorId: string, options?: any): AxiosPromise<Error> {
            return localVarFp.getError(errorId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get list of errors
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getErrors(options?: any): AxiosPromise<ErrorList> {
            return localVarFp.getErrors(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ErrorsApi - interface
 * @export
 * @interface ErrorsApi
 */
export interface ErrorsApiInterface {
    /**
     * 
     * @summary Get an error by its unique ID
     * @param {string} errorId Error identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ErrorsApiInterface
     */
    getError(errorId: string, options?: AxiosRequestConfig): AxiosPromise<Error>;

    /**
     * 
     * @summary Get list of errors
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ErrorsApiInterface
     */
    getErrors(options?: AxiosRequestConfig): AxiosPromise<ErrorList>;

}

/**
 * ErrorsApi - object-oriented interface
 * @export
 * @class ErrorsApi
 * @extends {BaseAPI}
 */
export class ErrorsApi extends BaseAPI implements ErrorsApiInterface {
    /**
     * 
     * @summary Get an error by its unique ID
     * @param {string} errorId Error identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ErrorsApi
     */
    public getError(errorId: string, options?: AxiosRequestConfig) {
        return ErrorsApiFp(this.configuration).getError(errorId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get list of errors
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ErrorsApi
     */
    public getErrors(options?: AxiosRequestConfig) {
        return ErrorsApiFp(this.configuration).getErrors(options).then((request) => request(this.axios, this.basePath));
    }
}
