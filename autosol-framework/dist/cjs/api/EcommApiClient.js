"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcommApiClient = void 0;
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const cheerio_1 = require("cheerio");
class EcommApiClient {
    baseUrl;
    token;
    constructor(baseUrl, token) {
        this.baseUrl = baseUrl;
        this.token = token;
    }
    static isObject(input) {
        try {
            return !!JSON.parse(input);
        }
        catch (error) {
            return false;
        }
    }
    /**
     * Internal method to handle the actual HTTP request.
     * Sets headers, makes the request, and parses the response.
     */
    async fetch(url, options, customHeaders) {
        let headers = {
            'Content-Type': 'application/json',
        };
        const hasCustomHeaders = customHeaders && Object.values(customHeaders)?.length;
        if (this.token) {
            headers.Authorization = `Bearer ${this.token}`;
        }
        if (hasCustomHeaders) {
            headers = { ...headers, ...customHeaders };
        }
        // Add the text body to the options if provided
        if (options &&
            options.body &&
            typeof options.body === 'string' &&
            !headers['Content-Type'] &&
            !EcommApiClient.isObject(options.body)) {
            headers['Content-Type'] = 'text/plain'; // Set the Content-Type for the text body
        }
        const response = await fetch(url, { ...options, headers });
        if (!response.ok) {
            throw new Error(`Request failed: ${response.status} - ${response.statusText}`);
        }
        const contentType = response?.headers?.get('Content-Type');
        let data = {};
        // Check the content type to perform further actions
        if (contentType && contentType.includes('text/html')) {
            // Handle HTML response
            // Convert HTML meta tags to an object
            const metaTags = {};
            const htmlContent = await response.text();
            const $ = (0, cheerio_1.load)(htmlContent);
            $('meta').each((index, element) => {
                const name = $(element).attr('name') || 'ecomm-unknown-name';
                const content = $(element).attr('content');
                if (name && content) {
                    metaTags[name] = content;
                }
            });
            data = { ...metaTags };
        }
        else if (contentType &&
            (contentType.includes('application/json') || hasCustomHeaders)) {
            // Handle JSON response
            data = response.status !== 201 ? await response.json() : {};
        }
        else {
            console.info('Unsupported Response Type');
            // Handle other types of responses
            try {
                data = response.status !== 201 ? await response.json() : {};
            }
            catch (error) {
                console.info(`ERROR_TRYING_TO_PARSE_UNSUPPORTED_CONTENT_TYPE: ${contentType}`, error);
            }
        }
        if (response.status >= 400) {
            console.info(`Request failed: ${response.status} - ${contentType} - ${response.statusText}`);
        }
        // Extract cookies from the response headers
        const responseCookies = response.headers?.get('set-cookie');
        return {
            data,
            status: response.status,
            statusText: response.statusText,
            Cookie: responseCookies ?? undefined, // Include cookies in the response
        };
    }
    /**
     * Set the token to be used for authorization.
     */
    setToken(token) {
        this.token = token;
    }
    /**
     * @description
     * Perform a GET request to the specified endpoint.
     * Supports query parameters.
     *
     * @method GET
     *
     * @param {string} endpoint API endpoint
     * @param {Record<string, any> | null} queryParams API query params
     * @param {{ [key: string]: string | number | any }} body API request body/payload
     * @param {{ [key: string]: string }} headers API request headers
     *
     * @returns {Promise<ApiResponse<T>>} API response
     */
    async get(endpoint, queryParams, headers) {
        const url = new URL(endpoint, this.baseUrl);
        if (queryParams) {
            Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));
        }
        return this.fetch(url.toString(), undefined, headers);
    }
    /**
      * @description
      * Perform a POST request with x-www-form-urlencoded data to the specified endpoint.
      *
      * @method POST
      *
      * @param {string} endpoint API endpoint
      * @param {Record<string, any> | null} queryParams API query params
      * @param {Record<string, string>} formData x-www-form-urlencoded data as an object
      * @param {{ [key: string]: string }} headers API request headers
      *
      * @returns {Promise<ApiResponse<T>>} API response
      */
    async postForm(endpoint, queryParams, formData, headers) {
        const url = new URL(endpoint, this.baseUrl);
        if (queryParams) {
            Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));
        }
        // Convert the formData object to URLSearchParams
        const formDataParams = new URLSearchParams(formData);
        return this.fetch(url.toString(), {
            method: 'POST',
            body: formDataParams.toString(),
        }, {
            ...headers,
            'Content-Type': 'application/x-www-form-urlencoded',
        });
    }
    /**
     * @description
     * Perform a POST request to the specified endpoint.
     * Takes an optional request body.
     *
     * @method POST
     *
     * @param {string} endpoint API endpoint
     * @param {Record<string, any> | null} queryParams API query params
     * @param {{ [key: string]: string | number | any }} body API request body/payload
     * @param {{ [key: string]: string }} headers API request headers
     *
     * @returns {Promise<ApiResponse<T>>} API response
     */
    async post(endpoint, queryParams, body, headers) {
        const url = new URL(endpoint, this.baseUrl);
        if (queryParams) {
            Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));
        }
        let payload = body;
        if (typeof body === 'object') {
            payload = JSON.stringify(body);
        }
        return this.fetch(url.toString(), {
            method: 'POST',
            body: payload,
        }, headers);
    }
    /**
     * @description
     * Perform a POST request to the specified endpoint.
     * Takes an optional request body.
     *
     * @method POST
     *
     * @param {string} endpoint API endpoint
     * @param {string} username basic auth username
     * @param {string} password basic auth password
     * @param {Record<string, any> | null} queryParams API query params
     * @param {{ [key: string]: string }} headers API request headers
     *
     * @returns {Promise<ApiResponse<T>>} API response
     */
    async getWithBasicAuth(endpoint, username, password, queryParams, headers) {
        const url = new URL(endpoint, this.baseUrl);
        if (queryParams) {
            Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));
        }
        // Construct Basic Authentication header
        const base64Credentials = btoa(`${username}:${password}`);
        const authHeader = `Basic ${base64Credentials}`;
        const authHeaders = {
            Authorization: authHeader,
            ...(headers || {}),
        };
        return this.fetch(url.toString(), undefined, authHeaders);
    }
    /**
     * @description
     * Perform a PUT request to the specified endpoint.
     * Takes an optional request body.
     *
     * @method PUT
     *
     * @param {string} endpoint API endpoint
     * @param {Record<string, any> | null} queryParams API query params
     * @param {{ [key: string]: string | number | any }} body API request body/payload
     * @param {{ [key: string]: string }} headers API request headers
     *
     * @returns {Promise<ApiResponse<T>>} API response
     */
    async put(endpoint, queryParams, body, headers) {
        const url = new URL(endpoint, this.baseUrl);
        if (queryParams) {
            Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));
        }
        let payload = body;
        if (typeof body === 'object') {
            payload = JSON.stringify(body);
        }
        return this.fetch(url.toString(), {
            method: 'PUT',
            body: payload,
        }, headers);
    }
    /**
     * @description
     * Perform a PATCH request to the specified endpoint.
     * Takes an optional request body.
     *
     * @method PATCH
     *
     * @param {string} endpoint API endpoint
     * @param {Record<string, any> | null} queryParams API query params
     * @param {{ [key: string]: string | number | any }} body API request body/payload
     * @param {{ [key: string]: string }} headers API request headers
     *
     * @returns {Promise<ApiResponse<T>>} API response
     */
    async patch(endpoint, queryParams, body, headers) {
        const url = new URL(endpoint, this.baseUrl);
        if (queryParams) {
            Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));
        }
        let payload = body;
        if (typeof body === 'object') {
            payload = JSON.stringify(body);
        }
        return this.fetch(url.toString(), {
            method: 'PATCH',
            body: payload,
        }, headers);
    }
    /**
     * @description
     * Perform a DELETE request to the specified endpoint.
     *
     * @method DELETE
     *
     * @param {string} endpoint API endpoint
     *
     * @returns {Promise<ApiResponse<T>>} API response
     */
    async delete(endpoint) {
        const url = new URL(endpoint, this.baseUrl);
        return this.fetch(url.toString(), {
            method: 'DELETE',
        });
    }
}
exports.EcommApiClient = EcommApiClient;
