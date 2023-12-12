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
    display: flex;
    flex-direction: column;
    justify-content: start;
    color: rgb(184, 154, 102);
    font-size: 17px;
}

.menu-item-title {
    margin-bottom: 25px;
    color: rgb(202, 185, 161);
    
}


.menu2 {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    background-color: antiquewhite;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["html {\n    min-height: 100%;\n}\n\nhtml, body {\n    margin: 0px;\n}\n\n#content {\n    min-height: 100vh;\n    width: 100%;\n    /* background-color: red; */\n    background-image: url('./imgs/wizard-background.jpg');\n    background-size: cover;\n}\n\n.navigation-bar {\n    height: 55px;\n    /* background-color: rgb(73, 72, 72); */\n    display: flex;\n    justify-content: start;\n    gap: 30px;\n}\n\n.navigation-tab {\n    display: flex;\n    justify-content: center;\n    width: 90px;\n    height: 100%;\n    background-color: rgb(96, 41, 41);\n    padding: 0px 10px;\n    text-align: center;\n    font-weight: bold;\n    align-items: center;\n    color: antiquewhite;\n}\n\n.disabled-tab {\n    pointer-events: none;\n    opacity: 0.7;\n}\n\n.home-container {\n    display: grid;\n    /* min-width: 100vh;\n    min-height: 100vh; */\n    min-height: 600px;\n    min-width: 700px;\n    grid-template-columns: 2fr 2fr;\n    column-gap: 30px;\n    padding: 100px 300px;\n    justify-items: center;\n};\n\n.home1 {\n    display: flex;\n    flex-direction: column;\n    content: 'Frogs';\n    grid-column: 1 / 2;\n    grid-row: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.home1 * {\n    color: rgb(224, 223, 223);\n}\n\n.home-title-container {\n    /* position: relative; */\n    display: flex;\n    min-width: 485px;\n    justify-content: center;\n    align-items: center;\n    /* gap: 20px; */\n}\n\n.home1 h1 {\n    display: flex;\n    justify-content: center;\n    font-size: 62px;\n}\n\n.home-box {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    height: 150px;\n}\n\n.hat-icon {\n    /* position: absolute;\n    top: 30px;\n    right: 85px; */\n    filter: invert(80%) sepia(44%) saturate(455%) hue-rotate(6deg) brightness(99%) contrast(93%);\n    height: 100px;\n}\n\n.home-hook {\n    font-size: 35px;\n}\n\n.home-descript {\n    font-size: 20px;\n}\n\n.order-button {\n    margin-top: 50px;\n    width: 200px;\n    height: auto;\n    padding: 20px;\n    text-align: center;\n    font-weight: bold;\n    font-size: 25px;\n    color: antiquewhite;\n    background-color: rgb(96, 41, 41);\n    border-radius: 25px;\n}\n\n.home2 {\n    display: grid;\n    height: 400px;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 4fr;\n    justify-items: center;\n    grid-column: 2;\n    grid-row: 1 / 3;\n    background-color: rgba(96, 41, 41, 0.6);\n    padding: 32px;\n    padding-top: 50px;\n    border-radius: 25px;\n    \n}\n\n.home2 * {\n    color: azure;\n}\n\n.home2 h3 {\n    text-align: center;\n    font-size: 22px;\n}\n\n\n\n.frog-icon {\n    display: inline-block;\n    height: 100px;\n    width: max-content;\n}\n\n\n.about-container {\n    /* display: : flex; */\n    justify-content: center;\n    align-items: center;\n    display: none;\n    height: 200px;\n    min-width: 100vh;\n    min-height: 100vh;\n    /* background-color: lightsalmon; */\n}\n\n.about1 {\n    display: grid;\n    padding: 30px 20px;\n    grid-template-columns: 1fr;\n    grid-template-rows: 2fr 1.5fr;\n    min-height: 65vh;\n    max-width: 85vh;\n    margin-top: -30px;\n    background-color: rgba(96, 41, 41, 0.7);\n    border-radius: 25px;\n}\n\n.about1-top {\n    grid-row: 1 / 2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* background-color: rgb(58, 80, 98); */\n}\n\n.about-title {\n    /* height: 15vh; */\n    text-align: center;\n    font-size: 33px;\n    color: blanchedalmond;\n}\n\n.about-para {\n    padding: 20px 25px;\n    font-size: large;\n    line-height: 1.5;\n    color: blanchedalmond;\n}\n\n.about1-bottom {\n    grid-row: 2 / 3;\n    display: flex;\n    justify-content: center;\n    /* border: 2px solid black; */\n}\n\n.bertie-pic {\n    height: 170px;\n    border-radius: 25px;\n    border: 30px solid rgb(58, 80, 98);\n}\n\n\n/* Menu page */\n\n.menu-container {\n    /* display: grid; */\n    position: relative;\n    display: none;\n    /* background-color: lightsalmon; */\n    min-height: 100vh;\n    min-width: 100vh;\n    grid-template-columns: 3fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 30px;\n    padding: 0px 350px; \n    padding-top: 120px;\n    \n}\n\n.menu-title {\n    position: absolute;\n    left: 260px;\n    top: 50px;\n    color: blanchedalmond;\n}\n\n.menu1 {\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n    justify-content: center;\n    align-items: stretch;\n    grid-column: 1 / 2;\n    grid-row: 1 / 3;\n    background-color: rgba(96, 41, 41, 0.7);\n    padding-top: 30px;\n    padding-bottom: 30px;\n    padding-left: 30px;\n    border-radius: 25px;\n}\n\n.menu-card {\n    /* width: 620px;\n    height: 280px; */\n    width: 85vh;\n    height: 230px;\n    display:  grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    background-color: rgb(58, 80, 98, 0.8);\n    overflow: hidden;\n    border-radius: 25px;\n    padding: 25px;\n}\n\n.menu-image {\n    max-height: 215px;\n    max-width: 329px;\n    align-self: center;\n    border-radius: 25px;\n    box-shadow: -3px 10px 17px -1px black;\n    \n}\n\n.menu-item-txt {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    color: rgb(184, 154, 102);\n    font-size: 17px;\n}\n\n.menu-item-title {\n    margin-bottom: 25px;\n    color: rgb(202, 185, 161);\n    \n}\n\n\n.menu2 {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    background-color: antiquewhite;\n}"],"sourceRoot":""}]);
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

    const menu2Title = document.createElement('h2');
    menuFactory.addToMenu(menu2Title, 'menu2-title', menu2);
    menu2Title.textContent = 'Hours';

    const menu2Container = document.createElement('div');
    menuFactory.addToMenu(menu2Container, 'menu2-container', menu2);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxNQUFNLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxTQUFTLEtBQUssWUFBWSxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxXQUFXLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFh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O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDSDtBQUNpQztBQUNHO0FBQ0g7OztBQUdwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUksa0RBQVE7QUFDWiwyQkFBMkIsbURBQWE7O0FBRXhDLElBQUksb0RBQVM7QUFDYiwyQkFBMkIscURBQWM7O0FBRXpDLElBQUksa0RBQVE7QUFDWiwyQkFBMkIsbURBQWE7OztBQUd4QztBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBYTtBQUN6QixZQUFZLHFEQUFjO0FBQzFCLFlBQVksbURBQWE7QUFDekI7O0FBRUE7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBYTtBQUN6QixZQUFZLHFEQUFjO0FBQzFCLFlBQVksbURBQWE7OztBQUd6Qjs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFlBQVksbURBQWEsd0JBQXdCO0FBQ2pELFlBQVksbURBQWE7QUFDekIsWUFBWSxxREFBYzs7QUFFMUI7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7OztBQUdBLENBQUM7Ozs7O0FBS0Q7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1ncy93aXphcmQtYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbmh0bWwsIGJvZHkge1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4jY29udGVudCB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubmF2aWdhdGlvbi1iYXIge1xuICAgIGhlaWdodDogNTVweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzMsIDcyLCA3Mik7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdhcDogMzBweDtcbn1cblxuLm5hdmlnYXRpb24tdGFiIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDQxLCA0MSk7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbn1cblxuLmRpc2FibGVkLXRhYiB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG4uaG9tZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogbWluLXdpZHRoOiAxMDB2aDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgKi9cbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICBtaW4td2lkdGg6IDcwMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmcjtcbiAgICBjb2x1bW4tZ2FwOiAzMHB4O1xuICAgIHBhZGRpbmc6IDEwMHB4IDMwMHB4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn07XG5cbi5ob21lMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbnRlbnQ6ICdGcm9ncyc7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ob21lMSAqIHtcbiAgICBjb2xvcjogcmdiKDIyNCwgMjIzLCAyMjMpO1xufVxuXG4uaG9tZS10aXRsZS1jb250YWluZXIge1xuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi13aWR0aDogNDg1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBnYXA6IDIwcHg7ICovXG59XG5cbi5ob21lMSBoMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDYycHg7XG59XG5cbi5ob21lLWJveCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xuICAgIGhlaWdodDogMTUwcHg7XG59XG5cbi5oYXQtaWNvbiB7XG4gICAgLyogcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzBweDtcbiAgICByaWdodDogODVweDsgKi9cbiAgICBmaWx0ZXI6IGludmVydCg4MCUpIHNlcGlhKDQ0JSkgc2F0dXJhdGUoNDU1JSkgaHVlLXJvdGF0ZSg2ZGVnKSBicmlnaHRuZXNzKDk5JSkgY29udHJhc3QoOTMlKTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uaG9tZS1ob29rIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5ob21lLWRlc2NyaXB0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5vcmRlci1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDQxLCA0MSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmhvbWUyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgICBncmlkLXJvdzogMSAvIDM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NiwgNDEsIDQxLCAwLjYpO1xuICAgIHBhZGRpbmc6IDMycHg7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBcbn1cblxuLmhvbWUyICoge1xuICAgIGNvbG9yOiBhenVyZTtcbn1cblxuLmhvbWUyIGgzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5cblxuLmZyb2ctaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuXG5cbi5hYm91dC1jb250YWluZXIge1xuICAgIC8qIGRpc3BsYXk6IDogZmxleDsgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBtaW4td2lkdGg6IDEwMHZoO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uOyAqL1xufVxuXG4uYWJvdXQxIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxLjVmcjtcbiAgICBtaW4taGVpZ2h0OiA2NXZoO1xuICAgIG1heC13aWR0aDogODV2aDtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk2LCA0MSwgNDEsIDAuNyk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmFib3V0MS10b3Age1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDgwLCA5OCk7ICovXG59XG5cbi5hYm91dC10aXRsZSB7XG4gICAgLyogaGVpZ2h0OiAxNXZoOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMzcHg7XG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xufVxuXG4uYWJvdXQtcGFyYSB7XG4gICAgcGFkZGluZzogMjBweCAyNXB4O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XG59XG5cbi5hYm91dDEtYm90dG9tIHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cbn1cblxuLmJlcnRpZS1waWMge1xuICAgIGhlaWdodDogMTcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3JkZXI6IDMwcHggc29saWQgcmdiKDU4LCA4MCwgOTgpO1xufVxuXG5cbi8qIE1lbnUgcGFnZSAqL1xuXG4ubWVudS1jb250YWluZXIge1xuICAgIC8qIGRpc3BsYXk6IGdyaWQ7ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247ICovXG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWluLXdpZHRoOiAxMDB2aDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIGdhcDogMzBweDtcbiAgICBwYWRkaW5nOiAwcHggMzUwcHg7IFxuICAgIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgICBcbn1cblxuLm1lbnUtdGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyNjBweDtcbiAgICB0b3A6IDUwcHg7XG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xufVxuXG4ubWVudTEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDQwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAxIC8gMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk2LCA0MSwgNDEsIDAuNyk7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5tZW51LWNhcmQge1xuICAgIC8qIHdpZHRoOiA2MjBweDtcbiAgICBoZWlnaHQ6IDI4MHB4OyAqL1xuICAgIHdpZHRoOiA4NXZoO1xuICAgIGhlaWdodDogMjMwcHg7XG4gICAgZGlzcGxheTogIGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgODAsIDk4LCAwLjgpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBwYWRkaW5nOiAyNXB4O1xufVxuXG4ubWVudS1pbWFnZSB7XG4gICAgbWF4LWhlaWdodDogMjE1cHg7XG4gICAgbWF4LXdpZHRoOiAzMjlweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3gtc2hhZG93OiAtM3B4IDEwcHggMTdweCAtMXB4IGJsYWNrO1xuICAgIFxufVxuXG4ubWVudS1pdGVtLXR4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgY29sb3I6IHJnYigxODQsIDE1NCwgMTAyKTtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5tZW51LWl0ZW0tdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgY29sb3I6IHJnYigyMDIsIDE4NSwgMTYxKTtcbiAgICBcbn1cblxuXG4ubWVudTIge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLDJCQUEyQjtJQUMzQix5REFBcUQ7SUFDckQsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0FB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Q2dCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztJQUNkLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQ0FBcUM7O0FBRXpDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCOztBQUU3Qjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDhCQUE4QjtBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1ncy93aXphcmQtYmFja2dyb3VuZC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLm5hdmlnYXRpb24tYmFyIHtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzMsIDcyLCA3Mik7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLm5hdmlnYXRpb24tdGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NiwgNDEsIDQxKTtcXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxufVxcblxcbi5kaXNhYmxlZC10YWIge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4uaG9tZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBtaW4td2lkdGg6IDEwMHZoO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgKi9cXG4gICAgbWluLWhlaWdodDogNjAwcHg7XFxuICAgIG1pbi13aWR0aDogNzAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmcjtcXG4gICAgY29sdW1uLWdhcDogMzBweDtcXG4gICAgcGFkZGluZzogMTAwcHggMzAwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59O1xcblxcbi5ob21lMSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGNvbnRlbnQ6ICdGcm9ncyc7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG9tZTEgKiB7XFxuICAgIGNvbG9yOiByZ2IoMjI0LCAyMjMsIDIyMyk7XFxufVxcblxcbi5ob21lLXRpdGxlLWNvbnRhaW5lciB7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWluLXdpZHRoOiA0ODVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGdhcDogMjBweDsgKi9cXG59XFxuXFxuLmhvbWUxIGgxIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNjJweDtcXG59XFxuXFxuLmhvbWUtYm94IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLmhhdC1pY29uIHtcXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDMwcHg7XFxuICAgIHJpZ2h0OiA4NXB4OyAqL1xcbiAgICBmaWx0ZXI6IGludmVydCg4MCUpIHNlcGlhKDQ0JSkgc2F0dXJhdGUoNDU1JSkgaHVlLXJvdGF0ZSg2ZGVnKSBicmlnaHRuZXNzKDk5JSkgY29udHJhc3QoOTMlKTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmhvbWUtaG9vayB7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG59XFxuXFxuLmhvbWUtZGVzY3JpcHQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5vcmRlci1idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDQxLCA0MSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi5ob21lMiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NiwgNDEsIDQxLCAwLjYpO1xcbiAgICBwYWRkaW5nOiAzMnB4O1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgXFxufVxcblxcbi5ob21lMiAqIHtcXG4gICAgY29sb3I6IGF6dXJlO1xcbn1cXG5cXG4uaG9tZTIgaDMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuXFxuXFxuLmZyb2ctaWNvbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG5cXG4uYWJvdXQtY29udGFpbmVyIHtcXG4gICAgLyogZGlzcGxheTogOiBmbGV4OyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgbWluLXdpZHRoOiAxMDB2aDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uOyAqL1xcbn1cXG5cXG4uYWJvdXQxIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMS41ZnI7XFxuICAgIG1pbi1oZWlnaHQ6IDY1dmg7XFxuICAgIG1heC13aWR0aDogODV2aDtcXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTYsIDQxLCA0MSwgMC43KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLmFib3V0MS10b3Age1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgODAsIDk4KTsgKi9cXG59XFxuXFxuLmFib3V0LXRpdGxlIHtcXG4gICAgLyogaGVpZ2h0OiAxNXZoOyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzNweDtcXG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbn1cXG5cXG4uYWJvdXQtcGFyYSB7XFxuICAgIHBhZGRpbmc6IDIwcHggMjVweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbn1cXG5cXG4uYWJvdXQxLWJvdHRvbSB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xcbn1cXG5cXG4uYmVydGllLXBpYyB7XFxuICAgIGhlaWdodDogMTcwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJvcmRlcjogMzBweCBzb2xpZCByZ2IoNTgsIDgwLCA5OCk7XFxufVxcblxcblxcbi8qIE1lbnUgcGFnZSAqL1xcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247ICovXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZoO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAwcHggMzUwcHg7IFxcbiAgICBwYWRkaW5nLXRvcDogMTIwcHg7XFxuICAgIFxcbn1cXG5cXG4ubWVudS10aXRsZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMjYwcHg7XFxuICAgIHRvcDogNTBweDtcXG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbn1cXG5cXG4ubWVudTEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTYsIDQxLCA0MSwgMC43KTtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi5tZW51LWNhcmQge1xcbiAgICAvKiB3aWR0aDogNjIwcHg7XFxuICAgIGhlaWdodDogMjgwcHg7ICovXFxuICAgIHdpZHRoOiA4NXZoO1xcbiAgICBoZWlnaHQ6IDIzMHB4O1xcbiAgICBkaXNwbGF5OiAgZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA4MCwgOTgsIDAuOCk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxufVxcblxcbi5tZW51LWltYWdlIHtcXG4gICAgbWF4LWhlaWdodDogMjE1cHg7XFxuICAgIG1heC13aWR0aDogMzI5cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgYm94LXNoYWRvdzogLTNweCAxMHB4IDE3cHggLTFweCBibGFjaztcXG4gICAgXFxufVxcblxcbi5tZW51LWl0ZW0tdHh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgY29sb3I6IHJnYigxODQsIDE1NCwgMTAyKTtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG5cXG4ubWVudS1pdGVtLXRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG4gICAgY29sb3I6IHJnYigyMDIsIDE4NSwgMTYxKTtcXG4gICAgXFxufVxcblxcblxcbi5tZW51MiB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgQmVydGllIGZyb20gJy4vaW1ncy9CZXJ0aWUuanBnJztcblxuY29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXG5cbmV4cG9ydCBjb25zdCBhYm91dFBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgYWJvdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWJvdXQtY29udGFpbmVyJyk7XG4gICAgY29uc29sZS5sb2coJ0Fib3V0IHBhZ2UgaW5zZXJ0ZWQnKTtcblxuICAgIC8vIG1haW4gY29udGFpbmVyIGZvciB0aGUgcmVzdCBvZiB0aGUgZWxlbWVudHMgb24gdGhlIGFib3V0IHBhZ2VcbiAgICBjb25zdCBhYm91dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dEZhY3RvcnkuYWRkVG9BYm91dChhYm91dDEsICdhYm91dDEnLCBhYm91dENvbnRhaW5lcik7XG4gICAgY29uc29sZS5sb2coYWJvdXQxKTtcblxuICAgIC8vIGNvbnRhaW5lciB0aGF0IGNvbnRhaW5zIHRoZSB0aXRsZSBhbmQgcGFyYWdyYXBoXG4gICAgY29uc3QgYWJvdXQxVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRGYWN0b3J5LmFkZFRvQWJvdXQoYWJvdXQxVG9wLCAnYWJvdXQxLXRvcCcsIGFib3V0MSk7XG5cblxuICAgIGNvbnN0IGFib3V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0RmFjdG9yeS5hZGRUb0Fib3V0KGFib3V0VGl0bGUsICdhYm91dC10aXRsZScsIGFib3V0MVRvcCk7XG4gICAgYWJvdXRUaXRsZS50ZXh0Q29udGVudCA9ICdBIFN0b3J5IExvbmcgaW4gdGhlIE1ha2luZydcblxuICAgIGNvbnN0IGFib3V0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhYm91dEZhY3RvcnkuYWRkVG9BYm91dChhYm91dFBhcmFncmFwaCwgJ2Fib3V0LXBhcmEnLCBhYm91dDFUb3ApXG4gICAgYWJvdXRQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgR3Jvd2luZyB1cCBpbiBhIHNtYWxsIG11Z2dsZSB0b3duIG9mZiB0aGUgY29hc3QganVzdCBzaHlcbiAgICBvZiBXZXltb3V0aCwgQmVydGllIEJvdHRzIHdhcyBhbHdheXMgb25lIG9mIHRoZSBwZWN1bGlhciBzb3J0LiBXaXRoIG5vdCBtdWNoXG4gICAgdG8gZG8gYXJvdW5kIGhpcyBob21lLCBoZSB3b3VsZCBjcmVhdGUgZmFudGFzdGljYWwgY29uY290aW9ucyB1c2luZyBhbGwgc29ydHNcbiAgICBvZiB0aGluZ3MsIG5vdCBleGNsdWRpbmcgc2Vhd2VlZCwgc2VhZ3VsbCBmZWF0aGVycywgaG91c2UgZGV0ZXJnZW50cywgYW5kIGxhbWIgbXVjdXMuXG4gICAgT25jZSBoZSBkaXNjb3ZlcmVkIHRoZSB3b3JsZCBvZiB3aXphZHJ5IGFuZCBhdHRlbmRpbmcgSG9nd2FydHMsIGhlIHF1aWNrbHlcbiAgICByb3NlIHRocm91Z2ggdGhlIHJhbmtzIHRvIGJlY29tZSBIdWZmbGVwdWZmJ3MgaGVhZCBjaGVmLiAzMCB5ZWFycyBsYXRlciwgQmVydGllXG4gICAgaXMgc3RpbGwgdXNpbmcgaGlzIGNyZWF0aXZlbnNzIGFuZCBwYXNzaW9uIHRvIHJ1biBoaXMgb3duIHJlc3RhdXJhbnQgYW5kIGNhbmR5IHNob3AsIFxuICAgICdCZXJ0aWUncyBCb3R0J3MsIG9uZSBvZiB0aGUgbW9zdCBwb3B1bGFyIGFuZCBleHRyYXZhZ2VudCBicmFuZHMgaW4gdGhlIFdpemFyZGluZyBXb3JsZGBcblxuICAgIC8vIGNvbnRhaW5lciB0aGF0IGNvbnRhaW5zIGltYWdlXG4gICAgY29uc3QgYWJvdXQxQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRGYWN0b3J5LmFkZFRvQWJvdXQoYWJvdXQxQm90dG9tLCAnYWJvdXQxLWJvdHRvbScsIGFib3V0MSk7XG5cbiAgICAvLyBpbWFnZSBmb3IgQWJvdXQgcGFnZVxuICAgIGNvbnN0IGFib3V0UGljID0gbmV3IEltYWdlKCk7XG4gICAgYWJvdXRQaWMuc3JjID0gQmVydGllO1xuICAgIGFib3V0RmFjdG9yeS5hZGRUb0Fib3V0KGFib3V0UGljLCAnYmVydGllLXBpYycsIGFib3V0MUJvdHRvbSk7XG59XG5cblxuLy8gZWxlbWVudE5hbWUgID0gcmVmZXJlbmNlIG5hbWVcbi8vIGVsZW1lbnQgPSB0eXBlIG9mIEhUTUwgZWxlbWVudCB3ZSB3YW50IHRvIGNyZWF0ZVxuLy8gY2xhc3NOYW1lID0gbmFtZSBvZiBjbGFzcyB3ZSB3YW50IHRvIGFzc2lnblxuLy8gZmF0aGVyRWxlbWVudCA9IG5hbWUgb2YgY29udGFpbmVyIHdlIHdhbnQgdG8gYXBwZW5kIHRvXG5jb25zdCBhYm91dEZhY3RvcnkgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgZnVuY3Rpb24gYWRkVG9BYm91dChlbGVtZW50TmFtZSwgY2xhc3NOYW1lLCBmYXRoZXJFbGVtZW50ICkge1xuICAgICAgICBlbGVtZW50TmFtZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIGZhdGhlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudE5hbWUpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnROYW1lKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnROYW1lO1xuICAgIH07XG4gICAgcmV0dXJuIHthZGRUb0Fib3V0fTtcbn0pKCk7XG5cblxuXG5leHBvcnQge2Fib3V0Q29udGFpbmVyfTtcbiIsIlxuXG5pbXBvcnQgZnJvZyBmcm9tICcuL2ltZ3MvVGhlRnJvZ0Nob2lySE0ucG5nJztcblxuaW1wb3J0IEhhdCBmcm9tICcuL2ltZ3Mvd2FybG9jay5wbmcnO1xuXG5cblxuY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5leHBvcnQgY29uc3QgaG9tZVBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gbmVlZCB0byBzdGFydCB3aXRoIGFuIG91dGVyIGNvbnRhaW5lciAuLiB0aGlzIG91dGVyXG4gICAgLy8gY29udGFpbmVyIHdpbGwgYmVjb21lIHRoZSBjaGlsZCBjb250YWluZXIgb2YgdGhlXG4gICAgLy8gY29udGVudCBkaXYsIHRodXMgbWFraW5nIGl0IHZpc2libGUgb24gdGhlIHBhZ2VcblxuICAgXG4gICAgY29uc3QgaG9tZURpdk5hbWVzID0gWydob21lMScsICdob21lMiddO1xuICAgIGxldCBob21lRGl2cyA9IFtdO1xuXG5cbiAgICAvLyB0aGlzIHdvbid0IGJlIGFwcGVuZGVkIHRvIHRoZSB0aGUgXCJjb250ZW50XCIgZGl2IHVudGlsIGl0IGlzXG4gICAgLy8gY2FsbGVkIHVwb24gaW4gdGhlIGluZGV4LmpzIGZpbGVcblxuICAgIGhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZS1jb250YWluZXInKTtcbiAgIFxuXG4gICAgLy8gY3JlYXRlIDMgZGl2IGNvbnRhaW5lcnMgd2l0aGluIHRoZSBob21lQ29udGFpbmVyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob21lRGl2LmNsYXNzTGlzdC5hZGQoaG9tZURpdk5hbWVzW2ldKTtcbiAgICAgICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lRGl2KTtcbiAgICAgICAgaG9tZURpdnMucHVzaChob21lRGl2KTtcbiAgICB9O1xuICAgIGxldCBob21lMSA9IGhvbWVEaXZzWzBdO1xuICAgIGxldCBob21lMiA9IGhvbWVEaXZzWzFdO1xuXG5cbiAgICAvLyBzdHlsZSBlYWNoIGhvbWVEaXYgYWNjb3JkaW5nbHlcbiAgICAvLyBob21lMTpcbiAgICBzdHlsZUhvbWUxKGhvbWUxKTtcbiAgICBzdHlsZUhvbWUyKGhvbWUyKTtcblxuXG4gICAgY29uc29sZS5sb2coJ2hvbWVwYWdlIGlzIGxpbmtlZCcpO1xuXG59XG5cblxuXG5mdW5jdGlvbiBzdHlsZUhvbWUxIChob21lMSkge1xuICAgIGNvbnN0IGhvbWVUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVUaXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob21lLXRpdGxlLWNvbnRhaW5lcicpO1xuICAgIGhvbWUxLmFwcGVuZENoaWxkKGhvbWVUaXRsZUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBob21lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhvbWVUaXRsZS50ZXh0Q29udGVudCA9IGBCZXJ0aWUgQm90dFxcJ3NgXG4gICAgaG9tZVRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVUaXRsZSk7XG5cbiAgICBjb25zdCBob21lTG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGhvbWVMb2dvLnNyYyAgPSBIYXQ7XG4gICAgaG9tZUxvZ28uY2xhc3NMaXN0LmFkZCgnaGF0LWljb24nKVxuICAgIGhvbWVUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lTG9nbyk7XG5cblxuXG4gICAgY29uc3QgaG9tZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVCb3guY2xhc3NMaXN0LmFkZCgnaG9tZS1ib3gnKTtcbiAgICBob21lMS5hcHBlbmRDaGlsZChob21lQm94KTtcblxuICAgIGNvbnN0IGhvbWVIb29rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBob21lSG9vay50ZXh0Q29udGVudCA9ICdBZGQgYSBiaXQgb2YgTWFnaWMgdG8geW91ciBldmVuaW5nIC4uLidcbiAgICBob21lSG9vay5jbGFzc0xpc3QuYWRkKCdob21lLWhvb2snKVxuICAgIGhvbWVCb3guYXBwZW5kQ2hpbGQoaG9tZUhvb2spO1xuXG4gICAgY29uc3QgaG9tZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBob21lRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnQ29tZSBkaW5lIHdpdGggeW91ciBmZWxsb3cgd2l0Y2hlcyBhbmQgd2l6YXJkcyBhdCBvdXIgNSBzdGFyIGVzdGFibGlzaG1lbnQgb24gdGhlIGNvcm5lciBvZiBDcmVzY2VudCBhbmQgRG9iYnkgaW4gdXBwZXIgRGlhZ29uIEFsbGV5JztcbiAgICBob21lRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaG9tZS1kZXNjcmlwdCcpXG4gICAgaG9tZUJveC5hcHBlbmRDaGlsZChob21lRGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3Qgb3JkZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBvcmRlckJ1dHRvbi50ZXh0Q29udGVudCA9ICdPcmRlciBPbmxpbmUnO1xuICAgIG9yZGVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ29yZGVyLWJ1dHRvbicpO1xuICAgIGhvbWVCb3guYXBwZW5kQ2hpbGQob3JkZXJCdXR0b24pO1xuXG59XG5cbmZ1bmN0aW9uIHN0eWxlSG9tZTIgKGhvbWUyKSB7XG4gICAgY29uc3QgZnJvZ0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBmcm9nSWNvbi5zcmMgPSBmcm9nO1xuICAgIGZyb2dJY29uLmNsYXNzTGlzdC5hZGQoJ2Zyb2ctaWNvbicpXG4gICAgaG9tZTIuYXBwZW5kQ2hpbGQoZnJvZ0ljb24pO1xuXG4gICAgY29uc3QgZnJvZ1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBmcm9nVGl0bGUudGV4dENvbnRlbnQgPSAnTGl2ZSBwZXJmb3JtYW5jZXMgZnJvbSBGcm9nIENob2lyIGV2ZXJ5IEZyaWRheSBhdCA3cG0nO1xuICAgIC8vIGZyb2dUaXRsZS5jbGFzc0xpc3QuYWRkKCdmcm9nLXRpdGxlJyk7XG4gICAgaG9tZTIuYXBwZW5kQ2hpbGQoZnJvZ1RpdGxlKTtcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGNsZWFySG9tZSAoaGFzQmVlblJ1bikge1xuLy8gICAgIGNvbnNvbGUubG9nKCdjbGVhcmVkJyk7XG4vLyAgICAgaGFzQmVlblJ1biA9IHRydWU7XG4vLyAgICAgY29uc29sZS5sb2coaGFzQmVlblJ1bik7XG4vLyB9XG5cbmV4cG9ydCB7aG9tZUNvbnRhaW5lcn07XG5cblxuXG4iLCJcbmltcG9ydCBjYWtlcyBmcm9tICcuL2ltZ3MvQ2F1bGRyb24tQ2FrZXMuanBnJztcbmltcG9ydCBzbmFrZSBmcm9tICcuL2ltZ3Mvc25ha2UtZmlsZXQuanBnJztcbmltcG9ydCBiZWFucyBmcm9tICcuL2ltZ3MvYmVhbnMuanBnJztcbmltcG9ydCBwaWUgZnJvbSAnLi9pbWdzL3NoZXBoZXJkLmpwZyc7XG5pbXBvcnQgYmVlciBmcm9tICcuL2ltZ3MvQnV0dGVyLWJlZXIuanBnJztcblxuLy8gcGxhbiBpc3RvIGNyZWF0ZSB0d28gbWFpbiBjb250YWluZXJzIGhlcmUuIE9uZSB3aWxsIGJlIG11Y2hcbi8vIGJpZ2dlciBhbmQgY29udGFpbiB0aGUgc2Nyb2xsYWJsZSBtZW51LiBUaGUgb3RoZXIgd2lsbCBiZVxuLy8gYSBzbWFsbGVyIGJveCB0aGF0IGxpc3RzIHRoZSBIb3VycyBvZiB0aGUgcmVzdGF1cmFudFxuY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbmV4cG9ydCBjb25zdCBtZW51UGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG4gICAgY29uc29sZS5sb2coJ21lbnUgcGFnZSBsaW5rZWQnKTtcblxuICAgIC8vIGFycmF5IGZvciB0aGUgbWVudSBpdGVtc1xuICAgIC8vIGNvbnN0IG1lbnVJdGVtcyA9IFsnQ2FybFxcJ3MgQ2F1bGRyb24gQ2FrZXMnLCAnRmVubnkgU25ha2UgRmlsZXQnLCBcbiAgICAvLyAnQmVydGllIEJvdHRcXCdzIEV2ZXJ5IEZsYXZvdXIgQmVhbnMnLCAnU2hlcGFyZCBQaWUnLCAnQnV0dGVyQmVlciddXG5cbiAgICBjb25zdCBtZW51SW1hZ2VzID0gW2Nha2VzLCBzbmFrZSwgYmVhbnMsIHBpZSwgYmVlcl07XG5cbiAgICAvLyB3aGVyZSBjYXJkIG1lbW9yeSB3aWxsIGJlIHN0b3JlZCBvbmNlIHRoZSBmb3IgbG9vcCBpcyBmaW5pc2hlZFxuICAgIGNvbnN0IG1lbnVDYXJkVGV4dHMgPSBbXTtcblxuICAgIGNvbnN0IG1lbnVPYmplY3RzID0gW107XG5cblxuICAgIC8vY3JlYXRlIDJtYWluIGNvbnRhaW5lcnMgZm9yIHRoZSBwYWdlXG4gICAgY29uc3QgbWVudTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVGYWN0b3J5LmFkZFRvTWVudShtZW51MSwgJ21lbnUxJywgbWVudUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBtZW51MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudUZhY3RvcnkuYWRkVG9NZW51KG1lbnUyLCAnbWVudTInLCBtZW51Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IG1lbnUyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1lbnVGYWN0b3J5LmFkZFRvTWVudShtZW51MlRpdGxlLCAnbWVudTItdGl0bGUnLCBtZW51Mik7XG4gICAgbWVudTJUaXRsZS50ZXh0Q29udGVudCA9ICdIb3Vycyc7XG5cbiAgICBjb25zdCBtZW51MkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVGYWN0b3J5LmFkZFRvTWVudShtZW51MkNvbnRhaW5lciwgJ21lbnUyLWNvbnRhaW5lcicsIG1lbnUyKTtcblxuXG4gICAgLy90aXRsZSBjcmVhdGlvblxuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbWVudUZhY3RvcnkuYWRkVG9NZW51KG1lbnVUaXRsZSwgJ21lbnUtdGl0bGUnLCBtZW51Q29udGFpbmVyKTtcbiAgICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSAnVGFrZSBhIEdhbmRlci4uLiAnO1xuXG5cbiAgICAvLyBtZW51IGl0ZW1zOiB3aWxsIGl0ZXJhdGUgdGhyb3VnaCBhbiBhcnJheSB0byBjcmVhdGUgYSBcbiAgICAvLyBudW1iZXIgb2YgbWVudSBJdGVtcyAuLi4gaW1hZ2VzIHdpbGwgYmUgaW5zZXJ0ZWQgYmFzZWQgb24gd2hhdFxuICAgIC8vIHRoZSBpbWFnZSBhcnJheSBjb250YWluc1xuXG4gICAgLy8gbWF5YmUgZ2l2ZSBlYWNoIGRpdiBhbiBJRCBiYXNlZCBvbiB0aGUgYXJyYXkgaXRlbSAuLi4gdG8gYmUgXG4gICAgLy8gYWJsZSB0byBpbnNlcnQgY3VzdG9tIG1lbnUgaXRlbSB0ZXh0IGxhdGVyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVGYWN0b3J5LmFkZFRvTWVudShtZW51Q2FyZCwgJ21lbnUtY2FyZCcsIG1lbnUxKTtcblxuICAgICAgICAvLyBjcmVhdGUgbWVudUltYWdlXG4gICAgICAgIGNvbnN0IG1lbnVJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBtZW51SW1hZ2Uuc3JjID0gbWVudUltYWdlc1tpXTtcbiAgICAgICAgbWVudUZhY3RvcnkuYWRkVG9NZW51KG1lbnVJbWFnZSwgJ21lbnUtaW1hZ2UnLCBtZW51Q2FyZCk7XG5cbiAgICAgICAgLy8gY3JlYXRlIG1lbnVJdGVtVGV4dCBkaXZcbiAgICAgICAgY29uc3QgbWVudUl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbWVudUZhY3RvcnkuYWRkVG9NZW51KG1lbnVJdGVtVGV4dCwgJ21lbnUtaXRlbS10eHQnLCBtZW51Q2FyZCk7XG5cbiAgICAgICAgLy8gcHVzaCB0byBhcnJheSBzbyBpdCBjYW4gaW5kaXZpZHVhbGx5IHN0eWxlIGxhdGVyXG4gICAgICAgIG1lbnVDYXJkVGV4dHMucHVzaChtZW51SXRlbVRleHQpO1xuICAgIH07XG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUNhcmRUZXh0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBtZW51SXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgbWVudUZhY3RvcnkuYWRkVG9NZW51KG1lbnVJdGVtVGl0bGUsICdtZW51LWl0ZW0tdGl0bGUnLCBtZW51Q2FyZFRleHRzW2ldKTtcblxuICAgICAgICBjb25zdCBtZW51SXRlbVdvcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBtZW51RmFjdG9yeS5hZGRUb01lbnUobWVudUl0ZW1Xb3JkcywgJ21lbnUtaXRlbS13b3JkcycsIG1lbnVDYXJkVGV4dHNbaV0pO1xuXG4gICAgICAgIGNvbnN0IG1lbnVPYmplY3QgPSB7XG4gICAgICAgICAgICBmb29kVGl0bGU6ICcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgIH07XG4gICAgICAgIG1lbnVPYmplY3RzLnB1c2gobWVudU9iamVjdCk7XG5cbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAvLyBhc3NpZ24gdmFsdWVzIHRvIHRoZSB0aXRsZXMgYW5kIHRleHRzXG4gICAgICAgICAgICBtZW51T2JqZWN0LmZvb2RUaXRsZSA9IGBDYXJsJ3MgQ2F1bGRyb24gQ2FrZXNgICsgYCAgIGAgKyBgJDE3Ljk5YDtcbiAgICAgICAgICAgIG1lbnVPYmplY3QuZGVzY3JpcHRpb24gPSBgVGhlc2UgZmFtb3VzIGNha2VzIHdpbGwgbWFrZSB5b3VyIHdhbmQgdGluZ2xlXG4gICAgICAgICAgICB3aXRoIHRoZWlyIHN3YXJteSBhbmQgY3JlYW0tb2YtdG9hZCBmaWxsaW5nIHN1cnJvbmRlZCBieSBhIHdhcm0gY3J1c3Qgb2YgXG4gICAgICAgICAgICBicmVhZCBjcnVtYnMgYW5kIGZpZ2dsZXJvb3QuYDtcblxuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICAgIG1lbnVPYmplY3QuZm9vZFRpdGxlID0gYEZlbm55IFNuYWtlIEZpbGV0YCArIGAgICBgICsgYCQzOS4wMGA7XG4gICAgICAgICAgICBtZW51T2JqZWN0LmRlc2NyaXB0aW9uID0gYFdlIGFjcXVpcmUgb3VyIEZlbm5pZXMgYW1vbmdzdCB0aGUgaGlnaGVzdCBcbiAgICAgICAgICAgIHBlYWtzIG9mIHRoZSBIaWdobGFuZHMgbmVhciBIb2d3YXJ0cywgbWFraW5nIHRoaXMgc3RlYWsgYWJzb2x1dGxleSB0b3BcbiAgICAgICAgICAgIG9mIHRoZSBsaW5lYDtcblxuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDIpIHtcbiAgICAgICAgICAgIG1lbnVPYmplY3QuZm9vZFRpdGxlID0gYEJlcnRpZSBCb3R0J3MgRXZlcnkgRmxhdm9yIEJlYW5zYCArIGAgICBgICsgYCQ3Ljk5YDtcbiAgICAgICAgICAgIG1lbnVPYmplY3QuZGVzY3JpcHRpb24gPSBgQSBjbGFzc2ljIHRoYXQgV2l6YXJkcyBhbmQgV2l0Y2hlcyBoYXZlIGVuam95ZWQgYWxsXG4gICAgICAgICAgICBvdmVyIHRoZSB3b3JsZCBmb3IgZGVjYWRlcy4gUGljayBhIGJlYW4gYXQgeW91ciBvd24gcmlzayBhbmQgaG9wZSB5b3UncmUgbm90XG4gICAgICAgICAgICBjb25mdXNpbmcgQmxhY2sgTGljb3JpY2Ugd2l0aCBBc2ghIWA7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMykge1xuICAgICAgICAgICAgbWVudU9iamVjdC5mb29kVGl0bGUgPSBgU2hlcGhlcmQncyBQaWVgICsgYCAgIGAgKyBgJDE1Ljk5YDtcbiAgICAgICAgICAgIG1lbnVPYmplY3QuZGVzY3JpcHRpb24gPSBgQmVydGllJ3MgaG9tZW1hZGUgU2hlcGhlcmQncyBQaWUgd2FzIHNlbGVjdGVkIGluIDIwMjBcbiAgICAgICAgICAgIGFzIG9uZSBvZiB0aGUgV2l6YXJkaW5nIFdvcmxkJ3MgbW9zdCBcImhpZGRlbiBhbmQgdW5kZXJhdGVkIHBpZXNcIiBieSB0aGUgd2VsbCBrbm93blxuICAgICAgICAgICAgY3JpdGljIFN0YW5seSBTa2ltd2VlZC4gQ29tZSBhbmQgc2VlIGZvciB5b3Vyc2VsZiFgO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDQpIHtcbiAgICAgICAgICAgIG1lbnVPYmplY3QuZm9vZFRpdGxlID0gYEJ1dHRlckJlZXIgICAgICQ0Ljk5YDtcbiAgICAgICAgICAgIG1lbnVPYmplY3QuZGVzY3JpcHRpb24gPSBgSWYgeW91J3JlIGZlZWxpbmcgYSBsaXR0bGUga25hY2tlcmVkIGZyb20gYWxsIHRoYXRcbiAgICAgICAgICAgIHNwZWxsIGNhc3RpbmcgYW5kIHRoZW4gc29tZSwgYW4gaWNlIGNvbGQsIGd1cmdsaW5nLCBhbmQgY3JlYW15IEJ1dHRlckJlZXJcbiAgICAgICAgICAgIGlzIHRoZSB3YXkgdG8gZ28hYDtcbiAgICAgICAgfTtcblxuICAgICAgICBtZW51SXRlbVRpdGxlLnRleHRDb250ZW50ID0gbWVudU9iamVjdC5mb29kVGl0bGU7XG4gICAgICAgIG1lbnVJdGVtV29yZHMudGV4dENvbnRlbnQgPSBtZW51T2JqZWN0LmRlc2NyaXB0aW9uO1xuICAgICAgICBjb25zb2xlLmxvZyggbWVudUl0ZW1UaXRsZSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKG1lbnVPYmplY3RzKTtcblxuICAgIC8vIC8vIGFzc2lnbiB2YWx1ZXMgdG8gdGhlIHRpdGxlcyBhbmQgdGV4dHNcbiAgICAvLyBtZW51T2JqZWN0c1swXS5mb29kVGl0bGUgPSAnQ2FybFxcJ3MgQ2F1bGRyb24gQ2FrZXMgICAgJDE3Ljk5JztcbiAgICAvLyBtZW51T2JqZWN0c1swXS5kZXNjcmlwdGlvbiA9IGBUaGVzZSBmYW1vdXMgY2FrZXMgd2lsbCBtYWtlIHlvdXIgd2FuZCB0aW5nbGVcbiAgICAvLyB3aXRoIHRoZWlyIHN3YXJteSBhbmQgY3JlYW0tb2YtdG9hZCBmaWxsaW5nIHN1cnJvbmRlZCBieSBhIHdhcm0gY3J1c3Qgb2YgXG4gICAgLy8gYnJlYWQgY3J1bWJzIGFuZCBmaWdnbGVyb290LmA7XG5cbiAgICAvLyAvLyBtZW51Q2FyZFRleHRzWzBdLm1lbnVJdGVtVGl0bGUudGV4dENvbnRlbnQgPSBtZW51T2JqZWN0c1swXS5mb29kVGl0bGU7XG4gICAgLy8gY29uc29sZS5sb2coIG1lbnVDYXJkVGV4dHNbMF0ubWVudUl0ZW1UaXRsZSk7XG5cblxuXG59O1xuXG5cbmNvbnN0IG1lbnVGYWN0b3J5ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGZ1bmN0aW9uIGFkZFRvTWVudShlbGVtZW50TmFtZSwgY2xhc3NOYW1lLCBmYXRoZXJFbGVtZW50ICkge1xuICAgICAgICBlbGVtZW50TmFtZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIGZhdGhlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudE5hbWUpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnROYW1lKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnROYW1lO1xuICAgIH07XG4gICAgcmV0dXJuIHthZGRUb01lbnV9O1xufSkoKTtcblxuXG5leHBvcnQge21lbnVDb250YWluZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL2hvbWUuanMnO1xuaW1wb3J0IHsgaG9tZVBhZ2UsIGhvbWVDb250YWluZXIgfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHsgYWJvdXRQYWdlLCBhYm91dENvbnRhaW5lciB9IGZyb20gJy4vYWJvdXQuanMnO1xuaW1wb3J0IHsgbWVudVBhZ2UsIG1lbnVDb250YWluZXIgfSBmcm9tICcuL21lbnUuanMnO1xuXG5cbmNvbnNvbGUubG9nKCd0ZXN0JylcblxuLy8gb2JqZWN0L2ZhY3RvcnkgZnVuY3Rpb24gdGhhdCB3aWxsIGNvbm5lY3QgYWxsIG9mIHRoZSB3ZWJpc3RlIHBhZ2VzXG4vLyB0b2dldGhlci4gSGVyZSBpcyB3aGVyZSB0aGUgbWFpbiBmdW5jdGlvbmFsaXR5IHdpbGwgYmUsIHdoZXJlXG4vLyB0aGUgY29ycmVjdCBwYWdlIHdpbGwgcmVuZGVyIGFuZCBiZSB2aXNpYmxlIGJhc2VkIG9uIHdoYXQgdGFic1xuLy8gdGhlIHVzZXIgY2xpY2tzIGF0IHRoZSB0b3BcblxuXG4vLyBjcmVhdGUgdGhlIG1haW4gd2Vic2l0ZSBiYXIgYXQgdGhlIHRvcFxuY29uc3Qgc2l0ZU5hdmlnYXRvciA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBjb25zdCBwYWdlSG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zb2xlLmxvZyhwYWdlSG9sZGVyKTtcblxuICAgIC8vIGNyZWF0ZSB0aGUgbWFpbiB3ZWJzaXRlIGJhciBhdCB0aGUgdG9wXG4gICAgY29uc3QgbmF2aWdhdGlvbkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdmlnYXRpb25CYXIudGV4dENvbnRlbnQgPSAnQmVydGllIEJvdHRcXCdzJztcbiAgICBuYXZpZ2F0aW9uQmFyLmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRpb24tYmFyJyk7XG5cbiAgICAvLyBhZGRzIHRoZSBuYXZpZ2F0aW9uIGJhciB0byB0aGUgdG9wXG4gICAgcGFnZUhvbGRlci5hcHBlbmRDaGlsZChuYXZpZ2F0aW9uQmFyKTtcblxuICAgIC8vIG9wZW5zIHVwIHRvdCBoZSBkZWZhdWx0IGhvbWUgcGFnZVxuICAgIGhvbWVQYWdlKCk7XG4gICAgcGFnZUhvbGRlci5hcHBlbmRDaGlsZChob21lQ29udGFpbmVyKTtcblxuICAgIGFib3V0UGFnZSgpO1xuICAgIHBhZ2VIb2xkZXIuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpO1xuXG4gICAgbWVudVBhZ2UoKTtcbiAgICBwYWdlSG9sZGVyLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuXG5cbiAgICAvLyBhcnJheSBjb250YWluaW5nIHRoZSB0YWIgbmFtZXNcbiAgICBjb25zdCB0YWJOYW1lcyA9IFsnSG9tZScsICdBYm91dCcsICdNZW51JywgJ1Jlc2VydmF0aW9ucyddXG4gICAgY29uc3QgdGFicyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCduYXZpZ2F0aW9uLXRhYicpO1xuICAgICAgICB0YWIudGV4dENvbnRlbnQgPSB0YWJOYW1lc1tpXTtcbiAgICAgICAgdGFicy5wdXNoKHRhYik7XG4gICAgICAgIG5hdmlnYXRpb25CYXIuYXBwZW5kQ2hpbGQodGFiKTtcbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlVGFiID0gdGFic1swXTtcbiAgICB0YWJzWzBdLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkLXRhYicpO1xuICAgIGNvbnNvbGUubG9nKGFjdGl2ZVRhYik7XG5cblxuICAgIGNvbnNvbGUubG9nKHRhYnMpXG4gICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YWIpO1xuICAgICAgICAgICAgYWN0aXZlVGFiID0gdGFiO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aXZlVGFiKTtcbiAgICAgICAgICAgIHN3aXRjaFBhZ2UoYWN0aXZlVGFiKTtcbiAgICBcbiAgICAgICAgfSk7XG4gICBcbiAgICB9KTtcbiAgIFxuXG4gICAgZnVuY3Rpb24gc3dpdGNoUGFnZShhY3RpdmVUYWIpIHtcbiAgICAgICAgaWYgKGFjdGl2ZVRhYiA9PT0gdGFic1swXSkge1xuICAgICAgICAgICAgdGFic1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZC10YWInKTtcbiAgICAgICAgICAgIHRhYnNbMl0uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQtdGFiJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaG9tZXBhZ2UnKTtcbiAgICAgICAgICAgIGhvbWVDb250YWluZXIuc3R5bGUgPSAnZGlzcGxheTogZ3JpZCdcbiAgICAgICAgICAgIGFib3V0Q29udGFpbmVyLnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnXG4gICAgICAgICAgICBtZW51Q29udGFpbmVyLnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gaGF2ZSB0byBkaXNhYmxlIHRoZSBIb21lIERpdiBjbGlja1xuICAgICAgICAgICAgdGFic1swXS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZC10YWInKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGFjdGl2ZVRhYiA9PT0gdGFic1sxXSkge1xuICAgICAgICAgICAgdGFic1swXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZC10YWInKTtcbiAgICAgICAgICAgIHRhYnNbMl0uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQtdGFiJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQWJvdXQnKTtcbiAgICAgICAgICAgIGhvbWVDb250YWluZXIuc3R5bGUgPSAnZGlzcGxheTogbm9uZSdcbiAgICAgICAgICAgIGFib3V0Q29udGFpbmVyLnN0eWxlID0gJ2Rpc3BsYXk6IGZsZXgnXG4gICAgICAgICAgICBtZW51Q29udGFpbmVyLnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnXG5cblxuICAgICAgICAgICAgdGFic1sxXS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZC10YWInKTtcblxuICAgICAgICB9ICBlbHNlIGlmIChhY3RpdmVUYWIgPT09IHRhYnNbMl0pIHtcbiAgICAgICAgICAgIHRhYnNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQtdGFiJyk7XG4gICAgICAgICAgICB0YWJzWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkLXRhYicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ01lbnUgY2xpY2tlZCcpO1xuXG4gICAgICAgICAgICBtZW51Q29udGFpbmVyLnN0eWxlID0gJ2Rpc3BsYXk6IGdyaWQ7J1xuICAgICAgICAgICAgaG9tZUNvbnRhaW5lci5zdHlsZSA9ICdkaXNwbGF5OiBub25lJ1xuICAgICAgICAgICAgYWJvdXRDb250YWluZXIuc3R5bGUgPSAnZGlzcGxheTogbm9uZSdcblxuICAgICAgICAgICAgdGFic1syXS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZC10YWInKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvZXNudCBleGlzdCcpXG4gICAgICAgIH1cblxuICAgIH1cblxuXG59KSgpO1xuXG5cblxuXG4vLyBhZGQgYWRkRXZlbnRMaXN0ZW5lcnMgdG8gdGFiIGxpbmtzIGF0IHRoZSB0b3Agb2YgcGFnZSwgc28gdGhhdCB3aGVuIHRoZXlcbi8vYXJlIGNsaWNrZWQsIHRoZSBjb3JyZWN0IHBhZ2UgaXMgbG9hZGVkIGluIHRocm91Z2ggdGhlIFwiY29udGVudFwiIGRpdi5cblxuLy8gd2hlbiBvbmUgcGFnZSBpcyBzZWxlY3RlZCwgdGhlIG90aGVycyBzaG91bGQgYmUgc2V0IHRvXG4vLyAnZGlzcGxheTogbm9uZSdcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9