export declare enum ZoomExitAnimationStyle {
    None = 0,
    RippleOut = 1,
    FadeOutMin = 2
}
export declare enum ZoomCancelButtonLocation {
    Disabled = 0,
    TopLeft = 1,
    TopRight = 2
}
export interface FeedbackCustomization {
    backgroundColor: string;
    textFont: string;
    textColor: string;
}
export interface InitialLoadingAnimationCustomization {
    element: HTMLElement;
}
export interface FrameCustomization {
    backgroundColor: string;
}
export interface CancelButtonCustomization {
    location: ZoomCancelButtonLocation;
    customImage: string;
}
export interface ExitAnimationCustomization {
    exitAnimationSuccess: number;
    exitAnimationUnsuccess: number;
}
export interface SessionTimerCustomization {
    maxTimeOverall: number;
    maxTimeToDetectFirstFace: number;
    maxTimeToDetectFirstFaceInPhaseTwo: number;
}
export interface GuidanceImageCustomization {
    idealZoomImage: string;
    badLightingImage: string;
    goodLightingImage: string;
    badAnglePhoneImage: string;
    goodAnglePhoneImage: string;
    badAngleWebcamImage: string;
    goodAngleWebcamImage: string;
    introScreenBrandingImage: string;
    cameraPermissionsScreenImage: string;
    lockoutScreenLockedImage: string;
    lockoutScreenUnlockedImage: string;
}
export interface GuidanceCustomization {
    buttonFont: string;
    buttonBorderWidth: string;
    buttonBorderColor: string;
    buttonCornerRadius: string;
    buttonTextNormalColor: string;
    buttonTextHighlightColor: string;
    buttonBackgroundNormalColor: string;
    buttonBackgroundHighlightColor: string;
    imageCustomization: ZoomGuidanceImageCustomization;
    headerFont: string;
    subtextFont: string;
    backgroundColors: string;
    foregroundColor: string;
    readyScreenTextBackgroundColor: string;
    readyScreenTextBackgroundCornerRadius: string;
    showIntroScreenBrandingImage: boolean;
}
export interface OverlayCustomization {
    backgroundColor: string;
    foregroundColor: string;
    foregroundColorReverse: string;
    blurEffectStyle: string;
    brandingImage: string;
    brandingImageReverse: string;
    brightenScreenButtonImage: string;
    darkenScreenButtonImage: string;
}
export interface ResultScreenCustomization {
    backgroundColors: string;
    foregroundColor: string;
    resultAnimationBackgroundColor: string;
    resultAnimationForegroundColor: string;
    messageFont: string;
    successMessage: string;
    activityIndicatorColor: string;
    uploadProgressFillColor: string;
    uploadProgressTrackColor: string;
}
/**
 * Class used to customize the look and feel of the ZoOm Interface.
 * ZoOm ships with a default ZoOm theme but has a variety of variables that you can use to configure ZoOm to your application's needs.
 * To customize the ZoOm Interface, simply create an instance of ZoomCustomization and set some, or all, of the variables.
 */
