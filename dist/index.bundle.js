"use strict";
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/pexels.jpg */ "./assets/images/pexels.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  min-height: 100vh;
}

a {
  text-decoration: none;
}

input[type='text'],
input[type='number'] {
  border: #303030 solid 1px;
  padding: 0.5em 1em;
  color: #303030;
  border-radius: 5px;
  width: 100%;
}

input[type='button'],
button {
  cursor: pointer;
}

input[type='checkbox'] {
  scale: 1.4;
  cursor: pointer;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px 25px;
  border: 2px solid black;
  margin: 5px 8px;
  border-radius: 5px;
}

.nav a {
  color: black;
  padding: 0 10px;
}

.nav-border {
  border-right: 2px solid black;
  padding-right: 10px;
}

.nav a:hover {
  color: blue;
}

main {
  margin: 20px 0;
  display: flex;
  justify-content: center;
}

.bg {
  padding: 1em;
  border-bottom: #d2d2d2 solid 1px;
}

#leaderboard .bg:nth-child(odd) {
  background-color: #5ca6f5;
  color: #fff;
}

#leaderboard .bg:hover,
button:hover {
  background-color: #303030;
  color: #fff;
}

.bg-primary {
  background-color: #5d9ee3;
}

.bg-primary-light {
  background-color: #62a3e7;
}

#leadboard-section {
  background-color: #f4f4f4de;
  width: 40em;
  max-width: 90%;
  font-size: large;
  padding: 2em 0;
  border-radius: 10px;
  border: #d0781a solid 4px;
  box-shadow: 5px 3px 1px 2px #1972e3;
}

#leadboard-section h2 {
  color: #3d3d3d;
  font-weight: 400;
}

.borderless {
  border: unset;
  width: 20em;
  padding: 0.2em;
  font-size: large;
  font-style: italic;
  background-color: unset;
}

.leadboard,
.borderless,
#clear label {
  font-size: 1.2em;
  padding-left: 1em;
  color: #303030;
}

#clear label {
  color: #6c6c6c;
}

.leadboard {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0.5em 1em;
}

#clear,
#clear label {
  text-align: center;
  cursor: pointer;
}

.bg-brown {
  background-color: #ffffc6;
}

#btnRefresh {
  float: right;
  border: unset;
  background-color: unset;
}

.cancelled {
  text-decoration: line-through;
}

.hidden {
  display: none;
}

.float-right {
  float: right;
}

.btn {
  padding: 0.5em 1em;
  cursor: pointer;
}

.btn-primary {
  color: #fcfafa;
  background-color: rgb(0, 81, 255);
  border-radius: 5px;
}

.typewriter h1 {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 5.5s steps(140, end) infinite,
    blink-caret .75s step-end;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  50% { width: 100% }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}

.row {
  display: flex;
  gap: 0.5em;
  justify-content: center;
  flex-wrap: wrap;
}

.col-md-12,
.col-md-6 {
  width: 100%;
}

