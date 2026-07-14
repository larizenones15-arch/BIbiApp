"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Register"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/template/Register.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/template/Register.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      dialog: true,
      isLoading: false,
      showPassword: false,
      // Data for v-selects (Replace with your actual API calls)
      teamsItems: [],
      Employees: [],
      sections: [{
        id: 101,
        name: "Development"
      }, {
        id: 102,
        name: "Networking"
      }],
      registrationData: {
        employee_code: "",
        employee_name: "",
        password: ""
      },
      errorData: {
        employee_code: "",
        employee_name: "",
        DepartmentID: "",
        SectionID: "",
        password: ""
      }
    };
  },
  created: function created() {
    // In a real application, you would fetch departments and sections here
    // this.mGetDepartments();
    this.mTeams();
    this.mGetEmployee();
  },
  methods: {
    clearError: function clearError(field) {
      if (this.errorData[field]) {
        this.errorData[field] = "";
      }
    },
    mTeams: function mTeams() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(this.$url, "/api/staffregistration?Team")).then(function (res) {
        _this.teamsItems = res.data.result;
      })["catch"](function (_ref) {
        var response = _ref.response;
        _this.$store.dispatch("setStatusCode", response.status);
        _this.$router.push("/error/" + response.status);
      })["finally"](function () {
        // this.isLoading = false;
      });
    },
    mGetEmployee: function mGetEmployee() {
      var _this2 = this;
      this.registrationData.employee_code = "";
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(this.$url, "/api/login/staff")).then(function (res) {
        _this2.Employees = res.data;
      })["catch"](function (_ref2) {
        var response = _ref2.response;
        _this2.registrationData.employee_code = "Employee not found";
        console.error("Error fetching employee:", response);
      });
    },
    mRegister: function mRegister() {
      var _this3 = this;
      Object.keys(this.errorData).forEach(function (key) {
        return _this3.errorData[key] = "";
      });
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(this.$url, "/api/staffregistration"), this.registrationData).then(function (res) {
        if (res.status === 201) {
          alert("Registration successful!");
          // Redirect to login or home page
          _this3.$router.push("/login");
        }
      })["catch"](function (_ref3) {
        var response = _ref3.response;
        if (response.status === 422 || response.status === 400) {
          Object.keys(response.data).forEach(function (key) {
            var field = key.toLowerCase().replace(/_/g, "");
            if (_this3.errorData.hasOwnProperty(field)) {
              _this3.errorData[field] = response.data[key][0];
            }
          });
        } else {
          console.error("Registration failed with status:", response.status);
          // this.$router.push("/error/" + response.status);
        }
      })["finally"](function () {
        _this3.isLoading = false;
      });

      // setTimeout(() => {
      //   this.isLoading = false;
      //   console.log("Registration Attempt with:", this.registrationData);
      //   alert("Simulated Registration Attempted!");
      // }, 1500);
    }
  },
  computed: {
    cEmployees: {
      get: function get() {
        var _this4 = this;
        if (this.registrationData.employee_code) {
          var data = this.Employees.filter(function (rec) {
            return rec.EmployeeCode == _this4.registrationData.employee_code;
          }).map(function (req) {
            return req.EmployeeName;
          });
          this.registrationData.employee_name = data[0];
          return data[0];
        } else {
          return "";
        }
      },
      set: function set(newValue) {
        this.registrationData.employee_code = newValue;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/template/Register.vue?vue&type=template&id=4a13a22a&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/template/Register.vue?vue&type=template&id=4a13a22a&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-container", {
    staticClass: "login-page-wrapper d-flex align-center justify-center",
    attrs: {
      fluid: ""
    }
  }, [_c("v-card", {
    staticClass: "pa-8 login-card rounded-xl",
    attrs: {
      outlined: "",
      elevation: "4",
      "max-width": "500",
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "text-center mb-8"
  }, [_c("v-avatar", {
    staticClass: "mb-4 elevation-2 profile-avatar",
    attrs: {
      size: "100",
      color: "grey lighten-4"
    }
  }, [_c("img", {
    attrs: {
      src: "http://10.11.1.98/photos/" + _vm.registrationData.employee_code + ".jpg",
      alt: "User Avatar",
      onerror: "src='storage/images/blank.png'"
    },
    on: {
      dblclick: function dblclick($event) {
        return _vm.mRegister();
      }
    }
  })]), _vm._v(" "), _c("h2", {
    staticClass: "text-h5 font-weight-bold grey--text text--darken-4 mb-1"
  }, [_vm._v("\n        CREATE ACCOUNT\n      ")]), _vm._v(" "), _c("p", {
    staticClass: "body-2 grey--text"
  }, [_vm._v("HTI-P SYSTEM REGISTRATION")])], 1), _vm._v(" "), _c("v-form", {
    nativeOn: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.mRegister();
      }
    }
  }, [_c("v-text-field", {
    staticClass: "rounded-lg mb-2",
    attrs: {
      label: "Employee Code",
      "prepend-inner-icon": "mdi-identifier",
      outlined: "",
      flat: "",
      color: "primary",
      "hide-details": "auto",
      "error-messages": _vm.errorData.employee_code
    },
    on: {
      input: function input($event) {
        return _vm.clearError("employee_code");
      }
    },
    model: {
      value: _vm.registrationData.employee_code,
      callback: function callback($$v) {
        _vm.$set(_vm.registrationData, "employee_code", $$v);
      },
      expression: "registrationData.employee_code"
    }
  }), _vm._v(" "), _c("v-text-field", {
    staticClass: "rounded-lg mb-2",
    attrs: {
      label: "Full Name",
      "prepend-inner-icon": "mdi-account-outline",
      outlined: "",
      readonly: "",
      flat: "",
      color: "primary",
      "hide-details": "auto",
      "error-messages": _vm.errorData.employee_name
    },
    on: {
      input: function input($event) {
        return _vm.clearError("employee_name");
      }
    },
    model: {
      value: _vm.cEmployees,
      callback: function callback($$v) {
        _vm.cEmployees = $$v;
      },
      expression: "cEmployees"
    }
  }), _vm._v(" "), _c("v-select", {
    staticClass: "rounded-lg mb-2",
    attrs: {
      items: _vm.teamsItems,
      "item-text": "TeamName",
      "item-value": "TeamID",
      label: "Team",
      "prepend-inner-icon": "mdi-account-group",
      outlined: "",
      flat: "",
      color: "primary",
      "hide-details": "auto",
      "error-messages": _vm.errorData.DepartmentID
    },
    on: {
      input: function input($event) {
        return _vm.clearError("DepartmentID");
      }
    },
    model: {
      value: _vm.registrationData.TeamtID,
      callback: function callback($$v) {
        _vm.$set(_vm.registrationData, "TeamtID", $$v);
      },
      expression: "registrationData.TeamtID"
    }
  }), _vm._v(" "), _c("v-text-field", {
    staticClass: "rounded-lg mb-6",
    attrs: {
      label: "Password",
      "prepend-inner-icon": "mdi-lock-outline",
      "append-icon": _vm.showPassword ? "mdi-eye" : "mdi-eye-off",
      type: _vm.showPassword ? "text" : "password",
      outlined: "",
      flat: "",
      color: "primary",
      "hide-details": "auto",
      "error-messages": _vm.errorData.password,
      autocomplete: "new-password"
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.showPassword = !_vm.showPassword;
      },
      input: function input($event) {
        return _vm.clearError("password");
      }
    },
    model: {
      value: _vm.registrationData.password,
      callback: function callback($$v) {
        _vm.$set(_vm.registrationData, "password", $$v);
      },
      expression: "registrationData.password"
    }
  }), _vm._v(" "), _c("v-btn", {
    staticClass: "rounded-lg font-weight-bold shadow-button",
    attrs: {
      color: "brown",
      block: "",
      dark: "",
      "x-large": "",
      depressed: "",
      loading: _vm.isLoading
    },
    on: {
      click: function click($event) {
        return _vm.mRegister();
      }
    }
  }, [_vm._v("\n        REGISTER NOW\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "text-center mt-4"
  }, [_c("span", {
    staticClass: "text-caption primary--text font-weight-bold cursor-pointer",
    on: {
      click: function click($event) {
        return _vm.$router.push("/login");
      }
    }
  }, [_vm._v("\n          Already have an account? Log-in\n        ")])])], 1), _vm._v(" "), _c("div", {
    staticClass: "text-center mt-8"
  }, [_c("v-divider", {
    staticClass: "mb-4"
  }), _vm._v(" "), _c("span", {
    staticClass: "grey--text text--lighten-1 text-caption font-weight-medium"
  }, [_vm._v("\n        SD Factory © 2026\n      ")])], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/template/Register.vue?vue&type=style&index=0&id=4a13a22a&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/template/Register.vue?vue&type=style&index=0&id=4a13a22a&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* Matching the Login Style Exactly */\n.login-page-wrapper[data-v-4a13a22a] {\r\n  min-height: 100vh;\r\n  background-color: #f0f2f5;\r\n  background-image: radial-gradient(#d1d9e6 1px, transparent 1px);\r\n  background-size: 20px 20px;\n}\n.login-card[data-v-4a13a22a] {\r\n  border: 1px solid #e0e6ed !important;\r\n  background-color: #ffffff;\n}\n.profile-avatar[data-v-4a13a22a] {\r\n  border: 3px solid #fff;\n}\n.cursor-pointer[data-v-4a13a22a] {\r\n  cursor: pointer;\r\n  transition: opacity 0.2s;\n}\n.cursor-pointer[data-v-4a13a22a]:hover {\r\n  opacity: 0.7;\n}\n.v-btn--x-large[data-v-4a13a22a] {\r\n  height: 56px !important;\r\n  letter-spacing: 1.25px;\n}\n.shadow-button[data-v-4a13a22a] {\r\n  /* Using brown shadow to match your button color choice */\r\n  box-shadow: 0 4px 14px 0 rgba(121, 85, 72, 0.3) !important;\n}\r\n\r\n/* Ensure outlined fields look flat like the login page */\n.v-text-field--outlined[data-v-4a13a22a] fieldset {\r\n  border-color: #e0e6ed !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/template/Register.vue?vue&type=style&index=0&id=4a13a22a&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/template/Register.vue?vue&type=style&index=0&id=4a13a22a&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_4a13a22a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=style&index=0&id=4a13a22a&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/template/Register.vue?vue&type=style&index=0&id=4a13a22a&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_4a13a22a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_4a13a22a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/template/Register.vue":
/*!********************************************!*\
  !*** ./resources/js/template/Register.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_4a13a22a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=4a13a22a&scoped=true */ "./resources/js/template/Register.vue?vue&type=template&id=4a13a22a&scoped=true");
/* harmony import */ var _Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js */ "./resources/js/template/Register.vue?vue&type=script&lang=js");
/* harmony import */ var _Register_vue_vue_type_style_index_0_id_4a13a22a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&id=4a13a22a&scoped=true&lang=css */ "./resources/js/template/Register.vue?vue&type=style&index=0&id=4a13a22a&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_4a13a22a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_4a13a22a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4a13a22a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/template/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/template/Register.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/template/Register.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/template/Register.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/template/Register.vue?vue&type=style&index=0&id=4a13a22a&scoped=true&lang=css":
/*!****************************************************************************************************!*\
  !*** ./resources/js/template/Register.vue?vue&type=style&index=0&id=4a13a22a&scoped=true&lang=css ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_4a13a22a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=style&index=0&id=4a13a22a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/template/Register.vue?vue&type=style&index=0&id=4a13a22a&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/template/Register.vue?vue&type=template&id=4a13a22a&scoped=true":
/*!**************************************************************************************!*\
  !*** ./resources/js/template/Register.vue?vue&type=template&id=4a13a22a&scoped=true ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_4a13a22a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_4a13a22a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_4a13a22a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=4a13a22a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/template/Register.vue?vue&type=template&id=4a13a22a&scoped=true");


/***/ })

}]);