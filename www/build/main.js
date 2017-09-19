webpackJsonp([0],{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createService_page_createService__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_map__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SellServicePage = (function () {
    function SellServicePage(service, storage, navCtrl, toastCtrl, events) {
        var _this = this;
        this.service = service;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.i = 0;
        this.events.subscribe('reloadSellService', function () {
            _this.getServices();
        });
    }
    SellServicePage.prototype.getServices = function () {
        var _this = this;
        this.storage.get('user_id').then(function (val) {
            if (val) {
                _this.service.getServices(val).subscribe(function (resp) {
                    console.log(resp);
                    if (resp.json().status == "error") {
                        _this.serviceText = 'No Services Created!';
                    }
                    else if (resp.json().status == "success") {
                        if (resp.json().results.length == 0) {
                            _this.serviceText = 'No Services Created!';
                        }
                        else {
                            _this.serviceText = 'Your Current Services!';
                            _this.services = resp.json().results;
                        }
                    }
                }, function (err) {
                });
            }
        });
    };
    SellServicePage.prototype.showMap = function (lat, long, name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__map_map__["a" /* MapPage */], {
            latitude: lat,
            longitude: long,
            serviceName: name
        });
    };
    SellServicePage.prototype.ngOnInit = function () {
    };
    SellServicePage.prototype.ionViewDidLoad = function () {
        this.getServices();
    };
    SellServicePage.prototype.createService = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__createService_page_createService__["a" /* CreateServicePage */]);
    };
    return SellServicePage;
}());
SellServicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'sell-Service',template:/*ion-inline-start:"C:\Users\karthik\Projects\alset\src\pages\sellService\sellService.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Sell A Service</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="welcome">\n\n\n\n\n\n    <div padding>\n\n        <button (click)="createService()" ion-button color="primary" block class="login">{{ \'Create Service\' }}</button>\n\n    </div>\n\n\n\n\n\n    <div class="item-detail" padding style="text-align: center;color: white">\n\n\n\n        <h2>{{serviceText}}</h2>\n\n\n\n        <ion-row>\n\n            <ion-col col-6 *ngFor="let service of services">\n\n                <div (click)="showMap(service.latitude,service.longitude,service.name)" style="background-color: black;margin:5px;padding: 15px">\n\n                    <img src="../../../assets/img/service.png" width="100%" height="100%">\n\n                    <div style="font-size:16px;font-weight: bold">{{service.name}}</div>\n\n\n\n                </div>\n\n            </ion-col>\n\n\n\n        </ion-row>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\karthik\Projects\alset\src\pages\sellService\sellService.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */]])
], SellServicePage);

//# sourceMappingURL=sellService.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {SellSer} from '../login/login';
var CreateServicePage = (function () {
    function CreateServicePage(services, navCtrl, storage, toastCtrl, events) {
        var _this = this;
        this.services = services;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.service = {
            name: '',
            description: '',
            user_id: '',
            latitude: '',
            longitude: ''
        };
        this.storage.get('user_id').then(function (val) {
            if (val) {
                _this.service.user_id = val;
            }
        });
    }
    CreateServicePage.prototype.createService = function () {
        var _this = this;
        this.services.createService(this.service).subscribe(function (resp) {
            if (resp.json().status == "error") {
                var toast = _this.toastCtrl.create({
                    message: resp.json().message,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            else if (resp.json().status == "success") {
                _this.events.publish('reloadSellService');
                _this.navCtrl.pop();
            }
        });
    };
    return CreateServicePage;
}());
CreateServicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'createService',template:/*ion-inline-start:"C:\Users\karthik\Projects\alset\src\pages\createService-page\createService.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Create A Service</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="welcome">\n\n\n\n    <div padding>\n\n        <form (submit)="createService()">\n\n            <ion-list>\n\n\n\n                <ion-item>\n\n                    <ion-label fixed>{{ \'Name\' }}</ion-label>\n\n                    <ion-input style="color:white" type="text" [(ngModel)]="service.name" name="name"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label fixed>{{ \'Description\' }}</ion-label>\n\n                    <ion-textarea style="color:white" [(ngModel)]="service.description" name="description"></ion-textarea>\n\n\n\n\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label fixed>{{ \'Latitude\' }}</ion-label>\n\n                    <ion-input style="color:white" type="text" [(ngModel)]="service.latitude" name="latitude"></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label fixed>{{ \'Longitude\' }}</ion-label>\n\n                    <ion-input style="color:white" type="text" [(ngModel)]="service.longitude" name="longitude"></ion-input>\n\n                </ion-item>\n\n\n\n                <div padding>\n\n                    <button ion-button color="primary" block class="login">{{ \'Create Service\' }}</button>\n\n                </div>\n\n\n\n\n\n            </ion-list>\n\n        </form>\n\n\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\karthik\Projects\alset\src\pages\createService-page\createService.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]])
], CreateServicePage);

//# sourceMappingURL=createService.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(256);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// declare var google: any;
var MapPage = (function () {
    function MapPage(googleMaps, navCtrl, platform, navParams) {
        this.googleMaps = googleMaps;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.latitude = this.navParams.get('latitude');
        this.longitude = this.navParams.get('longitude');
        this.serviceName = this.navParams.get('serviceName');
    }
    MapPage.prototype.ngAfterViewInit = function () {
        this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
        // make sure to create following structure in your view.html file
        // and add a height (for example 100%) to it, else the map won't be visible
        // <ion-content>
        //  <div #map id="map" style="height:100%;"></div>
        // </ion-content>
        // create a new map by passing HTMLElement
        var element = document.getElementById('map');
        var map = this.googleMaps.create(element);
        // listen to MAP_READY event
        // You must wait for this event to fire before adding something to the map or modifying it in anyway
        map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).then(function () { return console.log('Map is ready!'); });
        // create LatLng object
        var ionic = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* LatLng */](parseFloat(this.latitude), parseFloat(this.longitude));
        // create CameraPosition
        var position = {
            target: ionic,
            zoom: 18,
            tilt: 30
        };
        // move the map's camera to position
        map.moveCamera(position);
        // create new marker
        var markerOptions = {
            position: ionic,
            title: this.serviceName
        };
        map.addMarker(markerOptions);
        // const marker: Marker = map.addMarker(markerOptions)
        //   .then((marker: Marker) => {
        //      marker.showInfoWindow();
        //    });
        // }
        // initJSMaps(mapEle) {
        //   new google.maps.Map(mapEle, {
        //     center: { lat: 43.071584, lng: -89.380120 },
        //     zoom: 16
        //   });
        // }
        // initNativeMaps(mapEle) {
        //   this.map = new GoogleMap(mapEle);
        //   mapEle.classList.add('show-map');
        //   GoogleMap.isAvailable().then(() => {
        //     const position = new GoogleMapsLatLng(43.074395, -89.381056);
        //     this.map.setPosition(position);
        //   });
        // }
        // ionViewDidLoad() {
        //   let mapEle = this.map.nativeElement;
        //   if (!mapEle) {
        //     console.error('Unable to initialize map, no map element with #map view reference.');
        //     return;
        //   }
        //   // Disable this switch if you'd like to only use JS maps, as the APIs
        //   // are slightly different between the two. However, this makes it easy
        //   // to use native maps while running in Cordova, and JS maps on the web.
        //   if (this.platform.is('cordova') === true) {
        //     this.initNativeMaps(mapEle);
        //   } else {
        //     this.initJSMaps(mapEle);
        //   }
        // }
    };
    return MapPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", Object)
], MapPage.prototype, "map", void 0);
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"C:\Users\karthik\Projects\alset\src\pages\map\map.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ \'MAP_TITLE\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div #map id="map"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\karthik\Projects\alset\src\pages\map\map.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentPage = (function () {
    function ContentPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContentPage;
}());
ContentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-content',template:/*ion-inline-start:"C:\Users\karthik\Projects\alset\src\pages\content\content.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Content\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p>\n\n    This is a perfect starting point for a page with primarily text content. The\n\n    body is padded nicely and ready for prose.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\karthik\Projects\alset\src\pages\content\content.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], ContentPage);

