/**
 * Class representing biometric authentication functionality.
 */
declare class Biometrics {
    private get iosAllowBiometry();
    private get allowBiometry();
    private get androidBiometryAlert();
    /**
     * Submit biometric login
     */
    submitBiometricLogin(successful: boolean): Promise<any>;
    /**
     * Submit iOS biometric login
     */
    submitIosBiometricLogin(successful: boolean): Promise<any>;
    /**
     * Allow biometric usage on iOS if it isn't already accepted
     */
    allowIosBiometricUsage(): Promise<void>;
    /**
     * Submit Android biometric login
     */
    submitAndroidBiometricLogin(fingerprintId: number): Promise<void>;
}
declare const _default: Biometrics;
export default _default;