@media only screen and (min-width: 768px) {
  .col-md-6 {
    width: 45%;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,yDAAoD;EACpD,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;;EAEE,yBAAyB;EACzB,kBAAkB;EAClB,cAAc;EACd,kBAAkB;EAClB,WAAW;AACb;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,cAAc;EACd,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,gCAAgC;AAClC;;AAEA;EACE,yBAAyB;EACzB,WAAW;AACb;;AAEA;;EAEE,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;EAC3B,WAAW;EACX,cAAc;EACd,gBAAgB;EAChB,cAAc;EACd,mBAAmB;EACnB,yBAAyB;EACzB,mCAAmC;AACrC;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;;;EAGE,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;;EAEE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,iCAAiC;EACjC,kBAAkB;AACpB;;AAEA;EACE,gBAAgB,EAAE,4DAA4D;EAC9E,gCAAgC,EAAE,yBAAyB;EAC3D,mBAAmB,EAAE,uCAAuC;EAC5D,cAAc,EAAE,sDAAsD;EACtE,qBAAqB,EAAE,qBAAqB;EAC5C;;6BAE2B;AAC7B;;AAEA,sBAAsB;AACtB;EACE,OAAO,SAAS;EAChB,MAAM,YAAY;EAClB,KAAK,YAAY;AACnB;;AAEA,iCAAiC;AACjC;EACE,WAAW,0BAA0B;EACrC,MAAM,oBAAoB,EAAE;AAC9B;;AAEA;EACE,aAAa;EACb,UAAU;EACV,uBAAuB;EACvB,eAAe;AACjB;;AAEA;;EAEE,WAAW;AACb;;AAEA;EACE;IACE,UAAU;EACZ;AACF","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-image: url('../assets/images/pexels.jpg');\r\n  min-height: 100vh;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\ninput[type='text'],\r\ninput[type='number'] {\r\n  border: #303030 solid 1px;\r\n  padding: 0.5em 1em;\r\n  color: #303030;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n}\r\n\r\ninput[type='button'],\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  scale: 1.4;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  padding: 15px 25px;\r\n  border: 2px solid black;\r\n  margin: 5px 8px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.nav a {\r\n  color: black;\r\n  padding: 0 10px;\r\n}\r\n\r\n.nav-border {\r\n  border-right: 2px solid black;\r\n  padding-right: 10px;\r\n}\r\n\r\n.nav a:hover {\r\n  color: blue;\r\n}\r\n\r\nmain {\r\n  margin: 20px 0;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.bg {\r\n  padding: 1em;\r\n  border-bottom: #d2d2d2 solid 1px;\r\n}\r\n\r\n#leaderboard .bg:nth-child(odd) {\r\n  background-color: #5ca6f5;\r\n  color: #fff;\r\n}\r\n\r\n#leaderboard .bg:hover,\r\nbutton:hover {\r\n  background-color: #303030;\r\n  color: #fff;\r\n}\r\n\r\n.bg-primary {\r\n  background-color: #5d9ee3;\r\n}\r\n\r\n.bg-primary-light {\r\n  background-color: #62a3e7;\r\n}\r\n\r\n#leadboard-section {\r\n  background-color: #f4f4f4de;\r\n  width: 40em;\r\n  max-width: 90%;\r\n  font-size: large;\r\n  padding: 2em 0;\r\n  border-radius: 10px;\r\n  border: #d0781a solid 4px;\r\n  box-shadow: 5px 3px 1px 2px #1972e3;\r\n}\r\n\r\n#leadboard-section h2 {\r\n  color: #3d3d3d;\r\n  font-weight: 400;\r\n}\r\n\r\n.borderless {\r\n  border: unset;\r\n  width: 20em;\r\n  padding: 0.2em;\r\n  font-size: large;\r\n  font-style: italic;\r\n  background-color: unset;\r\n}\r\n\r\n.leadboard,\r\n.borderless,\r\n#clear label {\r\n  font-size: 1.2em;\r\n  padding-left: 1em;\r\n  color: #303030;\r\n}\r\n\r\n#clear label {\r\n  color: #6c6c6c;\r\n}\r\n\r\n.leadboard {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  padding: 0.5em 1em;\r\n}\r\n\r\n#clear,\r\n#clear label {\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.bg-brown {\r\n  background-color: #ffffc6;\r\n}\r\n\r\n#btnRefresh {\r\n  float: right;\r\n  border: unset;\r\n  background-color: unset;\r\n}\r\n\r\n.cancelled {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.float-right {\r\n  float: right;\r\n}\r\n\r\n.btn {\r\n  padding: 0.5em 1em;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-primary {\r\n  color: #fcfafa;\r\n  background-color: rgb(0, 81, 255);\r\n  border-radius: 5px;\r\n}\r\n\r\n.typewriter h1 {\r\n  overflow: hidden; /* Ensures the content is not revealed until the animation */\r\n  border-right: .15em solid orange; /* The typwriter cursor */\r\n  white-space: nowrap; /* Keeps the content on a single line */\r\n  margin: 0 auto; /* Gives that scrolling effect as the typing happens */\r\n  letter-spacing: .15em; /* Adjust as needed */\r\n  animation: \r\n    typing 5.5s steps(140, end) infinite,\r\n    blink-caret .75s step-end;\r\n}\r\n\r\n/* The typing effect */\r\n@keyframes typing {\r\n  from { width: 0 }\r\n  50% { width: 100% }\r\n  to { width: 100% }\r\n}\r\n\r\n/* The typewriter cursor effect */\r\n@keyframes blink-caret {\r\n  from, to { border-color: transparent }\r\n  50% { border-color: orange; }\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  gap: 0.5em;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.col-md-12,\r\n.col-md-6 {\r\n  width: 100%;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .col-md-6 {\r\n    width: 45%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_leadboardlist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/leadboardlist.js */ "./src/modules/leadboardlist.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const form = document.querySelector('form');
const btnRefresh = document.querySelector('#btnRefresh');
const leadboardNew = new _modules_leadboardlist_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

document.body.onload = () => {
  if (leadboardNew.gameId === null) leadboardNew.createGame();
};

//  add an event listener to the refresh button
btnRefresh.addEventListener('click', () => {
  leadboardNew.getGames(btnRefresh);
});

//  add an event listener to the form submit button
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const score = document.querySelector('#score').value;
  if (name !== '') {
    const leadboard = {
      name,
      score,
    };
    leadboardNew.postScore(leadboard);
    document.querySelector('#name').value = '';
    document.querySelector('#score').value = '';
  }
});

/***/ }),

