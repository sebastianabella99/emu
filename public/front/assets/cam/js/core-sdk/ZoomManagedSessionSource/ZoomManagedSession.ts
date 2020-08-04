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

import { ZoomSDK } from '../ZoomAuthentication.js/ZoomAuthentication';
import { ZoomIDScanProcessor, ZoomIDScanResultCallback , ZoomFaceMapProcessor, ZoomIDScanRetryMode,
ZoomFaceMapResultCallback, ZoomIDScanResult, ZoomSessionResult } from '../ZoomAuthentication.js/ZoomAuthentication';

/**
 * This is the callback back to the ZoomManagedSession caller with the overall status.
 * Developers must implement this and pass into the ZoomManagedSession constructor.
 */
interface OnZoomManagedSessionCompleteCallback {
  (zoomManagedSessionStatus: ZoomManagedSessionStatus): void
}

/**
 * This returns a simple enum of Success and UnsuccessCheckSubCode.
 * Callers can get more granular information by interrogating the ZoomManagedSession class helper functions.
 */
export enum ZoomManagedSessionStatus {
  Success,
  UnsuccessCheckSubCode
}

/**
 * The general scenario or mode of operation for ZoOm.  This controls aspects of the UX,
 * as well as the handling of the result.
 *
 * Developers can alter this to tailor to their own application or not use these modes to control logic if desired.
 */
export enum ZoomManagedSessionMode {
  Enroll,
  Authenticate,
  Liveness,
  IdentityCheck
}

/**
 * These are the general "non-nominal" occurrences during a ZoOm Sesion or ZoOm Identity Check.
 *
 * Developers can alter this to tailor to their own application or not use these subcodes if desired.
 */
export enum ZoomManagedSessionStatusSubCode {
  CameraError,
  CheckLatestFaceTecAPIResponseString,
  CompletedSuccessfully,
  ContextSwitch,
  CancelCalledFromCustomFaceMapProcessor,
  InternalUnsuccess,
  MissingGuidanceImages,
  InvalidEnrollmentIdentifier,
  InvalidManagedSessionParameters,
  LockedOut,
  NeverStarted,
  NoNetwork,
  PortraitModeRequired,
  Timeout,
  UserCancelled,
}