//# sourceMappingURL=content.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemDetailPage = (function () {
    function ItemDetailPage(navCtrl, navParams, items) {
        this.navCtrl = navCtrl;
        this.item = navParams.get('item') || items.defaultItem;
    }
    return ItemDetailPage;
}());
ItemDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item-detail',template:/*ion-inline-start:"C:\Users\karthik\Projects\alset\src\pages\item-detail\item-detail.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ item.name }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="item-profile" text-center #profilePic [style.background-image]="\'url(\' + item.profilePic + \')\'">\n\n  </div>\n\n\n\n  <div class="item-detail" padding>\n\n    <h2>{{item.name}}</h2>\n\n    <p>{{item.about}}</p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\karthik\Projects\alset\src\pages\item-detail\item-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Items */]])
], ItemDetailPage);

//# sourceMappingURL=item-detail.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    return Settings;
}());
Settings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
], Settings);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_detail_item_detail__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, items) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = items;
        this.currentItems = [];
    }
    /**
     * Perform a service for the proper items.
     */
    SearchPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (!val || !val.trim()) {
            this.currentItems = [];
            return;
        }
        this.currentItems = this.items.query({
            name: val
        });
    };
    /**
     * Navigate to the detail page for this item.
     */
    SearchPage.prototype.openItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_detail_item_detail__["a" /* ItemDetailPage */], {
            item: item
        });
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"C:\Users\karthik\Projects\alset\src\pages\search\search.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ \'SEARCH_TITLE\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="{{ \'SEARCH_PLACEHOLDER\' | translate }}"></ion-searchbar>\n\n  <ion-list>\n\n    <button ion-item (click)="openItem(item)" *ngFor="let item of currentItems">\n\n      <ion-avatar item-start>\n\n        <img [src]="item.profilePic" />\n\n      </ion-avatar>\n\n      <h2>{{item.name}}</h2>\n\n      <p>{{item.about}}</p>\n\n      <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\karthik\Projects\alset\src\pages\search\search.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["a" /* Items */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
var SettingsPage = SettingsPage_1 = (function () {
    function SettingsPage(navCtrl, settings, formBuilder, navParams, translate) {
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.translate = translate;
        this.settingsReady = false;
        this.profileSettings = {
            page: 'profile',
            pageTitleKey: 'SETTINGS_PAGE_PROFILE'
        };
        this.page = 'main';
        this.pageTitleKey = 'SETTINGS_TITLE';
        this.subSettings = SettingsPage_1;
    }
    SettingsPage.prototype._buildForm = function () {
        var _this = this;
        var group = {
            option1: [this.options.option1],
            option2: [this.options.option2],
            option3: [this.options.option3]
        };
        switch (this.page) {
            case 'main':
                break;
            case 'profile':
                group = {
                    option4: [this.options.option4]
                };
                break;
        }
        this.form = this.formBuilder.group(group);
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.settings.merge(_this.form.value);
        });
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});
        this.page = this.navParams.get('page') || this.page;
        this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;
        this.translate.get(this.pageTitleKey).subscribe(function (res) {
            _this.pageTitle = res;
        });
        this.settings.load().then(function () {
            _this.settingsReady = true;
            _this.options = _this.settings.allSettings;
            _this._buildForm();
        });
    };
    SettingsPage.prototype.ngOnChanges = function () {
        console.log('Ng All Changes');
    };
    return SettingsPage;
}());
SettingsPage = SettingsPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Users\karthik\Projects\alset\src\pages\settings\settings.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ pageTitle }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <form [formGroup]="form" *ngIf="settingsReady">\n\n    <ion-list *ngIf="page == \'main\'">\n\n      <ion-item>\n\n        <ion-label>{{ \'SETTINGS_OPTION1\' | translate }}</ion-label>\n\n        <ion-toggle formControlName="option1"></ion-toggle>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>{{ \'SETTINGS_OPTION2\' | translate }}</ion-label>\n\n        <ion-input formControlName="option2"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>{{ \'SETTINGS_OPTION3\' | translate }}</ion-label>\n\n        <ion-select formControlName="option3">\n\n          <ion-option value="1" checked="true">1</ion-option>\n\n          <ion-option value="2">2</ion-option>\n\n          <ion-option value="3">3</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <button ion-item [navPush]="subSettings" [navParams]="profileSettings">\n\n        {{ \'SETTINGS_PROFILE_BUTTON\' | translate }}\n\n      </button>\n\n    </ion-list>\n\n\n\n    <ion-list *ngIf="page == \'profile\'">\n\n      <ion-item>\n\n        <ion-label>{{ \'SETTINGS_OPTION4\' | translate }}</ion-label>\n\n        <ion-input formControlName="option4"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\karthik\Projects\alset\src\pages\settings\settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_settings__["a" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
], SettingsPage);

