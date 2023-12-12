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
    justify-content: center;
    width: 90px;
    height: 100%;
    background-color: rgb(96, 41, 41);
    padding: 0px 10px;
    text-align: center;
    font-weight: bold;
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
    position: relative;
    display: none;
    /* background-color: lightsalmon; */
    min-height: 100vh;
    min-width: 100vh;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
    padding: 0px 350px; 
    padding-top: 120px;
    
}

.menu-title {
    position: absolute;
    left: 260px;
    top: 50px;
    color: blanchedalmond;
}

.menu1 {
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: stretch;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    background-color: rgba(96, 41, 41, 0.7);
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 30px;
    border-radius: 25px;
}

.menu-card {
    /* width: 620px;
    height: 280px; */
    width: 85vh;
    height: 230px;
    display:  grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    background-color: rgb(58, 80, 98, 0.8);
    overflow: hidden;
    border-radius: 25px;
    padding: 25px;
}

.menu-image {
    max-height: 215px;
    max-width: 329px;
    align-self: center;
    border-radius: 25px;
    box-shadow: -3px 10px 17px -1px black;
    
}

.menu-item-txt {
    /* display: flex; */
    flex-direction: column;
    justify-content: start;
    color: rgb(184, 154, 102);
    font-size: 18px;
}

.menu-item-title {
    margin-bottom: 15px;
    color: rgb(202, 185, 161);
    
}



.menu2 {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    width: 30vh;
    height: 400px;
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    background-color: rgb(221, 214, 205, 0.7);
    border-radius: 25px;
}

.menu2-container {
    display: flex;
    flex-direction: column;
}

.menu2-title {
    border-bottom: 2px inset rgb(38, 37, 37);
}

.menu2-hour {
    font-size: 18px;
    padding-bottom: 15px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["html {\n    min-height: 100%;\n}\n\nhtml, body {\n    margin: 0px;\n}\n\n#content {\n    min-height: 100vh;\n    width: 100%;\n    /* background-color: red; */\n    background-image: url('./imgs/wizard-background.jpg');\n    background-size: cover;\n}\n\n.navigation-bar {\n    height: 55px;\n    /* background-color: rgb(73, 72, 72); */\n    display: flex;\n    justify-content: start;\n    gap: 30px;\n}\n\n.navigation-tab {\n    display: flex;\n    justify-content: center;\n    width: 90px;\n    height: 100%;\n    background-color: rgb(96, 41, 41);\n    padding: 0px 10px;\n    text-align: center;\n    font-weight: bold;\n    align-items: center;\n    color: antiquewhite;\n}\n\n.disabled-tab {\n    pointer-events: none;\n    opacity: 0.7;\n}\n\n.home-container {\n    display: grid;\n    /* min-width: 100vh;\n    min-height: 100vh; */\n    min-height: 600px;\n    min-width: 700px;\n    grid-template-columns: 2fr 2fr;\n    column-gap: 30px;\n    padding: 100px 300px;\n    justify-items: center;\n};\n\n.home1 {\n    display: flex;\n    flex-direction: column;\n    content: 'Frogs';\n    grid-column: 1 / 2;\n    grid-row: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.home1 * {\n    color: rgb(224, 223, 223);\n}\n\n.home-title-container {\n    /* position: relative; */\n    display: flex;\n    min-width: 485px;\n    justify-content: center;\n    align-items: center;\n    /* gap: 20px; */\n}\n\n.home1 h1 {\n    display: flex;\n    justify-content: center;\n    font-size: 62px;\n}\n\n.home-box {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    height: 150px;\n}\n\n.hat-icon {\n    /* position: absolute;\n    top: 30px;\n    right: 85px; */\n    filter: invert(80%) sepia(44%) saturate(455%) hue-rotate(6deg) brightness(99%) contrast(93%);\n    height: 100px;\n}\n\n.home-hook {\n    font-size: 35px;\n}\n\n.home-descript {\n    font-size: 20px;\n}\n\n.order-button {\n    margin-top: 50px;\n    width: 200px;\n    height: auto;\n    padding: 20px;\n    text-align: center;\n    font-weight: bold;\n    font-size: 25px;\n    color: antiquewhite;\n    background-color: rgb(96, 41, 41);\n    border-radius: 25px;\n}\n\n.home2 {\n    display: grid;\n    height: 400px;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 4fr;\n    justify-items: center;\n    grid-column: 2;\n    grid-row: 1 / 3;\n    background-color: rgba(96, 41, 41, 0.6);\n    padding: 32px;\n    padding-top: 50px;\n    border-radius: 25px;\n    \n}\n\n.home2 * {\n    color: azure;\n}\n\n.home2 h3 {\n    text-align: center;\n    font-size: 22px;\n}\n\n\n\n.frog-icon {\n    display: inline-block;\n    height: 100px;\n    width: max-content;\n}\n\n\n.about-container {\n    /* display: : flex; */\n    justify-content: center;\n    align-items: center;\n    display: none;\n    height: 200px;\n    min-width: 100vh;\n    min-height: 100vh;\n    /* background-color: lightsalmon; */\n}\n\n.about1 {\n    display: grid;\n    padding: 30px 20px;\n    grid-template-columns: 1fr;\n    grid-template-rows: 2fr 1.5fr;\n    min-height: 65vh;\n    max-width: 85vh;\n    margin-top: -30px;\n    background-color: rgba(96, 41, 41, 0.7);\n    border-radius: 25px;\n}\n\n.about1-top {\n    grid-row: 1 / 2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* background-color: rgb(58, 80, 98); */\n}\n\n.about-title {\n    /* height: 15vh; */\n    text-align: center;\n    font-size: 33px;\n    color: blanchedalmond;\n}\n\n.about-para {\n    padding: 20px 25px;\n    font-size: large;\n    line-height: 1.5;\n    color: blanchedalmond;\n}\n\n.about1-bottom {\n    grid-row: 2 / 3;\n    display: flex;\n    justify-content: center;\n    /* border: 2px solid black; */\n}\n\n.bertie-pic {\n    height: 170px;\n    border-radius: 25px;\n    border: 30px solid rgb(58, 80, 98);\n}\n\n\n/* Menu page */\n\n.menu-container {\n    /* display: grid; */\n    position: relative;\n    display: none;\n    /* background-color: lightsalmon; */\n    min-height: 100vh;\n    min-width: 100vh;\n    grid-template-columns: 3fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 30px;\n    padding: 0px 350px; \n    padding-top: 120px;\n    \n}\n\n.menu-title {\n    position: absolute;\n    left: 260px;\n    top: 50px;\n    color: blanchedalmond;\n}\n\n.menu1 {\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n    justify-content: center;\n    align-items: stretch;\n    grid-column: 1 / 2;\n    grid-row: 1 / 3;\n    background-color: rgba(96, 41, 41, 0.7);\n    padding-top: 30px;\n    padding-bottom: 30px;\n    padding-left: 30px;\n    border-radius: 25px;\n}\n\n.menu-card {\n    /* width: 620px;\n    height: 280px; */\n    width: 85vh;\n    height: 230px;\n    display:  grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    background-color: rgb(58, 80, 98, 0.8);\n    overflow: hidden;\n    border-radius: 25px;\n    padding: 25px;\n}\n\n.menu-image {\n    max-height: 215px;\n    max-width: 329px;\n    align-self: center;\n    border-radius: 25px;\n    box-shadow: -3px 10px 17px -1px black;\n    \n}\n\n.menu-item-txt {\n    /* display: flex; */\n    flex-direction: column;\n    justify-content: start;\n    color: rgb(184, 154, 102);\n    font-size: 18px;\n}\n\n.menu-item-title {\n    margin-bottom: 15px;\n    color: rgb(202, 185, 161);\n    \n}\n\n\n\n.menu2 {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    width: 30vh;\n    height: 400px;\n    padding-left: 30px;\n    padding-right: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    background-color: rgb(221, 214, 205, 0.7);\n    border-radius: 25px;\n}\n\n.menu2-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.menu2-title {\n    border-bottom: 2px inset rgb(38, 37, 37);\n}\n\n.menu2-hour {\n    font-size: 18px;\n    padding-bottom: 15px;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _imgs_Cauldron_Cakes_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/Cauldron-Cakes.jpg */ "./src/imgs/Cauldron-Cakes.jpg");
/* harmony import */ var _imgs_snake_filet_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/snake-filet.jpg */ "./src/imgs/snake-filet.jpg");
/* harmony import */ var _imgs_beans_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/beans.jpg */ "./src/imgs/beans.jpg");
/* harmony import */ var _imgs_shepherd_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/shepherd.jpg */ "./src/imgs/shepherd.jpg");
/* harmony import */ var _imgs_Butter_beer_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/Butter-beer.jpg */ "./src/imgs/Butter-beer.jpg");







