(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~apertura-apertura-module~autorizaciones-autorizaciones-module~biometria-biometria-module~dat~df1afa37"],{

/***/ "./src/app/modules/cam/common/components/select-list/select-list-module.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/select-list/select-list-module.module.ts ***!
  \****************************************************************************************/
/*! exports provided: SelectListModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectListModuleModule", function() { return SelectListModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _select_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-list.component */ "./src/app/modules/cam/common/components/select-list/select-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let SelectListModuleModule = class SelectListModuleModule {
};
SelectListModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_select_list_component__WEBPACK_IMPORTED_MODULE_3__["SelectListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
        exports: [_select_list_component__WEBPACK_IMPORTED_MODULE_3__["SelectListComponent"]]
    })
], SelectListModuleModule);



/***/ }),

/***/ "./src/app/modules/cam/common/components/select-list/select-list.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/select-list/select-list.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*, ::after, ::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.dropdown {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-menu.show {\r\n  display: block;\r\n}\r\n\r\n.dropdown-menu {\r\n  width: 100% !important;\r\n  max-height: 30em;\r\n  overflow-y: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1000;\r\n  display: none;\r\n  font-size: 1rem;\r\n  color: #212529;\r\n  text-align: left;\r\n  list-style: none;\r\n  background-color: transparent;\r\n  border-radius: 0;\r\n}\r\n\r\n.dropdown-menu::-webkit-scrollbar-track\r\n{\r\n    -webkit-box-shadow: none;\r\n    border-radius: 5px;\r\n    background-color: rgba(white, 0);\r\n    cursor: pointer !important;\r\n}\r\n\r\n.dropdown-menu::-webkit-scrollbar\r\n{\r\n    width: 5px;\r\n    background-color: rgba(white, 0);\r\n    cursor: pointer !important;\r\n}\r\n\r\n.dropdown-menu::-webkit-scrollbar-thumb\r\n{\r\n    border-radius: 5px;\r\n    -webkit-box-shadow: none;\r\n    background-color: lightgray;\r\n    cursor: pointer !important;\r\n}\r\n\r\n.formGroup__TextSearch {\r\n  width: 100% !important;\r\n  border-radius: 0px !important;\r\n  border-left: 1px solid lightgray;\r\n  border-right: 1px solid lightgray;\r\n  border-bottom: 1px solid lightgray;\r\n  height: 3em;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  opacity: 1 !important;\r\n}\r\n\r\n.formGroup__TextSearch:hover {\r\n  background-color: rgb(255, 255, 255);\r\n  border: 1px solid gray;\r\n}\r\n\r\n.formGroup__TextSearch:first-child {\r\n  border-top: 1px solid lightgray;\r\n}\r\n\r\n.oculto {\r\n  display: none;\r\n}\r\n\r\n.ng-invalid.ng-touched  {\r\n  border-color: #ed1c27 !important;\r\n}\r\n\r\n.cargando {\r\n  color: #575757;\r\n  background-color: rgb(209, 209, 209);\r\n}\r\n\r\n.loader {\r\n  border: 3px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 3px solid #EE3124;\r\n  width: 15px;\r\n  height: 15px;\r\n  -webkit-animation: spin 0.7s linear infinite; /* Safari */\r\n  animation: spin 0.7s linear infinite;\r\n  margin: 4px;\r\n}\r\n\r\n/* Safari */\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYW0vY29tbW9uL2NvbXBvbmVudHMvc2VsZWN0LWxpc3Qvc2VsZWN0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBOztJQUVJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiwwQkFBMEI7QUFDOUI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyxpQ0FBaUM7RUFDakMsa0NBQWtDO0VBQ2xDLFdBQVc7RUFDWCxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNENBQTRDLEVBQUUsV0FBVztFQUN6RCxvQ0FBb0M7RUFDcEMsV0FBVztBQUNiOztBQUVBLFdBQVc7O0FBQ1g7RUFDRSxLQUFLLCtCQUErQixFQUFFO0VBQ3RDLE9BQU8saUNBQWlDLEVBQUU7QUFDNUM7O0FBRUE7RUFDRSxLQUFLLHVCQUF1QixFQUFFO0VBQzlCLE9BQU8seUJBQXlCLEVBQUU7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NhbS9jb21tb24vY29tcG9uZW50cy9zZWxlY3QtbGlzdC9zZWxlY3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiwgOjphZnRlciwgOjpiZWZvcmUge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudS5zaG93IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgbWF4LWhlaWdodDogMzBlbTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcclxue1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh3aGl0ZSwgMCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyXHJcbntcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHdoaXRlLCAwKTtcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcclxue1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtR3JvdXBfX1RleHRTZWFyY2gge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgaGVpZ2h0OiAzZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtR3JvdXBfX1RleHRTZWFyY2g6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG59XHJcblxyXG4uZm9ybUdyb3VwX19UZXh0U2VhcmNoOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG59XHJcblxyXG4ub2N1bHRvIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVkICB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZWQxYzI3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJnYW5kbyB7XHJcbiAgY29sb3I6ICM1NzU3NTc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMjA5LCAyMDkpO1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgI0VFMzEyNDtcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMC43cyBsaW5lYXIgaW5maW5pdGU7IC8qIFNhZmFyaSAqL1xyXG4gIGFuaW1hdGlvbjogc3BpbiAwLjdzIGxpbmVhciBpbmZpbml0ZTtcclxuICBtYXJnaW46IDRweDtcclxufVxyXG5cclxuLyogU2FmYXJpICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/cam/common/components/select-list/select-list.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/select-list/select-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section\n          (mouseleave)='ocutar()'\n          (mouseleave)='sendFocusOut()'\n          class=\"dropdown\"\n          [ngClass]='{\n            show: lista\n          }'\n          style=\"width: 100%;\"\n          >\n          <div class=\"formGroup__input formGroup__input--select\"\n            [ngClass]=\"{\n              'ng-invalid ng-touched': error ? true : false\n            }\"\n            [ngStyle]=\"{\n              'opacity': !disabled ? '1' : '0.5',\n              'cursor': !disabled ? 'pointer' : 'not-allowed'\n            }\"\n            (click)='!disabled ? touch() : ocutar()'\n            (click)='!disabled ? sendFocus() : ocutar()'>\n            {{etiqueta || placeHolder }}\n          </div>\n          <div\n            class='dropdown-menu'\n            [ngClass]='{\n              show: lista\n            }'\n            style=\"position: absolute; transform: translate3d(0px, 38px, 0px); top: 0px; left: 0px; will-change: transform; opacity: 1;\">\n            <div class='formGroup__TextSearch formGroup__input cargando'\n                *ngIf=\"datos.length === 0\"\n                (click)='ocutar()'\n                (click)=\"sendFocus()\">\n                Cargando... <div style=\"float: right;\" class=\"loader\"></div>\n              </div>\n              <div class='formGroup__TextSearch formGroup__input' *ngFor=\"let item of datos\"\n                (click)='setValue(item)'\n                (click)='ocutar()'\n                (click)=\"sendFocus()\">\n                {{ getLabel(item) }}\n              </div>\n          </div>\n        </section>\n"

