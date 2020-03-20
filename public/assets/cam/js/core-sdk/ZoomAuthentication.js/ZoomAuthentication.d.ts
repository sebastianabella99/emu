import { ZoomCustomization, ZoomOvalCustomization, ZoomCancelButtonCustomization, ZoomFeedbackBarCustomization, ZoomFrameCustomization, ZoomExitAnimationCustomization, ZoomSessionTimerCustomization, ZoomExitAnimationStyle, ZoomCancelButtonLocation, ZoomGuidanceImageCustomization, ZoomOverlayCustomization, ZoomGuidanceCustomization } from "./ZoomCustomization";
import { ZoomLoggingMode } from "./ZoomLogging";
import { ZoomFaceMapProcessor, ZoomFaceMapResultCallback, ZoomSessionStatus, ZoomPreloadResult, ZoomIDScanStatus, ZoomIDScanProcessor, ZoomIDScanResultCallback, ZoomSDKStatus, ZoomIDScanRetryMode, ZoomIDScanResult, ZoomSessionResult } from "./ZoomPublicApi";
import { ZoomManagedSession, ZoomManagedSessionStatus, ZoomManagedSessionMode, ZoomManagedSessionStatusSubCode, getFriendlyDescriptionForZoomManagedSessionStatusSubCode } from "./ZoomManagedSession";
// import { ZoomSession } from "./ZoomSession/ZoomSession";
import "./ZoomInterface/css/zoom-style.css";
export { ZoomFaceMapProcessor, ZoomFaceMapResultCallback, ZoomSessionResult };
export { ZoomIDScanStatus, ZoomIDScanProcessor, ZoomIDScanResult, ZoomIDScanResultCallback, ZoomIDScanRetryMode };
export { ZoomManagedSessionMode, ZoomManagedSessionStatus, ZoomManagedSessionStatusSubCode, ZoomManagedSession };
export declare enum ZoomAuditTrailType {
    Disabled = 0,
    FullResolution = 1
}
export declare var ZoomSDK: {
    /**
      * Initialize ZoomSDK using a Device SDK License - HTTPS Log mode
    **/
    initialize: (licenseKeyIdentifier: string, onInitializationComplete: (result: boolean) => void, preloadZoomSDK?: boolean | undefined) => void;
    /**
      * Initialize ZoomSDK using a Device SDK License - SFTP Log mode
    **/
    initializeWithLicense: (licenseText: string, licenseKeyIdentifier: string, callback: (result: boolean) => void) => void;
    /**
      * Preload the ZoomSDK Engine before attempting to start a ZoOm Session
    **/
    preload: (onPreloadComplete: (status: ZoomPreloadResult) => void) => void;
    /**
    * Return ZoOm Enums associated with ZoomSDK.ZoomPreloadResult
    **/
    ZoomPreloadResult: typeof ZoomPreloadResult;
    /**
    * Return friendly names for the enums in Preload Result
    **/
    getFriendlyDescriptionForZoomPreloadResult: (enumValue: ZoomPreloadResult) => string;
    /**
      * Ensure that the ZoomSDK is initialized and ready before attempting to start a ZoOm Session
    **/
    getStatus: () => ZoomSDKStatus;
    /**
      * Return ZoOm Enums associated with ZoomSDK.getStatus
    **/
    ZoomSDKStatus: typeof ZoomSDKStatus;
    /**
    * Return friendly names for the enums in ZoomSDKStatus
    **/
    getFriendlyDescriptionForZoomSDKStatus: (enumValue: ZoomSDKStatus) => string;
    /**
     * Set the encryption key to be used for ZoOm Server faceMaps.
     * faceMapEncryptionKey is a public RSA key to be used in PEM format.
     * Returns false if the key is known to be invalid.
     *
     * Must be called before ZoomSDK.initialize or ZoomSDK.initializeWithLicense.
     * If calling preload directly (advanced usage), must be called before that.
     *
    **/
    setFaceMapEncryptionKey: (faceMapEncryptionKey: string) => boolean;
    /**
      * Core function calls that create and launch the ZoOm Interface
    **/
    // ZoomSession: typeof ZoomSession;
    /**
      * Core function calls that create and launch the ZoOm Managed Interface
    **/
    ZoomManagedSession: typeof ZoomManagedSession;
    /**
      * Developer created class for handling processing of the ZoOm FaceMap.
    **/
    ZoomFaceMapProcessor: typeof ZoomFaceMapProcessor;
    /**
      * Developer created class for handling processing of the ZoOm ID Scan.
    **/
    ZoomIDScanProcessor: typeof ZoomIDScanProcessor;
    /**
      * Zoom Logging Mode API
    **/
    ZoomLoggingMode: typeof ZoomLoggingMode;
    /**
      * The ZoOm Session status from the session that was just performed.
    **/
    ZoomSessionStatus: typeof ZoomSessionStatus;
    /**
      * The ZoOm Managed Session status result
    **/
    ZoomManagedSessionStatusSubCode: typeof ZoomManagedSessionStatusSubCode;
    /**
      * Return Friendly names for the enums ZoomManagedSessionStatusSubCode
    **/
    getFriendlyDescriptionForZoomManagedSessionStatusSubCode: typeof getFriendlyDescriptionForZoomManagedSessionStatusSubCode;
    /**
      * The ZoOm Managed Session Status from the latest ZoOm Session
    **/
    ZoomManagedSessionStatus: typeof ZoomManagedSessionStatus;
    /**
      * Valid Request Types - Liveness/Authentication/Enrollment
    **/
    ZoomManagedSessionMode: typeof ZoomManagedSessionMode;
    /**
      * The ZoOm ID Scan status from the ID Scan that was just performed.
    **/
    ZoomIDScanStatus: typeof ZoomIDScanStatus;
    /**
      * ZoomIDSCan retry front, back or both
    **/
    ZoomIDScanRetryMode: typeof ZoomIDScanRetryMode;
    /**
      * An object of this type is passed back to the developer inside of ZoomFaceMapProcessor.processZoomSessionResultWhileZoomWaits
      * in order to control the ZoOm UX flow based on the result of the processing of the ZoOm 3D FaceMap.
    **/
    ZoomFaceMapResultCallback: typeof ZoomFaceMapResultCallback;
    /**
      * An object of this type is passed back to the developer inside of ZoomIDScanProcessor.processZoomSessionResultWhileZoomWaits
      * in order to control the ZoOm UX flow based on the result of the processing of the ZoOm 3D FaceMap.
    **/
    ZoomIDScanResultCallback: typeof ZoomIDScanResultCallback;
    /**
     * Return friendly names for the enums in ZoomSessionStatus
    **/
    getFriendlyDescriptionForZoomSessionStatus: (enumValue: ZoomSessionStatus) => string;
    /**
     * Return the ZoomSDK customization object
     **/
    ZoomCustomization: typeof ZoomCustomization;
    /**
      * Return the ZoomSDK oval customization object
    **/
    ZoomOvalCustomization: typeof ZoomOvalCustomization;
    /**
      * Return the ZoomSDK cancel button customization object
    **/
    ZoomCancelButtonCustomization: typeof ZoomCancelButtonCustomization;
    /**
      * Return the ZoomSDK exit animation customization object
    **/
    ZoomExitAnimationCustomization: typeof ZoomExitAnimationCustomization;
    /**
      * Return the ZoomSDK feedback customization object
    **/
    ZoomFeedbackBarCustomization: typeof ZoomFeedbackBarCustomization;
    /**
      * Return the ZoomSDK frame customization object
    **/
    ZoomFrameCustomization: typeof ZoomFrameCustomization;
    /**
     * Return the ZoomSDK session timer customization object
   **/
    ZoomSessionTimerCustomization: typeof ZoomSessionTimerCustomization;
    /**
      * Return the ZoomSDK Image customization object
    **/
    ZoomGuidanceImageCustomization: typeof ZoomGuidanceImageCustomization;
    /**
      * Return the ZoomSDK Interface customization object
    **/
    ZoomOverlayCustomization: typeof ZoomOverlayCustomization;
    /**
      * Return the ZoomSDK Guidance customization object
    **/
    ZoomGuidanceCustomization: typeof ZoomGuidanceCustomization;
    /**
      * Apply the specified customization parameters for ZoOm
    **/
    setCustomization: (customizationOrSecurityChangeOperation: ZoomCustomization) => void;
    /**
      * Return the available ZoomSDK exit animation styles
    **/
    ZoomExitAnimationStyle: typeof ZoomExitAnimationStyle;
    /**
      * Return the available ZoomSDK cancel button locations
    **/
    ZoomCancelButtonLocation: typeof ZoomCancelButtonLocation;
    /**
     * Convenience method to get the time when a lockout will end.
     * This will be null if the user is not locked out
    */
    getLockoutEndTime: () => number | null;
    /**
    * True if the user is locked out of ZoOm
    **/
    isLockedOut: () => boolean;
    /**
      * Get the available ZoomSDK audit trail types
    **/
    ZoomAuditTrailType: typeof ZoomAuditTrailType;
    /**
     * To be deprecated in a future release - replaced by configureLocalization
    */
    configureLocalizationWithJSON: (localizationJSON: {
        [key: string]: string;
    }) => void;
    /**
     * API to set Zoom Localization Strings with the strings passed in as arguments
    */
    configureLocalization: (localizationJSON: {
        [key: string]: string;
    }) => void;
    /**
      * Set the desired ZoomSDK audit trail behaviour
    **/
    auditTrailType: ZoomAuditTrailType;
    /**
      * Set the desired ZoomSDK time based images behaviour
    **/
    enableTimeBasedSessionImages: boolean;
    /**
      * Unload ZoomSDK and all its resources
    **/
    unload: (callback: () => void) => void;
    /**
    *   Developer API to set logging mode to enumerated ZoomLoggingMode
    *   Default       - Log all important messages to the console.
    *   LocalhostOnly - Remove all logging except for when developing on Localhost
    *   Usage Example - ZoomSDK.setZoomLoggingMode(ZoomSDK.ZoomLoggingMode.LocalhostOnly)
    */
    setZoomLoggingMode: (enumValue: ZoomLoggingMode) => void;
    /**
      * Return the current ZoomSDK version
    **/
    version: () => string;
    /**
      * Change the default location of the ZoomSDK resources to be loaded. Default is "../ZoomAuthentication.js/resources"
    **/
    setResourceDirectory: (directory: string) => void;
    /**
      * Change the default location of the ZoOm images to be loaded. Default is "./zoom_images".
      * Images must all exist in one flat directory in the directory specified.
      * Please see the sample-custom-images-location for a working example of this API in action.
    **/
    setImagesDirectory: (directory: string) => void;
    /**
      * Return information about the current browser and OS related to support for ZoomSDK
    **/
    // getBrowserSupport: () => {
    //     ZoomVersion: string;
    //     supported: boolean;
    //     status: import("./ZoomInfo/ZoomInfo").ZoomCompatibilityStatus;
    //     ZoomCompatibilityStatus: typeof import("../ZoomInfo/ZoomInfo").ZoomCompatibilityStatus;
    //     osName: string;
    //     browserName: string;
    //     isMobileDevice: boolean;
    //     isIosAndNotSafari: boolean;
    //     incompatibleBrowserInformation: import("./ZoomIncompatibleBrowsers").KnownIncompatibleBrowsers;
    // };
    /**
      * Create a Zoom Rest API compatible User Agent string to be used in header element X-User-Agent when using FaceTec's Rest Api Services
    **/
    createZoomAPIUserAgentString: (sessionID: string) => string;
};