export declare class ZoomCustomization {
    /** Customize the ZoOm Oval and the ZoOm Progress Spinner animations. */
    ovalCustomization: ZoomOvalCustomization;
    /**  Customize the ZoOm Feedback Bar. */
    feedbackCustomization: ZoomFeedbackBarCustomization;
    /** Customize the ZoOm Frame. */
    frameCustomization: ZoomFrameCustomization;
    /** Customize the ZoOm Frame exit animation. */
    exitAnimationCustomization: ZoomExitAnimationCustomization;
    /** Customize the ZoOm Cancel Button. */
    cancelButtonCustomization: ZoomCancelButtonCustomization;
    /** Customize the time after which the ZoOm Session should timeout. */
    sessionTimerCustomization: ZoomSessionTimerCustomization;
    /** TO BE DEPRECATED - this is now in guidanceCustomization. */
    guidanceImageCustomization: ZoomGuidanceImageCustomization;
    /** Customize the loading Spinner and the text shown to the user while the camera loads. */
    initialLoadingAnimationCustomization: ZoomInitialLoadingAnimationCustomization;
    /** Customize the New User Guidance and Retry Screens. */
    guidanceCustomization: ZoomGuidanceCustomization;
    /** Customize the ZoOm Overlay, separating the ZoOm Interface from the presenting application context. */
    overlayCustomization: ZoomOverlayCustomization;
    /** Customize the Result Screen. */
    resultScreenCustomization: ZoomResultScreenCustomization;
    /** Customize the ZoOm Identity Check Screens. */
    idScanCustomization: ZoomIDScanCustomization;
    /** Allow low-light mode, which changes the ZoOm Oval colors to a 'white-theme' when a low-light environment is detected. */
    enableLowLightMode: boolean;
    /** Show Side By Side Retry screen. */
    showRetrySideBySide: boolean;
    /** Show Retry Lighting Instructions Screen. */
    showRetryLighting: boolean;
    /** Show Retry Angle Instructions Screen. */
    showRetryAngle: boolean;
    /** Show New User Guidance Angle Instructions Screen for mobile browser. */
    showNewUserGuidanceAngle: boolean;
    /** Show Get Ready To Zoom Screen. */
    showGetReadyToZoomOval: boolean;
    /** Show New User Guidance Webcam Instructions Screen for desktop. */
    showNewUserGuidanceWebCam: boolean;
    /**
     * This function allows special runtime control of the success message shown when the success animation occurs.
     * Please note that you can also customize this string via the standard customization/localization methods provided by ZoOm.
     * Special runtime access is enabled to this text because the developer may wish to change this text depending on ZoOm's mode of operation.
     * Default is "Success"
     */
    static setOverrideResultScreenSuccessMessage: (message: string) => void;
    /**
     * Constructor for ZoomCustomization object.
     *
     * @param keyValuePairs - ZoOm Feature Flag key-value pairs for restricted customization access.
     */
    constructor(keyValuePairs?: {
        key: string;
    }[]);
    [key: string]: {
        key: string;
    }[] | boolean | ZoomIDScanCustomization | ZoomOvalCustomization | ZoomFeedbackBarCustomization | ZoomFrameCustomization | ZoomExitAnimationCustomization | ZoomCancelButtonCustomization | ZoomSessionTimerCustomization | ZoomGuidanceImageCustomization | ZoomInitialLoadingAnimationCustomization | ZoomGuidanceCustomization | ZoomOverlayCustomization | ZoomResultScreenCustomization | string;
}
/**
 * Customize the time after which the ZoOm Session should timeout.
 */
export declare class ZoomSessionTimerCustomization implements SessionTimerCustomization {
    maxTimeOverall: number;
    maxTimeToDetectFirstFace: number;
    maxTimeToDetectFirstFaceInPhaseTwo: number;
    maxTimeBeforeCameraPermissionsError: number;
    /** Constructor for ZoomSessionTimerCustomization object. */
    constructor();
}
/**
 * Customize the ZoOm Frame exit animation.
 */
export declare class ZoomExitAnimationCustomization implements ExitAnimationCustomization {
    /** Customize the transition out animation for a successful ZoOm Session. */
    exitAnimationSuccess: ZoomExitAnimationStyle;
    /** Customize the transition out animation for an unsuccessful ZoOm Session. */
    exitAnimationUnsuccess: ZoomExitAnimationStyle;
    /** Constructor for ZoomExitAnimationCustomization object. */
    constructor();
}
/**
 * Customize the ZoOm Oval and the ZoOm Progress Spinner animations.
 */
export declare class ZoomOvalCustomization {
    /**
    * Color of the ZoOm Oval outline.
    * Default is white.
    */
    strokeColor: string;
    /**
     * Color of the animated ZoOm Progress Spinner strokes.
     * Default is custom ZoOm color.
     */
    progressColor1: string;
    progressColor2: string;
    /**
     * Thickness of the animated ZoOm Progress Spinner strokes.
     * Default is dynamically configured per device at runtime.
     */
    progressStrokeWidth: number;
    /**
     * Thickness of the ZoOm Oval outline.
     * Default is dynamically configured per device at runtime.
     */
    strokeWidth: number;
    /** Constructor for ZoomOvalCustomization object. */
    constructor();
}
/**
 * Customize the ZoOm Frame.
 * .sizeRatio has yet to be implemented for browser.
 * .sizeRatio and .topMargin are not available in the default SDK because they are frequently misconfigured by developers.
 */
