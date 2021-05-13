(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["noad-noad-module"],{

/***/ "X8Ci":
/*!*********************************************!*\
  !*** ./src/app/noad/noad-routing.module.ts ***!
  \*********************************************/
/*! exports provided: NoadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoadPageRoutingModule", function() { return NoadPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _noad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./noad.page */ "uxKk");




const routes = [
    {
        path: '',
        component: _noad_page__WEBPACK_IMPORTED_MODULE_3__["NoadPage"]
    }
];
let NoadPageRoutingModule = class NoadPageRoutingModule {
};
NoadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NoadPageRoutingModule);



/***/ }),

/***/ "li0f":
/*!*************************************!*\
  !*** ./src/app/noad/noad.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub2FkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "uxKk":
/*!***********************************!*\
  !*** ./src/app/noad/noad.page.ts ***!
  \***********************************/
/*! exports provided: NoadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoadPage", function() { return NoadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_noad_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./noad.page.html */ "wg6N");
/* harmony import */ var _noad_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noad.page.scss */ "li0f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_dades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/dades.service */ "l0mX");





let NoadPage = class NoadPage {
    constructor(dades) {
        this.dades = dades;
        this.arryprovincies = new Array();
        this.dosiDN = 0;
        this.donesA = 0;
        this.homesA = 0;
        this.numtotalA = 0;
    }
    ngOnInit() {
        this.dades.dadesVacunes().subscribe((data) => {
            //Recollir dades i guardarles a les propietats totals
            this.vacunesN = data;
            this.vacunesN.forEach(element => {
                if (element.fabricant == "No administrada") {
                    this.arryprovincies.push(element.comarca);
                    this.arryprovincies = this.arryprovincies.filter(function (elem, index, self) {
                        return index === self.indexOf(elem);
                    });
                    this.numtotalA = +this.numtotalA + +element.recompte;
                    if (element.sexe == "Home") {
                        console.log(element.fabricant);
                        this.homesA = +this.homesA + 1;
                    }
                    else {
                        this.donesA = +this.donesA + 1;
                    }
                }
            });
        });
    }
};
NoadPage.ctorParameters = () => [
    { type: _services_dades_service__WEBPACK_IMPORTED_MODULE_4__["DadesService"] }
];
NoadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-noad',
        template: _raw_loader_noad_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_noad_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NoadPage);



/***/ }),

/***/ "wg6N":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/noad/noad.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    <ion-menu-button menu=\"start\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Vacunes No Administrades</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-list-header>\n    <h3 >Informació General: </h3>\n  </ion-list-header>\n<ion-card>\n  <img src=\"assets/No_dosi.jpg\" />\n  <ion-card-header>\n    <ion-card-subtitle>Hi ha un recompte de {{numtotalA}} Catalans/Catalanes no vacunats.</ion-card-subtitle>\n    <ion-card-title>Informació segons sexe:</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div> <ion-icon name=\"woman-outline\"></ion-icon></div>\n        </ion-col>\n        <ion-col>\n          <div> <ion-icon name=\"man-outline\"></ion-icon></div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div> Dones no vacunades : {{donesA}}</div>\n        </ion-col>\n        <ion-col>\n          <div> Homes no vacunats : {{homesA}}</div>\n        </ion-col>\n      </ion-row>\n\n        <ion-card-title>Comarques on no s'han administrat vacunes:  </ion-card-title>\n      \n\n        <div *ngFor=\"let pro of arryprovincies\">\n            <ion-item>\n            <ion-label>\n            <h2>{{pro}}</h2>\n          </ion-label>\n        </ion-item>\n      </div>\n  \n      </ion-grid>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n\n\n");

/***/ }),

/***/ "ymJ5":
/*!*************************************!*\
  !*** ./src/app/noad/noad.module.ts ***!
  \*************************************/
/*! exports provided: NoadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoadPageModule", function() { return NoadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _noad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./noad-routing.module */ "X8Ci");
/* harmony import */ var _noad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./noad.page */ "uxKk");







let NoadPageModule = class NoadPageModule {
};
NoadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _noad_routing_module__WEBPACK_IMPORTED_MODULE_5__["NoadPageRoutingModule"]
        ],
        declarations: [_noad_page__WEBPACK_IMPORTED_MODULE_6__["NoadPage"]]
    })
], NoadPageModule);



/***/ })

}]);
//# sourceMappingURL=noad-noad-module.js.map