/**
 * Robust implementation of ZoomFaceMapProcessor
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
class ZoomManagedSessionFaceMapProcessor implements ZoomFaceMapProcessor {
  // Keep track of the identifier of the FaceMap during Enrollment, Authentication, and Identity Check scenarios.
  private enrollmentIdentifier: string;

  // Allow access to overall result.  Not necessary in a production app unless desired.
  public zoomManagedSessionStatus: ZoomManagedSessionStatus = ZoomSDK.ZoomManagedSessionStatus.UnsuccessCheckSubCode;

  // Keep track of last ZoomFaceMapResultCallback so that developers can control the ZoOm UX after asynchronous API calls.
  private zoomFaceMapResultCallback: ZoomFaceMapResultCallback = new ZoomSDK.ZoomFaceMapResultCallback();

  // Keep track of the ZoomManagedSession so that state can be updated as processing progresses.
  // Developer Note: Developer can do state tracking via other mechanisms if desired.
  private zoomManagedSession: ZoomManagedSession;

  // Keep track of latest XHR request.
  // We do this to handle the edge case where cancellation or Context Switch occurs
  // While developer is uploading so that we can simply cancel out of the session at this time.
  // Developer may wish to handle this differently if desired.
  private latestXHR: XMLHttpRequest = new XMLHttpRequest();

  /**
   * Our implementation of a ZoomFaceMapProcessor takes the ZoomManagedSession as a reference in order to update state.
   * We need the enrollmentIdentifier optionally depending on the mode.
   */
  constructor(zoomManagedSession: ZoomManagedSession, enrollmentIdentifier?: string) {
    this.zoomManagedSession = zoomManagedSession;
    this.enrollmentIdentifier = enrollmentIdentifier as string;
  }

  /**
   * A ZoOm FaceMap Processor defines an interface that the customer implements in order to
   * define the behavior and handling of the ZoOm Session Result (including FaceMap and Audit Images).
   * The ZoOm FaceMap Processor requires the developer to define a “processZoomSessionResultWhileZoomWaits” function.
   * As the name implies, this function is where the developer will handle the ZoOm Session Result
   * (most importantly the FaceMap), while the ZoOm interface continues to stay open (displaying a
   * progress experience that nicely and consistently styled across all platforms and devices)
   * and waits for the result of the processing.
   *
   * In ZoOm 8, the upload progress, animation, and ability to launch directly into the retry
   * experience without needing to start ZoOm (including the camera) from scratch, are all built into the experience.
   *
   * The processZoomSessionResultWhileZoomWaits function gives the developer two objects:
   *
   * 1.  A ZoomSessionResult object -- the developer should be familiar with this object and it has mostly stayed the same since ZoOm 7.  The developer should use this to check the state and invoke behavior that performs processing of the FaceMap on the server.
   * 2.  A ZoomFaceMapResultCallback object -- this object has 4 public functions that can be called:
   *    - succeed() -- this is called after the FaceMap is processed, the scenario succeeds, and the developer would like to invoke the success experience.
   *    - retry() -- this is called after the FaceMap is processed, the scenario requires the user to retry, and the developer would like to invoke the retry experience.
   *    - onProgress(progress: Float) -- this method can be called to control the progress bar progress.  Usually the developer can simply hook this up to the network request progress.
   *    - cancel() -- this method can be called to simply cancel out of the experience.  This is for cases like lack of network connectivity, bad responses from the developer’s own API, or other catastrophic failure scenarios.
   */
  processZoomSessionResultWhileZoomWaits(zoomSessionResult: ZoomSessionResult, zoomFaceMapResultCallback: ZoomFaceMapResultCallback): void {
    // Keep track of the latest result back in the ZoomManagedSession
    this.zoomManagedSession.setLatestZoomSessionResult(zoomSessionResult);
    this.zoomFaceMapResultCallback = zoomFaceMapResultCallback;

    // Cancel last request in flight.  This handles case where processing is is taking place but cancellation or Context Switch occurs.
    // Our handling here ends the latest in flight request and simply re-does the normal logic, which will cancel out.
    this.latestXHR.abort();

    // Check for non-nominal responses and cancel out of ZoOm experience by calling ZoomFaceMapResultCallback.cancel().
    // Developer can choose to handle some of these responses differently if they would like.
    // The checks here on the FaceMap are for defensive programming purposes only.
    if(zoomSessionResult.status !== ZoomSDK.ZoomSessionStatus.SessionCompletedSuccessfully || !zoomSessionResult.faceMetrics.faceMap || !zoomSessionResult.faceMetrics.faceMap.size) {
      this.setUnsuccessSubCode(zoomSessionResult);
      this.zoomFaceMapResultCallback.cancel();
      return;
    }

    // Here we set the latest status subcode to Timeout because if this class forgets to call one of the ZoomFaceMapResultCallback functions
    // then as a safety net for users in the wild we implement a catch-all timeout that will cancel the session.
    this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.Timeout);

    // Check the mode and call the appropriate helper function to handle the specific scenario that the application invoked.
    if(this.zoomManagedSession.getMode() === ZoomSDK.ZoomManagedSessionMode.Liveness) {
      this.processLiveness(zoomSessionResult);
    }
    else if(this.zoomManagedSession.getMode() === ZoomSDK.ZoomManagedSessionMode.Enroll) {
      this.processEnrollment(zoomSessionResult);
    }
    else if(this.zoomManagedSession.getMode() === ZoomSDK.ZoomManagedSessionMode.Authenticate) {
      this.processAuthenticate(zoomSessionResult);
    }
    else if(this.zoomManagedSession.getMode() === ZoomSDK.ZoomManagedSessionMode.IdentityCheck) {
      this.processIdentityCheck(zoomSessionResult);
    }
  }

  /**
   * Process the Liveness Check
   *
   * This method of calling the FaceTec Managed API, as well as the string of helper functions and evaluation of the result
   * are fairly prescriptive.  The developer will most likely be completely changing these functions to conform the API calls
   * around the particulars of the developers own webservice/infrastructure/security practices.
   */
  private processLiveness(zoomSessionResult: ZoomSessionResult): void {
    var _this = this;

    // Call helper function that calls FaceTec Managed API (or ZoOm Server REST SDK) /liveness endpoint
    // Developer Note: For your production app, you will be calling your own webservice and NOT the FaceTec Managed API or ZoOm Server REST SDK directly.
    this.callFaceTecManagedAPIForLiveness(zoomSessionResult, function(responseJSON) {
      _this.processLivenessResponseAndGoToNextStep(responseJSON)
    })
  }

  /**
   * Process the Enrollment
   *
   * This method of calling the FaceTec Managed API, as well as the string of helper functions and evaluation of the result
   * are fairly prescriptive.  The developer will most likely be completely changing these functions to conform the API calls
   * around the particulars of the developers own webservice/infrastructure/security practices.
   */
  private processEnrollment(zoomSessionResult: ZoomSessionResult): void {
    var _this = this;

    this.callFaceTecManagedAPIForEnrollmentOrIdentityCheck(this.enrollmentIdentifier, zoomSessionResult, function(responseJSON) {
      _this.processEnrollmentResponseAndGoToNextStep(responseJSON);
    })
  }

  /**
   * Process the Authenticate
   *
   * This method of calling the FaceTec Managed API, as well as the string of helper functions and evaluation of the result
   * are fairly prescriptive.  The developer will most likely be completely changing these functions to conform the API calls
   * around the particulars of the developers own webservice/infrastructure/security practices.
   */
  private processAuthenticate(zoomSessionResult: ZoomSessionResult): void {
    var _this = this;

    this.callFaceTecManagedAPIForAuthenticate(this.enrollmentIdentifier, zoomSessionResult, function(responseJSON) {
      _this.processAuthenticateResponseAndGoToNextStep(responseJSON);
    })
  }

  /**
   * Process the FaceMap Liveness Check portion of the Identity Check
   *
   * This method of calling the FaceTec Managed API, as well as the string of helper functions and evaluation of the result
   * are fairly prescriptive.  The developer will most likely be completely changing these functions to conform the API calls
   * around the particulars of the developers own webservice/infrastructure/security practices.
   */
  private processIdentityCheck(zoomSessionResult: ZoomSessionResult): void {
    var _this = this;

    this.callFaceTecManagedAPIForEnrollmentOrIdentityCheck(this.enrollmentIdentifier, zoomSessionResult, function(responseJSON) {
      _this.processEnrollmentResponseAndGoToNextStep(responseJSON);
    });
  }

  /**
   * Handles calling the FaceTec Managed API (or ZoOm Server REST SDK) for Liveness Check.
   * Specific pieces handled:
   * 1.  Vanilla XHR request to API to process Liveness Check.
   * 2.  Setting License Key and Headers that are required by FaceTec Managed API
   * 3.  Detecting basic network failure and cancelling out if detected
   * 4.  Updating the progress bar via the ZoomFaceMapResultCallback.onProgress function
   * 5.  Gather the needed data in correct format -- i.e. the FaceMap, Session ID
   * 6.  Hand back response JSON to caller.
   */
  private callFaceTecManagedAPIForLiveness(zoomSessionResult: ZoomSessionResult, callback: (responseJSON: any) => void): void {
    var _this = this
    this.latestXHR = new XMLHttpRequest();
    this.latestXHR.open("POST", this.zoomManagedSession.getZoomServerBaseURL() + "/liveness");
    this.latestXHR.setRequestHeader("X-Device-License-Key", _this.zoomManagedSession.getDeviceLicenseKeyIdentifier());
    this.latestXHR.setRequestHeader("X-User-Agent", ZoomSDK.createZoomAPIUserAgentString(zoomSessionResult.sessionId as string));
    this.latestXHR.setRequestHeader("Content-Type", "application/json");
    this.latestXHR.onreadystatechange = function () {
      if (this.readyState === 4) {
        try {
          var responseJSON = JSON.parse(this.responseText)
        }
        catch {
          _this.handleNetworkErrorAndReturnResponse();
          return;
        }
        callback(responseJSON)
      }
    };
    this.latestXHR.onerror = function() {
      _this.handleNetworkErrorAndReturnResponse();
    }
    this.latestXHR.upload.onprogress = function name(event) {
      var progress = event.loaded / event.total;
      _this.zoomFaceMapResultCallback.uploadProgress(progress)
    }
    zoomSessionResult.faceMetrics.getFaceMapBase64(function(faceMapBase64: any) {
      var dataToUpload = {
        sessionId: zoomSessionResult.sessionId,
        faceMap: faceMapBase64
      }
      var jsonUpload = JSON.stringify(dataToUpload)
      _this.latestXHR.send(jsonUpload);
    });
  }

  /**
   * Handles calling the FaceTec Managed API (or ZoOm Server REST SDK) for Enrollment
   * Specific pieces handled:
   * 1.  Vanilla XHR request to API to process Liveness Check.
   * 2.  Setting License Key and Headers that are required by FaceTec Managed API
   * 3.  Detecting basic network failure and cancelling out if detected
   * 4.  Updating the progress bar via the ZoomFaceMapResultCallback.onProgress function
   * 5.  Gather the needed data in correct format -- i.e. the FaceMap, Session ID, and Audit Trail Image
   * 6.  Hand back response JSON to caller.
   */
  private callFaceTecManagedAPIForEnrollmentOrIdentityCheck(enrollmentIdentifier: String, zoomSessionResult: ZoomSessionResult, callback: (responseJSON: any) => void): void {
    var _this = this;
    this.latestXHR = new XMLHttpRequest();
    this.latestXHR.open("POST", this.zoomManagedSession.getZoomServerBaseURL() + "/enrollment");
    this.latestXHR.setRequestHeader("X-Device-License-Key", _this.zoomManagedSession.getDeviceLicenseKeyIdentifier());
    this.latestXHR.setRequestHeader("X-User-Agent", ZoomSDK.createZoomAPIUserAgentString(zoomSessionResult.sessionId as string));
    this.latestXHR.setRequestHeader("Content-Type", "application/json");
    this.latestXHR.onreadystatechange = function () {
      if (this.readyState === 4) {
        try {
          var responseJSON = JSON.parse(this.responseText)
        }
        catch {
          _this.handleNetworkErrorAndReturnResponse();
          return;
        }
        callback(responseJSON)
      }
    };
    this.latestXHR.onerror = function() {
      _this.handleNetworkErrorAndReturnResponse();
    }
    this.latestXHR.upload.onprogress = function name(event) {
      var progress = event.loaded / event.total;
      _this.zoomFaceMapResultCallback.uploadProgress(progress)
    }
    zoomSessionResult.faceMetrics.getFaceMapBase64(function(faceMapBase64: any) {
      var dataToUpload = {
        sessionId: zoomSessionResult.sessionId,
        faceMap: faceMapBase64,
        enrollmentIdentifier:  enrollmentIdentifier,
        auditTrailImage:  _this.stripNotNeededPartsFromBase64String(zoomSessionResult.faceMetrics.auditTrail[0])
      }
      var jsonUpload = JSON.stringify(dataToUpload)
      _this.latestXHR.send(jsonUpload);
    });
  }

  /**
   * Handles calling the FaceTec Managed API (or ZoOm Server REST SDK) for Authenticate
   * Specific pieces handled:
   * 1.  Vanilla XHR request to API to process Liveness Check.
   * 2.  Setting License Key and Headers that are required by FaceTec Managed API
   * 3.  Detecting basic network failure and cancelling out if detected
   * 4.  Updating the progress bar via the ZoomFaceMapResultCallback.onProgress function
   * 5.  Gather the needed data in correct format -- i.e. the FaceMap, Session ID
   * 6.  Hand back response JSON to caller.
   */
  private callFaceTecManagedAPIForAuthenticate(enrollmentIdentifier: String, zoomSessionResult: ZoomSessionResult, callback: (responseJSON: any) => void): void {
    var _this = this;
    this.latestXHR = new XMLHttpRequest();
    this.latestXHR.open("POST", this.zoomManagedSession.getZoomServerBaseURL() + "/match-3d-3d");
    this.latestXHR.setRequestHeader("X-Device-License-Key", _this.zoomManagedSession.getDeviceLicenseKeyIdentifier());
    this.latestXHR.setRequestHeader("X-User-Agent", ZoomSDK.createZoomAPIUserAgentString(zoomSessionResult.sessionId as string));
    this.latestXHR.setRequestHeader("Content-Type", "application/json");
    this.latestXHR.onreadystatechange = function () {
      if (this.readyState === 4) {
        try {
          var responseJSON = JSON.parse(this.responseText)
        }
        catch {
          _this.handleNetworkErrorAndReturnResponse();
          return;
        }
        callback(responseJSON)
      }
    };
    this.latestXHR.onerror = function() {
      _this.handleNetworkErrorAndReturnResponse();
    }
    this.latestXHR.upload.onprogress = function name(event) {
      var progress = event.loaded / event.total;
      _this.zoomFaceMapResultCallback.uploadProgress(progress)
    }
    zoomSessionResult.faceMetrics.getFaceMapBase64(function(faceMapBase64: any) {
      var dataToUpload = {
        sessionId: zoomSessionResult.sessionId,
        auditTrailImage:  _this.stripNotNeededPartsFromBase64String(zoomSessionResult.faceMetrics.auditTrail[0]),
        source: {enrollmentIdentifier:  enrollmentIdentifier},
        target: {faceMap: faceMapBase64}
      }
      var jsonUpload = JSON.stringify(dataToUpload)
      _this.latestXHR.send(jsonUpload);
    });
  }

  /**
   * Evaluate a response from /liveness.
   * Check for Liveness Success, then check for Liveness Unsuccess (retry needed), else inform the caller that we should cancel.
   */
  private processLivenessResponseAndGoToNextStep(responseJSON: any): void {
    if(responseJSON && responseJSON.data && responseJSON.data.livenessStatus === 0) {
      // Dynamically set the success message.
      // In the developer application, this may not be needed if the developer wishes to show a generic success message in all modes
      // or if the developer only uses ZoOm in one mode.
      ZoomSDK.ZoomCustomization.setOverrideResultScreenSuccessMessage("Liveness Confirmed!");

      this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.CompletedSuccessfully);
      this.zoomFaceMapResultCallback.succeed();
    }
    else if (responseJSON && responseJSON.data && responseJSON.data.livenessStatus === 1) {
      this.zoomFaceMapResultCallback.retry();
    }
    else {
      this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.CancelCalledFromCustomFaceMapProcessor);
      this.zoomFaceMapResultCallback.cancel();
    }
  }

  /**
   * Evaluate a response from /enrollment.
   * Check for isEnrolled, then check for Liveness Unsuccess (retry needed), else inform the caller that we should cancel.
   */
  private processEnrollmentResponseAndGoToNextStep(responseJSON: any): void {
    if(responseJSON && responseJSON.meta && responseJSON.meta.code === 200 && responseJSON.data && responseJSON.data.isEnrolled && responseJSON.data.livenessStatus === 0) {
      // Dynamically set the success message.
      // In the developer application, this may not be needed if the developer wishes to show a generic success message in all modes
      // or if the developer only uses ZoOm in one mode.
      ZoomSDK.ZoomCustomization.setOverrideResultScreenSuccessMessage("Liveness Confirmed!");

      this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.CompletedSuccessfully);
      this.zoomFaceMapResultCallback.succeed();
    }
    else if(responseJSON && responseJSON.meta && responseJSON.meta.code === 200 && responseJSON.data && responseJSON.data.isEnrolled === false) {
      this.zoomFaceMapResultCallback.retry();
    }
    else {
      // Some sort of "expected" non-nominal response.
      // Developers are encouraged to handle this based on the particulars of their own API
      if(responseJSON && responseJSON.meta && responseJSON.meta.code !== 200 && responseJSON.meta.message) {
        this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.CheckLatestFaceTecAPIResponseString);
        this.zoomManagedSession.setLatestFaceTecAPIResponseString(responseJSON.meta.message);
      }
      else {
        // Some other unhandled response.  This is usually indicative of catastrophic failure.
        // Developers are encouraged to handle this based on the particulars of their own API
        this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.InternalUnsuccess);
      }
      this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.CancelCalledFromCustomFaceMapProcessor);
      // cancel in either of the above cases
      this.zoomFaceMapResultCallback.cancel();
    }
  }

  /**
   * Evaluate a response from /match3D_3D.
   * Authentication should only succeed if and only if Match Level is 10 (i.e. 1 in 4.2 million probability)
   * AND both FaceMaps have had Liveness Check succeed.
   */
  private processAuthenticateResponseAndGoToNextStep(responseJSON: any): void {
    if(responseJSON && responseJSON.data && responseJSON.data.matchLevel != null && responseJSON.data.matchLevel === 10
       && responseJSON.data.sourceFaceMap && responseJSON.data.sourceFaceMap.livenessStatus === 0
       && responseJSON.data.targetFaceMap && responseJSON.data.targetFaceMap.livenessStatus === 0
    ) {
      // Dynamically set the success message.
      // In the developer application, this may not be needed if the developer wishes to show a generic success message in all modes
      // or if the developer only uses ZoOm in one mode.
      ZoomSDK.ZoomCustomization.setOverrideResultScreenSuccessMessage("Authenticated Successfully!");

      this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.CompletedSuccessfully);
      this.zoomFaceMapResultCallback.succeed();
    }
    else if(responseJSON && responseJSON.data
            && responseJSON.data.sourceFaceMap
            && responseJSON.data.targetFaceMap
            && responseJSON.data.matchLevel != null
            && (responseJSON.data.sourceFaceMap.livenessStatus !== 0 || responseJSON.data.targetFaceMap.livenessStatus !== 0 || responseJSON.data.matchLevel !== 10))
    {
      this.zoomFaceMapResultCallback.retry();
    }
    else {
      // Some sort of "expected" non-nominal response.
      // Developers are encouraged to handle this based on the particulars of their own API
      if(responseJSON && responseJSON.meta && responseJSON.meta.code !== 200 && responseJSON.meta.message) {
        this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.CheckLatestFaceTecAPIResponseString);
        this.zoomManagedSession.setLatestFaceTecAPIResponseString(responseJSON.meta.message);
      }
      else {
        // Some other unhandled response.  This is usually indicative of catastrophic failure.
        // Developers are encouraged to handle this based on the particulars of their own API
        this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.InternalUnsuccess);
      }

      // cancel in either of the above cases
      this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.CancelCalledFromCustomFaceMapProcessor);
      this.zoomFaceMapResultCallback.cancel();
    }
  }

  /**
   * Helper function to generate a proper base 64 string for server-side consumption.
   */
  private stripNotNeededPartsFromBase64String = function(image: string) {
    var baseImage;
    if (image) {
      var baseImageSplit = image.split("data:image/jpeg;base64,");
      if (baseImageSplit.length === 1) {
        baseImageSplit = image.split("data:image/png;base64,");
      }
      if (baseImageSplit.length === 1) {
        baseImage = image;
      } else {
        baseImage = baseImageSplit[1];
      }
    }
    return baseImage;
  };

  /**
   * Helper function to cancel out of the FaceMap Processor with a network error.
   */
  private handleNetworkErrorAndReturnResponse() {
    this.zoomManagedSessionStatus = ZoomSDK.ZoomManagedSessionStatus.UnsuccessCheckSubCode
    this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.NoNetwork);
    this.zoomFaceMapResultCallback.cancel();
  }

  /**
   * Helper function to parse ZoomSessionResult and set more generic/friendly subcodes for consumers of ZoOm Managed Sessions.
   * Developers are encouraged to implement their own logic, logging, analytics here if desired.
   */
  private setUnsuccessSubCode(zoomSessionResult: ZoomSessionResult): void {
    switch (zoomSessionResult.status) {
      case ZoomSDK.ZoomSessionStatus.ZoomVideoOrInterfaceDOMElementDoesNotExist:
      case ZoomSDK.ZoomSessionStatus.DocumentNotReady:
      case ZoomSDK.ZoomSessionStatus.ZoomSessionInProgress:
      case ZoomSDK.ZoomSessionStatus.UnknownInternalError:
        this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.InternalUnsuccess);
        break;
      case ZoomSDK.ZoomSessionStatus.VideoHeightOrWidthZeroOrUninitialized:
      case ZoomSDK.ZoomSessionStatus.VideoCaptureStreamNotActive:
      case ZoomSDK.ZoomSessionStatus.CameraNotRunning:
      case ZoomSDK.ZoomSessionStatus.CameraDoesNotExist:
        this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.CameraError);
        break;
      case ZoomSDK.ZoomSessionStatus.TooMuchTimeToDetectFirstFace:
      case ZoomSDK.ZoomSessionStatus.TooMuchTimeToDetectFirstFaceInPhaseTwo:
      case ZoomSDK.ZoomSessionStatus.Timeout:
        this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.Timeout);
        break;
      case ZoomSDK.ZoomSessionStatus.ContextSwitch:
      case ZoomSDK.ZoomSessionStatus.OrientationChangeDuringSession:
        this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.ContextSwitch);
        break;
      case ZoomSDK.ZoomSessionStatus.ProgrammaticallyCancelled:
        this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.CancelCalledFromCustomFaceMapProcessor);
        break;
      case ZoomSDK.ZoomSessionStatus.UserCancelled:
      case ZoomSDK.ZoomSessionStatus.UserCancelledFromRetryGuidance:
      case ZoomSDK.ZoomSessionStatus.UserCancelledFromNewUserGuidance:
      case ZoomSDK.ZoomSessionStatus.UserCancelledWhenAttemptingToGetCameraPermissions:
        this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.UserCancelled);
        break;
      case ZoomSDK.ZoomSessionStatus.LandscapeModeNotAllowed:
        this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.PortraitModeRequired);
        break;
      case ZoomSDK.ZoomSessionStatus.NonProductionModeLicenseInvalid:
        this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.NoNetwork);
        break;
      case ZoomSDK.ZoomSessionStatus.LockedOut:
        this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.LockedOut);
        break;
      case ZoomSDK.ZoomSessionStatus.NonProductionModeLicenseInvalid:
      case ZoomSDK.ZoomSessionStatus.PreloadNotCompleted:
      case ZoomSDK.ZoomSessionStatus.UnmanagedSessionVideoInitializationNotCompleted:
      case ZoomSDK.ZoomSessionStatus.InitializationNotCompleted:
        break;
      case ZoomSDK.ZoomSessionStatus.MissingGuidanceImages:
          this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.MissingGuidanceImages);
        break;
      default:
        console.log("ZoOm Error: 38912 Unexpected value found in setUnsuccessSubCode: " + zoomSessionResult.status)
        break
    }
  }
}

