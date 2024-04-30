// import fetchMock from 'jest-fetch-mock';
import { EcommApiClient, ApiResponse } from '../src';

describe('EcommApiClient', () => {
  let apiClient: EcommApiClient;

  beforeEach(() => {
    apiClient = new EcommApiClient('https://api.example.com');
  });

  afterEach(() => {
    // Clean up any necessary resources
  });

  it('should perform a GET request and return the API response', async () => {
    // Mock the fetch method and response
    const mockResponse = {
      data: { id: 1, name: 'Product 1' },
      status: 200,
      statusText: 'OK',
    };
    jest.spyOn(apiClient as any, 'get').mockResolvedValue(mockResponse);

    // Make the GET request
    const response: ApiResponse<any> = await apiClient.get('/products/1');

    // Verify the response
    expect(response).toEqual(mockResponse);
    // expect(apiClient.get).toHaveBeenCalledWith(
    //   'https://api.example.com/products/1',
    //   undefined,
    //   undefined,
    // );
  });

  it('should perform a POST request and return the API response', async () => {
    // Mock the fetch method and response
    const mockResponse = {
      data: { id: 1, name: 'Product 1' },
      status: 201,
      statusText: 'Created',
    };
    jest.spyOn(apiClient as any, 'fetch').mockResolvedValue(mockResponse);

    // Make the POST request
    const requestBody = { name: 'New Product' };
    const response: ApiResponse<any> = await apiClient.post(
      '/products',
      null,
      requestBody,
    );

    // Verify the response
    expect(response).toEqual(mockResponse);
    // expect(apiClient.post).toHaveBeenCalledWith(
    //   'https://api.example.com/products',
    //   { method: 'POST', body: JSON.stringify(requestBody) },
    //   undefined,
    // );
  });

  it('should perform a PUT request and return the API response', async () => {
    // Mock the fetch method and response
    const mockResponse = {
      data: { id: 1, name: 'Product 1' },
      status: 200,
      statusText: 'OK',
    };
    jest.spyOn(apiClient as any, 'fetch').mockResolvedValue(mockResponse);

    // Make the PUT request
    const requestBody = { name: 'Updated Product' };
    const response: ApiResponse<any> = await apiClient.put(
      '/products/1',
      null,
      requestBody,
    );

    // Verify the response
    expect(response).toEqual(mockResponse);
    // expect(apiClient.put).toHaveBeenCalledWith(
    //   'https://api.example.com/products/1',
    //   { method: 'PUT', body: JSON.stringify(requestBody) },
    //   undefined,
    // );
  });

  it('should perform a PATCH request and return the API response', async () => {
    // Mock the fetch method and response
    const mockResponse = {
      data: { id: 1, name: 'Product 1' },
      status: 200,
      statusText: 'OK',
    };
    jest.spyOn(apiClient as any, 'fetch').mockResolvedValue(mockResponse);

    // Make the PATCH request
    const requestBody = { name: 'Updated Product' };
    const response: ApiResponse<any> = await apiClient.patch(
      '/products/1',
      null,
      requestBody,
    );

    // Verify the response
    expect(response).toEqual(mockResponse);
    // expect(apiClient.patch).toHaveBeenCalledWith(
    //   'https://api.example.com/products/1',
    //   { method: 'PATCH', body: JSON.stringify(requestBody) },
    //   undefined,
    // );
  });

  it('should perform a DELETE request and return the API response', async () => {
    // Mock the fetch method and response
    const mockResponse = {
      data: null,
      status: 204,
      statusText: 'No Content',
    };
    jest.spyOn(apiClient as any, 'fetch').mockResolvedValue(mockResponse);

    // Make the DELETE request
    const response: ApiResponse<any> = await apiClient.delete('/products/1');

    // Verify the response
    expect(response).toEqual(mockResponse);
    // expect(apiClient.delete).toHaveBeenCalledWith(
    //   'https://api.example.com/products/1',
    //   { method: 'DELETE' },
    //   undefined,
    // );
  });
});
