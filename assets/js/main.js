"use strict";
(self["webpackChunksb_player"] = self["webpackChunksb_player"] || []).push([["main"],{

/***/ 20092:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _slidebean_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @slidebean/render */ 3807);



function AppComponent_sb_slide_player_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sb-slide-player", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hiRes", true)("embedded", true)("keyboardEnabled", true)("nonNativeFullScreenEnabled", false)("presentation", ctx_r0.presentation);
  }
}
function AppComponent_sb_evo_slide_player_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sb-evo-slide-player", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("embedded", true)("keyboardEnabled", true)("nonNativeFullScreenEnabled", false)("presentation", ctx_r0.presentation);
  }
}
class AppComponent {
  constructor() {
    try {
      const {
        presentation
      } = window['__sb__'];
      this.presentation = presentation;
    } catch (error) {
      console.error('Fatal: __sb__ not found in window');
      throw error;
    }
  }
  static #_ = this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 2,
    vars: 2,
    consts: [[3, "hiRes", "embedded", "keyboardEnabled", "nonNativeFullScreenEnabled", "presentation", 4, "ngIf"], [3, "embedded", "keyboardEnabled", "nonNativeFullScreenEnabled", "presentation", 4, "ngIf"], [3, "hiRes", "embedded", "keyboardEnabled", "nonNativeFullScreenEnabled", "presentation"], [3, "embedded", "keyboardEnabled", "nonNativeFullScreenEnabled", "presentation"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_sb_slide_player_0_Template, 1, 5, "sb-slide-player", 0)(1, AppComponent_sb_evo_slide_player_1_Template, 1, 4, "sb-evo-slide-player", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.presentation == null ? null : ctx.presentation.layoutId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.presentation == null ? null : ctx.presentation.layoutId));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _slidebean_render__WEBPACK_IMPORTED_MODULE_2__.SlidePlayerComponent, _slidebean_render__WEBPACK_IMPORTED_MODULE_2__.EvoSlidePlayerComponent],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\nsb-slide-player[_ngcontent-%COMP%], \nsb-evo-slide-player[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbnNiLXNsaWRlLXBsYXllcixcbnNiLWV2by1zbGlkZS1wbGF5ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 50635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 20092);
/* harmony import */ var _slidebean_render__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @slidebean/render */ 3807);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins */ 41481);
/* harmony import */ var _slidebean_pusher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @slidebean/pusher */ 38387);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);












class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    providers: [(0,_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.withInterceptorsFromDi)())],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.HammerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _slidebean_pusher__WEBPACK_IMPORTED_MODULE_6__.PusherModule.forRoot({
      key: '',
      authEndpoint: ''
    }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forRoot(), _slidebean_render__WEBPACK_IMPORTED_MODULE_8__.RenderModule, _slidebean_render__WEBPACK_IMPORTED_MODULE_8__.RenderEvoModule.forRoot({
      slideHeight: _plugins__WEBPACK_IMPORTED_MODULE_1__.SLIDE_HEIGHT,
      slideWidth: _plugins__WEBPACK_IMPORTED_MODULE_1__.SLIDE_WIDTH
    }), _plugins__WEBPACK_IMPORTED_MODULE_1__.RenderPluginsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.HammerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _slidebean_pusher__WEBPACK_IMPORTED_MODULE_6__.PusherModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _slidebean_render__WEBPACK_IMPORTED_MODULE_8__.RenderModule, _slidebean_render__WEBPACK_IMPORTED_MODULE_8__.RenderEvoModule, _plugins__WEBPACK_IMPORTED_MODULE_1__.RenderPluginsModule]
  });
})();

/***/ }),

/***/ 41481:
/*!**********************************!*\
  !*** ./src/app/plugins/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderPluginsModule: () => (/* reexport safe */ _render_render_plugins_module__WEBPACK_IMPORTED_MODULE_0__.RenderPluginsModule),
/* harmony export */   SLIDE_HEIGHT: () => (/* reexport safe */ _render_render_plugins_module__WEBPACK_IMPORTED_MODULE_0__.SLIDE_HEIGHT),
/* harmony export */   SLIDE_WIDTH: () => (/* reexport safe */ _render_render_plugins_module__WEBPACK_IMPORTED_MODULE_0__.SLIDE_WIDTH)
/* harmony export */ });
/* harmony import */ var _render_render_plugins_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render/render-plugins.module */ 72299);


/***/ }),

/***/ 72299:
/*!*********************************************************!*\
  !*** ./src/app/plugins/render/render-plugins.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderPluginsModule: () => (/* binding */ RenderPluginsModule),