/**
 * Robust implementation of ZoomIDScanProcessor
 *
 * In a production app and when using Identity Check functionality, developers MUST create their own implementation of this class.
 *
 * This implementation uses the FaceTec Managed API, but can also be pointed at the
 * developer-deployed ZoOm Server REST SDK instance.
 *
 * As a final step before deploying a production application,
 * IT IS HIGHLY RECOMMENDED that developers close off the ZoOm Server REST SDK endpoints to the outside world
 * and instead proxy calls to the ZoOm Server REST SDK through their own secure web application/servers.
 */
class ZoomManagedSessionIDScanProcessor implements ZoomIDScanProcessor {
  // Keep track of the identifier of the FaceMap that was used in the first phase where we captured the ZoOm 3D FaceMap and succeeded the Liveness Check
  // Note that in this implementation of Identity Check, we "Enrolled" the user in the previous phase.  To be clear about this,
  // at the point when processZoomIDScanResultWhileZoomWaits is called, the ZoomManagedSession class has ensured that there is an Alive ZoOm 3D FaceMap
  // of the user enrolled and stored on the FaceTec Server (or inside the ZoOm Server REST SDK on your own server). Now, when we perform the ID Scan, all we
  // need to do is to call the /id-check endpoint, passing the enrollmentIdentifier we just enrolled, as well as the ZoomIDScan that we just performed.
  private enrollmentIdentifier: string;

