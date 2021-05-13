(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pfizer-pfizer-module"],{

/***/ "3UN2":
/*!***************************************!*\
  !*** ./src/app/pfizer/pfizer.page.ts ***!
  \***************************************/
/*! exports provided: PfizerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PfizerPage", function() { return PfizerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pfizer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pfizer.page.html */ "Gi6e");
/* harmony import */ var _pfizer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pfizer.page.scss */ "Z09d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_dades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/dades.service */ "l0mX");





let PfizerPage = class PfizerPage {
    constructor(dades) {
        this.dades = dades;
        this.dones = 0;
        this.homes = 0;
        this.numtotalP = 0;
        this.dosiH = 0;
        this.dosiD = 0;
    }
    ngOnInit() {
        this.dades.dadesVacunes().subscribe((data) => {
            //Recollir dades i guardarles a les propietats totals
            this.vacunes = data;
            this.vacunes.forEach(element => {
                if (element.fabricant == "BioNTech / Pfizer") {
                    this.numtotalP = +this.numtotalP + +element.recompte;
                    if (element.sexe_codi == "0") {
                        this.homes = +this.homes + +1;
                        this.dosiH = +this.dosiH + +element.dosi;
                    }
                    else {
                        this.dones = +this.dones + +1;
                        this.dosiD = +this.dosiD + +element.dosi;
                    }
                }
            });
        });
    }
};
PfizerPage.ctorParameters = () => [
    { type: _services_dades_service__WEBPACK_IMPORTED_MODULE_4__["DadesService"] }
];
PfizerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pfizer',
        template: _raw_loader_pfizer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pfizer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PfizerPage);



/***/ }),

/***/ "62Bs":
/*!*************************************************!*\
  !*** ./src/app/pfizer/pfizer-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PfizerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PfizerPageRoutingModule", function() { return PfizerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pfizer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pfizer.page */ "3UN2");




const routes = [
    {
        path: '',
        component: _pfizer_page__WEBPACK_IMPORTED_MODULE_3__["PfizerPage"]
    }
];
let PfizerPageRoutingModule = class PfizerPageRoutingModule {
};
PfizerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PfizerPageRoutingModule);



/***/ }),

/***/ "Gi6e":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pfizer/pfizer.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    <ion-menu-button menu=\"start\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Pfizer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content fullscreen>\n    <ion-list-header>\n      <h3 >Informació General: </h3>\n    </ion-list-header>\n  <ion-card>\n    <img src=\"assets/Pfizer_image.jpg\" />\n    <ion-card-header>\n      <ion-card-subtitle>Amb la vacuna Pfizer hi ha un recompte de {{numtotalP}} Catalans/Catalanes.</ion-card-subtitle>\n      <ion-card-title>Informació segons sexe:</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div> <ion-icon name=\"woman-outline\"></ion-icon></div>\n          </ion-col>\n          <ion-col>\n            <div> <ion-icon name=\"man-outline\"></ion-icon></div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div> Dones vacunades : {{dones}}</div>\n          </ion-col>\n          <ion-col>\n            <div> Homes vacunats : {{homes}}</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div> Dosis donades : {{dosiD}}</div>\n          </ion-col>\n          <ion-col>\n            <div> Dosis donades : {{dosiH}}</div>\n          </ion-col>\n        </ion-row>\n\n          <ion-card-title>Informació extensa de tota la gent vacunada amb Pfizer:  </ion-card-title>\n        \n          <div *ngFor=\"let vacuna of vacunes\"[ngStyle]=\"{'background-color':isTrue === true ? 'green' : 'red' }\">\n            <div *ngIf=\"vacuna.fabricant == 'BioNTech / Pfizer'\">\n              <ion-item>\n              <ion-label>\n              <h2>Data: {{vacuna.data}}</h2>\n              <h3>{{vacuna.comarca}}, {{vacuna.municipi}}</h3>\n              <p>Dosis: {{vacuna.dosi}}, Sexe: {{vacuna.sexe}}</p>\n            </ion-label>\n          </ion-item>\n          </div>\n        </div>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n");

/***/ }),

/***/ "Z09d":
/*!*****************************************!*\
  !*** ./src/app/pfizer/pfizer.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZml6ZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "ru42":
/*!*****************************************!*\
  !*** ./src/app/pfizer/pfizer.module.ts ***!
  \*****************************************/
/*! exports provided: PfizerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PfizerPageModule", function() { return PfizerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pfizer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pfizer-routing.module */ "62Bs");
/* harmony import */ var _pfizer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pfizer.page */ "3UN2");







let PfizerPageModule = class PfizerPageModule {
};
PfizerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pfizer_routing_module__WEBPACK_IMPORTED_MODULE_5__["PfizerPageRoutingModule"]
        ],
        declarations: [_pfizer_page__WEBPACK_IMPORTED_MODULE_6__["PfizerPage"]]
    })
], PfizerPageModule);



/***/ })

}]);
//# sourceMappingURL=pfizer-pfizer-module.js.map