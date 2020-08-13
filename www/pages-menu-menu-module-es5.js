function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMenuMenuPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-split-pane contentId=\"main\">\n  <ion-menu contentId=\"main\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title color=\"primary\">Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n       <div >\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\">\n          <ion-item [routerLink]=\"[p.url]\" routerDirection=\"root\" [class.active-item]=\"selectedPath == '' || selectedPath == p.url\">\n            <ion-label>\n              {{ p.title }}\n            </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n       </div>\n\n\n        <ion-item button routerDirection=\"root\" (click)=\"logout()\">\n          <ion-icon color=\"primary\" name=\"log-out\" slot=\"start\"></ion-icon>\n          Logout\n        </ion-item>\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-split-pane>\n";
    /***/
  },

  /***/
  "./src/app/pages/menu/menu-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/menu/menu-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: MenuPageRoutingModule */

  /***/
  function srcAppPagesMenuMenuRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function () {
      return MenuPageRoutingModule;
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


    var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu.page */
    "./src/app/pages/menu/menu.page.ts");

    var routes = [{
      path: '',
      redirectTo: 'payment',
      pathMatch: 'full'
    }, {
      path: '',
      component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"],
      children: [{
        path: 'payment',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | payment-payment-module */
          "payment-payment-module").then(__webpack_require__.bind(null,
          /*! ../payment/payment.module */
          "./src/app/pages/payment/payment.module.ts")).then(function (m) {
            return m.PaymentPageModule;
          });
        }
      }, {
        path: 'employees',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | employees-employees-module */
          "employees-employees-module").then(__webpack_require__.bind(null,
          /*! ../employees/employees.module */
          "./src/app/pages/employees/employees.module.ts")).then(function (m) {
            return m.EmployeesPageModule;
          });
        }
      }]
    }];

    var MenuPageRoutingModule = function MenuPageRoutingModule() {
      _classCallCheck(this, MenuPageRoutingModule);
    };

    MenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MenuPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/menu/menu.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/menu/menu.module.ts ***!
    \*******************************************/

  /*! exports provided: MenuPageModule */

  /***/
  function srcAppPagesMenuMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPageModule", function () {
      return MenuPageModule;
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


    var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./menu-routing.module */
    "./src/app/pages/menu/menu-routing.module.ts");
    /* harmony import */


    var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menu.page */
    "./src/app/pages/menu/menu.page.ts");

    var MenuPageModule = function MenuPageModule() {
      _classCallCheck(this, MenuPageModule);
    };

    MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"]],
      declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })], MenuPageModule);
    /***/
  },

  /***/
  "./src/app/pages/menu/menu.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/menu/menu.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMenuMenuPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".active-item {\n  border-left: 8px solid var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXZkZWVwc2luZ2gvRGVza3RvcC9TYWZlLWFyZWEtZGVtby9zcmMvYXBwL3BhZ2VzL21lbnUvbWVudS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21lbnUvbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUtaXRlbSB7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59IiwiLmFjdGl2ZS1pdGVtIHtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/menu/menu.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/menu/menu.page.ts ***!
    \*****************************************/

  /*! exports provided: MenuPage */

  /***/
  function srcAppPagesMenuMenuPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPage", function () {
      return MenuPage;
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

    var MenuPage = /*#__PURE__*/function () {
      function MenuPage(router) {
        _classCallCheck(this, MenuPage);

        this.router = router;
        this.selectedPath = '';
        this.pages = [{
          title: "Payments",
          url: '/menu/payment'
        }, {
          title: "Employees",
          url: '/menu/employees'
        }];
      }

      _createClass(MenuPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.router.navigate(['']);
        }
      }]);

      return MenuPage;
    }();

    MenuPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./menu.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./menu.page.scss */
      "./src/app/pages/menu/menu.page.scss"))["default"]]
    })], MenuPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-menu-menu-module-es5.js.map