(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paths-produtos-categoria-produtos-categoria-module"], {
    /***/
    "./src/app/paths/produtos-categoria/produtos-categoria-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/paths/produtos-categoria/produtos-categoria-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: ProdutosCategoriaRoutingModule */

    /***/
    function srcAppPathsProdutosCategoriaProdutosCategoriaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProdutosCategoriaRoutingModule", function () {
        return ProdutosCategoriaRoutingModule;
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


      var _produtos_categoria_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./produtos-categoria.component */
      "./src/app/paths/produtos-categoria/produtos-categoria.component.ts");

      var routes = [{
        path: '',
        component: _produtos_categoria_component__WEBPACK_IMPORTED_MODULE_2__["ProdutosCategoriaComponent"]
      }];

      var ProdutosCategoriaRoutingModule =
      /** @class */
      function () {
        var ProdutosCategoriaRoutingModule = /*#__PURE__*/_createClass(function ProdutosCategoriaRoutingModule() {
          _classCallCheck(this, ProdutosCategoriaRoutingModule);
        });

        ProdutosCategoriaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: ProdutosCategoriaRoutingModule
        });
        ProdutosCategoriaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function ProdutosCategoriaRoutingModule_Factory(t) {
            return new (t || ProdutosCategoriaRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return ProdutosCategoriaRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProdutosCategoriaRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutosCategoriaRoutingModule, [{
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
    "./src/app/paths/produtos-categoria/produtos-categoria.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/paths/produtos-categoria/produtos-categoria.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ProdutosCategoriaComponent */

    /***/
    function srcAppPathsProdutosCategoriaProdutosCategoriaComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProdutosCategoriaComponent", function () {
        return ProdutosCategoriaComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _adicionar_produto_produto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../adicionar-produto/produto */
      "./src/app/paths/adicionar-produto/produto.ts");
      /* harmony import */


      var _login_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../login/auth.service */
      "./src/app/paths/login/auth.service.ts");
      /* harmony import */


      var _adicionar_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../adicionar-produto/produto.service */
      "./src/app/paths/adicionar-produto/produto.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ProdutosCategoriaComponent_div_1_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdutosCategoriaComponent_div_1_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var produtos_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.remover(produtos_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProdutosCategoriaComponent_div_1_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdutosCategoriaComponent_div_1_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.atualizar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProdutosCategoriaComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProdutosCategoriaComponent_div_1_button_7_Template, 2, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProdutosCategoriaComponent_div_1_button_8_Template, 2, 0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var produtos_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", produtos_r1.imagem, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](produtos_r1.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.eAdm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.eAdm);
        }
      }

      var ProdutosCategoriaComponent =
      /** @class */
      function () {
        var ProdutosCategoriaComponent = /*#__PURE__*/function () {
          function ProdutosCategoriaComponent(authService, produtoService, route) {
            _classCallCheck(this, ProdutosCategoriaComponent);

            this.authService = authService;
            this.produtoService = produtoService;
            this.route = route;
            this.eAdm = this.authService.estaAutenticadoAdm();
            this.produto = new _adicionar_produto_produto__WEBPACK_IMPORTED_MODULE_1__["Produto"]();
          }

          _createClass(ProdutosCategoriaComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this = this;

              this.produtoService.getDataSelection().subscribe(function (produto) {
                return _this.produtos = produto;
              });
            }
          }, {
            key: "remover",
            value: function remover(id) {
              this.produtos = this.produtos.filter(function (produtos) {
                return produtos.id !== id;
              });
              this.produtoService.excluirProduto(this.produto.id);
            }
          }, {
            key: "atualizar",
            value: function atualizar() {}
          }]);

          return ProdutosCategoriaComponent;
        }();

        ProdutosCategoriaComponent.ɵfac = function ProdutosCategoriaComponent_Factory(t) {
          return new (t || ProdutosCategoriaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_adicionar_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
        };

        ProdutosCategoriaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ProdutosCategoriaComponent,
          selectors: [["app-produtos-categoria"]],
          decls: 2,
          vars: 1,
          consts: [[1, "row", "row-cols-1", "row-cols-md-2", "g-4"], ["class", "card card-container p-2 me-5", 4, "ngFor", "ngForOf"], [1, "card", "card-container", "p-2", "me-5"], ["routerLink", "/produtos"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "d-flex", "justify-content-end"], ["class", "btn remove-button", 3, "click", 4, "ngIf"], ["class", "btn remove-button ms-4", 3, "click", 4, "ngIf"], [1, "btn", "remove-button", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "btn", "remove-button", "ms-4", 3, "click"], [1, "fa-solid", "fa-pen-to-square"]],
          template: function ProdutosCategoriaComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProdutosCategoriaComponent_div_1_Template, 9, 4, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.produtos);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
          styles: [".card-container[_ngcontent-%COMP%] {\n  width: 22.199rem;\n  background: #EDE9D5;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n.card-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #617143;\n  font-family: roboto, serif;\n}\n.card-container[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n}\n.card-container[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvcHJvZHV0b3MtY2F0ZWdvcmlhL3Byb2R1dG9zLWNhdGVnb3JpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTtFQUNFLGdCQUFBO0VBQ0EsbUJBZlM7RUFnQlQscURBQUE7QUFaRjtBQWNFO0VBQ0UsY0FsQks7RUFtQkwsMEJBbEJTO0FBTWI7QUFjRTtFQWRBLFdBQUE7RUFDQSxtQkFOWTtFQU9aLGdCQUxVO0FBUVo7QUFZRTtFQUNFLCtEQXRCVztBQVlmIiwiZmlsZSI6InNyYy9hcHAvcGF0aHMvcHJvZHV0b3MtY2F0ZWdvcmlhL3Byb2R1dG9zLWNhdGVnb3JpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci1iZzogI0VERTlENTtcclxuJGNvbG9yLTM6IzYxNzE0MztcclxuJGZvbnQtcm9ib3RvOnJvYm90bywgc2VyaWY7XHJcbiRjb2xvci1idXR0b246I0U3QUI5QTtcclxuJGNvbG9yLWhvdmVyOiAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZlY2QyIDAlLCAjZmNiNjlmIDEwMCUpO1xyXG4kZm9udC03MDA6ICA3MDAgO1xyXG5AbWl4aW4gYm90YW8oKSB7XHJcblxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1idXR0b247XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LTcwMDtcclxuXHJcbn1cclxuLmNhcmQtY29udGFpbmVye1xyXG4gIHdpZHRoOiAyMi4xOTlyZW07XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWJnO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xyXG5cclxuICBoNXtcclxuICAgIGNvbG9yOiAgJGNvbG9yLTM7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIH1cclxuICAucmVtb3ZlLWJ1dHRvbntcclxuQGluY2x1ZGUgYm90YW9cclxuICB9XHJcbiAgLnJlbW92ZS1idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItaG92ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"]
        });
        return ProdutosCategoriaComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutosCategoriaComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-produtos-categoria',
            templateUrl: './produtos-categoria.component.html',
            styleUrls: ['./produtos-categoria.component.scss']
          }]
        }], function () {
          return [{
            type: _login_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _adicionar_produto_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/produtos-categoria/produtos-categoria.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/paths/produtos-categoria/produtos-categoria.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ProdutosCategoriaModule */

    /***/
    function srcAppPathsProdutosCategoriaProdutosCategoriaModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProdutosCategoriaModule", function () {
        return ProdutosCategoriaModule;
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


      var _produtos_categoria_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./produtos-categoria-routing.module */
      "./src/app/paths/produtos-categoria/produtos-categoria-routing.module.ts");
      /* harmony import */


      var _produtos_categoria_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./produtos-categoria.component */
      "./src/app/paths/produtos-categoria/produtos-categoria.component.ts");

      var ProdutosCategoriaModule =
      /** @class */
      function () {
        var ProdutosCategoriaModule = /*#__PURE__*/_createClass(function ProdutosCategoriaModule() {
          _classCallCheck(this, ProdutosCategoriaModule);
        });

        ProdutosCategoriaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: ProdutosCategoriaModule
        });
        ProdutosCategoriaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function ProdutosCategoriaModule_Factory(t) {
            return new (t || ProdutosCategoriaModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _produtos_categoria_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProdutosCategoriaRoutingModule"]]]
        });
        return ProdutosCategoriaModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProdutosCategoriaModule, {
          declarations: [_produtos_categoria_component__WEBPACK_IMPORTED_MODULE_3__["ProdutosCategoriaComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _produtos_categoria_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProdutosCategoriaRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutosCategoriaModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_produtos_categoria_component__WEBPACK_IMPORTED_MODULE_3__["ProdutosCategoriaComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _produtos_categoria_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProdutosCategoriaRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=paths-produtos-categoria-produtos-categoria-module-es5.js.map