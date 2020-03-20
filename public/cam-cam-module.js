(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cam-cam-module"],{

/***/ "./src/app/modules/cam/cam-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/cam/cam-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CamRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamRoutingModule", function() { return CamRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/guards/security-access.guard */ "./src/app/modules/common/guards/security-access.guard.ts");
/* harmony import */ var _common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/guards/forbidden/forbidden.guard */ "./src/app/modules/common/guards/forbidden/forbidden.guard.ts");





const routes = [
    {
        path: 'ingresos',
        loadChildren: './ingresos/ingresos.module#IngresosModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_4__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_3__["SecurityAccessGuard"]],
        data: {
            stepForbidden: 'forbidden',
            child: [
                'ING001',
                'PLC001'
            ]
        }
    },
    {
        path: 'beneficios',
        loadChildren: './beneficios/beneficios.module#BeneficiosModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_4__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_3__["SecurityAccessGuard"]],
        data: {
            stepForbidden: 'forbidden',
            child: [
                'BEN001'
            ]
        }
    },
    {
        path: 'tpc',
        loadChildren: './tpc/tpc.module#TpcModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_4__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_3__["SecurityAccessGuard"]],
        data: {
            stepForbidden: 'forbidden',
            child: [
                'CUE001'
            ]
        }
    },
    {
        path: 'apertura',
        loadChildren: './apertura/apertura.module#AperturaModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_4__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_3__["SecurityAccessGuard"]],
        data: {
            stepForbidden: 'forbidden',
            child: [
                'CUE003',
                'CUE005',
                'CUE006'
            ]
        }
    },
    {
        path: 'vinculacion',
        loadChildren: './vinculacion/vinculacion.module#VinculacionModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_4__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_3__["SecurityAccessGuard"]],
        data: {
            stepForbidden: 'forbidden',
            child: [
                'VIN001',
                'VIN002',
                'VIN003',
                'VIN004',
                'VIN005',
                'VIN006'
            ]
        }
    },
    {
        path: 'biometria',
        loadChildren: './biometria/biometria.module#BiometriaModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_4__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_3__["SecurityAccessGuard"]],
        data: {
            stepForbidden: 'forbidden',
            child: [
                'BIO001',
                'BIO002',
                'BIO003',
                'BIO004',
                'BIO005'
            ]
        }
    },
    {
        path: 'otp',
        loadChildren: './otp/otp.module#OtpModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_4__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_3__["SecurityAccessGuard"]],
        data: {
            stepForbidden: 'forbidden',
            child: [
                'OTP001'
            ]
        }
    },
    {
        path: 'clave',
        loadChildren: './clave/clave.module#ClaveModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_4__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_3__["SecurityAccessGuard"]],
        data: {
            stepForbidden: 'forbidden',
            child: [
                'CVI001'
            ]
        }
    },
    {
        path: 'autorizaciones',
        loadChildren: './autorizaciones/autorizaciones.module#AutorizacionesModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_4__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_3__["SecurityAccessGuard"]],
        data: {
            stepForbidden: 'forbidden',
            child: [
                'AUT001',
                'AUT002',
                'CRE016',
                'CRE011'
            ]
        }
    },
    {
        path: 'simulador',
        loadChildren: './simulador/simulador.module#SimuladorModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_4__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_3__["SecurityAccessGuard"]],
        data: {
            stepForbidden: 'forbidden',
            child: [
                'CRE001',
                'CRE002'
            ]
        }
    },
    {
        path: 'datos-credito',
        loadChildren: './datos-credito/datos-credito.module#DatosCreditoModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_4__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_3__["SecurityAccessGuard"]],
        data: {
            stepForbidden: 'forbidden',
            child: [
                'CRE004',
                'CRE005',
                'CRE012'
            ]
        }
    },
    {
        path: 'apertura-credito',
        loadChildren: './apertura-credito/apertura-credito.module#AperturaCreditoModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_4__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_3__["SecurityAccessGuard"]],
        data: {
            stepForbidden: 'forbidden',
            child: [
                'CRE006',
                'CRE007',
                'CRE008',
                'CRE009',
                'CRE010'
            ]
        }
    }
];
let CamRoutingModule = class CamRoutingModule {
};
CamRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CamRoutingModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _cam_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cam-routing.module */ "./src/app/modules/cam/cam-routing.module.ts");
/* harmony import */ var _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/components/common-components.module */ "./src/app/modules/cam/common/components/common-components.module.ts");
/* harmony import */ var _common_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/components/base/base.component */ "./src/app/modules/common/components/base/base.component.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");







let CamModule = class CamModule {
};
CamModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_common_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _cam_routing_module__WEBPACK_IMPORTED_MODULE_3__["CamRoutingModule"],
            _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_4__["CommonComponentsModule"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorModule"].forRoot()
        ]
    })
], CamModule);



/***/ })

}]);
//# sourceMappingURL=cam-cam-module.js.map