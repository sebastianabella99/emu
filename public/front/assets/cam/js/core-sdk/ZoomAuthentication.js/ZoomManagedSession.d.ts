/**
 * ZoOm Managed Session Source Code
 *
 * Developer Note - Although this file is compiled into the ZoOm SDK, it uses only public ZoOm classes and types.
 * The ZoomManagedSession class and associated types, classes, enums, and interfaces are entirely meant to be
 * copied, pasted, and altered by developers during integration of ZoOm into the developer's production application.
 *
 * The ZoomManagedSession demonstrates interacting with the ZoomSession constructor and defining
 * a custom class the implements the ZoomFaceMapProcessor interface.
 *
 * Once your own custom ZoomFaceMapProcessor class is defined, you can pass it into the ZoomSession constructor like:
 *
 * var customerManagedZoomSession = ZoomSession(myZoomFaceMapProcessor)
 *
 * A ZoOm FaceMap Processor defines an interface that the customer implements in order to define the behavior and handling
 * of the ZoOm Session Result (including FaceMap and Audit Images).  The ZoOm FaceMap Processor requires the developer to define
 * a "processZoomSessionResultWhileZoomWaits" function.  As the name implies, this function is where the developer will
 * handle the ZoOm Session Result (most importantly the FaceMap), while the ZoOm interface continues to stay open
 * (displaying a progress experience that nicely and consistently styled across all platforms and devices)
 * and waits for the result of the processing.
 *
 * The ZoomSession constructor also is where you can pass in a ZoomIDScanProcessor if you are doing an Identity Check.
 */
import { ZoomIDScanResult, ZoomSessionResult } from "./ZoomAuthentication";
/**
 * This is the callback back to the ZoomManagedSession caller with the overall status.
 * Developers must implement this and pass into the ZoomManagedSession constructor.
 */
interface OnZoomManagedSessionCompleteCallback {
    (zoomManagedSessionStatus: ZoomManagedSessionStatus): void;
}
/**
 * This returns a simple enum of Success and UnsuccessCheckSubCode.
 * Callers can get more granular information by interrogating the ZoomManagedSession class helper functions.
 */
export declare enum ZoomManagedSessionStatus {
    Success = 0,
    UnsuccessCheckSubCode = 1
}
/**
 * The general scenario or mode of operation for ZoOm.  This controls aspects of the UX,
 * as well as the handling of the result.
 *
 * Developers can alter this to tailor to their own application or not use these modes to control logic if desired.
 */
export declare enum ZoomManagedSessionMode {
    Enroll = 0,
    Authenticate = 1,
    Liveness = 2,
    IdentityCheck = 3
}
/**
 * These are the general "non-nominal" occurrences during a ZoOm Sesion or ZoOm Identity Check.
 *
 * Developers can alter this to tailor to their own application or not use these subcodes if desired.
 */
export declare enum ZoomManagedSessionStatusSubCode {
    CameraError = 0,
    CheckLatestFaceTecAPIResponseString = 1,
    CompletedSuccessfully = 2,
    ContextSwitch = 3,
    CancelCalledFromCustomFaceMapProcessor = 4,
    InternalUnsuccess = 5,
    MissingGuidanceImages = 6,
    InvalidEnrollmentIdentifier = 7,
    InvalidManagedSessionParameters = 8,
    LockedOut = 9,
    NeverStarted = 10,
    NoNetwork = 11,
    PortraitModeRequired = 12,
    Timeout = 13,
    UserCancelled = 14
}
/**
 * The ZoOm Managed Session is a robust demonstration of wrapping the ZoOm Device SDK functionality,
 * handling different modes of operation (Liveness Check, Enrollment, Authentication, Identity Check),
 * a demonstration of how to handle result intermediates like the ZoOm 3D FaceMap, Audit Trail Images, and ID Scans.
 *
 * In a production app, developers MUST create their own implementation of this class.
 *
 * This implementation uses the FaceTec Managed API, but can also be pointed at the
 * developer-deployed ZoOm Server REST SDK instance.
 *
 * As a final step before deploying a production application,
 * IT IS HIGHLY RECOMMENDED that developers close off the ZoOm Server REST SDK endpoints to the outside world
 * and instead proxy calls to the ZoOm Server REST SDK through their own secure web application/servers.
 */
