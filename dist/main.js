/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/wizard-background.jpg */ "./src/imgs/wizard-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
    min-height: 100%;
}

html, body {
    margin: 0px;
}

#content {
    min-height: 100vh;
    width: 100%;
    /* background-color: red; */
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
}

.navigation-bar {
    height: 55px;
    /* background-color: rgb(73, 72, 72); */
    display: flex;
    justify-content: start;
    gap: 30px;
}

.navigation-tab {
    display: flex;
    width: 80px;
    height: 100%;
    background-color: rgb(96, 41, 41);
    padding: 0px 10px;
    text-align: center;
    align-items: center;
    color: antiquewhite;
}

.disabled-tab {
    pointer-events: none;
    opacity: 0.7;
}

.home-container {
    display: grid;
    /* min-width: 100vh;
    min-height: 100vh; */
    min-height: 600px;
    min-width: 700px;
    grid-template-columns: 2fr 2fr;
    column-gap: 30px;
    padding: 100px 300px;
    justify-items: center;
};

.home1 {
    display: flex;
    flex-direction: column;
    content: 'Frogs';
    grid-column: 1 / 2;
    grid-row: 1;
    justify-content: center;
    align-items: center;
}

.home1 * {
    color: rgb(224, 223, 223);
}

.home-title-container {
    /* position: relative; */
    display: flex;
    min-width: 485px;
    justify-content: center;
    align-items: center;
    /* gap: 20px; */
}

.home1 h1 {
    display: flex;
    justify-content: center;
    font-size: 62px;
}

.home-box {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    height: 150px;
}

.hat-icon {
    /* position: absolute;
    top: 30px;
    right: 85px; */
    filter: invert(80%) sepia(44%) saturate(455%) hue-rotate(6deg) brightness(99%) contrast(93%);
    height: 100px;
}

.home-hook {
    font-size: 35px;
}

.home-descript {
    font-size: 20px;
}

.order-button {
    margin-top: 50px;
    width: 200px;
    height: auto;
    padding: 20px;
    text-align: center;
    font-weight: bold;
    font-size: 25px;
    color: antiquewhite;
    background-color: rgb(96, 41, 41);
    border-radius: 25px;
}

.home2 {
    display: grid;
    height: 400px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 4fr;
    justify-items: center;
    grid-column: 2;
    grid-row: 1 / 3;
    background-color: rgba(96, 41, 41, 0.6);
    padding: 32px;
    padding-top: 50px;
    border-radius: 25px;
    
}

.home2 * {
    color: azure;
}

.home2 h3 {
    text-align: center;
    font-size: 22px;
}



.frog-icon {
    display: inline-block;
    height: 100px;
    width: max-content;
}


.about-container {
    /* display: : flex; */
    justify-content: center;
    align-items: center;
    display: none;
    height: 200px;
    min-width: 100vh;
    min-height: 100vh;
    /* background-color: lightsalmon; */
}

.about1 {
    display: grid;
    padding: 30px 20px;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1.5fr;
    min-height: 65vh;
    max-width: 85vh;
    margin-top: -30px;
    background-color: rgba(96, 41, 41, 0.7);
    border-radius: 25px;
}

.about1-top {
    grid-row: 1 / 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: rgb(58, 80, 98); */
}

.about-title {
    /* height: 15vh; */
    text-align: center;
    font-size: 33px;
    color: blanchedalmond;
}

.about-para {
    padding: 20px 25px;
    font-size: large;
    line-height: 1.5;
    color: blanchedalmond;
}

.about1-bottom {
    grid-row: 2 / 3;
    display: flex;
    justify-content: center;
    /* border: 2px solid black; */
}

.bertie-pic {
    height: 170px;
    border-radius: 25px;
    border: 30px solid rgb(58, 80, 98);
}


/* Menu page */

.menu-container {
    /* display: grid; */
    display: none;
    /* background-color: lightsalmon; */
    min-height: 100vh;
    min-width: 100vh;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
    padding: 0px 250px; 
    padding-top: 120px;
    
}

.menu1 {
    /* display: grid; */
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    background-color: beige;
}