var SettingsPage_1;
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(navCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__pages__["a" /* Tab1Root */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__pages__["b" /* Tab2Root */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__pages__["c" /* Tab3Root */];
        this.tab1Title = " ";
        this.tab2Title = " ";
        this.tab3Title = " ";
        translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(function (values) {
            _this.tab1Title = "Home";
            _this.tab2Title = values['TAB2_TITLE'];
            _this.tab3Title = values['TAB3_TITLE'];
        });
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\karthik\Projects\alset\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" [tabTitle]="tab1Title" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" [tabTitle]="tab2Title" tabIcon="search"></ion-tab>\n\n  <ion-tab [root]="tab3Root" [tabTitle]="tab3Title" tabIcon="cog"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\karthik\Projects\alset\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FirstRunPage */
/* unused harmony export MainPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab3Root; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_search__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_page_home__ = __webpack_require__(65);



// import { TutorialPage } from './tutorial/tutorial';


// The page the user lands on after opening the app and without a session
var FirstRunPage = __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */];
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */];
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_page_home__["a" /* HomePage */];
var Tab2Root = __WEBPACK_IMPORTED_MODULE_0__search_search__["a" /* SearchPage */];
var Tab3Root = __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a" /* SettingsPage */];
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 174;

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 215;

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(navCtrl, user, toastCtrl) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            email: ''
        };
    }
    // Attempt to login in through our User service
    ForgotPasswordPage.prototype.forgotPassword = function () {
        var _this = this;
        if (this.account.email.trim() == "") {
            var toast = this.toastCtrl.create({
                message: "Please enter email address!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.account.email.trim())) {
            var toast = this.toastCtrl.create({
                message: "Invalid email!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else {
            this.user.forgotPassword(this.account).subscribe(function (resp) {
                if (resp.json().status == "error") {
                    var toast = _this.toastCtrl.create({
                        message: resp.json().message,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }
                else if (resp.json().status == "success") {
                    alert("Please click on the link sent in your registered email id to reset your password!");
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                }
            }, function (err) {
                // this.navCtrl.push(MainPage);
                // Unable to log in
                var toast = _this.toastCtrl.create({
                    message: _this.loginErrorString,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            });
        }
    };
    return ForgotPasswordPage;
}());
ForgotPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forgotPassword',template:/*ion-inline-start:"C:\Users\karthik\Projects\alset\src\pages\forgotPassword\forgotPassword.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>{{ \'Forgot Password\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="welcome">\n\n\n\n    <div class="splash-bg"></div>\n\n    <div padding>\n\n        <form (submit)="forgotPassword()">\n\n            <ion-list>\n\n\n\n                <ion-item>\n\n                    <ion-label fixed>{{ \'Email\' | translate }}</ion-label>\n\n                    <ion-input type="email" [(ngModel)]="account.email" name="email"\n\n\n\n                    ></ion-input>\n\n\n\n\n\n                </ion-item>\n\n\n\n\n\n                <!--\n\n         Want to use a Username instead of an Email? Here you go:\n\n\n\n         <ion-item>\n\n           <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n\n           <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n\n         </ion-item>\n\n         -->\n\n\n\n\n\n\n\n                <div padding>\n\n                    <button ion-button color="primary" block class="login">{{ \'Submit\' | translate }}</button>\n\n                </div>\n\n\n\n            </ion-list>\n\n        </form>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\karthik\Projects\alset\src\pages\forgotPassword\forgotPassword.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* User */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], ForgotPasswordPage);

//# sourceMappingURL=forgotPassword.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsPage = (function () {
    function CardsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cardItems = [
            {
                user: {
                    avatar: 'assets/img/marty-avatar.png',
                    name: 'Marty McFly'
                },
                date: 'November 5, 1955',
                image: 'assets/img/advance-card-bttf.png',
                content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
            },
            {
                user: {
                    avatar: 'assets/img/sarah-avatar.png.jpeg',
                    name: 'Sarah Connor'
                },
                date: 'May 12, 1984',
                image: 'assets/img/advance-card-tmntr.jpg',
                content: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.'
            },
            {
                user: {
                    avatar: 'assets/img/ian-avatar.png',
                    name: 'Dr. Ian Malcolm'
                },
                date: 'June 28, 1990',
                image: 'assets/img/advance-card-jp.jpg',
                content: 'Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.'
            }
        ];
    }
    return CardsPage;
}());
CardsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cards',template:/*ion-inline-start:"C:\Users\karthik\Projects\alset\src\pages\cards\cards.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ \'CARDS_TITLE\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <ion-card *ngFor="let item of cardItems">\n\n\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img [src]="item.user.avatar">\n\n      </ion-avatar>\n\n      <h2>{{item.user.name}}</h2>\n\n      <p>{{item.date}}</p>\n\n    </ion-item>\n\n\n\n    <img [src]="item.image">\n\n\n\n    <ion-card-content>\n\n      <p>{{item.content}}</p>\n\n    </ion-card-content>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button color="primary" clear small icon-start>\n\n            <ion-icon name=\'thumbs-up\'></ion-icon>\n\n            12 Likes\n\n          </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button color="primary" clear small icon-start>\n\n            <ion-icon name=\'text\'></ion-icon>\n\n            4 Comments\n\n          </button>\n\n      </ion-col>\n\n      <ion-col center text-center>\n\n        <ion-note>\n\n          11h ago\n\n        </ion-note>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\karthik\Projects\alset\src\pages\cards\cards.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], CardsPage);

//# sourceMappingURL=cards.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_create_item_create__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_detail_item_detail__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListMasterPage = (function () {
    function ListMasterPage(navCtrl, items, modalCtrl) {
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.currentItems = this.items.query();
    }
    /**
     * The view loaded, let's query our items for the list
     */
    ListMasterPage.prototype.ionViewDidLoad = function () {
    };
    /**
     * Prompt the user to add a new item. This shows our ItemCreatePage in a
     * modal and then adds the new item to our data source if the user created one.
     */
    ListMasterPage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__item_create_item_create__["a" /* ItemCreatePage */]);
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.items.add(item);
            }
        });
        addModal.present();
    };
    /**
     * Delete an item from the list of items.
     */
    ListMasterPage.prototype.deleteItem = function (item) {
        this.items.delete(item);
    };
    /**
     * Navigate to the detail page for this item.
     */
    ListMasterPage.prototype.openItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__item_detail_item_detail__["a" /* ItemDetailPage */], {
            item: item
        });
    };
    return ListMasterPage;
}());
ListMasterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list-master',template:/*ion-inline-start:"C:\Users\karthik\Projects\alset\src\pages\list-master\list-master.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ \'LIST_MASTER_TITLE\' | translate }}</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addItem()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let item of currentItems">\n\n      <button ion-item (click)="openItem(item)">\n\n        <ion-avatar item-start>\n\n          <img [src]="item.profilePic" />\n\n        </ion-avatar>\n\n        <h2>{{item.name}}</h2>\n\n        <p>{{item.about}}</p>\n\n        <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n\n      </button>\n\n\n\n      <ion-item-options>\n\n        <button ion-button color="danger" (click)="deleteItem(item)">\n\n          {{ \'DELETE_BUTTON\' | translate }}\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\karthik\Projects\alset\src\pages\list-master\list-master.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_providers__["a" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], ListMasterPage);