export declare class ZoomManagedSession {
    private deviceLicenseKeyIdentifier;
    private zoomServerBaseURL;
    private mode;
    private enrollmentIdentifier?;
    private latestZoomManagedSessionStatusSubCode;
    private latestZoomSessionResult;
    private latestZoomIDScanResult;
    private latestFaceTecAPIResponseString;
    private onZoomManagedSessionComplete;
    /**
     * Check parameters, store local references, and kick off the ZoomSession!
     */
    constructor(onZoomManagedSessionComplete: OnZoomManagedSessionCompleteCallback, deviceLicenseKeyIdentifier: string, zoomServerBaseURL: string, mode: ZoomManagedSessionMode, enrollmentIdentifier?: string);
    /**
     * Check validity of parameters.  Developers are encouraged to add any extra checks here based on the particulars of their own application.
     */
    private isConstructorParametersValid;
    /**
     * Get the Device License Key Identifier that was set.
     */
    getDeviceLicenseKeyIdentifier(): string;
    /**
     * Get the mode that was set.
     */
    getMode(): ZoomManagedSessionMode;
    /**
     * Get the latest ZoomSessionResult.
     */
    getLatestZoomSessionResult(): ZoomSessionResult;
    /**
     * Set the latest ZoomSessionResult.
     */
    setLatestZoomSessionResult(sessionResult: ZoomSessionResult): void;
    /**
     * Get the latest ZoomIDScanResult.
     */
    getLatestZoomIDScanResult(): ZoomIDScanResult | null;
    /**
     * Set the latest ZoomIDScanResult.
     */
    setLatestZoomIDScanResult(iDScanResult: ZoomIDScanResult | null): void;
    /**
     * Get the latest response from the FaceTec Managed API.
     */
    getLatestFaceTecAPIResponseString(): string;
    /**
     * Set the latest response from the FaceTec Managed API.
     */
    setLatestFaceTecAPIResponseString(apiMessage: string): void;
    /**
     * Get the last subcode we set ourselves to.  At the end of the process, this is indicative of either success or a granular reason why the session was cancelled or failed.
     */
    getLatestZoomManagedSessionStatusSubCode(): ZoomManagedSessionStatusSubCode;
    /**
     * Set the last subcode.
     */
    setLatestZoomManagedSessionStatusSubCode(subCode: ZoomManagedSessionStatusSubCode): void;
    /**
     * Get the Base URL we are using.
     */
    getZoomServerBaseURL(): string;
    /**
     * Get a friendly description for the unsuccess reason, useful for reporting back to the developer.
     */
    getFriendlyDescriptionForLastZoomManagedSession(): string;
    /**
     * Checks if an enrollmentIdentifier is enrolled and returns the status back to the caller.
     */
    static checkEnrollmentStatus(deviceLicenseKeyIdentifier: string, zoomServerBaseURL: string, username: string, callback: (enrollmentStatus: EnrollmentStatus) => void): void;
    /**
     * Deletes an enrollmentIdentifier if enrolled and returns the status back to the caller.
     */
    static deleteExistingUser(deviceLicenseKeyIdentifier: string, zoomServerBaseURL: string, username: string, callback: (isDeleted: boolean) => void): void;
    /**
     * Get the enrollmentStatus enum.
     */
    static getEnrollmentStatus(): typeof EnrollmentStatus;
}
/**
 * Enum for User Enrollment Status
 */
export declare enum EnrollmentStatus {
    ENROLLED = 0,
    NOT_ENROLLED = 1,
    NETWORK_ERROR = 2
}
/**
 * Get a friendly description for the ZoOm Managed Session subcode.
 */
export declare function getFriendlyDescriptionForZoomManagedSessionStatusSubCode(subCode: ZoomManagedSessionStatusSubCode): string;
/**
 * Get a friendly description for the ZoOm Managed Session result status.
 */
export declare function descriptionForManagedSessionStatus(enumValue: ZoomManagedSessionStatus): string;
export {};