.menu2 {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    background-color: antiquewhite;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,2BAA2B;IAC3B,yDAAqD;IACrD,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,uCAAuC;IACvC,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,iCAAiC;IACjC,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb;wBACoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,8BAA8B;IAC9B,gBAAgB;IAChB,oBAAoB;IACpB,qBAAqB;AACzB,CAAA;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,aAAa;AACjB;;AAEA;IACI;;kBAEc;IACd,4FAA4F;IAC5F,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,mBAAmB;IACnB,iCAAiC;IACjC,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,0BAA0B;IAC1B,2BAA2B;IAC3B,qBAAqB;IACrB,cAAc;IACd,eAAe;IACf,uCAAuC;IACvC,aAAa;IACb,iBAAiB;IACjB,mBAAmB;;AAEvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;;;AAIA;IACI,qBAAqB;IACrB,aAAa;IACb,kBAAkB;AACtB;;;AAGA;IACI,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,0BAA0B;IAC1B,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,uCAAuC;IACvC,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uCAAuC;AAC3C;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kCAAkC;AACtC;;;AAGA,cAAc;;AAEd;IACI,mBAAmB;IACnB,aAAa;IACb,mCAAmC;IACnC,iBAAiB;IACjB,gBAAgB;IAChB,8BAA8B;IAC9B,2BAA2B;IAC3B,SAAS;IACT,kBAAkB;IAClB,kBAAkB;;AAEtB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,8BAA8B;AAClC","sourcesContent":["html {\n    min-height: 100%;\n}\n\nhtml, body {\n    margin: 0px;\n}\n\n#content {\n    min-height: 100vh;\n    width: 100%;\n    /* background-color: red; */\n    background-image: url('./imgs/wizard-background.jpg');\n    background-size: cover;\n}\n\n.navigation-bar {\n    height: 55px;\n    /* background-color: rgb(73, 72, 72); */\n    display: flex;\n    justify-content: start;\n    gap: 30px;\n}\n\n.navigation-tab {\n    display: flex;\n    width: 80px;\n    height: 100%;\n    background-color: rgb(96, 41, 41);\n    padding: 0px 10px;\n    text-align: center;\n    align-items: center;\n    color: antiquewhite;\n}\n\n.disabled-tab {\n    pointer-events: none;\n    opacity: 0.7;\n}\n\n.home-container {\n    display: grid;\n    /* min-width: 100vh;\n    min-height: 100vh; */\n    min-height: 600px;\n    min-width: 700px;\n    grid-template-columns: 2fr 2fr;\n    column-gap: 30px;\n    padding: 100px 300px;\n    justify-items: center;\n};\n\n.home1 {\n    display: flex;\n    flex-direction: column;\n    content: 'Frogs';\n    grid-column: 1 / 2;\n    grid-row: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.home1 * {\n    color: rgb(224, 223, 223);\n}\n\n.home-title-container {\n    /* position: relative; */\n    display: flex;\n    min-width: 485px;\n    justify-content: center;\n    align-items: center;\n    /* gap: 20px; */\n}\n\n.home1 h1 {\n    display: flex;\n    justify-content: center;\n    font-size: 62px;\n}\n\n.home-box {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    height: 150px;\n}\n\n.hat-icon {\n    /* position: absolute;\n    top: 30px;\n    right: 85px; */\n    filter: invert(80%) sepia(44%) saturate(455%) hue-rotate(6deg) brightness(99%) contrast(93%);\n    height: 100px;\n}\n\n.home-hook {\n    font-size: 35px;\n}\n\n.home-descript {\n    font-size: 20px;\n}\n\n.order-button {\n    margin-top: 50px;\n    width: 200px;\n    height: auto;\n    padding: 20px;\n    text-align: center;\n    font-weight: bold;\n    font-size: 25px;\n    color: antiquewhite;\n    background-color: rgb(96, 41, 41);\n    border-radius: 25px;\n}\n\n.home2 {\n    display: grid;\n    height: 400px;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 4fr;\n    justify-items: center;\n    grid-column: 2;\n    grid-row: 1 / 3;\n    background-color: rgba(96, 41, 41, 0.6);\n    padding: 32px;\n    padding-top: 50px;\n    border-radius: 25px;\n    \n}\n\n.home2 * {\n    color: azure;\n}\n\n.home2 h3 {\n    text-align: center;\n    font-size: 22px;\n}\n\n\n\n.frog-icon {\n    display: inline-block;\n    height: 100px;\n    width: max-content;\n}\n\n\n.about-container {\n    /* display: : flex; */\n    justify-content: center;\n    align-items: center;\n    display: none;\n    height: 200px;\n    min-width: 100vh;\n    min-height: 100vh;\n    /* background-color: lightsalmon; */\n}\n\n.about1 {\n    display: grid;\n    padding: 30px 20px;\n    grid-template-columns: 1fr;\n    grid-template-rows: 2fr 1.5fr;\n    min-height: 65vh;\n    max-width: 85vh;\n    margin-top: -30px;\n    background-color: rgba(96, 41, 41, 0.7);\n    border-radius: 25px;\n}\n\n.about1-top {\n    grid-row: 1 / 2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* background-color: rgb(58, 80, 98); */\n}\n\n.about-title {\n    /* height: 15vh; */\n    text-align: center;\n    font-size: 33px;\n    color: blanchedalmond;\n}\n\n.about-para {\n    padding: 20px 25px;\n    font-size: large;\n    line-height: 1.5;\n    color: blanchedalmond;\n}\n\n.about1-bottom {\n    grid-row: 2 / 3;\n    display: flex;\n    justify-content: center;\n    /* border: 2px solid black; */\n}\n\n.bertie-pic {\n    height: 170px;\n    border-radius: 25px;\n    border: 30px solid rgb(58, 80, 98);\n}\n\n\n/* Menu page */\n\n.menu-container {\n    /* display: grid; */\n    display: none;\n    /* background-color: lightsalmon; */\n    min-height: 100vh;\n    min-width: 100vh;\n    grid-template-columns: 3fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 30px;\n    padding: 0px 250px; \n    padding-top: 120px;\n    \n}\n\n.menu1 {\n    /* display: grid; */\n    grid-column: 1 / 2;\n    grid-row: 1 / 3;\n    background-color: beige;\n}\n\n.menu2 {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    background-color: antiquewhite;\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutContainer: () => (/* binding */ aboutContainer),
/* harmony export */   aboutPage: () => (/* binding */ aboutPage)
/* harmony export */ });
/* harmony import */ var _imgs_Bertie_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/Bertie.jpg */ "./src/imgs/Bertie.jpg");


const aboutContainer = document.createElement('div');



const aboutPage = function () {
    aboutContainer.classList.add('about-container');
    console.log('About page inserted');

    // main container for the rest of the elements on the about page
    const about1 = document.createElement('div');
    aboutFactory.addToAbout(about1, 'about1', aboutContainer);
    console.log(about1);

    // container that contains the title and paragraph
    const about1Top = document.createElement('div');
    aboutFactory.addToAbout(about1Top, 'about1-top', about1);


    const aboutTitle = document.createElement('div')
    aboutFactory.addToAbout(aboutTitle, 'about-title', about1Top);
    aboutTitle.textContent = 'A Story Long in the Making'

    const aboutParagraph = document.createElement('div')
    aboutFactory.addToAbout(aboutParagraph, 'about-para', about1Top)
    aboutParagraph.textContent = `Growing up in a small muggle town off the coast just shy
    of Weymouth, Bertie Botts was always one of the peculiar sort. With not much
    to do around his home, he would create fantastical concotions using all sorts
    of things, not excluding seaweed, seagull feathers, house detergents, and lamb mucus.
    Once he discovered the world of wizadry and attending Hogwarts, he quickly
    rose through the ranks to become Hufflepuff's head chef. 30 years later, Bertie
    is still using his creativenss and passion to run his own restaurant and candy shop, 
    'Bertie's Bott's, one of the most popular and extravagent brands in the Wizarding World`

    // container that contains image
    const about1Bottom = document.createElement('div');
    aboutFactory.addToAbout(about1Bottom, 'about1-bottom', about1);

    // image for About page
    const aboutPic = new Image();
    aboutPic.src = _imgs_Bertie_jpg__WEBPACK_IMPORTED_MODULE_0__;
    aboutFactory.addToAbout(aboutPic, 'bertie-pic', about1Bottom);
}


// elementName  = reference name
// element = type of HTML element we want to create
// className = name of class we want to assign
// fatherElement = name of container we want to append to
const aboutFactory = (function () {

    function addToAbout(elementName, className, fatherElement ) {
        elementName.classList.add(className);
        fatherElement.appendChild(elementName);

        console.log(elementName);
        return elementName;
    };
    return {addToAbout};
})();






/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeContainer: () => (/* binding */ homeContainer),
/* harmony export */   homePage: () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _imgs_TheFrogChoirHM_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/TheFrogChoirHM.png */ "./src/imgs/TheFrogChoirHM.png");
/* harmony import */ var _imgs_warlock_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/warlock.png */ "./src/imgs/warlock.png");








const homeContainer = document.createElement('div');