  // Keep track of last ZoomIDScanResultCallback so that developers can control the ZoOm UX after asynchronous API calls.
  private zoomIDScanResultCallback: ZoomIDScanResultCallback = new ZoomSDK.ZoomIDScanResultCallback();

  // Keep track of the ZoomManagedSession so that state can be updated as processing progresses.
  // Developer Note: Developer can do state tracking via other mechanisms if desired.
  private zoomManagedSession: ZoomManagedSession

  // Keep track of latest XHR request.
  // We do this to handle the edge case where cancellation or Context Switch occurs
  // While developer is uploading so that we can simply cancel out of the session at this time.
  // Developer may wish to handle this differently if desired.
  private latestXHR: XMLHttpRequest = new XMLHttpRequest();

  /*
   * Our implementation of a ZoomIDScanProcessor takes the ZoomManagedSession as a reference in order to update state.
   */
  constructor(zoomManagedSession: ZoomManagedSession, enrollmentIdentifier: string) {
    this.enrollmentIdentifier = enrollmentIdentifier;
    this.zoomManagedSession = zoomManagedSession
  }

  /**
   * A ZoOm ID Scan Processor defines an interface that the customer implements in order to
   * define the behavior and handling of the ZoOm ID Scan Result (primarily the ZoOm ID Scan itself).
   * The ZoOm ID Scan Processor requires the developer to define a processZoomIDScanResultWhileZoomWaits function.
   * As the name implies, this function is where the developer will handle the ZoOm ID Scan Result
   * (most importantly the ZoomIDScan), while the ZoOm interface continues to stay open (displaying a
   * progress experience that nicely and consistently styled across all platforms and devices)
   * and waits for the result of the processing.
   *
   * In ZoOm 8, the upload progress, animation, and ability to launch directly into
   * the re-capture experience for either the front or back of the ID are all built into the experience.
   *
   * The processZoomIDScanResultWhileZoomWaits function gives the developer two objects:
   *
   * 1.  A ZoomIDScanResult object -- The developer should use this to check the status and invoke behavior that performs processing of the ID Scan on the server.
   * 2.  A ZoomIDScanResultCallback object -- this object has 4 public functions that can be called:
   *    - succeed() -- this is called after the ID Scan is processed, the scenario succeeds, and the developer would like to invoke the success experience.
   *    - retry() -- this is called after the ID Scan is processed, the scenario requires the user to re-scan their ID, and the developer would like to invoke the retry experience.
   *    - onProgress(progress: Float) -- this method can be called to control the progress bar progress.  Usually the developer can simply hook this up to the network request progress.
   *    - cancel() -- this method can be called to simply cancel out of the experience.  This is for cases like lack of network connectivity, bad responses from the developer’s own API, or other catastrophic failure scenarios.
   */
  processZoomIDScanResultWhileZoomWaits(zoomIDScanResult: ZoomIDScanResult, zoomIDScanResultCallback: ZoomIDScanResultCallback): void {
    // Keep track of the latest result back in the ZoomManagedSession
    this.zoomIDScanResultCallback = zoomIDScanResultCallback;
    this.zoomManagedSession.setLatestZoomIDScanResult(zoomIDScanResult);

    // Cancel last request in flight.  This handles case where processing is is taking place but cancellation or Context Switch occurs.
    // Our handling here ends the latest in flight request and simply re-does the normal logic, which will cancel out.
    this.latestXHR.abort();

    // Check for non-nominal responses and cancel out of ZoOm experience by calling ZoomIDScanResultCallback.cancel().
    // Developer can choose to handle some of these responses differently if they would like.
    if(zoomIDScanResult.status != ZoomSDK.ZoomIDScanStatus.ZoomIDScanStatusSuccess || !zoomIDScanResult.idScanMetrics.idScan) {
      this.setUnsuccessSubCode(zoomIDScanResult);
      this.zoomIDScanResultCallback.cancel();
      return;
    }

    // Here we set the latest status subcode to Timeout because if this class forgets to call one of the ZoomFaceMapResultCallback functions
    // then as a safety net for users in the wild we implement a catch-all timeout that will cancel the session.
    this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.Timeout);