//# sourceMappingURL=list-master.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemCreatePage = (function () {
    function ItemCreatePage(navCtrl, viewCtrl, formBuilder, camera) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.form = formBuilder.group({
            profilePic: [''],
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            about: ['']
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    ItemCreatePage.prototype.ionViewDidLoad = function () {
    };
    ItemCreatePage.prototype.getPicture = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 96,
                targetHeight: 96
            }).then(function (data) {
                _this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
            }, function (err) {
                alert('Unable to take photo');
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    ItemCreatePage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.form.patchValue({ 'profilePic': imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    ItemCreatePage.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['profilePic'].value + ')';
    };
    /**
     * The user cancelled, so we dismiss without sending data back.
     */
    ItemCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the item, so return it
     * back to the presenter.
     */
    ItemCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    return ItemCreatePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], ItemCreatePage.prototype, "fileInput", void 0);
ItemCreatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item-create',template:/*ion-inline-start:"C:\Users\karthik\Projects\alset\src\pages\item-create\item-create.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ \'ITEM_CREATE_TITLE\' | translate }}</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="cancel()">\n\n        <span color="primary" showWhen="ios">\n\n          {{ \'CANCEL_BUTTON\' | translate }}\n\n        </span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n\n        <span color="primary" showWhen="ios">\n\n          {{ \'DONE_BUTTON\' | translate }}\n\n        </span>\n\n        <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <form *ngIf="form" [formGroup]="form" (ngSubmit)="createItem()">\n\n    <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n    <div class="profile-image-wrapper" (click)="getPicture()">\n\n      <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n\n        <ion-icon name="add"></ion-icon>\n\n        <div>\n\n          {{ \'ITEM_CREATE_CHOOSE_IMAGE\' | translate }}\n\n        </div>\n\n      </div>\n\n      <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n\n    </div>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="{{ \'ITEM_NAME_PLACEHOLDER\' | translate }}" formControlName="name"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="{{ \'ITEM_ABOUT_PLACEHOLDER\' | translate }}" formControlName="about"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\karthik\Projects\alset\src\pages\item-create\item-create.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
], ItemCreatePage);

