webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n</div>\r\n<div>\r\n  <div>\r\n    <form [formGroup]='basicForm'>\r\n      Please Enter you name:\r\n      <app-custom-input [label]=\"'Name:'\" [isRequired]=\"true\" formControlName=\"name\"></app-custom-input>\r\n      <input type=\"checkbox\" /> Interested in Angular?\r\n    </form>\r\n  </div>\r\n</div>\r\n<div>\r\n  <h2>Custom Attribute Directives</h2>\r\n\r\n  <h4 myColorChanger [myColor]=\"titleColor\"> myColorChanger Directive Demo</h4>\r\n\r\n  <div myCustomTheme> myCustomTheme Directive Demo with Default Settings</div>\r\n\r\n  <div myCustomTheme tcolor=\"blue\" tsize=\"30px\"> myCustomTheme Directive Demo with Custom Settings</div>\r\n\r\n  <div>\r\n    <select [(ngModel)]=\"myColor\">\r\n      <option value='' selected disabled> Select Color </option>\r\n      <option *ngFor=\"let color of colors\" [value]=\"color\">\r\n        {{color}}\r\n      </option>\r\n    </select>\r\n    <p myDynamicColorChanger [dynamicColOnEvent]=\"myColor\" defaultValue=\"blue\"> myDynamicColorChanger Directive Demo</p>\r\n  </div>\r\n\r\n  <h3>myIf Directive</h3>\r\n  <div>\r\n    <input type=\"radio\" name=\"rad1\" (click)=\"changeCondition(true)\"> True\r\n    <input type=\"radio\" name=\"rad1\" (click)=\"changeCondition(false)\"> False\r\n  </div>\r\n  <br/>\r\n  <div *myIf=\"showMyIf\">\r\n    <b>Hello World!</b>\r\n  </div>\r\n  <ng-template [myIf]=\"!showMyIf\">\r\n    <div>\r\n      <b>Not Available</b>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <h3>myCustomLoop Directive</h3>\r\n  <ul>\r\n    <li *myCustomLoop=\"3\">\r\n      Namaste\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'My Welcom App';
        this.txtsize = '25px';
        this.colors = ['CYAN', 'GREEN', 'RED'];
        this.myColor = '';
        this.titleColor = 'green';
        this.showMyIf = false;
        this.basicForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    AppComponent.prototype.changeCondition = function (flag) {
        this.showMyIf = flag;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custom_input_custom_input_component__ = __webpack_require__("../../../../../src/app/custom-input/custom-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__my_color_changer_directive__ = __webpack_require__("../../../../../src/app/my-color-changer.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_custom_theme_directive__ = __webpack_require__("../../../../../src/app/my-custom-theme.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__my_dynamic_color_changer_directive__ = __webpack_require__("../../../../../src/app/my-dynamic-color-changer.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_custom_loop_directive__ = __webpack_require__("../../../../../src/app/my-custom-loop.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__my_if_directive__ = __webpack_require__("../../../../../src/app/my-if.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__custom_input_custom_input_component__["a" /* CustomInputComponent */],
                __WEBPACK_IMPORTED_MODULE_7__my_color_changer_directive__["a" /* MyColorChangerDirective */],
                __WEBPACK_IMPORTED_MODULE_8__my_custom_theme_directive__["a" /* MyCustomThemeDirective */],
                __WEBPACK_IMPORTED_MODULE_9__my_dynamic_color_changer_directive__["a" /* MyDynamicColorChangerDirective */],
                __WEBPACK_IMPORTED_MODULE_10__my_custom_loop_directive__["a" /* MyCustomLoopDirective */],
                __WEBPACK_IMPORTED_MODULE_11__my_if_directive__["a" /* MyIfDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/custom-input/custom-input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/custom-input/custom-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-input\">\r\n  {{ label }}\r\n  <input type=\"text\" (input)=\"onChange($event)\"/><span *ngIf=\"isRequired\">*</span>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/custom-input/custom-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var customValueProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* forwardRef */])(function () { return CustomInputComponent; }),
    multi: true
};
var CustomInputComponent = (function () {
    function CustomInputComponent() {
        this._value = '';
        this.propagateChange = function () { };
    }
    CustomInputComponent_1 = CustomInputComponent;
    CustomInputComponent.prototype.writeValue = function (value) {
        if (value) {
            this._value = value;
        }
    };
    CustomInputComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    CustomInputComponent.prototype.registerOnTouched = function (fn) { };
    CustomInputComponent.prototype.onChange = function (event) {
        this.propagateChange(event.target.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CustomInputComponent.prototype, "isRequired", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], CustomInputComponent.prototype, "label", void 0);
    CustomInputComponent = CustomInputComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-custom-input',
            template: __webpack_require__("../../../../../src/app/custom-input/custom-input.component.html"),
            styles: [__webpack_require__("../../../../../src/app/custom-input/custom-input.component.css")],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* forwardRef */])(function () { return CustomInputComponent_1; }),
                    multi: true
                }
            ]
        })
    ], CustomInputComponent);
    return CustomInputComponent;
    var CustomInputComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/my-color-changer.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyColorChangerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyColorChangerDirective = (function () {
    function MyColorChangerDirective(elRef) {
        this.elRef = elRef;
    }
    MyColorChangerDirective.prototype.ngAfterViewInit = function () {
        this.elRef.nativeElement.style.color = this.myColor;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], MyColorChangerDirective.prototype, "myColor", void 0);
    MyColorChangerDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: "[myColorChanger]"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], MyColorChangerDirective);
    return MyColorChangerDirective;
}());



