(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/modules/cam/common/components/common-components.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/common-components.module.ts ***!
  \***************************************************************************/
/*! exports provided: CommonComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonComponentsModule", function() { return CommonComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-wizard/form-wizard.component */ "./src/app/modules/cam/common/components/form-wizard/form-wizard.component.ts");




let CommonComponentsModule = class CommonComponentsModule {
};
CommonComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_3__["FormWizardComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_3__["FormWizardComponent"]
        ]
    })
], CommonComponentsModule);



/***/ }),

/***/ "./src/app/modules/cam/common/components/form-wizard/form-wizard.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/form-wizard/form-wizard.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"initialTitle__stepsCounter\">\r\n  <span\r\n    *ngFor=\"let step of stepList\"\r\n    class=\"step\"\r\n    [ngClass]=\"{ 'step--active': step.statusStep }\"\r\n    (click)=\"onSelectStep(step)\"\r\n    >{{ step.numStep }}</span\r\n  >\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/cam/common/components/form-wizard/form-wizard.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/form-wizard/form-wizard.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FtL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0td2l6YXJkL2Zvcm0td2l6YXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/cam/common/components/form-wizard/form-wizard.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/form-wizard/form-wizard.component.ts ***!
  \************************************************************************************/
/*! exports provided: FormWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWizardComponent", function() { return FormWizardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormWizardComponent = class FormWizardComponent {
    constructor() {
        // tslint:disable-next-line: no-output-rename
        this.selectStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.stepList = [];
        this.currentStep = this.currentStep ? this.currentStep : 1;
        this.steps = this.steps ? this.steps : 1;
    }
    ngOnInit() {
        for (let i = 1; i <= this.steps; i += 1) {
            const selected = i <= this.currentStep ? true : false;
            this.stepList.push({
                numStep: i,
                statusStep: selected
            });
        }
    }
    onSelectStep(step) {
        this.selectStep.emit(step.numStep);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('steps'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], FormWizardComponent.prototype, "steps", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('currentStep'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], FormWizardComponent.prototype, "currentStep", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('selectStep'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FormWizardComponent.prototype, "selectStep", void 0);
FormWizardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-wizard',
        template: __webpack_require__(/*! ./form-wizard.component.html */ "./src/app/modules/cam/common/components/form-wizard/form-wizard.component.html"),
        styles: [__webpack_require__(/*! ./form-wizard.component.scss */ "./src/app/modules/cam/common/components/form-wizard/form-wizard.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormWizardComponent);



/***/ }),

/***/ "./src/app/modules/common/guards/forbidden/forbidden.guard.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/common/guards/forbidden/forbidden.guard.ts ***!
  \********************************************************************/
/*! exports provided: ForbiddenGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenGuard", function() { return ForbiddenGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_SendInformation_send_information_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/SendInformation/send-information.service */ "./src/app/modules/common/service/SendInformation/send-information.service.ts");
/* harmony import */ var _CONST__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../CONST */ "./src/app/modules/common/CONST.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let ForbiddenGuard = class ForbiddenGuard {
    constructor(guard, router) {
        this.guard = guard;
        this.router = router;
        this.guards = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].guards;
    }
    canLoad(route, segments) {
        if (!this.guards) {
            return true;
        }
        if (!this.guard.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_4__["STEP_ID"])) {
            this.router.navigate([route.data.stepForbidden]);
        }
        return true;
    }
};
ForbiddenGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_SendInformation_send_information_service__WEBPACK_IMPORTED_MODULE_3__["SendInformationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ForbiddenGuard);



/***/ })

}]);
//# sourceMappingURL=common.js.map