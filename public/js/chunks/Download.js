"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Download"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Instructions.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Instructions.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      requirements: [{
        title: 'Apache24'
      }, {
        title: 'Composer',
        link: 'https://getcomposer.org/'
      }, {
        title: 'Node.js',
        link: 'https://nodejs.org/en'
      }, {
        title: 'PHP 7 or above'
      }, {
        title: 'Visual Studio Code'
      }],
      itemicon: '{{item.icon}}',
      itemtext: '{{item.text}}',
      example1: '<!-- Example --> <v-icon v-text="item.icon"></v-icon> <!-- change it into --> <v-icon>{{item.icon}}</v-icon>',
      assetcss: "{{asset('css/app.css')}}",
      assetjs: "{{asset('js/app.js')}}"
    };
  },
  mounted: function mounted() {
    // Prevent automatic highlighting
    window.Prism = window.Prism || {};
    window.Prism.manual = true;

    // Highlight manually when needed
    Prism.highlightAll();
  },
  methods: {
    copyCode: function copyCode(id) {
      var codeElement = document.getElementById(id);
      var codeToCopy = codeElement.innerText;
      navigator.clipboard.writeText(codeToCopy).then(function () {
        alert("Code copied to clipboard!");
      })["catch"](function (err) {
        console.error("Failed to copy code: ", err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Instructions.vue?vue&type=template&id=f75a81e0":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Instructions.vue?vue&type=template&id=f75a81e0 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "ma-4"
  }, [_c("v-card", {
    staticClass: "mt-5"
  }, [_c("v-card-title", [_vm._v("INSTALL LARAVEL")]), _vm._v(" "), _c("v-card-text", [_c("ul", [_c("li", [_vm._v("Open CMD and go to Apache htdocs folder\n                    "), _c("pre", {
    staticClass: "command-line",
    attrs: {
      "data-prompt": "C:\\Users\\smd282"
    }
  }, [_c("code", {
    staticClass: "language-bash"
  }, [_vm._v("cd C:\\Apache24\\htdocs")])])]), _vm._v(" "), _c("li", [_vm._v("Create Laravel and go to the Project folder\n                    "), _c("pre", {
    staticClass: "command-line",
    attrs: {
      "data-prompt": "C:\\Apache24\\htdocs>"
    }
  }, [_c("code", {
    staticClass: "language-bash"
  }, [_vm._v("\n                        composer create-project --prefer-dist laravel/laravel "), _c("span", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("ProjectName")]), _vm._v(" 8.*\n                        cd ProjectName\n                    ")])])])])])], 1), _vm._v(" "), _c("v-card", {
    staticClass: "mt-5"
  }, [_c("v-card-title", [_vm._v("INSTALL VUE")]), _vm._v(" "), _c("v-card-text", [_c("ul", [_c("li", [_vm._v("Install Vue and open it using code . command\n                    "), _c("pre", {
    staticClass: "command-line",
    attrs: {
      "data-prompt": "C:\\Apache24\\htdocs\\ProjectName>"
    }
  }, [_c("code", {
    staticClass: "language-bash"
  }, [_vm._v("\n                        npm install vue@2.6.14 vuetify@2.6.2 vuex@3.6.2 vue-router@3.5.3 vuex-persistedstate@4.1.0 vue-loader@15.9.8 vue-template-compiler@2.6.14 @mdi/font@6.4.95\n                        code .\n                    ")])])])])])], 1), _vm._v(" "), _c("v-card", {
    staticClass: "mt-5"
  }, [_c("v-card-title", [_vm._v("SETUP")]), _vm._v(" "), _c("v-card-text", [_c("ul", [_c("li", [_vm._v("Open "), _c("b", [_vm._v("webpack.mix.js")]), _vm._v(" and put "), _c("code", {
    staticClass: "language-js"
  }, [_vm._v(".vue()")]), _vm._v(" under "), _c("b", [_vm._v("mix.js('resources/js/app.js', 'public/js')")])]), _vm._v(" "), _c("li", [_vm._v("Go to "), _c("b", [_vm._v("resources/css/app.css")]), _vm._v(" and put this code:\n                    "), _c("pre", {
    staticClass: "line-numbers"
  }, [_c("code", {
    staticClass: "language-css"
  }, [_vm._v("\n                        @import '~vuetify/dist/vuetify.min.css';\n                        @import '~@mdi/font/css/materialdesignicons.css';\n                    ")])])]), _vm._v(" "), _c("li", [_vm._v("Setup for front-end rendering of vue. Go to "), _c("b", [_vm._v("resources/js/app.js")]), _vm._v(" and put this code under "), _c("b", [_vm._v("require('./bootstrap');")]), _vm._v(" "), _c("pre", [_c("code", {
    staticClass: "language-js"
  }, [_vm._v("\n                        import Vue from 'vue'\n                        import Vuetify from 'vuetify'\n                        import Router from './router'\n                        import store from './store'\n                        import App from './template/App';\n                        Vue.use(Vuetify)\n\n                        const app = new Vue({\n                            el: '#app',\n                            store,\n                            router:Router,\n                            vuetify: new Vuetify(),\n                            render: h=>h(App)\n                        });\n                    ")])])]), _vm._v(" "), _c("li", [_vm._v("Create a folder in "), _c("b", [_vm._v("resources/js")]), _vm._v(", name it as "), _c("b", [_vm._v("template")]), _vm._v(". Create a file "), _c("b", [_vm._v("App.vue")]), _vm._v(" inside the "), _c("b", [_vm._v("template")]), _vm._v(" folder and put this code:\n                    "), _c("pre", [_c("code", {
    staticClass: "language-html"
  }, [_vm._v('\n                        <template>\n                            <v-app>\n                                <v-navigation-drawer\n                                    v-model="drawer"\n                                    app\n                                >\n                                    <v-list dense>\n                                        <v-subheader>LIST COMPONENTS:</v-subheader>\n                                            <v-list-item\n                                                v-for="(item, i) in items"\n                                                :key="i"\n                                                :to="item.to"\n                                            >\n                                                <v-list-item-icon>\n                                                    <v-icon>' + _vm._s(_vm.itemicon) + "</v-icon>\n                                                </v-list-item-icon>\n                                                <v-list-item-content>\n                                                    <v-list-item-title>" + _vm._s(_vm.itemtext) + '</v-list-item-title>\n                                                </v-list-item-content>\n                                            </v-list-item>\n                                    </v-list>\n                                </v-navigation-drawer>\n                        \n                                <v-app-bar app>\n                                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>\n                                <v-toolbar-title>SPA Demo App</v-toolbar-title>\n                                </v-app-bar>\n                        \n                                <v-main class="ma-2">\n                                <router-view></router-view>\n                                </v-main>\n                            </v-app>\n                        </template>\n                        <script>\n                            //put the script here\n                        </script>\n                    ')])]), _vm._v(" "), _c("pre", [_c("code", {
    staticClass: "language-js"
  }, [_vm._v("\n                        //script for App.vue\n                        export default {\n                            data: () => ({\n                                drawer: null,\n                                items:[\n                                    {text:'Home', icon:'mdi-home', to:'home'},\n                                    {text:'Hello', icon:'mdi-hand-wave', to:'hello'}\n                                ]\n                            }),\n                        }\n                    \n                    ")])])]), _vm._v(" "), _c("li", [_vm._v("Create "), _c("b", [_vm._v("store.js")]), _vm._v(" in "), _c("b", [_vm._v("resources/js")]), _vm._v(" and put this code:\n                    "), _c("pre", [_c("code", {
    staticClass: "language-js"
  }, [_vm._v("\n                        import Vue from 'vue';\n                        import Vuex from 'vuex';\n                        import createPersistedState from 'vuex-persistedstate';\n\n                        Vue.use(Vuex)\n                        export default new Vuex.Store({\n                            state:{},\n                            actions:{},\n                            mutations:{},\n                            getters:{},\n                            plugins: [createPersistedState()]\n                        });\n                    ")])])]), _vm._v(" "), _c("li", [_vm._v("Create "), _c("b", [_vm._v("router.js")]), _vm._v(" in "), _c("b", [_vm._v("resources/js")]), _vm._v(" and put this code:\n                    "), _c("pre", [_c("code", {
    staticClass: "language-js"
  }, [_vm._v("\n                        import Vue from 'vue'\n                        import VueRouter from 'vue-router'\n                        import store from './store'\n\n                        Vue.use(VueRouter)\n\n                        export default new VueRouter({\n                            mode: 'history',\n                            routes: [\n                                {\n                                    path: '/home',\n                                    name: 'home',\n                                    component: () => import('./components/Home'),\n                                },\n                                {\n                                    path: '/hello',\n                                    name: 'hello',\n                                    component: () => import('./components/Hello'),\n                                },\n                            \n                            ],\n                        });\n                    ")])])]), _vm._v(" "), _c("li", [_vm._v("Create a folder in "), _c("b", [_vm._v("resources/js")]), _vm._v(" and name it as "), _c("b", [_vm._v("components")]), _vm._v(". Create a file "), _c("b", [_vm._v("Home.vue")]), _vm._v(" and "), _c("b", [_vm._v("Hello.vue")]), _vm._v(" inside the "), _c("b", [_vm._v("components")]), _vm._v(" folder and put this code:\n                    "), _c("pre", [_c("code", {
    staticClass: "language-html"
  }, [_vm._v('\n                        <template>\n                            <v-card>\n                                <v-card-title style="background-color:#B2DFDB">Home</v-card-title>\n                                <v-card-text>\n                                    <p>some transcations & logics here....</p>\n                                </v-card-text>\n                            </v-card>\n                        </template>\n\n                        <script>\n                        export default {\n\n                        }\n                        </script>\n                    ')])])]), _vm._v(" "), _c("li", [_vm._v("Setup for Laravel Rendering Engine. Create a folder in "), _c("b", [_vm._v("resources/views")]), _vm._v(" and name it as "), _c("b", [_vm._v("layouts")]), _vm._v(". Create "), _c("b", [_vm._v("app.blade.php")]), _vm._v(" inside the "), _c("b", [_vm._v("layouts")]), _vm._v(" folder and put this code:\n                    "), _c("pre", [_c("code", {
    staticClass: "language-html"
  }, [_vm._v('\n                        <!DOCTYPE html>\n                        <html lang="en">\n                        <head>\n                            <meta charset="UTF-8">\n                            <meta http-equiv="X-UA-Compatible" content="IE=edge">\n                            <link rel="stylesheet" href="' + _vm._s(_vm.assetcss) + '">\n                            <meta name="viewport" content="width=device-width, initial-scale=1.0">\n                            <title>Laravel SPA</title>\n                        </head>\n                        <body>\n                            <div id="app"></div>\n                                <script src="' + _vm._s(_vm.assetjs) + '"></script>\n                            </body>\n                        </html>\n                    ')])])]), _vm._v(" "), _c("li", [_vm._v("Creating SPA Controller. Go back to cmd and use this command:\n                    "), _c("pre", {
    staticClass: "command-line",
    attrs: {
      "data-prompt": "C:\\Apache24\\htdocs\\ProjectName>"
    }
  }, [_c("code", {
    staticClass: "language-bash"
  }, [_vm._v("\n                        php artisan make:controller SpaController\n                    ")])])]), _vm._v(" "), _c("li", [_vm._v("Go to "), _c("b", [_vm._v("app/Http/Controllers/SpaController.php")]), _vm._v(" and put this code inside the class\n                    "), _c("pre", [_c("code", {
    staticClass: "language-php"
  }, [_vm._v("\n                        public function index(){\n                            return view('layouts.app');\n                        }\n                    ")])])]), _vm._v(" "), _c("li", [_vm._v("Changing of route from Laravel Homepage to SPA Controller. Go to "), _c("b", [_vm._v("routes/web.php")]), _vm._v(" and comment the first "), _c("b", [_vm._v("Route::")]), _vm._v(" then put this code:\n                    "), _c("pre", [_c("code", {
    staticClass: "language-php"
  }, [_vm._v("\n                        use App\\Http\\Controllers\\SpaController;\n\n                        Route::get('/{any?} ', [SpaController::class, 'index'])->where('any', '.*');\n                    ")])])]), _vm._v(" "), _c("li", [_vm._v("Go to "), _c("b", [_vm._v(".env")]), _vm._v(" and set "), _c("code", {
    staticClass: "language-ini"
  }, [_vm._v("LOG_CHANNEL = daily")])]), _vm._v(" "), _c("li", [_vm._v("Go to "), _c("b", [_vm._v("config/app.php")]), _vm._v(" and set your "), _c("b", [_vm._v("timezone")]), _vm._v(" "), _c("br"), _c("b", [_vm._v("Example:")]), _vm._v(" "), _c("code", {
    staticClass: "language-php"
  }, [_vm._v("'timezone' => 'Asia/Manila',")])])])])], 1), _vm._v(" "), _c("v-card", {
    staticClass: "mt-5"
  }, [_c("v-card-title", [_vm._v("DEPLOYMENT")]), _vm._v(" "), _c("v-card-text", [_c("ul", [_c("li", [_vm._v("Go to CMD and refresh/update the code using the following commands\n                    "), _c("pre", {
    staticClass: "command-line",
    attrs: {
      "data-prompt": "C:\\Apache24\\htdocs\\ProjectName>"
    }
  }, [_c("code", {
    staticClass: "language-bash"
  }, [_vm._v("\n                        npm run dev\n                    ")])]), _vm._v("\n                    For continous refresh/update when there are changes in the code, use this instead:\n                    "), _c("pre", {
    staticClass: "command-line",
    attrs: {
      "data-prompt": "C:\\Apache24\\htdocs\\ProjectName>"
    }
  }, [_c("code", {
    staticClass: "language-bash"
  }, [_vm._v("\n                        npm run watch\n                    ")])])]), _vm._v(" "), _c("li", [_vm._v("Deploy the project\n                    "), _c("pre", {
    staticClass: "command-line",
    attrs: {
      "data-prompt": "C:\\Apache24\\htdocs\\ProjectName>"
    }
  }, [_c("code", {
    staticClass: "language-bash"
  }, [_vm._v("\n                        php artisan serve\n                    ")])])]), _vm._v(" "), _c("li", [_vm._v("Go to the url generated by the php artisan serve command\n                    "), _c("div", {
    staticClass: "centerimg"
  }, [_c("img", {
    attrs: {
      src: "images/artisanserve.PNG"
    }
  })])])])])], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      xl: "10",
      lg: "9",
      md: "9",
      sm: "8"
    }
  }, [_c("div", {
    staticClass: "d-flex align-center",
    staticStyle: {
      height: "100%"
    }
  }, [_c("h1", [_vm._v("Create Laravel+Vue SPA Project")])])]), _vm._v(" "), _c("v-col", [_c("h3", [_vm._v("REQUIREMENTS:")]), _vm._v(" "), _c("ol", _vm._l(_vm.requirements, function (item, i) {
    return _c("li", {
      key: i
    }, [item.link == undefined ? _c("span", [_vm._v(_vm._s(item.title))]) : _c("a", {
      attrs: {
        href: item.link,
        target: "_blank"
      }
    }, [_vm._v(_vm._s(item.title))])]);
  }), 0)])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Instructions.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Instructions.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Instructions_vue_vue_type_template_id_f75a81e0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Instructions.vue?vue&type=template&id=f75a81e0 */ "./resources/js/components/Instructions.vue?vue&type=template&id=f75a81e0");
/* harmony import */ var _Instructions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Instructions.vue?vue&type=script&lang=js */ "./resources/js/components/Instructions.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Instructions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Instructions_vue_vue_type_template_id_f75a81e0__WEBPACK_IMPORTED_MODULE_0__.render,
  _Instructions_vue_vue_type_template_id_f75a81e0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/Instructions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Instructions.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Instructions.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Instructions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Instructions.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Instructions.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Instructions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Instructions.vue?vue&type=template&id=f75a81e0":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Instructions.vue?vue&type=template&id=f75a81e0 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Instructions_vue_vue_type_template_id_f75a81e0__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Instructions_vue_vue_type_template_id_f75a81e0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Instructions_vue_vue_type_template_id_f75a81e0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Instructions.vue?vue&type=template&id=f75a81e0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Instructions.vue?vue&type=template&id=f75a81e0");


/***/ })

}]);