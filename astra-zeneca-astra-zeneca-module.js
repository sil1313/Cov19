(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["astra-zeneca-astra-zeneca-module"],{

/***/ "DQRa":
/*!*****************************************************!*\
  !*** ./src/app/astra-zeneca/astra-zeneca.module.ts ***!
  \*****************************************************/
/*! exports provided: AstraZenecaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AstraZenecaPageModule", function() { return AstraZenecaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _astra_zeneca_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./astra-zeneca-routing.module */ "Y/Yq");
/* harmony import */ var _astra_zeneca_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./astra-zeneca.page */ "JiYG");







let AstraZenecaPageModule = class AstraZenecaPageModule {
};
AstraZenecaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _astra_zeneca_routing_module__WEBPACK_IMPORTED_MODULE_5__["AstraZenecaPageRoutingModule"]
        ],
        declarations: [_astra_zeneca_page__WEBPACK_IMPORTED_MODULE_6__["AstraZenecaPage"]]
    })
], AstraZenecaPageModule);



/***/ }),

/***/ "Jf6t":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/astra-zeneca/astra-zeneca.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    <ion-menu-button menu=\"start\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Astra Zeneca</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content fullscreen>\n  <ion-list-header>\n    <h3 >Informació General: </h3>\n  </ion-list-header>\n<ion-card>\n  <img src=\"assets/Az.jpg\" />\n  <ion-card-header>\n    <ion-card-subtitle>Amb la vacuna Astra-zeneca hi ha un recompte de {{numtotalA}} Catalans/Catalanes.</ion-card-subtitle>\n    <ion-card-title>Informació segons sexe:</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div> <ion-icon name=\"woman-outline\"></ion-icon></div>\n        </ion-col>\n        <ion-col>\n          <div> <ion-icon name=\"man-outline\"></ion-icon></div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div> Dones vacunades : {{donesA}}</div>\n        </ion-col>\n        <ion-col>\n          <div> Homes vacunats : {{homesA}}</div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div> Dosis donades : {{dosiDA}}</div>\n        </ion-col>\n        <ion-col>\n          <div> Dosis donades : {{dosiHA}}</div>\n        </ion-col>\n      </ion-row>\n\n        <ion-card-title>Informació extensa de tota la gent vacunada amb Astra-zeneca:  </ion-card-title>\n    \n        <div *ngFor=\"let vacuna of vacunesA\">\n          <div *ngIf=\"vacuna.fabricant == 'Oxford / AstraZeneca'\">\n            <ion-item>\n            <ion-label>\n            <h2>Data: {{vacuna.data}}</h2>\n            <h3>{{vacuna.comarca}}, {{vacuna.municipi}}</h3>\n            <p>Dosis: {{vacuna.dosi}}, Sexe: {{vacuna.sexe}}</p>\n          </ion-label>\n        </ion-item>\n        </div>\n      </div>\n      </ion-grid>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n");

/***/ }),

/***/ "JiYG":
/*!***************************************************!*\
  !*** ./src/app/astra-zeneca/astra-zeneca.page.ts ***!
  \***************************************************/
/*! exports provided: AstraZenecaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AstraZenecaPage", function() { return AstraZenecaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_astra_zeneca_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./astra-zeneca.page.html */ "Jf6t");
/* harmony import */ var _astra_zeneca_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./astra-zeneca.page.scss */ "lBoT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_dades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/dades.service */ "l0mX");





let AstraZenecaPage = class AstraZenecaPage {
    constructor(dades) {
        this.dades = dades;
        this.donesA = 0;
        this.homesA = 0;
        this.numtotalA = 0;
        this.dosiHA = 0;
        this.dosiDA = 0;
    }
    ngOnInit() {
        this.dades.dadesVacunes().subscribe((data) => {
            //Recollir dades i guardarles a les propietats totals
            this.vacunesA = data;
            this.vacunesA.forEach(element => {
                if (element.fabricant == "Oxford / AstraZeneca") {
                    this.numtotalA = +this.numtotalA + +1;
                    if (element.sexe == "Home") {
                        this.homesA = +this.homesA + 1;
                        this.dosiHA = +this.dosiHA + +element.dosi;
                    }
                    else {
                        this.donesA = +this.donesA + 1;
                        this.dosiDA = +this.dosiDA + +element.dosi;
                    }
                }
            });
        });
    }
};
AstraZenecaPage.ctorParameters = () => [
    { type: _services_dades_service__WEBPACK_IMPORTED_MODULE_4__["DadesService"] }
];
AstraZenecaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-astra-zeneca',
        template: _raw_loader_astra_zeneca_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_astra_zeneca_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AstraZenecaPage);



/***/ }),

/***/ "Y/Yq":
/*!*************************************************************!*\
  !*** ./src/app/astra-zeneca/astra-zeneca-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AstraZenecaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AstraZenecaPageRoutingModule", function() { return AstraZenecaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _astra_zeneca_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./astra-zeneca.page */ "JiYG");




const routes = [
    {
        path: '',
        component: _astra_zeneca_page__WEBPACK_IMPORTED_MODULE_3__["AstraZenecaPage"]
    }
];
let AstraZenecaPageRoutingModule = class AstraZenecaPageRoutingModule {
};
AstraZenecaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AstraZenecaPageRoutingModule);



/***/ }),

/***/ "lBoT":
/*!*****************************************************!*\
  !*** ./src/app/astra-zeneca/astra-zeneca.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3RyYS16ZW5lY2EucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=astra-zeneca-astra-zeneca-module.js.map