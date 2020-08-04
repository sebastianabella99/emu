(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/app/modules/common/components/base/base.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/common/components/base/base.component.ts ***!
  \******************************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/workflow/workflow.service */ "./src/app/modules/common/service/workflow/workflow.service.ts");
/* harmony import */ var _service_SendInformation_send_information_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/SendInformation/send-information.service */ "./src/app/modules/common/service/SendInformation/send-information.service.ts");
/* harmony import */ var _CONST__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../CONST */ "./src/app/modules/common/CONST.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_validationRules_validation_rules_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/validationRules/validation-rules.service */ "./src/app/modules/common/service/validationRules/validation-rules.service.ts");
/* harmony import */ var _service_catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/catalogo/catalogo.service */ "./src/app/modules/common/service/catalogo/catalogo.service.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");
/* harmony import */ var _service_postMessages_post_messages_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/postMessages/post-messages.service */ "./src/app/modules/common/service/postMessages/post-messages.service.ts");
/* harmony import */ var _service_authentication_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/authentication/auth.service */ "./src/app/modules/common/service/authentication/auth.service.ts");
/* harmony import */ var src_app_modules_common_service_encryption_cripto_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modules/common/service/encryption/cripto.service */ "./src/app/modules/common/service/encryption/cripto.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var ng_lz_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-lz-string */ "./node_modules/ng-lz-string/ng-lz-string.umd.js");
/* harmony import */ var ng_lz_string__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng_lz_string__WEBPACK_IMPORTED_MODULE_16__);


