//# sourceMappingURL=item-create.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_item__ = __webpack_require__(406);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Items = (function () {
    function Items(http) {
        this.http = http;
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_2__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    return Items;
}());
Items = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], Items);

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.showSkip = true;
        translate.get(["TUTORIAL_SLIDE1_TITLE",
            "TUTORIAL_SLIDE1_DESCRIPTION",
            "TUTORIAL_SLIDE2_TITLE",
            "TUTORIAL_SLIDE2_DESCRIPTION",
            "TUTORIAL_SLIDE3_TITLE",
            "TUTORIAL_SLIDE3_DESCRIPTION",
        ]).subscribe(function (values) {
            console.log('Loaded values', values);
            _this.slides = [
                {
                    title: values.TUTORIAL_SLIDE1_TITLE,
                    description: values.TUTORIAL_SLIDE1_DESCRIPTION,
                    image: 'assets/img/ica-slidebox-img-1.png',
                },
                {
                    title: values.TUTORIAL_SLIDE2_TITLE,
                    description: values.TUTORIAL_SLIDE2_DESCRIPTION,
                    image: 'assets/img/ica-slidebox-img-2.png',
                },
                {
                    title: values.TUTORIAL_SLIDE3_TITLE,
                    description: values.TUTORIAL_SLIDE3_DESCRIPTION,
                    image: 'assets/img/ica-slidebox-img-3.png',
                }
            ];
        });
    }
    TutorialPage.prototype.startApp = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__welcome_welcome__["a" /* WelcomePage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    return TutorialPage;
}());
TutorialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tutorial',template:/*ion-inline-start:"C:\Users\karthik\Projects\alset\src\pages\tutorial\tutorial.html"*/'<ion-header no-shadow>\n\n  <ion-navbar>\n\n    <ion-buttons end *ngIf="showSkip">\n\n      <button ion-button (click)="startApp()" color="primary">{{ \'TUTORIAL_SKIP_BUTTON\' | translate}}</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-bounce>\n\n  <ion-slides pager="true" (ionSlideWillChange)="onSlideChangeStart($event)">\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <img [src]="slide.image" class="slide-image" />\n\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n      <p [innerHTML]="slide.description"></p>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image" />\n\n      <h2 class="slide-title">{{ \'TUTORIAL_SLIDE4_TITLE\' | translate }}</h2>\n\n      <button ion-button icon-end large clear (click)="startApp()">\n\n        {{ \'TUTORIAL_CONTINUE_BUTTON\' | translate }}\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\karthik\Projects\alset\src\pages\tutorial\tutorial.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], TutorialPage);

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(330);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* unused harmony export provideSettings */
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_sellService_sellService__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cards_cards__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_content_content__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_item_create_item_create__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_item_detail_item_detail__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_master_list_master__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_forgotPassword_forgotPassword__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_map_map__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_menu_menu__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_search_search__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tutorial_tutorial__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_welcome_welcome__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_home_page_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_api__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__mocks_providers_items__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_settings__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_user__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_firebase_app__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_camera__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_google_maps__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_createService_page_createService__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ngx_translate_core__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ngx_translate_http_loader__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_facebook__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_unique_device_id__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_angularfire2__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angularfire2_database__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_angularfire2_auth__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_google_plus__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_35__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_25__providers_settings__["a" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var firebaseConfig = {
    apiKey: "AIzaSyBjSZ757BYmk2PIomPMhVJ9pq9ozXyd5X8",
    authDomain: "alset-398e7.firebaseapp.com",
    databaseURL: "https://alset-398e7.firebaseio.com",
    projectId: "alset-398e7",
    storageBucket: "",
    messagingSenderId: "284726525555"
};
__WEBPACK_IMPORTED_MODULE_28_firebase_app__["initializeApp"](firebaseConfig);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* Alset */],
            __WEBPACK_IMPORTED_MODULE_7__pages_cards_cards__["a" /* CardsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_content_content__["a" /* ContentPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_item_create_item_create__["a" /* ItemCreatePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_item_detail_item_detail__["a" /* ItemDetailPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_list_master_list_master__["a" /* ListMasterPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_forgotPassword_forgotPassword__["a" /* ForgotPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_tutorial_tutorial__["a" /* TutorialPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_home_page_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_sellService_sellService__["a" /* SellServicePage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_createService_page_createService__["a" /* CreateServicePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_34__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_34__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* Alset */]),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_38_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_39_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_40_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* Alset */],
            __WEBPACK_IMPORTED_MODULE_7__pages_cards_cards__["a" /* CardsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_content_content__["a" /* ContentPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_item_create_item_create__["a" /* ItemCreatePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_item_detail_item_detail__["a" /* ItemDetailPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_list_master_list_master__["a" /* ListMasterPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_forgotPassword_forgotPassword__["a" /* ForgotPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_tutorial_tutorial__["a" /* TutorialPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_home_page_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_sellService_sellService__["a" /* SellServicePage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_createService_page_createService__["a" /* CreateServicePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_23__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_24__mocks_providers_items__["a" /* Items */],
            __WEBPACK_IMPORTED_MODULE_26__providers_user__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_29__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_30__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_31__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_32__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_37__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_36__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_41__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_27__providers_service__["a" /* Service */],
            { provide: __WEBPACK_IMPORTED_MODULE_25__providers_settings__["a" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]] },
            // Keep this to enable Ionic's runtime error handling during development
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alset; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_page_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cards_cards__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_content_content__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_master_list_master__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_map_map__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_createService_page_createService__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_search_search__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tutorial_tutorial__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_welcome_welcome__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_sellService_sellService__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_providers__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ngx_translate_core__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












// import { MenuPage } from '../pages/menu/menu';









