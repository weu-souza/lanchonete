(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _paths_promocoes_promocoes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paths/promocoes/promocoes.component */ "./src/app/paths/promocoes/promocoes.component.ts");
/* harmony import */ var _paths_adicionar_produto_adicionar_produto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paths/adicionar-produto/adicionar-produto.component */ "./src/app/paths/adicionar-produto/adicionar-produto.component.ts");
/* harmony import */ var _paths_historico_vendas_historico_vendas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paths/historico-vendas/historico-vendas.component */ "./src/app/paths/historico-vendas/historico-vendas.component.ts");
/* harmony import */ var _paths_adicionar_ingrediente_adicionar_ingrediente_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paths/adicionar-ingrediente/adicionar-ingrediente.component */ "./src/app/paths/adicionar-ingrediente/adicionar-ingrediente.component.ts");
/* harmony import */ var _paths_nao_encontrada_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paths/nao-encontrada/nao-encontrada.component */ "./src/app/paths/nao-encontrada/nao-encontrada.component.ts");
/* harmony import */ var _paths_comprar_comprar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paths/comprar/comprar.component */ "./src/app/paths/comprar/comprar.component.ts");
/* harmony import */ var _paths_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./paths/login/login.component */ "./src/app/paths/login/login.component.ts");
/* harmony import */ var _paths_registro_registro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paths/registro/registro.component */ "./src/app/paths/registro/registro.component.ts");
/* harmony import */ var _paths_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./paths/guard/auth.guard */ "./src/app/paths/guard/auth.guard.ts");
/* harmony import */ var _paths_guard_guard_adm_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./paths/guard/guard-adm.guard */ "./src/app/paths/guard/guard-adm.guard.ts");














const routes = [{
        path: 'produtos',
        loadChildren: () => __webpack_require__.e(/*! import() | paths-produtos-produtos-module */ "paths-produtos-produtos-module").then(__webpack_require__.bind(null, /*! ./paths/produtos/produtos.module */ "./src/app/paths/produtos/produtos.module.ts")).then(m => m.ProdutosModule),
        canActivate: [_paths_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
    },
    {
        path: 'produtos-categorias',
        loadChildren: () => __webpack_require__.e(/*! import() | paths-produtos-categoria-produtos-categoria-module */ "paths-produtos-categoria-produtos-categoria-module").then(__webpack_require__.bind(null, /*! ./paths/produtos-categoria/produtos-categoria.module */ "./src/app/paths/produtos-categoria/produtos-categoria.module.ts")).then(m => m.ProdutosCategoriaModule),
        canActivate: [_paths_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
    },
    { path: '', redirectTo: 'produtos-categorias', pathMatch: 'full', canActivate: [_paths_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'promocoes', component: _paths_promocoes_promocoes_component__WEBPACK_IMPORTED_MODULE_2__["PromocoesComponent"], canActivate: [_paths_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'adicionar-produto', component: _paths_adicionar_produto_adicionar_produto_component__WEBPACK_IMPORTED_MODULE_3__["AdicionarProdutoComponent"], canActivate: [_paths_guard_guard_adm_guard__WEBPACK_IMPORTED_MODULE_11__["GuardAdmGuard"], _paths_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'historico-vendas', component: _paths_historico_vendas_historico_vendas_component__WEBPACK_IMPORTED_MODULE_4__["HistoricoVendasComponent"], canActivate: [_paths_guard_guard_adm_guard__WEBPACK_IMPORTED_MODULE_11__["GuardAdmGuard"], _paths_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'adicionar-ingredientes', component: _paths_adicionar_ingrediente_adicionar_ingrediente_component__WEBPACK_IMPORTED_MODULE_5__["AdicionarIngredienteComponent"], canActivate: [_paths_guard_guard_adm_guard__WEBPACK_IMPORTED_MODULE_11__["GuardAdmGuard"], _paths_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'comprar', component: _paths_comprar_comprar_component__WEBPACK_IMPORTED_MODULE_7__["ComprarComponent"], canActivate: [_paths_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'login', component: _paths_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'registrar', component: _paths_registro_registro_component__WEBPACK_IMPORTED_MODULE_9__["RegistroComponent"] },
    { path: '**', component: _paths_nao_encontrada_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_6__["NaoEncontradaComponent"] },
];
let AppRoutingModule = /** @class */ (() => {
    class AppRoutingModule {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
})();

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _paths_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paths/service/auth.service */ "./src/app/paths/service/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _paths_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paths/footer/footer.component */ "./src/app/paths/footer/footer.component.ts");
/* harmony import */ var _paths_nao_logado_nao_logado_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paths/nao-logado/nao-logado.component */ "./src/app/paths/nao-logado/nao-logado.component.ts");
/* harmony import */ var _paths_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paths/header/header.component */ "./src/app/paths/header/header.component.ts");








function AppComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nao-logado");
} }
function AppComponent_app_header_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
} }
let AppComponent = /** @class */ (() => {
    class AppComponent {
        constructor(authService) {
            this.authService = authService;
            this.mostrarMenu = this.authService.estaAutenticado();
            this.title = 'lanchonete';
        }
        // tslint:disable-next-line:use-lifecycle-interface
        ngOnInit() {
            this.authService.mostrarMenu.subscribe(mostrar => this.mostrarMenu = mostrar);
        }
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_paths_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 2, consts: [["class", "d-grid"], ["naologado", ""], [1, "bg-container"], [4, "ngIf", "ngIfElse"], [1, "container-app", "my-5", "justify-content-around", "me-lg-auto", "ms-lg-5", "me-md-auto", "ms-md-2", "me-sm-auto", "me-sm-2"], [1, "footer-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        } if (rf & 2) {
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostrarMenu)("ngIfElse", _r0);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _paths_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _paths_nao_logado_nao_logado_component__WEBPACK_IMPORTED_MODULE_5__["NaoLogadoComponent"], _paths_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]], styles: [".bg-container[_ngcontent-%COMP%] {\n  background: #EEEEEE;\n  position: relative;\n  min-height: 90vh;\n  width: 100%;\n  padding-bottom: 1rem;\n}\n.bg-container[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsbUJBRlE7RUFHUixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBSEY7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSEoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYnV0dG9uOiAjRTdBQjlBO1xyXG4kY29sb3ItYmc6ICNFREU5RDU7XHJcbiRjb2xvci0yOiAjREY3ODU3O1xyXG4kY29sb3ItMzogI0VFRUVFRTtcclxuLmJnLWNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItMztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDo5MHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG5cclxuICAuZm9vdGVyLWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcmVtO1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuIl19 */"] });
    return AppComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _paths_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _paths_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paths/header/header.component */ "./src/app/paths/header/header.component.ts");
/* harmony import */ var _paths_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paths/footer/footer.component */ "./src/app/paths/footer/footer.component.ts");
/* harmony import */ var _paths_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paths/login/login.component */ "./src/app/paths/login/login.component.ts");
/* harmony import */ var _paths_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paths/pedidos/pedidos.component */ "./src/app/paths/pedidos/pedidos.component.ts");
/* harmony import */ var _paths_registro_registro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./paths/registro/registro.component */ "./src/app/paths/registro/registro.component.ts");
/* harmony import */ var _paths_promocoes_promocoes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paths/promocoes/promocoes.component */ "./src/app/paths/promocoes/promocoes.component.ts");
/* harmony import */ var _paths_adicionar_produto_adicionar_produto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./paths/adicionar-produto/adicionar-produto.component */ "./src/app/paths/adicionar-produto/adicionar-produto.component.ts");
/* harmony import */ var _paths_historico_vendas_historico_vendas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./paths/historico-vendas/historico-vendas.component */ "./src/app/paths/historico-vendas/historico-vendas.component.ts");
/* harmony import */ var _paths_adicionar_ingrediente_adicionar_ingrediente_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./paths/adicionar-ingrediente/adicionar-ingrediente.component */ "./src/app/paths/adicionar-ingrediente/adicionar-ingrediente.component.ts");
/* harmony import */ var _paths_nao_encontrada_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./paths/nao-encontrada/nao-encontrada.component */ "./src/app/paths/nao-encontrada/nao-encontrada.component.ts");
/* harmony import */ var _paths_comprar_comprar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./paths/comprar/comprar.component */ "./src/app/paths/comprar/comprar.component.ts");
/* harmony import */ var _paths_service_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./paths/service/auth.service */ "./src/app/paths/service/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _paths_nao_logado_nao_logado_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./paths/nao-logado/nao-logado.component */ "./src/app/paths/nao-logado/nao-logado.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




