/* harmony export */   SLIDE_HEIGHT: () => (/* binding */ SLIDE_HEIGHT),
/* harmony export */   SLIDE_WIDTH: () => (/* binding */ SLIDE_WIDTH)
/* harmony export */ });
/* harmony import */ var _slidebean_slide_elements_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @slidebean/slide-elements/heading */ 5226);
/* harmony import */ var _slidebean_slide_elements_audio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @slidebean/slide-elements/audio */ 80090);
/* harmony import */ var _slidebean_slide_elements_background__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @slidebean/slide-elements/background */ 93160);
/* harmony import */ var _slidebean_slide_elements_bar_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @slidebean/slide-elements/bar-chart */ 22332);
/* harmony import */ var _slidebean_slide_elements_circle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @slidebean/slide-elements/circle */ 93248);
/* harmony import */ var _slidebean_slide_elements_code__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @slidebean/slide-elements/code */ 84915);
/* harmony import */ var _slidebean_slide_elements_cover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @slidebean/slide-elements/cover */ 21757);
/* harmony import */ var _slidebean_slide_elements_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @slidebean/slide-elements/footer */ 25737);
/* harmony import */ var _slidebean_slide_elements_funnel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @slidebean/slide-elements/funnel */ 92640);
/* harmony import */ var _slidebean_slide_elements_google_doc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @slidebean/slide-elements/google-doc */ 42840);
/* harmony import */ var _slidebean_slide_elements_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @slidebean/slide-elements/icon */ 85235);
/* harmony import */ var _slidebean_slide_elements_image__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @slidebean/slide-elements/image */ 2763);
/* harmony import */ var _slidebean_slide_elements_line__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @slidebean/slide-elements/line */ 11174);
/* harmony import */ var _slidebean_slide_elements_number__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @slidebean/slide-elements/number */ 87715);
/* harmony import */ var _slidebean_slide_elements_paragraph__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @slidebean/slide-elements/paragraph */ 90022);
/* harmony import */ var _slidebean_slide_elements_pie_chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @slidebean/slide-elements/pie-chart */ 59109);
/* harmony import */ var _slidebean_slide_elements_quote__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @slidebean/slide-elements/quote */ 96620);
/* harmony import */ var _slidebean_slide_elements_square__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @slidebean/slide-elements/square */ 96317);
/* harmony import */ var _slidebean_slide_elements_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @slidebean/slide-elements/table */ 58308);
/* harmony import */ var _slidebean_slide_elements_timeline__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @slidebean/slide-elements/timeline */ 61349);
/* harmony import */ var _slidebean_slide_elements_venn__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @slidebean/slide-elements/venn */ 76655);
/* harmony import */ var _slidebean_slide_elements_video__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @slidebean/slide-elements/video */ 69925);
/* harmony import */ var _slidebean_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @slidebean/chart */ 21989);
/* harmony import */ var _slidebean_noun_project_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @slidebean/noun-project-icon */ 54693);
/* harmony import */ var _slidebean_slide_elements_line_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @slidebean/slide-elements/line-chart */ 69069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);



















































