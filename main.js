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
    background-color: rgba(96, 41, 41);
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
    background-color: blanchedalmond;
    overflow: hidden;
    border-radius: 25px;
    padding: 25px;
}

.menu-image {
    /* grid-column: 1 / 2; */
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
}

.menu-item-title {
    margin-bottom: 30px;
}


.menu2 {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    background-color: antiquewhite;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,2BAA2B;IAC3B,yDAAqD;IACrD,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,uCAAuC;IACvC,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,iCAAiC;IACjC,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb;wBACoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,8BAA8B;IAC9B,gBAAgB;IAChB,oBAAoB;IACpB,qBAAqB;AACzB,CAAA;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,aAAa;AACjB;;AAEA;IACI;;kBAEc;IACd,4FAA4F;IAC5F,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,mBAAmB;IACnB,iCAAiC;IACjC,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,0BAA0B;IAC1B,2BAA2B;IAC3B,qBAAqB;IACrB,cAAc;IACd,eAAe;IACf,uCAAuC;IACvC,aAAa;IACb,iBAAiB;IACjB,mBAAmB;;AAEvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;;;AAIA;IACI,qBAAqB;IACrB,aAAa;IACb,kBAAkB;AACtB;;;AAGA;IACI,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,0BAA0B;IAC1B,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,uCAAuC;IACvC,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uCAAuC;AAC3C;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kCAAkC;AACtC;;;AAGA,cAAc;;AAEd;IACI,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,mCAAmC;IACnC,iBAAiB;IACjB,gBAAgB;IAChB,8BAA8B;IAC9B,2BAA2B;IAC3B,SAAS;IACT,kBAAkB;IAClB,kBAAkB;;AAEtB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,uBAAuB;IACvB,oBAAoB;IACpB,kBAAkB;IAClB,eAAe;IACf,kCAAkC;IAClC,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI;oBACgB;IAChB,WAAW;IACX,aAAa;IACb,cAAc;IACd,8BAA8B;IAC9B,uBAAuB;IACvB,gCAAgC;IAChC,gBAAgB;IAChB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,qCAAqC;;AAEzC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;;AAGA;IACI,kBAAkB;IAClB,eAAe;IACf,8BAA8B;AAClC","sourcesContent":["html {\n    min-height: 100%;\n}\n\nhtml, body {\n    margin: 0px;\n}\n\n#content {\n    min-height: 100vh;\n    width: 100%;\n    /* background-color: red; */\n    background-image: url('./imgs/wizard-background.jpg');\n    background-size: cover;\n}\n\n.navigation-bar {\n    height: 55px;\n    /* background-color: rgb(73, 72, 72); */\n    display: flex;\n    justify-content: start;\n    gap: 30px;\n}\n\n.navigation-tab {\n    display: flex;\n    justify-content: center;\n    width: 90px;\n    height: 100%;\n    background-color: rgb(96, 41, 41);\n    padding: 0px 10px;\n    text-align: center;\n    font-weight: bold;\n    align-items: center;\n    color: antiquewhite;\n}\n\n.disabled-tab {\n    pointer-events: none;\n    opacity: 0.7;\n}\n\n.home-container {\n    display: grid;\n    /* min-width: 100vh;\n    min-height: 100vh; */\n    min-height: 600px;\n    min-width: 700px;\n    grid-template-columns: 2fr 2fr;\n    column-gap: 30px;\n    padding: 100px 300px;\n    justify-items: center;\n};\n\n.home1 {\n    display: flex;\n    flex-direction: column;\n    content: 'Frogs';\n    grid-column: 1 / 2;\n    grid-row: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.home1 * {\n    color: rgb(224, 223, 223);\n}\n\n.home-title-container {\n    /* position: relative; */\n    display: flex;\n    min-width: 485px;\n    justify-content: center;\n    align-items: center;\n    /* gap: 20px; */\n}\n\n.home1 h1 {\n    display: flex;\n    justify-content: center;\n    font-size: 62px;\n}\n\n.home-box {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    height: 150px;\n}\n\n.hat-icon {\n    /* position: absolute;\n    top: 30px;\n    right: 85px; */\n    filter: invert(80%) sepia(44%) saturate(455%) hue-rotate(6deg) brightness(99%) contrast(93%);\n    height: 100px;\n}\n\n.home-hook {\n    font-size: 35px;\n}\n\n.home-descript {\n    font-size: 20px;\n}\n\n.order-button {\n    margin-top: 50px;\n    width: 200px;\n    height: auto;\n    padding: 20px;\n    text-align: center;\n    font-weight: bold;\n    font-size: 25px;\n    color: antiquewhite;\n    background-color: rgb(96, 41, 41);\n    border-radius: 25px;\n}\n\n.home2 {\n    display: grid;\n    height: 400px;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 4fr;\n    justify-items: center;\n    grid-column: 2;\n    grid-row: 1 / 3;\n    background-color: rgba(96, 41, 41, 0.6);\n    padding: 32px;\n    padding-top: 50px;\n    border-radius: 25px;\n    \n}\n\n.home2 * {\n    color: azure;\n}\n\n.home2 h3 {\n    text-align: center;\n    font-size: 22px;\n}\n\n\n\n.frog-icon {\n    display: inline-block;\n    height: 100px;\n    width: max-content;\n}\n\n\n.about-container {\n    /* display: : flex; */\n    justify-content: center;\n    align-items: center;\n    display: none;\n    height: 200px;\n    min-width: 100vh;\n    min-height: 100vh;\n    /* background-color: lightsalmon; */\n}\n\n.about1 {\n    display: grid;\n    padding: 30px 20px;\n    grid-template-columns: 1fr;\n    grid-template-rows: 2fr 1.5fr;\n    min-height: 65vh;\n    max-width: 85vh;\n    margin-top: -30px;\n    background-color: rgba(96, 41, 41, 0.7);\n    border-radius: 25px;\n}\n\n.about1-top {\n    grid-row: 1 / 2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* background-color: rgb(58, 80, 98); */\n}\n\n.about-title {\n    /* height: 15vh; */\n    text-align: center;\n    font-size: 33px;\n    color: blanchedalmond;\n}\n\n.about-para {\n    padding: 20px 25px;\n    font-size: large;\n    line-height: 1.5;\n    color: blanchedalmond;\n}\n\n.about1-bottom {\n    grid-row: 2 / 3;\n    display: flex;\n    justify-content: center;\n    /* border: 2px solid black; */\n}\n\n.bertie-pic {\n    height: 170px;\n    border-radius: 25px;\n    border: 30px solid rgb(58, 80, 98);\n}\n\n\n/* Menu page */\n\n.menu-container {\n    /* display: grid; */\n    position: relative;\n    display: none;\n    /* background-color: lightsalmon; */\n    min-height: 100vh;\n    min-width: 100vh;\n    grid-template-columns: 3fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 30px;\n    padding: 0px 350px; \n    padding-top: 120px;\n    \n}\n\n.menu-title {\n    position: absolute;\n    left: 260px;\n    top: 50px;\n    color: blanchedalmond;\n}\n\n.menu1 {\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n    justify-content: center;\n    align-items: stretch;\n    grid-column: 1 / 2;\n    grid-row: 1 / 3;\n    background-color: rgba(96, 41, 41);\n    padding-top: 30px;\n    padding-bottom: 30px;\n    padding-left: 30px;\n    border-radius: 25px;\n}\n\n.menu-card {\n    /* width: 620px;\n    height: 280px; */\n    width: 85vh;\n    height: 230px;\n    display:  grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    background-color: blanchedalmond;\n    overflow: hidden;\n    border-radius: 25px;\n    padding: 25px;\n}\n\n.menu-image {\n    /* grid-column: 1 / 2; */\n    max-height: 215px;\n    max-width: 329px;\n    align-self: center;\n    border-radius: 25px;\n    box-shadow: -3px 10px 17px -1px black;\n    \n}\n\n.menu-item-txt {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n}\n\n.menu-item-title {\n    margin-bottom: 30px;\n}\n\n\n.menu2 {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    background-color: antiquewhite;\n}"],"sourceRoot":""}]);
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
            console.log('noth');
        }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFJQUErQztBQUMzRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qiw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxLQUFLLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLE1BQU0sTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFNBQVMsS0FBSyxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxh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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUksa0RBQVE7QUFDWiwyQkFBMkIsbURBQWE7O0FBRXhDLElBQUksb0RBQVM7QUFDYiwyQkFBMkIscURBQWM7O0FBRXpDLElBQUksa0RBQVE7QUFDWiwyQkFBMkIsbURBQWE7OztBQUd4QztBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBYTtBQUN6QixZQUFZLHFEQUFjO0FBQzFCLFlBQVksbURBQWE7QUFDekI7O0FBRUE7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBYTtBQUN6QixZQUFZLHFEQUFjO0FBQzFCLFlBQVksbURBQWE7OztBQUd6Qjs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFlBQVksbURBQWEsd0JBQXdCO0FBQ2pELFlBQVksbURBQWE7QUFDekIsWUFBWSxxREFBYzs7QUFFMUI7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7OztBQUdBLENBQUM7Ozs7O0FBS0Q7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1ncy93aXphcmQtYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbmh0bWwsIGJvZHkge1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4jY29udGVudCB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubmF2aWdhdGlvbi1iYXIge1xuICAgIGhlaWdodDogNTVweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzMsIDcyLCA3Mik7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdhcDogMzBweDtcbn1cblxuLm5hdmlnYXRpb24tdGFiIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDQxLCA0MSk7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbn1cblxuLmRpc2FibGVkLXRhYiB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG4uaG9tZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogbWluLXdpZHRoOiAxMDB2aDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgKi9cbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICBtaW4td2lkdGg6IDcwMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmcjtcbiAgICBjb2x1bW4tZ2FwOiAzMHB4O1xuICAgIHBhZGRpbmc6IDEwMHB4IDMwMHB4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn07XG5cbi5ob21lMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbnRlbnQ6ICdGcm9ncyc7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ob21lMSAqIHtcbiAgICBjb2xvcjogcmdiKDIyNCwgMjIzLCAyMjMpO1xufVxuXG4uaG9tZS10aXRsZS1jb250YWluZXIge1xuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi13aWR0aDogNDg1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBnYXA6IDIwcHg7ICovXG59XG5cbi5ob21lMSBoMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDYycHg7XG59XG5cbi5ob21lLWJveCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xuICAgIGhlaWdodDogMTUwcHg7XG59XG5cbi5oYXQtaWNvbiB7XG4gICAgLyogcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzBweDtcbiAgICByaWdodDogODVweDsgKi9cbiAgICBmaWx0ZXI6IGludmVydCg4MCUpIHNlcGlhKDQ0JSkgc2F0dXJhdGUoNDU1JSkgaHVlLXJvdGF0ZSg2ZGVnKSBicmlnaHRuZXNzKDk5JSkgY29udHJhc3QoOTMlKTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uaG9tZS1ob29rIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5ob21lLWRlc2NyaXB0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5vcmRlci1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDQxLCA0MSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmhvbWUyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgICBncmlkLXJvdzogMSAvIDM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NiwgNDEsIDQxLCAwLjYpO1xuICAgIHBhZGRpbmc6IDMycHg7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBcbn1cblxuLmhvbWUyICoge1xuICAgIGNvbG9yOiBhenVyZTtcbn1cblxuLmhvbWUyIGgzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5cblxuLmZyb2ctaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuXG5cbi5hYm91dC1jb250YWluZXIge1xuICAgIC8qIGRpc3BsYXk6IDogZmxleDsgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBtaW4td2lkdGg6IDEwMHZoO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uOyAqL1xufVxuXG4uYWJvdXQxIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxLjVmcjtcbiAgICBtaW4taGVpZ2h0OiA2NXZoO1xuICAgIG1heC13aWR0aDogODV2aDtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk2LCA0MSwgNDEsIDAuNyk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmFib3V0MS10b3Age1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDgwLCA5OCk7ICovXG59XG5cbi5hYm91dC10aXRsZSB7XG4gICAgLyogaGVpZ2h0OiAxNXZoOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMzcHg7XG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xufVxuXG4uYWJvdXQtcGFyYSB7XG4gICAgcGFkZGluZzogMjBweCAyNXB4O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XG59XG5cbi5hYm91dDEtYm90dG9tIHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cbn1cblxuLmJlcnRpZS1waWMge1xuICAgIGhlaWdodDogMTcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3JkZXI6IDMwcHggc29saWQgcmdiKDU4LCA4MCwgOTgpO1xufVxuXG5cbi8qIE1lbnUgcGFnZSAqL1xuXG4ubWVudS1jb250YWluZXIge1xuICAgIC8qIGRpc3BsYXk6IGdyaWQ7ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247ICovXG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWluLXdpZHRoOiAxMDB2aDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIGdhcDogMzBweDtcbiAgICBwYWRkaW5nOiAwcHggMzUwcHg7IFxuICAgIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgICBcbn1cblxuLm1lbnUtdGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyNjBweDtcbiAgICB0b3A6IDUwcHg7XG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xufVxuXG4ubWVudTEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDQwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAxIC8gMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk2LCA0MSwgNDEpO1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4ubWVudS1jYXJkIHtcbiAgICAvKiB3aWR0aDogNjIwcHg7XG4gICAgaGVpZ2h0OiAyODBweDsgKi9cbiAgICB3aWR0aDogODV2aDtcbiAgICBoZWlnaHQ6IDIzMHB4O1xuICAgIGRpc3BsYXk6ICBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgcGFkZGluZzogMjVweDtcbn1cblxuLm1lbnUtaW1hZ2Uge1xuICAgIC8qIGdyaWQtY29sdW1uOiAxIC8gMjsgKi9cbiAgICBtYXgtaGVpZ2h0OiAyMTVweDtcbiAgICBtYXgtd2lkdGg6IDMyOXB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJveC1zaGFkb3c6IC0zcHggMTBweCAxN3B4IC0xcHggYmxhY2s7XG4gICAgXG59XG5cbi5tZW51LWl0ZW0tdHh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cblxuLm1lbnUtaXRlbS10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuXG4ubWVudTIge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLDJCQUEyQjtJQUMzQix5REFBcUQ7SUFDckQsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiO3dCQUNvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6QixDQUFBOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsbUJB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QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWdzL3dpemFyZC1iYWNrZ3JvdW5kLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4ubmF2aWdhdGlvbi1iYXIge1xcbiAgICBoZWlnaHQ6IDU1cHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig3MywgNzIsIDcyKTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4ubmF2aWdhdGlvbi10YWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDkwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk2LCA0MSwgNDEpO1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuLmRpc2FibGVkLXRhYiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5ob21lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIG1pbi13aWR0aDogMTAwdmg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gICAgbWluLXdpZHRoOiA3MDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyO1xcbiAgICBjb2x1bW4tZ2FwOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAxMDBweCAzMDBweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn07XFxuXFxuLmhvbWUxIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY29udGVudDogJ0Zyb2dzJztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob21lMSAqIHtcXG4gICAgY29sb3I6IHJnYigyMjQsIDIyMywgMjIzKTtcXG59XFxuXFxuLmhvbWUtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4td2lkdGg6IDQ4NXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogZ2FwOiAyMHB4OyAqL1xcbn1cXG5cXG4uaG9tZTEgaDEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA2MnB4O1xcbn1cXG5cXG4uaG9tZS1ib3gge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4uaGF0LWljb24ge1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzBweDtcXG4gICAgcmlnaHQ6IDg1cHg7ICovXFxuICAgIGZpbHRlcjogaW52ZXJ0KDgwJSkgc2VwaWEoNDQlKSBzYXR1cmF0ZSg0NTUlKSBodWUtcm90YXRlKDZkZWcpIGJyaWdodG5lc3MoOTklKSBjb250cmFzdCg5MyUpO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4uaG9tZS1ob29rIHtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbn1cXG5cXG4uaG9tZS1kZXNjcmlwdCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLm9yZGVyLWJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NiwgNDEsIDQxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLmhvbWUyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk2LCA0MSwgNDEsIDAuNik7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBcXG59XFxuXFxuLmhvbWUyICoge1xcbiAgICBjb2xvcjogYXp1cmU7XFxufVxcblxcbi5ob21lMiBoMyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG5cXG5cXG4uZnJvZy1pY29uIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcblxcbi5hYm91dC1jb250YWluZXIge1xcbiAgICAvKiBkaXNwbGF5OiA6IGZsZXg7ICovXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBtaW4td2lkdGg6IDEwMHZoO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247ICovXFxufVxcblxcbi5hYm91dDEge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxLjVmcjtcXG4gICAgbWluLWhlaWdodDogNjV2aDtcXG4gICAgbWF4LXdpZHRoOiA4NXZoO1xcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NiwgNDEsIDQxLCAwLjcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4uYWJvdXQxLXRvcCB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA4MCwgOTgpOyAqL1xcbn1cXG5cXG4uYWJvdXQtdGl0bGUge1xcbiAgICAvKiBoZWlnaHQ6IDE1dmg7ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzM3B4O1xcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcbi5hYm91dC1wYXJhIHtcXG4gICAgcGFkZGluZzogMjBweCAyNXB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcbi5hYm91dDEtYm90dG9tIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxufVxcblxcbi5iZXJ0aWUtcGljIHtcXG4gICAgaGVpZ2h0OiAxNzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgYm9yZGVyOiAzMHB4IHNvbGlkIHJnYig1OCwgODAsIDk4KTtcXG59XFxuXFxuXFxuLyogTWVudSBwYWdlICovXFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gICAgLyogZGlzcGxheTogZ3JpZDsgKi9cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNhbG1vbjsgKi9cXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTAwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDBweCAzNTBweDsgXFxuICAgIHBhZGRpbmctdG9wOiAxMjBweDtcXG4gICAgXFxufVxcblxcbi5tZW51LXRpdGxlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAyNjBweDtcXG4gICAgdG9wOiA1MHB4O1xcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcbi5tZW51MSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NiwgNDEsIDQxKTtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi5tZW51LWNhcmQge1xcbiAgICAvKiB3aWR0aDogNjIwcHg7XFxuICAgIGhlaWdodDogMjgwcHg7ICovXFxuICAgIHdpZHRoOiA4NXZoO1xcbiAgICBoZWlnaHQ6IDIzMHB4O1xcbiAgICBkaXNwbGF5OiAgZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxufVxcblxcbi5tZW51LWltYWdlIHtcXG4gICAgLyogZ3JpZC1jb2x1bW46IDEgLyAyOyAqL1xcbiAgICBtYXgtaGVpZ2h0OiAyMTVweDtcXG4gICAgbWF4LXdpZHRoOiAzMjlweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBib3gtc2hhZG93OiAtM3B4IDEwcHggMTdweCAtMXB4IGJsYWNrO1xcbiAgICBcXG59XFxuXFxuLm1lbnUtaXRlbS10eHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4ubWVudS1pdGVtLXRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuXFxuLm1lbnUyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBCZXJ0aWUgZnJvbSAnLi9pbWdzL0JlcnRpZS5qcGcnO1xuXG5jb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cblxuZXhwb3J0IGNvbnN0IGFib3V0UGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBhYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dC1jb250YWluZXInKTtcbiAgICBjb25zb2xlLmxvZygnQWJvdXQgcGFnZSBpbnNlcnRlZCcpO1xuXG4gICAgLy8gbWFpbiBjb250YWluZXIgZm9yIHRoZSByZXN0IG9mIHRoZSBlbGVtZW50cyBvbiB0aGUgYWJvdXQgcGFnZVxuICAgIGNvbnN0IGFib3V0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0RmFjdG9yeS5hZGRUb0Fib3V0KGFib3V0MSwgJ2Fib3V0MScsIGFib3V0Q29udGFpbmVyKTtcbiAgICBjb25zb2xlLmxvZyhhYm91dDEpO1xuXG4gICAgLy8gY29udGFpbmVyIHRoYXQgY29udGFpbnMgdGhlIHRpdGxlIGFuZCBwYXJhZ3JhcGhcbiAgICBjb25zdCBhYm91dDFUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dEZhY3RvcnkuYWRkVG9BYm91dChhYm91dDFUb3AsICdhYm91dDEtdG9wJywgYWJvdXQxKTtcblxuXG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWJvdXRGYWN0b3J5LmFkZFRvQWJvdXQoYWJvdXRUaXRsZSwgJ2Fib3V0LXRpdGxlJywgYWJvdXQxVG9wKTtcbiAgICBhYm91dFRpdGxlLnRleHRDb250ZW50ID0gJ0EgU3RvcnkgTG9uZyBpbiB0aGUgTWFraW5nJ1xuXG4gICAgY29uc3QgYWJvdXRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0RmFjdG9yeS5hZGRUb0Fib3V0KGFib3V0UGFyYWdyYXBoLCAnYWJvdXQtcGFyYScsIGFib3V0MVRvcClcbiAgICBhYm91dFBhcmFncmFwaC50ZXh0Q29udGVudCA9IGBHcm93aW5nIHVwIGluIGEgc21hbGwgbXVnZ2xlIHRvd24gb2ZmIHRoZSBjb2FzdCBqdXN0IHNoeVxuICAgIG9mIFdleW1vdXRoLCBCZXJ0aWUgQm90dHMgd2FzIGFsd2F5cyBvbmUgb2YgdGhlIHBlY3VsaWFyIHNvcnQuIFdpdGggbm90IG11Y2hcbiAgICB0byBkbyBhcm91bmQgaGlzIGhvbWUsIGhlIHdvdWxkIGNyZWF0ZSBmYW50YXN0aWNhbCBjb25jb3Rpb25zIHVzaW5nIGFsbCBzb3J0c1xuICAgIG9mIHRoaW5ncywgbm90IGV4Y2x1ZGluZyBzZWF3ZWVkLCBzZWFndWxsIGZlYXRoZXJzLCBob3VzZSBkZXRlcmdlbnRzLCBhbmQgbGFtYiBtdWN1cy5cbiAgICBPbmNlIGhlIGRpc2NvdmVyZWQgdGhlIHdvcmxkIG9mIHdpemFkcnkgYW5kIGF0dGVuZGluZyBIb2d3YXJ0cywgaGUgcXVpY2tseVxuICAgIHJvc2UgdGhyb3VnaCB0aGUgcmFua3MgdG8gYmVjb21lIEh1ZmZsZXB1ZmYncyBoZWFkIGNoZWYuIDMwIHllYXJzIGxhdGVyLCBCZXJ0aWVcbiAgICBpcyBzdGlsbCB1c2luZyBoaXMgY3JlYXRpdmVuc3MgYW5kIHBhc3Npb24gdG8gcnVuIGhpcyBvd24gcmVzdGF1cmFudCBhbmQgY2FuZHkgc2hvcCwgXG4gICAgJ0JlcnRpZSdzIEJvdHQncywgb25lIG9mIHRoZSBtb3N0IHBvcHVsYXIgYW5kIGV4dHJhdmFnZW50IGJyYW5kcyBpbiB0aGUgV2l6YXJkaW5nIFdvcmxkYFxuXG4gICAgLy8gY29udGFpbmVyIHRoYXQgY29udGFpbnMgaW1hZ2VcbiAgICBjb25zdCBhYm91dDFCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dEZhY3RvcnkuYWRkVG9BYm91dChhYm91dDFCb3R0b20sICdhYm91dDEtYm90dG9tJywgYWJvdXQxKTtcblxuICAgIC8vIGltYWdlIGZvciBBYm91dCBwYWdlXG4gICAgY29uc3QgYWJvdXRQaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBhYm91dFBpYy5zcmMgPSBCZXJ0aWU7XG4gICAgYWJvdXRGYWN0b3J5LmFkZFRvQWJvdXQoYWJvdXRQaWMsICdiZXJ0aWUtcGljJywgYWJvdXQxQm90dG9tKTtcbn1cblxuXG4vLyBlbGVtZW50TmFtZSAgPSByZWZlcmVuY2UgbmFtZVxuLy8gZWxlbWVudCA9IHR5cGUgb2YgSFRNTCBlbGVtZW50IHdlIHdhbnQgdG8gY3JlYXRlXG4vLyBjbGFzc05hbWUgPSBuYW1lIG9mIGNsYXNzIHdlIHdhbnQgdG8gYXNzaWduXG4vLyBmYXRoZXJFbGVtZW50ID0gbmFtZSBvZiBjb250YWluZXIgd2Ugd2FudCB0byBhcHBlbmQgdG9cbmNvbnN0IGFib3V0RmFjdG9yeSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBmdW5jdGlvbiBhZGRUb0Fib3V0KGVsZW1lbnROYW1lLCBjbGFzc05hbWUsIGZhdGhlckVsZW1lbnQgKSB7XG4gICAgICAgIGVsZW1lbnROYW1lLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgZmF0aGVyRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50TmFtZSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudE5hbWUpO1xuICAgICAgICByZXR1cm4gZWxlbWVudE5hbWU7XG4gICAgfTtcbiAgICByZXR1cm4ge2FkZFRvQWJvdXR9O1xufSkoKTtcblxuXG5cbmV4cG9ydCB7YWJvdXRDb250YWluZXJ9O1xuIiwiXG5cbmltcG9ydCBmcm9nIGZyb20gJy4vaW1ncy9UaGVGcm9nQ2hvaXJITS5wbmcnO1xuXG5pbXBvcnQgSGF0IGZyb20gJy4vaW1ncy93YXJsb2NrLnBuZyc7XG5cblxuXG5jb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmV4cG9ydCBjb25zdCBob21lUGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBuZWVkIHRvIHN0YXJ0IHdpdGggYW4gb3V0ZXIgY29udGFpbmVyIC4uIHRoaXMgb3V0ZXJcbiAgICAvLyBjb250YWluZXIgd2lsbCBiZWNvbWUgdGhlIGNoaWxkIGNvbnRhaW5lciBvZiB0aGVcbiAgICAvLyBjb250ZW50IGRpdiwgdGh1cyBtYWtpbmcgaXQgdmlzaWJsZSBvbiB0aGUgcGFnZVxuXG4gICBcbiAgICBjb25zdCBob21lRGl2TmFtZXMgPSBbJ2hvbWUxJywgJ2hvbWUyJ107XG4gICAgbGV0IGhvbWVEaXZzID0gW107XG5cblxuICAgIC8vIHRoaXMgd29uJ3QgYmUgYXBwZW5kZWQgdG8gdGhlIHRoZSBcImNvbnRlbnRcIiBkaXYgdW50aWwgaXQgaXNcbiAgICAvLyBjYWxsZWQgdXBvbiBpbiB0aGUgaW5kZXguanMgZmlsZVxuXG4gICAgaG9tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRhaW5lcicpO1xuICAgXG5cbiAgICAvLyBjcmVhdGUgMyBkaXYgY29udGFpbmVycyB3aXRoaW4gdGhlIGhvbWVDb250YWluZXJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvbWVEaXYuY2xhc3NMaXN0LmFkZChob21lRGl2TmFtZXNbaV0pO1xuICAgICAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVEaXYpO1xuICAgICAgICBob21lRGl2cy5wdXNoKGhvbWVEaXYpO1xuICAgIH07XG4gICAgbGV0IGhvbWUxID0gaG9tZURpdnNbMF07XG4gICAgbGV0IGhvbWUyID0gaG9tZURpdnNbMV07XG5cblxuICAgIC8vIHN0eWxlIGVhY2ggaG9tZURpdiBhY2NvcmRpbmdseVxuICAgIC8vIGhvbWUxOlxuICAgIHN0eWxlSG9tZTEoaG9tZTEpO1xuICAgIHN0eWxlSG9tZTIoaG9tZTIpO1xuXG5cbiAgICBjb25zb2xlLmxvZygnaG9tZXBhZ2UgaXMgbGlua2VkJyk7XG5cbn1cblxuXG5cbmZ1bmN0aW9uIHN0eWxlSG9tZTEgKGhvbWUxKSB7XG4gICAgY29uc3QgaG9tZVRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZVRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUtdGl0bGUtY29udGFpbmVyJyk7XG4gICAgaG9tZTEuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGhvbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaG9tZVRpdGxlLnRleHRDb250ZW50ID0gYEJlcnRpZSBCb3R0XFwnc2BcbiAgICBob21lVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlKTtcblxuICAgIGNvbnN0IGhvbWVMb2dvID0gbmV3IEltYWdlKCk7XG4gICAgaG9tZUxvZ28uc3JjICA9IEhhdDtcbiAgICBob21lTG9nby5jbGFzc0xpc3QuYWRkKCdoYXQtaWNvbicpXG4gICAgaG9tZVRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVMb2dvKTtcblxuXG5cbiAgICBjb25zdCBob21lQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZUJveC5jbGFzc0xpc3QuYWRkKCdob21lLWJveCcpO1xuICAgIGhvbWUxLmFwcGVuZENoaWxkKGhvbWVCb3gpO1xuXG4gICAgY29uc3QgaG9tZUhvb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhvbWVIb29rLnRleHRDb250ZW50ID0gJ0FkZCBhIGJpdCBvZiBNYWdpYyB0byB5b3VyIGV2ZW5pbmcgLi4uJ1xuICAgIGhvbWVIb29rLmNsYXNzTGlzdC5hZGQoJ2hvbWUtaG9vaycpXG4gICAgaG9tZUJveC5hcHBlbmRDaGlsZChob21lSG9vayk7XG5cbiAgICBjb25zdCBob21lRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGhvbWVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdDb21lIGRpbmUgd2l0aCB5b3VyIGZlbGxvdyB3aXRjaGVzIGFuZCB3aXphcmRzIGF0IG91ciA1IHN0YXIgZXN0YWJsaXNobWVudCBvbiB0aGUgY29ybmVyIG9mIENyZXNjZW50IGFuZCBEb2JieSBpbiB1cHBlciBEaWFnb24gQWxsZXknO1xuICAgIGhvbWVEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdob21lLWRlc2NyaXB0JylcbiAgICBob21lQm94LmFwcGVuZENoaWxkKGhvbWVEZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBvcmRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG9yZGVyQnV0dG9uLnRleHRDb250ZW50ID0gJ09yZGVyIE9ubGluZSc7XG4gICAgb3JkZXJCdXR0b24uY2xhc3NMaXN0LmFkZCgnb3JkZXItYnV0dG9uJyk7XG4gICAgaG9tZUJveC5hcHBlbmRDaGlsZChvcmRlckJ1dHRvbik7XG5cbn1cblxuZnVuY3Rpb24gc3R5bGVIb21lMiAoaG9tZTIpIHtcbiAgICBjb25zdCBmcm9nSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGZyb2dJY29uLnNyYyA9IGZyb2c7XG4gICAgZnJvZ0ljb24uY2xhc3NMaXN0LmFkZCgnZnJvZy1pY29uJylcbiAgICBob21lMi5hcHBlbmRDaGlsZChmcm9nSWNvbik7XG5cbiAgICBjb25zdCBmcm9nVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGZyb2dUaXRsZS50ZXh0Q29udGVudCA9ICdMaXZlIHBlcmZvcm1hbmNlcyBmcm9tIEZyb2cgQ2hvaXIgZXZlcnkgRnJpZGF5IGF0IDdwbSc7XG4gICAgLy8gZnJvZ1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2Zyb2ctdGl0bGUnKTtcbiAgICBob21lMi5hcHBlbmRDaGlsZChmcm9nVGl0bGUpO1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gY2xlYXJIb21lIChoYXNCZWVuUnVuKSB7XG4vLyAgICAgY29uc29sZS5sb2coJ2NsZWFyZWQnKTtcbi8vICAgICBoYXNCZWVuUnVuID0gdHJ1ZTtcbi8vICAgICBjb25zb2xlLmxvZyhoYXNCZWVuUnVuKTtcbi8vIH1cblxuZXhwb3J0IHtob21lQ29udGFpbmVyfTtcblxuXG5cbiIsIlxuaW1wb3J0IGNha2VzIGZyb20gJy4vaW1ncy9DYXVsZHJvbi1DYWtlcy5qcGcnO1xuaW1wb3J0IHNuYWtlIGZyb20gJy4vaW1ncy9zbmFrZS1maWxldC5qcGcnO1xuaW1wb3J0IGJlYW5zIGZyb20gJy4vaW1ncy9iZWFucy5qcGcnO1xuaW1wb3J0IHBpZSBmcm9tICcuL2ltZ3Mvc2hlcGhlcmQuanBnJztcbmltcG9ydCBiZWVyIGZyb20gJy4vaW1ncy9CdXR0ZXItYmVlci5qcGcnO1xuXG4vLyBwbGFuIGlzdG8gY3JlYXRlIHR3byBtYWluIGNvbnRhaW5lcnMgaGVyZS4gT25lIHdpbGwgYmUgbXVjaFxuLy8gYmlnZ2VyIGFuZCBjb250YWluIHRoZSBzY3JvbGxhYmxlIG1lbnUuIFRoZSBvdGhlciB3aWxsIGJlXG4vLyBhIHNtYWxsZXIgYm94IHRoYXQgbGlzdHMgdGhlIEhvdXJzIG9mIHRoZSByZXN0YXVyYW50XG5jb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblxuZXhwb3J0IGNvbnN0IG1lbnVQYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcbiAgICBjb25zb2xlLmxvZygnbWVudSBwYWdlIGxpbmtlZCcpO1xuXG4gICAgLy8gYXJyYXkgZm9yIHRoZSBtZW51IGl0ZW1zXG4gICAgLy8gY29uc3QgbWVudUl0ZW1zID0gWydDYXJsXFwncyBDYXVsZHJvbiBDYWtlcycsICdGZW5ueSBTbmFrZSBGaWxldCcsIFxuICAgIC8vICdCZXJ0aWUgQm90dFxcJ3MgRXZlcnkgRmxhdm91ciBCZWFucycsICdTaGVwYXJkIFBpZScsICdCdXR0ZXJCZWVyJ11cblxuICAgIGNvbnN0IG1lbnVJbWFnZXMgPSBbY2FrZXMsIHNuYWtlLCBiZWFucywgcGllLCBiZWVyXTtcblxuICAgIC8vIHdoZXJlIGNhcmQgbWVtb3J5IHdpbGwgYmUgc3RvcmVkIG9uY2UgdGhlIGZvciBsb29wIGlzIGZpbmlzaGVkXG4gICAgY29uc3QgbWVudUNhcmRUZXh0cyA9IFtdO1xuXG4gICAgY29uc3QgbWVudU9iamVjdHMgPSBbXTtcblxuXG4gICAgLy9jcmVhdGUgMm1haW4gY29udGFpbmVycyBmb3IgdGhlIHBhZ2VcbiAgICBjb25zdCBtZW51MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudUZhY3RvcnkuYWRkVG9NZW51KG1lbnUxLCAnbWVudTEnLCBtZW51Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IG1lbnUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51RmFjdG9yeS5hZGRUb01lbnUobWVudTIsICdtZW51MicsIG1lbnVDb250YWluZXIpO1xuXG4gICAgLy90aXRsZSBjcmVhdGlvblxuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbWVudUZhY3RvcnkuYWRkVG9NZW51KG1lbnVUaXRsZSwgJ21lbnUtdGl0bGUnLCBtZW51Q29udGFpbmVyKTtcbiAgICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSAnVGFrZSBhIEdhbmRlci4uLiAnO1xuXG5cbiAgICAvLyBtZW51IGl0ZW1zOiB3aWxsIGl0ZXJhdGUgdGhyb3VnaCBhbiBhcnJheSB0byBjcmVhdGUgYSBcbiAgICAvLyBudW1iZXIgb2YgbWVudSBJdGVtcyAuLi4gaW1hZ2VzIHdpbGwgYmUgaW5zZXJ0ZWQgYmFzZWQgb24gd2hhdFxuICAgIC8vIHRoZSBpbWFnZSBhcnJheSBjb250YWluc1xuXG4gICAgLy8gbWF5YmUgZ2l2ZSBlYWNoIGRpdiBhbiBJRCBiYXNlZCBvbiB0aGUgYXJyYXkgaXRlbSAuLi4gdG8gYmUgXG4gICAgLy8gYWJsZSB0byBpbnNlcnQgY3VzdG9tIG1lbnUgaXRlbSB0ZXh0IGxhdGVyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVGYWN0b3J5LmFkZFRvTWVudShtZW51Q2FyZCwgJ21lbnUtY2FyZCcsIG1lbnUxKTtcblxuICAgICAgICAvLyBjcmVhdGUgbWVudUltYWdlXG4gICAgICAgIGNvbnN0IG1lbnVJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBtZW51SW1hZ2Uuc3JjID0gbWVudUltYWdlc1tpXTtcbiAgICAgICAgbWVudUZhY3RvcnkuYWRkVG9NZW51KG1lbnVJbWFnZSwgJ21lbnUtaW1hZ2UnLCBtZW51Q2FyZCk7XG5cbiAgICAgICAgLy8gY3JlYXRlIG1lbnVJdGVtVGV4dCBkaXZcbiAgICAgICAgY29uc3QgbWVudUl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbWVudUZhY3RvcnkuYWRkVG9NZW51KG1lbnVJdGVtVGV4dCwgJ21lbnUtaXRlbS10eHQnLCBtZW51Q2FyZCk7XG5cbiAgICAgICAgLy8gcHVzaCB0byBhcnJheSBzbyBpdCBjYW4gaW5kaXZpZHVhbGx5IHN0eWxlIGxhdGVyXG4gICAgICAgIG1lbnVDYXJkVGV4dHMucHVzaChtZW51SXRlbVRleHQpO1xuICAgIH07XG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUNhcmRUZXh0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBtZW51SXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgbWVudUZhY3RvcnkuYWRkVG9NZW51KG1lbnVJdGVtVGl0bGUsICdtZW51LWl0ZW0tdGl0bGUnLCBtZW51Q2FyZFRleHRzW2ldKTtcblxuICAgICAgICBjb25zdCBtZW51SXRlbVdvcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBtZW51RmFjdG9yeS5hZGRUb01lbnUobWVudUl0ZW1Xb3JkcywgJ21lbnUtaXRlbS13b3JkcycsIG1lbnVDYXJkVGV4dHNbaV0pO1xuXG4gICAgICAgIGNvbnN0IG1lbnVPYmplY3QgPSB7XG4gICAgICAgICAgICBmb29kVGl0bGU6ICcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgIH07XG4gICAgICAgIG1lbnVPYmplY3RzLnB1c2gobWVudU9iamVjdCk7XG5cbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAvLyBhc3NpZ24gdmFsdWVzIHRvIHRoZSB0aXRsZXMgYW5kIHRleHRzXG4gICAgICAgICAgICBtZW51T2JqZWN0LmZvb2RUaXRsZSA9IGBDYXJsJ3MgQ2F1bGRyb24gQ2FrZXNgICsgYCAgIGAgKyBgJDE3Ljk5YDtcbiAgICAgICAgICAgIG1lbnVPYmplY3QuZGVzY3JpcHRpb24gPSBgVGhlc2UgZmFtb3VzIGNha2VzIHdpbGwgbWFrZSB5b3VyIHdhbmQgdGluZ2xlXG4gICAgICAgICAgICB3aXRoIHRoZWlyIHN3YXJteSBhbmQgY3JlYW0tb2YtdG9hZCBmaWxsaW5nIHN1cnJvbmRlZCBieSBhIHdhcm0gY3J1c3Qgb2YgXG4gICAgICAgICAgICBicmVhZCBjcnVtYnMgYW5kIGZpZ2dsZXJvb3QuYDtcblxuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICAgIG1lbnVPYmplY3QuZm9vZFRpdGxlID0gYEZlbm55IFNuYWtlIEZpbGV0YCArIGAgICBgICsgYCQzOS4wMGA7XG4gICAgICAgICAgICBtZW51T2JqZWN0LmRlc2NyaXB0aW9uID0gYFdlIGFjcXVpcmUgb3VyIEZlbm5pZXMgYW1vbmdzdCB0aGUgaGlnaGVzdCBcbiAgICAgICAgICAgIHBlYWtzIG9mIHRoZSBIaWdobGFuZHMgbmVhciBIb2d3YXJ0cywgbWFraW5nIHRoaXMgc3RlYWsgYWJzb2x1dGxleSB0b3BcbiAgICAgICAgICAgIG9mIHRoZSBsaW5lYDtcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm90aCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVudUl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IG1lbnVPYmplY3QuZm9vZFRpdGxlO1xuICAgICAgICBtZW51SXRlbVdvcmRzLnRleHRDb250ZW50ID0gbWVudU9iamVjdC5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc29sZS5sb2coIG1lbnVJdGVtVGl0bGUpO1xuICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZyhtZW51T2JqZWN0cyk7XG5cbiAgICAvLyAvLyBhc3NpZ24gdmFsdWVzIHRvIHRoZSB0aXRsZXMgYW5kIHRleHRzXG4gICAgLy8gbWVudU9iamVjdHNbMF0uZm9vZFRpdGxlID0gJ0NhcmxcXCdzIENhdWxkcm9uIENha2VzICAgICQxNy45OSc7XG4gICAgLy8gbWVudU9iamVjdHNbMF0uZGVzY3JpcHRpb24gPSBgVGhlc2UgZmFtb3VzIGNha2VzIHdpbGwgbWFrZSB5b3VyIHdhbmQgdGluZ2xlXG4gICAgLy8gd2l0aCB0aGVpciBzd2FybXkgYW5kIGNyZWFtLW9mLXRvYWQgZmlsbGluZyBzdXJyb25kZWQgYnkgYSB3YXJtIGNydXN0IG9mIFxuICAgIC8vIGJyZWFkIGNydW1icyBhbmQgZmlnZ2xlcm9vdC5gO1xuXG4gICAgLy8gLy8gbWVudUNhcmRUZXh0c1swXS5tZW51SXRlbVRpdGxlLnRleHRDb250ZW50ID0gbWVudU9iamVjdHNbMF0uZm9vZFRpdGxlO1xuICAgIC8vIGNvbnNvbGUubG9nKCBtZW51Q2FyZFRleHRzWzBdLm1lbnVJdGVtVGl0bGUpO1xuXG5cblxufTtcblxuXG5jb25zdCBtZW51RmFjdG9yeSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBmdW5jdGlvbiBhZGRUb01lbnUoZWxlbWVudE5hbWUsIGNsYXNzTmFtZSwgZmF0aGVyRWxlbWVudCApIHtcbiAgICAgICAgZWxlbWVudE5hbWUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICBmYXRoZXJFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnROYW1lKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50TmFtZSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50TmFtZTtcbiAgICB9O1xuICAgIHJldHVybiB7YWRkVG9NZW51fTtcbn0pKCk7XG5cblxuZXhwb3J0IHttZW51Q29udGFpbmVyfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCAnLi9ob21lLmpzJztcbmltcG9ydCB7IGhvbWVQYWdlLCBob21lQ29udGFpbmVyIH0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7IGFib3V0UGFnZSwgYWJvdXRDb250YWluZXIgfSBmcm9tICcuL2Fib3V0LmpzJztcbmltcG9ydCB7IG1lbnVQYWdlLCBtZW51Q29udGFpbmVyIH0gZnJvbSAnLi9tZW51LmpzJztcblxuXG5jb25zb2xlLmxvZygndGVzdCcpXG5cbi8vIG9iamVjdC9mYWN0b3J5IGZ1bmN0aW9uIHRoYXQgd2lsbCBjb25uZWN0IGFsbCBvZiB0aGUgd2ViaXN0ZSBwYWdlc1xuLy8gdG9nZXRoZXIuIEhlcmUgaXMgd2hlcmUgdGhlIG1haW4gZnVuY3Rpb25hbGl0eSB3aWxsIGJlLCB3aGVyZVxuLy8gdGhlIGNvcnJlY3QgcGFnZSB3aWxsIHJlbmRlciBhbmQgYmUgdmlzaWJsZSBiYXNlZCBvbiB3aGF0IHRhYnNcbi8vIHRoZSB1c2VyIGNsaWNrcyBhdCB0aGUgdG9wXG5cblxuLy8gY3JlYXRlIHRoZSBtYWluIHdlYnNpdGUgYmFyIGF0IHRoZSB0b3BcbmNvbnN0IHNpdGVOYXZpZ2F0b3IgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgY29uc3QgcGFnZUhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc29sZS5sb2cocGFnZUhvbGRlcik7XG5cbiAgICAvLyBjcmVhdGUgdGhlIG1haW4gd2Vic2l0ZSBiYXIgYXQgdGhlIHRvcFxuICAgIGNvbnN0IG5hdmlnYXRpb25CYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZpZ2F0aW9uQmFyLnRleHRDb250ZW50ID0gJ0JlcnRpZSBCb3R0XFwncyc7XG4gICAgbmF2aWdhdGlvbkJhci5jbGFzc0xpc3QuYWRkKCduYXZpZ2F0aW9uLWJhcicpO1xuXG4gICAgLy8gYWRkcyB0aGUgbmF2aWdhdGlvbiBiYXIgdG8gdGhlIHRvcFxuICAgIHBhZ2VIb2xkZXIuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbkJhcik7XG5cbiAgICAvLyBvcGVucyB1cCB0b3QgaGUgZGVmYXVsdCBob21lIHBhZ2VcbiAgICBob21lUGFnZSgpO1xuICAgIHBhZ2VIb2xkZXIuYXBwZW5kQ2hpbGQoaG9tZUNvbnRhaW5lcik7XG5cbiAgICBhYm91dFBhZ2UoKTtcbiAgICBwYWdlSG9sZGVyLmFwcGVuZENoaWxkKGFib3V0Q29udGFpbmVyKTtcblxuICAgIG1lbnVQYWdlKCk7XG4gICAgcGFnZUhvbGRlci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcblxuXG4gICAgLy8gYXJyYXkgY29udGFpbmluZyB0aGUgdGFiIG5hbWVzXG4gICAgY29uc3QgdGFiTmFtZXMgPSBbJ0hvbWUnLCAnQWJvdXQnLCAnTWVudScsICdSZXNlcnZhdGlvbnMnXVxuICAgIGNvbnN0IHRhYnMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbi10YWInKTtcbiAgICAgICAgdGFiLnRleHRDb250ZW50ID0gdGFiTmFtZXNbaV07XG4gICAgICAgIHRhYnMucHVzaCh0YWIpO1xuICAgICAgICBuYXZpZ2F0aW9uQmFyLmFwcGVuZENoaWxkKHRhYik7XG4gICAgfVxuXG4gICAgbGV0IGFjdGl2ZVRhYiA9IHRhYnNbMF07XG4gICAgdGFic1swXS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZC10YWInKTtcbiAgICBjb25zb2xlLmxvZyhhY3RpdmVUYWIpO1xuXG5cbiAgICBjb25zb2xlLmxvZyh0YWJzKVxuICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFiKTtcbiAgICAgICAgICAgIGFjdGl2ZVRhYiA9IHRhYjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZVRhYik7XG4gICAgICAgICAgICBzd2l0Y2hQYWdlKGFjdGl2ZVRhYik7XG4gICAgXG4gICAgICAgIH0pO1xuICAgXG4gICAgfSk7XG4gICBcblxuICAgIGZ1bmN0aW9uIHN3aXRjaFBhZ2UoYWN0aXZlVGFiKSB7XG4gICAgICAgIGlmIChhY3RpdmVUYWIgPT09IHRhYnNbMF0pIHtcbiAgICAgICAgICAgIHRhYnNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQtdGFiJyk7XG4gICAgICAgICAgICB0YWJzWzJdLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkLXRhYicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hvbWVwYWdlJyk7XG4gICAgICAgICAgICBob21lQ29udGFpbmVyLnN0eWxlID0gJ2Rpc3BsYXk6IGdyaWQnXG4gICAgICAgICAgICBhYm91dENvbnRhaW5lci5zdHlsZSA9ICdkaXNwbGF5OiBub25lJ1xuICAgICAgICAgICAgbWVudUNvbnRhaW5lci5zdHlsZSA9ICdkaXNwbGF5OiBub25lJ1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vIGhhdmUgdG8gZGlzYWJsZSB0aGUgSG9tZSBEaXYgY2xpY2tcbiAgICAgICAgICAgIHRhYnNbMF0uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQtdGFiJyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChhY3RpdmVUYWIgPT09IHRhYnNbMV0pIHtcbiAgICAgICAgICAgIHRhYnNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQtdGFiJyk7XG4gICAgICAgICAgICB0YWJzWzJdLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkLXRhYicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Fib3V0Jyk7XG4gICAgICAgICAgICBob21lQ29udGFpbmVyLnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnXG4gICAgICAgICAgICBhYm91dENvbnRhaW5lci5zdHlsZSA9ICdkaXNwbGF5OiBmbGV4J1xuICAgICAgICAgICAgbWVudUNvbnRhaW5lci5zdHlsZSA9ICdkaXNwbGF5OiBub25lJ1xuXG5cbiAgICAgICAgICAgIHRhYnNbMV0uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQtdGFiJyk7XG5cbiAgICAgICAgfSAgZWxzZSBpZiAoYWN0aXZlVGFiID09PSB0YWJzWzJdKSB7XG4gICAgICAgICAgICB0YWJzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkLXRhYicpO1xuICAgICAgICAgICAgdGFic1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZC10YWInKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNZW51IGNsaWNrZWQnKTtcblxuICAgICAgICAgICAgbWVudUNvbnRhaW5lci5zdHlsZSA9ICdkaXNwbGF5OiBncmlkOydcbiAgICAgICAgICAgIGhvbWVDb250YWluZXIuc3R5bGUgPSAnZGlzcGxheTogbm9uZSdcbiAgICAgICAgICAgIGFib3V0Q29udGFpbmVyLnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnXG5cbiAgICAgICAgICAgIHRhYnNbMl0uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQtdGFiJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb2VzbnQgZXhpc3QnKVxuICAgICAgICB9XG5cbiAgICB9XG5cblxufSkoKTtcblxuXG5cblxuLy8gYWRkIGFkZEV2ZW50TGlzdGVuZXJzIHRvIHRhYiBsaW5rcyBhdCB0aGUgdG9wIG9mIHBhZ2UsIHNvIHRoYXQgd2hlbiB0aGV5XG4vL2FyZSBjbGlja2VkLCB0aGUgY29ycmVjdCBwYWdlIGlzIGxvYWRlZCBpbiB0aHJvdWdoIHRoZSBcImNvbnRlbnRcIiBkaXYuXG5cbi8vIHdoZW4gb25lIHBhZ2UgaXMgc2VsZWN0ZWQsIHRoZSBvdGhlcnMgc2hvdWxkIGJlIHNldCB0b1xuLy8gJ2Rpc3BsYXk6IG5vbmUnXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==