let AppModule = /** @class */ (() => {
    class AppModule {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_paths_service_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"]
            ]] });
    return AppModule;
})();

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _paths_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _paths_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _paths_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _paths_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_7__["PedidosComponent"],
        _paths_registro_registro_component__WEBPACK_IMPORTED_MODULE_8__["RegistroComponent"],
        _paths_promocoes_promocoes_component__WEBPACK_IMPORTED_MODULE_9__["PromocoesComponent"],
        _paths_adicionar_produto_adicionar_produto_component__WEBPACK_IMPORTED_MODULE_10__["AdicionarProdutoComponent"],
        _paths_historico_vendas_historico_vendas_component__WEBPACK_IMPORTED_MODULE_11__["HistoricoVendasComponent"],
        _paths_adicionar_ingrediente_adicionar_ingrediente_component__WEBPACK_IMPORTED_MODULE_12__["AdicionarIngredienteComponent"],
        _paths_nao_encontrada_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_13__["NaoEncontradaComponent"],
        _paths_comprar_comprar_component__WEBPACK_IMPORTED_MODULE_14__["ComprarComponent"],
        _paths_nao_logado_nao_logado_component__WEBPACK_IMPORTED_MODULE_17__["NaoLogadoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _paths_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _paths_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _paths_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _paths_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_7__["PedidosComponent"],
                    _paths_registro_registro_component__WEBPACK_IMPORTED_MODULE_8__["RegistroComponent"],
                    _paths_promocoes_promocoes_component__WEBPACK_IMPORTED_MODULE_9__["PromocoesComponent"],
                    _paths_adicionar_produto_adicionar_produto_component__WEBPACK_IMPORTED_MODULE_10__["AdicionarProdutoComponent"],
                    _paths_historico_vendas_historico_vendas_component__WEBPACK_IMPORTED_MODULE_11__["HistoricoVendasComponent"],
                    _paths_adicionar_ingrediente_adicionar_ingrediente_component__WEBPACK_IMPORTED_MODULE_12__["AdicionarIngredienteComponent"],
                    _paths_nao_encontrada_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_13__["NaoEncontradaComponent"],
                    _paths_comprar_comprar_component__WEBPACK_IMPORTED_MODULE_14__["ComprarComponent"],
                    _paths_nao_logado_nao_logado_component__WEBPACK_IMPORTED_MODULE_17__["NaoLogadoComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"]
                ],
                providers: [_paths_service_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/paths/adicionar-ingrediente/adicionar-ingrediente.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/paths/adicionar-ingrediente/adicionar-ingrediente.component.ts ***!
  \********************************************************************************/
/*! exports provided: AdicionarIngredienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdicionarIngredienteComponent", function() { return AdicionarIngredienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _service_produto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/produto.service */ "./src/app/paths/service/produto.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function AdicionarIngredienteComponent_div_8_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdicionarIngredienteComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdicionarIngredienteComponent_div_8_small_1_Template, 2, 0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formAddProduto.controls["nome"].hasError("required"));
} }
function AdicionarIngredienteComponent_div_13_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdicionarIngredienteComponent_div_13_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser maior que 00,00. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdicionarIngredienteComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdicionarIngredienteComponent_div_13_small_1_Template, 2, 0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdicionarIngredienteComponent_div_13_small_2_Template, 2, 0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formAddProduto.controls["preco"].hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formAddProduto.controls["preco"].hasError("min"));
} }
function AdicionarIngredienteComponent_div_18_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdicionarIngredienteComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdicionarIngredienteComponent_div_18_small_1_Template, 2, 0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formAddProduto.controls["nome"].hasError("required"));
} }
let AdicionarIngredienteComponent = /** @class */ (() => {
    class AdicionarIngredienteComponent {
        constructor(fb, produtoService) {
            this.fb = fb;
            this.produtoService = produtoService;
        }
        ngOnInit() {
            this.createForm();
        }
        createForm() {
            this.formAddProduto = this.fb.group({
                nome: [this.produto.nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                imagem: [this.produto.imagem, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                preco: [this.produto.preco, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
                ingredientes: [this.produto.ingrediente, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
        }
        texto() {
            return 'escolha uma imagem';
        }
        imagem(event) {
            this.span = document.getElementById('span_imagem');
            const inputTarget = event.target;
            const file = inputTarget.files[0];
            if (file) {
                const reader = new FileReader();
                reader.addEventListener('load', (e) => {
                    const readerTarget = e.target;
                    const img = document.createElement('img');
                    img.src = String(readerTarget.result);
                    img.classList.add('img');
                    this.span.innerHTML = '';
                    this.span.style.border = 'none';
                    this.span.style.background = 'none';
                    this.span.appendChild(img);
                    this.formAddProduto.value.imagem = String(readerTarget.result);
                });
                reader.readAsDataURL(file);
            }
            else {
                this.span.innerHTML = this.texto();
            }
        }
        addProduto() {
            this.produtoService.postProduto(this.formAddProduto.value);
            console.log('produto adicionada');
        }
        addPromocao() {
            this.produtoService.postPromocoes(this.formAddProduto.value);
            console.log('promoção adicionada');
        }
        atualizarPromocao() {
        }
        atualizarProduto() {
        }
    }
    AdicionarIngredienteComponent.ɵfac = function AdicionarIngredienteComponent_Factory(t) { return new (t || AdicionarIngredienteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"])); };
    AdicionarIngredienteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdicionarIngredienteComponent, selectors: [["app-adicionar-ingrediente"]], decls: 37, vars: 25, consts: [[1, "contato-bg", "p-5", "rounded", "d-grid", 3, "formGroup"], [1, "mx-auto", "d-grid", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], [1, "mb-3", "d-grid", "mx-auto", "mb-5", "div-input"], ["for", "produto", 1, "form-label"], ["type", "text", "id", "produto", "placeholder", "nome do produto", "formControlName", "nome", 1, "form-control", "border-0"], [4, "ngIf"], ["for", "preco", 1, "form-label"], ["type", "number", "id", "preco", "placeholder", "R$ 00,00", "formControlName", "preco", 1, "form-control", "border-0"], ["for", "texto", 1, "form-label"], ["id", "texto", "placeholder", "digite o ingrediente...", "formControlName", "ingredientes", 1, "form-control"], [1, "mb-3", "mx-auto"], ["for", "formFile", 1, "form-label"], ["id", "span_imagem", 1, "p-2", "rounded", "img-label", 3, "innerHtml"], ["type", "file", "accept", "image/*", "id", "formFile", "formControlName", "imagem", 1, "form-control", 3, "change"], [1, "d-flex", "mx-auto"], [1, "col-auto"], ["type", "submit", 1, "btn", "mb-3", 3, "disabled", "click"], [1, "col-auto", "ms-5"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]], template: function AdicionarIngredienteComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "pre\u00E7o ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdicionarIngredienteComponent_Template_input_change_22_listener($event) { return ctx.imagem($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdicionarIngredienteComponent_Template_button_click_25_listener() { return ctx.addProduto(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Adicionar Produto ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdicionarIngredienteComponent_Template_button_click_28_listener() { return ctx.addPromocao(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Adicionar Promo\u00E7\u00E3o ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdicionarIngredienteComponent_Template_button_click_32_listener() { return ctx.atualizarProduto(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Atualizar Produto ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdicionarIngredienteComponent_Template_button_click_35_listener() { return ctx.addPromocao(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Atualizar Promo\u00E7\u00E3o ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formAddProduto);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["nome"].valid)("invalid", ctx.formAddProduto.controls["nome"].invalid && (ctx.formAddProduto.controls["nome"].touched || ctx.formAddProduto.controls["nome"].dirty));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["nome"].invalid && (ctx.formAddProduto.controls["nome"].touched || ctx.formAddProduto.controls["nome"].dirty));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["preco"].valid)("invalid", ctx.formAddProduto.controls["preco"].invalid && (ctx.formAddProduto.controls["preco"].touched || ctx.formAddProduto.controls["preco"].dirty));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["preco"].invalid && (ctx.formAddProduto.controls["preco"].touched || ctx.formAddProduto.controls["preco"].dirty));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["ingredientes"].valid)("invalid", ctx.formAddProduto.controls["ingredientes"].invalid && (ctx.formAddProduto.controls["ingredientes"].touched || ctx.formAddProduto.controls["ingredientes"].dirty));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["ingredientes"].invalid && (ctx.formAddProduto.controls["ingredientes"].touched || ctx.formAddProduto.controls["ingredientes"].dirty));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.texto(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["imagem"].valid)("invalid", ctx.formAddProduto.controls["imagem"].invalid && (ctx.formAddProduto.controls["imagem"].touched || ctx.formAddProduto.controls["imagem"].dirty));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formAddProduto.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formAddProduto.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formAddProduto.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formAddProduto.invalid);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: [".contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 50%;\n}\n.contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-registro[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n  width: 25%;\n}\n@media (max-width: 500px) {\n  .contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .contato-bg[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus, .contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  color: #DF7857;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  width: 400px;\n  aspect-ratio: 16/9;\n  background: #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #aaa;\n  border: 2px dashed currentColor;\n  cursor: pointer;\n  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]:hover {\n  color: #999;\n  background: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvYWRpY2lvbmFyLWluZ3JlZGllbnRlL2FkaWNpb25hci1pbmdyZWRpZW50ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkU7RUFDRSw2QkFBQTtFQUNBLFVBQUE7QUFsQko7QUFvQkk7RUFDRSxjQXRCSTtFQXVCSiw0QkFyQlE7QUFHZDtBQXNCRTtFQUNFLFVBQUE7QUFwQko7QUFxQkk7RUFGRjtJQUdJLFVBQUE7RUFsQko7QUFDRjtBQXNCRTtFQTFCQSxXQUFBO0VBQ0EsbUJBWmE7RUFhYixnQkFQUztFQVFULDRCQVZZO0FBaUJkO0FBbUJFO0VBQ0UsVUFBQTtBQWpCSjtBQW1CRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQWpCSjtBQW1CRTtFQUNFLDBCQUFBO0FBakJKO0FBb0JFO0VBQ0UsK0RBN0NVO0FBMkJkO0FBcUJFO0VBQ0UsNEJBcERVO0FBaUNkO0FBa0JFO0VBQ0UsNEJBcERVO0FBaUNkO0FBdUJFO0VBQ0UsYUFBQTtBQXJCSjtBQXdCRTtFQUNFLDRCQTdEVTtBQXVDZDtBQXFCRTtFQUNFLDRCQTdEVTtBQXVDZDtBQTBCRTtFQUNFLDRCQWxFVTtFQW1FVixjQXJFTTtBQTZDVjtBQTRCRTtFQUNFLDRCQXhFVTtFQXlFVixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVFQUFBO0FBMUJKO0FBNEJJO0VBQ0UsZUFBQTtBQTFCTjtBQThCRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQTVCSiIsImZpbGUiOiJzcmMvYXBwL3BhdGhzL2FkaWNpb25hci1pbmdyZWRpZW50ZS9hZGljaW9uYXItaW5ncmVkaWVudGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYnV0dG9uOiAjRTdBQjlBO1xyXG4kY29sb3ItYmc6ICNFREU5RDU7XHJcbiRjb2xvci0yOiAjREY3ODU3O1xyXG4kY29sb3ItMzogIzYxNzE0MztcclxuJGZvbnQtcm9ib3RvOiAncm9ib3RvJywgc2VyaWY7XHJcbiRmb250LWJhYmU6ICdSYWpkaGFuaScsIHNhbnMtc2VyaWY7XHJcbiRmb250LTcwMDogNzAwO1xyXG4kY29sb3ItaG92ZXI6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZWNkMiAwJSwgI2ZjYjY5ZiAxMDAlKTtcclxuXHJcbkBtaXhpbiBib3RhbygpIHtcclxuXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWJ1dHRvbjtcclxuICBmb250LXdlaWdodDogJGZvbnQtNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbn1cclxuXHJcblxyXG4uY29udGF0by1iZyB7XHJcbiAgLmgxLWJnIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAuaDEtcmVnaXN0cm8ge1xyXG4gICAgICBjb2xvcjogJGNvbG9yLTI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICAuZGl2LWlucHV0e1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9iYWNrZ3JvdW5kOiAkY29sb3ItYmc7XHJcbiAgYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGJvdGFvXHJcbiAgfVxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIGlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1udW1iZXJdLGlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cyAsdGV4dGFyZWF7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6dGV4dGZpZWxkO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1ob3ZlcjtcclxuICB9XHJcblxyXG4gIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgICBjb2xvcjogJGNvbG9yLTI7XHJcblxyXG4gIH1cclxuXHJcbiAgLmltZy1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYXNwZWN0LXJhdGlvOiAxNi85O1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2FhYTtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCBjdXJyZW50Q29sb3I7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAuaW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmltZy1sYWJlbDpob3ZlciB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"] });
    return AdicionarIngredienteComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdicionarIngredienteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adicionar-ingrediente',
                templateUrl: './adicionar-ingrediente.component.html',
                styleUrls: ['./adicionar-ingrediente.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _service_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/paths/adicionar-produto/adicionar-produto.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/paths/adicionar-produto/adicionar-produto.component.ts ***!
  \************************************************************************/
/*! exports provided: AdicionarProdutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdicionarProdutoComponent", function() { return AdicionarProdutoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _classe_produto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classe/produto */ "./src/app/paths/classe/produto.ts");
/* harmony import */ var _service_produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/produto.service */ "./src/app/paths/service/produto.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AdicionarProdutoComponent_div_8_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdicionarProdutoComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdicionarProdutoComponent_div_8_small_1_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formAddProduto.controls["nome"].hasError("required"));
} }
let AdicionarProdutoComponent = /** @class */ (() => {
    class AdicionarProdutoComponent {
        constructor(fb, produtoService) {
            this.fb = fb;
            this.produtoService = produtoService;
            this.produto = new _classe_produto__WEBPACK_IMPORTED_MODULE_2__["Produto"]();
        }
        ngOnInit() {
            this.createForm();
        }
        createForm() {
            this.formAddProduto = this.fb.group({
                nome: [this.produto.nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                imagem: [this.produto.imagem, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
        }
        texto() {
            return 'escolha uma imagem';
        }
        imagem(event) {
            this.span = document.getElementById('span_imagem');
            const inputTarget = event.target;
            const file = inputTarget.files[0];
            if (file) {
                const reader = new FileReader();
                reader.addEventListener('load', (e) => {
                    const readerTarget = e.target;
                    const img = document.createElement('img');
                    img.src = String(readerTarget.result);
                    img.classList.add('img');
                    this.span.innerHTML = '';
                    this.span.style.border = 'none';
                    this.span.style.background = 'none';
                    this.span.appendChild(img);
                    this.formAddProduto.value.imagem = String(readerTarget.result);
                });
                reader.readAsDataURL(file);
            }
            else {
                this.span.innerHTML = this.texto();
            }
        }
        enviar() {
            this.produtoService.postProdutoLista(this.formAddProduto.value);
        }
        atualizar() {
            console.log('atualizar', this.formAddProduto.value);
        }
    }
    AdicionarProdutoComponent.ɵfac = function AdicionarProdutoComponent_Factory(t) { return new (t || AdicionarProdutoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"])); };
    AdicionarProdutoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdicionarProdutoComponent, selectors: [["app-contato"]], decls: 21, vars: 15, consts: [[1, "contato-bg", "p-5", "rounded", "d-grid", 3, "formGroup"], [1, "mx-auto", "d-grid", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], [1, "mb-3", "d-grid", "mx-auto", "mb-5", "div-input"], ["for", "email", 1, "form-label"], ["type", "text", "id", "email", "placeholder", "Digite um nome...", "formControlName", "nome", 1, "form-control", "border-0"], [4, "ngIf"], [1, "mb-3", "mx-auto"], ["for", "formFile", 1, "form-label"], ["id", "span_imagem", 1, "p-2", "rounded", "img-label", 3, "innerHtml"], ["type", "file", "accept", "image/*", "id", "formFile", "formControlName", "imagem", 1, "form-control", 3, "change"], [1, "col-auto", "mx-auto"], ["type", "submit", 1, "btn", "mb-3", 3, "disabled", "click"], ["type", "submit", 1, "btn", "mb-3", "ms-4", 3, "disabled", "click"], [3, "src"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]], template: function AdicionarProdutoComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdicionarProdutoComponent_Template_input_change_12_listener($event) { return ctx.imagem($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdicionarProdutoComponent_Template_button_click_14_listener() { return ctx.enviar(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Enviar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdicionarProdutoComponent_Template_button_click_16_listener() { return ctx.atualizar(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Atualizar ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formAddProduto);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["nome"].valid)("invalid", ctx.formAddProduto.controls["nome"].invalid && (ctx.formAddProduto.controls["nome"].touched || ctx.formAddProduto.controls["nome"].dirty));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formAddProduto.controls["nome"].invalid && (ctx.formAddProduto.controls["nome"].touched || ctx.formAddProduto.controls["nome"].dirty));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.texto(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formAddProduto.controls["imagem"].valid)("invalid", ctx.formAddProduto.controls["imagem"].invalid && (ctx.formAddProduto.controls["imagem"].touched || ctx.formAddProduto.controls["imagem"].dirty));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formAddProduto.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formAddProduto.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.produto.nome);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.produto.imagem, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 50%;\n}\n.contato-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-registro[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n  width: 25%;\n}\n@media (max-width: 500px) {\n  .contato-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n.contato-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.contato-bg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  color: #DF7857;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  width: 400px;\n  aspect-ratio: 16/9;\n  background: #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #aaa;\n  border: 2px dashed currentColor;\n  cursor: pointer;\n  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.contato-bg[_ngcontent-%COMP%]   .img-label[_ngcontent-%COMP%]:hover {\n  color: #999;\n  background: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvYWRpY2lvbmFyLXByb2R1dG8vYWRpY2lvbmFyLXByb2R1dG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJFO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FBbEJKO0FBb0JJO0VBQ0UsY0F0Qkk7RUF1QkosNEJBckJRO0FBR2Q7QUFzQkU7RUFDRSxVQUFBO0FBcEJKO0FBcUJJO0VBRkY7SUFHSSxVQUFBO0VBbEJKO0FBQ0Y7QUFxQkU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFuQko7QUFxQkU7RUE3QkEsV0FBQTtFQUNBLG1CQVphO0VBYWIsZ0JBUFU7RUFRViw0QkFWWTtBQXFCZDtBQWtCRTtFQUNFLFVBQUE7QUFoQko7QUFrQkU7RUFDRSwrREF4Q1c7QUF3QmY7QUFrQkU7RUFDRSw0QkE5Q1U7QUE4QmQ7QUFlRTtFQUNFLDRCQTlDVTtBQThCZDtBQW1CRTtFQUNFLGFBQUE7QUFqQko7QUFvQkU7RUFDRSw0QkF0RFU7QUFvQ2Q7QUFpQkU7RUFDRSw0QkF0RFU7QUFvQ2Q7QUFxQkU7RUFDRSw0QkExRFU7RUEyRFYsY0E3RE07QUEwQ1Y7QUFxQkU7RUFDRSw0QkE5RFU7RUErRFYsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSx1RUFBQTtBQW5CSjtBQW9CSTtFQUNFLGVBQUE7QUFsQk47QUFxQkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFuQkoiLCJmaWxlIjoic3JjL2FwcC9wYXRocy9hZGljaW9uYXItcHJvZHV0by9hZGljaW9uYXItcHJvZHV0by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci1idXR0b246ICNFN0FCOUE7XHJcbiRjb2xvci1iZzogI0VERTlENTtcclxuJGNvbG9yLTI6ICNERjc4NTc7XHJcbiRjb2xvci0zOiAjNjE3MTQzO1xyXG4kZm9udC1yb2JvdG86ICdyb2JvdG8nLCBzZXJpZjtcclxuJGZvbnQtYmFiZTogJ1JhamRoYW5pJywgc2Fucy1zZXJpZiA7XHJcbiRmb250LTcwMDogIDcwMCA7XHJcbiRjb2xvci1ob3ZlcjogIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZWNkMiAwJSwgI2ZjYjY5ZiAxMDAlKTtcclxuXHJcbkBtaXhpbiBib3RhbygpIHtcclxuXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWJ1dHRvbjtcclxuICBmb250LXdlaWdodDogJGZvbnQtNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbn1cclxuXHJcblxyXG4uY29udGF0by1iZ3tcclxuICAuaDEtYmcge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgIC5oMS1yZWdpc3RybyB7XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItMjtcclxuICAgICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIC5kaXYtaW5wdXR7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vYmFja2dyb3VuZDogJGNvbG9yLWJnO1xyXG4gIGlucHV0OmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIGJ1dHRvbntcclxuICAgIEBpbmNsdWRlIGJvdGFvXHJcbiAgfVxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIGJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1ob3ZlcjtcclxuICB9XHJcbiAgaW5wdXQ6OnBsYWNlaG9sZGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuXHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9ZmlsZV17XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgdGV4dGFyZWE6OnBsYWNlaG9sZGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuXHJcbiAgfVxyXG4gIGxhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAgIGNvbG9yOiAkY29sb3ItMjtcclxuICB9XHJcbiAgLmltZy1sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBhc3BlY3QtcmF0aW86IDE2Lzk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIGN1cnJlbnRDb2xvcjtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlLWluLW91dDtcclxuICAgIC5pbWd7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgLmltZy1sYWJlbDpob3ZlcntcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });
    return AdicionarProdutoComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdicionarProdutoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contato',
                templateUrl: './adicionar-produto.component.html',
                styleUrls: ['./adicionar-produto.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _service_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/paths/classe/produto.ts":
/*!*****************************************!*\
  !*** ./src/app/paths/classe/produto.ts ***!
  \*****************************************/
/*! exports provided: Produto, Carrinho, Promocao, Produtos, ProdutosLista, Promocoes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Produto", function() { return Produto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carrinho", function() { return Carrinho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Promocao", function() { return Promocao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Produtos", function() { return Produtos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosLista", function() { return ProdutosLista; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Promocoes", function() { return Promocoes; });
class Produto {
}
class Carrinho {
}
class Promocao {
}
const Produtos = [
    {
        id: 1,
        nome: 'hamburguer',
        imagem: 'assets/img/hamburguer.jpg',
        preco: 25,
        ingrediente: 'pão, carne, queijo, alface,tomate.'
    },
    {
        id: 2,
        nome: 'pizza',
        imagem: 'assets/img/pizza.jpeg',
        preco: 30,
        ingrediente: 'pão, carne, batata, alface,tomate.'
    },
    {
        id: 3,
        nome: 'refrigerante',
        imagem: 'assets/img/Refrigerentes.webp',
        preco: 30,
        ingrediente: 'refrigerantes latas e 2 litros'
    }
];
const ProdutosLista = [
    { id: 1, nome: 'hamburguer', imagem: 'assets/img/hamburguer.jpg' },
    { id: 2, nome: 'pizza', imagem: 'assets/img/pizza.jpeg' },
    { id: 3, nome: 'refrigerante', imagem: 'assets/img/Refrigerentes.webp' },
];
const Promocoes = [
    { id: 1, nome: 'Combo 1', imagem: 'assets/img/combopizzarefri.webp', preco: 60, detalhe: '2 pizza com um refrigerante 2 litros.' },
    { id: 2, nome: 'Combo 2', imagem: 'assets/img/comboBatataHamburguer.jpeg', preco: 40, detalhe: '4 hamburguer com batata.' },
    { id: 3, nome: 'Combo 3', imagem: 'assets/img/comboHamburguer.png', preco: 20, detalhe: 'hamburguer com refrigerante e batata.' }
];


/***/ }),

/***/ "./src/app/paths/classe/usuario.ts":
/*!*****************************************!*\
  !*** ./src/app/paths/classe/usuario.ts ***!
  \*****************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
class Usuario {
}


/***/ }),

/***/ "./src/app/paths/comprar/comprar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/paths/comprar/comprar.component.ts ***!
  \****************************************************/
/*! exports provided: ComprarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComprarComponent", function() { return ComprarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_carrinho_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/carrinho.service */ "./src/app/paths/service/carrinho.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ComprarComponent_div_4_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComprarComponent_div_4_li_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const carrinho_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.removeProdutoCarrinho(carrinho_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const carrinho_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", carrinho_r4.imagem, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](carrinho_r4.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, carrinho_r4.preco, "BRL"));
} }
function ComprarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ComprarComponent_div_4_li_2_Template, 9, 6, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComprarComponent_div_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.comprar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Comprar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.itensCarrinho);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total:", ctx_r0.total, "");
} }
function ComprarComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Nenhum produto foi adicionado ao carrinho");
} }
let ComprarComponent = /** @class */ (() => {
    class ComprarComponent {
        constructor(route, carrinhoService) {
            this.route = route;
            this.carrinhoService = carrinhoService;
            this.total = 0;
        }
        ngOnInit() {
            this.itensCarrinho = this.carrinhoService.obtemCarrinho();
        }
        calculaTotal() {
            this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * this.itensCarrinho.length), 0);
        }
        removeProdutoCarrinho(id) {
            this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== id);
            this.carrinhoService.removerCarrinho(id);
            this.calculaTotal();
        }
        comprar() {
            alert('parabéns, você finalizou a sua compra!');
            this.carrinhoService.limparCarrinho();
            this.route.navigate(['produtos']);
        }
    }
    ComprarComponent.ɵfac = function ComprarComponent_Factory(t) { return new (t || ComprarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_carrinho_service__WEBPACK_IMPORTED_MODULE_2__["CarrinhoService"])); };
    ComprarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComprarComponent, selectors: [["app-comprar"]], decls: 7, vars: 2, consts: [[1, "mx-auto", "d-flex", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], ["class", "d-flex row div-carrinho ", 4, "ngIf", "ngIfElse"], ["semProduto", ""], [1, "d-flex", "row", "div-carrinho"], ["class", "justify-content-between align-items-center d-flex", 4, "ngFor", "ngForOf"], [1, "cart-total", "ms-4"], [1, "buy-button", "btn", "w-auto", 3, "click"], [1, "justify-content-between", "align-items-center", "d-flex"], [3, "src"], [1, "remove-button", 3, "click"], [1, "fa-solid", "fa-xmark"]], template: function ComprarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Carrinho");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ComprarComponent_div_4_Template, 7, 2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ComprarComponent_ng_template_5_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itensCarrinho.length > 0)("ngIfElse", _r1);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: ["section[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 80%;\n}\nsection[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-registro[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\nsection[_ngcontent-%COMP%]   .div-carrinho[_ngcontent-%COMP%] {\n  margin-left: 20%;\n  margin-right: 20%;\n}\nsection[_ngcontent-%COMP%]   .cart-title[_ngcontent-%COMP%] {\n  font-size: 44px;\n  color: #000;\n  font-weight: 700;\n  padding: 8px 0;\n  font-family: \"roboto\", serif;\n}\nsection[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  border-radius: 8px;\n  overflow: hidden;\n  margin: 10px 0;\n  height: 100px;\n  font-family: \"Rajdhani\", sans-serif;\n  font-size: 18px;\n  color: #617143;\n  background: #EDE9D5;\n}\nsection[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  display: block;\n}\nsection[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%] {\n  background-color: red;\n  border: none;\n  color: white;\n  padding: 20px;\n  height: 100%;\n  transition: 0.2s all;\n}\nsection[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.9);\n}\nsection[_ngcontent-%COMP%]   .cart-total[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #000;\n  font-weight: 700;\n  padding: 8px 0;\n  font-family: \"roboto\", serif;\n}\nsection[_ngcontent-%COMP%]   .buy-button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n}\nsection[_ngcontent-%COMP%]   .buy-button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvY29tcHJhci9jb21wcmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVFO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FBZEo7QUFnQkk7RUFDRSxjQWxCSTtFQW1CSiw0QkFoQlE7QUFFZDtBQWtCRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFoQko7QUFrQkU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQXpCTztFQTBCUCxjQUFBO0VBQ0EsNEJBN0JVO0FBYWQ7QUFtQkU7RUFDRSxxREFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQXJDUTtFQXNDUixlQUFBO0VBQ0EsY0ExQ007RUE0Q04sbUJBL0NPO0FBNkJYO0FBb0JJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBbEJOO0FBcUJJO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFuQk47QUFzQkk7RUFDRSx1QkFBQTtBQXBCTjtBQXdCRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBckVVO0FBK0NkO0FBMEJFO0VBckVBLFdBQUE7RUFDQSxtQkFUYTtFQVViLGdCQUpTO0FBa0RYO0FBMEJFO0VBQ0UsK0RBaEZVO0FBd0RkIiwiZmlsZSI6InNyYy9hcHAvcGF0aHMvY29tcHJhci9jb21wcmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWJnOiAjRURFOUQ1O1xyXG4kY29sb3ItYnV0dG9uOiAjRTdBQjlBO1xyXG4kY29sb3ItMjogI0RGNzg1NztcclxuJGNvbG9yLTM6ICM2MTcxNDM7XHJcbiRjb2xvci1ob3ZlcjogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZlY2QyIDAlLCAjZmNiNjlmIDEwMCUpO1xyXG4kZm9udC1yb2JvdG86ICdyb2JvdG8nLCBzZXJpZjtcclxuJGZvbnQtYmFiZTogJ1JhamRoYW5pJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtNzAwOiA3MDA7XHJcbkBtaXhpbiBib3RhbygpIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItYnV0dG9uO1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC03MDA7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIC5oMS1iZyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICAgLmgxLXJlZ2lzdHJvIHtcclxuICAgICAgY29sb3I6ICRjb2xvci0yO1xyXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICAgIH1cclxuICB9XHJcbiAgLmRpdi1jYXJyaW5ob3tcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MjAlIDtcclxuICB9XHJcbiAgLmNhcnQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA0NHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnQtNzAwO1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIH1cclxuXHJcbiAgbGkge1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMjlweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LWJhYmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogJGNvbG9yLTM7XHJcblxyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWJnO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlbW92ZS1idXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHRyYW5zaXRpb246IC4ycyBhbGw7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlbW92ZS1idXR0b246aG92ZXIge1xyXG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJ0LXRvdGFsIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICB9XHJcblxyXG5cclxuICAuYnV5LWJ1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBib3RhbztcclxuXHJcbiAgfVxyXG5cclxuICAuYnV5LWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItaG92ZXI7XHJcblxyXG4gIH1cclxufVxyXG5cclxuIl19 */"] });
    return ComprarComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComprarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comprar',
                templateUrl: './comprar.component.html',
                styleUrls: ['./comprar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_carrinho_service__WEBPACK_IMPORTED_MODULE_2__["CarrinhoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/paths/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/paths/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FooterComponent = /** @class */ (() => {
    class FooterComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 20, vars: 0, consts: [[1, "footer__container"], [1, "footer__title"], [1, "footer__about-text"], [1, "footer__title", "ms-4"], [1, "fa-sharp", "fa-solid", "fa-envelope"], [1, "fa-solid", "fa-phone"], [1, "fa-brands", "fa-whatsapp"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
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
        } }, styles: ["footer[_ngcontent-%COMP%] {\n  background: #EDE9D5;\n  font-family: \"roboto\", serif;\n}\nfooter[_ngcontent-%COMP%]   .footer__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  flex-flow: row wrap;\n  padding: 20px;\n}\nfooter[_ngcontent-%COMP%]   .footer__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  color: #DF7857;\n  margin-bottom: 5px;\n}\nfooter[_ngcontent-%COMP%]   .footer__about-text[_ngcontent-%COMP%] {\n  width: 400px;\n  text-align: justify;\n}\nfooter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #DF7857;\n}\nfooter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n@media (max-width: 800px) {\n  footer[_ngcontent-%COMP%]   .footer__about-text[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNFLG1CQVRTO0VBVVQsNEJBTFk7QUFGZDtBQVNFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBUEo7QUFVRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBcEJNO0VBcUJOLGtCQUFBO0FBUko7QUFZRTtFQUNFLFlBQUE7RUFFQSxtQkFBQTtBQVhKO0FBZUU7RUFDRSxjQWpDTTtBQW9CVjtBQWdCRTtFQUNFLGNBQUE7QUFkSjtBQW1CQTtFQUVJO0lBQ0UsWUFBQTtFQWpCSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGF0aHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci1iZzogI0VERTlENTtcclxuJGNvbG9yLWJ1dHRvbjogI0U3QUI5QTtcclxuJGNvbG9yLTI6ICNERjc4NTc7XHJcbiRjb2xvci0zOiAjNjE3MTQzO1xyXG4kY29sb3ItaG92ZXI6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZWNkMiAwJSwgI2ZjYjY5ZiAxMDAlKTtcclxuJGZvbnQtcm9ib3RvOiAncm9ib3RvJywgc2VyaWY7XHJcbiRmb250LWJhYmU6ICdSYWpkaGFuaScsIHNhbnMtc2VyaWY7XHJcbiRtYXgtd2lkaXRoOiA2MDBweDtcclxuZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItYmc7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuXHJcbiAgLmZvb3Rlcl9fY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9fdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogJGNvbG9yLTI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAkZm9udC1mYW1pbHk6ICRmb250LWJhYmU7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyX19hYm91dC10ZXh0IHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuXHJcbiAgICB0ZXh0LWFsaWduOmp1c3RpZnk7XHJcbiAgfVxyXG5cclxuXHJcbiAgaSB7XHJcbiAgICBjb2xvcjogJGNvbG9yLTI7XHJcbiAgfVxyXG5cclxuICBsaSB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIGZvb3RlciB7XHJcbiAgICAuZm9vdGVyX19hYm91dC10ZXh0IHtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });
    return FooterComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/paths/guard/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/paths/guard/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/paths/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let AuthGuard = /** @class */ (() => {
    class AuthGuard {
        constructor(authService, route) {
            this.authService = authService;
            this.route = route;
        }
        canActivate(next, state) {
            if (!this.authService.estaAutenticado()) {
                this.route.navigate(['login']);
                return false;
            }
            return true;
        }
    }
    AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
    return AuthGuard;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/paths/guard/guard-adm.guard.ts":
/*!************************************************!*\
  !*** ./src/app/paths/guard/guard-adm.guard.ts ***!
  \************************************************/
/*! exports provided: GuardAdmGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardAdmGuard", function() { return GuardAdmGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/paths/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let GuardAdmGuard = /** @class */ (() => {
    class GuardAdmGuard {
        constructor(authService, route) {
            this.authService = authService;
            this.route = route;
        }
        canActivate(next, state) {
            if (!this.authService.estaAutenticadoAdm() && this.authService.estaAutenticado()) {
                this.route.navigate(['nao-encontrada']);
                return false;
            }
            return true;
        }
    }
    GuardAdmGuard.ɵfac = function GuardAdmGuard_Factory(t) { return new (t || GuardAdmGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    GuardAdmGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GuardAdmGuard, factory: GuardAdmGuard.ɵfac, providedIn: 'root' });
    return GuardAdmGuard;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuardAdmGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/paths/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/paths/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/paths/service/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function HeaderComponent_a_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Adicionar produto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Adicionar ingrediente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Historico de vendas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_36_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Adicionar produto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_36_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Adicionar ingrediente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_36_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Historico de vendas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_36_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_36_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.sumirMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Produtos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Promo\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Carrinho");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_div_36_a_13_Template, 2, 0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_div_36_a_15_Template, 2, 0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderComponent_div_36_a_17_Template, 2, 0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HeaderComponent_div_36_a_19_Template, 2, 0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_36_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.sair(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sair");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.eAdm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.eAdm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.eAdm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.eAdm);
} }
let HeaderComponent = /** @class */ (() => {
    class HeaderComponent {
        constructor(route, authService) {
            this.route = route;
            this.authService = authService;
            this.mudar = false;
            this.eAdm = this.authService.estaAutenticadoAdm();
        }
        aparecerMenu() {
            const btn = document.getElementById('btn-mobile');
            if (!this.mudar) {
                btn.innerHTML = '<i class="fa-solid fa-xmark p-1" ></i>';
                this.mudar = true;
            }
            else {
                btn.innerHTML = '<i class="fa-solid fa-bars p-1"></i>';
                this.mudar = false;
            }
        }
        ngOnInit() {
            this.authService.mostrarMenu.subscribe(mostrar => this.eAdm = mostrar);
        }
        sair() {
            alert('saindo...');
            this.authService.logout();
            this.route.navigate(['login']);
        }
        sumirMenu() {
            const btn = document.getElementById('btn-mobile');
            if (this.mudar) {
                btn.innerHTML = '<i class="fa-solid fa-bars p-1"></i>';
                this.mudar = false;
            }
        }
    }
    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 37, vars: 5, consts: [[1, "navbar", "navbar-expand-lg", "nav-bg"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", "id", "btn-mobile", 1, "navbar-toggler", "botao", 3, "click"], [1, "fa-solid", "fa-bars", "p-1"], [1, "navbar-toggler", "border-0", "w-50"], ["role", "search", 1, "d-flex"], ["type", "search", "placeholder", "digite o produto aqui...", "aria-label", "Search", 1, "form-control", "fo", "me-2"], ["type", "submit", 1, "btn", "botao"], [1, "fa-solid", "fa-magnifying-glass"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "nav_menu-principal", 3, "click"], ["src", "assets/img/16-hamburguer.svg", "alt", "foto de hamburgue gostoso", "width", "100", "height", "100"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["routerLink", "produtos-categorias", 1, "nav-link"], ["routerLink", "promocoes", 1, "nav-link"], ["routerLink", "comprar", 1, "nav-link"], ["class", "nav-link", "routerLink", "adicionar-produto", 4, "ngIf"], ["class", "nav-link", "routerLink", "adicionar-ingredientes", 4, "ngIf"], ["class", "nav-link", "routerLink", "historico-vendas", 4, "ngIf"], ["class", "nav-link", "routerLink", "registrar", 4, "ngIf"], ["role", "search", 1, "d-flex", "ms-5"], ["type", "search", "placeholder", "digite o produto aqui...", "aria-label", "Search", 1, "form-control", "me-2"], [1, "btn", "botao", "ms-4", 3, "click"], [1, "fa-solid", "fa-arrow-right-from-bracket", "ms-2"], ["class", "d-flex flex-column nav-bg nav-mobile", 3, "click", 4, "ngIf"], ["routerLink", "adicionar-produto", 1, "nav-link"], ["routerLink", "adicionar-ingredientes", 1, "nav-link"], ["routerLink", "historico-vendas", 1, "nav-link"], ["routerLink", "registrar", 1, "nav-link"], [1, "d-flex", "flex-column", "nav-bg", "nav-mobile", 3, "click"], ["src", "assets/img/16-hamburguer.svg", "alt", "foto de hamburgue gostoso", "width", "100", "height", "200"], ["routerLink", "produtos-categorias", 1, "nav-link", "mx-2", "nav-first"], ["routerLink", "promocoes", 1, "nav-link", "mx-2"], ["class", "nav-link mx-2", "routerLink", "adicionar-produto", 4, "ngIf"], ["class", "nav-link mx-2", "routerLink", "adicionar-ingredientes", 4, "ngIf"], ["class", "nav-link mx-2", "routerLink", "historico-vendas", 4, "ngIf"], [1, "btn", "sair-mobile", 3, "click"], ["routerLink", "adicionar-produto", 1, "nav-link", "mx-2"], ["routerLink", "adicionar-ingredientes", 1, "nav-link", "mx-2"], ["routerLink", "historico-vendas", 1, "nav-link", "mx-2"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() { return ctx.aparecerMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_9_listener() { return ctx.sumirMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Produtos");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Promo\u00E7\u00F5es");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Carrinho");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HeaderComponent_a_22_Template, 2, 0, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HeaderComponent_a_24_Template, 2, 0, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HeaderComponent_a_26_Template, 2, 0, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HeaderComponent_a_28_Template, 2, 0, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_33_listener() { return ctx.sair(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sair");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HeaderComponent_div_36_Template, 23, 4, "div", 24);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eAdm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eAdm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eAdm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eAdm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mudar);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".nav-bg[_ngcontent-%COMP%] {\n  background: #EDE9D5;\n}\n.nav-bg[_ngcontent-%COMP%]   .botao[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n}\n.nav-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .nav-bg[_ngcontent-%COMP%]   .botao[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.nav-bg[_ngcontent-%COMP%]   .botao[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.nav-bg[_ngcontent-%COMP%]   .nav_menu-principal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #617143;\n  font-family: \"Rajdhani\", sans-serif;\n  font-size: 1.25rem;\n  position: relative;\n}\n.nav-bg[_ngcontent-%COMP%]   .nav_menu-principal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  height: 2px;\n  width: 0;\n  background: #DF7857;\n  margin-top: 4px;\n  transition: 0.3s;\n  position: absolute;\n}\n.nav-bg[_ngcontent-%COMP%]   .nav_menu-principal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after, .nav-bg[_ngcontent-%COMP%]   .nav_menu-principal[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   a.ativo[_ngcontent-%COMP%]::after {\n  width: 100%;\n}\n.nav-mobile[_ngcontent-%COMP%] {\n  width: 140px;\n}\n.nav-mobile[_ngcontent-%COMP%]   .nav-first[_ngcontent-%COMP%] {\n  border-top: 1px solid #DF7857;\n}\n.nav-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #617143;\n  font-family: \"Rajdhani\", sans-serif;\n  border-bottom: 1px solid #DF7857;\n  padding: 10px;\n}\n.nav-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.nav-mobile[_ngcontent-%COMP%]   .sair-mobile[_ngcontent-%COMP%] {\n  color: #617143;\n  font-family: \"Rajdhani\", sans-serif;\n  border-bottom: 1px solid #DF7857;\n  padding: 10px;\n}\n.nav-mobile[_ngcontent-%COMP%]   .sair-mobile[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQkE7RUFDRSxtQkFsQlM7QUFFWDtBQWtCRTtFQVZBLFdBQUE7RUFDQSxtQkFWYTtFQVdiLGdCQUxTO0FBQVg7QUFrQkU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFoQko7QUFtQkU7RUFFRSwrREE1QlU7QUFVZDtBQXNCSTtFQUNFLGNBbENJO0VBbUNKLG1DQWhDTTtFQWlDTixrQkFBQTtFQUNBLGtCQUFBO0FBcEJOO0FBdUJJO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQTlDSTtFQStDSixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXJCTjtBQXdCSTtFQUNFLFdBQUE7QUF0Qk47QUE2QkE7RUFDRSxZQUFBO0FBMUJGO0FBNEJFO0VBQ0UsNkJBQUE7QUExQko7QUE2QkU7RUFDRSxjQW5FTTtFQW9FTixtQ0FqRVE7RUFrRVIsZ0NBQUE7RUFFQSxhQUFBO0FBNUJKO0FBK0JFO0VBQ0UsK0RBMUVVO0FBNkNkO0FBZ0NFO0VBQ0UsY0EvRU07RUFnRk4sbUNBN0VRO0VBOEVSLGdDQUFBO0VBRUEsYUFBQTtBQS9CSjtBQWtDRTtFQUNFLCtEQXRGVTtBQXNEZCIsImZpbGUiOiJzcmMvYXBwL3BhdGhzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYmc6ICNFREU5RDU7XHJcbiRjb2xvci1idXR0b246ICNFN0FCOUE7XHJcbiRjb2xvci0yOiAjREY3ODU3O1xyXG4kY29sb3ItMzogIzYxNzE0MztcclxuJGNvbG9yLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmVjZDIgMCUsICNmY2I2OWYgMTAwJSk7XHJcbiRmb250LXJvYm90bzogJ3JvYm90bycsIHNlcmlmO1xyXG4kZm9udC1iYWJlOiAnUmFqZGhhbmknLCBzYW5zLXNlcmlmO1xyXG4kZm9udC03MDA6IDcwMDtcclxuQG1peGluIGJvdGFvKCkge1xyXG5cclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItYnV0dG9uO1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC03MDA7XHJcblxyXG59XHJcblxyXG5cclxuLm5hdi1iZyB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWJnO1xyXG5cclxuICAuYm90YW8ge1xyXG4gICAgQGluY2x1ZGUgYm90YW87XHJcblxyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Zm9jdXMsIC5ib3Rhbzpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG4gIC5ib3Rhbzpob3ZlciB7XHJcblxyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWhvdmVyO1xyXG4gIH1cclxuXHJcbiAgLm5hdl9tZW51LXByaW5jaXBhbCB7XHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6ICRjb2xvci0zO1xyXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtYmFiZTtcclxuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgYTphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvci0yO1xyXG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuXHJcbiAgICBhOmhvdmVyOmFmdGVyLCAuaGVhZGVyLW1lbnUgYS5hdGl2bzo6YWZ0ZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuLm5hdi1tb2JpbGUge1xyXG4gIHdpZHRoOiAxNDBweDtcclxuXHJcbiAgLm5hdi1maXJzdCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGNvbG9yLTI7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAkY29sb3ItMztcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1iYWJlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci0yO1xyXG5cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1ob3ZlcjtcclxuICB9XHJcblxyXG4gIC5zYWlyLW1vYmlsZSB7XHJcbiAgICBjb2xvcjogJGNvbG9yLTM7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtYmFiZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItMjtcclxuXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNhaXItbW9iaWxlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1ob3ZlcjtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });
    return HeaderComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/paths/historico-vendas/historico-vendas.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/paths/historico-vendas/historico-vendas.component.ts ***!
  \**********************************************************************/
/*! exports provided: HistoricoVendasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricoVendasComponent", function() { return HistoricoVendasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



let HistoricoVendasComponent = /** @class */ (() => {
    class HistoricoVendasComponent {
        constructor() {
            this.total = 20;
            this.preco = 20;
        }
        ngOnInit() {
        }
        remover() {
        }
    }
    HistoricoVendasComponent.ɵfac = function HistoricoVendasComponent_Factory(t) { return new (t || HistoricoVendasComponent)(); };
    HistoricoVendasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistoricoVendasComponent, selectors: [["app-historico-vendas"]], decls: 35, vars: 8, consts: [[1, "tabela"], [1, "mx-auto", "d-grid", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], [1, "table", "mx-auto", "w-75"], [1, "head-table"], ["scope", "col"], [1, "tbody-table"], ["scope", "row"], [1, "border-0"], [1, "btn", "remove-button", 3, "click"], [1, "fa-solid", "fa-xmark"], ["rowspan", "3", 1, "tabela"]], template: function HistoricoVendasComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "pre\u00E7o");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoricoVendasComponent_Template_button_click_26_listener() { return ctx.remover(); });
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
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 2, ctx.preco, "BRL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](34, 5, ctx.total, "BRL"));
        } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]], styles: [".tabela[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 80%;\n}\n.tabela[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-registro[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\n.tabela[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #E7AB9A;\n  color: #fff;\n  font-family: \"roboto\", serif;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  font-family: \"Rajdhani\", sans-serif;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #EDE9D5;\n  font-family: \"roboto\", serif;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n}\n.tabela[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.tabela[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\n  font-family: \"Rajdhani\", sans-serif;\n}\n.tabela[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #E7AB9A;\n  color: #fff;\n  font-family: \"roboto\", serif;\n}\n.tabela[_ngcontent-%COMP%]   .tabela[_ngcontent-%COMP%]:hover {\n  background: #f8f8f8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvaGlzdG9yaWNvLXZlbmRhcy9oaXN0b3JpY28tdmVuZGFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCRTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtBQWhCSjtBQWtCSTtFQUNFLGNBcEJJO0VBcUJKLDRCQWpCTztBQUNiO0FBb0JFO0VBQ0UsbUJBM0JVO0VBNEJWLFdBQUE7RUFDQSw0QkF4QlM7QUFNYjtBQXFCRTtFQUtFLG1DQS9CTztBQVFYO0FBbUJJO0VBQ0UsbUJBbkNLO0VBb0NMLDRCQTlCTztBQWFiO0FBb0JJO0VBNUJGLFdBQUE7RUFDQSxtQkFYWTtFQVlaLGdCQUxVO0FBZ0JaO0FBZ0JJO0VBQ0UsK0RBdENTO0FBd0JmO0FBaUJFO0VBTUUsbUNBM0NPO0FBdUJYO0FBZUk7RUFDRSxtQkE3Q1E7RUE4Q1IsV0FBQTtFQUNBLDRCQTFDTztBQTZCYjtBQWtCRTtFQUNFLG1CQUFBO0FBaEJKIiwiZmlsZSI6InNyYy9hcHAvcGF0aHMvaGlzdG9yaWNvLXZlbmRhcy9oaXN0b3JpY28tdmVuZGFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWJnOiAjRURFOUQ1O1xyXG4kY29sb3ItYnV0dG9uOiNFN0FCOUE7XHJcbiRjb2xvci0yOiAjREY3ODU3O1xyXG4kY29sb3ItaG92ZXI6ICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmVjZDIgMCUsICNmY2I2OWYgMTAwJSk7XHJcbiRjb2xvci0zOiM2MTcxNDM7XHJcblxyXG4kZm9udC1yb2JvdG86J3JvYm90bycsIHNlcmlmO1xyXG4kZm9udC1iYWJlOidSYWpkaGFuaScsIHNhbnMtc2VyaWY7XHJcbiRmb250LTcwMDogIDcwMCA7XHJcbkBtaXhpbiBib3RhbygpIHtcclxuXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWJ1dHRvbjtcclxuICBmb250LXdlaWdodDogJGZvbnQtNzAwO1xyXG5cclxufVxyXG4udGFiZWxhe1xyXG4gIC5oMS1iZyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICAgLmgxLXJlZ2lzdHJvIHtcclxuICAgICAgY29sb3I6ICRjb2xvci0yO1xyXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICAgIH1cclxuICB9XHJcbiAgdGhlYWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYnV0dG9uO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICB9XHJcbiAgdGJvZHl7XHJcbiAgICB0aHtcclxuICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWJnO1xyXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gICAgfVxyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LWJhYmU7XHJcbiAgICAucmVtb3ZlLWJ1dHRvbntAaW5jbHVkZSBib3RhbygpfVxyXG4gICAgLnJlbW92ZS1idXR0b246aG92ZXJ7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1ob3Zlcjt9XHJcbiAgfVxyXG5cclxuICB0Zm9vdHtcclxuICAgIHRoe1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYnV0dG9uO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAgIH1cclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1iYWJlO1xyXG5cclxuICB9XHJcbiAgLnRhYmVsYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19 */"] });
    return HistoricoVendasComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoricoVendasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-historico-vendas',
                templateUrl: './historico-vendas.component.html',
                styleUrls: ['./historico-vendas.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/paths/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/paths/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classe_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classe/usuario */ "./src/app/paths/classe/usuario.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/paths/service/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function LoginComponent_div_8_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email invalido! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_8_small_1_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formLogin.controls["email"].hasError("email"));
} }
let LoginComponent = /** @class */ (() => {
    class LoginComponent {
        constructor(route, authService, fb) {
            this.route = route;
            this.authService = authService;
            this.fb = fb;
            this.usuario = new _classe_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
        }
        ngOnInit() {
            this.createForm();
        }
        createForm() {
            this.formLogin = this.fb.group({
                email: [this.usuario.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                senha: [this.usuario.senha, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
        }
        logar() {
            // apos fazer o http vou mudar
            if (this.authService.login(this.formLogin.value) && this.authService.login(this.formLogin.value)) {
                this.route.navigate(['/']);
                return;
            }
            alert('usuario incorreto!');
            this.usuario.email = '';
            this.usuario.senha = '';
        }
        registrar() {
            // apos fazer o http vou mudar
            this.route.navigate(['registrar']);
        }
    }
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 19, vars: 11, consts: [[1, "login-bg", "p-5", "rounded", "d-grid", 3, "formGroup", "ngSubmit"], [1, "mx-auto", "d-grid", "mb-5", "h1-bg"], [1, "h1-login", "mb-3", "mx-auto"], [1, "mb-3", "d-grid", "mx-auto", "mb-3", "div-input"], ["for", "staticEmail", 1, "col-sm-2", "col-form-label"], ["type", "email", "id", "staticEmail", "placeholder", "email@email.com", "formControlName", "email", 1, "form-control"], [4, "ngIf"], [1, "mb-3", "d-grid", "mx-auto", "mb-4", "div-input"], ["for", "inputPassword", 1, "col-sm-2", "col-form-label"], ["type", "password", "id", "inputPassword", "placeholder", "digite sua senha", "formControlName", "senha", 1, "form-control"], [1, "d-flex", "mx-auto", "my-5"], [1, "col-auto"], ["type", "submit", "value", "login", 1, "btn", "mb-3", "botao", 3, "disabled"], [1, "col-auto", "ms-3"], ["type", "submit", 1, "btn", "mb-3", 3, "click"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() { return ctx.logar(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 2, 1, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Senha");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() { return ctx.registrar(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "registrar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formLogin);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formLogin.controls["email"].valid)("invalid", ctx.formLogin.controls["email"].invalid && (ctx.formLogin.controls["email"].touched || ctx.formLogin.controls["email"].dirty));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formLogin.controls["email"].invalid && (ctx.formLogin.controls["email"].touched || ctx.formLogin.controls["email"].dirty));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formLogin.controls["senha"].valid)("invalid", ctx.formLogin.controls["senha"].invalid && (ctx.formLogin.controls["email"].touched || ctx.formLogin.controls["senha"].dirty));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formLogin.invalid);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".login-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 50%;\n}\n.login-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-login[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\n.login-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .login-bg[_ngcontent-%COMP%]   .botao[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n  font-family: \"roboto\", serif;\n}\n.login-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .login-bg[_ngcontent-%COMP%]   .botao[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.login-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.login-bg[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n.login-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.login-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.login-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.login-bg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.login-bg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  color: #DF7857;\n}\n.login-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n  width: 25%;\n}\n@media (max-width: 500px) {\n  .login-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JJO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FBbkJOO0FBcUJNO0VBQ0UsY0F2QkU7RUF3QkYsNEJBdEJNO0FBR2Q7QUF5QkU7RUFyQkEsV0FBQTtFQUNBLG1CQVphO0VBYWIsZ0JBUFU7RUFRViw0QkFWWTtBQVNkO0FBc0JFO0VBQ0UsK0RBN0JXO0FBU2Y7QUF1QkU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFyQko7QUF1QkU7RUFDRSxVQUFBO0FBckJKO0FBdUJFO0VBQ0UsNEJBM0NVO0FBc0JkO0FBb0JFO0VBQ0UsNEJBM0NVO0FBc0JkO0FBeUJFO0VBQ0UsNEJBaERVO0FBeUJkO0FBc0JFO0VBQ0UsNEJBaERVO0FBeUJkO0FBMEJFO0VBQ0UsNEJBcERVO0VBcURWLGNBdkRNO0FBK0JWO0FBMkJFO0VBQ0UsVUFBQTtBQXpCSjtBQTBCSTtFQUZGO0lBR0ksVUFBQTtFQXZCSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGF0aHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYnV0dG9uOiAjRTdBQjlBO1xyXG4kY29sb3ItYmc6ICNFREU5RDU7XHJcbiRjb2xvci0yOiAjREY3ODU3O1xyXG4kY29sb3ItMzogIzYxNzE0MztcclxuJGZvbnQtcm9ib3RvOiAncm9ib3RvJywgc2VyaWY7XHJcbiRmb250LWJhYmU6ICdSYWpkaGFuaScsIHNhbnMtc2VyaWYgO1xyXG4kZm9udC03MDA6ICA3MDAgO1xyXG4kY29sb3ItaG92ZXI6ICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmVjZDIgMCUsICNmY2I2OWYgMTAwJSk7XHJcblxyXG5AbWl4aW4gYm90YW8oKSB7XHJcblxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1idXR0b247XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LTcwMDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG59XHJcblxyXG4ubG9naW4tYmd7XHJcblxyXG5cclxuICAgIC5oMS1iZyB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgICAgLmgxLWxvZ2luIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLTI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnV0dG9uLC5ib3Rhb3tcclxuICAgIEBpbmNsdWRlIGJvdGFvXHJcbiAgfVxyXG4gIGJ1dHRvbjpob3ZlciwgLmJvdGFvOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWhvdmVyO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgaW5wdXQ6OnBsYWNlaG9sZGVye1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuXHJcbiAgfVxyXG5cclxuICB0ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICB9XHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAgIGNvbG9yOiAkY29sb3ItMjtcclxuICB9XHJcblxyXG4gIC5kaXYtaW5wdXR7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"] });
    return LoginComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/paths/nao-encontrada/nao-encontrada.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/paths/nao-encontrada/nao-encontrada.component.ts ***!
  \******************************************************************/
/*! exports provided: NaoEncontradaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NaoEncontradaComponent", function() { return NaoEncontradaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NaoEncontradaComponent = /** @class */ (() => {
    class NaoEncontradaComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    NaoEncontradaComponent.ɵfac = function NaoEncontradaComponent_Factory(t) { return new (t || NaoEncontradaComponent)(); };
    NaoEncontradaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NaoEncontradaComponent, selectors: [["app-nao-encontrada"]], decls: 4, vars: 0, consts: [[1, "container"], [1, "fa-solid", "fa-x"]], template: function NaoEncontradaComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " p\u00E1gina n\u00E3o encontrada");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  height: 400px;\n}\n.container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 200px;\n  color: #CD1818;\n  margin-bottom: 60px;\n}\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 44px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvbmFvLWVuY29udHJhZGEvbmFvLWVuY29udHJhZGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUFGO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGNBVE07RUFVTixtQkFBQTtBQUNKO0FBRUU7RUFDRSxlQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wYXRocy9uYW8tZW5jb250cmFkYS9uYW8tZW5jb250cmFkYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci0yOiAjQ0QxODE4O1xyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDIwMHB4O1xyXG4gICAgY29sb3I6ICRjb2xvci0yO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogNDRweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
    return NaoEncontradaComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NaoEncontradaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nao-encontrada',
                templateUrl: './nao-encontrada.component.html',
                styleUrls: ['./nao-encontrada.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/paths/nao-logado/nao-logado.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/paths/nao-logado/nao-logado.component.ts ***!
  \**********************************************************/
/*! exports provided: NaoLogadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NaoLogadoComponent", function() { return NaoLogadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/paths/service/auth.service.ts");



let NaoLogadoComponent = /** @class */ (() => {
    class NaoLogadoComponent {
        constructor(loginService) {
        }
        ngOnInit() {
        }
    }
    NaoLogadoComponent.ɵfac = function NaoLogadoComponent_Factory(t) { return new (t || NaoLogadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
    NaoLogadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NaoLogadoComponent, selectors: [["app-nao-logado"]], decls: 4, vars: 0, consts: [[1, "navbar", "login-container"], [1, "container-fluid", "mx-auto"], [1, "navbar-brand", "mb-0", "mx-auto", "hamburguer"], [1, "fa-solid", "fa-burger"]], template: function NaoLogadoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: [".login-container[_ngcontent-%COMP%] {\n  background: #EDE9D5;\n}\n.login-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  font-weight: 700;\n  font-size: 40px;\n  color: #DF7857;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvbmFvLWxvZ2Fkby9uYW8tbG9nYWRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsbUJBSlM7QUFFWDtBQUdFO0VBQ0UsNEJBSlU7RUFLVixnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQVJNO0FBT1YiLCJmaWxlIjoic3JjL2FwcC9wYXRocy9uYW8tbG9nYWRvL25hby1sb2dhZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYmc6ICNFREU5RDU7XHJcbiRjb2xvci0yOiAjREY3ODU3O1xyXG4kZm9udC1yb2JvdG86ICdyb2JvdG8nLCBzZXJpZjtcclxuLmxvZ2luLWNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItYmc7XHJcbiAgaDF7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiAkY29sb3ItMjtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });
    return NaoLogadoComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NaoLogadoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nao-logado',
                templateUrl: './nao-logado.component.html',
                styleUrls: ['./nao-logado.component.scss']
            }]
    }], function () { return [{ type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/paths/pedidos/pedidos.component.ts":
/*!****************************************************!*\
  !*** ./src/app/paths/pedidos/pedidos.component.ts ***!
  \****************************************************/
/*! exports provided: PedidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosComponent", function() { return PedidosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PedidosComponent = /** @class */ (() => {
    class PedidosComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    PedidosComponent.ɵfac = function PedidosComponent_Factory(t) { return new (t || PedidosComponent)(); };
    PedidosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PedidosComponent, selectors: [["app-pedidos"]], decls: 2, vars: 0, template: function PedidosComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pedidos works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGhzL3BlZGlkb3MvcGVkaWRvcy5jb21wb25lbnQuc2NzcyJ9 */"] });
    return PedidosComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedidosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pedidos',
                templateUrl: './pedidos.component.html',
                styleUrls: ['./pedidos.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/paths/promocoes/promocoes.component.ts":
/*!********************************************************!*\
  !*** ./src/app/paths/promocoes/promocoes.component.ts ***!
  \********************************************************/
/*! exports provided: PromocoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromocoesComponent", function() { return PromocoesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classe_produto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classe/produto */ "./src/app/paths/classe/produto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/paths/service/auth.service.ts");
/* harmony import */ var _service_produto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/produto.service */ "./src/app/paths/service/produto.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function PromocoesComponent_div_1_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PromocoesComponent_div_1_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const produto_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.remover(produto_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PromocoesComponent_div_1_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PromocoesComponent_div_1_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.atualizar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PromocoesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PromocoesComponent_div_1_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.comprar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Comprar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PromocoesComponent_div_1_button_13_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PromocoesComponent_div_1_button_14_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const produto_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", produto_r1.imagem, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](produto_r1.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](produto_r1.detalhe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 6, produto_r1.preco, "BRL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.eAdm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.eAdm);
} }
let PromocoesComponent = /** @class */ (() => {
    class PromocoesComponent {
        constructor(route, authService, produtoService) {
            this.route = route;
            this.authService = authService;
            this.produtoService = produtoService;
            this.eAdm = this.authService.estaAutenticadoAdm();
            this.produtos = [];
            this.produto = new _classe_produto__WEBPACK_IMPORTED_MODULE_1__["Promocao"]();
        }
        ngOnInit() {
            this.produtoService.getPromocoes().subscribe(produto => this.produtos = produto);
        }
        comprar() {
            // vou mudar pra buscar pelo id quando for fazer o http
            this.route.navigate(['comprar']);
        }
        remover(id) {
            this.produtos = this.produtos.filter(produtos => produtos.id !== id);
            this.produtoService.excluirPromocoes(this.produto.id);
        }
        atualizar() {
        }
    }
    PromocoesComponent.ɵfac = function PromocoesComponent_Factory(t) { return new (t || PromocoesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_produto_service__WEBPACK_IMPORTED_MODULE_4__["ProdutoService"])); };
    PromocoesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PromocoesComponent, selectors: [["app-promocoes"]], decls: 2, vars: 1, consts: [[1, "row", "row-cols-1", "row-cols-md-2", "g-4", "w-100"], ["class", "card card-container p-2 ms-5", 4, "ngFor", "ngForOf"], [1, "card", "card-container", "p-2", "ms-5"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "d-flex", "justify-content-between"], [1, "btn", "btn-card", 3, "click"], ["class", "btn remove-button", 3, "click", 4, "ngIf"], [1, "btn", "remove-button", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "fa-solid", "fa-pen-to-square"]], template: function PromocoesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PromocoesComponent_div_1_Template, 15, 9, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.produtos);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: [".card-container[_ngcontent-%COMP%] {\n  width: 18rem;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  background: #EDE9D5;\n  color: #617143;\n  font-family: \"roboto\", serif;\n}\n.card-container[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n}\n.card-container[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.card-container[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n}\n.card-container[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvcHJvbW9jb2VzL3Byb21vY29lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlQTtFQUNFLFlBQUE7RUFDQSxxREFBQTtFQUVBLG1CQW5CUztFQW9CVCxjQWpCTztFQWtCUCw0QkFoQlc7QUFDYjtBQWdCRTtFQVpBLFdBQUE7RUFDQSxtQkFWWTtFQVdaLGdCQUxVO0FBSVo7QUFjRTtFQUNFLCtEQXhCVztBQVlmO0FBY0U7RUFsQkEsV0FBQTtFQUNBLG1CQVZZO0VBV1osZ0JBTFU7QUFZWjtBQVlFO0VBQ0UsK0RBOUJXO0FBb0JmIiwiZmlsZSI6InNyYy9hcHAvcGF0aHMvcHJvbW9jb2VzL3Byb21vY29lcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci1iZzogI0VERTlENTtcclxuJGNvbG9yLWJ1dHRvbjojRTdBQjlBO1xyXG4kY29sb3ItaG92ZXI6ICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmVjZDIgMCUsICNmY2I2OWYgMTAwJSk7XHJcbiRjb2xvci0zOiM2MTcxNDM7XHJcblxyXG4kZm9udC1yb2JvdG86J3JvYm90bycsIHNlcmlmO1xyXG4kZm9udC1iYWJlOidSYWpkaGFuaScsIHNhbnMtc2VyaWY7XHJcbiRmb250LTcwMDogIDcwMCA7XHJcbkBtaXhpbiBib3RhbygpIHtcclxuXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWJ1dHRvbjtcclxuICBmb250LXdlaWdodDogJGZvbnQtNzAwO1xyXG5cclxufVxyXG4uY2FyZC1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDE4cmVtO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xyXG5cclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItYmc7XHJcbiAgY29sb3I6ICRjb2xvci0zO1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgLmJ0bi1jYXJke1xyXG4gICAgQGluY2x1ZGUgYm90YW9cclxuICB9XHJcbiAgLmJ0bi1jYXJkOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWhvdmVyO1xyXG4gIH1cclxuICAucmVtb3ZlLWJ1dHRvbntcclxuICAgIEBpbmNsdWRlIGJvdGFvXHJcbiAgfVxyXG4gIC5yZW1vdmUtYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWhvdmVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
    return PromocoesComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromocoesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-promocoes',
                templateUrl: './promocoes.component.html',
                styleUrls: ['./promocoes.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _service_produto_service__WEBPACK_IMPORTED_MODULE_4__["ProdutoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/paths/registro/registro.component.ts":
/*!******************************************************!*\
  !*** ./src/app/paths/registro/registro.component.ts ***!
  \******************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _classe_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classe/usuario */ "./src/app/paths/classe/usuario.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/paths/service/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








function RegistroComponent_div_9_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email invalido! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_9_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistroComponent_div_9_small_1_Template, 2, 0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistroComponent_div_9_small_2_Template, 2, 0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formRegistro.controls["email"].hasError("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formRegistro.controls["email"].hasError("required"));
} }
function RegistroComponent_div_16_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistroComponent_div_16_small_1_Template, 2, 0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formRegistro.controls["senha"].hasError("required"));
} }
function RegistroComponent_div_23_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa de no minimo 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_23_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esse campo precisa ser preenchido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistroComponent_div_23_small_1_Template, 2, 0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistroComponent_div_23_small_2_Template, 2, 0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formRegistro.controls["nome"].hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formRegistro.controls["nome"].hasError("required"));
} }
function RegistroComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistroComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.registrar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "registrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.formRegistro.invalid);
} }
function RegistroComponent_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistroComponent_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.registrarAdm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "registrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.formRegistro.invalid);
} }
function RegistroComponent_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistroComponent_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.registrarAdm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "registrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.formRegistro.invalid);
} }
let RegistroComponent = /** @class */ (() => {
    class RegistroComponent {
        constructor(authService, fb) {
            this.authService = authService;
            this.fb = fb;
            this.mostrarBtn = !this.authService.estaAutenticadoAdm();
            this.usuario = new _classe_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
        }
        createForm() {
            this.formRegistro = this.fb.group({
                email: [this.usuario.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                senha: [this.usuario.senha, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                nome: [this.usuario.nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
        }
        ngOnInit() {
            this.createForm();
        }
        registrar() {
            console.log('registrar usuario', this.formRegistro.value);
        }
        registrarAdm() {
            console.log('registrarAdm', this.formRegistro.value);
        }
    }
    RegistroComponent.ɵfac = function RegistroComponent_Factory(t) { return new (t || RegistroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
    RegistroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistroComponent, selectors: [["app-registro"]], decls: 31, vars: 19, consts: [[1, "registro-bg"], [1, "d-grid", "py-5", 3, "formGroup"], [1, "mx-auto", "d-grid", "mb-5", "h1-bg"], [1, "h1-registro", "mb-3", "mx-auto"], [1, "mb-3", "div-input", "mx-auto"], ["for", "exampleFormControlInput1", 1, "form-label"], ["type", "email", "id", "exampleFormControlInput1", "placeholder", "name@example.com", "formControlName", "email", 1, "form-control"], [4, "ngIf"], [1, "mx-auto", "div-input"], [1, "col-auto"], ["for", "inputPassword6", 1, "col-form-label"], ["type", "password", "id", "inputPassword6", "formControlName", "senha", "placeholder", "insira sua senha...", 1, "form-control"], [1, "g-3", "mx-auto", "div-input"], ["for", "nome", 1, "col-form-label"], ["type", "text", "id", "nome", "formControlName", "nome", "placeholder", "insira seu nome...", 1, "form-control"], [1, "d-flex", "my-5"], [1, "col-auto", "mx-auto"], ["type", "submit", "routerLink", "/login", 1, "btn", "mb-3", "me-4"], ["type", "submit", "class", "btn  mb-3", 3, "disabled", "click", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "error-message"], ["type", "submit", 1, "btn", "mb-3", 3, "disabled", "click"]], template: function RegistroComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Voltar ao login");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RegistroComponent_button_28_Template, 2, 1, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RegistroComponent_button_29_Template, 2, 1, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RegistroComponent_button_30_Template, 2, 1, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formRegistro);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formRegistro.controls["email"].valid)("invalid", ctx.formRegistro.controls["email"].invalid && (ctx.formRegistro.controls["email"].touched || ctx.formRegistro.controls["email"].dirty));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formRegistro.controls["email"].invalid && (ctx.formRegistro.controls["email"].touched || ctx.formRegistro.controls["email"].dirty));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formRegistro.controls["senha"].valid)("invalid", ctx.formRegistro.controls["senha"].invalid && (ctx.formRegistro.controls["senha"].touched || ctx.formRegistro.controls["senha"].dirty));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formRegistro.controls["senha"].invalid && (ctx.formRegistro.controls["senha"].touched || ctx.formRegistro.controls["senha"].dirty));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("valid", ctx.formRegistro.controls["nome"].valid)("invalid", ctx.formRegistro.controls["nome"].invalid && (ctx.formRegistro.controls["nome"].touched || ctx.formRegistro.controls["nome"].dirty));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formRegistro.controls["nome"].invalid && (ctx.formRegistro.controls["nome"].touched || ctx.formRegistro.controls["nome"].dirty));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostrarBtn);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mostrarBtn);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mostrarBtn);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".registro-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  width: 50%;\n}\n.registro-bg[_ngcontent-%COMP%]   .h1-bg[_ngcontent-%COMP%]   .h1-registro[_ngcontent-%COMP%] {\n  color: #DF7857;\n  font-family: \"roboto\", serif;\n}\n.registro-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n  font-family: \"roboto\", serif;\n}\n.registro-bg[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n.registro-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.registro-bg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.registro-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"roboto\", serif;\n}\n.registro-bg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"roboto\", serif;\n}\n.registro-bg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"roboto\", serif;\n  color: #DF7857;\n}\n.registro-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n  width: 25%;\n}\n@media (max-width: 500px) {\n  .registro-bg[_ngcontent-%COMP%]   .div-input[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JFO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FBakJKO0FBbUJJO0VBQ0UsY0FyQkk7RUFzQkosNEJBcEJRO0FBR2Q7QUFzQkU7RUFsQkEsV0FBQTtFQUNBLG1CQVphO0VBYWIsZ0JBUFM7RUFRVCw0QkFWWTtBQVNkO0FBb0JFO0VBQ0UsVUFBQTtBQWxCSjtBQXFCRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQW5CSjtBQXNCRTtFQUNFLCtEQXBDVTtBQWdCZDtBQXVCRTtFQUNFLDRCQTNDVTtBQXNCZDtBQW9CRTtFQUNFLDRCQTNDVTtBQXNCZDtBQXlCRTtFQUNFLDRCQWhEVTtFQWlEVixjQW5ETTtBQTRCVjtBQXlCQTtFQUNFLFVBQUE7QUF2QkY7QUF3QkU7RUFGRjtJQUdBLFVBQUE7RUFyQkU7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhdGhzL3JlZ2lzdHJvL3JlZ2lzdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWJ1dHRvbjogI0U3QUI5QTtcclxuJGNvbG9yLWJnOiAjRURFOUQ1O1xyXG4kY29sb3ItMjogI0RGNzg1NztcclxuJGNvbG9yLTM6ICM2MTcxNDM7XHJcbiRmb250LXJvYm90bzogJ3JvYm90bycsIHNlcmlmO1xyXG4kZm9udC1iYWJlOiAnUmFqZGhhbmknLCBzYW5zLXNlcmlmO1xyXG4kZm9udC03MDA6IDcwMDtcclxuJGNvbG9yLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmVjZDIgMCUsICNmY2I2OWYgMTAwJSk7XHJcblxyXG5AbWl4aW4gYm90YW8oKSB7XHJcblxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1idXR0b247XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LTcwMDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG59XHJcblxyXG4ucmVnaXN0cm8tYmcge1xyXG4gIC5oMS1iZyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgLmgxLXJlZ2lzdHJvIHtcclxuICAgICAgY29sb3I6ICRjb2xvci0yO1xyXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBib3Rhb1xyXG4gIH1cclxuXHJcbiAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1ob3ZlcjtcclxuICB9XHJcblxyXG4gIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIH1cclxuXHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgICBjb2xvcjogJGNvbG9yLTI7XHJcbiAgfVxyXG4uZGl2LWlucHV0e1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbndpZHRoOiA1MCU7XHJcbiAgfVxyXG59XHJcblxyXG59XHJcbiJdfQ== */"] });
    return RegistroComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registro',
                templateUrl: './registro.component.html',
                styleUrls: ['./registro.component.scss']
            }]
    }], function () { return [{ type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/paths/service/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/paths/service/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let AuthService = /** @class */ (() => {
    class AuthService {
        constructor(router) {
            this.router = router;
            this.accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
            this.accessTokenAdm = 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.bQTnz6AuMJvmXXQsVPrxeQNvzDkimo7VNXxHeSBfClLufmCVZRUuyTwJF311JHuh';
            this.mostrarMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        estaAutenticado() {
            return !!sessionStorage.getItem('access-token');
        }
        estaAutenticadoAdm() {
            return !!sessionStorage.getItem('access-tokenAdm');
        }
        login(usuario) {
            if (usuario.email === 'adm@email.com' && usuario.senha === '123') {
                sessionStorage.setItem('access-tokenAdm', this.accessTokenAdm);
                sessionStorage.setItem('access-token', this.accessToken);
                this.mostrarMenu.emit(this.estaAutenticadoAdm());
                return true;
            }
            else if (usuario.email === 'weu@email.com' && usuario.senha === '123') {
                sessionStorage.setItem('access-token', this.accessToken);
                this.mostrarMenu.emit(this.estaAutenticado());
                return true;
            }
        }
        logout() {
            sessionStorage.clear();
            this.mostrarMenu.emit(false);
        }
    }
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
    return AuthService;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/paths/service/carrinho.service.ts":
/*!***************************************************!*\
  !*** ./src/app/paths/service/carrinho.service.ts ***!
  \***************************************************/
/*! exports provided: CarrinhoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoService", function() { return CarrinhoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CarrinhoService = /** @class */ (() => {
    class CarrinhoService {
        constructor() {
            this.carrinho = [];
        }
        obtemCarrinho() {
            this.carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
            return this.carrinho;
        }
        adicionarAoCarrinho(carrinho) {
            this.carrinho.push(carrinho);
            localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
        }
        removerCarrinho(id) {
            this.carrinho = this.carrinho.filter(item => item.id !== id);
        }
        limparCarrinho() {
            this.carrinho = [];
            localStorage.clear();
        }
    }
    CarrinhoService.ɵfac = function CarrinhoService_Factory(t) { return new (t || CarrinhoService)(); };
    CarrinhoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CarrinhoService, factory: CarrinhoService.ɵfac, providedIn: 'root' });
    return CarrinhoService;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarrinhoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/paths/service/produto.service.ts":
/*!**************************************************!*\
  !*** ./src/app/paths/service/produto.service.ts ***!
  \**************************************************/
/*! exports provided: ProdutoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoService", function() { return ProdutoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classe_produto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classe/produto */ "./src/app/paths/classe/produto.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let ProdutoService = /** @class */ (() => {
    class ProdutoService {
        constructor() {
            this.produtos = _classe_produto__WEBPACK_IMPORTED_MODULE_1__["ProdutosLista"];
            this.ingredientes = _classe_produto__WEBPACK_IMPORTED_MODULE_1__["Produtos"];
            this.promocoes = _classe_produto__WEBPACK_IMPORTED_MODULE_1__["Promocoes"];
        }
        postProduto(produtos) {
            return this.ingredientes.push(produtos);
        }
        postProdutoLista(produtos) {
            return this.produtos.push(produtos);
        }
        postPromocoes(produtos) {
            return this.promocoes.push(produtos);
        }
        excluirProdutoLista(id) {
            return this.produtos.filter(produto => produto.id !== id);
        }
        excluirIngredientes(id) {
            return this.ingredientes.filter(produto => produto.id !== id);
        }
        excluirPromocoes(id) {
            return this.promocoes.filter(produto => produto.id !== id);
        }
        getProdutosLista() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.produtos);
        }
        getPromocoes() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.promocoes);
        }
        obtemIngrediente() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.ingredientes);
        }
    }
    ProdutoService.ɵfac = function ProdutoService_Factory(t) { return new (t || ProdutoService)(); };
    ProdutoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProdutoService, factory: ProdutoService.ɵfac, providedIn: 'root' });
    return ProdutoService;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Workspace\ifg\java, spring, quarkus\ProjetoFinalPrWeb\lanchonete\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map