export declare class ZoomFrameCustomization implements FrameCustomization {
    /**
     * Color of the ZoOm Frame's border.
     * Default is white.
     */
    borderColor: string;
    /**
     * Corner radius of the ZoOm Frame.
     * Default is dynamically configured per device at runtime.
     */
    borderCornerRadius: string;
    /**
     * Thickness of the ZoOm Frame's border.
     * Default is dynamically configured per device at runtime.
     */
    borderWidth: string;
    /**
     * Color of the background surrounding the oval outline during ZoOm.
     * Default is custom ZoOm color.
     */
    backgroundColor: string;
    /**
     * Applies a blur effect over the background surrounding the oval outline during ZoOm.
     * Default is off.
     */
    blurEffectStyle: string;
    topMargin: string;
    /**
     * Size ratio of the ZoOm Frame's width relative to the width the the current device's display.
     * This is not currently implemented for browser.
     */
    sizeRatio: string;
    /**
     * Control behavior of the ZoOm Frame when .sizeRatio is set to 1.0.
     * This is not currently implemnted for browser.
     */
    fullScreenBehavior: string;
    /** Constructor for ZoomFrameCustomization object. */
    constructor();
}
/**
 * Customize the ZoOm Cancel Button.
 * Shown during ZoOm, New User Guidance, Retry, and Identity Check Screens.
 */
export declare class ZoomCancelButtonCustomization implements CancelButtonCustomization {
    /**
     * Location, or use, of the ZoOm Cancel Button.
     * Default is ZoomCancelButtonLocation.TopLeft.
     */
    location: ZoomCancelButtonLocation;
    /**
     * Image displayed on the ZoOm Cancel Button.
     * Default is configured to use image named 'zoom_cancel' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    customImage: string;
    /** Constructor for ZoomCancelButtonCustomization object. */
    constructor();
}
/**
 * Customize the ZoOm Feedback Bar.
 * .size is yet to be implemented on browser but will be available soon.
 * .size and .topMargin are not available in the default SDK because they are frequently misconfigured by developers.
 */
export declare class ZoomFeedbackBarCustomization implements FeedbackCustomization {
    /**
     * Color of the ZoOm Feedback Bar's background. Recommend making this have some transparency.
     * Default is custom ZoOm gradient.
     */
    backgroundColor: string;
    /**
     * Color of the text displayed within the ZoOm Feedback Bar.
     * Default is white.
     */
    textColor: string;
    /**
     * Font of the text displayed within the ZoOm Feedback Bar.
     */
    textFont: string;
    /**
     * Corner radius of the ZoOm Feedback Bar.
     * Default is dynamically configured per device at runtime.
     */
    cornerRadius: string;
    /**
     * Shadow displayed behind the ZoOm Feedback Bar.
     * Default is a custom sized black shadow.
     */
    shadow: string;
    /**
     * Control whether to enable the pulsating-text animation within the ZoOm Feedback Bar.
     * Default is true (enabled).
     */
    enablePulsatingText: boolean;
    /**
     * Vertical spacing of the Feedback Bar from the top boundary of the ZoOm Frame, which is relative to the current .sizeRatio of the ZoOm Frame.
     * Default is dynamically configured per device at runtime.
     */
    topMargin: string;
    /** Constructor for ZoomFeedbackBarCustomization object. */
    constructor();
}
/**
 * Customize the loading Spinner and the text shown to the user while the camera loads.
 */