/***/ "./src/modules/leadboardlist.js":
/*!**************************************!*\
  !*** ./src/modules/leadboardlist.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class LeadboardList {
  constructor() {
    this.leadboardList = [];

    this.leadboardListElement = document.querySelector('#leaderboard');
    this.leadboardStorageName = 'leadboardlist';
    this.gameId = '';
    this.lblMessage = document.querySelector('#message');
    this.baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
    this.retrieveId();
  }

  saveData() {
    localStorage.setItem(this.leadboardStorageName, this.gameId);
  }

  retrieveId() {
    this.gameId = localStorage.getItem(this.leadboardStorageName);
  }

  getLeadboardList() {
    return this.leadboardList;
  }

  addLeadboard(leadboard) {
    const divLeadboard = document.createElement('div');
    divLeadboard.className = 'bg';

    const elName = document.createElement('label');
    const elScore = document.createElement('label');

    elName.textContent = `${leadboard.name}: `;
    elScore.textContent = `${leadboard.score}`;

    divLeadboard.appendChild(elName);
    divLeadboard.appendChild(elScore);
    this.leadboardListElement.appendChild(divLeadboard);
  }

  getGames = (async (btnRefresh = null) => {
    this.retrieveId();
    this.leadboardListElement.innerText = '';
    if (btnRefresh !== null) btnRefresh.childNodes[2].classList.toggle('fa-spin');
    if (this.gameId === null) this.createGame();
    const response = await fetch(`${this.baseUrl}games/${this.gameId}/scores`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
    });
    const games = await response.json();
    if (games.message) {
      this.lblMessage.textContent = games.message;
    } else if (games.result) {
      games.result.forEach((x) => {
        this.addLeadboard(
          {
            name: x.user,
            score: x.score,
          },
        );
      });
    }
    if (btnRefresh !== null) btnRefresh.childNodes[2].classList.toggle('fa-spin');
  });

  createGame = (async () => {
    const response = await fetch(`${this.baseUrl}games`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
      body: JSON.stringify({
        name: 'Test game',
      }),
    });
    const games = await response.json();
    if (games.message) {
      this.lblMessage.textContent = games.message;
    } else if (games.result) {
      [, , , this.gameId] = games.result.split(' ');
      this.saveData();
    }
  })

  postScore = (async (leadboard) => {
    if (this.gameId === null) await this.createGame();
    const response = await fetch(`${this.baseUrl}games/${this.gameId}/scores/`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
      body: JSON.stringify({
        user: leadboard.name,
        score: leadboard.score,
      }),
    });
    const games = await response.json();
    if (games.result) {
      this.lblMessage.textContent = games.message;
      this.addLeadboard(leadboard);
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeadboardList);

/***/ }),

