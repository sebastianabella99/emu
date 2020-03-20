(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-common-base-base-module"],{

/***/ "./src/app/modules/common/base/base-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/common/base/base-routing.module.ts ***!
  \************************************************************/
/*! exports provided: BaseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRoutingModule", function() { return BaseRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _guards_product_access_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guards/product-access.guard */ "./src/app/modules/common/guards/product-access.guard.ts");
/* harmony import */ var _guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guards/forbidden/forbidden.guard */ "./src/app/modules/common/guards/forbidden/forbidden.guard.ts");





const routes = [
    {
        path: 'solicitudInicial',
        loadChildren: 'src/app/modules/initial/initial.module#InitialModule'
    },
    {
        path: 'cam',
        loadChildren: '../../cam/cam.module#CamModule',
        canLoad: [_guards_forbidden_forbidden_guard__WEBPACK_IMPORTED_MODULE_4__["ForbiddenGuard"], _guards_product_access_guard__WEBPACK_IMPORTED_MODULE_3__["ProductAccessGuard"]],
        data: {
            stepForbidden: 'forbidden'
        }
    },
    {
        path: 'forbidden',
        loadChildren: '../../forbidden/forbidden.module#ForbiddenModule'
    },
    {
        path: '**',
        redirectTo: 'forbidden'
    }
];
let BaseRoutingModule = class BaseRoutingModule {
};
BaseRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaseRoutingModule);



/***/ }),

/***/ "./src/app/modules/common/base/base.module.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/common/base/base.module.ts ***!
  \****************************************************/
/*! exports provided: BaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModule", function() { return BaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _base_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-routing.module */ "./src/app/modules/common/base/base-routing.module.ts");
/* harmony import */ var _service_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/authentication/auth.service */ "./src/app/modules/common/service/authentication/auth.service.ts");
/* harmony import */ var _service_encryption_cripto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/encryption/cripto.service */ "./src/app/modules/common/service/encryption/cripto.service.ts");
/* harmony import */ var _service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/workflow/workflow.service */ "./src/app/modules/common/service/workflow/workflow.service.ts");







let BaseModule = class BaseModule {
};
BaseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _base_routing_module__WEBPACK_IMPORTED_MODULE_3__["BaseRoutingModule"]
        ],
        exports: [],
        providers: [
            _service_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _service_encryption_cripto_service__WEBPACK_IMPORTED_MODULE_5__["CriptoService"],
            _service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_6__["WorkflowService"]
        ]
    })
], BaseModule);



/***/ }),

/***/ "./src/app/modules/common/guards/product-access.guard.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/common/guards/product-access.guard.ts ***!
  \***************************************************************/
/*! exports provided: ProductAccessGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAccessGuard", function() { return ProductAccessGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_SendInformation_send_information_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/SendInformation/send-information.service */ "./src/app/modules/common/service/SendInformation/send-information.service.ts");
/* harmony import */ var _CONST__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CONST */ "./src/app/modules/common/CONST.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let ProductAccessGuard = class ProductAccessGuard {
    constructor(guard) {
        this.guard = guard;
        this.guards = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].guards;
    }
    canLoad(route, segments) {
        if (!this.guards) {
            return true;
        }
        return this.guard.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_3__["PRODUCTO"]);
    }
};
ProductAccessGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_SendInformation_send_information_service__WEBPACK_IMPORTED_MODULE_2__["SendInformationService"]])
], ProductAccessGuard);



/***/ })

}]);
//# sourceMappingURL=modules-common-base-base-module.js.map