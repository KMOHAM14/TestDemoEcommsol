/* eslint class-methods-use-this: 0 */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Chance } from 'chance';
import { ETimeout } from '../constants';
/**
 * Class representing various actions on elements.
 */
export class EcommWebElementActions {
    /**
     * Navigate to a URL.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static async navigateToUrl(url, waitTimeOut = ETimeout.TIMEOUT_S) {
        await driver.pause(waitTimeOut || ETimeout.TIMEOUT_XXS);
        await browser.url(url);
    }
    /**
     * Maximize the Window
     */
    static async maximizeWindow() {
        await browser.maximizeWindow();
    }
    /**
     * Refresh the Browser
     */
    static async refreshBrowser() {
        await browser.refresh();
    }
    /**
     * Get the URL of the current session
     */
    static async getUrl() {
        const url = await browser.getUrl();
        return url;
    }
    /**
     * Go back in the browser
     */
    static async backBrowser() {
        await browser.back();
    }
    /**
     * Close the browser
     */
    async closeBrowser() {
        await browser.deleteSession();
    }
    /**
     * Get the url of the current page and compare it with the partial expected url.
     * @param expectedPartialUrl - The expected partial URL to compare.
     */
    static async getUrlAndVerifyPartialUrl(expectedPartialUrl) {
        await browser.getUrl();
        await expect(browser).toHaveUrlContaining(expectedPartialUrl);
    }
    /**
     * Click on an element.
     * @param elementPath - The element to click on.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static async clickElement(elementPath, waitTimeOut = ETimeout.TIMEOUT_S) {
        await elementPath.waitForDisplayed({ timeout: waitTimeOut });
        await (await elementPath).waitForClickable({ timeout: waitTimeOut });
        await (await elementPath).click();
    }
    /**
     * Double click on an element.
     * @param elementPath - The element to click on.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static async doubleClickElement(elementPath, waitTimeOut = ETimeout.TIMEOUT_S) {
        await elementPath.waitForDisplayed({ timeout: waitTimeOut });
        await (await elementPath).waitForClickable({ timeout: waitTimeOut });
        await (await elementPath).doubleClick();
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
     * Clear a textbox input in javascript.
     * @param elementPath - The element representing the textbox.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static async clearInputTextJS(elementPath, waitTimeOut = ETimeout.TIMEOUT_S) {
        await elementPath.waitForDisplayed({ timeout: waitTimeOut });
        await (await elementPath).click();
        await browser.keys(['Control', 'a']); // Press "Ctrl + A" to select all text
        await browser.keys('Delete');
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
     * Select value from a dropdown list.
     * @param elementPath - The element representing the textbox.
     * @param attributeName - The attribute name.
     * @param attributeName - The attribute value to select.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_L).
     */
    static async selectFromDropdown(elementPath, attributeName, attributeValue, waitTimeOut = ETimeout.TIMEOUT_S) {
        await elementPath.waitForDisplayed({ timeout: waitTimeOut });
        const dropdown = elementPath;
        await dropdown.selectByAttribute(attributeName, attributeValue);
    }
    /**
     * Select a text felementPath: WebdriverIO.CucumberOpts,rom a dropdown list .
     * @param elementPath - The element representing the textbox.
     * @param attributeName - The attribute name.
     * @param attributeName - The attribute value to select.
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_L).
     */
    static async selectVisibleTextFromDropdown(elementPath, visibleText, waitTimeOut = ETimeout.TIMEOUT_S) {
        await elementPath.waitForDisplayed({ timeout: waitTimeOut });
        (await elementPath).selectByVisibleText(visibleText);
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
     * Compare two exact values.
     * @param expectedText - The expected text.
     * @param actualText - The actual text.
     */
    static async compareTwoValues(expectedText, actualText) {
        await expect(expectedText).toEqual(actualText);
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
     * Compare two partial values.
     * @param expectedText - The expected text.
     * @param actualText - The actual text.
     */
    static async compareTwoPartialValues(expectedText, actualText) {
        await expect(expectedText).toContain(actualText);
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
    // Verify if the large number is greater than the small number.
    async verifyGreaterThan(smallNumber, largeNumber) {
        const smallNum = parseInt(smallNumber, 10);
        const largeNum = parseInt(largeNumber, 10);
        await expect(largeNum).toBeGreaterThan(smallNum);
    }
    // Verify if the large number is greater than or equal to small number.
    async verifyGreaterThanOrEqual(smallNumber, largeNumber) {
        const smallNum = parseInt(smallNumber, 10);
        const largeNum = parseInt(largeNumber, 10);
        await expect(largeNum).toBeGreaterThanOrEqual(smallNum);
    }
    // Verify if the small number is less than the large number.
    async verifyLessThan(smallNumber, largeNumber) {
        const smallNum = parseInt(smallNumber, 10);
        const largeNum = parseInt(largeNumber, 10);
        await expect(smallNum).toBeLessThan(largeNum);
    }
    // Verify if the small number is less than or equal to large number.
    async verifyLessThanOrEqual(smallNumber, largeNumber) {
        const smallNum = parseInt(smallNumber, 10);
        const largeNum = parseInt(largeNumber, 10);
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
     * Get the boolean value indicating whether an element is displayed.
     * @param elementPath - The element to check.
     * @returns The boolean value indicating whether the element is displayed.
     */
    static async booleanElementIsDisplayed(elementPath) {
        const booleanIsDisplayed = await (await elementPath).isDisplayed();
        return booleanIsDisplayed;
    }
    /**
     * Get the boolean value indicating whether an element is selected.
     * @param elementPath - The element to check.
     * @returns The boolean value indicating whether the element is selected.
     */
    static async booleanElementIsSelected(elementPath) {
        const booleanIsSelected = await (await elementPath).isSelected();
        return booleanIsSelected;
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
     * Generate a random email with only numbers of given length.
     * @returns The generated random email generated with numbers of given length.
     */
    static async randomEmailGeneratorNumbersOnly(length = 10) {
        const min = 10 ** (length - 1);
        const max = 10 ** length - 1;
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        const randomEmail = `${random}@yopmail.com`;
        console.log(`randomEMail = ${randomEmail}`);
        return randomEmail;
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
     * Get  css property color of an element and verify exact Hex color.
     * @param elementPath - The element to get the css property color.
     * @param colorHexCode - The expected Hex code to verify
     * @param waitTimeOut - The timeout for element display (default: ETimeout.TIMEOUT_S).
     */
    static async getCSSPropertyColorAndVerifyHexColor(elementPath, colorHexCode, waitTimeOut = ETimeout.TIMEOUT_S) {
        await elementPath.waitForDisplayed({ timeout: waitTimeOut });
        const color = await elementPath.getCSSProperty('color');
        const actualColor = color.parsed.hex.toLowerCase();
        const expectedColor = colorHexCode;
        await expect(expectedColor).toEqual(actualColor);
    }
}
export default EcommWebElementActions;
