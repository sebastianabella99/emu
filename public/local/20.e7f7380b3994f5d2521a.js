(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

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


/***/ }),

/***/ "./src/app/modules/menu/menu-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/menu/menu-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MenuRoutingModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuRoutingModule", function() { return MenuRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/guards/security-access.guard */ "./src/app/modules/common/guards/security-access.guard.ts");
/* harmony import */ var _common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/guards/forbidden/forbidden.guard */ "./src/app/modules/common/guards/forbidden/forbidden.guard.ts");



const ɵ0 = {
    stepForbidden: 'forbidden',
    child: [
        'ING001'
    ]
};
const routes = [
    {
        path: 'Productos',
        loadChildren: './productos/productos.module#ProductosModule',
        canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_2__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_1__["SecurityAccessGuard"]],
        data: ɵ0
    }
];
class MenuRoutingModule {
}



/***/ }),

/***/ "./src/app/modules/menu/menu.module.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/modules/menu/menu.module.ngfactory.js ***!
  \*******************************************************/
/*! exports provided: MenuModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModuleNgFactory", function() { return MenuModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _menu_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.module */ "./src/app/modules/menu/menu.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-routing.module */ "./src/app/modules/menu/menu-routing.module.ts");
/* harmony import */ var _common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/guards/forbidden/forbidden.guard */ "./src/app/modules/common/guards/forbidden/forbidden.guard.ts");
/* harmony import */ var _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/guards/security-access.guard */ "./src/app/modules/common/guards/security-access.guard.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var MenuModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_menu_module__WEBPACK_IMPORTED_MODULE_1__["MenuModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _menu_routing_module__WEBPACK_IMPORTED_MODULE_6__["MenuRoutingModule"], _menu_routing_module__WEBPACK_IMPORTED_MODULE_6__["MenuRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorModule"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _menu_module__WEBPACK_IMPORTED_MODULE_1__["MenuModule"], _menu_module__WEBPACK_IMPORTED_MODULE_1__["MenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ROUTES"], function () { return [[{ path: "Productos", loadChildren: "./productos/productos.module#ProductosModule", canLoad: [_common_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_7__["ForbiddenGuard"], _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_8__["SecurityAccessGuard"]], data: _menu_routing_module__WEBPACK_IMPORTED_MODULE_6__["ɵ0"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/modules/menu/menu.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/menu/menu.module.ts ***!
  \*********************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
class MenuModule {
}


/***/ })

}]);