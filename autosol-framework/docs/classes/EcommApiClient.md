[@autosol/framework](../README.md) / [Exports](../modules.md) / EcommApiClient

# Class: EcommApiClient

## Table of contents

### Constructors

- [constructor](EcommApiClient.md#constructor)

### Properties

- [baseUrl](EcommApiClient.md#baseurl)
- [token](EcommApiClient.md#token)

### Methods

- [delete](EcommApiClient.md#delete)
- [fetch](EcommApiClient.md#fetch)
- [get](EcommApiClient.md#get)
- [getWithBasicAuth](EcommApiClient.md#getwithbasicauth)
- [patch](EcommApiClient.md#patch)
- [post](EcommApiClient.md#post)
- [postForm](EcommApiClient.md#postform)
- [put](EcommApiClient.md#put)
- [setToken](EcommApiClient.md#settoken)
- [isObject](EcommApiClient.md#isobject)

## Constructors

### constructor

• **new EcommApiClient**(`baseUrl`, `token?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseUrl` | `string` |
| `token?` | `string` |

#### Defined in

[api/EcommApiClient.ts:17](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/api/EcommApiClient.ts#L17)

## Properties

### baseUrl

• `Private` **baseUrl**: `string`

#### Defined in

[api/EcommApiClient.ts:13](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/api/EcommApiClient.ts#L13)

___

### token

• `Private` `Optional` **token**: `string`

#### Defined in

[api/EcommApiClient.ts:15](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/api/EcommApiClient.ts#L15)

## Methods

### delete

▸ **delete**<`T`\>(`endpoint`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`T`\>\>

**`Description`**

Perform a DELETE request to the specified endpoint.

**`Method`**

DELETE

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | `string` | API endpoint |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`T`\>\>

API response

#### Defined in

[api/EcommApiClient.ts:387](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/api/EcommApiClient.ts#L387)

___

### fetch

▸ `Private` **fetch**<`T`\>(`url`, `options?`, `customHeaders?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`T`\>\>

Internal method to handle the actual HTTP request.
Sets headers, makes the request, and parses the response.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | `RequestInit` |
| `customHeaders?` | `Object` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`T`\>\>

#### Defined in

[api/EcommApiClient.ts:34](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/api/EcommApiClient.ts#L34)

___

### get

▸ **get**<`T`\>(`endpoint`, `queryParams?`, `headers?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`T`\>\>

**`Description`**

Perform a GET request to the specified endpoint.
Supports query parameters.

**`Method`**

GET

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | `string` | API endpoint |
| `queryParams?` | `Record`<`string`, `any`\> | API query params |
| `headers?` | `Object` | API request headers |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`T`\>\>

API response

#### Defined in

[api/EcommApiClient.ts:149](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/api/EcommApiClient.ts#L149)

___

### getWithBasicAuth

▸ **getWithBasicAuth**<`T`\>(`endpoint`, `username`, `password`, `queryParams?`, `headers?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`T`\>\>

**`Description`**

Perform a POST request to the specified endpoint.
Takes an optional request body.

**`Method`**

POST

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | `string` | API endpoint |
| `username` | `string` | basic auth username |
| `password` | `string` | basic auth password |
| `queryParams?` | ``null`` \| `Record`<`string`, `any`\> | API query params |
| `headers?` | `Object` | API request headers |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`T`\>\>

API response

#### Defined in

[api/EcommApiClient.ts:265](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/api/EcommApiClient.ts#L265)

___

### patch

▸ **patch**<`T`\>(`endpoint`, `queryParams?`, `body?`, `headers?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`T`\>\>

**`Description`**

Perform a PATCH request to the specified endpoint.
Takes an optional request body.

**`Method`**

PATCH

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | `string` | API endpoint |
| `queryParams?` | ``null`` \| `Record`<`string`, `any`\> | API query params |
| `body?` | `any` | API request body/payload |
| `headers?` | `Object` | API request headers |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`T`\>\>

API response

#### Defined in

[api/EcommApiClient.ts:348](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/api/EcommApiClient.ts#L348)

___

### post

▸ **post**<`T`\>(`endpoint`, `queryParams?`, `body?`, `headers?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`T`\>\>

**`Description`**

Perform a POST request to the specified endpoint.
Takes an optional request body.

**`Method`**

POST

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | `string` | API endpoint |
| `queryParams?` | ``null`` \| `Record`<`string`, `any`\> | API query params |
| `body?` | `any` | API request body/payload |
| `headers?` | `Object` | API request headers |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`T`\>\>

API response

#### Defined in

[api/EcommApiClient.ts:221](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/api/EcommApiClient.ts#L221)

___

### postForm

▸ **postForm**<`T`\>(`endpoint`, `queryParams?`, `formData?`, `headers?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`T`\>\>

**`Description`**

Perform a POST request with x-www-form-urlencoded data to the specified endpoint.

**`Method`**

POST

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | `string` | API endpoint |
| `queryParams?` | ``null`` \| `Record`<`string`, `any`\> | API query params |
| `formData?` | `Record`<`string`, `string`\> | x-www-form-urlencoded data as an object |
| `headers?` | `Object` | API request headers |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`T`\>\>

API response

#### Defined in

[api/EcommApiClient.ts:177](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/api/EcommApiClient.ts#L177)

___

### put

▸ **put**<`T`\>(`endpoint`, `queryParams?`, `body?`, `headers?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`T`\>\>

**`Description`**

Perform a PUT request to the specified endpoint.
Takes an optional request body.

**`Method`**

PUT

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | `string` | API endpoint |
| `queryParams?` | ``null`` \| `Record`<`string`, `any`\> | API query params |
| `body?` | `any` | API request body/payload |
| `headers?` | `Object` | API request headers |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`T`\>\>

API response

#### Defined in

[api/EcommApiClient.ts:305](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/api/EcommApiClient.ts#L305)

___

### setToken

▸ **setToken**(`token`): `void`

Set the token to be used for authorization.

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`void`

#### Defined in

[api/EcommApiClient.ts:131](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/api/EcommApiClient.ts#L131)

___

### isObject

▸ `Static` **isObject**(`input`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`boolean`

#### Defined in

[api/EcommApiClient.ts:22](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/api/EcommApiClient.ts#L22)
