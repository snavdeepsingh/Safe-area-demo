function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employees-employees-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/employees/employees.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/employees/employees.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEmployeesEmployeesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"header\">\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"header__title\">Employees</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/employees/employees-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/employees/employees-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: EmployeesPageRoutingModule */

  /***/
  function srcAppPagesEmployeesEmployeesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeesPageRoutingModule", function () {
      return EmployeesPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _employees_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./employees.page */
    "./src/app/pages/employees/employees.page.ts");

    var routes = [{
      path: '',
      component: _employees_page__WEBPACK_IMPORTED_MODULE_3__["EmployeesPage"]
    }];

    var EmployeesPageRoutingModule = function EmployeesPageRoutingModule() {
      _classCallCheck(this, EmployeesPageRoutingModule);
    };

    EmployeesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EmployeesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/employees/employees.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/employees/employees.module.ts ***!
    \*****************************************************/

  /*! exports provided: EmployeesPageModule */

  /***/
  function srcAppPagesEmployeesEmployeesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeesPageModule", function () {
      return EmployeesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _employees_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./employees-routing.module */
    "./src/app/pages/employees/employees-routing.module.ts");
    /* harmony import */


    var _employees_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./employees.page */
    "./src/app/pages/employees/employees.page.ts");

    var EmployeesPageModule = function EmployeesPageModule() {
      _classCallCheck(this, EmployeesPageModule);
    };

    EmployeesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _employees_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmployeesPageRoutingModule"]],
      declarations: [_employees_page__WEBPACK_IMPORTED_MODULE_6__["EmployeesPage"]]
    })], EmployeesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/employees/employees.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/employees/employees.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEmployeesEmployeesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtcGxveWVlcy9lbXBsb3llZXMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/employees/employees.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/employees/employees.page.ts ***!
    \***************************************************/

  /*! exports provided: EmployeesPage */

  /***/
  function srcAppPagesEmployeesEmployeesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeesPage", function () {
      return EmployeesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EmployeesPage = /*#__PURE__*/function () {
      function EmployeesPage() {
        _classCallCheck(this, EmployeesPage);
      }

      _createClass(EmployeesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EmployeesPage;
    }();

    EmployeesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-employees',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./employees.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/employees/employees.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./employees.page.scss */
      "./src/app/pages/employees/employees.page.scss"))["default"]]
    })], EmployeesPage);
    /***/
  }
}]);
//# sourceMappingURL=employees-employees-module-es5.js.map