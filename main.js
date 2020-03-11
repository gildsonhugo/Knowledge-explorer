(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--ROUTE BLOCK-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _view_mode_view_mode_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-mode/view-mode.component */ "./src/app/view-mode/view-mode.component.ts");
/* harmony import */ var _edit_mode_edit_mode_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-mode/edit-mode.component */ "./src/app/edit-mode/edit-mode.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _view_mode_view_mode_component__WEBPACK_IMPORTED_MODULE_4__["ViewModeComponent"],
                _edit_mode_edit_mode_component__WEBPACK_IMPORTED_MODULE_5__["EditModeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_7__["APP_ROUTING"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_mode_edit_mode_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-mode/edit-mode.component */ "./src/app/edit-mode/edit-mode.component.ts");
/* harmony import */ var _view_mode_view_mode_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-mode/view-mode.component */ "./src/app/view-mode/view-mode.component.ts");



var routes = [
    { path: 'edit', component: _edit_mode_edit_mode_component__WEBPACK_IMPORTED_MODULE_1__["EditModeComponent"] },
    { path: 'view', component: _view_mode_view_mode_component__WEBPACK_IMPORTED_MODULE_2__["ViewModeComponent"] },
    { path: '**', redirectTo: 'edit', pathMatch: 'full' },
];
var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true });


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppService = /** @class */ (function () {
    function AppService() {
    }
    AppService.prototype.setObj = function (obj) {
        window.localStorage.setItem('w25_obj', JSON.stringify(obj));
    };
    AppService.prototype.getObj = function () {
        return JSON.parse(window.localStorage.getItem('w25_obj'));
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/edit-mode/edit-mode.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-mode/edit-mode.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*BLOCK EDIT PADDING*/\r\n.block-edit{\r\n    padding: 20px;\r\n    height: 100vh;\r\n}\r\n*{\r\n    -webkit-user-select: none !important;\r\n       -moz-user-select: none !important;\r\n        -ms-user-select: none !important;\r\n            user-select: none !important;\r\n}\r\n/*IMG TREATMENTS*/\r\n#mainLogo{\r\n    height: 60px;\r\n}\r\n.header-edit h1{\r\n    font-weight: bold !important;\r\n    color: #f07575;\r\n}\r\n.header-edit .btn-danger{\r\n    background: #f07575 !important;\r\n    border: none !important;\r\n    padding: 10px 25px;\r\n}\r\n.header-edit .btn {\r\n    margin-left: 10px;\r\n}\r\n.header-edit .btn img{\r\n    height: 40px;\r\n    margin-right: 10px;\r\n}\r\n/*AREA EDIT STYLE*/\r\n#area-edit{\r\n    background: #f1f1f1;\r\n    margin-top: 20px;\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n#mainSvg{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 1;\r\n}\r\n.item-question{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    font-size: 16pt;\r\n    position: absolute;\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    background: #5d8a92;\r\n    z-index: 2;\r\n    -webkit-user-select: none !important;\r\n       -moz-user-select: none !important;\r\n        -ms-user-select: none !important;\r\n            user-select: none !important;\r\n    -webkit-animation: animateQuestion 300ms;\r\n            animation: animateQuestion 300ms;\r\n}\r\n.line{\r\n    stroke: #cecece;\r\n    stroke-width: 5px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 0;\r\n    -webkit-animation: animateLine 1s;\r\n            animation: animateLine 1s;\r\n    cursor: pointer;\r\n}\r\n.line.selected{\r\n    stroke: yellow;\r\n}\r\n.item-direction{\r\n    position: absolute;\r\n    cursor: pointer;\r\n    z-index: 999;\r\n    font-size: 32pt;\r\n    display: block;\r\n    width: 25px;\r\n    height: 25px;\r\n    line-height: 18px;\r\n    font-weight: bold !important;\r\n}\r\n.right{\r\n    stroke: #06a855;\r\n    color: #06a855;\r\n}\r\n.line-relation.right{\r\n    background: #06a855;\r\n}\r\n.line-relation.right::after{\r\n    border-left-color: #06a855 !important;\r\n}\r\n.line-relation.wrong::after{\r\n    border-left-color: #ff0000 !important;\r\n}\r\n.line-relation.wrong{\r\n    background: #ff0000;\r\n}\r\n.wrong{\r\n    stroke: #ff0000;\r\n    color: #ff0000;\r\n}\r\n.item-question button{\r\n    position: absolute;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    visibility: hidden;\r\n    width: 40px;\r\n    height: 40px;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n.item-question.preview{\r\n    background: #cecece;\r\n    z-index: 0;\r\n}\r\n.item-question.invisibles{\r\n    background: #f1f1f1 !important;\r\n}\r\n.item-question.selected button{\r\n    visibility: visible;\r\n}\r\n.text-question{\r\n    position: absolute;\r\n    z-index: 0;\r\n}\r\n.line-relation{\r\n    position: absolute;\r\n    height: 4px;\r\n    -webkit-transform-origin: left center;\r\n            transform-origin: left center;\r\n}\r\n.line-relation p{\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%) translateY(10px);\r\n            transform: translateX(-50%) translateY(10px);\r\n}\r\n.line-relation::after{\r\n    content: '';\r\n    position: absolute;\r\n    background: transparent;\r\n    z-index: 999999;\r\n    right: 49px;\r\n    top: -13px;\r\n    border-top: 15px solid transparent;\r\n    border-bottom: 15px solid transparent;\r\n    border-left: 25px solid transparent;\r\n}\r\n.item-question button img{\r\n    width: 15px;\r\n}\r\n.item-question button:first-child{\r\n    right: 110px;\r\n}\r\n.item-question button:last-child{\r\n    left: 110px;\r\n}\r\n.line-answer{\r\n    margin-top: 10px;\r\n}\r\n.line-answer .form-group:first-child{\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n    margin-right: 10px;\r\n}\r\n.body-instructions h3{\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n}\r\n/*ANIMATIONS*/\r\n@-webkit-keyframes animateQuestion{\r\n    from{\r\n        opacity: 0;\r\n        -webkit-transform: scale(0);\r\n                transform: scale(0);\r\n    }\r\n    to{\r\n        opacity: 1;\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n    }\r\n}\r\n@keyframes animateQuestion{\r\n    from{\r\n        opacity: 0;\r\n        -webkit-transform: scale(0);\r\n                transform: scale(0);\r\n    }\r\n    to{\r\n        opacity: 1;\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n    }\r\n}\r\n@-webkit-keyframes animateLine{\r\n    from{\r\n        stroke-dashoffset: 1000;\r\n    }\r\n    to{\r\n        stroke-dashoffset: 0;\r\n    }\r\n}\r\n@keyframes animateLine{\r\n    from{\r\n        stroke-dashoffset: 1000;\r\n    }\r\n    to{\r\n        stroke-dashoffset: 0;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1tb2RlL2VkaXQtbW9kZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFxQjtBQUNyQjtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxvQ0FBNEI7T0FBNUIsaUNBQTRCO1FBQTVCLGdDQUE0QjtZQUE1Qiw0QkFBNEI7QUFDaEM7QUFFQSxpQkFBaUI7QUFFakI7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUVBLGtCQUFrQjtBQUVsQjtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQU87WUFBUCxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osT0FBTztJQUNQLE1BQU07SUFDTixVQUFVO0FBQ2Q7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixvQ0FBNEI7T0FBNUIsaUNBQTRCO1FBQTVCLGdDQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsd0NBQWdDO1lBQWhDLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLHFDQUFxQztBQUN6QztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQWE7SUFBYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkO0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULG9EQUE0QztZQUE1Qyw0Q0FBNEM7QUFDaEQ7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVTtJQUNWLGtDQUFrQztJQUNsQyxxQ0FBcUM7SUFDckMsbUNBQW1DO0FBQ3ZDO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxtQkFBTztZQUFQLE9BQU87SUFDUCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFFQSxhQUFhO0FBRWI7SUFDSTtRQUNJLFVBQVU7UUFDViwyQkFBbUI7Z0JBQW5CLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLDJCQUFtQjtnQkFBbkIsbUJBQW1CO0lBQ3ZCO0FBQ0o7QUFUQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLDJCQUFtQjtnQkFBbkIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsMkJBQW1CO2dCQUFuQixtQkFBbUI7SUFDdkI7QUFDSjtBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLG9CQUFvQjtJQUN4QjtBQUNKO0FBUEE7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9lZGl0LW1vZGUvZWRpdC1tb2RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkJMT0NLIEVESVQgUEFERElORyovXHJcbi5ibG9jay1lZGl0e1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbip7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKklNRyBUUkVBVE1FTlRTKi9cclxuXHJcbiNtYWluTG9nb3tcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLmhlYWRlci1lZGl0IGgxe1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZjA3NTc1O1xyXG59XHJcblxyXG4uaGVhZGVyLWVkaXQgLmJ0bi1kYW5nZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjA3NTc1ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxufVxyXG5cclxuLmhlYWRlci1lZGl0IC5idG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItZWRpdCAuYnRuIGltZ3tcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLypBUkVBIEVESVQgU1RZTEUqL1xyXG5cclxuI2FyZWEtZWRpdHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZmxleDogMTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4jbWFpblN2Z3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5pdGVtLXF1ZXN0aW9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE2cHQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogIzVkOGE5MjtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlUXVlc3Rpb24gMzAwbXM7XHJcbn1cclxuXHJcbi5saW5le1xyXG4gICAgc3Ryb2tlOiAjY2VjZWNlO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiA1cHg7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxMDAwO1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICBhbmltYXRpb246IGFuaW1hdGVMaW5lIDFzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGluZS5zZWxlY3RlZHtcclxuICAgIHN0cm9rZTogeWVsbG93O1xyXG59XHJcblxyXG4uaXRlbS1kaXJlY3Rpb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBmb250LXNpemU6IDMycHQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmlnaHR7XHJcbiAgICBzdHJva2U6ICMwNmE4NTU7XHJcbiAgICBjb2xvcjogIzA2YTg1NTtcclxufVxyXG5cclxuLmxpbmUtcmVsYXRpb24ucmlnaHR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDZhODU1O1xyXG59XHJcblxyXG4ubGluZS1yZWxhdGlvbi5yaWdodDo6YWZ0ZXJ7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzA2YTg1NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGluZS1yZWxhdGlvbi53cm9uZzo6YWZ0ZXJ7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2ZmMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGluZS1yZWxhdGlvbi53cm9uZ3tcclxuICAgIGJhY2tncm91bmQ6ICNmZjAwMDA7XHJcbn1cclxuXHJcbi53cm9uZ3tcclxuICAgIHN0cm9rZTogI2ZmMDAwMDtcclxuICAgIGNvbG9yOiAjZmYwMDAwO1xyXG59XHJcblxyXG4uaXRlbS1xdWVzdGlvbiBidXR0b257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pdGVtLXF1ZXN0aW9uLnByZXZpZXd7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2VjZWNlO1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG5cclxuLml0ZW0tcXVlc3Rpb24uaW52aXNpYmxlc3tcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLml0ZW0tcXVlc3Rpb24uc2VsZWN0ZWQgYnV0dG9ue1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLnRleHQtcXVlc3Rpb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4ubGluZS1yZWxhdGlvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubGluZS1yZWxhdGlvbiBwe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoMTBweCk7XHJcbn1cclxuXHJcbi5saW5lLXJlbGF0aW9uOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgICByaWdodDogNDlweDtcclxuICAgIHRvcDogLTEzcHg7XHJcbiAgICBib3JkZXItdG9wOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaXRlbS1xdWVzdGlvbiBidXR0b24gaW1ne1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbn1cclxuXHJcbi5pdGVtLXF1ZXN0aW9uIGJ1dHRvbjpmaXJzdC1jaGlsZHtcclxuICAgIHJpZ2h0OiAxMTBweDtcclxufVxyXG5cclxuLml0ZW0tcXVlc3Rpb24gYnV0dG9uOmxhc3QtY2hpbGR7XHJcbiAgICBsZWZ0OiAxMTBweDtcclxufVxyXG5cclxuLmxpbmUtYW5zd2Vye1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmxpbmUtYW5zd2VyIC5mb3JtLWdyb3VwOmZpcnN0LWNoaWxke1xyXG4gICAgZmxleDogMTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmJvZHktaW5zdHJ1Y3Rpb25zIGgze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLypBTklNQVRJT05TKi9cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZVF1ZXN0aW9ue1xyXG4gICAgZnJvbXtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB9XHJcbiAgICB0b3tcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZUxpbmV7XHJcbiAgICBmcm9te1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDAwO1xyXG4gICAgfVxyXG4gICAgdG97XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/edit-mode/edit-mode.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-mode/edit-mode.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal Instructions -->\n<div class=\"modal fade\" id=\"modalinstructions\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n     aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Instructions</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body d-flex flex-column justify-content-center body-instructions\">\n                <h3>Welcome to Knowledge explorer!</h3>\n                <p>- To create slides, press and hold shift key, click and drag in a question to a clear place</p>\n                <p>- To connect slides, press and hold shift key, click and drag in a question to a another question</p>\n                <p>- To edit the content of question and answers, doubleclick on a question, and click on the icon of edition;</p>\n                <p>- To change the direction of a answer, doubleclick a link;</p>\n                <p>- To delete a link or question, click on link, or doubleclick a question, and press delete key.</p>\n                <p>- To move all elements press and hold shift key, click and drag on edition board.</p>\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Ok, i understand.</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!--MODAL EDIT-->\n\n<input type=\"file\" style=\"display: none;\" id=\"inputImport\" accept=\"application/json\" #inputImport>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n     aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\" *ngIf=\"questionSelected\">Edit Question {{questionSelected.id}}</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <textarea name=\"textarea\" id=\"textarea\" cols=\"30\" rows=\"10\"></textarea>\n\n                <div class=\"d-flex align-items-center justify-content-between line-answer\" *ngFor=\"let relation of relationsSelected\">\n                    <div class=\"form-group\">\n                        <label>Edit Answer for question {{relation.question2}}</label>\n                        <input type=\"text\" class=\"form-control\" name=\"answer{{relation.question2}}\" [(ngModel)]=\"relation.content\">\n                    </div>\n                    <div class=\"form-group form-check\">\n                        <input [(ngModel)]=\"relation.correct\" (ngModelChange)=\"turnRight($event, relation)\" type=\"checkbox\" name=\"right{{relation.question2}}\" class=\"form-check-input\" id=\"right{{relation.question2}}\">\n                        <label class=\"form-check-label\" for=\"right{{relation.question2}}\">Correct answer</label>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!--MAIN BLOCK EDIT-->\n<div class=\"block-edit d-flex flex-column\">\n\n    <!--HEADER EDIT MODE-->\n    <div class=\"d-flex justify-content-between header-edit align-items-center\">\n        <img src=\"assets/img/logo.png\" id=\"mainLogo\" alt=\"image-logo\">\n        <h1>Edit Mode</h1>\n        <div>\n            <button class=\"btn btn-success\" (click)=\"export()\">Export</button>\n            <button class=\"btn btn-secondary\" (click)=\"inputImport.click()\">Import</button>\n            <a id=\"button-viewmode\" [routerLink]=\"['/view']\" class=\"btn btn-danger\" aria-details=\"button-viewmode\"><img\n                    src=\"assets/img/viewmode.png\" alt=\"image-viewmode\"> View mode</a>\n        </div>\n\n    </div>\n\n    <div id=\"area-edit\">\n\n        <!--<svg id=\"mainSvg\">-->\n\n            <!--<line (click)=\"setRelationSelected(rel)\" class=\"line\" (dblclick)=\"toggleDirectionAnswer(rel)\"-->\n                  <!--[ngClass]=\"{'right': rel.correct, 'wrong': !rel.correct, 'selected': relationSelected == rel}\" *ngFor=\"let rel of mainObj.relations\"-->\n                  <!--[attr.x1]=\"getQuestionFromId(rel.question1)?.x+50\" [attr.x2]=\"getQuestionFromId(rel.question2)?.x+50\"-->\n                  <!--[attr.y1]=\"getQuestionFromId(rel.question1)?.y+50\"-->\n                  <!--[attr.y2]=\"getQuestionFromId(rel.question2)?.y+50\"></line>-->\n\n        <!--</svg>-->\n\n        <!--<div class=\"item-direction\" (dblclick)=\"toggleDirectionAnswer(rel)\" [ngClass]=\"{'right': rel.correct, 'wrong': !rel.correct}\"-->\n             <!--[ngStyle]=\"{'left': getMiddleX(rel)+'px', 'top': getMiddleY(rel)y+'px', 'transform': 'rotate('+getAngleBetweenTwoPoints(rel)+'deg)'}\"-->\n             <!--*ngFor=\"let rel of mainObj.relations\"> >-->\n        <!--</div>-->\n\n        <div class=\"line-relation\" [ngClass]=\"{'right': rel.correct, 'wrong': !rel.correct, 'selected': relationSelected == rel}\" (dblclick)=\"toggleDirectionAnswer(rel)\" *ngFor=\"let rel of mainObj.relations\" [ngStyle]=\"{'left': getQuestionFromId(rel.question1).x+50+'px', 'top': getQuestionFromId(rel.question1).y+50+'px' ,'width': getDistanceOfRel(rel)+'px', 'transform': 'rotate('+getAngleBetweenTwoPoints(rel)+'deg)'}\">\n            <p>{{rel.content}}</p>\n        </div>\n        \n\n        <div class=\"item-question\" [ngClass]=\"{'selected': question == questionSelected, 'preview': questionPreview && question == questionPreview}\"\n             (dblclick)=\"setQuestionSelected(question)\" [attr.data-questionid]=\"question.id\"\n             (mousedown)=\"setQuestionMove(question)\" [ngStyle]=\"{'left': question.x+'px', 'top': question.y+'px'}\"\n             *ngFor=\"let question of mainObj.questions\">\n            <button class=\"btn btn-danger\" (click)=\"deleteQuestion()\"><img src=\"assets/img/delete.png\" alt=\"img\"></button>\n            {{ question.id == 1 || question.id == 2 ? question.id == 1 ? \"B\" : \"E\" : '' }}\n            <button class=\"btn btn-primary\" (click)=\"openModal()\"><img src=\"assets/img/edit-question.png\" alt=\"img\">\n            </button>\n        </div>\n\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/edit-mode/edit-mode.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-mode/edit-mode.component.ts ***!
  \**************************************************/
/*! exports provided: EditModeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModeComponent", function() { return EditModeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");



var EditModeComponent = /** @class */ (function () {
    function EditModeComponent(service, changes, zone) {
        this.service = service;
        this.changes = changes;
        this.zone = zone;
        /*MAIN VARIABLES*/
        this.mainObj = null;
        this.questionMove = null;
        this.questionOrigin = null;
        this.moveAll = null;
        this.questionSelected = null;
        this.relationSelected = null;
        this.relPreview = null;
        this.questionPreview = null;
        this.relationsSelected = [];
        /*STATUS VARIABLES*/
        this.mouseIsDown = false;
        this.shiftIsDown = false;
    }
    EditModeComponent.prototype.ngOnInit = function () {
        CKEDITOR.replace('textarea');
        if (!window.localStorage.getItem('w25_obj') || this.mainObj && !this.mainObj.questions.length) {
            this.startObj();
        }
        this.getObject();
        this.startListeners();
        this.changes.detectChanges();
        $('#modalinstructions').modal('show');
    };
    /*START OBJ ON LOCALSTORAGE*/
    EditModeComponent.prototype.startObj = function () {
        var block = $('#area-edit')[0];
        var halfWidth = parseInt(block.offsetWidth) / 2;
        var halfHeight = parseInt(block.offsetHeight) / 2;
        var obj = {
            questions: [
                {
                    id: 1,
                    content: '',
                    start: true,
                    end: false,
                    x: halfWidth - 200,
                    y: halfHeight - 50
                },
                {
                    id: 2,
                    content: '',
                    start: false,
                    end: true,
                    x: halfWidth + 100,
                    y: halfHeight - 50
                }
            ],
            relations: [
            // {
            //   question1: 1,
            //   question2: 2,
            //   answer1: true,
            //   answer2: false,
            //   correct: true,
            //   content: ''
            // }
            ]
        };
        this.service.setObj(obj);
    };
    /*OBJECT FUNCTIONS*/
    EditModeComponent.prototype.getObject = function () {
        this.mainObj = this.service.getObj();
    };
    EditModeComponent.prototype.getQuestionFromId = function (id) {
        return this.mainObj.questions.find(function (i) { return i.id == id; });
    };
    EditModeComponent.prototype.updateObj = function () {
        this.service.setObj(this.mainObj);
    };
    /*SETTERS*/
    EditModeComponent.prototype.setQuestionMove = function (q) {
        if (!this.shiftIsDown) {
            this.questionMove = q;
        }
        else {
            if (!this.questionOrigin) {
                this.questionOrigin = q;
                this.generateNewQuestion(this.questionOrigin);
            }
        }
    };
    EditModeComponent.prototype.setQuestionSelected = function (q) {
        if (q && q.id == 2)
            return false;
        this.questionSelected = q;
        if (q)
            this.getRelationsOfSelection();
    };
    EditModeComponent.prototype.setRelationSelected = function (q) {
        this.relationSelected = q;
    };
    /*GETTERS*/
    EditModeComponent.prototype.getMiddleX = function (rel) {
        var slide1 = this.getQuestionFromId(rel.question1);
        var slide2 = this.getQuestionFromId(rel.question2);
        return slide1.x + ((slide2.x - slide1.x) / 2) + 50;
    };
    EditModeComponent.prototype.getMiddleY = function (rel) {
        var slide1 = this.getQuestionFromId(rel.question1);
        var slide2 = this.getQuestionFromId(rel.question2);
        return slide1.y + ((slide2.y - slide1.y) / 2) + 25;
    };
    EditModeComponent.prototype.getAngleBetweenTwoPoints = function (rel) {
        var q1 = this.getQuestionFromId(rel.question1);
        var q2 = this.getQuestionFromId(rel.question2);
        return Math.atan2(q2.y - q1.y, q2.x - q1.x) * 180 / Math.PI;
    };
    EditModeComponent.prototype.getDistanceOfRel = function (rel) {
        var q1 = this.getQuestionFromId(rel.question1);
        var q2 = this.getQuestionFromId(rel.question2);
        return Math.sqrt(((q2.x - q1.x) * (q2.x - q1.x)) + ((q2.y - q1.y) * (q2.y - q1.y)));
    };
    /*LISTENERS*/
    EditModeComponent.prototype.startListeners = function () {
        var _this = this;
        $('#exampleModal').on('show.bs.modal', function (e) {
            CKEDITOR.instances.textarea.setData(_this.questionSelected.content);
        });
        $('#inputImport').on('change', function (e) {
            var file = e.target.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                var result = reader.result;
                _this.service.setObj(JSON.parse(result));
                _this.mainObj = _this.service.getObj();
                _this.updateObj();
            };
            reader.readAsText(file);
        });
        $('#exampleModal').on('hide.bs.modal', function (e) {
            var data = CKEDITOR.instances.textarea.getData();
            _this.questionSelected.content = data;
            _this.updateObj();
            _this.setQuestionSelected(null);
        });
        $(document).on('click', function (e) {
            if (e.target.id == 'area-edit') {
                _this.setQuestionSelected(null);
                _this.setRelationSelected(null);
            }
        });
        $(document).on('mousemove', function (e) {
            if (_this.questionMove && !_this.moveAll && !_this.questionSelected) {
                var block = $('#area-edit')[0];
                var x = (e.pageX - block.offsetLeft) - 50;
                var y = (e.pageY - block.offsetTop) - 50;
                _this.questionMove.x = x;
                _this.questionMove.y = y;
                _this.updateObj();
            }
            if (_this.questionPreview) {
                if (!e.target.classList.contains('preview') && e.target.classList.contains('item-question')) {
                    $('.item-question.preview').addClass('invisibles');
                }
                else {
                    // $('.item-question.preview').css({
                    //   'background-color': '#5d8a92'
                    // });
                    $('.item-question.preview').removeClass('invisibles');
                }
                var block = $('#area-edit')[0];
                var x = (e.pageX - block.offsetLeft) - 50;
                var y = (e.pageY - block.offsetTop) - 50;
                _this.questionPreview.x = x;
                _this.questionPreview.y = y;
            }
            if (_this.moveAll) {
                _this.mainObj.questions.map(function (q) {
                    q.x += e.pageX - _this.moveAll.x;
                    q.y += e.pageY - _this.moveAll.y;
                });
                _this.moveAll = {
                    x: e.pageX,
                    y: e.pageY
                };
            }
        });
        $(document).on('mousedown', function (e) {
            _this.mouseIsDown = true;
            if (e.target.id == 'area-edit' && _this.shiftIsDown) {
                _this.moveAll = {
                    x: e.pageX,
                    y: e.pageY
                };
            }
        });
        $(document).on('mouseup', function (e) {
            _this.mouseIsDown = false;
            _this.moveAll = null;
            _this.setQuestionMove(null);
            _this.relPreview = null;
            if (_this.questionPreview)
                _this.questionPreview.preview = false;
            _this.questionPreview = null;
            if (_this.shiftIsDown && e.target && e.target.id == 'area-edit') {
                var block = $('#area-edit')[0];
            }
            if (_this.questionOrigin && _this.shiftIsDown && e.target.classList.contains('item-question') && !e.target.classList.contains('preview')) {
                var toSlide = _this.getQuestionFromId(e.target.dataset.questionid);
                _this.generateNewRelation(_this.questionOrigin, toSlide);
            }
            _this.questionOrigin = null;
            _this.updateObj();
        });
        $(document).on('keydown', function (e) {
            if (e.which == 16) {
                _this.shiftIsDown = true;
            }
        });
        $(document).on('keyup', function (e) {
            if (e.which == 16) {
                _this.shiftIsDown = false;
            }
            if (e.which == 46) {
                _this.deleteQuestion();
                _this.deleteRelation();
            }
        });
    };
    EditModeComponent.prototype.generatePreviewQuestion = function () {
        var lastId = this.mainObj.questions[this.mainObj.questions.length - 1].id;
        var newId = lastId + 1;
        this.questionPreview = {
            id: newId,
            content: '',
            start: false,
            end: false,
            x: this.questionOrigin.x,
            y: this.questionOrigin.y,
            preview: false
        };
    };
    // GENERATES A NEW RELATION
    EditModeComponent.prototype.generateNewRelation = function (q1, q2) {
        var rel = this.mainObj.relations.find(function (r) { return r.question1 == q1.id && r.question2 == q2.id; });
        if (rel)
            return false;
        if (q1 && q2) {
            var objRelation = {
                question1: q1.id,
                question2: q2.id,
                answer1: true,
                answer2: false,
                correct: false,
                content: ''
            };
            this.mainObj.relations.push(objRelation);
            this.deleteQuestion(this.mainObj.questions[this.mainObj.questions.length - 1]);
            this.updateObj();
        }
    };
    // GENERATES A NEW QUESTION
    EditModeComponent.prototype.generateNewQuestion = function (questionOrigin) {
        var _this = this;
        if (this.questionOrigin) {
            var lastId = this.mainObj.questions[this.mainObj.questions.length - 1].id;
            var newId = lastId + 1;
            var newQuestion = {
                id: newId,
                content: '',
                start: false,
                end: false,
                x: questionOrigin.x,
                y: questionOrigin.y,
                preview: true,
            };
            this.questionPreview = newQuestion;
            var relation_1 = {
                question1: questionOrigin.id,
                question2: newQuestion.id,
                answer1: true,
                answer2: false,
                correct: false,
                content: ''
            };
            this.mainObj.questions.push(newQuestion);
            setTimeout(function () {
                _this.mainObj.relations.push(relation_1);
                _this.updateObj();
                // this.questionOrigin = null;
            }, 300);
        }
    };
    // TOGGLE THE DIRECTION OF A LINK
    EditModeComponent.prototype.toggleDirectionAnswer = function (rel) {
        var question1 = rel.question1;
        rel.question1 = rel.question2;
        rel.question2 = question1;
        this.updateObj();
    };
    // OPEN MODAL EDITION
    EditModeComponent.prototype.openModal = function () {
        $('#exampleModal').modal('show');
    };
    // GET RELATIONS OF QUESTION SELECTED
    EditModeComponent.prototype.getRelationsOfSelection = function () {
        var _this = this;
        this.relationsSelected = this.mainObj.relations.filter(function (r) { return r.question1 == _this.questionSelected.id && r.answer1; });
    };
    //TURN A ANSWER RIGHT
    EditModeComponent.prototype.turnRight = function (event, relation) {
        relation.correct = event;
        this.updateObj();
    };
    // DELETES
    EditModeComponent.prototype.deleteQuestion = function (question) {
        var _this = this;
        if (question === void 0) { question = null; }
        if (!question && this.questionSelected) {
            if (this.questionSelected.id == 1 || this.questionSelected.id == 2)
                return false;
            this.zone.run(function () {
                _this.mainObj.relations = _this.mainObj.relations.filter(function (r) { return r.question1 != _this.questionSelected.id && r.question2 != _this.questionSelected.id; });
                _this.mainObj.questions = _this.mainObj.questions.filter(function (q) { return q != _this.questionSelected; });
                _this.setQuestionSelected(null);
                _this.updateObj();
            });
        }
        else {
            this.zone.run(function () {
                _this.mainObj.relations = _this.mainObj.relations.filter(function (r) { return r.question1 != question.id && r.question2 != question.id; });
                _this.mainObj.questions = _this.mainObj.questions.filter(function (q) { return q != question; });
                _this.setQuestionSelected(null);
                _this.updateObj();
            });
        }
    };
    EditModeComponent.prototype.deleteRelation = function () {
        var _this = this;
        if (this.relationSelected) {
            this.zone.run(function () {
                _this.mainObj.relations = _this.mainObj.relations.filter(function (r) { return r != _this.relationSelected; });
                _this.setRelationSelected(null);
                _this.updateObj();
            });
        }
    };
    EditModeComponent.prototype.export = function () {
        var data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.service.getObj()));
        var a = document.createElement('a');
        a.setAttribute('href', data);
        a.setAttribute('download', 'data.json');
        a.click();
    };
    EditModeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-mode',
            template: __webpack_require__(/*! ./edit-mode.component.html */ "./src/app/edit-mode/edit-mode.component.html"),
            styles: [__webpack_require__(/*! ./edit-mode.component.css */ "./src/app/edit-mode/edit-mode.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], EditModeComponent);
    return EditModeComponent;
}());



/***/ }),