const homePage = function () {
    // need to start with an outer container .. this outer
    // container will become the child container of the
    // content div, thus making it visible on the page

   
    const homeDivNames = ['home1', 'home2'];
    let homeDivs = [];


    // this won't be appended to the the "content" div until it is
    // called upon in the index.js file

    homeContainer.classList.add('home-container');
   

    // create 3 div containers within the homeContainer
    for (let i = 0; i < 2; i++) {
        const homeDiv = document.createElement('div');
        homeDiv.classList.add(homeDivNames[i]);
        homeContainer.appendChild(homeDiv);
        homeDivs.push(homeDiv);
    };
    let home1 = homeDivs[0];
    let home2 = homeDivs[1];


    // style each homeDiv accordingly
    // home1:
    styleHome1(home1);
    styleHome2(home2);


    console.log('homepage is linked');

}



function styleHome1 (home1) {
    const homeTitleContainer = document.createElement('div');
    homeTitleContainer.classList.add('home-title-container');
    home1.appendChild(homeTitleContainer);

    const homeTitle = document.createElement('h1');
    homeTitle.textContent = `Bertie Bott\'s`
    homeTitleContainer.appendChild(homeTitle);

    const homeLogo = new Image();
    homeLogo.src  = _imgs_warlock_png__WEBPACK_IMPORTED_MODULE_1__;
    homeLogo.classList.add('hat-icon')
    homeTitleContainer.appendChild(homeLogo);



    const homeBox = document.createElement('div');
    homeBox.classList.add('home-box');
    home1.appendChild(homeBox);

    const homeHook = document.createElement('h2');
    homeHook.textContent = 'Add a bit of Magic to your evening ...'
    homeHook.classList.add('home-hook')
    homeBox.appendChild(homeHook);

    const homeDescription = document.createElement('h4');
    homeDescription.textContent = 'Come dine with your fellow witches and wizards at our 5 star establishment on the corner of Crescent and Dobby in upper Diagon Alley';
    homeDescription.classList.add('home-descript')
    homeBox.appendChild(homeDescription);

    const orderButton = document.createElement('button');
    orderButton.textContent = 'Order Online';
    orderButton.classList.add('order-button');
    homeBox.appendChild(orderButton);

}

function styleHome2 (home2) {
    const frogIcon = new Image();
    frogIcon.src = _imgs_TheFrogChoirHM_png__WEBPACK_IMPORTED_MODULE_0__;
    frogIcon.classList.add('frog-icon')
    home2.appendChild(frogIcon);

    const frogTitle = document.createElement('h3');
    frogTitle.textContent = 'Live performances from Frog Choir every Friday at 7pm';
    // frogTitle.classList.add('frog-title');
    home2.appendChild(frogTitle);
}

// export function clearHome (hasBeenRun) {
//     console.log('cleared');
//     hasBeenRun = true;
//     console.log(hasBeenRun);
// }







/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuContainer: () => (/* binding */ menuContainer),
/* harmony export */   menuPage: () => (/* binding */ menuPage)
/* harmony export */ });


// plan isto create two main containers here. One will be much
// bigger and contain the scrollable menu. The other will be
// a smaller box that lists the Hours of the restaurant
const menuContainer = document.createElement('div');


const menuPage = function () {
    menuContainer.classList.add('menu-container');
    console.log('menu page linked');

    //create 2main containers for the page
    const menu1 = document.createElement('div')
    menuFactory.addToMenu(menu1, 'menu1', menuContainer);

    const menu2 = document.createElement('div')
    menuFactory.addToMenu(menu2, 'menu2', menuContainer);

};


const menuFactory = (function () {

    function addToMenu(elementName, className, fatherElement ) {
        elementName.classList.add(className);
        fatherElement.appendChild(elementName);

        console.log(elementName);
        return elementName;
    };
    return {addToMenu};
})();




/***/ }),

/***/ "./src/imgs/Bertie.jpg":
/*!*****************************!*\
  !*** ./src/imgs/Bertie.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8aff113546af789c41d8.jpg";

/***/ }),

/***/ "./src/imgs/TheFrogChoirHM.png":
/*!*************************************!*\
  !*** ./src/imgs/TheFrogChoirHM.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6dc6ee570f7cca6f07f7.png";

/***/ }),

/***/ "./src/imgs/warlock.png":
/*!******************************!*\
  !*** ./src/imgs/warlock.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5a412771d831596a2be.png";

/***/ }),

