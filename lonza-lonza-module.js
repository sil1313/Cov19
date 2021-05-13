(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lonza-lonza-module"],{

/***/ "67Nf":
/*!***************************************!*\
  !*** ./src/app/lonza/lonza.module.ts ***!
  \***************************************/
/*! exports provided: LonzaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LonzaPageModule", function() { return LonzaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _lonza_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lonza-routing.module */ "8Z0h");
/* harmony import */ var _lonza_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lonza.page */ "Ldvd");







let LonzaPageModule = class LonzaPageModule {
};
LonzaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lonza_routing_module__WEBPACK_IMPORTED_MODULE_5__["LonzaPageRoutingModule"]
        ],
        declarations: [_lonza_page__WEBPACK_IMPORTED_MODULE_6__["LonzaPage"]]
    })
], LonzaPageModule);



/***/ }),

/***/ "8Z0h":
/*!***********************************************!*\
  !*** ./src/app/lonza/lonza-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LonzaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LonzaPageRoutingModule", function() { return LonzaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lonza_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lonza.page */ "Ldvd");




const routes = [
    {
        path: '',
        component: _lonza_page__WEBPACK_IMPORTED_MODULE_3__["LonzaPage"]
    }
];
let LonzaPageRoutingModule = class LonzaPageRoutingModule {
};
LonzaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LonzaPageRoutingModule);



/***/ }),

/***/ "Ldvd":
/*!*************************************!*\
  !*** ./src/app/lonza/lonza.page.ts ***!
  \*************************************/
/*! exports provided: LonzaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LonzaPage", function() { return LonzaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lonza_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lonza.page.html */ "bgUz");
/* harmony import */ var _lonza_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lonza.page.scss */ "uIDe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_dades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/dades.service */ "l0mX");





let LonzaPage = class LonzaPage {
    constructor(dades) {
        this.dades = dades;
        this.donesL = 0;
        this.homesL = 0;
        this.numtotalL = 0;
        this.dosiHL = 0;
        this.dosiDL = 0;
    }
    ngOnInit() {
        this.dades.dadesVacunes().subscribe((data) => {
            //Recollir dades i guardarles a les propietats totals
            this.vacunesL = data;
            this.vacunesL.forEach(element => {
                if (element.fabricant == "Moderna / Lonza") {
                    console.log(element.fabricant);
                    this.numtotalL = +this.numtotalL + +element.recompte;
                    if (element.sexe == "Home") {
                        console.log(element.fabricant);
                        this.homesL = +this.homesL + 1;
                        this.dosiHL = +this.dosiHL + +element.dosi;
                    }
                    else {
                        console.log(element.fabricant);
                        this.donesL = +this.donesL + 1;
                        this.dosiDL = +this.dosiDL + +element.dosi;
                    }
                }
            });
        });
    }
};
LonzaPage.ctorParameters = () => [
    { type: _services_dades_service__WEBPACK_IMPORTED_MODULE_4__["DadesService"] }
];
LonzaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lonza',
        template: _raw_loader_lonza_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lonza_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LonzaPage);



/***/ }),

/***/ "bgUz":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lonza/lonza.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    <ion-menu-button menu=\"start\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Lonza</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content fullscreen>\n  <ion-list-header>\n    <h3 >Informació General: </h3>\n  </ion-list-header>\n<ion-card>\n  <img src=\"assets/Lonza.jpg\" />\n  <ion-card-header>\n    <ion-card-subtitle>Amb la vacuna Lonza hi ha un recompte de {{numtotalP}} Catalans/Catalanes.</ion-card-subtitle>\n    <ion-card-title>Informació segons sexe:</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div> <ion-icon name=\"woman-outline\"></ion-icon></div>\n        </ion-col>\n        <ion-col>\n          <div> <ion-icon name=\"man-outline\"></ion-icon></div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div> Dones vacunades : {{donesL}}</div>\n        </ion-col>\n        <ion-col>\n          <div> Homes vacunats : {{homesL}}</div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div> Dosis donades : {{dosiDL}}</div>\n        </ion-col>\n        <ion-col>\n          <div> Dosis donades : {{dosiHL}}</div>\n        </ion-col>\n      </ion-row>\n\n        <ion-card-title>Informació extensa de tota la gent vacunada amb Lonza:  </ion-card-title>\n    \n        <div *ngFor=\"let vacuna of vacunesL\">\n          <div *ngIf=\"vacuna.fabricant == 'Moderna / Lonza'\">\n            <ion-item>\n            <ion-label>\n            <h2>Data: {{vacuna.data}}</h2>\n            <h3>{{vacuna.comarca}}, {{vacuna.municipi}}</h3>\n            <p>Dosis: {{vacuna.dosi}}, Sexe: {{vacuna.sexe}}</p>\n          </ion-label>\n        </ion-item>\n        </div>\n      </div>\n      </ion-grid>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n\n\n");

/***/ }),

/***/ "uIDe":
/*!***************************************!*\
  !*** ./src/app/lonza/lonza.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb256YS5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=lonza-lonza-module.js.map