// plan isto create two main containers here. One will be much
// bigger and contain the scrollable menu. The other will be
// a smaller box that lists the Hours of the restaurant
const menuContainer = document.createElement('div');


const menuPage = function () {
    menuContainer.classList.add('menu-container');
    console.log('menu page linked');

    // array for the menu items
    // const menuItems = ['Carl\'s Cauldron Cakes', 'Fenny Snake Filet', 
    // 'Bertie Bott\'s Every Flavour Beans', 'Shepard Pie', 'ButterBeer']

    const menuImages = [_imgs_Cauldron_Cakes_jpg__WEBPACK_IMPORTED_MODULE_0__, _imgs_snake_filet_jpg__WEBPACK_IMPORTED_MODULE_1__, _imgs_beans_jpg__WEBPACK_IMPORTED_MODULE_2__, _imgs_shepherd_jpg__WEBPACK_IMPORTED_MODULE_3__, _imgs_Butter_beer_jpg__WEBPACK_IMPORTED_MODULE_4__];

    // where card memory will be stored once the for loop is finished
    const menuCardTexts = [];

    const menuObjects = [];


    //create 2main containers for the page
    const menu1 = document.createElement('div')
    menuFactory.addToMenu(menu1, 'menu1', menuContainer);

    const menu2 = document.createElement('div')
    menuFactory.addToMenu(menu2, 'menu2', menuContainer);

    const menu2Title = document.createElement('h1');
    menuFactory.addToMenu(menu2Title, 'menu2-title', menu2);
    menu2Title.textContent = 'Hours';

    const menu2Container = document.createElement('div');
    menuFactory.addToMenu(menu2Container, 'menu2-container', menu2);

    for (let i = 0; i < 6; i++) {
        const menu2Hour = document.createElement('div')
        menuFactory.addToMenu(menu2Hour, 'menu2-hour', menu2Container);

        if (i === 0) {
            menu2Hour.textContent = 'Monday: 2:00 - 9:00pm'
        } else if (i === 1) {
            menu2Hour.textContent = 'Tuesday: 12:00 - 9:00pm'
        } else if (i === 2) {
            menu2Hour.textContent = 'Wednesday: 12:00 - 9:00pm'
        } else if (i === 3) {
            menu2Hour.textContent = 'Thursday: 12:00 - 9:00pm'
        } else if (i === 4) {
            menu2Hour.textContent = 'Friday: 12:00pm - 12:00am'
        } else if (i === 5) {
            menu2Hour.textContent = 'Saturday: 12:00pm - 12:00am'
        } else if (i === 6) {
            menu2Hour.textContent = 'Sunday: 12:00pm - 6:00pm'
        }
    };


    //title creation
    const menuTitle = document.createElement('h1');
    menuFactory.addToMenu(menuTitle, 'menu-title', menuContainer);
    menuTitle.textContent = 'Take a Gander... ';


    // menu items: will iterate through an array to create a 
    // number of menu Items ... images will be inserted based on what
    // the image array contains

    // maybe give each div an ID based on the array item ... to be 
    // able to insert custom menu item text later
    for (let i = 0; i < menuImages.length; i++) {
        const menuCard = document.createElement('div');
        menuFactory.addToMenu(menuCard, 'menu-card', menu1);

        // create menuImage
        const menuImage = new Image();
        menuImage.src = menuImages[i];
        menuFactory.addToMenu(menuImage, 'menu-image', menuCard);

        // create menuItemText div
        const menuItemText = document.createElement('div')
        menuFactory.addToMenu(menuItemText, 'menu-item-txt', menuCard);

        // push to array so it can individually style later
        menuCardTexts.push(menuItemText);
    };


    for (let i = 0; i < menuCardTexts.length; i++) {
        const menuItemTitle = document.createElement('h1');
        menuFactory.addToMenu(menuItemTitle, 'menu-item-title', menuCardTexts[i]);

        const menuItemWords = document.createElement('p');
        menuFactory.addToMenu(menuItemWords, 'menu-item-words', menuCardTexts[i]);

        const menuObject = {
            foodTitle: '',
            description: ''
        };
        menuObjects.push(menuObject);

        if (i === 0) {
             // assign values to the titles and texts
            menuObject.foodTitle = `Carl's Cauldron Cakes` + `   ` + `$17.99`;
            menuObject.description = `These famous cakes will make your wand tingle
            with their swarmy and cream-of-toad filling surronded by a warm crust of 
            bread crumbs and figgleroot.`;

        } else if (i === 1) {
            menuObject.foodTitle = `Fenny Snake Filet` + `   ` + `$39.00`;
            menuObject.description = `We acquire our Fennies amongst the highest 
            peaks of the Highlands near Hogwarts, making this steak absolutley top
            of the line`;

        } else if (i === 2) {
            menuObject.foodTitle = `Bertie Bott's Every Flavor Beans` + `   ` + `$7.99`;
            menuObject.description = `A classic that Wizards and Witches have enjoyed all
            over the world for decades. Pick a bean at your own risk and hope you're not
            confusing Black Licorice with Ash!!`;
        } else if (i === 3) {
            menuObject.foodTitle = `Shepherd's Pie` + `   ` + `$15.99`;
            menuObject.description = `Bertie's homemade Shepherd's Pie was selected in 2020
            as one of the Wizarding World's most "hidden and underated pies" by the well known
            critic Stanly Skimweed. Come and see for yourself!`;
        } else if (i === 4) {
            menuObject.foodTitle = `ButterBeer     $4.99`;
            menuObject.description = `If you're feeling a little knackered from all that
            spell casting and then some, an ice cold, gurgling, and creamy ButterBeer
            is the way to go!`;
        };

        menuItemTitle.textContent = menuObject.foodTitle;
        menuItemWords.textContent = menuObject.description;
        console.log( menuItemTitle);
    }
    
    console.log(menuObjects);

    // // assign values to the titles and texts
    // menuObjects[0].foodTitle = 'Carl\'s Cauldron Cakes    $17.99';
    // menuObjects[0].description = `These famous cakes will make your wand tingle
    // with their swarmy and cream-of-toad filling surronded by a warm crust of 
    // bread crumbs and figgleroot.`;

    // // menuCardTexts[0].menuItemTitle.textContent = menuObjects[0].foodTitle;
    // console.log( menuCardTexts[0].menuItemTitle);



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

/***/ "./src/imgs/Butter-beer.jpg":
/*!**********************************!*\
  !*** ./src/imgs/Butter-beer.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99e0130b679902afb990.jpg";

/***/ }),

/***/ "./src/imgs/Cauldron-Cakes.jpg":
/*!*************************************!*\
  !*** ./src/imgs/Cauldron-Cakes.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e2447f06d4a6832409c.jpg";

/***/ }),

/***/ "./src/imgs/TheFrogChoirHM.png":
/*!*************************************!*\
  !*** ./src/imgs/TheFrogChoirHM.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6dc6ee570f7cca6f07f7.png";

/***/ }),

/***/ "./src/imgs/beans.jpg":
/*!****************************!*\
  !*** ./src/imgs/beans.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec326ab177c4ec0e4954.jpg";

/***/ }),

/***/ "./src/imgs/shepherd.jpg":
/*!*******************************!*\
  !*** ./src/imgs/shepherd.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7692e2f1fc77769840ba.jpg";

/***/ }),

