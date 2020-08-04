(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./src/app/modules/cam/cam-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/cam/cam-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CamRoutingModule, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamRoutingModule", function() { return CamRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ3", function() { return ɵ3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ4", function() { return ɵ4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ5", function() { return ɵ5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ6", function() { return ɵ6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ7", function() { return ɵ7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ8", function() { return ɵ8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ9", function() { return ɵ9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ10", function() { return ɵ10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ11", function() { return ɵ11; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/guards/security-access.guard */ "./src/app/modules/common/guards/security-access.guard.ts");
/* harmony import */ var _common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/guards/forbidden/forbidden.guard */ "./src/app/modules/common/guards/forbidden/forbidden.guard.ts");



const ɵ0 = {
    stepForbidden: 'forbidden',
    child: [
        'PCL001'
    ]
}, ɵ1 = {
    stepForbidden: 'forbidden',
    child: [
        'BEN001'
    ]
}, ɵ2 = {
    stepForbidden: 'forbidden',
    child: [
        'CUE001'
    ]
}, ɵ3 = {
    stepForbidden: 'forbidden',
    child: [
        'CUE003',
        'CUE005',
        'CUE006'
    ]
}, ɵ4 = {
    stepForbidden: 'forbidden',
    child: [
        'VIN001',
        'VIN002',
        'VIN003',
        'VIN004',
        'VIN005',
        'VIN006'
    ]
}, ɵ5 = {
    stepForbidden: 'forbidden',
    child: [
        'BIO001',
        'BIO002',
        'BIO003',
        'BIO004',
        'BIO005'
    ]
}, ɵ6 = {
    stepForbidden: 'forbidden',
    child: [
        'OTP001'
    ]
}, ɵ7 = {
    stepForbidden: 'forbidden',
    child: [
        'CVI001'
    ]
}, ɵ8 = {
    stepForbidden: 'forbidden',
    child: [
        'AUT001',
        'AUT002',
        'CRE016',
        'CRE011',
        'CRE017'
    ]
}, ɵ9 = {
    stepForbidden: 'forbidden',
    child: [
        'CRE001',
        'CRE002'
    ]
}, ɵ10 = {
    stepForbidden: 'forbidden',
    child: [
        'CRE004',
        'CRE005',
        'CRE012'
    ]
}, ɵ11 = {
    stepForbidden: 'forbidden',
    child: [
        'CRE006',
        'CRE007',
        'CRE008',
        'CRE009',
        'CRE010'
    ]
};
const routes = [
    {
        path: 'ingresos',
        loadChildren: './ingresos/ingresos.module#IngresosModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_2__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_1__["SecurityAccessGuard"]],
        data: ɵ0
    },
    {
        path: 'beneficios',
        loadChildren: './beneficios/beneficios.module#BeneficiosModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_2__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_1__["SecurityAccessGuard"]],
        data: ɵ1
    },
    {
        path: 'tpc',
        loadChildren: './tpc/tpc.module#TpcModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_2__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_1__["SecurityAccessGuard"]],
        data: ɵ2
    },
    {
        path: 'apertura',
        loadChildren: './apertura/apertura.module#AperturaModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_2__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_1__["SecurityAccessGuard"]],
        data: ɵ3
    },
    {
        path: 'vinculacion',
        loadChildren: './vinculacion/vinculacion.module#VinculacionModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_2__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_1__["SecurityAccessGuard"]],
        data: ɵ4
    },
    {
        path: 'biometria',
        loadChildren: './biometria/biometria.module#BiometriaModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_2__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_1__["SecurityAccessGuard"]],
        data: ɵ5
    },
    {
        path: 'otp',
        loadChildren: './otp/otp.module#OtpModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_2__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_1__["SecurityAccessGuard"]],
        data: ɵ6
    },
    {
        path: 'clave',
        loadChildren: './clave/clave.module#ClaveModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_2__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_1__["SecurityAccessGuard"]],
        data: ɵ7
    },
    {
        path: 'autorizaciones',
        loadChildren: './autorizaciones/autorizaciones.module#AutorizacionesModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_2__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_1__["SecurityAccessGuard"]],
        data: ɵ8
    },
    {
        path: 'simulador',
        loadChildren: './simulador/simulador.module#SimuladorModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_2__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_1__["SecurityAccessGuard"]],
        data: ɵ9
    },
    {
        path: 'datos-credito',
        loadChildren: './datos-credito/datos-credito.module#DatosCreditoModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_2__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_1__["SecurityAccessGuard"]],
        data: ɵ10
    },
    {
        path: 'apertura-credito',
        loadChildren: './apertura-credito/apertura-credito.module#AperturaCreditoModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_2__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_1__["SecurityAccessGuard"]],
        data: ɵ11
    }
];
class CamRoutingModule {
}



/***/ }),

/***/ "./src/app/modules/cam/cam.module.ngfactory.js":
/*!*****************************************************!*\
  !*** ./src/app/modules/cam/cam.module.ngfactory.js ***!
  \*****************************************************/
/*! exports provided: CamModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamModuleNgFactory", function() { return CamModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cam_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cam.module */ "./src/app/modules/cam/cam.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cam_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cam-routing.module */ "./src/app/modules/cam/cam-routing.module.ts");
/* harmony import */ var _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/components/common-components.module */ "./src/app/modules/cam/common/components/common-components.module.ts");
/* harmony import */ var _common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/guards/forbidden/forbidden.guard */ "./src/app/modules/common/guards/forbidden/forbidden.guard.ts");
/* harmony import */ var _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/guards/security-access.guard */ "./src/app/modules/common/guards/security-access.guard.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var CamModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_cam_module__WEBPACK_IMPORTED_MODULE_1__["CamModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _cam_routing_module__WEBPACK_IMPORTED_MODULE_6__["CamRoutingModule"], _cam_routing_module__WEBPACK_IMPORTED_MODULE_6__["CamRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_7__["CommonComponentsModule"], _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_7__["CommonComponentsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorModule"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _cam_module__WEBPACK_IMPORTED_MODULE_1__["CamModule"], _cam_module__WEBPACK_IMPORTED_MODULE_1__["CamModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ROUTES"], function () { return [[{ path: "ingresos", loadChildren: "./ingresos/ingresos.module#IngresosModule", canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_8__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_9__["SecurityAccessGuard"]], data: _cam_routing_module__WEBPACK_IMPORTED_MODULE_6__["ɵ0"] }, { path: "beneficios", loadChildren: "./beneficios/beneficios.module#BeneficiosModule", canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_8__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_9__["SecurityAccessGuard"]], data: _cam_routing_module__WEBPACK_IMPORTED_MODULE_6__["ɵ1"] }, { path: "tpc", loadChildren: "./tpc/tpc.module#TpcModule", canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_8__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_9__["SecurityAccessGuard"]], data: _cam_routing_module__WEBPACK_IMPORTED_MODULE_6__["ɵ2"] }, { path: "apertura", loadChildren: "./apertura/apertura.module#AperturaModule", canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_8__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_9__["SecurityAccessGuard"]], data: _cam_routing_module__WEBPACK_IMPORTED_MODULE_6__["ɵ3"] }, { path: "vinculacion", loadChildren: "./vinculacion/vinculacion.module#VinculacionModule", canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_8__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_9__["SecurityAccessGuard"]], data: _cam_routing_module__WEBPACK_IMPORTED_MODULE_6__["ɵ4"] }, { path: "biometria", loadChildren: "./biometria/biometria.module#BiometriaModule", canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_8__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_9__["SecurityAccessGuard"]], data: _cam_routing_module__WEBPACK_IMPORTED_MODULE_6__["ɵ5"] }, { path: "otp", loadChildren: "./otp/otp.module#OtpModule", canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_8__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_9__["SecurityAccessGuard"]], data: _cam_routing_module__WEBPACK_IMPORTED_MODULE_6__["ɵ6"] }, { path: "clave", loadChildren: "./clave/clave.module#ClaveModule", canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_8__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_9__["SecurityAccessGuard"]], data: _cam_routing_module__WEBPACK_IMPORTED_MODULE_6__["ɵ7"] }, { path: "autorizaciones", loadChildren: "./autorizaciones/autorizaciones.module#AutorizacionesModule", canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_8__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_9__["SecurityAccessGuard"]], data: _cam_routing_module__WEBPACK_IMPORTED_MODULE_6__["ɵ8"] }, { path: "simulador", loadChildren: "./simulador/simulador.module#SimuladorModule", canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_8__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_9__["SecurityAccessGuard"]], data: _cam_routing_module__WEBPACK_IMPORTED_MODULE_6__["ɵ9"] }, { path: "datos-credito", loadChildren: "./datos-credito/datos-credito.module#DatosCreditoModule", canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_8__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_9__["SecurityAccessGuard"]], data: _cam_routing_module__WEBPACK_IMPORTED_MODULE_6__["ɵ10"] }, { path: "apertura-credito", loadChildren: "./apertura-credito/apertura-credito.module#AperturaCreditoModule", canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_8__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_9__["SecurityAccessGuard"]], data: _cam_routing_module__WEBPACK_IMPORTED_MODULE_6__["ɵ11"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/modules/cam/cam.module.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/cam/cam.module.ts ***!
  \*******************************************/
/*! exports provided: CamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamModule", function() { return CamModule; });
class CamModule {
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