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


      var _paths_adicionar_adicionar_produto_adicionar_produto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./paths/adicionar/adicionar-produto/adicionar-produto.component */
      "./src/app/paths/adicionar/adicionar-produto/adicionar-produto.component.ts");
      /* harmony import */


      var _paths_adicionar_adicionar_ingrediente_adicionar_ingrediente_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./paths/adicionar/adicionar-ingrediente/adicionar-ingrediente.component */
      "./src/app/paths/adicionar/adicionar-ingrediente/adicionar-ingrediente.component.ts");
      /* harmony import */


      var _paths_shared_nao_encontrada_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./paths/shared/nao-encontrada/nao-encontrada.component */
      "./src/app/paths/shared/nao-encontrada/nao-encontrada.component.ts");
      /* harmony import */


      var _paths_Main_carrinho_comprar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./paths/Main/carrinho/comprar.component */
      "./src/app/paths/Main/carrinho/comprar.component.ts");
      /* harmony import */


      var _paths_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./paths/login/login.component */
      "./src/app/paths/login/login.component.ts");
      /* harmony import */


      var _paths_login_registro_registro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./paths/login/registro/registro.component */
      "./src/app/paths/login/registro/registro.component.ts");
      /* harmony import */


      var _paths_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./paths/shared/guard/auth.guard */
      "./src/app/paths/shared/guard/auth.guard.ts");
      /* harmony import */


      var _paths_Main_produtos_produtoss_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./paths/Main/produtos/produtoss.component */
      "./src/app/paths/Main/produtos/produtoss.component.ts");
      /* harmony import */


      var _paths_alterar_alterar_produto_alterar_produto_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./paths/alterar/alterar-produto/alterar-produto.component */
      "./src/app/paths/alterar/alterar-produto/alterar-produto.component.ts");
      /* harmony import */


      var _paths_alterar_alterar_ingrediente_alterar_ingrediente_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./paths/alterar/alterar-ingrediente/alterar-ingrediente.component */
      "./src/app/paths/alterar/alterar-ingrediente/alterar-ingrediente.component.ts");
      /* harmony import */


      var _paths_adicionar_adicionar_promocao_adicionar_promocao_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./paths/adicionar/adicionar-promocao/adicionar-promocao.component */
      "./src/app/paths/adicionar/adicionar-promocao/adicionar-promocao.component.ts");
      /* harmony import */


      var _paths_deletar_delete_produto_delete_produto_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./paths/deletar/delete-produto/delete-produto.component */
      "./src/app/paths/deletar/delete-produto/delete-produto.component.ts");
      /* harmony import */


      var _paths_deletar_delete_ingrediente_delete_ingrediente_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./paths/deletar/delete-ingrediente/delete-ingrediente.component */
      "./src/app/paths/deletar/delete-ingrediente/delete-ingrediente.component.ts");
      /* harmony import */


      var _paths_deletar_delete_promocao_delete_promocao_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./paths/deletar/delete-promocao/delete-promocao.component */
      "./src/app/paths/deletar/delete-promocao/delete-promocao.component.ts");
      /* harmony import */


      var _paths_alterar_alterar_promocao_alterar_promocao_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./paths/alterar/alterar-promocao/alterar-promocao.component */
      "./src/app/paths/alterar/alterar-promocao/alterar-promocao.component.ts");
      /* harmony import */


      var _paths_adicionar_adicionar_carrinh_produto_adicionar_carrinh_produto_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./paths/adicionar/adicionar-carrinh-produto/adicionar-carrinh-produto.component */
      "./src/app/paths/adicionar/adicionar-carrinh-produto/adicionar-carrinh-produto.component.ts");
      /* harmony import */


      var _paths_adicionar_adicionar_carrinh_prmocao_adicionar_carrinh_prmocao_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./paths/adicionar/adicionar-carrinh-prmocao/adicionar-carrinh-prmocao.component */
      "./src/app/paths/adicionar/adicionar-carrinh-prmocao/adicionar-carrinh-prmocao.component.ts");
      /* harmony import */


      var _paths_shared_unauthorized_page_unauthorized_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./paths/shared/unauthorized-page/unauthorized-page.component */
      "./src/app/paths/shared/unauthorized-page/unauthorized-page.component.ts");

      var routes = [{
        path: 'produtos-categorias/:name/produtos',
        component: _paths_Main_produtos_produtoss_component__WEBPACK_IMPORTED_MODULE_10__["ProdutossComponent"],
        canActivate: [_paths_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        data: {
          role: ['admin', 'user']
        }
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
        canActivate: [_paths_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        data: {
          role: ['admin', 'user']
        }
      }, {
        path: '',
        redirectTo: 'produtos-categorias',
        pathMatch: 'full'
      }, {
        path: 'promocoes',
        component: _paths_Main_promocoes_promocoes_component__WEBPACK_IMPORTED_MODULE_2__["PromocoesComponent"],
        canActivate: [_paths_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        data: {
          role: ['admin', 'user']
        }
      }, {
        path: 'adicionar-produto',
        component: _paths_adicionar_adicionar_produto_adicionar_produto_component__WEBPACK_IMPORTED_MODULE_3__["AdicionarProdutoComponent"],
        canActivate: [_paths_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        data: {
          role: ['admin']
        }
      }, {
        path: 'adicionar-promocao',
        component: _paths_adicionar_adicionar_promocao_adicionar_promocao_component__WEBPACK_IMPORTED_MODULE_13__["AdicionarPromocaoComponent"],
        canActivate: [_paths_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        data: {
          role: ['admin']
        }
      }, {
        path: 'adicionar-carrinho-produto/:id',
        component: _paths_adicionar_adicionar_carrinh_produto_adicionar_carrinh_produto_component__WEBPACK_IMPORTED_MODULE_18__["AdicionarCarrinhProdutoComponent"],
        canActivate: [_paths_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        data: {
          role: ['admin', 'user']
        }
      }, {
        path: 'adicionar-carrinho-promocao/:id',
        component: _paths_adicionar_adicionar_carrinh_prmocao_adicionar_carrinh_prmocao_component__WEBPACK_IMPORTED_MODULE_19__["AdicionarCarrinhPrmocaoComponent"],
        canActivate: [_paths_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        data: {
          role: ['admin', 'user']
        }
      }, {
        path: 'adicionar-ingredientes/:name',
        component: _paths_adicionar_adicionar_ingrediente_adicionar_ingrediente_component__WEBPACK_IMPORTED_MODULE_4__["AdicionarIngredienteComponent"],
        canActivate: [_paths_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        data: {
          role: ['admin']
        }
      }, {
        path: 'delete-produto/:id',
        component: _paths_deletar_delete_produto_delete_produto_component__WEBPACK_IMPORTED_MODULE_14__["DeleteProdutoComponent"],
        canActivate: [_paths_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        data: {
          role: ['admin']
        }
      }, {
        path: 'delete-ingrediente/:id',
        component: _paths_deletar_delete_ingrediente_delete_ingrediente_component__WEBPACK_IMPORTED_MODULE_15__["DeleteIngredienteComponent"],
        canActivate: [_paths_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        data: {
          role: ['admin']
        }
      }, {
        path: 'delete-promocao/:id',
        component: _paths_deletar_delete_promocao_delete_promocao_component__WEBPACK_IMPORTED_MODULE_16__["DeletePromocaoComponent"],
        canActivate: [_paths_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        data: {
          role: ['admin']
        }
      }, {
        path: 'comprar',
        component: _paths_Main_carrinho_comprar_component__WEBPACK_IMPORTED_MODULE_6__["ComprarComponent"],
        canActivate: [_paths_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        data: {
          role: ['admin', 'user']
        }
      }, {
        path: 'login',
        component: _paths_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
      }, {
        path: 'registrar',
        component: _paths_login_registro_registro_component__WEBPACK_IMPORTED_MODULE_8__["RegistroComponent"]
      }, {
        path: 'alterar',
        children: [{
          path: 'produto/:id',
          component: _paths_alterar_alterar_produto_alterar_produto_component__WEBPACK_IMPORTED_MODULE_11__["AlterarProdutoComponent"],
          canActivate: [_paths_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
          data: {
            role: ['admin']
          }
        }, {
          path: 'ingrediente/:id',
          component: _paths_alterar_alterar_ingrediente_alterar_ingrediente_component__WEBPACK_IMPORTED_MODULE_12__["AlterarIngredienteComponent"],
          canActivate: [_paths_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
          data: {
            role: ['admin']
          }
        }, {
          path: 'promocao/:id',
          component: _paths_alterar_alterar_promocao_alterar_promocao_component__WEBPACK_IMPORTED_MODULE_17__["AlterarPromocaoComponent"],
          canActivate: [_paths_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
          data: {
            role: ['admin']
          }
        }]
      }, {
        path: 'unauthorized',
        component: _paths_shared_unauthorized_page_unauthorized_page_component__WEBPACK_IMPORTED_MODULE_20__["UnauthorizedPageComponent"]
      }, {
        path: '**',
        component: _paths_shared_nao_encontrada_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_5__["NaoEncontradaComponent"]
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


      var _paths_nao_logado_nao_logado_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./paths/nao-logado/nao-logado.component */
      "./src/app/paths/nao-logado/nao-logado.component.ts");
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
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _paths_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _paths_nao_logado_nao_logado_component__WEBPACK_IMPORTED_MODULE_5__["NaoLogadoComponent"], _paths_template_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]],
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


      var _paths_adicionar_adicionar_produto_adicionar_produto_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./paths/adicionar/adicionar-produto/adicionar-produto.component */
      "./src/app/paths/adicionar/adicionar-produto/adicionar-produto.component.ts");
      /* harmony import */


      var _paths_adicionar_adicionar_ingrediente_adicionar_ingrediente_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./paths/adicionar/adicionar-ingrediente/adicionar-ingrediente.component */
      "./src/app/paths/adicionar/adicionar-ingrediente/adicionar-ingrediente.component.ts");
      /* harmony import */


      var _paths_shared_nao_encontrada_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./paths/shared/nao-encontrada/nao-encontrada.component */
      "./src/app/paths/shared/nao-encontrada/nao-encontrada.component.ts");
      /* harmony import */


      var _paths_Main_carrinho_comprar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./paths/Main/carrinho/comprar.component */
      "./src/app/paths/Main/carrinho/comprar.component.ts");
      /* harmony import */


      var _paths_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./paths/service/service_login/auth.service */
      "./src/app/paths/service/service_login/auth.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _paths_nao_logado_nao_logado_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./paths/nao-logado/nao-logado.component */
      "./src/app/paths/nao-logado/nao-logado.component.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _paths_Main_produtos_produtoss_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./paths/Main/produtos/produtoss.component */
      "./src/app/paths/Main/produtos/produtoss.component.ts");
      /* harmony import */


      var _paths_alterar_alterar_produto_alterar_produto_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./paths/alterar/alterar-produto/alterar-produto.component */
      "./src/app/paths/alterar/alterar-produto/alterar-produto.component.ts");
      /* harmony import */


      var _paths_alterar_alterar_ingrediente_alterar_ingrediente_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./paths/alterar/alterar-ingrediente/alterar-ingrediente.component */
      "./src/app/paths/alterar/alterar-ingrediente/alterar-ingrediente.component.ts");
      /* harmony import */


      var _paths_login_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./paths/login/interceptors/token.interceptor */
      "./src/app/paths/login/interceptors/token.interceptor.ts");
      /* harmony import */


      var _paths_adicionar_adicionar_promocao_adicionar_promocao_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./paths/adicionar/adicionar-promocao/adicionar-promocao.component */
      "./src/app/paths/adicionar/adicionar-promocao/adicionar-promocao.component.ts");
      /* harmony import */


      var _paths_deletar_delete_produto_delete_produto_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./paths/deletar/delete-produto/delete-produto.component */
      "./src/app/paths/deletar/delete-produto/delete-produto.component.ts");
      /* harmony import */


      var _paths_alterar_alterar_promocao_alterar_promocao_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./paths/alterar/alterar-promocao/alterar-promocao.component */
      "./src/app/paths/alterar/alterar-promocao/alterar-promocao.component.ts");
      /* harmony import */


      var _paths_deletar_delete_ingrediente_delete_ingrediente_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./paths/deletar/delete-ingrediente/delete-ingrediente.component */
      "./src/app/paths/deletar/delete-ingrediente/delete-ingrediente.component.ts");
      /* harmony import */


      var _paths_deletar_delete_promocao_delete_promocao_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./paths/deletar/delete-promocao/delete-promocao.component */
      "./src/app/paths/deletar/delete-promocao/delete-promocao.component.ts");
      /* harmony import */


      var _paths_adicionar_adicionar_carrinh_produto_adicionar_carrinh_produto_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./paths/adicionar/adicionar-carrinh-produto/adicionar-carrinh-produto.component */
      "./src/app/paths/adicionar/adicionar-carrinh-produto/adicionar-carrinh-produto.component.ts");
      /* harmony import */


      var _paths_adicionar_adicionar_carrinh_prmocao_adicionar_carrinh_prmocao_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./paths/adicionar/adicionar-carrinh-prmocao/adicionar-carrinh-prmocao.component */
      "./src/app/paths/adicionar/adicionar-carrinh-prmocao/adicionar-carrinh-prmocao.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "./node_modules/@angular/common/locales/pt.js");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_29__);
      /* harmony import */


      var _paths_shared_unauthorized_page_unauthorized_page_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./paths/shared/unauthorized-page/unauthorized-page.component */
      "./src/app/paths/shared/unauthorized-page/unauthorized-page.component.ts");
      /* harmony import */


      var _paths_shared_carrinho_vazio_carrinho_vazio_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./paths/shared/carrinho-vazio/carrinho-vazio.component */
      "./src/app/paths/shared/carrinho-vazio/carrinho-vazio.component.ts");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_28__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_29___default.a);

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
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"],
            useClass: _paths_login_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_20__["TokenInterceptor"],
            multi: true
          }, _paths_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["CurrencyPipe"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
            useValue: 'pt-BR'
          }, {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_CURRENCY_CODE"],
            useValue: 'BRL'
          }],
          imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]]]
        });
        return AppModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _paths_template_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _paths_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _paths_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _paths_login_registro_registro_component__WEBPACK_IMPORTED_MODULE_7__["RegistroComponent"], _paths_Main_promocoes_promocoes_component__WEBPACK_IMPORTED_MODULE_8__["PromocoesComponent"], _paths_adicionar_adicionar_produto_adicionar_produto_component__WEBPACK_IMPORTED_MODULE_9__["AdicionarProdutoComponent"], _paths_adicionar_adicionar_ingrediente_adicionar_ingrediente_component__WEBPACK_IMPORTED_MODULE_10__["AdicionarIngredienteComponent"], _paths_shared_nao_encontrada_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_11__["NaoEncontradaComponent"], _paths_Main_carrinho_comprar_component__WEBPACK_IMPORTED_MODULE_12__["ComprarComponent"], _paths_nao_logado_nao_logado_component__WEBPACK_IMPORTED_MODULE_15__["NaoLogadoComponent"], _paths_Main_produtos_produtoss_component__WEBPACK_IMPORTED_MODULE_17__["ProdutossComponent"], _paths_alterar_alterar_produto_alterar_produto_component__WEBPACK_IMPORTED_MODULE_18__["AlterarProdutoComponent"], _paths_alterar_alterar_ingrediente_alterar_ingrediente_component__WEBPACK_IMPORTED_MODULE_19__["AlterarIngredienteComponent"], _paths_adicionar_adicionar_promocao_adicionar_promocao_component__WEBPACK_IMPORTED_MODULE_21__["AdicionarPromocaoComponent"], _paths_deletar_delete_produto_delete_produto_component__WEBPACK_IMPORTED_MODULE_22__["DeleteProdutoComponent"], _paths_alterar_alterar_promocao_alterar_promocao_component__WEBPACK_IMPORTED_MODULE_23__["AlterarPromocaoComponent"], _paths_deletar_delete_ingrediente_delete_ingrediente_component__WEBPACK_IMPORTED_MODULE_24__["DeleteIngredienteComponent"], _paths_deletar_delete_promocao_delete_promocao_component__WEBPACK_IMPORTED_MODULE_25__["DeletePromocaoComponent"], _paths_adicionar_adicionar_carrinh_produto_adicionar_carrinh_produto_component__WEBPACK_IMPORTED_MODULE_26__["AdicionarCarrinhProdutoComponent"], _paths_adicionar_adicionar_carrinh_prmocao_adicionar_carrinh_prmocao_component__WEBPACK_IMPORTED_MODULE_27__["AdicionarCarrinhPrmocaoComponent"], _paths_shared_unauthorized_page_unauthorized_page_component__WEBPACK_IMPORTED_MODULE_30__["UnauthorizedPageComponent"], _paths_shared_carrinho_vazio_carrinho_vazio_component__WEBPACK_IMPORTED_MODULE_31__["CarrinhoVazioComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _paths_template_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _paths_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _paths_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _paths_login_registro_registro_component__WEBPACK_IMPORTED_MODULE_7__["RegistroComponent"], _paths_Main_promocoes_promocoes_component__WEBPACK_IMPORTED_MODULE_8__["PromocoesComponent"], _paths_adicionar_adicionar_produto_adicionar_produto_component__WEBPACK_IMPORTED_MODULE_9__["AdicionarProdutoComponent"], _paths_adicionar_adicionar_ingrediente_adicionar_ingrediente_component__WEBPACK_IMPORTED_MODULE_10__["AdicionarIngredienteComponent"], _paths_shared_nao_encontrada_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_11__["NaoEncontradaComponent"], _paths_Main_carrinho_comprar_component__WEBPACK_IMPORTED_MODULE_12__["ComprarComponent"], _paths_nao_logado_nao_logado_component__WEBPACK_IMPORTED_MODULE_15__["NaoLogadoComponent"], _paths_Main_produtos_produtoss_component__WEBPACK_IMPORTED_MODULE_17__["ProdutossComponent"], _paths_alterar_alterar_produto_alterar_produto_component__WEBPACK_IMPORTED_MODULE_18__["AlterarProdutoComponent"], _paths_alterar_alterar_ingrediente_alterar_ingrediente_component__WEBPACK_IMPORTED_MODULE_19__["AlterarIngredienteComponent"], _paths_adicionar_adicionar_promocao_adicionar_promocao_component__WEBPACK_IMPORTED_MODULE_21__["AdicionarPromocaoComponent"], _paths_deletar_delete_produto_delete_produto_component__WEBPACK_IMPORTED_MODULE_22__["DeleteProdutoComponent"], _paths_alterar_alterar_promocao_alterar_promocao_component__WEBPACK_IMPORTED_MODULE_23__["AlterarPromocaoComponent"], _paths_deletar_delete_ingrediente_delete_ingrediente_component__WEBPACK_IMPORTED_MODULE_24__["DeleteIngredienteComponent"], _paths_deletar_delete_promocao_delete_promocao_component__WEBPACK_IMPORTED_MODULE_25__["DeletePromocaoComponent"], _paths_adicionar_adicionar_carrinh_produto_adicionar_carrinh_produto_component__WEBPACK_IMPORTED_MODULE_26__["AdicionarCarrinhProdutoComponent"], _paths_adicionar_adicionar_carrinh_prmocao_adicionar_carrinh_prmocao_component__WEBPACK_IMPORTED_MODULE_27__["AdicionarCarrinhPrmocaoComponent"], _paths_shared_unauthorized_page_unauthorized_page_component__WEBPACK_IMPORTED_MODULE_30__["UnauthorizedPageComponent"], _paths_shared_carrinho_vazio_carrinho_vazio_component__WEBPACK_IMPORTED_MODULE_31__["CarrinhoVazioComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]],
            providers: [{
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"],
              useClass: _paths_login_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_20__["TokenInterceptor"],
              multi: true
            }, _paths_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["CurrencyPipe"], {
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
              useValue: 'pt-BR'
            }, {
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_CURRENCY_CODE"],
              useValue: 'BRL'
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
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


      var _service_service_carrinho_carrinho_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/service_carrinho/carrinho.service */
      "./src/app/paths/service/service_carrinho/carrinho.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_carrinho_vazio_carrinho_vazio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/carrinho-vazio/carrinho-vazio.component */
      "./src/app/paths/shared/carrinho-vazio/carrinho-vazio.component.ts");

      function ComprarComponent_ng_container_5_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComprarComponent_ng_container_5_div_1_div_1_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var carrinho_r8 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r9.removeProdutoCarrinho(carrinho_r8.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var carrinho_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", carrinho_r8 == null ? null : carrinho_r8.imageName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](carrinho_r8 == null ? null : carrinho_r8.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 3, carrinho_r8 == null ? null : carrinho_r8.price, "BRL"));
        }
      }

      function ComprarComponent_ng_container_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComprarComponent_ng_container_5_div_1_div_1_Template, 11, 6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComprarComponent_ng_container_5_div_1_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.comprar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Comprar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var produtos_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", produtos_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, ctx_r6.total, "BRL"), "");
        }
      }

      function ComprarComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComprarComponent_ng_container_5_div_1_Template, 7, 5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.produto.length > 0)("ngIfElse", _r3);
        }
      }

      function ComprarComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ComprarComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-carrinho-vazio");
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
            this.produto = [];
            this.total = 0;
          }

          _createClass(ComprarComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getCarrinho();
            }
          }, {
            key: "getCarrinho",
            value: function getCarrinho() {
              var _this2 = this;

              this.produtos$ = this.carrinhoService.getCarrinho().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (produto) {
                _this2.produto = produto;

                _this2.calculaTotal();
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.message);
              }));
            }
          }, {
            key: "calculaTotal",
            value: function calculaTotal() {
              this.total = this.produto.reduce(function (prev, curr) {
                return prev + curr.price;
              }, 0);
              console.log('total', this.total);
            }
          }, {
            key: "removeProdutoCarrinho",
            value: function removeProdutoCarrinho(id) {
              var _this3 = this;

              this.carrinhoService.deleteCarrinho(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
                _this3.produto = _this3.produto.filter(function (produto) {
                  return produto.id !== res;
                });
                _this3.produtos$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_this3.produto);
                alert('removido');

                _this3.calculaTotal();
              })).subscribe();
            }
          }, {
            key: "comprar",
            value: function comprar() {
              if (this.produto.length > 0) {
                alert('parabéns, você finalizou a sua compra!');
              } else {
                alert('carrinho vazio');
              }
            }
          }]);

          return ComprarComponent;
        }();

        ComprarComponent.ɵfac = function ComprarComponent_Factory(t) {
          return new (t || ComprarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_carrinho_carrinho_service__WEBPACK_IMPORTED_MODULE_4__["CarrinhoService"]));
        };

        ComprarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ComprarComponent,
          selectors: [["app-comprar"]],
          decls: 11,
          vars: 4,
          consts: [[1, "mx-auto", "d-flex", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], [1, "d-flex", "row", "div-carrinho"], [4, "ngIf", "ngIfElse"], ["semProduto", ""], ["zerado", ""], [4, "ngFor", "ngForOf"], [1, "cart-total", "ms-4"], [1, "buy-button", "btn", "w-auto", 3, "click"], [1, "justify-content-between", "align-items-center", "d-flex"], [3, "src"], [1, "remove-button", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "shimmer"], [1, "wrapper"], [1, "image-card", "animate"], [1, "stroke", "animate", "title"], [1, "stroke", "animate", "link"], [1, "stroke", "animate", "description"]],
          template: function ComprarComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Carrinho");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ComprarComponent_ng_container_5_Template, 2, 2, "ng-container", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ComprarComponent_ng_template_7_Template, 6, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ComprarComponent_ng_template_9_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.produtos$))("ngIfElse", _r1);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _shared_carrinho_vazio_carrinho_vazio_component__WEBPACK_IMPORTED_MODULE_6__["CarrinhoVazioComponent"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]],
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
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _service_service_carrinho_carrinho_service__WEBPACK_IMPORTED_MODULE_4__["CarrinhoService"]
          }];
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/service_login/auth.service */
      "./src/app/paths/service/service_login/auth.service.ts");
      /* harmony import */


      var _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/service_produto/produto.service */
      "./src/app/paths/service/service_produto/produto.service.ts");
      /* harmony import */


      var _service_service_carrinho_carrinho_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/service_carrinho/carrinho.service */
      "./src/app/paths/service/service_carrinho/carrinho.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdutossComponent_ng_container_1_div_1_button_14_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var produto_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.atualizar(produto_r5.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProdutossComponent_ng_container_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", produto_r5 == null ? null : produto_r5.imageName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](produto_r5 == null ? null : produto_r5.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](produto_r5 == null ? null : produto_r5.ingredients);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 7, produto_r5 == null ? null : produto_r5.price, "BRL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/adicionar-carrinho-produto/", produto_r5.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.eAdm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.eAdm);
        }
      }

      function ProdutossComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProdutossComponent_ng_container_1_div_1_Template, 15, 10, "div", 3);

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
          function ProdutossComponent(router, authService, produtoService, carrinhoS, route) {
            _classCallCheck(this, ProdutossComponent);

            this.router = router;
            this.authService = authService;
            this.produtoService = produtoService;
            this.carrinhoS = carrinhoS;
            this.route = route;
            this.eAdm = this.authService.eadm();
            this.produtos = [];
          }

          _createClass(ProdutossComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.name = this.route.snapshot.paramMap.get('name');
              this.getIngredientes();
              console.log(this.produtos$);
            }
          }, {
            key: "getIngredientes",
            value: function getIngredientes() {
              this.produtos$ = this.produtoService.getIngredientesByCategory(this.name);
            }
          }, {
            key: "comprar",
            value: function comprar() {//   this.carrinhoS.adicionarAoCarrinho(this.produtos).subscribe(res => {
              //     console.log(res);
              //     // this.route.navigate(['carrinho']);
              //     alert('enviado com sucesso!');
              //   });
            }
          }, {
            key: "remover",
            value: function remover(id) {
              this.router.navigateByUrl("/delete-ingrediente/".concat(id));
            }
          }, {
            key: "atualizar",
            value: function atualizar(id) {
              this.router.navigateByUrl("/alterar/ingrediente/".concat(id));
            }
          }]);

          return ProdutossComponent;
        }();

        ProdutossComponent.ɵfac = function ProdutossComponent_Factory(t) {
          return new (t || ProdutossComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_carrinho_carrinho_service__WEBPACK_IMPORTED_MODULE_4__["CarrinhoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
        };

        ProdutossComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ProdutossComponent,
          selectors: [["app-produtoss"]],
          decls: 5,
          vars: 4,
          consts: [[1, "row", "row-cols-1", "row-cols-md-2", "g-4", "w-100"], [4, "ngIf", "ngIfElse"], ["loading", ""], ["class", "card card-container p-2 ms-5 ", 4, "ngFor", "ngForOf"], [1, "card", "card-container", "p-2", "ms-5"], ["alt", "...", 1, "card-img-top", "img-fluid", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "d-flex", "justify-content-between"], [1, "btn", "btn-card", 3, "routerLink"], ["class", "btn remove-button", 3, "click", 4, "ngIf"], [1, "btn", "remove-button", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "fa-solid", "fa-pen-to-square"], [1, "card_", "p-2", "ms-5"], [1, "shimmerBG", "media"], [1, "p-32"], [1, "shimmerBG", "title-line"], [1, "shimmerBG", "title-line", "end"], [1, "shimmerBG", "content-line", "m-t-24"], [1, "shimmerBG", "content-line"], [1, "shimmerBG", "content-line", "end"]],
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
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]],
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
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]
          }, {
            type: _service_service_carrinho_carrinho_service__WEBPACK_IMPORTED_MODULE_4__["CarrinhoService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
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


      var _service_service_carrinho_carrinho_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../service/service_carrinho/carrinho.service */
      "./src/app/paths/service/service_carrinho/carrinho.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PromocoesComponent_ng_container_1_div_1_button_21_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var produto_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.atualizar(produto_r5.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PromocoesComponent_ng_container_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", produto_r5 == null ? null : produto_r5.imageName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](produto_r5 == null ? null : produto_r5.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](produto_r5 == null ? null : produto_r5.ingredients);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 7, produto_r5 == null ? null : produto_r5.price, "BRL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/adicionar-carrinho-promocao/", produto_r5.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.eAdm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.eAdm);
        }
      }

      function PromocoesComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PromocoesComponent_ng_container_1_div_1_Template, 22, 10, "div", 3);

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
          function PromocoesComponent(route, authService, produtoService, carrinhoS) {
            _classCallCheck(this, PromocoesComponent);

            this.route = route;
            this.authService = authService;
            this.produtoService = produtoService;
            this.carrinhoS = carrinhoS;
            this.eAdm = this.authService.eadm();
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
            key: "remover",
            value: function remover(id) {
              this.route.navigateByUrl("/delete-promocao/".concat(id));
            }
          }, {
            key: "atualizar",
            value: function atualizar(id) {
              this.route.navigateByUrl("/alterar/promocao/".concat(id));
            }
          }]);

          return PromocoesComponent;
        }();

        PromocoesComponent.ɵfac = function PromocoesComponent_Factory(t) {
          return new (t || PromocoesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_6__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_carrinho_carrinho_service__WEBPACK_IMPORTED_MODULE_7__["CarrinhoService"]));
        };

        PromocoesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: PromocoesComponent,
          selectors: [["app-promocoes"]],
          decls: 5,
          vars: 4,
          consts: [[1, "row", "row-cols-auto", "row-cols-md-2", "g-4", "w-100"], [4, "ngIf", "ngIfElse"], ["loading", ""], ["class", "d-flex flex-column  card card-container p-2 ms-5 ", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-column", "card", "card-container", "p-2", "ms-5"], ["alt", "...", "width", "400", "height", "300", 1, "card-img-top", "img-fluid", "w-100", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "d-flex", "justify-content-between"], [1, "btn", "btn-card", 3, "routerLink"], ["class", "btn remove-button", 3, "click", 4, "ngIf"], [1, "btn", "remove-button", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "fa-solid", "fa-pen-to-square"], [1, "card_", "p-2", "ms-5"], [1, "shimmerBG", "media"], [1, "p-32"], [1, "shimmerBG", "title-line"], [1, "shimmerBG", "title-line", "end"], [1, "shimmerBG", "content-line", "m-t-24"], [1, "shimmerBG", "content-line"], [1, "shimmerBG", "content-line", "end"]],
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
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]],
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
          }, {
            type: _service_service_carrinho_carrinho_service__WEBPACK_IMPORTED_MODULE_7__["CarrinhoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/adicionar/adicionar-carrinh-prmocao/adicionar-carrinh-prmocao.component.ts":
    /*!**************************************************************************************************!*\
      !*** ./src/app/paths/adicionar/adicionar-carrinh-prmocao/adicionar-carrinh-prmocao.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: AdicionarCarrinhPrmocaoComponent */

    /***/
    function srcAppPathsAdicionarAdicionarCarrinhPrmocaoAdicionarCarrinhPrmocaoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdicionarCarrinhPrmocaoComponent", function () {
        return AdicionarCarrinhPrmocaoComponent;
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


      var _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/service_produto/produto.service */
      "./src/app/paths/service/service_produto/produto.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AdicionarCarrinhPrmocaoComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdicionarCarrinhPrmocaoComponent_ng_container_0_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.comprar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Adicionar ao carrinho");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var produtos_r3 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", produtos_r3 == null ? null : produtos_r3.imageName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](produtos_r3 == null ? null : produtos_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](produtos_r3 == null ? null : produtos_r3.ingredients);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 4, produtos_r3 == null ? null : produtos_r3.price, "BRL"));
        }
      }

      function AdicionarCarrinhPrmocaoComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AdicionarCarrinhPrmocaoComponent =
      /** @class */
      function () {
        var AdicionarCarrinhPrmocaoComponent = /*#__PURE__*/function () {
          function AdicionarCarrinhPrmocaoComponent(route, carrinhoService, produtoService, router) {
            _classCallCheck(this, AdicionarCarrinhPrmocaoComponent);

            this.route = route;
            this.carrinhoService = carrinhoService;
            this.produtoService = produtoService;
            this.router = router;
            this.promocao = {
              id: undefined,
              ingredients: '',
              price: undefined,
              imageName: '',
              name: ''
            };
          }

          _createClass(AdicionarCarrinhPrmocaoComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this4 = this;

              this.promocao.id = Number(this.route.snapshot.paramMap.get('id'));
              this.findById();
              this.promocao$.subscribe(function (res) {
                _this4.carrinho = res;
              });
            }
          }, {
            key: "findById",
            value: function findById() {
              this.promocao$ = this.produtoService.getPromocaoById(this.promocao.id);
            }
          }, {
            key: "comprar",
            value: function comprar() {
              var _this5 = this;

              this.carrinhoService.postCarrinhoP(this.carrinho, this.promocao.id).subscribe(function () {
                alert('enviado com sucesso!');

                _this5.router.navigate(['comprar']);
              });
            }
          }]);

          return AdicionarCarrinhPrmocaoComponent;
        }();

        AdicionarCarrinhPrmocaoComponent.ɵfac = function AdicionarCarrinhPrmocaoComponent_Factory(t) {
          return new (t || AdicionarCarrinhPrmocaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_carrinho_carrinho_service__WEBPACK_IMPORTED_MODULE_2__["CarrinhoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
        };

        AdicionarCarrinhPrmocaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AdicionarCarrinhPrmocaoComponent,
          selectors: [["app-adicionar-carrinh-prmocao"]],
          decls: 4,
          vars: 4,
          consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [1, "card", "add-promocao_card", "p-2", 2, "width", "18rem"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", 3, "click"], [1, "card_", "p-2", "ms-5"], [1, "shimmerBG", "media"], [1, "p-32"], [1, "shimmerBG", "title-line"], [1, "shimmerBG", "title-line", "end"], [1, "shimmerBG", "content-line", "m-t-24"], [1, "shimmerBG", "content-line"], [1, "shimmerBG", "content-line", "end"]],
          template: function AdicionarCarrinhPrmocaoComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdicionarCarrinhPrmocaoComponent_ng_container_0_Template, 13, 7, "ng-container", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdicionarCarrinhPrmocaoComponent_ng_template_2_Template, 30, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }

            if (rf & 2) {
              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.promocao$))("ngIfElse", _r1);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]],
          styles: [".add-promocao_card[_ngcontent-%COMP%] {\n  background: #EDE9D5;\n}\n.add-promocao_card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n}\n.add-promocao_card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvYWRpY2lvbmFyL2FkaWNpb25hci1jYXJyaW5oLXBybW9jYW8vYWRpY2lvbmFyLWNhcnJpbmgtcHJtb2Nhby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlQTtFQUNFLG1CQWhCUztBQUVYO0FBZ0JFO0VBVEEsV0FBQTtFQUNBLG1CQVRhO0VBVWIsZ0JBTFM7QUFDWDtBQWVFO0VBQ0UsK0RBckJVO0FBUWQiLCJmaWxlIjoic3JjL2FwcC9wYXRocy9hZGljaW9uYXIvYWRpY2lvbmFyLWNhcnJpbmgtcHJtb2Nhby9hZGljaW9uYXItY2FycmluaC1wcm1vY2FvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWJnOiAjRURFOUQ1O1xyXG4kY29sb3ItYnV0dG9uOiAjRTdBQjlBO1xyXG4kY29sb3ItaG92ZXI6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZWNkMiAwJSwgI2ZjYjY5ZiAxMDAlKTtcclxuJGNvbG9yLTM6ICM2MTcxNDM7XHJcbiRmb250LXJvYm90bzogJ3JvYm90bycsIHNlcmlmO1xyXG4kZm9udC1iYWJlOiAnUmFqZGhhbmknLCBzYW5zLXNlcmlmO1xyXG4kZm9udC03MDA6IDcwMDtcclxuQG1peGluIGJvdGFvKCkge1xyXG5cclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItYnV0dG9uO1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC03MDA7XHJcblxyXG59XHJcblxyXG4uYWRkLXByb21vY2FvX2NhcmQge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1iZztcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGJvdGFvKCk7XHJcbiAgfVxyXG5cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWhvdmVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
        });
        return AdicionarCarrinhPrmocaoComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdicionarCarrinhPrmocaoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-adicionar-carrinh-prmocao',
            templateUrl: './adicionar-carrinh-prmocao.component.html',
            styleUrls: ['./adicionar-carrinh-prmocao.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _service_service_carrinho_carrinho_service__WEBPACK_IMPORTED_MODULE_2__["CarrinhoService"]
          }, {
            type: _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/adicionar/adicionar-carrinh-produto/adicionar-carrinh-produto.component.ts":
    /*!**************************************************************************************************!*\
      !*** ./src/app/paths/adicionar/adicionar-carrinh-produto/adicionar-carrinh-produto.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: AdicionarCarrinhProdutoComponent */

    /***/
    function srcAppPathsAdicionarAdicionarCarrinhProdutoAdicionarCarrinhProdutoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdicionarCarrinhProdutoComponent", function () {
        return AdicionarCarrinhProdutoComponent;
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


      var _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/service_produto/produto.service */
      "./src/app/paths/service/service_produto/produto.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AdicionarCarrinhProdutoComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdicionarCarrinhProdutoComponent_ng_container_0_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.comprar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Adicionar ao carrinho");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var produtos_r3 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", produtos_r3 == null ? null : produtos_r3.imageName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](produtos_r3 == null ? null : produtos_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](produtos_r3 == null ? null : produtos_r3.ingredients);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 4, produtos_r3 == null ? null : produtos_r3.price, "BRL"));
        }
      }

      function AdicionarCarrinhProdutoComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AdicionarCarrinhProdutoComponent =
      /** @class */
      function () {
        var AdicionarCarrinhProdutoComponent = /*#__PURE__*/function () {
          function AdicionarCarrinhProdutoComponent(route, carrinhoService, produtoService, router) {
            _classCallCheck(this, AdicionarCarrinhProdutoComponent);

            this.route = route;
            this.carrinhoService = carrinhoService;
            this.produtoService = produtoService;
            this.router = router;
            this.produto = {
              id: undefined,
              imageName: '',
              name: '',
              price: undefined,
              ingredients: ''
            };
          }

          _createClass(AdicionarCarrinhProdutoComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this6 = this;

              this.produto.id = Number(this.route.snapshot.paramMap.get('id'));
              this.findById();
              this.produto$.subscribe(function (res) {
                _this6.carrinho = res;
              });
            }
          }, {
            key: "findById",
            value: function findById() {
              this.produto$ = this.produtoService.getIngredienteById(this.produto.id);
            }
          }, {
            key: "comprar",
            value: function comprar() {
              var _this7 = this;

              this.carrinhoService.postCarrinho(this.carrinho, this.produto.id).subscribe(function () {
                alert('enviado com sucesso!');

                _this7.router.navigate(['comprar']);
              });
            }
          }]);

          return AdicionarCarrinhProdutoComponent;
        }();

        AdicionarCarrinhProdutoComponent.ɵfac = function AdicionarCarrinhProdutoComponent_Factory(t) {
          return new (t || AdicionarCarrinhProdutoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_carrinho_carrinho_service__WEBPACK_IMPORTED_MODULE_2__["CarrinhoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
        };

        AdicionarCarrinhProdutoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AdicionarCarrinhProdutoComponent,
          selectors: [["app-adicionar-carrinh-produto"]],
          decls: 4,
          vars: 4,
          consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [1, "card", "add-promocao_card", "p-2", 2, "width", "18rem"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", 3, "click"], [1, "card_", "p-2", "ms-5"], [1, "shimmerBG", "media"], [1, "p-32"], [1, "shimmerBG", "title-line"], [1, "shimmerBG", "title-line", "end"], [1, "shimmerBG", "content-line", "m-t-24"], [1, "shimmerBG", "content-line"], [1, "shimmerBG", "content-line", "end"]],
          template: function AdicionarCarrinhProdutoComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdicionarCarrinhProdutoComponent_ng_container_0_Template, 13, 7, "ng-container", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdicionarCarrinhProdutoComponent_ng_template_2_Template, 30, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }

            if (rf & 2) {
              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.produto$))("ngIfElse", _r1);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]],
          styles: [".add-promocao_card[_ngcontent-%COMP%] {\n  background: #EDE9D5;\n}\n.add-promocao_card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n}\n.add-promocao_card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvYWRpY2lvbmFyL2FkaWNpb25hci1jYXJyaW5oLXByb2R1dG8vYWRpY2lvbmFyLWNhcnJpbmgtcHJvZHV0by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlQTtFQUNFLG1CQWhCUztBQUVYO0FBZ0JFO0VBVEEsV0FBQTtFQUNBLG1CQVRhO0VBVWIsZ0JBTFM7QUFDWDtBQWVFO0VBQ0UsK0RBckJVO0FBUWQiLCJmaWxlIjoic3JjL2FwcC9wYXRocy9hZGljaW9uYXIvYWRpY2lvbmFyLWNhcnJpbmgtcHJvZHV0by9hZGljaW9uYXItY2FycmluaC1wcm9kdXRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWJnOiAjRURFOUQ1O1xyXG4kY29sb3ItYnV0dG9uOiAjRTdBQjlBO1xyXG4kY29sb3ItaG92ZXI6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZWNkMiAwJSwgI2ZjYjY5ZiAxMDAlKTtcclxuJGNvbG9yLTM6ICM2MTcxNDM7XHJcbiRmb250LXJvYm90bzogJ3JvYm90bycsIHNlcmlmO1xyXG4kZm9udC1iYWJlOiAnUmFqZGhhbmknLCBzYW5zLXNlcmlmO1xyXG4kZm9udC03MDA6IDcwMDtcclxuQG1peGluIGJvdGFvKCkge1xyXG5cclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItYnV0dG9uO1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC03MDA7XHJcblxyXG59XHJcblxyXG4uYWRkLXByb21vY2FvX2NhcmQge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1iZztcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGJvdGFvKCk7XHJcbiAgfVxyXG5cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWhvdmVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
        });
        return AdicionarCarrinhProdutoComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdicionarCarrinhProdutoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-adicionar-carrinh-produto',
            templateUrl: './adicionar-carrinh-produto.component.html',
            styleUrls: ['./adicionar-carrinh-produto.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _service_service_carrinho_carrinho_service__WEBPACK_IMPORTED_MODULE_2__["CarrinhoService"]
          }, {
            type: _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/adicionar/adicionar-ingrediente/adicionar-ingrediente.component.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/paths/adicionar/adicionar-ingrediente/adicionar-ingrediente.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: AdicionarIngredienteComponent */

    /***/
    function srcAppPathsAdicionarAdicionarIngredienteAdicionarIngredienteComponentTs(module, __webpack_exports__, __webpack_require__) {
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


      var _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/service_produto/produto.service */
      "./src/app/paths/service/service_produto/produto.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formAddProduto.controls["name"].hasError("required"));
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formAddProduto.controls["price"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formAddProduto.controls["price"].hasError("min"));
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formAddProduto.controls["ingredients"].hasError("required"));
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
          function AdicionarIngredienteComponent(fb, produtoService, currency, router, route) {
            _classCallCheck(this, AdicionarIngredienteComponent);

            this.fb = fb;
            this.produtoService = produtoService;
            this.currency = currency;
            this.router = router;
            this.route = route;
            this.produtos = {
              name: '',
              imageName: '',
              id: undefined
            };
            this.fotoSrc = '';
            this.mostrarTexto = true;
          }

          _createClass(AdicionarIngredienteComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              // this.createForm();
              this.produtos.name = this.route.snapshot.paramMap.get('name');
              this.formAddProduto = this.fb.group({
                name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                imageName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
                ingredients: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              });
              this.formatPrice();
            }
          }, {
            key: "formatPrice",
            value: function formatPrice() {
              var _this8 = this;

              this.formAddProduto.valueChanges.subscribe(function (form) {
                if (form.price) {
                  _this8.formAddProduto.patchValue({
                    price: _this8.currency.transform(form.price.toString().replace(/\D/g, '').replace(/^0/, ''), 'BRL', 'symbol', '1.0-0')
                  }, {
                    emitEvent: false
                  });
                }
              });
            }
          }, {
            key: "createForm",
            value: function createForm() {
              this.formAddProduto = this.fb.group({
                name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                imageName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
                ingredients: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              });
            }
          }, {
            key: "imagem",
            value: function imagem(event) {
              var _this9 = this;

              this.span = document.getElementById('span_imagem');
              var inputTarget = event.target;
              var file = inputTarget.files[0];

              if (file) {
                var reader = new FileReader();
                reader.addEventListener('load', function (e) {
                  var readerTarget = e.target;
                  _this9.span.style.border = 'none';
                  _this9.span.style.background = 'none';
                  _this9.mostrarTexto = false;
                  _this9.fotoSrc = String(readerTarget.result);
                  _this9.formAddProduto.value.imageName = String(readerTarget.result);
                });
                reader.readAsDataURL(file);
              }
            }
          }, {
            key: "addProduto",
            value: function addProduto() {
              var _this10 = this;

              if (this.formAddProduto.dirty && this.formAddProduto.valid) {
                this.produto = Object.assign({}, this.produto, this.formAddProduto.value);
                this.produto.price = Number(this.formAddProduto.value.price.replace(/[^0-9]/g, ''));
                console.log(this.produtos.name);
                this.produtoService.postProduto(this.produto, this.produtos.name).subscribe(function (res) {
                  _this10.router.navigate(['/']);

                  alert('enviado com sucesso!');
                });
                console.log('produto adicionada', this.produto);
              } else {
                alert('preencha o formulario!');
              }
            }
          }]);

          return AdicionarIngredienteComponent;
        }();

        AdicionarIngredienteComponent.ɵfac = function AdicionarIngredienteComponent_Factory(t) {
          return new (t || AdicionarIngredienteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
        };

        AdicionarIngredienteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AdicionarIngredienteComponent,
          selectors: [["app-adicionar-ingrediente"]],
          decls: 28,
          vars: 34,
          consts: [[1, "contato-bg", "p-5", "rounded", "d-grid", 3, "formGroup"], [1, "mx-auto", "d-grid", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], [1, "mb-3", "d-grid", "mx-auto", "mb-5", "div-input"], ["for", "produto", 1, "form-label"], ["type", "text", "id", "produto", "placeholder", "nome do produto", "formControlName", "name", 1, "form-control", 3, "ngClass"], [4, "ngIf"], ["for", "preco", 1, "form-label"], ["id", "preco", "placeholder", "R$ 00,00", "formControlName", "price", 1, "form-control", 3, "ngClass"], ["for", "texto", 1, "form-label"], ["id", "texto", "placeholder", "digite o ingrediente...", "formControlName", "ingredients", 1, "form-control", 3, "ngClass"], [1, "mb-3", "mx-auto"], ["for", "formFile", "id", "span_imagem", 1, "form-label", "img-label"], [1, "img", 3, "src"], ["type", "file", "accept", "image/*", "id", "formFile", "formControlName", "imageName", 1, "form-control", 3, "change"], [1, "d-lg-flex", "flex-wrap", "mx-auto"], [1, "col-auto", "ms-lg-3"], ["type", "submit", 1, "btn", "mb-3", 3, "click"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]],
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

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formAddProduto);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["name"].valid)("invalid", ctx.formAddProduto.controls["name"].invalid && (ctx.formAddProduto.controls["name"].touched || ctx.formAddProduto.controls["name"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c0, ctx.formAddProduto.controls["name"].invalid && (ctx.formAddProduto.controls["name"].touched || ctx.formAddProduto.controls["name"].dirty), ctx.formAddProduto.controls["name"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["name"].invalid && (ctx.formAddProduto.controls["name"].touched || ctx.formAddProduto.controls["name"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["price"].valid)("invalid", ctx.formAddProduto.controls["price"].invalid && (ctx.formAddProduto.controls["price"].touched || ctx.formAddProduto.controls["price"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](28, _c0, ctx.formAddProduto.controls["price"].invalid && (ctx.formAddProduto.controls["price"].touched || ctx.formAddProduto.controls["price"].dirty), ctx.formAddProduto.controls["price"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["price"].invalid && (ctx.formAddProduto.controls["price"].touched || ctx.formAddProduto.controls["price"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["ingredients"].valid)("invalid", ctx.formAddProduto.controls["ingredients"].invalid && (ctx.formAddProduto.controls["ingredients"].touched || ctx.formAddProduto.controls["ingredients"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](31, _c0, ctx.formAddProduto.controls["ingredients"].invalid && (ctx.formAddProduto.controls["ingredients"].touched || ctx.formAddProduto.controls["ingredients"].dirty), ctx.formAddProduto.controls["ingredients"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["ingredients"].invalid && (ctx.formAddProduto.controls["ingredients"].touched || ctx.formAddProduto.controls["ingredients"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostrarTexto);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.fotoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["imageName"].valid)("invalid", ctx.formAddProduto.controls["imageName"].invalid && (ctx.formAddProduto.controls["imageName"].touched || ctx.formAddProduto.controls["imageName"].dirty));
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
          styles: [".contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 50%;\n}\n.contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-registro[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n  width: 25%;\n}\n@media (max-width: 500px) {\n  .contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .contato-bg[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus, .contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  color: #DF7857;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  width: 400px;\n  aspect-ratio: 16/9;\n  background: #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #aaa;\n  border: 2px dashed currentColor;\n  cursor: pointer;\n  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;\n}\n@media (max-width: 600px) {\n  .contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]:hover {\n  color: #999;\n  background: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvYWRpY2lvbmFyL2FkaWNpb25hci1pbmdyZWRpZW50ZS9hZGljaW9uYXItaW5ncmVkaWVudGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJFO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FBbEJKO0FBb0JJO0VBQ0UsY0F0Qkk7RUF1QkosNEJBckJRO0FBR2Q7QUFzQkU7RUFDRSxVQUFBO0FBcEJKO0FBcUJJO0VBRkY7SUFHSSxVQUFBO0VBbEJKO0FBQ0Y7QUFzQkU7RUExQkEsV0FBQTtFQUNBLG1CQVphO0VBYWIsZ0JBUFM7RUFRVCw0QkFWWTtBQWlCZDtBQW1CRTtFQUNFLFVBQUE7QUFqQko7QUFtQkU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFqQko7QUFtQkU7RUFDRSwwQkFBQTtBQWpCSjtBQW9CRTtFQUNFLCtEQTdDVTtBQTJCZDtBQXFCRTtFQUNFLDRCQXBEVTtBQWlDZDtBQWtCRTtFQUNFLDRCQXBEVTtBQWlDZDtBQXVCRTtFQUNFLGFBQUE7QUFyQko7QUF3QkU7RUFDRSw0QkE3RFU7QUF1Q2Q7QUFxQkU7RUFDRSw0QkE3RFU7QUF1Q2Q7QUEwQkU7RUFDRSw0QkFsRVU7RUFtRVYsY0FyRU07QUE2Q1Y7QUE0QkU7RUFDRSw0QkF4RVU7RUF5RVYsWUFBQTtFQUlBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSx1RUFBQTtBQTdCSjtBQWtCSTtFQUhGO0lBSUksWUFBQTtFQWZKO0FBQ0Y7QUEwQkk7RUFDRSxlQUFBO0FBeEJOO0FBNEJFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBMUJKIiwiZmlsZSI6InNyYy9hcHAvcGF0aHMvYWRpY2lvbmFyL2FkaWNpb25hci1pbmdyZWRpZW50ZS9hZGljaW9uYXItaW5ncmVkaWVudGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYnV0dG9uOiAjRTdBQjlBO1xyXG4kY29sb3ItYmc6ICNFREU5RDU7XHJcbiRjb2xvci0yOiAjREY3ODU3O1xyXG4kY29sb3ItMzogIzYxNzE0MztcclxuJGZvbnQtcm9ib3RvOiAncm9ib3RvJywgc2VyaWY7XHJcbiRmb250LWJhYmU6ICdSYWpkaGFuaScsIHNhbnMtc2VyaWY7XHJcbiRmb250LTcwMDogNzAwO1xyXG4kY29sb3ItaG92ZXI6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZWNkMiAwJSwgI2ZjYjY5ZiAxMDAlKTtcclxuXHJcbkBtaXhpbiBib3RhbygpIHtcclxuXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWJ1dHRvbjtcclxuICBmb250LXdlaWdodDogJGZvbnQtNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbn1cclxuXHJcblxyXG4uY29udGF0by1iZyB7XHJcbiAgLmgxLWJnIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAuaDEtcmVnaXN0cm8ge1xyXG4gICAgICBjb2xvcjogJGNvbG9yLTI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICAuZGl2LWlucHV0e1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9iYWNrZ3JvdW5kOiAkY29sb3ItYmc7XHJcbiAgYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGJvdGFvXHJcbiAgfVxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIGlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1udW1iZXJdLGlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cyAsdGV4dGFyZWF7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6dGV4dGZpZWxkO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1ob3ZlcjtcclxuICB9XHJcblxyXG4gIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgICBjb2xvcjogJGNvbG9yLTI7XHJcblxyXG4gIH1cclxuXHJcbiAgLmltZy1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICAgIGFzcGVjdC1yYXRpbzogMTYvOTtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6ICNhYWE7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgY3VycmVudENvbG9yO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgLmltZyB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbWctbGFiZWw6aG92ZXIge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"]
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
            type: _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/adicionar/adicionar-produto/adicionar-produto.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/paths/adicionar/adicionar-produto/adicionar-produto.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: AdicionarProdutoComponent */

    /***/
    function srcAppPathsAdicionarAdicionarProdutoAdicionarProdutoComponentTs(module, __webpack_exports__, __webpack_require__) {
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formAddProduto.controls["name"].hasError("required"));
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
          function AdicionarProdutoComponent(fb, produtoService, router) {
            _classCallCheck(this, AdicionarProdutoComponent);

            this.fb = fb;
            this.produtoService = produtoService;
            this.router = router;
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
                name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                imageName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              });
            }
          }, {
            key: "imagem",
            value: function imagem(event) {
              var _this11 = this;

              this.span = document.getElementById('span_imagem');
              var inputTarget = event.target;
              var file = inputTarget.files[0];

              if (file) {
                var reader = new FileReader();
                reader.addEventListener('load', function (e) {
                  var readerTarget = e.target;
                  _this11.span.style.border = 'none';
                  _this11.span.style.background = 'none';
                  _this11.mostrarTexto = false;
                  _this11.fotoSrc = String(readerTarget.result);
                  _this11.formAddProduto.value.imageName = String(readerTarget.result);
                });
                reader.readAsDataURL(file);
              }
            }
          }, {
            key: "enviar",
            value: function enviar() {
              var _this12 = this;

              if (this.formAddProduto.dirty && this.formAddProduto.valid) {
                this.produto = Object.assign({}, this.produto, this.formAddProduto.value);
                console.log(this.produto);
                this.produtoService.postProdutoLista(this.produto).subscribe(function (res) {
                  alert('enviado com sucesso!');

                  _this12.router.navigate(['produtos-categorias']);
                }, function (error) {
                  alert('só e possivel enviar um nome e uma foto em categoria');
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
          return new (t || AdicionarProdutoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
        };

        AdicionarProdutoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AdicionarProdutoComponent,
          selectors: [["app-contato"]],
          decls: 17,
          vars: 16,
          consts: [[1, "contato-bg", "p-5", "rounded", "d-grid", 3, "formGroup"], [1, "mx-auto", "d-grid", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], [1, "mb-3", "d-grid", "mx-auto", "mb-5", "div-input"], ["for", "email", 1, "form-label"], ["type", "text", "id", "email", "placeholder", "Digite um nome...", "formControlName", "name", 1, "form-control", 3, "ngClass"], [4, "ngIf"], [1, "mb-3", "mx-auto"], ["for", "formFile", "id", "span_imagem", 1, "form-label", "img-label"], [1, "img", 3, "src"], ["type", "file", "accept", "image/*", "id", "formFile", "formControlName", "imageName", 1, "form-control", 3, "change"], [1, "col-auto", "mx-auto"], ["type", "submit", 1, "btn", "mb-3", 3, "click"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]],
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

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["name"].valid)("invalid", ctx.formAddProduto.controls["name"].invalid && (ctx.formAddProduto.controls["name"].touched || ctx.formAddProduto.controls["name"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c0, ctx.formAddProduto.controls["name"].invalid && (ctx.formAddProduto.controls["name"].touched || ctx.formAddProduto.controls["name"].dirty), ctx.formAddProduto.controls["name"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["name"].invalid && (ctx.formAddProduto.controls["name"].touched || ctx.formAddProduto.controls["name"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostrarTexto);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.fotoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["imageName"].valid)("invalid", ctx.formAddProduto.controls["imageName"].invalid && (ctx.formAddProduto.controls["imageName"].touched || ctx.formAddProduto.controls["imageName"].dirty));
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
          styles: [".contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 50%;\n}\n.contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-registro[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n  width: 25%;\n}\n@media (max-width: 500px) {\n  .contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  color: #DF7857;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  width: 400px;\n  aspect-ratio: 16/9;\n  background: #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #aaa;\n  border: 2px dashed currentColor;\n  cursor: pointer;\n  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;\n}\n@media (max-width: 600px) {\n  .contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]:hover {\n  color: #999;\n  background: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvYWRpY2lvbmFyL2FkaWNpb25hci1wcm9kdXRvL2FkaWNpb25hci1wcm9kdXRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CRTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtBQWxCSjtBQW9CSTtFQUNFLGNBdEJJO0VBdUJKLDRCQXJCUTtBQUdkO0FBdUJFO0VBQ0UsVUFBQTtBQXJCSjtBQXNCSTtFQUZGO0lBR0ksVUFBQTtFQW5CSjtBQUNGO0FBdUJFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBckJKO0FBd0JFO0VBaENBLFdBQUE7RUFDQSxtQkFaYTtFQWFiLGdCQVBTO0VBUVQsNEJBVlk7QUFxQmQ7QUFzQkU7RUFDRSxVQUFBO0FBcEJKO0FBdUJFO0VBQ0UsK0RBN0NVO0FBd0JkO0FBd0JFO0VBQ0UsNEJBcERVO0FBOEJkO0FBcUJFO0VBQ0UsNEJBcERVO0FBOEJkO0FBMEJFO0VBQ0UsYUFBQTtBQXhCSjtBQTJCRTtFQUNFLDRCQTdEVTtBQW9DZDtBQXdCRTtFQUNFLDRCQTdEVTtBQW9DZDtBQTZCRTtFQUNFLDRCQWxFVTtFQW1FVixjQXJFTTtBQTBDVjtBQThCRTtFQUNFLDRCQXZFVTtFQXdFVixZQUFBO0VBSUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVFQUFBO0FBL0JKO0FBb0JJO0VBSEY7SUFJSSxZQUFBO0VBakJKO0FBQ0Y7QUE0Qkk7RUFDRSxlQUFBO0FBMUJOO0FBZ0NFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBOUJKIiwiZmlsZSI6InNyYy9hcHAvcGF0aHMvYWRpY2lvbmFyL2FkaWNpb25hci1wcm9kdXRvL2FkaWNpb25hci1wcm9kdXRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWJ1dHRvbjogI0U3QUI5QTtcclxuJGNvbG9yLWJnOiAjRURFOUQ1O1xyXG4kY29sb3ItMjogI0RGNzg1NztcclxuJGNvbG9yLTM6ICM2MTcxNDM7XHJcbiRmb250LXJvYm90bzogJ3JvYm90bycsIHNlcmlmO1xyXG4kZm9udC1iYWJlOiAnUmFqZGhhbmknLCBzYW5zLXNlcmlmO1xyXG4kZm9udC03MDA6IDcwMDtcclxuJGNvbG9yLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmVjZDIgMCUsICNmY2I2OWYgMTAwJSk7XHJcblxyXG5AbWl4aW4gYm90YW8oKSB7XHJcblxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1idXR0b247XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LTcwMDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG59XHJcblxyXG5cclxuLmNvbnRhdG8tYmcge1xyXG4gIC5oMS1iZyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgLmgxLXJlZ2lzdHJvIHtcclxuICAgICAgY29sb3I6ICRjb2xvci0yO1xyXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kaXYtaW5wdXQge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9iYWNrZ3JvdW5kOiAkY29sb3ItYmc7XHJcbiAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgQGluY2x1ZGUgYm90YW9cclxuICB9XHJcblxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWhvdmVyO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcblxyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcblxyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAgIGNvbG9yOiAkY29sb3ItMjtcclxuICB9XHJcblxyXG4gIC5pbWctbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcbiAgICBhc3BlY3QtcmF0aW86IDE2Lzk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIGN1cnJlbnRDb2xvcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgIC5pbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC5pbWctbGFiZWw6aG92ZXIge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"]
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
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/adicionar/adicionar-promocao/adicionar-promocao.component.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/paths/adicionar/adicionar-promocao/adicionar-promocao.component.ts ***!
      \************************************************************************************/

    /*! exports provided: AdicionarPromocaoComponent */

    /***/
    function srcAppPathsAdicionarAdicionarPromocaoAdicionarPromocaoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdicionarPromocaoComponent", function () {
        return AdicionarPromocaoComponent;
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


      var _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/service_produto/produto.service */
      "./src/app/paths/service/service_produto/produto.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AdicionarPromocaoComponent_div_8_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdicionarPromocaoComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdicionarPromocaoComponent_div_8_small_1_Template, 2, 0, "small", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formAddProduto.controls["name"].hasError("required"));
        }
      }

      function AdicionarPromocaoComponent_div_13_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido com n\xFAmeros. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdicionarPromocaoComponent_div_13_small_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser maior que 00,00. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdicionarPromocaoComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdicionarPromocaoComponent_div_13_small_1_Template, 2, 0, "small", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdicionarPromocaoComponent_div_13_small_2_Template, 2, 0, "small", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formAddProduto.controls["price"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formAddProduto.controls["price"].hasError("min"));
        }
      }

      function AdicionarPromocaoComponent_div_18_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdicionarPromocaoComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdicionarPromocaoComponent_div_18_small_1_Template, 2, 0, "small", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formAddProduto.controls["name"].hasError("required"));
        }
      }

      function AdicionarPromocaoComponent_span_21_Template(rf, ctx) {
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

      var AdicionarPromocaoComponent =
      /** @class */
      function () {
        var AdicionarPromocaoComponent = /*#__PURE__*/function () {
          function AdicionarPromocaoComponent(fb, produtoService, router, currency) {
            _classCallCheck(this, AdicionarPromocaoComponent);

            this.fb = fb;
            this.produtoService = produtoService;
            this.router = router;
            this.currency = currency;
            this.fotoSrc = '';
            this.mostrarTexto = true;
          }

          _createClass(AdicionarPromocaoComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.formAddProduto = this.fb.group({
                name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                imageName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
                ingredients: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              });
              this.formatPrice();
            }
          }, {
            key: "formatPrice",
            value: function formatPrice() {
              var _this13 = this;

              this.formAddProduto.valueChanges.subscribe(function (form) {
                if (form.price) {
                  _this13.formAddProduto.patchValue({
                    price: _this13.currency.transform(form.price.toString().replace(/\D/g, '').replace(/^0/, ''), 'BRL', 'symbol', '1.0-0')
                  }, {
                    emitEvent: false
                  });
                }
              });
            }
          }, {
            key: "imagem",
            value: function imagem(event) {
              var _this14 = this;

              this.span = document.getElementById('span_imagem');
              var inputTarget = event.target;
              var file = inputTarget.files[0];

              if (file) {
                var reader = new FileReader();
                reader.addEventListener('load', function (e) {
                  var readerTarget = e.target; // this.formAddProduto.value.imagem = String(readerTarget.result);

                  _this14.span.style.border = 'none';
                  _this14.span.style.background = 'none';
                  _this14.mostrarTexto = false;
                  _this14.fotoSrc = String(readerTarget.result);
                  _this14.formAddProduto.value.imageName = String(readerTarget.result);
                });
                reader.readAsDataURL(file);
              }
            }
          }, {
            key: "addPromocao",
            value: function addPromocao() {
              var _this15 = this;

              if (this.formAddProduto.dirty && this.formAddProduto.valid) {
                this.promocao = Object.assign({}, this.promocao, this.formAddProduto.value);
                this.promocao.price = Number(this.formAddProduto.value.price.replace(/[^0-9]/g, ''));
                console.log(this.promocao);
                this.produtoService.postPromocoes(this.promocao).subscribe(function (res) {
                  alert('enviado com sucesso!');

                  _this15.router.navigate(['promocoes']);
                });
                console.log('promoção adicionada');
              } else {
                alert('preencha o formulario!');
              }
            }
          }]);

          return AdicionarPromocaoComponent;
        }();

        AdicionarPromocaoComponent.ɵfac = function AdicionarPromocaoComponent_Factory(t) {
          return new (t || AdicionarPromocaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]));
        };

        AdicionarPromocaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AdicionarPromocaoComponent,
          selectors: [["app-adicionar-promocao"]],
          decls: 28,
          vars: 34,
          consts: [[1, "contato-bg", "p-5", "rounded", "d-grid", 3, "formGroup"], [1, "mx-auto", "d-grid", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], [1, "mb-3", "d-grid", "mx-auto", "mb-5", "div-input"], ["for", "produto", 1, "form-label"], ["type", "text", "id", "produto", "placeholder", "nome do produto", "formControlName", "name", 1, "form-control", 3, "ngClass"], [4, "ngIf"], ["for", "preco", 1, "form-label"], ["type", "text", "id", "preco", "placeholder", "R$ 00,00", "formControlName", "price", 1, "form-control", 3, "ngClass"], ["for", "texto", 1, "form-label"], ["id", "texto", "placeholder", "digite o detalhe...", "formControlName", "ingredients", 1, "form-control", 3, "ngClass"], [1, "mb-3", "mx-auto"], ["for", "formFile", "id", "span_imagem", 1, "form-label", "img-label"], [1, "img", 3, "src"], ["type", "file", "accept", "image/*", "id", "formFile", "formControlName", "imageName", 1, "form-control", 3, "change"], [1, "d-lg-flex", "flex-wrap", "mx-auto"], [1, "col-auto", "ms-lg-3"], ["type", "submit", 1, "btn", "mb-3", 3, "click"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]],
          template: function AdicionarPromocaoComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Adicionar promo\xE7\xE3o");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "nome do produto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdicionarPromocaoComponent_div_8_Template, 2, 1, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "pre\xE7o ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdicionarPromocaoComponent_div_13_Template, 3, 2, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "detalhes");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "textarea", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AdicionarPromocaoComponent_div_18_Template, 2, 1, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AdicionarPromocaoComponent_span_21_Template, 2, 0, "span", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdicionarPromocaoComponent_Template_input_change_23_listener($event) {
                return ctx.imagem($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdicionarPromocaoComponent_Template_button_click_26_listener() {
                return ctx.addPromocao();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Adicionar Promo\xE7\xE3o ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formAddProduto);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["name"].valid)("invalid", ctx.formAddProduto.controls["name"].invalid && (ctx.formAddProduto.controls["name"].touched || ctx.formAddProduto.controls["name"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c0, ctx.formAddProduto.controls["name"].invalid && (ctx.formAddProduto.controls["name"].touched || ctx.formAddProduto.controls["name"].dirty), ctx.formAddProduto.controls["name"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["name"].invalid && (ctx.formAddProduto.controls["name"].touched || ctx.formAddProduto.controls["name"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["price"].valid)("invalid", ctx.formAddProduto.controls["price"].invalid && (ctx.formAddProduto.controls["price"].touched || ctx.formAddProduto.controls["price"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](28, _c0, ctx.formAddProduto.controls["price"].invalid && (ctx.formAddProduto.controls["price"].touched || ctx.formAddProduto.controls["price"].dirty), ctx.formAddProduto.controls["price"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["price"].invalid && (ctx.formAddProduto.controls["price"].touched || ctx.formAddProduto.controls["price"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["ingredients"].valid)("invalid", ctx.formAddProduto.controls["ingredients"].invalid && (ctx.formAddProduto.controls["ingredients"].touched || ctx.formAddProduto.controls["ingredients"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](31, _c0, ctx.formAddProduto.controls["ingredients"].invalid && (ctx.formAddProduto.controls["ingredients"].touched || ctx.formAddProduto.controls["ingredients"].dirty), ctx.formAddProduto.controls["ingredients"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["ingredients"].invalid && (ctx.formAddProduto.controls["ingredients"].touched || ctx.formAddProduto.controls["ingredients"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostrarTexto);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.fotoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["imageName"].valid)("invalid", ctx.formAddProduto.controls["imageName"].invalid && (ctx.formAddProduto.controls["imageName"].touched || ctx.formAddProduto.controls["imageName"].dirty));
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
          styles: [".contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 50%;\n}\n.contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-registro[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n  width: 25%;\n}\n@media (max-width: 500px) {\n  .contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .contato-bg[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus, .contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  color: #DF7857;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  width: 400px;\n  aspect-ratio: 16/9;\n  background: #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #aaa;\n  border: 2px dashed currentColor;\n  cursor: pointer;\n  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;\n}\n@media (max-width: 600px) {\n  .contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]:hover {\n  color: #999;\n  background: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvYWRpY2lvbmFyL2FkaWNpb25hci1wcm9tb2Nhby9hZGljaW9uYXItcHJvbW9jYW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJFO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FBbEJKO0FBb0JJO0VBQ0UsY0F0Qkk7RUF1QkosNEJBckJRO0FBR2Q7QUFzQkU7RUFDRSxVQUFBO0FBcEJKO0FBcUJJO0VBRkY7SUFHSSxVQUFBO0VBbEJKO0FBQ0Y7QUFzQkU7RUExQkEsV0FBQTtFQUNBLG1CQVphO0VBYWIsZ0JBUFM7RUFRVCw0QkFWWTtBQWlCZDtBQW1CRTtFQUNFLFVBQUE7QUFqQko7QUFtQkU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFqQko7QUFtQkU7RUFDRSwwQkFBQTtBQWpCSjtBQW9CRTtFQUNFLCtEQTdDVTtBQTJCZDtBQXFCRTtFQUNFLDRCQXBEVTtBQWlDZDtBQWtCRTtFQUNFLDRCQXBEVTtBQWlDZDtBQXVCRTtFQUNFLGFBQUE7QUFyQko7QUF3QkU7RUFDRSw0QkE3RFU7QUF1Q2Q7QUFxQkU7RUFDRSw0QkE3RFU7QUF1Q2Q7QUEwQkU7RUFDRSw0QkFsRVU7RUFtRVYsY0FyRU07QUE2Q1Y7QUE0QkU7RUFDRSw0QkF4RVU7RUF5RVYsWUFBQTtFQUlBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSx1RUFBQTtBQTdCSjtBQWtCSTtFQUhGO0lBSUksWUFBQTtFQWZKO0FBQ0Y7QUEwQkk7RUFDRSxlQUFBO0FBeEJOO0FBNEJFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBMUJKIiwiZmlsZSI6InNyYy9hcHAvcGF0aHMvYWRpY2lvbmFyL2FkaWNpb25hci1wcm9tb2Nhby9hZGljaW9uYXItcHJvbW9jYW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYnV0dG9uOiAjRTdBQjlBO1xyXG4kY29sb3ItYmc6ICNFREU5RDU7XHJcbiRjb2xvci0yOiAjREY3ODU3O1xyXG4kY29sb3ItMzogIzYxNzE0MztcclxuJGZvbnQtcm9ib3RvOiAncm9ib3RvJywgc2VyaWY7XHJcbiRmb250LWJhYmU6ICdSYWpkaGFuaScsIHNhbnMtc2VyaWY7XHJcbiRmb250LTcwMDogNzAwO1xyXG4kY29sb3ItaG92ZXI6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZWNkMiAwJSwgI2ZjYjY5ZiAxMDAlKTtcclxuXHJcbkBtaXhpbiBib3RhbygpIHtcclxuXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWJ1dHRvbjtcclxuICBmb250LXdlaWdodDogJGZvbnQtNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbn1cclxuXHJcblxyXG4uY29udGF0by1iZyB7XHJcbiAgLmgxLWJnIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAuaDEtcmVnaXN0cm8ge1xyXG4gICAgICBjb2xvcjogJGNvbG9yLTI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICAuZGl2LWlucHV0e1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9iYWNrZ3JvdW5kOiAkY29sb3ItYmc7XHJcbiAgYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGJvdGFvXHJcbiAgfVxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIGlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1udW1iZXJdLGlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cyAsdGV4dGFyZWF7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6dGV4dGZpZWxkO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1ob3ZlcjtcclxuICB9XHJcblxyXG4gIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgICBjb2xvcjogJGNvbG9yLTI7XHJcblxyXG4gIH1cclxuXHJcbiAgLmltZy1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICAgIGFzcGVjdC1yYXRpbzogMTYvOTtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6ICNhYWE7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgY3VycmVudENvbG9yO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgLmltZyB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbWctbGFiZWw6aG92ZXIge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"]
        });
        return AdicionarPromocaoComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdicionarPromocaoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-adicionar-promocao',
            templateUrl: './adicionar-promocao.component.html',
            styleUrls: ['./adicionar-promocao.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/alterar/alterar-ingrediente/alterar-ingrediente.component.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/paths/alterar/alterar-ingrediente/alterar-ingrediente.component.ts ***!
      \************************************************************************************/

    /*! exports provided: AlterarIngredienteComponent */

    /***/
    function srcAppPathsAlterarAlterarIngredienteAlterarIngredienteComponentTs(module, __webpack_exports__, __webpack_require__) {
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


      var _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/service_produto/produto.service */
      "./src/app/paths/service/service_produto/produto.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AlterarIngredienteComponent_div_8_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AlterarIngredienteComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlterarIngredienteComponent_div_8_small_1_Template, 2, 0, "small", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formAddProduto.controls["name"].hasError("required"));
        }
      }

      function AlterarIngredienteComponent_div_13_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido com n\xFAmeros. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AlterarIngredienteComponent_div_13_small_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser maior que 00,00. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AlterarIngredienteComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlterarIngredienteComponent_div_13_small_1_Template, 2, 0, "small", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlterarIngredienteComponent_div_13_small_2_Template, 2, 0, "small", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formAddProduto.controls["price"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formAddProduto.controls["price"].hasError("min"));
        }
      }

      function AlterarIngredienteComponent_div_18_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AlterarIngredienteComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlterarIngredienteComponent_div_18_small_1_Template, 2, 0, "small", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formAddProduto.controls["name"].hasError("required"));
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
          function AlterarIngredienteComponent(fb, produtoService, route, router, currency) {
            _classCallCheck(this, AlterarIngredienteComponent);

            this.fb = fb;
            this.produtoService = produtoService;
            this.route = route;
            this.router = router;
            this.currency = currency;
            this.produtos = {
              id: undefined,
              name: '',
              price: undefined,
              imageName: '',
              ingredients: ''
            };
            this.fotoSrc = '';
            this.mostrarTexto = true;
            this.prodName = {
              name: '',
              imageName: '',
              id: undefined
            };
          }

          _createClass(AlterarIngredienteComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this16 = this;

              this.findById();
              this.createForm();
              this.formAddProduto.valueChanges.subscribe(function (form) {
                if (form.price) {
                  _this16.formAddProduto.patchValue({
                    price: _this16.currency.transform(form.price.toString().replace(/\D/g, '').replace(/^0/, ''), 'BRL', 'symbol', '1.0-0')
                  }, {
                    emitEvent: false
                  });
                }
              });
            }
          }, {
            key: "createForm",
            value: function createForm() {
              this.formAddProduto = this.fb.group({
                name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                imageName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
                ingredients: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              });
            }
          }, {
            key: "imagem",
            value: function imagem(event) {
              var _this17 = this;

              var inputTarget = event.target;
              var file = inputTarget.files[0];

              if (file) {
                var reader = new FileReader();
                reader.addEventListener('load', function (e) {
                  var readerTarget = e.target;
                  _this17.mostrarTexto = false;
                  _this17.fotoSrc = String(readerTarget.result);
                  _this17.formAddProduto.value.imageName = String(readerTarget.result);
                });
                reader.readAsDataURL(file);
              }
            }
          }, {
            key: "findById",
            value: function findById() {
              var _this18 = this;

              this.produtos.id = Number(this.route.snapshot.paramMap.get('id'));
              this.prodName.name = this.route.snapshot.paramMap.get('name');
              this.produtoService.getIngredienteById(this.produtos.id).subscribe(function (res) {
                _this18.formAddProduto = _this18.fb.group({
                  name: [res.name],
                  imageName: [res.imageName],
                  price: [res.price],
                  ingredients: [res.ingredients]
                });
                _this18.fotoSrc = res.imageName;
              });
            }
          }, {
            key: "atualizar",
            value: function atualizar() {
              var _this19 = this;

              if (this.formAddProduto.dirty && this.formAddProduto.valid) {
                this.produtos = Object.assign({}, this.produtos, this.formAddProduto.value);
                this.produtoService.putProdutos(this.produtos).subscribe(function (res) {
                  alert('atualizado com sucesso');

                  _this19.router.navigate(['produtos-categorias']);
                }, function (error) {
                  alert('erro no servidor');
                });
              } else {
                alert('altere o valor');
              }
            }
          }]);

          return AlterarIngredienteComponent;
        }();

        AlterarIngredienteComponent.ɵfac = function AlterarIngredienteComponent_Factory(t) {
          return new (t || AlterarIngredienteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]));
        };

        AlterarIngredienteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AlterarIngredienteComponent,
          selectors: [["app-alterar-ingrediente"]],
          decls: 30,
          vars: 33,
          consts: [[1, "contato-bg", "p-5", "rounded", "d-grid", 3, "formGroup"], [1, "mx-auto", "d-grid", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], [1, "mb-3", "d-grid", "mx-auto", "mb-5", "div-input"], ["for", "produto", 1, "form-label"], ["type", "text", "id", "produto", "placeholder", "nome do produto", "formControlName", "name", 1, "form-control", 3, "ngClass"], [4, "ngIf"], ["for", "preco", 1, "form-label"], ["type", "number", "id", "preco", "placeholder", "R$ 00,00", "formControlName", "price", 1, "form-control", 3, "ngClass"], ["for", "texto", 1, "form-label"], ["id", "texto", "placeholder", "digite o detalhe...", "formControlName", "ingredients", 1, "form-control", 3, "ngClass"], [1, "mb-3", "mx-auto"], ["for", "formFile", "id", "span_imagem", 1, "form-label", "img-label"], [1, "img", 3, "src"], ["type", "file", "accept", "image/*", "id", "formFile", "formControlName", "ImageName", 1, "form-control", 3, "change"], [1, "d-lg-flex", "flex-row", "flex-wrap", "mx-auto"], [1, "col-auto", "ms-lg-3"], ["type", "submit", 1, "btn", "mb-3", 3, "click"], [1, "col-auto", "mx-auto"], ["type", "submit", "routerLink", "/promocoes", 1, "btn", "mb-3", "ms-4"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]],
          template: function AlterarIngredienteComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "atualizar promo\xE7\xE3o");

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

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "detalhes");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "textarea", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AlterarIngredienteComponent_div_18_Template, 2, 1, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AlterarIngredienteComponent_Template_input_change_22_listener($event) {
                return ctx.imagem($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlterarIngredienteComponent_Template_button_click_25_listener() {
                return ctx.atualizar();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "atualizar ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "cancelar ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formAddProduto);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["name"].valid)("invalid", ctx.formAddProduto.controls["name"].invalid && (ctx.formAddProduto.controls["name"].touched || ctx.formAddProduto.controls["name"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c0, ctx.formAddProduto.controls["name"].invalid && (ctx.formAddProduto.controls["name"].touched || ctx.formAddProduto.controls["name"].dirty), ctx.formAddProduto.controls["name"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["name"].invalid && (ctx.formAddProduto.controls["name"].touched || ctx.formAddProduto.controls["name"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["price"].valid)("invalid", ctx.formAddProduto.controls["price"].invalid && (ctx.formAddProduto.controls["price"].touched || ctx.formAddProduto.controls["price"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c0, ctx.formAddProduto.controls["price"].invalid && (ctx.formAddProduto.controls["price"].touched || ctx.formAddProduto.controls["price"].dirty), ctx.formAddProduto.controls["price"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["price"].invalid && (ctx.formAddProduto.controls["price"].touched || ctx.formAddProduto.controls["price"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["ingredients"].valid)("invalid", ctx.formAddProduto.controls["ingredients"].invalid && (ctx.formAddProduto.controls["ingredients"].touched || ctx.formAddProduto.controls["ingredients"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](30, _c0, ctx.formAddProduto.controls["ingredients"].invalid && (ctx.formAddProduto.controls["ingredients"].touched || ctx.formAddProduto.controls["ingredients"].dirty), ctx.formAddProduto.controls["ingredients"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["ingredients"].invalid && (ctx.formAddProduto.controls["ingredients"].touched || ctx.formAddProduto.controls["ingredients"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.fotoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["imageName"].valid)("invalid", ctx.formAddProduto.controls["imageName"].invalid && (ctx.formAddProduto.controls["imageName"].touched || ctx.formAddProduto.controls["imageName"].dirty));
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
          styles: [".contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 50%;\n}\n.contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-registro[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n  width: 25%;\n}\n@media (max-width: 500px) {\n  .contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .contato-bg[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus, .contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  color: #DF7857;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  width: 400px;\n  aspect-ratio: 16/9;\n  background: #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 600px) {\n  .contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]:hover {\n  color: #999;\n  background: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvYWx0ZXJhci9hbHRlcmFyLWluZ3JlZGllbnRlL2FsdGVyYXItaW5ncmVkaWVudGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJFO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FBbEJKO0FBb0JJO0VBQ0UsY0F0Qkk7RUF1QkosNEJBckJRO0FBR2Q7QUFzQkU7RUFDRSxVQUFBO0FBcEJKO0FBcUJJO0VBRkY7SUFHSSxVQUFBO0VBbEJKO0FBQ0Y7QUFzQkU7RUExQkEsV0FBQTtFQUNBLG1CQVphO0VBYWIsZ0JBUFM7RUFRVCw0QkFWWTtBQWlCZDtBQW1CRTtFQUNFLFVBQUE7QUFqQko7QUFtQkU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFqQko7QUFtQkU7RUFDRSwwQkFBQTtBQWpCSjtBQW9CRTtFQUNFLCtEQTdDVTtBQTJCZDtBQXFCRTtFQUNFLDRCQXBEVTtBQWlDZDtBQWtCRTtFQUNFLDRCQXBEVTtBQWlDZDtBQXVCRTtFQUNFLGFBQUE7QUFyQko7QUF3QkU7RUFDRSw0QkE3RFU7QUF1Q2Q7QUFxQkU7RUFDRSw0QkE3RFU7QUF1Q2Q7QUEwQkU7RUFDRSw0QkFsRVU7RUFtRVYsY0FyRU07QUE2Q1Y7QUE0QkU7RUFDRSw0QkF4RVU7RUF5RVYsWUFBQTtFQUlBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQTdCSjtBQXNCSTtFQUhGO0lBSUksWUFBQTtFQW5CSjtBQUNGO0FBMEJJO0VBQ0UsZUFBQTtBQXhCTjtBQTRCRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQTFCSiIsImZpbGUiOiJzcmMvYXBwL3BhdGhzL2FsdGVyYXIvYWx0ZXJhci1pbmdyZWRpZW50ZS9hbHRlcmFyLWluZ3JlZGllbnRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWJ1dHRvbjogI0U3QUI5QTtcclxuJGNvbG9yLWJnOiAjRURFOUQ1O1xyXG4kY29sb3ItMjogI0RGNzg1NztcclxuJGNvbG9yLTM6ICM2MTcxNDM7XHJcbiRmb250LXJvYm90bzogJ3JvYm90bycsIHNlcmlmO1xyXG4kZm9udC1iYWJlOiAnUmFqZGhhbmknLCBzYW5zLXNlcmlmO1xyXG4kZm9udC03MDA6IDcwMDtcclxuJGNvbG9yLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmVjZDIgMCUsICNmY2I2OWYgMTAwJSk7XHJcblxyXG5AbWl4aW4gYm90YW8oKSB7XHJcblxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1idXR0b247XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LTcwMDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG59XHJcblxyXG5cclxuLmNvbnRhdG8tYmcge1xyXG4gIC5oMS1iZyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgLmgxLXJlZ2lzdHJvIHtcclxuICAgICAgY29sb3I6ICRjb2xvci0yO1xyXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICAgIH1cclxuICB9XHJcbiAgLmRpdi1pbnB1dHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vYmFja2dyb3VuZDogJGNvbG9yLWJnO1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBib3Rhb1xyXG4gIH1cclxuICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICBpbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9bnVtYmVyXSxpbnB1dFt0eXBlPW51bWJlcl06Zm9jdXMgLHRleHRhcmVhe1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItaG92ZXI7XHJcbiAgfVxyXG5cclxuICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuXHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPWZpbGVdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuXHJcbiAgfVxyXG5cclxuICBsYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gICAgY29sb3I6ICRjb2xvci0yO1xyXG5cclxuICB9XHJcblxyXG4gIC5pbWctbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcbiAgICBhc3BlY3QtcmF0aW86IDE2Lzk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAuaW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmltZy1sYWJlbDpob3ZlciB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"]
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
            type: _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/alterar/alterar-produto/alterar-produto.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/paths/alterar/alterar-produto/alterar-produto.component.ts ***!
      \****************************************************************************/

    /*! exports provided: AlterarProdutoComponent */

    /***/
    function srcAppPathsAlterarAlterarProdutoAlterarProdutoComponentTs(module, __webpack_exports__, __webpack_require__) {
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


      var _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/service_produto/produto.service */
      "./src/app/paths/service/service_produto/produto.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AlterarProdutoComponent_div_8_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AlterarProdutoComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlterarProdutoComponent_div_8_small_1_Template, 2, 0, "small", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formAddProduto.controls["name"].hasError("required"));
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
          function AlterarProdutoComponent(fb, produtoService, route, router) {
            _classCallCheck(this, AlterarProdutoComponent);

            this.fb = fb;
            this.produtoService = produtoService;
            this.route = route;
            this.router = router;
            this.produto = {
              id: undefined,
              name: '',
              imageName: ''
            };
            this.fotoSrc = '';
          }

          _createClass(AlterarProdutoComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.createForm();
              this.findById();
            }
          }, {
            key: "createForm",
            value: function createForm() {
              this.formAddProduto = this.fb.group({
                name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                imagemName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              });
            }
          }, {
            key: "imagem",
            value: function imagem(event) {
              var _this20 = this;

              var inputTarget = event.target;
              var file = inputTarget.files[0];

              if (file) {
                var reader = new FileReader();
                reader.addEventListener('load', function (e) {
                  var readerTarget = e.target;
                  _this20.fotoSrc = String(readerTarget.result);
                  _this20.formAddProduto.value.imageName = String(readerTarget.result);
                });
                reader.readAsDataURL(file);
              }
            }
          }, {
            key: "findById",
            value: function findById() {
              var _this21 = this;

              this.produto.id = Number(this.route.snapshot.paramMap.get('id'));
              this.produtoService.getProdutoById(this.produto.id).subscribe(function (res) {
                _this21.formAddProduto = _this21.fb.group({
                  name: [res.name],
                  imageName: [res.imageName]
                });
                _this21.fotoSrc = res.imageName;
              });
            }
          }, {
            key: "atualizar",
            value: function atualizar() {
              var _this22 = this;

              if (this.formAddProduto.dirty && this.formAddProduto.valid) {
                this.produto = Object.assign({}, this.produto, this.formAddProduto.value);
                this.produtoService.putProdutosLista(this.produto).subscribe(function (res) {
                  alert('atualizado com sucesso');

                  _this22.router.navigate(['produtos-categorias']);
                }, function (error) {
                  alert('erro no servidor');
                });
              } else {
                alert('altere o valor');
              }
            }
          }]);

          return AlterarProdutoComponent;
        }();

        AlterarProdutoComponent.ɵfac = function AlterarProdutoComponent_Factory(t) {
          return new (t || AlterarProdutoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
        };

        AlterarProdutoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AlterarProdutoComponent,
          selectors: [["app-alterar-produto"]],
          decls: 20,
          vars: 15,
          consts: [[1, "contato-bg", "p-5", "rounded", "d-grid", 3, "formGroup"], [1, "mx-auto", "d-grid", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], [1, "mb-3", "d-grid", "mx-auto", "mb-5", "div-input"], ["for", "email", 1, "form-label"], ["type", "text", "id", "email", "placeholder", "Digite um nome...", "formControlName", "name", 1, "form-control", 3, "ngClass"], [4, "ngIf"], [1, "mb-3", "mx-auto"], ["for", "formFile", "id", "span_imagem", 1, "form-label", "img-label"], [1, "img", 3, "src"], ["type", "file", "accept", "image/*", "id", "formFile", "formControlName", "ImageName", 1, "form-control", 3, "change"], [1, "d-lg-flex", "flex-row", "flex-wrap", "mx-auto"], [1, "col-auto", "mx-auto"], ["type", "submit", 1, "btn", "mb-3", "ms-4", 3, "click"], ["type", "submit", "routerLink", "/produtos-categorias", 1, "btn", "mb-3", "ms-4"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]],
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

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AlterarProdutoComponent_Template_input_change_12_listener($event) {
                return ctx.imagem($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlterarProdutoComponent_Template_button_click_15_listener() {
                return ctx.atualizar();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Atualizar ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "cancelar ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formAddProduto);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["name"].valid)("invalid", ctx.formAddProduto.controls["name"].invalid && (ctx.formAddProduto.controls["name"].touched || ctx.formAddProduto.controls["name"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c0, ctx.formAddProduto.controls["name"].invalid && (ctx.formAddProduto.controls["name"].touched || ctx.formAddProduto.controls["name"].dirty), ctx.formAddProduto.controls["name"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["name"].invalid && (ctx.formAddProduto.controls["name"].touched || ctx.formAddProduto.controls["name"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.fotoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["imageName"].valid)("invalid", ctx.formAddProduto.controls["imageName"].invalid && (ctx.formAddProduto.controls["imageName"].touched || ctx.formAddProduto.controls["imageName"].dirty));
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
          styles: [".contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 50%;\n}\n.contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-registro[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n  width: 25%;\n}\n@media (max-width: 500px) {\n  .contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  color: #DF7857;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  width: 400px;\n  aspect-ratio: 16/9;\n  background: #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 600px) {\n  .contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]:hover {\n  color: #999;\n  background: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvYWx0ZXJhci9hbHRlcmFyLXByb2R1dG8vYWx0ZXJhci1wcm9kdXRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CRTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtBQWxCSjtBQW9CSTtFQUNFLGNBdEJJO0VBdUJKLDRCQXJCUTtBQUdkO0FBdUJFO0VBQ0UsVUFBQTtBQXJCSjtBQXNCSTtFQUZGO0lBR0ksVUFBQTtFQW5CSjtBQUNGO0FBdUJFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBckJKO0FBd0JFO0VBaENBLFdBQUE7RUFDQSxtQkFaYTtFQWFiLGdCQVBTO0VBUVQsNEJBVlk7QUFxQmQ7QUFzQkU7RUFDRSxVQUFBO0FBcEJKO0FBdUJFO0VBQ0UsK0RBN0NVO0FBd0JkO0FBd0JFO0VBQ0UsNEJBcERVO0FBOEJkO0FBcUJFO0VBQ0UsNEJBcERVO0FBOEJkO0FBMEJFO0VBQ0UsYUFBQTtBQXhCSjtBQTJCRTtFQUNFLDRCQTdEVTtBQW9DZDtBQXdCRTtFQUNFLDRCQTdEVTtBQW9DZDtBQTZCRTtFQUNFLDRCQWxFVTtFQW1FVixjQXJFTTtBQTBDVjtBQThCRTtFQUNFLDRCQXZFVTtFQXdFVixZQUFBO0VBSUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBL0JKO0FBd0JJO0VBSEY7SUFJSSxZQUFBO0VBckJKO0FBQ0Y7QUE0Qkk7RUFDRSxlQUFBO0FBMUJOO0FBZ0NFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBOUJKIiwiZmlsZSI6InNyYy9hcHAvcGF0aHMvYWx0ZXJhci9hbHRlcmFyLXByb2R1dG8vYWx0ZXJhci1wcm9kdXRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWJ1dHRvbjogI0U3QUI5QTtcclxuJGNvbG9yLWJnOiAjRURFOUQ1O1xyXG4kY29sb3ItMjogI0RGNzg1NztcclxuJGNvbG9yLTM6ICM2MTcxNDM7XHJcbiRmb250LXJvYm90bzogJ3JvYm90bycsIHNlcmlmO1xyXG4kZm9udC1iYWJlOiAnUmFqZGhhbmknLCBzYW5zLXNlcmlmO1xyXG4kZm9udC03MDA6IDcwMDtcclxuJGNvbG9yLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmVjZDIgMCUsICNmY2I2OWYgMTAwJSk7XHJcblxyXG5AbWl4aW4gYm90YW8oKSB7XHJcblxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1idXR0b247XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LTcwMDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG59XHJcblxyXG5cclxuLmNvbnRhdG8tYmcge1xyXG4gIC5oMS1iZyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgLmgxLXJlZ2lzdHJvIHtcclxuICAgICAgY29sb3I6ICRjb2xvci0yO1xyXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kaXYtaW5wdXQge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9iYWNrZ3JvdW5kOiAkY29sb3ItYmc7XHJcbiAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgQGluY2x1ZGUgYm90YW9cclxuICB9XHJcblxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWhvdmVyO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcblxyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcblxyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAgIGNvbG9yOiAkY29sb3ItMjtcclxuICB9XHJcblxyXG4gIC5pbWctbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcbiAgICBhc3BlY3QtcmF0aW86IDE2Lzk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAuaW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAuaW1nLWxhYmVsOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"]
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
            type: _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/alterar/alterar-promocao/alterar-promocao.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/paths/alterar/alterar-promocao/alterar-promocao.component.ts ***!
      \******************************************************************************/

    /*! exports provided: AlterarPromocaoComponent */

    /***/
    function srcAppPathsAlterarAlterarPromocaoAlterarPromocaoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlterarPromocaoComponent", function () {
        return AlterarPromocaoComponent;
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


      var _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/service_produto/produto.service */
      "./src/app/paths/service/service_produto/produto.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AlterarPromocaoComponent_div_8_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AlterarPromocaoComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlterarPromocaoComponent_div_8_small_1_Template, 2, 0, "small", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formAddProduto.controls["name"].hasError("required"));
        }
      }

      function AlterarPromocaoComponent_div_13_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido com n\xFAmeros. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AlterarPromocaoComponent_div_13_small_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser maior que 00,00. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AlterarPromocaoComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlterarPromocaoComponent_div_13_small_1_Template, 2, 0, "small", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlterarPromocaoComponent_div_13_small_2_Template, 2, 0, "small", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formAddProduto.controls["price"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formAddProduto.controls["price"].hasError("min"));
        }
      }

      function AlterarPromocaoComponent_div_18_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AlterarPromocaoComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlterarPromocaoComponent_div_18_small_1_Template, 2, 0, "small", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formAddProduto.controls["name"].hasError("required"));
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "is-invalid": a0,
          "is-valid": a1
        };
      };

      var AlterarPromocaoComponent =
      /** @class */
      function () {
        var AlterarPromocaoComponent = /*#__PURE__*/function () {
          function AlterarPromocaoComponent(fb, produtoService, route, router, currency) {
            _classCallCheck(this, AlterarPromocaoComponent);

            this.fb = fb;
            this.produtoService = produtoService;
            this.route = route;
            this.router = router;
            this.currency = currency;
            this.promocao = {
              id: undefined,
              name: '',
              price: undefined,
              imageName: '',
              ingredients: ''
            };
            this.fotoSrc = '';
            this.mostrarTexto = true;
          }

          _createClass(AlterarPromocaoComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this23 = this;

              this.findById();
              this.createForm();
              this.formAddProduto.valueChanges.subscribe(function (form) {
                if (form.price) {
                  _this23.formAddProduto.patchValue({
                    price: _this23.currency.transform(form.price.toString().replace(/\D/g, '').replace(/^0/, ''), 'BRL', 'symbol', '1.0-0')
                  }, {
                    emitEvent: false
                  });
                }
              });
            }
          }, {
            key: "createForm",
            value: function createForm() {
              this.formAddProduto = this.fb.group({
                name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                imageName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
                ingredients: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              });
            }
          }, {
            key: "imagem",
            value: function imagem(event) {
              var _this24 = this;

              this.span = document.getElementById('span_imagem');
              var inputTarget = event.target;
              var file = inputTarget.files[0];

              if (file) {
                var reader = new FileReader();
                reader.addEventListener('load', function (e) {
                  var readerTarget = e.target; // this.formAddProduto.value.imagem = String(readerTarget.result);

                  _this24.span.style.border = 'none';
                  _this24.span.style.background = 'none';
                  _this24.mostrarTexto = false;
                  _this24.fotoSrc = String(readerTarget.result);
                  _this24.formAddProduto.value.imageName = String(readerTarget.result);
                });
                reader.readAsDataURL(file);
              }
            }
          }, {
            key: "findById",
            value: function findById() {
              var _this25 = this;

              this.promocao.id = Number(this.route.snapshot.paramMap.get('id'));
              this.produtoService.getPromocaoById(this.promocao.id).subscribe(function (res) {
                _this25.formAddProduto = _this25.fb.group({
                  name: [res.name],
                  imageName: [res.imageName],
                  price: [res.price],
                  ingredients: [res.ingredients]
                });
                console.log(_this25.formAddProduto.value);
                _this25.fotoSrc = res.imageName;
              });
            }
          }, {
            key: "atualizar",
            value: function atualizar() {
              var _this26 = this;

              if (this.formAddProduto.dirty && this.formAddProduto.valid) {
                this.promocao = Object.assign({}, this.promocao, this.formAddProduto.value);
                this.produtoService.putPromocoes(this.promocao).subscribe(function (res) {
                  alert('atualizado com sucesso');

                  _this26.router.navigate(['promocoes']);
                }, function (error) {
                  alert('erro no servidor');
                });
              } else {
                alert('altere o valor');
              }
            }
          }]);

          return AlterarPromocaoComponent;
        }();

        AlterarPromocaoComponent.ɵfac = function AlterarPromocaoComponent_Factory(t) {
          return new (t || AlterarPromocaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]));
        };

        AlterarPromocaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AlterarPromocaoComponent,
          selectors: [["app-alterar-promocao"]],
          decls: 30,
          vars: 33,
          consts: [[1, "contato-bg", "p-5", "rounded", "d-grid", 3, "formGroup"], [1, "mx-auto", "d-grid", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], [1, "mb-3", "d-grid", "mx-auto", "mb-5", "div-input"], ["for", "produto", 1, "form-label"], ["type", "text", "id", "produto", "placeholder", "nome do produto", "formControlName", "name", 1, "form-control", 3, "ngClass"], [4, "ngIf"], ["for", "preco", 1, "form-label"], ["type", "number", "id", "preco", "placeholder", "R$ 00,00", "formControlName", "price", 1, "form-control", 3, "ngClass"], ["for", "texto", 1, "form-label"], ["id", "texto", "placeholder", "digite o detalhe...", "formControlName", "ingredients", 1, "form-control", 3, "ngClass"], [1, "mb-3", "mx-auto"], ["for", "formFile", "id", "span_imagem", 1, "form-label", "img-label"], [1, "img", 3, "src"], ["type", "file", "accept", "image/*", "id", "formFile", "formControlName", "ImageName", 1, "form-control", 3, "change"], [1, "d-lg-flex", "flex-row", "flex-wrap", "mx-auto"], [1, "col-auto", "ms-lg-3"], ["type", "submit", 1, "btn", "mb-3", 3, "click"], [1, "col-auto", "mx-auto"], ["type", "submit", "routerLink", "/promocoes", 1, "btn", "mb-3", "ms-4"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]],
          template: function AlterarPromocaoComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "atualizar promo\xE7\xE3o");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "nome do produto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AlterarPromocaoComponent_div_8_Template, 2, 1, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "pre\xE7o ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AlterarPromocaoComponent_div_13_Template, 3, 2, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "detalhes");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "textarea", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AlterarPromocaoComponent_div_18_Template, 2, 1, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AlterarPromocaoComponent_Template_input_change_22_listener($event) {
                return ctx.imagem($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlterarPromocaoComponent_Template_button_click_25_listener() {
                return ctx.atualizar();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "atualizar ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "cancelar ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formAddProduto);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["name"].valid)("invalid", ctx.formAddProduto.controls["name"].invalid && (ctx.formAddProduto.controls["name"].touched || ctx.formAddProduto.controls["name"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c0, ctx.formAddProduto.controls["name"].invalid && (ctx.formAddProduto.controls["name"].touched || ctx.formAddProduto.controls["name"].dirty), ctx.formAddProduto.controls["name"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["name"].invalid && (ctx.formAddProduto.controls["name"].touched || ctx.formAddProduto.controls["name"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["price"].valid)("invalid", ctx.formAddProduto.controls["price"].invalid && (ctx.formAddProduto.controls["price"].touched || ctx.formAddProduto.controls["price"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c0, ctx.formAddProduto.controls["price"].invalid && (ctx.formAddProduto.controls["price"].touched || ctx.formAddProduto.controls["price"].dirty), ctx.formAddProduto.controls["price"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["price"].invalid && (ctx.formAddProduto.controls["price"].touched || ctx.formAddProduto.controls["price"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["ingredients"].valid)("invalid", ctx.formAddProduto.controls["ingredients"].invalid && (ctx.formAddProduto.controls["ingredients"].touched || ctx.formAddProduto.controls["ingredients"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](30, _c0, ctx.formAddProduto.controls["ingredients"].invalid && (ctx.formAddProduto.controls["ingredients"].touched || ctx.formAddProduto.controls["ingredients"].dirty), ctx.formAddProduto.controls["ingredients"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["ingredients"].invalid && (ctx.formAddProduto.controls["ingredients"].touched || ctx.formAddProduto.controls["ingredients"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.fotoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["imageName"].valid)("invalid", ctx.formAddProduto.controls["imageName"].invalid && (ctx.formAddProduto.controls["imageName"].touched || ctx.formAddProduto.controls["imageName"].dirty));
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
          styles: [".contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 50%;\n}\n.contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-registro[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n  width: 25%;\n}\n@media (max-width: 500px) {\n  .contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .contato-bg[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus, .contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  color: #DF7857;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  width: 400px;\n  aspect-ratio: 16/9;\n  background: #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 600px) {\n  .contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]:hover {\n  color: #999;\n  background: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvYWx0ZXJhci9hbHRlcmFyLXByb21vY2FvL2FsdGVyYXItcHJvbW9jYW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJFO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FBbEJKO0FBb0JJO0VBQ0UsY0F0Qkk7RUF1QkosNEJBckJRO0FBR2Q7QUFzQkU7RUFDRSxVQUFBO0FBcEJKO0FBcUJJO0VBRkY7SUFHSSxVQUFBO0VBbEJKO0FBQ0Y7QUFzQkU7RUExQkEsV0FBQTtFQUNBLG1CQVphO0VBYWIsZ0JBUFM7RUFRVCw0QkFWWTtBQWlCZDtBQW1CRTtFQUNFLFVBQUE7QUFqQko7QUFtQkU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFqQko7QUFtQkU7RUFDRSwwQkFBQTtBQWpCSjtBQW9CRTtFQUNFLCtEQTdDVTtBQTJCZDtBQXFCRTtFQUNFLDRCQXBEVTtBQWlDZDtBQWtCRTtFQUNFLDRCQXBEVTtBQWlDZDtBQXVCRTtFQUNFLGFBQUE7QUFyQko7QUF3QkU7RUFDRSw0QkE3RFU7QUF1Q2Q7QUFxQkU7RUFDRSw0QkE3RFU7QUF1Q2Q7QUEwQkU7RUFDRSw0QkFsRVU7RUFtRVYsY0FyRU07QUE2Q1Y7QUE0QkU7RUFDRSw0QkF4RVU7RUF5RVYsWUFBQTtFQUlBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQTdCSjtBQXNCSTtFQUhGO0lBSUksWUFBQTtFQW5CSjtBQUNGO0FBMEJJO0VBQ0UsZUFBQTtBQXhCTjtBQTRCRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQTFCSiIsImZpbGUiOiJzcmMvYXBwL3BhdGhzL2FsdGVyYXIvYWx0ZXJhci1wcm9tb2Nhby9hbHRlcmFyLXByb21vY2FvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWJ1dHRvbjogI0U3QUI5QTtcclxuJGNvbG9yLWJnOiAjRURFOUQ1O1xyXG4kY29sb3ItMjogI0RGNzg1NztcclxuJGNvbG9yLTM6ICM2MTcxNDM7XHJcbiRmb250LXJvYm90bzogJ3JvYm90bycsIHNlcmlmO1xyXG4kZm9udC1iYWJlOiAnUmFqZGhhbmknLCBzYW5zLXNlcmlmO1xyXG4kZm9udC03MDA6IDcwMDtcclxuJGNvbG9yLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmVjZDIgMCUsICNmY2I2OWYgMTAwJSk7XHJcblxyXG5AbWl4aW4gYm90YW8oKSB7XHJcblxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1idXR0b247XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LTcwMDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG59XHJcblxyXG5cclxuLmNvbnRhdG8tYmcge1xyXG4gIC5oMS1iZyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgLmgxLXJlZ2lzdHJvIHtcclxuICAgICAgY29sb3I6ICRjb2xvci0yO1xyXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICAgIH1cclxuICB9XHJcbiAgLmRpdi1pbnB1dHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vYmFja2dyb3VuZDogJGNvbG9yLWJnO1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBib3Rhb1xyXG4gIH1cclxuICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICBpbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9bnVtYmVyXSxpbnB1dFt0eXBlPW51bWJlcl06Zm9jdXMgLHRleHRhcmVhe1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItaG92ZXI7XHJcbiAgfVxyXG5cclxuICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuXHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPWZpbGVdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuXHJcbiAgfVxyXG5cclxuICBsYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gICAgY29sb3I6ICRjb2xvci0yO1xyXG5cclxuICB9XHJcblxyXG4gIC5pbWctbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcbiAgICBhc3BlY3QtcmF0aW86IDE2Lzk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAuaW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmltZy1sYWJlbDpob3ZlciB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"]
        });
        return AlterarPromocaoComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlterarPromocaoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-alterar-promocao',
            templateUrl: './alterar-promocao.component.html',
            styleUrls: ['./alterar-promocao.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/deletar/delete-ingrediente/delete-ingrediente.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/paths/deletar/delete-ingrediente/delete-ingrediente.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: DeleteIngredienteComponent */

    /***/
    function srcAppPathsDeletarDeleteIngredienteDeleteIngredienteComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteIngredienteComponent", function () {
        return DeleteIngredienteComponent;
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


      var _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/service_produto/produto.service */
      "./src/app/paths/service/service_produto/produto.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var DeleteIngredienteComponent =
      /** @class */
      function () {
        var DeleteIngredienteComponent = /*#__PURE__*/function () {
          function DeleteIngredienteComponent(fb, produtoService, route, router) {
            _classCallCheck(this, DeleteIngredienteComponent);

            this.fb = fb;
            this.produtoService = produtoService;
            this.route = route;
            this.router = router;
            this.produto = {
              id: undefined,
              name: '',
              price: undefined,
              ingredients: '',
              imageName: ''
            };
            this.fotoSrc = '';
          }

          _createClass(DeleteIngredienteComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.produto.id = Number(this.route.snapshot.paramMap.get('id'));
              this.findById();
            }
          }, {
            key: "findById",
            value: function findById() {
              var _this27 = this;

              this.produtoService.getIngredienteById(this.produto.id).subscribe(function (res) {
                _this27.produto = res;
                console.log(_this27.produto);
                _this27.name = _this27.produto.name;
                _this27.price = _this27.produto.price;
                _this27.ingredients = _this27.produto.ingredients;
                _this27.fotoSrc = _this27.produto.imageName;
              });
            }
          }, {
            key: "deletar",
            value: function deletar() {
              var _this28 = this;

              this.produtoService.deleteIngredientes(this.produto.id).subscribe(function (res) {
                alert('deletado com sucesso');

                _this28.router.navigate(['produtos-categorias']);
              });
            }
          }]);

          return DeleteIngredienteComponent;
        }();

        DeleteIngredienteComponent.ɵfac = function DeleteIngredienteComponent_Factory(t) {
          return new (t || DeleteIngredienteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
        };

        DeleteIngredienteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: DeleteIngredienteComponent,
          selectors: [["app-delete-ingrediente"]],
          decls: 27,
          vars: 4,
          consts: [[1, "contato-bg", "p-5", "rounded", "d-grid"], [1, "mx-auto", "d-grid", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], [1, "mb-3", "d-grid", "mx-auto", "mb-5", "div-input"], ["for", "produto", 1, "form-label"], ["type", "text", "id", "produto", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "preco", 1, "form-label"], ["type", "number", "id", "preco", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "texto", 1, "form-label"], ["id", "texto", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "mb-3", "mx-auto"], ["for", "formFile", "id", "span_imagem", 1, "form-label", "img-label"], [1, "img", 3, "src"], ["type", "file", "accept", "image/*", "id", "formFile", "disabled", "", 1, "form-control"], [1, "d-lg-flex", "flex-wrap", "mx-auto"], [1, "col-auto", "ms-lg-3"], ["type", "submit", 1, "btn", "mb-3", 3, "click"], [1, "col-auto", "mx-auto"], ["type", "submit", "routerLink", "/produtos-categorias", 1, "btn", "mb-3", "ms-4"]],
          template: function DeleteIngredienteComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "deletar promocao");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "nome do produto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeleteIngredienteComponent_Template_input_ngModelChange_7_listener($event) {
                return ctx.name = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "pre\xE7o ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeleteIngredienteComponent_Template_input_ngModelChange_11_listener($event) {
                return ctx.price = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ingredientes");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeleteIngredienteComponent_Template_textarea_ngModelChange_15_listener($event) {
                return ctx.ingredients = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteIngredienteComponent_Template_button_click_22_listener() {
                return ctx.deletar();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "deletar ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "cancelar ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.price);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ingredients);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.fotoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
          styles: [".contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 50%;\n}\n.contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-registro[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n  width: 25%;\n}\n@media (max-width: 500px) {\n  .contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .contato-bg[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus, .contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  color: #DF7857;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  width: 400px;\n  aspect-ratio: 16/9;\n  background: #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 600px) {\n  .contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]:hover {\n  color: #999;\n  background: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvZGVsZXRhci9kZWxldGUtaW5ncmVkaWVudGUvZGVsZXRlLWluZ3JlZGllbnRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CRTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtBQWxCSjtBQW9CSTtFQUNFLGNBdEJJO0VBdUJKLDRCQXJCUTtBQUdkO0FBc0JFO0VBQ0UsVUFBQTtBQXBCSjtBQXFCSTtFQUZGO0lBR0ksVUFBQTtFQWxCSjtBQUNGO0FBc0JFO0VBMUJBLFdBQUE7RUFDQSxtQkFaYTtFQWFiLGdCQVBTO0VBUVQsNEJBVlk7QUFpQmQ7QUFtQkU7RUFDRSxVQUFBO0FBakJKO0FBbUJFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBakJKO0FBbUJFO0VBQ0UsMEJBQUE7QUFqQko7QUFvQkU7RUFDRSwrREE3Q1U7QUEyQmQ7QUFxQkU7RUFDRSw0QkFwRFU7QUFpQ2Q7QUFrQkU7RUFDRSw0QkFwRFU7QUFpQ2Q7QUF1QkU7RUFDRSxhQUFBO0FBckJKO0FBd0JFO0VBQ0UsNEJBN0RVO0FBdUNkO0FBcUJFO0VBQ0UsNEJBN0RVO0FBdUNkO0FBMEJFO0VBQ0UsNEJBbEVVO0VBbUVWLGNBckVNO0FBNkNWO0FBNEJFO0VBQ0UsNEJBeEVVO0VBeUVWLFlBQUE7RUFJQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE3Qko7QUFzQkk7RUFIRjtJQUlJLFlBQUE7RUFuQko7QUFDRjtBQTBCSTtFQUNFLGVBQUE7QUF4Qk47QUE0QkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUExQkoiLCJmaWxlIjoic3JjL2FwcC9wYXRocy9kZWxldGFyL2RlbGV0ZS1pbmdyZWRpZW50ZS9kZWxldGUtaW5ncmVkaWVudGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYnV0dG9uOiAjRTdBQjlBO1xyXG4kY29sb3ItYmc6ICNFREU5RDU7XHJcbiRjb2xvci0yOiAjREY3ODU3O1xyXG4kY29sb3ItMzogIzYxNzE0MztcclxuJGZvbnQtcm9ib3RvOiAncm9ib3RvJywgc2VyaWY7XHJcbiRmb250LWJhYmU6ICdSYWpkaGFuaScsIHNhbnMtc2VyaWY7XHJcbiRmb250LTcwMDogNzAwO1xyXG4kY29sb3ItaG92ZXI6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZWNkMiAwJSwgI2ZjYjY5ZiAxMDAlKTtcclxuXHJcbkBtaXhpbiBib3RhbygpIHtcclxuXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWJ1dHRvbjtcclxuICBmb250LXdlaWdodDogJGZvbnQtNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbn1cclxuXHJcblxyXG4uY29udGF0by1iZyB7XHJcbiAgLmgxLWJnIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAuaDEtcmVnaXN0cm8ge1xyXG4gICAgICBjb2xvcjogJGNvbG9yLTI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICAuZGl2LWlucHV0e1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9iYWNrZ3JvdW5kOiAkY29sb3ItYmc7XHJcbiAgYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGJvdGFvXHJcbiAgfVxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIGlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1udW1iZXJdLGlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cyAsdGV4dGFyZWF7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6dGV4dGZpZWxkO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1ob3ZlcjtcclxuICB9XHJcblxyXG4gIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgICBjb2xvcjogJGNvbG9yLTI7XHJcblxyXG4gIH1cclxuXHJcbiAgLmltZy1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICAgIGFzcGVjdC1yYXRpbzogMTYvOTtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC5pbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW1nLWxhYmVsOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"]
        });
        return DeleteIngredienteComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteIngredienteComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-delete-ingrediente',
            templateUrl: './delete-ingrediente.component.html',
            styleUrls: ['./delete-ingrediente.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/deletar/delete-produto/delete-produto.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/paths/deletar/delete-produto/delete-produto.component.ts ***!
      \**************************************************************************/

    /*! exports provided: DeleteProdutoComponent */

    /***/
    function srcAppPathsDeletarDeleteProdutoDeleteProdutoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteProdutoComponent", function () {
        return DeleteProdutoComponent;
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


      var _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/service_produto/produto.service */
      "./src/app/paths/service/service_produto/produto.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var DeleteProdutoComponent =
      /** @class */
      function () {
        var DeleteProdutoComponent = /*#__PURE__*/function () {
          function DeleteProdutoComponent(fb, produtoService, route, router) {
            _classCallCheck(this, DeleteProdutoComponent);

            this.fb = fb;
            this.produtoService = produtoService;
            this.route = route;
            this.router = router;
            this.produto = {
              id: undefined,
              name: '',
              imageName: ''
            };
            this.fotoSrc = '';
            this.mostrarTexto = true;
          }

          _createClass(DeleteProdutoComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.produto.id = Number(this.route.snapshot.paramMap.get('id'));
              this.findById();
            }
          }, {
            key: "findById",
            value: function findById() {
              var _this29 = this;

              this.produtoService.getProdutoById(this.produto.id).subscribe(function (res) {
                _this29.produto = res;
                _this29.fotoSrc = _this29.produto.imageName;
                _this29.name = _this29.produto.name;
              });
            }
          }, {
            key: "deletar",
            value: function deletar() {
              var _this30 = this;

              this.produtoService.deleteProdutoLista(this.produto.id).subscribe(function (res) {
                alert('deletado com sucesso');

                _this30.router.navigate(['produtos-categorias']);
              }, function (error) {
                alert('não deletado');
              });
            }
          }]);

          return DeleteProdutoComponent;
        }();

        DeleteProdutoComponent.ɵfac = function DeleteProdutoComponent_Factory(t) {
          return new (t || DeleteProdutoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
        };

        DeleteProdutoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: DeleteProdutoComponent,
          selectors: [["app-delete-produto"]],
          decls: 19,
          vars: 3,
          consts: [[1, "contato-bg", "p-5", "rounded", "d-grid"], [1, "mx-auto", "d-grid", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], [1, "mb-3", "d-grid", "mx-auto", "mb-5", "div-input"], ["for", "email", 1, "form-label"], ["type", "text", "id", "email", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "mb-3", "mx-auto"], ["for", "formFile", 1, "form-label", "img-label"], [1, "img", 3, "src"], ["type", "file", "accept", "image/*", "id", "formFile", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "d-lg-flex", "flex-row", "flex-wrap", "mx-auto"], [1, "col-auto", "mx-auto"], ["type", "submit", 1, "btn", "mb-3", "ms-4", 3, "click"], ["type", "submit", "routerLink", "/produtos-categorias", 1, "btn", "mb-3", "ms-4"]],
          template: function DeleteProdutoComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Deletar Lista de produtos");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "nome do produto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeleteProdutoComponent_Template_input_ngModelChange_7_listener($event) {
                return ctx.name = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeleteProdutoComponent_Template_input_ngModelChange_11_listener($event) {
                return ctx.imageName = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteProdutoComponent_Template_button_click_14_listener() {
                return ctx.deletar();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "deletar ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "cancelar ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.fotoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.imageName);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
          styles: [".contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 50%;\n}\n.contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-registro[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n  width: 25%;\n}\n@media (max-width: 500px) {\n  .contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  color: #DF7857;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  width: 400px;\n  aspect-ratio: 16/9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 600px) {\n  .contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]:hover {\n  color: #999;\n  background: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvZGVsZXRhci9kZWxldGUtcHJvZHV0by9kZWxldGUtcHJvZHV0by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkU7RUFDRSw2QkFBQTtFQUNBLFVBQUE7QUFsQko7QUFvQkk7RUFDRSxjQXRCSTtFQXVCSiw0QkFyQlE7QUFHZDtBQXVCRTtFQUNFLFVBQUE7QUFyQko7QUFzQkk7RUFGRjtJQUdJLFVBQUE7RUFuQko7QUFDRjtBQXVCRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQXJCSjtBQXdCRTtFQWhDQSxXQUFBO0VBQ0EsbUJBWmE7RUFhYixnQkFQUztFQVFULDRCQVZZO0FBcUJkO0FBc0JFO0VBQ0UsVUFBQTtBQXBCSjtBQXVCRTtFQUNFLCtEQTdDVTtBQXdCZDtBQXdCRTtFQUNFLDRCQXBEVTtBQThCZDtBQXFCRTtFQUNFLDRCQXBEVTtBQThCZDtBQTBCRTtFQUNFLGFBQUE7QUF4Qko7QUEyQkU7RUFDRSw0QkE3RFU7QUFvQ2Q7QUF3QkU7RUFDRSw0QkE3RFU7QUFvQ2Q7QUE2QkU7RUFDRSw0QkFsRVU7RUFtRVYsY0FyRU07QUEwQ1Y7QUE4QkU7RUFDRSw0QkF2RVU7RUF3RVYsWUFBQTtFQUlBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUEvQko7QUF5Qkk7RUFIRjtJQUlJLFlBQUE7RUF0Qko7QUFDRjtBQTRCSTtFQUNFLGVBQUE7QUExQk47QUFnQ0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUE5QkoiLCJmaWxlIjoic3JjL2FwcC9wYXRocy9kZWxldGFyL2RlbGV0ZS1wcm9kdXRvL2RlbGV0ZS1wcm9kdXRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWJ1dHRvbjogI0U3QUI5QTtcclxuJGNvbG9yLWJnOiAjRURFOUQ1O1xyXG4kY29sb3ItMjogI0RGNzg1NztcclxuJGNvbG9yLTM6ICM2MTcxNDM7XHJcbiRmb250LXJvYm90bzogJ3JvYm90bycsIHNlcmlmO1xyXG4kZm9udC1iYWJlOiAnUmFqZGhhbmknLCBzYW5zLXNlcmlmO1xyXG4kZm9udC03MDA6IDcwMDtcclxuJGNvbG9yLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmVjZDIgMCUsICNmY2I2OWYgMTAwJSk7XHJcblxyXG5AbWl4aW4gYm90YW8oKSB7XHJcblxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1idXR0b247XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LTcwMDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG59XHJcblxyXG5cclxuLmNvbnRhdG8tYmcge1xyXG4gIC5oMS1iZyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgLmgxLXJlZ2lzdHJvIHtcclxuICAgICAgY29sb3I6ICRjb2xvci0yO1xyXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kaXYtaW5wdXQge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9iYWNrZ3JvdW5kOiAkY29sb3ItYmc7XHJcbiAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgQGluY2x1ZGUgYm90YW9cclxuICB9XHJcblxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWhvdmVyO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcblxyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcblxyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAgIGNvbG9yOiAkY29sb3ItMjtcclxuICB9XHJcblxyXG4gIC5pbWctbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcbiAgICBhc3BlY3QtcmF0aW86IDE2Lzk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC5pbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC5pbWctbGFiZWw6aG92ZXIge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"]
        });
        return DeleteProdutoComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteProdutoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-delete-produto',
            templateUrl: './delete-produto.component.html',
            styleUrls: ['./delete-produto.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/deletar/delete-promocao/delete-promocao.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/paths/deletar/delete-promocao/delete-promocao.component.ts ***!
      \****************************************************************************/

    /*! exports provided: DeletePromocaoComponent */

    /***/
    function srcAppPathsDeletarDeletePromocaoDeletePromocaoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeletePromocaoComponent", function () {
        return DeletePromocaoComponent;
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


      var _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/service_produto/produto.service */
      "./src/app/paths/service/service_produto/produto.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var DeletePromocaoComponent =
      /** @class */
      function () {
        var DeletePromocaoComponent = /*#__PURE__*/function () {
          function DeletePromocaoComponent(fb, produtoService, route, router) {
            _classCallCheck(this, DeletePromocaoComponent);

            this.fb = fb;
            this.produtoService = produtoService;
            this.route = route;
            this.router = router;
            this.produto = {
              id: undefined,
              name: '',
              price: undefined,
              ingredients: '',
              imageName: ''
            };
            this.fotoSrc = '';
          }

          _createClass(DeletePromocaoComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.produto.id = Number(this.route.snapshot.paramMap.get('id'));
              this.findById();
            }
          }, {
            key: "findById",
            value: function findById() {
              var _this31 = this;

              this.produtoService.getPromocaoById(this.produto.id).subscribe(function (res) {
                _this31.produto = res;
                _this31.name = _this31.produto.name;
                _this31.price = _this31.produto.price;
                _this31.ingredients = _this31.produto.ingredients;
                _this31.fotoSrc = _this31.produto.imageName;
              });
            }
          }, {
            key: "deletar",
            value: function deletar() {
              var _this32 = this;

              this.produtoService.deletePromocoes(this.produto.id).subscribe(function (res) {
                alert('deletado');

                _this32.router.navigate(['promocoes']);
              }, function (error) {
                alert('houve um erro no servidor');
              });
            }
          }]);

          return DeletePromocaoComponent;
        }();

        DeletePromocaoComponent.ɵfac = function DeletePromocaoComponent_Factory(t) {
          return new (t || DeletePromocaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
        };

        DeletePromocaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: DeletePromocaoComponent,
          selectors: [["app-delete-promocao"]],
          decls: 27,
          vars: 4,
          consts: [[1, "contato-bg", "p-5", "rounded", "d-grid"], [1, "mx-auto", "d-grid", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], [1, "mb-3", "d-grid", "mx-auto", "mb-5", "div-input"], ["for", "produto", 1, "form-label"], ["type", "text", "id", "produto", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "preco", 1, "form-label"], ["type", "number", "id", "preco", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "texto", 1, "form-label"], ["id", "texto", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "mb-3", "mx-auto"], ["for", "formFile", "id", "span_imagem", 1, "form-label", "img-label"], [1, "img", 3, "src"], ["type", "file", "accept", "image/*", "id", "formFile", "disabled", "", 1, "form-control"], [1, "d-lg-flex", "flex-wrap", "mx-auto"], [1, "col-auto", "ms-lg-3"], ["type", "submit", 1, "btn", "mb-3", 3, "click"], [1, "col-auto", "mx-auto"], ["type", "submit", "routerLink", "/promocoes", 1, "btn", "mb-3", "ms-4"]],
          template: function DeletePromocaoComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "deletar promocao");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "nome do produto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeletePromocaoComponent_Template_input_ngModelChange_7_listener($event) {
                return ctx.name = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "pre\xE7o ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeletePromocaoComponent_Template_input_ngModelChange_11_listener($event) {
                return ctx.price = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ingredientes");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeletePromocaoComponent_Template_textarea_ngModelChange_15_listener($event) {
                return ctx.ingredients = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeletePromocaoComponent_Template_button_click_22_listener() {
                return ctx.deletar();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "deletar ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "cancelar ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.price);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ingredients);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.fotoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
          styles: [".contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 50%;\n}\n.contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-registro[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n  width: 25%;\n}\n@media (max-width: 500px) {\n  .contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .contato-bg[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus, .contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  color: #DF7857;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  width: 400px;\n  aspect-ratio: 16/9;\n  background: #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 600px) {\n  .contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]:hover {\n  color: #999;\n  background: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvZGVsZXRhci9kZWxldGUtcHJvbW9jYW8vZGVsZXRlLXByb21vY2FvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CRTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtBQWxCSjtBQW9CSTtFQUNFLGNBdEJJO0VBdUJKLDRCQXJCUTtBQUdkO0FBc0JFO0VBQ0UsVUFBQTtBQXBCSjtBQXFCSTtFQUZGO0lBR0ksVUFBQTtFQWxCSjtBQUNGO0FBc0JFO0VBMUJBLFdBQUE7RUFDQSxtQkFaYTtFQWFiLGdCQVBTO0VBUVQsNEJBVlk7QUFpQmQ7QUFtQkU7RUFDRSxVQUFBO0FBakJKO0FBbUJFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBakJKO0FBbUJFO0VBQ0UsMEJBQUE7QUFqQko7QUFvQkU7RUFDRSwrREE3Q1U7QUEyQmQ7QUFxQkU7RUFDRSw0QkFwRFU7QUFpQ2Q7QUFrQkU7RUFDRSw0QkFwRFU7QUFpQ2Q7QUF1QkU7RUFDRSxhQUFBO0FBckJKO0FBd0JFO0VBQ0UsNEJBN0RVO0FBdUNkO0FBcUJFO0VBQ0UsNEJBN0RVO0FBdUNkO0FBMEJFO0VBQ0UsNEJBbEVVO0VBbUVWLGNBckVNO0FBNkNWO0FBNEJFO0VBQ0UsNEJBeEVVO0VBeUVWLFlBQUE7RUFJQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE3Qko7QUFzQkk7RUFIRjtJQUlJLFlBQUE7RUFuQko7QUFDRjtBQTBCSTtFQUNFLGVBQUE7QUF4Qk47QUE0QkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUExQkoiLCJmaWxlIjoic3JjL2FwcC9wYXRocy9kZWxldGFyL2RlbGV0ZS1wcm9tb2Nhby9kZWxldGUtcHJvbW9jYW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYnV0dG9uOiAjRTdBQjlBO1xyXG4kY29sb3ItYmc6ICNFREU5RDU7XHJcbiRjb2xvci0yOiAjREY3ODU3O1xyXG4kY29sb3ItMzogIzYxNzE0MztcclxuJGZvbnQtcm9ib3RvOiAncm9ib3RvJywgc2VyaWY7XHJcbiRmb250LWJhYmU6ICdSYWpkaGFuaScsIHNhbnMtc2VyaWY7XHJcbiRmb250LTcwMDogNzAwO1xyXG4kY29sb3ItaG92ZXI6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZWNkMiAwJSwgI2ZjYjY5ZiAxMDAlKTtcclxuXHJcbkBtaXhpbiBib3RhbygpIHtcclxuXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWJ1dHRvbjtcclxuICBmb250LXdlaWdodDogJGZvbnQtNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbn1cclxuXHJcblxyXG4uY29udGF0by1iZyB7XHJcbiAgLmgxLWJnIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAuaDEtcmVnaXN0cm8ge1xyXG4gICAgICBjb2xvcjogJGNvbG9yLTI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICAuZGl2LWlucHV0e1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9iYWNrZ3JvdW5kOiAkY29sb3ItYmc7XHJcbiAgYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGJvdGFvXHJcbiAgfVxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIGlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1udW1iZXJdLGlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cyAsdGV4dGFyZWF7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6dGV4dGZpZWxkO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1ob3ZlcjtcclxuICB9XHJcblxyXG4gIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgICBjb2xvcjogJGNvbG9yLTI7XHJcblxyXG4gIH1cclxuXHJcbiAgLmltZy1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICAgIGFzcGVjdC1yYXRpbzogMTYvOTtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC5pbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW1nLWxhYmVsOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"]
        });
        return DeletePromocaoComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeletePromocaoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-delete-promocao',
            templateUrl: './delete-promocao.component.html',
            styleUrls: ['./delete-promocao.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/login/interceptors/token.interceptor.ts":
    /*!***************************************************************!*\
      !*** ./src/app/paths/login/interceptors/token.interceptor.ts ***!
      \***************************************************************/

    /*! exports provided: TokenInterceptor */

    /***/
    function srcAppPathsLoginInterceptorsTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
        return TokenInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/service_login/auth.service */
      "./src/app/paths/service/service_login/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var TokenInterceptor =
      /** @class */
      function () {
        var TokenInterceptor = /*#__PURE__*/function () {
          function TokenInterceptor(authService, router) {
            _classCallCheck(this, TokenInterceptor);

            this.authService = authService;
            this.router = router;
          }

          _createClass(TokenInterceptor, [{
            key: "intercept",
            value: function intercept(request, next) {
              var _this33 = this;

              var token = this.authService.getToken();

              if (token) {
                request = request.clone({
                  setHeaders: {
                    Authorization: "bearer ".concat(token)
                  },
                  withCredentials: true
                }); // console.log(request);
              }

              return next.handle(request).pipe( // @ts-ignore
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                  switch (err.status) {
                    case 403:
                      _this33.authService.logout();

                  }
                }
              }));
            }
          }]);

          return TokenInterceptor;
        }();

        TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
          return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
        };

        TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: TokenInterceptor,
          factory: TokenInterceptor.ɵfac
        });
        return TokenInterceptor;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/service_login/auth.service */
      "./src/app/paths/service/service_login/auth.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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
                login: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              });
            }
          }, {
            key: "logar",
            value: function logar() {
              if (this.formLogin.dirty && this.formLogin.valid) {
                this.usuario = Object.assign({}, this.usuario, this.formLogin.value);
                this.authService.logar(this.usuario);
                this.route.navigate(['/']);
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
          return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
        };

        LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: LoginComponent,
          selectors: [["app-login"]],
          decls: 28,
          vars: 18,
          consts: [[1, "login-bg", "p-5", "rounded", "d-grid", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6", "ml-5"], [1, "card", "p-5", "card-width"], [1, "w-100", "d-grid", "mb-5", "h1-bg"], [1, "h1-login", "d-flex", "justify-content-center", "mb-3", "w-100"], [1, "mb-3", "d-grid", "w-100", "mb-3", "div-input"], ["for", "login", 1, "col-sm-2", "col-form-label"], ["type", "text", "id", "login", "placeholder", "login", "formControlName", "login", 1, "form-control", 3, "ngClass"], [1, "mb-3", "d-grid", "w-100", "mb-4", "div-input"], ["for", "inputPassword", 1, "col-sm-2", "col-form-label"], ["type", "password", "id", "inputPassword", "placeholder", "senha", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "d-flex", "flex-column", "align-items-center", "w-100", "my-2"], [1, "col-auto", "w-100", "d-flex", "justify-content-end", "ms-3"], ["type", "submit", "routerLink", "/registrar", 1, "btn", "btn-link", "btn-lg", "mb-1"], [1, "col-auto", "w-100"], ["type", "submit", "value", "login", 1, "btn", "w-100", "mb-3", "botao", 3, "disabled"], [1, "col-md-6", "d-flex", "align-items-center", "justify-content-center"], ["fill", "#000000", "height", "300px", "width", "400px", "version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 59 59", 0, "xml", "space", "preserve"], ["d", "M49,25.962H35.144H6c-0.552,0-1,0.447-1,1s0.448,1,1,1h28.651l6.628,8.61c0.189,0.245,0.482,0.39,0.792,0.39\n\t\ts0.603-0.145,0.792-0.39l6.628-8.61H53c0.552,0,1-0.447,1-1s-0.448-1-1-1H49z"], ["d", "M5.627,23.962h47.745c0.305,0,0.592-0.139,0.782-0.377s0.261-0.55,0.192-0.847C51.674,11.094,41.457,2.962,29.5,2.962\n\t\tS7.326,11.094,4.653,22.738c-0.068,0.297,0.002,0.608,0.192,0.847S5.323,23.962,5.627,23.962z M41.168,14.407\n\t\tc0.306-0.46,0.926-0.584,1.387-0.277l3,2c0.459,0.307,0.583,0.927,0.277,1.387c-0.193,0.289-0.51,0.445-0.833,0.445\n\t\tc-0.19,0-0.383-0.055-0.554-0.168l-3-2C40.986,15.487,40.862,14.867,41.168,14.407z M35.105,17.515l1-2\n\t\tc0.247-0.494,0.846-0.693,1.342-0.447c0.494,0.247,0.694,0.848,0.447,1.342l-1,2c-0.175,0.351-0.528,0.553-0.896,0.553\n\t\tc-0.15,0-0.303-0.034-0.446-0.105C35.059,18.609,34.858,18.009,35.105,17.515z M32.553,10.067c0.495-0.245,1.095-0.046,1.342,0.447\n\t\tl1,2c0.247,0.494,0.047,1.095-0.447,1.342c-0.144,0.071-0.296,0.105-0.446,0.105c-0.367,0-0.72-0.202-0.896-0.553l-1-2\n\t\tC31.858,10.915,32.059,10.314,32.553,10.067z M26.105,9.515l1-2c0.247-0.493,0.847-0.692,1.342-0.447\n\t\tc0.494,0.247,0.694,0.848,0.447,1.342l-1,2c-0.175,0.351-0.528,0.553-0.896,0.553c-0.15,0-0.303-0.034-0.446-0.105\n\t\tC26.059,10.609,25.858,10.009,26.105,9.515z M25.105,18.515l1-2c0.247-0.493,0.846-0.693,1.342-0.447\n\t\tc0.494,0.247,0.694,0.848,0.447,1.342l-1,2c-0.175,0.351-0.528,0.553-0.896,0.553c-0.15,0-0.303-0.034-0.446-0.105\n\t\tC25.059,19.609,24.858,19.009,25.105,18.515z M19.553,12.067c0.495-0.246,1.095-0.047,1.342,0.447l1,2\n\t\tc0.247,0.494,0.047,1.095-0.447,1.342c-0.144,0.071-0.296,0.105-0.446,0.105c-0.367,0-0.72-0.202-0.896-0.553l-1-2\n\t\tC18.858,12.915,19.059,12.314,19.553,12.067z M14.105,18.515l1-2c0.247-0.493,0.846-0.693,1.342-0.447\n\t\tc0.494,0.247,0.694,0.848,0.447,1.342l-1,2c-0.175,0.351-0.528,0.553-0.896,0.553c-0.15,0-0.303-0.034-0.446-0.105\n\t\tC14.059,19.609,13.858,19.009,14.105,18.515z"], ["d", "M52.973,41.962H6c-0.321,0-0.623,0.154-0.811,0.414c-0.188,0.261-0.24,0.596-0.139,0.9l2.524,7.619\n\t\tc1.018,3.076,3.88,5.143,7.121,5.143h29.6c3.247,0,6.11-2.072,7.125-5.157l2.503-7.606c0.101-0.305,0.048-0.639-0.14-0.898\n\t\tS53.294,41.962,52.973,41.962z M18.832,49.517c-0.193,0.289-0.51,0.445-0.833,0.445c-0.19,0-0.383-0.055-0.554-0.168l-3-2\n\t\tc-0.459-0.307-0.583-0.927-0.277-1.387c0.307-0.46,0.926-0.584,1.387-0.277l3,2C19.014,48.437,19.138,49.057,18.832,49.517z\n\t\t M24.895,47.409l-1,2c-0.175,0.351-0.528,0.553-0.896,0.553c-0.15,0-0.303-0.034-0.446-0.105c-0.494-0.247-0.694-0.848-0.447-1.342\n\t\tl1-2c0.247-0.494,0.846-0.693,1.342-0.447C24.941,46.314,25.142,46.915,24.895,47.409z M29.447,52.856\n\t\tc-0.144,0.071-0.296,0.105-0.446,0.105c-0.367,0-0.72-0.202-0.896-0.553l-1-2c-0.247-0.494-0.047-1.095,0.447-1.342\n\t\tc0.496-0.246,1.095-0.047,1.342,0.447l1,2C30.142,52.009,29.941,52.609,29.447,52.856z M34.895,46.409l-1,2\n\t\tc-0.175,0.351-0.528,0.553-0.896,0.553c-0.15,0-0.303-0.034-0.446-0.105c-0.494-0.247-0.694-0.848-0.447-1.342l1-2\n\t\tc0.247-0.493,0.846-0.692,1.342-0.447C34.941,45.314,35.142,45.915,34.895,46.409z M40.447,51.856\n\t\tc-0.144,0.071-0.296,0.105-0.446,0.105c-0.367,0-0.72-0.202-0.896-0.553l-1-2c-0.247-0.494-0.047-1.095,0.447-1.342\n\t\tc0.496-0.245,1.094-0.046,1.342,0.447l1,2C41.142,51.009,40.941,51.609,40.447,51.856z M45.895,46.409l-1,2\n\t\tc-0.175,0.351-0.528,0.553-0.896,0.553c-0.15,0-0.303-0.034-0.446-0.105c-0.494-0.247-0.694-0.848-0.447-1.342l1-2\n\t\tc0.247-0.493,0.847-0.692,1.342-0.447C45.941,45.314,46.142,45.915,45.895,46.409z"], ["d", "M54,29.962h-3.523l-6.028,7.83c-0.567,0.733-1.455,1.17-2.377,1.17s-1.811-0.437-2.375-1.167l-6.03-7.833H5\n\t\tc-2.757,0-5,2.243-5,5s2.243,5,5,5h49c2.757,0,5-2.243,5-5S56.757,29.962,54,29.962z M35.707,35.669\n\t\tc-0.59,0.59-1.374,0.915-2.207,0.915s-1.617-0.325-2.207-0.915c-0.438-0.438-1.148-0.438-1.586,0c-1.217,1.217-3.197,1.217-4.414,0\n\t\tc-0.425-0.424-1.161-0.424-1.586,0c-1.217,1.217-3.197,1.217-4.414,0c-0.425-0.424-1.161-0.424-1.586,0\n\t\tc-1.217,1.217-3.197,1.217-4.414,0c-0.438-0.438-1.148-0.438-1.586,0c-1.217,1.217-3.197,1.217-4.414,0\n\t\tc-0.438-0.438-1.148-0.438-1.586,0c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414c1.18-1.18,3.234-1.18,4.414,0\n\t\tc0.438,0.438,1.148,0.438,1.586,0c1.217-1.217,3.197-1.217,4.414,0c0.425,0.424,1.161,0.424,1.586,0\n\t\tc1.217-1.217,3.197-1.217,4.414,0c0.425,0.424,1.161,0.424,1.586,0c1.217-1.217,3.197-1.217,4.414,0\n\t\tc0.438,0.438,1.148,0.438,1.586,0c1.217-1.217,3.197-1.217,4.414,0c0.438,0.438,1.148,0.438,1.586,0\n\t\tc0.391-0.391,1.023-0.391,1.414,0S36.098,35.278,35.707,35.669z M54.707,35.669c-0.608,0.608-1.408,0.913-2.207,0.913\n\t\ts-1.599-0.305-2.207-0.913c-0.425-0.424-1.161-0.424-1.586,0c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414\n\t\tc1.217-1.217,3.197-1.217,4.414,0c0.425,0.424,1.161,0.424,1.586,0c0.391-0.391,1.023-0.391,1.414,0S55.098,35.278,54.707,35.669z"]],
          template: function LoginComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() {
                return ctx.logar();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "login");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "senha");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "registrar");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formLogin);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formLogin.controls["login"].valid)("invalid", ctx.formLogin.controls["login"].invalid && (ctx.formLogin.controls["login"].touched || ctx.formLogin.controls["login"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c0, ctx.formLogin.controls["login"].invalid && (ctx.formLogin.controls["login"].touched || ctx.formLogin.controls["login"].dirty), ctx.formLogin.controls["login"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formLogin.controls["password"].valid)("invalid", ctx.formLogin.controls["password"].invalid && (ctx.formLogin.controls["password"].touched || ctx.formLogin.controls["password"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c0, ctx.formLogin.controls["password"].invalid && (ctx.formLogin.controls["password"].touched || ctx.formLogin.controls["password"].dirty), ctx.formLogin.controls["password"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formLogin.valid);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
          styles: ["svg[_ngcontent-%COMP%] {\n  color: #fff;\n  fill: #E7AB9A;\n}\n\n.card-width[_ngcontent-%COMP%] {\n  max-width: 40rem !important;\n}\n\n.login-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 50%;\n}\n\n.login-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-login[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\n\n.login-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .login-bg[_ngcontent-%COMP%]   .botao[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n  font-family: \"roboto\", serif;\n}\n\n.login-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .login-bg[_ngcontent-%COMP%]   .botao[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n\n.login-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.login-bg[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.login-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n\n.login-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n\n.login-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n\n.login-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n\n.login-bg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  color: #DF7857;\n}\n\n.login-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n@media (max-width: 500px) {\n  .login-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJBO0VBQ0UsV0FBQTtFQUNBLGFBbkJhO0FBR2Y7O0FBa0JBO0VBQ0UsMkJBQUE7QUFmRjs7QUFvQkU7RUFDRSw2QkFBQTtFQUNBLFVBQUE7QUFqQko7O0FBbUJJO0VBQ0UsY0E5Qkk7RUErQkosNEJBN0JRO0FBWWQ7O0FBdUJFO0VBNUJBLFdBQUE7RUFDQSxtQkFaYTtFQWFiLGdCQVBTO0VBUVQsNEJBVlk7QUFrQmQ7O0FBcUJFO0VBQ0UsK0RBckNVO0FBa0JkOztBQXNCRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQXBCSjs7QUF1QkU7RUFDRSxVQUFBO0FBckJKOztBQXdCRTtFQUNFLDRCQXJEVTtBQStCZDs7QUFxQkU7RUFDRSw0QkFyRFU7QUErQmQ7O0FBMEJFO0VBQ0UsNEJBMURVO0FBa0NkOztBQXVCRTtFQUNFLDRCQTFEVTtBQWtDZDs7QUE0QkU7RUFDRSw0QkEvRFU7RUFnRVYsY0FsRU07QUF3Q1Y7O0FBNkJFO0VBQ0UsVUFBQTtBQTNCSjs7QUE0Qkk7RUFGRjtJQUdJLFVBQUE7RUF6Qko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhdGhzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWJ1dHRvbjogI0U3QUI5QTtcclxuJGNvbG9yLWJnOiAjRURFOUQ1O1xyXG4kY29sb3ItMjogI0RGNzg1NztcclxuJGNvbG9yLTM6ICM2MTcxNDM7XHJcbiRmb250LXJvYm90bzogJ3JvYm90bycsIHNlcmlmO1xyXG4kZm9udC1iYWJlOiAnUmFqZGhhbmknLCBzYW5zLXNlcmlmO1xyXG4kZm9udC03MDA6IDcwMDtcclxuJGNvbG9yLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmVjZDIgMCUsICNmY2I2OWYgMTAwJSk7XHJcblxyXG5AbWl4aW4gYm90YW8oKSB7XHJcblxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1idXR0b247XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LTcwMDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG59XHJcblxyXG5zdmcge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZpbGw6ICRjb2xvci1idXR0b247XHJcbn1cclxuLmNhcmQtd2lkdGh7XHJcbiAgbWF4LXdpZHRoOiA0MHJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLmxvZ2luLWJnIHtcclxuXHJcblxyXG4gIC5oMS1iZyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgLmgxLWxvZ2luIHtcclxuICAgICAgY29sb3I6ICRjb2xvci0yO1xyXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidXR0b24sIC5ib3RhbyB7XHJcbiAgICBAaW5jbHVkZSBib3Rhb1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmhvdmVyLCAuYm90YW86aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWhvdmVyO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcblxyXG4gIH1cclxuXHJcbiAgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcblxyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAgIGNvbG9yOiAkY29sb3ItMjtcclxuICB9XHJcblxyXG4gIC5kaXYtaW5wdXQge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19 */"]
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


      var _service_service_login_cadastro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/service_login/cadastro.service */
      "./src/app/paths/service/service_login/cadastro.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      function RegistroComponent_div_9_small_1_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formRegistro.controls["login"].hasError("required"));
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formRegistro.controls["password"].hasError("required"));
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formRegistro.controls["name"].hasError("minlength"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formRegistro.controls["name"].hasError("required"));
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
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistroComponent_button_27_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.registrar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "registrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegistroComponent_button_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistroComponent_button_28_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.registrarAdm();
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
          function RegistroComponent(authService, fb, cadastroService) {
            _classCallCheck(this, RegistroComponent);

            this.authService = authService;
            this.fb = fb;
            this.cadastroService = cadastroService;
            this.mostrarBtn = !this.authService.estaAutenticado();
            this.usuario = new _models_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
          }

          _createClass(RegistroComponent, [{
            key: "createForm",
            value: function createForm() {
              this.formRegistro = this.fb.group({
                login: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
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
                this.cadastroService.postLogin(this.usuario).subscribe(function (res) {
                  alert('enviado com sucesso!');
                });
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
                this.cadastroService.postLoginAdm(this.usuario).subscribe(function (res) {
                  alert('enviado com sucesso!');
                });
                console.log('registrarAdm', this.usuario);
                return;
              }

              alert('preencha o formulario!');
            }
          }]);

          return RegistroComponent;
        }();

        RegistroComponent.ɵfac = function RegistroComponent_Factory(t) {
          return new (t || RegistroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_login_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["CadastroService"]));
        };

        RegistroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: RegistroComponent,
          selectors: [["app-registro"]],
          decls: 29,
          vars: 31,
          consts: [[1, "registro-bg"], [1, "d-grid", "py-5", 3, "formGroup"], [1, "mx-auto", "d-grid", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], [1, "mb-3", "div-input", "mx-auto"], ["for", "exampleFormControlInput1", 1, "form-label"], ["type", "login", "id", "exampleFormControlInput1", "placeholder", "name@example.com", "formControlName", "login", 1, "form-control", 3, "ngClass"], [4, "ngIf"], [1, "mx-auto", "div-input"], [1, "col-auto"], ["for", "inputPassword6", 1, "col-form-label"], ["type", "password", "id", "inputPassword6", "formControlName", "password", "placeholder", "insira sua senha...", 1, "form-control", 3, "ngClass"], [1, "g-3", "mx-auto", "div-input"], ["for", "nome", 1, "col-form-label"], ["type", "text", "id", "nome", "formControlName", "name", "placeholder", "insira seu nome...", 1, "form-control", 3, "ngClass"], [1, "d-flex", "my-5"], [1, "col-auto", "mx-auto"], ["type", "submit", "class", "btn  mb-3 me-4", "routerLink", "/login", 4, "ngIf"], ["type", "submit", "class", "btn  mb-3", 3, "click", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "error-message"], ["type", "submit", "routerLink", "/login", 1, "btn", "mb-3", "me-4"], ["type", "submit", 1, "btn", "mb-3", 3, "click"]],
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

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "login ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RegistroComponent_div_9_Template, 2, 1, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "password");

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

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formRegistro.controls["login"].valid)("invalid", ctx.formRegistro.controls["login"].invalid && (ctx.formRegistro.controls["login"].touched || ctx.formRegistro.controls["login"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c0, ctx.formRegistro.controls["login"].invalid && (ctx.formRegistro.controls["login"].touched || ctx.formRegistro.controls["login"].dirty), ctx.formRegistro.controls["login"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formRegistro.controls["login"].invalid && (ctx.formRegistro.controls["login"].touched || ctx.formRegistro.controls["login"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formRegistro.controls["password"].valid)("invalid", ctx.formRegistro.controls["password"].invalid && (ctx.formRegistro.controls["password"].touched || ctx.formRegistro.controls["password"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c0, ctx.formRegistro.controls["password"].invalid && (ctx.formRegistro.controls["password"].touched || ctx.formRegistro.controls["password"].dirty), ctx.formRegistro.controls["password"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formRegistro.controls["password"].invalid && (ctx.formRegistro.controls["password"].touched || ctx.formRegistro.controls["password"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formRegistro.controls["name"].valid)("invalid", ctx.formRegistro.controls["name"].invalid && (ctx.formRegistro.controls["name"].touched || ctx.formRegistro.controls["name"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](28, _c0, ctx.formRegistro.controls["name"].invalid && (ctx.formRegistro.controls["name"].touched || ctx.formRegistro.controls["name"].dirty), ctx.formRegistro.controls["name"].valid));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formRegistro.controls["name"].invalid && (ctx.formRegistro.controls["name"].touched || ctx.formRegistro.controls["name"].dirty));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostrarBtn);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostrarBtn);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mostrarBtn);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]],
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
          }, {
            type: _service_service_login_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["CadastroService"]
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
    "./src/app/paths/nao-logado/nao-logado.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/paths/nao-logado/nao-logado.component.ts ***!
      \**********************************************************/

    /*! exports provided: NaoLogadoComponent */

    /***/
    function srcAppPathsNaoLogadoNaoLogadoComponentTs(module, __webpack_exports__, __webpack_require__) {
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
      /*! ../service/service_login/auth.service */
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
          styles: [".login-container[_ngcontent-%COMP%] {\n  background: #EDE9D5;\n}\n.login-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  font-weight: 700;\n  font-size: 40px;\n  color: #DF7857;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvbmFvLWxvZ2Fkby9uYW8tbG9nYWRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsbUJBSlM7QUFFWDtBQUdFO0VBQ0UsNEJBSlU7RUFLVixnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQVJNO0FBT1YiLCJmaWxlIjoic3JjL2FwcC9wYXRocy9uYW8tbG9nYWRvL25hby1sb2dhZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYmc6ICNFREU5RDU7XHJcbiRjb2xvci0yOiAjREY3ODU3O1xyXG4kZm9udC1yb2JvdG86ICdyb2JvdG8nLCBzZXJpZjtcclxuLmxvZ2luLWNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItYmc7XHJcbiAgaDF7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiAkY29sb3ItMjtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"]
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
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var CarrinhoService =
      /** @class */
      function () {
        var CarrinhoService = /*#__PURE__*/function () {
          function CarrinhoService(http) {
            _classCallCheck(this, CarrinhoService);

            this.http = http;
            this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
          }

          _createClass(CarrinhoService, [{
            key: "getCarrinho",
            value: function getCarrinho() {
              var url = "".concat(this.baseUrl, "/chart");
              return this.http.get(url);
            }
          }, {
            key: "getCarrinhoByProductId",
            value: function getCarrinhoByProductId(id) {
              var url = "".concat(this.baseUrl, "/chart/products/").concat(id);
              return this.http.get(url);
            }
          }, {
            key: "getCarrinhoByOfferId",
            value: function getCarrinhoByOfferId(id) {
              var url = "".concat(this.baseUrl, "/chart/offer/").concat(id);
              return this.http.get(url);
            }
          }, {
            key: "postCarrinho",
            value: function postCarrinho(carrinho, id) {
              var url = "".concat(this.baseUrl, "/chart/product/").concat(id);
              return this.http.post(url, carrinho);
            }
          }, {
            key: "postCarrinhoP",
            value: function postCarrinhoP(carrinho, id) {
              var url = "".concat(this.baseUrl, "/chart/offer/").concat(id);
              return this.http.post(url, carrinho);
            }
          }, {
            key: "deleteCarrinho",
            value: function deleteCarrinho(id) {
              var url = "".concat(this.baseUrl, "/chart/").concat(id);
              return this.http["delete"](url);
            }
          }]);

          return CarrinhoService;
        }();

        CarrinhoService.ɵfac = function CarrinhoService_Factory(t) {
          return new (t || CarrinhoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
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
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! jwt-decode */
      "./node_modules/jwt-decode/build/jwt-decode.esm.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

      var AuthService =
      /** @class */
      function () {
        var AuthService = /*#__PURE__*/function () {
          function AuthService(router, http, cookieService) {
            _classCallCheck(this, AuthService);

            this.router = router;
            this.http = http;
            this.cookieService = cookieService;
            this.mostrarMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.token = '';
            this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
          }

          _createClass(AuthService, [{
            key: "estaAutenticado",
            value: function estaAutenticado() {
              return !!this.getToken();
            }
          }, {
            key: "eadm",
            value: function eadm() {
              return !!this.cookieService.get('eadm');
            }
          }, {
            key: "verificaToken",
            value: function verificaToken() {
              // const apiUrl = `${this.baseUrl}/verifica-token`;
              // return this.http.get<UserToken>(apiUrl);
              try {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(jwt_decode__WEBPACK_IMPORTED_MODULE_4__["default"])(this.getToken()));
              } catch (error) {
                this.logout();
              }
            }
          }, {
            key: "logar",
            value: function logar(usuario) {
              var _this34 = this;

              var url = "".concat(this.baseUrl, "/login");
              return this.http.post(url, usuario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (token) {
                _this34.token = JSON.parse(JSON.stringify(token));
                var decode = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_4__["default"])(_this34.token); // console.log(this.token);

                _this34.cookieService.set('access-token', "".concat(token));

                if (decode.role.includes('admin')) {
                  _this34.mostrarMenu.emit(_this34.estaAutenticado());

                  _this34.cookieService.set('eadm', decode.role.find(function (role) {
                    return role === 'admin';
                  }));
                }

                if (decode.role.includes('user')) {
                  _this34.mostrarMenu.emit(_this34.estaAutenticado());
                }

                _this34.router.navigate(['produtos-categorias']);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
              })).subscribe();
            }
          }, {
            key: "getToken",
            value: function getToken() {
              return this.cookieService.get('access-token');
            }
          }, {
            key: "decodePayloadJWT",
            value: function decodePayloadJWT(token) {
              try {
                var decode = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_4__["default"])(token);
                return {
                  id: decode.id,
                  login: decode.name,
                  role: decode.role,
                  exp: decode.exp
                };
              } catch (Error) {
                return null;
              }
            }
          }, {
            key: "logout",
            value: function logout() {
              this.cookieService["delete"]('access-token');
              this.cookieService["delete"]('eadm');
              this.mostrarMenu.emit(false);
              this.router.navigate(['login']);
            }
          }]);

          return AuthService;
        }();

        AuthService.ɵfac = function AuthService_Factory(t) {
          return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]));
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
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/service/service_login/cadastro.service.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/paths/service/service_login/cadastro.service.ts ***!
      \*****************************************************************/

    /*! exports provided: CadastroService */

    /***/
    function srcAppPathsServiceService_loginCadastroServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CadastroService", function () {
        return CadastroService;
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
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

      var CadastroService =
      /** @class */
      function () {
        var CadastroService = /*#__PURE__*/function () {
          function CadastroService(router, http, cookieService) {
            _classCallCheck(this, CadastroService);

            this.router = router;
            this.http = http;
            this.cookieService = cookieService;
            this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
          }

          _createClass(CadastroService, [{
            key: "getLogin",
            value: function getLogin() {
              var url = "".concat(this.baseUrl, "/user/info");
              return this.http.get(url);
            }
          }, {
            key: "postLogin",
            value: function postLogin(usuario) {
              var url = "".concat(this.baseUrl, "/user");
              return this.http.post(url, usuario);
            }
          }, {
            key: "postLoginAdm",
            value: function postLoginAdm(adm) {
              var url = "".concat(this.baseUrl, "/user/admin");
              return this.http.post(url, adm);
            }
          }]);

          return CadastroService;
        }();

        CadastroService.ɵfac = function CadastroService_Factory(t) {
          return new (t || CadastroService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]));
        };

        CadastroService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: CadastroService,
          factory: CadastroService.ɵfac,
          providedIn: 'root'
        });
        return CadastroService;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CadastroService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
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
          } // metodo post
          // post pra tabela de produtos


          _createClass(ProdutoService, [{
            key: "postProduto",
            value: function postProduto(produtos, name) {
              var url = "".concat(this.baseUrl, "/products/name/").concat(name);
              return this.http.post(url, produtos);
            } // post pra tabela de categoria

          }, {
            key: "postProdutoLista",
            value: function postProdutoLista(produtos) {
              var url = "".concat(this.baseUrl, "/categories");
              return this.http.post(url, produtos);
            } // post pra tabela de promocoes

          }, {
            key: "postPromocoes",
            value: function postPromocoes(produtos) {
              var url = "".concat(this.baseUrl, "/offers");
              return this.http.post(url, produtos);
            } // metodo get by id
            // get by id pra tabela categorias

          }, {
            key: "getProdutoById",
            value: function getProdutoById(id) {
              var url = "".concat(this.baseUrl, "/categories/").concat(id);
              return this.http.get(url);
            } // get by id pra tabela de produtos

          }, {
            key: "getIngredienteById",
            value: function getIngredienteById(id) {
              var url = "".concat(this.baseUrl, "/products/").concat(id);
              return this.http.get(url);
            } // get by id pra tabela de promocoes

          }, {
            key: "getPromocaoById",
            value: function getPromocaoById(id) {
              var url = "".concat(this.baseUrl, "/offers/").concat(id);
              return this.http.get(url);
            }
          }, {
            key: "getIngredientesByCategory",
            value: function getIngredientesByCategory(name) {
              var url = "".concat(this.baseUrl, "/products/name/").concat(name);
              return this.http.get(url);
            } // metodo get
            // get todos de categorias

          }, {
            key: "getProdutosLista",
            value: function getProdutosLista() {
              var url = "".concat(this.baseUrl, "/categories");
              return this.http.get(url);
            } // get all de promocoes

          }, {
            key: "getPromocoes",
            value: function getPromocoes() {
              var url = "".concat(this.baseUrl, "/offers/");
              return this.http.get(url);
            } // metodo delete
            // delete de categorias

          }, {
            key: "deleteProdutoLista",
            value: function deleteProdutoLista(id) {
              var url = "".concat(this.baseUrl, "/categories/").concat(id);
              return this.http["delete"](url);
            } // delete de produtos

          }, {
            key: "deleteIngredientes",
            value: function deleteIngredientes(id) {
              var url = "".concat(this.baseUrl, "/products/").concat(id);
              return this.http["delete"](url);
            } // delete de promocoes

          }, {
            key: "deletePromocoes",
            value: function deletePromocoes(id) {
              var url = "".concat(this.baseUrl, "/offers/").concat(id);
              return this.http["delete"](url);
            } // metodo put
            // put de categorias

          }, {
            key: "putProdutosLista",
            value: function putProdutosLista(produtos) {
              var url = "".concat(this.baseUrl, "/categories/").concat(produtos.id);
              return this.http.put(url, produtos);
            } // put de produtos

          }, {
            key: "putProdutos",
            value: function putProdutos(produtos) {
              var url = "".concat(this.baseUrl, "/products/").concat(produtos.id);
              return this.http.put(url, produtos);
            } // put de promocoes

          }, {
            key: "putPromocoes",
            value: function putPromocoes(produtos) {
              var url = "".concat(this.baseUrl, "/offers/").concat(produtos.id);
              return this.http.put(url, produtos);
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
    "./src/app/paths/shared/carrinho-vazio/carrinho-vazio.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/paths/shared/carrinho-vazio/carrinho-vazio.component.ts ***!
      \*************************************************************************/

    /*! exports provided: CarrinhoVazioComponent */

    /***/
    function srcAppPathsSharedCarrinhoVazioCarrinhoVazioComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarrinhoVazioComponent", function () {
        return CarrinhoVazioComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CarrinhoVazioComponent =
      /** @class */
      function () {
        var CarrinhoVazioComponent = /*#__PURE__*/function () {
          function CarrinhoVazioComponent() {
            _classCallCheck(this, CarrinhoVazioComponent);
          }

          _createClass(CarrinhoVazioComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return CarrinhoVazioComponent;
        }();

        CarrinhoVazioComponent.ɵfac = function CarrinhoVazioComponent_Factory(t) {
          return new (t || CarrinhoVazioComponent)();
        };

        CarrinhoVazioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: CarrinhoVazioComponent,
          selectors: [["app-carrinho-vazio"]],
          decls: 14,
          vars: 0,
          consts: [[1, "d-flex", "flex-column"], [1, "mx-auto", "mb-5", "cart-h2"], [1, "d-flex", "mx-auto", "mb-5"], ["version", "1.0", "xmlns", "http://www.w3.org/2000/svg", "width", "1280.000000pt", "height", "883.000000pt", "viewBox", "0 0 1280.000000 883.000000", "preserveAspectRatio", "xMidYMid meet", 1, "cart"], ["transform", "translate(0.000000,883.000000) scale(0.100000,-0.100000)", "fill", "#DF7857", "stroke", "none"], ["d", "M3835 8819 c-209 -30 -357 -133 -440 -304 -43 -89 -56 -149 -56 -253\n0 -96 5 -130 33 -227 20 -72 36 -114 203 -555 90 -237 155 -409 435 -1150 59\n-157 167 -442 240 -635 73 -192 181 -478 240 -635 308 -817 374 -989 434\n-1150 97 -256 168 -378 303 -521 154 -163 344 -275 578 -341 l80 -23 2130 -3\nc1513 -2 2153 0 2210 8 360 50 702 295 879 630 25 48 88 199 140 336 52 137\n140 371 196 519 56 149 140 370 186 493 196 519 259 684 340 900 47 125 130\n344 184 487 54 143 155 411 225 595 438 1159 412 1085 422 1224 12 170 -48\n338 -160 448 -62 62 -159 115 -262 145 -57 17 -278 18 -4270 19 -2343 1 -4237\n-2 -4270 -7z"], ["d", "M650 7260 c-192 -5 -221 -8 -272 -29 -164 -65 -298 -205 -354 -371\n-29 -84 -26 -263 4 -352 50 -145 160 -271 296 -337 45 -22 108 -45 140 -50 39\n-7 371 -11 967 -11 l907 0 422 -987 c589 -1377 992 -2317 1172 -2730 l153\n-352 60 -47 c33 -26 112 -81 175 -122 63 -41 144 -96 180 -121 l65 -46 410 3\n410 4 -65 -42 c-72 -47 -180 -152 -227 -221 -52 -75 -110 -199 -139 -294 -25\n-81 -28 -105 -28 -250 -1 -162 4 -198 45 -313 28 -79 55 -128 119 -217 97\n-135 195 -216 343 -285 350 -163 783 -93 1043 167 272 271 344 644 195 1006\n-21 51 -55 118 -75 151 -53 81 -177 208 -250 256 l-61 40 1645 0 1645 0 -50\n-29 c-27 -16 -80 -56 -117 -90 -263 -242 -369 -641 -258 -974 45 -131 107\n-233 214 -346 277 -291 759 -354 1126 -148 87 49 246 201 305 291 50 77 101\n204 121 302 22 106 15 316 -15 429 -26 101 -95 240 -159 326 -58 75 -156 168\n-222 207 l-45 27 120 6 c182 10 273 37 383 116 110 78 195 213 222 351 17 84\n8 221 -20 301 -47 141 -165 273 -295 332 -139 63 67 59 -3053 59 l-2839 0\n-253 593 c-139 325 -394 921 -566 1322 -171 402 -445 1043 -609 1425 -163 382\n-308 710 -323 729 -26 35 -371 267 -452 305 -45 21 -53 21 -985 22 -517 0\n-1037 -2 -1155 -6z"], [1, "mx-auto", "cart-text"]],
          template: function CarrinhoVazioComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "O carrinho esta vazio");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "metadata");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\nCreated by potrace 1.15, written by Peter Selinger 2001-2017\n");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "voc\xEA ainda n\xE3o adicionou produtos ao carrinho");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: ["div[_ngcontent-%COMP%]   .cart-h2[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\ndiv[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100px;\n  height: auto;\n}\ndiv[_ngcontent-%COMP%]   .cart-text[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvc2hhcmVkL2NhcnJpbmhvLXZhemlvL2NhcnJpbmhvLXZhemlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlFO0VBQ0UsY0FMTTtFQU1OLDRCQUxVO0FBRWQ7QUFLRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUhKO0FBTUU7RUFDRSw0QkFkVTtBQVVkIiwiZmlsZSI6InNyYy9hcHAvcGF0aHMvc2hhcmVkL2NhcnJpbmhvLXZhemlvL2NhcnJpbmhvLXZhemlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLTI6ICNERjc4NTc7XHJcbiRmb250LXJvYm90bzogJ3JvYm90bycsIHNlcmlmO1xyXG5cclxuZGl2IHtcclxuICAuY2FydC1oMntcclxuICAgIGNvbG9yOiAkY29sb3ItMjtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgfVxyXG4gIC5jYXJ0IHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgfVxyXG4gIC5jYXJ0LXRleHR7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
        });
        return CarrinhoVazioComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarrinhoVazioComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-carrinho-vazio',
            templateUrl: './carrinho-vazio.component.html',
            styleUrls: ['./carrinho-vazio.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/shared/guard/auth.guard.ts":
    /*!**************************************************!*\
      !*** ./src/app/paths/shared/guard/auth.guard.ts ***!
      \**************************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppPathsSharedGuardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/service_login/auth.service */
      "./src/app/paths/service/service_login/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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
            value: function canActivate(route, state) {
              var _this35 = this;

              return this._authMe().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                if (res instanceof Object) {
                  var hasRole = res.role.some(function (role) {
                    return route.data.role.includes(role);
                  });
                  return hasRole ? true : _this35.route.createUrlTree(['/unauthorized/']);
                }

                return false;
              }));
            }
          }, {
            key: "_authMe",
            value: function _authMe() {
              return this.authService.verificaToken();
            }
          }]);

          return AuthGuard;
        }();

        AuthGuard.ɵfac = function AuthGuard_Factory(t) {
          return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
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
            type: _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/shared/nao-encontrada/nao-encontrada.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/paths/shared/nao-encontrada/nao-encontrada.component.ts ***!
      \*************************************************************************/

    /*! exports provided: NaoEncontradaComponent */

    /***/
    function srcAppPathsSharedNaoEncontradaNaoEncontradaComponentTs(module, __webpack_exports__, __webpack_require__) {
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
          styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  height: 400px;\n}\n.container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 200px;\n  color: #CD1818;\n  margin-bottom: 60px;\n}\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 44px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvc2hhcmVkL25hby1lbmNvbnRyYWRhL25hby1lbmNvbnRyYWRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFBRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxjQVRNO0VBVU4sbUJBQUE7QUFDSjtBQUVFO0VBQ0UsZUFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcGF0aHMvc2hhcmVkL25hby1lbmNvbnRyYWRhL25hby1lbmNvbnRyYWRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLTI6ICNDRDE4MTg7XHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjAwcHg7XHJcbiAgICBjb2xvcjogJGNvbG9yLTI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiA0NHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"]
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
    "./src/app/paths/shared/unauthorized-page/unauthorized-page.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/paths/shared/unauthorized-page/unauthorized-page.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: UnauthorizedPageComponent */

    /***/
    function srcAppPathsSharedUnauthorizedPageUnauthorizedPageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnauthorizedPageComponent", function () {
        return UnauthorizedPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var UnauthorizedPageComponent =
      /** @class */
      function () {
        var UnauthorizedPageComponent = /*#__PURE__*/function () {
          function UnauthorizedPageComponent() {
            _classCallCheck(this, UnauthorizedPageComponent);
          }

          _createClass(UnauthorizedPageComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return UnauthorizedPageComponent;
        }();

        UnauthorizedPageComponent.ɵfac = function UnauthorizedPageComponent_Factory(t) {
          return new (t || UnauthorizedPageComponent)();
        };

        UnauthorizedPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: UnauthorizedPageComponent,
          selectors: [["app-unauthorized-page"]],
          decls: 2,
          vars: 0,
          consts: [[1, "div-img"], ["src", "assets/img/unauthorized.png", "alt", "unauthorized", 1, "responsive"]],
          template: function UnauthorizedPageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [".responsive[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 750px;\n  height: auto;\n}\n\n.div-img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvc2hhcmVkL3VuYXV0aG9yaXplZC1wYWdlL3VuYXV0aG9yaXplZC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL3BhdGhzL3NoYXJlZC91bmF1dGhvcml6ZWQtcGFnZS91bmF1dGhvcml6ZWQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNwb25zaXZlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4uZGl2LWltZ3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */"]
        });
        return UnauthorizedPageComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnauthorizedPageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-unauthorized-page',
            templateUrl: './unauthorized-page.component.html',
            styleUrls: ['./unauthorized-page.component.scss']
          }]
        }], function () {
          return [];
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


      var _service_service_login_cadastro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/service_login/cadastro.service */
      "./src/app/paths/service/service_login/cadastro.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function HeaderComponent_a_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Adicionar produto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_a_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Adicionar promo\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_a_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Registro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_div_31_a_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Adicionar produto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_div_31_a_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Adicionar promo\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_div_31_a_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_31_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.sumirMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Produtos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Promo\xE7\xF5es");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Carrinho");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_div_31_a_12_Template, 2, 0, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_div_31_a_14_Template, 2, 0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_div_31_a_16_Template, 2, 0, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.eAdm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.eAdm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.eAdm);
        }
      }

      var HeaderComponent =
      /** @class */
      function () {
        var HeaderComponent = /*#__PURE__*/function () {
          function HeaderComponent(route, authService, fb, cadastroService) {
            _classCallCheck(this, HeaderComponent);

            this.route = route;
            this.authService = authService;
            this.fb = fb;
            this.cadastroService = cadastroService;
            this.mudar = false;
            this.eAdm = this.authService.eadm();
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
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this36 = this;

              this.authService.mostrarMenu.subscribe(function (mostrar) {
                return _this36.eAdm = mostrar;
              });
              this.createForm();
              this.nome();
            } // mudar apos o http

          }, {
            key: "nome",
            value: function nome() {
              var _this37 = this;

              this.cadastroService.getLogin().subscribe(function (res) {
                _this37.usuario = res;
              });
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
          return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_login_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["CadastroService"]));
        };

        HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: HeaderComponent,
          selectors: [["app-header"]],
          decls: 32,
          vars: 5,
          consts: [[1, "navbar", "navbar-expand-lg", "nav-bg"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", "id", "btn-mobile", 1, "navbar-toggler", "botao", 3, "click"], [1, "fa-solid", "fa-bars", "p-1"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "nav_menu-principal", 3, "click"], ["src", "assets/img/logo.png", "alt", "foto de hamburgue gostoso", "width", "100", "height", "100"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["routerLink", "produtos-categorias", 1, "nav-link"], [1, "fa-solid", "fa-store"], ["routerLink", "promocoes", 1, "nav-link"], [1, "fa-solid", "fa-percent"], ["routerLink", "comprar", 1, "nav-link"], [1, "fa-sharp", "fa-solid", "fa-cart-plus"], ["class", "nav-link", "routerLink", "adicionar-produto", 4, "ngIf"], ["class", "nav-link", "routerLink", "adicionar-promocao", 4, "ngIf"], ["class", "nav-link", "routerLink", "registrar", 4, "ngIf"], [1, "align-content-between", "d-flex"], [1, "mx-4", "my-auto"], [1, "btn", "botao", 3, "click"], [1, "fa-solid", "fa-arrow-right-from-bracket", "ms-2"], ["class", "d-flex flex-column nav-bg nav-mobile", 3, "click", 4, "ngIf"], ["routerLink", "adicionar-produto", 1, "nav-link"], [1, "fa-solid", "fa-circle-plus"], ["routerLink", "adicionar-promocao", 1, "nav-link"], ["routerLink", "registrar", 1, "nav-link"], [1, "fa-solid", "fa-user"], [1, "d-flex", "flex-column", "nav-bg", "nav-mobile", 3, "click"], ["routerLink", "produtos-categorias", 1, "nav-link", "mx-2", "nav-first"], ["routerLink", "promocoes", 1, "nav-link", "mx-2"], ["class", "nav-link mx-2", "routerLink", "adicionar-produto", 4, "ngIf"], ["routerLink", "adicionar-produto", 1, "nav-link", "mx-2"]],
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

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Produtos");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Promo\xE7\xF5es");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Carrinho");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HeaderComponent_a_20_Template, 3, 0, "a", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HeaderComponent_a_22_Template, 3, 0, "a", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HeaderComponent_a_24_Template, 3, 0, "a", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_28_listener() {
                return ctx.sair();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sair");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HeaderComponent_div_31_Template, 17, 3, "div", 21);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eAdm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eAdm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eAdm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bem vindo ", ctx.usuario.name, "");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mudar);
            }
          },
          directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
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
          }, {
            type: _service_service_login_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["CadastroService"]
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