class BaseComponent {
    constructor(router, auth, http, workflow, obser, formBuilder, rules, catalogo, deviceService, route, postMessagesService, sanitizer, zipString, cripto) {
        // console.warn('Los siguientes servicios deben estar Inyectados o no se aplico la herencia correctamente:');
        // console.warn('--------------------------');
        // console.log('formBuilder:', formBuilder === undefined ? 'No se inyecto' : 'Inyectado');
        // console.log('router:', router === undefined ? 'No se inyecto' : 'Inyectado');
        // console.log('workflow:', workflow === undefined ? 'No se inyecto' : 'Inyectado');
        // console.log('obser:', obser === undefined ? 'No se inyecto' : 'Inyectado');
        // console.log('rules:', rules === undefined ? 'No se inyecto' : 'Inyectado');
        // console.warn('--------------------------');
        this.router = router;
        this.auth = auth;
        this.http = http;
        this.workflow = workflow;
        this.obser = obser;
        this.formBuilder = formBuilder;
        this.rules = rules;
        this.catalogo = catalogo;
        this.deviceService = deviceService;
        this.route = route;
        this.postMessagesService = postMessagesService;
        this.sanitizer = sanitizer;
        this.zipString = zipString;
        this.cripto = cripto;
        this.prefix = 'data:image/png;base64,';
        this.disableButton = false;
        this.stepId = '';
        this.aliado = this.obser.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_5__["ALIADO"]);
        this.pais = this.obser.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_5__["PAIS"]);
        this.modulo = this.obser.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_5__["MODULO"]);
        this.canal = this.obser.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_5__["CANAL"]);
        this.lenguaje = this.obser.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_5__["LENGUAJE"]);
        this.faceImage = this.obser.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_5__["FACE_IMAGE"]);
        this.imageFront = this.obser.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_5__["IMAGE_FRONT"]);
        this.imageBack = this.obser.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_5__["IMAGE_BACK"]);
        this.formulario = this.formBuilder.group({});
        this.payloadSubscription = this.obser.getData(_CONST__WEBPACK_IMPORTED_MODULE_5__["PAYLOAD"]).subscribe(this.responsePayload());
        this.router.data.subscribe(this.responseRouteData());
        this.obser.getData(_CONST__WEBPACK_IMPORTED_MODULE_5__["ONCALL"]).subscribe(response => {
            this.disableButton = response ? true : false;
        });
    }
    responsePayload() {
        return (response) => {
            if (response) {
                this.payload = response;
                setTimeout(() => this.obser.unSubscribe(this.payloadSubscription), 150);
            }
        };
    }
    responseRouteData() {
        return (data) => {
            this.stepId = data.stepId;
        };
    }
    onBack(payload) {
        this.workflow.workflow(this.stepId, payload());
    }
    onCall(payload) {
        if (this.formulario.valid) {
            this.workflow.workflow(this.stepId, payload());
        }
    }
    // Método para redirigir directo sin pasar por WF
    onRedirect(stepId) {
        this.route.navigate([this.workflow.getRoute(stepId)]);
    }
    setRules(rules, validators = {}) {
        this.formulario = this.formBuilder.group(rules, validators);
    }
    params(keys) {
        const params = {};
        keys.map(item => {
            params[item] = this.obser.lastValue(item);
            return item;
        });
        if (!params.limit) {
            params.limit = '-1';
        }
        return params;
    }
    get deviceInfo() {
        return this.deviceService.getDeviceInfo();
    }
    get isMobile() {
        return this.deviceService.isMobile();
    }
    get isTablet() {
        return this.deviceService.isTablet();
    }
    // get isDesktopDevice(): boolean {
    //   return this.deviceService.isDesktop();
    // }
    get isDesktopDevice() {
        const ua = navigator.userAgent.toLowerCase();
        // tslint:disable-next-line: max-line-length
        return !(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(ua) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4)));
    }
    /* BIOMETRIA */
    get serverEnrollmentKey() {
        return this.obser.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_5__["SERVER_ENROLLMENT_KEY"]);
    }
    set serverEnrollmentKey(serverEnrollmentKey) {
        this.obser.sendData(serverEnrollmentKey, _CONST__WEBPACK_IMPORTED_MODULE_5__["SERVER_ENROLLMENT_KEY"]);
    }
    appReady() {
        this.obser.sendData(false, _CONST__WEBPACK_IMPORTED_MODULE_5__["APP_READY"]);
        this.postMessagesService.appReady();
        return this.obser.getData(_CONST__WEBPACK_IMPORTED_MODULE_5__["APP_READY"]);
    }
    setTitle() {
        this.postMessagesService.setTitle();
    }
    registerPath(initEnrollmentData) {
        this.obser.sendData(false, _CONST__WEBPACK_IMPORTED_MODULE_5__["REGISTER_PATH"]);
        this.postMessagesService.registerPath(initEnrollmentData);
        return this.obser.getData(_CONST__WEBPACK_IMPORTED_MODULE_5__["REGISTER_PATH"]);
    }
    captureFrontDocument(pathId) {
        this.obser.sendData(false, _CONST__WEBPACK_IMPORTED_MODULE_5__["CAPTURE_FRONT_DOCUMENT"]);
        this.postMessagesService.captureFrontDocument(this.serverEnrollmentKey, pathId);
        return this.obser.getData(_CONST__WEBPACK_IMPORTED_MODULE_5__["CAPTURE_FRONT_DOCUMENT"]);
    }
    captureBackDocument() {
        this.obser.sendData(false, _CONST__WEBPACK_IMPORTED_MODULE_5__["CAPTURE_BACK_DOCUMENT"]);
        this.postMessagesService.captureBackDocument(this.serverEnrollmentKey);
        return this.obser.getData(_CONST__WEBPACK_IMPORTED_MODULE_5__["CAPTURE_BACK_DOCUMENT"]);
    }
    captureFace() {
        this.obser.sendData(false, _CONST__WEBPACK_IMPORTED_MODULE_5__["CAPTURE_FACE"]);
        this.postMessagesService.captureFace(this.serverEnrollmentKey);
        return this.obser.getData(_CONST__WEBPACK_IMPORTED_MODULE_5__["CAPTURE_FACE"]);
    }
    /* Falta implementar INTERFACE */
    appFinish() {
        this.obser.sendData(false, _CONST__WEBPACK_IMPORTED_MODULE_5__["APP_FINISH"]);
        this.postMessagesService.appFinish(this.serverEnrollmentKey);
        return this.obser.getData(_CONST__WEBPACK_IMPORTED_MODULE_5__["APP_FINISH"]);
    }
    saveImages(objImage, encryp = false) {
        const formData = new FormData();
        objImage.clientId = this.auth.getClientId();
        formData.append('clientId', objImage.clientId);
        const httpOptions = this.auth.headerTokenInjectorMultipart();
        if (encryp) {
            this.cripto.createEncryptor(this.cripto.getPublickeyMbaas());
            const imgProcess = Object.keys(objImage.images)[0];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.cripto.encrypter(objImage.images[imgProcess])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(this.switchMap(formData, imgProcess, httpOptions)));
        }
        Object.keys(objImage.images).map((data) => formData.append('img_' + data, objImage.images[data]));
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].soporteUploadImage, formData, { headers: httpOptions });
    }
    switchMap(formData, imgProcess, httpOptions) {
        return response => {
            if (response.length < 900000) {
                formData.append(`img_${imgProcess}_0`, response);
            }
            else {
                let cont = 0;
                for (let j = 0; j < response.length; j = j + 900000) {
                    formData.append(`img_${imgProcess}_${cont}`, response.substr(j, 900000));
                    cont++;
                }
            }
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].soporteUploadImage, formData, { headers: httpOptions });
        };
    }
    saveImagesLHC(objImage) {
        const formData = new FormData();
        Object.keys(objImage).map((data, key) => formData.append(data, objImage[data]));
        const httpOptions = this.auth.headerTokenInjectorMultipart();
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].soporteWebAppLHC, formData, { headers: httpOptions });
    }
    hasProperty(object, propertyName) {
        if (Object.keys(object).length === 0) {
            return false;
        }
        if (object.hasOwnProperty(propertyName)) {
            return true;
        }
        return Object.keys(object)
            .map(prop => {
            if (typeof object[prop] === 'object') {
                return this.hasProperty(object[prop], propertyName);
            }
            else {
                return (prop === propertyName);
            }
        })
            .reduce((previousValue, currentValue, index, array) => {
            return previousValue || currentValue;
        });
    }
    existeRuta(data, path, step = 0) {
        let paths = [];
        if (typeof path === 'string') {
            paths = path.split('.');
        }
        if (typeof path === 'object') { // Array
            paths = path;
        }
        if (data[paths[step]] !== undefined && step + 1 === paths.length) {
            return true;
        }
        if (data[paths[step]]) {
            return this.existeRuta(data[paths[step]], paths, step + 1);
        }
        return false;
    }
    get OS() {
        let OSName = 'Desconocido';
        if (navigator.appVersion.indexOf('Win') !== -1) {
            OSName = 'Windows';
        }
        if (navigator.appVersion.indexOf('Mac') !== -1) {
            OSName = 'MacOS';
        }
        if (navigator.appVersion.indexOf('X11') !== -1) {
            OSName = 'UNIX';
        }
        if (navigator.appVersion.indexOf('Linux') !== -1) {
            OSName = 'Linux';
        }
        if (navigator.appVersion.indexOf('Android') !== -1) {
            OSName = 'Android';
        }
        return OSName;
    }
    get HOSTNAME() {
        return location.hostname;
    }
}