export declare class ZoomInitialLoadingAnimationCustomization implements InitialLoadingAnimationCustomization {
    /**
     * HTMLElement displayed while camera is loading.
     * Default is a custom animated loading spinner and text.
     */
    element: HTMLElement;
    /** Constructor for ZoomInitialLoadingAnimationCustomization object. */
    constructor();
}
/**
 * Customize the images used for the New User Guidance and Retry Screens.
 */
export declare class ZoomGuidanceImageCustomization implements GuidanceImageCustomization {
    private defaultLocationForImages;
    /**
     * Image displayed as Ideal ZoOm example (right image) during the first Retry Screen.
     * Default is configured to use image named 'zoom_ideal' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    idealZoomImage: string;
    /**
     * Image displayed on the Lighting Instructions Slide (bottom image). shown on the second Retry Screen.
     * Default is configured to use image named 'zoom_bad_side_lighting' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    badLightingImage: string;
    /**
     * Image displayed on the Lighting Instructions Slide (top image), shown on the second Retry Screen.
     * Default is configured to use image named 'zoom_good_lighting' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    goodLightingImage: string;
    /**
     * Image displayed on the Face Angle Instructions Slide (bottom image), shown on the first New User Guidance Screen and the third Retry Screen.
     * This only applies to mobile browsers.
     * Default is configured to use image named 'zoom_bad_face_angle' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    badAnglePhoneImage: string;
    /**
     * Image displayed on the Face Angle Instructions Slide (top image), shown on the first New User Guidance Screen and the third Retry Screen.
     * This only applies to mobile browsers.
     * Default is configured to use image named 'zoom_good_face_angle' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    goodAnglePhoneImage: string;
    /**
     * Image displayed on the Face Angle Instructions Slide (bottom image), shown on the first New User Guidance Screen and the third Retry Screen.
     * This only applies to desktop browsers.
     * Default is configured to use image named 'zoom_bad_webcam_angle' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    badAngleWebcamImage: string;
    /**
     * Image displayed on the Face Angle Instructions Slide (top image), shown on the first New User Guidance Screen and the third Retry Screen.
     * This only applies to desktop browsers.
     * Default is configured to use image named 'zoom_good_webcam_angle' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    goodAngleWebcamImage: string;
    /**
     * Image displayed on the first New User Guidance Screen.
     * Default is configured to use image named 'zoom_branding' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    introScreenBrandingImage: string;
    /**
     * Image displayed on the Camera Permissions Screen.
     * Default is configured to use image named 'zoom_camera' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    cameraPermissionsScreenImage: string;
    /**
     * Image displayed on the Lockout Screen while user is locked out of ZoOm.
     * Default is configured to use image named 'zoom_locked' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    lockoutScreenLockedImage: string;
    /**
     * Image displayed on the Lockout Screen when user's lockout time expires.
     * Default is configured to use image named 'zoom_unlocked' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    lockoutScreenUnlockedImage: string;
    /**
     * Image displayed on the Skip Guidance Button, shown during the Retry Screens.
     * Default is configured to use image named 'zoom_skip_guidance' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    retryScreenSkipArrow: string;
    /**
     * Constructor for ZoomGuidanceImageCustomization object
     *
     * @param directoryForImageFiles - specify a custom directory to search for default image path names
     */
    constructor(directoryForImageFiles?: string);
}
/**
 * Customize the New User Guidance and Retry Screens.
 * New User Guidance Screens are shown before the ZoOm Session and Retry Screens are shown after an unsuccessful ZoOm Session.
 */
