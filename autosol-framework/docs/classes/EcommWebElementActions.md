[@autosol/framework](../README.md) / [Exports](../modules.md) / EcommWebElementActions

# Class: EcommWebElementActions

Class representing various actions on elements.

## Table of contents

### Constructors

- [constructor](EcommWebElementActions.md#constructor)

### Methods

- [closeBrowser](EcommWebElementActions.md#closebrowser)
- [verifyGreaterThan](EcommWebElementActions.md#verifygreaterthan)
- [verifyGreaterThanOrEqual](EcommWebElementActions.md#verifygreaterthanorequal)
- [verifyLessThan](EcommWebElementActions.md#verifylessthan)
- [verifyLessThanOrEqual](EcommWebElementActions.md#verifylessthanorequal)
- [backBrowser](EcommWebElementActions.md#backbrowser)
- [booleanElementIsDisplayed](EcommWebElementActions.md#booleanelementisdisplayed)
- [booleanElementIsSelected](EcommWebElementActions.md#booleanelementisselected)
- [clearInputText](EcommWebElementActions.md#clearinputtext)
- [clearInputTextJS](EcommWebElementActions.md#clearinputtextjs)
- [clickElement](EcommWebElementActions.md#clickelement)
- [compareTwoPartialValues](EcommWebElementActions.md#comparetwopartialvalues)
- [compareTwoValues](EcommWebElementActions.md#comparetwovalues)
- [doubleClickElement](EcommWebElementActions.md#doubleclickelement)
- [getAttributeAndVerifyExactText](EcommWebElementActions.md#getattributeandverifyexacttext)
- [getCSSPropertyColorAndVerifyHexColor](EcommWebElementActions.md#getcsspropertycolorandverifyhexcolor)
- [getText](EcommWebElementActions.md#gettext)
- [getTextAndCompareExactText](EcommWebElementActions.md#gettextandcompareexacttext)
- [getTextAndComparePartialText](EcommWebElementActions.md#gettextandcomparepartialtext)
- [getUrl](EcommWebElementActions.md#geturl)
- [getUrlAndVerifyPartialUrl](EcommWebElementActions.md#geturlandverifypartialurl)
- [inputText](EcommWebElementActions.md#inputtext)
- [maximizeWindow](EcommWebElementActions.md#maximizewindow)
- [navigateToUrl](EcommWebElementActions.md#navigatetourl)
- [pauseOnElement](EcommWebElementActions.md#pauseonelement)
- [randomEmailGenerator](EcommWebElementActions.md#randomemailgenerator)
- [randomEmailGeneratorNumbersOnly](EcommWebElementActions.md#randomemailgeneratornumbersonly)
- [randomNumberGenerator](EcommWebElementActions.md#randomnumbergenerator)
- [refreshBrowser](EcommWebElementActions.md#refreshbrowser)
- [selectFromDropdown](EcommWebElementActions.md#selectfromdropdown)
- [selectVisibleTextFromDropdown](EcommWebElementActions.md#selectvisibletextfromdropdown)
- [verifyElementAttributeAndValue](EcommWebElementActions.md#verifyelementattributeandvalue)
- [verifyElementIsDisplayed](EcommWebElementActions.md#verifyelementisdisplayed)
- [verifyElementIsNotDisplayed](EcommWebElementActions.md#verifyelementisnotdisplayed)
- [waitUntilElementIsDisplayed](EcommWebElementActions.md#waituntilelementisdisplayed)

## Constructors

### constructor

• **new EcommWebElementActions**()

## Methods

### closeBrowser

▸ **closeBrowser**(): `Promise`<`void`\>

Close the browser

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:54](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L54)

___

### verifyGreaterThan

▸ **verifyGreaterThan**(`smallNumber`, `largeNumber`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `smallNumber` | `string` |
| `largeNumber` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:280](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L280)

___

### verifyGreaterThanOrEqual

▸ **verifyGreaterThanOrEqual**(`smallNumber`, `largeNumber`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `smallNumber` | `string` |
| `largeNumber` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:287](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L287)

___

### verifyLessThan

▸ **verifyLessThan**(`smallNumber`, `largeNumber`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `smallNumber` | `string` |
| `largeNumber` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:297](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L297)

___

### verifyLessThanOrEqual

▸ **verifyLessThanOrEqual**(`smallNumber`, `largeNumber`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `smallNumber` | `string` |
| `largeNumber` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:304](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L304)

___

### backBrowser

▸ `Static` **backBrowser**(): `Promise`<`void`\>

Go back in the browser

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:47](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L47)

___

### booleanElementIsDisplayed

▸ `Static` **booleanElementIsDisplayed**(`elementPath`): `Promise`<`boolean`\>

Get the boolean value indicating whether an element is displayed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elementPath` | `CucumberOpts` | The element to check. |

#### Returns

`Promise`<`boolean`\>

The boolean value indicating whether the element is displayed.

#### Defined in

[web/EcommWebElementActions.ts:348](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L348)

___

### booleanElementIsSelected

▸ `Static` **booleanElementIsSelected**(`elementPath`): `Promise`<`boolean`\>

Get the boolean value indicating whether an element is selected.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elementPath` | `CucumberOpts` | The element to check. |

#### Returns

`Promise`<`boolean`\>

The boolean value indicating whether the element is selected.

#### Defined in

[web/EcommWebElementActions.ts:360](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L360)

___

### clearInputText

▸ `Static` **clearInputText**(`elementPath`, `waitTimeOut?`): `Promise`<`void`\>

Clear a textbox input.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `elementPath` | `any` | `undefined` | The element representing the textbox. |
| `waitTimeOut` | [`ETimeout`](../enums/ETimeout.md) | `ETimeout.TIMEOUT_S` | The timeout for element display (default: ETimeout.TIMEOUT_S). |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:100](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L100)

___

### clearInputTextJS

▸ `Static` **clearInputTextJS**(`elementPath`, `waitTimeOut?`): `Promise`<`void`\>

Clear a textbox input in javascript.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `elementPath` | `any` | `undefined` | The element representing the textbox. |
| `waitTimeOut` | [`ETimeout`](../enums/ETimeout.md) | `ETimeout.TIMEOUT_S` | The timeout for element display (default: ETimeout.TIMEOUT_S). |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:114](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L114)

___

### clickElement

▸ `Static` **clickElement**(`elementPath`, `waitTimeOut?`): `Promise`<`void`\>

Click on an element.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `elementPath` | `any` | `undefined` | The element to click on. |
| `waitTimeOut` | [`ETimeout`](../enums/ETimeout.md) | `ETimeout.TIMEOUT_S` | The timeout for element display (default: ETimeout.TIMEOUT_S). |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:72](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L72)

___

### compareTwoPartialValues

▸ `Static` **compareTwoPartialValues**(`expectedText`, `actualText`): `Promise`<`void`\>

Compare two partial values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expectedText` | `any` | The expected text. |
| `actualText` | `any` | The actual text. |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:220](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L220)

___

### compareTwoValues

▸ `Static` **compareTwoValues**(`expectedText`, `actualText`): `Promise`<`void`\>

Compare two exact values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expectedText` | `any` | The expected text. |
| `actualText` | `any` | The actual text. |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:195](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L195)

___

### doubleClickElement

▸ `Static` **doubleClickElement**(`elementPath`, `waitTimeOut?`): `Promise`<`void`\>

Double click on an element.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `elementPath` | `CucumberOpts` | `undefined` | The element to click on. |
| `waitTimeOut` | [`ETimeout`](../enums/ETimeout.md) | `ETimeout.TIMEOUT_S` | The timeout for element display (default: ETimeout.TIMEOUT_S). |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:86](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L86)

___

### getAttributeAndVerifyExactText

▸ `Static` **getAttributeAndVerifyExactText**(`elementPath`, `expectedText`, `attributeValue`, `waitTimeOut?`): `Promise`<`void`\>

Get the attribute value of a textbox and verify it against the expected exact text.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `elementPath` | `any` | `undefined` | The element representing the textbox. |
| `expectedText` | `string` | `undefined` | The expected exact text of the attribute value. |
| `attributeValue` | `string` | `undefined` | The attribute to get the value from. |
| `waitTimeOut` | [`ETimeout`](../enums/ETimeout.md) | `ETimeout.TIMEOUT_S` | The timeout for element display (default: ETimeout.TIMEOUT_S). |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:247](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L247)

___

### getCSSPropertyColorAndVerifyHexColor

▸ `Static` **getCSSPropertyColorAndVerifyHexColor**(`elementPath`, `colorHexCode`, `waitTimeOut?`): `Promise`<`void`\>

Get  css property color of an element and verify exact Hex color.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `elementPath` | `CucumberOpts` | `undefined` | The element to get the css property color. |
| `colorHexCode` | `string` | `undefined` | The expected Hex code to verify |
| `waitTimeOut` | [`ETimeout`](../enums/ETimeout.md) | `ETimeout.TIMEOUT_S` | The timeout for element display (default: ETimeout.TIMEOUT_S). |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:422](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L422)

___

### getText

▸ `Static` **getText**(`elementPath`, `waitTimeOut?`): `Promise`<`string`\>

Get the text of an element.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `elementPath` | `any` | `undefined` | The element to get the text from. |
| `waitTimeOut` | [`ETimeout`](../enums/ETimeout.md) | `ETimeout.TIMEOUT_S` | The timeout for element display (default: ETimeout.TIMEOUT_S). |

#### Returns

`Promise`<`string`\>

The text of the element.

#### Defined in

[web/EcommWebElementActions.ts:181](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L181)

___

### getTextAndCompareExactText

▸ `Static` **getTextAndCompareExactText**(`elementPath`, `expectedText`, `waitTimeOut?`): `Promise`<`void`\>

Get the text of an element and compare it with the exact expected text.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `elementPath` | `any` | `undefined` | The element to get the text from. |
| `expectedText` | `string` | `undefined` | The expected text to compare. |
| `waitTimeOut` | [`ETimeout`](../enums/ETimeout.md) | `ETimeout.TIMEOUT_S` | The timeout for element display (default: ETimeout.TIMEOUT_S). |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:205](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L205)

___

### getTextAndComparePartialText

▸ `Static` **getTextAndComparePartialText**(`elementPath`, `expectedText`, `waitTimeOut?`): `Promise`<`void`\>

Get the text of an element and compare it with the partial expected text.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `elementPath` | `any` | `undefined` | The element to get the text from. |
| `expectedText` | `string` | `undefined` | The expected partial text to compare. |
| `waitTimeOut` | [`ETimeout`](../enums/ETimeout.md) | `ETimeout.TIMEOUT_S` | The timeout for element display (default: ETimeout.TIMEOUT_S). |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:230](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L230)

___

### getUrl

▸ `Static` **getUrl**(): `Promise`<`any`\>

Get the URL of the current session

#### Returns

`Promise`<`any`\>

#### Defined in

[web/EcommWebElementActions.ts:39](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L39)

___

### getUrlAndVerifyPartialUrl

▸ `Static` **getUrlAndVerifyPartialUrl**(`expectedPartialUrl`): `Promise`<`void`\>

Get the url of the current page and compare it with the partial expected url.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expectedPartialUrl` | `string` | The expected partial URL to compare. |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:62](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L62)

___

### inputText

▸ `Static` **inputText**(`elementPath`, `inputText`, `waitTimeOut?`): `Promise`<`void`\>

Input text into a textbox.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `elementPath` | `any` | `undefined` | The element representing the textbox. |
| `inputText` | `string` | `undefined` | The text to input. |
| `waitTimeOut` | [`ETimeout`](../enums/ETimeout.md) | `ETimeout.TIMEOUT_L` | The timeout for element display (default: ETimeout.TIMEOUT_L). |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:130](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L130)

___

### maximizeWindow

▸ `Static` **maximizeWindow**(): `Promise`<`void`\>

Maximize the Window

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:25](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L25)

___

### navigateToUrl

▸ `Static` **navigateToUrl**(`url`, `waitTimeOut?`): `Promise`<`void`\>

Navigate to a URL.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `any` | `undefined` | - |
| `waitTimeOut` | [`ETimeout`](../enums/ETimeout.md) | `ETimeout.TIMEOUT_S` | The timeout for element display (default: ETimeout.TIMEOUT_S). |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:17](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L17)

___

### pauseOnElement

▸ `Static` **pauseOnElement**(`elementPath`, `waitTimeOut?`): `Promise`<`void`\>

Pause on a specific element.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `elementPath` | `CucumberOpts` | `undefined` | The element to pause on. |
| `waitTimeOut` | [`ETimeout`](../enums/ETimeout.md) | `ETimeout.TIMEOUT_XXS` | The timeout for pausing (default: ETimeout.TIMEOUT_XXS). |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:372](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L372)

___

### randomEmailGenerator

▸ `Static` **randomEmailGenerator**(): `Promise`<`string`\>

Generate a random email address.

#### Returns

`Promise`<`string`\>

The generated random email address.

#### Defined in

[web/EcommWebElementActions.ts:384](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L384)

___

### randomEmailGeneratorNumbersOnly

▸ `Static` **randomEmailGeneratorNumbersOnly**(`length?`): `Promise`<`string`\>

Generate a random email with only numbers of given length.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `length` | `number` | `10` |

#### Returns

`Promise`<`string`\>

The generated random email generated with numbers of given length.

#### Defined in

[web/EcommWebElementActions.ts:395](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L395)

___

### randomNumberGenerator

▸ `Static` **randomNumberGenerator**(`length?`): `Promise`<`number`\>

Generate a random numbers of given length.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `length` | `number` | `10` |

#### Returns

`Promise`<`number`\>

The generated random numbers of given length.

#### Defined in

[web/EcommWebElementActions.ts:408](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L408)

___

### refreshBrowser

▸ `Static` **refreshBrowser**(): `Promise`<`void`\>

Refresh the Browser

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:32](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L32)

___

### selectFromDropdown

▸ `Static` **selectFromDropdown**(`elementPath`, `attributeName`, `attributeValue`, `waitTimeOut?`): `Promise`<`void`\>

Select value from a dropdown list.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `elementPath` | `CucumberOpts` | `undefined` | The element representing the textbox. |
| `attributeName` | `any` | `undefined` | The attribute name. |
| `attributeValue` | `any` | `undefined` | - |
| `waitTimeOut` | `number` | `ETimeout.TIMEOUT_S` | The timeout for element display (default: ETimeout.TIMEOUT_L). |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:148](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L148)

___

### selectVisibleTextFromDropdown

▸ `Static` **selectVisibleTextFromDropdown**(`elementPath`, `visibleText`, `waitTimeOut?`): `Promise`<`void`\>

Select a text felementPath: WebdriverIO.CucumberOpts,rom a dropdown list .

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `elementPath` | `any` | `undefined` | The element representing the textbox. |
| `visibleText` | `any` | `undefined` | - |
| `waitTimeOut` | `number` | `ETimeout.TIMEOUT_S` | The timeout for element display (default: ETimeout.TIMEOUT_L). |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:166](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L166)

___

### verifyElementAttributeAndValue

▸ `Static` **verifyElementAttributeAndValue**(`elementPath`, `elementAttribute`, `expectedValue`, `waitTimeOut?`): `Promise`<`void`\>

Verify the attribute and value of an element.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `elementPath` | `any` | `undefined` | The element to verify. |
| `elementAttribute` | `string` | `undefined` | The attribute to verify. |
| `expectedValue` | `string` | `undefined` | The expected value of the attribute. |
| `waitTimeOut` | [`ETimeout`](../enums/ETimeout.md) | `ETimeout.TIMEOUT_S` | The timeout for element display (default: ETimeout.TIMEOUT_S). |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:266](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L266)

___

### verifyElementIsDisplayed

▸ `Static` **verifyElementIsDisplayed**(`elementPath`): `Promise`<`void`\>

Verify if an element is displayed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elementPath` | `any` | The element to verify. |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:327](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L327)

___

### verifyElementIsNotDisplayed

▸ `Static` **verifyElementIsNotDisplayed**(`elementPath`): `Promise`<`void`\>

Verify if an element is not displayed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elementPath` | `any` | The element to verify. |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:337](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L337)

___

### waitUntilElementIsDisplayed

▸ `Static` **waitUntilElementIsDisplayed**(`elementPath`, `waitTimeOut?`): `Promise`<`void`\>

Wait until an element is displayed.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `elementPath` | `CucumberOpts` | `undefined` | The element to wait for. |
| `waitTimeOut` | [`ETimeout`](../enums/ETimeout.md) | `ETimeout.TIMEOUT_S` | The timeout for element display (default: ETimeout.TIMEOUT_S). |

#### Returns

`Promise`<`void`\>

#### Defined in

[web/EcommWebElementActions.ts:315](https://github.com/ECommSol/AUTOSOL-Framework/blob/1f8d84d/src/web/EcommWebElementActions.ts#L315)
