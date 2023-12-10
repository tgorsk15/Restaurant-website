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

.home1 h1 {
    display: flex;
    justify-content: center;
    font-size: 62px;
    position: relative;
}

.home-box {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    height: 150px;
}

.hat-icon {
    position: absolute;
    top: 0px;
    right: 85px;
    filter: invert(80%) sepia(44%) saturate(455%) hue-rotate(6deg) brightness(99%) contrast(93%);
    height: 70px;
}

.home-hook {
    font-size: 35px;
}

.home-descript {
    font-size: 20px;
}

.order-button {
    width: 120px;
    height: 25px;
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
    grid-template-rows: 2fr 1fr;
    min-height: 65vh;
    max-width: 85vh;
    margin-top: -30px;
    background-color: rgba(96, 41, 41, 0.6);
    border-radius: 25px;
}

.about1-top {
    grid-row: 1 / 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(58, 80, 98);
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,2BAA2B;IAC3B,yDAAqD;IACrD,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,uCAAuC;IACvC,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,iCAAiC;IACjC,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb;wBACoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,8BAA8B;IAC9B,gBAAgB;IAChB,oBAAoB;IACpB,qBAAqB;AACzB,CAAA;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,4FAA4F;IAC5F,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,iCAAiC;IACjC,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,0BAA0B;IAC1B,2BAA2B;IAC3B,qBAAqB;IACrB,cAAc;IACd,eAAe;IACf,uCAAuC;IACvC,aAAa;IACb,iBAAiB;IACjB,mBAAmB;;AAEvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;;;AAIA;IACI,qBAAqB;IACrB,aAAa;IACb,kBAAkB;AACtB;;;AAGA;IACI,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,0BAA0B;IAC1B,2BAA2B;IAC3B,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,uCAAuC;IACvC,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,qBAAqB;AACzB","sourcesContent":["html {\n    min-height: 100%;\n}\n\nhtml, body {\n    margin: 0px;\n}\n\n#content {\n    min-height: 100vh;\n    width: 100%;\n    /* background-color: red; */\n    background-image: url('./imgs/wizard-background.jpg');\n    background-size: cover;\n}\n\n.navigation-bar {\n    height: 55px;\n    /* background-color: rgb(73, 72, 72); */\n    display: flex;\n    justify-content: start;\n    gap: 30px;\n}\n\n.navigation-tab {\n    display: flex;\n    width: 80px;\n    height: 100%;\n    background-color: rgb(96, 41, 41);\n    padding: 0px 10px;\n    text-align: center;\n    align-items: center;\n    color: antiquewhite;\n}\n\n.disabled-tab {\n    pointer-events: none;\n    opacity: 0.7;\n}\n\n.home-container {\n    display: grid;\n    /* min-width: 100vh;\n    min-height: 100vh; */\n    min-height: 600px;\n    min-width: 700px;\n    grid-template-columns: 2fr 2fr;\n    column-gap: 30px;\n    padding: 100px 300px;\n    justify-items: center;\n};\n\n.home1 {\n    display: flex;\n    flex-direction: column;\n    content: 'Frogs';\n    grid-column: 1 / 2;\n    grid-row: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.home1 * {\n    color: rgb(224, 223, 223);\n}\n\n.home1 h1 {\n    display: flex;\n    justify-content: center;\n    font-size: 62px;\n    position: relative;\n}\n\n.home-box {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    height: 150px;\n}\n\n.hat-icon {\n    position: absolute;\n    top: 0px;\n    right: 85px;\n    filter: invert(80%) sepia(44%) saturate(455%) hue-rotate(6deg) brightness(99%) contrast(93%);\n    height: 70px;\n}\n\n.home-hook {\n    font-size: 35px;\n}\n\n.home-descript {\n    font-size: 20px;\n}\n\n.order-button {\n    width: 120px;\n    height: 25px;\n    color: antiquewhite;\n    background-color: rgb(96, 41, 41);\n    border-radius: 25px;\n}\n\n.home2 {\n    display: grid;\n    height: 400px;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 4fr;\n    justify-items: center;\n    grid-column: 2;\n    grid-row: 1 / 3;\n    background-color: rgba(96, 41, 41, 0.6);\n    padding: 32px;\n    padding-top: 50px;\n    border-radius: 25px;\n    \n}\n\n.home2 * {\n    color: azure;\n}\n\n.home2 h3 {\n    text-align: center;\n    font-size: 22px;\n}\n\n\n\n.frog-icon {\n    display: inline-block;\n    height: 100px;\n    width: max-content;\n}\n\n\n.about-container {\n    /* display: : flex; */\n    justify-content: center;\n    align-items: center;\n    display: none;\n    height: 200px;\n    min-width: 100vh;\n    min-height: 100vh;\n    /* background-color: lightsalmon; */\n}\n\n.about1 {\n    display: grid;\n    padding: 30px 20px;\n    grid-template-columns: 1fr;\n    grid-template-rows: 2fr 1fr;\n    min-height: 65vh;\n    max-width: 85vh;\n    margin-top: -30px;\n    background-color: rgba(96, 41, 41, 0.6);\n    border-radius: 25px;\n}\n\n.about1-top {\n    grid-row: 1 / 2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgb(58, 80, 98);\n}\n\n.about-title {\n    /* height: 15vh; */\n    text-align: center;\n    font-size: 33px;\n    color: blanchedalmond;\n}\n\n.about-para {\n    padding: 20px 25px;\n    font-size: large;\n    line-height: 1.5;\n    color: blanchedalmond;\n}\n"],"sourceRoot":""}]);
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
    aboutTitle.textContent = 'A story Long in the Making'

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


    const aboutPic = new Image();
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
    
   
    // if (hasBeenRun === true) {
    //     clearHome(hasBeenRun);
    // }


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
    const homeTitle = document.createElement('h1');
    homeTitle.textContent = 'Bertie Bott\'s'
    home1.appendChild(homeTitle);

    const homeLogo = new Image();
    homeLogo.src  = _imgs_warlock_png__WEBPACK_IMPORTED_MODULE_1__;
    homeLogo.classList.add('hat-icon')
    homeTitle.appendChild(homeLogo);


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
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");






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

    (0,_about__WEBPACK_IMPORTED_MODULE_2__.aboutPage)();
    pageHolder.appendChild(_about__WEBPACK_IMPORTED_MODULE_2__.aboutContainer);


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

    // const tabs = document.querySelectorAll('navigation-tab')
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
            console.log('homepage');
            _home_js__WEBPACK_IMPORTED_MODULE_1__.homeContainer.style = 'display: grid'
            _about__WEBPACK_IMPORTED_MODULE_2__.aboutContainer.style = 'display: none'
            // pageHolder.removeChild(aboutContainer);
            // pageHolder.appendChild(homeContainer);

            // have to disable the Home Div click
            tabs[0].classList.add('disabled-tab');

        } else if (activeTab === tabs[1]) {
            tabs[0].classList.remove('disabled-tab');
            console.log('About');
            _home_js__WEBPACK_IMPORTED_MODULE_1__.homeContainer.style = 'display: none'
            _about__WEBPACK_IMPORTED_MODULE_2__.aboutContainer.style = 'display: flex'
            // pageHolder.removeChild(homeContainer);
            // pageHolder.appendChild(aboutContainer);
            tabs[1].classList.add('disabled-tab');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFJQUErQztBQUMzRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qiw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLEtBQUssT0FBTyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxTQUFTLEtBQUssWUFBWSxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxnQ0FBZ0Ms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QSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDSDtBQUNpQztBQUNBOzs7QUFHcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGtEQUFRO0FBQ1osMkJBQTJCLG1EQUFhOztBQUV4QyxJQUFJLGlEQUFTO0FBQ2IsMkJBQTJCLGtEQUFjOzs7QUFHekM7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBYTtBQUN6QixZQUFZLGtEQUFjO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFlBQVksbURBQWE7QUFDekIsWUFBWSxrREFBYztBQUMxQjtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7OztBQUdBLENBQUM7Ozs7O0FBS0Q7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1ncy93aXphcmQtYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbmh0bWwsIGJvZHkge1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4jY29udGVudCB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubmF2aWdhdGlvbi1iYXIge1xuICAgIGhlaWdodDogNTVweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzMsIDcyLCA3Mik7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdhcDogMzBweDtcbn1cblxuLm5hdmlnYXRpb24tdGFiIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDQxLCA0MSk7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbn1cblxuLmRpc2FibGVkLXRhYiB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG4uaG9tZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogbWluLXdpZHRoOiAxMDB2aDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgKi9cbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICBtaW4td2lkdGg6IDcwMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmcjtcbiAgICBjb2x1bW4tZ2FwOiAzMHB4O1xuICAgIHBhZGRpbmc6IDEwMHB4IDMwMHB4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn07XG5cbi5ob21lMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbnRlbnQ6ICdGcm9ncyc7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ob21lMSAqIHtcbiAgICBjb2xvcjogcmdiKDIyNCwgMjIzLCAyMjMpO1xufVxuXG4uaG9tZTEgaDEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA2MnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhvbWUtYm94IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XG4gICAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLmhhdC1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDg1cHg7XG4gICAgZmlsdGVyOiBpbnZlcnQoODAlKSBzZXBpYSg0NCUpIHNhdHVyYXRlKDQ1NSUpIGh1ZS1yb3RhdGUoNmRlZykgYnJpZ2h0bmVzcyg5OSUpIGNvbnRyYXN0KDkzJSk7XG4gICAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uaG9tZS1ob29rIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5ob21lLWRlc2NyaXB0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5vcmRlci1idXR0b24ge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDQxLCA0MSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmhvbWUyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgICBncmlkLXJvdzogMSAvIDM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NiwgNDEsIDQxLCAwLjYpO1xuICAgIHBhZGRpbmc6IDMycHg7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBcbn1cblxuLmhvbWUyICoge1xuICAgIGNvbG9yOiBhenVyZTtcbn1cblxuLmhvbWUyIGgzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5cblxuLmZyb2ctaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuXG5cbi5hYm91dC1jb250YWluZXIge1xuICAgIC8qIGRpc3BsYXk6IDogZmxleDsgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBtaW4td2lkdGg6IDEwMHZoO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uOyAqL1xufVxuXG4uYWJvdXQxIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XG4gICAgbWluLWhlaWdodDogNjV2aDtcbiAgICBtYXgtd2lkdGg6IDg1dmg7XG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NiwgNDEsIDQxLCAwLjYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5hYm91dDEtdG9wIHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA4MCwgOTgpO1xufVxuXG4uYWJvdXQtdGl0bGUge1xuICAgIC8qIGhlaWdodDogMTV2aDsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzM3B4O1xuICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcbn1cblxuLmFib3V0LXBhcmEge1xuICAgIHBhZGRpbmc6IDIwcHggMjVweDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLHlEQUFxRDtJQUNyRCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiO3dCQUNvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6QixDQUFBOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsNEZBQTRGO0lBQzVGLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7OztBQUlBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix1Q0FBdUM7SUFDdkMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1ncy93aXphcmQtYmFja2dyb3VuZC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLm5hdmlnYXRpb24tYmFyIHtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzMsIDcyLCA3Mik7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLm5hdmlnYXRpb24tdGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk2LCA0MSwgNDEpO1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG4uZGlzYWJsZWQtdGFiIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmhvbWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogbWluLXdpZHRoOiAxMDB2aDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7ICovXFxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xcbiAgICBtaW4td2lkdGg6IDcwMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnI7XFxuICAgIGNvbHVtbi1nYXA6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwMHB4IDMwMHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufTtcXG5cXG4uaG9tZTEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb250ZW50OiAnRnJvZ3MnO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUxICoge1xcbiAgICBjb2xvcjogcmdiKDIyNCwgMjIzLCAyMjMpO1xcbn1cXG5cXG4uaG9tZTEgaDEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA2MnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ob21lLWJveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgIGhlaWdodDogMTUwcHg7XFxufVxcblxcbi5oYXQtaWNvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHJpZ2h0OiA4NXB4O1xcbiAgICBmaWx0ZXI6IGludmVydCg4MCUpIHNlcGlhKDQ0JSkgc2F0dXJhdGUoNDU1JSkgaHVlLXJvdGF0ZSg2ZGVnKSBicmlnaHRuZXNzKDk5JSkgY29udHJhc3QoOTMlKTtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4uaG9tZS1ob29rIHtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbn1cXG5cXG4uaG9tZS1kZXNjcmlwdCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLm9yZGVyLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDQxLCA0MSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi5ob21lMiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NiwgNDEsIDQxLCAwLjYpO1xcbiAgICBwYWRkaW5nOiAzMnB4O1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgXFxufVxcblxcbi5ob21lMiAqIHtcXG4gICAgY29sb3I6IGF6dXJlO1xcbn1cXG5cXG4uaG9tZTIgaDMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuXFxuXFxuLmZyb2ctaWNvbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG5cXG4uYWJvdXQtY29udGFpbmVyIHtcXG4gICAgLyogZGlzcGxheTogOiBmbGV4OyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgbWluLXdpZHRoOiAxMDB2aDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uOyAqL1xcbn1cXG5cXG4uYWJvdXQxIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcbiAgICBtaW4taGVpZ2h0OiA2NXZoO1xcbiAgICBtYXgtd2lkdGg6IDg1dmg7XFxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk2LCA0MSwgNDEsIDAuNik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi5hYm91dDEtdG9wIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDgwLCA5OCk7XFxufVxcblxcbi5hYm91dC10aXRsZSB7XFxuICAgIC8qIGhlaWdodDogMTV2aDsgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMzcHg7XFxuICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG59XFxuXFxuLmFib3V0LXBhcmEge1xcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuXG5jb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cblxuZXhwb3J0IGNvbnN0IGFib3V0UGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBhYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dC1jb250YWluZXInKTtcbiAgICBjb25zb2xlLmxvZygnQWJvdXQgcGFnZSBpbnNlcnRlZCcpO1xuXG4gICAgLy8gbWFpbiBjb250YWluZXIgZm9yIHRoZSByZXN0IG9mIHRoZSBlbGVtZW50cyBvbiB0aGUgYWJvdXQgcGFnZVxuICAgIGNvbnN0IGFib3V0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0RmFjdG9yeS5hZGRUb0Fib3V0KGFib3V0MSwgJ2Fib3V0MScsIGFib3V0Q29udGFpbmVyKTtcbiAgICBjb25zb2xlLmxvZyhhYm91dDEpO1xuXG4gICAgLy8gY29udGFpbmVyIHRoYXQgY29udGFpbnMgdGhlIHRpdGxlIGFuZCBwYXJhZ3JhcGhcbiAgICBjb25zdCBhYm91dDFUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dEZhY3RvcnkuYWRkVG9BYm91dChhYm91dDFUb3AsICdhYm91dDEtdG9wJywgYWJvdXQxKTtcblxuXG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWJvdXRGYWN0b3J5LmFkZFRvQWJvdXQoYWJvdXRUaXRsZSwgJ2Fib3V0LXRpdGxlJywgYWJvdXQxVG9wKTtcbiAgICBhYm91dFRpdGxlLnRleHRDb250ZW50ID0gJ0Egc3RvcnkgTG9uZyBpbiB0aGUgTWFraW5nJ1xuXG4gICAgY29uc3QgYWJvdXRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0RmFjdG9yeS5hZGRUb0Fib3V0KGFib3V0UGFyYWdyYXBoLCAnYWJvdXQtcGFyYScsIGFib3V0MVRvcClcbiAgICBhYm91dFBhcmFncmFwaC50ZXh0Q29udGVudCA9IGBHcm93aW5nIHVwIGluIGEgc21hbGwgbXVnZ2xlIHRvd24gb2ZmIHRoZSBjb2FzdCBqdXN0IHNoeVxuICAgIG9mIFdleW1vdXRoLCBCZXJ0aWUgQm90dHMgd2FzIGFsd2F5cyBvbmUgb2YgdGhlIHBlY3VsaWFyIHNvcnQuIFdpdGggbm90IG11Y2hcbiAgICB0byBkbyBhcm91bmQgaGlzIGhvbWUsIGhlIHdvdWxkIGNyZWF0ZSBmYW50YXN0aWNhbCBjb25jb3Rpb25zIHVzaW5nIGFsbCBzb3J0c1xuICAgIG9mIHRoaW5ncywgbm90IGV4Y2x1ZGluZyBzZWF3ZWVkLCBzZWFndWxsIGZlYXRoZXJzLCBob3VzZSBkZXRlcmdlbnRzLCBhbmQgbGFtYiBtdWN1cy5cbiAgICBPbmNlIGhlIGRpc2NvdmVyZWQgdGhlIHdvcmxkIG9mIHdpemFkcnkgYW5kIGF0dGVuZGluZyBIb2d3YXJ0cywgaGUgcXVpY2tseVxuICAgIHJvc2UgdGhyb3VnaCB0aGUgcmFua3MgdG8gYmVjb21lIEh1ZmZsZXB1ZmYncyBoZWFkIGNoZWYuIDMwIHllYXJzIGxhdGVyLCBCZXJ0aWVcbiAgICBpcyBzdGlsbCB1c2luZyBoaXMgY3JlYXRpdmVuc3MgYW5kIHBhc3Npb24gdG8gcnVuIGhpcyBvd24gcmVzdGF1cmFudCBhbmQgY2FuZHkgc2hvcCwgXG4gICAgJ0JlcnRpZSdzIEJvdHQncywgb25lIG9mIHRoZSBtb3N0IHBvcHVsYXIgYW5kIGV4dHJhdmFnZW50IGJyYW5kcyBpbiB0aGUgV2l6YXJkaW5nIFdvcmxkYFxuXG5cbiAgICBjb25zdCBhYm91dFBpYyA9IG5ldyBJbWFnZSgpO1xufVxuXG5cbi8vIGVsZW1lbnROYW1lICA9IHJlZmVyZW5jZSBuYW1lXG4vLyBlbGVtZW50ID0gdHlwZSBvZiBIVE1MIGVsZW1lbnQgd2Ugd2FudCB0byBjcmVhdGVcbi8vIGNsYXNzTmFtZSA9IG5hbWUgb2YgY2xhc3Mgd2Ugd2FudCB0byBhc3NpZ25cbi8vIGZhdGhlckVsZW1lbnQgPSBuYW1lIG9mIGNvbnRhaW5lciB3ZSB3YW50IHRvIGFwcGVuZCB0b1xuY29uc3QgYWJvdXRGYWN0b3J5ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGZ1bmN0aW9uIGFkZFRvQWJvdXQoZWxlbWVudE5hbWUsIGNsYXNzTmFtZSwgZmF0aGVyRWxlbWVudCApIHtcbiAgICAgICAgZWxlbWVudE5hbWUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICBmYXRoZXJFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnROYW1lKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50TmFtZSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50TmFtZTtcbiAgICB9O1xuICAgIHJldHVybiB7YWRkVG9BYm91dH07XG59KSgpO1xuXG5cblxuZXhwb3J0IHthYm91dENvbnRhaW5lcn07XG4iLCJcblxuaW1wb3J0IGZyb2cgZnJvbSAnLi9pbWdzL1RoZUZyb2dDaG9pckhNLnBuZyc7XG5cbmltcG9ydCBIYXQgZnJvbSAnLi9pbWdzL3dhcmxvY2sucG5nJztcblxuXG5cbmNvbnN0IGhvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuZXhwb3J0IGNvbnN0IGhvbWVQYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIG5lZWQgdG8gc3RhcnQgd2l0aCBhbiBvdXRlciBjb250YWluZXIgLi4gdGhpcyBvdXRlclxuICAgIC8vIGNvbnRhaW5lciB3aWxsIGJlY29tZSB0aGUgY2hpbGQgY29udGFpbmVyIG9mIHRoZVxuICAgIC8vIGNvbnRlbnQgZGl2LCB0aHVzIG1ha2luZyBpdCB2aXNpYmxlIG9uIHRoZSBwYWdlXG5cbiAgIFxuICAgIGNvbnN0IGhvbWVEaXZOYW1lcyA9IFsnaG9tZTEnLCAnaG9tZTInXTtcbiAgICBsZXQgaG9tZURpdnMgPSBbXTtcbiAgICBcbiAgIFxuICAgIC8vIGlmIChoYXNCZWVuUnVuID09PSB0cnVlKSB7XG4gICAgLy8gICAgIGNsZWFySG9tZShoYXNCZWVuUnVuKTtcbiAgICAvLyB9XG5cblxuICAgIC8vIHRoaXMgd29uJ3QgYmUgYXBwZW5kZWQgdG8gdGhlIHRoZSBcImNvbnRlbnRcIiBkaXYgdW50aWwgaXQgaXNcbiAgICAvLyBjYWxsZWQgdXBvbiBpbiB0aGUgaW5kZXguanMgZmlsZVxuXG4gICAgaG9tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRhaW5lcicpO1xuICAgXG5cbiAgICAvLyBjcmVhdGUgMyBkaXYgY29udGFpbmVycyB3aXRoaW4gdGhlIGhvbWVDb250YWluZXJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvbWVEaXYuY2xhc3NMaXN0LmFkZChob21lRGl2TmFtZXNbaV0pO1xuICAgICAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVEaXYpO1xuICAgICAgICBob21lRGl2cy5wdXNoKGhvbWVEaXYpO1xuICAgIH07XG4gICAgbGV0IGhvbWUxID0gaG9tZURpdnNbMF07XG4gICAgbGV0IGhvbWUyID0gaG9tZURpdnNbMV07XG5cblxuICAgIC8vIHN0eWxlIGVhY2ggaG9tZURpdiBhY2NvcmRpbmdseVxuICAgIC8vIGhvbWUxOlxuICAgIHN0eWxlSG9tZTEoaG9tZTEpO1xuICAgIHN0eWxlSG9tZTIoaG9tZTIpO1xuXG5cbiAgICBjb25zb2xlLmxvZygnaG9tZXBhZ2UgaXMgbGlua2VkJyk7XG5cbn1cblxuXG5cbmZ1bmN0aW9uIHN0eWxlSG9tZTEgKGhvbWUxKSB7XG4gICAgY29uc3QgaG9tZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBob21lVGl0bGUudGV4dENvbnRlbnQgPSAnQmVydGllIEJvdHRcXCdzJ1xuICAgIGhvbWUxLmFwcGVuZENoaWxkKGhvbWVUaXRsZSk7XG5cbiAgICBjb25zdCBob21lTG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGhvbWVMb2dvLnNyYyAgPSBIYXQ7XG4gICAgaG9tZUxvZ28uY2xhc3NMaXN0LmFkZCgnaGF0LWljb24nKVxuICAgIGhvbWVUaXRsZS5hcHBlbmRDaGlsZChob21lTG9nbyk7XG5cblxuICAgIGNvbnN0IGhvbWVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lQm94LmNsYXNzTGlzdC5hZGQoJ2hvbWUtYm94Jyk7XG4gICAgaG9tZTEuYXBwZW5kQ2hpbGQoaG9tZUJveCk7XG5cbiAgICBjb25zdCBob21lSG9vayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaG9tZUhvb2sudGV4dENvbnRlbnQgPSAnQWRkIGEgYml0IG9mIE1hZ2ljIHRvIHlvdXIgZXZlbmluZyAuLi4nXG4gICAgaG9tZUhvb2suY2xhc3NMaXN0LmFkZCgnaG9tZS1ob29rJylcbiAgICBob21lQm94LmFwcGVuZENoaWxkKGhvbWVIb29rKTtcblxuICAgIGNvbnN0IGhvbWVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaG9tZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0NvbWUgZGluZSB3aXRoIHlvdXIgZmVsbG93IHdpdGNoZXMgYW5kIHdpemFyZHMgYXQgb3VyIDUgc3RhciBlc3RhYmxpc2htZW50IG9uIHRoZSBjb3JuZXIgb2YgQ3Jlc2NlbnQgYW5kIERvYmJ5IGluIHVwcGVyIERpYWdvbiBBbGxleSc7XG4gICAgaG9tZURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2hvbWUtZGVzY3JpcHQnKVxuICAgIGhvbWVCb3guYXBwZW5kQ2hpbGQoaG9tZURlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IG9yZGVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgb3JkZXJCdXR0b24udGV4dENvbnRlbnQgPSAnT3JkZXIgT25saW5lJztcbiAgICBvcmRlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdvcmRlci1idXR0b24nKTtcbiAgICBob21lQm94LmFwcGVuZENoaWxkKG9yZGVyQnV0dG9uKTtcblxufVxuXG5mdW5jdGlvbiBzdHlsZUhvbWUyIChob21lMikge1xuICAgIGNvbnN0IGZyb2dJY29uID0gbmV3IEltYWdlKCk7XG4gICAgZnJvZ0ljb24uc3JjID0gZnJvZztcbiAgICBmcm9nSWNvbi5jbGFzc0xpc3QuYWRkKCdmcm9nLWljb24nKVxuICAgIGhvbWUyLmFwcGVuZENoaWxkKGZyb2dJY29uKTtcblxuICAgIGNvbnN0IGZyb2dUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZnJvZ1RpdGxlLnRleHRDb250ZW50ID0gJ0xpdmUgcGVyZm9ybWFuY2VzIGZyb20gRnJvZyBDaG9pciBldmVyeSBGcmlkYXkgYXQgN3BtJztcbiAgICAvLyBmcm9nVGl0bGUuY2xhc3NMaXN0LmFkZCgnZnJvZy10aXRsZScpO1xuICAgIGhvbWUyLmFwcGVuZENoaWxkKGZyb2dUaXRsZSk7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBjbGVhckhvbWUgKGhhc0JlZW5SdW4pIHtcbi8vICAgICBjb25zb2xlLmxvZygnY2xlYXJlZCcpO1xuLy8gICAgIGhhc0JlZW5SdW4gPSB0cnVlO1xuLy8gICAgIGNvbnNvbGUubG9nKGhhc0JlZW5SdW4pO1xuLy8gfVxuXG5leHBvcnQge2hvbWVDb250YWluZXJ9O1xuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vaG9tZS5qcyc7XG5pbXBvcnQgeyBob21lUGFnZSwgaG9tZUNvbnRhaW5lciB9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgeyBhYm91dFBhZ2UsIGFib3V0Q29udGFpbmVyIH0gZnJvbSAnLi9hYm91dCc7XG5cblxuY29uc29sZS5sb2coJ3Rlc3QnKVxuXG4vLyBvYmplY3QvZmFjdG9yeSBmdW5jdGlvbiB0aGF0IHdpbGwgY29ubmVjdCBhbGwgb2YgdGhlIHdlYmlzdGUgcGFnZXNcbi8vIHRvZ2V0aGVyLiBIZXJlIGlzIHdoZXJlIHRoZSBtYWluIGZ1bmN0aW9uYWxpdHkgd2lsbCBiZSwgd2hlcmVcbi8vIHRoZSBjb3JyZWN0IHBhZ2Ugd2lsbCByZW5kZXIgYW5kIGJlIHZpc2libGUgYmFzZWQgb24gd2hhdCB0YWJzXG4vLyB0aGUgdXNlciBjbGlja3MgYXQgdGhlIHRvcFxuXG5cbi8vIGNyZWF0ZSB0aGUgbWFpbiB3ZWJzaXRlIGJhciBhdCB0aGUgdG9wXG5jb25zdCBzaXRlTmF2aWdhdG9yID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIGNvbnN0IHBhZ2VIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnNvbGUubG9nKHBhZ2VIb2xkZXIpO1xuXG4gICAgLy8gY3JlYXRlIHRoZSBtYWluIHdlYnNpdGUgYmFyIGF0IHRoZSB0b3BcbiAgICBjb25zdCBuYXZpZ2F0aW9uQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2aWdhdGlvbkJhci50ZXh0Q29udGVudCA9ICdCZXJ0aWUgQm90dFxcJ3MnO1xuICAgIG5hdmlnYXRpb25CYXIuY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbi1iYXInKTtcblxuICAgIC8vIGFkZHMgdGhlIG5hdmlnYXRpb24gYmFyIHRvIHRoZSB0b3BcbiAgICBwYWdlSG9sZGVyLmFwcGVuZENoaWxkKG5hdmlnYXRpb25CYXIpO1xuXG4gICAgLy8gb3BlbnMgdXAgdG90IGhlIGRlZmF1bHQgaG9tZSBwYWdlXG4gICAgaG9tZVBhZ2UoKTtcbiAgICBwYWdlSG9sZGVyLmFwcGVuZENoaWxkKGhvbWVDb250YWluZXIpO1xuXG4gICAgYWJvdXRQYWdlKCk7XG4gICAgcGFnZUhvbGRlci5hcHBlbmRDaGlsZChhYm91dENvbnRhaW5lcik7XG5cblxuICAgIC8vIGFycmF5IGNvbnRhaW5pbmcgdGhlIHRhYiBuYW1lc1xuICAgIGNvbnN0IHRhYk5hbWVzID0gWydIb21lJywgJ0Fib3V0JywgJ01lbnUnLCAnUmVzZXJ2YXRpb25zJ11cbiAgICBjb25zdCB0YWJzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRpb24tdGFiJyk7XG4gICAgICAgIHRhYi50ZXh0Q29udGVudCA9IHRhYk5hbWVzW2ldO1xuICAgICAgICB0YWJzLnB1c2godGFiKTtcbiAgICAgICAgbmF2aWdhdGlvbkJhci5hcHBlbmRDaGlsZCh0YWIpO1xuICAgIH1cblxuICAgIGxldCBhY3RpdmVUYWIgPSB0YWJzWzBdO1xuICAgIHRhYnNbMF0uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQtdGFiJyk7XG4gICAgY29uc29sZS5sb2coYWN0aXZlVGFiKTtcblxuICAgIC8vIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCduYXZpZ2F0aW9uLXRhYicpXG4gICAgY29uc29sZS5sb2codGFicylcbiAgICB0YWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhYik7XG4gICAgICAgICAgICBhY3RpdmVUYWIgPSB0YWI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVUYWIpO1xuICAgICAgICAgICAgc3dpdGNoUGFnZShhY3RpdmVUYWIpO1xuICAgIFxuICAgICAgICB9KTtcbiAgIFxuICAgIH0pO1xuICAgXG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hQYWdlKGFjdGl2ZVRhYikge1xuICAgICAgICBpZiAoYWN0aXZlVGFiID09PSB0YWJzWzBdKSB7XG4gICAgICAgICAgICB0YWJzWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkLXRhYicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hvbWVwYWdlJyk7XG4gICAgICAgICAgICBob21lQ29udGFpbmVyLnN0eWxlID0gJ2Rpc3BsYXk6IGdyaWQnXG4gICAgICAgICAgICBhYm91dENvbnRhaW5lci5zdHlsZSA9ICdkaXNwbGF5OiBub25lJ1xuICAgICAgICAgICAgLy8gcGFnZUhvbGRlci5yZW1vdmVDaGlsZChhYm91dENvbnRhaW5lcik7XG4gICAgICAgICAgICAvLyBwYWdlSG9sZGVyLmFwcGVuZENoaWxkKGhvbWVDb250YWluZXIpO1xuXG4gICAgICAgICAgICAvLyBoYXZlIHRvIGRpc2FibGUgdGhlIEhvbWUgRGl2IGNsaWNrXG4gICAgICAgICAgICB0YWJzWzBdLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkLXRhYicpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVGFiID09PSB0YWJzWzFdKSB7XG4gICAgICAgICAgICB0YWJzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkLXRhYicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Fib3V0Jyk7XG4gICAgICAgICAgICBob21lQ29udGFpbmVyLnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnXG4gICAgICAgICAgICBhYm91dENvbnRhaW5lci5zdHlsZSA9ICdkaXNwbGF5OiBmbGV4J1xuICAgICAgICAgICAgLy8gcGFnZUhvbGRlci5yZW1vdmVDaGlsZChob21lQ29udGFpbmVyKTtcbiAgICAgICAgICAgIC8vIHBhZ2VIb2xkZXIuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpO1xuICAgICAgICAgICAgdGFic1sxXS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZC10YWInKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvZXNudCBleGlzdCcpXG4gICAgICAgIH1cblxuICAgIH1cblxuXG59KSgpO1xuXG5cblxuXG4vLyBhZGQgYWRkRXZlbnRMaXN0ZW5lcnMgdG8gdGFiIGxpbmtzIGF0IHRoZSB0b3Agb2YgcGFnZSwgc28gdGhhdCB3aGVuIHRoZXlcbi8vYXJlIGNsaWNrZWQsIHRoZSBjb3JyZWN0IHBhZ2UgaXMgbG9hZGVkIGluIHRocm91Z2ggdGhlIFwiY29udGVudFwiIGRpdi5cblxuLy8gd2hlbiBvbmUgcGFnZSBpcyBzZWxlY3RlZCwgdGhlIG90aGVycyBzaG91bGQgYmUgc2V0IHRvXG4vLyAnZGlzcGxheTogbm9uZSdcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9