(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _paths_Main_promocoes_promocoes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./paths/Main/promocoes/promocoes.component */
      "./src/app/paths/Main/promocoes/promocoes.component.ts");
      /* harmony import */


      var _paths_Main_adicionar_produto_adicionar_produto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./paths/Main/adicionar-produto/adicionar-produto.component */
      "./src/app/paths/Main/adicionar-produto/adicionar-produto.component.ts");
      /* harmony import */


      var _paths_Main_historico_vendas_historico_vendas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./paths/Main/historico-vendas/historico-vendas.component */
      "./src/app/paths/Main/historico-vendas/historico-vendas.component.ts");
      /* harmony import */


      var _paths_Main_adicionar_ingrediente_adicionar_ingrediente_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./paths/Main/adicionar-ingrediente/adicionar-ingrediente.component */
      "./src/app/paths/Main/adicionar-ingrediente/adicionar-ingrediente.component.ts");
      /* harmony import */


      var _paths_nao_encontrada_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./paths/nao-encontrada/nao-encontrada.component */
      "./src/app/paths/nao-encontrada/nao-encontrada.component.ts");
      /* harmony import */


      var _paths_Main_carrinho_comprar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./paths/Main/carrinho/comprar.component */
      "./src/app/paths/Main/carrinho/comprar.component.ts");
      /* harmony import */


      var _paths_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./paths/login/login.component */
      "./src/app/paths/login/login.component.ts");
      /* harmony import */


      var _paths_login_registro_registro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./paths/login/registro/registro.component */
      "./src/app/paths/login/registro/registro.component.ts");
      /* harmony import */


      var _paths_login_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./paths/login/guard/auth.guard */
      "./src/app/paths/login/guard/auth.guard.ts");
      /* harmony import */


      var _paths_login_guard_guard_adm_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./paths/login/guard/guard-adm.guard */
      "./src/app/paths/login/guard/guard-adm.guard.ts");
      /* harmony import */


      var _paths_Main_produtos_produtoss_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./paths/Main/produtos/produtoss.component */
      "./src/app/paths/Main/produtos/produtoss.component.ts");
      /* harmony import */


      var _paths_Main_alterar_produto_alterar_produto_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./paths/Main/alterar-produto/alterar-produto.component */
      "./src/app/paths/Main/alterar-produto/alterar-produto.component.ts");
      /* harmony import */


      var _paths_Main_alterar_ingrediente_alterar_ingrediente_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./paths/Main/alterar-ingrediente/alterar-ingrediente.component */
      "./src/app/paths/Main/alterar-ingrediente/alterar-ingrediente.component.ts");

      var routes = [{
        path: 'produtos-categorias/produtos/:id',
        component: _paths_Main_produtos_produtoss_component__WEBPACK_IMPORTED_MODULE_12__["ProdutossComponent"],
        canActivate: [_paths_login_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: 'produtos-categorias',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | paths-Main-produtos-categoria-produtos-categoria-module */
          "paths-Main-produtos-categoria-produtos-categoria-module").then(__webpack_require__.bind(null,
          /*! ./paths/Main/produtos-categoria/produtos-categoria.module */
          "./src/app/paths/Main/produtos-categoria/produtos-categoria.module.ts")).then(function (m) {
            return m.ProdutosCategoriaModule;
          });
        },
        canActivate: [_paths_login_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: '',
        redirectTo: 'produtos-categorias',
        pathMatch: 'full',
        canActivate: [_paths_login_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: 'promocoes',
        component: _paths_Main_promocoes_promocoes_component__WEBPACK_IMPORTED_MODULE_2__["PromocoesComponent"],
        canActivate: [_paths_login_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: 'adicionar-produto',
        component: _paths_Main_adicionar_produto_adicionar_produto_component__WEBPACK_IMPORTED_MODULE_3__["AdicionarProdutoComponent"],
        canActivate: [_paths_login_guard_guard_adm_guard__WEBPACK_IMPORTED_MODULE_11__["GuardAdmGuard"], _paths_login_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: 'historico-vendas',
        component: _paths_Main_historico_vendas_historico_vendas_component__WEBPACK_IMPORTED_MODULE_4__["HistoricoVendasComponent"],
        canActivate: [_paths_login_guard_guard_adm_guard__WEBPACK_IMPORTED_MODULE_11__["GuardAdmGuard"], _paths_login_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: 'adicionar-ingredientes',
        component: _paths_Main_adicionar_ingrediente_adicionar_ingrediente_component__WEBPACK_IMPORTED_MODULE_5__["AdicionarIngredienteComponent"],
        canActivate: [_paths_login_guard_guard_adm_guard__WEBPACK_IMPORTED_MODULE_11__["GuardAdmGuard"], _paths_login_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: 'comprar',
        component: _paths_Main_carrinho_comprar_component__WEBPACK_IMPORTED_MODULE_7__["ComprarComponent"],
        canActivate: [_paths_login_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: 'login',
        component: _paths_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
      }, {
        path: 'registrar',
        component: _paths_login_registro_registro_component__WEBPACK_IMPORTED_MODULE_9__["RegistroComponent"]
      }, {
        path: 'alterar_produto',
        component: _paths_Main_alterar_produto_alterar_produto_component__WEBPACK_IMPORTED_MODULE_13__["AlterarProdutoComponent"]
      }, {
        path: 'alterar_ingrediente',
        component: _paths_Main_alterar_ingrediente_alterar_ingrediente_component__WEBPACK_IMPORTED_MODULE_14__["AlterarIngredienteComponent"]
      }, {
        path: '**',
        component: _paths_nao_encontrada_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_6__["NaoEncontradaComponent"]
      }];

      var AppRoutingModule =
      /** @class */
      function () {
        var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
          _classCallCheck(this, AppRoutingModule);
        });

        AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: AppRoutingModule
        });
        AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function AppRoutingModule_Factory(t) {
            return new (t || AppRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return AppRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _paths_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./paths/service/service_login/auth.service */
      "./src/app/paths/service/service_login/auth.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _paths_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./paths/template/footer/footer.component */
      "./src/app/paths/template/footer/footer.component.ts");
      /* harmony import */


      var _paths_login_nao_logado_nao_logado_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./paths/login/nao-logado/nao-logado.component */
      "./src/app/paths/login/nao-logado/nao-logado.component.ts");
      /* harmony import */


      var _paths_template_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./paths/template/header/header.component */
      "./src/app/paths/template/header/header.component.ts");

      function AppComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nao-logado");
        }
      }

      function AppComponent_app_header_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 6);
        }
      }

      var AppComponent =
      /** @class */
      function () {
        var AppComponent = /*#__PURE__*/function () {
          function AppComponent(authService) {
            _classCallCheck(this, AppComponent);

            this.authService = authService;
            this.mostrarMenu = this.authService.estaAutenticado();
            this.title = 'lanchonete';
          } // tslint:disable-next-line:use-lifecycle-interface


          _createClass(AppComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this = this;

              this.authService.mostrarMenu.subscribe(function (mostrar) {
                return _this.mostrarMenu = mostrar;
              });
            }
          }]);

          return AppComponent;
        }();

        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_paths_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
        };

        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AppComponent,
          selectors: [["app-root"]],
          decls: 8,
          vars: 2,
          consts: [["class", "d-grid"], ["naologado", ""], [1, "bg-container"], ["class", "", 4, "ngIf", "ngIfElse"], [1, "container-app", "py-5", "justify-content-around", "me-lg-auto", "ms-lg-5", "me-md-auto", "ms-md-2", "me-sm-auto", "me-sm-2"], [1, "footer-container"], [1, ""]],
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_template_0_Template, 1, 0, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_app_header_3_Template, 1, 0, "app-header", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostrarMenu)("ngIfElse", _r0);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _paths_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _paths_login_nao_logado_nao_logado_component__WEBPACK_IMPORTED_MODULE_5__["NaoLogadoComponent"], _paths_template_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]],
          styles: [".bg-container[_ngcontent-%COMP%] {\n  background: #EEEEEE;\n  position: relative;\n  min-height: 90vh;\n  width: 100%;\n}\n.bg-container[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsbUJBRlE7RUFHUixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUhGO0FBS0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWJ1dHRvbjogI0U3QUI5QTtcclxuJGNvbG9yLWJnOiAjRURFOUQ1O1xyXG4kY29sb3ItMjogI0RGNzg1NztcclxuJGNvbG9yLTM6ICNFRUVFRUU7XHJcbi5iZy1jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLTM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6OTB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLmZvb3Rlci1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXJlbTtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ== */"]
        });
        return AppComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _paths_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _paths_template_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./paths/template/header/header.component */
      "./src/app/paths/template/header/header.component.ts");
      /* harmony import */


      var _paths_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./paths/template/footer/footer.component */
      "./src/app/paths/template/footer/footer.component.ts");
      /* harmony import */


      var _paths_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./paths/login/login.component */
      "./src/app/paths/login/login.component.ts");
      /* harmony import */


      var _paths_login_registro_registro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./paths/login/registro/registro.component */
      "./src/app/paths/login/registro/registro.component.ts");
      /* harmony import */


      var _paths_Main_promocoes_promocoes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./paths/Main/promocoes/promocoes.component */
      "./src/app/paths/Main/promocoes/promocoes.component.ts");
      /* harmony import */


      var _paths_Main_adicionar_produto_adicionar_produto_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./paths/Main/adicionar-produto/adicionar-produto.component */
      "./src/app/paths/Main/adicionar-produto/adicionar-produto.component.ts");
      /* harmony import */


      var _paths_Main_historico_vendas_historico_vendas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./paths/Main/historico-vendas/historico-vendas.component */
      "./src/app/paths/Main/historico-vendas/historico-vendas.component.ts");
      /* harmony import */


      var _paths_Main_adicionar_ingrediente_adicionar_ingrediente_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./paths/Main/adicionar-ingrediente/adicionar-ingrediente.component */
      "./src/app/paths/Main/adicionar-ingrediente/adicionar-ingrediente.component.ts");
      /* harmony import */


      var _paths_nao_encontrada_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./paths/nao-encontrada/nao-encontrada.component */
      "./src/app/paths/nao-encontrada/nao-encontrada.component.ts");
      /* harmony import */


      var _paths_Main_carrinho_comprar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./paths/Main/carrinho/comprar.component */
      "./src/app/paths/Main/carrinho/comprar.component.ts");
      /* harmony import */


      var _paths_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./paths/service/service_login/auth.service */
      "./src/app/paths/service/service_login/auth.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _paths_login_nao_logado_nao_logado_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./paths/login/nao-logado/nao-logado.component */
      "./src/app/paths/login/nao-logado/nao-logado.component.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _paths_Main_produtos_produtoss_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./paths/Main/produtos/produtoss.component */
      "./src/app/paths/Main/produtos/produtoss.component.ts");
      /* harmony import */


      var _paths_Main_alterar_produto_alterar_produto_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./paths/Main/alterar-produto/alterar-produto.component */
      "./src/app/paths/Main/alterar-produto/alterar-produto.component.ts");
      /* harmony import */


      var _paths_Main_alterar_ingrediente_alterar_ingrediente_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./paths/Main/alterar-ingrediente/alterar-ingrediente.component */
      "./src/app/paths/Main/alterar-ingrediente/alterar-ingrediente.component.ts");

      var AppModule =
      /** @class */
      function () {
        var AppModule = /*#__PURE__*/_createClass(function AppModule() {
          _classCallCheck(this, AppModule);
        });

        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: AppModule,
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function AppModule_Factory(t) {
            return new (t || AppModule)();
          },
          providers: [_paths_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"]],
          imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]]]
        });
        return AppModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _paths_template_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _paths_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _paths_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _paths_login_registro_registro_component__WEBPACK_IMPORTED_MODULE_7__["RegistroComponent"], _paths_Main_promocoes_promocoes_component__WEBPACK_IMPORTED_MODULE_8__["PromocoesComponent"], _paths_Main_adicionar_produto_adicionar_produto_component__WEBPACK_IMPORTED_MODULE_9__["AdicionarProdutoComponent"], _paths_Main_historico_vendas_historico_vendas_component__WEBPACK_IMPORTED_MODULE_10__["HistoricoVendasComponent"], _paths_Main_adicionar_ingrediente_adicionar_ingrediente_component__WEBPACK_IMPORTED_MODULE_11__["AdicionarIngredienteComponent"], _paths_nao_encontrada_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_12__["NaoEncontradaComponent"], _paths_Main_carrinho_comprar_component__WEBPACK_IMPORTED_MODULE_13__["ComprarComponent"], _paths_login_nao_logado_nao_logado_component__WEBPACK_IMPORTED_MODULE_16__["NaoLogadoComponent"], _paths_Main_produtos_produtoss_component__WEBPACK_IMPORTED_MODULE_18__["ProdutossComponent"], _paths_Main_alterar_produto_alterar_produto_component__WEBPACK_IMPORTED_MODULE_19__["AlterarProdutoComponent"], _paths_Main_alterar_ingrediente_alterar_ingrediente_component__WEBPACK_IMPORTED_MODULE_20__["AlterarIngredienteComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _paths_template_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _paths_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _paths_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _paths_login_registro_registro_component__WEBPACK_IMPORTED_MODULE_7__["RegistroComponent"], _paths_Main_promocoes_promocoes_component__WEBPACK_IMPORTED_MODULE_8__["PromocoesComponent"], _paths_Main_adicionar_produto_adicionar_produto_component__WEBPACK_IMPORTED_MODULE_9__["AdicionarProdutoComponent"], _paths_Main_historico_vendas_historico_vendas_component__WEBPACK_IMPORTED_MODULE_10__["HistoricoVendasComponent"], _paths_Main_adicionar_ingrediente_adicionar_ingrediente_component__WEBPACK_IMPORTED_MODULE_11__["AdicionarIngredienteComponent"], _paths_nao_encontrada_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_12__["NaoEncontradaComponent"], _paths_Main_carrinho_comprar_component__WEBPACK_IMPORTED_MODULE_13__["ComprarComponent"], _paths_login_nao_logado_nao_logado_component__WEBPACK_IMPORTED_MODULE_16__["NaoLogadoComponent"], _paths_Main_produtos_produtoss_component__WEBPACK_IMPORTED_MODULE_18__["ProdutossComponent"], _paths_Main_alterar_produto_alterar_produto_component__WEBPACK_IMPORTED_MODULE_19__["AlterarProdutoComponent"], _paths_Main_alterar_ingrediente_alterar_ingrediente_component__WEBPACK_IMPORTED_MODULE_20__["AlterarIngredienteComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]],
            providers: [_paths_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/Main/adicionar-ingrediente/adicionar-ingrediente.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/paths/Main/adicionar-ingrediente/adicionar-ingrediente.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: AdicionarIngredienteComponent */

    /***/
    function srcAppPathsMainAdicionarIngredienteAdicionarIngredienteComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdicionarIngredienteComponent", function () {
        return AdicionarIngredienteComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _models_produto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../models/produto */
      "./src/app/paths/models/produto.ts");
      /* harmony import */


      var _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/service_produto/produto.service */
      "./src/app/paths/service/service_produto/produto.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AdicionarIngredienteComponent_div_8_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdicionarIngredienteComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdicionarIngredienteComponent_div_8_small_1_Template, 2, 0, "small", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formAddProduto.controls["nome"].hasError("required"));
        }
      }

      function AdicionarIngredienteComponent_div_13_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido com n\xFAmeros. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdicionarIngredienteComponent_div_13_small_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser maior que 00,00. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdicionarIngredienteComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdicionarIngredienteComponent_div_13_small_1_Template, 2, 0, "small", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdicionarIngredienteComponent_div_13_small_2_Template, 2, 0, "small", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formAddProduto.controls["preco"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formAddProduto.controls["preco"].hasError("min"));
        }
      }

      function AdicionarIngredienteComponent_div_18_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdicionarIngredienteComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdicionarIngredienteComponent_div_18_small_1_Template, 2, 0, "small", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formAddProduto.controls["nome"].hasError("required"));
        }
      }

      function AdicionarIngredienteComponent_span_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "escolha uma imagem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "is-invalid": a0,
          "is-valid": a1
        };
      };

      var AdicionarIngredienteComponent =
      /** @class */
      function () {
        var AdicionarIngredienteComponent = /*#__PURE__*/function () {
          function AdicionarIngredienteComponent(fb, produtoService) {
            _classCallCheck(this, AdicionarIngredienteComponent);

            this.fb = fb;
            this.produtoService = produtoService;
            this.produto = new _models_produto__WEBPACK_IMPORTED_MODULE_2__["Ingrediente"]();
            this.fotoSrc = '';
            this.mostrarTexto = true;
          }

          _createClass(AdicionarIngredienteComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.createForm();
            }
          }, {
            key: "createForm",
            value: function createForm() {
              this.formAddProduto = this.fb.group({
                nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                imagem: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                preco: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
                ingredientes: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              });
            }
          }, {
            key: "imagem",
            value: function imagem(event) {
              var _this2 = this;

              this.span = document.getElementById('span_imagem');
              var inputTarget = event.target;
              var file = inputTarget.files[0];

              if (file) {
                var reader = new FileReader();
                reader.addEventListener('load', function (e) {
                  var readerTarget = e.target;
                  _this2.formAddProduto.value.imagem = String(readerTarget.result);
                  _this2.span.style.border = 'none';
                  _this2.span.style.background = 'none';
                  _this2.mostrarTexto = false;
                  _this2.fotoSrc = String(readerTarget.result);
                });
                reader.readAsDataURL(file);
              }
            }
          }, {
            key: "addProduto",
            value: function addProduto() {
              if (this.formAddProduto.dirty && this.formAddProduto.valid) {
                this.produto = Object.assign({}, this.produto, this.formAddProduto.value);
                this.produtoService.postProduto(this.produto).subscribe(function (res) {
                  alert('enviado com sucesso!');
                });
                console.log('produto adicionada', this.produto);
              } else {
                alert('preencha o formulario!');
              }
            }
          }, {
            key: "addPromocao",
            value: function addPromocao() {
              if (this.formAddProduto.dirty && this.formAddProduto.valid) {
                this.promocao = Object.assign({}, this.promocao, this.formAddProduto.value);
                this.produtoService.postPromocoes(this.promocao).subscribe(function (res) {
                  alert('enviado com sucesso!');
                });
                console.log('promoção adicionada');
              } else {
                alert('preencha o formulario!');
              }
            }
          }]);

          return AdicionarIngredienteComponent;
        }();

        AdicionarIngredienteComponent.ɵfac = function AdicionarIngredienteComponent_Factory(t) {
          return new (t || AdicionarIngredienteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]));
        };

        AdicionarIngredienteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AdicionarIngredienteComponent,
          selectors: [["app-adicionar-ingrediente"]],
          decls: 31,
          vars: 34,
          consts: [[1, "contato-bg", "p-5", "rounded", "d-grid", 3, "formGroup"], [1, "mx-auto", "d-grid", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], [1, "mb-3", "d-grid", "mx-auto", "mb-5", "div-input"], ["for", "produto", 1, "form-label"], ["type", "text", "id", "produto", "placeholder", "nome do produto", "formControlName", "nome", 1, "form-control", 3, "ngClass"], [4, "ngIf"], ["for", "preco", 1, "form-label"], ["type", "number", "id", "preco", "placeholder", "R$ 00,00", "formControlName", "preco", 1, "form-control", 3, "ngClass"], ["for", "texto", 1, "form-label"], ["id", "texto", "placeholder", "digite o ingrediente...", "formControlName", "ingredientes", 1, "form-control", 3, "ngClass"], [1, "mb-3", "mx-auto"], ["for", "formFile", "id", "span_imagem", 1, "form-label", "img-label"], [1, "img", 3, "src"], ["type", "file", "accept", "image/*", "id", "formFile", "formControlName", "imagem", 1, "form-control", 3, "change"], [1, "d-lg-flex", "flex-wrap", "mx-auto"], [1, "col-auto", "ms-lg-3"], ["type", "submit", 1, "btn", "mb-3", 3, "click"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]],
          template: function AdicionarIngredienteComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Adicionar itens");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "nome do produto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdicionarIngredienteComponent_div_8_Template, 2, 1, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "pre\xE7o ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdicionarIngredienteComponent_div_13_Template, 3, 2, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "ingredientes");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "textarea", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AdicionarIngredienteComponent_div_18_Template, 2, 1, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AdicionarIngredienteComponent_span_21_Template, 2, 0, "span", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdicionarIngredienteComponent_Template_input_change_23_listener($event) {
                return ctx.imagem($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdicionarIngredienteComponent_Template_button_click_26_listener() {
                return ctx.addProduto();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Adicionar Produto ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdicionarIngredienteComponent_Template_button_click_29_listener() {
                return ctx.addPromocao();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Adicionar Promo\xE7\xE3o ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formAddProduto);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["nome"].valid)("invalid", ctx.formAddProduto.controls["nome"].invalid && (ctx.formAddProduto.controls["nome"].touched || ctx.formAddProduto.controls["nome"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c0, ctx.formAddProduto.controls["nome"].invalid && (ctx.formAddProduto.controls["nome"].touched || ctx.formAddProduto.controls["nome"].dirty), ctx.formAddProduto.controls["nome"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["nome"].invalid && (ctx.formAddProduto.controls["nome"].touched || ctx.formAddProduto.controls["nome"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["preco"].valid)("invalid", ctx.formAddProduto.controls["preco"].invalid && (ctx.formAddProduto.controls["preco"].touched || ctx.formAddProduto.controls["preco"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](28, _c0, ctx.formAddProduto.controls["preco"].invalid && (ctx.formAddProduto.controls["preco"].touched || ctx.formAddProduto.controls["preco"].dirty), ctx.formAddProduto.controls["preco"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["preco"].invalid && (ctx.formAddProduto.controls["preco"].touched || ctx.formAddProduto.controls["preco"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["ingredientes"].valid)("invalid", ctx.formAddProduto.controls["ingredientes"].invalid && (ctx.formAddProduto.controls["ingredientes"].touched || ctx.formAddProduto.controls["ingredientes"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](31, _c0, ctx.formAddProduto.controls["ingredientes"].invalid && (ctx.formAddProduto.controls["ingredientes"].touched || ctx.formAddProduto.controls["ingredientes"].dirty), ctx.formAddProduto.controls["ingredientes"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["ingredientes"].invalid && (ctx.formAddProduto.controls["ingredientes"].touched || ctx.formAddProduto.controls["ingredientes"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostrarTexto);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.fotoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["imagem"].valid)("invalid", ctx.formAddProduto.controls["imagem"].invalid && (ctx.formAddProduto.controls["imagem"].touched || ctx.formAddProduto.controls["imagem"].dirty));
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
          styles: [".contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 50%;\n}\n.contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-registro[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n  width: 25%;\n}\n@media (max-width: 500px) {\n  .contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .contato-bg[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus, .contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  color: #DF7857;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  width: 400px;\n  aspect-ratio: 16/9;\n  background: #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #aaa;\n  border: 2px dashed currentColor;\n  cursor: pointer;\n  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;\n}\n@media (max-width: 600px) {\n  .contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]:hover {\n  color: #999;\n  background: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvTWFpbi9hZGljaW9uYXItaW5ncmVkaWVudGUvYWRpY2lvbmFyLWluZ3JlZGllbnRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CRTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtBQWxCSjtBQW9CSTtFQUNFLGNBdEJJO0VBdUJKLDRCQXJCUTtBQUdkO0FBc0JFO0VBQ0UsVUFBQTtBQXBCSjtBQXFCSTtFQUZGO0lBR0ksVUFBQTtFQWxCSjtBQUNGO0FBc0JFO0VBMUJBLFdBQUE7RUFDQSxtQkFaYTtFQWFiLGdCQVBTO0VBUVQsNEJBVlk7QUFpQmQ7QUFtQkU7RUFDRSxVQUFBO0FBakJKO0FBbUJFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBakJKO0FBbUJFO0VBQ0UsMEJBQUE7QUFqQko7QUFvQkU7RUFDRSwrREE3Q1U7QUEyQmQ7QUFxQkU7RUFDRSw0QkFwRFU7QUFpQ2Q7QUFrQkU7RUFDRSw0QkFwRFU7QUFpQ2Q7QUF1QkU7RUFDRSxhQUFBO0FBckJKO0FBd0JFO0VBQ0UsNEJBN0RVO0FBdUNkO0FBcUJFO0VBQ0UsNEJBN0RVO0FBdUNkO0FBMEJFO0VBQ0UsNEJBbEVVO0VBbUVWLGNBckVNO0FBNkNWO0FBNEJFO0VBQ0UsNEJBeEVVO0VBeUVWLFlBQUE7RUFJQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUVBQUE7QUE3Qko7QUFrQkk7RUFIRjtJQUlJLFlBQUE7RUFmSjtBQUNGO0FBMEJJO0VBQ0UsZUFBQTtBQXhCTjtBQTRCRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQTFCSiIsImZpbGUiOiJzcmMvYXBwL3BhdGhzL01haW4vYWRpY2lvbmFyLWluZ3JlZGllbnRlL2FkaWNpb25hci1pbmdyZWRpZW50ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci1idXR0b246ICNFN0FCOUE7XHJcbiRjb2xvci1iZzogI0VERTlENTtcclxuJGNvbG9yLTI6ICNERjc4NTc7XHJcbiRjb2xvci0zOiAjNjE3MTQzO1xyXG4kZm9udC1yb2JvdG86ICdyb2JvdG8nLCBzZXJpZjtcclxuJGZvbnQtYmFiZTogJ1JhamRoYW5pJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtNzAwOiA3MDA7XHJcbiRjb2xvci1ob3ZlcjogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZlY2QyIDAlLCAjZmNiNjlmIDEwMCUpO1xyXG5cclxuQG1peGluIGJvdGFvKCkge1xyXG5cclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItYnV0dG9uO1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC03MDA7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxufVxyXG5cclxuXHJcbi5jb250YXRvLWJnIHtcclxuICAuaDEtYmcge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgIC5oMS1yZWdpc3RybyB7XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItMjtcclxuICAgICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIC5kaXYtaW5wdXR7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL2JhY2tncm91bmQ6ICRjb2xvci1iZztcclxuICBidXR0b24ge1xyXG4gICAgQGluY2x1ZGUgYm90YW9cclxuICB9XHJcbiAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPW51bWJlcl0saW5wdXRbdHlwZT1udW1iZXJdOmZvY3VzICx0ZXh0YXJlYXtcclxuICAgIC1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7XHJcbiAgfVxyXG5cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWhvdmVyO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcblxyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcblxyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAgIGNvbG9yOiAkY29sb3ItMjtcclxuXHJcbiAgfVxyXG5cclxuICAuaW1nLWxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgYXNwZWN0LXJhdGlvOiAxNi85O1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2FhYTtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCBjdXJyZW50Q29sb3I7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAuaW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmltZy1sYWJlbDpob3ZlciB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"]
        });
        return AdicionarIngredienteComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdicionarIngredienteComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-adicionar-ingrediente',
            templateUrl: './adicionar-ingrediente.component.html',
            styleUrls: ['./adicionar-ingrediente.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/Main/adicionar-produto/adicionar-produto.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/paths/Main/adicionar-produto/adicionar-produto.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: AdicionarProdutoComponent */

    /***/
    function srcAppPathsMainAdicionarProdutoAdicionarProdutoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdicionarProdutoComponent", function () {
        return AdicionarProdutoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _models_produto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../models/produto */
      "./src/app/paths/models/produto.ts");
      /* harmony import */


      var _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/service_produto/produto.service */
      "./src/app/paths/service/service_produto/produto.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AdicionarProdutoComponent_div_8_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdicionarProdutoComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdicionarProdutoComponent_div_8_small_1_Template, 2, 0, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formAddProduto.controls["nome"].hasError("required"));
        }
      }

      function AdicionarProdutoComponent_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "escolha uma imagem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "is-invalid": a0,
          "is-valid": a1
        };
      };

      var AdicionarProdutoComponent =
      /** @class */
      function () {
        var AdicionarProdutoComponent = /*#__PURE__*/function () {
          function AdicionarProdutoComponent(fb, produtoService) {
            _classCallCheck(this, AdicionarProdutoComponent);

            this.fb = fb;
            this.produtoService = produtoService;
            this.produto = new _models_produto__WEBPACK_IMPORTED_MODULE_2__["Produto"]();
            this.fotoSrc = '';
            this.mostrarTexto = true;
          }

          _createClass(AdicionarProdutoComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.createForm();
            }
          }, {
            key: "createForm",
            value: function createForm() {
              this.formAddProduto = this.fb.group({
                nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                imagem: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              });
            }
          }, {
            key: "imagem",
            value: function imagem(event) {
              var _this3 = this;

              this.span = document.getElementById('span_imagem');
              var inputTarget = event.target;
              var file = inputTarget.files[0];

              if (file) {
                var reader = new FileReader();
                reader.addEventListener('load', function (e) {
                  var readerTarget = e.target;
                  _this3.formAddProduto.value.imagem = String(readerTarget.result);
                  _this3.span.style.border = 'none';
                  _this3.span.style.background = 'none';
                  _this3.mostrarTexto = false;
                  _this3.fotoSrc = String(readerTarget.result);
                });
                reader.readAsDataURL(file);
              }
            }
          }, {
            key: "enviar",
            value: function enviar() {
              if (this.formAddProduto.dirty && this.formAddProduto.valid) {
                this.produto = Object.assign({}, this.produto, this.formAddProduto.value);
                console.log(this.produto);
                this.produtoService.postProdutoLista(this.produto).subscribe(function (res) {
                  alert('enviado com sucesso!');
                });
              } else {
                alert('preencha o formulario!');
              }
            }
          }, {
            key: "atualizar",
            value: function atualizar() {
              console.log('atualizar', this.formAddProduto.value);
            }
          }]);

          return AdicionarProdutoComponent;
        }();

        AdicionarProdutoComponent.ɵfac = function AdicionarProdutoComponent_Factory(t) {
          return new (t || AdicionarProdutoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]));
        };

        AdicionarProdutoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AdicionarProdutoComponent,
          selectors: [["app-contato"]],
          decls: 17,
          vars: 16,
          consts: [[1, "contato-bg", "p-5", "rounded", "d-grid", 3, "formGroup"], [1, "mx-auto", "d-grid", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], [1, "mb-3", "d-grid", "mx-auto", "mb-5", "div-input"], ["for", "email", 1, "form-label"], ["type", "text", "id", "email", "placeholder", "Digite um nome...", "formControlName", "nome", 1, "form-control", 3, "ngClass"], [4, "ngIf"], [1, "mb-3", "mx-auto"], ["for", "formFile", "id", "span_imagem", 1, "form-label", "img-label"], [1, "img", 3, "src"], ["type", "file", "accept", "image/*", "id", "formFile", "formControlName", "imagem", 1, "form-control", 3, "change"], [1, "col-auto", "mx-auto"], ["type", "submit", 1, "btn", "mb-3", 3, "click"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]],
          template: function AdicionarProdutoComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Adicionar Lista de produtos");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "nome do produto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdicionarProdutoComponent_div_8_Template, 2, 1, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdicionarProdutoComponent_span_11_Template, 2, 0, "span", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdicionarProdutoComponent_Template_input_change_13_listener($event) {
                return ctx.imagem($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdicionarProdutoComponent_Template_button_click_15_listener() {
                return ctx.enviar();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Enviar");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formAddProduto);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["nome"].valid)("invalid", ctx.formAddProduto.controls["nome"].invalid && (ctx.formAddProduto.controls["nome"].touched || ctx.formAddProduto.controls["nome"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c0, ctx.formAddProduto.controls["nome"].invalid && (ctx.formAddProduto.controls["nome"].touched || ctx.formAddProduto.controls["nome"].dirty), ctx.formAddProduto.controls["nome"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["nome"].invalid && (ctx.formAddProduto.controls["nome"].touched || ctx.formAddProduto.controls["nome"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostrarTexto);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.fotoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["imagem"].valid)("invalid", ctx.formAddProduto.controls["imagem"].invalid && (ctx.formAddProduto.controls["imagem"].touched || ctx.formAddProduto.controls["imagem"].dirty));
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
          styles: [".contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 50%;\n}\n.contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-registro[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n  width: 25%;\n}\n@media (max-width: 500px) {\n  .contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  color: #DF7857;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  width: 400px;\n  aspect-ratio: 16/9;\n  background: #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #aaa;\n  border: 2px dashed currentColor;\n  cursor: pointer;\n  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;\n}\n@media (max-width: 600px) {\n  .contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]:hover {\n  color: #999;\n  background: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvTWFpbi9hZGljaW9uYXItcHJvZHV0by9hZGljaW9uYXItcHJvZHV0by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkU7RUFDRSw2QkFBQTtFQUNBLFVBQUE7QUFsQko7QUFvQkk7RUFDRSxjQXRCSTtFQXVCSiw0QkFyQlE7QUFHZDtBQXVCRTtFQUNFLFVBQUE7QUFyQko7QUFzQkk7RUFGRjtJQUdJLFVBQUE7RUFuQko7QUFDRjtBQXVCRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQXJCSjtBQXdCRTtFQWhDQSxXQUFBO0VBQ0EsbUJBWmE7RUFhYixnQkFQUztFQVFULDRCQVZZO0FBcUJkO0FBc0JFO0VBQ0UsVUFBQTtBQXBCSjtBQXVCRTtFQUNFLCtEQTdDVTtBQXdCZDtBQXdCRTtFQUNFLDRCQXBEVTtBQThCZDtBQXFCRTtFQUNFLDRCQXBEVTtBQThCZDtBQTBCRTtFQUNFLGFBQUE7QUF4Qko7QUEyQkU7RUFDRSw0QkE3RFU7QUFvQ2Q7QUF3QkU7RUFDRSw0QkE3RFU7QUFvQ2Q7QUE2QkU7RUFDRSw0QkFsRVU7RUFtRVYsY0FyRU07QUEwQ1Y7QUE4QkU7RUFDRSw0QkF2RVU7RUF3RVYsWUFBQTtFQUlBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSx1RUFBQTtBQS9CSjtBQW9CSTtFQUhGO0lBSUksWUFBQTtFQWpCSjtBQUNGO0FBNEJJO0VBQ0UsZUFBQTtBQTFCTjtBQWdDRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQTlCSiIsImZpbGUiOiJzcmMvYXBwL3BhdGhzL01haW4vYWRpY2lvbmFyLXByb2R1dG8vYWRpY2lvbmFyLXByb2R1dG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYnV0dG9uOiAjRTdBQjlBO1xyXG4kY29sb3ItYmc6ICNFREU5RDU7XHJcbiRjb2xvci0yOiAjREY3ODU3O1xyXG4kY29sb3ItMzogIzYxNzE0MztcclxuJGZvbnQtcm9ib3RvOiAncm9ib3RvJywgc2VyaWY7XHJcbiRmb250LWJhYmU6ICdSYWpkaGFuaScsIHNhbnMtc2VyaWY7XHJcbiRmb250LTcwMDogNzAwO1xyXG4kY29sb3ItaG92ZXI6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZWNkMiAwJSwgI2ZjYjY5ZiAxMDAlKTtcclxuXHJcbkBtaXhpbiBib3RhbygpIHtcclxuXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWJ1dHRvbjtcclxuICBmb250LXdlaWdodDogJGZvbnQtNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbn1cclxuXHJcblxyXG4uY29udGF0by1iZyB7XHJcbiAgLmgxLWJnIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAuaDEtcmVnaXN0cm8ge1xyXG4gICAgICBjb2xvcjogJGNvbG9yLTI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRpdi1pbnB1dCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL2JhY2tncm91bmQ6ICRjb2xvci1iZztcclxuICBpbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBib3Rhb1xyXG4gIH1cclxuXHJcbiAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItaG92ZXI7XHJcbiAgfVxyXG5cclxuICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuXHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPWZpbGVdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuXHJcbiAgfVxyXG5cclxuICBsYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gICAgY29sb3I6ICRjb2xvci0yO1xyXG4gIH1cclxuXHJcbiAgLmltZy1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICAgIGFzcGVjdC1yYXRpbzogMTYvOTtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6ICNhYWE7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgY3VycmVudENvbG9yO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgLmltZyB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLmltZy1sYWJlbDpob3ZlciB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"]
        });
        return AdicionarProdutoComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdicionarProdutoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contato',
            templateUrl: './adicionar-produto.component.html',
            styleUrls: ['./adicionar-produto.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/Main/alterar-ingrediente/alterar-ingrediente.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/paths/Main/alterar-ingrediente/alterar-ingrediente.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: AlterarIngredienteComponent */

    /***/
    function srcAppPathsMainAlterarIngredienteAlterarIngredienteComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlterarIngredienteComponent", function () {
        return AlterarIngredienteComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _models_produto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../models/produto */
      "./src/app/paths/models/produto.ts");
      /* harmony import */


      var _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/service_produto/produto.service */
      "./src/app/paths/service/service_produto/produto.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AlterarIngredienteComponent_div_8_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AlterarIngredienteComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlterarIngredienteComponent_div_8_small_1_Template, 2, 0, "small", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formAddProduto.controls["nome"].hasError("required"));
        }
      }

      function AlterarIngredienteComponent_div_13_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido com n\xFAmeros. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AlterarIngredienteComponent_div_13_small_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser maior que 00,00. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AlterarIngredienteComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlterarIngredienteComponent_div_13_small_1_Template, 2, 0, "small", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlterarIngredienteComponent_div_13_small_2_Template, 2, 0, "small", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formAddProduto.controls["preco"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formAddProduto.controls["preco"].hasError("min"));
        }
      }

      function AlterarIngredienteComponent_div_18_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AlterarIngredienteComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlterarIngredienteComponent_div_18_small_1_Template, 2, 0, "small", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formAddProduto.controls["nome"].hasError("required"));
        }
      }

      function AlterarIngredienteComponent_span_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "escolha uma imagem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "is-invalid": a0,
          "is-valid": a1
        };
      };

      var AlterarIngredienteComponent =
      /** @class */
      function () {
        var AlterarIngredienteComponent = /*#__PURE__*/function () {
          function AlterarIngredienteComponent(fb, produtoService) {
            _classCallCheck(this, AlterarIngredienteComponent);

            this.fb = fb;
            this.produtoService = produtoService;
            this.produto = new _models_produto__WEBPACK_IMPORTED_MODULE_2__["Ingrediente"]();
            this.fotoSrc = '';
            this.mostrarTexto = true;
          }

          _createClass(AlterarIngredienteComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.createForm();
            }
          }, {
            key: "createForm",
            value: function createForm() {
              this.formAddProduto = this.fb.group({
                nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                imagem: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                preco: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
                ingredientes: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              });
            }
          }, {
            key: "imagem",
            value: function imagem(event) {
              var _this4 = this;

              this.span = document.getElementById('span_imagem');
              var inputTarget = event.target;
              var file = inputTarget.files[0];

              if (file) {
                var reader = new FileReader();
                reader.addEventListener('load', function (e) {
                  var readerTarget = e.target;
                  _this4.formAddProduto.value.imagem = String(readerTarget.result);
                  _this4.span.style.border = 'none';
                  _this4.span.style.background = 'none';
                  _this4.mostrarTexto = false;
                  _this4.fotoSrc = String(readerTarget.result);
                });
                reader.readAsDataURL(file);
              }
            }
          }, {
            key: "atualizarPromocao",
            value: function atualizarPromocao() {}
          }, {
            key: "atualizarProduto",
            value: function atualizarProduto() {}
          }]);

          return AlterarIngredienteComponent;
        }();

        AlterarIngredienteComponent.ɵfac = function AlterarIngredienteComponent_Factory(t) {
          return new (t || AlterarIngredienteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]));
        };

        AlterarIngredienteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AlterarIngredienteComponent,
          selectors: [["app-alterar-ingrediente"]],
          decls: 31,
          vars: 34,
          consts: [[1, "contato-bg", "p-5", "rounded", "d-grid", 3, "formGroup"], [1, "mx-auto", "d-grid", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], [1, "mb-3", "d-grid", "mx-auto", "mb-5", "div-input"], ["for", "produto", 1, "form-label"], ["type", "text", "id", "produto", "placeholder", "nome do produto", "formControlName", "nome", 1, "form-control", 3, "ngClass"], [4, "ngIf"], ["for", "preco", 1, "form-label"], ["type", "number", "id", "preco", "placeholder", "R$ 00,00", "formControlName", "preco", 1, "form-control", 3, "ngClass"], ["for", "texto", 1, "form-label"], ["id", "texto", "placeholder", "digite o ingrediente...", "formControlName", "ingredientes", 1, "form-control", 3, "ngClass"], [1, "mb-3", "mx-auto"], ["for", "formFile", "id", "span_imagem", 1, "form-label", "img-label"], [1, "img", 3, "src"], ["type", "file", "accept", "image/*", "id", "formFile", "formControlName", "imagem", 1, "form-control", 3, "change"], [1, "d-lg-flex", "flex-wrap", "mx-auto"], [1, "col-auto", "ms-lg-3"], ["type", "submit", 1, "btn", "mb-3", 3, "click"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]],
          template: function AlterarIngredienteComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "alterar itens");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "nome do produto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AlterarIngredienteComponent_div_8_Template, 2, 1, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "pre\xE7o ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AlterarIngredienteComponent_div_13_Template, 3, 2, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "ingredientes");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "textarea", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AlterarIngredienteComponent_div_18_Template, 2, 1, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AlterarIngredienteComponent_span_21_Template, 2, 0, "span", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AlterarIngredienteComponent_Template_input_change_23_listener($event) {
                return ctx.imagem($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlterarIngredienteComponent_Template_button_click_26_listener() {
                return ctx.atualizarProduto();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Atualizar Produto ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlterarIngredienteComponent_Template_button_click_29_listener() {
                return ctx.atualizarPromocao();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Atualizar Promo\xE7\xE3o ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formAddProduto);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["nome"].valid)("invalid", ctx.formAddProduto.controls["nome"].invalid && (ctx.formAddProduto.controls["nome"].touched || ctx.formAddProduto.controls["nome"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c0, ctx.formAddProduto.controls["nome"].invalid && (ctx.formAddProduto.controls["nome"].touched || ctx.formAddProduto.controls["nome"].dirty), ctx.formAddProduto.controls["nome"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["nome"].invalid && (ctx.formAddProduto.controls["nome"].touched || ctx.formAddProduto.controls["nome"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["preco"].valid)("invalid", ctx.formAddProduto.controls["preco"].invalid && (ctx.formAddProduto.controls["preco"].touched || ctx.formAddProduto.controls["preco"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](28, _c0, ctx.formAddProduto.controls["preco"].invalid && (ctx.formAddProduto.controls["preco"].touched || ctx.formAddProduto.controls["preco"].dirty), ctx.formAddProduto.controls["preco"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["preco"].invalid && (ctx.formAddProduto.controls["preco"].touched || ctx.formAddProduto.controls["preco"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["ingredientes"].valid)("invalid", ctx.formAddProduto.controls["ingredientes"].invalid && (ctx.formAddProduto.controls["ingredientes"].touched || ctx.formAddProduto.controls["ingredientes"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](31, _c0, ctx.formAddProduto.controls["ingredientes"].invalid && (ctx.formAddProduto.controls["ingredientes"].touched || ctx.formAddProduto.controls["ingredientes"].dirty), ctx.formAddProduto.controls["ingredientes"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["ingredientes"].invalid && (ctx.formAddProduto.controls["ingredientes"].touched || ctx.formAddProduto.controls["ingredientes"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostrarTexto);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.fotoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["imagem"].valid)("invalid", ctx.formAddProduto.controls["imagem"].invalid && (ctx.formAddProduto.controls["imagem"].touched || ctx.formAddProduto.controls["imagem"].dirty));
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
          styles: [".contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 50%;\n}\n.contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-registro[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n  width: 25%;\n}\n@media (max-width: 500px) {\n  .contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .contato-bg[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus, .contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  color: #DF7857;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  width: 400px;\n  aspect-ratio: 16/9;\n  background: #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #aaa;\n  border: 2px dashed currentColor;\n  cursor: pointer;\n  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;\n}\n@media (max-width: 600px) {\n  .contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]:hover {\n  color: #999;\n  background: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvTWFpbi9hbHRlcmFyLWluZ3JlZGllbnRlL2FsdGVyYXItaW5ncmVkaWVudGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJFO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FBbEJKO0FBb0JJO0VBQ0UsY0F0Qkk7RUF1QkosNEJBckJRO0FBR2Q7QUFzQkU7RUFDRSxVQUFBO0FBcEJKO0FBcUJJO0VBRkY7SUFHSSxVQUFBO0VBbEJKO0FBQ0Y7QUFzQkU7RUExQkEsV0FBQTtFQUNBLG1CQVphO0VBYWIsZ0JBUFM7RUFRVCw0QkFWWTtBQWlCZDtBQW1CRTtFQUNFLFVBQUE7QUFqQko7QUFtQkU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFqQko7QUFtQkU7RUFDRSwwQkFBQTtBQWpCSjtBQW9CRTtFQUNFLCtEQTdDVTtBQTJCZDtBQXFCRTtFQUNFLDRCQXBEVTtBQWlDZDtBQWtCRTtFQUNFLDRCQXBEVTtBQWlDZDtBQXVCRTtFQUNFLGFBQUE7QUFyQko7QUF3QkU7RUFDRSw0QkE3RFU7QUF1Q2Q7QUFxQkU7RUFDRSw0QkE3RFU7QUF1Q2Q7QUEwQkU7RUFDRSw0QkFsRVU7RUFtRVYsY0FyRU07QUE2Q1Y7QUE0QkU7RUFDRSw0QkF4RVU7RUF5RVYsWUFBQTtFQUlBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSx1RUFBQTtBQTdCSjtBQWtCSTtFQUhGO0lBSUksWUFBQTtFQWZKO0FBQ0Y7QUEwQkk7RUFDRSxlQUFBO0FBeEJOO0FBNEJFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBMUJKIiwiZmlsZSI6InNyYy9hcHAvcGF0aHMvTWFpbi9hbHRlcmFyLWluZ3JlZGllbnRlL2FsdGVyYXItaW5ncmVkaWVudGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYnV0dG9uOiAjRTdBQjlBO1xyXG4kY29sb3ItYmc6ICNFREU5RDU7XHJcbiRjb2xvci0yOiAjREY3ODU3O1xyXG4kY29sb3ItMzogIzYxNzE0MztcclxuJGZvbnQtcm9ib3RvOiAncm9ib3RvJywgc2VyaWY7XHJcbiRmb250LWJhYmU6ICdSYWpkaGFuaScsIHNhbnMtc2VyaWY7XHJcbiRmb250LTcwMDogNzAwO1xyXG4kY29sb3ItaG92ZXI6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZWNkMiAwJSwgI2ZjYjY5ZiAxMDAlKTtcclxuXHJcbkBtaXhpbiBib3RhbygpIHtcclxuXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWJ1dHRvbjtcclxuICBmb250LXdlaWdodDogJGZvbnQtNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbn1cclxuXHJcblxyXG4uY29udGF0by1iZyB7XHJcbiAgLmgxLWJnIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAuaDEtcmVnaXN0cm8ge1xyXG4gICAgICBjb2xvcjogJGNvbG9yLTI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICAuZGl2LWlucHV0e1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9iYWNrZ3JvdW5kOiAkY29sb3ItYmc7XHJcbiAgYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGJvdGFvXHJcbiAgfVxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIGlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1udW1iZXJdLGlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cyAsdGV4dGFyZWF7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6dGV4dGZpZWxkO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1ob3ZlcjtcclxuICB9XHJcblxyXG4gIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgICBjb2xvcjogJGNvbG9yLTI7XHJcblxyXG4gIH1cclxuXHJcbiAgLmltZy1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICAgIGFzcGVjdC1yYXRpbzogMTYvOTtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6ICNhYWE7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgY3VycmVudENvbG9yO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgLmltZyB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbWctbGFiZWw6aG92ZXIge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"]
        });
        return AlterarIngredienteComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlterarIngredienteComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-alterar-ingrediente',
            templateUrl: './alterar-ingrediente.component.html',
            styleUrls: ['./alterar-ingrediente.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/Main/alterar-produto/alterar-produto.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/paths/Main/alterar-produto/alterar-produto.component.ts ***!
      \*************************************************************************/

    /*! exports provided: AlterarProdutoComponent */

    /***/
    function srcAppPathsMainAlterarProdutoAlterarProdutoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlterarProdutoComponent", function () {
        return AlterarProdutoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _models_produto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../models/produto */
      "./src/app/paths/models/produto.ts");
      /* harmony import */


      var _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/service_produto/produto.service */
      "./src/app/paths/service/service_produto/produto.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AlterarProdutoComponent_div_8_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AlterarProdutoComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlterarProdutoComponent_div_8_small_1_Template, 2, 0, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formAddProduto.controls["nome"].hasError("required"));
        }
      }

      function AlterarProdutoComponent_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "escolha uma imagem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "is-invalid": a0,
          "is-valid": a1
        };
      };

      var AlterarProdutoComponent =
      /** @class */
      function () {
        var AlterarProdutoComponent = /*#__PURE__*/function () {
          function AlterarProdutoComponent(fb, produtoService) {
            _classCallCheck(this, AlterarProdutoComponent);

            this.fb = fb;
            this.produtoService = produtoService;
            this.produto = new _models_produto__WEBPACK_IMPORTED_MODULE_2__["Produto"]();
            this.fotoSrc = '';
            this.mostrarTexto = true;
          }

          _createClass(AlterarProdutoComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.createForm();
            }
          }, {
            key: "createForm",
            value: function createForm() {
              this.formAddProduto = this.fb.group({
                nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                imagem: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              });
            }
          }, {
            key: "imagem",
            value: function imagem(event) {
              var _this5 = this;

              this.span = document.getElementById('span_imagem');
              var inputTarget = event.target;
              var file = inputTarget.files[0];

              if (file) {
                var reader = new FileReader();
                reader.addEventListener('load', function (e) {
                  var readerTarget = e.target;
                  _this5.formAddProduto.value.imagem = String(readerTarget.result);
                  _this5.span.style.border = 'none';
                  _this5.span.style.background = 'none';
                  _this5.mostrarTexto = false;
                  _this5.fotoSrc = String(readerTarget.result);
                });
                reader.readAsDataURL(file);
              }
            }
          }, {
            key: "atualizar",
            value: function atualizar() {
              console.log('atualizar', this.formAddProduto.value);
            }
          }]);

          return AlterarProdutoComponent;
        }();

        AlterarProdutoComponent.ɵfac = function AlterarProdutoComponent_Factory(t) {
          return new (t || AlterarProdutoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]));
        };

        AlterarProdutoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AlterarProdutoComponent,
          selectors: [["app-alterar-produto"]],
          decls: 17,
          vars: 16,
          consts: [[1, "contato-bg", "p-5", "rounded", "d-grid", 3, "formGroup"], [1, "mx-auto", "d-grid", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], [1, "mb-3", "d-grid", "mx-auto", "mb-5", "div-input"], ["for", "email", 1, "form-label"], ["type", "text", "id", "email", "placeholder", "Digite um nome...", "formControlName", "nome", 1, "form-control", 3, "ngClass"], [4, "ngIf"], [1, "mb-3", "mx-auto"], ["for", "formFile", "id", "span_imagem", 1, "form-label", "img-label"], [1, "img", 3, "src"], ["type", "file", "accept", "image/*", "id", "formFile", "formControlName", "imagem", 1, "form-control", 3, "change"], [1, "col-auto", "mx-auto"], ["type", "submit", 1, "btn", "mb-3", "ms-4", 3, "click"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]],
          template: function AlterarProdutoComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "alterar Lista de produtos");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "nome do produto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AlterarProdutoComponent_div_8_Template, 2, 1, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AlterarProdutoComponent_span_11_Template, 2, 0, "span", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AlterarProdutoComponent_Template_input_change_13_listener($event) {
                return ctx.imagem($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlterarProdutoComponent_Template_button_click_15_listener() {
                return ctx.atualizar();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Atualizar ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formAddProduto);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["nome"].valid)("invalid", ctx.formAddProduto.controls["nome"].invalid && (ctx.formAddProduto.controls["nome"].touched || ctx.formAddProduto.controls["nome"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c0, ctx.formAddProduto.controls["nome"].invalid && (ctx.formAddProduto.controls["nome"].touched || ctx.formAddProduto.controls["nome"].dirty), ctx.formAddProduto.controls["nome"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["nome"].invalid && (ctx.formAddProduto.controls["nome"].touched || ctx.formAddProduto.controls["nome"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostrarTexto);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.fotoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["imagem"].valid)("invalid", ctx.formAddProduto.controls["imagem"].invalid && (ctx.formAddProduto.controls["imagem"].touched || ctx.formAddProduto.controls["imagem"].dirty));
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
          styles: [".contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 50%;\n}\n.contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-registro[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n  width: 25%;\n}\n@media (max-width: 500px) {\n  .contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  color: #DF7857;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  width: 400px;\n  aspect-ratio: 16/9;\n  background: #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #aaa;\n  border: 2px dashed currentColor;\n  cursor: pointer;\n  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;\n}\n@media (max-width: 600px) {\n  .contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]:hover {\n  color: #999;\n  background: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvTWFpbi9hbHRlcmFyLXByb2R1dG8vYWx0ZXJhci1wcm9kdXRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CRTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtBQWxCSjtBQW9CSTtFQUNFLGNBdEJJO0VBdUJKLDRCQXJCUTtBQUdkO0FBdUJFO0VBQ0UsVUFBQTtBQXJCSjtBQXNCSTtFQUZGO0lBR0ksVUFBQTtFQW5CSjtBQUNGO0FBdUJFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBckJKO0FBd0JFO0VBaENBLFdBQUE7RUFDQSxtQkFaYTtFQWFiLGdCQVBTO0VBUVQsNEJBVlk7QUFxQmQ7QUFzQkU7RUFDRSxVQUFBO0FBcEJKO0FBdUJFO0VBQ0UsK0RBN0NVO0FBd0JkO0FBd0JFO0VBQ0UsNEJBcERVO0FBOEJkO0FBcUJFO0VBQ0UsNEJBcERVO0FBOEJkO0FBMEJFO0VBQ0UsYUFBQTtBQXhCSjtBQTJCRTtFQUNFLDRCQTdEVTtBQW9DZDtBQXdCRTtFQUNFLDRCQTdEVTtBQW9DZDtBQTZCRTtFQUNFLDRCQWxFVTtFQW1FVixjQXJFTTtBQTBDVjtBQThCRTtFQUNFLDRCQXZFVTtFQXdFVixZQUFBO0VBSUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVFQUFBO0FBL0JKO0FBb0JJO0VBSEY7SUFJSSxZQUFBO0VBakJKO0FBQ0Y7QUE0Qkk7RUFDRSxlQUFBO0FBMUJOO0FBZ0NFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBOUJKIiwiZmlsZSI6InNyYy9hcHAvcGF0aHMvTWFpbi9hbHRlcmFyLXByb2R1dG8vYWx0ZXJhci1wcm9kdXRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWJ1dHRvbjogI0U3QUI5QTtcclxuJGNvbG9yLWJnOiAjRURFOUQ1O1xyXG4kY29sb3ItMjogI0RGNzg1NztcclxuJGNvbG9yLTM6ICM2MTcxNDM7XHJcbiRmb250LXJvYm90bzogJ3JvYm90bycsIHNlcmlmO1xyXG4kZm9udC1iYWJlOiAnUmFqZGhhbmknLCBzYW5zLXNlcmlmO1xyXG4kZm9udC03MDA6IDcwMDtcclxuJGNvbG9yLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmVjZDIgMCUsICNmY2I2OWYgMTAwJSk7XHJcblxyXG5AbWl4aW4gYm90YW8oKSB7XHJcblxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1idXR0b247XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LTcwMDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG59XHJcblxyXG5cclxuLmNvbnRhdG8tYmcge1xyXG4gIC5oMS1iZyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgLmgxLXJlZ2lzdHJvIHtcclxuICAgICAgY29sb3I6ICRjb2xvci0yO1xyXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kaXYtaW5wdXQge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9iYWNrZ3JvdW5kOiAkY29sb3ItYmc7XHJcbiAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgQGluY2x1ZGUgYm90YW9cclxuICB9XHJcblxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWhvdmVyO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcblxyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcblxyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAgIGNvbG9yOiAkY29sb3ItMjtcclxuICB9XHJcblxyXG4gIC5pbWctbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcbiAgICBhc3BlY3QtcmF0aW86IDE2Lzk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIGN1cnJlbnRDb2xvcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgIC5pbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC5pbWctbGFiZWw6aG92ZXIge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"]
        });
        return AlterarProdutoComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlterarProdutoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-alterar-produto',
            templateUrl: './alterar-produto.component.html',
            styleUrls: ['./alterar-produto.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/Main/carrinho/comprar.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/paths/Main/carrinho/comprar.component.ts ***!
      \**********************************************************/

    /*! exports provided: ComprarComponent */

    /***/
    function srcAppPathsMainCarrinhoComprarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComprarComponent", function () {
        return ComprarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _service_service_carrinho_carrinho_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/service_carrinho/carrinho.service */
      "./src/app/paths/service/service_carrinho/carrinho.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ComprarComponent_ng_container_5_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComprarComponent_ng_container_5_li_2_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var carrinho_r4 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.removeProdutoCarrinho(carrinho_r4.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var carrinho_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", carrinho_r4.imageName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](carrinho_r4.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, carrinho_r4.price, "BRL"));
        }
      }

      function ComprarComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ComprarComponent_ng_container_5_li_2_Template, 9, 6, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComprarComponent_ng_container_5_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.comprar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Comprar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.itensCarrinho);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total:", ctx_r0.total, "");
        }
      }

      function ComprarComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ComprarComponent =
      /** @class */
      function () {
        var ComprarComponent = /*#__PURE__*/function () {
          function ComprarComponent(route, carrinhoService) {
            _classCallCheck(this, ComprarComponent);

            this.route = route;
            this.carrinhoService = carrinhoService;
            this.total = 0;
          }

          _createClass(ComprarComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.itensCarrinho = this.carrinhoService.obtemCarrinho();
            }
          }, {
            key: "calculaTotal",
            value: function calculaTotal() {
              var _this6 = this;

              this.total = this.itensCarrinho.reduce(function (prev, curr) {
                return prev + curr.price * _this6.itensCarrinho.length;
              }, 0);
            }
          }, {
            key: "removeProdutoCarrinho",
            value: function removeProdutoCarrinho(id) {
              this.itensCarrinho = this.itensCarrinho.filter(function (item) {
                return item.id !== id;
              });
              this.carrinhoService.removerCarrinho(id);
              this.calculaTotal();
            }
          }, {
            key: "comprar",
            value: function comprar() {
              alert('parabéns, você finalizou a sua compra!');
              this.carrinhoService.limparCarrinho();
              this.route.navigate(['/']);
            }
          }]);

          return ComprarComponent;
        }();

        ComprarComponent.ɵfac = function ComprarComponent_Factory(t) {
          return new (t || ComprarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_carrinho_carrinho_service__WEBPACK_IMPORTED_MODULE_2__["CarrinhoService"]));
        };

        ComprarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ComprarComponent,
          selectors: [["app-comprar"]],
          decls: 8,
          vars: 2,
          consts: [[1, "mx-auto", "d-flex", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], [1, "d-flex", "row", "div-carrinho"], [4, "ngIf", "ngIfElse"], ["semProduto", ""], ["class", "justify-content-between align-items-center d-flex", 4, "ngFor", "ngForOf"], [1, "cart-total", "ms-4"], [1, "buy-button", "btn", "w-auto", 3, "click"], [1, "justify-content-between", "align-items-center", "d-flex"], [3, "src"], [1, "remove-button", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "shimmer"], [1, "wrapper"], [1, "image-card", "animate"], [1, "stroke", "animate", "title"], [1, "stroke", "animate", "link"], [1, "stroke", "animate", "description"]],
          template: function ComprarComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Carrinho");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ComprarComponent_ng_container_5_Template, 7, 2, "ng-container", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ComprarComponent_ng_template_6_Template, 6, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itensCarrinho.length > 0)("ngIfElse", _r1);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
          styles: ["section[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 80%;\n}\nsection[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-registro[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\nsection[_ngcontent-%COMP%]   .div-carrinho[_ngcontent-%COMP%] {\n  margin-left: 20%;\n  margin-right: 20%;\n}\nsection[_ngcontent-%COMP%]   .cart-title[_ngcontent-%COMP%] {\n  font-size: 44px;\n  color: #000;\n  font-weight: 700;\n  padding: 8px 0;\n  font-family: \"roboto\", serif;\n}\nsection[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  border-radius: 8px;\n  overflow: hidden;\n  margin: 10px 0;\n  height: 100px;\n  font-family: \"Rajdhani\", sans-serif;\n  font-size: 18px;\n  color: #617143;\n  background: #EDE9D5;\n}\nsection[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  display: block;\n}\nsection[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%] {\n  background-color: red;\n  border: none;\n  color: white;\n  padding: 20px;\n  height: 100%;\n  transition: 0.2s all;\n}\nsection[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.9);\n}\nsection[_ngcontent-%COMP%]   .cart-total[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #000;\n  font-weight: 700;\n  padding: 8px 0;\n  font-family: \"roboto\", serif;\n}\nsection[_ngcontent-%COMP%]   .buy-button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n}\nsection[_ngcontent-%COMP%]   .buy-button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.title[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.link[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.description[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.shimmer[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 95%;\n  height: 120px;\n  margin: 10px auto;\n  background: #ffffff;\n}\n.shimmer[_ngcontent-%COMP%]   .image-card[_ngcontent-%COMP%] {\n  height: 90px;\n  width: 90px;\n  float: right;\n  border-radius: 8px;\n}\n.stroke[_ngcontent-%COMP%] {\n  height: 15px;\n  background: #777;\n  margin-top: 20px;\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 0px;\n  animation: fullView 0.5s forwards linear;\n}\n@keyframes fullView {\n  100% {\n    width: 100%;\n  }\n}\n.animate[_ngcontent-%COMP%] {\n  animation: shimmer 3s;\n  animation-iteration-count: infinite;\n  background: linear-gradient(to right, #e6e6e6 5%, #cccccc 25%, #e6e6e6 35%);\n  background-size: 1000px 100%;\n}\n@keyframes shimmer {\n  from {\n    background-position: -1000px 0;\n  }\n  to {\n    background-position: 1000px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvTWFpbi9jYXJyaW5oby9jb21wcmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVFO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FBZEo7QUFnQkk7RUFDRSxjQWxCSTtFQW1CSiw0QkFoQlE7QUFFZDtBQWtCRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFoQko7QUFrQkU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQXpCTztFQTBCUCxjQUFBO0VBQ0EsNEJBN0JVO0FBYWQ7QUFtQkU7RUFDRSxxREFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQXJDUTtFQXNDUixlQUFBO0VBQ0EsY0ExQ007RUE0Q04sbUJBL0NPO0FBNkJYO0FBb0JJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBbEJOO0FBcUJJO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFuQk47QUFzQkk7RUFDRSx1QkFBQTtBQXBCTjtBQXdCRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBckVVO0FBK0NkO0FBMEJFO0VBckVBLFdBQUE7RUFDQSxtQkFUYTtFQVViLGdCQUpTO0FBa0RYO0FBMEJFO0VBQ0UsK0RBaEZVO0FBd0RkO0FBNkJBO0VBQ0UsVUFBQTtBQTFCRjtBQTRCQTtFQUNFLFVBQUE7QUF6QkY7QUEyQkE7RUFDRSxVQUFBO0FBeEJGO0FBMEJBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQXZCRjtBQXlCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBdEJGO0FBd0JBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFyQkY7QUF3QkE7RUFDRSxVQUFBO0VBQ0Esd0NBQUE7QUFyQkY7QUF3QkE7RUFDRTtJQUNFLFdBQUE7RUFyQkY7QUFDRjtBQXVCQTtFQUNFLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyRUFBQTtFQUNBLDRCQUFBO0FBckJGO0FBdUJBO0VBQ0U7SUFDRSw4QkFBQTtFQXBCRjtFQXNCQTtJQUNFLDZCQUFBO0VBcEJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYXRocy9NYWluL2NhcnJpbmhvL2NvbXByYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYmc6ICNFREU5RDU7XHJcbiRjb2xvci1idXR0b246ICNFN0FCOUE7XHJcbiRjb2xvci0yOiAjREY3ODU3O1xyXG4kY29sb3ItMzogIzYxNzE0MztcclxuJGNvbG9yLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmVjZDIgMCUsICNmY2I2OWYgMTAwJSk7XHJcbiRmb250LXJvYm90bzogJ3JvYm90bycsIHNlcmlmO1xyXG4kZm9udC1iYWJlOiAnUmFqZGhhbmknLCBzYW5zLXNlcmlmO1xyXG4kZm9udC03MDA6IDcwMDtcclxuQG1peGluIGJvdGFvKCkge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1idXR0b247XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LTcwMDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgLmgxLWJnIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuXHJcbiAgICAuaDEtcmVnaXN0cm8ge1xyXG4gICAgICBjb2xvcjogJGNvbG9yLTI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICAuZGl2LWNhcnJpbmhve1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIG1hcmdpbi1yaWdodDoyMCUgO1xyXG4gIH1cclxuICAuY2FydC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDQ0cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC03MDA7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgfVxyXG5cclxuICBsaSB7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtYmFiZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAkY29sb3ItMztcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYmc7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAucmVtb3ZlLWJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgdHJhbnNpdGlvbjogLjJzIGFsbDtcclxuICAgIH1cclxuXHJcbiAgICAucmVtb3ZlLWJ1dHRvbjpob3ZlciB7XHJcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcnQtdG90YWwge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIH1cclxuXHJcblxyXG4gIC5idXktYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGJvdGFvO1xyXG5cclxuICB9XHJcblxyXG4gIC5idXktYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1ob3ZlcjtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuLmxpbmsge1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuLmRlc2NyaXB0aW9uIHtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcbi5zaGltbWVyIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuLnNoaW1tZXIgLmltYWdlLWNhcmQge1xyXG4gIGhlaWdodDogOTBweDtcclxuICB3aWR0aDogOTBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbi5zdHJva2Uge1xyXG4gIGhlaWdodDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjNzc3O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICB3aWR0aDogMHB4O1xyXG4gIGFuaW1hdGlvbjogZnVsbFZpZXcgMC41cyBmb3J3YXJkcyBsaW5lYXI7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZnVsbFZpZXcge1xyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbi5hbmltYXRlIHtcclxuICBhbmltYXRpb246IHNoaW1tZXIgM3M7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZTZlNmU2IDUlLCAjY2NjY2NjIDI1JSwgI2U2ZTZlNiAzNSUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwMHB4IDEwMCU7XHJcbn1cclxuQGtleWZyYW1lcyBzaGltbWVyIHtcclxuICBmcm9tIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMDAwcHggMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwMHB4IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
        });
        return ComprarComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComprarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-comprar',
            templateUrl: './comprar.component.html',
            styleUrls: ['./comprar.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _service_service_carrinho_carrinho_service__WEBPACK_IMPORTED_MODULE_2__["CarrinhoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/Main/historico-vendas/historico-vendas.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/paths/Main/historico-vendas/historico-vendas.component.ts ***!
      \***************************************************************************/

    /*! exports provided: HistoricoVendasComponent */

    /***/
    function srcAppPathsMainHistoricoVendasHistoricoVendasComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoricoVendasComponent", function () {
        return HistoricoVendasComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var HistoricoVendasComponent =
      /** @class */
      function () {
        var HistoricoVendasComponent = /*#__PURE__*/function () {
          function HistoricoVendasComponent() {
            _classCallCheck(this, HistoricoVendasComponent);

            this.total = 20;
            this.preco = 20;
          }

          _createClass(HistoricoVendasComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "remover",
            value: function remover() {}
          }]);

          return HistoricoVendasComponent;
        }();

        HistoricoVendasComponent.ɵfac = function HistoricoVendasComponent_Factory(t) {
          return new (t || HistoricoVendasComponent)();
        };

        HistoricoVendasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: HistoricoVendasComponent,
          selectors: [["app-historico-vendas"]],
          decls: 35,
          vars: 8,
          consts: [[1, "tabela"], [1, "mx-auto", "d-grid", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], [1, "table", "mx-auto", "w-75"], [1, "head-table"], ["scope", "col"], [1, "tbody-table"], ["scope", "row"], [1, "border-0"], [1, "btn", "remove-button", 3, "click"], [1, "fa-solid", "fa-xmark"], ["rowspan", "3", 1, "tabela"]],
          template: function HistoricoVendasComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Historico de vendas");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "nome");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "produto comprado");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "pre\xE7o");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "hamburguer");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "currency");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoricoVendasComponent_Template_button_click_26_listener() {
                return ctx.remover();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tfoot");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "total");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "currency");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 2, ctx.preco, "BRL"));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](34, 5, ctx.total, "BRL"));
            }
          },
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]],
          styles: [".tabela[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 80%;\n}\n.tabela[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-registro[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\n.tabela[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #E7AB9A;\n  color: #fff;\n  font-family: \"roboto\", serif;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  font-family: \"Rajdhani\", sans-serif;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #EDE9D5;\n  font-family: \"roboto\", serif;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.tabela[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\n  font-family: \"Rajdhani\", sans-serif;\n}\n.tabela[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #E7AB9A;\n  color: #fff;\n  font-family: \"roboto\", serif;\n}\n.tabela[_ngcontent-%COMP%]   .tabela[_ngcontent-%COMP%]:hover {\n  background: #f8f8f8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvTWFpbi9oaXN0b3JpY28tdmVuZGFzL2hpc3Rvcmljby12ZW5kYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJFO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FBaEJKO0FBa0JJO0VBQ0UsY0FwQkk7RUFxQkosNEJBakJPO0FBQ2I7QUFvQkU7RUFDRSxtQkEzQlU7RUE0QlYsV0FBQTtFQUNBLDRCQXhCUztBQU1iO0FBcUJFO0VBS0UsbUNBL0JPO0FBUVg7QUFtQkk7RUFDRSxtQkFuQ0s7RUFvQ0wsNEJBOUJPO0FBYWI7QUFvQkk7RUE1QkYsV0FBQTtFQUNBLG1CQVhZO0VBWVosZ0JBTFU7QUFnQlo7QUFnQkk7RUFDRSwrREF0Q1M7QUF3QmY7QUFpQkU7RUFNRSxtQ0EzQ087QUF1Qlg7QUFlSTtFQUNFLG1CQTdDUTtFQThDUixXQUFBO0VBQ0EsNEJBMUNPO0FBNkJiO0FBa0JFO0VBQ0UsbUJBQUE7QUFoQkoiLCJmaWxlIjoic3JjL2FwcC9wYXRocy9NYWluL2hpc3Rvcmljby12ZW5kYXMvaGlzdG9yaWNvLXZlbmRhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci1iZzogI0VERTlENTtcclxuJGNvbG9yLWJ1dHRvbjojRTdBQjlBO1xyXG4kY29sb3ItMjogI0RGNzg1NztcclxuJGNvbG9yLWhvdmVyOiAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZlY2QyIDAlLCAjZmNiNjlmIDEwMCUpO1xyXG4kY29sb3ItMzojNjE3MTQzO1xyXG5cclxuJGZvbnQtcm9ib3RvOidyb2JvdG8nLCBzZXJpZjtcclxuJGZvbnQtYmFiZTonUmFqZGhhbmknLCBzYW5zLXNlcmlmO1xyXG4kZm9udC03MDA6ICA3MDAgO1xyXG5AbWl4aW4gYm90YW8oKSB7XHJcblxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1idXR0b247XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LTcwMDtcclxuXHJcbn1cclxuLnRhYmVsYXtcclxuICAuaDEtYmcge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB3aWR0aDogODAlO1xyXG5cclxuICAgIC5oMS1yZWdpc3RybyB7XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItMjtcclxuICAgICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIHRoZWFke1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWJ1dHRvbjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuXHJcbiAgfVxyXG4gIHRib2R5e1xyXG4gICAgdGh7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1iZztcclxuICAgICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAgIH1cclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1iYWJlO1xyXG4gICAgLnJlbW92ZS1idXR0b257QGluY2x1ZGUgYm90YW8oKX1cclxuICAgIC5yZW1vdmUtYnV0dG9uOmhvdmVye1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItaG92ZXI7fVxyXG4gIH1cclxuXHJcbiAgdGZvb3R7XHJcbiAgICB0aHtcclxuICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWJ1dHRvbjtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgICB9XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtYmFiZTtcclxuXHJcbiAgfVxyXG4gIC50YWJlbGE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"]
        });
        return HistoricoVendasComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoricoVendasComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-historico-vendas',
            templateUrl: './historico-vendas.component.html',
            styleUrls: ['./historico-vendas.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/Main/produtos/produtoss.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/paths/Main/produtos/produtoss.component.ts ***!
      \************************************************************/

    /*! exports provided: ProdutossComponent */

    /***/
    function srcAppPathsMainProdutosProdutossComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProdutossComponent", function () {
        return ProdutossComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/service_login/auth.service */
      "./src/app/paths/service/service_login/auth.service.ts");
      /* harmony import */


      var _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../service/service_produto/produto.service */
      "./src/app/paths/service/service_produto/produto.service.ts");
      /* harmony import */


      var _service_service_carrinho_carrinho_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../service/service_carrinho/carrinho.service */
      "./src/app/paths/service/service_carrinho/carrinho.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ProdutossComponent_ng_container_1_div_1_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdutossComponent_ng_container_1_div_1_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var produto_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.remover(produto_r5.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProdutossComponent_ng_container_1_div_1_button_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdutossComponent_ng_container_1_div_1_button_14_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r11.atualizar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProdutossComponent_ng_container_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdutossComponent_ng_container_1_div_1_Template_a_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.comprar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Comprar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProdutossComponent_ng_container_1_div_1_button_13_Template, 2, 0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProdutossComponent_ng_container_1_div_1_button_14_Template, 2, 0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var produto_r5 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", produto_r5.imageName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](produto_r5 == null ? null : produto_r5.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](produto_r5 == null ? null : produto_r5.ingredients);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 6, produto_r5 == null ? null : produto_r5.price, "BRL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.eAdm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.eAdm);
        }
      }

      function ProdutossComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProdutossComponent_ng_container_1_div_1_Template, 15, 9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var produtos_r3 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", produtos_r3);
        }
      }

      function ProdutossComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ProdutossComponent =
      /** @class */
      function () {
        var ProdutossComponent = /*#__PURE__*/function () {
          function ProdutossComponent(route, authService, produtoService, carrinhoS) {
            _classCallCheck(this, ProdutossComponent);

            this.route = route;
            this.authService = authService;
            this.produtoService = produtoService;
            this.carrinhoS = carrinhoS;
            this.eAdm = this.authService.estaAutenticadoAdm(); // produtos: Ingrediente[] = [];

            this.id = 1;
          }

          _createClass(ProdutossComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getIngredientes(this.id);
            }
          }, {
            key: "getIngredientes",
            value: function getIngredientes(id) {
              this.produtos$ = this.produtoService.getIngrediente(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
                // this.route.navigateByUrl('/error');
                // alert('Problemas no server tente novamente mais tarde.');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
              }));
            }
          }, {
            key: "comprar",
            value: function comprar() {// vou mudar pra buscar pelo id quando for fazer o http
            }
          }, {
            key: "remover",
            value: function remover(id) {}
          }, {
            key: "atualizar",
            value: function atualizar() {
              this.route.navigate(['alterar_ingrediente']);
            }
          }]);

          return ProdutossComponent;
        }();

        ProdutossComponent.ɵfac = function ProdutossComponent_Factory(t) {
          return new (t || ProdutossComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_5__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_carrinho_carrinho_service__WEBPACK_IMPORTED_MODULE_6__["CarrinhoService"]));
        };

        ProdutossComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ProdutossComponent,
          selectors: [["app-produtoss"]],
          decls: 5,
          vars: 4,
          consts: [[1, "row", "row-cols-1", "row-cols-md-2", "g-4", "w-100"], [4, "ngIf", "ngIfElse"], ["loading", ""], ["class", "card card-container p-2 ms-5 ", 4, "ngFor", "ngForOf"], [1, "card", "card-container", "p-2", "ms-5"], ["alt", "...", 1, "card-img-top", "img-fluid", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "d-flex", "justify-content-between"], [1, "btn", "btn-card", 3, "click"], ["class", "btn remove-button", 3, "click", 4, "ngIf"], [1, "btn", "remove-button", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "fa-solid", "fa-pen-to-square"], [1, "card_", "p-2", "ms-5"], [1, "shimmerBG", "media"], [1, "p-32"], [1, "shimmerBG", "title-line"], [1, "shimmerBG", "title-line", "end"], [1, "shimmerBG", "content-line", "m-t-24"], [1, "shimmerBG", "content-line"], [1, "shimmerBG", "content-line", "end"]],
          template: function ProdutossComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProdutossComponent_ng_container_1_Template, 2, 1, "ng-container", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProdutossComponent_ng_template_3_Template, 30, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }

            if (rf & 2) {
              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.produtos$))("ngIfElse", _r1);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]],
          styles: [".card-container[_ngcontent-%COMP%] {\n  width: 18rem;\n  background: #EDE9D5;\n  color: #617143;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  font-family: \"roboto\", serif;\n}\n.card-container[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n}\n.card-container[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.card-container[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n}\n.card-container[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.card_[_ngcontent-%COMP%] {\n  position: relative;\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);\n  background-color: #FFF;\n  border-radius: 6px;\n  height: 400px;\n  overflow: hidden;\n  width: 250px;\n  margin: 40px 20px;\n}\n.card_[_ngcontent-%COMP%]   .shimmerBG[_ngcontent-%COMP%] {\n  animation-duration: 2.2s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-name: shimmer;\n  animation-timing-function: linear;\n  background: #ddd;\n  background: linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%);\n  background-size: 1200px 100%;\n}\n@keyframes shimmer {\n  0% {\n    background-position: -1200px 0;\n  }\n  100% {\n    background-position: 1200px 0;\n  }\n}\n.card_[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.card_[_ngcontent-%COMP%]   .p-32[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.card_[_ngcontent-%COMP%]   .title-line[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 100%;\n  margin-bottom: 12px;\n  border-radius: 20px;\n}\n.card_[_ngcontent-%COMP%]   .content-line[_ngcontent-%COMP%] {\n  height: 8px;\n  width: 100%;\n  margin-bottom: 16px;\n  border-radius: 8px;\n}\n.card_[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.m-t-24[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvTWFpbi9wcm9kdXRvcy9wcm9kdXRvc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUE7RUFDRSxZQUFBO0VBQ0EsbUJBakJTO0VBa0JULGNBZk87RUFnQlAscURBQUE7RUFDQSw0QkFoQlc7QUFFYjtBQWVFO0VBWkEsV0FBQTtFQUNBLG1CQVRZO0VBVVosZ0JBTFU7QUFLWjtBQWFFO0VBQ0UsK0RBdkJXO0FBWWY7QUFhRTtFQWxCQSxXQUFBO0VBQ0EsbUJBVFk7RUFVWixnQkFMVTtBQWFaO0FBV0U7RUFDRSwrREE3Qlc7QUFvQmY7QUFlQTtFQUNFLGtCQUFBO0VBRUEsd0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBWkY7QUFjRTtFQUNFLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLDJFQUFBO0VBQ0EsNEJBQUE7QUFaSjtBQXlCRTtFQUNFO0lBQ0UsOEJBQUE7RUFmSjtFQWlCRTtJQUNFLDZCQUFBO0VBZko7QUFDRjtBQWtCRTtFQUNFLGFBQUE7QUFoQko7QUFtQkU7RUFDRSxhQUFBO0FBakJKO0FBb0JFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBbEJKO0FBcUJFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBbkJKO0FBc0JFO0VBQ0UsVUFBQTtBQXBCSjtBQTBCQTtFQUNFLGdCQUFBO0FBdkJGIiwiZmlsZSI6InNyYy9hcHAvcGF0aHMvTWFpbi9wcm9kdXRvcy9wcm9kdXRvc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYmc6ICNFREU5RDU7XHJcbiRjb2xvci1idXR0b246I0U3QUI5QTtcclxuJGNvbG9yLWhvdmVyOiAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZlY2QyIDAlLCAjZmNiNjlmIDEwMCUpO1xyXG4kY29sb3ItMzojNjE3MTQzO1xyXG4kZm9udC1yb2JvdG86J3JvYm90bycsIHNlcmlmO1xyXG4kZm9udC1iYWJlOidSYWpkaGFuaScsIHNhbnMtc2VyaWY7XHJcbiRmb250LTcwMDogIDcwMCA7XHJcbkBtaXhpbiBib3RhbygpIHtcclxuXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWJ1dHRvbjtcclxuICBmb250LXdlaWdodDogJGZvbnQtNzAwO1xyXG5cclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVye1xyXG4gIHdpZHRoOiAxOHJlbTtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItYmc7XHJcbiAgY29sb3I6ICRjb2xvci0zO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgLmJ0bi1jYXJke1xyXG4gICAgQGluY2x1ZGUgYm90YW87XHJcbiAgfVxyXG4gIC5idG4tY2FyZDpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1ob3ZlcjtcclxuICB9XHJcbiAgLnJlbW92ZS1idXR0b257XHJcbiAgICBAaW5jbHVkZSBib3Rhb1xyXG4gIH1cclxuICAucmVtb3ZlLWJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1ob3ZlcjtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuLmNhcmRfIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBtYXJnaW46IDQwcHggMjBweDtcclxuXHJcbiAgLnNoaW1tZXJCRyB7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDIuMnM7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNoaW1tZXI7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRjZGNkY2IDglLCAjRjBGMEYwIDE4JSwgI0Y2RjZGNiAzMyUpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMjAwcHggMTAwJTtcclxuICB9XHJcblxyXG5cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2hpbW1lciB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMDAlIDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBzaGltbWVyIHtcclxuICAgIDAlIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyMDBweCAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEyMDBweCAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1lZGlhIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAucC0zMiB7XHJcbiAgICBwYWRkaW5nOiAzMnB4O1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlLWxpbmUge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50LWxpbmUge1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgfVxyXG5cclxuICAuZW5kIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbi5tLXQtMjQge1xyXG4gIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuIl19 */"]
        });
        return ProdutossComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutossComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-produtoss',
            templateUrl: './produtoss.component.html',
            styleUrls: ['./produtoss.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_5__["ProdutoService"]
          }, {
            type: _service_service_carrinho_carrinho_service__WEBPACK_IMPORTED_MODULE_6__["CarrinhoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/Main/promocoes/promocoes.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/paths/Main/promocoes/promocoes.component.ts ***!
      \*************************************************************/

    /*! exports provided: PromocoesComponent */

    /***/
    function srcAppPathsMainPromocoesPromocoesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PromocoesComponent", function () {
        return PromocoesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _models_produto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../models/produto */
      "./src/app/paths/models/produto.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../service/service_login/auth.service */
      "./src/app/paths/service/service_login/auth.service.ts");
      /* harmony import */


      var _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../service/service_produto/produto.service */
      "./src/app/paths/service/service_produto/produto.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function PromocoesComponent_ng_container_1_div_1_button_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PromocoesComponent_ng_container_1_div_1_button_19_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var produto_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.remover(produto_r5.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PromocoesComponent_ng_container_1_div_1_button_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PromocoesComponent_ng_container_1_div_1_button_21_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r11.atualizar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PromocoesComponent_ng_container_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PromocoesComponent_ng_container_1_div_1_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.comprar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Comprar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PromocoesComponent_ng_container_1_div_1_button_19_Template, 2, 0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PromocoesComponent_ng_container_1_div_1_button_21_Template, 2, 0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var produto_r5 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", produto_r5.imagem, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](produto_r5.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](produto_r5.detalhe);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 6, produto_r5.preco, "BRL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.eAdm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.eAdm);
        }
      }

      function PromocoesComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PromocoesComponent_ng_container_1_div_1_Template, 22, 9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var produtos_r3 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", produtos_r3);
        }
      }

      function PromocoesComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var PromocoesComponent =
      /** @class */
      function () {
        var PromocoesComponent = /*#__PURE__*/function () {
          function PromocoesComponent(route, authService, produtoService) {
            _classCallCheck(this, PromocoesComponent);

            this.route = route;
            this.authService = authService;
            this.produtoService = produtoService;
            this.eAdm = this.authService.estaAutenticadoAdm();
            this.produto = new _models_produto__WEBPACK_IMPORTED_MODULE_1__["Promocao"]();
          }

          _createClass(PromocoesComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getPromocoes();
            }
          }, {
            key: "getPromocoes",
            value: function getPromocoes() {
              this.produtos$ = this.produtoService.getPromocoes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
              }));
            }
          }, {
            key: "comprar",
            value: function comprar() {
              // vou mudar pra buscar pelo id quando for fazer o http
              this.route.navigate(['comprar']);
            }
          }, {
            key: "remover",
            value: function remover(id) {
              // this.produtos = this.produtos.filter(produtos => produtos.id !== id);
              this.produtoService.deletePromocoes(this.produto.id);
            }
          }, {
            key: "atualizar",
            value: function atualizar() {
              this.route.navigate(['alterar_ingrediente']);
            }
          }]);

          return PromocoesComponent;
        }();

        PromocoesComponent.ɵfac = function PromocoesComponent_Factory(t) {
          return new (t || PromocoesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_6__["ProdutoService"]));
        };

        PromocoesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: PromocoesComponent,
          selectors: [["app-promocoes"]],
          decls: 5,
          vars: 4,
          consts: [[1, "row", "row-cols-auto", "row-cols-md-2", "g-4", "w-100"], [4, "ngIf", "ngIfElse"], ["loading", ""], ["class", "d-flex flex-column  card card-container p-2 ms-5 ", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-column", "card", "card-container", "p-2", "ms-5"], ["alt", "...", "width", "400", "height", "300", 1, "card-img-top", "img-fluid", "w-100", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "d-flex", "justify-content-between"], [1, "btn", "btn-card", 3, "click"], ["class", "btn remove-button", 3, "click", 4, "ngIf"], [1, "btn", "remove-button", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "fa-solid", "fa-pen-to-square"], [1, "card_", "p-2", "ms-5"], [1, "shimmerBG", "media"], [1, "p-32"], [1, "shimmerBG", "title-line"], [1, "shimmerBG", "title-line", "end"], [1, "shimmerBG", "content-line", "m-t-24"], [1, "shimmerBG", "content-line"], [1, "shimmerBG", "content-line", "end"]],
          template: function PromocoesComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PromocoesComponent_ng_container_1_Template, 2, 1, "ng-container", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PromocoesComponent_ng_template_3_Template, 30, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }

            if (rf & 2) {
              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.produtos$))("ngIfElse", _r1);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]],
          styles: [".card-container[_ngcontent-%COMP%] {\n  width: 18rem;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  background: #EDE9D5;\n  color: #617143;\n  font-family: \"roboto\", serif;\n}\n.card-container[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n}\n.card-container[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.card-container[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n}\n.card-container[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.card_[_ngcontent-%COMP%] {\n  position: relative;\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);\n  background-color: #FFF;\n  border-radius: 6px;\n  height: 400px;\n  overflow: hidden;\n  width: 250px;\n  margin: 40px 20px;\n}\n.card_[_ngcontent-%COMP%]   .shimmerBG[_ngcontent-%COMP%] {\n  animation-duration: 2.2s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-name: shimmer;\n  animation-timing-function: linear;\n  background: #ddd;\n  background: linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%);\n  background-size: 1200px 100%;\n}\n@keyframes shimmer {\n  0% {\n    background-position: -1200px 0;\n  }\n  100% {\n    background-position: 1200px 0;\n  }\n}\n.card_[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.card_[_ngcontent-%COMP%]   .p-32[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.card_[_ngcontent-%COMP%]   .title-line[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 100%;\n  margin-bottom: 12px;\n  border-radius: 20px;\n}\n.card_[_ngcontent-%COMP%]   .content-line[_ngcontent-%COMP%] {\n  height: 8px;\n  width: 100%;\n  margin-bottom: 16px;\n  border-radius: 8px;\n}\n.card_[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.m-t-24[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvTWFpbi9wcm9tb2NvZXMvcHJvbW9jb2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBO0VBQ0UsWUFBQTtFQUNBLHFEQUFBO0VBRUEsbUJBbkJTO0VBb0JULGNBakJPO0VBa0JQLDRCQWhCVztBQUNiO0FBZ0JFO0VBWkEsV0FBQTtFQUNBLG1CQVZZO0VBV1osZ0JBTFU7QUFJWjtBQWNFO0VBQ0UsK0RBeEJXO0FBWWY7QUFjRTtFQWxCQSxXQUFBO0VBQ0EsbUJBVlk7RUFXWixnQkFMVTtBQVlaO0FBWUU7RUFDRSwrREE5Qlc7QUFvQmY7QUFnQkE7RUFDRSxrQkFBQTtFQUVBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWJGO0FBZUU7RUFDRSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSx1QkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyRUFBQTtFQUNBLDRCQUFBO0FBYko7QUEwQkU7RUFDRTtJQUNFLDhCQUFBO0VBaEJKO0VBa0JFO0lBQ0UsNkJBQUE7RUFoQko7QUFDRjtBQW1CRTtFQUNFLGFBQUE7QUFqQko7QUFvQkU7RUFDRSxhQUFBO0FBbEJKO0FBcUJFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBbkJKO0FBc0JFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBcEJKO0FBdUJFO0VBQ0UsVUFBQTtBQXJCSjtBQTJCQTtFQUNFLGdCQUFBO0FBeEJGIiwiZmlsZSI6InNyYy9hcHAvcGF0aHMvTWFpbi9wcm9tb2NvZXMvcHJvbW9jb2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWJnOiAjRURFOUQ1O1xyXG4kY29sb3ItYnV0dG9uOiNFN0FCOUE7XHJcbiRjb2xvci1ob3ZlcjogIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZWNkMiAwJSwgI2ZjYjY5ZiAxMDAlKTtcclxuJGNvbG9yLTM6IzYxNzE0MztcclxuXHJcbiRmb250LXJvYm90bzoncm9ib3RvJywgc2VyaWY7XHJcbiRmb250LWJhYmU6J1JhamRoYW5pJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtNzAwOiAgNzAwIDtcclxuQG1peGluIGJvdGFvKCkge1xyXG5cclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItYnV0dG9uO1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC03MDA7XHJcblxyXG59XHJcbi5jYXJkLWNvbnRhaW5lcntcclxuICB3aWR0aDogMThyZW07XHJcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMjlweCAwcHg7XHJcblxyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1iZztcclxuICBjb2xvcjogJGNvbG9yLTM7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAuYnRuLWNhcmR7XHJcbiAgICBAaW5jbHVkZSBib3Rhb1xyXG4gIH1cclxuICAuYnRuLWNhcmQ6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItaG92ZXI7XHJcbiAgfVxyXG4gIC5yZW1vdmUtYnV0dG9ue1xyXG4gICAgQGluY2x1ZGUgYm90YW9cclxuICB9XHJcbiAgLnJlbW92ZS1idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItaG92ZXI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbi5jYXJkXyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBib3gtc2hhZG93OiAwIDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgbWFyZ2luOiA0MHB4IDIwcHg7XHJcblxyXG4gIC5zaGltbWVyQkcge1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyLjJzO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzaGltbWVyO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0Y2RjZGNiA4JSwgI0YwRjBGMCAxOCUsICNGNkY2RjYgMzMlKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTIwMHB4IDEwMCU7XHJcbiAgfVxyXG5cclxuXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNoaW1tZXIge1xyXG4gICAgMCUge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwJSAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgc2hpbW1lciB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjAwcHggMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMjAwcHggMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tZWRpYSB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuXHJcbiAgLnAtMzIge1xyXG4gICAgcGFkZGluZzogMzJweDtcclxuICB9XHJcblxyXG4gIC50aXRsZS1saW5lIHtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC1saW5lIHtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmVuZCB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4ubS10LTI0IHtcclxuICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcbiJdfQ== */"]
        });
        return PromocoesComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromocoesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-promocoes',
            templateUrl: './promocoes.component.html',
            styleUrls: ['./promocoes.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }, {
            type: _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_6__["ProdutoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/login/guard/auth.guard.ts":
    /*!*************************************************!*\
      !*** ./src/app/paths/login/guard/auth.guard.ts ***!
      \*************************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppPathsLoginGuardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/service_login/auth.service */
      "./src/app/paths/service/service_login/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AuthGuard =
      /** @class */
      function () {
        var AuthGuard = /*#__PURE__*/function () {
          function AuthGuard(authService, route) {
            _classCallCheck(this, AuthGuard);

            this.authService = authService;
            this.route = route;
          }

          _createClass(AuthGuard, [{
            key: "canActivate",
            value: function canActivate(next, state) {
              if (!this.authService.estaAutenticado()) {
                this.route.navigate(['login']);
                return false;
              }

              return true;
            }
          }]);

          return AuthGuard;
        }();

        AuthGuard.ɵfac = function AuthGuard_Factory(t) {
          return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
        };

        AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: AuthGuard,
          factory: AuthGuard.ɵfac,
          providedIn: 'root'
        });
        return AuthGuard;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/login/guard/guard-adm.guard.ts":
    /*!******************************************************!*\
      !*** ./src/app/paths/login/guard/guard-adm.guard.ts ***!
      \******************************************************/

    /*! exports provided: GuardAdmGuard */

    /***/
    function srcAppPathsLoginGuardGuardAdmGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GuardAdmGuard", function () {
        return GuardAdmGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/service_login/auth.service */
      "./src/app/paths/service/service_login/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var GuardAdmGuard =
      /** @class */
      function () {
        var GuardAdmGuard = /*#__PURE__*/function () {
          function GuardAdmGuard(authService, route) {
            _classCallCheck(this, GuardAdmGuard);

            this.authService = authService;
            this.route = route;
          }

          _createClass(GuardAdmGuard, [{
            key: "canActivate",
            value: function canActivate(next, state) {
              if (!this.authService.estaAutenticadoAdm() && this.authService.estaAutenticado()) {
                this.route.navigate(['nao-encontrada']);
                return false;
              }

              return true;
            }
          }]);

          return GuardAdmGuard;
        }();

        GuardAdmGuard.ɵfac = function GuardAdmGuard_Factory(t) {
          return new (t || GuardAdmGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
        };

        GuardAdmGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: GuardAdmGuard,
          factory: GuardAdmGuard.ɵfac,
          providedIn: 'root'
        });
        return GuardAdmGuard;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuardAdmGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/login/login.component.ts":
    /*!************************************************!*\
      !*** ./src/app/paths/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppPathsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _models_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/usuario */
      "./src/app/paths/models/usuario.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../service/service_login/auth.service */
      "./src/app/paths/service/service_login/auth.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = function _c0(a0, a1) {
        return {
          "is-invalid": a0,
          "is-valid": a1
        };
      };

      var LoginComponent =
      /** @class */
      function () {
        var LoginComponent = /*#__PURE__*/function () {
          function LoginComponent(route, authService, fb) {
            _classCallCheck(this, LoginComponent);

            this.route = route;
            this.authService = authService;
            this.fb = fb;
            this.usuario = new _models_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
          }

          _createClass(LoginComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.createForm();
            }
          }, {
            key: "createForm",
            value: function createForm() {
              this.formLogin = this.fb.group({
                login: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
              });
            }
          }, {
            key: "logar",
            value: function logar() {
              var _this7 = this;

              if (this.formLogin.dirty && this.formLogin.valid) {
                this.usuario = Object.assign({}, this.usuario, this.formLogin.value);

                if (this.authService.login(this.usuario)) {
                  this.route.navigate(['/']);
                  return;
                }
              }

              if (this.formLogin.dirty && this.formLogin.valid) {
                this.usuario = Object.assign({}, this.usuario, this.formLogin.value);
                console.log(this.usuario);
                this.authService.logar(this.usuario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
                  console.log('user', user, _this7.usuario);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                  console.log('erro', err.usuario);
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
                })).subscribe(function (res) {
                  console.log('resposta', res, _this7.usuario);
                });
              } else {
                alert('preencha o formulario!');
              }
            }
          }, {
            key: "registrar",
            value: function registrar() {
              // apos fazer o http vou mudar
              this.route.navigate(['registrar']);
            }
          }]);

          return LoginComponent;
        }();

        LoginComponent.ɵfac = function LoginComponent_Factory(t) {
          return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
        };

        LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: LoginComponent,
          selectors: [["app-login"]],
          decls: 18,
          vars: 18,
          consts: [[1, "login-bg", "p-5", "rounded", "d-grid", 3, "formGroup", "ngSubmit"], [1, "mx-auto", "d-grid", "mb-5", "h1-bg"], [1, "h1-login", "mb-3", "mx-auto"], [1, "mb-3", "d-grid", "mx-auto", "mb-3", "div-input"], ["for", "login", 1, "col-sm-2", "col-form-label"], ["type", "text", "id", "login", "placeholder", "login", "formControlName", "login", 1, "form-control", 3, "ngClass"], [1, "mb-3", "d-grid", "mx-auto", "mb-4", "div-input"], ["for", "inputPassword", 1, "col-sm-2", "col-form-label"], ["type", "password", "id", "inputPassword", "placeholder", "digite sua password", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "d-flex", "mx-auto", "my-5"], [1, "col-auto"], ["type", "submit", "value", "login", 1, "btn", "mb-3", "botao", 3, "disabled"], [1, "col-auto", "ms-3"], ["type", "submit", 1, "btn", "mb-3", 3, "click"]],
          template: function LoginComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() {
                return ctx.logar();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "login");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "password");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_16_listener() {
                return ctx.registrar();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "registrar");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formLogin);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formLogin.controls["login"].valid)("invalid", ctx.formLogin.controls["login"].invalid && (ctx.formLogin.controls["login"].touched || ctx.formLogin.controls["login"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c0, ctx.formLogin.controls["login"].invalid && (ctx.formLogin.controls["login"].touched || ctx.formLogin.controls["login"].dirty), ctx.formLogin.controls["login"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formLogin.controls["password"].valid)("invalid", ctx.formLogin.controls["password"].invalid && (ctx.formLogin.controls["password"].touched || ctx.formLogin.controls["password"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c0, ctx.formLogin.controls["password"].invalid && (ctx.formLogin.controls["password"].touched || ctx.formLogin.controls["password"].dirty), ctx.formLogin.controls["password"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formLogin.valid);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]],
          styles: [".login-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 50%;\n}\n.login-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-login[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\n.login-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .login-bg[_ngcontent-%COMP%]   .botao[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n  font-family: \"roboto\", serif;\n}\n.login-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .login-bg[_ngcontent-%COMP%]   .botao[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.login-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.login-bg[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n.login-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.login-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.login-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.login-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.login-bg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  color: #DF7857;\n}\n.login-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n  width: 25%;\n}\n@media (max-width: 500px) {\n  .login-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JJO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FBbkJOO0FBcUJNO0VBQ0UsY0F2QkU7RUF3QkYsNEJBdEJNO0FBR2Q7QUF5QkU7RUFyQkEsV0FBQTtFQUNBLG1CQVphO0VBYWIsZ0JBUFU7RUFRViw0QkFWWTtBQVNkO0FBc0JFO0VBQ0UsK0RBN0JXO0FBU2Y7QUF1QkU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFyQko7QUF1QkU7RUFDRSxVQUFBO0FBckJKO0FBdUJFO0VBQ0UsNEJBM0NVO0FBc0JkO0FBb0JFO0VBQ0UsNEJBM0NVO0FBc0JkO0FBeUJFO0VBQ0UsNEJBaERVO0FBeUJkO0FBc0JFO0VBQ0UsNEJBaERVO0FBeUJkO0FBMEJFO0VBQ0UsNEJBcERVO0VBcURWLGNBdkRNO0FBK0JWO0FBMkJFO0VBQ0UsVUFBQTtBQXpCSjtBQTBCSTtFQUZGO0lBR0ksVUFBQTtFQXZCSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGF0aHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYnV0dG9uOiAjRTdBQjlBO1xyXG4kY29sb3ItYmc6ICNFREU5RDU7XHJcbiRjb2xvci0yOiAjREY3ODU3O1xyXG4kY29sb3ItMzogIzYxNzE0MztcclxuJGZvbnQtcm9ib3RvOiAncm9ib3RvJywgc2VyaWY7XHJcbiRmb250LWJhYmU6ICdSYWpkaGFuaScsIHNhbnMtc2VyaWYgO1xyXG4kZm9udC03MDA6ICA3MDAgO1xyXG4kY29sb3ItaG92ZXI6ICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmVjZDIgMCUsICNmY2I2OWYgMTAwJSk7XHJcblxyXG5AbWl4aW4gYm90YW8oKSB7XHJcblxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1idXR0b247XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LTcwMDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG59XHJcblxyXG4ubG9naW4tYmd7XHJcblxyXG5cclxuICAgIC5oMS1iZyB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgICAgLmgxLWxvZ2luIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLTI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnV0dG9uLC5ib3Rhb3tcclxuICAgIEBpbmNsdWRlIGJvdGFvXHJcbiAgfVxyXG4gIGJ1dHRvbjpob3ZlciwgLmJvdGFvOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWhvdmVyO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgaW5wdXQ6OnBsYWNlaG9sZGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuXHJcbiAgfVxyXG5cclxuICB0ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICB9XHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAgIGNvbG9yOiAkY29sb3ItMjtcclxuICB9XHJcblxyXG4gIC5kaXYtaW5wdXR7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"]
        });
        return LoginComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/login/nao-logado/nao-logado.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/paths/login/nao-logado/nao-logado.component.ts ***!
      \****************************************************************/

    /*! exports provided: NaoLogadoComponent */

    /***/
    function srcAppPathsLoginNaoLogadoNaoLogadoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NaoLogadoComponent", function () {
        return NaoLogadoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/service_login/auth.service */
      "./src/app/paths/service/service_login/auth.service.ts");

      var NaoLogadoComponent =
      /** @class */
      function () {
        var NaoLogadoComponent = /*#__PURE__*/function () {
          function NaoLogadoComponent(loginService) {
            _classCallCheck(this, NaoLogadoComponent);
          }

          _createClass(NaoLogadoComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return NaoLogadoComponent;
        }();

        NaoLogadoComponent.ɵfac = function NaoLogadoComponent_Factory(t) {
          return new (t || NaoLogadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
        };

        NaoLogadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: NaoLogadoComponent,
          selectors: [["app-nao-logado"]],
          decls: 4,
          vars: 0,
          consts: [[1, "navbar", "login-container"], [1, "container-fluid", "mx-auto"], [1, "navbar-brand", "mb-0", "mx-auto", "hamburguer"], [1, "fa-solid", "fa-burger"]],
          template: function NaoLogadoComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [".login-container[_ngcontent-%COMP%] {\n  background: #EDE9D5;\n}\n.login-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  font-weight: 700;\n  font-size: 40px;\n  color: #DF7857;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvbG9naW4vbmFvLWxvZ2Fkby9uYW8tbG9nYWRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsbUJBSlM7QUFFWDtBQUdFO0VBQ0UsNEJBSlU7RUFLVixnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQVJNO0FBT1YiLCJmaWxlIjoic3JjL2FwcC9wYXRocy9sb2dpbi9uYW8tbG9nYWRvL25hby1sb2dhZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYmc6ICNFREU5RDU7XHJcbiRjb2xvci0yOiAjREY3ODU3O1xyXG4kZm9udC1yb2JvdG86ICdyb2JvdG8nLCBzZXJpZjtcclxuLmxvZ2luLWNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItYmc7XHJcbiAgaDF7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiAkY29sb3ItMjtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"]
        });
        return NaoLogadoComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NaoLogadoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nao-logado',
            templateUrl: './nao-logado.component.html',
            styleUrls: ['./nao-logado.component.scss']
          }]
        }], function () {
          return [{
            type: _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/login/registro/registro.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/paths/login/registro/registro.component.ts ***!
      \************************************************************/

    /*! exports provided: RegistroComponent */

    /***/
    function srcAppPathsLoginRegistroRegistroComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistroComponent", function () {
        return RegistroComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _models_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../models/usuario */
      "./src/app/paths/models/usuario.ts");
      /* harmony import */


      var _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/service_login/auth.service */
      "./src/app/paths/service/service_login/auth.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      function RegistroComponent_div_9_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email invalido! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegistroComponent_div_9_small_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegistroComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistroComponent_div_9_small_1_Template, 2, 0, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistroComponent_div_9_small_2_Template, 2, 0, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formRegistro.controls["email"].hasError("email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formRegistro.controls["email"].hasError("required"));
        }
      }

      function RegistroComponent_div_16_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegistroComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistroComponent_div_16_small_1_Template, 2, 0, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formRegistro.controls["senha"].hasError("required"));
        }
      }

      function RegistroComponent_div_23_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa de no minimo 4 caracteres. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegistroComponent_div_23_small_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegistroComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistroComponent_div_23_small_1_Template, 2, 0, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistroComponent_div_23_small_2_Template, 2, 0, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formRegistro.controls["nome"].hasError("minlength"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formRegistro.controls["nome"].hasError("required"));
        }
      }

      function RegistroComponent_button_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Voltar ao login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegistroComponent_button_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistroComponent_button_27_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.registrar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "registrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegistroComponent_button_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistroComponent_button_28_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.registrarAdm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "registrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "is-invalid": a0,
          "is-valid": a1
        };
      };

      var RegistroComponent =
      /** @class */
      function () {
        var RegistroComponent = /*#__PURE__*/function () {
          function RegistroComponent(authService, fb) {
            _classCallCheck(this, RegistroComponent);

            this.authService = authService;
            this.fb = fb;
            this.mostrarBtn = !this.authService.estaAutenticadoAdm();
            this.usuario = new _models_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
          }

          _createClass(RegistroComponent, [{
            key: "createForm",
            value: function createForm() {
              this.formRegistro = this.fb.group({
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                senha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              });
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              this.createForm();
            }
          }, {
            key: "registrar",
            value: function registrar() {
              if (this.formRegistro.dirty && this.formRegistro.valid) {
                this.usuario = Object.assign({}, this.usuario, this.formRegistro.value);
                console.log('registrar usuario', this.usuario);
                return;
              }

              alert('preencha o formulario!');
            }
          }, {
            key: "registrarAdm",
            value: function registrarAdm() {
              if (this.formRegistro.dirty && this.formRegistro.valid) {
                this.usuario = Object.assign({}, this.usuario, this.formRegistro.value);
                console.log('registrarAdm', this.usuario);
                return;
              }

              alert('preencha o formulario!');
            }
          }]);

          return RegistroComponent;
        }();

        RegistroComponent.ɵfac = function RegistroComponent_Factory(t) {
          return new (t || RegistroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
        };

        RegistroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: RegistroComponent,
          selectors: [["app-registro"]],
          decls: 29,
          vars: 31,
          consts: [[1, "registro-bg"], [1, "d-grid", "py-5", 3, "formGroup"], [1, "mx-auto", "d-grid", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], [1, "mb-3", "div-input", "mx-auto"], ["for", "exampleFormControlInput1", 1, "form-label"], ["type", "email", "id", "exampleFormControlInput1", "placeholder", "name@example.com", "formControlName", "email", 1, "form-control", 3, "ngClass"], [4, "ngIf"], [1, "mx-auto", "div-input"], [1, "col-auto"], ["for", "inputPassword6", 1, "col-form-label"], ["type", "password", "id", "inputPassword6", "formControlName", "senha", "placeholder", "insira sua senha...", 1, "form-control", 3, "ngClass"], [1, "g-3", "mx-auto", "div-input"], ["for", "nome", 1, "col-form-label"], ["type", "text", "id", "nome", "formControlName", "nome", "placeholder", "insira seu nome...", 1, "form-control", 3, "ngClass"], [1, "d-flex", "my-5"], [1, "col-auto", "mx-auto"], ["type", "submit", "class", "btn  mb-3 me-4", "routerLink", "/login", 4, "ngIf"], ["type", "submit", "class", "btn  mb-3", 3, "click", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "error-message"], ["type", "submit", "routerLink", "/login", 1, "btn", "mb-3", "me-4"], ["type", "submit", 1, "btn", "mb-3", 3, "click"]],
          template: function RegistroComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Registro ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RegistroComponent_div_9_Template, 3, 2, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Senha");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegistroComponent_div_16_Template, 2, 1, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "nome");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RegistroComponent_div_23_Template, 3, 2, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RegistroComponent_button_26_Template, 2, 0, "button", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RegistroComponent_button_27_Template, 2, 0, "button", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RegistroComponent_button_28_Template, 2, 0, "button", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formRegistro);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formRegistro.controls["email"].valid)("invalid", ctx.formRegistro.controls["email"].invalid && (ctx.formRegistro.controls["email"].touched || ctx.formRegistro.controls["email"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c0, ctx.formRegistro.controls["email"].invalid && (ctx.formRegistro.controls["email"].touched || ctx.formRegistro.controls["email"].dirty), ctx.formRegistro.controls["email"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formRegistro.controls["email"].invalid && (ctx.formRegistro.controls["email"].touched || ctx.formRegistro.controls["email"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formRegistro.controls["senha"].valid)("invalid", ctx.formRegistro.controls["senha"].invalid && (ctx.formRegistro.controls["senha"].touched || ctx.formRegistro.controls["senha"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c0, ctx.formRegistro.controls["senha"].invalid && (ctx.formRegistro.controls["senha"].touched || ctx.formRegistro.controls["senha"].dirty), ctx.formRegistro.controls["senha"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formRegistro.controls["senha"].invalid && (ctx.formRegistro.controls["senha"].touched || ctx.formRegistro.controls["senha"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formRegistro.controls["nome"].valid)("invalid", ctx.formRegistro.controls["nome"].invalid && (ctx.formRegistro.controls["nome"].touched || ctx.formRegistro.controls["nome"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](28, _c0, ctx.formRegistro.controls["nome"].invalid && (ctx.formRegistro.controls["nome"].touched || ctx.formRegistro.controls["nome"].dirty), ctx.formRegistro.controls["nome"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formRegistro.controls["nome"].invalid && (ctx.formRegistro.controls["nome"].touched || ctx.formRegistro.controls["nome"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostrarBtn);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostrarBtn);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mostrarBtn);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]],
          styles: [".registro-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 50%;\n}\n.registro-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-registro[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\n.registro-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n  font-family: \"roboto\", serif;\n}\n.registro-bg[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n.registro-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.registro-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.registro-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.registro-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.registro-bg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  color: #DF7857;\n}\n.registro-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n  width: 25%;\n}\n@media (max-width: 500px) {\n  .registro-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvbG9naW4vcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JFO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FBakJKO0FBbUJJO0VBQ0UsY0FyQkk7RUFzQkosNEJBcEJRO0FBR2Q7QUFzQkU7RUFsQkEsV0FBQTtFQUNBLG1CQVphO0VBYWIsZ0JBUFM7RUFRVCw0QkFWWTtBQVNkO0FBb0JFO0VBQ0UsVUFBQTtBQWxCSjtBQXFCRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQW5CSjtBQXNCRTtFQUNFLCtEQXBDVTtBQWdCZDtBQXVCRTtFQUNFLDRCQTNDVTtBQXNCZDtBQW9CRTtFQUNFLDRCQTNDVTtBQXNCZDtBQXlCRTtFQUNFLDRCQWhEVTtFQWlEVixjQW5ETTtBQTRCVjtBQXlCQTtFQUNFLFVBQUE7QUF2QkY7QUF3QkU7RUFGRjtJQUdBLFVBQUE7RUFyQkU7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhdGhzL2xvZ2luL3JlZ2lzdHJvL3JlZ2lzdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWJ1dHRvbjogI0U3QUI5QTtcclxuJGNvbG9yLWJnOiAjRURFOUQ1O1xyXG4kY29sb3ItMjogI0RGNzg1NztcclxuJGNvbG9yLTM6ICM2MTcxNDM7XHJcbiRmb250LXJvYm90bzogJ3JvYm90bycsIHNlcmlmO1xyXG4kZm9udC1iYWJlOiAnUmFqZGhhbmknLCBzYW5zLXNlcmlmO1xyXG4kZm9udC03MDA6IDcwMDtcclxuJGNvbG9yLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmVjZDIgMCUsICNmY2I2OWYgMTAwJSk7XHJcblxyXG5AbWl4aW4gYm90YW8oKSB7XHJcblxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1idXR0b247XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LTcwMDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG59XHJcblxyXG4ucmVnaXN0cm8tYmcge1xyXG4gIC5oMS1iZyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgLmgxLXJlZ2lzdHJvIHtcclxuICAgICAgY29sb3I6ICRjb2xvci0yO1xyXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBib3Rhb1xyXG4gIH1cclxuXHJcbiAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1ob3ZlcjtcclxuICB9XHJcblxyXG4gIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIH1cclxuXHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgICBjb2xvcjogJGNvbG9yLTI7XHJcbiAgfVxyXG4uZGl2LWlucHV0e1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbndpZHRoOiA1MCU7XHJcbiAgfVxyXG59XHJcblxyXG59XHJcbiJdfQ== */"]
        });
        return RegistroComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistroComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-registro',
            templateUrl: './registro.component.html',
            styleUrls: ['./registro.component.scss']
          }]
        }], function () {
          return [{
            type: _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/models/produto.ts":
    /*!*****************************************!*\
      !*** ./src/app/paths/models/produto.ts ***!
      \*****************************************/

    /*! exports provided: Produto, Ingrediente, Promocao */

    /***/
    function srcAppPathsModelsProdutoTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Produto", function () {
        return Produto;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ingrediente", function () {
        return Ingrediente;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Promocao", function () {
        return Promocao;
      });

      var Produto = /*#__PURE__*/_createClass(function Produto() {
        _classCallCheck(this, Produto);
      });

      var Ingrediente = /*#__PURE__*/_createClass(function Ingrediente() {
        _classCallCheck(this, Ingrediente);
      });

      var Promocao = /*#__PURE__*/_createClass(function Promocao() {
        _classCallCheck(this, Promocao);
      });
      /***/

    },

    /***/
    "./src/app/paths/models/usuario.ts":
    /*!*****************************************!*\
      !*** ./src/app/paths/models/usuario.ts ***!
      \*****************************************/

    /*! exports provided: Usuario */

    /***/
    function srcAppPathsModelsUsuarioTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Usuario", function () {
        return Usuario;
      });

      var Usuario = /*#__PURE__*/_createClass(function Usuario() {
        _classCallCheck(this, Usuario);
      });
      /***/

    },

    /***/
    "./src/app/paths/nao-encontrada/nao-encontrada.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/paths/nao-encontrada/nao-encontrada.component.ts ***!
      \******************************************************************/

    /*! exports provided: NaoEncontradaComponent */

    /***/
    function srcAppPathsNaoEncontradaNaoEncontradaComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NaoEncontradaComponent", function () {
        return NaoEncontradaComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NaoEncontradaComponent =
      /** @class */
      function () {
        var NaoEncontradaComponent = /*#__PURE__*/function () {
          function NaoEncontradaComponent() {
            _classCallCheck(this, NaoEncontradaComponent);
          }

          _createClass(NaoEncontradaComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return NaoEncontradaComponent;
        }();

        NaoEncontradaComponent.ɵfac = function NaoEncontradaComponent_Factory(t) {
          return new (t || NaoEncontradaComponent)();
        };

        NaoEncontradaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: NaoEncontradaComponent,
          selectors: [["app-nao-encontrada"]],
          decls: 4,
          vars: 0,
          consts: [[1, "container"], [1, "fa-solid", "fa-x"]],
          template: function NaoEncontradaComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " p\xE1gina n\xE3o encontrada");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  height: 400px;\n}\n.container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 200px;\n  color: #CD1818;\n  margin-bottom: 60px;\n}\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 44px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvbmFvLWVuY29udHJhZGEvbmFvLWVuY29udHJhZGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUFGO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGNBVE07RUFVTixtQkFBQTtBQUNKO0FBRUU7RUFDRSxlQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wYXRocy9uYW8tZW5jb250cmFkYS9uYW8tZW5jb250cmFkYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci0yOiAjQ0QxODE4O1xyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDIwMHB4O1xyXG4gICAgY29sb3I6ICRjb2xvci0yO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogNDRweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"]
        });
        return NaoEncontradaComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NaoEncontradaComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nao-encontrada',
            templateUrl: './nao-encontrada.component.html',
            styleUrls: ['./nao-encontrada.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/service/service_carrinho/carrinho.service.ts":
    /*!********************************************************************!*\
      !*** ./src/app/paths/service/service_carrinho/carrinho.service.ts ***!
      \********************************************************************/

    /*! exports provided: CarrinhoService */

    /***/
    function srcAppPathsServiceService_carrinhoCarrinhoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarrinhoService", function () {
        return CarrinhoService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CarrinhoService =
      /** @class */
      function () {
        var CarrinhoService = /*#__PURE__*/function () {
          function CarrinhoService() {
            _classCallCheck(this, CarrinhoService);

            this.carrinho = [];
          }

          _createClass(CarrinhoService, [{
            key: "obtemCarrinho",
            value: function obtemCarrinho() {
              this.carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
              return this.carrinho;
            }
          }, {
            key: "adicionarAoCarrinho",
            value: function adicionarAoCarrinho(carrinho) {
              this.carrinho.push(carrinho);
              localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
            }
          }, {
            key: "removerCarrinho",
            value: function removerCarrinho(id) {
              this.carrinho = this.carrinho.filter(function (item) {
                return item.id !== id;
              });
            }
          }, {
            key: "limparCarrinho",
            value: function limparCarrinho() {
              this.carrinho = [];
              localStorage.clear();
            }
          }]);

          return CarrinhoService;
        }();

        CarrinhoService.ɵfac = function CarrinhoService_Factory(t) {
          return new (t || CarrinhoService)();
        };

        CarrinhoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: CarrinhoService,
          factory: CarrinhoService.ɵfac,
          providedIn: 'root'
        });
        return CarrinhoService;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarrinhoService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/service/service_login/auth.service.ts":
    /*!*************************************************************!*\
      !*** ./src/app/paths/service/service_login/auth.service.ts ***!
      \*************************************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppPathsServiceService_loginAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var AuthService =
      /** @class */
      function () {
        var AuthService = /*#__PURE__*/function () {
          function AuthService(router, http) {
            _classCallCheck(this, AuthService);

            this.router = router;
            this.http = http;
            this.accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
            this.accessTokenAdm = 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.bQTnz6AuMJvmXXQsVPrxeQNvzDkimo7VNXxHeSBfClLufmCVZRUuyTwJF311JHuh';
            this.mostrarMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
          }

          _createClass(AuthService, [{
            key: "estaAutenticado",
            value: function estaAutenticado() {
              return !!sessionStorage.getItem('access-token');
            }
          }, {
            key: "estaAutenticadoAdm",
            value: function estaAutenticadoAdm() {
              return !!sessionStorage.getItem('access-tokenAdm');
            }
          }, {
            key: "login",
            value: function login(usuario) {
              if (usuario.login === 'admin' && usuario.password === '123') {
                sessionStorage.setItem('access-tokenAdm', this.accessTokenAdm);
                sessionStorage.setItem('access-token', this.accessToken);
                this.mostrarMenu.emit(this.estaAutenticadoAdm());
                return true;
              } else if (usuario.login === 'weu' && usuario.password === '123') {
                sessionStorage.setItem('access-token', this.accessToken);
                this.mostrarMenu.emit(this.estaAutenticado());
                return true;
              }
            }
          }, {
            key: "logar",
            value: function logar(usuario) {
              var url = "".concat(this.baseUrl, "/login");
              return this.http.post(url, usuario);
            }
          }, {
            key: "logout",
            value: function logout() {
              sessionStorage.clear();
              this.mostrarMenu.emit(false);
            }
          }]);

          return AuthService;
        }();

        AuthService.ɵfac = function AuthService_Factory(t) {
          return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
        };

        AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: AuthService,
          factory: AuthService.ɵfac,
          providedIn: 'root'
        });
        return AuthService;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/service/service_produto/produto.service.ts":
    /*!******************************************************************!*\
      !*** ./src/app/paths/service/service_produto/produto.service.ts ***!
      \******************************************************************/

    /*! exports provided: ProdutoService */

    /***/
    function srcAppPathsServiceService_produtoProdutoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProdutoService", function () {
        return ProdutoService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var ProdutoService =
      /** @class */
      function () {
        var ProdutoService = /*#__PURE__*/function () {
          function ProdutoService(http) {
            _classCallCheck(this, ProdutoService);

            this.http = http;
            this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
            this.produtos = [];
            this.ingredientes = [];
            this.promocoes = [];
          }

          _createClass(ProdutoService, [{
            key: "postProduto",
            value: function postProduto(produtos) {
              var url = "".concat(this.baseUrl, "/ingredients");
              return this.http.post(url, produtos);
            }
          }, {
            key: "postProdutoLista",
            value: function postProdutoLista(produtos) {
              var url = "".concat(this.baseUrl, "/categories");
              return this.http.post(url, produtos);
            }
          }, {
            key: "postPromocoes",
            value: function postPromocoes(produtos) {
              var url = "".concat(this.baseUrl, "/offers");
              return this.http.post(url, produtos);
            }
          }, {
            key: "getProdutoById",
            value: function getProdutoById(id) {
              var url = "".concat(this.baseUrl, "/categories").concat(id);
              return this.http.get(url);
            }
          }, {
            key: "getIngredienteById",
            value: function getIngredienteById(id) {
              var url = "".concat(this.baseUrl, "/ingredients").concat(id);
              return this.http.get(url);
            }
          }, {
            key: "getPromocaoById",
            value: function getPromocaoById(id) {
              var url = "".concat(this.baseUrl, "/offers").concat(id);
              return this.http.get(url);
            }
          }, {
            key: "getProdutosLista",
            value: function getProdutosLista() {
              var url = "".concat(this.baseUrl, "/categories");
              return this.http.get(url);
            }
          }, {
            key: "getPromocoes",
            value: function getPromocoes() {
              var url = "".concat(this.baseUrl, "/offers");
              return this.http.get(url);
            }
          }, {
            key: "getIngrediente",
            value: function getIngrediente(id) {
              var url = "".concat(this.baseUrl, "/ingredients/").concat(id);
              return this.http.get(url);
            }
          }, {
            key: "deleteProdutoLista",
            value: function deleteProdutoLista(id) {
              var url = "".concat(this.baseUrl, "/categories/").concat(id);
              return this.http["delete"](url);
            }
          }, {
            key: "deleteIngredientes",
            value: function deleteIngredientes(id) {
              return this.ingredientes.filter(function (produto) {
                return produto.id !== id;
              });
            }
          }, {
            key: "deletePromocoes",
            value: function deletePromocoes(id) {
              return this.promocoes.filter(function (produto) {
                return produto.id !== id;
              });
            }
          }]);

          return ProdutoService;
        }();

        ProdutoService.ɵfac = function ProdutoService_Factory(t) {
          return new (t || ProdutoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
        };

        ProdutoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: ProdutoService,
          factory: ProdutoService.ɵfac,
          providedIn: 'root'
        });
        return ProdutoService;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutoService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/template/footer/footer.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/paths/template/footer/footer.component.ts ***!
      \***********************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function srcAppPathsTemplateFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FooterComponent =
      /** @class */
      function () {
        var FooterComponent = /*#__PURE__*/function () {
          function FooterComponent() {
            _classCallCheck(this, FooterComponent);
          }

          _createClass(FooterComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return FooterComponent;
        }();

        FooterComponent.ɵfac = function FooterComponent_Factory(t) {
          return new (t || FooterComponent)();
        };

        FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: FooterComponent,
          selectors: [["app-footer"]],
          decls: 20,
          vars: 0,
          consts: [[1, "footer__container"], [1, "footer__title"], [1, "footer__about-text"], [1, "footer__title", "ms-4"], [1, "fa-sharp", "fa-solid", "fa-envelope"], [1, "fa-solid", "fa-phone"], [1, "fa-brands", "fa-whatsapp"]],
          template: function FooterComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "sobre");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non libero viverra, gravida lorem ut, hendrerit augue. Vivamus laoreet leo non aliquam gravida. Donec facilisis libero ex, quis tristique elit eleifend et. Quisque ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "address");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "contato");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " email@email.com");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " (00) 000-000");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " (00) 000-000");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: ["footer[_ngcontent-%COMP%] {\n  background: #EDE9D5;\n  font-family: \"roboto\", serif;\n}\nfooter[_ngcontent-%COMP%]   .footer__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  flex-flow: row wrap;\n  padding: 20px;\n}\nfooter[_ngcontent-%COMP%]   .footer__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  color: #DF7857;\n  margin-bottom: 5px;\n}\nfooter[_ngcontent-%COMP%]   .footer__about-text[_ngcontent-%COMP%] {\n  width: 400px;\n  text-align: justify;\n}\nfooter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #DF7857;\n}\nfooter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n@media (max-width: 800px) {\n  footer[_ngcontent-%COMP%]   .footer__about-text[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvdGVtcGxhdGUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNFLG1CQVRTO0VBVVQsNEJBTFk7QUFGZDtBQVNFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBUEo7QUFVRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBcEJNO0VBcUJOLGtCQUFBO0FBUko7QUFZRTtFQUNFLFlBQUE7RUFFQSxtQkFBQTtBQVhKO0FBZUU7RUFDRSxjQWpDTTtBQW9CVjtBQWdCRTtFQUNFLGNBQUE7QUFkSjtBQW1CQTtFQUVJO0lBQ0UsWUFBQTtFQWpCSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGF0aHMvdGVtcGxhdGUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci1iZzogI0VERTlENTtcclxuJGNvbG9yLWJ1dHRvbjogI0U3QUI5QTtcclxuJGNvbG9yLTI6ICNERjc4NTc7XHJcbiRjb2xvci0zOiAjNjE3MTQzO1xyXG4kY29sb3ItaG92ZXI6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZWNkMiAwJSwgI2ZjYjY5ZiAxMDAlKTtcclxuJGZvbnQtcm9ib3RvOiAncm9ib3RvJywgc2VyaWY7XHJcbiRmb250LWJhYmU6ICdSYWpkaGFuaScsIHNhbnMtc2VyaWY7XHJcbiRtYXgtd2lkaXRoOiA2MDBweDtcclxuZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItYmc7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuXHJcbiAgLmZvb3Rlcl9fY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9fdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogJGNvbG9yLTI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAkZm9udC1mYW1pbHk6ICRmb250LWJhYmU7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyX19hYm91dC10ZXh0IHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuXHJcbiAgICB0ZXh0LWFsaWduOmp1c3RpZnk7XHJcbiAgfVxyXG5cclxuXHJcbiAgaSB7XHJcbiAgICBjb2xvcjogJGNvbG9yLTI7XHJcbiAgfVxyXG5cclxuICBsaSB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIGZvb3RlciB7XHJcbiAgICAuZm9vdGVyX19hYm91dC10ZXh0IHtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"]
        });
        return FooterComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/template/header/header.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/paths/template/header/header.component.ts ***!
      \***********************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function srcAppPathsTemplateHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/service_login/auth.service */
      "./src/app/paths/service/service_login/auth.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function HeaderComponent_a_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Adicionar produto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_a_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Adicionar ingrediente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_a_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Historico de vendas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_a_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_div_30_a_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Adicionar produto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_div_30_a_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Adicionar ingrediente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_div_30_a_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Historico de vendas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_div_30_a_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_30_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.sumirMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Produtos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Promo\xE7\xF5es");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Carrinho");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_div_30_a_12_Template, 2, 0, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_div_30_a_14_Template, 2, 0, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_div_30_a_16_Template, 2, 0, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HeaderComponent_div_30_a_18_Template, 2, 0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.eAdm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.eAdm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.eAdm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.eAdm);
        }
      }

      var HeaderComponent =
      /** @class */
      function () {
        var HeaderComponent = /*#__PURE__*/function () {
          function HeaderComponent(route, authService, fb) {
            _classCallCheck(this, HeaderComponent);

            this.route = route;
            this.authService = authService;
            this.fb = fb;
            this.mudar = false;
            this.eAdm = this.authService.estaAutenticadoAdm();
          }

          _createClass(HeaderComponent, [{
            key: "aparecerMenu",
            value: function aparecerMenu() {
              var btn = document.getElementById('btn-mobile');

              if (!this.mudar) {
                btn.innerHTML = '<i class="fa-solid fa-xmark p-1" ></i>';
                this.mudar = true;
              } else {
                btn.innerHTML = '<i class="fa-solid fa-bars p-1"></i>';
                this.mudar = false;
              }
            } // mudar apos o http

          }, {
            key: "nome",
            value: function nome() {
              if (this.eAdm) {
                return 'Adm';
              }

              return 'weu';
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this8 = this;

              this.authService.mostrarMenu.subscribe(function (mostrar) {
                return _this8.eAdm = mostrar;
              });
              this.createForm();
            }
          }, {
            key: "createForm",
            value: function createForm() {
              this.formBuscarProduto = this.fb.group({
                nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              });
            }
          }, {
            key: "sair",
            value: function sair() {
              alert('saindo...');
              this.authService.logout();
              this.route.navigate(['login']);
            }
          }, {
            key: "sumirMenu",
            value: function sumirMenu() {
              var btn = document.getElementById('btn-mobile');

              if (this.mudar) {
                btn.innerHTML = '<i class="fa-solid fa-bars p-1"></i>';
                this.mudar = false;
              }
            }
          }]);

          return HeaderComponent;
        }();

        HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
          return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
        };

        HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: HeaderComponent,
          selectors: [["app-header"]],
          decls: 31,
          vars: 6,
          consts: [[1, "navbar", "navbar-expand-lg", "nav-bg"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", "id", "btn-mobile", 1, "navbar-toggler", "botao", 3, "click"], [1, "fa-solid", "fa-bars", "p-1"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "nav_menu-principal", 3, "click"], ["src", "/assets/img/logo.png", "alt", "foto de hamburgue gostoso", "width", "100", "height", "100"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["routerLink", "produtos-categorias", 1, "nav-link"], ["routerLink", "promocoes", 1, "nav-link"], ["routerLink", "comprar", 1, "nav-link"], ["class", "nav-link", "routerLink", "adicionar-produto", 4, "ngIf"], ["class", "nav-link", "routerLink", "adicionar-ingredientes", 4, "ngIf"], ["class", "nav-link", "routerLink", "historico-vendas", 4, "ngIf"], ["class", "nav-link", "routerLink", "registrar", 4, "ngIf"], [1, "align-content-between", "d-flex"], [1, "mx-4", "my-auto"], [1, "btn", "botao", 3, "click"], [1, "fa-solid", "fa-arrow-right-from-bracket", "ms-2"], ["class", "d-flex flex-column nav-bg nav-mobile", 3, "click", 4, "ngIf"], ["routerLink", "adicionar-produto", 1, "nav-link"], ["routerLink", "adicionar-ingredientes", 1, "nav-link"], ["routerLink", "historico-vendas", 1, "nav-link"], ["routerLink", "registrar", 1, "nav-link"], [1, "d-flex", "flex-column", "nav-bg", "nav-mobile", 3, "click"], ["routerLink", "produtos-categorias", 1, "nav-link", "mx-2", "nav-first"], ["routerLink", "promocoes", 1, "nav-link", "mx-2"], ["class", "nav-link mx-2", "routerLink", "adicionar-produto", 4, "ngIf"], ["class", "nav-link mx-2", "routerLink", "adicionar-ingredientes", 4, "ngIf"], ["class", "nav-link mx-2", "routerLink", "historico-vendas", 4, "ngIf"], ["routerLink", "adicionar-produto", 1, "nav-link", "mx-2"], ["routerLink", "adicionar-ingredientes", 1, "nav-link", "mx-2"], ["routerLink", "historico-vendas", 1, "nav-link", "mx-2"]],
          template: function HeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() {
                return ctx.aparecerMenu();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_4_listener() {
                return ctx.sumirMenu();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Produtos");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Promo\xE7\xF5es");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Carrinho");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderComponent_a_17_Template, 2, 0, "a", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HeaderComponent_a_19_Template, 2, 0, "a", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HeaderComponent_a_21_Template, 2, 0, "a", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HeaderComponent_a_23_Template, 2, 0, "a", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_27_listener() {
                return ctx.sair();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sair");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HeaderComponent_div_30_Template, 19, 4, "div", 19);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eAdm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eAdm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eAdm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eAdm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bem vindo ", ctx.nome(), "");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mudar);
            }
          },
          directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
          styles: [".nav-bg[_ngcontent-%COMP%] {\n  background: #EDE9D5;\n}\n.nav-bg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Rajdhani\", sans-serif;\n  font-size: 1.25rem;\n  font-weight: bold;\n  color: #000;\n}\n.nav-bg[_ngcontent-%COMP%]   .botao[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n}\n.nav-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .nav-bg[_ngcontent-%COMP%]   .botao[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.nav-bg[_ngcontent-%COMP%]   .botao[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.nav-bg[_ngcontent-%COMP%]   .nav_menu-principal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #617143;\n  font-family: \"Rajdhani\", sans-serif;\n  font-size: 1.25rem;\n  position: relative;\n}\n.nav-bg[_ngcontent-%COMP%]   .nav_menu-principal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  height: 2px;\n  width: 0;\n  background: #DF7857;\n  margin-top: 4px;\n  transition: 0.3s;\n  position: absolute;\n}\n.nav-bg[_ngcontent-%COMP%]   .nav_menu-principal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after, .nav-bg[_ngcontent-%COMP%]   .nav_menu-principal[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   a.ativo[_ngcontent-%COMP%]::after {\n  width: 100%;\n}\n.nav-mobile[_ngcontent-%COMP%] {\n  width: 140px;\n}\n.nav-mobile[_ngcontent-%COMP%]   .nav-first[_ngcontent-%COMP%] {\n  border-top: 1px solid #DF7857;\n}\n.nav-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #617143;\n  font-family: \"Rajdhani\", sans-serif;\n  border-bottom: 1px solid #DF7857;\n  padding: 10px;\n}\n.nav-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.nav-mobile[_ngcontent-%COMP%]   .sair-mobile[_ngcontent-%COMP%] {\n  color: #617143;\n  font-family: \"Rajdhani\", sans-serif;\n  border-bottom: 1px solid #DF7857;\n  padding: 10px;\n}\n.nav-mobile[_ngcontent-%COMP%]   .sair-mobile[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvdGVtcGxhdGUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQkE7RUFDRSxtQkFsQlM7QUFFWDtBQWlCQTtFQUNDLG1DQWRXO0VBZVYsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFmRjtBQWlCRTtFQWZBLFdBQUE7RUFDQSxtQkFWYTtFQVdiLGdCQUxTO0FBTVg7QUFpQkU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFmSjtBQWtCRTtFQUVFLCtEQWpDVTtBQWdCZDtBQXFCSTtFQUNFLGNBdkNJO0VBd0NKLG1DQXJDTTtFQXNDTixrQkFBQTtFQUNBLGtCQUFBO0FBbkJOO0FBc0JJO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQW5ESTtFQW9ESixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXBCTjtBQXVCSTtFQUNFLFdBQUE7QUFyQk47QUE0QkE7RUFDRSxZQUFBO0FBekJGO0FBMkJFO0VBQ0UsNkJBQUE7QUF6Qko7QUE0QkU7RUFDRSxjQXhFTTtFQXlFTixtQ0F0RVE7RUF1RVIsZ0NBQUE7RUFFQSxhQUFBO0FBM0JKO0FBOEJFO0VBQ0UsK0RBL0VVO0FBbURkO0FBK0JFO0VBQ0UsY0FwRk07RUFxRk4sbUNBbEZRO0VBbUZSLGdDQUFBO0VBRUEsYUFBQTtBQTlCSjtBQWlDRTtFQUNFLCtEQTNGVTtBQTREZCIsImZpbGUiOiJzcmMvYXBwL3BhdGhzL3RlbXBsYXRlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYmc6ICNFREU5RDU7XHJcbiRjb2xvci1idXR0b246ICNFN0FCOUE7XHJcbiRjb2xvci0yOiAjREY3ODU3O1xyXG4kY29sb3ItMzogIzYxNzE0MztcclxuJGNvbG9yLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmVjZDIgMCUsICNmY2I2OWYgMTAwJSk7XHJcbiRmb250LXJvYm90bzogJ3JvYm90bycsIHNlcmlmO1xyXG4kZm9udC1iYWJlOiAnUmFqZGhhbmknLCBzYW5zLXNlcmlmO1xyXG4kZm9udC03MDA6IDcwMDtcclxuQG1peGluIGJvdGFvKCkge1xyXG5cclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItYnV0dG9uO1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC03MDA7XHJcblxyXG59XHJcblxyXG5cclxuLm5hdi1iZyB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWJnO1xyXG5we1xyXG4gZm9udC1mYW1pbHk6ICRmb250LWJhYmU7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbiAgLmJvdGFvIHtcclxuICAgIEBpbmNsdWRlIGJvdGFvO1xyXG5cclxuICB9XHJcblxyXG4gIGlucHV0OmZvY3VzLCAuYm90YW86Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuYm90YW86aG92ZXIge1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1ob3ZlcjtcclxuICB9XHJcblxyXG4gIC5uYXZfbWVudS1wcmluY2lwYWwge1xyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItMztcclxuICAgICAgZm9udC1mYW1pbHk6ICRmb250LWJhYmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIGE6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItMjtcclxuICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcblxyXG4gICAgYTpob3ZlcjphZnRlciwgLmhlYWRlci1tZW51IGEuYXRpdm86OmFmdGVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5uYXYtbW9iaWxlIHtcclxuICB3aWR0aDogMTQwcHg7XHJcblxyXG4gIC5uYXYtZmlyc3Qge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRjb2xvci0yO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogJGNvbG9yLTM7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtYmFiZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItMjtcclxuXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItaG92ZXI7XHJcbiAgfVxyXG5cclxuICAuc2Fpci1tb2JpbGUge1xyXG4gICAgY29sb3I6ICRjb2xvci0zO1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LWJhYmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLTI7XHJcblxyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gIC5zYWlyLW1vYmlsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItaG92ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"]
        });
        return HeaderComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        // baseUrl: 'https://pweb-production.up.railway.app'
        baseUrl: 'http://localhost:8080'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Workspace\ifg\java, spring, quarkus\ProjetoFinalPrWeb\lanchonete\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map