/// <reference types="webdriverio/build/types" />
interface XY {
    x: number;
    y: number;
}
declare class EcommAppGestures {
    /**
     * Check if an element is visible and if not wipe up a portion of the screen to
     * check if it visible after x amount of scrolls
     */
    static checkIfDisplayedWithSwipeUp(element: WebdriverIO.Element, maxScrolls: number, amount?: number): Promise<void>;
    /**
     * Swipe down based on a percentage
     */
    static swipeDown(percentage?: number): Promise<void>;
    /**
     * Swipe Up based on a percentage
     */
    static swipeUp(percentage?: number): Promise<void>;
    /**
     * Swipe left based on a percentage
     */
    static swipeLeft(percentage?: number): Promise<void>;
    /**
     * Click at specific x and y coordinates
     */
    static clickAtLocation(x: number, y: number): Promise<void>;
    /**
     * Swipe an element from coordinates (from) to the new coordinates (to).
     * The given coordinates are percentages of screen.
     */
    static pressElementAndSwipeLeft(elementpath: WebdriverIO.Element): Promise<void>;
    /**
     * Swipe an element from coordinates (from) to the new coordinates (to).
     * The given coordinates are percentages of screen.
     */
    static pressElementAndSwipeRight(elementpath: WebdriverIO.Element): Promise<void>;
    /**
     * Swipe right based on a percentage
     */
    static swipeRight(percentage?: number): Promise<void>;
    /**
     * Swipe from coordinates (from) to the new coordinates (to). The given coordinates are
     * percentages of the screen.
     */
    static swipeOnPercentage(from: XY, to: XY): Promise<void>;
    /**
     * Swipe from coordinates (from) to the new coordinates (to). The given coordinates are in pixels.
     */
    static swipe(from: XY, to: XY): Promise<void>;
    /**
     * Get the screen coordinates based on a device his screen size
     */
    private static getDeviceScreenCoordinates;
    /**
     * Calculate the x y coordinates based on a percentage
     */
    private static calculateXY;
}
export default EcommAppGestures;