/***/ }),

/***/ "./src/app/modules/cam/common/components/select-list/select-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/select-list/select-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: SelectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectListComponent", function() { return SelectListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

var SelectListComponent_1;


let SelectListComponent = SelectListComponent_1 = class SelectListComponent {
    constructor() {
        // tslint:disable-next-line: no-inferrable-types
        this.disabled = false;
        // tslint:disable-next-line: no-inferrable-types
        this.placeHolder = 'Seleciona una opción';
        this.datos = [];
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focusout = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getLabel = (item) => item.label;
        this.getValue = (item) => item.value;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.etiqueta = '';
        this.lista = false;
    }
    touch() {
        this.lista = true;
        this.onTouched();
    }
    ocutar() {
        this.lista = false;
    }
    setValue(item) {
        this.etiqueta = this.getLabel(item);
        this.value = this.getValue(item);
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.onChange(value);
        this.onTouched();
        this.change.emit(value);
    }
    writeValue(value) {
        const resto = this.datos.filter(item => this.getValue(item) === value);
        if (resto.length !== 0) {
            this.etiqueta = this.getLabel(resto[0]);
        }
        else {
            this.etiqueta = this.placeHolder;
        }
        this._value = value;
        this.change.emit(resto[0]);
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    sendFocus() {
        this.focus.emit();
    }
    sendFocusOut() {
        this.focusout.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('value'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SelectListComponent.prototype, "_value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SelectListComponent.prototype, "error", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SelectListComponent.prototype, "placeHolder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], SelectListComponent.prototype, "datos", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SelectListComponent.prototype, "change", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SelectListComponent.prototype, "focus", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SelectListComponent.prototype, "focusout", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
], SelectListComponent.prototype, "getLabel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
], SelectListComponent.prototype, "getValue", void 0);
SelectListComponent = SelectListComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'mbaas-select-list',
        template: __webpack_require__(/*! ./select-list.component.html */ "./src/app/modules/cam/common/components/select-list/select-list.component.html"),
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => SelectListComponent_1),
                multi: true
            }
        ],
        styles: [__webpack_require__(/*! ./select-list.component.css */ "./src/app/modules/cam/common/components/select-list/select-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SelectListComponent);



/***/ })

}]);
//# sourceMappingURL=default~apertura-apertura-module~autorizaciones-autorizaciones-module~biometria-biometria-module~dat~df1afa37.js.map