export declare class ZoomGuidanceCustomization implements GuidanceCustomization {
    /**
     * Thickness of the action button's border during the New User Guidance and Retry Screens.
     * Default is dynamically configured per device at runtime.
     */
    buttonBorderWidth: string;
    /**
     * Color of the action button's border during the New User Guidance and Retry Screens.
     * Default is white.
     */
    buttonBorderColor: string;
    /**
     * Corner radius of the action button's border during the New User Guidance and Retry Screens.
     * Default is dynamically configured per device at runtime.
     */
    buttonCornerRadius: string;
    /**
     * Color of the action button's text during the New User Guidance and Retry Screens.
     * Default is white.
     */
    buttonTextNormalColor: string;
    /**
     * Color of the action button's text when the button is pressed during the New User Guidance and Retry Screens.
     * Default is custom ZoOm color.
     */
    buttonTextHighlightColor: string;
    /**
     * Color of the action button's background during the New User Guidance and Retry Screens.
     * Default is transparent.
     */
    buttonBackgroundNormalColor: string;
    /**
     * Color of the action button's background when the button is pressed during the New User Guidance and Retry Screens.
     * Default is white.
     */
    buttonBackgroundHighlightColor: string;
    /**
     * Font of the title's subtext during the New User Guidance and Retry Screens.
     */
    headerFont: string;
    /**
     * Font of the title's subtext during the New User Guidance and Retry Screens.
     */
    subtextFont: string;
    /**
   * Font of the title's subtext during the New User Guidance and Retry Screens.
   * Default is a bold system font.
   */
    buttonFont: string;
    /**
     * Color of the background for the New User Guidance and Retry Screens.
     * Default is custom ZoOm gradient.
     */
    backgroundColors: string;
    /**
     * Color of the text displayed on the New User Guidance and Retry Screens (not including the action button text).
     * Default is white.
     */
    foregroundColor: string;
    /**
     * Background color of the Get Ready To ZoOm Screen text views during the New User Guidance and Retry Screens.
     * This will only be visible when text is detected as overlapping or too close with the Ready screen oval.
     * Default is a semi-opaque shade of black.
     */
    readyScreenTextBackgroundColor: string;
    /**
     * Background corner radius of the Get Ready To ZoOm Screen text views during the New User Guidance and Retry Screens.
     * This will only be visible when text is detected as overlapping or too close with the Get Ready To ZoOm Screen's oval.
     * Default is dynamically configured per device at runtime.
     */
    readyScreenTextBackgroundCornerRadius: string;
    /**
     * Controls whether to show the 'zoom_branding_logo' image (or image configured with .imageCustomization.introScreenBrandingImage) on the first New User Guidance Screen.
     * Default is false (hidden).
     */
    showIntroScreenBrandingImage: boolean;
    /** Customize the images used for the New User Guidance and Retry Screens. */
    imageCustomization: ZoomGuidanceImageCustomization;
    /** Constructor for ZoomGuidanceCustomization object. */
    constructor();
}
/**
 * Customize the ZoOm Overlay.
 * The ZoOm Overlay separates the ZoOm Interface from the presenting application, covering the device's full screen.
 */
export declare class ZoomOverlayCustomization implements OverlayCustomization {
    private defaultLocationForImages;
    /**
     * Color of the ZoOm Overlay background.
     * Default is black.
     */
    backgroundColor: string;
    /**
     * Color of the text shown on ZoOm Overlay.
     * This includes the Low Light Mode Toggle's text color, which only applies to desktop browsers.
     * Default is white.
     */
    foregroundColor: string;
    /**
     * Color of the text shown on ZoOm Overlay with Low Light Mode active.
     * This includes the Low Light Mode Toggle's text color, which only applies to desktop browsers.
     * Default is custom ZoOm color.
     */
    foregroundColorReverse: string;
    /**
     * Applies a blur effect over the background of the ZoOm Overlay.
     * Default is off.
     */
    blurEffectStyle: string;
    /**
     * Image displayed below the ZoOm Frame on top of the ZoOm Overlay.
     * Default is configured to use image named 'zoom_your_app_logo' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    brandingImage: string;
    /**
     * Image displayed below the ZoOm Frame on top of the ZoOm Overlay with Low Light Mode active.
     * Default is configured to use image named 'zoom_your_app_logo_reverse' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    brandingImageReverse: string;
    /**
     * Image used for the Low Light Mode Toggle when Low Light Mode is inactive, displayed below the right side of the ZoOm Frame.
     * Default is configured to use image named 'zoom_light_brighten_screen' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    brightenScreenButtonImage: string;
    /**
     * Image used for the Low Light Mode Toggle when Low Light Mode is active, displayed below the right side of the ZoOm Frame.
     * Default is configured to use image named 'zoom_light_darken_screen' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    darkenScreenButtonImage: string;
    /** Constructor for ZoomOverlayCustomization object. */
    constructor();
}
/**
 * Customize the Result Screen.
 * Shown for server-side work and response handling.
 */