var Alset = (function () {
    function Alset(translate, platform, settings, config, statusBar, splashScreen, storage) {
        var _this = this;
        this.translate = translate;
        this.platform = platform;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.pages = [
            { title: 'Tutorial', component: __WEBPACK_IMPORTED_MODULE_16__pages_tutorial_tutorial__["a" /* TutorialPage */] },
            { title: 'Welcome', component: __WEBPACK_IMPORTED_MODULE_17__pages_welcome_welcome__["a" /* WelcomePage */] },
            { title: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */] },
            { title: 'Cards', component: __WEBPACK_IMPORTED_MODULE_6__pages_cards_cards__["a" /* CardsPage */] },
            { title: 'Content', component: __WEBPACK_IMPORTED_MODULE_7__pages_content_content__["a" /* ContentPage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */] },
            { title: 'Signup', component: __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */] },
            { title: 'Create Service', component: __WEBPACK_IMPORTED_MODULE_11__pages_createService_page_createService__["a" /* CreateServicePage */] },
            { title: 'Map', component: __WEBPACK_IMPORTED_MODULE_10__pages_map_map__["a" /* MapPage */] },
            { title: 'Master Detail', component: __WEBPACK_IMPORTED_MODULE_8__pages_list_master_list_master__["a" /* ListMasterPage */] },
            { title: 'Sell Service', component: __WEBPACK_IMPORTED_MODULE_18__pages_sellService_sellService__["a" /* SellServicePage */] },
            // { title: 'Menu', component: MenuPage },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */] },
            { title: 'Search', component: __WEBPACK_IMPORTED_MODULE_12__pages_search_search__["a" /* SearchPage */] }
        ];
        storage.get('user_id').then(function (val) {
            console.log(val);
            if (val) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_home_page_home__["a" /* HomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_17__pages_welcome_welcome__["a" /* WelcomePage */];
            }
        });
        this.initTranslate();
    }
    Alset.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    Alset.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        if (this.translate.getBrowserLang() !== undefined) {
            this.translate.use(this.translate.getBrowserLang());
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    Alset.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return Alset;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], Alset.prototype, "nav", void 0);
Alset = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "<ion-menu [content]=\"content\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Pages</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n  <ion-nav #content [root]=\"rootPage\"></ion-nav>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_20__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_19__providers_providers__["b" /* Settings */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], Alset);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppUser; });
var AppUser = (function () {
    function AppUser(displayName) {
        this.displayName = displayName;
    }
    return AppUser;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = (function () {
    function Item(fields) {
        this.fields = fields;
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_content__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuPage = (function () {
    function MenuPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__content_content__["a" /* ContentPage */];
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Sign in', component: __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */] },
            { title: 'Signup', component: __WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */] }
        ];
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('Hello MenuPage Page');
    };
    MenuPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MenuPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MenuPage.prototype, "nav", void 0);
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"C:\Users\karthik\Projects\alset\src\pages\menu\menu.html"*/'<ion-menu [content]="content">\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav #content [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\karthik\Projects\alset\src\pages\menu\menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_page_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgotPassword_forgotPassword__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(navCtrl, user, toastCtrl, translateService, storage, _FB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.storage = storage;
        this._FB = _FB;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            email: '',
            password: ''
        };
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
            _this.form = _FB.group({
                'email': [null, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])],
                'password': [null],
            });
        });
    }
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        if (this.account.email.trim() == "") {
            var toast = this.toastCtrl.create({
                message: "Please enter email address!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.account.email.trim())) {
            var toast = this.toastCtrl.create({
                message: "Invalid email!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else if (this.account.password.trim() == "") {
            var toast = this.toastCtrl.create({
                message: "Please enter password!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else {
            this.user.login(this.account).subscribe(function (resp) {
                if (resp.json().status == "error") {
                    var toast = _this.toastCtrl.create({
                        message: resp.json().message,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }
                else if (resp.json().status == "success") {
                    _this.storage.set('user_id', resp.json().results.user_id);
                    _this.storage.set('username', resp.json().results.username);
                    //this.navCtrl.remove(0,index)
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_page_home__["a" /* HomePage */]).then(function () {
                        var startIndex = _this.navCtrl.getActive().index - 2;
                        _this.navCtrl.remove(startIndex, 2);
                    });
                }
            }, function (err) {
                // this.navCtrl.push(MainPage);
                // Unable to log in
                var toast = _this.toastCtrl.create({
                    message: _this.loginErrorString,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            });
        }
    };
    LoginPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__forgotPassword_forgotPassword__["a" /* ForgotPasswordPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\karthik\Projects\alset\src\pages\login\login.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>{{ \'LOGIN_TITLE\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="welcome">\n\n\n\n    <div class="splash-bg"></div>\n\n    <div padding>\n\n        <form (submit)="doLogin()">\n\n            <ion-list>\n\n\n\n                <ion-item>\n\n                    <ion-label fixed>{{ \'EMAIL\' | translate }}</ion-label>\n\n                    <ion-input type="email" [(ngModel)]="account.email" name="email"\n\n\n\n                    ></ion-input>\n\n\n\n\n\n                </ion-item>\n\n\n\n\n\n                <!--\n\n         Want to use a Username instead of an Email? Here you go:\n\n\n\n         <ion-item>\n\n           <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n\n           <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n\n         </ion-item>\n\n         -->\n\n\n\n                <ion-item>\n\n                    <ion-label fixed>{{ \'PASSWORD\' | translate }}</ion-label>\n\n                    <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n\n                </ion-item>\n\n\n\n\n\n\n\n                <div padding>\n\n                    <button ion-button color="primary" block class="login">{{ \'LOGIN_BUTTON\' | translate }}</button>\n\n                </div>\n\n\n\n                <a (click)="forgotPassword()" style="text-align: center;display: block;width:100%;">{{ \'Forgot Password\' |\n\n                    translate }}</a>\n\n\n\n\n\n            </ion-list>\n\n        </form>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\karthik\Projects\alset\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* User */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = (function () {
    function User(http, api) {
        this.http = http;
        this.api = api;
        this.authenticated = false;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.isUserLoggedIn = function () {
        return this.authenticated;
    };
    User.prototype.allowUser = function (_appUser) {
        this._appUser = _appUser;
        this.authenticated = true;
    };
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('login', accountInfo).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == "success") {
                _this._loggedIn(res);
            }
            else {
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    User.prototype.unauthenticated = function () {
        this.authenticated = false;
    };
    User.prototype.getAppUser = function () {
        return this._appUser;
    };
    Object.defineProperty(User.prototype, "AppUser", {
        set: function (appUser) {
            this._appUser = appUser;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    User.prototype.signupwithSocialLogin = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signUpWithSocialLogin', accountInfo).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User.prototype.checkUuid = function (uuid) {
        var seq = this.api.post('checkUuid', uuid).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    User.prototype.forgotPassword = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('forgotPassword', accountInfo).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    return User;
}());
User = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__api__["a" /* Api */]])
], User);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sellService_sellService__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (val) {
            console.log(val);
            if (val) {
                _this.displayName = val;
            }
            else {
                _this.displayName = '';
            }
        });
    };
    HomePage.prototype.sellService = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sellService_sellService__["a" /* SellServicePage */]);
    };
    HomePage.prototype.logout = function () {
        this.storage.remove('user_id');
        this.storage.remove('username');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-home',template:/*ion-inline-start:"C:\Users\karthik\Projects\alset\src\pages\home-page\home.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Home</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button (click)="logout()">\n\n                Logout\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n<ion-content class="welcome">\n\n\n\n    <div padding>\n\n        <h5 style="color:white;padding: 3px;">Hi {{displayName}}, What would you like to do today?</h5>\n\n\n\n        <ion-row>\n\n            <ion-col col-6><a (click)="sellService()"><img width="100%" height="100%" src="../../../assets/img/sell_serivce_icon.png"/></a></ion-col>\n\n            <ion-col col-6><img width="100%" height="100%" src="../../../assets/img/search_serivce_icon.png"/></ion-col>\n\n\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col col-6><img width="100%" height="100%" src="../../../assets/img/manage_icon.png"/></ion-col>\n\n\n\n        </ion-row>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\karthik\Projects\alset\src\pages\home-page\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_page_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_unique_device_id__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase_app__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_user__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_plus__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var WelcomePage = (function () {
    function WelcomePage(afAuth, navCtrl, user, uniqueDeviceID, storage, fb, platform, googlePlus, toastCtrl) {
        var _this = this;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.user = user;
        this.uniqueDeviceID = uniqueDeviceID;
        this.storage = storage;
        this.fb = fb;
        this.platform = platform;
        this.googlePlus = googlePlus;
        this.toastCtrl = toastCtrl;
        this.hideLogin = true;
        this.hideSignup = false;
        this.uuidDetails = {
            uuid: ''
        };
        this.account = {
            username: '',
            email: '',
            uuid: '',
            isSocialLogin: true,
            google: '',
            facebook: '',
            twitter: '',
            loginType: ''
        };
        this.uniqueDeviceID.get()
            .then(function (uuid) {
            _this.uuidDetails.uuid = uuid;
            _this.user.checkUuid(_this.uuidDetails).subscribe(function (resp) {
                storage.set('uuid', uuid);
                _this.account.uuid = uuid;
                if (resp.json().status == "success") {
                    _this.hideLogin = false;
                    _this.hideSignup = true;
                }
                else if (resp.json().status == "error") {
                    _this.hideLogin = true;
                    _this.hideSignup = false;
                }
            }, function (err) {
            });
        })
            .catch(function (error) { return console.log(error); });
    }
    WelcomePage.prototype.loginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    WelcomePage.prototype.signInWithGoogle = function () {
        var _this = this;
        this.platform.ready().then(function () {
            console.log('platform ' + _this.platform.platforms());
            if ((_this.platform.is('mobileweb')) || (_this.platform.is('core'))) {
                _this.afAuth.auth
                    .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_9_firebase_app__["auth"].GoogleAuthProvider())
                    .then(function (res) {
                    _this.account.username = res.user.displayName;
                    _this.account.email = res.user.email;
                    _this.account.loginType = 'google';
                    _this.account.isSocialLogin = true;
                    _this.account.google = res.user.uid;
                    _this.saveSignUpData();
                })
                    .catch(function (error) {
                    alert(error.message);
                    console.log("error while logging in", error);
                });
            }
            else {
                _this.googlePlus.login({
                    'webClientId': '284726525555-f67p5n5ehmf5o87atj62dvfpe9fe0cml.apps.googleusercontent.com',
                    'offline': true
                })
                    .then(function (res) {
                    var gc = __WEBPACK_IMPORTED_MODULE_9_firebase_app__["auth"].GoogleAuthProvider.credential(res.idToken);
                    __WEBPACK_IMPORTED_MODULE_9_firebase_app__["auth"]().signInWithCredential(gc).then(function (result) {
                        var user = new __WEBPACK_IMPORTED_MODULE_10__models_user__["a" /* AppUser */](result.displayName);
                        _this.account.username = result.displayName;
                        _this.account.email = result.email;
                        _this.account.loginType = 'google';
                        _this.account.isSocialLogin = true;
                        _this.account.google = result.uid;
                        _this.saveSignUpData();
                    }).catch(function (err1) {
                        alert("Error");
                    });
                })
                    .catch(function (err) {
                    _this.user.unauthenticated();
                    console.error(err);
                });
            }
        });
    };
    WelcomePage.prototype.signInWithFacebook = function () {
        var _this = this;
        this.platform.ready().then(function () {
            if ((_this.platform.is('mobileweb')) || (_this.platform.is('core'))) {
                _this.afAuth.auth
                    .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_9_firebase_app__["auth"].FacebookAuthProvider())
                    .then(function (res) {
                    var fc = __WEBPACK_IMPORTED_MODULE_9_firebase_app__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
                    __WEBPACK_IMPORTED_MODULE_9_firebase_app__["auth"]().signInWithCredential(fc).then(function (fs) {
                        console.log(fs);
                    }).catch(function (ferr) {
                        alert("Error");
                    });
                })
                    .catch(function (error) {
                    _this.user.unauthenticated();
                    alert(error.message);
                    console.log("error while logging in", error);
                });
            }
            else {
                _this.fb.login(['email'])
                    .then(function (res) {
                    console.log('Logged into Facebook!', res);
                    var fc = __WEBPACK_IMPORTED_MODULE_9_firebase_app__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
                    __WEBPACK_IMPORTED_MODULE_9_firebase_app__["auth"]().signInWithCredential(fc).then(function (fs) {
                        _this.account.username = fs.displayName;
                        _this.account.email = fs.email;
                        _this.account.loginType = 'facebook';
                        _this.account.isSocialLogin = true;
                        _this.account.facebook = res.authResponse.userID;
                        _this.saveSignUpData();
                    }).catch(function (ferr) {
                        alert("Error");
                    });
                })
                    .catch(function (e) {
                    console.log('Error logging into Facebook', e);
                    alert(JSON.stringify(e));
                });
            }
        });
    };
    WelcomePage.prototype.saveSignUpData = function () {
        var _this = this;
        this.user.signupwithSocialLogin(this.account).subscribe(function (resp) {
            if (resp.json().status == "error") {
                var toast = _this.toastCtrl.create({
                    message: resp.json().message,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            else if (resp.json().status == "success") {
                _this.storage.set('user_id', resp.json().results.user_id);
                _this.storage.set('username', resp.json().results.username);
                //this.navCtrl.remove(0,index)
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_page_home__["a" /* HomePage */]).then(function () {
                    var startIndex = _this.navCtrl.getActive().index - 2;
                    _this.navCtrl.remove(startIndex, 2);
                });
            }
        }, function (err) {
            // Unable to sign up
            var toast = _this.toastCtrl.create({
                message: 'Please try again!',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\karthik\Projects\alset\src\pages\welcome\welcome.html"*/'<ion-content scroll="false">\n\n    <div class="splash-bg"></div>\n\n    <!--<div class="splash-info">-->\n\n    <!--<div class="splash-logo"></div>-->\n\n    <!--<div class="splash-intro">-->\n\n    <!--{{ \'WELCOME_INTRO\' | translate }}-->\n\n    <!--</div>-->\n\n    <!--</div>-->\n\n\n\n    <div padding>\n\n        <button class="welcomeBtns">\n\n            <ion-item class="welcomeText" (click)="signInWithFacebook()">\n\n                <ion-icon name="logo-facebook" class="facebook" item-left></ion-icon>\n\n                {{ \'Login with Facebook\' | translate }}\n\n            </ion-item>\n\n        </button>\n\n\n\n        <button class="welcomeBtns">\n\n            <ion-item class="welcomeText">\n\n                <ion-icon name="logo-twitter" class="twitter" item-left></ion-icon>\n\n                {{ \'Login with Twitter\' | translate }}\n\n            </ion-item>\n\n        </button>\n\n\n\n        <button  class="welcomeBtns" (click)="signInWithGoogle()">\n\n            <ion-item class="welcomeText">\n\n                <ion-icon name="logo-googleplus" class="google" item-left></ion-icon>\n\n                {{ \'Login with Google\' | translate }}\n\n            </ion-item>\n\n        </button>\n\n        <button (click)="loginPage()" class="welcomeBtns" [hidden]="hideLogin">\n\n            <ion-item class="welcomeText" style="text-align:center">{{ \'Login using account information\' | translate }}</ion-item>\n\n        </button>\n\n        <button (click)="signup()" class="welcomeBtns"  [hidden]="hideSignup">\n\n            <ion-item class="welcomeText" style="text-align:center">{{ "Don\'t have an Account? Sign up" | translate }}</ion-item>\n\n        </button>\n\n        <!--<button ion-button block (click)="login()" class="login">{{ \'LOGIN\' | translate }}</button>-->\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\karthik\Projects\alset\src\pages\welcome\welcome.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_user__["a" /* User */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_unique_device_id__["a" /* UniqueDeviceID */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var Service = (function () {
    function Service(http, api) {
        this.http = http;
        this.api = api;
    }
    Service.prototype.getServices = function (user_id) {
        console.log(user_id);
        var seq = this.api.post('getServices', { user_id: user_id }).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    Service.prototype.createService = function (service) {
        var seq = this.api.post('createService', service).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    return Service;
}());
Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__api__["a" /* Api */]])
], Service);

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = (function () {
    //  url: string = 'http://192.168.1.2:3000';
    function Api(http) {
        this.http = http;
        this.url = 'http://54.214.127.37:3000';
    }
    Api.prototype.get = function (endpoint, params, options) {
        if (!options) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        }
        // Support easy query params for GET requests
        if (params) {
            var p = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var k in params) {
                p.set(k, params[k]);
            }
            // Set the search field if we have params and don't already have
            // a search field set in options.
            options.search = !options.search && p || options.search;
        }
        return this.http.get(this.url + '/' + endpoint, options);
    };
    Api.prototype.post = function (endpoint, body, options) {
        return this.http.post(this.url + '/' + endpoint, body, options);
    };
    Api.prototype.put = function (endpoint, body, options) {
        return this.http.put(this.url + '/' + endpoint, body, options);
    };
    Api.prototype.delete = function (endpoint, options) {
        return this.http.delete(this.url + '/' + endpoint, options);
    };
    Api.prototype.patch = function (endpoint, body, options) {
        return this.http.put(this.url + '/' + endpoint, body, options);
    };
    return Api;
}());
Api = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], Api);

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = (function () {
    function SignupPage(navCtrl, user, toastCtrl, translateService, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.storage = storage;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            uuid: '',
            isSocialLogin: false
        };
        storage.get('uuid').then(function (val) {
            _this.account.uuid = val;
        });
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
    }
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        if (this.account.username.trim() == "") {
            var toast = this.toastCtrl.create({
                message: "Please enter name!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else if (this.account.email.trim() == "") {
            var toast = this.toastCtrl.create({
                message: "Please enter email address!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.account.email.trim())) {
            var toast = this.toastCtrl.create({
                message: "Invalid email!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else if (this.account.password.trim() == "") {
            var toast = this.toastCtrl.create({
                message: "Please enter password!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else if (this.account.password !== this.account.confirmPassword) {
            var toast = this.toastCtrl.create({
                message: "Password doesnot match!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else {
            // Attempt to login in through our User service
            this.user.signup(this.account).subscribe(function (resp) {
                if (resp.json().status == "error") {
                    var toast = _this.toastCtrl.create({
                        message: resp.json().message,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }
                else if (resp.json().status == "success") {
                    alert("Registered Successfully! Please verify by clicking on the link in the registered email!");
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                }
            }, function (err) {
                // Unable to sign up
                var toast = _this.toastCtrl.create({
                    message: _this.signupErrorString,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            });
        }
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\karthik\Projects\alset\src\pages\signup\signup.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>{{ \'SIGNUP_TITLE\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="welcome">\n\n\n\n    <div class="splash-bg"></div>\n\n\n\n\n\n    <form (submit)="doSignup()">\n\n        <ion-list>\n\n\n\n            <ion-item>\n\n                <ion-label fixed>{{ \'NAME\' | translate }}</ion-label>\n\n                <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label fixed>{{ \'EMAIL\' | translate }}</ion-label>\n\n                <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n\n            </ion-item>\n\n\n\n            <!--\n\n            Want to add a Username? Here you go:\n\n\n\n            <ion-item>\n\n              <ion-label floating>Username</ion-label>\n\n              <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n\n            </ion-item>\n\n            -->\n\n\n\n            <ion-item>\n\n                <ion-label fixed>{{ \'PASSWORD\' | translate }}</ion-label>\n\n                <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>{{ \'Confirm Password\' | translate }}</ion-label>\n\n                <ion-input type="password" [(ngModel)]="account.confirmPassword" name="confirmPassword"></ion-input>\n\n            </ion-item>\n\n\n\n            <div padding>\n\n                <button ion-button color="primary" block>{{ \'SIGNUP_BUTTON\' | translate }}</button>\n\n            </div>\n\n\n\n        </ion-list>\n\n    </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\karthik\Projects\alset\src\pages\signup\signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* User */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mocks_providers_items__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service__ = __webpack_require__(82);
/* unused harmony reexport User */
/* unused harmony reexport Api */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__mocks_providers_items__["a"]; });
/* unused harmony reexport Service */






//# sourceMappingURL=providers.js.map

/***/ })

},[314]);
//# sourceMappingURL=main.js.map