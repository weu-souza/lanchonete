(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paths-produtos-produtos-module"], {
    /***/
    "./src/app/paths/produtos/produtos-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/paths/produtos/produtos-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: ProdutosRoutingModule */

    /***/
    function srcAppPathsProdutosProdutosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProdutosRoutingModule", function () {
        return ProdutosRoutingModule;
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


      var _produtos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./produtos.component */
      "./src/app/paths/produtos/produtos.component.ts");

      var routes = [{
        path: '',
        component: _produtos_component__WEBPACK_IMPORTED_MODULE_2__["ProdutosComponent"]
      }];

      var ProdutosRoutingModule =
      /** @class */
      function () {
        var ProdutosRoutingModule = /*#__PURE__*/_createClass(function ProdutosRoutingModule() {
          _classCallCheck(this, ProdutosRoutingModule);
        });

        ProdutosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: ProdutosRoutingModule
        });
        ProdutosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function ProdutosRoutingModule_Factory(t) {
            return new (t || ProdutosRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return ProdutosRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProdutosRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutosRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/produtos/produtos.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/paths/produtos/produtos.component.ts ***!
      \******************************************************/

    /*! exports provided: ProdutosComponent */

    /***/
    function srcAppPathsProdutosProdutosComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProdutosComponent", function () {
        return ProdutosComponent;
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


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/auth.service */
      "./src/app/paths/service/auth.service.ts");
      /* harmony import */


      var _service_produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/produto.service */
      "./src/app/paths/service/produto.service.ts");
      /* harmony import */


      var _service_carrinho_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/carrinho.service */
      "./src/app/paths/service/carrinho.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ProdutosComponent_div_1_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdutosComponent_div_1_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var produto_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.remover(produto_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProdutosComponent_div_1_button_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdutosComponent_div_1_button_14_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.atualizar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProdutosComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdutosComponent_div_1_Template_a_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.comprar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Comprar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProdutosComponent_div_1_button_13_Template, 2, 0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProdutosComponent_div_1_button_14_Template, 2, 0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var produto_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", produto_r1.imagem, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](produto_r1.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](produto_r1.ingrediente);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 6, produto_r1.preco, "BRL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.eAdm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.eAdm);
        }
      }

      var ProdutosComponent =
      /** @class */
      function () {
        var ProdutosComponent = /*#__PURE__*/function () {
          function ProdutosComponent(route, authService, produtoService, carrinhoS) {
            _classCallCheck(this, ProdutosComponent);

            this.route = route;
            this.authService = authService;
            this.produtoService = produtoService;
            this.carrinhoS = carrinhoS;
            this.eAdm = this.authService.estaAutenticadoAdm();
            this.produtos = [];
          }

          _createClass(ProdutosComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this = this;

              this.produtoService.obtemIngrediente().subscribe(function (produto) {
                return _this.produtos = produto;
              });
            }
          }, {
            key: "comprar",
            value: function comprar() {
              // vou mudar pra buscar pelo id quando for fazer o http
              var produto = Object.assign({}, this.carrinho);
              this.carrinhoS.adicionarAoCarrinho(produto);
            }
          }, {
            key: "remover",
            value: function remover(id) {
              this.produtos = this.produtos.filter(function (produtos) {
                return produtos.id !== id;
              });
              this.produtoService.excluirIngredientes(this.produto.id);
            }
          }, {
            key: "atualizar",
            value: function atualizar() {}
          }]);

          return ProdutosComponent;
        }();

        ProdutosComponent.ɵfac = function ProdutosComponent_Factory(t) {
          return new (t || ProdutosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_carrinho_service__WEBPACK_IMPORTED_MODULE_4__["CarrinhoService"]));
        };

        ProdutosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ProdutosComponent,
          selectors: [["app-produtos"]],
          decls: 2,
          vars: 1,
          consts: [[1, "row", "row-cols-1", "row-cols-md-2", "g-4", "w-100"], ["class", "card card-container p-2 ms-5 ", 4, "ngFor", "ngForOf"], [1, "card", "card-container", "p-2", "ms-5"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "d-flex", "justify-content-between"], [1, "btn", "btn-card", 3, "click"], ["class", "btn remove-button", 3, "click", 4, "ngIf"], [1, "btn", "remove-button", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "fa-solid", "fa-pen-to-square"]],
          template: function ProdutosComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProdutosComponent_div_1_Template, 15, 9, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.produtos);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]],
          styles: [".card-container[_ngcontent-%COMP%] {\n  width: 18rem;\n  background: #EDE9D5;\n  color: #617143;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  font-family: \"roboto\", serif;\n}\n.card-container[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n}\n.card-container[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.card-container[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n}\n.card-container[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvcHJvZHV0b3MvcHJvZHV0b3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUE7RUFDRSxZQUFBO0VBQ0EsbUJBakJTO0VBa0JULGNBZk87RUFnQlAscURBQUE7RUFDQSw0QkFoQlc7QUFFYjtBQWVFO0VBWkEsV0FBQTtFQUNBLG1CQVRZO0VBVVosZ0JBTFU7QUFLWjtBQWFFO0VBQ0UsK0RBdkJXO0FBWWY7QUFhRTtFQWxCQSxXQUFBO0VBQ0EsbUJBVFk7RUFVWixnQkFMVTtBQWFaO0FBV0U7RUFDRSwrREE3Qlc7QUFvQmYiLCJmaWxlIjoic3JjL2FwcC9wYXRocy9wcm9kdXRvcy9wcm9kdXRvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci1iZzogI0VERTlENTtcclxuJGNvbG9yLWJ1dHRvbjojRTdBQjlBO1xyXG4kY29sb3ItaG92ZXI6ICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmVjZDIgMCUsICNmY2I2OWYgMTAwJSk7XHJcbiRjb2xvci0zOiM2MTcxNDM7XHJcbiRmb250LXJvYm90bzoncm9ib3RvJywgc2VyaWY7XHJcbiRmb250LWJhYmU6J1JhamRoYW5pJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtNzAwOiAgNzAwIDtcclxuQG1peGluIGJvdGFvKCkge1xyXG5cclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItYnV0dG9uO1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC03MDA7XHJcblxyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDE4cmVtO1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1iZztcclxuICBjb2xvcjogJGNvbG9yLTM7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMjlweCAwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAuYnRuLWNhcmR7XHJcbiAgICBAaW5jbHVkZSBib3RhbztcclxuICB9XHJcbiAgLmJ0bi1jYXJkOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWhvdmVyO1xyXG4gIH1cclxuICAucmVtb3ZlLWJ1dHRvbntcclxuICAgIEBpbmNsdWRlIGJvdGFvXHJcbiAgfVxyXG4gIC5yZW1vdmUtYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWhvdmVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
        });
        return ProdutosComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutosComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-produtos',
            templateUrl: './produtos.component.html',
            styleUrls: ['./produtos.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _service_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]
          }, {
            type: _service_carrinho_service__WEBPACK_IMPORTED_MODULE_4__["CarrinhoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/produtos/produtos.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/paths/produtos/produtos.module.ts ***!
      \***************************************************/

    /*! exports provided: ProdutosModule */

    /***/
    function srcAppPathsProdutosProdutosModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProdutosModule", function () {
        return ProdutosModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _produtos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./produtos-routing.module */
      "./src/app/paths/produtos/produtos-routing.module.ts");
      /* harmony import */


      var _produtos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./produtos.component */
      "./src/app/paths/produtos/produtos.component.ts");

      var ProdutosModule =
      /** @class */
      function () {
        var ProdutosModule = /*#__PURE__*/_createClass(function ProdutosModule() {
          _classCallCheck(this, ProdutosModule);
        });

        ProdutosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: ProdutosModule
        });
        ProdutosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function ProdutosModule_Factory(t) {
            return new (t || ProdutosModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _produtos_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProdutosRoutingModule"]]]
        });
        return ProdutosModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProdutosModule, {
          declarations: [_produtos_component__WEBPACK_IMPORTED_MODULE_3__["ProdutosComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _produtos_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProdutosRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutosModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_produtos_component__WEBPACK_IMPORTED_MODULE_3__["ProdutosComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _produtos_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProdutosRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=paths-produtos-produtos-module-es5.js.map