/***/ }),

/***/ "../../../../../src/app/my-custom-loop.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCustomLoopDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyCustomLoopDirective = (function () {
    function MyCustomLoopDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(MyCustomLoopDirective.prototype, "loop", {
        set: function (num) {
            for (var i = 0; i < num; i++) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])('myCustomLoop'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], MyCustomLoopDirective.prototype, "loop", null);
    MyCustomLoopDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[myCustomLoop]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* TemplateRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewContainerRef */]])
    ], MyCustomLoopDirective);
    return MyCustomLoopDirective;
}());



/***/ }),

/***/ "../../../../../src/app/my-custom-theme.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCustomThemeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyCustomThemeDirective = (function () {
    function MyCustomThemeDirective(elRef) {
        this.elRef = elRef;
    }
    MyCustomThemeDirective.prototype.ngAfterViewInit = function () {
        this.tcolor = this.tcolor || 'green';
        this.tsize = this.tsize || '20px';
        this.elRef.nativeElement.style.color = this.tcolor;
        this.elRef.nativeElement.style.fontSize = this.tsize;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], MyCustomThemeDirective.prototype, "tcolor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], MyCustomThemeDirective.prototype, "tsize", void 0);
    MyCustomThemeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[myCustomTheme]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], MyCustomThemeDirective);
    return MyCustomThemeDirective;
}());



/***/ }),

/***/ "../../../../../src/app/my-dynamic-color-changer.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDynamicColorChangerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyDynamicColorChangerDirective = (function () {
    function MyDynamicColorChangerDirective(elRef) {
        this.elRef = elRef;
    }
    MyDynamicColorChangerDirective.prototype.onMouseOver = function () {
        this.changeBackgroundColor(this.dynamicColor || this.defaultValue);
    };
    MyDynamicColorChangerDirective.prototype.onMouseLeave = function () {
        this.changeBackgroundColor('white');
    };
    MyDynamicColorChangerDirective.prototype.changeBackgroundColor = function (color) {
        this.elRef.nativeElement.style.backgroundColor = color;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])('dynamicColOnEvent'),
        __metadata("design:type", String)
    ], MyDynamicColorChangerDirective.prototype, "dynamicColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], MyDynamicColorChangerDirective.prototype, "defaultValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* HostListener */])('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MyDynamicColorChangerDirective.prototype, "onMouseOver", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MyDynamicColorChangerDirective.prototype, "onMouseLeave", null);
    MyDynamicColorChangerDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[myDynamicColorChanger]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], MyDynamicColorChangerDirective);
    return MyDynamicColorChangerDirective;
}());



/***/ }),

/***/ "../../../../../src/app/my-if.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyIfDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyIfDirective = (function () {
    function MyIfDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(MyIfDirective.prototype, "myIf", {
        set: function (condition) {
            if (condition) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MyIfDirective.prototype, "myIf", null);
    MyIfDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: "[myIf]"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* TemplateRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewContainerRef */]])
    ], MyIfDirective);
    return MyIfDirective;
}());



/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  welcome works!\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map