export declare class ZoomResultScreenCustomization implements ResultScreenCustomization {
    /**
     * Color of the Result Screen's background.
     * Default is custom ZoOm gradient.
     */
    backgroundColors: string;
    /**
     * Color of the text displayed on the Result Screen.
     * Default is white.
     */
    foregroundColor: string;
    /**
     * Color of the result animation's background.
     * Default is white.
     */
    resultAnimationBackgroundColor: string;
    /**
     * Color of the result animation's accent color.
     * Default is custom ZoOm color.
     */
    resultAnimationForegroundColor: string;
    /**
     * Font of the message text displayed on the Result Screen.
     */
    messageFont: string;
    successMessage: string;
    /**
     * Color of the activity indicator animation shown during server-side work.
     * Default is white.
     */
    activityIndicatorColor: string;
    /**
     * Color of the upload progress bar's fill.
     * Default is white.
     */
    uploadProgressFillColor: string;
    /**
     * Color of upload progress bar's track.
     * Default is a semi-opaque shade of black.
     */
    uploadProgressTrackColor: string;
    /** Constructor for ZoomResultScreenCustomization object. */
    constructor();
}
/**
 * Customize the ZoOm Identity Check Screens.
 */
export declare class ZoomIDScanCustomization {
    private defaultLocationForImages;
    showSelectionScreenBrandingImage: boolean;
    /**
     * Color of the text displayed on the Identity Document Type Selection Screen (not including the action button text).
     * Default is white.
     */
    selectionScreenForegroundColor: string;
    /**
     * Font of the title during the Identity Document Type Selection Screen.
     */
    headerFont: string;
    /**
     * Font of the message text during the Identity Document Capture and Review Screens.
     */
    subtextFont: string;
    /**
     * Font of the action button's text during the Identity Check Screens.
     */
    buttonFont: string;
    /**
     * Thickness of the action button's border during Identity Check Screens.
     * Default is dynamically configured per device at runtime.
     */
    buttonBorderWidth: string;
    /**
     * Color of the action button's border during Identity Check Screens.
     * Default is white.
     */
    buttonBorderColor: string;
    /**
     * Color of the action button's border during Identity Check Screens with Low Light Mode active.
     * This only applies to desktop browsers.
     * Default is custom ZoOm color.
     */
    buttonBorderColorReverse: string;
    /**
     * Corner radius of the action button's border during Identity Check Screens.
     * Default is dynamically configured per device at runtime.
     */
    buttonCornerRadius: string;
    /**
     * Color of the action button's text during Identity Check Screens.
     * Default is white.
     */
    buttonTextNormalColor: string;
    /**
     * Color of the action button's text during Identity Check Screens with Low Light Mode active.
     * This only applies to desktop browsers.
     * Default is custom ZoOm color.
     */
    buttonTextNormalColorReverse: string;
    /**
     * Color of the action button's text when the button is pressed during Identity Check Screens.
     * Default is custom ZoOm color.
     */
    buttonTextHighlightColor: string;
    /**
     * Color of the action button's text when the button is pressed during Identity Check Screens with Low Light Mode active.
     * This only applies to desktop browsers.
     * Default is white.
     */
    buttonTextHighlightColorReverse: string;
    /**
     * Color of the action button's background during Identity Check Screens.
     * Default is transparent.
     */
    buttonBackgroundNormalColor: string;
    /**
     * Color of the action button's background during Identity Check Screens with Low Light Mode active.
     * This only applies to desktop browsers.
     * Default is custom ZoOm color.
     */
    buttonBackgroundNormalColorReverse: string;
    /**
     * Color of the action button's background when the button is pressed during Identity Check Screens.
     * Default is white.
     */
    buttonBackgroundHighlightColor: string;
    /**
     * Color of the action button's background when the button is pressed during Identity Check Screens with Low Light Mode active.
     * This only applies to desktop browsers.
     * Default is custom ZoOm color.
     */
    buttonBackgroundHighlightColorReverse: string;
    /**
     * Color of the Identity Document Type Selection Screen background.
     * Default is custom ZoOm gradient.
     */
    selectionScreenBackgroundColors: string;
    /**
     * Applies a blur effect over the background of the Identity Document Type Selection Screen.
     * Default is off.
     */
    selectionScreenBlurEffectStyle: string;
    /**
     * Image displayed on the Identity Document Type Selection Screen.
     * Default is configured to use image named 'zoom_branding_logo_id_check' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    selectionScreenBrandingImage: string;
    /**
     * Color of the text displayed on the Identity Document Capture Screen (not including the action button text).
     * Default is white.
     */
    captureScreenForegroundColor: string;
    /**
     * Color of the text view background during the Identity Document Capture Screen.
     * Default is a semi-opaque shade of black.
     */
    captureScreenTextBackgroundColor: string;
    /**
     * Color of the text view background border during the Identity Document Capture Screen.
     * Default is transparent.
     */
    captureScreenTextBackgroundBorderColor: string;
    /**
     * Thickness of the text view background border during the Identity Document Capture Screen.
     * Default is 0.
     */
    captureScreenTextBackgroundBorderWidth: string;
    /**
     * Corner radius of the text view background and border during Identity Document Capture Screen.
     * Default is dynamically configured per device at runtime.
     */
    captureScreenTextBackgroundCornerRadius: string;
    captureScreenIDCardFrame640By480Image: string;
    captureScreenIDCardFrame640By360Image: string;
    /**
     * Image displayed on the Identity Document Capture Screen when the Identity Document Type selected is an ID Card.
     * This only applies to desktop browsers.
     * Default is configured to use image named 'zoom_id_card' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    captureScreenIDCardFrameImage: string;
    /**
     * Image displayed on the Identity Document Capture Screen when the Identity Document Type selected is an ID Card.
     * This only applies to mobile browsers.
     * Default is configured to use image named 'zoom_id_card_mobile' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    captureScreenIDCardFrameMobileImage: string;
    captureScreenPassportFrame640By480Image: string;
    captureScreenPassportFrame640By360Image: string;
    /**
     * Image displayed on the Identity Document Capture Screen when the Identity Document Type selected is a Passport.
     * This only applies to desktop browsers.
     * Default is configured to use image named 'zoom_passport' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    captureScreenPassportFrameImage: string;
    /**
     * Image displayed on the Identity Document Capture Screen when the Identity Document Type selected is a Passport.
     * This only applies to mobile browsers.
     * Default is configured to use image named 'zoom_passport_mobile' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    captureScreenPassportFrameMobileImage: string;
    /**
     * Color of the text displayed on the Identity Document Review Screen (not including the action button text).
     * Default is white.
     */
    reviewScreenForegroundColor: string;
    /**
     * Color of the text view background during the Identity Document Review Screen.
     * Default is a semi-opaque shade of black.
     */
    reviewScreenTextBackgroundColor: string;
    /**
     * Color of the text view background border during the Identity Document Review Screen.
     * Default is transparent.
     */
    reviewScreenTextBackgroundBorderColor: string;
    /**
     * Thickness of the text view background border during the Identity Document Review Screen.
     * Default is 0.
     */
    reviewScreenTextBackgroundBorderWidth: string;
    /**
     * Corner radius of the text view background and border during Identity Document Review Screen.
     * Default is dynamically configured per device at runtime.
     */
    reviewScreenTextBackgroundBorderCornerRadius: string;
    /**
     * Corner radius of the ID Document Preview image displayed on the Identity Document Review Screen.
     * Default is dynamically configured per device at runtime.
     */
    reviewScreenDocumentPreviewCornerRadius: string;
    /**
     * Color of the Identity Document Review Screen background.
     * Default is custom ZoOm gradient.
     */
    reviewScreenBackgroundColors: string;
    /**
     * Applies a blur effect over the background of the Identity Document Review Screen.
     * Default is off.
     */
    reviewScreenBlurEffectStyle: string;
    /**
     * Image displayed below the ZoOm Frame during Identity Check when the Identity Document Type selected is an ID Card.
     * This image acts as a placeholder to show a status of incomplete for capturing the ID Card's front side.
     * This only applies to desktop browsers.
     * Default is configured to use image named 'zoom_id_card_placeholder_front' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    captureScreenIDFrontPlaceHolderImage: string;
    /**
     * Image displayed below the ZoOm Frame during Identity Check when the Identity Document Type selected is an ID Card.
     * This image acts as a placeholder to show a status of incomplete for capturing the ID Card's back side.
     * This only applies to desktop browsers.
     * Default is configured to use image named 'zoom_id_card_placeholder_back' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    captureScreenIDBackPlaceHolderImage: string;
    /**
     * Image displayed below the ZoOm Frame during Identity Check when the Identity Document Type selected is a Passport.
     * This image acts as a placeholder to show a status of incomplete for capturing the Passport.
     * This only applies to desktop browsers.
     * Default is configured to use image named 'zoom_passport_placeholder' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    captureScreenPassportPlaceholderImage: string;
    /**
     * Image displayed below the ZoOm Frame during Identity Check when the Identity Document Type selected is an ID Card.
     * This image acts as a placeholder to show a status of complete for capturing the ID Card's front side.
     * This only applies to desktop browsers.
     * Default is configured to use image named 'zoom_id_front_checkmark' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    captureScreenIDFrontCheckmarkImage: string;
    /**
     * Image displayed below the ZoOm Frame during Identity Check when the Identity Document Type selected is an ID Card.
     * This image acts as a placeholder to show a status of complete for capturing the ID Card's back side.
     * This only applies to desktop browsers.
     * Default is configured to use image named 'zoom_id_back_checkmark' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    captureScreenIDBackCheckmarkImage: string;
    /**
     * Image displayed below the ZoOm Frame during Identity Check when the Identity Document Type selected is a Passport.
     * This image acts as a placeholder to show a status of complete for capturing the Passport.
     * This only applies to desktop browsers.
     * Default is configured to use image named 'zoom_passport_checkmark' located in '/zoom-images/' directory (or custom configured defaul directory for ZoOm images).
     */
    captureScreenPassportCheckmarkImage: string;
    /** Constructor for ZoomIDScanCustomization object. */
    constructor();
    [key: string]: string | boolean;
}
export declare var ZoomCustomizations: {
    overrideResultScreenSuccessMessageObject: {
        message: string;
    };
    getSuccessResultMessageOrOverrideResultScreenSuccessMessage: () => string;
    setCustomization: (updatedCustomization: ZoomCustomization) => void;
    ZoomCustomization: typeof ZoomCustomization;
    currentCustomization: ZoomCustomization;
    noImagesWereCustomized: () => boolean;
    setImagesDirectory: (directory: string) => void;
    ZoomOvalCustomization: typeof ZoomOvalCustomization;
    ZoomCancelButtonCustomization: typeof ZoomCancelButtonCustomization;
    ZoomExitAnimationCustomization: typeof ZoomExitAnimationCustomization;
    ZoomFeedbackBarCustomization: typeof ZoomFeedbackBarCustomization;
    ZoomFrameCustomization: typeof ZoomFrameCustomization;
    ZoomSessionTimerCustomization: typeof ZoomSessionTimerCustomization;
    ZoomImageCustomization: typeof ZoomGuidanceImageCustomization;
    ZoomInitialLoadingAnimationCustomization: typeof ZoomInitialLoadingAnimationCustomization;
    ZoomGuidanceCustomization: typeof ZoomGuidanceCustomization;
    ZoomOverlayCustomization: typeof ZoomOverlayCustomization;
    ZoomExitAnimationStyle: typeof ZoomExitAnimationStyle;
    ZoomCancelButtonLocation: typeof ZoomCancelButtonLocation;
};
