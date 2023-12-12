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
    /* background-color: rgb(111, 111, 111, 0.7); */
    padding-left: 30px;
    padding-bottom: 10px;
    border-bottom: 3px solid rgb(96, 41, 41, 0);
    display: flex;
    justify-content: start;
    gap: 30px;
}

.navigation-bar:hover {
    background-color: rgb(111, 111, 111, 0.7);
    border-bottom: 3px solid rgb(96, 41, 41);
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
    text-shadow: 2px 2px 30px rgb(119, 118, 118);
}

.home-title-container {
    /* position: relative; */
    display: flex;
    min-width: 485px;
    justify-content: center;
    align-items: center;
    
}

.home1 h1 {
    display: flex;
    justify-content: center;
    font-size: 62px;
    text-shadow: 0px 3px 50px rgb(24, 23, 23);
}

.home-box {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    height: 150px;
    text-shadow: 0px 3px 50px rgb(24, 23, 23);
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
    text-shadow: 0px 3px 50px rgb(11, 11, 11);
}

.home-descript {
    font-size: 20px;
    text-shadow: 2px 3px 50px rgb(24, 23, 23);
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
    box-shadow: -3px 3px 17px 0px black;
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
    font-size: 28px;
    text-shadow: 2px 3px 50px rgb(24, 23, 23);
}



.frog-icon {
    display: inline-block;
    height: 200px;
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
    box-shadow: -3px 5px 17px -1px black;
    
}