const SLIDE_HEIGHT = 1000;
const SLIDE_WIDTH = 1600;
class RenderPluginsModule {
  static #_ = this.ɵfac = function RenderPluginsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RenderPluginsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: RenderPluginsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_slidebean_noun_project_icon__WEBPACK_IMPORTED_MODULE_1__.NounProjectIconModule.forRoot(), _slidebean_chart__WEBPACK_IMPORTED_MODULE_2__.ChartModule.forRoot(), _slidebean_slide_elements_heading__WEBPACK_IMPORTED_MODULE_3__.HeadingPluginModule.forRoot(), _slidebean_slide_elements_audio__WEBPACK_IMPORTED_MODULE_4__.AudioPluginModule.forRoot(), _slidebean_slide_elements_background__WEBPACK_IMPORTED_MODULE_5__.BackgroundPluginModule.forRoot(), _slidebean_slide_elements_bar_chart__WEBPACK_IMPORTED_MODULE_6__.BarChartPluginModule.forRoot(), _slidebean_slide_elements_line_chart__WEBPACK_IMPORTED_MODULE_7__.LineChartPluginModule.forRoot(), _slidebean_slide_elements_pie_chart__WEBPACK_IMPORTED_MODULE_8__.PieChartPluginModule.forRoot(), _slidebean_slide_elements_circle__WEBPACK_IMPORTED_MODULE_9__.CirclePluginModule.forRoot(), _slidebean_slide_elements_code__WEBPACK_IMPORTED_MODULE_10__.CodePluginModule.forRoot(), _slidebean_slide_elements_cover__WEBPACK_IMPORTED_MODULE_11__.CoverPluginModule.forRoot(), _slidebean_slide_elements_footer__WEBPACK_IMPORTED_MODULE_12__.FooterPluginModule.forRoot(), _slidebean_slide_elements_funnel__WEBPACK_IMPORTED_MODULE_13__.FunnelPluginModule.forRoot(), _slidebean_slide_elements_google_doc__WEBPACK_IMPORTED_MODULE_14__.GoogleDocPluginModule.forRoot(), _slidebean_slide_elements_icon__WEBPACK_IMPORTED_MODULE_15__.IconPluginModule.forRoot(), _slidebean_slide_elements_image__WEBPACK_IMPORTED_MODULE_16__.ImagePluginModule.forRoot(), _slidebean_slide_elements_line__WEBPACK_IMPORTED_MODULE_17__.LinePluginModule.forRoot({
      slideHeight: SLIDE_HEIGHT,
      slideWidth: SLIDE_WIDTH
    }), _slidebean_slide_elements_number__WEBPACK_IMPORTED_MODULE_18__.NumberPluginModule.forRoot(), _slidebean_slide_elements_paragraph__WEBPACK_IMPORTED_MODULE_19__.ParagraphPluginModule.forRoot(), _slidebean_slide_elements_quote__WEBPACK_IMPORTED_MODULE_20__.QuotePluginModule.forRoot(), _slidebean_slide_elements_square__WEBPACK_IMPORTED_MODULE_21__.SquarePluginModule.forRoot(), _slidebean_slide_elements_table__WEBPACK_IMPORTED_MODULE_22__.TablePluginModule.forRoot(), _slidebean_slide_elements_timeline__WEBPACK_IMPORTED_MODULE_23__.TimelinePluginModule.forRoot(), _slidebean_slide_elements_venn__WEBPACK_IMPORTED_MODULE_24__.VennPluginModule.forRoot(), _slidebean_slide_elements_video__WEBPACK_IMPORTED_MODULE_25__.VideoPluginModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RenderPluginsModule, {
    imports: [_slidebean_noun_project_icon__WEBPACK_IMPORTED_MODULE_1__.NounProjectIconModule, _slidebean_chart__WEBPACK_IMPORTED_MODULE_2__.ChartModule, _slidebean_slide_elements_heading__WEBPACK_IMPORTED_MODULE_3__.HeadingPluginModule, _slidebean_slide_elements_audio__WEBPACK_IMPORTED_MODULE_4__.AudioPluginModule, _slidebean_slide_elements_background__WEBPACK_IMPORTED_MODULE_5__.BackgroundPluginModule, _slidebean_slide_elements_bar_chart__WEBPACK_IMPORTED_MODULE_6__.BarChartPluginModule, _slidebean_slide_elements_line_chart__WEBPACK_IMPORTED_MODULE_7__.LineChartPluginModule, _slidebean_slide_elements_pie_chart__WEBPACK_IMPORTED_MODULE_8__.PieChartPluginModule, _slidebean_slide_elements_circle__WEBPACK_IMPORTED_MODULE_9__.CirclePluginModule, _slidebean_slide_elements_code__WEBPACK_IMPORTED_MODULE_10__.CodePluginModule, _slidebean_slide_elements_cover__WEBPACK_IMPORTED_MODULE_11__.CoverPluginModule, _slidebean_slide_elements_footer__WEBPACK_IMPORTED_MODULE_12__.FooterPluginModule, _slidebean_slide_elements_funnel__WEBPACK_IMPORTED_MODULE_13__.FunnelPluginModule, _slidebean_slide_elements_google_doc__WEBPACK_IMPORTED_MODULE_14__.GoogleDocPluginModule, _slidebean_slide_elements_icon__WEBPACK_IMPORTED_MODULE_15__.IconPluginModule, _slidebean_slide_elements_image__WEBPACK_IMPORTED_MODULE_16__.ImagePluginModule, _slidebean_slide_elements_line__WEBPACK_IMPORTED_MODULE_17__.LinePluginModule, _slidebean_slide_elements_number__WEBPACK_IMPORTED_MODULE_18__.NumberPluginModule, _slidebean_slide_elements_paragraph__WEBPACK_IMPORTED_MODULE_19__.ParagraphPluginModule, _slidebean_slide_elements_quote__WEBPACK_IMPORTED_MODULE_20__.QuotePluginModule, _slidebean_slide_elements_square__WEBPACK_IMPORTED_MODULE_21__.SquarePluginModule, _slidebean_slide_elements_table__WEBPACK_IMPORTED_MODULE_22__.TablePluginModule, _slidebean_slide_elements_timeline__WEBPACK_IMPORTED_MODULE_23__.TimelinePluginModule, _slidebean_slide_elements_venn__WEBPACK_IMPORTED_MODULE_24__.VennPluginModule, _slidebean_slide_elements_video__WEBPACK_IMPORTED_MODULE_25__.VideoPluginModule]
  });
})();

/***/ }),

/***/ 45312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 84429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 50635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 45312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(84429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map