/***/ "./src/app/view-mode/view-mode.component.css":
/*!***************************************************!*\
  !*** ./src/app/view-mode/view-mode.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*BLOCK VIEW MODE TREATMENT*/\r\n\r\n.block-view{\r\n    width: 100%;\r\n    padding: 20px;\r\n    height: 100vh;\r\n    background: #f1f1f1;\r\n}\r\n\r\n.header .btn{\r\n    background: #f07575 !important;\r\n    border: none !important;\r\n    padding: 5px 15px;\r\n}\r\n\r\n.header .btn img{\r\n    height: 40px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.block-statistcs{\r\n    background: #fff;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n}\r\n\r\n.block-content{\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    position: relative;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.contentquestion{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.block-content > *{\r\n    position: absolute;\r\n    width: 100%;\r\n}\r\n\r\n.block-alternatives{\r\n    margin-top: 20px;\r\n}\r\n\r\n.block-alternatives button{\r\n    -webkit-transition: all 300ms;\r\n    transition: all 300ms;\r\n    margin: 10px;\r\n}\r\n\r\n.wrongAnimation{\r\n    -webkit-animation: wrongAnimation 300ms linear;\r\n            animation: wrongAnimation 300ms linear;\r\n}\r\n\r\n.correctAnimation{\r\n    -webkit-animation: correctAnimation 300ms linear;\r\n            animation: correctAnimation 300ms linear;\r\n}\r\n\r\n.slideToLeft{\r\n    -webkit-animation: slideToLeft 1s;\r\n            animation: slideToLeft 1s;\r\n}\r\n\r\n.slideFromRight{\r\n    -webkit-animation: slideFromRight 1s;\r\n            animation: slideFromRight 1s;\r\n}\r\n\r\n/*STATISTICS RESULTS*/\r\n\r\ntable{\r\n    margin-top: 20px;\r\n    width: 800px;\r\n}\r\n\r\n/*ANIMATIONS*/\r\n\r\n@-webkit-keyframes wrongAnimation {\r\n    0%, 50%, 100%{-webkit-transform: translate(0,0);transform: translate(0,0);}\r\n    25%{-webkit-transform: translate(-20px,0);transform: translate(-20px,0);}\r\n    75%{-webkit-transform: translate(20px,0);transform: translate(20px,0);}\r\n}\r\n\r\n@keyframes wrongAnimation {\r\n    0%, 50%, 100%{-webkit-transform: translate(0,0);transform: translate(0,0);}\r\n    25%{-webkit-transform: translate(-20px,0);transform: translate(-20px,0);}\r\n    75%{-webkit-transform: translate(20px,0);transform: translate(20px,0);}\r\n}\r\n\r\n@-webkit-keyframes correctAnimation {\r\n    0%, 50%, 100%{-webkit-transform: translate(0,0);transform: translate(0,0);}\r\n    25%{-webkit-transform: translate(0,-20px);transform: translate(0,-20px);}\r\n    75%{-webkit-transform: translate(0,20px);transform: translate(0,20px);}\r\n}\r\n\r\n@keyframes correctAnimation {\r\n    0%, 50%, 100%{-webkit-transform: translate(0,0);transform: translate(0,0);}\r\n    25%{-webkit-transform: translate(0,-20px);transform: translate(0,-20px);}\r\n    75%{-webkit-transform: translate(0,20px);transform: translate(0,20px);}\r\n}\r\n\r\n@-webkit-keyframes slideToLeft {\r\n    from{\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n    }\r\n    to{\r\n        -webkit-transform: translateX(-100%);\r\n                transform: translateX(-100%);\r\n    }\r\n}\r\n\r\n@keyframes slideToLeft {\r\n    from{\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n    }\r\n    to{\r\n        -webkit-transform: translateX(-100%);\r\n                transform: translateX(-100%);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes slideFromRight {\r\n    from{\r\n        -webkit-transform: translateX(100%);\r\n                transform: translateX(100%);\r\n    }\r\n    to{\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n    }\r\n}\r\n\r\n@keyframes slideFromRight {\r\n    from{\r\n        -webkit-transform: translateX(100%);\r\n                transform: translateX(100%);\r\n    }\r\n    to{\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1tb2RlL3ZpZXctbW9kZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0Qjs7QUFFNUI7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBTztZQUFQLE9BQU87SUFDUCxvQkFBYTtJQUFiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUFxQjtJQUFyQixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDhDQUFzQztZQUF0QyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxnREFBd0M7WUFBeEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksaUNBQXlCO1lBQXpCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG9DQUE0QjtZQUE1Qiw0QkFBNEI7QUFDaEM7O0FBRUEscUJBQXFCOztBQUVyQjtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBLGFBQWE7O0FBRWI7SUFDSSxjQUFjLGlDQUF5QixDQUF6Qix5QkFBeUIsQ0FBQztJQUN4QyxJQUFJLHFDQUE2QixDQUE3Qiw2QkFBNkIsQ0FBQztJQUNsQyxJQUFJLG9DQUE0QixDQUE1Qiw0QkFBNEIsQ0FBQztBQUNyQzs7QUFKQTtJQUNJLGNBQWMsaUNBQXlCLENBQXpCLHlCQUF5QixDQUFDO0lBQ3hDLElBQUkscUNBQTZCLENBQTdCLDZCQUE2QixDQUFDO0lBQ2xDLElBQUksb0NBQTRCLENBQTVCLDRCQUE0QixDQUFDO0FBQ3JDOztBQUVBO0lBQ0ksY0FBYyxpQ0FBeUIsQ0FBekIseUJBQXlCLENBQUM7SUFDeEMsSUFBSSxxQ0FBNkIsQ0FBN0IsNkJBQTZCLENBQUM7SUFDbEMsSUFBSSxvQ0FBNEIsQ0FBNUIsNEJBQTRCLENBQUM7QUFDckM7O0FBSkE7SUFDSSxjQUFjLGlDQUF5QixDQUF6Qix5QkFBeUIsQ0FBQztJQUN4QyxJQUFJLHFDQUE2QixDQUE3Qiw2QkFBNkIsQ0FBQztJQUNsQyxJQUFJLG9DQUE0QixDQUE1Qiw0QkFBNEIsQ0FBQztBQUNyQzs7QUFFQTtJQUNJO1FBQ0ksZ0NBQXdCO2dCQUF4Qix3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLG9DQUE0QjtnQkFBNUIsNEJBQTRCO0lBQ2hDO0FBQ0o7O0FBUEE7SUFDSTtRQUNJLGdDQUF3QjtnQkFBeEIsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxvQ0FBNEI7Z0JBQTVCLDRCQUE0QjtJQUNoQztBQUNKOztBQUVBO0lBQ0k7UUFDSSxtQ0FBMkI7Z0JBQTNCLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksZ0NBQXdCO2dCQUF4Qix3QkFBd0I7SUFDNUI7QUFDSjs7QUFQQTtJQUNJO1FBQ0ksbUNBQTJCO2dCQUEzQiwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLGdDQUF3QjtnQkFBeEIsd0JBQXdCO0lBQzVCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC92aWV3LW1vZGUvdmlldy1tb2RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkJMT0NLIFZJRVcgTU9ERSBUUkVBVE1FTlQqL1xyXG5cclxuLmJsb2NrLXZpZXd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuLmhlYWRlciAuYnRue1xyXG4gICAgYmFja2dyb3VuZDogI2YwNzU3NSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG5cclxuLmhlYWRlciAuYnRuIGltZ3tcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmJsb2NrLXN0YXRpc3Rjc3tcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmJsb2NrLWNvbnRlbnR7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnRxdWVzdGlvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ibG9jay1jb250ZW50ID4gKntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYmxvY2stYWx0ZXJuYXRpdmVze1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmJsb2NrLWFsdGVybmF0aXZlcyBidXR0b257XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi53cm9uZ0FuaW1hdGlvbntcclxuICAgIGFuaW1hdGlvbjogd3JvbmdBbmltYXRpb24gMzAwbXMgbGluZWFyO1xyXG59XHJcblxyXG4uY29ycmVjdEFuaW1hdGlvbntcclxuICAgIGFuaW1hdGlvbjogY29ycmVjdEFuaW1hdGlvbiAzMDBtcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5zbGlkZVRvTGVmdHtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVUb0xlZnQgMXM7XHJcbn1cclxuXHJcbi5zbGlkZUZyb21SaWdodHtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVGcm9tUmlnaHQgMXM7XHJcbn1cclxuXHJcbi8qU1RBVElTVElDUyBSRVNVTFRTKi9cclxuXHJcbnRhYmxle1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHdpZHRoOiA4MDBweDtcclxufVxyXG5cclxuLypBTklNQVRJT05TKi9cclxuXHJcbkBrZXlmcmFtZXMgd3JvbmdBbmltYXRpb24ge1xyXG4gICAgMCUsIDUwJSwgMTAwJXt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO31cclxuICAgIDI1JXt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjBweCwwKTt9XHJcbiAgICA3NSV7dHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCwwKTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY29ycmVjdEFuaW1hdGlvbiB7XHJcbiAgICAwJSwgNTAlLCAxMDAle3RyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7fVxyXG4gICAgMjUle3RyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTIwcHgpO31cclxuICAgIDc1JXt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDIwcHgpO31cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZVRvTGVmdCB7XHJcbiAgICBmcm9te1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIH1cclxuICAgIHRve1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVGcm9tUmlnaHQge1xyXG4gICAgZnJvbXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICB9XHJcbiAgICB0b3tcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/view-mode/view-mode.component.html":
/*!****************************************************!*\
  !*** ./src/app/view-mode/view-mode.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-view d-flex flex-column\">\n\n    <div class=\"header w-100 d-flex justify-content-between align-items-center\">\n\n      <div class=\"block-statistcs\">\n        <h5>Corrects: {{corrects.length}}</h5>\n        <h5>Questions found: {{questionsFound.length}}</h5>\n      </div>\n\n      <button class=\"btn btn-danger\">\n        <a id=\"button-viewmode\" [routerLink]=\"['/edit']\" class=\"btn btn-danger\" aria-details=\"button-viewmode\"><img\n                src=\"assets/img/editmode.png\" alt=\"image-viewmode\"> Edit mode</a>\n      </button>\n\n    </div>\n\n    <div class=\"block-content w-100\">\n\n      <div class=\"actualQuestion w-100 d-flex justify-content-center flex-column\" *ngIf=\"!showStatiscs\">\n          <div class=\"contentquestion\" [innerHTML]=\"actualQuestion?.content\"></div>\n          <div class=\"block-alternatives d-flex justify-content-center\">\n            <button class=\"btn btn-secondary btn-lg\" (click)=\"testQuestion($event, rel)\" *ngFor=\"let rel of relationsSelected\">{{rel.content}}</button>\n          </div>\n      </div>\n\n      <div class=\"nextQuestion w-100\" *ngIf=\"!showStatiscs\">\n        <div class=\"contentquestion\" [innerHTML]=\"nextQuestion?.content\"></div>\n      </div>\n\n      <div class=\"statistcs d-flex flex-column justify-content-center align-items-center\" *ngIf=\"showStatiscs\">\n          <h1>Quiz Ended!!</h1>\n          <h3>Statistcs:</h3>\n\n          <table class=\"table table-striped table-bordered\">\n              <thead>\n                  <th class=\"text-center\">Correct Answers</th>\n                  <th class=\"text-center\">Wrong Answers</th>\n                  <th class=\"text-center\">Correct tryings Answers</th>\n                  <th class=\"text-center\">Wrong tryings Answers</th>\n                  <th class=\"text-center\">Questions not founded</th>\n              </thead>\n              <tbody>\n                <tr>\n                  <td class=\"text-center\">{{corrects.length}}</td>\n                  <td class=\"text-center\">{{wrongs.length}}</td>\n                  <td class=\"text-center\">{{correctsTryings}}</td>\n                  <td class=\"text-center\">{{wrongsTryings}}</td>\n                  <td class=\"text-center\">{{objQuestions.questions.length - questionsFound.length}}</td>\n                </tr>\n              </tbody>\n          </table>\n\n        <button (click)=\"restart()\" class=\"btn btn-success btn-lg\">Restart</button>\n\n      </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/view-mode/view-mode.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-mode/view-mode.component.ts ***!
  \**************************************************/
/*! exports provided: ViewModeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModeComponent", function() { return ViewModeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");



var ViewModeComponent = /** @class */ (function () {
    function ViewModeComponent(service) {
        this.service = service;
        // MAIN VARIABLES
        this.objQuestions = [];
        this.relationsSelected = [];
        this.actualQuestion = null;
        this.nextQuestion = null;
        this.wrongs = [];
        this.corrects = [];
        this.wrongsTryings = 0;
        this.correctsTryings = 0;
        this.questionsFound = [];
        this.showStatiscs = false;
    }
    // INIT ACTIONS
    ViewModeComponent.prototype.ngOnInit = function () {
        document.querySelector('.block-view').requestFullscreen();
        this.getObjPresentation();
        this.actualQuestion = this.objQuestions.questions.find(function (q) { return q.id == 1; });
        this.getAnswers();
        this.questionsFound.push(this.actualQuestion);
    };
    // GET OBJECT FROM SERVICE
    ViewModeComponent.prototype.getObjPresentation = function () {
        this.objQuestions = this.service.getObj();
    };
    // GET ANSWERS LIST
    ViewModeComponent.prototype.getAnswers = function () {
        var _this = this;
        if (this.actualQuestion.id == 2) {
            this.relationsSelected = [];
            this.mountStatistcs(true);
        }
        else {
            this.relationsSelected = this.objQuestions.relations.filter(function (r) { return r.question1 == _this.actualQuestion.id && r.answer1; });
        }
    };
    // ANSWER A QUESTION METHOD
    ViewModeComponent.prototype.testQuestion = function (event, rel) {
        var _this = this;
        event.target.classList.remove('btn-secondary');
        var next = this.objQuestions.questions.find(function (q) { return q.id == rel.question2; });
        if (!this.questionsFound.find(function (c) { return c == next; })) {
            this.questionsFound.push(this.objQuestions.questions.find(function (q) { return q.id == rel.question2; }));
        }
        if (rel.correct) {
            event.target.classList.add('correctAnimation');
            event.target.classList.add('btn-success');
            if (!this.corrects.find(function (c) { return c == rel; })) {
                this.corrects.push(rel);
            }
            this.correctsTryings++;
        }
        else {
            if (!this.wrongs.find(function (c) { return c == rel; })) {
                this.wrongs.push(rel);
            }
            this.wrongsTryings++;
            event.target.classList.add('wrongAnimation');
            event.target.classList.add('btn-danger');
        }
        setTimeout(function () {
            _this.nextQuestion = _this.objQuestions.questions.find(function (q) { return q.id == rel.question2; });
            $('.nextQuestion').addClass('slideFromRight');
            $('.actualQuestion').addClass('slideToLeft');
            setTimeout(function () {
                _this.actualQuestion = _this.nextQuestion;
                _this.nextQuestion = null;
                $('.nextQuestion').removeClass('slideFromRight');
                $('.actualQuestion').removeClass('slideToLeft');
                _this.getAnswers();
            }, 1000);
        }, 320);
    };
    ViewModeComponent.prototype.mountStatistcs = function (val) {
        this.showStatiscs = val;
    };
    // RESTART METHOD
    ViewModeComponent.prototype.restart = function () {
        this.wrongs = [];
        this.corrects = [];
        this.wrongsTryings = 0;
        this.correctsTryings = 0;
        this.questionsFound = [];
        this.showStatiscs = false;
        this.actualQuestion = this.objQuestions.questions.find(function (q) { return q.id == 1; });
        this.questionsFound.push(this.actualQuestion);
        this.getAnswers();
    };
    ViewModeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-mode',
            template: __webpack_require__(/*! ./view-mode.component.html */ "./src/app/view-mode/view-mode.component.html"),
            styles: [__webpack_require__(/*! ./view-mode.component.css */ "./src/app/view-mode/view-mode.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], ViewModeComponent);
    return ViewModeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/week_25/angular-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map