.menu-item-txt {
    flex-direction: column;
    justify-content: start;
    /* color: rgb(184, 154, 102); */
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["html {\n    min-height: 100%;\n}\n\nhtml, body {\n    margin: 0px;\n}\n\n#content {\n    min-height: 100vh;\n    width: 100%;\n    /* background-color: red; */\n    background-image: url('./imgs/wizard-background.jpg');\n    background-size: cover;\n}\n\n.navigation-bar {\n    height: 55px;\n    /* background-color: rgb(111, 111, 111, 0.7); */\n    padding-left: 30px;\n    padding-bottom: 10px;\n    border-bottom: 3px solid rgb(96, 41, 41, 0);\n    display: flex;\n    justify-content: start;\n    gap: 30px;\n}\n\n.navigation-bar:hover {\n    background-color: rgb(111, 111, 111, 0.7);\n    border-bottom: 3px solid rgb(96, 41, 41);\n}\n\n.navigation-tab {\n    display: flex;\n    justify-content: center;\n    width: 90px;\n    height: 100%;\n    background-color: rgb(96, 41, 41);\n    padding: 0px 10px;\n    text-align: center;\n    font-weight: bold;\n    align-items: center;\n    color: antiquewhite;\n}\n\n.disabled-tab {\n    pointer-events: none;\n    opacity: 0.7;\n}\n\n.home-container {\n    display: grid;\n    /* min-width: 100vh;\n    min-height: 100vh; */\n    min-height: 600px;\n    min-width: 700px;\n    grid-template-columns: 2fr 2fr;\n    column-gap: 30px;\n    padding: 100px 300px;\n    justify-items: center;\n};\n\n.home1 {\n    display: flex;\n    flex-direction: column;\n    content: 'Frogs';\n    grid-column: 1 / 2;\n    grid-row: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.home1 * {\n    color: rgb(224, 223, 223);\n    text-shadow: 2px 2px 30px rgb(119, 118, 118);\n}\n\n.home-title-container {\n    /* position: relative; */\n    display: flex;\n    min-width: 485px;\n    justify-content: center;\n    align-items: center;\n    \n}\n\n.home1 h1 {\n    display: flex;\n    justify-content: center;\n    font-size: 62px;\n    text-shadow: 0px 3px 50px rgb(24, 23, 23);\n}\n\n.home-box {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    height: 150px;\n    text-shadow: 0px 3px 50px rgb(24, 23, 23);\n}\n\n.hat-icon {\n    /* position: absolute;\n    top: 30px;\n    right: 85px; */\n    filter: invert(80%) sepia(44%) saturate(455%) hue-rotate(6deg) brightness(99%) contrast(93%);\n    height: 100px;\n}\n\n.home-hook {\n    font-size: 35px;\n    text-shadow: 0px 3px 50px rgb(11, 11, 11);\n}\n\n.home-descript {\n    font-size: 20px;\n    text-shadow: 2px 3px 50px rgb(24, 23, 23);\n}\n\n.order-button {\n    margin-top: 50px;\n    width: 200px;\n    height: auto;\n    padding: 20px;\n    text-align: center;\n    font-weight: bold;\n    font-size: 25px;\n    color: antiquewhite;\n    background-color: rgb(96, 41, 41);\n    border-radius: 25px;\n    box-shadow: -3px 3px 17px 0px black;\n}\n\n.home2 {\n    display: grid;\n    height: 400px;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 4fr;\n    justify-items: center;\n    grid-column: 2;\n    grid-row: 1 / 3;\n    background-color: rgba(96, 41, 41, 0.6);\n    padding: 32px;\n    padding-top: 50px;\n    border-radius: 25px;\n    \n}\n\n.home2 * {\n    color: azure;\n}\n\n.home2 h3 {\n    text-align: center;\n    font-size: 28px;\n    text-shadow: 2px 3px 50px rgb(24, 23, 23);\n}\n\n\n\n.frog-icon {\n    display: inline-block;\n    height: 200px;\n    width: max-content;\n}\n\n\n.about-container {\n    /* display: : flex; */\n    justify-content: center;\n    align-items: center;\n    display: none;\n    height: 200px;\n    min-width: 100vh;\n    min-height: 100vh;\n    /* background-color: lightsalmon; */\n}\n\n.about1 {\n    display: grid;\n    padding: 30px 20px;\n    grid-template-columns: 1fr;\n    grid-template-rows: 2fr 1.5fr;\n    min-height: 65vh;\n    max-width: 85vh;\n    margin-top: -30px;\n    background-color: rgba(96, 41, 41, 0.7);\n    border-radius: 25px;\n}\n\n.about1-top {\n    grid-row: 1 / 2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* background-color: rgb(58, 80, 98); */\n}\n\n.about-title {\n    /* height: 15vh; */\n    text-align: center;\n    font-size: 33px;\n    color: blanchedalmond;\n}\n\n.about-para {\n    padding: 20px 25px;\n    font-size: large;\n    line-height: 1.5;\n    color: blanchedalmond;\n}\n\n.about1-bottom {\n    grid-row: 2 / 3;\n    display: flex;\n    justify-content: center;\n    /* border: 2px solid black; */\n}\n\n.bertie-pic {\n    height: 170px;\n    border-radius: 25px;\n    border: 30px solid rgb(58, 80, 98);\n}\n\n\n/* Menu page */\n\n.menu-container {\n    /* display: grid; */\n    position: relative;\n    display: none;\n    /* background-color: lightsalmon; */\n    min-height: 100vh;\n    min-width: 100vh;\n    grid-template-columns: 3fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 30px;\n    padding: 0px 350px; \n    padding-top: 120px;\n    \n}\n\n.menu-title {\n    position: absolute;\n    left: 260px;\n    top: 50px;\n    color: blanchedalmond;\n}\n\n.menu1 {\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n    justify-content: center;\n    align-items: stretch;\n    grid-column: 1 / 2;\n    grid-row: 1 / 3;\n    background-color: rgba(96, 41, 41, 0.7);\n    padding-top: 30px;\n    padding-bottom: 30px;\n    padding-left: 30px;\n    border-radius: 25px;\n}\n\n.menu-card {\n    /* width: 620px;\n    height: 280px; */\n    width: 85vh;\n    height: 230px;\n    display:  grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    background-color: rgb(58, 80, 98, 0.8);\n    overflow: hidden;\n    border-radius: 25px;\n    padding: 25px;\n}\n\n.menu-image {\n    max-height: 215px;\n    max-width: 329px;\n    align-self: center;\n    border-radius: 25px;\n    box-shadow: -3px 5px 17px -1px black;\n    \n}\n\n.menu-item-txt {\n    flex-direction: column;\n    justify-content: start;\n    /* color: rgb(184, 154, 102); */\n    font-size: 18px;\n}\n\n.menu-item-title {\n    margin-bottom: 15px;\n    color: rgb(202, 185, 161);\n    \n}\n\n\n\n.menu2 {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    width: 30vh;\n    height: 400px;\n    padding-left: 30px;\n    padding-right: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    background-color: rgb(221, 214, 205, 0.7);\n    border-radius: 25px;\n}\n\n.menu2-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.menu2-title {\n    border-bottom: 2px inset rgb(38, 37, 37);\n}\n\n.menu2-hour {\n    font-size: 18px;\n    padding-bottom: 15px;\n}"],"sourceRoot":""}]);
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
    // navigationBar.textContent = 'Bertie Bott\'s';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxLQUFLLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxNQUFNLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFNBQVMsS0FBSyxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFV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QUFFekMsSUFBSSxrREFBUTtBQUNaLDJCQUEyQixtREFBYTs7O0FBR3hDO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFhO0FBQ3pCLFlBQVkscURBQWM7QUFDMUIsWUFBWSxtREFBYTtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFhO0FBQ3pCLFlBQVkscURBQWM7QUFDMUIsWUFBWSxtREFBYTs7O0FBR3pCOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxtREFBYSx3QkFBd0I7QUFDakQsWUFBWSxtREFBYTtBQUN6QixZQUFZLHFEQUFjOztBQUUxQjs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7O0FBR0EsQ0FBQzs7Ozs7QUFLRDtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWdzL3dpemFyZC1iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuaHRtbCwgYm9keSB7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbiNjb250ZW50IHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5uYXZpZ2F0aW9uLWJhciB7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTEsIDExMSwgMTExLCAwLjcpOyAqL1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiKDk2LCA0MSwgNDEsIDApO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBnYXA6IDMwcHg7XG59XG5cbi5uYXZpZ2F0aW9uLWJhcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMSwgMTExLCAxMTEsIDAuNyk7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYig5NiwgNDEsIDQxKTtcbn1cblxuLm5hdmlnYXRpb24tdGFiIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDQxLCA0MSk7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbn1cblxuLmRpc2FibGVkLXRhYiB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG4uaG9tZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogbWluLXdpZHRoOiAxMDB2aDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgKi9cbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICBtaW4td2lkdGg6IDcwMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmcjtcbiAgICBjb2x1bW4tZ2FwOiAzMHB4O1xuICAgIHBhZGRpbmc6IDEwMHB4IDMwMHB4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn07XG5cbi5ob21lMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbnRlbnQ6ICdGcm9ncyc7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ob21lMSAqIHtcbiAgICBjb2xvcjogcmdiKDIyNCwgMjIzLCAyMjMpO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDMwcHggcmdiKDExOSwgMTE4LCAxMTgpO1xufVxuXG4uaG9tZS10aXRsZS1jb250YWluZXIge1xuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi13aWR0aDogNDg1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbn1cblxuLmhvbWUxIGgxIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNjJweDtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDNweCA1MHB4IHJnYigyNCwgMjMsIDIzKTtcbn1cblxuLmhvbWUtYm94IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDNweCA1MHB4IHJnYigyNCwgMjMsIDIzKTtcbn1cblxuLmhhdC1pY29uIHtcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMHB4O1xuICAgIHJpZ2h0OiA4NXB4OyAqL1xuICAgIGZpbHRlcjogaW52ZXJ0KDgwJSkgc2VwaWEoNDQlKSBzYXR1cmF0ZSg0NTUlKSBodWUtcm90YXRlKDZkZWcpIGJyaWdodG5lc3MoOTklKSBjb250cmFzdCg5MyUpO1xuICAgIGhlaWdodDogMTAwcHg7XG59XG5cbi5ob21lLWhvb2sge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDNweCA1MHB4IHJnYigxMSwgMTEsIDExKTtcbn1cblxuLmhvbWUtZGVzY3JpcHQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDNweCA1MHB4IHJnYigyNCwgMjMsIDIzKTtcbn1cblxuLm9yZGVyLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NiwgNDEsIDQxKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJveC1zaGFkb3c6IC0zcHggM3B4IDE3cHggMHB4IGJsYWNrO1xufVxuXG4uaG9tZTIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtY29sdW1uOiAyO1xuICAgIGdyaWQtcm93OiAxIC8gMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk2LCA0MSwgNDEsIDAuNik7XG4gICAgcGFkZGluZzogMzJweDtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIFxufVxuXG4uaG9tZTIgKiB7XG4gICAgY29sb3I6IGF6dXJlO1xufVxuXG4uaG9tZTIgaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAzcHggNTBweCByZ2IoMjQsIDIzLCAyMyk7XG59XG5cblxuXG4uZnJvZy1pY29uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cblxuLmFib3V0LWNvbnRhaW5lciB7XG4gICAgLyogZGlzcGxheTogOiBmbGV4OyAqL1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG1pbi13aWR0aDogMTAwdmg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247ICovXG59XG5cbi5hYm91dDEge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDEuNWZyO1xuICAgIG1pbi1oZWlnaHQ6IDY1dmg7XG4gICAgbWF4LXdpZHRoOiA4NXZoO1xuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTYsIDQxLCA0MSwgMC43KTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uYWJvdXQxLXRvcCB7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgODAsIDk4KTsgKi9cbn1cblxuLmFib3V0LXRpdGxlIHtcbiAgICAvKiBoZWlnaHQ6IDE1dmg7ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XG59XG5cbi5hYm91dC1wYXJhIHtcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHg7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcbn1cblxuLmFib3V0MS1ib3R0b20ge1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xufVxuXG4uYmVydGllLXBpYyB7XG4gICAgaGVpZ2h0OiAxNzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlcjogMzBweCBzb2xpZCByZ2IoNTgsIDgwLCA5OCk7XG59XG5cblxuLyogTWVudSBwYWdlICovXG5cbi5tZW51LWNvbnRhaW5lciB7XG4gICAgLyogZGlzcGxheTogZ3JpZDsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNhbG1vbjsgKi9cbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtaW4td2lkdGg6IDEwMHZoO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gICAgZ2FwOiAzMHB4O1xuICAgIHBhZGRpbmc6IDBweCAzNTBweDsgXG4gICAgcGFkZGluZy10b3A6IDEyMHB4O1xuICAgIFxufVxuXG4ubWVudS10aXRsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDI2MHB4O1xuICAgIHRvcDogNTBweDtcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XG59XG5cbi5tZW51MSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTYsIDQxLCA0MSwgMC43KTtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLm1lbnUtY2FyZCB7XG4gICAgLyogd2lkdGg6IDYyMHB4O1xuICAgIGhlaWdodDogMjgwcHg7ICovXG4gICAgd2lkdGg6IDg1dmg7XG4gICAgaGVpZ2h0OiAyMzBweDtcbiAgICBkaXNwbGF5OiAgZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA4MCwgOTgsIDAuOCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5tZW51LWltYWdlIHtcbiAgICBtYXgtaGVpZ2h0OiAyMTVweDtcbiAgICBtYXgtd2lkdGg6IDMyOXB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJveC1zaGFkb3c6IC0zcHggNXB4IDE3cHggLTFweCBibGFjaztcbiAgICBcbn1cblxuLm1lbnUtaXRlbS10eHQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAvKiBjb2xvcjogcmdiKDE4NCwgMTU0LCAxMDIpOyAqL1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm1lbnUtaXRlbS10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBjb2xvcjogcmdiKDIwMiwgMTg1LCAxNjEpO1xuICAgIFxufVxuXG5cblxuLm1lbnUyIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIHdpZHRoOiAzMHZoO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjE0LCAyMDUsIDAuNyk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLm1lbnUyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubWVudTItdGl0bGUge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBpbnNldCByZ2IoMzgsIDM3LCAzNyk7XG59XG5cbi5tZW51Mi1ob3VyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLHlEQUFxRDtJQUNyRCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osK0NBQStDO0lBQy9DLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsMkNBQTJDO0lBQzNDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiO3dCQUNvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lB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YTtJQUNiLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCOztBQUU3Qjs7OztBQUlBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIseUNBQXlDO0lBQ3pDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWdzL3dpemFyZC1iYWNrZ3JvdW5kLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4ubmF2aWdhdGlvbi1iYXIge1xcbiAgICBoZWlnaHQ6IDU1cHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTEsIDExMSwgMTExLCAwLjcpOyAqL1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiKDk2LCA0MSwgNDEsIDApO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbi5uYXZpZ2F0aW9uLWJhcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTEsIDExMSwgMTExLCAwLjcpO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiKDk2LCA0MSwgNDEpO1xcbn1cXG5cXG4ubmF2aWdhdGlvbi10YWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDkwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk2LCA0MSwgNDEpO1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuLmRpc2FibGVkLXRhYiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5ob21lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIG1pbi13aWR0aDogMTAwdmg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gICAgbWluLXdpZHRoOiA3MDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyO1xcbiAgICBjb2x1bW4tZ2FwOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAxMDBweCAzMDBweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn07XFxuXFxuLmhvbWUxIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY29udGVudDogJ0Zyb2dzJztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob21lMSAqIHtcXG4gICAgY29sb3I6IHJnYigyMjQsIDIyMywgMjIzKTtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMzBweCByZ2IoMTE5LCAxMTgsIDExOCk7XFxufVxcblxcbi5ob21lLXRpdGxlLWNvbnRhaW5lciB7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWluLXdpZHRoOiA0ODVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4uaG9tZTEgaDEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA2MnB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDNweCA1MHB4IHJnYigyNCwgMjMsIDIzKTtcXG59XFxuXFxuLmhvbWUtYm94IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAzcHggNTBweCByZ2IoMjQsIDIzLCAyMyk7XFxufVxcblxcbi5oYXQtaWNvbiB7XFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMHB4O1xcbiAgICByaWdodDogODVweDsgKi9cXG4gICAgZmlsdGVyOiBpbnZlcnQoODAlKSBzZXBpYSg0NCUpIHNhdHVyYXRlKDQ1NSUpIGh1ZS1yb3RhdGUoNmRlZykgYnJpZ2h0bmVzcyg5OSUpIGNvbnRyYXN0KDkzJSk7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5ob21lLWhvb2sge1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIHRleHQtc2hhZG93OiAwcHggM3B4IDUwcHggcmdiKDExLCAxMSwgMTEpO1xcbn1cXG5cXG4uaG9tZS1kZXNjcmlwdCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAzcHggNTBweCByZ2IoMjQsIDIzLCAyMyk7XFxufVxcblxcbi5vcmRlci1idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDQxLCA0MSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJveC1zaGFkb3c6IC0zcHggM3B4IDE3cHggMHB4IGJsYWNrO1xcbn1cXG5cXG4uaG9tZTIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTYsIDQxLCA0MSwgMC42KTtcXG4gICAgcGFkZGluZzogMzJweDtcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIFxcbn1cXG5cXG4uaG9tZTIgKiB7XFxuICAgIGNvbG9yOiBhenVyZTtcXG59XFxuXFxuLmhvbWUyIGgzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIHRleHQtc2hhZG93OiAycHggM3B4IDUwcHggcmdiKDI0LCAyMywgMjMpO1xcbn1cXG5cXG5cXG5cXG4uZnJvZy1pY29uIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcblxcbi5hYm91dC1jb250YWluZXIge1xcbiAgICAvKiBkaXNwbGF5OiA6IGZsZXg7ICovXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBtaW4td2lkdGg6IDEwMHZoO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247ICovXFxufVxcblxcbi5hYm91dDEge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxLjVmcjtcXG4gICAgbWluLWhlaWdodDogNjV2aDtcXG4gICAgbWF4LXdpZHRoOiA4NXZoO1xcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NiwgNDEsIDQxLCAwLjcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4uYWJvdXQxLXRvcCB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA4MCwgOTgpOyAqL1xcbn1cXG5cXG4uYWJvdXQtdGl0bGUge1xcbiAgICAvKiBoZWlnaHQ6IDE1dmg7ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzM3B4O1xcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcbi5hYm91dC1wYXJhIHtcXG4gICAgcGFkZGluZzogMjBweCAyNXB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcbi5hYm91dDEtYm90dG9tIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxufVxcblxcbi5iZXJ0aWUtcGljIHtcXG4gICAgaGVpZ2h0OiAxNzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgYm9yZGVyOiAzMHB4IHNvbGlkIHJnYig1OCwgODAsIDk4KTtcXG59XFxuXFxuXFxuLyogTWVudSBwYWdlICovXFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gICAgLyogZGlzcGxheTogZ3JpZDsgKi9cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNhbG1vbjsgKi9cXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTAwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDBweCAzNTBweDsgXFxuICAgIHBhZGRpbmctdG9wOiAxMjBweDtcXG4gICAgXFxufVxcblxcbi5tZW51LXRpdGxlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAyNjBweDtcXG4gICAgdG9wOiA1MHB4O1xcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcbi5tZW51MSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NiwgNDEsIDQxLCAwLjcpO1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLm1lbnUtY2FyZCB7XFxuICAgIC8qIHdpZHRoOiA2MjBweDtcXG4gICAgaGVpZ2h0OiAyODBweDsgKi9cXG4gICAgd2lkdGg6IDg1dmg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIGRpc3BsYXk6ICBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDgwLCA5OCwgMC44KTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgcGFkZGluZzogMjVweDtcXG59XFxuXFxuLm1lbnUtaW1hZ2Uge1xcbiAgICBtYXgtaGVpZ2h0OiAyMTVweDtcXG4gICAgbWF4LXdpZHRoOiAzMjlweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBib3gtc2hhZG93OiAtM3B4IDVweCAxN3B4IC0xcHggYmxhY2s7XFxuICAgIFxcbn1cXG5cXG4ubWVudS1pdGVtLXR4dCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIC8qIGNvbG9yOiByZ2IoMTg0LCAxNTQsIDEwMik7ICovXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLm1lbnUtaXRlbS10aXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIGNvbG9yOiByZ2IoMjAyLCAxODUsIDE2MSk7XFxuICAgIFxcbn1cXG5cXG5cXG5cXG4ubWVudTIge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgd2lkdGg6IDMwdmg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjE0LCAyMDUsIDAuNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi5tZW51Mi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWVudTItdGl0bGUge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggaW5zZXQgcmdiKDM4LCAzNywgMzcpO1xcbn1cXG5cXG4ubWVudTItaG91ciB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgQmVydGllIGZyb20gJy4vaW1ncy9CZXJ0aWUuanBnJztcblxuY29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXG5cbmV4cG9ydCBjb25zdCBhYm91dFBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgYWJvdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWJvdXQtY29udGFpbmVyJyk7XG4gICAgY29uc29sZS5sb2coJ0Fib3V0IHBhZ2UgaW5zZXJ0ZWQnKTtcblxuICAgIC8vIG1haW4gY29udGFpbmVyIGZvciB0aGUgcmVzdCBvZiB0aGUgZWxlbWVudHMgb24gdGhlIGFib3V0IHBhZ2VcbiAgICBjb25zdCBhYm91dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dEZhY3RvcnkuYWRkVG9BYm91dChhYm91dDEsICdhYm91dDEnLCBhYm91dENvbnRhaW5lcik7XG4gICAgY29uc29sZS5sb2coYWJvdXQxKTtcblxuICAgIC8vIGNvbnRhaW5lciB0aGF0IGNvbnRhaW5zIHRoZSB0aXRsZSBhbmQgcGFyYWdyYXBoXG4gICAgY29uc3QgYWJvdXQxVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRGYWN0b3J5LmFkZFRvQWJvdXQoYWJvdXQxVG9wLCAnYWJvdXQxLXRvcCcsIGFib3V0MSk7XG5cblxuICAgIGNvbnN0IGFib3V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0RmFjdG9yeS5hZGRUb0Fib3V0KGFib3V0VGl0bGUsICdhYm91dC10aXRsZScsIGFib3V0MVRvcCk7XG4gICAgYWJvdXRUaXRsZS50ZXh0Q29udGVudCA9ICdBIFN0b3J5IExvbmcgaW4gdGhlIE1ha2luZydcblxuICAgIGNvbnN0IGFib3V0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhYm91dEZhY3RvcnkuYWRkVG9BYm91dChhYm91dFBhcmFncmFwaCwgJ2Fib3V0LXBhcmEnLCBhYm91dDFUb3ApXG4gICAgYWJvdXRQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgR3Jvd2luZyB1cCBpbiBhIHNtYWxsIG11Z2dsZSB0b3duIG9mZiB0aGUgY29hc3QganVzdCBzaHlcbiAgICBvZiBXZXltb3V0aCwgQmVydGllIEJvdHRzIHdhcyBhbHdheXMgb25lIG9mIHRoZSBwZWN1bGlhciBzb3J0LiBXaXRoIG5vdCBtdWNoXG4gICAgdG8gZG8gYXJvdW5kIGhpcyBob21lLCBoZSB3b3VsZCBjcmVhdGUgZmFudGFzdGljYWwgY29uY290aW9ucyB1c2luZyBhbGwgc29ydHNcbiAgICBvZiB0aGluZ3MsIG5vdCBleGNsdWRpbmcgc2Vhd2VlZCwgc2VhZ3VsbCBmZWF0aGVycywgaG91c2UgZGV0ZXJnZW50cywgYW5kIGxhbWIgbXVjdXMuXG4gICAgT25jZSBoZSBkaXNjb3ZlcmVkIHRoZSB3b3JsZCBvZiB3aXphZHJ5IGFuZCBhdHRlbmRpbmcgSG9nd2FydHMsIGhlIHF1aWNrbHlcbiAgICByb3NlIHRocm91Z2ggdGhlIHJhbmtzIHRvIGJlY29tZSBIdWZmbGVwdWZmJ3MgaGVhZCBjaGVmLiAzMCB5ZWFycyBsYXRlciwgQmVydGllXG4gICAgaXMgc3RpbGwgdXNpbmcgaGlzIGNyZWF0aXZlbnNzIGFuZCBwYXNzaW9uIHRvIHJ1biBoaXMgb3duIHJlc3RhdXJhbnQgYW5kIGNhbmR5IHNob3AsIFxuICAgICdCZXJ0aWUncyBCb3R0J3MsIG9uZSBvZiB0aGUgbW9zdCBwb3B1bGFyIGFuZCBleHRyYXZhZ2VudCBicmFuZHMgaW4gdGhlIFdpemFyZGluZyBXb3JsZGBcblxuICAgIC8vIGNvbnRhaW5lciB0aGF0IGNvbnRhaW5zIGltYWdlXG4gICAgY29uc3QgYWJvdXQxQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRGYWN0b3J5LmFkZFRvQWJvdXQoYWJvdXQxQm90dG9tLCAnYWJvdXQxLWJvdHRvbScsIGFib3V0MSk7XG5cbiAgICAvLyBpbWFnZSBmb3IgQWJvdXQgcGFnZVxuICAgIGNvbnN0IGFib3V0UGljID0gbmV3IEltYWdlKCk7XG4gICAgYWJvdXRQaWMuc3JjID0gQmVydGllO1xuICAgIGFib3V0RmFjdG9yeS5hZGRUb0Fib3V0KGFib3V0UGljLCAnYmVydGllLXBpYycsIGFib3V0MUJvdHRvbSk7XG59XG5cblxuLy8gZWxlbWVudE5hbWUgID0gcmVmZXJlbmNlIG5hbWVcbi8vIGVsZW1lbnQgPSB0eXBlIG9mIEhUTUwgZWxlbWVudCB3ZSB3YW50IHRvIGNyZWF0ZVxuLy8gY2xhc3NOYW1lID0gbmFtZSBvZiBjbGFzcyB3ZSB3YW50IHRvIGFzc2lnblxuLy8gZmF0aGVyRWxlbWVudCA9IG5hbWUgb2YgY29udGFpbmVyIHdlIHdhbnQgdG8gYXBwZW5kIHRvXG5jb25zdCBhYm91dEZhY3RvcnkgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgZnVuY3Rpb24gYWRkVG9BYm91dChlbGVtZW50TmFtZSwgY2xhc3NOYW1lLCBmYXRoZXJFbGVtZW50ICkge1xuICAgICAgICBlbGVtZW50TmFtZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIGZhdGhlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudE5hbWUpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnROYW1lKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnROYW1lO1xuICAgIH07XG4gICAgcmV0dXJuIHthZGRUb0Fib3V0fTtcbn0pKCk7XG5cblxuXG5leHBvcnQge2Fib3V0Q29udGFpbmVyfTtcbiIsIlxuXG5pbXBvcnQgZnJvZyBmcm9tICcuL2ltZ3MvVGhlRnJvZ0Nob2lySE0ucG5nJztcblxuaW1wb3J0IEhhdCBmcm9tICcuL2ltZ3Mvd2FybG9jay5wbmcnO1xuXG5cblxuY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5leHBvcnQgY29uc3QgaG9tZVBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gbmVlZCB0byBzdGFydCB3aXRoIGFuIG91dGVyIGNvbnRhaW5lciAuLiB0aGlzIG91dGVyXG4gICAgLy8gY29udGFpbmVyIHdpbGwgYmVjb21lIHRoZSBjaGlsZCBjb250YWluZXIgb2YgdGhlXG4gICAgLy8gY29udGVudCBkaXYsIHRodXMgbWFraW5nIGl0IHZpc2libGUgb24gdGhlIHBhZ2VcblxuICAgXG4gICAgY29uc3QgaG9tZURpdk5hbWVzID0gWydob21lMScsICdob21lMiddO1xuICAgIGxldCBob21lRGl2cyA9IFtdO1xuXG5cbiAgICAvLyB0aGlzIHdvbid0IGJlIGFwcGVuZGVkIHRvIHRoZSB0aGUgXCJjb250ZW50XCIgZGl2IHVudGlsIGl0IGlzXG4gICAgLy8gY2FsbGVkIHVwb24gaW4gdGhlIGluZGV4LmpzIGZpbGVcblxuICAgIGhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZS1jb250YWluZXInKTtcbiAgIFxuXG4gICAgLy8gY3JlYXRlIDMgZGl2IGNvbnRhaW5lcnMgd2l0aGluIHRoZSBob21lQ29udGFpbmVyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob21lRGl2LmNsYXNzTGlzdC5hZGQoaG9tZURpdk5hbWVzW2ldKTtcbiAgICAgICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lRGl2KTtcbiAgICAgICAgaG9tZURpdnMucHVzaChob21lRGl2KTtcbiAgICB9O1xuICAgIGxldCBob21lMSA9IGhvbWVEaXZzWzBdO1xuICAgIGxldCBob21lMiA9IGhvbWVEaXZzWzFdO1xuXG5cbiAgICAvLyBzdHlsZSBlYWNoIGhvbWVEaXYgYWNjb3JkaW5nbHlcbiAgICAvLyBob21lMTpcbiAgICBzdHlsZUhvbWUxKGhvbWUxKTtcbiAgICBzdHlsZUhvbWUyKGhvbWUyKTtcblxuXG4gICAgY29uc29sZS5sb2coJ2hvbWVwYWdlIGlzIGxpbmtlZCcpO1xuXG59XG5cblxuXG5mdW5jdGlvbiBzdHlsZUhvbWUxIChob21lMSkge1xuICAgIGNvbnN0IGhvbWVUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVUaXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob21lLXRpdGxlLWNvbnRhaW5lcicpO1xuICAgIGhvbWUxLmFwcGVuZENoaWxkKGhvbWVUaXRsZUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBob21lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhvbWVUaXRsZS50ZXh0Q29udGVudCA9IGBCZXJ0aWUgQm90dFxcJ3NgXG4gICAgaG9tZVRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVUaXRsZSk7XG5cbiAgICBjb25zdCBob21lTG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGhvbWVMb2dvLnNyYyAgPSBIYXQ7XG4gICAgaG9tZUxvZ28uY2xhc3NMaXN0LmFkZCgnaGF0LWljb24nKVxuICAgIGhvbWVUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lTG9nbyk7XG5cblxuXG4gICAgY29uc3QgaG9tZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVCb3guY2xhc3NMaXN0LmFkZCgnaG9tZS1ib3gnKTtcbiAgICBob21lMS5hcHBlbmRDaGlsZChob21lQm94KTtcblxuICAgIGNvbnN0IGhvbWVIb29rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBob21lSG9vay50ZXh0Q29udGVudCA9ICdBZGQgYSBiaXQgb2YgTWFnaWMgdG8geW91ciBldmVuaW5nIC4uLidcbiAgICBob21lSG9vay5jbGFzc0xpc3QuYWRkKCdob21lLWhvb2snKVxuICAgIGhvbWVCb3guYXBwZW5kQ2hpbGQoaG9tZUhvb2spO1xuXG4gICAgY29uc3QgaG9tZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBob21lRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnQ29tZSBkaW5lIHdpdGggeW91ciBmZWxsb3cgd2l0Y2hlcyBhbmQgd2l6YXJkcyBhdCBvdXIgNSBzdGFyIGVzdGFibGlzaG1lbnQgb24gdGhlIGNvcm5lciBvZiBDcmVzY2VudCBhbmQgRG9iYnkgaW4gdXBwZXIgRGlhZ29uIEFsbGV5JztcbiAgICBob21lRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaG9tZS1kZXNjcmlwdCcpXG4gICAgaG9tZUJveC5hcHBlbmRDaGlsZChob21lRGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3Qgb3JkZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBvcmRlckJ1dHRvbi50ZXh0Q29udGVudCA9ICdPcmRlciBPbmxpbmUnO1xuICAgIG9yZGVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ29yZGVyLWJ1dHRvbicpO1xuICAgIGhvbWVCb3guYXBwZW5kQ2hpbGQob3JkZXJCdXR0b24pO1xuXG59XG5cbmZ1bmN0aW9uIHN0eWxlSG9tZTIgKGhvbWUyKSB7XG4gICAgY29uc3QgZnJvZ0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBmcm9nSWNvbi5zcmMgPSBmcm9nO1xuICAgIGZyb2dJY29uLmNsYXNzTGlzdC5hZGQoJ2Zyb2ctaWNvbicpXG4gICAgaG9tZTIuYXBwZW5kQ2hpbGQoZnJvZ0ljb24pO1xuXG4gICAgY29uc3QgZnJvZ1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBmcm9nVGl0bGUudGV4dENvbnRlbnQgPSAnTGl2ZSBwZXJmb3JtYW5jZXMgZnJvbSBGcm9nIENob2lyIGV2ZXJ5IEZyaWRheSBhdCA3cG0nO1xuICAgIC8vIGZyb2dUaXRsZS5jbGFzc0xpc3QuYWRkKCdmcm9nLXRpdGxlJyk7XG4gICAgaG9tZTIuYXBwZW5kQ2hpbGQoZnJvZ1RpdGxlKTtcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGNsZWFySG9tZSAoaGFzQmVlblJ1bikge1xuLy8gICAgIGNvbnNvbGUubG9nKCdjbGVhcmVkJyk7XG4vLyAgICAgaGFzQmVlblJ1biA9IHRydWU7XG4vLyAgICAgY29uc29sZS5sb2coaGFzQmVlblJ1bik7XG4vLyB9XG5cbmV4cG9ydCB7aG9tZUNvbnRhaW5lcn07XG5cblxuXG4iLCJcbmltcG9ydCBjYWtlcyBmcm9tICcuL2ltZ3MvQ2F1bGRyb24tQ2FrZXMuanBnJztcbmltcG9ydCBzbmFrZSBmcm9tICcuL2ltZ3Mvc25ha2UtZmlsZXQuanBnJztcbmltcG9ydCBiZWFucyBmcm9tICcuL2ltZ3MvYmVhbnMuanBnJztcbmltcG9ydCBwaWUgZnJvbSAnLi9pbWdzL3NoZXBoZXJkLmpwZyc7XG5pbXBvcnQgYmVlciBmcm9tICcuL2ltZ3MvQnV0dGVyLWJlZXIuanBnJztcblxuLy8gcGxhbiBpc3RvIGNyZWF0ZSB0d28gbWFpbiBjb250YWluZXJzIGhlcmUuIE9uZSB3aWxsIGJlIG11Y2hcbi8vIGJpZ2dlciBhbmQgY29udGFpbiB0aGUgc2Nyb2xsYWJsZSBtZW51LiBUaGUgb3RoZXIgd2lsbCBiZVxuLy8gYSBzbWFsbGVyIGJveCB0aGF0IGxpc3RzIHRoZSBIb3VycyBvZiB0aGUgcmVzdGF1cmFudFxuY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbmV4cG9ydCBjb25zdCBtZW51UGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG4gICAgY29uc29sZS5sb2coJ21lbnUgcGFnZSBsaW5rZWQnKTtcblxuICAgIC8vIGFycmF5IGZvciB0aGUgbWVudSBpdGVtc1xuICAgIC8vIGNvbnN0IG1lbnVJdGVtcyA9IFsnQ2FybFxcJ3MgQ2F1bGRyb24gQ2FrZXMnLCAnRmVubnkgU25ha2UgRmlsZXQnLCBcbiAgICAvLyAnQmVydGllIEJvdHRcXCdzIEV2ZXJ5IEZsYXZvdXIgQmVhbnMnLCAnU2hlcGFyZCBQaWUnLCAnQnV0dGVyQmVlciddXG5cbiAgICBjb25zdCBtZW51SW1hZ2VzID0gW2Nha2VzLCBzbmFrZSwgYmVhbnMsIHBpZSwgYmVlcl07XG5cbiAgICAvLyB3aGVyZSBjYXJkIG1lbW9yeSB3aWxsIGJlIHN0b3JlZCBvbmNlIHRoZSBmb3IgbG9vcCBpcyBmaW5pc2hlZFxuICAgIGNvbnN0IG1lbnVDYXJkVGV4dHMgPSBbXTtcblxuICAgIGNvbnN0IG1lbnVPYmplY3RzID0gW107XG5cblxuICAgIC8vY3JlYXRlIDJtYWluIGNvbnRhaW5lcnMgZm9yIHRoZSBwYWdlXG4gICAgY29uc3QgbWVudTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVGYWN0b3J5LmFkZFRvTWVudShtZW51MSwgJ21lbnUxJywgbWVudUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBtZW51MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudUZhY3RvcnkuYWRkVG9NZW51KG1lbnUyLCAnbWVudTInLCBtZW51Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IG1lbnUyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG1lbnVGYWN0b3J5LmFkZFRvTWVudShtZW51MlRpdGxlLCAnbWVudTItdGl0bGUnLCBtZW51Mik7XG4gICAgbWVudTJUaXRsZS50ZXh0Q29udGVudCA9ICdIb3Vycyc7XG5cbiAgICBjb25zdCBtZW51MkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVGYWN0b3J5LmFkZFRvTWVudShtZW51MkNvbnRhaW5lciwgJ21lbnUyLWNvbnRhaW5lcicsIG1lbnUyKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1lbnUySG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG1lbnVGYWN0b3J5LmFkZFRvTWVudShtZW51MkhvdXIsICdtZW51Mi1ob3VyJywgbWVudTJDb250YWluZXIpO1xuXG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICBtZW51MkhvdXIudGV4dENvbnRlbnQgPSAnTW9uZGF5OiAyOjAwIC0gOTowMHBtJ1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICAgIG1lbnUySG91ci50ZXh0Q29udGVudCA9ICdUdWVzZGF5OiAxMjowMCAtIDk6MDBwbSdcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAyKSB7XG4gICAgICAgICAgICBtZW51MkhvdXIudGV4dENvbnRlbnQgPSAnV2VkbmVzZGF5OiAxMjowMCAtIDk6MDBwbSdcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAzKSB7XG4gICAgICAgICAgICBtZW51MkhvdXIudGV4dENvbnRlbnQgPSAnVGh1cnNkYXk6IDEyOjAwIC0gOTowMHBtJ1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDQpIHtcbiAgICAgICAgICAgIG1lbnUySG91ci50ZXh0Q29udGVudCA9ICdGcmlkYXk6IDEyOjAwcG0gLSAxMjowMGFtJ1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDUpIHtcbiAgICAgICAgICAgIG1lbnUySG91ci50ZXh0Q29udGVudCA9ICdTYXR1cmRheTogMTI6MDBwbSAtIDEyOjAwYW0nXG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gNikge1xuICAgICAgICAgICAgbWVudTJIb3VyLnRleHRDb250ZW50ID0gJ1N1bmRheTogMTI6MDBwbSAtIDY6MDBwbSdcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8vdGl0bGUgY3JlYXRpb25cbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG1lbnVGYWN0b3J5LmFkZFRvTWVudShtZW51VGl0bGUsICdtZW51LXRpdGxlJywgbWVudUNvbnRhaW5lcik7XG4gICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gJ1Rha2UgYSBHYW5kZXIuLi4gJztcblxuXG4gICAgLy8gbWVudSBpdGVtczogd2lsbCBpdGVyYXRlIHRocm91Z2ggYW4gYXJyYXkgdG8gY3JlYXRlIGEgXG4gICAgLy8gbnVtYmVyIG9mIG1lbnUgSXRlbXMgLi4uIGltYWdlcyB3aWxsIGJlIGluc2VydGVkIGJhc2VkIG9uIHdoYXRcbiAgICAvLyB0aGUgaW1hZ2UgYXJyYXkgY29udGFpbnNcblxuICAgIC8vIG1heWJlIGdpdmUgZWFjaCBkaXYgYW4gSUQgYmFzZWQgb24gdGhlIGFycmF5IGl0ZW0gLi4uIHRvIGJlIFxuICAgIC8vIGFibGUgdG8gaW5zZXJ0IGN1c3RvbSBtZW51IGl0ZW0gdGV4dCBsYXRlclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBtZW51Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51RmFjdG9yeS5hZGRUb01lbnUobWVudUNhcmQsICdtZW51LWNhcmQnLCBtZW51MSk7XG5cbiAgICAgICAgLy8gY3JlYXRlIG1lbnVJbWFnZVxuICAgICAgICBjb25zdCBtZW51SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbWVudUltYWdlLnNyYyA9IG1lbnVJbWFnZXNbaV07XG4gICAgICAgIG1lbnVGYWN0b3J5LmFkZFRvTWVudShtZW51SW1hZ2UsICdtZW51LWltYWdlJywgbWVudUNhcmQpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBtZW51SXRlbVRleHQgZGl2XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG1lbnVGYWN0b3J5LmFkZFRvTWVudShtZW51SXRlbVRleHQsICdtZW51LWl0ZW0tdHh0JywgbWVudUNhcmQpO1xuXG4gICAgICAgIC8vIHB1c2ggdG8gYXJyYXkgc28gaXQgY2FuIGluZGl2aWR1YWxseSBzdHlsZSBsYXRlclxuICAgICAgICBtZW51Q2FyZFRleHRzLnB1c2gobWVudUl0ZW1UZXh0KTtcbiAgICB9O1xuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVDYXJkVGV4dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIG1lbnVGYWN0b3J5LmFkZFRvTWVudShtZW51SXRlbVRpdGxlLCAnbWVudS1pdGVtLXRpdGxlJywgbWVudUNhcmRUZXh0c1tpXSk7XG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1Xb3JkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbWVudUZhY3RvcnkuYWRkVG9NZW51KG1lbnVJdGVtV29yZHMsICdtZW51LWl0ZW0td29yZHMnLCBtZW51Q2FyZFRleHRzW2ldKTtcblxuICAgICAgICBjb25zdCBtZW51T2JqZWN0ID0ge1xuICAgICAgICAgICAgZm9vZFRpdGxlOiAnJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICB9O1xuICAgICAgICBtZW51T2JqZWN0cy5wdXNoKG1lbnVPYmplY3QpO1xuXG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgLy8gYXNzaWduIHZhbHVlcyB0byB0aGUgdGl0bGVzIGFuZCB0ZXh0c1xuICAgICAgICAgICAgbWVudU9iamVjdC5mb29kVGl0bGUgPSBgQ2FybCdzIENhdWxkcm9uIENha2VzYCArIGAgICBgICsgYCQxNy45OWA7XG4gICAgICAgICAgICBtZW51T2JqZWN0LmRlc2NyaXB0aW9uID0gYFRoZXNlIGZhbW91cyBjYWtlcyB3aWxsIG1ha2UgeW91ciB3YW5kIHRpbmdsZVxuICAgICAgICAgICAgd2l0aCB0aGVpciBzd2FybXkgYW5kIGNyZWFtLW9mLXRvYWQgZmlsbGluZyBzdXJyb25kZWQgYnkgYSB3YXJtIGNydXN0IG9mIFxuICAgICAgICAgICAgYnJlYWQgY3J1bWJzIGFuZCBmaWdnbGVyb290LmA7XG5cbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAxKSB7XG4gICAgICAgICAgICBtZW51T2JqZWN0LmZvb2RUaXRsZSA9IGBGZW5ueSBTbmFrZSBGaWxldGAgKyBgICAgYCArIGAkMzkuMDBgO1xuICAgICAgICAgICAgbWVudU9iamVjdC5kZXNjcmlwdGlvbiA9IGBXZSBhY3F1aXJlIG91ciBGZW5uaWVzIGFtb25nc3QgdGhlIGhpZ2hlc3QgXG4gICAgICAgICAgICBwZWFrcyBvZiB0aGUgSGlnaGxhbmRzIG5lYXIgSG9nd2FydHMsIG1ha2luZyB0aGlzIHN0ZWFrIGFic29sdXRsZXkgdG9wXG4gICAgICAgICAgICBvZiB0aGUgbGluZWA7XG5cbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAyKSB7XG4gICAgICAgICAgICBtZW51T2JqZWN0LmZvb2RUaXRsZSA9IGBCZXJ0aWUgQm90dCdzIEV2ZXJ5IEZsYXZvciBCZWFuc2AgKyBgICAgYCArIGAkNy45OWA7XG4gICAgICAgICAgICBtZW51T2JqZWN0LmRlc2NyaXB0aW9uID0gYEEgY2xhc3NpYyB0aGF0IFdpemFyZHMgYW5kIFdpdGNoZXMgaGF2ZSBlbmpveWVkIGFsbFxuICAgICAgICAgICAgb3ZlciB0aGUgd29ybGQgZm9yIGRlY2FkZXMuIFBpY2sgYSBiZWFuIGF0IHlvdXIgb3duIHJpc2sgYW5kIGhvcGUgeW91J3JlIG5vdFxuICAgICAgICAgICAgY29uZnVzaW5nIEJsYWNrIExpY29yaWNlIHdpdGggQXNoISFgO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcbiAgICAgICAgICAgIG1lbnVPYmplY3QuZm9vZFRpdGxlID0gYFNoZXBoZXJkJ3MgUGllYCArIGAgICBgICsgYCQxNS45OWA7XG4gICAgICAgICAgICBtZW51T2JqZWN0LmRlc2NyaXB0aW9uID0gYEJlcnRpZSdzIGhvbWVtYWRlIFNoZXBoZXJkJ3MgUGllIHdhcyBzZWxlY3RlZCBpbiAyMDIwXG4gICAgICAgICAgICBhcyBvbmUgb2YgdGhlIFdpemFyZGluZyBXb3JsZCdzIG1vc3QgXCJoaWRkZW4gYW5kIHVuZGVyYXRlZCBwaWVzXCIgYnkgdGhlIHdlbGwga25vd25cbiAgICAgICAgICAgIGNyaXRpYyBTdGFubHkgU2tpbXdlZWQuIENvbWUgYW5kIHNlZSBmb3IgeW91cnNlbGYhYDtcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSA0KSB7XG4gICAgICAgICAgICBtZW51T2JqZWN0LmZvb2RUaXRsZSA9IGBCdXR0ZXJCZWVyICAgICAkNC45OWA7XG4gICAgICAgICAgICBtZW51T2JqZWN0LmRlc2NyaXB0aW9uID0gYElmIHlvdSdyZSBmZWVsaW5nIGEgbGl0dGxlIGtuYWNrZXJlZCBmcm9tIGFsbCB0aGF0XG4gICAgICAgICAgICBzcGVsbCBjYXN0aW5nIGFuZCB0aGVuIHNvbWUsIGFuIGljZSBjb2xkLCBndXJnbGluZywgYW5kIGNyZWFteSBCdXR0ZXJCZWVyXG4gICAgICAgICAgICBpcyB0aGUgd2F5IHRvIGdvIWA7XG4gICAgICAgIH07XG5cbiAgICAgICAgbWVudUl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IG1lbnVPYmplY3QuZm9vZFRpdGxlO1xuICAgICAgICBtZW51SXRlbVdvcmRzLnRleHRDb250ZW50ID0gbWVudU9iamVjdC5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc29sZS5sb2coIG1lbnVJdGVtVGl0bGUpO1xuICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZyhtZW51T2JqZWN0cyk7XG5cbiAgICAvLyAvLyBhc3NpZ24gdmFsdWVzIHRvIHRoZSB0aXRsZXMgYW5kIHRleHRzXG4gICAgLy8gbWVudU9iamVjdHNbMF0uZm9vZFRpdGxlID0gJ0NhcmxcXCdzIENhdWxkcm9uIENha2VzICAgICQxNy45OSc7XG4gICAgLy8gbWVudU9iamVjdHNbMF0uZGVzY3JpcHRpb24gPSBgVGhlc2UgZmFtb3VzIGNha2VzIHdpbGwgbWFrZSB5b3VyIHdhbmQgdGluZ2xlXG4gICAgLy8gd2l0aCB0aGVpciBzd2FybXkgYW5kIGNyZWFtLW9mLXRvYWQgZmlsbGluZyBzdXJyb25kZWQgYnkgYSB3YXJtIGNydXN0IG9mIFxuICAgIC8vIGJyZWFkIGNydW1icyBhbmQgZmlnZ2xlcm9vdC5gO1xuXG4gICAgLy8gLy8gbWVudUNhcmRUZXh0c1swXS5tZW51SXRlbVRpdGxlLnRleHRDb250ZW50ID0gbWVudU9iamVjdHNbMF0uZm9vZFRpdGxlO1xuICAgIC8vIGNvbnNvbGUubG9nKCBtZW51Q2FyZFRleHRzWzBdLm1lbnVJdGVtVGl0bGUpO1xuXG5cblxufTtcblxuXG5jb25zdCBtZW51RmFjdG9yeSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBmdW5jdGlvbiBhZGRUb01lbnUoZWxlbWVudE5hbWUsIGNsYXNzTmFtZSwgZmF0aGVyRWxlbWVudCApIHtcbiAgICAgICAgZWxlbWVudE5hbWUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICBmYXRoZXJFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnROYW1lKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50TmFtZSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50TmFtZTtcbiAgICB9O1xuICAgIHJldHVybiB7YWRkVG9NZW51fTtcbn0pKCk7XG5cblxuZXhwb3J0IHttZW51Q29udGFpbmVyfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCAnLi9ob21lLmpzJztcbmltcG9ydCB7IGhvbWVQYWdlLCBob21lQ29udGFpbmVyIH0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7IGFib3V0UGFnZSwgYWJvdXRDb250YWluZXIgfSBmcm9tICcuL2Fib3V0LmpzJztcbmltcG9ydCB7IG1lbnVQYWdlLCBtZW51Q29udGFpbmVyIH0gZnJvbSAnLi9tZW51LmpzJztcblxuXG5jb25zb2xlLmxvZygndGVzdCcpXG5cbi8vIG9iamVjdC9mYWN0b3J5IGZ1bmN0aW9uIHRoYXQgd2lsbCBjb25uZWN0IGFsbCBvZiB0aGUgd2ViaXN0ZSBwYWdlc1xuLy8gdG9nZXRoZXIuIEhlcmUgaXMgd2hlcmUgdGhlIG1haW4gZnVuY3Rpb25hbGl0eSB3aWxsIGJlLCB3aGVyZVxuLy8gdGhlIGNvcnJlY3QgcGFnZSB3aWxsIHJlbmRlciBhbmQgYmUgdmlzaWJsZSBiYXNlZCBvbiB3aGF0IHRhYnNcbi8vIHRoZSB1c2VyIGNsaWNrcyBhdCB0aGUgdG9wXG5cblxuLy8gY3JlYXRlIHRoZSBtYWluIHdlYnNpdGUgYmFyIGF0IHRoZSB0b3BcbmNvbnN0IHNpdGVOYXZpZ2F0b3IgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgY29uc3QgcGFnZUhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc29sZS5sb2cocGFnZUhvbGRlcik7XG5cbiAgICAvLyBjcmVhdGUgdGhlIG1haW4gd2Vic2l0ZSBiYXIgYXQgdGhlIHRvcFxuICAgIGNvbnN0IG5hdmlnYXRpb25CYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBuYXZpZ2F0aW9uQmFyLnRleHRDb250ZW50ID0gJ0JlcnRpZSBCb3R0XFwncyc7XG4gICAgbmF2aWdhdGlvbkJhci5jbGFzc0xpc3QuYWRkKCduYXZpZ2F0aW9uLWJhcicpO1xuXG4gICAgLy8gYWRkcyB0aGUgbmF2aWdhdGlvbiBiYXIgdG8gdGhlIHRvcFxuICAgIHBhZ2VIb2xkZXIuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbkJhcik7XG5cbiAgICAvLyBvcGVucyB1cCB0b3QgaGUgZGVmYXVsdCBob21lIHBhZ2VcbiAgICBob21lUGFnZSgpO1xuICAgIHBhZ2VIb2xkZXIuYXBwZW5kQ2hpbGQoaG9tZUNvbnRhaW5lcik7XG5cbiAgICBhYm91dFBhZ2UoKTtcbiAgICBwYWdlSG9sZGVyLmFwcGVuZENoaWxkKGFib3V0Q29udGFpbmVyKTtcblxuICAgIG1lbnVQYWdlKCk7XG4gICAgcGFnZUhvbGRlci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcblxuXG4gICAgLy8gYXJyYXkgY29udGFpbmluZyB0aGUgdGFiIG5hbWVzXG4gICAgY29uc3QgdGFiTmFtZXMgPSBbJ0hvbWUnLCAnQWJvdXQnLCAnTWVudScsICdSZXNlcnZhdGlvbnMnXVxuICAgIGNvbnN0IHRhYnMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbi10YWInKTtcbiAgICAgICAgdGFiLnRleHRDb250ZW50ID0gdGFiTmFtZXNbaV07XG4gICAgICAgIHRhYnMucHVzaCh0YWIpO1xuICAgICAgICBuYXZpZ2F0aW9uQmFyLmFwcGVuZENoaWxkKHRhYik7XG4gICAgfVxuXG4gICAgbGV0IGFjdGl2ZVRhYiA9IHRhYnNbMF07XG4gICAgdGFic1swXS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZC10YWInKTtcbiAgICBjb25zb2xlLmxvZyhhY3RpdmVUYWIpO1xuXG5cbiAgICBjb25zb2xlLmxvZyh0YWJzKVxuICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFiKTtcbiAgICAgICAgICAgIGFjdGl2ZVRhYiA9IHRhYjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZVRhYik7XG4gICAgICAgICAgICBzd2l0Y2hQYWdlKGFjdGl2ZVRhYik7XG4gICAgXG4gICAgICAgIH0pO1xuICAgXG4gICAgfSk7XG4gICBcblxuICAgIGZ1bmN0aW9uIHN3aXRjaFBhZ2UoYWN0aXZlVGFiKSB7XG4gICAgICAgIGlmIChhY3RpdmVUYWIgPT09IHRhYnNbMF0pIHtcbiAgICAgICAgICAgIHRhYnNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQtdGFiJyk7XG4gICAgICAgICAgICB0YWJzWzJdLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkLXRhYicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hvbWVwYWdlJyk7XG4gICAgICAgICAgICBob21lQ29udGFpbmVyLnN0eWxlID0gJ2Rpc3BsYXk6IGdyaWQnXG4gICAgICAgICAgICBhYm91dENvbnRhaW5lci5zdHlsZSA9ICdkaXNwbGF5OiBub25lJ1xuICAgICAgICAgICAgbWVudUNvbnRhaW5lci5zdHlsZSA9ICdkaXNwbGF5OiBub25lJ1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vIGhhdmUgdG8gZGlzYWJsZSB0aGUgSG9tZSBEaXYgY2xpY2tcbiAgICAgICAgICAgIHRhYnNbMF0uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQtdGFiJyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChhY3RpdmVUYWIgPT09IHRhYnNbMV0pIHtcbiAgICAgICAgICAgIHRhYnNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQtdGFiJyk7XG4gICAgICAgICAgICB0YWJzWzJdLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkLXRhYicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Fib3V0Jyk7XG4gICAgICAgICAgICBob21lQ29udGFpbmVyLnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnXG4gICAgICAgICAgICBhYm91dENvbnRhaW5lci5zdHlsZSA9ICdkaXNwbGF5OiBmbGV4J1xuICAgICAgICAgICAgbWVudUNvbnRhaW5lci5zdHlsZSA9ICdkaXNwbGF5OiBub25lJ1xuXG5cbiAgICAgICAgICAgIHRhYnNbMV0uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQtdGFiJyk7XG5cbiAgICAgICAgfSAgZWxzZSBpZiAoYWN0aXZlVGFiID09PSB0YWJzWzJdKSB7XG4gICAgICAgICAgICB0YWJzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkLXRhYicpO1xuICAgICAgICAgICAgdGFic1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZC10YWInKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNZW51IGNsaWNrZWQnKTtcblxuICAgICAgICAgICAgbWVudUNvbnRhaW5lci5zdHlsZSA9ICdkaXNwbGF5OiBncmlkOydcbiAgICAgICAgICAgIGhvbWVDb250YWluZXIuc3R5bGUgPSAnZGlzcGxheTogbm9uZSdcbiAgICAgICAgICAgIGFib3V0Q29udGFpbmVyLnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnXG5cbiAgICAgICAgICAgIHRhYnNbMl0uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQtdGFiJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb2VzbnQgZXhpc3QnKVxuICAgICAgICB9XG5cbiAgICB9XG5cblxufSkoKTtcblxuXG5cblxuLy8gYWRkIGFkZEV2ZW50TGlzdGVuZXJzIHRvIHRhYiBsaW5rcyBhdCB0aGUgdG9wIG9mIHBhZ2UsIHNvIHRoYXQgd2hlbiB0aGV5XG4vL2FyZSBjbGlja2VkLCB0aGUgY29ycmVjdCBwYWdlIGlzIGxvYWRlZCBpbiB0aHJvdWdoIHRoZSBcImNvbnRlbnRcIiBkaXYuXG5cbi8vIHdoZW4gb25lIHBhZ2UgaXMgc2VsZWN0ZWQsIHRoZSBvdGhlcnMgc2hvdWxkIGJlIHNldCB0b1xuLy8gJ2Rpc3BsYXk6IG5vbmUnXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==