/***/ "./src/imgs/snake-filet.jpg":
/*!**********************************!*\
  !*** ./src/imgs/snake-filet.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f27ddb0ea146f0512e1a.jpg";

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
            

            // have to disable the Home Div click
            tabs[0].classList.add('disabled-tab');

        } else if (activeTab === tabs[1]) {
            tabs[0].classList.remove('disabled-tab');
            tabs[2].classList.remove('disabled-tab');
            console.log('About');
            _home_js__WEBPACK_IMPORTED_MODULE_1__.homeContainer.style = 'display: none'
            _about_js__WEBPACK_IMPORTED_MODULE_2__.aboutContainer.style = 'display: flex'
            _menu_js__WEBPACK_IMPORTED_MODULE_3__.menuContainer.style = 'display: none'


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxLQUFLLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLE1BQU0sTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFNBQVMsS0FBSyxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBYTtBQUN6QixZQUFZLHFEQUFjO0FBQzFCLFlBQVksbURBQWE7QUFDekI7O0FBRUE7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBYTtBQUN6QixZQUFZLHFEQUFjO0FBQzFCLFlBQVksbURBQWE7OztBQUd6Qjs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFlBQVksbURBQWEsd0JBQXdCO0FBQ2pELFlBQVksbURBQWE7QUFDekIsWUFBWSxxREFBYzs7QUFFMUI7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7OztBQUdBLENBQUM7Ozs7O0FBS0Q7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1ncy93aXphcmQtYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbmh0bWwsIGJvZHkge1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4jY29udGVudCB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubmF2aWdhdGlvbi1iYXIge1xuICAgIGhlaWdodDogNTVweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzMsIDcyLCA3Mik7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdhcDogMzBweDtcbn1cblxuLm5hdmlnYXRpb24tdGFiIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDQxLCA0MSk7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbn1cblxuLmRpc2FibGVkLXRhYiB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG4uaG9tZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogbWluLXdpZHRoOiAxMDB2aDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgKi9cbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICBtaW4td2lkdGg6IDcwMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmcjtcbiAgICBjb2x1bW4tZ2FwOiAzMHB4O1xuICAgIHBhZGRpbmc6IDEwMHB4IDMwMHB4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn07XG5cbi5ob21lMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbnRlbnQ6ICdGcm9ncyc7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ob21lMSAqIHtcbiAgICBjb2xvcjogcmdiKDIyNCwgMjIzLCAyMjMpO1xufVxuXG4uaG9tZS10aXRsZS1jb250YWluZXIge1xuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi13aWR0aDogNDg1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBnYXA6IDIwcHg7ICovXG59XG5cbi5ob21lMSBoMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDYycHg7XG59XG5cbi5ob21lLWJveCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xuICAgIGhlaWdodDogMTUwcHg7XG59XG5cbi5oYXQtaWNvbiB7XG4gICAgLyogcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzBweDtcbiAgICByaWdodDogODVweDsgKi9cbiAgICBmaWx0ZXI6IGludmVydCg4MCUpIHNlcGlhKDQ0JSkgc2F0dXJhdGUoNDU1JSkgaHVlLXJvdGF0ZSg2ZGVnKSBicmlnaHRuZXNzKDk5JSkgY29udHJhc3QoOTMlKTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uaG9tZS1ob29rIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5ob21lLWRlc2NyaXB0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5vcmRlci1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDQxLCA0MSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmhvbWUyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgICBncmlkLXJvdzogMSAvIDM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NiwgNDEsIDQxLCAwLjYpO1xuICAgIHBhZGRpbmc6IDMycHg7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBcbn1cblxuLmhvbWUyICoge1xuICAgIGNvbG9yOiBhenVyZTtcbn1cblxuLmhvbWUyIGgzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5cblxuLmZyb2ctaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuXG5cbi5hYm91dC1jb250YWluZXIge1xuICAgIC8qIGRpc3BsYXk6IDogZmxleDsgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBtaW4td2lkdGg6IDEwMHZoO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uOyAqL1xufVxuXG4uYWJvdXQxIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxLjVmcjtcbiAgICBtaW4taGVpZ2h0OiA2NXZoO1xuICAgIG1heC13aWR0aDogODV2aDtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk2LCA0MSwgNDEsIDAuNyk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmFib3V0MS10b3Age1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDgwLCA5OCk7ICovXG59XG5cbi5hYm91dC10aXRsZSB7XG4gICAgLyogaGVpZ2h0OiAxNXZoOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMzcHg7XG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xufVxuXG4uYWJvdXQtcGFyYSB7XG4gICAgcGFkZGluZzogMjBweCAyNXB4O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XG59XG5cbi5hYm91dDEtYm90dG9tIHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cbn1cblxuLmJlcnRpZS1waWMge1xuICAgIGhlaWdodDogMTcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3JkZXI6IDMwcHggc29saWQgcmdiKDU4LCA4MCwgOTgpO1xufVxuXG5cbi8qIE1lbnUgcGFnZSAqL1xuXG4ubWVudS1jb250YWluZXIge1xuICAgIC8qIGRpc3BsYXk6IGdyaWQ7ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247ICovXG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWluLXdpZHRoOiAxMDB2aDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIGdhcDogMzBweDtcbiAgICBwYWRkaW5nOiAwcHggMzUwcHg7IFxuICAgIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgICBcbn1cblxuLm1lbnUtdGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyNjBweDtcbiAgICB0b3A6IDUwcHg7XG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xufVxuXG4ubWVudTEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDQwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAxIC8gMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk2LCA0MSwgNDEsIDAuNyk7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5tZW51LWNhcmQge1xuICAgIC8qIHdpZHRoOiA2MjBweDtcbiAgICBoZWlnaHQ6IDI4MHB4OyAqL1xuICAgIHdpZHRoOiA4NXZoO1xuICAgIGhlaWdodDogMjMwcHg7XG4gICAgZGlzcGxheTogIGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgODAsIDk4LCAwLjgpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBwYWRkaW5nOiAyNXB4O1xufVxuXG4ubWVudS1pbWFnZSB7XG4gICAgbWF4LWhlaWdodDogMjE1cHg7XG4gICAgbWF4LXdpZHRoOiAzMjlweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3gtc2hhZG93OiAtM3B4IDEwcHggMTdweCAtMXB4IGJsYWNrO1xuICAgIFxufVxuXG4ubWVudS1pdGVtLXR4dCB7XG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgY29sb3I6IHJnYigxODQsIDE1NCwgMTAyKTtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5tZW51LWl0ZW0tdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgY29sb3I6IHJnYigyMDIsIDE4NSwgMTYxKTtcbiAgICBcbn1cblxuXG5cbi5tZW51MiB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICB3aWR0aDogMzB2aDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIxNCwgMjA1LCAwLjcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5tZW51Mi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm1lbnUyLXRpdGxlIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggaW5zZXQgcmdiKDM4LCAzNywgMzcpO1xufVxuXG4ubWVudTItaG91ciB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLDJCQUEyQjtJQUMzQix5REFBcUQ7SUFDckQsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztB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Q2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztJQUNkLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQ0FBcUM7O0FBRXpDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCOztBQUU3Qjs7OztBQUlBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIseUNBQXlDO0lBQ3pDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWdzL3dpemFyZC1iYWNrZ3JvdW5kLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4ubmF2aWdhdGlvbi1iYXIge1xcbiAgICBoZWlnaHQ6IDU1cHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig3MywgNzIsIDcyKTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4ubmF2aWdhdGlvbi10YWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDkwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk2LCA0MSwgNDEpO1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuLmRpc2FibGVkLXRhYiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5ob21lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIG1pbi13aWR0aDogMTAwdmg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gICAgbWluLXdpZHRoOiA3MDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyO1xcbiAgICBjb2x1bW4tZ2FwOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAxMDBweCAzMDBweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn07XFxuXFxuLmhvbWUxIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY29udGVudDogJ0Zyb2dzJztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob21lMSAqIHtcXG4gICAgY29sb3I6IHJnYigyMjQsIDIyMywgMjIzKTtcXG59XFxuXFxuLmhvbWUtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4td2lkdGg6IDQ4NXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogZ2FwOiAyMHB4OyAqL1xcbn1cXG5cXG4uaG9tZTEgaDEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA2MnB4O1xcbn1cXG5cXG4uaG9tZS1ib3gge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4uaGF0LWljb24ge1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzBweDtcXG4gICAgcmlnaHQ6IDg1cHg7ICovXFxuICAgIGZpbHRlcjogaW52ZXJ0KDgwJSkgc2VwaWEoNDQlKSBzYXR1cmF0ZSg0NTUlKSBodWUtcm90YXRlKDZkZWcpIGJyaWdodG5lc3MoOTklKSBjb250cmFzdCg5MyUpO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4uaG9tZS1ob29rIHtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbn1cXG5cXG4uaG9tZS1kZXNjcmlwdCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLm9yZGVyLWJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NiwgNDEsIDQxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLmhvbWUyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk2LCA0MSwgNDEsIDAuNik7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBcXG59XFxuXFxuLmhvbWUyICoge1xcbiAgICBjb2xvcjogYXp1cmU7XFxufVxcblxcbi5ob21lMiBoMyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG5cXG5cXG4uZnJvZy1pY29uIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcblxcbi5hYm91dC1jb250YWluZXIge1xcbiAgICAvKiBkaXNwbGF5OiA6IGZsZXg7ICovXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBtaW4td2lkdGg6IDEwMHZoO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247ICovXFxufVxcblxcbi5hYm91dDEge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxLjVmcjtcXG4gICAgbWluLWhlaWdodDogNjV2aDtcXG4gICAgbWF4LXdpZHRoOiA4NXZoO1xcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NiwgNDEsIDQxLCAwLjcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4uYWJvdXQxLXRvcCB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA4MCwgOTgpOyAqL1xcbn1cXG5cXG4uYWJvdXQtdGl0bGUge1xcbiAgICAvKiBoZWlnaHQ6IDE1dmg7ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzM3B4O1xcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcbi5hYm91dC1wYXJhIHtcXG4gICAgcGFkZGluZzogMjBweCAyNXB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcbi5hYm91dDEtYm90dG9tIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxufVxcblxcbi5iZXJ0aWUtcGljIHtcXG4gICAgaGVpZ2h0OiAxNzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgYm9yZGVyOiAzMHB4IHNvbGlkIHJnYig1OCwgODAsIDk4KTtcXG59XFxuXFxuXFxuLyogTWVudSBwYWdlICovXFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gICAgLyogZGlzcGxheTogZ3JpZDsgKi9cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNhbG1vbjsgKi9cXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTAwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDBweCAzNTBweDsgXFxuICAgIHBhZGRpbmctdG9wOiAxMjBweDtcXG4gICAgXFxufVxcblxcbi5tZW51LXRpdGxlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAyNjBweDtcXG4gICAgdG9wOiA1MHB4O1xcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcbi5tZW51MSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NiwgNDEsIDQxLCAwLjcpO1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLm1lbnUtY2FyZCB7XFxuICAgIC8qIHdpZHRoOiA2MjBweDtcXG4gICAgaGVpZ2h0OiAyODBweDsgKi9cXG4gICAgd2lkdGg6IDg1dmg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIGRpc3BsYXk6ICBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDgwLCA5OCwgMC44KTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgcGFkZGluZzogMjVweDtcXG59XFxuXFxuLm1lbnUtaW1hZ2Uge1xcbiAgICBtYXgtaGVpZ2h0OiAyMTVweDtcXG4gICAgbWF4LXdpZHRoOiAzMjlweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBib3gtc2hhZG93OiAtM3B4IDEwcHggMTdweCAtMXB4IGJsYWNrO1xcbiAgICBcXG59XFxuXFxuLm1lbnUtaXRlbS10eHQge1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBjb2xvcjogcmdiKDE4NCwgMTU0LCAxMDIpO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5tZW51LWl0ZW0tdGl0bGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBjb2xvcjogcmdiKDIwMiwgMTg1LCAxNjEpO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuLm1lbnUyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIHdpZHRoOiAzMHZoO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIxNCwgMjA1LCAwLjcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4ubWVudTItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1lbnUyLXRpdGxlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGluc2V0IHJnYigzOCwgMzcsIDM3KTtcXG59XFxuXFxuLm1lbnUyLWhvdXIge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEJlcnRpZSBmcm9tICcuL2ltZ3MvQmVydGllLmpwZyc7XG5cbmNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblxuXG5leHBvcnQgY29uc3QgYWJvdXRQYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIGFib3V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWNvbnRhaW5lcicpO1xuICAgIGNvbnNvbGUubG9nKCdBYm91dCBwYWdlIGluc2VydGVkJyk7XG5cbiAgICAvLyBtYWluIGNvbnRhaW5lciBmb3IgdGhlIHJlc3Qgb2YgdGhlIGVsZW1lbnRzIG9uIHRoZSBhYm91dCBwYWdlXG4gICAgY29uc3QgYWJvdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRGYWN0b3J5LmFkZFRvQWJvdXQoYWJvdXQxLCAnYWJvdXQxJywgYWJvdXRDb250YWluZXIpO1xuICAgIGNvbnNvbGUubG9nKGFib3V0MSk7XG5cbiAgICAvLyBjb250YWluZXIgdGhhdCBjb250YWlucyB0aGUgdGl0bGUgYW5kIHBhcmFncmFwaFxuICAgIGNvbnN0IGFib3V0MVRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0RmFjdG9yeS5hZGRUb0Fib3V0KGFib3V0MVRvcCwgJ2Fib3V0MS10b3AnLCBhYm91dDEpO1xuXG5cbiAgICBjb25zdCBhYm91dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhYm91dEZhY3RvcnkuYWRkVG9BYm91dChhYm91dFRpdGxlLCAnYWJvdXQtdGl0bGUnLCBhYm91dDFUb3ApO1xuICAgIGFib3V0VGl0bGUudGV4dENvbnRlbnQgPSAnQSBTdG9yeSBMb25nIGluIHRoZSBNYWtpbmcnXG5cbiAgICBjb25zdCBhYm91dFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWJvdXRGYWN0b3J5LmFkZFRvQWJvdXQoYWJvdXRQYXJhZ3JhcGgsICdhYm91dC1wYXJhJywgYWJvdXQxVG9wKVxuICAgIGFib3V0UGFyYWdyYXBoLnRleHRDb250ZW50ID0gYEdyb3dpbmcgdXAgaW4gYSBzbWFsbCBtdWdnbGUgdG93biBvZmYgdGhlIGNvYXN0IGp1c3Qgc2h5XG4gICAgb2YgV2V5bW91dGgsIEJlcnRpZSBCb3R0cyB3YXMgYWx3YXlzIG9uZSBvZiB0aGUgcGVjdWxpYXIgc29ydC4gV2l0aCBub3QgbXVjaFxuICAgIHRvIGRvIGFyb3VuZCBoaXMgaG9tZSwgaGUgd291bGQgY3JlYXRlIGZhbnRhc3RpY2FsIGNvbmNvdGlvbnMgdXNpbmcgYWxsIHNvcnRzXG4gICAgb2YgdGhpbmdzLCBub3QgZXhjbHVkaW5nIHNlYXdlZWQsIHNlYWd1bGwgZmVhdGhlcnMsIGhvdXNlIGRldGVyZ2VudHMsIGFuZCBsYW1iIG11Y3VzLlxuICAgIE9uY2UgaGUgZGlzY292ZXJlZCB0aGUgd29ybGQgb2Ygd2l6YWRyeSBhbmQgYXR0ZW5kaW5nIEhvZ3dhcnRzLCBoZSBxdWlja2x5XG4gICAgcm9zZSB0aHJvdWdoIHRoZSByYW5rcyB0byBiZWNvbWUgSHVmZmxlcHVmZidzIGhlYWQgY2hlZi4gMzAgeWVhcnMgbGF0ZXIsIEJlcnRpZVxuICAgIGlzIHN0aWxsIHVzaW5nIGhpcyBjcmVhdGl2ZW5zcyBhbmQgcGFzc2lvbiB0byBydW4gaGlzIG93biByZXN0YXVyYW50IGFuZCBjYW5keSBzaG9wLCBcbiAgICAnQmVydGllJ3MgQm90dCdzLCBvbmUgb2YgdGhlIG1vc3QgcG9wdWxhciBhbmQgZXh0cmF2YWdlbnQgYnJhbmRzIGluIHRoZSBXaXphcmRpbmcgV29ybGRgXG5cbiAgICAvLyBjb250YWluZXIgdGhhdCBjb250YWlucyBpbWFnZVxuICAgIGNvbnN0IGFib3V0MUJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0RmFjdG9yeS5hZGRUb0Fib3V0KGFib3V0MUJvdHRvbSwgJ2Fib3V0MS1ib3R0b20nLCBhYm91dDEpO1xuXG4gICAgLy8gaW1hZ2UgZm9yIEFib3V0IHBhZ2VcbiAgICBjb25zdCBhYm91dFBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIGFib3V0UGljLnNyYyA9IEJlcnRpZTtcbiAgICBhYm91dEZhY3RvcnkuYWRkVG9BYm91dChhYm91dFBpYywgJ2JlcnRpZS1waWMnLCBhYm91dDFCb3R0b20pO1xufVxuXG5cbi8vIGVsZW1lbnROYW1lICA9IHJlZmVyZW5jZSBuYW1lXG4vLyBlbGVtZW50ID0gdHlwZSBvZiBIVE1MIGVsZW1lbnQgd2Ugd2FudCB0byBjcmVhdGVcbi8vIGNsYXNzTmFtZSA9IG5hbWUgb2YgY2xhc3Mgd2Ugd2FudCB0byBhc3NpZ25cbi8vIGZhdGhlckVsZW1lbnQgPSBuYW1lIG9mIGNvbnRhaW5lciB3ZSB3YW50IHRvIGFwcGVuZCB0b1xuY29uc3QgYWJvdXRGYWN0b3J5ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGZ1bmN0aW9uIGFkZFRvQWJvdXQoZWxlbWVudE5hbWUsIGNsYXNzTmFtZSwgZmF0aGVyRWxlbWVudCApIHtcbiAgICAgICAgZWxlbWVudE5hbWUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICBmYXRoZXJFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnROYW1lKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50TmFtZSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50TmFtZTtcbiAgICB9O1xuICAgIHJldHVybiB7YWRkVG9BYm91dH07XG59KSgpO1xuXG5cblxuZXhwb3J0IHthYm91dENvbnRhaW5lcn07XG4iLCJcblxuaW1wb3J0IGZyb2cgZnJvbSAnLi9pbWdzL1RoZUZyb2dDaG9pckhNLnBuZyc7XG5cbmltcG9ydCBIYXQgZnJvbSAnLi9pbWdzL3dhcmxvY2sucG5nJztcblxuXG5cbmNvbnN0IGhvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuZXhwb3J0IGNvbnN0IGhvbWVQYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIG5lZWQgdG8gc3RhcnQgd2l0aCBhbiBvdXRlciBjb250YWluZXIgLi4gdGhpcyBvdXRlclxuICAgIC8vIGNvbnRhaW5lciB3aWxsIGJlY29tZSB0aGUgY2hpbGQgY29udGFpbmVyIG9mIHRoZVxuICAgIC8vIGNvbnRlbnQgZGl2LCB0aHVzIG1ha2luZyBpdCB2aXNpYmxlIG9uIHRoZSBwYWdlXG5cbiAgIFxuICAgIGNvbnN0IGhvbWVEaXZOYW1lcyA9IFsnaG9tZTEnLCAnaG9tZTInXTtcbiAgICBsZXQgaG9tZURpdnMgPSBbXTtcblxuXG4gICAgLy8gdGhpcyB3b24ndCBiZSBhcHBlbmRlZCB0byB0aGUgdGhlIFwiY29udGVudFwiIGRpdiB1bnRpbCBpdCBpc1xuICAgIC8vIGNhbGxlZCB1cG9uIGluIHRoZSBpbmRleC5qcyBmaWxlXG5cbiAgICBob21lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUtY29udGFpbmVyJyk7XG4gICBcblxuICAgIC8vIGNyZWF0ZSAzIGRpdiBjb250YWluZXJzIHdpdGhpbiB0aGUgaG9tZUNvbnRhaW5lclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG9tZURpdi5jbGFzc0xpc3QuYWRkKGhvbWVEaXZOYW1lc1tpXSk7XG4gICAgICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZURpdik7XG4gICAgICAgIGhvbWVEaXZzLnB1c2goaG9tZURpdik7XG4gICAgfTtcbiAgICBsZXQgaG9tZTEgPSBob21lRGl2c1swXTtcbiAgICBsZXQgaG9tZTIgPSBob21lRGl2c1sxXTtcblxuXG4gICAgLy8gc3R5bGUgZWFjaCBob21lRGl2IGFjY29yZGluZ2x5XG4gICAgLy8gaG9tZTE6XG4gICAgc3R5bGVIb21lMShob21lMSk7XG4gICAgc3R5bGVIb21lMihob21lMik7XG5cblxuICAgIGNvbnNvbGUubG9nKCdob21lcGFnZSBpcyBsaW5rZWQnKTtcblxufVxuXG5cblxuZnVuY3Rpb24gc3R5bGVIb21lMSAoaG9tZTEpIHtcbiAgICBjb25zdCBob21lVGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lVGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZS10aXRsZS1jb250YWluZXInKTtcbiAgICBob21lMS5hcHBlbmRDaGlsZChob21lVGl0bGVDb250YWluZXIpO1xuXG4gICAgY29uc3QgaG9tZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBob21lVGl0bGUudGV4dENvbnRlbnQgPSBgQmVydGllIEJvdHRcXCdzYFxuICAgIGhvbWVUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lVGl0bGUpO1xuXG4gICAgY29uc3QgaG9tZUxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBob21lTG9nby5zcmMgID0gSGF0O1xuICAgIGhvbWVMb2dvLmNsYXNzTGlzdC5hZGQoJ2hhdC1pY29uJylcbiAgICBob21lVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUxvZ28pO1xuXG5cblxuICAgIGNvbnN0IGhvbWVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lQm94LmNsYXNzTGlzdC5hZGQoJ2hvbWUtYm94Jyk7XG4gICAgaG9tZTEuYXBwZW5kQ2hpbGQoaG9tZUJveCk7XG5cbiAgICBjb25zdCBob21lSG9vayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaG9tZUhvb2sudGV4dENvbnRlbnQgPSAnQWRkIGEgYml0IG9mIE1hZ2ljIHRvIHlvdXIgZXZlbmluZyAuLi4nXG4gICAgaG9tZUhvb2suY2xhc3NMaXN0LmFkZCgnaG9tZS1ob29rJylcbiAgICBob21lQm94LmFwcGVuZENoaWxkKGhvbWVIb29rKTtcblxuICAgIGNvbnN0IGhvbWVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaG9tZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0NvbWUgZGluZSB3aXRoIHlvdXIgZmVsbG93IHdpdGNoZXMgYW5kIHdpemFyZHMgYXQgb3VyIDUgc3RhciBlc3RhYmxpc2htZW50IG9uIHRoZSBjb3JuZXIgb2YgQ3Jlc2NlbnQgYW5kIERvYmJ5IGluIHVwcGVyIERpYWdvbiBBbGxleSc7XG4gICAgaG9tZURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2hvbWUtZGVzY3JpcHQnKVxuICAgIGhvbWVCb3guYXBwZW5kQ2hpbGQoaG9tZURlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IG9yZGVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgb3JkZXJCdXR0b24udGV4dENvbnRlbnQgPSAnT3JkZXIgT25saW5lJztcbiAgICBvcmRlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdvcmRlci1idXR0b24nKTtcbiAgICBob21lQm94LmFwcGVuZENoaWxkKG9yZGVyQnV0dG9uKTtcblxufVxuXG5mdW5jdGlvbiBzdHlsZUhvbWUyIChob21lMikge1xuICAgIGNvbnN0IGZyb2dJY29uID0gbmV3IEltYWdlKCk7XG4gICAgZnJvZ0ljb24uc3JjID0gZnJvZztcbiAgICBmcm9nSWNvbi5jbGFzc0xpc3QuYWRkKCdmcm9nLWljb24nKVxuICAgIGhvbWUyLmFwcGVuZENoaWxkKGZyb2dJY29uKTtcblxuICAgIGNvbnN0IGZyb2dUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZnJvZ1RpdGxlLnRleHRDb250ZW50ID0gJ0xpdmUgcGVyZm9ybWFuY2VzIGZyb20gRnJvZyBDaG9pciBldmVyeSBGcmlkYXkgYXQgN3BtJztcbiAgICAvLyBmcm9nVGl0bGUuY2xhc3NMaXN0LmFkZCgnZnJvZy10aXRsZScpO1xuICAgIGhvbWUyLmFwcGVuZENoaWxkKGZyb2dUaXRsZSk7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBjbGVhckhvbWUgKGhhc0JlZW5SdW4pIHtcbi8vICAgICBjb25zb2xlLmxvZygnY2xlYXJlZCcpO1xuLy8gICAgIGhhc0JlZW5SdW4gPSB0cnVlO1xuLy8gICAgIGNvbnNvbGUubG9nKGhhc0JlZW5SdW4pO1xuLy8gfVxuXG5leHBvcnQge2hvbWVDb250YWluZXJ9O1xuXG5cblxuIiwiXG5pbXBvcnQgY2FrZXMgZnJvbSAnLi9pbWdzL0NhdWxkcm9uLUNha2VzLmpwZyc7XG5pbXBvcnQgc25ha2UgZnJvbSAnLi9pbWdzL3NuYWtlLWZpbGV0LmpwZyc7XG5pbXBvcnQgYmVhbnMgZnJvbSAnLi9pbWdzL2JlYW5zLmpwZyc7XG5pbXBvcnQgcGllIGZyb20gJy4vaW1ncy9zaGVwaGVyZC5qcGcnO1xuaW1wb3J0IGJlZXIgZnJvbSAnLi9pbWdzL0J1dHRlci1iZWVyLmpwZyc7XG5cbi8vIHBsYW4gaXN0byBjcmVhdGUgdHdvIG1haW4gY29udGFpbmVycyBoZXJlLiBPbmUgd2lsbCBiZSBtdWNoXG4vLyBiaWdnZXIgYW5kIGNvbnRhaW4gdGhlIHNjcm9sbGFibGUgbWVudS4gVGhlIG90aGVyIHdpbGwgYmVcbi8vIGEgc21hbGxlciBib3ggdGhhdCBsaXN0cyB0aGUgSG91cnMgb2YgdGhlIHJlc3RhdXJhbnRcbmNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXG5leHBvcnQgY29uc3QgbWVudVBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuICAgIGNvbnNvbGUubG9nKCdtZW51IHBhZ2UgbGlua2VkJyk7XG5cbiAgICAvLyBhcnJheSBmb3IgdGhlIG1lbnUgaXRlbXNcbiAgICAvLyBjb25zdCBtZW51SXRlbXMgPSBbJ0NhcmxcXCdzIENhdWxkcm9uIENha2VzJywgJ0Zlbm55IFNuYWtlIEZpbGV0JywgXG4gICAgLy8gJ0JlcnRpZSBCb3R0XFwncyBFdmVyeSBGbGF2b3VyIEJlYW5zJywgJ1NoZXBhcmQgUGllJywgJ0J1dHRlckJlZXInXVxuXG4gICAgY29uc3QgbWVudUltYWdlcyA9IFtjYWtlcywgc25ha2UsIGJlYW5zLCBwaWUsIGJlZXJdO1xuXG4gICAgLy8gd2hlcmUgY2FyZCBtZW1vcnkgd2lsbCBiZSBzdG9yZWQgb25jZSB0aGUgZm9yIGxvb3AgaXMgZmluaXNoZWRcbiAgICBjb25zdCBtZW51Q2FyZFRleHRzID0gW107XG5cbiAgICBjb25zdCBtZW51T2JqZWN0cyA9IFtdO1xuXG5cbiAgICAvL2NyZWF0ZSAybWFpbiBjb250YWluZXJzIGZvciB0aGUgcGFnZVxuICAgIGNvbnN0IG1lbnUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51RmFjdG9yeS5hZGRUb01lbnUobWVudTEsICdtZW51MScsIG1lbnVDb250YWluZXIpO1xuXG4gICAgY29uc3QgbWVudTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVGYWN0b3J5LmFkZFRvTWVudShtZW51MiwgJ21lbnUyJywgbWVudUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBtZW51MlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBtZW51RmFjdG9yeS5hZGRUb01lbnUobWVudTJUaXRsZSwgJ21lbnUyLXRpdGxlJywgbWVudTIpO1xuICAgIG1lbnUyVGl0bGUudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuXG4gICAgY29uc3QgbWVudTJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51RmFjdG9yeS5hZGRUb01lbnUobWVudTJDb250YWluZXIsICdtZW51Mi1jb250YWluZXInLCBtZW51Mik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICBjb25zdCBtZW51MkhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBtZW51RmFjdG9yeS5hZGRUb01lbnUobWVudTJIb3VyLCAnbWVudTItaG91cicsIG1lbnUyQ29udGFpbmVyKTtcblxuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgbWVudTJIb3VyLnRleHRDb250ZW50ID0gJ01vbmRheTogMjowMCAtIDk6MDBwbSdcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAxKSB7XG4gICAgICAgICAgICBtZW51MkhvdXIudGV4dENvbnRlbnQgPSAnVHVlc2RheTogMTI6MDAgLSA5OjAwcG0nXG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMikge1xuICAgICAgICAgICAgbWVudTJIb3VyLnRleHRDb250ZW50ID0gJ1dlZG5lc2RheTogMTI6MDAgLSA5OjAwcG0nXG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMykge1xuICAgICAgICAgICAgbWVudTJIb3VyLnRleHRDb250ZW50ID0gJ1RodXJzZGF5OiAxMjowMCAtIDk6MDBwbSdcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSA0KSB7XG4gICAgICAgICAgICBtZW51MkhvdXIudGV4dENvbnRlbnQgPSAnRnJpZGF5OiAxMjowMHBtIC0gMTI6MDBhbSdcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSA1KSB7XG4gICAgICAgICAgICBtZW51MkhvdXIudGV4dENvbnRlbnQgPSAnU2F0dXJkYXk6IDEyOjAwcG0gLSAxMjowMGFtJ1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDYpIHtcbiAgICAgICAgICAgIG1lbnUySG91ci50ZXh0Q29udGVudCA9ICdTdW5kYXk6IDEyOjAwcG0gLSA2OjAwcG0nXG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvL3RpdGxlIGNyZWF0aW9uXG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBtZW51RmFjdG9yeS5hZGRUb01lbnUobWVudVRpdGxlLCAnbWVudS10aXRsZScsIG1lbnVDb250YWluZXIpO1xuICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9ICdUYWtlIGEgR2FuZGVyLi4uICc7XG5cblxuICAgIC8vIG1lbnUgaXRlbXM6IHdpbGwgaXRlcmF0ZSB0aHJvdWdoIGFuIGFycmF5IHRvIGNyZWF0ZSBhIFxuICAgIC8vIG51bWJlciBvZiBtZW51IEl0ZW1zIC4uLiBpbWFnZXMgd2lsbCBiZSBpbnNlcnRlZCBiYXNlZCBvbiB3aGF0XG4gICAgLy8gdGhlIGltYWdlIGFycmF5IGNvbnRhaW5zXG5cbiAgICAvLyBtYXliZSBnaXZlIGVhY2ggZGl2IGFuIElEIGJhc2VkIG9uIHRoZSBhcnJheSBpdGVtIC4uLiB0byBiZSBcbiAgICAvLyBhYmxlIHRvIGluc2VydCBjdXN0b20gbWVudSBpdGVtIHRleHQgbGF0ZXJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbWVudUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudUZhY3RvcnkuYWRkVG9NZW51KG1lbnVDYXJkLCAnbWVudS1jYXJkJywgbWVudTEpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBtZW51SW1hZ2VcbiAgICAgICAgY29uc3QgbWVudUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG1lbnVJbWFnZS5zcmMgPSBtZW51SW1hZ2VzW2ldO1xuICAgICAgICBtZW51RmFjdG9yeS5hZGRUb01lbnUobWVudUltYWdlLCAnbWVudS1pbWFnZScsIG1lbnVDYXJkKTtcblxuICAgICAgICAvLyBjcmVhdGUgbWVudUl0ZW1UZXh0IGRpdlxuICAgICAgICBjb25zdCBtZW51SXRlbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBtZW51RmFjdG9yeS5hZGRUb01lbnUobWVudUl0ZW1UZXh0LCAnbWVudS1pdGVtLXR4dCcsIG1lbnVDYXJkKTtcblxuICAgICAgICAvLyBwdXNoIHRvIGFycmF5IHNvIGl0IGNhbiBpbmRpdmlkdWFsbHkgc3R5bGUgbGF0ZXJcbiAgICAgICAgbWVudUNhcmRUZXh0cy5wdXNoKG1lbnVJdGVtVGV4dCk7XG4gICAgfTtcblxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51Q2FyZFRleHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBtZW51RmFjdG9yeS5hZGRUb01lbnUobWVudUl0ZW1UaXRsZSwgJ21lbnUtaXRlbS10aXRsZScsIG1lbnVDYXJkVGV4dHNbaV0pO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtV29yZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG1lbnVGYWN0b3J5LmFkZFRvTWVudShtZW51SXRlbVdvcmRzLCAnbWVudS1pdGVtLXdvcmRzJywgbWVudUNhcmRUZXh0c1tpXSk7XG5cbiAgICAgICAgY29uc3QgbWVudU9iamVjdCA9IHtcbiAgICAgICAgICAgIGZvb2RUaXRsZTogJycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgfTtcbiAgICAgICAgbWVudU9iamVjdHMucHVzaChtZW51T2JqZWN0KTtcblxuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgIC8vIGFzc2lnbiB2YWx1ZXMgdG8gdGhlIHRpdGxlcyBhbmQgdGV4dHNcbiAgICAgICAgICAgIG1lbnVPYmplY3QuZm9vZFRpdGxlID0gYENhcmwncyBDYXVsZHJvbiBDYWtlc2AgKyBgICAgYCArIGAkMTcuOTlgO1xuICAgICAgICAgICAgbWVudU9iamVjdC5kZXNjcmlwdGlvbiA9IGBUaGVzZSBmYW1vdXMgY2FrZXMgd2lsbCBtYWtlIHlvdXIgd2FuZCB0aW5nbGVcbiAgICAgICAgICAgIHdpdGggdGhlaXIgc3dhcm15IGFuZCBjcmVhbS1vZi10b2FkIGZpbGxpbmcgc3Vycm9uZGVkIGJ5IGEgd2FybSBjcnVzdCBvZiBcbiAgICAgICAgICAgIGJyZWFkIGNydW1icyBhbmQgZmlnZ2xlcm9vdC5gO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMSkge1xuICAgICAgICAgICAgbWVudU9iamVjdC5mb29kVGl0bGUgPSBgRmVubnkgU25ha2UgRmlsZXRgICsgYCAgIGAgKyBgJDM5LjAwYDtcbiAgICAgICAgICAgIG1lbnVPYmplY3QuZGVzY3JpcHRpb24gPSBgV2UgYWNxdWlyZSBvdXIgRmVubmllcyBhbW9uZ3N0IHRoZSBoaWdoZXN0IFxuICAgICAgICAgICAgcGVha3Mgb2YgdGhlIEhpZ2hsYW5kcyBuZWFyIEhvZ3dhcnRzLCBtYWtpbmcgdGhpcyBzdGVhayBhYnNvbHV0bGV5IHRvcFxuICAgICAgICAgICAgb2YgdGhlIGxpbmVgO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMikge1xuICAgICAgICAgICAgbWVudU9iamVjdC5mb29kVGl0bGUgPSBgQmVydGllIEJvdHQncyBFdmVyeSBGbGF2b3IgQmVhbnNgICsgYCAgIGAgKyBgJDcuOTlgO1xuICAgICAgICAgICAgbWVudU9iamVjdC5kZXNjcmlwdGlvbiA9IGBBIGNsYXNzaWMgdGhhdCBXaXphcmRzIGFuZCBXaXRjaGVzIGhhdmUgZW5qb3llZCBhbGxcbiAgICAgICAgICAgIG92ZXIgdGhlIHdvcmxkIGZvciBkZWNhZGVzLiBQaWNrIGEgYmVhbiBhdCB5b3VyIG93biByaXNrIGFuZCBob3BlIHlvdSdyZSBub3RcbiAgICAgICAgICAgIGNvbmZ1c2luZyBCbGFjayBMaWNvcmljZSB3aXRoIEFzaCEhYDtcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAzKSB7XG4gICAgICAgICAgICBtZW51T2JqZWN0LmZvb2RUaXRsZSA9IGBTaGVwaGVyZCdzIFBpZWAgKyBgICAgYCArIGAkMTUuOTlgO1xuICAgICAgICAgICAgbWVudU9iamVjdC5kZXNjcmlwdGlvbiA9IGBCZXJ0aWUncyBob21lbWFkZSBTaGVwaGVyZCdzIFBpZSB3YXMgc2VsZWN0ZWQgaW4gMjAyMFxuICAgICAgICAgICAgYXMgb25lIG9mIHRoZSBXaXphcmRpbmcgV29ybGQncyBtb3N0IFwiaGlkZGVuIGFuZCB1bmRlcmF0ZWQgcGllc1wiIGJ5IHRoZSB3ZWxsIGtub3duXG4gICAgICAgICAgICBjcml0aWMgU3Rhbmx5IFNraW13ZWVkLiBDb21lIGFuZCBzZWUgZm9yIHlvdXJzZWxmIWA7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gNCkge1xuICAgICAgICAgICAgbWVudU9iamVjdC5mb29kVGl0bGUgPSBgQnV0dGVyQmVlciAgICAgJDQuOTlgO1xuICAgICAgICAgICAgbWVudU9iamVjdC5kZXNjcmlwdGlvbiA9IGBJZiB5b3UncmUgZmVlbGluZyBhIGxpdHRsZSBrbmFja2VyZWQgZnJvbSBhbGwgdGhhdFxuICAgICAgICAgICAgc3BlbGwgY2FzdGluZyBhbmQgdGhlbiBzb21lLCBhbiBpY2UgY29sZCwgZ3VyZ2xpbmcsIGFuZCBjcmVhbXkgQnV0dGVyQmVlclxuICAgICAgICAgICAgaXMgdGhlIHdheSB0byBnbyFgO1xuICAgICAgICB9O1xuXG4gICAgICAgIG1lbnVJdGVtVGl0bGUudGV4dENvbnRlbnQgPSBtZW51T2JqZWN0LmZvb2RUaXRsZTtcbiAgICAgICAgbWVudUl0ZW1Xb3Jkcy50ZXh0Q29udGVudCA9IG1lbnVPYmplY3QuZGVzY3JpcHRpb247XG4gICAgICAgIGNvbnNvbGUubG9nKCBtZW51SXRlbVRpdGxlKTtcbiAgICB9XG4gICAgXG4gICAgY29uc29sZS5sb2cobWVudU9iamVjdHMpO1xuXG4gICAgLy8gLy8gYXNzaWduIHZhbHVlcyB0byB0aGUgdGl0bGVzIGFuZCB0ZXh0c1xuICAgIC8vIG1lbnVPYmplY3RzWzBdLmZvb2RUaXRsZSA9ICdDYXJsXFwncyBDYXVsZHJvbiBDYWtlcyAgICAkMTcuOTknO1xuICAgIC8vIG1lbnVPYmplY3RzWzBdLmRlc2NyaXB0aW9uID0gYFRoZXNlIGZhbW91cyBjYWtlcyB3aWxsIG1ha2UgeW91ciB3YW5kIHRpbmdsZVxuICAgIC8vIHdpdGggdGhlaXIgc3dhcm15IGFuZCBjcmVhbS1vZi10b2FkIGZpbGxpbmcgc3Vycm9uZGVkIGJ5IGEgd2FybSBjcnVzdCBvZiBcbiAgICAvLyBicmVhZCBjcnVtYnMgYW5kIGZpZ2dsZXJvb3QuYDtcblxuICAgIC8vIC8vIG1lbnVDYXJkVGV4dHNbMF0ubWVudUl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IG1lbnVPYmplY3RzWzBdLmZvb2RUaXRsZTtcbiAgICAvLyBjb25zb2xlLmxvZyggbWVudUNhcmRUZXh0c1swXS5tZW51SXRlbVRpdGxlKTtcblxuXG5cbn07XG5cblxuY29uc3QgbWVudUZhY3RvcnkgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgZnVuY3Rpb24gYWRkVG9NZW51KGVsZW1lbnROYW1lLCBjbGFzc05hbWUsIGZhdGhlckVsZW1lbnQgKSB7XG4gICAgICAgIGVsZW1lbnROYW1lLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgZmF0aGVyRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50TmFtZSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudE5hbWUpO1xuICAgICAgICByZXR1cm4gZWxlbWVudE5hbWU7XG4gICAgfTtcbiAgICByZXR1cm4ge2FkZFRvTWVudX07XG59KSgpO1xuXG5cbmV4cG9ydCB7bWVudUNvbnRhaW5lcn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vaG9tZS5qcyc7XG5pbXBvcnQgeyBob21lUGFnZSwgaG9tZUNvbnRhaW5lciB9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgeyBhYm91dFBhZ2UsIGFib3V0Q29udGFpbmVyIH0gZnJvbSAnLi9hYm91dC5qcyc7XG5pbXBvcnQgeyBtZW51UGFnZSwgbWVudUNvbnRhaW5lciB9IGZyb20gJy4vbWVudS5qcyc7XG5cblxuY29uc29sZS5sb2coJ3Rlc3QnKVxuXG4vLyBvYmplY3QvZmFjdG9yeSBmdW5jdGlvbiB0aGF0IHdpbGwgY29ubmVjdCBhbGwgb2YgdGhlIHdlYmlzdGUgcGFnZXNcbi8vIHRvZ2V0aGVyLiBIZXJlIGlzIHdoZXJlIHRoZSBtYWluIGZ1bmN0aW9uYWxpdHkgd2lsbCBiZSwgd2hlcmVcbi8vIHRoZSBjb3JyZWN0IHBhZ2Ugd2lsbCByZW5kZXIgYW5kIGJlIHZpc2libGUgYmFzZWQgb24gd2hhdCB0YWJzXG4vLyB0aGUgdXNlciBjbGlja3MgYXQgdGhlIHRvcFxuXG5cbi8vIGNyZWF0ZSB0aGUgbWFpbiB3ZWJzaXRlIGJhciBhdCB0aGUgdG9wXG5jb25zdCBzaXRlTmF2aWdhdG9yID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIGNvbnN0IHBhZ2VIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnNvbGUubG9nKHBhZ2VIb2xkZXIpO1xuXG4gICAgLy8gY3JlYXRlIHRoZSBtYWluIHdlYnNpdGUgYmFyIGF0IHRoZSB0b3BcbiAgICBjb25zdCBuYXZpZ2F0aW9uQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2aWdhdGlvbkJhci50ZXh0Q29udGVudCA9ICdCZXJ0aWUgQm90dFxcJ3MnO1xuICAgIG5hdmlnYXRpb25CYXIuY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbi1iYXInKTtcblxuICAgIC8vIGFkZHMgdGhlIG5hdmlnYXRpb24gYmFyIHRvIHRoZSB0b3BcbiAgICBwYWdlSG9sZGVyLmFwcGVuZENoaWxkKG5hdmlnYXRpb25CYXIpO1xuXG4gICAgLy8gb3BlbnMgdXAgdG90IGhlIGRlZmF1bHQgaG9tZSBwYWdlXG4gICAgaG9tZVBhZ2UoKTtcbiAgICBwYWdlSG9sZGVyLmFwcGVuZENoaWxkKGhvbWVDb250YWluZXIpO1xuXG4gICAgYWJvdXRQYWdlKCk7XG4gICAgcGFnZUhvbGRlci5hcHBlbmRDaGlsZChhYm91dENvbnRhaW5lcik7XG5cbiAgICBtZW51UGFnZSgpO1xuICAgIHBhZ2VIb2xkZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cblxuICAgIC8vIGFycmF5IGNvbnRhaW5pbmcgdGhlIHRhYiBuYW1lc1xuICAgIGNvbnN0IHRhYk5hbWVzID0gWydIb21lJywgJ0Fib3V0JywgJ01lbnUnLCAnUmVzZXJ2YXRpb25zJ11cbiAgICBjb25zdCB0YWJzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRpb24tdGFiJyk7XG4gICAgICAgIHRhYi50ZXh0Q29udGVudCA9IHRhYk5hbWVzW2ldO1xuICAgICAgICB0YWJzLnB1c2godGFiKTtcbiAgICAgICAgbmF2aWdhdGlvbkJhci5hcHBlbmRDaGlsZCh0YWIpO1xuICAgIH1cblxuICAgIGxldCBhY3RpdmVUYWIgPSB0YWJzWzBdO1xuICAgIHRhYnNbMF0uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQtdGFiJyk7XG4gICAgY29uc29sZS5sb2coYWN0aXZlVGFiKTtcblxuXG4gICAgY29uc29sZS5sb2codGFicylcbiAgICB0YWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhYik7XG4gICAgICAgICAgICBhY3RpdmVUYWIgPSB0YWI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVUYWIpO1xuICAgICAgICAgICAgc3dpdGNoUGFnZShhY3RpdmVUYWIpO1xuICAgIFxuICAgICAgICB9KTtcbiAgIFxuICAgIH0pO1xuICAgXG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hQYWdlKGFjdGl2ZVRhYikge1xuICAgICAgICBpZiAoYWN0aXZlVGFiID09PSB0YWJzWzBdKSB7XG4gICAgICAgICAgICB0YWJzWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkLXRhYicpO1xuICAgICAgICAgICAgdGFic1syXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZC10YWInKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdob21lcGFnZScpO1xuICAgICAgICAgICAgaG9tZUNvbnRhaW5lci5zdHlsZSA9ICdkaXNwbGF5OiBncmlkJ1xuICAgICAgICAgICAgYWJvdXRDb250YWluZXIuc3R5bGUgPSAnZGlzcGxheTogbm9uZSdcbiAgICAgICAgICAgIG1lbnVDb250YWluZXIuc3R5bGUgPSAnZGlzcGxheTogbm9uZSdcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAvLyBoYXZlIHRvIGRpc2FibGUgdGhlIEhvbWUgRGl2IGNsaWNrXG4gICAgICAgICAgICB0YWJzWzBdLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkLXRhYicpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVGFiID09PSB0YWJzWzFdKSB7XG4gICAgICAgICAgICB0YWJzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkLXRhYicpO1xuICAgICAgICAgICAgdGFic1syXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZC10YWInKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBYm91dCcpO1xuICAgICAgICAgICAgaG9tZUNvbnRhaW5lci5zdHlsZSA9ICdkaXNwbGF5OiBub25lJ1xuICAgICAgICAgICAgYWJvdXRDb250YWluZXIuc3R5bGUgPSAnZGlzcGxheTogZmxleCdcbiAgICAgICAgICAgIG1lbnVDb250YWluZXIuc3R5bGUgPSAnZGlzcGxheTogbm9uZSdcblxuXG4gICAgICAgICAgICB0YWJzWzFdLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkLXRhYicpO1xuXG4gICAgICAgIH0gIGVsc2UgaWYgKGFjdGl2ZVRhYiA9PT0gdGFic1syXSkge1xuICAgICAgICAgICAgdGFic1swXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZC10YWInKTtcbiAgICAgICAgICAgIHRhYnNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQtdGFiJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTWVudSBjbGlja2VkJyk7XG5cbiAgICAgICAgICAgIG1lbnVDb250YWluZXIuc3R5bGUgPSAnZGlzcGxheTogZ3JpZDsnXG4gICAgICAgICAgICBob21lQ29udGFpbmVyLnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnXG4gICAgICAgICAgICBhYm91dENvbnRhaW5lci5zdHlsZSA9ICdkaXNwbGF5OiBub25lJ1xuXG4gICAgICAgICAgICB0YWJzWzJdLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkLXRhYicpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZG9lc250IGV4aXN0JylcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn0pKCk7XG5cblxuXG5cbi8vIGFkZCBhZGRFdmVudExpc3RlbmVycyB0byB0YWIgbGlua3MgYXQgdGhlIHRvcCBvZiBwYWdlLCBzbyB0aGF0IHdoZW4gdGhleVxuLy9hcmUgY2xpY2tlZCwgdGhlIGNvcnJlY3QgcGFnZSBpcyBsb2FkZWQgaW4gdGhyb3VnaCB0aGUgXCJjb250ZW50XCIgZGl2LlxuXG4vLyB3aGVuIG9uZSBwYWdlIGlzIHNlbGVjdGVkLCB0aGUgb3RoZXJzIHNob3VsZCBiZSBzZXQgdG9cbi8vICdkaXNwbGF5OiBub25lJ1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=