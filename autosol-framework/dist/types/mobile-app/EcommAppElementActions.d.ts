/// <reference types="webdriverio/build/types" />
import { ETimeout } from '../constants';
export declare const SELECTORS: {
    ANDROID_LISTVIEW: string;
    IOS_PICKERWHEEL: string;
    DONE: string;
};
/**
 * Class representing various actions on elements.
 */
declare class EcommAppElementActions {
    /**
     * Click on an element.
     * @param elementPath - The element to click on.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static clickElement(elementPath: WebdriverIO.CucumberOpts, waitTimeOut?: ETimeout): Promise<void>;
    /**
     * Long press on an element.
     * @param elementPath - The element to click on.
     * @param timeDuration - The time duration is number of seconds  (default: ETimeout.TIMEOUT_S).
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static longPressOnElement(elementPath: WebdriverIO.CucumberOpts, timeDuration?: ETimeout, waitTimeOut?: ETimeout): Promise<void>;
    /**
     * Clear a textbox input.
     * @param elementPath - The element representing the textbox.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static clearInputText(elementPath: WebdriverIO.CucumberOpts, waitTimeOut?: ETimeout): Promise<void>;
    /**
     * Input text into a textbox.
     * @param elementPath - The element representing the textbox.
     * @param inputText - The text to input.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_L).
     */
    static inputText(elementPath: WebdriverIO.CucumberOpts, inputText: string, waitTimeOut?: ETimeout): Promise<void>;
    /**
     * Get the text of an element.
     * @param elementPath - The element to get the text from.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     * @returns The text of the element.
     */
    static getText(elementPath: WebdriverIO.CucumberOpts, waitTimeOut?: ETimeout): Promise<string>;
    /**
     * Get the text of an element and compare it with the exact expected text.
     * @param elementPath - The element to get the text from.
     * @param expectedText - The expected text to compare.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static getTextAndCompareExactText(elementPath: WebdriverIO.CucumberOpts, expectedText: string, waitTimeOut?: ETimeout): Promise<void>;
    /**
     * Get the text of an element and compare it with the partial expected text.
     * @param elementPath - The element to get the text from.
     * @param expectedText - The expected partial text to compare.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static getTextAndComparePartialText(elementPath: WebdriverIO.CucumberOpts, expectedText: string, waitTimeOut?: ETimeout): Promise<void>;
    /**
     * Get the text of an element and compare the text which starts with.
     * @param elementPath - The element to get the text from.
     * @param expectedText - The expected partial text to compare.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static getTextAndCompareTextStartsWith(elementPath: WebdriverIO.CucumberOpts, expectedText: string, waitTimeOut?: ETimeout): Promise<void>;
    /**
     * Get the text of an element and compare the text which ends with.
     * @param elementPath - The element to get the text from.
     * @param expectedText - The expected partial text to compare.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static getTextAndCompareTextEndsWith(elementPath: WebdriverIO.CucumberOpts, expectedText: string, waitTimeOut?: ETimeout): Promise<void>;
    /**
     * Verify if the large number is greater than the small number.
     * @param SmallNumber - The expected partial text to compare.
     * @param LargeNumber - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static verifyGreaterThan(SmallNumber: string, LargeNumber: string): Promise<void>;
    /**
     * Verify if the large number is greater than or equal to small number.
     * @param SmallNumber - The expected partial text to compare.
     * @param LargeNumber - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static verifyGreaterThanOrEqual(SmallNumber: string, LargeNumber: string): Promise<void>;
    /**
     * Verify if the small number is less than the large number.
     * @param SmallNumber - The expected partial text to compare.
     * @param LargeNumber - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static verifyLessThan(SmallNumber: string, LargeNumber: string): Promise<void>;
    /**
     * Verify if the small number is less than or equal to large number.
     * @param SmallNumber - The expected partial text to compare.
     * @param LargeNumber - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static verifyLessThanOrEqual(SmallNumber: string, LargeNumber: string): Promise<void>;
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
    static verifyElementIsDisplayed(elementPath: WebdriverIO.Element): Promise<void>;
    /**
     * Verify if an element is not displayed.
     * @param elementPath - The element to verify.
     */
    static verifyElementIsNotDisplayed(elementPath: WebdriverIO.Element): Promise<void>;
    /**
     * Get the attribute value of a textbox and verify it against the expected exact text.
     * @param elementPath - The element representing the textbox.
     * @param expectedText - The expected exact text of the attribute value.
     * @param attributeValue - The attribute to get the value from.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static getAttributeAndVerifyExactText(elementPath: WebdriverIO.CucumberOpts, expectedText: string, attributeValue: string, waitTimeOut?: ETimeout): Promise<void>;
    /**
     * Verify the attribute and value of an element.
     * @param elementPath - The element to verify.
     * @param elementAttribute - The attribute to verify.
     * @param expectedValue - The expected value of the attribute.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static verifyElementAttributeAndValue(elementPath: WebdriverIO.CucumberOpts, elementAttribute: string, expectedValue: string, waitTimeOut?: ETimeout): Promise<void>;
    /**
     * Get the boolean value indicating whether an element is displayed.
     * @param elementPath - The element to check.
     * @returns The boolean value indicating whether the element is displayed.
     */
    static booleanElementIsDisplayed(elementPath: WebdriverIO.CucumberOpts): Promise<boolean>;
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
     * Generate a random numbers of given length.
     * @returns The generated random numbers of given length.
     */
    static randomNumberGenerator(length?: number): Promise<number>;
    /**
     * Wait until the picker is shown or hidden.
     * @param isShown - Indicates whether the picker should be shown (default: true).
     */
    static waitForIsShown(isShown?: boolean): Promise<void>;
    /**
     * Select a value from the picker.
     * @param value - The value to select.
     */
    static selectValue(value: string): Promise<void>;
    /**
     * Set the value for Android.
     * @param value - The value to set.
     */
    static setAndroidValue(value: string): Promise<void>;
    /**
     * Set the value for IOS.
     * @param value - The value to set.
     */
    static setIOSValue(value: string): Promise<void>;
}
export default EcommAppElementActions;
