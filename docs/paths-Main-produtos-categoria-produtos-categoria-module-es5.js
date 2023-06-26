(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paths-Main-produtos-categoria-produtos-categoria-module"], {
    /***/
    "./src/app/paths/Main/produtos-categoria/produtos-categoria-routing.module.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/paths/Main/produtos-categoria/produtos-categoria-routing.module.ts ***!
      \************************************************************************************/

    /*! exports provided: ProdutosCategoriaRoutingModule */

    /***/
    function srcAppPathsMainProdutosCategoriaProdutosCategoriaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./src/app/paths/Main/produtos-categoria/produtos-categoria.component.ts");

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
    "./src/app/paths/Main/produtos-categoria/produtos-categoria.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/paths/Main/produtos-categoria/produtos-categoria.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ProdutosCategoriaComponent */

    /***/
    function srcAppPathsMainProdutosCategoriaProdutosCategoriaComponentTs(module, __webpack_exports__, __webpack_require__) {
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


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/service_login/auth.service */
      "./src/app/paths/service/service_login/auth.service.ts");
      /* harmony import */


      var _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/service_produto/produto.service */
      "./src/app/paths/service/service_produto/produto.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ProdutosCategoriaComponent_ng_container_1_div_1_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdutosCategoriaComponent_ng_container_1_div_1_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var produtos_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.remover(produtos_r5.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProdutosCategoriaComponent_ng_container_1_div_1_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdutosCategoriaComponent_ng_container_1_div_1_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r11.atualizar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProdutosCategoriaComponent_ng_container_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdutosCategoriaComponent_ng_container_1_div_1_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var produtos_r5 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.irParaProdutos(produtos_r5.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProdutosCategoriaComponent_ng_container_1_div_1_button_7_Template, 2, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProdutosCategoriaComponent_ng_container_1_div_1_button_8_Template, 2, 0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var produtos_r5 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", produtos_r5.imageName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](produtos_r5.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.eAdm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.eAdm);
        }
      }

      function ProdutosCategoriaComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProdutosCategoriaComponent_ng_container_1_div_1_Template, 9, 4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var produtos_r3 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", produtos_r3);
        }
      }

      function ProdutosCategoriaComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
          }

          _createClass(ProdutosCategoriaComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getProdutos();
            }
          }, {
            key: "getProdutos",
            value: function getProdutos() {
              this.produtos$ = this.produtoService.getProdutosLista().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
                // this.route.navigateByUrl('/error');
                // alert('Problemas no server tente novamente mais tarde.');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.message);
              })); //   .subscribe(res => {
              //   this.produtos = res;
              // });
            }
          }, {
            key: "remover",
            value: function remover(id) {
              this.produtoService.deleteProdutoLista(this.produto.id).subscribe(function (res) {
                alert('deletado com sucesso');
              }, function (err) {
                console.log(err.message);
              });
            }
          }, {
            key: "atualizar",
            value: function atualizar() {
              this.route.navigate(['alterar_produto']);
            }
          }, {
            key: "irParaProdutos",
            value: function irParaProdutos(id) {
              this.route.navigateByUrl("produtos-categorias/produtos/".concat(id));
            }
          }]);

          return ProdutosCategoriaComponent;
        }();

        ProdutosCategoriaComponent.ɵfac = function ProdutosCategoriaComponent_Factory(t) {
          return new (t || ProdutosCategoriaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_4__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
        };

        ProdutosCategoriaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ProdutosCategoriaComponent,
          selectors: [["app-produtos-categoria"]],
          decls: 5,
          vars: 4,
          consts: [[1, "d-flex", "row", "row-cols-1", "row-cols-md-2", "g-4", "p-5", "p-md-4", "w-100"], [4, "ngIf", "ngIfElse"], ["loading", ""], ["class", "card card-container p-2 me-lg-5 me-md-3", 4, "ngFor", "ngForOf"], [1, "card", "card-container", "p-2", "me-lg-5", "me-md-3"], [3, "click"], ["alt", "...", "width", "400", "height", "300", 1, "card-img-top", "img-fluid", "w-100", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "d-flex", "justify-content-end"], ["class", "btn remove-button", 3, "click", 4, "ngIf"], ["class", "btn remove-button ms-4", 3, "click", 4, "ngIf"], [1, "btn", "remove-button", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "btn", "remove-button", "ms-4", 3, "click"], [1, "fa-solid", "fa-pen-to-square"], [1, "card_"], [1, "shimmerBG", "media"], [1, "p-32"], [1, "shimmerBG", "title-line"], [1, "shimmerBG", "title-line", "end"], [1, "shimmerBG", "content-line", "m-t-24"], [1, "shimmerBG", "content-line"], [1, "shimmerBG", "content-line", "end"]],
          template: function ProdutosCategoriaComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProdutosCategoriaComponent_ng_container_1_Template, 2, 1, "ng-container", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProdutosCategoriaComponent_ng_template_3_Template, 30, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.produtos$))("ngIfElse", _r1);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
          styles: [".card-container[_ngcontent-%COMP%] {\n  width: 22.199rem;\n  background: #EDE9D5;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n.card-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #617143;\n  font-family: roboto, serif;\n}\n.card-container[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #E7AB9A;\n  font-weight: 700;\n}\n.card-container[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);\n}\n.card_[_ngcontent-%COMP%] {\n  position: relative;\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);\n  background-color: #FFF;\n  border-radius: 6px;\n  height: 300px;\n  overflow: hidden;\n  width: 250px;\n  margin: 40px 20px;\n}\n.card_[_ngcontent-%COMP%]   .shimmerBG[_ngcontent-%COMP%] {\n  animation-duration: 2.2s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-name: shimmer;\n  animation-timing-function: linear;\n  background: #ddd;\n  background: linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%);\n  background-size: 1200px 100%;\n}\n@keyframes shimmer {\n  0% {\n    background-position: -1200px 0;\n  }\n  100% {\n    background-position: 1200px 0;\n  }\n}\n.card_[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.card_[_ngcontent-%COMP%]   .p-32[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.card_[_ngcontent-%COMP%]   .title-line[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 100%;\n  margin-bottom: 12px;\n  border-radius: 20px;\n}\n.card_[_ngcontent-%COMP%]   .content-line[_ngcontent-%COMP%] {\n  height: 8px;\n  width: 100%;\n  margin-bottom: 16px;\n  border-radius: 8px;\n}\n.card_[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.m-t-24[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aHMvTWFpbi9wcm9kdXRvcy1jYXRlZ29yaWEvcHJvZHV0b3MtY2F0ZWdvcmlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFmUztFQWdCVCxxREFBQTtBQVpGO0FBY0U7RUFDRSxjQWxCSztFQW1CTCwwQkFsQlM7QUFNYjtBQWNFO0VBZEEsV0FBQTtFQUNBLG1CQU5ZO0VBT1osZ0JBTFU7QUFRWjtBQVlFO0VBQ0UsK0RBdEJXO0FBWWY7QUFnQkE7RUFDRSxrQkFBQTtFQUVBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWJGO0FBZUU7RUFDRSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSx1QkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyRUFBQTtFQUNBLDRCQUFBO0FBYko7QUEwQkU7RUFDRTtJQUNFLDhCQUFBO0VBaEJKO0VBa0JFO0lBQ0UsNkJBQUE7RUFoQko7QUFDRjtBQW1CRTtFQUNFLGFBQUE7QUFqQko7QUFvQkU7RUFDRSxhQUFBO0FBbEJKO0FBcUJFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBbkJKO0FBc0JFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBcEJKO0FBdUJFO0VBQ0UsVUFBQTtBQXJCSjtBQTJCQTtFQUNFLGdCQUFBO0FBeEJGIiwiZmlsZSI6InNyYy9hcHAvcGF0aHMvTWFpbi9wcm9kdXRvcy1jYXRlZ29yaWEvcHJvZHV0b3MtY2F0ZWdvcmlhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWJnOiAjRURFOUQ1O1xyXG4kY29sb3ItMzojNjE3MTQzO1xyXG4kZm9udC1yb2JvdG86cm9ib3RvLCBzZXJpZjtcclxuJGNvbG9yLWJ1dHRvbjojRTdBQjlBO1xyXG4kY29sb3ItaG92ZXI6ICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmVjZDIgMCUsICNmY2I2OWYgMTAwJSk7XHJcbiRmb250LTcwMDogIDcwMCA7XHJcbkBtaXhpbiBib3RhbygpIHtcclxuXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWJ1dHRvbjtcclxuICBmb250LXdlaWdodDogJGZvbnQtNzAwO1xyXG5cclxufVxyXG4uY2FyZC1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDIyLjE5OXJlbTtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItYmc7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMjlweCAwcHg7XHJcblxyXG4gIGg1e1xyXG4gICAgY29sb3I6ICAkY29sb3ItMztcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgfVxyXG4gIC5yZW1vdmUtYnV0dG9ue1xyXG5AaW5jbHVkZSBib3Rhb1xyXG4gIH1cclxuICAucmVtb3ZlLWJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1ob3ZlcjtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuLmNhcmRfIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBtYXJnaW46IDQwcHggMjBweDtcclxuXHJcbiAgLnNoaW1tZXJCRyB7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDIuMnM7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNoaW1tZXI7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRjZGNkY2IDglLCAjRjBGMEYwIDE4JSwgI0Y2RjZGNiAzMyUpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMjAwcHggMTAwJTtcclxuICB9XHJcblxyXG5cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2hpbW1lciB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMDAlIDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBzaGltbWVyIHtcclxuICAgIDAlIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyMDBweCAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEyMDBweCAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1lZGlhIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAucC0zMiB7XHJcbiAgICBwYWRkaW5nOiAzMnB4O1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlLWxpbmUge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50LWxpbmUge1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgfVxyXG5cclxuICAuZW5kIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbi5tLXQtMjQge1xyXG4gIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuXHJcbiJdfQ== */"]
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
            type: _service_service_login_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }, {
            type: _service_service_produto_produto_service__WEBPACK_IMPORTED_MODULE_4__["ProdutoService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/paths/Main/produtos-categoria/produtos-categoria.module.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/paths/Main/produtos-categoria/produtos-categoria.module.ts ***!
      \****************************************************************************/

    /*! exports provided: ProdutosCategoriaModule */

    /***/
    function srcAppPathsMainProdutosCategoriaProdutosCategoriaModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./src/app/paths/Main/produtos-categoria/produtos-categoria-routing.module.ts");
      /* harmony import */


      var _produtos_categoria_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./produtos-categoria.component */
      "./src/app/paths/Main/produtos-categoria/produtos-categoria.component.ts");

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
//# sourceMappingURL=paths-Main-produtos-categoria-produtos-categoria-module-es5.js.map