    // Kick off the processing of the ID Scan.
    this.processIdentityCheck(zoomIDScanResult);
  }

  /**
   * Process the ID Scan portion of the Identity Check
   *
   * This method of calling the FaceTec Managed API, as well as the string of helper functions and evaluation of the result
   * are fairly prescriptive.  The developer will most likely be completely changing these functions to conform the API calls
   * around the particulars of the developers own webservice/infrastructure/security practices.
   */
  private processIdentityCheck(zoomIDScanResult: ZoomIDScanResult): void {
    var _this = this;

    this.callFaceTecManagedAPIForIDCheck(zoomIDScanResult, function(responseJSON) {
      _this.processIdentityCheckResponseAndGoToNextStep(responseJSON);
    })
  }

  private callFaceTecManagedAPIForIDCheck(zoomIDScanResult: ZoomIDScanResult, callback: (responseJSON: any) => void) {
    var _this = this;
    this.latestXHR = new XMLHttpRequest();
    this.latestXHR.open("POST", this.zoomManagedSession.getZoomServerBaseURL() + "/id-check");
    this.latestXHR.setRequestHeader("X-Device-License-Key", _this.zoomManagedSession.getDeviceLicenseKeyIdentifier());
    this.latestXHR.setRequestHeader("X-User-Agent", ZoomSDK.createZoomAPIUserAgentString(zoomIDScanResult.sessionId as string));
    this.latestXHR.setRequestHeader("Content-Type", "application/json");
    this.latestXHR.onreadystatechange = function () {
      if (this.readyState === 4) {
        try {
          var responseJSON = JSON.parse(this.responseText)
        }
        catch {
          _this.handleNetworkErrorAndReturnResponse();
          return;
        }
        callback(responseJSON)
      }
    };
    this.latestXHR.onerror = function() {
      _this.handleNetworkErrorAndReturnResponse();
    }
    this.latestXHR.upload.onprogress = function name(event) {
      var progress = event.loaded / event.total;
      _this.zoomIDScanResultCallback.uploadProgress(progress)
    }
    zoomIDScanResult.idScanMetrics.getIDScanBase64(function(idScanBase64) {
      var dataToUpload = {
        sessionId: zoomIDScanResult.sessionId,
        enrollmentIdentifier:  _this.enrollmentIdentifier,
        idScan: idScanBase64
      }
      var jsonUpload = JSON.stringify(dataToUpload)
      _this.latestXHR.send(jsonUpload);
    });
    _this.zoomIDScanResultCallback.uploadProgress(0);
  }

  /**
   * Evaluate a response from /id-check.
   * Check for ok,  livenessStatus Unsuccess and matchLevel > 0. Retry if match unSuccess or liveness unSuccess,
   * otherwise cancel as needed.
   */
  private processIdentityCheckResponseAndGoToNextStep(responseJSON: any): void {
    if(responseJSON && responseJSON.meta && responseJSON.meta.ok && responseJSON.meta.ok === true && responseJSON.data
      && responseJSON.data.livenessStatus === 0 && responseJSON.data.matchLevel != null && responseJSON.data.matchLevel !== 0)
    {
      ZoomSDK.ZoomCustomization.setOverrideResultScreenSuccessMessage("Your 3D Face<br/>Matched Your ID!")
      this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.CompletedSuccessfully);
      this.zoomIDScanResultCallback.succeed();
    }
    else if(responseJSON && responseJSON.data
      && responseJSON.data.matchLevel != null
      && (responseJSON.data.livenessStatus !== 0 || responseJSON.data.matchLevel === 0))
    {
      this.zoomIDScanResultCallback.retry(ZoomIDScanRetryMode.Front);
    }
    else {
      // Some sort of "expected" non-nominal response.
      // Developers are encouraged to handle this based on the particulars of their own API
      if(responseJSON && responseJSON.meta && responseJSON.meta.code !== 200 && responseJSON.meta.message) {
        this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.CheckLatestFaceTecAPIResponseString);
        this.zoomManagedSession.setLatestFaceTecAPIResponseString(responseJSON.meta.message);

      }
      else {
        // Some other unhandled response.  This is usually indicative of catastrophic failure.
        // Developers are encouraged to handle this based on the particulars of their own API
        this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.InternalUnsuccess);
      }
      // cancel in either of the above cases
      this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.CancelCalledFromCustomFaceMapProcessor);
      this.zoomIDScanResultCallback.cancel();
    }
  }

  /**
   * Helper function to parse ZoomIDScanResult and set more generic/friendly subcodes for consumers of ZoOm Managed Sessions
   * Developers are encouraged to implement their own logic, logging, analytics here if desired.
   */
  private setUnsuccessSubCode(zoomIDScanResult: ZoomIDScanResult): void {
    if(zoomIDScanResult.status == ZoomSDK.ZoomIDScanStatus.ZoomIDScanStatusContextSwitch) {
      this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.ContextSwitch);
    }
    else if(zoomIDScanResult.status == ZoomSDK.ZoomIDScanStatus.ZoomIDScanStatusTimedOut)  {
        this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.Timeout);
    }
    else if(zoomIDScanResult.status == ZoomSDK.ZoomIDScanStatus.ZoomIDScanStatusUserCancelled) {
        this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.UserCancelled);
    }
    else if(zoomIDScanResult.status == ZoomSDK.ZoomIDScanStatus.ZoomIDScanStatusUnsuccess) {
        this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.InternalUnsuccess);
    }
  }

   // helper function to return a network error
   private handleNetworkErrorAndReturnResponse() {
    this.zoomManagedSession.setLatestZoomManagedSessionStatusSubCode(ZoomSDK.ZoomManagedSessionStatusSubCode.NoNetwork);
    this.zoomIDScanResultCallback!.cancel();
  }
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
export class ZoomManagedSession {
  // Must be set correctly in the constructor in order to use ZoOm
  private deviceLicenseKeyIdentifier: string;

