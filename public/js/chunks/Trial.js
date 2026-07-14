"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Trial"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ChatComponent.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ChatComponent.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MessageBubble_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageBubble.vue */ "./resources/js/components/MessageBubble.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    showChatDialog: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      username: "",
      joined: false,
      message: "",
      messages: [],
      selectedFile: null
    };
  },
  components: {
    MessageBubble: _MessageBubble_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    chatMessages: function chatMessages() {
      var storeMessages = this.$store.getters.getChatMessages;
      return _toConsumableArray(storeMessages);
    }
  },
  created: function created() {
    var _this = this;
    if (this.$socket) {
      this.$socket.on("receive message", function (data) {
        _this.messages.push(data);
        _this.$store.dispatch("sendMessage", data);
      });
      this.$socket.on("disconnect", function () {
        console.log("Disconnected from server");
      });
      this.$socket.on("reconnect", function () {
        console.log("Reconnected to server");
      });
      if (this.$socket) {
        var storeMessages = this.$store.state.chatMessages || [];
        this.messages = storeMessages.map(function (msg) {
          return _this.formatMessageData(msg);
        });
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$socket) {
      this.$socket.off("receive message");
      this.$socket.off("disconnect");
      this.$socket.off("reconnect");
    }
  },
  methods: {
    formatMessageData: function formatMessageData(msg) {
      if (typeof msg === "string") {
        return {
          username: "System",
          content: msg,
          id: Date.now() + Math.random(),
          type: "text"
        };
      }
      return {
        username: msg.username || "Unknown User",
        content: msg.content || "",
        id: msg.id || Date.now() + Math.random(),
        type: msg.type || "text",
        imageUrl: msg.imageUrl || null
      };
    },
    joinChat: function joinChat() {
      if (this.username.trim() && this.$socket.connected) {
        this.joined = true;
        this.$store.dispatch("setCurrentUsername", this.username);
        this.$socket.emit("join", this.username);
      }
    },
    triggerFileInput: function triggerFileInput() {
      this.$refs.imageInput.click();
    },
    onFileSelected: function onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      if (this.selectedFile) {
        this.sendImage();
      }
    },
    sendImage: function sendImage() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var formData, response, imageUrl, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (!(!_this2.selectedFile || !_this2.$socket.connected)) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              formData = new FormData();
              formData.append("image", _this2.selectedFile);
              _context.p = 2;
              _context.n = 3;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("http://10.169.130.242:9090/api/upload-image", formData, {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
              });
            case 3:
              response = _context.v;
              imageUrl = response.data.imageUrl;
              _this2.$socket.emit("send message", {
                username: _this2.username,
                type: "image",
                imageUrl: "http://10.169.130.242:9090".concat(imageUrl),
                content: "Image sent"
              });
              _this2.selectedFile = null;
              _this2.$refs.imageInput.value = null;
              _context.n = 5;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              console.error("Error uploading image:", _t);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[2, 4]]);
      }))();
    },
    sendMessage: function sendMessage() {
      if (this.message.trim() && this.$socket.connected) {
        this.$socket.emit("send message", {
          username: this.username,
          content: this.message,
          type: "text"
        });
        this.message = "";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      announcements: [],
      totalSystems: 0,
      totalFiles: 0
    }, "totalSystems", 0), "TeamName", ""), "originalTitle", "Documentation System"), "lastAnnounceID", null), "blinkInterval", null), "isTabActive", true);
  },
  filters: {
    formatDate: function formatDate(value) {
      if (!value) return "";
      var date = new Date(value);
      return date.toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      });
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.fetchDashboardData();
    this.requestNotificationPermission();
    this.pollInterval = setInterval(this.fetchDashboardData, 30000);
    window.addEventListener("focus", this.stopBlinking);
    window.addEventListener("blur", function () {
      _this.isTabActive = false;
    });
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.pollInterval);
    this.stopBlinking();
  },
  methods: {
    requestNotificationPermission: function requestNotificationPermission() {
      if (!("Notification" in window)) {
        console.log("This browser does not support desktop notification");
        return;
      }
      if (Notification.permission !== "granted" && Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
          if (permission === "granted") {
            console.log("Notification permission granted.");
          }
        });
      }
    },
    fetchDashboardData: function fetchDashboardData() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var TeamID, res, newAnnouncements, latest, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              TeamID = _this2.$store.state.credentials[0].TeamID;
              _context.n = 1;
              return axios.get("".concat(_this2.$url, "/api/systems/announce"), {
                params: {
                  TeamID: TeamID
                }
              });
            case 1:
              res = _context.v;
              newAnnouncements = res.data.announcements;
              if (newAnnouncements && newAnnouncements.length > 0) {
                latest = newAnnouncements[0];
                if (_this2.lastAnnounceID !== null && Number(latest.AnnounceID) > Number(_this2.lastAnnounceID)) {
                  _this2.triggerAlerts(latest);
                }
                _this2.lastAnnounceID = latest.AnnounceID;
              }
              _this2.announcements = newAnnouncements;
              _this2.totalSystems = res.data.totalSystems;
              _this2.totalFiles = res.data.totalFiles;
              _this2.TeamName = res.data.TeamName;
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error("Error fetching dashboard data:", _t);
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    triggerAlerts: function triggerAlerts(announcement) {
      var _this3 = this;
      this.startBlinking(announcement.Title);
      if (Notification.permission === "granted") {
        try {
          var notification = new Notification("New Team Announcement", {
            body: announcement.Title,
            icon: "/favicon.ico",
            tag: "new-announcement",
            renotify: true
          });
          notification.onclick = function () {
            window.focus();
            _this3.stopBlinking();
          };
        } catch (err) {
          console.error("Notification error:", err);
        }
      }
    },
    startBlinking: function startBlinking(title) {
      this.stopBlinking();
      var originalTitle = document.title;
      this.blinkInterval = setInterval(function () {
        document.title = document.title === originalTitle ? "\uD83D\uDD14 NEW: ".concat(title) : originalTitle;
      }, 1000);
    },
    stopBlinking: function stopBlinking() {
      this.isTabActive = true;
      if (this.blinkInterval) {
        clearInterval(this.blinkInterval);
        this.blinkInterval = null;
        document.title = "Documentation System";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MessageBubble.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MessageBubble.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    message: {
      type: [Object, String],
      required: true
    },
    isMine: {
      type: Boolean
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Systems.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Systems.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChatComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatComponent.vue */ "./resources/js/components/ChatComponent.vue");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ChatComponent: _ChatComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      showChatDialog: false,
      openingId: null,
      dialog: false,
      selectedSystem: null,
      tocItems: [],
      systems: []
    };
  },
  created: function created() {
    this.loadInitialData();
  },
  computed: {
    systemId: function systemId() {
      return this.$store.state.SystemID;
    },
    chapterId: function chapterId() {
      return this.$store.state.ChapterID;
    },
    chunkedSystems: function chunkedSystems() {
      var size = 4; // Matches lg="3" (12 / 3 = 4 columns)
      var chunked = [];
      for (var i = 0; i < this.systems.length; i += size) {
        chunked.push(this.systems.slice(i, i + size));
      }
      return chunked;
    }
  },
  mounted: function mounted() {
    var _this = this;
    if (this.$store.state.SystemID) {
      var savedSystem = this.systems.find(function (s) {
        return s.SystemID === _this.$store.state.SystemID;
      });
      setTimeout(function () {
        var systemToRestore = _this.systems.find(function (s) {
          return s.SystemID === _this.$store.state.SystemID;
        });
        if (systemToRestore) {
          _this.selectedSystem = systemToRestore;
          _this.openingId = systemToRestore.SystemID;
          _this.dialog = true;
        }
      }, 500);
    }
  },
  methods: {
    openBook: function openBook(system) {
      var _this2 = this;
      this.openingId = system.SystemID;
      this.selectedSystem = system;
      setTimeout(function () {
        _this2.dialog = true;
      }, 1200);
    },
    goToChapter: function goToChapter(title, value) {
      this.$store.dispatch("updateDownloadParams", {
        systemId: this.openingId,
        system: title,
        chapterId: value,
        SystemName: this.selectedSystem.SystemName
      });
      this.$router.push({
        name: "documents"
      });
    },
    closeBook: function closeBook() {
      var _this3 = this;
      this.dialog = false;
      this.$store.dispatch("updateDownloadParams", {
        systemId: null,
        system: null,
        chapterId: null
      });
      setTimeout(function () {
        _this3.openingId = null;
      }, 300);
    },
    loadInitialData: function loadInitialData() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var credentials, teamId, _yield$Promise$all, _yield$Promise$all2, sysRes, catRes, status, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this4.isLoading = true;
              credentials = _this4.$store.state.credentials;
              teamId = credentials && credentials.length > 0 ? credentials[0].TeamID : null;
              console.log(teamId, "tytyt");
              _context.p = 1;
              _context.n = 2;
              return Promise.all([axios.get("".concat(_this4.$url, "/api/systems"), {
                params: {
                  TeamID: teamId
                }
              }), axios.get("".concat(_this4.$url, "/api/systems"), {
                params: {
                  Cat: true
                }
              })]);
            case 2:
              _yield$Promise$all = _context.v;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              sysRes = _yield$Promise$all2[0];
              catRes = _yield$Promise$all2[1];
              _this4.systems = sysRes.data.systems;
              _this4.tocItems = catRes.data.category;
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              status = _t.response ? _t.response.status : 500;
              _this4.$router.push("/error/" + status);
            case 4:
              _context.p = 4;
              _this4.isLoading = false;
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TableofContents.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TableofContents.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      contents: [{
        title: "Deployment/Making",
        slug: "intro"
      }, {
        title: "Tasks(Request)",
        slug: "download"
      }, {
        title: "Process Factory",
        slug: "install"
      }, {
        title: "System Manual",
        slug: "install"
      }, {
        title: "System Documents",
        slug: "install"
      }, {
        title: "Problem(Trouble)",
        slug: "install"
      }
      // { title: "Introduction", slug: "intro" },
      // { title: "System Requirements", slug: "requirements" },
      // { title: "Installation Guide", slug: "install" },
      ]
    };
  },
  methods: {
    goToChapter: function goToChapter(slug) {
      this.$router.push({
        name: "download",
        params: {
          chapter: slug
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Trial.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Trial.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      printloading: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/masters/Masters.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/masters/Masters.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      dialog: false,
      activeTab: 0,
      loading: false,
      forms: {
        system: {
          SystemName: "",
          Logo: null
        },
        team: {
          TeamName: ""
        },
        category: {
          ContentType: ""
        }
      }
    };
  },
  methods: {
    saveData: function saveData() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var payload, endpoint, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this.loading = true;
              payload = new FormData();
              endpoint = ""; // Determine which tab is active and set payload
              if (_this.activeTab === 0) {
                endpoint = "/api/systems";
                payload.append("SystemName", _this.forms.system.SystemName);
                payload.append("Logo", _this.forms.system.Logo);
              } else if (_this.activeTab === 1) {
                endpoint = "/api/teams";
                payload.append("TeamName", _this.forms.team.TeamName);
              } else {
                endpoint = "/api/categories";
                payload.append("ContentType", _this.forms.category.ContentType);
              }
              _context.p = 1;
              _context.n = 2;
              return axios.post(endpoint, payload);
            case 2:
              alert("Data saved successfully!");
              _this.dialog = false;
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error("Error saving data", _t);
            case 4:
              _context.p = 4;
              _this.loading = false;
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ChatComponent.vue?vue&type=template&id=80d584ac&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ChatComponent.vue?vue&type=template&id=80d584ac&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
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
    attrs: {
      fluid: "",
      "fill-height": ""
    }
  }, [_c("v-layout", {
    attrs: {
      "align-center": "",
      "justify-center": ""
    }
  }, [_c("v-dialog", {
    attrs: {
      value: _vm.showChatDialog,
      width: "500px"
    },
    on: {
      input: function input($event) {
        return _vm.$emit("update:showChatDialog", $event);
      }
    }
  }, [_c("div", {
    staticClass: "chat-container",
    "class": {
      "chat-container-small": !_vm.joined,
      "chat-container-large": _vm.joined
    }
  }, [!_vm.joined ? _c("div", {
    staticClass: "username-form"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.username,
      expression: "username"
    }],
    attrs: {
      type: "text",
      placeholder: "Enter your name"
    },
    domProps: {
      value: _vm.username
    },
    on: {
      keypress: function keypress($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.joinChat.apply(null, arguments);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.username = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("button", {
    on: {
      click: _vm.joinChat
    }
  }, [_vm._v("Join Chat")])]) : _c("div", {
    staticClass: "chat-interface"
  }, [_c("div", {
    staticClass: "messages-area"
  }, _vm._l(_vm.chatMessages, function (message) {
    return _c("MessageBubble", {
      key: message.id,
      attrs: {
        message: message,
        isMine: message.username === _vm.username
      }
    });
  }), 1), _vm._v(" "), _c("div", {
    staticClass: "input-area"
  }, [_c("input", {
    ref: "imageInput",
    staticStyle: {
      display: "none"
    },
    attrs: {
      type: "file",
      accept: "image/*"
    },
    on: {
      change: _vm.onFileSelected
    }
  }), _vm._v(" "), _c("button", {
    on: {
      click: _vm.triggerFileInput
    }
  }, [_vm._v("📷")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.message,
      expression: "message"
    }],
    attrs: {
      type: "text",
      placeholder: "Type your message..."
    },
    domProps: {
      value: _vm.message
    },
    on: {
      keypress: function keypress($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.sendMessage.apply(null, arguments);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.message = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("button", {
    on: {
      click: function click($event) {
        return _vm.sendMessage();
      }
    }
  }, [_vm._v("Send")])])])])])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
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
    attrs: {
      fluid: ""
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("v-card", {
    attrs: {
      color: "primary",
      dark: "",
      elevation: "4"
    }
  }, [_c("v-card-text", {
    staticClass: "d-flex align-center"
  }, [_c("v-icon", {
    attrs: {
      size: "48"
    }
  }, [_vm._v("mdi-cog-box")]), _vm._v(" "), _c("div", {
    staticClass: "ml-4"
  }, [_c("div", {
    staticClass: "headline font-weight-bold"
  }, [_vm._v(_vm._s(_vm.totalSystems))]), _vm._v(" "), _c("div", {
    staticClass: "subtitle-2 text-uppercase"
  }, [_vm._v("Total " + _vm._s(_vm.TeamName) + " Systems")])])], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("v-card", {
    attrs: {
      color: "success",
      dark: "",
      elevation: "4"
    }
  }, [_c("v-card-text", {
    staticClass: "d-flex align-center"
  }, [_c("v-icon", {
    attrs: {
      size: "48"
    }
  }, [_vm._v("mdi-file-multiple")]), _vm._v(" "), _c("div", {
    staticClass: "ml-4"
  }, [_c("div", {
    staticClass: "headline font-weight-bold"
  }, [_vm._v(_vm._s(_vm.totalFiles))]), _vm._v(" "), _c("div", {
    staticClass: "subtitle-2 text-uppercase"
  }, [_vm._v("Total " + _vm._s(_vm.TeamName) + " Files")])])], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("h2", {
    staticClass: "mb-4 d-flex align-center"
  }, [_c("v-icon", {
    staticClass: "mr-2"
  }, [_vm._v("mdi-bullhorn")]), _vm._v(" Announcements for " + _vm._s(_vm.TeamName) + "\n      ")], 1), _vm._v(" "), _c("div", {
    staticClass: "pr-2",
    style: {
      height: _vm.$vuetify.breakpoint.height - 260 + "px",
      overflowY: "auto"
    }
  }, [_c("v-timeline", {
    attrs: {
      dense: ""
    }
  }, _vm._l(_vm.announcements, function (ann) {
    return _c("v-timeline-item", {
      key: ann.AnnounceID,
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_c("v-card", {
      staticClass: "elevation-2 rounded-lg"
    }, [_c("v-card-title", {
      staticClass: "text-h6 pb-6"
    }, [_vm._v(_vm._s(ann.Title))]), _vm._v(" "), _c("v-card-subtitle", {
      staticClass: "caption italic"
    }, [_vm._v("\n                Posted " + _vm._s(_vm._f("formatDate")(ann.CreatedDate)) + " by\n                "), _c("strong", [_vm._v(_vm._s(ann.Author))])]), _vm._v(" "), _c("v-card-text", {
      staticClass: "pt-2"
    }, [_c("div", {
      staticClass: "text-body-1 black--text mb-4",
      staticStyle: {
        "white-space": "pre-wrap"
      }
    }, [_c("p", {
      staticStyle: {
        "white-space": "pre-wrap"
      }
    }, [_vm._v(_vm._s(ann.Content))])]), _vm._v(" "), ann.Image ? _c("v-img", {
      staticClass: "rounded-lg grey lighten-4 mb-2",
      attrs: {
        src: "storage/images/announcements/".concat(ann.Image),
        "max-height": "200",
        contain: ""
      },
      scopedSlots: _vm._u([{
        key: "placeholder",
        fn: function fn() {
          return [_c("v-row", {
            staticClass: "fill-height ma-0",
            attrs: {
              align: "center",
              justify: "center"
            }
          }, [_c("v-progress-circular", {
            attrs: {
              indeterminate: "",
              color: "grey lighten-5"
            }
          })], 1)];
        },
        proxy: true
      }], null, true)
    }) : _vm._e()], 1)], 1)], 1);
  }), 1), _vm._v(" "), _vm.announcements.length === 0 ? _c("div", {
    staticClass: "text-center grey--text mt-10"
  }, [_vm._v("\n          No active announcements found.\n        ")]) : _vm._e()], 1)])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MessageBubble.vue?vue&type=template&id=5ab72cd0&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MessageBubble.vue?vue&type=template&id=5ab72cd0&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "message-bubble-container",
    "class": {
      mine: _vm.isMine
    }
  }, [_c("div", {
    staticClass: "message-bubble"
  }, [_c("div", {
    staticClass: "username"
  }, [_vm._v(_vm._s(_vm.message.username))]), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_vm.message.type === "text" ? _c("span", [_vm._v(_vm._s(_vm.message.content))]) : _vm.message.type === "image" && _vm.message.imageUrl ? _c("img", {
    staticClass: "chat-image",
    attrs: {
      src: _vm.message.imageUrl,
      alt: "Sent Image"
    }
  }) : _vm._e()])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Systems.vue?vue&type=template&id=7d084b89&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Systems.vue?vue&type=template&id=7d084b89&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "bookshelf-background"
  }, [_c("v-overlay", {
    attrs: {
      value: _vm.isLoading,
      "z-index": "100"
    }
  }, [_c("div", {
    staticClass: "d-flex flex-column align-center justify-center"
  }, [_c("v-progress-circular", {
    attrs: {
      indeterminate: "",
      size: "80",
      color: "amber"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "mt-4 white--text font-weight-large"
  }, [_vm._v("Loading Library...")])], 1)]), _vm._v(" "), _c("v-container", {
    staticClass: "py-0"
  }, [_vm._l(_vm.chunkedSystems, function (row, rowIndex) {
    return _c("v-row", {
      key: "row-" + rowIndex,
      staticClass: "shelf-row"
    }, _vm._l(row, function (system) {
      return _c("v-col", {
        key: system.SystemID,
        staticClass: "d-flex justify-center",
        attrs: {
          sm: "6",
          lg: "3",
          md: "4"
        }
      }, [_c("div", {
        staticClass: "book-wrapper",
        "class": {
          "is-opening": _vm.openingId === system.SystemID
        },
        on: {
          click: function click($event) {
            return _vm.openBook(system);
          }
        }
      }, [_c("div", {
        staticClass: "book-floor-shadow"
      }), _vm._v(" "), _c("div", {
        staticClass: "book-spine"
      }), _vm._v(" "), _c("div", {
        staticClass: "page-stack"
      }, [_c("div", {
        staticClass: "page-layer layer-1 toc-page"
      }, [_vm.openingId === system.SystemID ? _c("div", {
        staticClass: "toc-container p-4"
      }, [_c("div", {
        staticClass: "toc-header"
      }, [_vm._v("TABLE OF CONTENTS")]), _vm._v(" "), _c("div", {
        staticClass: "toc-divider"
      }), _vm._v(" "), _c("ul", {
        staticClass: "toc-list"
      }, _vm._l(_vm.tocItems, function (item, index) {
        return _c("li", {
          key: index
        }, [_c("span", {
          staticClass: "chapter-num"
        }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("span", {
          staticClass: "chapter-title"
        }, [_vm._v(_vm._s(item.title))])]);
      }), 0)]) : _vm._e()]), _vm._v(" "), _c("div", {
        staticClass: "page-layer layer-2"
      }), _vm._v(" "), _c("div", {
        staticClass: "page-layer layer-3"
      }), _vm._v(" "), _c("div", {
        staticClass: "page-layer layer-4"
      }), _vm._v(" "), _c("div", {
        staticClass: "page-layer layer-final"
      }, [_c("div", {
        staticClass: "page-edge-lines"
      })])]), _vm._v(" "), _c("div", {
        staticClass: "book-cover-container"
      }, [_c("div", {
        staticClass: "book-cover"
      }, [_c("div", {
        staticClass: "cover-content d-flex flex-column align-center justify-center"
      }, [_c("img", {
        staticClass: "mb-4",
        attrs: {
          src: "storage/images/".concat(system.Logo),
          onerror: "src='storage/images/system.png'",
          width: "70",
          contain: ""
        }
      }), _vm._v(" "), _c("div", {
        staticClass: "book-title-text"
      }, [_vm._v(_vm._s(system.SystemName))])])])])])]);
    }), 1);
  }), _vm._v(" "), _c("v-dialog", {
    attrs: {
      "max-width": "800px",
      persistent: "",
      "content-class": "book-dialog"
    },
    model: {
      value: _vm.dialog,
      callback: function callback($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
    }
  }, [_vm.selectedSystem ? _c("v-card", {
    staticClass: "book-container"
  }, [_c("v-btn", {
    staticClass: "close-bookmark",
    attrs: {
      icon: "",
      small: ""
    },
    on: {
      click: _vm.closeBook
    }
  }, [_c("v-icon", [_vm._v("mdi-close")])], 1), _vm._v(" "), _c("v-row", {
    staticClass: "fill-height",
    attrs: {
      "no-gutters": ""
    }
  }, [_c("v-col", {
    staticClass: "book-page left-page d-flex flex-column align-center justify-center",
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("img", {
    staticClass: "mb-6",
    attrs: {
      src: "storage/images/".concat(_vm.selectedSystem.Logo),
      onerror: "src='storage/images/system.png'",
      width: "80",
      contain: ""
    }
  }), _vm._v(" "), _c("h2", {
    staticClass: "book-display-title"
  }, [_vm._v(_vm._s(_vm.selectedSystem.SystemName))]), _vm._v(" "), _c("div", {
    staticClass: "book-subtitle"
  }, [_vm._v("Documentation")]), _vm._v(" "), _c("div", {
    staticClass: "page-footer"
  }, [_vm._v("Page i")])]), _vm._v(" "), _c("div", {
    staticClass: "book-spine-fold"
  }), _vm._v(" "), _c("v-col", {
    staticClass: "book-page right-page",
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("div", {
    staticClass: "toc-wrapper"
  }, [_c("h3", {
    staticClass: "toc-title"
  }, [_vm._v("Table of Contents")]), _vm._v(" "), _c("div", {
    staticClass: "toc-underline"
  }), _vm._v(" "), _c("v-list", {
    staticClass: "mt-4",
    attrs: {
      "bg-color": "transparent"
    }
  }, _vm._l(_vm.tocItems, function (item, i) {
    return _c("v-list-item", {
      key: i,
      staticClass: "toc-entry",
      on: {
        click: function click($event) {
          return _vm.goToChapter(item.title, item.value);
        }
      },
      scopedSlots: _vm._u([{
        key: "prepend",
        fn: function fn() {
          return [_c("span", {
            staticClass: "toc-num"
          }, [_vm._v(_vm._s(i + 1))])];
        },
        proxy: true
      }, {
        key: "append",
        fn: function fn() {
          return [_c("v-icon", {
            attrs: {
              size: "small"
            }
          }, [_vm._v("mdi-chevron-right")])];
        },
        proxy: true
      }], null, true)
    }, [_vm._v(" "), _c("v-list-item-title", {
      staticClass: "toc-text"
    }, [_vm._v(_vm._s(item.title))])], 1);
  }), 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "page-footer"
  }, [_vm._v("Page 1")])])], 1)], 1) : _vm._e()], 1), _vm._v(" "), _c("ChatComponent", {
    attrs: {
      showChatDialog: _vm.showChatDialog
    },
    on: {
      "update:showChatDialog": function updateShowChatDialog($event) {
        _vm.showChatDialog = $event;
      },
      "update:show-chat-dialog": function updateShowChatDialog($event) {
        _vm.showChatDialog = $event;
      }
    }
  }), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "#3C0753",
      fab: "",
      dark: "",
      fixed: "",
      bottom: "",
      right: ""
    },
    on: {
      click: function click($event) {
        _vm.showChatDialog = true;
      }
    }
  }, [_c("v-icon", [_vm._v("mdi-chat-processing")])], 1)], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TableofContents.vue?vue&type=template&id=0ddb1d44":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TableofContents.vue?vue&type=template&id=0ddb1d44 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-card", {
    staticClass: "ma-3"
  }, [_c("v-toolbar", {
    attrs: {
      dark: ""
    }
  }, [_c("v-btn", {
    attrs: {
      icon: ""
    },
    on: {
      click: function click($event) {
        return _vm.$router.back();
      }
    }
  }, [_c("v-icon", [_vm._v("mdi-arrow-left")])], 1), _vm._v(" "), _c("v-toolbar-title", [_vm._v("Table of Contents")])], 1), _vm._v(" "), _c("v-list", {
    attrs: {
      "items-group": ""
    }
  }, _vm._l(_vm.contents, function (item, i) {
    return _c("v-list-item", {
      key: i,
      on: {
        click: function click($event) {
          return _vm.goToChapter(item.slug);
        }
      }
    }, [_c("v-list-item-icon", [_c("v-icon", [_vm._v("mdi-book-open-variant")])], 1), _vm._v(" "), _c("v-list-item-content", [_c("v-list-item-title", [_vm._v(_vm._s(item.title))])], 1), _vm._v(" "), _c("v-list-item-action", [_c("v-icon", [_vm._v("mdi-chevron-right")])], 1)], 1);
  }), 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Trial.vue?vue&type=template&id=bca5e68a":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Trial.vue?vue&type=template&id=bca5e68a ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "pa-9"
  }, [_c("div", [_c("v-row", {
    attrs: {
      dense: ""
    }
  }, [_c("h2", {
    style: _vm.isMobile ? "margin-left: 0;" : "margin-left: 15"
  }, [_vm._v("SHIPMENT")]), _vm._v(" "), _c("a", {
    staticStyle: {
      width: "60px",
      "text-align": "center",
      "font-size": "30px",
      color: "black",
      "font-weight": "bold"
    },
    attrs: {
      margin: "-3px -18px 0px 20px;"
    }
  }, [_vm._v("\r\n                :\r\n              ")]), _vm._v(" "), _c("div", {
    style: _vm.isMobile ? "width:8% ;text-align:center" : "width:5% ;text-align:center"
  }, [_c("v-text-field", {
    staticClass: "larger",
    attrs: {
      dense: "",
      min: "1",
      maxlength: "2",
      outlined: "",
      type: "text",
      oninput: "this.value.replace(/[^0-9]/g, '').replace(/(\\..*?)\\..*/g, '$1');"
    }
  })], 1), _vm._v(" "), _c("a", {
    staticStyle: {
      width: "60px",
      "text-align": "center",
      "font-size": "30px",
      color: "black",
      margin: "-3px -2px 0px -2px"
    }
  }, [_vm._v("\r\n                -\r\n              ")]), _vm._v(" "), _c("div", {
    style: _vm.isMobile ? "width:8%" : "width:5%"
  }, [_c("v-text-field", {
    staticClass: "larger",
    attrs: {
      dense: "",
      min: "1",
      maxlength: "2",
      outlined: "",
      type: "text",
      oninput: "this.value.replace(/[^0-9]/g, '').replace(/(\\..*?)\\..*/g, '$1');"
    }
  })], 1), _vm._v("\r\n               \r\n              "), _c("v-select", {
    staticStyle: {
      color: "black",
      "font-weight": "bold",
      "text-align": "center",
      "max-width": "20%",
      height: "10px",
      "background-color": "#fff2cc",
      padding: "0px 0px 40px 0px"
    },
    attrs: {
      outlined: "",
      dense: "",
      "item-text": "dstn_nm",
      "item-value": "dstn_cd",
      placeholder: "ALL"
    }
  }), _vm._v("\r\n               \r\n\r\n              "), _c("v-btn", {
    staticStyle: {
      "font-weight": "bold",
      margin: "2px 0px 0px 0px",
      "background-color": "#fff2cc"
    },
    on: {
      click: function click($event) {
        return _vm.searchBtn();
      }
    }
  }, [_vm._v("Search")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-btn", {
    staticStyle: {
      "font-weight": "bold",
      "background-color": "#3c282f",
      color: "white"
    },
    attrs: {
      disabled: true
    },
    on: {
      click: function click($event) {
        return _vm.scanBarcode();
      }
    }
  }, [_vm._v("\r\n                SCAN QR CODE\r\n                "), _c("v-icon", {
    staticClass: "ml-5",
    attrs: {
      color: "white"
    }
  }, [_vm._v("mdi-qrcode-scan ")])], 1)], 1)], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("hr", {
    staticStyle: {
      color: "black",
      "font-weight": "bold",
      border: "2px solid black"
    }
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("v-row", {
    attrs: {
      dense: ""
    }
  }, [_c("v-col", {
    attrs: {
      xl: "1",
      lg: "1",
      md: "1",
      sm: "2",
      xs: "1"
    }
  }, [_c("span", {
    staticClass: "text-h6 mt-1 font-weight-bold black--text",
    style: _vm.isMobile ? "font-size:small" : "font-size:large"
  }, [_vm._v("\r\n                FILTER\r\n              ")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      xl: "2",
      lg: "2",
      md: "5",
      sm: "5",
      xs: "5"
    }
  }, [_c("v-text-field", {
    style: _vm.$vuetify.breakpoint.mdAndDown ? "max-width:100vw" : "max-width:15vw",
    attrs: {
      clearable: "",
      dense: "",
      outlined: "",
      label: "House Code & Destination Code",
      "background-color": "#dae8fc"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      xl: "3",
      lg: "3",
      md: "6",
      sm: "5",
      xs: "6"
    }
  }, [_c("v-select", {
    style: _vm.$vuetify.breakpoint.mdAndDown ? "max-width:100vw" : "max-width:15vw",
    attrs: {
      items: _vm.StatusType,
      "item-text": "type",
      "item-value": "value",
      dense: "",
      clearable: "",
      "background-color": "#fff2cc",
      placeholder: "FILTER STATUS",
      outlined: "",
      "hide-details": ""
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      xl: "5",
      lg: "5",
      md: "10",
      sm: "10",
      xs: "3"
    }
  }, [_c("div", [_c("v-simple-table", {
    style: _vm.$vuetify.breakpoint.lgAndUp ? "width:98%" : "width:98%",
    attrs: {
      dense: ""
    }
  }, [_c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      height: "2px",
      "background-color": "#3c282f",
      color: "white"
    },
    attrs: {
      rowspan: "1",
      colspan: "5"
    }
  }, [_c("center", [_vm._v("SUMMARY")])], 1)]), _vm._v(" "), _c("tr", [_c("th", {
    staticClass: "TableDesignt",
    staticStyle: {
      "background-color": "#3c282f",
      color: "white"
    },
    attrs: {
      id: "ros"
    }
  }, [_vm._v("\r\n                        NOT YET\r\n                      ")]), _vm._v(" "), _c("th", {
    staticClass: "TableDesignt",
    staticStyle: {
      "background-color": "#3c282f",
      color: "white"
    },
    attrs: {
      id: "ros"
    }
  }, [_vm._v("\r\n                        On Going\r\n                      ")]), _vm._v(" "), _c("th", {
    staticClass: "TableDesignt",
    staticStyle: {
      "background-color": "#3c282f",
      color: "white"
    },
    attrs: {
      id: "ros"
    }
  }, [_vm._v("\r\n                        FOR SENDING\r\n                      ")]), _vm._v(" "), _c("th", {
    staticClass: "TableDesignt",
    staticStyle: {
      "background-color": "#3c282f",
      color: "white"
    },
    attrs: {
      id: "ros"
    }
  }, [_vm._v("\r\n                        SENT\r\n                      ")]), _vm._v(" "), _c("th", {
    staticClass: "TableDesignt",
    staticStyle: {
      "background-color": "#3c282f",
      color: "white"
    },
    attrs: {
      id: "ros"
    }
  }, [_vm._v("\r\n                        TOTAL PLANS\r\n                      ")])])]), _vm._v(" "), _c("tbody", {
    staticClass: "TableDesign"
  }, [_c("tr", [_c("td", {
    staticClass: "TableDesign",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\r\n                        " + _vm._s(_vm.sumNotyet) + "\r\n                      ")]), _vm._v(" "), _c("td", {
    staticClass: "TableDesign",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\r\n                        " + _vm._s(_vm.sumOnGoing) + "\r\n                      ")]), _vm._v(" "), _c("td", {
    staticClass: "TableDesign",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\r\n                        " + _vm._s(_vm.sumForSending) + "\r\n                        ")]), _vm._v(" "), _c("td", {
    staticClass: "TableDesign",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\r\n                        " + _vm._s(_vm.sumSent) + "\r\n                        ")]), _vm._v(" "), _c("td", {
    staticClass: "TableDesign",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\r\n                        " + _vm._s(_vm.sumTolaPlan) + "\r\n                        ")])])])])], 1)]), _vm._v(" "), _c("v-col", {
    attrs: {
      xl: "1",
      lg: "1",
      md: "2",
      sm: "1",
      xs: "1"
    }
  }, [!_vm.isMobile ? _c("div", [_c("v-tooltip", {
    attrs: {
      left: "",
      color: "#3c282f"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref) {
        var on = _ref.on,
          props = _ref.props;
        return [_c("v-btn", _vm._g(_vm._b({
          staticClass: "text-center",
          staticStyle: {
            "background-color": "#3c282f",
            height: "80px",
            "text-align": "center"
          },
          attrs: {
            "x-large": ""
          },
          on: {
            click: function click($event) {
              return _vm.PrintQR(_vm.objWY, "All");
            }
          }
        }, "v-btn", props, false), on), [_c("v-row", [_vm.printloading ? _c("v-progress-circular", {
          staticClass: "mt-1",
          attrs: {
            loading: "",
            size: 30,
            width: 5,
            color: "white",
            indeterminate: ""
          }
        }) : _c("v-icon", {
          staticClass: "mt-n7 pt-n6 text-center",
          staticStyle: {
            height: "40px",
            width: "85px",
            "text-align": "center"
          },
          attrs: {
            "x-large": "",
            color: "white"
          }
        }, [_vm._v("mdi-printer")])], 1), _vm._v(" "), _c("v-row", [_c("h5", {
          staticClass: "text-center ml-n16 mt-5",
          staticStyle: {
            color: "white"
          }
        }, [_vm._v("\r\n                          PRINT ALL\r\n                        ")])])], 1)];
      }
    }], null, false, 1225669431)
  }, [_vm._v(" "), _c("span", [_vm._v("PRINT QR")])])], 1) : _vm._e()])], 1), _vm._v("\r\n\r\n          " + _vm._s("xs:" + _vm.$vuetify.breakpoint.xs) + "\r\n    " + _vm._s("sm:" + _vm.$vuetify.breakpoint.sm) + "\r\n    " + _vm._s("md:" + _vm.$vuetify.breakpoint.md) + "\r\n    " + _vm._s("lg:" + _vm.$vuetify.breakpoint.lg) + "\r\n    " + _vm._s("xl:" + _vm.$vuetify.breakpoint.xl) + " \r\n")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/masters/Masters.vue?vue&type=template&id=83c83a36":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/masters/Masters.vue?vue&type=template&id=83c83a36 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-container", [_c("v-btn", {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.dialog = true;
      }
    }
  }, [_vm._v("Open Master Settings")]), _vm._v(" "), _c("v-dialog", {
    attrs: {
      "max-width": "600px"
    },
    model: {
      value: _vm.dialog,
      callback: function callback($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline grey lighten-2"
  }, [_vm._v("\n        Master Data Management\n      ")]), _vm._v(" "), _c("v-tabs", {
    attrs: {
      "background-color": "transparent",
      color: "primary",
      grow: ""
    },
    model: {
      value: _vm.activeTab,
      callback: function callback($$v) {
        _vm.activeTab = $$v;
      },
      expression: "activeTab"
    }
  }, [_c("v-tab", [_vm._v("Systems")]), _vm._v(" "), _c("v-tab", [_vm._v("Teams")]), _vm._v(" "), _c("v-tab", [_vm._v("Category")])], 1), _vm._v(" "), _c("v-tabs-items", {
    model: {
      value: _vm.activeTab,
      callback: function callback($$v) {
        _vm.activeTab = $$v;
      },
      expression: "activeTab"
    }
  }, [_c("v-tab-item", [_c("v-card", {
    attrs: {
      flat: ""
    }
  }, [_c("v-card-text", [_c("v-text-field", {
    attrs: {
      label: "System Name",
      outlined: ""
    },
    model: {
      value: _vm.forms.system.SystemName,
      callback: function callback($$v) {
        _vm.$set(_vm.forms.system, "SystemName", $$v);
      },
      expression: "forms.system.SystemName"
    }
  }), _vm._v(" "), _c("v-file-input", {
    attrs: {
      label: "System Logo",
      accept: "image/*",
      "prepend-icon": "mdi-camera",
      outlined: ""
    },
    model: {
      value: _vm.forms.system.Logo,
      callback: function callback($$v) {
        _vm.$set(_vm.forms.system, "Logo", $$v);
      },
      expression: "forms.system.Logo"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("v-tab-item", [_c("v-card", {
    attrs: {
      flat: ""
    }
  }, [_c("v-card-text", [_c("v-text-field", {
    attrs: {
      label: "Team Name",
      outlined: ""
    },
    model: {
      value: _vm.forms.team.TeamName,
      callback: function callback($$v) {
        _vm.$set(_vm.forms.team, "TeamName", $$v);
      },
      expression: "forms.team.TeamName"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("v-tab-item", [_c("v-card", {
    attrs: {
      flat: ""
    }
  }, [_c("v-card-text", [_c("v-text-field", {
    attrs: {
      label: "Content Type",
      outlined: ""
    },
    model: {
      value: _vm.forms.category.ContentType,
      callback: function callback($$v) {
        _vm.$set(_vm.forms.category, "ContentType", $$v);
      },
      expression: "forms.category.ContentType"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-actions", [_c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "blue darken-1",
      text: ""
    },
    on: {
      click: function click($event) {
        _vm.dialog = false;
      }
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "success",
      loading: _vm.loading
    },
    on: {
      click: _vm.saveData
    }
  }, [_vm._v("Save Entry")])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ChatComponent.vue?vue&type=style&index=0&id=80d584ac&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ChatComponent.vue?vue&type=style&index=0&id=80d584ac&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.messages-area[data-v-80d584ac] {\r\n  flex-grow: 1;\r\n  overflow-y: auto;\r\n  padding: 16px;\r\n  display: flex;\r\n  flex-direction: column;\n}\n.input-area[data-v-80d584ac] {\r\n  padding: 16px;\r\n  border-top: 1px solid #eee;\r\n  margin-top: auto;\r\n  display: flex;\r\n  gap: 12px;\n}\ninput[type=\"text\"][data-v-80d584ac] {\r\n  flex-grow: 1;\r\n  padding: 12px;\r\n  border: 1px solid #ddd;\r\n  border-radius: 20px;\r\n  font-size: 14px;\n}\nbutton[data-v-80d584ac] {\r\n  padding: 12px 24px;\r\n  background-color: #007bff;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 20px;\r\n  cursor: pointer;\r\n  font-weight: 500;\n}\nbutton[data-v-80d584ac]:hover:not(:disabled) {\r\n  background-color: #0056b3;\n}\n.chat-container[data-v-80d584ac] {\r\n  max-width: 500px;\r\n  padding: 20px;\r\n  border: 1px solid #eee;\r\n  border-radius: 12px;\r\n  background-color: #ffffff;\r\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\r\n  display: flex;\r\n  flex-direction: column;\r\n  transition: height 0.3s ease-in-out;\n}\n.chat-container-small[data-v-80d584ac] {\r\n  height: 120px;\n}\n.chat-container-large[data-v-80d584ac] {\r\n  height: 500px;\n}\n.chat-interface[data-v-80d584ac] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\n}\n.username-form[data-v-80d584ac] {\r\n  display: flex;\r\n  gap: 12px;\r\n  margin-bottom: 24px;\r\n  padding: 16px;\r\n  background-color: #f8f9fa;\r\n  border-radius: 8px;\n}\n.v-dialog[data-v-80d584ac] {\r\n  box-shadow: none !important;\n}\n.v-overlay__content[data-v-80d584ac] {\r\n  box-shadow: none !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=style&index=0&id=040e2ab9&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=style&index=0&id=040e2ab9&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n[data-v-040e2ab9]::-webkit-scrollbar {\r\n  width: 5px;\n}\n[data-v-040e2ab9]::-webkit-scrollbar-thumb {\r\n  background: #bdbdbd;\r\n  border-radius: 10px;\n}\n[data-v-040e2ab9]::-webkit-scrollbar-track {\r\n  background: transparent;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MessageBubble.vue?vue&type=style&index=0&id=5ab72cd0&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MessageBubble.vue?vue&type=style&index=0&id=5ab72cd0&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.message-bubble-container[data-v-5ab72cd0] {\r\n    margin: 8px 0;\r\n    padding-left: 12px;\n}\n.message-bubble-container.mine[data-v-5ab72cd0] {\r\n    padding-left: 0;\r\n    padding-right: 12px;\r\n    text-align: right;\n}\n.message-bubble[data-v-5ab72cd0] {\r\n    max-width: 70%;\r\n    border-radius: 16px;\r\n    padding: 8px 12px;\r\n    position: relative;\r\n    display: inline-block;\r\n    /* To make image within bubble behave correctly */\n}\n.message-bubble-container:not(.mine) .message-bubble[data-v-5ab72cd0] {\r\n    background-color: #e9ecef;\r\n    margin-right: auto;\r\n    border-bottom-left-radius: 4px;\n}\n.message-bubble-container.mine .message-bubble[data-v-5ab72cd0] {\r\n    background-color: #007bff;\r\n    color: white;\r\n    margin-left: auto;\r\n    border-bottom-right-radius: 4px;\n}\n.username[data-v-5ab72cd0] {\r\n    font-size: 0.8em;\r\n    opacity: 0.8;\r\n    margin-bottom: 4px;\r\n    color: #333;\r\n    /* Darker color for readability */\n}\n.message-bubble-container.mine .username[data-v-5ab72cd0] {\r\n    color: rgba(255, 255, 255, 0.8);\r\n    /* Lighter color for readability on blue background */\n}\n.content[data-v-5ab72cd0] {\r\n    word-wrap: break-word;\r\n    /* Ensure long words break */\n}\n.chat-image[data-v-5ab72cd0] {\r\n    max-width: 100%;\r\n    /* Ensure images fit within the bubble */\r\n    height: auto;\r\n    border-radius: 8px;\r\n    margin-top: 5px;\r\n    /* Add some space between username and image */\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Systems.vue?vue&type=style&index=0&id=7d084b89&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Systems.vue?vue&type=style&index=0&id=7d084b89&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bookshelf-background[data-v-7d084b89] {\r\n  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),\r\n    url(\"/TS/storage/images/wood-pattern.png\"), #4a2c1a;\r\n  background-repeat: repeat;\r\n  min-height: 100%;\r\n  padding: 50px 0;\n}\n.shelf-row[data-v-7d084b89] {\r\n  background-image: linear-gradient(\r\n    to bottom,\r\n    transparent 0px,\r\n    transparent 380px,\r\n    #3d2516 380px,\r\n    #5d3a24 390px,\r\n    #2a180d 400px\r\n  );\r\n  background-size: 100% 400px;\r\n  margin-bottom: 40px;\n}\n.book-wrapper[data-v-7d084b89] {\r\n  perspective: 1500px;\r\n  cursor: pointer;\r\n  height: 380px;\r\n  width: 260px;\r\n  margin-bottom: 20px;\r\n  position: relative;\n}\n.toc-page[data-v-7d084b89] {\r\n  background: #fffcf5 !important;\r\n  padding: 15px;\r\n  overflow: hidden;\n}\n.toc-header[data-v-7d084b89] {\r\n  font-family: \"Serif\", \"Georgia\", serif;\r\n  font-weight: bold;\r\n  font-size: 1.1rem;\r\n  text-align: center;\r\n  color: #2c3e50;\r\n  margin-bottom: 5px;\n}\n.toc-divider[data-v-7d084b89] {\r\n  height: 2px;\r\n  background: #2c3e50;\r\n  width: 40px;\r\n  margin: 0 auto 15px auto;\n}\n.toc-list[data-v-7d084b89] {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\n}\n.toc-list li[data-v-7d084b89] {\r\n  font-size: 0.75rem;\r\n  color: #333;\r\n  margin-bottom: 8px;\r\n  border-bottom: 1px dotted #ccc;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\n}\n.chapter-num[data-v-7d084b89] {\r\n  font-weight: bold;\r\n  margin-right: 10px;\r\n  color: #7f8c8d;\n}\n.chapter-title[data-v-7d084b89] {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\n}\n.layer-1[data-v-7d084b89] {\r\n  transform: translateX(3px);\r\n  z-index: 15;\n}\n.book-wrapper[data-v-7d084b89] {\r\n  perspective: 1500px;\r\n  cursor: pointer;\r\n  height: 380px;\r\n  width: 260px;\r\n  margin-bottom: 80px;\r\n  position: relative;\n}\n.book-spine[data-v-7d084b89] {\r\n  position: absolute;\r\n  width: 40px;\r\n  height: 100%;\r\n  background: linear-gradient(90deg, #162129 0%, #2c3e50 50%, #162129 100%);\r\n  left: -10px;\r\n  border-radius: 5px 0 0 5px;\r\n  z-index: 21;\n}\n.page-stack[data-v-7d084b89] {\r\n  position: absolute;\r\n  top: 6px;\r\n  left: 30px;\r\n  width: 100%;\r\n  height: calc(100% - 12px);\r\n  z-index: 5;\n}\n.page-layer[data-v-7d084b89] {\r\n  position: absolute;\r\n  background: #ffffff;\r\n  height: 100%;\r\n  width: 100%;\r\n  border-radius: 0 4px 4px 0;\r\n  border-right: 1px solid #ddd;\n}\n.layer-2[data-v-7d084b89] {\r\n  transform: translateX(6px);\r\n  z-index: 3;\n}\n.layer-3[data-v-7d084b89] {\r\n  transform: translateX(9px);\r\n  z-index: 2;\n}\n.layer-4[data-v-7d084b89] {\r\n  transform: translateX(12px);\r\n  z-index: 1;\n}\n.layer-final[data-v-7d084b89] {\r\n  transform: translateX(15px);\r\n  z-index: 0;\r\n  background: #fdfdfd;\r\n  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3);\n}\n.page-edge-lines[data-v-7d084b89] {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-image: repeating-linear-gradient(\r\n    90deg,\r\n    transparent,\r\n    transparent 1px,\r\n    rgba(0, 0, 0, 0.08) 1px,\r\n    rgba(0, 0, 0, 0.08) 2px\r\n  );\n}\n.book-cover-container[data-v-7d084b89] {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  left: 30px;\r\n  z-index: 20;\r\n  transform-style: preserve-d3d;\r\n  transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n  transform-origin: left;\n}\n.is-opening .book-cover-container[data-v-7d084b89] {\r\n  transform: rotateY(-155deg);\n}\n.book-cover[data-v-7d084b89] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #34495e;\r\n  color: white;\r\n  backface-visibility: hidden;\r\n  border-radius: 0 6px 6px 0;\r\n  box-shadow: inset 5px 0 10px rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}\n.book-title-text[data-v-7d084b89] {\r\n  font-weight: 800;\r\n  font-size: 0.9rem;\r\n  padding: 0 15px;\r\n  text-align: center;\r\n  text-transform: uppercase;\n}\n.book-floor-shadow[data-v-7d084b89] {\r\n  position: absolute;\r\n  bottom: -20px;\r\n  left: 20px;\r\n  width: 100%;\r\n  height: 40px;\r\n  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.3) 0%, transparent 70%);\r\n  z-index: -1;\n}\n.book-dialog[data-v-7d084b89] {\r\n  box-shadow: none !important;\n}\n.book-container[data-v-7d084b89] {\r\n  background-color: #f4f1ea !important;\r\n  background: url(\"/TS/storage/images/paper-fibers.png\");\r\n  border-radius: 4px !important;\r\n  position: relative;\r\n  overflow: hidden;\r\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5) !important;\n}\n.book-page[data-v-7d084b89] {\r\n  padding: 40px;\r\n  min-height: 500px;\r\n  position: relative;\n}\n.book-spine-fold[data-v-7d084b89] {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 30px;\r\n  transform: translateX(-50%);\r\n  background: linear-gradient(\r\n    to right,\r\n    rgba(0, 0, 0, 0.05) 0%,\r\n    rgba(0, 0, 0, 0.2) 45%,\r\n    rgba(0, 0, 0, 0.3) 50%,\r\n    rgba(0, 0, 0, 0.2) 55%,\r\n    rgba(0, 0, 0, 0.05) 100%\r\n  );\r\n  z-index: 2;\n}\n.book-display-title[data-v-7d084b89] {\r\n  font-family: \"Playfair Display\", serif;\r\n  font-weight: 700;\r\n  color: #2c3e50;\r\n  text-align: center;\r\n  border-bottom: 2px solid #2c3e50;\r\n  margin-bottom: 10px;\n}\n.book-subtitle[data-v-7d084b89] {\r\n  font-style: italic;\r\n  color: #7f8c8d;\n}\n.toc-title[data-v-7d084b89] {\r\n  font-family: \"Playfair Display\", serif;\r\n  text-align: center;\r\n  color: #2c3e50;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\n}\n.toc-underline[data-v-7d084b89] {\r\n  width: 50px;\r\n  height: 2px;\r\n  background: #2c3e50;\r\n  margin: 10px auto;\n}\n.toc-entry[data-v-7d084b89] {\r\n  border-bottom: 1px dotted #bdc3c7;\r\n  transition: background 0.3s;\n}\n.toc-entry[data-v-7d084b89]:hover {\r\n  background: rgba(0, 0, 0, 0.03) !important;\n}\n.toc-num[data-v-7d084b89] {\r\n  font-weight: bold;\r\n  color: #95a5a6;\r\n  margin-right: 15px;\r\n  font-size: 0.9rem;\n}\n.toc-text[data-v-7d084b89] {\r\n  font-size: 0.95rem;\r\n  color: #34495e;\n}\n.page-footer[data-v-7d084b89] {\r\n  position: absolute;\r\n  bottom: 15px;\r\n  width: 100%;\r\n  left: 0;\r\n  text-align: center;\r\n  font-size: 0.7rem;\r\n  color: #bdc3c7;\n}\n.close-bookmark[data-v-7d084b89] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 20px;\r\n  background: #e74c3c !important;\r\n  color: white !important;\r\n  border-radius: 0 0 5px 5px !important;\r\n  z-index: 10;\n}\n.left-page[data-v-7d084b89] {\r\n  background-color: #34495e !important;\r\n  color: white !important;\r\n  box-shadow: inset -10px 0 20px rgba(0, 0, 0, 0.2);\n}\n.left-page .book-display-title[data-v-7d084b89] {\r\n  color: #ffffff !important;\r\n  border-bottom: 2px solid #ffffff;\n}\n.left-page .book-subtitle[data-v-7d084b89] {\r\n  color: #bdc3c7 !important;\n}\n.left-page .page-footer[data-v-7d084b89] {\r\n  color: #95a5a6 !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Trial.vue?vue&type=style&index=0&id=bca5e68a&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Trial.vue?vue&type=style&index=0&id=bca5e68a&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.TableDesignTh {\r\n  color: white !important;\r\n  background-color: #3c282f !important;\n}\n.TableDesign {\r\n  border: 1px solid black !important;\r\n  border-collapse: collapse;\r\n  text-align: center !important;\n}\n.TableDesignt {\r\n  border: 1px solid white !important;\r\n  border-collapse: collapse;\r\n  text-align: center !important;\r\n  position: relative;\n}\n.v-progress-circular {\r\n  margin: 2rem;\n}\n.SchedLabelInd {\r\n  font-size: 2vw !important;\n}\n.donthover tr:hover {\r\n  background-color: transparent !important;\n}\n.video {\r\n  -o-object-fit: fill;\r\n     object-fit: fill;\n}\n.video-container {\r\n  position: relative;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\n}\n.play-button {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 1;\r\n  background: transparent;\r\n  border: none;\r\n  padding: 0;\r\n  cursor: pointer;\n}\n.camera-button .v-file-input {\r\n  display: none;\n}\n.larger {\r\n  font-weight: bold;\r\n  height: 39px;\r\n  background-color: #d5e8d4;\n}\n.v-icon {\r\n  transition: all 0.3s linear;\n}\n.v-icon:hover {\r\n  transform: scale(1.5);\n}\n.hover:hover {\r\n  color: #3c282f;\n}\n.dots::after {\r\n  content: \"\";\r\n  display: inline-block;\r\n  width: 1em;\r\n  text-align: left;\r\n  animation: dots 1.5s steps(4, end) infinite;\n}\n@keyframes dots {\n0%,\r\n  20% {\r\n    content: \"\";\n}\n40% {\r\n    content: \".\";\n}\n60% {\r\n    content: \"..\";\n}\n80%,\r\n  100% {\r\n    content: \"...\";\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ChatComponent.vue?vue&type=style&index=0&id=80d584ac&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ChatComponent.vue?vue&type=style&index=0&id=80d584ac&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_style_index_0_id_80d584ac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatComponent.vue?vue&type=style&index=0&id=80d584ac&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ChatComponent.vue?vue&type=style&index=0&id=80d584ac&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_style_index_0_id_80d584ac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_style_index_0_id_80d584ac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=style&index=0&id=040e2ab9&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=style&index=0&id=040e2ab9&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_040e2ab9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=040e2ab9&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=style&index=0&id=040e2ab9&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_040e2ab9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_040e2ab9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MessageBubble.vue?vue&type=style&index=0&id=5ab72cd0&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MessageBubble.vue?vue&type=style&index=0&id=5ab72cd0&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBubble_vue_vue_type_style_index_0_id_5ab72cd0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MessageBubble.vue?vue&type=style&index=0&id=5ab72cd0&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MessageBubble.vue?vue&type=style&index=0&id=5ab72cd0&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBubble_vue_vue_type_style_index_0_id_5ab72cd0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBubble_vue_vue_type_style_index_0_id_5ab72cd0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Systems.vue?vue&type=style&index=0&id=7d084b89&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Systems.vue?vue&type=style&index=0&id=7d084b89&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Systems_vue_vue_type_style_index_0_id_7d084b89_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Systems.vue?vue&type=style&index=0&id=7d084b89&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Systems.vue?vue&type=style&index=0&id=7d084b89&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Systems_vue_vue_type_style_index_0_id_7d084b89_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Systems_vue_vue_type_style_index_0_id_7d084b89_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Trial.vue?vue&type=style&index=0&id=bca5e68a&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Trial.vue?vue&type=style&index=0&id=bca5e68a&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Trial_vue_vue_type_style_index_0_id_bca5e68a_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Trial.vue?vue&type=style&index=0&id=bca5e68a&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Trial.vue?vue&type=style&index=0&id=bca5e68a&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Trial_vue_vue_type_style_index_0_id_bca5e68a_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Trial_vue_vue_type_style_index_0_id_bca5e68a_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/ChatComponent.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/ChatComponent.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChatComponent_vue_vue_type_template_id_80d584ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatComponent.vue?vue&type=template&id=80d584ac&scoped=true */ "./resources/js/components/ChatComponent.vue?vue&type=template&id=80d584ac&scoped=true");
/* harmony import */ var _ChatComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatComponent.vue?vue&type=script&lang=js */ "./resources/js/components/ChatComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _ChatComponent_vue_vue_type_style_index_0_id_80d584ac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatComponent.vue?vue&type=style&index=0&id=80d584ac&scoped=true&lang=css */ "./resources/js/components/ChatComponent.vue?vue&type=style&index=0&id=80d584ac&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChatComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatComponent_vue_vue_type_template_id_80d584ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ChatComponent_vue_vue_type_template_id_80d584ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "80d584ac",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/ChatComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ChatComponent.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/ChatComponent.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ChatComponent.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ChatComponent.vue?vue&type=style&index=0&id=80d584ac&scoped=true&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/ChatComponent.vue?vue&type=style&index=0&id=80d584ac&scoped=true&lang=css ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_style_index_0_id_80d584ac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatComponent.vue?vue&type=style&index=0&id=80d584ac&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ChatComponent.vue?vue&type=style&index=0&id=80d584ac&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/ChatComponent.vue?vue&type=template&id=80d584ac&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/ChatComponent.vue?vue&type=template&id=80d584ac&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_template_id_80d584ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_template_id_80d584ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_template_id_80d584ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatComponent.vue?vue&type=template&id=80d584ac&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ChatComponent.vue?vue&type=template&id=80d584ac&scoped=true");


/***/ }),

/***/ "./resources/js/components/Dashboard.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Dashboard.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_040e2ab9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=040e2ab9&scoped=true */ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&scoped=true");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js */ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js");
/* harmony import */ var _Dashboard_vue_vue_type_style_index_0_id_040e2ab9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&id=040e2ab9&scoped=true&lang=css */ "./resources/js/components/Dashboard.vue?vue&type=style&index=0&id=040e2ab9&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_040e2ab9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_040e2ab9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "040e2ab9",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=style&index=0&id=040e2ab9&scoped=true&lang=css":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=style&index=0&id=040e2ab9&scoped=true&lang=css ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_040e2ab9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=040e2ab9&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=style&index=0&id=040e2ab9&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&scoped=true":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&scoped=true ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=040e2ab9&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&scoped=true");


/***/ }),

/***/ "./resources/js/components/MessageBubble.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/MessageBubble.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MessageBubble_vue_vue_type_template_id_5ab72cd0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageBubble.vue?vue&type=template&id=5ab72cd0&scoped=true */ "./resources/js/components/MessageBubble.vue?vue&type=template&id=5ab72cd0&scoped=true");
/* harmony import */ var _MessageBubble_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageBubble.vue?vue&type=script&lang=js */ "./resources/js/components/MessageBubble.vue?vue&type=script&lang=js");
/* harmony import */ var _MessageBubble_vue_vue_type_style_index_0_id_5ab72cd0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageBubble.vue?vue&type=style&index=0&id=5ab72cd0&scoped=true&lang=css */ "./resources/js/components/MessageBubble.vue?vue&type=style&index=0&id=5ab72cd0&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MessageBubble_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MessageBubble_vue_vue_type_template_id_5ab72cd0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _MessageBubble_vue_vue_type_template_id_5ab72cd0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5ab72cd0",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/MessageBubble.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/MessageBubble.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/MessageBubble.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBubble_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MessageBubble.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MessageBubble.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBubble_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MessageBubble.vue?vue&type=style&index=0&id=5ab72cd0&scoped=true&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/MessageBubble.vue?vue&type=style&index=0&id=5ab72cd0&scoped=true&lang=css ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBubble_vue_vue_type_style_index_0_id_5ab72cd0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MessageBubble.vue?vue&type=style&index=0&id=5ab72cd0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MessageBubble.vue?vue&type=style&index=0&id=5ab72cd0&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/MessageBubble.vue?vue&type=template&id=5ab72cd0&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/MessageBubble.vue?vue&type=template&id=5ab72cd0&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBubble_vue_vue_type_template_id_5ab72cd0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBubble_vue_vue_type_template_id_5ab72cd0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBubble_vue_vue_type_template_id_5ab72cd0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MessageBubble.vue?vue&type=template&id=5ab72cd0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MessageBubble.vue?vue&type=template&id=5ab72cd0&scoped=true");


/***/ }),

/***/ "./resources/js/components/Systems.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Systems.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Systems_vue_vue_type_template_id_7d084b89_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Systems.vue?vue&type=template&id=7d084b89&scoped=true */ "./resources/js/components/Systems.vue?vue&type=template&id=7d084b89&scoped=true");
/* harmony import */ var _Systems_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Systems.vue?vue&type=script&lang=js */ "./resources/js/components/Systems.vue?vue&type=script&lang=js");
/* harmony import */ var _Systems_vue_vue_type_style_index_0_id_7d084b89_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Systems.vue?vue&type=style&index=0&id=7d084b89&scoped=true&lang=css */ "./resources/js/components/Systems.vue?vue&type=style&index=0&id=7d084b89&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Systems_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Systems_vue_vue_type_template_id_7d084b89_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Systems_vue_vue_type_template_id_7d084b89_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7d084b89",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/Systems.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Systems.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Systems.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Systems_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Systems.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Systems.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Systems_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Systems.vue?vue&type=style&index=0&id=7d084b89&scoped=true&lang=css":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Systems.vue?vue&type=style&index=0&id=7d084b89&scoped=true&lang=css ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Systems_vue_vue_type_style_index_0_id_7d084b89_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Systems.vue?vue&type=style&index=0&id=7d084b89&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Systems.vue?vue&type=style&index=0&id=7d084b89&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/Systems.vue?vue&type=template&id=7d084b89&scoped=true":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Systems.vue?vue&type=template&id=7d084b89&scoped=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Systems_vue_vue_type_template_id_7d084b89_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Systems_vue_vue_type_template_id_7d084b89_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Systems_vue_vue_type_template_id_7d084b89_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Systems.vue?vue&type=template&id=7d084b89&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Systems.vue?vue&type=template&id=7d084b89&scoped=true");


/***/ }),

/***/ "./resources/js/components/TableofContents.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/TableofContents.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TableofContents_vue_vue_type_template_id_0ddb1d44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableofContents.vue?vue&type=template&id=0ddb1d44 */ "./resources/js/components/TableofContents.vue?vue&type=template&id=0ddb1d44");
/* harmony import */ var _TableofContents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableofContents.vue?vue&type=script&lang=js */ "./resources/js/components/TableofContents.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableofContents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableofContents_vue_vue_type_template_id_0ddb1d44__WEBPACK_IMPORTED_MODULE_0__.render,
  _TableofContents_vue_vue_type_template_id_0ddb1d44__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/TableofContents.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/TableofContents.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/TableofContents.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableofContents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TableofContents.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TableofContents.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableofContents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TableofContents.vue?vue&type=template&id=0ddb1d44":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/TableofContents.vue?vue&type=template&id=0ddb1d44 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableofContents_vue_vue_type_template_id_0ddb1d44__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableofContents_vue_vue_type_template_id_0ddb1d44__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableofContents_vue_vue_type_template_id_0ddb1d44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TableofContents.vue?vue&type=template&id=0ddb1d44 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TableofContents.vue?vue&type=template&id=0ddb1d44");


/***/ }),

/***/ "./resources/js/components/Trial.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Trial.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Trial_vue_vue_type_template_id_bca5e68a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Trial.vue?vue&type=template&id=bca5e68a */ "./resources/js/components/Trial.vue?vue&type=template&id=bca5e68a");
/* harmony import */ var _Trial_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trial.vue?vue&type=script&lang=js */ "./resources/js/components/Trial.vue?vue&type=script&lang=js");
/* harmony import */ var _Trial_vue_vue_type_style_index_0_id_bca5e68a_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Trial.vue?vue&type=style&index=0&id=bca5e68a&lang=css */ "./resources/js/components/Trial.vue?vue&type=style&index=0&id=bca5e68a&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Trial_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Trial_vue_vue_type_template_id_bca5e68a__WEBPACK_IMPORTED_MODULE_0__.render,
  _Trial_vue_vue_type_template_id_bca5e68a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/Trial.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Trial.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Trial.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trial_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Trial.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Trial.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trial_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Trial.vue?vue&type=style&index=0&id=bca5e68a&lang=css":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Trial.vue?vue&type=style&index=0&id=bca5e68a&lang=css ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Trial_vue_vue_type_style_index_0_id_bca5e68a_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Trial.vue?vue&type=style&index=0&id=bca5e68a&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Trial.vue?vue&type=style&index=0&id=bca5e68a&lang=css");


/***/ }),

/***/ "./resources/js/components/Trial.vue?vue&type=template&id=bca5e68a":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Trial.vue?vue&type=template&id=bca5e68a ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Trial_vue_vue_type_template_id_bca5e68a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Trial_vue_vue_type_template_id_bca5e68a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Trial_vue_vue_type_template_id_bca5e68a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Trial.vue?vue&type=template&id=bca5e68a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Trial.vue?vue&type=template&id=bca5e68a");


/***/ }),

/***/ "./resources/js/masters/Masters.vue":
/*!******************************************!*\
  !*** ./resources/js/masters/Masters.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Masters_vue_vue_type_template_id_83c83a36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Masters.vue?vue&type=template&id=83c83a36 */ "./resources/js/masters/Masters.vue?vue&type=template&id=83c83a36");
/* harmony import */ var _Masters_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Masters.vue?vue&type=script&lang=js */ "./resources/js/masters/Masters.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Masters_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Masters_vue_vue_type_template_id_83c83a36__WEBPACK_IMPORTED_MODULE_0__.render,
  _Masters_vue_vue_type_template_id_83c83a36__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/masters/Masters.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/masters/Masters.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/masters/Masters.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Masters_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Masters.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/masters/Masters.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Masters_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/masters/Masters.vue?vue&type=template&id=83c83a36":
/*!************************************************************************!*\
  !*** ./resources/js/masters/Masters.vue?vue&type=template&id=83c83a36 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Masters_vue_vue_type_template_id_83c83a36__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Masters_vue_vue_type_template_id_83c83a36__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Masters_vue_vue_type_template_id_83c83a36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Masters.vue?vue&type=template&id=83c83a36 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/masters/Masters.vue?vue&type=template&id=83c83a36");


/***/ })

}]);