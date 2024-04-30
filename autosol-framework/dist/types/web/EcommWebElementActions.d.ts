import { ETimeout } from '../constants';
/**
 * Class representing various actions on elements.
 */
export declare class EcommWebElementActions {
    /**
     * Navigate to a URL.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static navigateToUrl(url: any, waitTimeOut?: ETimeout): Promise<void>;
    /**
     * Maximize the Window
     */
    static maximizeWindow(): Promise<void>;
    /**
     * Refresh the Browser
     */
    static refreshBrowser(): Promise<void>;
    /**
     * Get the URL of the current session
     */
    static getUrl(): Promise<any>;
    /**
     * Go back in the browser
     */
    static backBrowser(): Promise<void>;
    /**
     * Close the browser
     */
    closeBrowser(): Promise<void>;
    /**
     * Get the url of the current page and compare it with the partial expected url.
     * @param expectedPartialUrl - The expected partial URL to compare.
     */
    static getUrlAndVerifyPartialUrl(expectedPartialUrl: string): Promise<void>;
    /**
     * Click on an element.
     * @param elementPath - The element to click on.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static clickElement(elementPath: any, waitTimeOut?: ETimeout): Promise<void>;
    /**
     * Double click on an element.
     * @param elementPath - The element to click on.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static doubleClickElement(elementPath: WebdriverIO.CucumberOpts, waitTimeOut?: ETimeout): Promise<void>;
    /**
     * Clear a textbox input.
     * @param elementPath - The element representing the textbox.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static clearInputText(elementPath: any, waitTimeOut?: ETimeout): Promise<void>;
    /**
     * Clear a textbox input in javascript.
     * @param elementPath - The element representing the textbox.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static clearInputTextJS(elementPath: any, waitTimeOut?: ETimeout): Promise<void>;
    /**
     * Input text into a textbox.
     * @param elementPath - The element representing the textbox.
     * @param inputText - The text to input.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_L).
     */
    static inputText(elementPath: any, inputText: string, waitTimeOut?: ETimeout): Promise<void>;
    /**
     * Select value from a dropdown list.
     * @param elementPath - The element representing the textbox.
     * @param attributeName - The attribute name.
     * @param attributeName - The attribute value to select.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_L).
     */
    static selectFromDropdown(elementPath: WebdriverIO.CucumberOpts, attributeName: any, attributeValue: any, waitTimeOut?: number): Promise<void>;
    /**
     * Select a text felementPath: WebdriverIO.CucumberOpts,rom a dropdown list .
     * @param elementPath - The element representing the textbox.
     * @param attributeName - The attribute name.
     * @param attributeName - The attribute value to select.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_L).
     */
    static selectVisibleTextFromDropdown(elementPath: any, visibleText: any, waitTimeOut?: number): Promise<void>;
    /**
     * Get the text of an element.
     * @param elementPath - The element to get the text from.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     * @returns The text of the element.
     */
    static getText(elementPath: any, waitTimeOut?: ETimeout): Promise<string>;
    /**
     * Compare two exact values.
     * @param expectedText - The expected text.
     * @param actualText - The actual text.
     */
    static compareTwoValues(expectedText: any, actualText: any): Promise<void>;
    /**
     * Get the text of an element and compare it with the exact expected text.
     * @param elementPath - The element to get the text from.
     * @param expectedText - The expected text to compare.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static getTextAndCompareExactText(elementPath: any, expectedText: string, waitTimeOut?: ETimeout): Promise<void>;
    /**
     * Compare two partial values.
     * @param expectedText - The expected text.
     * @param actualText - The actual text.
     */
    static compareTwoPartialValues(expectedText: any, actualText: any): Promise<void>;
    /**
     * Get the text of an element and compare it with the partial expected text.
     * @param elementPath - The element to get the text from.
     * @param expectedText - The expected partial text to compare.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static getTextAndComparePartialText(elementPath: any, expectedText: string, waitTimeOut?: ETimeout): Promise<void>;
    /**
     * Get the attribute value of a textbox and verify it against the expected exact text.
     * @param elementPath - The element representing the textbox.
     * @param expectedText - The expected exact text of the attribute value.
     * @param attributeValue - The attribute to get the value from.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static getAttributeAndVerifyExactText(elementPath: any, expectedText: string, attributeValue: string, waitTimeOut?: ETimeout): Promise<void>;
    /**
     * Verify the attribute and value of an element.
     * @param elementPath - The element to verify.
     * @param elementAttribute - The attribute to verify.
     * @param expectedValue - The expected value of the attribute.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static verifyElementAttributeAndValue(elementPath: any, elementAttribute: string, expectedValue: string, waitTimeOut?: ETimeout): Promise<void>;
    verifyGreaterThan(smallNumber: string, largeNumber: string): Promise<void>;
    verifyGreaterThanOrEqual(smallNumber: string, largeNumber: string): Promise<void>;
    verifyLessThan(smallNumber: string, largeNumber: string): Promise<void>;
    verifyLessThanOrEqual(smallNumber: string, largeNumber: string): Promise<void>;
    /**
     * Wait until an element is displayed.
     * @param elementPath - The element to wait for.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static waitUntilElementIsDisplayed(elementPath: WebdriverIO.CucumberOpts, waitTimeOut?: ETimeout): Promise<void>;
    /**
     * Verify if an element is displayed.
     * @param elementPath - The element to verify.
     */
    static verifyElementIsDisplayed(elementPath: any): Promise<void>;
    /**
     * Verify if an element is not displayed.
     * @param elementPath - The element to verify.
     */
    static verifyElementIsNotDisplayed(elementPath: any): Promise<void>;
    /**
     * Get the boolean value indicating whether an element is displayed.
     * @param elementPath - The element to check.
     * @returns The boolean value indicating whether the element is displayed.
     */
    static booleanElementIsDisplayed(elementPath: WebdriverIO.CucumberOpts): Promise<boolean>;
    /**
     * Get the boolean value indicating whether an element is selected.
     * @param elementPath - The element to check.
     * @returns The boolean value indicating whether the element is selected.
     */
    static booleanElementIsSelected(elementPath: WebdriverIO.CucumberOpts): Promise<boolean>;
    /**
     * Pause on a specific element.
     * @param elementPath - The element to pause on.
     * @param waitTimeOut - The timeout for pausing (default: ETimeout.TIMEOUT_XXS).
     */
    static pauseOnElement(elementPath: WebdriverIO.CucumberOpts, waitTimeOut?: ETimeout): Promise<void>;
    /**
     * Generate a random email address.
     * @returns The generated random email address.
     */
    static randomEmailGenerator(): Promise<string>;
    /**
     * Generate a random email with only numbers of given length.
     * @returns The generated random email generated with numbers of given length.
     */
    static randomEmailGeneratorNumbersOnly(length?: number): Promise<string>;
    /**
     * Generate a random numbers of given length.
     * @returns The generated random numbers of given length.
     */
    static randomNumberGenerator(length?: number): Promise<number>;
    /**
     * Get  css property color of an element and verify exact Hex color.
     * @param elementPath - The element to get the css property color.
     * @param colorHexCode - The expected Hex code to verify
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static getCSSPropertyColorAndVerifyHexColor(elementPath: WebdriverIO.CucumberOpts, colorHexCode: string, waitTimeOut?: ETimeout): Promise<void>;
}
export default EcommWebElementActions;