  // By default, this points at the FaceTec Managed API.
  // After deploying your own instance of the ZoOm Server REST SDK, this can be pointed at the Base URL that is created by the setup guide.
  // In a final, production application, developers will be proxying calls through their own secure web service.
  private zoomServerBaseURL: string;

  // The mode of operation -- Liveness Check, Enrollment, Authentication, Identity Check
  private mode: ZoomManagedSessionMode;

  // Keep reference to enrollmentIdentifier
  private enrollmentIdentifier?: string;

  // Keep track of the latest status of the Managed Session progress.
  // This is updated throughout each ZoOm journey and can be interrogated after the process to understand what happened.
  private latestZoomManagedSessionStatusSubCode: ZoomManagedSessionStatusSubCode;

  // Keep a reference to the latest ZoOm Session Result.
  private latestZoomSessionResult: ZoomSessionResult | null;

  // Keep a reference to the latest ZoOm ID Scan Result.
  private latestZoomIDScanResult: ZoomIDScanResult | null;

  // Keep track of latest response from FaceTec Managed API.
  private latestFaceTecAPIResponseString: string;

  // Used to call back to ZoomManagedSession caller with the overall result.
  private onZoomManagedSessionComplete: OnZoomManagedSessionCompleteCallback;

  /**
   * Check parameters, store local references, and kick off the ZoomSession!
   */
  constructor(onZoomManagedSessionComplete: OnZoomManagedSessionCompleteCallback,
              deviceLicenseKeyIdentifier: string,
              zoomServerBaseURL: string,
              mode: ZoomManagedSessionMode,
              enrollmentIdentifier?: string
  )
  {
    this.deviceLicenseKeyIdentifier = deviceLicenseKeyIdentifier;
    this.zoomServerBaseURL = zoomServerBaseURL;
    this.mode = mode;
    this.latestZoomManagedSessionStatusSubCode = ZoomSDK.ZoomManagedSessionStatusSubCode.NeverStarted
    this.latestZoomSessionResult = null;
    this.latestZoomIDScanResult = null;
    this.latestFaceTecAPIResponseString = ""
    this.onZoomManagedSessionComplete = onZoomManagedSessionComplete;
    this.enrollmentIdentifier = enrollmentIdentifier;

    var _this = this

    // Return if not called correctly (after setting the subcode).
    if(!this.isConstructorParametersValid()) { return; };

    // onZoomSessionComplete is a required argument to starting a ZoomSession.
    // This function is called at the very end of a ZoomSession capture.
    // It has no arguments/data passed back to the developer because the developer has already seen/handled all results
    // inside the ZoomFaceMapProcessor or ZoomIDScanProcessor.
    var onZoomSessionComplete = function() {
      if(_this.latestZoomManagedSessionStatusSubCode === ZoomSDK.ZoomManagedSessionStatusSubCode.CompletedSuccessfully) {
        _this.onZoomManagedSessionComplete(ZoomSDK.ZoomManagedSessionStatus.Success);
      }
      else {
        _this.onZoomManagedSessionComplete(ZoomSDK.ZoomManagedSessionStatus.UnsuccessCheckSubCode);
      }
    }

    // Initialize the ZoomSession with our ZoomFaceMapProcessor implementation if doing Enrollment, Authentication, or Liveness Check.
    // Initialize the ZoomSession with our ZoomFaceMapProcessor and ZoomIDScanProcessor implementations if doing Identity Check.
    if(mode === ZoomSDK.ZoomManagedSessionMode.Liveness || mode === ZoomSDK.ZoomManagedSessionMode.Enroll || mode === ZoomSDK.ZoomManagedSessionMode.Authenticate) {
      var zoomManagedSessionFaceMapProcessor = new ZoomManagedSessionFaceMapProcessor(this, enrollmentIdentifier);
      // new ZoomSDK.ZoomSession(onZoomSessionComplete, zoomManagedSessionFaceMapProcessor);
    }
    else if(mode === ZoomSDK.ZoomManagedSessionMode.IdentityCheck) {
      var zoomManagedSessionFaceMapProcessor = new ZoomManagedSessionFaceMapProcessor(this, enrollmentIdentifier);
      var zoomManagedSessionIDScanProcessor = new ZoomManagedSessionIDScanProcessor(this, enrollmentIdentifier as string);
      // new ZoomSDK.ZoomSession(onZoomSessionComplete, zoomManagedSessionFaceMapProcessor as ZoomFaceMapProcessor, zoomManagedSessionIDScanProcessor);
    }
  }