/***/ "./src/imgs/wizard-background.jpg":
/*!****************************************!*\
  !*** ./src/imgs/wizard-background.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18aa766b79d8588e5633.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");







console.log('test')

// object/factory function that will connect all of the webiste pages
// together. Here is where the main functionality will be, where
// the correct page will render and be visible based on what tabs
// the user clicks at the top


// create the main website bar at the top
const siteNavigator = (function () {

    const body = document.body;
    const pageHolder = document.getElementById('content');
    console.log(pageHolder);

    // create the main website bar at the top
    const navigationBar = document.createElement('div');
    navigationBar.textContent = 'Bertie Bott\'s';
    navigationBar.classList.add('navigation-bar');

    // adds the navigation bar to the top
    pageHolder.appendChild(navigationBar);

    // opens up tot he default home page
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.homePage)();
    pageHolder.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_1__.homeContainer);

    (0,_about_js__WEBPACK_IMPORTED_MODULE_2__.aboutPage)();
    pageHolder.appendChild(_about_js__WEBPACK_IMPORTED_MODULE_2__.aboutContainer);

    (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.menuPage)();
    pageHolder.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_3__.menuContainer);


    // array containing the tab names
    const tabNames = ['Home', 'About', 'Menu', 'Reservations']
    const tabs = [];

    for (let i = 0; i < 4; i++) {
        const tab = document.createElement('div');
        tab.classList.add('navigation-tab');
        tab.textContent = tabNames[i];
        tabs.push(tab);
        navigationBar.appendChild(tab);
    }

    let activeTab = tabs[0];
    tabs[0].classList.add('disabled-tab');
    console.log(activeTab);


    console.log(tabs)
    tabs.forEach(tab => {
         tab.addEventListener('click', () => {
            console.log(tab);
            activeTab = tab;
            console.log(activeTab);
            switchPage(activeTab);
    
        });
   
    });
   

    function switchPage(activeTab) {
        if (activeTab === tabs[0]) {
            tabs[1].classList.remove('disabled-tab');
            tabs[2].classList.remove('disabled-tab');
            console.log('homepage');
            _home_js__WEBPACK_IMPORTED_MODULE_1__.homeContainer.style = 'display: grid'
            _about_js__WEBPACK_IMPORTED_MODULE_2__.aboutContainer.style = 'display: none'
            _menu_js__WEBPACK_IMPORTED_MODULE_3__.menuContainer.style = 'display: none'
            // pageHolder.removeChild(aboutContainer);
            // pageHolder.appendChild(homeContainer);

            // have to disable the Home Div click
            tabs[0].classList.add('disabled-tab');

        } else if (activeTab === tabs[1]) {
            tabs[0].classList.remove('disabled-tab');
            tabs[2].classList.remove('disabled-tab');
            console.log('About');
            _home_js__WEBPACK_IMPORTED_MODULE_1__.homeContainer.style = 'display: none'
            _about_js__WEBPACK_IMPORTED_MODULE_2__.aboutContainer.style = 'display: flex'
            _menu_js__WEBPACK_IMPORTED_MODULE_3__.menuContainer.style = 'display: none'
            // pageHolder.removeChild(homeContainer);
            // pageHolder.appendChild(aboutContainer);
            
            tabs[1].classList.add('disabled-tab');

        }  else if (activeTab === tabs[2]) {
            tabs[0].classList.remove('disabled-tab');
            tabs[1].classList.remove('disabled-tab');
            console.log('Menu clicked');

            _menu_js__WEBPACK_IMPORTED_MODULE_3__.menuContainer.style = 'display: grid;'
            _home_js__WEBPACK_IMPORTED_MODULE_1__.homeContainer.style = 'display: none'
            _about_js__WEBPACK_IMPORTED_MODULE_2__.aboutContainer.style = 'display: none'

            tabs[2].classList.add('disabled-tab');

        } else {
            console.log('doesnt exist')
        }

    }


})();




// add addEventListeners to tab links at the top of page, so that when they
//are clicked, the correct page is loaded in through the "content" div.

// when one page is selected, the others should be set to
// 'display: none'


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3pCLFlBQVkscURBQWM7QUFDMUIsWUFBWSxtREFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFlBQVksbURBQWEsd0JBQXdCO0FBQ2pELFlBQVksbURBQWE7QUFDekIsWUFBWSxxREFBYzs7QUFFMUI7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7OztBQUdBLENBQUM7Ozs7O0FBS0Q7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1ncy93aXphcmQtYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbmh0bWwsIGJvZHkge1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4jY29udGVudCB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubmF2aWdhdGlvbi1iYXIge1xuICAgIGhlaWdodDogNTVweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzMsIDcyLCA3Mik7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdhcDogMzBweDtcbn1cblxuLm5hdmlnYXRpb24tdGFiIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDQxLCA0MSk7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbn1cblxuLmRpc2FibGVkLXRhYiB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG4uaG9tZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogbWluLXdpZHRoOiAxMDB2aDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgKi9cbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICBtaW4td2lkdGg6IDcwMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmcjtcbiAgICBjb2x1bW4tZ2FwOiAzMHB4O1xuICAgIHBhZGRpbmc6IDEwMHB4IDMwMHB4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn07XG5cbi5ob21lMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbnRlbnQ6ICdGcm9ncyc7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ob21lMSAqIHtcbiAgICBjb2xvcjogcmdiKDIyNCwgMjIzLCAyMjMpO1xufVxuXG4uaG9tZS10aXRsZS1jb250YWluZXIge1xuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi13aWR0aDogNDg1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBnYXA6IDIwcHg7ICovXG59XG5cbi5ob21lMSBoMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDYycHg7XG59XG5cbi5ob21lLWJveCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xuICAgIGhlaWdodDogMTUwcHg7XG59XG5cbi5oYXQtaWNvbiB7XG4gICAgLyogcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzBweDtcbiAgICByaWdodDogODVweDsgKi9cbiAgICBmaWx0ZXI6IGludmVydCg4MCUpIHNlcGlhKDQ0JSkgc2F0dXJhdGUoNDU1JSkgaHVlLXJvdGF0ZSg2ZGVnKSBicmlnaHRuZXNzKDk5JSkgY29udHJhc3QoOTMlKTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uaG9tZS1ob29rIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5ob21lLWRlc2NyaXB0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5vcmRlci1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDQxLCA0MSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmhvbWUyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgICBncmlkLXJvdzogMSAvIDM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NiwgNDEsIDQxLCAwLjYpO1xuICAgIHBhZGRpbmc6IDMycHg7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBcbn1cblxuLmhvbWUyICoge1xuICAgIGNvbG9yOiBhenVyZTtcbn1cblxuLmhvbWUyIGgzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5cblxuLmZyb2ctaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuXG5cbi5hYm91dC1jb250YWluZXIge1xuICAgIC8qIGRpc3BsYXk6IDogZmxleDsgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBtaW4td2lkdGg6IDEwMHZoO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uOyAqL1xufVxuXG4uYWJvdXQxIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxLjVmcjtcbiAgICBtaW4taGVpZ2h0OiA2NXZoO1xuICAgIG1heC13aWR0aDogODV2aDtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk2LCA0MSwgNDEsIDAuNyk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmFib3V0MS10b3Age1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDgwLCA5OCk7ICovXG59XG5cbi5hYm91dC10aXRsZSB7XG4gICAgLyogaGVpZ2h0OiAxNXZoOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMzcHg7XG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xufVxuXG4uYWJvdXQtcGFyYSB7XG4gICAgcGFkZGluZzogMjBweCAyNXB4O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XG59XG5cbi5hYm91dDEtYm90dG9tIHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cbn1cblxuLmJlcnRpZS1waWMge1xuICAgIGhlaWdodDogMTcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3JkZXI6IDMwcHggc29saWQgcmdiKDU4LCA4MCwgOTgpO1xufVxuXG5cbi8qIE1lbnUgcGFnZSAqL1xuXG4ubWVudS1jb250YWluZXIge1xuICAgIC8qIGRpc3BsYXk6IGdyaWQ7ICovXG4gICAgZGlzcGxheTogbm9uZTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNhbG1vbjsgKi9cbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtaW4td2lkdGg6IDEwMHZoO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gICAgZ2FwOiAzMHB4O1xuICAgIHBhZGRpbmc6IDBweCAyNTBweDsgXG4gICAgcGFkZGluZy10b3A6IDEyMHB4O1xuICAgIFxufVxuXG4ubWVudTEge1xuICAgIC8qIGRpc3BsYXk6IGdyaWQ7ICovXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAxIC8gMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbn1cblxuLm1lbnUyIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IseURBQXFEO0lBQ3JELHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1Q0FBdUM7SUFDdkMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Is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IjpbXCJodG1sIHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1ncy93aXphcmQtYmFja2dyb3VuZC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLm5hdmlnYXRpb24tYmFyIHtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzMsIDcyLCA3Mik7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLm5hdmlnYXRpb24tdGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk2LCA0MSwgNDEpO1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG4uZGlzYWJsZWQtdGFiIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmhvbWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogbWluLXdpZHRoOiAxMDB2aDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7ICovXFxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xcbiAgICBtaW4td2lkdGg6IDcwMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnI7XFxuICAgIGNvbHVtbi1nYXA6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwMHB4IDMwMHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufTtcXG5cXG4uaG9tZTEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb250ZW50OiAnRnJvZ3MnO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUxICoge1xcbiAgICBjb2xvcjogcmdiKDIyNCwgMjIzLCAyMjMpO1xcbn1cXG5cXG4uaG9tZS10aXRsZS1jb250YWluZXIge1xcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi13aWR0aDogNDg1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBnYXA6IDIwcHg7ICovXFxufVxcblxcbi5ob21lMSBoMSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDYycHg7XFxufVxcblxcbi5ob21lLWJveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgIGhlaWdodDogMTUwcHg7XFxufVxcblxcbi5oYXQtaWNvbiB7XFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMHB4O1xcbiAgICByaWdodDogODVweDsgKi9cXG4gICAgZmlsdGVyOiBpbnZlcnQoODAlKSBzZXBpYSg0NCUpIHNhdHVyYXRlKDQ1NSUpIGh1ZS1yb3RhdGUoNmRlZykgYnJpZ2h0bmVzcyg5OSUpIGNvbnRyYXN0KDkzJSk7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5ob21lLWhvb2sge1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxufVxcblxcbi5ob21lLWRlc2NyaXB0IHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ub3JkZXItYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk2LCA0MSwgNDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4uaG9tZTIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTYsIDQxLCA0MSwgMC42KTtcXG4gICAgcGFkZGluZzogMzJweDtcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIFxcbn1cXG5cXG4uaG9tZTIgKiB7XFxuICAgIGNvbG9yOiBhenVyZTtcXG59XFxuXFxuLmhvbWUyIGgzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxufVxcblxcblxcblxcbi5mcm9nLWljb24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuXFxuLmFib3V0LWNvbnRhaW5lciB7XFxuICAgIC8qIGRpc3BsYXk6IDogZmxleDsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIG1pbi13aWR0aDogMTAwdmg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNhbG1vbjsgKi9cXG59XFxuXFxuLmFib3V0MSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDEuNWZyO1xcbiAgICBtaW4taGVpZ2h0OiA2NXZoO1xcbiAgICBtYXgtd2lkdGg6IDg1dmg7XFxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk2LCA0MSwgNDEsIDAuNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi5hYm91dDEtdG9wIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDgwLCA5OCk7ICovXFxufVxcblxcbi5hYm91dC10aXRsZSB7XFxuICAgIC8qIGhlaWdodDogMTV2aDsgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMzcHg7XFxuICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG59XFxuXFxuLmFib3V0LXBhcmEge1xcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG59XFxuXFxuLmFib3V0MS1ib3R0b20ge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cXG59XFxuXFxuLmJlcnRpZS1waWMge1xcbiAgICBoZWlnaHQ6IDE3MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBib3JkZXI6IDMwcHggc29saWQgcmdiKDU4LCA4MCwgOTgpO1xcbn1cXG5cXG5cXG4vKiBNZW51IHBhZ2UgKi9cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgICAvKiBkaXNwbGF5OiBncmlkOyAqL1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNhbG1vbjsgKi9cXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTAwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDBweCAyNTBweDsgXFxuICAgIHBhZGRpbmctdG9wOiAxMjBweDtcXG4gICAgXFxufVxcblxcbi5tZW51MSB7XFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7ICovXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG59XFxuXFxuLm1lbnUyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBCZXJ0aWUgZnJvbSAnLi9pbWdzL0JlcnRpZS5qcGcnO1xuXG5jb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cblxuZXhwb3J0IGNvbnN0IGFib3V0UGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBhYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dC1jb250YWluZXInKTtcbiAgICBjb25zb2xlLmxvZygnQWJvdXQgcGFnZSBpbnNlcnRlZCcpO1xuXG4gICAgLy8gbWFpbiBjb250YWluZXIgZm9yIHRoZSByZXN0IG9mIHRoZSBlbGVtZW50cyBvbiB0aGUgYWJvdXQgcGFnZVxuICAgIGNvbnN0IGFib3V0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0RmFjdG9yeS5hZGRUb0Fib3V0KGFib3V0MSwgJ2Fib3V0MScsIGFib3V0Q29udGFpbmVyKTtcbiAgICBjb25zb2xlLmxvZyhhYm91dDEpO1xuXG4gICAgLy8gY29udGFpbmVyIHRoYXQgY29udGFpbnMgdGhlIHRpdGxlIGFuZCBwYXJhZ3JhcGhcbiAgICBjb25zdCBhYm91dDFUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dEZhY3RvcnkuYWRkVG9BYm91dChhYm91dDFUb3AsICdhYm91dDEtdG9wJywgYWJvdXQxKTtcblxuXG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWJvdXRGYWN0b3J5LmFkZFRvQWJvdXQoYWJvdXRUaXRsZSwgJ2Fib3V0LXRpdGxlJywgYWJvdXQxVG9wKTtcbiAgICBhYm91dFRpdGxlLnRleHRDb250ZW50ID0gJ0EgU3RvcnkgTG9uZyBpbiB0aGUgTWFraW5nJ1xuXG4gICAgY29uc3QgYWJvdXRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0RmFjdG9yeS5hZGRUb0Fib3V0KGFib3V0UGFyYWdyYXBoLCAnYWJvdXQtcGFyYScsIGFib3V0MVRvcClcbiAgICBhYm91dFBhcmFncmFwaC50ZXh0Q29udGVudCA9IGBHcm93aW5nIHVwIGluIGEgc21hbGwgbXVnZ2xlIHRvd24gb2ZmIHRoZSBjb2FzdCBqdXN0IHNoeVxuICAgIG9mIFdleW1vdXRoLCBCZXJ0aWUgQm90dHMgd2FzIGFsd2F5cyBvbmUgb2YgdGhlIHBlY3VsaWFyIHNvcnQuIFdpdGggbm90IG11Y2hcbiAgICB0byBkbyBhcm91bmQgaGlzIGhvbWUsIGhlIHdvdWxkIGNyZWF0ZSBmYW50YXN0aWNhbCBjb25jb3Rpb25zIHVzaW5nIGFsbCBzb3J0c1xuICAgIG9mIHRoaW5ncywgbm90IGV4Y2x1ZGluZyBzZWF3ZWVkLCBzZWFndWxsIGZlYXRoZXJzLCBob3VzZSBkZXRlcmdlbnRzLCBhbmQgbGFtYiBtdWN1cy5cbiAgICBPbmNlIGhlIGRpc2NvdmVyZWQgdGhlIHdvcmxkIG9mIHdpemFkcnkgYW5kIGF0dGVuZGluZyBIb2d3YXJ0cywgaGUgcXVpY2tseVxuICAgIHJvc2UgdGhyb3VnaCB0aGUgcmFua3MgdG8gYmVjb21lIEh1ZmZsZXB1ZmYncyBoZWFkIGNoZWYuIDMwIHllYXJzIGxhdGVyLCBCZXJ0aWVcbiAgICBpcyBzdGlsbCB1c2luZyBoaXMgY3JlYXRpdmVuc3MgYW5kIHBhc3Npb24gdG8gcnVuIGhpcyBvd24gcmVzdGF1cmFudCBhbmQgY2FuZHkgc2hvcCwgXG4gICAgJ0JlcnRpZSdzIEJvdHQncywgb25lIG9mIHRoZSBtb3N0IHBvcHVsYXIgYW5kIGV4dHJhdmFnZW50IGJyYW5kcyBpbiB0aGUgV2l6YXJkaW5nIFdvcmxkYFxuXG4gICAgLy8gY29udGFpbmVyIHRoYXQgY29udGFpbnMgaW1hZ2VcbiAgICBjb25zdCBhYm91dDFCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dEZhY3RvcnkuYWRkVG9BYm91dChhYm91dDFCb3R0b20sICdhYm91dDEtYm90dG9tJywgYWJvdXQxKTtcblxuICAgIC8vIGltYWdlIGZvciBBYm91dCBwYWdlXG4gICAgY29uc3QgYWJvdXRQaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBhYm91dFBpYy5zcmMgPSBCZXJ0aWU7XG4gICAgYWJvdXRGYWN0b3J5LmFkZFRvQWJvdXQoYWJvdXRQaWMsICdiZXJ0aWUtcGljJywgYWJvdXQxQm90dG9tKTtcbn1cblxuXG4vLyBlbGVtZW50TmFtZSAgPSByZWZlcmVuY2UgbmFtZVxuLy8gZWxlbWVudCA9IHR5cGUgb2YgSFRNTCBlbGVtZW50IHdlIHdhbnQgdG8gY3JlYXRlXG4vLyBjbGFzc05hbWUgPSBuYW1lIG9mIGNsYXNzIHdlIHdhbnQgdG8gYXNzaWduXG4vLyBmYXRoZXJFbGVtZW50ID0gbmFtZSBvZiBjb250YWluZXIgd2Ugd2FudCB0byBhcHBlbmQgdG9cbmNvbnN0IGFib3V0RmFjdG9yeSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBmdW5jdGlvbiBhZGRUb0Fib3V0KGVsZW1lbnROYW1lLCBjbGFzc05hbWUsIGZhdGhlckVsZW1lbnQgKSB7XG4gICAgICAgIGVsZW1lbnROYW1lLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgZmF0aGVyRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50TmFtZSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudE5hbWUpO1xuICAgICAgICByZXR1cm4gZWxlbWVudE5hbWU7XG4gICAgfTtcbiAgICByZXR1cm4ge2FkZFRvQWJvdXR9O1xufSkoKTtcblxuXG5cbmV4cG9ydCB7YWJvdXRDb250YWluZXJ9O1xuIiwiXG5cbmltcG9ydCBmcm9nIGZyb20gJy4vaW1ncy9UaGVGcm9nQ2hvaXJITS5wbmcnO1xuXG5pbXBvcnQgSGF0IGZyb20gJy4vaW1ncy93YXJsb2NrLnBuZyc7XG5cblxuXG5jb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmV4cG9ydCBjb25zdCBob21lUGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBuZWVkIHRvIHN0YXJ0IHdpdGggYW4gb3V0ZXIgY29udGFpbmVyIC4uIHRoaXMgb3V0ZXJcbiAgICAvLyBjb250YWluZXIgd2lsbCBiZWNvbWUgdGhlIGNoaWxkIGNvbnRhaW5lciBvZiB0aGVcbiAgICAvLyBjb250ZW50IGRpdiwgdGh1cyBtYWtpbmcgaXQgdmlzaWJsZSBvbiB0aGUgcGFnZVxuXG4gICBcbiAgICBjb25zdCBob21lRGl2TmFtZXMgPSBbJ2hvbWUxJywgJ2hvbWUyJ107XG4gICAgbGV0IGhvbWVEaXZzID0gW107XG5cblxuICAgIC8vIHRoaXMgd29uJ3QgYmUgYXBwZW5kZWQgdG8gdGhlIHRoZSBcImNvbnRlbnRcIiBkaXYgdW50aWwgaXQgaXNcbiAgICAvLyBjYWxsZWQgdXBvbiBpbiB0aGUgaW5kZXguanMgZmlsZVxuXG4gICAgaG9tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRhaW5lcicpO1xuICAgXG5cbiAgICAvLyBjcmVhdGUgMyBkaXYgY29udGFpbmVycyB3aXRoaW4gdGhlIGhvbWVDb250YWluZXJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvbWVEaXYuY2xhc3NMaXN0LmFkZChob21lRGl2TmFtZXNbaV0pO1xuICAgICAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVEaXYpO1xuICAgICAgICBob21lRGl2cy5wdXNoKGhvbWVEaXYpO1xuICAgIH07XG4gICAgbGV0IGhvbWUxID0gaG9tZURpdnNbMF07XG4gICAgbGV0IGhvbWUyID0gaG9tZURpdnNbMV07XG5cblxuICAgIC8vIHN0eWxlIGVhY2ggaG9tZURpdiBhY2NvcmRpbmdseVxuICAgIC8vIGhvbWUxOlxuICAgIHN0eWxlSG9tZTEoaG9tZTEpO1xuICAgIHN0eWxlSG9tZTIoaG9tZTIpO1xuXG5cbiAgICBjb25zb2xlLmxvZygnaG9tZXBhZ2UgaXMgbGlua2VkJyk7XG5cbn1cblxuXG5cbmZ1bmN0aW9uIHN0eWxlSG9tZTEgKGhvbWUxKSB7XG4gICAgY29uc3QgaG9tZVRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZVRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUtdGl0bGUtY29udGFpbmVyJyk7XG4gICAgaG9tZTEuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGhvbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaG9tZVRpdGxlLnRleHRDb250ZW50ID0gYEJlcnRpZSBCb3R0XFwnc2BcbiAgICBob21lVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlKTtcblxuICAgIGNvbnN0IGhvbWVMb2dvID0gbmV3IEltYWdlKCk7XG4gICAgaG9tZUxvZ28uc3JjICA9IEhhdDtcbiAgICBob21lTG9nby5jbGFzc0xpc3QuYWRkKCdoYXQtaWNvbicpXG4gICAgaG9tZVRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVMb2dvKTtcblxuXG5cbiAgICBjb25zdCBob21lQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZUJveC5jbGFzc0xpc3QuYWRkKCdob21lLWJveCcpO1xuICAgIGhvbWUxLmFwcGVuZENoaWxkKGhvbWVCb3gpO1xuXG4gICAgY29uc3QgaG9tZUhvb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhvbWVIb29rLnRleHRDb250ZW50ID0gJ0FkZCBhIGJpdCBvZiBNYWdpYyB0byB5b3VyIGV2ZW5pbmcgLi4uJ1xuICAgIGhvbWVIb29rLmNsYXNzTGlzdC5hZGQoJ2hvbWUtaG9vaycpXG4gICAgaG9tZUJveC5hcHBlbmRDaGlsZChob21lSG9vayk7XG5cbiAgICBjb25zdCBob21lRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGhvbWVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdDb21lIGRpbmUgd2l0aCB5b3VyIGZlbGxvdyB3aXRjaGVzIGFuZCB3aXphcmRzIGF0IG91ciA1IHN0YXIgZXN0YWJsaXNobWVudCBvbiB0aGUgY29ybmVyIG9mIENyZXNjZW50IGFuZCBEb2JieSBpbiB1cHBlciBEaWFnb24gQWxsZXknO1xuICAgIGhvbWVEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdob21lLWRlc2NyaXB0JylcbiAgICBob21lQm94LmFwcGVuZENoaWxkKGhvbWVEZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBvcmRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG9yZGVyQnV0dG9uLnRleHRDb250ZW50ID0gJ09yZGVyIE9ubGluZSc7XG4gICAgb3JkZXJCdXR0b24uY2xhc3NMaXN0LmFkZCgnb3JkZXItYnV0dG9uJyk7XG4gICAgaG9tZUJveC5hcHBlbmRDaGlsZChvcmRlckJ1dHRvbik7XG5cbn1cblxuZnVuY3Rpb24gc3R5bGVIb21lMiAoaG9tZTIpIHtcbiAgICBjb25zdCBmcm9nSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGZyb2dJY29uLnNyYyA9IGZyb2c7XG4gICAgZnJvZ0ljb24uY2xhc3NMaXN0LmFkZCgnZnJvZy1pY29uJylcbiAgICBob21lMi5hcHBlbmRDaGlsZChmcm9nSWNvbik7XG5cbiAgICBjb25zdCBmcm9nVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGZyb2dUaXRsZS50ZXh0Q29udGVudCA9ICdMaXZlIHBlcmZvcm1hbmNlcyBmcm9tIEZyb2cgQ2hvaXIgZXZlcnkgRnJpZGF5IGF0IDdwbSc7XG4gICAgLy8gZnJvZ1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2Zyb2ctdGl0bGUnKTtcbiAgICBob21lMi5hcHBlbmRDaGlsZChmcm9nVGl0bGUpO1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gY2xlYXJIb21lIChoYXNCZWVuUnVuKSB7XG4vLyAgICAgY29uc29sZS5sb2coJ2NsZWFyZWQnKTtcbi8vICAgICBoYXNCZWVuUnVuID0gdHJ1ZTtcbi8vICAgICBjb25zb2xlLmxvZyhoYXNCZWVuUnVuKTtcbi8vIH1cblxuZXhwb3J0IHtob21lQ29udGFpbmVyfTtcblxuXG5cbiIsIlxuXG4vLyBwbGFuIGlzdG8gY3JlYXRlIHR3byBtYWluIGNvbnRhaW5lcnMgaGVyZS4gT25lIHdpbGwgYmUgbXVjaFxuLy8gYmlnZ2VyIGFuZCBjb250YWluIHRoZSBzY3JvbGxhYmxlIG1lbnUuIFRoZSBvdGhlciB3aWxsIGJlXG4vLyBhIHNtYWxsZXIgYm94IHRoYXQgbGlzdHMgdGhlIEhvdXJzIG9mIHRoZSByZXN0YXVyYW50XG5jb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblxuZXhwb3J0IGNvbnN0IG1lbnVQYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcbiAgICBjb25zb2xlLmxvZygnbWVudSBwYWdlIGxpbmtlZCcpO1xuXG4gICAgLy9jcmVhdGUgMm1haW4gY29udGFpbmVycyBmb3IgdGhlIHBhZ2VcbiAgICBjb25zdCBtZW51MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudUZhY3RvcnkuYWRkVG9NZW51KG1lbnUxLCAnbWVudTEnLCBtZW51Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IG1lbnUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51RmFjdG9yeS5hZGRUb01lbnUobWVudTIsICdtZW51MicsIG1lbnVDb250YWluZXIpO1xuXG59O1xuXG5cbmNvbnN0IG1lbnVGYWN0b3J5ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGZ1bmN0aW9uIGFkZFRvTWVudShlbGVtZW50TmFtZSwgY2xhc3NOYW1lLCBmYXRoZXJFbGVtZW50ICkge1xuICAgICAgICBlbGVtZW50TmFtZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIGZhdGhlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudE5hbWUpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnROYW1lKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnROYW1lO1xuICAgIH07XG4gICAgcmV0dXJuIHthZGRUb01lbnV9O1xufSkoKTtcblxuXG5leHBvcnQge21lbnVDb250YWluZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL2hvbWUuanMnO1xuaW1wb3J0IHsgaG9tZVBhZ2UsIGhvbWVDb250YWluZXIgfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHsgYWJvdXRQYWdlLCBhYm91dENvbnRhaW5lciB9IGZyb20gJy4vYWJvdXQuanMnO1xuaW1wb3J0IHsgbWVudVBhZ2UsIG1lbnVDb250YWluZXIgfSBmcm9tICcuL21lbnUuanMnO1xuXG5cbmNvbnNvbGUubG9nKCd0ZXN0JylcblxuLy8gb2JqZWN0L2ZhY3RvcnkgZnVuY3Rpb24gdGhhdCB3aWxsIGNvbm5lY3QgYWxsIG9mIHRoZSB3ZWJpc3RlIHBhZ2VzXG4vLyB0b2dldGhlci4gSGVyZSBpcyB3aGVyZSB0aGUgbWFpbiBmdW5jdGlvbmFsaXR5IHdpbGwgYmUsIHdoZXJlXG4vLyB0aGUgY29ycmVjdCBwYWdlIHdpbGwgcmVuZGVyIGFuZCBiZSB2aXNpYmxlIGJhc2VkIG9uIHdoYXQgdGFic1xuLy8gdGhlIHVzZXIgY2xpY2tzIGF0IHRoZSB0b3BcblxuXG4vLyBjcmVhdGUgdGhlIG1haW4gd2Vic2l0ZSBiYXIgYXQgdGhlIHRvcFxuY29uc3Qgc2l0ZU5hdmlnYXRvciA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBjb25zdCBwYWdlSG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zb2xlLmxvZyhwYWdlSG9sZGVyKTtcblxuICAgIC8vIGNyZWF0ZSB0aGUgbWFpbiB3ZWJzaXRlIGJhciBhdCB0aGUgdG9wXG4gICAgY29uc3QgbmF2aWdhdGlvbkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdmlnYXRpb25CYXIudGV4dENvbnRlbnQgPSAnQmVydGllIEJvdHRcXCdzJztcbiAgICBuYXZpZ2F0aW9uQmFyLmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRpb24tYmFyJyk7XG5cbiAgICAvLyBhZGRzIHRoZSBuYXZpZ2F0aW9uIGJhciB0byB0aGUgdG9wXG4gICAgcGFnZUhvbGRlci5hcHBlbmRDaGlsZChuYXZpZ2F0aW9uQmFyKTtcblxuICAgIC8vIG9wZW5zIHVwIHRvdCBoZSBkZWZhdWx0IGhvbWUgcGFnZVxuICAgIGhvbWVQYWdlKCk7XG4gICAgcGFnZUhvbGRlci5hcHBlbmRDaGlsZChob21lQ29udGFpbmVyKTtcblxuICAgIGFib3V0UGFnZSgpO1xuICAgIHBhZ2VIb2xkZXIuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpO1xuXG4gICAgbWVudVBhZ2UoKTtcbiAgICBwYWdlSG9sZGVyLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuXG5cbiAgICAvLyBhcnJheSBjb250YWluaW5nIHRoZSB0YWIgbmFtZXNcbiAgICBjb25zdCB0YWJOYW1lcyA9IFsnSG9tZScsICdBYm91dCcsICdNZW51JywgJ1Jlc2VydmF0aW9ucyddXG4gICAgY29uc3QgdGFicyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCduYXZpZ2F0aW9uLXRhYicpO1xuICAgICAgICB0YWIudGV4dENvbnRlbnQgPSB0YWJOYW1lc1tpXTtcbiAgICAgICAgdGFicy5wdXNoKHRhYik7XG4gICAgICAgIG5hdmlnYXRpb25CYXIuYXBwZW5kQ2hpbGQodGFiKTtcbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlVGFiID0gdGFic1swXTtcbiAgICB0YWJzWzBdLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkLXRhYicpO1xuICAgIGNvbnNvbGUubG9nKGFjdGl2ZVRhYik7XG5cblxuICAgIGNvbnNvbGUubG9nKHRhYnMpXG4gICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YWIpO1xuICAgICAgICAgICAgYWN0aXZlVGFiID0gdGFiO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aXZlVGFiKTtcbiAgICAgICAgICAgIHN3aXRjaFBhZ2UoYWN0aXZlVGFiKTtcbiAgICBcbiAgICAgICAgfSk7XG4gICBcbiAgICB9KTtcbiAgIFxuXG4gICAgZnVuY3Rpb24gc3dpdGNoUGFnZShhY3RpdmVUYWIpIHtcbiAgICAgICAgaWYgKGFjdGl2ZVRhYiA9PT0gdGFic1swXSkge1xuICAgICAgICAgICAgdGFic1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZC10YWInKTtcbiAgICAgICAgICAgIHRhYnNbMl0uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQtdGFiJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaG9tZXBhZ2UnKTtcbiAgICAgICAgICAgIGhvbWVDb250YWluZXIuc3R5bGUgPSAnZGlzcGxheTogZ3JpZCdcbiAgICAgICAgICAgIGFib3V0Q29udGFpbmVyLnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnXG4gICAgICAgICAgICBtZW51Q29udGFpbmVyLnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnXG4gICAgICAgICAgICAvLyBwYWdlSG9sZGVyLnJlbW92ZUNoaWxkKGFib3V0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIC8vIHBhZ2VIb2xkZXIuYXBwZW5kQ2hpbGQoaG9tZUNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIC8vIGhhdmUgdG8gZGlzYWJsZSB0aGUgSG9tZSBEaXYgY2xpY2tcbiAgICAgICAgICAgIHRhYnNbMF0uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQtdGFiJyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChhY3RpdmVUYWIgPT09IHRhYnNbMV0pIHtcbiAgICAgICAgICAgIHRhYnNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQtdGFiJyk7XG4gICAgICAgICAgICB0YWJzWzJdLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkLXRhYicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Fib3V0Jyk7XG4gICAgICAgICAgICBob21lQ29udGFpbmVyLnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnXG4gICAgICAgICAgICBhYm91dENvbnRhaW5lci5zdHlsZSA9ICdkaXNwbGF5OiBmbGV4J1xuICAgICAgICAgICAgbWVudUNvbnRhaW5lci5zdHlsZSA9ICdkaXNwbGF5OiBub25lJ1xuICAgICAgICAgICAgLy8gcGFnZUhvbGRlci5yZW1vdmVDaGlsZChob21lQ29udGFpbmVyKTtcbiAgICAgICAgICAgIC8vIHBhZ2VIb2xkZXIuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0YWJzWzFdLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkLXRhYicpO1xuXG4gICAgICAgIH0gIGVsc2UgaWYgKGFjdGl2ZVRhYiA9PT0gdGFic1syXSkge1xuICAgICAgICAgICAgdGFic1swXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZC10YWInKTtcbiAgICAgICAgICAgIHRhYnNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQtdGFiJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTWVudSBjbGlja2VkJyk7XG5cbiAgICAgICAgICAgIG1lbnVDb250YWluZXIuc3R5bGUgPSAnZGlzcGxheTogZ3JpZDsnXG4gICAgICAgICAgICBob21lQ29udGFpbmVyLnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnXG4gICAgICAgICAgICBhYm91dENvbnRhaW5lci5zdHlsZSA9ICdkaXNwbGF5OiBub25lJ1xuXG4gICAgICAgICAgICB0YWJzWzJdLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkLXRhYicpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZG9lc250IGV4aXN0JylcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn0pKCk7XG5cblxuXG5cbi8vIGFkZCBhZGRFdmVudExpc3RlbmVycyB0byB0YWIgbGlua3MgYXQgdGhlIHRvcCBvZiBwYWdlLCBzbyB0aGF0IHdoZW4gdGhleVxuLy9hcmUgY2xpY2tlZCwgdGhlIGNvcnJlY3QgcGFnZSBpcyBsb2FkZWQgaW4gdGhyb3VnaCB0aGUgXCJjb250ZW50XCIgZGl2LlxuXG4vLyB3aGVuIG9uZSBwYWdlIGlzIHNlbGVjdGVkLCB0aGUgb3RoZXJzIHNob3VsZCBiZSBzZXQgdG9cbi8vICdkaXNwbGF5OiBub25lJ1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=