/***/ }),

/***/ "./src/app/modules/common/guards/security-access.guard.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/common/guards/security-access.guard.ts ***!
  \****************************************************************/
/*! exports provided: SecurityAccessGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityAccessGuard", function() { return SecurityAccessGuard; });
/* harmony import */ var _service_SendInformation_send_information_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/SendInformation/send-information.service */ "./src/app/modules/common/service/SendInformation/send-information.service.ts");
/* harmony import */ var _CONST__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CONST */ "./src/app/modules/common/CONST.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





class SecurityAccessGuard {
    constructor(guard) {
        this.guard = guard;
        this.guards = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].guards;
    }
    canActivate(route, state) {
        const stepId = route.data.stepId;
        if (!this.guards) {
            return true;
        }
        return this.guard.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_1__["STEP_ID"]) === stepId;
    }
    canDeactivate(component, currentRoute, currentState, nextState) {
        const stepId = currentRoute.data.stepId;
        if (!this.guards) {
            return true;
        }
        return this.guard.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_1__["STEP_ID"]) !== stepId;
    }
    canLoad(route, segments) {
        const stepsId = route.data.child;
        if (!this.guards) {
            return true;
        }
        return stepsId.filter(stepId => this.guard.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_1__["STEP_ID"]) === stepId).length === 1;
    }
}
SecurityAccessGuard.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"]({ factory: function SecurityAccessGuard_Factory() { return new SecurityAccessGuard(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"](_service_SendInformation_send_information_service__WEBPACK_IMPORTED_MODULE_0__["SendInformationService"])); }, token: SecurityAccessGuard, providedIn: "root" });


/***/ })

}]);