  /**
   * Check validity of parameters.  Developers are encouraged to add any extra checks here based on the particulars of their own application.
   */
  private isConstructorParametersValid(): boolean {
    // Make sure we can call back to the caller.
    if(typeof this.onZoomManagedSessionComplete !== "function") {
      this.latestZoomManagedSessionStatusSubCode = ZoomSDK.ZoomManagedSessionStatusSubCode.InvalidManagedSessionParameters;
      return false;
    }

    // Make sure we have a deviceLicenseKeyIdentifier
    if(typeof this.deviceLicenseKeyIdentifier !== "string" || this.deviceLicenseKeyIdentifier.length === 0) {
      this.latestZoomManagedSessionStatusSubCode = ZoomSDK.ZoomManagedSessionStatusSubCode.InvalidManagedSessionParameters;
      this.onZoomManagedSessionComplete(ZoomSDK.ZoomManagedSessionStatus.UnsuccessCheckSubCode);
      return false;
    }

    // Make sure we have a mode.
    if(typeof this.mode === "undefined") {
      this.latestZoomManagedSessionStatusSubCode = ZoomSDK.ZoomManagedSessionStatusSubCode.InvalidManagedSessionParameters;
      this.onZoomManagedSessionComplete(ZoomSDK.ZoomManagedSessionStatus.UnsuccessCheckSubCode);
      return false;
    }

    // Make sure that if it is not a Liveness Check that we have an enrollmentIdentifier, indicated developer confusion when calling the ZoomManagedSession.
    if(this.mode !== ZoomSDK.ZoomManagedSessionMode.Liveness && (typeof this.enrollmentIdentifier !== "string" || this.enrollmentIdentifier.length == 0)) {
      this.latestZoomManagedSessionStatusSubCode = ZoomSDK.ZoomManagedSessionStatusSubCode.InvalidEnrollmentIdentifier;
      this.onZoomManagedSessionComplete(ZoomSDK.ZoomManagedSessionStatus.UnsuccessCheckSubCode);
      return false;
    }

    // Make sure that if it is a Liveness Check that we were not passed an enrollmentIdentifier, indicated developer confusion when calling the ZoomManagedSession.
    if(this.mode === ZoomSDK.ZoomManagedSessionMode.Liveness && (typeof this.enrollmentIdentifier !== "undefined")) {
      this.latestZoomManagedSessionStatusSubCode = ZoomSDK.ZoomManagedSessionStatusSubCode.InvalidEnrollmentIdentifier;
      this.onZoomManagedSessionComplete(ZoomSDK.ZoomManagedSessionStatus.UnsuccessCheckSubCode);
      return false;
    }

    return true;
  }

  /**
   * Get the Device License Key Identifier that was set.
   */
  public getDeviceLicenseKeyIdentifier(): string {
    return this.deviceLicenseKeyIdentifier;
  }

  /**
   * Get the mode that was set.
   */
  public getMode(): ZoomManagedSessionMode {
    return this.mode;
  }

  /**
   * Get the latest ZoomSessionResult.
   */
  public getLatestZoomSessionResult(): ZoomSessionResult {
    return this.latestZoomSessionResult as ZoomSessionResult;
  }

  /**
   * Set the latest ZoomSessionResult.
   */
  public setLatestZoomSessionResult(sessionResult: ZoomSessionResult): void {
    this.latestZoomSessionResult = sessionResult;
  }

  /**
   * Get the latest ZoomIDScanResult.
   */
  public getLatestZoomIDScanResult(): ZoomIDScanResult | null {
    return this.latestZoomIDScanResult;
  }

  /**
   * Set the latest ZoomIDScanResult.
   */
  public setLatestZoomIDScanResult(iDScanResult: ZoomIDScanResult | null): void {
    this.latestZoomIDScanResult = iDScanResult;
  }

  /**
   * Get the latest response from the FaceTec Managed API.
   */
  public getLatestFaceTecAPIResponseString(): string {
    return this.latestFaceTecAPIResponseString;
  }

  /**
   * Set the latest response from the FaceTec Managed API.
   */
  public setLatestFaceTecAPIResponseString(apiMessage: string): void {
    this.latestFaceTecAPIResponseString = apiMessage;
  }

  /**
   * Get the last subcode we set ourselves to.  At the end of the process, this is indicative of either success or a granular reason why the session was cancelled or failed.
   */
  public getLatestZoomManagedSessionStatusSubCode(): ZoomManagedSessionStatusSubCode {
    return this.latestZoomManagedSessionStatusSubCode;
  }

