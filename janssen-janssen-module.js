(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["janssen-janssen-module"],{

/***/ "0fuU":
/*!***************************************************!*\
  !*** ./src/app/janssen/janssen-routing.module.ts ***!
  \***************************************************/
/*! exports provided: JanssenPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JanssenPageRoutingModule", function() { return JanssenPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _janssen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./janssen.page */ "nxdV");




const routes = [
    {
        path: '',
        component: _janssen_page__WEBPACK_IMPORTED_MODULE_3__["JanssenPage"]
    }
];
let JanssenPageRoutingModule = class JanssenPageRoutingModule {
};
JanssenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], JanssenPageRoutingModule);



/***/ }),

/***/ "6tjE":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/janssen/janssen.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    <ion-menu-button menu=\"start\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Janssen</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content fullscreen>\n  <ion-list-header>\n    <h3 >Informació General: </h3>\n  </ion-list-header>\n<ion-card>\n  <img src=\"assets/janssen.jpg\" />\n  <ion-card-header>\n    <ion-card-subtitle>Amb la vacuna Janssen hi ha un recompte de {{numtotalP}} Catalans/Catalanes.</ion-card-subtitle>\n    <ion-card-title>Informació segons sexe:</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div> <ion-icon name=\"woman-outline\"></ion-icon></div>\n        </ion-col>\n        <ion-col>\n          <div> <ion-icon name=\"man-outline\"></ion-icon></div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div> Dones vacunades : {{donesP}}</div>\n        </ion-col>\n        <ion-col>\n          <div> Homes vacunats : {{homesP}}</div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div> Dosis donades : {{dosiDP}}</div>\n        </ion-col>\n        <ion-col>\n          <div> Dosis donades : {{dosiHP}}</div>\n        </ion-col>\n      </ion-row>\n\n        <ion-card-title>Informació extensa de tota la gent vacunada amb Pfizer:  </ion-card-title>\n    \n        <div *ngFor=\"let vacuna of vacunesP\">\n          <div *ngIf=\"vacuna.fabricant == 'J&J / Janssen'\">\n            <ion-item>\n            <ion-label>\n            <h2>Data: {{vacuna.data}}</h2>\n            <h3>{{vacuna.comarca}}, {{vacuna.municipi}}</h3>\n            <p>Dosis: {{vacuna.dosi}}, Sexe: {{vacuna.sexe}}</p>\n          </ion-label>\n        </ion-item>\n        </div>\n      </div>\n      </ion-grid>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n");

/***/ }),

/***/ "BQFm":
/*!*******************************************!*\
  !*** ./src/app/janssen/janssen.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqYW5zc2VuLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "hxuI":
/*!*******************************************!*\
  !*** ./src/app/janssen/janssen.module.ts ***!
  \*******************************************/
/*! exports provided: JanssenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JanssenPageModule", function() { return JanssenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _janssen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./janssen-routing.module */ "0fuU");
/* harmony import */ var _janssen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./janssen.page */ "nxdV");







let JanssenPageModule = class JanssenPageModule {
};
JanssenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _janssen_routing_module__WEBPACK_IMPORTED_MODULE_5__["JanssenPageRoutingModule"]
        ],
        declarations: [_janssen_page__WEBPACK_IMPORTED_MODULE_6__["JanssenPage"]]
    })
], JanssenPageModule);



/***/ }),

/***/ "nxdV":
/*!*****************************************!*\
  !*** ./src/app/janssen/janssen.page.ts ***!
  \*****************************************/
/*! exports provided: JanssenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JanssenPage", function() { return JanssenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_janssen_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./janssen.page.html */ "6tjE");
/* harmony import */ var _janssen_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./janssen.page.scss */ "BQFm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_dades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/dades.service */ "l0mX");





let JanssenPage = class JanssenPage {
    constructor(dades) {
        this.dades = dades;
        this.donesP = 0;
        this.homesP = 0;
        this.numtotalP = 0;
        this.dosiHP = 0;
        this.dosiDP = 0;
    }
    ngOnInit() {
        this.dades.dadesVacunes().subscribe((data) => {
            //Recollir dades i guardarles a les propietats totals
            this.vacunesP = data;
            this.vacunesP.forEach(element => {
                if (element.fabricant == "J&J / Janssen") {
                    console.log(element.fabricant);
                    this.numtotalP = +this.numtotalP + +element.recompte;
                    if (element.sexe == "Home") {
                        console.log(element.fabricant);
                        this.homesP = +this.homesP + 1;
                        this.dosiHP = +this.dosiHP + +element.dosi;
                    }
                    else {
                        console.log(element.fabricant);
                        this.donesP = +this.donesP + 1;
                        this.dosiDP = +this.dosiDP + +element.dosi;
                    }
                }
            });
        });
    }
};
JanssenPage.ctorParameters = () => [
    { type: _services_dades_service__WEBPACK_IMPORTED_MODULE_4__["DadesService"] }
];
JanssenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-janssen',
        template: _raw_loader_janssen_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_janssen_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], JanssenPage);



/***/ })

}]);
//# sourceMappingURL=janssen-janssen-module.js.map