/***/ "./assets/images/pexels.jpg":
/*!**********************************!*\
  !*** ./assets/images/pexels.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc1e3bb23021cc3c0496.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxvQ0FBb0MsYUFBYSxRQUFRLFlBQVk7QUFDckU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvbGVhZGJvYXJkbGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9wZXhlbHMuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT0ndGV4dCddLFxyXG5pbnB1dFt0eXBlPSdudW1iZXInXSB7XHJcbiAgYm9yZGVyOiAjMzAzMDMwIHNvbGlkIDFweDtcclxuICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbiAgY29sb3I6ICMzMDMwMzA7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdidXR0b24nXSxcclxuYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xyXG4gIHNjYWxlOiAxLjQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbjogNXB4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5uYXYgYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG5cclxuLm5hdi1ib3JkZXIge1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXYgYTpob3ZlciB7XHJcbiAgY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iZyB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGJvcmRlci1ib3R0b206ICNkMmQyZDIgc29saWQgMXB4O1xyXG59XHJcblxyXG4jbGVhZGVyYm9hcmQgLmJnOm50aC1jaGlsZChvZGQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNhNmY1O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jbGVhZGVyYm9hcmQgLmJnOmhvdmVyLFxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5iZy1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ5ZWUzO1xyXG59XHJcblxyXG4uYmctcHJpbWFyeS1saWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyYTNlNztcclxufVxyXG5cclxuI2xlYWRib2FyZC1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0ZGU7XHJcbiAgd2lkdGg6IDQwZW07XHJcbiAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBwYWRkaW5nOiAyZW0gMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogI2QwNzgxYSBzb2xpZCA0cHg7XHJcbiAgYm94LXNoYWRvdzogNXB4IDNweCAxcHggMnB4ICMxOTcyZTM7XHJcbn1cclxuXHJcbiNsZWFkYm9hcmQtc2VjdGlvbiBoMiB7XHJcbiAgY29sb3I6ICMzZDNkM2Q7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmJvcmRlcmxlc3Mge1xyXG4gIGJvcmRlcjogdW5zZXQ7XHJcbiAgd2lkdGg6IDIwZW07XHJcbiAgcGFkZGluZzogMC4yZW07XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbn1cclxuXHJcbi5sZWFkYm9hcmQsXHJcbi5ib3JkZXJsZXNzLFxyXG4jY2xlYXIgbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgY29sb3I6ICMzMDMwMzA7XHJcbn1cclxuXHJcbiNjbGVhciBsYWJlbCB7XHJcbiAgY29sb3I6ICM2YzZjNmM7XHJcbn1cclxuXHJcbi5sZWFkYm9hcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbn1cclxuXHJcbiNjbGVhcixcclxuI2NsZWFyIGxhYmVsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYmctYnJvd24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmYzY7XHJcbn1cclxuXHJcbiNidG5SZWZyZXNoIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYm9yZGVyOiB1bnNldDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxufVxyXG5cclxuLmNhbmNlbGxlZCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5mbG9hdC1yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGNvbG9yOiAjZmNmYWZhO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA4MSwgMjU1KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi50eXBld3JpdGVyIGgxIHtcclxuICBvdmVyZmxvdzogaGlkZGVuOyAvKiBFbnN1cmVzIHRoZSBjb250ZW50IGlzIG5vdCByZXZlYWxlZCB1bnRpbCB0aGUgYW5pbWF0aW9uICovXHJcbiAgYm9yZGVyLXJpZ2h0OiAuMTVlbSBzb2xpZCBvcmFuZ2U7IC8qIFRoZSB0eXB3cml0ZXIgY3Vyc29yICovXHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLyogS2VlcHMgdGhlIGNvbnRlbnQgb24gYSBzaW5nbGUgbGluZSAqL1xyXG4gIG1hcmdpbjogMCBhdXRvOyAvKiBHaXZlcyB0aGF0IHNjcm9sbGluZyBlZmZlY3QgYXMgdGhlIHR5cGluZyBoYXBwZW5zICovXHJcbiAgbGV0dGVyLXNwYWNpbmc6IC4xNWVtOyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXHJcbiAgYW5pbWF0aW9uOiBcclxuICAgIHR5cGluZyA1LjVzIHN0ZXBzKDE0MCwgZW5kKSBpbmZpbml0ZSxcclxuICAgIGJsaW5rLWNhcmV0IC43NXMgc3RlcC1lbmQ7XHJcbn1cclxuXHJcbi8qIFRoZSB0eXBpbmcgZWZmZWN0ICovXHJcbkBrZXlmcmFtZXMgdHlwaW5nIHtcclxuICBmcm9tIHsgd2lkdGg6IDAgfVxyXG4gIDUwJSB7IHdpZHRoOiAxMDAlIH1cclxuICB0byB7IHdpZHRoOiAxMDAlIH1cclxufVxyXG5cclxuLyogVGhlIHR5cGV3cml0ZXIgY3Vyc29yIGVmZmVjdCAqL1xyXG5Aa2V5ZnJhbWVzIGJsaW5rLWNhcmV0IHtcclxuICBmcm9tLCB0byB7IGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgfVxyXG4gIDUwJSB7IGJvcmRlci1jb2xvcjogb3JhbmdlOyB9XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAwLjVlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5jb2wtbWQtMTIsXHJcbi5jb2wtbWQtNiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuY29sLW1kLTYge1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5REFBb0Q7RUFDcEQsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7O0VBR0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQixFQUFFLDREQUE0RDtFQUM5RSxnQ0FBZ0MsRUFBRSx5QkFBeUI7RUFDM0QsbUJBQW1CLEVBQUUsdUNBQXVDO0VBQzVELGNBQWMsRUFBRSxzREFBc0Q7RUFDdEUscUJBQXFCLEVBQUUscUJBQXFCO0VBQzVDOzs2QkFFMkI7QUFDN0I7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsT0FBTyxTQUFTO0VBQ2hCLE1BQU0sWUFBWTtFQUNsQixLQUFLLFlBQVk7QUFDbkI7O0FBRUEsaUNBQWlDO0FBQ2pDO0VBQ0UsV0FBVywwQkFBMEI7RUFDckMsTUFBTSxvQkFBb0IsRUFBRTtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ltYWdlcy9wZXhlbHMuanBnJyk7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J3RleHQnXSxcXHJcXG5pbnB1dFt0eXBlPSdudW1iZXInXSB7XFxyXFxuICBib3JkZXI6ICMzMDMwMzAgc29saWQgMXB4O1xcclxcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAgY29sb3I6ICMzMDMwMzA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nYnV0dG9uJ10sXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxyXFxuICBzY2FsZTogMS40O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAxNXB4IDI1cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIG1hcmdpbjogNXB4IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiBhIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1ib3JkZXIge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IGE6aG92ZXIge1xcclxcbiAgY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgbWFyZ2luOiAyMHB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5iZyB7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAjZDJkMmQyIHNvbGlkIDFweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xlYWRlcmJvYXJkIC5iZzpudGgtY2hpbGQob2RkKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNhNmY1O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbiNsZWFkZXJib2FyZCAuYmc6aG92ZXIsXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLXByaW1hcnkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkOWVlMztcXHJcXG59XFxyXFxuXFxyXFxuLmJnLXByaW1hcnktbGlnaHQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyYTNlNztcXHJcXG59XFxyXFxuXFxyXFxuI2xlYWRib2FyZC1zZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjRkZTtcXHJcXG4gIHdpZHRoOiA0MGVtO1xcclxcbiAgbWF4LXdpZHRoOiA5MCU7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgcGFkZGluZzogMmVtIDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAjZDA3ODFhIHNvbGlkIDRweDtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCAzcHggMXB4IDJweCAjMTk3MmUzO1xcclxcbn1cXHJcXG5cXHJcXG4jbGVhZGJvYXJkLXNlY3Rpb24gaDIge1xcclxcbiAgY29sb3I6ICMzZDNkM2Q7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9yZGVybGVzcyB7XFxyXFxuICBib3JkZXI6IHVuc2V0O1xcclxcbiAgd2lkdGg6IDIwZW07XFxyXFxuICBwYWRkaW5nOiAwLjJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlYWRib2FyZCxcXHJcXG4uYm9yZGVybGVzcyxcXHJcXG4jY2xlYXIgbGFiZWwge1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcclxcbiAgY29sb3I6ICMzMDMwMzA7XFxyXFxufVxcclxcblxcclxcbiNjbGVhciBsYWJlbCB7XFxyXFxuICBjb2xvcjogIzZjNmM2YztcXHJcXG59XFxyXFxuXFxyXFxuLmxlYWRib2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXIsXFxyXFxuI2NsZWFyIGxhYmVsIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLWJyb3duIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmYzY7XFxyXFxufVxcclxcblxcclxcbiNidG5SZWZyZXNoIHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIGJvcmRlcjogdW5zZXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbGxlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxvYXQtcmlnaHQge1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1wcmltYXJ5IHtcXHJcXG4gIGNvbG9yOiAjZmNmYWZhO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDgxLCAyNTUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZXdyaXRlciBoMSB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuOyAvKiBFbnN1cmVzIHRoZSBjb250ZW50IGlzIG5vdCByZXZlYWxlZCB1bnRpbCB0aGUgYW5pbWF0aW9uICovXFxyXFxuICBib3JkZXItcmlnaHQ6IC4xNWVtIHNvbGlkIG9yYW5nZTsgLyogVGhlIHR5cHdyaXRlciBjdXJzb3IgKi9cXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIEtlZXBzIHRoZSBjb250ZW50IG9uIGEgc2luZ2xlIGxpbmUgKi9cXHJcXG4gIG1hcmdpbjogMCBhdXRvOyAvKiBHaXZlcyB0aGF0IHNjcm9sbGluZyBlZmZlY3QgYXMgdGhlIHR5cGluZyBoYXBwZW5zICovXFxyXFxuICBsZXR0ZXItc3BhY2luZzogLjE1ZW07IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cXHJcXG4gIGFuaW1hdGlvbjogXFxyXFxuICAgIHR5cGluZyA1LjVzIHN0ZXBzKDE0MCwgZW5kKSBpbmZpbml0ZSxcXHJcXG4gICAgYmxpbmstY2FyZXQgLjc1cyBzdGVwLWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGhlIHR5cGluZyBlZmZlY3QgKi9cXHJcXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XFxyXFxuICBmcm9tIHsgd2lkdGg6IDAgfVxcclxcbiAgNTAlIHsgd2lkdGg6IDEwMCUgfVxcclxcbiAgdG8geyB3aWR0aDogMTAwJSB9XFxyXFxufVxcclxcblxcclxcbi8qIFRoZSB0eXBld3JpdGVyIGN1cnNvciBlZmZlY3QgKi9cXHJcXG5Aa2V5ZnJhbWVzIGJsaW5rLWNhcmV0IHtcXHJcXG4gIGZyb20sIHRvIHsgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB9XFxyXFxuICA1MCUgeyBib3JkZXItY29sb3I6IG9yYW5nZTsgfVxcclxcbn1cXHJcXG5cXHJcXG4ucm93IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDAuNWVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5jb2wtbWQtMTIsXFxyXFxuLmNvbC1tZC02IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuY29sLW1kLTYge1xcclxcbiAgICB3aWR0aDogNDUlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBMZWFkYm9hcmRMaXN0IGZyb20gJy4vbW9kdWxlcy9sZWFkYm9hcmRsaXN0LmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuY29uc3QgYnRuUmVmcmVzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5SZWZyZXNoJyk7XG5jb25zdCBsZWFkYm9hcmROZXcgPSBuZXcgTGVhZGJvYXJkTGlzdCgpO1xuXG5kb2N1bWVudC5ib2R5Lm9ubG9hZCA9ICgpID0+IHtcbiAgaWYgKGxlYWRib2FyZE5ldy5nYW1lSWQgPT09IG51bGwpIGxlYWRib2FyZE5ldy5jcmVhdGVHYW1lKCk7XG59O1xuXG4vLyAgYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSByZWZyZXNoIGJ1dHRvblxuYnRuUmVmcmVzaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbGVhZGJvYXJkTmV3LmdldEdhbWVzKGJ0blJlZnJlc2gpO1xufSk7XG5cbi8vICBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGZvcm0gc3VibWl0IGJ1dHRvblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWUudHJpbSgpO1xuICBjb25zdCBzY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZScpLnZhbHVlO1xuICBpZiAobmFtZSAhPT0gJycpIHtcbiAgICBjb25zdCBsZWFkYm9hcmQgPSB7XG4gICAgICBuYW1lLFxuICAgICAgc2NvcmUsXG4gICAgfTtcbiAgICBsZWFkYm9hcmROZXcucG9zdFNjb3JlKGxlYWRib2FyZCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZSA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZScpLnZhbHVlID0gJyc7XG4gIH1cbn0pOyIsImNsYXNzIExlYWRib2FyZExpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxlYWRib2FyZExpc3QgPSBbXTtcblxuICAgIHRoaXMubGVhZGJvYXJkTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGVhZGVyYm9hcmQnKTtcbiAgICB0aGlzLmxlYWRib2FyZFN0b3JhZ2VOYW1lID0gJ2xlYWRib2FyZGxpc3QnO1xuICAgIHRoaXMuZ2FtZUlkID0gJyc7XG4gICAgdGhpcy5sYmxNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UnKTtcbiAgICB0aGlzLmJhc2VVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvJztcbiAgICB0aGlzLnJldHJpZXZlSWQoKTtcbiAgfVxuXG4gIHNhdmVEYXRhKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubGVhZGJvYXJkU3RvcmFnZU5hbWUsIHRoaXMuZ2FtZUlkKTtcbiAgfVxuXG4gIHJldHJpZXZlSWQoKSB7XG4gICAgdGhpcy5nYW1lSWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxlYWRib2FyZFN0b3JhZ2VOYW1lKTtcbiAgfVxuXG4gIGdldExlYWRib2FyZExpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVhZGJvYXJkTGlzdDtcbiAgfVxuXG4gIGFkZExlYWRib2FyZChsZWFkYm9hcmQpIHtcbiAgICBjb25zdCBkaXZMZWFkYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZMZWFkYm9hcmQuY2xhc3NOYW1lID0gJ2JnJztcblxuICAgIGNvbnN0IGVsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgZWxTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICBlbE5hbWUudGV4dENvbnRlbnQgPSBgJHtsZWFkYm9hcmQubmFtZX06IGA7XG4gICAgZWxTY29yZS50ZXh0Q29udGVudCA9IGAke2xlYWRib2FyZC5zY29yZX1gO1xuXG4gICAgZGl2TGVhZGJvYXJkLmFwcGVuZENoaWxkKGVsTmFtZSk7XG4gICAgZGl2TGVhZGJvYXJkLmFwcGVuZENoaWxkKGVsU2NvcmUpO1xuICAgIHRoaXMubGVhZGJvYXJkTGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2TGVhZGJvYXJkKTtcbiAgfVxuXG4gIGdldEdhbWVzID0gKGFzeW5jIChidG5SZWZyZXNoID0gbnVsbCkgPT4ge1xuICAgIHRoaXMucmV0cmlldmVJZCgpO1xuICAgIHRoaXMubGVhZGJvYXJkTGlzdEVsZW1lbnQuaW5uZXJUZXh0ID0gJyc7XG4gICAgaWYgKGJ0blJlZnJlc2ggIT09IG51bGwpIGJ0blJlZnJlc2guY2hpbGROb2Rlc1syXS5jbGFzc0xpc3QudG9nZ2xlKCdmYS1zcGluJyk7XG4gICAgaWYgKHRoaXMuZ2FtZUlkID09PSBudWxsKSB0aGlzLmNyZWF0ZUdhbWUoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RoaXMuYmFzZVVybH1nYW1lcy8ke3RoaXMuZ2FtZUlkfS9zY29yZXNgLCB7XG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIG1vZGU6ICdjb3JzJywgLy8gbm8tY29ycywgKmNvcnMsIHNhbWUtb3JpZ2luXG4gICAgICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgfSk7XG4gICAgY29uc3QgZ2FtZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKGdhbWVzLm1lc3NhZ2UpIHtcbiAgICAgIHRoaXMubGJsTWVzc2FnZS50ZXh0Q29udGVudCA9IGdhbWVzLm1lc3NhZ2U7XG4gICAgfSBlbHNlIGlmIChnYW1lcy5yZXN1bHQpIHtcbiAgICAgIGdhbWVzLnJlc3VsdC5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICAgIHRoaXMuYWRkTGVhZGJvYXJkKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IHgudXNlcixcbiAgICAgICAgICAgIHNjb3JlOiB4LnNjb3JlLFxuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJ0blJlZnJlc2ggIT09IG51bGwpIGJ0blJlZnJlc2guY2hpbGROb2Rlc1syXS5jbGFzc0xpc3QudG9nZ2xlKCdmYS1zcGluJyk7XG4gIH0pO1xuXG4gIGNyZWF0ZUdhbWUgPSAoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5iYXNlVXJsfWdhbWVzYCwge1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgbW9kZTogJ2NvcnMnLCAvLyBuby1jb3JzLCAqY29ycywgc2FtZS1vcmlnaW5cbiAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLCAvLyAqZGVmYXVsdCwgbm8tY2FjaGUsIHJlbG9hZCwgZm9yY2UtY2FjaGUsIG9ubHktaWYtY2FjaGVkXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbmFtZTogJ1Rlc3QgZ2FtZScsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICBjb25zdCBnYW1lcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAoZ2FtZXMubWVzc2FnZSkge1xuICAgICAgdGhpcy5sYmxNZXNzYWdlLnRleHRDb250ZW50ID0gZ2FtZXMubWVzc2FnZTtcbiAgICB9IGVsc2UgaWYgKGdhbWVzLnJlc3VsdCkge1xuICAgICAgWywgLCAsIHRoaXMuZ2FtZUlkXSA9IGdhbWVzLnJlc3VsdC5zcGxpdCgnICcpO1xuICAgICAgdGhpcy5zYXZlRGF0YSgpO1xuICAgIH1cbiAgfSlcblxuICBwb3N0U2NvcmUgPSAoYXN5bmMgKGxlYWRib2FyZCkgPT4ge1xuICAgIGlmICh0aGlzLmdhbWVJZCA9PT0gbnVsbCkgYXdhaXQgdGhpcy5jcmVhdGVHYW1lKCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLmJhc2VVcmx9Z2FtZXMvJHt0aGlzLmdhbWVJZH0vc2NvcmVzL2AsIHtcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIG1vZGU6ICdjb3JzJywgLy8gbm8tY29ycywgKmNvcnMsIHNhbWUtb3JpZ2luXG4gICAgICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHVzZXI6IGxlYWRib2FyZC5uYW1lLFxuICAgICAgICBzY29yZTogbGVhZGJvYXJkLnNjb3JlLFxuICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc3QgZ2FtZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKGdhbWVzLnJlc3VsdCkge1xuICAgICAgdGhpcy5sYmxNZXNzYWdlLnRleHRDb250ZW50ID0gZ2FtZXMubWVzc2FnZTtcbiAgICAgIHRoaXMuYWRkTGVhZGJvYXJkKGxlYWRib2FyZCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVhZGJvYXJkTGlzdDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=