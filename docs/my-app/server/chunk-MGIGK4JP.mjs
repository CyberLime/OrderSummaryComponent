import './polyfills.server.mjs';
import {
  CommonModule,
  bootstrapApplication,
  mergeApplicationConfig,
  provideClientHydration,
  provideRouter,
  provideServerRendering,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-TSJYX2G4.mjs";

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor() {
    this.title = "myApp";
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 0, consts: [[1, "main"], [1, "card"], ["src", "../assets/images/illustration-hero.svg", "alt", "illustration"], [1, "info"], [1, "desc"], [1, "plan"], [1, "price"], ["src", "../assets/images/icon-music.svg", "alt", "icon-music"], ["href", "#"], ["href", "#", 1, "cancel"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 0)(1, "div", 1);
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "h1");
    \u0275\u0275text(5, "Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 4);
    \u0275\u0275text(7, "You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5)(9, "div", 6);
    \u0275\u0275element(10, "img", 7);
    \u0275\u0275elementStart(11, "div")(12, "h2");
    \u0275\u0275text(13, "Annual Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15, "$59.99/year");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "a", 8);
    \u0275\u0275text(17, "Change");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button");
    \u0275\u0275text(19, "Proceed to Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "a", 9);
    \u0275\u0275text(21, "Cancel Order");
    \u0275\u0275elementEnd()()()();
  }
}, dependencies: [CommonModule], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: fit-content;\n}\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 450px;\n  width: 90vw;\n  border-radius: 15px;\n  overflow: hidden;\n  box-shadow: 0 20px 50px -20px hsl(224, 23%, 55%);\n}\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px 50px;\n  background-color: #fff;\n}\n.info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: hsl(223, 47%, 23%);\n  font-size: 28px;\n  font-weight: 900;\n}\n.info[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  text-align: center;\n  color: hsl(224, 23%, 55%);\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 25px;\n  margin-top: 15px;\n}\n.info[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 298px;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 40px;\n}\n.info[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n.info[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: hsl(223, 47%, 23%);\n  font-weight: 900;\n  margin-bottom: 5px;\n}\n.info[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: hsl(224, 23%, 55%);\n  font-weight: 500;\n}\n.info[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n}\n.info[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: hsl(245, 75%, 52%);\n  transition: 0.15s ease-in-out;\n  margin-right: 7px;\n}\n.info[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration-color: transparent;\n  color: hsla(245, 75%, 52%, 0.8);\n}\n.info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 45px;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  background-color: hsl(245, 75%, 52%);\n  cursor: pointer;\n  transition: 0.15s ease-in-out;\n  margin-top: 40px;\n  color: #fff;\n  font-weight: 900;\n  letter-spacing: 1px;\n}\n.info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: hsla(245, 75%, 52%, 0.8);\n}\n.info[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  color: hsl(224, 23%, 55%);\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 14px;\n  margin-top: 30px;\n  transition: 0.15s ease-in-out;\n}\n.info[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]:hover {\n  color: hsl(223, 47%, 23%);\n}\n@media (max-width: 425px) {\n  .info[_ngcontent-%COMP%] {\n    padding: 30px 20px;\n  }\n}\n/*# sourceMappingURL=app.component.css.map */"] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 12 });
})();

// src/app/app.routes.ts
var routes = [];

// src/app/app.config.ts
var appConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};

// src/app/app.config.server.ts
var serverConfig = {
  providers: [
    provideServerRendering()
  ]
};
var config = mergeApplicationConfig(appConfig, serverConfig);

// src/main.server.ts
var bootstrap = () => bootstrapApplication(AppComponent, config);
var main_server_default = bootstrap;

export {
  main_server_default
};
//# sourceMappingURL=chunk-MGIGK4JP.mjs.map
