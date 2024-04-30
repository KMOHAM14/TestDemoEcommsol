// eslint-disable-next-line import/no-extraneous-dependencies
import { Chance } from 'chance';
import assert from 'assert';
import { ETimeout } from '../constants';
export const SELECTORS = {
    ANDROID_LISTVIEW: '//android.view.ViewGroup/android.widget.LinearLayout[2]',
    IOS_PICKERWHEEL: "-ios predicate string:type == 'XCUIElementTypePickerWheel'",
    DONE: '~done_button',
};
/**
 * Class representing various actions on elements.
 */
class EcommAppElementActions {
    /**
     * Click on an element.
     * @param elementPath - The element to click on.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static async clickElement(elementPath, waitTimeOut = ETimeout.TIMEOUT_S) {
        await elementPath.waitForDisplayed({ timeout: waitTimeOut });
        await expect(await elementPath).toBeDisplayed();
        await elementPath.click();
    }
    /**
     * Long press on an element.
     * @param elementPath - The element to click on.
     * @param timeDuration - The time duration is number of seconds  (default: ETimeout.TIMEOUT_S).
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static async longPressOnElement(elementPath, timeDuration = ETimeout.TIMEOUT_S, waitTimeOut = ETimeout.TIMEOUT_S) {
        await elementPath.waitForDisplayed({ timeout: waitTimeOut });
        // Get the element coordinates
        const { x, y } = await elementPath.getLocation();
        // Perform the long press action
        await driver.touchAction([
            { action: 'press', x, y },
            { action: 'wait', ms: timeDuration },
            { action: 'release' },
        ]);
    }
    /**
     * Clear a textbox input.
     * @param elementPath - The element representing the textbox.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static async clearInputText(elementPath, waitTimeOut = ETimeout.TIMEOUT_S) {
        await elementPath.waitForDisplayed({ timeout: waitTimeOut });
        await expect(await elementPath).toBeDisplayed();
        await elementPath.clearValue();
    }
    /**
     * Input text into a textbox.
     * @param elementPath - The element representing the textbox.
     * @param inputText - The text to input.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_L).
     */
    static async inputText(elementPath, inputText, waitTimeOut = ETimeout.TIMEOUT_L) {
        await elementPath.waitForDisplayed({ timeout: waitTimeOut });
        await expect(await elementPath).toBeDisplayed();
        await elementPath.clearValue();
        await elementPath.setValue(inputText);
    }
    /**
     * Get the text of an element.
     * @param elementPath - The element to get the text from.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     * @returns The text of the element.
     */
    static async getText(elementPath, waitTimeOut = ETimeout.TIMEOUT_S) {
        await elementPath.waitForDisplayed({ timeout: waitTimeOut });
        const elementText = await (await elementPath).getText();
        return elementText;
    }
    /**
     * Get the text of an element and compare it with the exact expected text.
     * @param elementPath - The element to get the text from.
     * @param expectedText - The expected text to compare.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static async getTextAndCompareExactText(elementPath, expectedText, waitTimeOut = ETimeout.TIMEOUT_S) {
        await elementPath.waitForDisplayed({ timeout: waitTimeOut });
        await expect(await elementPath).toBeDisplayed();
        await expect(await elementPath.getText()).toEqual(expectedText);
    }
    /**
     * Get the text of an element and compare it with the partial expected text.
     * @param elementPath - The element to get the text from.
     * @param expectedText - The expected partial text to compare.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static async getTextAndComparePartialText(elementPath, expectedText, waitTimeOut = ETimeout.TIMEOUT_S) {
        await elementPath.waitForDisplayed({ timeout: waitTimeOut });
        await expect(await elementPath).toBeDisplayed();
        await expect(await elementPath.getText()).toContain(expectedText);
    }
    /**
     * Get the text of an element and compare the text which starts with.
     * @param elementPath - The element to get the text from.
     * @param expectedText - The expected partial text to compare.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static async getTextAndCompareTextStartsWith(elementPath, expectedText, waitTimeOut = ETimeout.TIMEOUT_S) {
        const string = await this.getText(await elementPath, waitTimeOut);
        assert.equal(await string.startsWith(expectedText), true);
    }
    /**
     * Get the text of an element and compare the text which ends with.
     * @param elementPath - The element to get the text from.
     * @param expectedText - The expected partial text to compare.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static async getTextAndCompareTextEndsWith(elementPath, expectedText, waitTimeOut = ETimeout.TIMEOUT_S) {
        const string = await this.getText(await elementPath, waitTimeOut);
        // const assert = require('assert');
        assert.equal(await string.endsWith(expectedText), true);
    }
    /**
     * Verify if the large number is greater than the small number.
     * @param SmallNumber - The expected partial text to compare.
     * @param LargeNumber - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static async verifyGreaterThan(SmallNumber, LargeNumber) {
        const smallNum = parseInt(SmallNumber, 10);
        const largeNum = parseInt(LargeNumber, 10);
        await expect(largeNum).toBeGreaterThan(smallNum);
    }
    /**
     * Verify if the large number is greater than or equal to small number.
     * @param SmallNumber - The expected partial text to compare.
     * @param LargeNumber - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static async verifyGreaterThanOrEqual(SmallNumber, LargeNumber) {
        const smallNum = parseInt(SmallNumber, 10);
        const largeNum = parseInt(LargeNumber, 10);
        await expect(largeNum).toBeGreaterThanOrEqual(smallNum);
    }
    /**
     * Verify if the small number is less than the large number.
     * @param SmallNumber - The expected partial text to compare.
     * @param LargeNumber - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static async verifyLessThan(SmallNumber, LargeNumber) {
        const smallNum = parseInt(SmallNumber, 10);
        const largeNum = parseInt(LargeNumber, 10);
        await expect(smallNum).toBeLessThan(largeNum);
    }
    /**
     * Verify if the small number is less than or equal to large number.
     * @param SmallNumber - The expected partial text to compare.
     * @param LargeNumber - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static async verifyLessThanOrEqual(SmallNumber, LargeNumber) {
        const smallNum = parseInt(SmallNumber, 10);
        const largeNum = parseInt(LargeNumber, 10);
        await expect(smallNum).toBeLessThanOrEqual(largeNum);
    }
    /**
     * Wait until an element is displayed.
     * @param elementPath - The element to wait for.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static async waitUntilElementIsDisplayed(elementPath, waitTimeOut = ETimeout.TIMEOUT_S) {
        await elementPath.waitForDisplayed({ timeout: waitTimeOut });
        await expect(await elementPath).toBeDisplayed();
    }
    /**
     * Verify if an element is displayed.
     * @param elementPath - The element to verify.
     */
    static async verifyElementIsDisplayed(elementPath) {
        await expect(elementPath).toBeDisplayed();
    }
    /**
     * Verify if an element is not displayed.
     * @param elementPath - The element to verify.
     */
    static async verifyElementIsNotDisplayed(elementPath) {
        await expect(elementPath).not.toBeDisplayed();
    }
    /**
     * Get the attribute value of a textbox and verify it against the expected exact text.
     * @param elementPath - The element representing the textbox.
     * @param expectedText - The expected exact text of the attribute value.
     * @param attributeValue - The attribute to get the value from.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static async getAttributeAndVerifyExactText(elementPath, expectedText, attributeValue, waitTimeOut = ETimeout.TIMEOUT_S) {
        await elementPath.waitForDisplayed({ timeout: waitTimeOut });
        await expect(await (await elementPath).getAttribute(attributeValue)).toEqual(expectedText);
    }
    /**
     * Verify the attribute and value of an element.
     * @param elementPath - The element to verify.
     * @param elementAttribute - The attribute to verify.
     * @param expectedValue - The expected value of the attribute.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static async verifyElementAttributeAndValue(elementPath, elementAttribute, expectedValue, waitTimeOut = ETimeout.TIMEOUT_S) {
        await elementPath.waitForDisplayed({ timeout: waitTimeOut });
        await expect(elementPath).toHaveAttributeContaining(elementAttribute, expectedValue);
    }
    /**
     * Get the boolean value indicating whether an element is displayed.
     * @param elementPath - The element to check.
     * @returns The boolean value indicating whether the element is displayed.
     */
    static async booleanElementIsDisplayed(elementPath) {
        const booleanIsDisplayed = await (await elementPath).isDisplayed();
        return booleanIsDisplayed;
    }
    /**
     * Pause on a specific element.
     * @param elementPath - The element to pause on.
     * @param waitTimeOut - The timeout for pausing (default: ETimeout.TIMEOUT_XXS).
     */
    static async pauseOnElement(elementPath, waitTimeOut = ETimeout.TIMEOUT_XXS) {
        const timeout = +waitTimeOut.toString();
        await (await elementPath).pause(timeout);
    }
    /**
     * Generate a random email address.
     * @returns The generated random email address.
     */
    static async randomEmailGenerator() {
        const cInstance = new Chance();
        const customerEmail = cInstance.email({ domain: 'yopmail.com' });
        console.log(`randomEmail = ${customerEmail}`);
        return customerEmail;
    }
    /**
     * Generate a random numbers of given length.
     * @returns The generated random numbers of given length.
     */
    static async randomNumberGenerator(length = 10) {
        const min = 10 ** (length - 1);
        const max = 10 ** length - 1;
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(`randomNumbers = ${random}`);
        return random;
    }
    /**
     * Wait until the picker is shown or hidden.
     * @param isShown - Indicates whether the picker should be shown (default: true).
     */
    static async waitForIsShown(isShown = true) {
        const selector = driver.isIOS
            ? SELECTORS.IOS_PICKERWHEEL
            : SELECTORS.ANDROID_LISTVIEW;
        await $(selector).waitForExist({
            timeout: 11000,
            reverse: !isShown,
        });
    }
    /**
     * Select a value from the picker.
     * @param value - The value to select.
     */
    static async selectValue(value) {
        await EcommAppElementActions.waitForIsShown(true);
        if (driver.isIOS) {
            await EcommAppElementActions.setIOSValue(value);
        }
        else {
            await EcommAppElementActions.setAndroidValue(value);
        }
        await EcommAppElementActions.waitForIsShown(false);
    }
    /**
     * Set the value for Android.
     * @param value - The value to set.
     */
    static async setAndroidValue(value) {
        await $(`${SELECTORS.ANDROID_LISTVIEW}/*[@text='${value}']`).click();
    }
    /**
     * Set the value for IOS.
     * @param value - The value to set.
     */
    static async setIOSValue(value) {
        await $(SELECTORS.IOS_PICKERWHEEL).addValue(value);
        await $(SELECTORS.DONE).click();
    }
}
export default EcommAppElementActions;
