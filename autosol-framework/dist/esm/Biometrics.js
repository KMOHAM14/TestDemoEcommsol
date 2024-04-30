/* eslint-disable class-methods-use-this */
const DEFAULT_PIN = 1234;
const INCORRECT_PIN = 4321;
/**
 * Class representing biometric authentication functionality.
 */
class Biometrics {
    get iosAllowBiometry() {
        return $('~Don’t Allow');
    }
    get allowBiometry() {
        return $('~OK');
    }
    get androidBiometryAlert() {
        const selector = 'android=new UiSelector().textContains("Please log in")';
        return $(selector);
    }
    /**
     * Submit biometric login
     */
    async submitBiometricLogin(successful) {
        // Touch / Face ID needs to be triggered differently on iOS
        if (driver.isIOS) {
            return this.submitIosBiometricLogin(successful);
        }
        return this.submitAndroidBiometricLogin(successful ? DEFAULT_PIN : INCORRECT_PIN);
    }
    /**
     * Submit iOS biometric login
     */
    async submitIosBiometricLogin(successful) {
        await this.allowIosBiometricUsage();
        return driver.touchId(successful);
    }
    /**
     * Allow biometric usage on iOS if it isn't already accepted
     */
    async allowIosBiometricUsage() {
        // When Touch/FaceID is used for the first time it could be that an alert is shown which needs to be accepted
        try {
            await this.iosAllowBiometry.waitForDisplayed({ timeout: 3000 });
            await this.allowBiometry.click();
        }
        catch (e) {
            // This means that allow using touch/facID has already been accepted and thus the alert is not shown
        }
    }
    /**
     * Submit Android biometric login
     */
    async submitAndroidBiometricLogin(fingerprintId) {
        await this.androidBiometryAlert.waitForDisplayed();
        await driver.fingerPrint(fingerprintId);
    }
}
export default new Biometrics();