  /**
   * Set the last subcode.
   */
  public setLatestZoomManagedSessionStatusSubCode(subCode: ZoomManagedSessionStatusSubCode): void {
    this.latestZoomManagedSessionStatusSubCode = subCode
  }

  /**
   * Get the Base URL we are using.
   */
  public getZoomServerBaseURL(): string {
    return this.zoomServerBaseURL;
  }

  /**
   * Get a friendly description for the unsuccess reason, useful for reporting back to the developer.
   */
  public getFriendlyDescriptionForLastZoomManagedSession() {
    if(this.getLatestZoomManagedSessionStatusSubCode() === ZoomManagedSessionStatusSubCode.CompletedSuccessfully) {
      return ZoomSDK.ZoomManagedSessionStatus[ZoomSDK.ZoomManagedSessionStatus.Success];
    }
    else if(this.getLatestZoomManagedSessionStatusSubCode() === ZoomSDK.ZoomManagedSessionStatusSubCode.CheckLatestFaceTecAPIResponseString) {
      return this.getLatestFaceTecAPIResponseString();
    }
    else {
      return getFriendlyDescriptionForZoomManagedSessionStatusSubCode(this.getLatestZoomManagedSessionStatusSubCode())
    }
  }

  /**
   * Checks if an enrollmentIdentifier is enrolled and returns the status back to the caller.
   */
  public static checkEnrollmentStatus(deviceLicenseKeyIdentifier: string, zoomServerBaseURL: string, username: string, callback:(enrollmentStatus: EnrollmentStatus) => void) {

    // Vanilla xhr request to check enrollment.
    var dataToUpload = new FormData();
    var xhr = new XMLHttpRequest();
    dataToUpload.append("enrollmentIdentifier", username);
    xhr.open("GET", zoomServerBaseURL + "/enrollment/" + username);
    xhr.setRequestHeader("X-Device-License-Key", deviceLicenseKeyIdentifier);

    xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
        if(this.responseText == "") {
          callback(EnrollmentStatus.NETWORK_ERROR);
          return;
        }
        try {
          var responseJSON = JSON.parse(this.responseText);
          if(responseJSON.meta && responseJSON.meta.ok) {
            callback(EnrollmentStatus.ENROLLED);
          }
          else {
            callback(EnrollmentStatus.NOT_ENROLLED);
          }
        }
        catch (e) {
          callback(EnrollmentStatus.NETWORK_ERROR);
        }
      }
    };
    xhr.send(dataToUpload);
  }

  /**
   * Deletes an enrollmentIdentifier if enrolled and returns the status back to the caller.
   */
  public static deleteExistingUser(deviceLicenseKeyIdentifier: string, zoomServerBaseURL: string, username: string, callback:(isDeleted: boolean) => void) {

    // Vanilla xhr request to delete user
    // Note: this does not check if users exists already.
    var dataToUpload = new FormData();
    var xhr = new XMLHttpRequest();
    dataToUpload.append("enrollmentIdentifier", username);
    xhr.open("DELETE", zoomServerBaseURL + "/enrollment/" + username);
    xhr.setRequestHeader("X-Device-License-Key", deviceLicenseKeyIdentifier);
    xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
        if(this.responseText == "") {
          callback(false);
        }
        try {
          var responseJSON = JSON.parse(this.responseText);
          if(responseJSON.meta) {
            callback(true);
          }
        }
        catch (e) {
          callback(false);
        }
      }
    };
    xhr.send(dataToUpload);
  }

  /**
   * Get the enrollmentStatus enum.
   */
  public static getEnrollmentStatus() {
    return EnrollmentStatus;
  }
}

/**
 * Enum for User Enrollment Status
 */
export enum EnrollmentStatus {
  ENROLLED,
  NOT_ENROLLED,
  NETWORK_ERROR
}

/**
 * Get a friendly description for the ZoOm Managed Session subcode.
 */
export function getFriendlyDescriptionForZoomManagedSessionStatusSubCode(subCode: ZoomManagedSessionStatusSubCode) {
  switch (subCode) {
    case ZoomManagedSessionStatusSubCode.CompletedSuccessfully:
      return "The Managed Session processed successfully.";
    case ZoomManagedSessionStatusSubCode.CameraError:
      return "Unable to initialize the camera.";
    case ZoomManagedSessionStatusSubCode.CheckLatestFaceTecAPIResponseString:
      return "FaceTec API returned an unsuccess result. Check the latestFaceTecAPIString for details.";
    case ZoomManagedSessionStatusSubCode.ContextSwitch:
      return "Session cancelled because of Browser/OS Context Switch.";
    case ZoomManagedSessionStatusSubCode.CancelCalledFromCustomFaceMapProcessor:
      return "Session cancelled by the custom faceMap processor.";
    case ZoomManagedSessionStatusSubCode.MissingGuidanceImages:
        return "Missing guidance images - Your app is not configured correctly.";
    case ZoomManagedSessionStatusSubCode.InternalUnsuccess:
      return "Session failed for an unknown internal reason.";
    case ZoomManagedSessionStatusSubCode.InvalidEnrollmentIdentifier:
      return "The enrollment identifier is invalid.";
    case ZoomManagedSessionStatusSubCode.InvalidManagedSessionParameters:
      return "The manged session parameters are invalid.";
    case ZoomManagedSessionStatusSubCode.LockedOut:
      return "The user is locked out.";
    case ZoomManagedSessionStatusSubCode.NeverStarted:
      return "The session was never started.";
    case ZoomManagedSessionStatusSubCode.NoNetwork:
      return "There is no network available.";
    case ZoomManagedSessionStatusSubCode.PortraitModeRequired:
      return "Portrait mode is required.";
    case ZoomManagedSessionStatusSubCode.Timeout:
      return "Session cancelled due to timeout.";
    case ZoomManagedSessionStatusSubCode.UserCancelled:
      return "Session cancelled by the user.";
    default:
      console.log("ZoOm Error: 12388 Invalid subCode passed to getFriendlyDescriptionForZoomManagedSessionStatusSubCode: ", subCode)
      return "Invalid subCode passed to getFriendlyDescriptionForZoomManagedSessionStatusSubCode: " + subCode
  }
}

/**
 * Get a friendly description for the ZoOm Managed Session result status.
 */
export function descriptionForManagedSessionStatus(enumValue: ZoomManagedSessionStatus): string {
  switch (enumValue) {
    case ZoomManagedSessionStatus.Success:
      return "The ZoOm Managed Session processed successfully.";
    case ZoomManagedSessionStatus.UnsuccessCheckSubCode:
      return "The ZoOm Managed Session was not successful. Check the managed session subCode for more details.";
    default:
      return "The ZoOm Managed Session has an unexpected return value: " + enumValue
  }
}
