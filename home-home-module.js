(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    <ion-menu-button menu=\"start\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Llista de Vacunes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n    <ion-list>\n    \n\n      <ion-item>\n\n\n          <h4> A Catalunya s'han donat un total de {{numTotal}} vacunes. A continuació un llistat del total de vagades que una marca a sigut donada entre les comarques de Catalunya.</h4>\n\n\n      </ion-item>\n\n      <ion-card (click)=\"nextpage()\">\n        <ion-card-header>\n          <ion-card-subtitle>BioNTech </ion-card-subtitle>\n          <img src=\"assets/Pfizer_image.jpg\" />\n          <ion-card-title>Pfizer</ion-card-title>\n\n        </ion-card-header>\n        <ion-card-content>\n          Aquesta vacuna ha estat utilitzada un total de  {{numTotalBio}} vagades entre els habitants de les comarques de Catalunya. Per més informació de Pfizer, vagi al tab de la vacuna.\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card (click)=\"nextjanssen()\">\n        <ion-card-header>\n          <ion-card-subtitle>J&J </ion-card-subtitle>\n          <img src=\"assets/janssen.jpg\" />\n          <ion-card-title>Janssen</ion-card-title>\n  \n        </ion-card-header>\n        <ion-card-content>\n          Aquesta vacuna ha estat utilitzada un total de  {{numTotalJnJ}} vagades entre els habitants de les comarques de Catalunya. Per més informació de Janssen, vagi al tab de la vacuna.\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card (click)=\"nextlonza()\">\n        <ion-card-header>\n          <ion-card-subtitle>Moderna </ion-card-subtitle>\n          <img src=\"assets/Lonza.jpg\" />\n          <ion-card-title>Lonza</ion-card-title>\n      \n        </ion-card-header>\n        <ion-card-content>\n          Aquesta vacuna ha estat utilitzada un total de  {{numTotalLonza}} vagades entre els habitants de les comarques de Catalunya. Per més informació de Lonza, vagi al tab de la vacuna.\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card (click)=\"nextastra()\">\n        <ion-card-header>\n          <ion-card-subtitle>Oxford</ion-card-subtitle>\n          <img src=\"assets/Az.jpg\" />\n          <ion-card-title>AstraZeneca</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          Aquesta vacuna ha estat utilitzada un total de  {{numTotaOx}} vagades entre els habitants de les comarques de Catalunya. Per més informació de AstraZeneca, vagi al tab de la vacuna.\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card (click)=\"nextnoad()\">\n        <ion-card-header>\n          <img src=\"assets/No_dosi.jpg\" />\n          <ion-card-title>No ha sigut administrada</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n         {{numOther}} habitants de Catalunya no s'han administrat una vacuna. Per més informació de les comarques, vagi al tab de la vacuna.\n        </ion-card-content>\n      </ion-card>\n</ion-list>\n</ion-content>");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "zpKS");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_dades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/dades.service */ "l0mX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let HomePage = class HomePage {
    constructor(dades, route) {
        this.dades = dades;
        this.route = route;
        this.numTotal = 0;
        this.numTotalBio = 0;
        this.numTotalJnJ = 0;
        this.numTotalLonza = 0;
        this.numTotaOx = 0;
        this.numOther = 0;
    }
    ngOnInit() {
        this.dades.dadesTotals().subscribe((data) => {
            //Recollir dades i guardarles a les propietats totals
            this.totals = data;
            this.totals.forEach(element => {
                var x = element.total;
                this.numTotal = +x;
                if (element.fabricant == "BioNTech / Pfizer") {
                    this.numTotalBio = +element.total;
                }
                else if (element.fabricant == "J&J / Janssen") {
                    this.numTotalJnJ = +element.total;
                }
                else if (element.fabricant == "Moderna / Lonza") {
                    this.numTotalLonza = +element.total;
                }
                else if (element.fabricant == "Oxford / AstraZeneca") {
                    this.numTotaOx = +element.total;
                }
                else {
                    this.numOther = +element.total;
                }
            });
        });
    }
    //Anar a la pàgina de la vacuna Pfizer
    nextpage() {
        this.route.navigate(['/Pfizer']);
    }
    nextjanssen() {
        this.route.navigate(['/janssen']);
    }
    nextlonza() {
        this.route.navigate(['/lonza']);
    }
    nextastra() {
        this.route.navigate(['/astra-zeneca']);
    }
    nextnoad() {
        this.route.navigate(['/noad']);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_dades_service__WEBPACK_IMPORTED_MODULE_4__["DadesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map