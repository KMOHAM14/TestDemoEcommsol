export interface ApiResponse<T> {
    data: T;
    status: number;
    statusText: string;
    Cookie?: string;
}
export declare class EcommApiClient {
    private baseUrl;
    private token?;
    constructor(baseUrl: string, token?: string);
    static isObject(input: string): boolean;
    /**
     * Internal method to handle the actual HTTP request.
     * Sets headers, makes the request, and parses the response.
     */
    private fetch;
    /**
     * Set the token to be used for authorization.
     */
    setToken(token: string): void;
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
    get<T>(endpoint: string, queryParams?: Record<string, any>, headers?: {
        [key: string]: string;
    }): Promise<ApiResponse<T>>;
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
    postForm<T>(endpoint: string, queryParams?: Record<string, any> | null, formData?: Record<string, string>, headers?: {
        [key: string]: string;
    }): Promise<ApiResponse<T>>;
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
    post<T>(endpoint: string, queryParams?: Record<string, any> | null, body?: any, headers?: {
        [key: string]: string;
    }): Promise<ApiResponse<T>>;
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
    getWithBasicAuth<T>(endpoint: string, username: string, password: string, queryParams?: Record<string, any> | null, headers?: {
        [key: string]: string;
    }): Promise<ApiResponse<T>>;
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
    put<T>(endpoint: string, queryParams?: Record<string, any> | null, body?: any, headers?: {
        [key: string]: string;
    }): Promise<ApiResponse<T>>;
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
    patch<T>(endpoint: string, queryParams?: Record<string, any> | null, body?: any, headers?: {
        [key: string]: string;
    }): Promise<ApiResponse<T>>;
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
    delete<T>(endpoint: string): Promise<ApiResponse<T>>;
}
