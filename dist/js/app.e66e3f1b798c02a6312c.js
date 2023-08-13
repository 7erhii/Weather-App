/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/resizer.js":
/*!*****************************!*\
  !*** ./src/core/resizer.js ***!
  \*****************************/
/***/ (() => {

var defaultWidth = 1280,
    defaultFont = 16,
    mobileFont = 16,
    minWidth = 768,
    minHeight = 600,
    defaultHeight = 900;

function fSize(device, vW, vH) {
  if (vW <= 374) {
    return 13;
  }

  return device ? mobileFont : defaultFont * Math.min(Math.max(minWidth, vW) / defaultWidth, Math.max(minHeight, vH) / defaultHeight);
}

function modifierDevice() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var isMobile = windowWidth <= 767;

  if (document.body) {
    document.body.style.fontSize = fSize(isMobile, windowWidth, windowHeight) + "px";
  }

  if (isMobile) {
    document.documentElement.classList.add("mobile");
  } else {
    document.documentElement.classList.remove("mobile");
  }
}

window.onload = function () {
  modifierDevice();
};

window.onresize = function () {
  modifierDevice();
};

modifierDevice();

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/views/index.pug":
/*!*****************************!*\
  !*** ./src/views/index.pug ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;







pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../assets/images/snow.png */ "./src/assets/images/snow.png"), true, true)+" type=\"image\u002Fpng\"") + "\u003E\u003Ctitle\u003EWeather App\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"wrapper\"\u003E" + (null == (pug_interp = (__webpack_require__(/*! ./parts/main.pug */ "./src/views/parts/main.pug").call)(this, locals)) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/views/parts/main.pug":
/*!**********************************!*\
  !*** ./src/views/parts/main.pug ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cmain class=\"main\"\u003E\u003Cdiv class=\"daily\"\u003E\u003Cdiv class=\"daily__header\"\u003E\u003Cdiv class=\"daily__day\"\u003E\u003Cspan class=\"js-day-name\"\u003E-\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"daily__date\"\u003E\u003Cspan class=\"js-day-date\"\u003E-\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"daily__location\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../assets/images/location.png */ "./src/assets/images/location.png"), true, true)+" alt=\"\"") + "\u003E\u003Cp class=\"js-city-name\"\u003E-\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"daily__weather\"\u003E\u003Cdiv class=\"daily__temp\"\u003E\u003Cspan class=\"js-city-temp\"\u003E-\u003C\u002Fspan\u003E\u003Cdiv class=\"daily__img\"\u003E\u003Cimg class=\"daily__location-img js-weather-icon\" src=\"https:\u002F\u002Fopenweathermap.org\u002Fimg\u002Fwn\u002F10d@2x.png\" alt=\"\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"daily__state\"\u003E\u003Cspan class=\"js-city-weather-status\"\u003E-\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"info\"\u003E\u003Cdiv class=\"info__indicators\"\u003E\u003Cdiv class=\"switcher\"\u003E\u003Cp\u003EMetric\u002FImperial\u003C\u002Fp\u003E\u003Clabel class=\"switch\"\u003E\u003Cinput class=\"js-switcher-input\" type=\"checkbox\"\u003E\u003Cdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__indicator\"\u003E\u003Cp\u003EWind Speed\u003C\u002Fp\u003E\u003Cspan class=\"js-wind-speed\"\u003E-\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__indicator\"\u003E\u003Cp\u003EGust\u003C\u002Fp\u003E\u003Cspan class=\"js-wind-gust\"\u003E-\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__indicator\"\u003E\u003Cp\u003EWind Direction\u003C\u002Fp\u003E\u003Cspan class=\"js-wind-direction\"\u003E-\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__days\"\u003E\u003Cdiv class=\"info__day info__day--active\"\u003E\u003Cdiv class=\"info__day-state\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../assets/images/curr-temp.svg */ "./src/assets/images/curr-temp.svg"), true, true)+" alt=\"\"") + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__day-name\"\u003E\u003Cp\u003ECurr\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__day-temp\"\u003E\u003Cp class=\"js-city-curr-temp\"\u003E-\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__day\"\u003E\u003Cdiv class=\"info__day-state\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../assets/images/max-temp.svg */ "./src/assets/images/max-temp.svg"), true, true)+" alt=\"\"") + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__day-name\"\u003E\u003Cp\u003Emax\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__day-temp\"\u003E\u003Cp class=\"js-city-max-temp\"\u003E-\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__day\"\u003E\u003Cdiv class=\"info__day-state\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../assets/images/min-temp.svg */ "./src/assets/images/min-temp.svg"), true, true)+" alt=\"\"") + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__day-name\"\u003E\u003Cp\u003EMin\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__day-temp\"\u003E\u003Cp class=\"js-city-min-temp\"\u003E-\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__day\"\u003E\u003Cdiv class=\"info__day-state\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../assets/images/feels-temp.svg */ "./src/assets/images/feels-temp.svg"), true, true)+" alt=\"\"") + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__day-name\"\u003E\u003Cp\u003EFeels like\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__day-temp\"\u003E\u003Cp class=\"js-city-fells-temp\"\u003E-\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__location-input\"\u003E\u003Cdiv class=\"city-input\"\u003E\u003Cinput class=\"js-search-input\" type=\"text\" placeholder=\"City for search...\"\u003E\u003Cdiv class=\"city-input__error\"\u003E\u003Cspan class=\"js-search-input-error-message\"\u003EEmpty field\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__actions\"\u003E\u003Cbutton class=\"button-submit js-search-button\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../assets/images/location.png */ "./src/assets/images/location.png"), true, true)+" alt=\"\"") + "\u003E\u003Cspan\u003EChange Location\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmain\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || (__webpack_require__(/*! fs */ "?8f63").readFileSync)(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./src/core/api.ts":
/*!*************************!*\
  !*** ./src/core/api.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "axiosInstance": () => (/* binding */ axiosInstance)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
// Core

var apiKey = "fe83e732c1de1a1158a11fa7a041f62e";
var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
    params: {
        appid: apiKey,
    },
});


/***/ }),

/***/ "./src/core/main.ts":
/*!**************************!*\
  !*** ./src/core/main.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/core/api.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/core/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Api

// Utils

// Сохраняем текущий город
var currentCityName = "Kyiv";
var setCurrentDateInfo = function () {
    var dayElement = document.querySelector(".js-day-name");
    var dateElement = document.querySelector(".js-day-date");
    var currentDate = new Date();
    dayElement.innerHTML = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.formatCurrentDate)(currentDate);
    dateElement.innerHTML = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getDayOfWeek)(currentDate);
};
var getUtilsValueFromSwitcher = function () {
    var switcher = document.querySelector(".js-switcher-input");
    return switcher.checked ? "imperial" : "metric";
};
var getSpeedUtilsValueFromSwitcher = function () {
    var switcher = document.querySelector(".js-switcher-input");
    return switcher.checked ? "imperial" : "metric";
};
var getWeatherByCity = function (cityValue) { return __awaiter(void 0, void 0, void 0, function () {
    var weekWeather, dayWeather, city, _a, main, wind, weather, formatData, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4 /*yield*/, _api__WEBPACK_IMPORTED_MODULE_0__.axiosInstance.get("/forecast", {
                        params: {
                            q: cityValue,
                            units: getUtilsValueFromSwitcher(),
                        },
                    })];
            case 1:
                weekWeather = _b.sent();
                return [4 /*yield*/, _api__WEBPACK_IMPORTED_MODULE_0__.axiosInstance.get("/weather", {
                        params: {
                            q: cityValue,
                            units: getUtilsValueFromSwitcher(),
                        },
                    })];
            case 2:
                dayWeather = _b.sent();
                city = weekWeather.data.city;
                _a = dayWeather.data, main = _a.main, wind = _a.wind, weather = _a.weather;
                formatData = {
                    city: {
                        country: city.country,
                        name: city.name,
                        coord: {
                            lat: city.coord.lat,
                            lon: city.coord.lon,
                        },
                        sunrise: city.sunrise,
                        sunset: city.sunset,
                    },
                    info: {
                        description: weather[0].description,
                        icon: weather[0].icon,
                        temp: {
                            temp: main.temp,
                            temp_max: main.temp_max,
                            temp_min: main.temp_min,
                            feels_like: main.feels_like,
                        },
                        wind: {
                            speed: wind.speed,
                            deg: wind.deg,
                            gust: wind.gust,
                        },
                    },
                };
                currentCityName = formatData.city.name;
                return [2 /*return*/, formatData];
            case 3:
                error_1 = _b.sent();
                return [2 /*return*/, error_1.response.data];
            case 4: return [2 /*return*/];
        }
    });
}); };
var renderWeatherData = function (data) {
    // Заполняем город
    var cityName = document.querySelector(".js-city-name");
    cityName.innerHTML = data.city.name + ", " + data.city.country;
    // Заполняем температуру
    var cityTemp = document.querySelector(".js-city-temp");
    var units = getUtilsValueFromSwitcher();
    cityTemp.innerHTML = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.formatTempByUnits)(data.info.temp.temp, units);
    // Заполняем статус погоды
    var cityWeatherStatus = document.querySelector(".js-city-weather-status");
    cityWeatherStatus.innerHTML = data.info.description;
    // Заполняем скорость ветра 3 пункта
    var speedUnits = getSpeedUtilsValueFromSwitcher();
    var windSpeed = document.querySelector(".js-wind-speed");
    var windDirection = document.querySelector(".js-wind-direction");
    var windGust = document.querySelector(".js-wind-gust");
    windSpeed.innerHTML = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.formatSpeedByUnits)(data.info.wind.speed, speedUnits);
    windDirection.innerHTML = String(data.info.wind.deg) + "\u00B0";
    windGust.innerHTML = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.formatSpeedByUnits)(data.info.wind.gust, speedUnits);
    // Заполняем дополнительную информацию о температуре 4 блока
    var cityCurrentTemp = document.querySelector(".js-city-curr-temp");
    var cityMaxTemp = document.querySelector(".js-city-max-temp");
    var cityMinTemp = document.querySelector(".js-city-min-temp");
    var cityFellsTemp = document.querySelector(".js-city-fells-temp");
    cityCurrentTemp.innerHTML = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.formatTempByUnits)(data.info.temp.temp, units);
    cityMaxTemp.innerHTML = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.formatTempByUnits)(data.info.temp.temp_max, units);
    cityMinTemp.innerHTML = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.formatTempByUnits)(data.info.temp.temp_min, units);
    cityFellsTemp.innerHTML = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.formatTempByUnits)(data.info.temp.feels_like, units);
    // Добавляем иконку
    var weatherIcon = document.querySelector(".js-weather-icon");
    weatherIcon.src = "https://openweathermap.org/img/wn/".concat(data.info.icon, "@2x.png");
};
var getWeatherByCityName = function (cityValue) { return __awaiter(void 0, void 0, void 0, function () {
    var searchInputErrorMessage, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchInputErrorMessage = document.querySelector(".js-search-input-error-message");
                if (!cityValue) return [3 /*break*/, 2];
                searchInputErrorMessage.style.display = "none";
                return [4 /*yield*/, getWeatherByCity(cityValue)];
            case 1:
                data = _a.sent();
                if ("cod" in data && data.cod === "404") {
                    searchInputErrorMessage.innerHTML = "city not found";
                    searchInputErrorMessage.style.display = "block";
                    return [2 /*return*/];
                }
                if ("info" in data && "city" in data) {
                    renderWeatherData(data);
                }
                return [3 /*break*/, 3];
            case 2:
                searchInputErrorMessage.innerHTML = "please enter a city";
                searchInputErrorMessage.style.display = "block";
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); };
var searchInitEvent = function () {
    var searchBtn = document.querySelector(".js-search-button");
    var searchInput = document.querySelector(".js-search-input");
    searchBtn.addEventListener("click", function () { return __awaiter(void 0, void 0, void 0, function () {
        var cityValue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cityValue = searchInput.value;
                    return [4 /*yield*/, getWeatherByCityName(cityValue)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    searchInput.addEventListener("keydown", function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var cityValue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(e.key === "Enter")) return [3 /*break*/, 2];
                    cityValue = searchInput.value;
                    return [4 /*yield*/, getWeatherByCityName(cityValue)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); });
};
var switcherInitEvent = function () {
    var switcher = document.querySelector(".js-switcher-input");
    switcher.addEventListener("change", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            getWeatherByCityName(currentCityName);
            return [2 /*return*/];
        });
    }); });
};
var initApp = function () {
    // Добавляем на страницу текущую дату
    setCurrentDateInfo();
    // Инициализируем событие поиска и клика на кнопку
    searchInitEvent();
    // Инициилизируем свитчер
    switcherInitEvent();
    // Вызывает функцию по умолчанию для города Киев
    getWeatherByCityName(currentCityName);
};
initApp();


/***/ }),

/***/ "./src/core/utils.ts":
/*!***************************!*\
  !*** ./src/core/utils.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatCurrentDate": () => (/* binding */ formatCurrentDate),
/* harmony export */   "formatSpeedByUnits": () => (/* binding */ formatSpeedByUnits),
/* harmony export */   "formatTempByUnits": () => (/* binding */ formatTempByUnits),
/* harmony export */   "getDayOfWeek": () => (/* binding */ getDayOfWeek)
/* harmony export */ });
var formatCurrentDate = function (currentDate) {
    var day = currentDate.getDate();
    var month = currentDate.toLocaleString("default", {
        month: "long",
    });
    var year = currentDate.getFullYear();
    return "".concat(day, " ").concat(month, " ").concat(year);
};
var getDayOfWeek = function (currentDate) {
    var daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    var getDayIndex = currentDate.getDay();
    return daysOfWeek[getDayIndex];
};
var formatTempByUnits = function (temp, unit) {
    var temperatureUnitValue = unit === "imperial" ? "F" : "C";
    return "".concat(Math.round(temp), "&deg; ").concat(temperatureUnitValue);
};
var formatSpeedByUnits = function (speed, speedUnit) {
    var speedUnitValue = speedUnit === "imperial" ? "miles/hour" : "meter/sec";
    return "".concat(speed, " ").concat(speedUnitValue);
};


/***/ }),

/***/ "./src/assets/images/curr-temp.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/curr-temp.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/6aec51f99fc88c7a0dd8.svg";

/***/ }),

/***/ "./src/assets/images/feels-temp.svg":
/*!******************************************!*\
  !*** ./src/assets/images/feels-temp.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2c058ddfa8d045933f8a.svg";

/***/ }),

/***/ "./src/assets/images/location.png":
/*!****************************************!*\
  !*** ./src/assets/images/location.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fdc06d46f0b25582909b.png";

/***/ }),

/***/ "./src/assets/images/max-temp.svg":
/*!****************************************!*\
  !*** ./src/assets/images/max-temp.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c7b3c23481a0e1b2bacd.svg";

/***/ }),

/***/ "./src/assets/images/min-temp.svg":
/*!****************************************!*\
  !*** ./src/assets/images/min-temp.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/595468d3fd45cd79f8d5.svg";

/***/ }),

/***/ "./src/assets/images/snow.png":
/*!************************************!*\
  !*** ./src/assets/images/snow.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ea0fefc736b5caab372d.png";

/***/ }),

/***/ "?8f63":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./node_modules/axios/lib/adapters/adapters.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/adapters/adapters.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.js */ "./node_modules/axios/lib/helpers/null.js");
/* harmony import */ var _xhr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xhr.js */ "./node_modules/axios/lib/adapters/xhr.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");




const knownAdapters = {
  http: _http_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  xhr: _xhr_js__WEBPACK_IMPORTED_MODULE_1__["default"]
};
_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {
        value
      });
    } catch (e) {// eslint-disable-next-line no-empty
    }

    Object.defineProperty(fn, 'adapterName', {
      value
    });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getAdapter: adapters => {
    adapters = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isArray(adapters) ? adapters : [adapters];
    const {
      length
    } = adapters;
    let nameOrAdapter;
    let adapter;

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];

      if (adapter = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
        break;
      }
    }

    if (!adapter) {
      if (adapter === false) {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](`Adapter ${nameOrAdapter} is not supported by the environment`, 'ERR_NOT_SUPPORT');
      }

      throw new Error(_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`);
    }

    if (!_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFunction(adapter)) {
      throw new TypeError('adapter is not a function');
    }

    return adapter;
  },
  adapters: knownAdapters
});

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_settle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../core/settle.js */ "./node_modules/axios/lib/core/settle.js");
/* harmony import */ var _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../helpers/cookies.js */ "./node_modules/axios/lib/helpers/cookies.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../helpers/isURLSameOrigin.js */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
/* harmony import */ var _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../defaults/transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/parseProtocol.js */ "./node_modules/axios/lib/helpers/parseProtocol.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/speedometer.js */ "./node_modules/axios/lib/helpers/speedometer.js");
















function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;

  const _speedometer = (0,_helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;

    const rate = _speedometer(progressBytes);

    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };
    data[isDownloadStream ? 'download' : 'upload'] = true;
    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;

    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFormData(requestData)) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserEnv || _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else {
        requestHeaders.setContentType('multipart/form-data;', false); // mobile/desktop app frameworks
      }
    }

    let request = new XMLHttpRequest(); // HTTP basic authentication

    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = (0,_core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__["default"])(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__["default"])(fullPath, config.params, config.paramsSerializer), true); // Set the request timeout in MS

    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      } // Prepare the response


      const responseHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      (0,_core_settle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response); // Clean up request

      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        } // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request


        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        } // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'


        setTimeout(onloadend);
      };
    } // Handle browser request cancellation (as opposed to a manual cancellation)


    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Request aborted', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED, config, request)); // Clean up request

      request = null;
    }; // Handle low level network errors


    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Network Error', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_NETWORK, config, request)); // Clean up request

      request = null;
    }; // Handle timeout


    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__["default"];

      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }

      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"](timeoutErrorMessage, transitional.clarifyTimeoutError ? _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ETIMEDOUT : _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED, config, request)); // Clean up request

      request = null;
    }; // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.


    if (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserEnv) {
      // Add xsrf header
      const xsrfValue = (config.withCredentials || (0,_helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__["default"])(fullPath)) && config.xsrfCookieName && _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__["default"].read(config.xsrfCookieName);

      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    } // Remove Content-Type if data is undefined


    requestData === undefined && requestHeaders.setContentType(null); // Add headers to the request

    if ('setRequestHeader' in request) {
      _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    } // Add withCredentials to request if needed


    if (!_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    } // Add responseType to request if needed


    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    } // Handle progress if needed


    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    } // Not all browsers support upload events


    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }

        reject(!cancel || cancel.type ? new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__["default"](null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);

      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = (0,_helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__["default"])(fullPath);

    if (protocol && _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].protocols.indexOf(protocol) === -1) {
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Unsupported protocol ' + protocol + ':', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_BAD_REQUEST, config));
      return;
    } // Send the request


    request.send(requestData || null);
  });
});

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");
/* harmony import */ var _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Axios.js */ "./node_modules/axios/lib/core/Axios.js");
/* harmony import */ var _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel/CancelToken.js */ "./node_modules/axios/lib/cancel/CancelToken.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/spread.js */ "./node_modules/axios/lib/helpers/spread.js");
/* harmony import */ var _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/isAxiosError.js */ "./node_modules/axios/lib/helpers/isAxiosError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers/HttpStatusCode.js */ "./node_modules/axios/lib/helpers/HttpStatusCode.js");


















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */

function createInstance(defaultConfig) {
  const context = new _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"](defaultConfig);
  const instance = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.request, context); // Copy axios.prototype to instance

  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, context, {
    allOwnKeys: true
  }); // Copy context to instance

  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, context, null, {
    allOwnKeys: true
  }); // Factory for creating new instances

  instance.create = function create(instanceConfig) {
    return createInstance((0,_core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultConfig, instanceConfig));
  };

  return instance;
} // Create the default instance to be exported


const axios = createInstance(_defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]); // Expose Axios class to allow class inheritance

axios.Axios = _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"]; // Expose Cancel & CancelToken

axios.CanceledError = _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__["default"];
axios.CancelToken = _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__["default"];
axios.isCancel = _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__["default"];
axios.VERSION = _env_data_js__WEBPACK_IMPORTED_MODULE_8__.VERSION;
axios.toFormData = _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__["default"]; // Expose AxiosError class

axios.AxiosError = _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__["default"]; // alias for CanceledError for backward compatibility

axios.Cancel = axios.CanceledError; // Expose all/spread

axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__["default"]; // Expose isAxiosError

axios.isAxiosError = _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__["default"]; // Expose mergeConfig

axios.mergeConfig = _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"];
axios.AxiosHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__["default"];

axios.formToJSON = thing => (0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isHTMLForm(thing) ? new FormData(thing) : thing);

axios.HttpStatusCode = _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_15__["default"];
axios.default = axios; // this module should only have a default export

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");



/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */

class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this; // eslint-disable-next-line func-names

    this.promise.then(cancel => {
      if (!token._listeners) return;
      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }

      token._listeners = null;
    }); // eslint-disable-next-line func-names

    this.promise.then = onfulfilled => {
      let _resolve; // eslint-disable-next-line func-names


      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](message, config, request);
      resolvePromise(token.reason);
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */


  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  /**
   * Subscribe to the cancel signal
   */


  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  /**
   * Unsubscribe from the cancel signal
   */


  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }

    const index = this._listeners.indexOf(listener);

    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */


  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CancelToken);

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CanceledError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CanceledError.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */

function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, message == null ? 'canceled' : message, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].inherits(CanceledError, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
  __CANCEL__: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanceledError);

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isCancel)
/* harmony export */ });


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterceptorManager.js */ "./node_modules/axios/lib/core/InterceptorManager.js");
/* harmony import */ var _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatchRequest.js */ "./node_modules/axios/lib/core/dispatchRequest.js");
/* harmony import */ var _mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/validator.js */ "./node_modules/axios/lib/helpers/validator.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");










const validators = _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */

class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
      response: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */


  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);
    const {
      transitional,
      paramsSerializer,
      headers
    } = config;

    if (transitional !== undefined) {
      _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    } // Set config.method


    config.method = (config.method || this.defaults.method || 'get').toLowerCase();
    let contextHeaders; // Flatten headers

    contextHeaders = headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].merge(headers.common, headers[config.method]);
    contextHeaders && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], method => {
      delete headers[method];
    });
    config.headers = _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__["default"].concat(contextHeaders, headers); // filter out skipped interceptors

    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [_dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;
    let newConfig = config;
    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];

      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);
    const fullPath = (0,_buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__["default"])(config.baseURL, config.url);
    return (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__["default"])(fullPath, config.params, config.paramsSerializer);
  }

} // Provide aliases for supported request methods


_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Axios);

/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosError.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosError.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");



/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */

function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const prototype = AxiosError.prototype;
const descriptors = {};
['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED', 'ERR_NOT_SUPPORT', 'ERR_INVALID_URL' // eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {
    value: code
  };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {
  value: true
}); // eslint-disable-next-line func-names

AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);
  _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosError);

/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosHeaders.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosHeaders.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/parseHeaders.js */ "./node_modules/axios/lib/helpers/parseHeaders.js");




const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = str => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(value)) return;

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
}

function buildAccessors(obj, header) {
  const accessorName = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toCamelCase(' ' + header);
  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function (arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, lHeader);

      if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) => _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders((0,_helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"])(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);
      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];
          deleted = true;
        }
      }
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];

      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.join(', ') : value);
    });
    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach(target => computed.set(target));
    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }

}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezeMethods(AxiosHeaders.prototype);
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezeMethods(AxiosHeaders);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosHeaders);

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




class InterceptorManager {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */


  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */


  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */


  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */


  forEach(fn) {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterceptorManager);

/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFullPath)
/* harmony export */ });
/* harmony import */ var _helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/isAbsoluteURL.js */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
/* harmony import */ var _helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/combineURLs.js */ "./node_modules/axios/lib/helpers/combineURLs.js");




/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */

function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0,_helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__["default"])(requestedURL)) {
    return (0,_helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__["default"])(baseURL, requestedURL);
  }

  return requestedURL;
}

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dispatchRequest)
/* harmony export */ });
/* harmony import */ var _transformData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformData.js */ "./node_modules/axios/lib/core/transformData.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");








/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */

function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](null, config);
  }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */


function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers); // Transform request data

  config.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(config, config.transformRequest);

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__["default"].getAdapter(config.adapter || _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"].adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config); // Transform response data

    response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(config, config.transformResponse, response);
    response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!(0,_cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__["default"])(reason)) {
      throwIfCancellationRequested(config); // Transform response data

      if (reason && reason.response) {
        reason.response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(config, config.transformResponse, reason.response);
        reason.response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeConfig)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");





const headersToObject = thing => thing instanceof _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? thing.toJSON() : thing;
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */


function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(target) && _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge.call({
        caseless
      }, target, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge({}, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isArray(source)) {
      return source.slice();
    }

    return source;
  } // eslint-disable-next-line consistent-return


  function mergeDeepProperties(a, b, caseless) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  } // eslint-disable-next-line consistent-return


  function valueFromConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  } // eslint-disable-next-line consistent-return


  function defaultToConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  } // eslint-disable-next-line consistent-return


  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };
  _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ settle)
/* harmony export */ });
/* harmony import */ var _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");



/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */

function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;

  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Request failed with status code ' + response.status, [_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_REQUEST, _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
  }
}

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transformData)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");





/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */

function transformData(fns, response) {
  const config = this || _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  const context = response || config;
  const headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(context.headers);
  let data = context.data;
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });
  headers.normalize();
  return data;
}

/***/ }),

/***/ "./node_modules/axios/lib/defaults/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/defaults/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _transitional_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/toURLEncodedForm.js */ "./node_modules/axios/lib/helpers/toURLEncodedForm.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");









const DEFAULT_CONTENT_TYPE = {
  'Content-Type': undefined
};
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */

function stringifySafely(rawValue, parser, encoder) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {
  transitional: _transitional_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  adapter: ['xhr', 'http'],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(data);

    if (isObjectPayload && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }

      return hasJSONContentType ? JSON.stringify((0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data)) : data;
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBuffer(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStream(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFile(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(data)) {
      return data;
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBufferView(data)) {
      return data.buffer;
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return (0,_helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data, this.formSerializer).toString();
      }

      if ((isFileList = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return (0,_helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(isFileList ? {
          'files[]': data
        } : data, _FormData && new _FormData(), this.formSerializer);
      }
    }

    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].from(e, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].ERR_BAD_RESPONSE, this, null, this.response);
          }

          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.FormData,
    Blob: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].merge(DEFAULT_CONTENT_TYPE);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaults);

/***/ }),

/***/ "./node_modules/axios/lib/defaults/transitional.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/defaults/transitional.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});

/***/ }),

/***/ "./node_modules/axios/lib/env/data.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VERSION": () => (/* binding */ VERSION)
/* harmony export */ });
const VERSION = "1.4.0";

/***/ }),

/***/ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js":
/*!****************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");



/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */

function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */


function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function (value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosURLSearchParams);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/HttpStatusCode.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/HttpStatusCode.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HttpStatusCode);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bind)
/* harmony export */ });


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildURL)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");




/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */

function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */


function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  const _encode = options && options.encode || encode;

  const serializeFn = options && options.serialize;
  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(params) ? params.toString() : new _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__["default"](params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ combineURLs)
/* harmony export */ });

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */

function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStandardBrowserEnv ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      const cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(path)) {
        cookie.push('path=' + path);
      }

      if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}());

/***/ }),

/***/ "./node_modules/axios/lib/helpers/formDataToJSON.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/formDataToJSON.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");



/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */

function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */


function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;

  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }

  return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */


function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target) ? target.length : name;

    if (isLast) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(formData) && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(formData.entries)) {
    const obj = {};
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }

  return null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formDataToJSON);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAbsoluteURL)
/* harmony export */ });

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAxiosError)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");



/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */

function isAxiosError(payload) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(payload) && payload.isAxiosError === true;
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStandardBrowserEnv ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  const msie = /(msie|trident)/i.test(navigator.userAgent);
  const urlParsingNode = document.createElement('a');
  let originURL;
  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */

  function resolveURL(url) {
    let href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);
  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */

  return function isURLSameOrigin(requestURL) {
    const parsed = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}());

/***/ }),

/***/ "./node_modules/axios/lib/helpers/null.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/null.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line strict
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");


 // RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers

const ignoreDuplicateOf = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']);
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });
  return parsed;
});

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseProtocol.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseProtocol.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseProtocol)
/* harmony export */ });


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/speedometer.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/speedometer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */

function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== undefined ? min : 1000;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (speedometer);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ spread)
/* harmony export */ });

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */

function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/toFormData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toFormData.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/node/classes/FormData.js */ "./node_modules/axios/lib/helpers/null.js");



 // temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored


/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */

function isVisitable(thing) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(thing) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */


function removeBrackets(key) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]') ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */


function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */


function isFlatArray(arr) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(arr) && !arr.some(isVisitable);
}

const predicates = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"], {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */

function toFormData(obj, formData, options) {
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('target must be an object');
  } // eslint-disable-next-line no-param-reassign


  formData = formData || new (_platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"] || FormData)(); // eslint-disable-next-line no-param-reassign

  options = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens; // eslint-disable-next-line no-use-before-define

  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;

  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;

  const useBlob = _Blob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSpecCompliantForm(formData);

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(value)) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Blob is not supported. Use a Buffer instead.');
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }
  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */


  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2); // eslint-disable-next-line no-param-reassign

        value = JSON.stringify(value);
      } else if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) && isFlatArray(value) || (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]')) && (arr = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(value))) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && formData.append( // eslint-disable-next-line no-nested-ternary
          indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }

  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(value, function each(el, key) {
      const result = !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && visitor.call(formData, el, _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(key) ? key.trim() : key, path, exposedHelpers);

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);
  return formData;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFormData);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/toURLEncodedForm.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toURLEncodedForm.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toURLEncodedForm)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");





function toURLEncodedForm(data, options) {
  return (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, new _platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].classes.URLSearchParams(), Object.assign({
    visitor: function (value, key, path, helpers) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNode && _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");




const validators = {}; // eslint-disable-next-line func-names

['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});
const deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */

validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + _env_data_js__WEBPACK_IMPORTED_MODULE_0__.VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  } // eslint-disable-next-line func-names


  return (value, opt, opts) => {
    if (validator === false) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"](formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_DEPRECATED);
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true; // eslint-disable-next-line no-console

      console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
    }

    return validator ? validator(value, opt, opts) : true;
  };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */


function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('options must be an object', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
  }

  const keys = Object.keys(options);
  let i = keys.length;

  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];

    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);

      if (result !== true) {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('option ' + opt + ' must be ' + result, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
      }

      continue;
    }

    if (allowUnknown !== true) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Unknown option ' + opt, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  assertOptions,
  validators
});

/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/Blob.js":
/*!*****************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/Blob.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof Blob !== 'undefined' ? Blob : null);

/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/FormData.js":
/*!*********************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/FormData.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof FormData !== 'undefined' ? FormData : null);

/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/URLSearchParams.js */ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js");
/* harmony import */ var _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/FormData.js */ "./node_modules/axios/lib/platform/browser/classes/FormData.js");
/* harmony import */ var _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Blob.js */ "./node_modules/axios/lib/platform/browser/classes/Blob.js");



/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */

const isStandardBrowserEnv = (() => {
  let product;

  if (typeof navigator !== 'undefined' && ((product = navigator.product) === 'ReactNative' || product === 'NativeScript' || product === 'NS')) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
})();
/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */


const isStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== 'undefined' && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isBrowser: true,
  classes: {
    URLSearchParams: _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormData: _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    Blob: _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");


 // utils is a library of generic helper functions non-specific to axios

const {
  toString
} = Object.prototype;
const {
  getPrototypeOf
} = Object;

const kindOf = (cache => thing => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = type => {
  type = type.toLowerCase();
  return thing => kindOf(thing) === type;
};

const typeOfTest = type => thing => typeof thing === type;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */


const {
  isArray
} = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */

const isUndefined = typeOfTest('undefined');
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */

function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */


const isArrayBuffer = kindOfTest('ArrayBuffer');
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */

function isArrayBufferView(val) {
  let result;

  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }

  return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */


const isString = typeOfTest('string');
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */

const isFunction = typeOfTest('function');
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */

const isNumber = typeOfTest('number');
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */

const isObject = thing => thing !== null && typeof thing === 'object';
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */


const isBoolean = thing => thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */


const isPlainObject = val => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */


const isDate = kindOfTest('Date');
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */

const isFile = kindOfTest('File');
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */

const isBlob = kindOfTest('Blob');
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */

const isFileList = kindOfTest('FileList');
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */

const isStream = val => isObject(val) && isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */


const isFormData = thing => {
  let kind;
  return thing && (typeof FormData === 'function' && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === 'formdata' || // detect form-data instance
  kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]'));
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */


const isURLSearchParams = kindOfTest('URLSearchParams');
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */

const trim = str => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */


function forEach(obj, fn, {
  allOwnKeys = false
} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l; // Force an array if not already something iterable

  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;

  let _key;

  while (i-- > 0) {
    _key = keys[i];

    if (key === _key.toLowerCase()) {
      return _key;
    }
  }

  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : global;
})();

const isContextDefined = context => !isUndefined(context) && context !== _global;
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */


function
  /* obj1, obj2, obj3, ... */
merge() {
  const {
    caseless
  } = isContextDefined(this) && this || {};
  const result = {};

  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;

    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */


const extend = (a, b, thisArg, {
  allOwnKeys
} = {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__["default"])(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {
    allOwnKeys
  });
  return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */


const stripBOM = content => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }

  return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */


const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */


const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {}; // eslint-disable-next-line no-eq-null,eqeqeq

  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;

    while (i-- > 0) {
      prop = props[i];

      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }

    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */


const endsWith = (str, searchString, position) => {
  str = String(str);

  if (position === undefined || position > str.length) {
    position = str.length;
  }

  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */


const toArray = thing => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);

  while (i-- > 0) {
    arr[i] = thing[i];
  }

  return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names


const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */


const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator = generator.call(obj);
  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */


const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */


const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
    return p1.toUpperCase() + p2;
  });
};
/* Creating a function that will check if an object has a property. */


const hasOwnProperty = (({
  hasOwnProperty
}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */


const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors, (descriptor, name) => {
    if (reducer(descriptor, name, obj) !== false) {
      reducedDescriptors[name] = descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */


const freezeMethods = obj => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];
    if (!isFunction(value)) return;
    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = arr => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};

const noop = () => {};

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
const DIGIT = '0123456789';
const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {
    length
  } = alphabet;

  while (size--) {
    str += alphabet[Math.random() * length | 0];
  }

  return str;
};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */


function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = obj => {
  const stack = new Array(10);

  const visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if (!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = undefined;
        return target;
      }
    }

    return source;
  };

  return visit(obj, 0);
};

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = thing => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
});

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
/******/ 			// no module.id needed
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ "./src/scss/app.scss");
/* harmony import */ var _core_resizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/resizer */ "./src/core/resizer.js");
/* harmony import */ var _core_resizer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_resizer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/main */ "./src/core/main.ts");
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/index.pug */ "./src/views/index.pug");
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_index_pug__WEBPACK_IMPORTED_MODULE_3__);
// npx prettier --write "**/*.pug"





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bURiQztBQW5EYSxDQUFmOzs7Ozs7VUM3cEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUN5QjtBQUNEO0FBQ0g7QUFDTSIsInNvdXJjZXMiOlsid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvY29yZS9yZXNpemVyLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvc2Nzcy9hcHAuc2Nzcz84YjZmIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvdmlld3MvaW5kZXgucHVnIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvdmlld3MvcGFydHMvbWFpbi5wdWciLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2NvcmUvYXBpLnRzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvY29yZS9tYWluLnRzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvY29yZS91dGlscy50cyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL2lnbm9yZWR8L1VzZXJzLzdlcmhpeS9EZXNrdG9wL1dFQi9wcm9qZWN0cy93ZWF0aGVyQXBwL2FwcC9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWV8ZnMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMvYWRhcHRlcnMuanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zRXJyb3IuanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvc0hlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzL2luZGV4LmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzL3RyYW5zaXRpb25hbC5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9lbnYvZGF0YS5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL0F4aW9zVVJMU2VhcmNoUGFyYW1zLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvSHR0cFN0YXR1c0NvZGUuanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9mb3JtRGF0YVRvSlNPTi5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0F4aW9zRXJyb3IuanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9udWxsLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VQcm90b2NvbC5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwZWVkb21ldGVyLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdG9Gb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3RvVVJMRW5jb2RlZEZvcm0uanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vYnJvd3Nlci9jbGFzc2VzL0Jsb2IuanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vYnJvd3Nlci9jbGFzc2VzL0Zvcm1EYXRhLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2Jyb3dzZXIvY2xhc3Nlcy9VUkxTZWFyY2hQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZhdWx0V2lkdGggPSAxMjgwLFxuICBkZWZhdWx0Rm9udCA9IDE2LFxuICBtb2JpbGVGb250ID0gMTYsXG4gIG1pbldpZHRoID0gNzY4LFxuICBtaW5IZWlnaHQgPSA2MDAsXG4gIGRlZmF1bHRIZWlnaHQgPSA5MDA7XG5cbmZ1bmN0aW9uIGZTaXplKGRldmljZSwgdlcsIHZIKSB7XG4gIGlmICh2VyA8PSAzNzQpIHtcbiAgICByZXR1cm4gMTM7XG4gIH1cblxuICByZXR1cm4gZGV2aWNlXG4gICAgPyBtb2JpbGVGb250XG4gICAgOiBkZWZhdWx0Rm9udCAqXG4gICAgICAgIE1hdGgubWluKFxuICAgICAgICAgIE1hdGgubWF4KG1pbldpZHRoLCB2VykgLyBkZWZhdWx0V2lkdGgsXG4gICAgICAgICAgTWF0aC5tYXgobWluSGVpZ2h0LCB2SCkgLyBkZWZhdWx0SGVpZ2h0XG4gICAgICAgICk7XG59XG5cbmZ1bmN0aW9uIG1vZGlmaWVyRGV2aWNlKCkge1xuICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgdmFyIGlzTW9iaWxlID0gd2luZG93V2lkdGggPD0gNzY3O1xuXG4gIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5mb250U2l6ZSA9XG4gICAgICBmU2l6ZShpc01vYmlsZSwgd2luZG93V2lkdGgsIHdpbmRvd0hlaWdodCkgKyBcInB4XCI7XG4gIH1cblxuICBpZiAoaXNNb2JpbGUpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vYmlsZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZVwiKTtcbiAgfVxufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBtb2RpZmllckRldmljZSgpO1xufTtcblxud2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKCkge1xuICBtb2RpZmllckRldmljZSgpO1xufTtcblxubW9kaWZpZXJEZXZpY2UoKTtcblxuXG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7XG5cblxuXG5cblxuXG5cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0MhRE9DVFlQRSBodG1sXFx1MDAzRVxcdTAwM0NodG1sIGxhbmc9XFxcImVuXFxcIlxcdTAwM0VcXHUwMDNDaGVhZFxcdTAwM0VcXHUwMDNDbWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCJcXHUwMDNFXFx1MDAzQ21ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiXFx1MDAzRVxcdTAwM0NtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiaWU9ZWRnZVxcXCJcXHUwMDNFXFx1MDAzQ2xpbmtcIiArIChcIiByZWw9XFxcInNob3J0Y3V0IGljb25cXFwiXCIrcHVnLmF0dHIoXCJocmVmXCIsIHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvc25vdy5wbmdgKSwgdHJ1ZSwgdHJ1ZSkrXCIgdHlwZT1cXFwiaW1hZ2VcXHUwMDJGcG5nXFxcIlwiKSArIFwiXFx1MDAzRVxcdTAwM0N0aXRsZVxcdTAwM0VXZWF0aGVyIEFwcFxcdTAwM0NcXHUwMDJGdGl0bGVcXHUwMDNFXFx1MDAzQ1xcdTAwMkZoZWFkXFx1MDAzRVxcdTAwM0Nib2R5XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIndyYXBwZXJcXFwiXFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9wYXJ0cy9tYWluLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmJvZHlcXHUwMDNFXFx1MDAzQ1xcdTAwMkZodG1sXFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7cHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ21haW4gY2xhc3M9XFxcIm1haW5cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImRhaWx5XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJkYWlseV9faGVhZGVyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJkYWlseV9fZGF5XFxcIlxcdTAwM0VcXHUwMDNDc3BhbiBjbGFzcz1cXFwianMtZGF5LW5hbWVcXFwiXFx1MDAzRS1cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZGFpbHlfX2RhdGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJqcy1kYXktZGF0ZVxcXCJcXHUwMDNFLVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJkYWlseV9fbG9jYXRpb25cXFwiXFx1MDAzRVxcdTAwM0NpbWdcIiArIChwdWcuYXR0cihcInNyY1wiLCByZXF1aXJlKGAuLi8uLi9hc3NldHMvaW1hZ2VzL2xvY2F0aW9uLnBuZ2ApLCB0cnVlLCB0cnVlKStcIiBhbHQ9XFxcIlxcXCJcIikgKyBcIlxcdTAwM0VcXHUwMDNDcCBjbGFzcz1cXFwianMtY2l0eS1uYW1lXFxcIlxcdTAwM0UtXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImRhaWx5X193ZWF0aGVyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJkYWlseV9fdGVtcFxcXCJcXHUwMDNFXFx1MDAzQ3NwYW4gY2xhc3M9XFxcImpzLWNpdHktdGVtcFxcXCJcXHUwMDNFLVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJkYWlseV9faW1nXFxcIlxcdTAwM0VcXHUwMDNDaW1nIGNsYXNzPVxcXCJkYWlseV9fbG9jYXRpb24taW1nIGpzLXdlYXRoZXItaWNvblxcXCIgc3JjPVxcXCJodHRwczpcXHUwMDJGXFx1MDAyRm9wZW53ZWF0aGVybWFwLm9yZ1xcdTAwMkZpbWdcXHUwMDJGd25cXHUwMDJGMTBkQDJ4LnBuZ1xcXCIgYWx0PVxcXCJcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImRhaWx5X19zdGF0ZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW4gY2xhc3M9XFxcImpzLWNpdHktd2VhdGhlci1zdGF0dXNcXFwiXFx1MDAzRS1cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaW5mb1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaW5mb19faW5kaWNhdG9yc1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3dpdGNoZXJcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRU1ldHJpY1xcdTAwMkZJbXBlcmlhbFxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDbGFiZWwgY2xhc3M9XFxcInN3aXRjaFxcXCJcXHUwMDNFXFx1MDAzQ2lucHV0IGNsYXNzPVxcXCJqcy1zd2l0Y2hlci1pbnB1dFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFx1MDAzRVxcdTAwM0NkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsYWJlbFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJpbmZvX19pbmRpY2F0b3JcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRVdpbmQgU3BlZWRcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3NwYW4gY2xhc3M9XFxcImpzLXdpbmQtc3BlZWRcXFwiXFx1MDAzRS1cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaW5mb19faW5kaWNhdG9yXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0VHdXN0XFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJqcy13aW5kLWd1c3RcXFwiXFx1MDAzRS1cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaW5mb19faW5kaWNhdG9yXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0VXaW5kIERpcmVjdGlvblxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDc3BhbiBjbGFzcz1cXFwianMtd2luZC1kaXJlY3Rpb25cXFwiXFx1MDAzRS1cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaW5mb19fZGF5c1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaW5mb19fZGF5IGluZm9fX2RheS0tYWN0aXZlXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJpbmZvX19kYXktc3RhdGVcXFwiXFx1MDAzRVxcdTAwM0NpbWdcIiArIChwdWcuYXR0cihcInNyY1wiLCByZXF1aXJlKGAuLi8uLi9hc3NldHMvaW1hZ2VzL2N1cnItdGVtcC5zdmdgKSwgdHJ1ZSwgdHJ1ZSkrXCIgYWx0PVxcXCJcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaW5mb19fZGF5LW5hbWVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRUN1cnJcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaW5mb19fZGF5LXRlbXBcXFwiXFx1MDAzRVxcdTAwM0NwIGNsYXNzPVxcXCJqcy1jaXR5LWN1cnItdGVtcFxcXCJcXHUwMDNFLVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJpbmZvX19kYXlcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImluZm9fX2RheS1zdGF0ZVxcXCJcXHUwMDNFXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoYC4uLy4uL2Fzc2V0cy9pbWFnZXMvbWF4LXRlbXAuc3ZnYCksIHRydWUsIHRydWUpK1wiIGFsdD1cXFwiXFxcIlwiKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImluZm9fX2RheS1uYW1lXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0VtYXhcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaW5mb19fZGF5LXRlbXBcXFwiXFx1MDAzRVxcdTAwM0NwIGNsYXNzPVxcXCJqcy1jaXR5LW1heC10ZW1wXFxcIlxcdTAwM0UtXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImluZm9fX2RheVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaW5mb19fZGF5LXN0YXRlXFxcIlxcdTAwM0VcXHUwMDNDaW1nXCIgKyAocHVnLmF0dHIoXCJzcmNcIiwgcmVxdWlyZShgLi4vLi4vYXNzZXRzL2ltYWdlcy9taW4tdGVtcC5zdmdgKSwgdHJ1ZSwgdHJ1ZSkrXCIgYWx0PVxcXCJcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaW5mb19fZGF5LW5hbWVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRU1pblxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJpbmZvX19kYXktdGVtcFxcXCJcXHUwMDNFXFx1MDAzQ3AgY2xhc3M9XFxcImpzLWNpdHktbWluLXRlbXBcXFwiXFx1MDAzRS1cXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaW5mb19fZGF5XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJpbmZvX19kYXktc3RhdGVcXFwiXFx1MDAzRVxcdTAwM0NpbWdcIiArIChwdWcuYXR0cihcInNyY1wiLCByZXF1aXJlKGAuLi8uLi9hc3NldHMvaW1hZ2VzL2ZlZWxzLXRlbXAuc3ZnYCksIHRydWUsIHRydWUpK1wiIGFsdD1cXFwiXFxcIlwiKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImluZm9fX2RheS1uYW1lXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0VGZWVscyBsaWtlXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImluZm9fX2RheS10ZW1wXFxcIlxcdTAwM0VcXHUwMDNDcCBjbGFzcz1cXFwianMtY2l0eS1mZWxscy10ZW1wXFxcIlxcdTAwM0UtXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImluZm9fX2xvY2F0aW9uLWlucHV0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5LWlucHV0XFxcIlxcdTAwM0VcXHUwMDNDaW5wdXQgY2xhc3M9XFxcImpzLXNlYXJjaC1pbnB1dFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIkNpdHkgZm9yIHNlYXJjaC4uLlxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2l0eS1pbnB1dF9fZXJyb3JcXFwiXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJqcy1zZWFyY2gtaW5wdXQtZXJyb3ItbWVzc2FnZVxcXCJcXHUwMDNFRW1wdHkgZmllbGRcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaW5mb19fYWN0aW9uc1xcXCJcXHUwMDNFXFx1MDAzQ2J1dHRvbiBjbGFzcz1cXFwiYnV0dG9uLXN1Ym1pdCBqcy1zZWFyY2gtYnV0dG9uXFxcIlxcdTAwM0VcXHUwMDNDaW1nXCIgKyAocHVnLmF0dHIoXCJzcmNcIiwgcmVxdWlyZShgLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2NhdGlvbi5wbmdgKSwgdHJ1ZSwgdHJ1ZSkrXCIgYWx0PVxcXCJcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFQ2hhbmdlIExvY2F0aW9uXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGbWFpblxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHB1Z19oYXNfb3duX3Byb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBNZXJnZSB0d28gYXR0cmlidXRlIG9iamVjdHMgZ2l2aW5nIHByZWNlZGVuY2VcbiAqIHRvIHZhbHVlcyBpbiBvYmplY3QgYGJgLiBDbGFzc2VzIGFyZSBzcGVjaWFsLWNhc2VkXG4gKiBhbGxvd2luZyBmb3IgYXJyYXlzIGFuZCBtZXJnaW5nL2pvaW5pbmcgYXBwcm9wcmlhdGVseVxuICogcmVzdWx0aW5nIGluIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhXG4gKiBAcGFyYW0ge09iamVjdH0gYlxuICogQHJldHVybiB7T2JqZWN0fSBhXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLm1lcmdlID0gcHVnX21lcmdlO1xuZnVuY3Rpb24gcHVnX21lcmdlKGEsIGIpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICB2YXIgYXR0cnMgPSBhWzBdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgYXR0cnMgPSBwdWdfbWVyZ2UoYXR0cnMsIGFbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gYXR0cnM7XG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgIGlmIChrZXkgPT09ICdjbGFzcycpIHtcbiAgICAgIHZhciB2YWxBID0gYVtrZXldIHx8IFtdO1xuICAgICAgYVtrZXldID0gKEFycmF5LmlzQXJyYXkodmFsQSkgPyB2YWxBIDogW3ZhbEFdKS5jb25jYXQoYltrZXldIHx8IFtdKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuICAgICAgdmFyIHZhbEEgPSBwdWdfc3R5bGUoYVtrZXldKTtcbiAgICAgIHZhbEEgPSB2YWxBICYmIHZhbEFbdmFsQS5sZW5ndGggLSAxXSAhPT0gJzsnID8gdmFsQSArICc7JyA6IHZhbEE7XG4gICAgICB2YXIgdmFsQiA9IHB1Z19zdHlsZShiW2tleV0pO1xuICAgICAgdmFsQiA9IHZhbEIgJiYgdmFsQlt2YWxCLmxlbmd0aCAtIDFdICE9PSAnOycgPyB2YWxCICsgJzsnIDogdmFsQjtcbiAgICAgIGFba2V5XSA9IHZhbEEgKyB2YWxCO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSBiW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGE7XG59O1xuXG4vKipcbiAqIFByb2Nlc3MgYXJyYXksIG9iamVjdCwgb3Igc3RyaW5nIGFzIGEgc3RyaW5nIG9mIGNsYXNzZXMgZGVsaW1pdGVkIGJ5IGEgc3BhY2UuXG4gKlxuICogSWYgYHZhbGAgaXMgYW4gYXJyYXksIGFsbCBtZW1iZXJzIG9mIGl0IGFuZCBpdHMgc3ViYXJyYXlzIGFyZSBjb3VudGVkIGFzXG4gKiBjbGFzc2VzLiBJZiBgZXNjYXBpbmdgIGlzIGFuIGFycmF5LCB0aGVuIHdoZXRoZXIgb3Igbm90IHRoZSBpdGVtIGluIGB2YWxgIGlzXG4gKiBlc2NhcGVkIGRlcGVuZHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgaXRlbSBpbiBgZXNjYXBpbmdgLiBJZiBgZXNjYXBpbmdgIGlzXG4gKiBub3QgYW4gYXJyYXksIG5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYW4gb2JqZWN0LCBhbGwgdGhlIGtleXMgd2hvc2UgdmFsdWUgaXMgdHJ1dGh5IGFyZSBjb3VudGVkIGFzXG4gKiBjbGFzc2VzLiBObyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIElmIGB2YWxgIGlzIGEgc3RyaW5nLCBpdCBpcyBjb3VudGVkIGFzIGEgY2xhc3MuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogQHBhcmFtIHsoQXJyYXkuPHN0cmluZz58T2JqZWN0LjxzdHJpbmcsIGJvb2xlYW4+fHN0cmluZyl9IHZhbFxuICogQHBhcmFtIHs/QXJyYXkuPHN0cmluZz59IGVzY2FwaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuY2xhc3NlcyA9IHB1Z19jbGFzc2VzO1xuZnVuY3Rpb24gcHVnX2NsYXNzZXNfYXJyYXkodmFsLCBlc2NhcGluZykge1xuICB2YXIgY2xhc3NTdHJpbmcgPSAnJywgY2xhc3NOYW1lLCBwYWRkaW5nID0gJycsIGVzY2FwZUVuYWJsZWQgPSBBcnJheS5pc0FycmF5KGVzY2FwaW5nKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICBjbGFzc05hbWUgPSBwdWdfY2xhc3Nlcyh2YWxbaV0pO1xuICAgIGlmICghY2xhc3NOYW1lKSBjb250aW51ZTtcbiAgICBlc2NhcGVFbmFibGVkICYmIGVzY2FwaW5nW2ldICYmIChjbGFzc05hbWUgPSBwdWdfZXNjYXBlKGNsYXNzTmFtZSkpO1xuICAgIGNsYXNzU3RyaW5nID0gY2xhc3NTdHJpbmcgKyBwYWRkaW5nICsgY2xhc3NOYW1lO1xuICAgIHBhZGRpbmcgPSAnICc7XG4gIH1cbiAgcmV0dXJuIGNsYXNzU3RyaW5nO1xufVxuZnVuY3Rpb24gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCkge1xuICB2YXIgY2xhc3NTdHJpbmcgPSAnJywgcGFkZGluZyA9ICcnO1xuICBmb3IgKHZhciBrZXkgaW4gdmFsKSB7XG4gICAgaWYgKGtleSAmJiB2YWxba2V5XSAmJiBwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKHZhbCwga2V5KSkge1xuICAgICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBrZXk7XG4gICAgICBwYWRkaW5nID0gJyAnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlcyh2YWwsIGVzY2FwaW5nKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfYXJyYXkodmFsLCBlc2NhcGluZyk7XG4gIH0gZWxzZSBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHB1Z19jbGFzc2VzX29iamVjdCh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgfHwgJyc7XG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IG9iamVjdCBvciBzdHJpbmcgdG8gYSBzdHJpbmcgb2YgQ1NTIHN0eWxlcyBkZWxpbWl0ZWQgYnkgYSBzZW1pY29sb24uXG4gKlxuICogQHBhcmFtIHsoT2JqZWN0LjxzdHJpbmcsIHN0cmluZz58c3RyaW5nKX0gdmFsXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZXhwb3J0cy5zdHlsZSA9IHB1Z19zdHlsZTtcbmZ1bmN0aW9uIHB1Z19zdHlsZSh2YWwpIHtcbiAgaWYgKCF2YWwpIHJldHVybiAnJztcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIG91dCA9ICcnO1xuICAgIGZvciAodmFyIHN0eWxlIGluIHZhbCkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKHZhbCwgc3R5bGUpKSB7XG4gICAgICAgIG91dCA9IG91dCArIHN0eWxlICsgJzonICsgdmFsW3N0eWxlXSArICc7JztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsICsgJyc7XG4gIH1cbn07XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHBhcmFtIHtCb29sZWFufSBlc2NhcGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHRlcnNlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0ciA9IHB1Z19hdHRyO1xuZnVuY3Rpb24gcHVnX2F0dHIoa2V5LCB2YWwsIGVzY2FwZWQsIHRlcnNlKSB7XG4gIGlmICh2YWwgPT09IGZhbHNlIHx8IHZhbCA9PSBudWxsIHx8ICF2YWwgJiYgKGtleSA9PT0gJ2NsYXNzJyB8fCBrZXkgPT09ICdzdHlsZScpKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGlmICh2YWwgPT09IHRydWUpIHtcbiAgICByZXR1cm4gJyAnICsgKHRlcnNlID8ga2V5IDoga2V5ICsgJz1cIicgKyBrZXkgKyAnXCInKTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICgodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIHZhbC50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YWwgPSB2YWwudG9KU09OKCk7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gSlNPTi5zdHJpbmdpZnkodmFsKTtcbiAgICBpZiAoIWVzY2FwZWQgJiYgdmFsLmluZGV4T2YoJ1wiJykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gJyAnICsga2V5ICsgJz1cXCcnICsgdmFsLnJlcGxhY2UoLycvZywgJyYjMzk7JykgKyAnXFwnJztcbiAgICB9XG4gIH1cbiAgaWYgKGVzY2FwZWQpIHZhbCA9IHB1Z19lc2NhcGUodmFsKTtcbiAgcmV0dXJuICcgJyArIGtleSArICc9XCInICsgdmFsICsgJ1wiJztcbn07XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGVzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge09iamVjdH0gdGVyc2Ugd2hldGhlciB0byB1c2UgSFRNTDUgdGVyc2UgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0cnMgPSBwdWdfYXR0cnM7XG5mdW5jdGlvbiBwdWdfYXR0cnMob2JqLCB0ZXJzZSl7XG4gIHZhciBhdHRycyA9ICcnO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAocHVnX2hhc19vd25fcHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciB2YWwgPSBvYmpba2V5XTtcblxuICAgICAgaWYgKCdjbGFzcycgPT09IGtleSkge1xuICAgICAgICB2YWwgPSBwdWdfY2xhc3Nlcyh2YWwpO1xuICAgICAgICBhdHRycyA9IHB1Z19hdHRyKGtleSwgdmFsLCBmYWxzZSwgdGVyc2UpICsgYXR0cnM7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCdzdHlsZScgPT09IGtleSkge1xuICAgICAgICB2YWwgPSBwdWdfc3R5bGUodmFsKTtcbiAgICAgIH1cbiAgICAgIGF0dHJzICs9IHB1Z19hdHRyKGtleSwgdmFsLCBmYWxzZSwgdGVyc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRycztcbn07XG5cbi8qKlxuICogRXNjYXBlIHRoZSBnaXZlbiBzdHJpbmcgb2YgYGh0bWxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgcHVnX21hdGNoX2h0bWwgPSAvW1wiJjw+XS87XG5leHBvcnRzLmVzY2FwZSA9IHB1Z19lc2NhcGU7XG5mdW5jdGlvbiBwdWdfZXNjYXBlKF9odG1sKXtcbiAgdmFyIGh0bWwgPSAnJyArIF9odG1sO1xuICB2YXIgcmVnZXhSZXN1bHQgPSBwdWdfbWF0Y2hfaHRtbC5leGVjKGh0bWwpO1xuICBpZiAoIXJlZ2V4UmVzdWx0KSByZXR1cm4gX2h0bWw7XG5cbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgaSwgbGFzdEluZGV4LCBlc2NhcGU7XG4gIGZvciAoaSA9IHJlZ2V4UmVzdWx0LmluZGV4LCBsYXN0SW5kZXggPSAwOyBpIDwgaHRtbC5sZW5ndGg7IGkrKykge1xuICAgIHN3aXRjaCAoaHRtbC5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICBjYXNlIDM0OiBlc2NhcGUgPSAnJnF1b3Q7JzsgYnJlYWs7XG4gICAgICBjYXNlIDM4OiBlc2NhcGUgPSAnJmFtcDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjA6IGVzY2FwZSA9ICcmbHQ7JzsgYnJlYWs7XG4gICAgICBjYXNlIDYyOiBlc2NhcGUgPSAnJmd0Oyc7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogY29udGludWU7XG4gICAgfVxuICAgIGlmIChsYXN0SW5kZXggIT09IGkpIHJlc3VsdCArPSBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICAgIGxhc3RJbmRleCA9IGkgKyAxO1xuICAgIHJlc3VsdCArPSBlc2NhcGU7XG4gIH1cbiAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmV0dXJuIHJlc3VsdCArIGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gIGVsc2UgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUmUtdGhyb3cgdGhlIGdpdmVuIGBlcnJgIGluIGNvbnRleHQgdG8gdGhlXG4gKiB0aGUgcHVnIGluIGBmaWxlbmFtZWAgYXQgdGhlIGdpdmVuIGBsaW5lbm9gLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbGluZW5vXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIG9yaWdpbmFsIHNvdXJjZVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5yZXRocm93ID0gcHVnX3JldGhyb3c7XG5mdW5jdGlvbiBwdWdfcmV0aHJvdyhlcnIsIGZpbGVuYW1lLCBsaW5lbm8sIHN0cil7XG4gIGlmICghKGVyciBpbnN0YW5jZW9mIEVycm9yKSkgdGhyb3cgZXJyO1xuICBpZiAoKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgfHwgIWZpbGVuYW1lKSAmJiAhc3RyKSB7XG4gICAgZXJyLm1lc3NhZ2UgKz0gJyBvbiBsaW5lICcgKyBsaW5lbm87XG4gICAgdGhyb3cgZXJyO1xuICB9XG4gIHRyeSB7XG4gICAgc3RyID0gc3RyIHx8IHJlcXVpcmUoJ2ZzJykucmVhZEZpbGVTeW5jKGZpbGVuYW1lLCAndXRmOCcpXG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgcHVnX3JldGhyb3coZXJyLCBudWxsLCBsaW5lbm8pXG4gIH1cbiAgdmFyIGNvbnRleHQgPSAzXG4gICAgLCBsaW5lcyA9IHN0ci5zcGxpdCgnXFxuJylcbiAgICAsIHN0YXJ0ID0gTWF0aC5tYXgobGluZW5vIC0gY29udGV4dCwgMClcbiAgICAsIGVuZCA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgbGluZW5vICsgY29udGV4dCk7XG5cbiAgLy8gRXJyb3IgY29udGV4dFxuICB2YXIgY29udGV4dCA9IGxpbmVzLnNsaWNlKHN0YXJ0LCBlbmQpLm1hcChmdW5jdGlvbihsaW5lLCBpKXtcbiAgICB2YXIgY3VyciA9IGkgKyBzdGFydCArIDE7XG4gICAgcmV0dXJuIChjdXJyID09IGxpbmVubyA/ICcgID4gJyA6ICcgICAgJylcbiAgICAgICsgY3VyclxuICAgICAgKyAnfCAnXG4gICAgICArIGxpbmU7XG4gIH0pLmpvaW4oJ1xcbicpO1xuXG4gIC8vIEFsdGVyIGV4Y2VwdGlvbiBtZXNzYWdlXG4gIGVyci5wYXRoID0gZmlsZW5hbWU7XG4gIGVyci5tZXNzYWdlID0gKGZpbGVuYW1lIHx8ICdQdWcnKSArICc6JyArIGxpbmVub1xuICAgICsgJ1xcbicgKyBjb250ZXh0ICsgJ1xcblxcbicgKyBlcnIubWVzc2FnZTtcbiAgdGhyb3cgZXJyO1xufTtcbiIsIi8vIENvcmVcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbnZhciBhcGlLZXkgPSBcImZlODNlNzMyYzFkZTFhMTE1OGExMWZhN2EwNDFmNjJlXCI7XG5leHBvcnQgdmFyIGF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L1wiLFxuICAgIHBhcmFtczoge1xuICAgICAgICBhcHBpZDogYXBpS2V5LFxuICAgIH0sXG59KTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG4vLyBBcGlcbmltcG9ydCB7IGF4aW9zSW5zdGFuY2UgfSBmcm9tIFwiLi9hcGlcIjtcbi8vIFV0aWxzXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW50RGF0ZSwgZm9ybWF0VGVtcEJ5VW5pdHMsIGZvcm1hdFNwZWVkQnlVbml0cywgZ2V0RGF5T2ZXZWVrLCB9IGZyb20gXCIuL3V0aWxzXCI7XG4vLyDQodC+0YXRgNCw0L3Rj9C10Lwg0YLQtdC60YPRidC40Lkg0LPQvtGA0L7QtFxudmFyIGN1cnJlbnRDaXR5TmFtZSA9IFwiS3lpdlwiO1xudmFyIHNldEN1cnJlbnREYXRlSW5mbyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGF5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZGF5LW5hbWVcIik7XG4gICAgdmFyIGRhdGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1kYXktZGF0ZVwiKTtcbiAgICB2YXIgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGRheUVsZW1lbnQuaW5uZXJIVE1MID0gZm9ybWF0Q3VycmVudERhdGUoY3VycmVudERhdGUpO1xuICAgIGRhdGVFbGVtZW50LmlubmVySFRNTCA9IGdldERheU9mV2VlayhjdXJyZW50RGF0ZSk7XG59O1xudmFyIGdldFV0aWxzVmFsdWVGcm9tU3dpdGNoZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1zd2l0Y2hlci1pbnB1dFwiKTtcbiAgICByZXR1cm4gc3dpdGNoZXIuY2hlY2tlZCA/IFwiaW1wZXJpYWxcIiA6IFwibWV0cmljXCI7XG59O1xudmFyIGdldFNwZWVkVXRpbHNWYWx1ZUZyb21Td2l0Y2hlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3dpdGNoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXN3aXRjaGVyLWlucHV0XCIpO1xuICAgIHJldHVybiBzd2l0Y2hlci5jaGVja2VkID8gXCJpbXBlcmlhbFwiIDogXCJtZXRyaWNcIjtcbn07XG52YXIgZ2V0V2VhdGhlckJ5Q2l0eSA9IGZ1bmN0aW9uIChjaXR5VmFsdWUpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHdlZWtXZWF0aGVyLCBkYXlXZWF0aGVyLCBjaXR5LCBfYSwgbWFpbiwgd2luZCwgd2VhdGhlciwgZm9ybWF0RGF0YSwgZXJyb3JfMTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGF4aW9zSW5zdGFuY2UuZ2V0KFwiL2ZvcmVjYXN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHE6IGNpdHlWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml0czogZ2V0VXRpbHNWYWx1ZUZyb21Td2l0Y2hlcigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHdlZWtXZWF0aGVyID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGF4aW9zSW5zdGFuY2UuZ2V0KFwiL3dlYXRoZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcTogY2l0eVZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXRzOiBnZXRVdGlsc1ZhbHVlRnJvbVN3aXRjaGVyKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgZGF5V2VhdGhlciA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBjaXR5ID0gd2Vla1dlYXRoZXIuZGF0YS5jaXR5O1xuICAgICAgICAgICAgICAgIF9hID0gZGF5V2VhdGhlci5kYXRhLCBtYWluID0gX2EubWFpbiwgd2luZCA9IF9hLndpbmQsIHdlYXRoZXIgPSBfYS53ZWF0aGVyO1xuICAgICAgICAgICAgICAgIGZvcm1hdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IGNpdHkuY291bnRyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGNpdHkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiBjaXR5LmNvb3JkLmxhdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb246IGNpdHkuY29vcmQubG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bnJpc2U6IGNpdHkuc3VucmlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bnNldDogY2l0eS5zdW5zZXQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB3ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogd2VhdGhlclswXS5pY29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXA6IG1haW4udGVtcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wX21heDogbWFpbi50ZW1wX21heCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wX21pbjogbWFpbi50ZW1wX21pbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVsc19saWtlOiBtYWluLmZlZWxzX2xpa2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiB3aW5kLnNwZWVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZzogd2luZC5kZWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3VzdDogd2luZC5ndXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDaXR5TmFtZSA9IGZvcm1hdERhdGEuY2l0eS5uYW1lO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmb3JtYXREYXRhXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBlcnJvcl8xLnJlc3BvbnNlLmRhdGFdO1xuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xudmFyIHJlbmRlcldlYXRoZXJEYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAvLyDQl9Cw0L/QvtC70L3Rj9C10Lwg0LPQvtGA0L7QtFxuICAgIHZhciBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2l0eS1uYW1lXCIpO1xuICAgIGNpdHlOYW1lLmlubmVySFRNTCA9IGRhdGEuY2l0eS5uYW1lICsgXCIsIFwiICsgZGF0YS5jaXR5LmNvdW50cnk7XG4gICAgLy8g0JfQsNC/0L7Qu9C90Y/QtdC8INGC0LXQvNC/0LXRgNCw0YLRg9GA0YNcbiAgICB2YXIgY2l0eVRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNpdHktdGVtcFwiKTtcbiAgICB2YXIgdW5pdHMgPSBnZXRVdGlsc1ZhbHVlRnJvbVN3aXRjaGVyKCk7XG4gICAgY2l0eVRlbXAuaW5uZXJIVE1MID0gZm9ybWF0VGVtcEJ5VW5pdHMoZGF0YS5pbmZvLnRlbXAudGVtcCwgdW5pdHMpO1xuICAgIC8vINCX0LDQv9C+0LvQvdGP0LXQvCDRgdGC0LDRgtGD0YEg0L/QvtCz0L7QtNGLXG4gICAgdmFyIGNpdHlXZWF0aGVyU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1jaXR5LXdlYXRoZXItc3RhdHVzXCIpO1xuICAgIGNpdHlXZWF0aGVyU3RhdHVzLmlubmVySFRNTCA9IGRhdGEuaW5mby5kZXNjcmlwdGlvbjtcbiAgICAvLyDQl9Cw0L/QvtC70L3Rj9C10Lwg0YHQutC+0YDQvtGB0YLRjCDQstC10YLRgNCwIDMg0L/Rg9C90LrRgtCwXG4gICAgdmFyIHNwZWVkVW5pdHMgPSBnZXRTcGVlZFV0aWxzVmFsdWVGcm9tU3dpdGNoZXIoKTtcbiAgICB2YXIgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy13aW5kLXNwZWVkXCIpO1xuICAgIHZhciB3aW5kRGlyZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy13aW5kLWRpcmVjdGlvblwiKTtcbiAgICB2YXIgd2luZEd1c3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXdpbmQtZ3VzdFwiKTtcbiAgICB3aW5kU3BlZWQuaW5uZXJIVE1MID0gZm9ybWF0U3BlZWRCeVVuaXRzKGRhdGEuaW5mby53aW5kLnNwZWVkLCBzcGVlZFVuaXRzKTtcbiAgICB3aW5kRGlyZWN0aW9uLmlubmVySFRNTCA9IFN0cmluZyhkYXRhLmluZm8ud2luZC5kZWcpICsgXCJcXHUwMEIwXCI7XG4gICAgd2luZEd1c3QuaW5uZXJIVE1MID0gZm9ybWF0U3BlZWRCeVVuaXRzKGRhdGEuaW5mby53aW5kLmd1c3QsIHNwZWVkVW5pdHMpO1xuICAgIC8vINCX0LDQv9C+0LvQvdGP0LXQvCDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3Rg9GOINC40L3RhNC+0YDQvNCw0YbQuNGOINC+INGC0LXQvNC/0LXRgNCw0YLRg9GA0LUgNCDQsdC70L7QutCwXG4gICAgdmFyIGNpdHlDdXJyZW50VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2l0eS1jdXJyLXRlbXBcIik7XG4gICAgdmFyIGNpdHlNYXhUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1jaXR5LW1heC10ZW1wXCIpO1xuICAgIHZhciBjaXR5TWluVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2l0eS1taW4tdGVtcFwiKTtcbiAgICB2YXIgY2l0eUZlbGxzVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2l0eS1mZWxscy10ZW1wXCIpO1xuICAgIGNpdHlDdXJyZW50VGVtcC5pbm5lckhUTUwgPSBmb3JtYXRUZW1wQnlVbml0cyhkYXRhLmluZm8udGVtcC50ZW1wLCB1bml0cyk7XG4gICAgY2l0eU1heFRlbXAuaW5uZXJIVE1MID0gZm9ybWF0VGVtcEJ5VW5pdHMoZGF0YS5pbmZvLnRlbXAudGVtcF9tYXgsIHVuaXRzKTtcbiAgICBjaXR5TWluVGVtcC5pbm5lckhUTUwgPSBmb3JtYXRUZW1wQnlVbml0cyhkYXRhLmluZm8udGVtcC50ZW1wX21pbiwgdW5pdHMpO1xuICAgIGNpdHlGZWxsc1RlbXAuaW5uZXJIVE1MID0gZm9ybWF0VGVtcEJ5VW5pdHMoZGF0YS5pbmZvLnRlbXAuZmVlbHNfbGlrZSwgdW5pdHMpO1xuICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDQuNC60L7QvdC60YNcbiAgICB2YXIgd2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXdlYXRoZXItaWNvblwiKTtcbiAgICB3ZWF0aGVySWNvbi5zcmMgPSBcImh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi9cIi5jb25jYXQoZGF0YS5pbmZvLmljb24sIFwiQDJ4LnBuZ1wiKTtcbn07XG52YXIgZ2V0V2VhdGhlckJ5Q2l0eU5hbWUgPSBmdW5jdGlvbiAoY2l0eVZhbHVlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWFyY2hJbnB1dEVycm9yTWVzc2FnZSwgZGF0YTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBzZWFyY2hJbnB1dEVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc2VhcmNoLWlucHV0LWVycm9yLW1lc3NhZ2VcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFjaXR5VmFsdWUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgIHNlYXJjaElucHV0RXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRXZWF0aGVyQnlDaXR5KGNpdHlWYWx1ZSldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGRhdGEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKFwiY29kXCIgaW4gZGF0YSAmJiBkYXRhLmNvZCA9PT0gXCI0MDRcIikge1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2hJbnB1dEVycm9yTWVzc2FnZS5pbm5lckhUTUwgPSBcImNpdHkgbm90IGZvdW5kXCI7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaElucHV0RXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFwiaW5mb1wiIGluIGRhdGEgJiYgXCJjaXR5XCIgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJXZWF0aGVyRGF0YShkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgc2VhcmNoSW5wdXRFcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gXCJwbGVhc2UgZW50ZXIgYSBjaXR5XCI7XG4gICAgICAgICAgICAgICAgc2VhcmNoSW5wdXRFcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDM7XG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG52YXIgc2VhcmNoSW5pdEV2ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXNlYXJjaC1idXR0b25cIik7XG4gICAgdmFyIHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1zZWFyY2gtaW5wdXRcIik7XG4gICAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2l0eVZhbHVlO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBjaXR5VmFsdWUgPSBzZWFyY2hJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0V2VhdGhlckJ5Q2l0eU5hbWUoY2l0eVZhbHVlKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH0pO1xuICAgIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2l0eVZhbHVlO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIShlLmtleSA9PT0gXCJFbnRlclwiKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgIGNpdHlWYWx1ZSA9IHNlYXJjaElucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRXZWF0aGVyQnlDaXR5TmFtZShjaXR5VmFsdWUpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfSk7XG59O1xudmFyIHN3aXRjaGVySW5pdEV2ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzd2l0Y2hlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc3dpdGNoZXItaW5wdXRcIik7XG4gICAgc3dpdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBnZXRXZWF0aGVyQnlDaXR5TmFtZShjdXJyZW50Q2l0eU5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9KTtcbiAgICB9KTsgfSk7XG59O1xudmFyIGluaXRBcHAgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INC90LAg0YHRgtGA0LDQvdC40YbRgyDRgtC10LrRg9GJ0YPRjiDQtNCw0YLRg1xuICAgIHNldEN1cnJlbnREYXRlSW5mbygpO1xuICAgIC8vINCY0L3QuNGG0LjQsNC70LjQt9C40YDRg9C10Lwg0YHQvtCx0YvRgtC40LUg0L/QvtC40YHQutCwINC4INC60LvQuNC60LAg0L3QsCDQutC90L7Qv9C60YNcbiAgICBzZWFyY2hJbml0RXZlbnQoKTtcbiAgICAvLyDQmNC90LjRhtC40LjQu9C40LfQuNGA0YPQtdC8INGB0LLQuNGC0YfQtdGAXG4gICAgc3dpdGNoZXJJbml0RXZlbnQoKTtcbiAgICAvLyDQktGL0LfRi9Cy0LDQtdGCINGE0YPQvdC60YbQuNGOINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINC00LvRjyDQs9C+0YDQvtC00LAg0JrQuNC10LJcbiAgICBnZXRXZWF0aGVyQnlDaXR5TmFtZShjdXJyZW50Q2l0eU5hbWUpO1xufTtcbmluaXRBcHAoKTtcbiIsImV4cG9ydCB2YXIgZm9ybWF0Q3VycmVudERhdGUgPSBmdW5jdGlvbiAoY3VycmVudERhdGUpIHtcbiAgICB2YXIgZGF5ID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xuICAgIHZhciBtb250aCA9IGN1cnJlbnREYXRlLnRvTG9jYWxlU3RyaW5nKFwiZGVmYXVsdFwiLCB7XG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICB9KTtcbiAgICB2YXIgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KGRheSwgXCIgXCIpLmNvbmNhdChtb250aCwgXCIgXCIpLmNvbmNhdCh5ZWFyKTtcbn07XG5leHBvcnQgdmFyIGdldERheU9mV2VlayA9IGZ1bmN0aW9uIChjdXJyZW50RGF0ZSkge1xuICAgIHZhciBkYXlzT2ZXZWVrID0gW1xuICAgICAgICBcIlN1bmRheVwiLFxuICAgICAgICBcIk1vbmRheVwiLFxuICAgICAgICBcIlR1ZXNkYXlcIixcbiAgICAgICAgXCJXZWRuZXNkYXlcIixcbiAgICAgICAgXCJUaHVyc2RheVwiLFxuICAgICAgICBcIkZyaWRheVwiLFxuICAgICAgICBcIlNhdHVyZGF5XCIsXG4gICAgXTtcbiAgICB2YXIgZ2V0RGF5SW5kZXggPSBjdXJyZW50RGF0ZS5nZXREYXkoKTtcbiAgICByZXR1cm4gZGF5c09mV2Vla1tnZXREYXlJbmRleF07XG59O1xuZXhwb3J0IHZhciBmb3JtYXRUZW1wQnlVbml0cyA9IGZ1bmN0aW9uICh0ZW1wLCB1bml0KSB7XG4gICAgdmFyIHRlbXBlcmF0dXJlVW5pdFZhbHVlID0gdW5pdCA9PT0gXCJpbXBlcmlhbFwiID8gXCJGXCIgOiBcIkNcIjtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoTWF0aC5yb3VuZCh0ZW1wKSwgXCImZGVnOyBcIikuY29uY2F0KHRlbXBlcmF0dXJlVW5pdFZhbHVlKTtcbn07XG5leHBvcnQgdmFyIGZvcm1hdFNwZWVkQnlVbml0cyA9IGZ1bmN0aW9uIChzcGVlZCwgc3BlZWRVbml0KSB7XG4gICAgdmFyIHNwZWVkVW5pdFZhbHVlID0gc3BlZWRVbml0ID09PSBcImltcGVyaWFsXCIgPyBcIm1pbGVzL2hvdXJcIiA6IFwibWV0ZXIvc2VjXCI7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHNwZWVkLCBcIiBcIikuY29uY2F0KHNwZWVkVW5pdFZhbHVlKTtcbn07XG4iLCIvKiAoaWdub3JlZCkgKi8iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IGh0dHBBZGFwdGVyIGZyb20gJy4vaHR0cC5qcyc7XG5pbXBvcnQgeGhyQWRhcHRlciBmcm9tICcuL3hoci5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tIFwiLi4vY29yZS9BeGlvc0Vycm9yLmpzXCI7XG5cbmNvbnN0IGtub3duQWRhcHRlcnMgPSB7XG4gIGh0dHA6IGh0dHBBZGFwdGVyLFxuICB4aHI6IHhockFkYXB0ZXJcbn1cblxudXRpbHMuZm9yRWFjaChrbm93bkFkYXB0ZXJzLCAoZm4sIHZhbHVlKSA9PiB7XG4gIGlmKGZuKSB7XG4gICAgdHJ5IHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgJ25hbWUnLCB7dmFsdWV9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCAnYWRhcHRlck5hbWUnLCB7dmFsdWV9KTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0QWRhcHRlcjogKGFkYXB0ZXJzKSA9PiB7XG4gICAgYWRhcHRlcnMgPSB1dGlscy5pc0FycmF5KGFkYXB0ZXJzKSA/IGFkYXB0ZXJzIDogW2FkYXB0ZXJzXTtcblxuICAgIGNvbnN0IHtsZW5ndGh9ID0gYWRhcHRlcnM7XG4gICAgbGV0IG5hbWVPckFkYXB0ZXI7XG4gICAgbGV0IGFkYXB0ZXI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBuYW1lT3JBZGFwdGVyID0gYWRhcHRlcnNbaV07XG4gICAgICBpZigoYWRhcHRlciA9IHV0aWxzLmlzU3RyaW5nKG5hbWVPckFkYXB0ZXIpID8ga25vd25BZGFwdGVyc1tuYW1lT3JBZGFwdGVyLnRvTG93ZXJDYXNlKCldIDogbmFtZU9yQWRhcHRlcikpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFhZGFwdGVyKSB7XG4gICAgICBpZiAoYWRhcHRlciA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoXG4gICAgICAgICAgYEFkYXB0ZXIgJHtuYW1lT3JBZGFwdGVyfSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBlbnZpcm9ubWVudGAsXG4gICAgICAgICAgJ0VSUl9OT1RfU1VQUE9SVCdcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICB1dGlscy5oYXNPd25Qcm9wKGtub3duQWRhcHRlcnMsIG5hbWVPckFkYXB0ZXIpID9cbiAgICAgICAgICBgQWRhcHRlciAnJHtuYW1lT3JBZGFwdGVyfScgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGUgYnVpbGRgIDpcbiAgICAgICAgICBgVW5rbm93biBhZGFwdGVyICcke25hbWVPckFkYXB0ZXJ9J2BcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlscy5pc0Z1bmN0aW9uKGFkYXB0ZXIpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhZGFwdGVyIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkYXB0ZXI7XG4gIH0sXG4gIGFkYXB0ZXJzOiBrbm93bkFkYXB0ZXJzXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcbmltcG9ydCBzZXR0bGUgZnJvbSAnLi8uLi9jb3JlL3NldHRsZS5qcyc7XG5pbXBvcnQgY29va2llcyBmcm9tICcuLy4uL2hlbHBlcnMvY29va2llcy5qcyc7XG5pbXBvcnQgYnVpbGRVUkwgZnJvbSAnLi8uLi9oZWxwZXJzL2J1aWxkVVJMLmpzJztcbmltcG9ydCBidWlsZEZ1bGxQYXRoIGZyb20gJy4uL2NvcmUvYnVpbGRGdWxsUGF0aC5qcyc7XG5pbXBvcnQgaXNVUkxTYW1lT3JpZ2luIGZyb20gJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMnO1xuaW1wb3J0IHRyYW5zaXRpb25hbERlZmF1bHRzIGZyb20gJy4uL2RlZmF1bHRzL3RyYW5zaXRpb25hbC5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSAnLi4vY2FuY2VsL0NhbmNlbGVkRXJyb3IuanMnO1xuaW1wb3J0IHBhcnNlUHJvdG9jb2wgZnJvbSAnLi4vaGVscGVycy9wYXJzZVByb3RvY29sLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4uL2NvcmUvQXhpb3NIZWFkZXJzLmpzJztcbmltcG9ydCBzcGVlZG9tZXRlciBmcm9tICcuLi9oZWxwZXJzL3NwZWVkb21ldGVyLmpzJztcblxuZnVuY3Rpb24gcHJvZ3Jlc3NFdmVudFJlZHVjZXIobGlzdGVuZXIsIGlzRG93bmxvYWRTdHJlYW0pIHtcbiAgbGV0IGJ5dGVzTm90aWZpZWQgPSAwO1xuICBjb25zdCBfc3BlZWRvbWV0ZXIgPSBzcGVlZG9tZXRlcig1MCwgMjUwKTtcblxuICByZXR1cm4gZSA9PiB7XG4gICAgY29uc3QgbG9hZGVkID0gZS5sb2FkZWQ7XG4gICAgY29uc3QgdG90YWwgPSBlLmxlbmd0aENvbXB1dGFibGUgPyBlLnRvdGFsIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IHByb2dyZXNzQnl0ZXMgPSBsb2FkZWQgLSBieXRlc05vdGlmaWVkO1xuICAgIGNvbnN0IHJhdGUgPSBfc3BlZWRvbWV0ZXIocHJvZ3Jlc3NCeXRlcyk7XG4gICAgY29uc3QgaW5SYW5nZSA9IGxvYWRlZCA8PSB0b3RhbDtcblxuICAgIGJ5dGVzTm90aWZpZWQgPSBsb2FkZWQ7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgbG9hZGVkLFxuICAgICAgdG90YWwsXG4gICAgICBwcm9ncmVzczogdG90YWwgPyAobG9hZGVkIC8gdG90YWwpIDogdW5kZWZpbmVkLFxuICAgICAgYnl0ZXM6IHByb2dyZXNzQnl0ZXMsXG4gICAgICByYXRlOiByYXRlID8gcmF0ZSA6IHVuZGVmaW5lZCxcbiAgICAgIGVzdGltYXRlZDogcmF0ZSAmJiB0b3RhbCAmJiBpblJhbmdlID8gKHRvdGFsIC0gbG9hZGVkKSAvIHJhdGUgOiB1bmRlZmluZWQsXG4gICAgICBldmVudDogZVxuICAgIH07XG5cbiAgICBkYXRhW2lzRG93bmxvYWRTdHJlYW0gPyAnZG93bmxvYWQnIDogJ3VwbG9hZCddID0gdHJ1ZTtcblxuICAgIGxpc3RlbmVyKGRhdGEpO1xuICB9O1xufVxuXG5jb25zdCBpc1hIUkFkYXB0ZXJTdXBwb3J0ZWQgPSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBpc1hIUkFkYXB0ZXJTdXBwb3J0ZWQgJiYgZnVuY3Rpb24gKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIGxldCByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIGNvbnN0IHJlcXVlc3RIZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oY29uZmlnLmhlYWRlcnMpLm5vcm1hbGl6ZSgpO1xuICAgIGNvbnN0IHJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgbGV0IG9uQ2FuY2VsZWQ7XG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnVuc3Vic2NyaWJlKG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLnNpZ25hbCkge1xuICAgICAgICBjb25maWcuc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25DYW5jZWxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBpZiAocGxhdGZvcm0uaXNTdGFuZGFyZEJyb3dzZXJFbnYgfHwgcGxhdGZvcm0uaXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnMuc2V0Q29udGVudFR5cGUoZmFsc2UpOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXF1ZXN0SGVhZGVycy5zZXRDb250ZW50VHlwZSgnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsnLCBmYWxzZSk7IC8vIG1vYmlsZS9kZXNrdG9wIGFwcCBmcmFtZXdvcmtzXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIGNvbnN0IHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICBjb25zdCBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkID8gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGNvbmZpZy5hdXRoLnBhc3N3b3JkKSkgOiAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIGZ1bmN0aW9uIG9ubG9hZGVuZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgY29uc3QgcmVzcG9uc2VIZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oXG4gICAgICAgICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgJiYgcmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9ICFyZXNwb25zZVR5cGUgfHwgcmVzcG9uc2VUeXBlID09PSAndGV4dCcgfHwgcmVzcG9uc2VUeXBlID09PSAnanNvbicgP1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICBjb25zdCByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUoZnVuY3Rpb24gX3Jlc29sdmUodmFsdWUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0sIGZ1bmN0aW9uIF9yZWplY3QoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICgnb25sb2FkZW5kJyBpbiByZXF1ZXN0KSB7XG4gICAgICAvLyBVc2Ugb25sb2FkZW5kIGlmIGF2YWlsYWJsZVxuICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBvbmxvYWRlbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGUgdG8gZW11bGF0ZSBvbmxvYWRlbmRcbiAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyByZWFkeXN0YXRlIGhhbmRsZXIgaXMgY2FsbGluZyBiZWZvcmUgb25lcnJvciBvciBvbnRpbWVvdXQgaGFuZGxlcnMsXG4gICAgICAgIC8vIHNvIHdlIHNob3VsZCBjYWxsIG9ubG9hZGVuZCBvbiB0aGUgbmV4dCAndGljaydcbiAgICAgICAgc2V0VGltZW91dChvbmxvYWRlbmQpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIEF4aW9zRXJyb3IuRUNPTk5BQk9SVEVELCBjb25maWcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBBeGlvc0Vycm9yLkVSUl9ORVRXT1JLLCBjb25maWcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgbGV0IHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dCA/ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcgOiAndGltZW91dCBleGNlZWRlZCc7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uYWwgPSBjb25maWcudHJhbnNpdGlvbmFsIHx8IHRyYW5zaXRpb25hbERlZmF1bHRzO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSxcbiAgICAgICAgdHJhbnNpdGlvbmFsLmNsYXJpZnlUaW1lb3V0RXJyb3IgPyBBeGlvc0Vycm9yLkVUSU1FRE9VVCA6IEF4aW9zRXJyb3IuRUNPTk5BQk9SVEVELFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHBsYXRmb3JtLmlzU3RhbmRhcmRCcm93c2VyRW52KSB7XG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIGNvbnN0IHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpXG4gICAgICAgICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSAmJiBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKTtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVycy5zZXQoY29uZmlnLnhzcmZIZWFkZXJOYW1lLCB4c3JmVmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICByZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkICYmIHJlcXVlc3RIZWFkZXJzLnNldENvbnRlbnRUeXBlKG51bGwpO1xuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMudG9KU09OKCksIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9ICEhY29uZmlnLndpdGhDcmVkZW50aWFscztcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKHJlc3BvbnNlVHlwZSAmJiByZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBwcm9ncmVzc0V2ZW50UmVkdWNlcihjb25maWcub25Eb3dubG9hZFByb2dyZXNzLCB0cnVlKSk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIHByb2dyZXNzRXZlbnRSZWR1Y2VyKGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbiB8fCBjb25maWcuc2lnbmFsKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgICAgb25DYW5jZWxlZCA9IGNhbmNlbCA9PiB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWplY3QoIWNhbmNlbCB8fCBjYW5jZWwudHlwZSA/IG5ldyBDYW5jZWxlZEVycm9yKG51bGwsIGNvbmZpZywgcmVxdWVzdCkgOiBjYW5jZWwpO1xuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfTtcblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuICYmIGNvbmZpZy5jYW5jZWxUb2tlbi5zdWJzY3JpYmUob25DYW5jZWxlZCk7XG4gICAgICBpZiAoY29uZmlnLnNpZ25hbCkge1xuICAgICAgICBjb25maWcuc2lnbmFsLmFib3J0ZWQgPyBvbkNhbmNlbGVkKCkgOiBjb25maWcuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25DYW5jZWxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJvdG9jb2wgPSBwYXJzZVByb3RvY29sKGZ1bGxQYXRoKTtcblxuICAgIGlmIChwcm90b2NvbCAmJiBwbGF0Zm9ybS5wcm90b2NvbHMuaW5kZXhPZihwcm90b2NvbCkgPT09IC0xKSB7XG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoJ1Vuc3VwcG9ydGVkIHByb3RvY29sICcgKyBwcm90b2NvbCArICc6JywgQXhpb3NFcnJvci5FUlJfQkFEX1JFUVVFU1QsIGNvbmZpZykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSB8fCBudWxsKTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBiaW5kIGZyb20gJy4vaGVscGVycy9iaW5kLmpzJztcbmltcG9ydCBBeGlvcyBmcm9tICcuL2NvcmUvQXhpb3MuanMnO1xuaW1wb3J0IG1lcmdlQ29uZmlnIGZyb20gJy4vY29yZS9tZXJnZUNvbmZpZy5qcyc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9kZWZhdWx0cy9pbmRleC5qcyc7XG5pbXBvcnQgZm9ybURhdGFUb0pTT04gZnJvbSAnLi9oZWxwZXJzL2Zvcm1EYXRhVG9KU09OLmpzJztcbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4vY2FuY2VsL0NhbmNlbGVkRXJyb3IuanMnO1xuaW1wb3J0IENhbmNlbFRva2VuIGZyb20gJy4vY2FuY2VsL0NhbmNlbFRva2VuLmpzJztcbmltcG9ydCBpc0NhbmNlbCBmcm9tICcuL2NhbmNlbC9pc0NhbmNlbC5qcyc7XG5pbXBvcnQge1ZFUlNJT059IGZyb20gJy4vZW52L2RhdGEuanMnO1xuaW1wb3J0IHRvRm9ybURhdGEgZnJvbSAnLi9oZWxwZXJzL3RvRm9ybURhdGEuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IHNwcmVhZCBmcm9tICcuL2hlbHBlcnMvc3ByZWFkLmpzJztcbmltcG9ydCBpc0F4aW9zRXJyb3IgZnJvbSAnLi9oZWxwZXJzL2lzQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gXCIuL2NvcmUvQXhpb3NIZWFkZXJzLmpzXCI7XG5pbXBvcnQgSHR0cFN0YXR1c0NvZGUgZnJvbSAnLi9oZWxwZXJzL0h0dHBTdGF0dXNDb2RlLmpzJztcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm5zIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICBjb25zdCBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICBjb25zdCBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0LCB7YWxsT3duS2V5czogdHJ1ZX0pO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQsIG51bGwsIHthbGxPd25LZXlzOiB0cnVlfSk7XG5cbiAgLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuICBpbnN0YW5jZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoZGVmYXVsdENvbmZpZywgaW5zdGFuY2VDb25maWcpKTtcbiAgfTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxuY29uc3QgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWxlZEVycm9yID0gQ2FuY2VsZWRFcnJvcjtcbmF4aW9zLkNhbmNlbFRva2VuID0gQ2FuY2VsVG9rZW47XG5heGlvcy5pc0NhbmNlbCA9IGlzQ2FuY2VsO1xuYXhpb3MuVkVSU0lPTiA9IFZFUlNJT047XG5heGlvcy50b0Zvcm1EYXRhID0gdG9Gb3JtRGF0YTtcblxuLy8gRXhwb3NlIEF4aW9zRXJyb3IgY2xhc3NcbmF4aW9zLkF4aW9zRXJyb3IgPSBBeGlvc0Vycm9yO1xuXG4vLyBhbGlhcyBmb3IgQ2FuY2VsZWRFcnJvciBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuYXhpb3MuQ2FuY2VsID0gYXhpb3MuQ2FuY2VsZWRFcnJvcjtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcblxuYXhpb3Muc3ByZWFkID0gc3ByZWFkO1xuXG4vLyBFeHBvc2UgaXNBeGlvc0Vycm9yXG5heGlvcy5pc0F4aW9zRXJyb3IgPSBpc0F4aW9zRXJyb3I7XG5cbi8vIEV4cG9zZSBtZXJnZUNvbmZpZ1xuYXhpb3MubWVyZ2VDb25maWcgPSBtZXJnZUNvbmZpZztcblxuYXhpb3MuQXhpb3NIZWFkZXJzID0gQXhpb3NIZWFkZXJzO1xuXG5heGlvcy5mb3JtVG9KU09OID0gdGhpbmcgPT4gZm9ybURhdGFUb0pTT04odXRpbHMuaXNIVE1MRm9ybSh0aGluZykgPyBuZXcgRm9ybURhdGEodGhpbmcpIDogdGhpbmcpO1xuXG5heGlvcy5IdHRwU3RhdHVzQ29kZSA9IEh0dHBTdGF0dXNDb2RlO1xuXG5heGlvcy5kZWZhdWx0ID0gYXhpb3M7XG5cbi8vIHRoaXMgbW9kdWxlIHNob3VsZCBvbmx5IGhhdmUgYSBkZWZhdWx0IGV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgYXhpb3NcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSAnLi9DYW5jZWxlZEVycm9yLmpzJztcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7Q2FuY2VsVG9rZW59XG4gKi9cbmNsYXNzIENhbmNlbFRva2VuIHtcbiAgY29uc3RydWN0b3IoZXhlY3V0b3IpIHtcbiAgICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgbGV0IHJlc29sdmVQcm9taXNlO1xuXG4gICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRva2VuID0gdGhpcztcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgdGhpcy5wcm9taXNlLnRoZW4oY2FuY2VsID0+IHtcbiAgICAgIGlmICghdG9rZW4uX2xpc3RlbmVycykgcmV0dXJuO1xuXG4gICAgICBsZXQgaSA9IHRva2VuLl9saXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoaS0tID4gMCkge1xuICAgICAgICB0b2tlbi5fbGlzdGVuZXJzW2ldKGNhbmNlbCk7XG4gICAgICB9XG4gICAgICB0b2tlbi5fbGlzdGVuZXJzID0gbnVsbDtcbiAgICB9KTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgdGhpcy5wcm9taXNlLnRoZW4gPSBvbmZ1bGZpbGxlZCA9PiB7XG4gICAgICBsZXQgX3Jlc29sdmU7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICB0b2tlbi5zdWJzY3JpYmUocmVzb2x2ZSk7XG4gICAgICAgIF9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIH0pLnRoZW4ob25mdWxmaWxsZWQpO1xuXG4gICAgICBwcm9taXNlLmNhbmNlbCA9IGZ1bmN0aW9uIHJlamVjdCgpIHtcbiAgICAgICAgdG9rZW4udW5zdWJzY3JpYmUoX3Jlc29sdmUpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlLCBjb25maWcsIHJlcXVlc3QpIHtcbiAgICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbGVkRXJyb3IobWVzc2FnZSwgY29uZmlnLCByZXF1ZXN0KTtcbiAgICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhyb3dzIGEgYENhbmNlbGVkRXJyb3JgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gICAqL1xuICB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICAgIGlmICh0aGlzLnJlYXNvbikge1xuICAgICAgdGhyb3cgdGhpcy5yZWFzb247XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byB0aGUgY2FuY2VsIHNpZ25hbFxuICAgKi9cblxuICBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICAgIGxpc3RlbmVyKHRoaXMucmVhc29uKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycyA9IFtsaXN0ZW5lcl07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlIGZyb20gdGhlIGNhbmNlbCBzaWduYWxcbiAgICovXG5cbiAgdW5zdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAoIXRoaXMuX2xpc3RlbmVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX2xpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICAgKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICAgKi9cbiAgc3RhdGljIHNvdXJjZSgpIHtcbiAgICBsZXQgY2FuY2VsO1xuICAgIGNvbnN0IHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICAgIGNhbmNlbCA9IGM7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRva2VuLFxuICAgICAgY2FuY2VsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogQSBgQ2FuY2VsZWRFcnJvcmAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0PX0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge09iamVjdD19IHJlcXVlc3QgVGhlIHJlcXVlc3QuXG4gKlxuICogQHJldHVybnMge0NhbmNlbGVkRXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5mdW5jdGlvbiBDYW5jZWxlZEVycm9yKG1lc3NhZ2UsIGNvbmZpZywgcmVxdWVzdCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXEtbnVsbCxlcWVxZXFcbiAgQXhpb3NFcnJvci5jYWxsKHRoaXMsIG1lc3NhZ2UgPT0gbnVsbCA/ICdjYW5jZWxlZCcgOiBtZXNzYWdlLCBBeGlvc0Vycm9yLkVSUl9DQU5DRUxFRCwgY29uZmlnLCByZXF1ZXN0KTtcbiAgdGhpcy5uYW1lID0gJ0NhbmNlbGVkRXJyb3InO1xufVxuXG51dGlscy5pbmhlcml0cyhDYW5jZWxlZEVycm9yLCBBeGlvc0Vycm9yLCB7XG4gIF9fQ0FOQ0VMX186IHRydWVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDYW5jZWxlZEVycm9yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcbmltcG9ydCBidWlsZFVSTCBmcm9tICcuLi9oZWxwZXJzL2J1aWxkVVJMLmpzJztcbmltcG9ydCBJbnRlcmNlcHRvck1hbmFnZXIgZnJvbSAnLi9JbnRlcmNlcHRvck1hbmFnZXIuanMnO1xuaW1wb3J0IGRpc3BhdGNoUmVxdWVzdCBmcm9tICcuL2Rpc3BhdGNoUmVxdWVzdC5qcyc7XG5pbXBvcnQgbWVyZ2VDb25maWcgZnJvbSAnLi9tZXJnZUNvbmZpZy5qcyc7XG5pbXBvcnQgYnVpbGRGdWxsUGF0aCBmcm9tICcuL2J1aWxkRnVsbFBhdGguanMnO1xuaW1wb3J0IHZhbGlkYXRvciBmcm9tICcuLi9oZWxwZXJzL3ZhbGlkYXRvci5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4vQXhpb3NIZWFkZXJzLmpzJztcblxuY29uc3QgdmFsaWRhdG9ycyA9IHZhbGlkYXRvci52YWxpZGF0b3JzO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5jbGFzcyBBeGlvcyB7XG4gIGNvbnN0cnVjdG9yKGluc3RhbmNlQ29uZmlnKSB7XG4gICAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gY29uZmlnT3JVcmwgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICAgKiBAcGFyYW0gez9PYmplY3R9IGNvbmZpZ1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gICAqL1xuICByZXF1ZXN0KGNvbmZpZ09yVXJsLCBjb25maWcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gICAgaWYgKHR5cGVvZiBjb25maWdPclVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICAgIGNvbmZpZy51cmwgPSBjb25maWdPclVybDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnID0gY29uZmlnT3JVcmwgfHwge307XG4gICAgfVxuXG4gICAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcblxuICAgIGNvbnN0IHt0cmFuc2l0aW9uYWwsIHBhcmFtc1NlcmlhbGl6ZXIsIGhlYWRlcnN9ID0gY29uZmlnO1xuXG4gICAgaWYgKHRyYW5zaXRpb25hbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWxpZGF0b3IuYXNzZXJ0T3B0aW9ucyh0cmFuc2l0aW9uYWwsIHtcbiAgICAgICAgc2lsZW50SlNPTlBhcnNpbmc6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbiksXG4gICAgICAgIGZvcmNlZEpTT05QYXJzaW5nOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pLFxuICAgICAgICBjbGFyaWZ5VGltZW91dEVycm9yOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pXG4gICAgICB9LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24ocGFyYW1zU2VyaWFsaXplcikpIHtcbiAgICAgICAgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIgPSB7XG4gICAgICAgICAgc2VyaWFsaXplOiBwYXJhbXNTZXJpYWxpemVyXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRvci5hc3NlcnRPcHRpb25zKHBhcmFtc1NlcmlhbGl6ZXIsIHtcbiAgICAgICAgICBlbmNvZGU6IHZhbGlkYXRvcnMuZnVuY3Rpb24sXG4gICAgICAgICAgc2VyaWFsaXplOiB2YWxpZGF0b3JzLmZ1bmN0aW9uXG4gICAgICAgIH0sIHRydWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNldCBjb25maWcubWV0aG9kXG4gICAgY29uZmlnLm1ldGhvZCA9IChjb25maWcubWV0aG9kIHx8IHRoaXMuZGVmYXVsdHMubWV0aG9kIHx8ICdnZXQnKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgbGV0IGNvbnRleHRIZWFkZXJzO1xuXG4gICAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gICAgY29udGV4dEhlYWRlcnMgPSBoZWFkZXJzICYmIHV0aWxzLm1lcmdlKFxuICAgICAgaGVhZGVycy5jb21tb24sXG4gICAgICBoZWFkZXJzW2NvbmZpZy5tZXRob2RdXG4gICAgKTtcblxuICAgIGNvbnRleHRIZWFkZXJzICYmIHV0aWxzLmZvckVhY2goXG4gICAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICAgIChtZXRob2QpID0+IHtcbiAgICAgICAgZGVsZXRlIGhlYWRlcnNbbWV0aG9kXTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uZmlnLmhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuY29uY2F0KGNvbnRleHRIZWFkZXJzLCBoZWFkZXJzKTtcblxuICAgIC8vIGZpbHRlciBvdXQgc2tpcHBlZCBpbnRlcmNlcHRvcnNcbiAgICBjb25zdCByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbiA9IFtdO1xuICAgIGxldCBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgPSB0cnVlO1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgICAgaWYgKHR5cGVvZiBpbnRlcmNlcHRvci5ydW5XaGVuID09PSAnZnVuY3Rpb24nICYmIGludGVyY2VwdG9yLnJ1bldoZW4oY29uZmlnKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgPSBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgJiYgaW50ZXJjZXB0b3Iuc3luY2hyb25vdXM7XG5cbiAgICAgIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4gPSBbXTtcbiAgICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgICAgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gICAgfSk7XG5cbiAgICBsZXQgcHJvbWlzZTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGxlbjtcblxuICAgIGlmICghc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzKSB7XG4gICAgICBjb25zdCBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QuYmluZCh0aGlzKSwgdW5kZWZpbmVkXTtcbiAgICAgIGNoYWluLnVuc2hpZnQuYXBwbHkoY2hhaW4sIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluKTtcbiAgICAgIGNoYWluLnB1c2guYXBwbHkoY2hhaW4sIHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbik7XG4gICAgICBsZW4gPSBjaGFpbi5sZW5ndGg7XG5cbiAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICAgICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbltpKytdLCBjaGFpbltpKytdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgbGVuID0gcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4ubGVuZ3RoO1xuXG4gICAgbGV0IG5ld0NvbmZpZyA9IGNvbmZpZztcblxuICAgIGkgPSAwO1xuXG4gICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgIGNvbnN0IG9uRnVsZmlsbGVkID0gcmVxdWVzdEludGVyY2VwdG9yQ2hhaW5baSsrXTtcbiAgICAgIGNvbnN0IG9uUmVqZWN0ZWQgPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbltpKytdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3Q29uZmlnID0gb25GdWxmaWxsZWQobmV3Q29uZmlnKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIG9uUmVqZWN0ZWQuY2FsbCh0aGlzLCBlcnJvcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBwcm9taXNlID0gZGlzcGF0Y2hSZXF1ZXN0LmNhbGwodGhpcywgbmV3Q29uZmlnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG5cbiAgICBpID0gMDtcbiAgICBsZW4gPSByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4ubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4ocmVzcG9uc2VJbnRlcmNlcHRvckNoYWluW2krK10sIHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbltpKytdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIGdldFVyaShjb25maWcpIHtcbiAgICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICAgIGNvbnN0IGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmV0dXJuIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcik7XG4gIH1cbn1cblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2QsXG4gICAgICB1cmwsXG4gICAgICBkYXRhOiAoY29uZmlnIHx8IHt9KS5kYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVIVFRQTWV0aG9kKGlzRm9ybSkge1xuICAgIHJldHVybiBmdW5jdGlvbiBodHRwTWV0aG9kKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgICBtZXRob2QsXG4gICAgICAgIGhlYWRlcnM6IGlzRm9ybSA/IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXG4gICAgICAgIH0gOiB7fSxcbiAgICAgICAgdXJsLFxuICAgICAgICBkYXRhXG4gICAgICB9KSk7XG4gICAgfTtcbiAgfVxuXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZ2VuZXJhdGVIVFRQTWV0aG9kKCk7XG5cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZCArICdGb3JtJ10gPSBnZW5lcmF0ZUhUVFBNZXRob2QodHJ1ZSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnXSBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5mdW5jdGlvbiBBeGlvc0Vycm9yKG1lc3NhZ2UsIGNvZGUsIGNvbmZpZywgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgRXJyb3IuY2FsbCh0aGlzKTtcblxuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnN0YWNrID0gKG5ldyBFcnJvcigpKS5zdGFjaztcbiAgfVxuXG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIHRoaXMubmFtZSA9ICdBeGlvc0Vycm9yJztcbiAgY29kZSAmJiAodGhpcy5jb2RlID0gY29kZSk7XG4gIGNvbmZpZyAmJiAodGhpcy5jb25maWcgPSBjb25maWcpO1xuICByZXF1ZXN0ICYmICh0aGlzLnJlcXVlc3QgPSByZXF1ZXN0KTtcbiAgcmVzcG9uc2UgJiYgKHRoaXMucmVzcG9uc2UgPSByZXNwb25zZSk7XG59XG5cbnV0aWxzLmluaGVyaXRzKEF4aW9zRXJyb3IsIEVycm9yLCB7XG4gIHRvSlNPTjogZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHV0aWxzLnRvSlNPTk9iamVjdCh0aGlzLmNvbmZpZyksXG4gICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICBzdGF0dXM6IHRoaXMucmVzcG9uc2UgJiYgdGhpcy5yZXNwb25zZS5zdGF0dXMgPyB0aGlzLnJlc3BvbnNlLnN0YXR1cyA6IG51bGxcbiAgICB9O1xuICB9XG59KTtcblxuY29uc3QgcHJvdG90eXBlID0gQXhpb3NFcnJvci5wcm90b3R5cGU7XG5jb25zdCBkZXNjcmlwdG9ycyA9IHt9O1xuXG5bXG4gICdFUlJfQkFEX09QVElPTl9WQUxVRScsXG4gICdFUlJfQkFEX09QVElPTicsXG4gICdFQ09OTkFCT1JURUQnLFxuICAnRVRJTUVET1VUJyxcbiAgJ0VSUl9ORVRXT1JLJyxcbiAgJ0VSUl9GUl9UT09fTUFOWV9SRURJUkVDVFMnLFxuICAnRVJSX0RFUFJFQ0FURUQnLFxuICAnRVJSX0JBRF9SRVNQT05TRScsXG4gICdFUlJfQkFEX1JFUVVFU1QnLFxuICAnRVJSX0NBTkNFTEVEJyxcbiAgJ0VSUl9OT1RfU1VQUE9SVCcsXG4gICdFUlJfSU5WQUxJRF9VUkwnXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXS5mb3JFYWNoKGNvZGUgPT4ge1xuICBkZXNjcmlwdG9yc1tjb2RlXSA9IHt2YWx1ZTogY29kZX07XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQXhpb3NFcnJvciwgZGVzY3JpcHRvcnMpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvdHlwZSwgJ2lzQXhpb3NFcnJvcicsIHt2YWx1ZTogdHJ1ZX0pO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuQXhpb3NFcnJvci5mcm9tID0gKGVycm9yLCBjb2RlLCBjb25maWcsIHJlcXVlc3QsIHJlc3BvbnNlLCBjdXN0b21Qcm9wcykgPT4ge1xuICBjb25zdCBheGlvc0Vycm9yID0gT2JqZWN0LmNyZWF0ZShwcm90b3R5cGUpO1xuXG4gIHV0aWxzLnRvRmxhdE9iamVjdChlcnJvciwgYXhpb3NFcnJvciwgZnVuY3Rpb24gZmlsdGVyKG9iaikge1xuICAgIHJldHVybiBvYmogIT09IEVycm9yLnByb3RvdHlwZTtcbiAgfSwgcHJvcCA9PiB7XG4gICAgcmV0dXJuIHByb3AgIT09ICdpc0F4aW9zRXJyb3InO1xuICB9KTtcblxuICBBeGlvc0Vycm9yLmNhbGwoYXhpb3NFcnJvciwgZXJyb3IubWVzc2FnZSwgY29kZSwgY29uZmlnLCByZXF1ZXN0LCByZXNwb25zZSk7XG5cbiAgYXhpb3NFcnJvci5jYXVzZSA9IGVycm9yO1xuXG4gIGF4aW9zRXJyb3IubmFtZSA9IGVycm9yLm5hbWU7XG5cbiAgY3VzdG9tUHJvcHMgJiYgT2JqZWN0LmFzc2lnbihheGlvc0Vycm9yLCBjdXN0b21Qcm9wcyk7XG5cbiAgcmV0dXJuIGF4aW9zRXJyb3I7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBeGlvc0Vycm9yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHBhcnNlSGVhZGVycyBmcm9tICcuLi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyc7XG5cbmNvbnN0ICRpbnRlcm5hbHMgPSBTeW1ib2woJ2ludGVybmFscycpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVIZWFkZXIoaGVhZGVyKSB7XG4gIHJldHVybiBoZWFkZXIgJiYgU3RyaW5nKGhlYWRlcikudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB1dGlscy5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLm1hcChub3JtYWxpemVWYWx1ZSkgOiBTdHJpbmcodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRva2VucyhzdHIpIHtcbiAgY29uc3QgdG9rZW5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgY29uc3QgdG9rZW5zUkUgPSAvKFteXFxzLDs9XSspXFxzKig/Oj1cXHMqKFteLDtdKykpPy9nO1xuICBsZXQgbWF0Y2g7XG5cbiAgd2hpbGUgKChtYXRjaCA9IHRva2Vuc1JFLmV4ZWMoc3RyKSkpIHtcbiAgICB0b2tlbnNbbWF0Y2hbMV1dID0gbWF0Y2hbMl07XG4gIH1cblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5jb25zdCBpc1ZhbGlkSGVhZGVyTmFtZSA9IChzdHIpID0+IC9eWy1fYS16QS1aMC05XmB8fiwhIyQlJicqKy5dKyQvLnRlc3Qoc3RyLnRyaW0oKSk7XG5cbmZ1bmN0aW9uIG1hdGNoSGVhZGVyVmFsdWUoY29udGV4dCwgdmFsdWUsIGhlYWRlciwgZmlsdGVyLCBpc0hlYWRlck5hbWVGaWx0ZXIpIHtcbiAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZmlsdGVyKSkge1xuICAgIHJldHVybiBmaWx0ZXIuY2FsbCh0aGlzLCB2YWx1ZSwgaGVhZGVyKTtcbiAgfVxuXG4gIGlmIChpc0hlYWRlck5hbWVGaWx0ZXIpIHtcbiAgICB2YWx1ZSA9IGhlYWRlcjtcbiAgfVxuXG4gIGlmICghdXRpbHMuaXNTdHJpbmcodmFsdWUpKSByZXR1cm47XG5cbiAgaWYgKHV0aWxzLmlzU3RyaW5nKGZpbHRlcikpIHtcbiAgICByZXR1cm4gdmFsdWUuaW5kZXhPZihmaWx0ZXIpICE9PSAtMTtcbiAgfVxuXG4gIGlmICh1dGlscy5pc1JlZ0V4cChmaWx0ZXIpKSB7XG4gICAgcmV0dXJuIGZpbHRlci50ZXN0KHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRIZWFkZXIoaGVhZGVyKSB7XG4gIHJldHVybiBoZWFkZXIudHJpbSgpXG4gICAgLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvKFthLXpcXGRdKShcXHcqKS9nLCAodywgY2hhciwgc3RyKSA9PiB7XG4gICAgICByZXR1cm4gY2hhci50b1VwcGVyQ2FzZSgpICsgc3RyO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBidWlsZEFjY2Vzc29ycyhvYmosIGhlYWRlcikge1xuICBjb25zdCBhY2Nlc3Nvck5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZSgnICcgKyBoZWFkZXIpO1xuXG4gIFsnZ2V0JywgJ3NldCcsICdoYXMnXS5mb3JFYWNoKG1ldGhvZE5hbWUgPT4ge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIG1ldGhvZE5hbWUgKyBhY2Nlc3Nvck5hbWUsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbihhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgICAgIHJldHVybiB0aGlzW21ldGhvZE5hbWVdLmNhbGwodGhpcywgaGVhZGVyLCBhcmcxLCBhcmcyLCBhcmczKTtcbiAgICAgIH0sXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfSk7XG59XG5cbmNsYXNzIEF4aW9zSGVhZGVycyB7XG4gIGNvbnN0cnVjdG9yKGhlYWRlcnMpIHtcbiAgICBoZWFkZXJzICYmIHRoaXMuc2V0KGhlYWRlcnMpO1xuICB9XG5cbiAgc2V0KGhlYWRlciwgdmFsdWVPclJld3JpdGUsIHJld3JpdGUpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIHNldEhlYWRlcihfdmFsdWUsIF9oZWFkZXIsIF9yZXdyaXRlKSB7XG4gICAgICBjb25zdCBsSGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKF9oZWFkZXIpO1xuXG4gICAgICBpZiAoIWxIZWFkZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdoZWFkZXIgbmFtZSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHNlbGYsIGxIZWFkZXIpO1xuXG4gICAgICBpZigha2V5IHx8IHNlbGZba2V5XSA9PT0gdW5kZWZpbmVkIHx8IF9yZXdyaXRlID09PSB0cnVlIHx8IChfcmV3cml0ZSA9PT0gdW5kZWZpbmVkICYmIHNlbGZba2V5XSAhPT0gZmFsc2UpKSB7XG4gICAgICAgIHNlbGZba2V5IHx8IF9oZWFkZXJdID0gbm9ybWFsaXplVmFsdWUoX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRIZWFkZXJzID0gKGhlYWRlcnMsIF9yZXdyaXRlKSA9PlxuICAgICAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCAoX3ZhbHVlLCBfaGVhZGVyKSA9PiBzZXRIZWFkZXIoX3ZhbHVlLCBfaGVhZGVyLCBfcmV3cml0ZSkpO1xuXG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QoaGVhZGVyKSB8fCBoZWFkZXIgaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yKSB7XG4gICAgICBzZXRIZWFkZXJzKGhlYWRlciwgdmFsdWVPclJld3JpdGUpXG4gICAgfSBlbHNlIGlmKHV0aWxzLmlzU3RyaW5nKGhlYWRlcikgJiYgKGhlYWRlciA9IGhlYWRlci50cmltKCkpICYmICFpc1ZhbGlkSGVhZGVyTmFtZShoZWFkZXIpKSB7XG4gICAgICBzZXRIZWFkZXJzKHBhcnNlSGVhZGVycyhoZWFkZXIpLCB2YWx1ZU9yUmV3cml0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlciAhPSBudWxsICYmIHNldEhlYWRlcih2YWx1ZU9yUmV3cml0ZSwgaGVhZGVyLCByZXdyaXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldChoZWFkZXIsIHBhcnNlcikge1xuICAgIGhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihoZWFkZXIpO1xuXG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleSh0aGlzLCBoZWFkZXIpO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpc1trZXldO1xuXG4gICAgICAgIGlmICghcGFyc2VyKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlciA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZVRva2Vucyh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihwYXJzZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlci5jYWxsKHRoaXMsIHZhbHVlLCBrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzUmVnRXhwKHBhcnNlcikpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VyLmV4ZWModmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncGFyc2VyIG11c3QgYmUgYm9vbGVhbnxyZWdleHB8ZnVuY3Rpb24nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYXMoaGVhZGVyLCBtYXRjaGVyKSB7XG4gICAgaGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKGhlYWRlcik7XG5cbiAgICBpZiAoaGVhZGVyKSB7XG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHRoaXMsIGhlYWRlcik7XG5cbiAgICAgIHJldHVybiAhIShrZXkgJiYgdGhpc1trZXldICE9PSB1bmRlZmluZWQgJiYgKCFtYXRjaGVyIHx8IG1hdGNoSGVhZGVyVmFsdWUodGhpcywgdGhpc1trZXldLCBrZXksIG1hdGNoZXIpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZGVsZXRlKGhlYWRlciwgbWF0Y2hlcikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBkZWxldGVkID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBkZWxldGVIZWFkZXIoX2hlYWRlcikge1xuICAgICAgX2hlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihfaGVhZGVyKTtcblxuICAgICAgaWYgKF9oZWFkZXIpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleShzZWxmLCBfaGVhZGVyKTtcblxuICAgICAgICBpZiAoa2V5ICYmICghbWF0Y2hlciB8fCBtYXRjaEhlYWRlclZhbHVlKHNlbGYsIHNlbGZba2V5XSwga2V5LCBtYXRjaGVyKSkpIHtcbiAgICAgICAgICBkZWxldGUgc2VsZltrZXldO1xuXG4gICAgICAgICAgZGVsZXRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNBcnJheShoZWFkZXIpKSB7XG4gICAgICBoZWFkZXIuZm9yRWFjaChkZWxldGVIZWFkZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGVIZWFkZXIoaGVhZGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVsZXRlZDtcbiAgfVxuXG4gIGNsZWFyKG1hdGNoZXIpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XG4gICAgbGV0IGkgPSBrZXlzLmxlbmd0aDtcbiAgICBsZXQgZGVsZXRlZCA9IGZhbHNlO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmKCFtYXRjaGVyIHx8IG1hdGNoSGVhZGVyVmFsdWUodGhpcywgdGhpc1trZXldLCBrZXksIG1hdGNoZXIsIHRydWUpKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XG4gICAgICAgIGRlbGV0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZWxldGVkO1xuICB9XG5cbiAgbm9ybWFsaXplKGZvcm1hdCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcblxuICAgIHV0aWxzLmZvckVhY2godGhpcywgKHZhbHVlLCBoZWFkZXIpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkoaGVhZGVycywgaGVhZGVyKTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBzZWxmW2tleV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIGRlbGV0ZSBzZWxmW2hlYWRlcl07XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IGZvcm1hdCA/IGZvcm1hdEhlYWRlcihoZWFkZXIpIDogU3RyaW5nKGhlYWRlcikudHJpbSgpO1xuXG4gICAgICBpZiAobm9ybWFsaXplZCAhPT0gaGVhZGVyKSB7XG4gICAgICAgIGRlbGV0ZSBzZWxmW2hlYWRlcl07XG4gICAgICB9XG5cbiAgICAgIHNlbGZbbm9ybWFsaXplZF0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG5cbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZF0gPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb25jYXQoLi4udGFyZ2V0cykge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmNvbmNhdCh0aGlzLCAuLi50YXJnZXRzKTtcbiAgfVxuXG4gIHRvSlNPTihhc1N0cmluZ3MpIHtcbiAgICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgdXRpbHMuZm9yRWFjaCh0aGlzLCAodmFsdWUsIGhlYWRlcikgPT4ge1xuICAgICAgdmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPT0gZmFsc2UgJiYgKG9ialtoZWFkZXJdID0gYXNTdHJpbmdzICYmIHV0aWxzLmlzQXJyYXkodmFsdWUpID8gdmFsdWUuam9pbignLCAnKSA6IHZhbHVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy50b0pTT04oKSlbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMudG9KU09OKCkpLm1hcCgoW2hlYWRlciwgdmFsdWVdKSA9PiBoZWFkZXIgKyAnOiAnICsgdmFsdWUpLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgIHJldHVybiAnQXhpb3NIZWFkZXJzJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tKHRoaW5nKSB7XG4gICAgcmV0dXJuIHRoaW5nIGluc3RhbmNlb2YgdGhpcyA/IHRoaW5nIDogbmV3IHRoaXModGhpbmcpO1xuICB9XG5cbiAgc3RhdGljIGNvbmNhdChmaXJzdCwgLi4udGFyZ2V0cykge1xuICAgIGNvbnN0IGNvbXB1dGVkID0gbmV3IHRoaXMoZmlyc3QpO1xuXG4gICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IGNvbXB1dGVkLnNldCh0YXJnZXQpKTtcblxuICAgIHJldHVybiBjb21wdXRlZDtcbiAgfVxuXG4gIHN0YXRpYyBhY2Nlc3NvcihoZWFkZXIpIHtcbiAgICBjb25zdCBpbnRlcm5hbHMgPSB0aGlzWyRpbnRlcm5hbHNdID0gKHRoaXNbJGludGVybmFsc10gPSB7XG4gICAgICBhY2Nlc3NvcnM6IHt9XG4gICAgfSk7XG5cbiAgICBjb25zdCBhY2Nlc3NvcnMgPSBpbnRlcm5hbHMuYWNjZXNzb3JzO1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IHRoaXMucHJvdG90eXBlO1xuXG4gICAgZnVuY3Rpb24gZGVmaW5lQWNjZXNzb3IoX2hlYWRlcikge1xuICAgICAgY29uc3QgbEhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihfaGVhZGVyKTtcblxuICAgICAgaWYgKCFhY2Nlc3NvcnNbbEhlYWRlcl0pIHtcbiAgICAgICAgYnVpbGRBY2Nlc3NvcnMocHJvdG90eXBlLCBfaGVhZGVyKTtcbiAgICAgICAgYWNjZXNzb3JzW2xIZWFkZXJdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1dGlscy5pc0FycmF5KGhlYWRlcikgPyBoZWFkZXIuZm9yRWFjaChkZWZpbmVBY2Nlc3NvcikgOiBkZWZpbmVBY2Nlc3NvcihoZWFkZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuQXhpb3NIZWFkZXJzLmFjY2Vzc29yKFsnQ29udGVudC1UeXBlJywgJ0NvbnRlbnQtTGVuZ3RoJywgJ0FjY2VwdCcsICdBY2NlcHQtRW5jb2RpbmcnLCAnVXNlci1BZ2VudCcsICdBdXRob3JpemF0aW9uJ10pO1xuXG51dGlscy5mcmVlemVNZXRob2RzKEF4aW9zSGVhZGVycy5wcm90b3R5cGUpO1xudXRpbHMuZnJlZXplTWV0aG9kcyhBeGlvc0hlYWRlcnMpO1xuXG5leHBvcnQgZGVmYXVsdCBBeGlvc0hlYWRlcnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcblxuY2xhc3MgSW50ZXJjZXB0b3JNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICAgKlxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gICAqL1xuICB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCwgb3B0aW9ucykge1xuICAgIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgICBmdWxmaWxsZWQsXG4gICAgICByZWplY3RlZCxcbiAgICAgIHN5bmNocm9ub3VzOiBvcHRpb25zID8gb3B0aW9ucy5zeW5jaHJvbm91cyA6IGZhbHNlLFxuICAgICAgcnVuV2hlbjogb3B0aW9ucyA/IG9wdGlvbnMucnVuV2hlbiA6IG51bGxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gICAqXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIGludGVyY2VwdG9yIHdhcyByZW1vdmVkLCBgZmFsc2VgIG90aGVyd2lzZVxuICAgKi9cbiAgZWplY3QoaWQpIHtcbiAgICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGludGVyY2VwdG9ycyBmcm9tIHRoZSBzdGFja1xuICAgKlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGNsZWFyKCkge1xuICAgIGlmICh0aGlzLmhhbmRsZXJzKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gICAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICAgKlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGZvckVhY2goZm4pIHtcbiAgICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICAgIGZuKGgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGlzQWJzb2x1dGVVUkwgZnJvbSAnLi4vaGVscGVycy9pc0Fic29sdXRlVVJMLmpzJztcbmltcG9ydCBjb21iaW5lVVJMcyBmcm9tICcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIGJhc2VVUkwgd2l0aCB0aGUgcmVxdWVzdGVkVVJMLFxuICogb25seSB3aGVuIHRoZSByZXF1ZXN0ZWRVUkwgaXMgbm90IGFscmVhZHkgYW4gYWJzb2x1dGUgVVJMLlxuICogSWYgdGhlIHJlcXVlc3RVUkwgaXMgYWJzb2x1dGUsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcmVxdWVzdGVkVVJMIHVudG91Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0ZWRVUkwgQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIHRvIGNvbWJpbmVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdHJhbnNmb3JtRGF0YSBmcm9tICcuL3RyYW5zZm9ybURhdGEuanMnO1xuaW1wb3J0IGlzQ2FuY2VsIGZyb20gJy4uL2NhbmNlbC9pc0NhbmNlbC5qcyc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi4vZGVmYXVsdHMvaW5kZXguanMnO1xuaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSAnLi4vY2FuY2VsL0NhbmNlbGVkRXJyb3IuanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuLi9jb3JlL0F4aW9zSGVhZGVycy5qcyc7XG5pbXBvcnQgYWRhcHRlcnMgZnJvbSBcIi4uL2FkYXB0ZXJzL2FkYXB0ZXJzLmpzXCI7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGVkRXJyb3JgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cblxuICBpZiAoY29uZmlnLnNpZ25hbCAmJiBjb25maWcuc2lnbmFsLmFib3J0ZWQpIHtcbiAgICB0aHJvdyBuZXcgQ2FuY2VsZWRFcnJvcihudWxsLCBjb25maWcpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICpcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgY29uZmlnLmhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShjb25maWcuaGVhZGVycyk7XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICBjb25maWcsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICBpZiAoWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLmluZGV4T2YoY29uZmlnLm1ldGhvZCkgIT09IC0xKSB7XG4gICAgY29uZmlnLmhlYWRlcnMuc2V0Q29udGVudFR5cGUoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsIGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0IGFkYXB0ZXIgPSBhZGFwdGVycy5nZXRBZGFwdGVyKGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXIpO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgICAgY29uZmlnLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlLFxuICAgICAgcmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmVzcG9uc2UuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKHJlc3BvbnNlLmhlYWRlcnMpO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZVxuICAgICAgICApO1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gXCIuL0F4aW9zSGVhZGVycy5qc1wiO1xuXG5jb25zdCBoZWFkZXJzVG9PYmplY3QgPSAodGhpbmcpID0+IHRoaW5nIGluc3RhbmNlb2YgQXhpb3NIZWFkZXJzID8gdGhpbmcudG9KU09OKCkgOiB0aGluZztcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgY29uc3QgY29uZmlnID0ge307XG5cbiAgZnVuY3Rpb24gZ2V0TWVyZ2VkVmFsdWUodGFyZ2V0LCBzb3VyY2UsIGNhc2VsZXNzKSB7XG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QodGFyZ2V0KSAmJiB1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZS5jYWxsKHtjYXNlbGVzc30sIHRhcmdldCwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHt9LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gc291cmNlLnNsaWNlKCk7XG4gICAgfVxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhhLCBiLCBjYXNlbGVzcykge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYikpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZShhLCBiLCBjYXNlbGVzcyk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGEsIGNhc2VsZXNzKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihhLCBiKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChiKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYik7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIoYSwgYikge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYikpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGIpO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGEpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBhKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gbWVyZ2VEaXJlY3RLZXlzKGEsIGIsIHByb3ApIHtcbiAgICBpZiAocHJvcCBpbiBjb25maWcyKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUoYSwgYik7XG4gICAgfSBlbHNlIGlmIChwcm9wIGluIGNvbmZpZzEpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGEpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1lcmdlTWFwID0ge1xuICAgIHVybDogdmFsdWVGcm9tQ29uZmlnMixcbiAgICBtZXRob2Q6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgZGF0YTogdmFsdWVGcm9tQ29uZmlnMixcbiAgICBiYXNlVVJMOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRyYW5zZm9ybVJlcXVlc3Q6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdHJhbnNmb3JtUmVzcG9uc2U6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgcGFyYW1zU2VyaWFsaXplcjogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0aW1lb3V0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRpbWVvdXRNZXNzYWdlOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHdpdGhDcmVkZW50aWFsczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBhZGFwdGVyOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHJlc3BvbnNlVHlwZTogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB4c3JmQ29va2llTmFtZTogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB4c3JmSGVhZGVyTmFtZTogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBvblVwbG9hZFByb2dyZXNzOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIG9uRG93bmxvYWRQcm9ncmVzczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBkZWNvbXByZXNzOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIG1heENvbnRlbnRMZW5ndGg6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgbWF4Qm9keUxlbmd0aDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBiZWZvcmVSZWRpcmVjdDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0cmFuc3BvcnQ6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgaHR0cEFnZW50OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGh0dHBzQWdlbnQ6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgY2FuY2VsVG9rZW46IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgc29ja2V0UGF0aDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICByZXNwb25zZUVuY29kaW5nOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHZhbGlkYXRlU3RhdHVzOiBtZXJnZURpcmVjdEtleXMsXG4gICAgaGVhZGVyczogKGEsIGIpID0+IG1lcmdlRGVlcFByb3BlcnRpZXMoaGVhZGVyc1RvT2JqZWN0KGEpLCBoZWFkZXJzVG9PYmplY3QoYiksIHRydWUpXG4gIH07XG5cbiAgdXRpbHMuZm9yRWFjaChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCBjb25maWcxLCBjb25maWcyKSksIGZ1bmN0aW9uIGNvbXB1dGVDb25maWdWYWx1ZShwcm9wKSB7XG4gICAgY29uc3QgbWVyZ2UgPSBtZXJnZU1hcFtwcm9wXSB8fCBtZXJnZURlZXBQcm9wZXJ0aWVzO1xuICAgIGNvbnN0IGNvbmZpZ1ZhbHVlID0gbWVyZ2UoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSwgcHJvcCk7XG4gICAgKHV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZ1ZhbHVlKSAmJiBtZXJnZSAhPT0gbWVyZ2VEaXJlY3RLZXlzKSB8fCAoY29uZmlnW3Byb3BdID0gY29uZmlnVmFsdWUpO1xuICB9KTtcblxuICByZXR1cm4gY29uZmlnO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuL0F4aW9zRXJyb3IuanMnO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9IFRoZSByZXNwb25zZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgY29uc3QgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIFtBeGlvc0Vycm9yLkVSUl9CQURfUkVRVUVTVCwgQXhpb3NFcnJvci5FUlJfQkFEX1JFU1BPTlNFXVtNYXRoLmZsb29yKHJlc3BvbnNlLnN0YXR1cyAvIDEwMCkgLSA0XSxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuLi9kZWZhdWx0cy9pbmRleC5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4uL2NvcmUvQXhpb3NIZWFkZXJzLmpzJztcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHBhcmFtIHs/T2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2Ugb2JqZWN0XG4gKlxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGZucywgcmVzcG9uc2UpIHtcbiAgY29uc3QgY29uZmlnID0gdGhpcyB8fCBkZWZhdWx0cztcbiAgY29uc3QgY29udGV4dCA9IHJlc3BvbnNlIHx8IGNvbmZpZztcbiAgY29uc3QgaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKGNvbnRleHQuaGVhZGVycyk7XG4gIGxldCBkYXRhID0gY29udGV4dC5kYXRhO1xuXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4uY2FsbChjb25maWcsIGRhdGEsIGhlYWRlcnMubm9ybWFsaXplKCksIHJlc3BvbnNlID8gcmVzcG9uc2Uuc3RhdHVzIDogdW5kZWZpbmVkKTtcbiAgfSk7XG5cbiAgaGVhZGVycy5ub3JtYWxpemUoKTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgdHJhbnNpdGlvbmFsRGVmYXVsdHMgZnJvbSAnLi90cmFuc2l0aW9uYWwuanMnO1xuaW1wb3J0IHRvRm9ybURhdGEgZnJvbSAnLi4vaGVscGVycy90b0Zvcm1EYXRhLmpzJztcbmltcG9ydCB0b1VSTEVuY29kZWRGb3JtIGZyb20gJy4uL2hlbHBlcnMvdG9VUkxFbmNvZGVkRm9ybS5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuaW1wb3J0IGZvcm1EYXRhVG9KU09OIGZyb20gJy4uL2hlbHBlcnMvZm9ybURhdGFUb0pTT04uanMnO1xuXG5jb25zdCBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6IHVuZGVmaW5lZFxufTtcblxuLyoqXG4gKiBJdCB0YWtlcyBhIHN0cmluZywgdHJpZXMgdG8gcGFyc2UgaXQsIGFuZCBpZiBpdCBmYWlscywgaXQgcmV0dXJucyB0aGUgc3RyaW5naWZpZWQgdmVyc2lvblxuICogb2YgdGhlIGlucHV0XG4gKlxuICogQHBhcmFtIHthbnl9IHJhd1ZhbHVlIC0gVGhlIHZhbHVlIHRvIGJlIHN0cmluZ2lmaWVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcGFyc2VyIC0gQSBmdW5jdGlvbiB0aGF0IHBhcnNlcyBhIHN0cmluZyBpbnRvIGEgSmF2YVNjcmlwdCBvYmplY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlbmNvZGVyIC0gQSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgdmFsdWUgYW5kIHJldHVybnMgYSBzdHJpbmcuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gQSBzdHJpbmdpZmllZCB2ZXJzaW9uIG9mIHRoZSByYXdWYWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RyaW5naWZ5U2FmZWx5KHJhd1ZhbHVlLCBwYXJzZXIsIGVuY29kZXIpIHtcbiAgaWYgKHV0aWxzLmlzU3RyaW5nKHJhd1ZhbHVlKSkge1xuICAgIHRyeSB7XG4gICAgICAocGFyc2VyIHx8IEpTT04ucGFyc2UpKHJhd1ZhbHVlKTtcbiAgICAgIHJldHVybiB1dGlscy50cmltKHJhd1ZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5uYW1lICE9PSAnU3ludGF4RXJyb3InKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChlbmNvZGVyIHx8IEpTT04uc3RyaW5naWZ5KShyYXdWYWx1ZSk7XG59XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuXG4gIHRyYW5zaXRpb25hbDogdHJhbnNpdGlvbmFsRGVmYXVsdHMsXG5cbiAgYWRhcHRlcjogWyd4aHInLCAnaHR0cCddLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IGhlYWRlcnMuZ2V0Q29udGVudFR5cGUoKSB8fCAnJztcbiAgICBjb25zdCBoYXNKU09OQ29udGVudFR5cGUgPSBjb250ZW50VHlwZS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgPiAtMTtcbiAgICBjb25zdCBpc09iamVjdFBheWxvYWQgPSB1dGlscy5pc09iamVjdChkYXRhKTtcblxuICAgIGlmIChpc09iamVjdFBheWxvYWQgJiYgdXRpbHMuaXNIVE1MRm9ybShkYXRhKSkge1xuICAgICAgZGF0YSA9IG5ldyBGb3JtRGF0YShkYXRhKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc0Zvcm1EYXRhID0gdXRpbHMuaXNGb3JtRGF0YShkYXRhKTtcblxuICAgIGlmIChpc0Zvcm1EYXRhKSB7XG4gICAgICBpZiAoIWhhc0pTT05Db250ZW50VHlwZSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoYXNKU09OQ29udGVudFR5cGUgPyBKU09OLnN0cmluZ2lmeShmb3JtRGF0YVRvSlNPTihkYXRhKSkgOiBkYXRhO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgaGVhZGVycy5zZXRDb250ZW50VHlwZSgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnLCBmYWxzZSk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGxldCBpc0ZpbGVMaXN0O1xuXG4gICAgaWYgKGlzT2JqZWN0UGF5bG9hZCkge1xuICAgICAgaWYgKGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRvVVJMRW5jb2RlZEZvcm0oZGF0YSwgdGhpcy5mb3JtU2VyaWFsaXplcikudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKChpc0ZpbGVMaXN0ID0gdXRpbHMuaXNGaWxlTGlzdChkYXRhKSkgfHwgY29udGVudFR5cGUuaW5kZXhPZignbXVsdGlwYXJ0L2Zvcm0tZGF0YScpID4gLTEpIHtcbiAgICAgICAgY29uc3QgX0Zvcm1EYXRhID0gdGhpcy5lbnYgJiYgdGhpcy5lbnYuRm9ybURhdGE7XG5cbiAgICAgICAgcmV0dXJuIHRvRm9ybURhdGEoXG4gICAgICAgICAgaXNGaWxlTGlzdCA/IHsnZmlsZXNbXSc6IGRhdGF9IDogZGF0YSxcbiAgICAgICAgICBfRm9ybURhdGEgJiYgbmV3IF9Gb3JtRGF0YSgpLFxuICAgICAgICAgIHRoaXMuZm9ybVNlcmlhbGl6ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3RQYXlsb2FkIHx8IGhhc0pTT05Db250ZW50VHlwZSApIHtcbiAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUoJ2FwcGxpY2F0aW9uL2pzb24nLCBmYWxzZSk7XG4gICAgICByZXR1cm4gc3RyaW5naWZ5U2FmZWx5KGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICBjb25zdCB0cmFuc2l0aW9uYWwgPSB0aGlzLnRyYW5zaXRpb25hbCB8fCBkZWZhdWx0cy50cmFuc2l0aW9uYWw7XG4gICAgY29uc3QgZm9yY2VkSlNPTlBhcnNpbmcgPSB0cmFuc2l0aW9uYWwgJiYgdHJhbnNpdGlvbmFsLmZvcmNlZEpTT05QYXJzaW5nO1xuICAgIGNvbnN0IEpTT05SZXF1ZXN0ZWQgPSB0aGlzLnJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nO1xuXG4gICAgaWYgKGRhdGEgJiYgdXRpbHMuaXNTdHJpbmcoZGF0YSkgJiYgKChmb3JjZWRKU09OUGFyc2luZyAmJiAhdGhpcy5yZXNwb25zZVR5cGUpIHx8IEpTT05SZXF1ZXN0ZWQpKSB7XG4gICAgICBjb25zdCBzaWxlbnRKU09OUGFyc2luZyA9IHRyYW5zaXRpb25hbCAmJiB0cmFuc2l0aW9uYWwuc2lsZW50SlNPTlBhcnNpbmc7XG4gICAgICBjb25zdCBzdHJpY3RKU09OUGFyc2luZyA9ICFzaWxlbnRKU09OUGFyc2luZyAmJiBKU09OUmVxdWVzdGVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKHN0cmljdEpTT05QYXJzaW5nKSB7XG4gICAgICAgICAgaWYgKGUubmFtZSA9PT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICAgICAgdGhyb3cgQXhpb3NFcnJvci5mcm9tKGUsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVNQT05TRSwgdGhpcywgbnVsbCwgdGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIG1heEJvZHlMZW5ndGg6IC0xLFxuXG4gIGVudjoge1xuICAgIEZvcm1EYXRhOiBwbGF0Zm9ybS5jbGFzc2VzLkZvcm1EYXRhLFxuICAgIEJsb2I6IHBsYXRmb3JtLmNsYXNzZXMuQmxvYlxuICB9LFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH0sXG5cbiAgaGVhZGVyczoge1xuICAgIGNvbW1vbjoge1xuICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gICAgfVxuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzaWxlbnRKU09OUGFyc2luZzogdHJ1ZSxcbiAgZm9yY2VkSlNPTlBhcnNpbmc6IHRydWUsXG4gIGNsYXJpZnlUaW1lb3V0RXJyb3I6IGZhbHNlXG59O1xuIiwiZXhwb3J0IGNvbnN0IFZFUlNJT04gPSBcIjEuNC4wXCI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuL3RvRm9ybURhdGEuanMnO1xuXG4vKipcbiAqIEl0IGVuY29kZXMgYSBzdHJpbmcgYnkgcmVwbGFjaW5nIGFsbCBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCBpbiB0aGUgdW5yZXNlcnZlZCBzZXQgd2l0aFxuICogdGhlaXIgcGVyY2VudC1lbmNvZGVkIGVxdWl2YWxlbnRzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gZW5jb2RlLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBlbmNvZGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZW5jb2RlKHN0cikge1xuICBjb25zdCBjaGFyTWFwID0ge1xuICAgICchJzogJyUyMScsXG4gICAgXCInXCI6ICclMjcnLFxuICAgICcoJzogJyUyOCcsXG4gICAgJyknOiAnJTI5JyxcbiAgICAnfic6ICclN0UnLFxuICAgICclMjAnOiAnKycsXG4gICAgJyUwMCc6ICdcXHgwMCdcbiAgfTtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoL1shJygpfl18JTIwfCUwMC9nLCBmdW5jdGlvbiByZXBsYWNlcihtYXRjaCkge1xuICAgIHJldHVybiBjaGFyTWFwW21hdGNoXTtcbiAgfSk7XG59XG5cbi8qKlxuICogSXQgdGFrZXMgYSBwYXJhbXMgb2JqZWN0IGFuZCBjb252ZXJ0cyBpdCB0byBhIEZvcm1EYXRhIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgdG8gYmUgY29udmVydGVkIHRvIGEgRm9ybURhdGEgb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgb2JqZWN0IHBhc3NlZCB0byB0aGUgQXhpb3MgY29uc3RydWN0b3IuXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIEF4aW9zVVJMU2VhcmNoUGFyYW1zKHBhcmFtcywgb3B0aW9ucykge1xuICB0aGlzLl9wYWlycyA9IFtdO1xuXG4gIHBhcmFtcyAmJiB0b0Zvcm1EYXRhKHBhcmFtcywgdGhpcywgb3B0aW9ucyk7XG59XG5cbmNvbnN0IHByb3RvdHlwZSA9IEF4aW9zVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZTtcblxucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIGFwcGVuZChuYW1lLCB2YWx1ZSkge1xuICB0aGlzLl9wYWlycy5wdXNoKFtuYW1lLCB2YWx1ZV0pO1xufTtcblxucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoZW5jb2Rlcikge1xuICBjb25zdCBfZW5jb2RlID0gZW5jb2RlciA/IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGVuY29kZXIuY2FsbCh0aGlzLCB2YWx1ZSwgZW5jb2RlKTtcbiAgfSA6IGVuY29kZTtcblxuICByZXR1cm4gdGhpcy5fcGFpcnMubWFwKGZ1bmN0aW9uIGVhY2gocGFpcikge1xuICAgIHJldHVybiBfZW5jb2RlKHBhaXJbMF0pICsgJz0nICsgX2VuY29kZShwYWlyWzFdKTtcbiAgfSwgJycpLmpvaW4oJyYnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF4aW9zVVJMU2VhcmNoUGFyYW1zO1xuIiwiY29uc3QgSHR0cFN0YXR1c0NvZGUgPSB7XG4gIENvbnRpbnVlOiAxMDAsXG4gIFN3aXRjaGluZ1Byb3RvY29sczogMTAxLFxuICBQcm9jZXNzaW5nOiAxMDIsXG4gIEVhcmx5SGludHM6IDEwMyxcbiAgT2s6IDIwMCxcbiAgQ3JlYXRlZDogMjAxLFxuICBBY2NlcHRlZDogMjAyLFxuICBOb25BdXRob3JpdGF0aXZlSW5mb3JtYXRpb246IDIwMyxcbiAgTm9Db250ZW50OiAyMDQsXG4gIFJlc2V0Q29udGVudDogMjA1LFxuICBQYXJ0aWFsQ29udGVudDogMjA2LFxuICBNdWx0aVN0YXR1czogMjA3LFxuICBBbHJlYWR5UmVwb3J0ZWQ6IDIwOCxcbiAgSW1Vc2VkOiAyMjYsXG4gIE11bHRpcGxlQ2hvaWNlczogMzAwLFxuICBNb3ZlZFBlcm1hbmVudGx5OiAzMDEsXG4gIEZvdW5kOiAzMDIsXG4gIFNlZU90aGVyOiAzMDMsXG4gIE5vdE1vZGlmaWVkOiAzMDQsXG4gIFVzZVByb3h5OiAzMDUsXG4gIFVudXNlZDogMzA2LFxuICBUZW1wb3JhcnlSZWRpcmVjdDogMzA3LFxuICBQZXJtYW5lbnRSZWRpcmVjdDogMzA4LFxuICBCYWRSZXF1ZXN0OiA0MDAsXG4gIFVuYXV0aG9yaXplZDogNDAxLFxuICBQYXltZW50UmVxdWlyZWQ6IDQwMixcbiAgRm9yYmlkZGVuOiA0MDMsXG4gIE5vdEZvdW5kOiA0MDQsXG4gIE1ldGhvZE5vdEFsbG93ZWQ6IDQwNSxcbiAgTm90QWNjZXB0YWJsZTogNDA2LFxuICBQcm94eUF1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IDQwNyxcbiAgUmVxdWVzdFRpbWVvdXQ6IDQwOCxcbiAgQ29uZmxpY3Q6IDQwOSxcbiAgR29uZTogNDEwLFxuICBMZW5ndGhSZXF1aXJlZDogNDExLFxuICBQcmVjb25kaXRpb25GYWlsZWQ6IDQxMixcbiAgUGF5bG9hZFRvb0xhcmdlOiA0MTMsXG4gIFVyaVRvb0xvbmc6IDQxNCxcbiAgVW5zdXBwb3J0ZWRNZWRpYVR5cGU6IDQxNSxcbiAgUmFuZ2VOb3RTYXRpc2ZpYWJsZTogNDE2LFxuICBFeHBlY3RhdGlvbkZhaWxlZDogNDE3LFxuICBJbUFUZWFwb3Q6IDQxOCxcbiAgTWlzZGlyZWN0ZWRSZXF1ZXN0OiA0MjEsXG4gIFVucHJvY2Vzc2FibGVFbnRpdHk6IDQyMixcbiAgTG9ja2VkOiA0MjMsXG4gIEZhaWxlZERlcGVuZGVuY3k6IDQyNCxcbiAgVG9vRWFybHk6IDQyNSxcbiAgVXBncmFkZVJlcXVpcmVkOiA0MjYsXG4gIFByZWNvbmRpdGlvblJlcXVpcmVkOiA0MjgsXG4gIFRvb01hbnlSZXF1ZXN0czogNDI5LFxuICBSZXF1ZXN0SGVhZGVyRmllbGRzVG9vTGFyZ2U6IDQzMSxcbiAgVW5hdmFpbGFibGVGb3JMZWdhbFJlYXNvbnM6IDQ1MSxcbiAgSW50ZXJuYWxTZXJ2ZXJFcnJvcjogNTAwLFxuICBOb3RJbXBsZW1lbnRlZDogNTAxLFxuICBCYWRHYXRld2F5OiA1MDIsXG4gIFNlcnZpY2VVbmF2YWlsYWJsZTogNTAzLFxuICBHYXRld2F5VGltZW91dDogNTA0LFxuICBIdHRwVmVyc2lvbk5vdFN1cHBvcnRlZDogNTA1LFxuICBWYXJpYW50QWxzb05lZ290aWF0ZXM6IDUwNixcbiAgSW5zdWZmaWNpZW50U3RvcmFnZTogNTA3LFxuICBMb29wRGV0ZWN0ZWQ6IDUwOCxcbiAgTm90RXh0ZW5kZWQ6IDUxMCxcbiAgTmV0d29ya0F1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IDUxMSxcbn07XG5cbk9iamVjdC5lbnRyaWVzKEh0dHBTdGF0dXNDb2RlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgSHR0cFN0YXR1c0NvZGVbdmFsdWVdID0ga2V5O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEh0dHBTdGF0dXNDb2RlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmd1bWVudHMpO1xuICB9O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zVVJMU2VhcmNoUGFyYW1zIGZyb20gJy4uL2hlbHBlcnMvQXhpb3NVUkxTZWFyY2hQYXJhbXMuanMnO1xuXG4vKipcbiAqIEl0IHJlcGxhY2VzIGFsbCBpbnN0YW5jZXMgb2YgdGhlIGNoYXJhY3RlcnMgYDpgLCBgJGAsIGAsYCwgYCtgLCBgW2AsIGFuZCBgXWAgd2l0aCB0aGVpclxuICogVVJJIGVuY29kZWQgY291bnRlcnBhcnRzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbCBUaGUgdmFsdWUgdG8gYmUgZW5jb2RlZC5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZW5jb2RlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEBwYXJhbSB7P29iamVjdH0gb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBvcHRpb25zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgXG4gIGNvbnN0IF9lbmNvZGUgPSBvcHRpb25zICYmIG9wdGlvbnMuZW5jb2RlIHx8IGVuY29kZTtcblxuICBjb25zdCBzZXJpYWxpemVGbiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5zZXJpYWxpemU7XG5cbiAgbGV0IHNlcmlhbGl6ZWRQYXJhbXM7XG5cbiAgaWYgKHNlcmlhbGl6ZUZuKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHNlcmlhbGl6ZUZuKHBhcmFtcywgb3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykgP1xuICAgICAgcGFyYW1zLnRvU3RyaW5nKCkgOlxuICAgICAgbmV3IEF4aW9zVVJMU2VhcmNoUGFyYW1zKHBhcmFtcywgb3B0aW9ucykudG9TdHJpbmcoX2VuY29kZSk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIGNvbnN0IGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZihcIiNcIik7XG5cbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXRmb3JtLmlzU3RhbmRhcmRCcm93c2VyRW52ID9cblxuLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgY29uc3QgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCkgOlxuXG4vLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBJdCB0YWtlcyBhIHN0cmluZyBsaWtlIGBmb29beF1beV1bel1gIGFuZCByZXR1cm5zIGFuIGFycmF5IGxpa2UgYFsnZm9vJywgJ3gnLCAneScsICd6J11cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKlxuICogQHJldHVybnMgQW4gYXJyYXkgb2Ygc3RyaW5ncy5cbiAqL1xuZnVuY3Rpb24gcGFyc2VQcm9wUGF0aChuYW1lKSB7XG4gIC8vIGZvb1t4XVt5XVt6XVxuICAvLyBmb28ueC55LnpcbiAgLy8gZm9vLXgteS16XG4gIC8vIGZvbyB4IHkgelxuICByZXR1cm4gdXRpbHMubWF0Y2hBbGwoL1xcdyt8XFxbKFxcdyopXS9nLCBuYW1lKS5tYXAobWF0Y2ggPT4ge1xuICAgIHJldHVybiBtYXRjaFswXSA9PT0gJ1tdJyA/ICcnIDogbWF0Y2hbMV0gfHwgbWF0Y2hbMF07XG4gIH0pO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gYXJyYXkgdG8gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyIC0gVGhlIGFycmF5IHRvIGNvbnZlcnQgdG8gYW4gb2JqZWN0LlxuICpcbiAqIEByZXR1cm5zIEFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIGtleXMgYW5kIHZhbHVlcyBhcyB0aGUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9PYmplY3QoYXJyKSB7XG4gIGNvbnN0IG9iaiA9IHt9O1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYXJyKTtcbiAgbGV0IGk7XG4gIGNvbnN0IGxlbiA9IGtleXMubGVuZ3RoO1xuICBsZXQga2V5O1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBrZXkgPSBrZXlzW2ldO1xuICAgIG9ialtrZXldID0gYXJyW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIEZvcm1EYXRhIG9iamVjdCBhbmQgcmV0dXJucyBhIEphdmFTY3JpcHQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1EYXRhIFRoZSBGb3JtRGF0YSBvYmplY3QgdG8gY29udmVydCB0byBKU09OLlxuICpcbiAqIEByZXR1cm5zIHtPYmplY3Q8c3RyaW5nLCBhbnk+IHwgbnVsbH0gVGhlIGNvbnZlcnRlZCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGZvcm1EYXRhVG9KU09OKGZvcm1EYXRhKSB7XG4gIGZ1bmN0aW9uIGJ1aWxkUGF0aChwYXRoLCB2YWx1ZSwgdGFyZ2V0LCBpbmRleCkge1xuICAgIGxldCBuYW1lID0gcGF0aFtpbmRleCsrXTtcbiAgICBjb25zdCBpc051bWVyaWNLZXkgPSBOdW1iZXIuaXNGaW5pdGUoK25hbWUpO1xuICAgIGNvbnN0IGlzTGFzdCA9IGluZGV4ID49IHBhdGgubGVuZ3RoO1xuICAgIG5hbWUgPSAhbmFtZSAmJiB1dGlscy5pc0FycmF5KHRhcmdldCkgPyB0YXJnZXQubGVuZ3RoIDogbmFtZTtcblxuICAgIGlmIChpc0xhc3QpIHtcbiAgICAgIGlmICh1dGlscy5oYXNPd25Qcm9wKHRhcmdldCwgbmFtZSkpIHtcbiAgICAgICAgdGFyZ2V0W25hbWVdID0gW3RhcmdldFtuYW1lXSwgdmFsdWVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0W25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAhaXNOdW1lcmljS2V5O1xuICAgIH1cblxuICAgIGlmICghdGFyZ2V0W25hbWVdIHx8ICF1dGlscy5pc09iamVjdCh0YXJnZXRbbmFtZV0pKSB7XG4gICAgICB0YXJnZXRbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBidWlsZFBhdGgocGF0aCwgdmFsdWUsIHRhcmdldFtuYW1lXSwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCAmJiB1dGlscy5pc0FycmF5KHRhcmdldFtuYW1lXSkpIHtcbiAgICAgIHRhcmdldFtuYW1lXSA9IGFycmF5VG9PYmplY3QodGFyZ2V0W25hbWVdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIWlzTnVtZXJpY0tleTtcbiAgfVxuXG4gIGlmICh1dGlscy5pc0Zvcm1EYXRhKGZvcm1EYXRhKSAmJiB1dGlscy5pc0Z1bmN0aW9uKGZvcm1EYXRhLmVudHJpZXMpKSB7XG4gICAgY29uc3Qgb2JqID0ge307XG5cbiAgICB1dGlscy5mb3JFYWNoRW50cnkoZm9ybURhdGEsIChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgYnVpbGRQYXRoKHBhcnNlUHJvcFBhdGgobmFtZSksIHZhbHVlLCBvYmosIDApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtRGF0YVRvSlNPTjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGQrXFwtLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvc1xuICpcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvcywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQXhpb3NFcnJvcihwYXlsb2FkKSB7XG4gIHJldHVybiB1dGlscy5pc09iamVjdChwYXlsb2FkKSAmJiAocGF5bG9hZC5pc0F4aW9zRXJyb3IgPT09IHRydWUpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBwbGF0Zm9ybS5pc1N0YW5kYXJkQnJvd3NlckVudiA/XG5cbi8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgY29uc3QgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgY29uc3QgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGV0IG9yaWdpblVSTDtcblxuICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICBsZXQgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgY29uc3QgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKTtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzdHJpY3RcbmV4cG9ydCBkZWZhdWx0IG51bGw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcblxuLy8gUmF3QXhpb3NIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xuY29uc3QgaWdub3JlRHVwbGljYXRlT2YgPSB1dGlscy50b09iamVjdFNldChbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXSk7XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSByYXdIZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCByYXdIZWFkZXJzID0+IHtcbiAgY29uc3QgcGFyc2VkID0ge307XG4gIGxldCBrZXk7XG4gIGxldCB2YWw7XG4gIGxldCBpO1xuXG4gIHJhd0hlYWRlcnMgJiYgcmF3SGVhZGVycy5zcGxpdCgnXFxuJykuZm9yRWFjaChmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSBsaW5lLnN1YnN0cmluZygwLCBpKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSBsaW5lLnN1YnN0cmluZyhpICsgMSkudHJpbSgpO1xuXG4gICAgaWYgKCFrZXkgfHwgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mW2tleV0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0pIHtcbiAgICAgICAgcGFyc2VkW2tleV0ucHVzaCh2YWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBbdmFsXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZVByb3RvY29sKHVybCkge1xuICBjb25zdCBtYXRjaCA9IC9eKFstK1xcd117MSwyNX0pKDo/XFwvXFwvfDopLy5leGVjKHVybCk7XG4gIHJldHVybiBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDYWxjdWxhdGUgZGF0YSBtYXhSYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gW3NhbXBsZXNDb3VudD0gMTBdXG4gKiBAcGFyYW0ge051bWJlcn0gW21pbj0gMTAwMF1cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gc3BlZWRvbWV0ZXIoc2FtcGxlc0NvdW50LCBtaW4pIHtcbiAgc2FtcGxlc0NvdW50ID0gc2FtcGxlc0NvdW50IHx8IDEwO1xuICBjb25zdCBieXRlcyA9IG5ldyBBcnJheShzYW1wbGVzQ291bnQpO1xuICBjb25zdCB0aW1lc3RhbXBzID0gbmV3IEFycmF5KHNhbXBsZXNDb3VudCk7XG4gIGxldCBoZWFkID0gMDtcbiAgbGV0IHRhaWwgPSAwO1xuICBsZXQgZmlyc3RTYW1wbGVUUztcblxuICBtaW4gPSBtaW4gIT09IHVuZGVmaW5lZCA/IG1pbiA6IDEwMDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHB1c2goY2h1bmtMZW5ndGgpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuXG4gICAgY29uc3Qgc3RhcnRlZEF0ID0gdGltZXN0YW1wc1t0YWlsXTtcblxuICAgIGlmICghZmlyc3RTYW1wbGVUUykge1xuICAgICAgZmlyc3RTYW1wbGVUUyA9IG5vdztcbiAgICB9XG5cbiAgICBieXRlc1toZWFkXSA9IGNodW5rTGVuZ3RoO1xuICAgIHRpbWVzdGFtcHNbaGVhZF0gPSBub3c7XG5cbiAgICBsZXQgaSA9IHRhaWw7XG4gICAgbGV0IGJ5dGVzQ291bnQgPSAwO1xuXG4gICAgd2hpbGUgKGkgIT09IGhlYWQpIHtcbiAgICAgIGJ5dGVzQ291bnQgKz0gYnl0ZXNbaSsrXTtcbiAgICAgIGkgPSBpICUgc2FtcGxlc0NvdW50O1xuICAgIH1cblxuICAgIGhlYWQgPSAoaGVhZCArIDEpICUgc2FtcGxlc0NvdW50O1xuXG4gICAgaWYgKGhlYWQgPT09IHRhaWwpIHtcbiAgICAgIHRhaWwgPSAodGFpbCArIDEpICUgc2FtcGxlc0NvdW50O1xuICAgIH1cblxuICAgIGlmIChub3cgLSBmaXJzdFNhbXBsZVRTIDwgbWluKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFzc2VkID0gc3RhcnRlZEF0ICYmIG5vdyAtIHN0YXJ0ZWRBdDtcblxuICAgIHJldHVybiBwYXNzZWQgPyBNYXRoLnJvdW5kKGJ5dGVzQ291bnQgKiAxMDAwIC8gcGFzc2VkKSA6IHVuZGVmaW5lZDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3BlZWRvbWV0ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbi8vIHRlbXBvcmFyeSBob3RmaXggdG8gYXZvaWQgY2lyY3VsYXIgcmVmZXJlbmNlcyB1bnRpbCBBeGlvc1VSTFNlYXJjaFBhcmFtcyBpcyByZWZhY3RvcmVkXG5pbXBvcnQgUGxhdGZvcm1Gb3JtRGF0YSBmcm9tICcuLi9wbGF0Zm9ybS9ub2RlL2NsYXNzZXMvRm9ybURhdGEuanMnO1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGdpdmVuIHRoaW5nIGlzIGEgYXJyYXkgb3IganMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aGluZyAtIFRoZSBvYmplY3Qgb3IgYXJyYXkgdG8gYmUgdmlzaXRlZC5cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNWaXNpdGFibGUodGhpbmcpIHtcbiAgcmV0dXJuIHV0aWxzLmlzUGxhaW5PYmplY3QodGhpbmcpIHx8IHV0aWxzLmlzQXJyYXkodGhpbmcpO1xufVxuXG4vKipcbiAqIEl0IHJlbW92ZXMgdGhlIGJyYWNrZXRzIGZyb20gdGhlIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IG9mIHRoZSBwYXJhbWV0ZXIuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gdGhlIGtleSB3aXRob3V0IHRoZSBicmFja2V0cy5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlQnJhY2tldHMoa2V5KSB7XG4gIHJldHVybiB1dGlscy5lbmRzV2l0aChrZXksICdbXScpID8ga2V5LnNsaWNlKDAsIC0yKSA6IGtleTtcbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIHBhdGgsIGEga2V5LCBhbmQgYSBib29sZWFuLCBhbmQgcmV0dXJucyBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gVGhlIHBhdGggdG8gdGhlIGN1cnJlbnQga2V5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgb2YgdGhlIGN1cnJlbnQgb2JqZWN0IGJlaW5nIGl0ZXJhdGVkIG92ZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gZG90cyAtIElmIHRydWUsIHRoZSBrZXkgd2lsbCBiZSByZW5kZXJlZCB3aXRoIGRvdHMgaW5zdGVhZCBvZiBicmFja2V0cy5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcGF0aCB0byB0aGUgY3VycmVudCBrZXkuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlcktleShwYXRoLCBrZXksIGRvdHMpIHtcbiAgaWYgKCFwYXRoKSByZXR1cm4ga2V5O1xuICByZXR1cm4gcGF0aC5jb25jYXQoa2V5KS5tYXAoZnVuY3Rpb24gZWFjaCh0b2tlbiwgaSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHRva2VuID0gcmVtb3ZlQnJhY2tldHModG9rZW4pO1xuICAgIHJldHVybiAhZG90cyAmJiBpID8gJ1snICsgdG9rZW4gKyAnXScgOiB0b2tlbjtcbiAgfSkuam9pbihkb3RzID8gJy4nIDogJycpO1xufVxuXG4vKipcbiAqIElmIHRoZSBhcnJheSBpcyBhbiBhcnJheSBhbmQgbm9uZSBvZiBpdHMgZWxlbWVudHMgYXJlIHZpc2l0YWJsZSwgdGhlbiBpdCdzIGEgZmxhdCBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PGFueT59IGFyciAtIFRoZSBhcnJheSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0ZsYXRBcnJheShhcnIpIHtcbiAgcmV0dXJuIHV0aWxzLmlzQXJyYXkoYXJyKSAmJiAhYXJyLnNvbWUoaXNWaXNpdGFibGUpO1xufVxuXG5jb25zdCBwcmVkaWNhdGVzID0gdXRpbHMudG9GbGF0T2JqZWN0KHV0aWxzLCB7fSwgbnVsbCwgZnVuY3Rpb24gZmlsdGVyKHByb3ApIHtcbiAgcmV0dXJuIC9eaXNbQS1aXS8udGVzdChwcm9wKTtcbn0pO1xuXG4vKipcbiAqIENvbnZlcnQgYSBkYXRhIG9iamVjdCB0byBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7P09iamVjdH0gW2Zvcm1EYXRhXVxuICogQHBhcmFtIHs/T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLnZpc2l0b3JdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm1ldGFUb2tlbnMgPSB0cnVlXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5kb3RzID0gZmFsc2VdXG4gKiBAcGFyYW0gez9Cb29sZWFufSBbb3B0aW9ucy5pbmRleGVzID0gZmFsc2VdXG4gKlxuICogQHJldHVybnMge09iamVjdH1cbiAqKi9cblxuLyoqXG4gKiBJdCBjb252ZXJ0cyBhbiBvYmplY3QgaW50byBhIEZvcm1EYXRhIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0PGFueSwgYW55Pn0gb2JqIC0gVGhlIG9iamVjdCB0byBjb252ZXJ0IHRvIGZvcm0gZGF0YS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtRGF0YSAtIFRoZSBGb3JtRGF0YSBvYmplY3QgdG8gYXBwZW5kIHRvLlxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBvcHRpb25zXG4gKlxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gdG9Gb3JtRGF0YShvYmosIGZvcm1EYXRhLCBvcHRpb25zKSB7XG4gIGlmICghdXRpbHMuaXNPYmplY3Qob2JqKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RhcmdldCBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGZvcm1EYXRhID0gZm9ybURhdGEgfHwgbmV3IChQbGF0Zm9ybUZvcm1EYXRhIHx8IEZvcm1EYXRhKSgpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBvcHRpb25zID0gdXRpbHMudG9GbGF0T2JqZWN0KG9wdGlvbnMsIHtcbiAgICBtZXRhVG9rZW5zOiB0cnVlLFxuICAgIGRvdHM6IGZhbHNlLFxuICAgIGluZGV4ZXM6IGZhbHNlXG4gIH0sIGZhbHNlLCBmdW5jdGlvbiBkZWZpbmVkKG9wdGlvbiwgc291cmNlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVxLW51bGwsZXFlcWVxXG4gICAgcmV0dXJuICF1dGlscy5pc1VuZGVmaW5lZChzb3VyY2Vbb3B0aW9uXSk7XG4gIH0pO1xuXG4gIGNvbnN0IG1ldGFUb2tlbnMgPSBvcHRpb25zLm1ldGFUb2tlbnM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICBjb25zdCB2aXNpdG9yID0gb3B0aW9ucy52aXNpdG9yIHx8IGRlZmF1bHRWaXNpdG9yO1xuICBjb25zdCBkb3RzID0gb3B0aW9ucy5kb3RzO1xuICBjb25zdCBpbmRleGVzID0gb3B0aW9ucy5pbmRleGVzO1xuICBjb25zdCBfQmxvYiA9IG9wdGlvbnMuQmxvYiB8fCB0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgQmxvYjtcbiAgY29uc3QgdXNlQmxvYiA9IF9CbG9iICYmIHV0aWxzLmlzU3BlY0NvbXBsaWFudEZvcm0oZm9ybURhdGEpO1xuXG4gIGlmICghdXRpbHMuaXNGdW5jdGlvbih2aXNpdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3Zpc2l0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybiAnJztcblxuICAgIGlmICh1dGlscy5pc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWUudG9JU09TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBpZiAoIXVzZUJsb2IgJiYgdXRpbHMuaXNCbG9iKHZhbHVlKSkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ0Jsb2IgaXMgbm90IHN1cHBvcnRlZC4gVXNlIGEgQnVmZmVyIGluc3RlYWQuJyk7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXIodmFsdWUpIHx8IHV0aWxzLmlzVHlwZWRBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB1c2VCbG9iICYmIHR5cGVvZiBCbG9iID09PSAnZnVuY3Rpb24nID8gbmV3IEJsb2IoW3ZhbHVlXSkgOiBCdWZmZXIuZnJvbSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgdmlzaXRvci5cbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IGtleVxuICAgKiBAcGFyYW0ge0FycmF5PFN0cmluZ3xOdW1iZXI+fSBwYXRoXG4gICAqIEB0aGlzIHtGb3JtRGF0YX1cbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59IHJldHVybiB0cnVlIHRvIHZpc2l0IHRoZSBlYWNoIHByb3Agb2YgdGhlIHZhbHVlIHJlY3Vyc2l2ZWx5XG4gICAqL1xuICBmdW5jdGlvbiBkZWZhdWx0VmlzaXRvcih2YWx1ZSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IGFyciA9IHZhbHVlO1xuXG4gICAgaWYgKHZhbHVlICYmICFwYXRoICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICh1dGlscy5lbmRzV2l0aChrZXksICd7fScpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBrZXkgPSBtZXRhVG9rZW5zID8ga2V5IDoga2V5LnNsaWNlKDAsIC0yKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgKHV0aWxzLmlzQXJyYXkodmFsdWUpICYmIGlzRmxhdEFycmF5KHZhbHVlKSkgfHxcbiAgICAgICAgKCh1dGlscy5pc0ZpbGVMaXN0KHZhbHVlKSB8fCB1dGlscy5lbmRzV2l0aChrZXksICdbXScpKSAmJiAoYXJyID0gdXRpbHMudG9BcnJheSh2YWx1ZSkpXG4gICAgICAgICkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGtleSA9IHJlbW92ZUJyYWNrZXRzKGtleSk7XG5cbiAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gZWFjaChlbCwgaW5kZXgpIHtcbiAgICAgICAgICAhKHV0aWxzLmlzVW5kZWZpbmVkKGVsKSB8fCBlbCA9PT0gbnVsbCkgJiYgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgICAgICAgICBpbmRleGVzID09PSB0cnVlID8gcmVuZGVyS2V5KFtrZXldLCBpbmRleCwgZG90cykgOiAoaW5kZXhlcyA9PT0gbnVsbCA/IGtleSA6IGtleSArICdbXScpLFxuICAgICAgICAgICAgY29udmVydFZhbHVlKGVsKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzVmlzaXRhYmxlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9ybURhdGEuYXBwZW5kKHJlbmRlcktleShwYXRoLCBrZXksIGRvdHMpLCBjb252ZXJ0VmFsdWUodmFsdWUpKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHN0YWNrID0gW107XG5cbiAgY29uc3QgZXhwb3NlZEhlbHBlcnMgPSBPYmplY3QuYXNzaWduKHByZWRpY2F0ZXMsIHtcbiAgICBkZWZhdWx0VmlzaXRvcixcbiAgICBjb252ZXJ0VmFsdWUsXG4gICAgaXNWaXNpdGFibGVcbiAgfSk7XG5cbiAgZnVuY3Rpb24gYnVpbGQodmFsdWUsIHBhdGgpIHtcbiAgICBpZiAodXRpbHMuaXNVbmRlZmluZWQodmFsdWUpKSByZXR1cm47XG5cbiAgICBpZiAoc3RhY2suaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XG4gICAgICB0aHJvdyBFcnJvcignQ2lyY3VsYXIgcmVmZXJlbmNlIGRldGVjdGVkIGluICcgKyBwYXRoLmpvaW4oJy4nKSk7XG4gICAgfVxuXG4gICAgc3RhY2sucHVzaCh2YWx1ZSk7XG5cbiAgICB1dGlscy5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiBlYWNoKGVsLCBrZXkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9ICEodXRpbHMuaXNVbmRlZmluZWQoZWwpIHx8IGVsID09PSBudWxsKSAmJiB2aXNpdG9yLmNhbGwoXG4gICAgICAgIGZvcm1EYXRhLCBlbCwgdXRpbHMuaXNTdHJpbmcoa2V5KSA/IGtleS50cmltKCkgOiBrZXksIHBhdGgsIGV4cG9zZWRIZWxwZXJzXG4gICAgICApO1xuXG4gICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgIGJ1aWxkKGVsLCBwYXRoID8gcGF0aC5jb25jYXQoa2V5KSA6IFtrZXldKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHN0YWNrLnBvcCgpO1xuICB9XG5cbiAgaWYgKCF1dGlscy5pc09iamVjdChvYmopKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZGF0YSBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICB9XG5cbiAgYnVpbGQob2JqKTtcblxuICByZXR1cm4gZm9ybURhdGE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvRm9ybURhdGE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuL3RvRm9ybURhdGEuanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9VUkxFbmNvZGVkRm9ybShkYXRhLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b0Zvcm1EYXRhKGRhdGEsIG5ldyBwbGF0Zm9ybS5jbGFzc2VzLlVSTFNlYXJjaFBhcmFtcygpLCBPYmplY3QuYXNzaWduKHtcbiAgICB2aXNpdG9yOiBmdW5jdGlvbih2YWx1ZSwga2V5LCBwYXRoLCBoZWxwZXJzKSB7XG4gICAgICBpZiAocGxhdGZvcm0uaXNOb2RlICYmIHV0aWxzLmlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgICB0aGlzLmFwcGVuZChrZXksIHZhbHVlLnRvU3RyaW5nKCdiYXNlNjQnKSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhlbHBlcnMuZGVmYXVsdFZpc2l0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sIG9wdGlvbnMpKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtWRVJTSU9OfSBmcm9tICcuLi9lbnYvZGF0YS5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuXG5jb25zdCB2YWxpZGF0b3JzID0ge307XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5bJ29iamVjdCcsICdib29sZWFuJywgJ251bWJlcicsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnc3ltYm9sJ10uZm9yRWFjaCgodHlwZSwgaSkgPT4ge1xuICB2YWxpZGF0b3JzW3R5cGVdID0gZnVuY3Rpb24gdmFsaWRhdG9yKHRoaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gdHlwZSB8fCAnYScgKyAoaSA8IDEgPyAnbiAnIDogJyAnKSArIHR5cGU7XG4gIH07XG59KTtcblxuY29uc3QgZGVwcmVjYXRlZFdhcm5pbmdzID0ge307XG5cbi8qKlxuICogVHJhbnNpdGlvbmFsIG9wdGlvbiB2YWxpZGF0b3JcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufGJvb2xlYW4/fSB2YWxpZGF0b3IgLSBzZXQgdG8gZmFsc2UgaWYgdGhlIHRyYW5zaXRpb25hbCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZFxuICogQHBhcmFtIHtzdHJpbmc/fSB2ZXJzaW9uIC0gZGVwcmVjYXRlZCB2ZXJzaW9uIC8gcmVtb3ZlZCBzaW5jZSB2ZXJzaW9uXG4gKiBAcGFyYW0ge3N0cmluZz99IG1lc3NhZ2UgLSBzb21lIG1lc3NhZ2Ugd2l0aCBhZGRpdGlvbmFsIGluZm9cbiAqXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbnZhbGlkYXRvcnMudHJhbnNpdGlvbmFsID0gZnVuY3Rpb24gdHJhbnNpdGlvbmFsKHZhbGlkYXRvciwgdmVyc2lvbiwgbWVzc2FnZSkge1xuICBmdW5jdGlvbiBmb3JtYXRNZXNzYWdlKG9wdCwgZGVzYykge1xuICAgIHJldHVybiAnW0F4aW9zIHYnICsgVkVSU0lPTiArICddIFRyYW5zaXRpb25hbCBvcHRpb24gXFwnJyArIG9wdCArICdcXCcnICsgZGVzYyArIChtZXNzYWdlID8gJy4gJyArIG1lc3NhZ2UgOiAnJyk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICByZXR1cm4gKHZhbHVlLCBvcHQsIG9wdHMpID0+IHtcbiAgICBpZiAodmFsaWRhdG9yID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoXG4gICAgICAgIGZvcm1hdE1lc3NhZ2Uob3B0LCAnIGhhcyBiZWVuIHJlbW92ZWQnICsgKHZlcnNpb24gPyAnIGluICcgKyB2ZXJzaW9uIDogJycpKSxcbiAgICAgICAgQXhpb3NFcnJvci5FUlJfREVQUkVDQVRFRFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodmVyc2lvbiAmJiAhZGVwcmVjYXRlZFdhcm5pbmdzW29wdF0pIHtcbiAgICAgIGRlcHJlY2F0ZWRXYXJuaW5nc1tvcHRdID0gdHJ1ZTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGZvcm1hdE1lc3NhZ2UoXG4gICAgICAgICAgb3B0LFxuICAgICAgICAgICcgaGFzIGJlZW4gZGVwcmVjYXRlZCBzaW5jZSB2JyArIHZlcnNpb24gKyAnIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5lYXIgZnV0dXJlJ1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0b3IgPyB2YWxpZGF0b3IodmFsdWUsIG9wdCwgb3B0cykgOiB0cnVlO1xuICB9O1xufTtcblxuLyoqXG4gKiBBc3NlcnQgb2JqZWN0J3MgcHJvcGVydGllcyB0eXBlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fSBzY2hlbWFcbiAqIEBwYXJhbSB7Ym9vbGVhbj99IGFsbG93VW5rbm93blxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gYXNzZXJ0T3B0aW9ucyhvcHRpb25zLCBzY2hlbWEsIGFsbG93VW5rbm93bikge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ29wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3QnLCBBeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OX1ZBTFVFKTtcbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XG4gIGxldCBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgY29uc3Qgb3B0ID0ga2V5c1tpXTtcbiAgICBjb25zdCB2YWxpZGF0b3IgPSBzY2hlbWFbb3B0XTtcbiAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbnNbb3B0XTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdGlvbnMpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignb3B0aW9uICcgKyBvcHQgKyAnIG11c3QgYmUgJyArIHJlc3VsdCwgQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTl9WQUxVRSk7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFsbG93VW5rbm93biAhPT0gdHJ1ZSkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ1Vua25vd24gb3B0aW9uICcgKyBvcHQsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT04pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFzc2VydE9wdGlvbnMsXG4gIHZhbGlkYXRvcnNcbn07XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0IGRlZmF1bHQgdHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnID8gQmxvYiA6IG51bGxcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgdHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJyA/IEZvcm1EYXRhIDogbnVsbDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEF4aW9zVVJMU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvQXhpb3NVUkxTZWFyY2hQYXJhbXMuanMnO1xuZXhwb3J0IGRlZmF1bHQgdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgPyBVUkxTZWFyY2hQYXJhbXMgOiBBeGlvc1VSTFNlYXJjaFBhcmFtcztcbiIsImltcG9ydCBVUkxTZWFyY2hQYXJhbXMgZnJvbSAnLi9jbGFzc2VzL1VSTFNlYXJjaFBhcmFtcy5qcydcbmltcG9ydCBGb3JtRGF0YSBmcm9tICcuL2NsYXNzZXMvRm9ybURhdGEuanMnXG5pbXBvcnQgQmxvYiBmcm9tICcuL2NsYXNzZXMvQmxvYi5qcydcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGlzU3RhbmRhcmRCcm93c2VyRW52ID0gKCgpID0+IHtcbiAgbGV0IHByb2R1Y3Q7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAoXG4gICAgKHByb2R1Y3QgPSBuYXZpZ2F0b3IucHJvZHVjdCkgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICBwcm9kdWN0ID09PSAnTmF0aXZlU2NyaXB0JyB8fFxuICAgIHByb2R1Y3QgPT09ICdOUycpXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xufSkoKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgd2ViV29ya2VyIGVudmlyb25tZW50XG4gKlxuICogQWx0aG91Z2ggdGhlIGBpc1N0YW5kYXJkQnJvd3NlckVudmAgbWV0aG9kIGluZGljYXRlcyB0aGF0XG4gKiBgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXJgLCB0aGUgV2ViV29ya2VyIHdpbGwgc3RpbGwgYmVcbiAqIGZpbHRlcmVkIG91dCBkdWUgdG8gaXRzIGp1ZGdtZW50IHN0YW5kYXJkXG4gKiBgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ2AuXG4gKiBUaGlzIGxlYWRzIHRvIGEgcHJvYmxlbSB3aGVuIGF4aW9zIHBvc3QgYEZvcm1EYXRhYCBpbiB3ZWJXb3JrZXJcbiAqL1xuIGNvbnN0IGlzU3RhbmRhcmRCcm93c2VyV2ViV29ya2VyRW52ID0gKCgpID0+IHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlICYmXG4gICAgdHlwZW9mIHNlbGYuaW1wb3J0U2NyaXB0cyA9PT0gJ2Z1bmN0aW9uJ1xuICApO1xufSkoKTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzQnJvd3NlcjogdHJ1ZSxcbiAgY2xhc3Nlczoge1xuICAgIFVSTFNlYXJjaFBhcmFtcyxcbiAgICBGb3JtRGF0YSxcbiAgICBCbG9iXG4gIH0sXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBpc1N0YW5kYXJkQnJvd3NlcldlYldvcmtlckVudixcbiAgcHJvdG9jb2xzOiBbJ2h0dHAnLCAnaHR0cHMnLCAnZmlsZScsICdibG9iJywgJ3VybCcsICdkYXRhJ11cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBiaW5kIGZyb20gJy4vaGVscGVycy9iaW5kLmpzJztcblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxuY29uc3Qge3RvU3RyaW5nfSA9IE9iamVjdC5wcm90b3R5cGU7XG5jb25zdCB7Z2V0UHJvdG90eXBlT2Z9ID0gT2JqZWN0O1xuXG5jb25zdCBraW5kT2YgPSAoY2FjaGUgPT4gdGhpbmcgPT4ge1xuICAgIGNvbnN0IHN0ciA9IHRvU3RyaW5nLmNhbGwodGhpbmcpO1xuICAgIHJldHVybiBjYWNoZVtzdHJdIHx8IChjYWNoZVtzdHJdID0gc3RyLnNsaWNlKDgsIC0xKS50b0xvd2VyQ2FzZSgpKTtcbn0pKE9iamVjdC5jcmVhdGUobnVsbCkpO1xuXG5jb25zdCBraW5kT2ZUZXN0ID0gKHR5cGUpID0+IHtcbiAgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuICh0aGluZykgPT4ga2luZE9mKHRoaW5nKSA9PT0gdHlwZVxufVxuXG5jb25zdCB0eXBlT2ZUZXN0ID0gdHlwZSA9PiB0aGluZyA9PiB0eXBlb2YgdGhpbmcgPT09IHR5cGU7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCB7aXNBcnJheX0gPSBBcnJheTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1VuZGVmaW5lZCA9IHR5cGVPZlRlc3QoJ3VuZGVmaW5lZCcpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwpICYmIHZhbC5jb25zdHJ1Y3RvciAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsLmNvbnN0cnVjdG9yKVxuICAgICYmIGlzRnVuY3Rpb24odmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKSAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0FycmF5QnVmZmVyID0ga2luZE9mVGVzdCgnQXJyYXlCdWZmZXInKTtcblxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIGxldCByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKGlzQXJyYXlCdWZmZXIodmFsLmJ1ZmZlcikpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNTdHJpbmcgPSB0eXBlT2ZUZXN0KCdzdHJpbmcnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0Z1bmN0aW9uID0gdHlwZU9mVGVzdCgnZnVuY3Rpb24nKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc051bWJlciA9IHR5cGVPZlRlc3QoJ251bWJlcicpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc09iamVjdCA9ICh0aGluZykgPT4gdGhpbmcgIT09IG51bGwgJiYgdHlwZW9mIHRoaW5nID09PSAnb2JqZWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJvb2xlYW5cbiAqXG4gKiBAcGFyYW0geyp9IHRoaW5nIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJvb2xlYW4sIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0Jvb2xlYW4gPSB0aGluZyA9PiB0aGluZyA9PT0gdHJ1ZSB8fCB0aGluZyA9PT0gZmFsc2U7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNQbGFpbk9iamVjdCA9ICh2YWwpID0+IHtcbiAgaWYgKGtpbmRPZih2YWwpICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKHZhbCk7XG4gIHJldHVybiAocHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZSB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKSA9PT0gbnVsbCkgJiYgIShTeW1ib2wudG9TdHJpbmdUYWcgaW4gdmFsKSAmJiAhKFN5bWJvbC5pdGVyYXRvciBpbiB2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNEYXRlID0ga2luZE9mVGVzdCgnRGF0ZScpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGaWxlID0ga2luZE9mVGVzdCgnRmlsZScpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNCbG9iID0ga2luZE9mVGVzdCgnQmxvYicpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZUxpc3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRmlsZUxpc3QgPSBraW5kT2ZUZXN0KCdGaWxlTGlzdCcpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzU3RyZWFtID0gKHZhbCkgPT4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGb3JtRGF0YSA9ICh0aGluZykgPT4ge1xuICBsZXQga2luZDtcbiAgcmV0dXJuIHRoaW5nICYmIChcbiAgICAodHlwZW9mIEZvcm1EYXRhID09PSAnZnVuY3Rpb24nICYmIHRoaW5nIGluc3RhbmNlb2YgRm9ybURhdGEpIHx8IChcbiAgICAgIGlzRnVuY3Rpb24odGhpbmcuYXBwZW5kKSAmJiAoXG4gICAgICAgIChraW5kID0ga2luZE9mKHRoaW5nKSkgPT09ICdmb3JtZGF0YScgfHxcbiAgICAgICAgLy8gZGV0ZWN0IGZvcm0tZGF0YSBpbnN0YW5jZVxuICAgICAgICAoa2luZCA9PT0gJ29iamVjdCcgJiYgaXNGdW5jdGlvbih0aGluZy50b1N0cmluZykgJiYgdGhpbmcudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgRm9ybURhdGFdJylcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzVVJMU2VhcmNoUGFyYW1zID0ga2luZE9mVGVzdCgnVVJMU2VhcmNoUGFyYW1zJyk7XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmNvbnN0IHRyaW0gPSAoc3RyKSA9PiBzdHIudHJpbSA/XG4gIHN0ci50cmltKCkgOiBzdHIucmVwbGFjZSgvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csICcnKTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2FsbE93bktleXMgPSBmYWxzZV1cbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbiwge2FsbE93bktleXMgPSBmYWxzZX0gPSB7fSkge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBpO1xuICBsZXQgbDtcblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAoaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgY29uc3Qga2V5cyA9IGFsbE93bktleXMgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopIDogT2JqZWN0LmtleXMob2JqKTtcbiAgICBjb25zdCBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgICBsZXQga2V5O1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iaiwga2V5KSB7XG4gIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgbGV0IGkgPSBrZXlzLmxlbmd0aDtcbiAgbGV0IF9rZXk7XG4gIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgX2tleSA9IGtleXNbaV07XG4gICAgaWYgKGtleSA9PT0gX2tleS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICByZXR1cm4gX2tleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IF9nbG9iYWwgPSAoKCkgPT4ge1xuICAvKmVzbGludCBuby11bmRlZjowKi9cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZ2xvYmFsVGhpcztcbiAgcmV0dXJuIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbClcbn0pKCk7XG5cbmNvbnN0IGlzQ29udGV4dERlZmluZWQgPSAoY29udGV4dCkgPT4gIWlzVW5kZWZpbmVkKGNvbnRleHQpICYmIGNvbnRleHQgIT09IF9nbG9iYWw7XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgY29uc3Qge2Nhc2VsZXNzfSA9IGlzQ29udGV4dERlZmluZWQodGhpcykgJiYgdGhpcyB8fCB7fTtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGNvbnN0IGFzc2lnblZhbHVlID0gKHZhbCwga2V5KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0S2V5ID0gY2FzZWxlc3MgJiYgZmluZEtleShyZXN1bHQsIGtleSkgfHwga2V5O1xuICAgIGlmIChpc1BsYWluT2JqZWN0KHJlc3VsdFt0YXJnZXRLZXldKSAmJiBpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJlc3VsdFt0YXJnZXRLZXldID0gbWVyZ2UocmVzdWx0W3RhcmdldEtleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJlc3VsdFt0YXJnZXRLZXldID0gbWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbCkpIHtcbiAgICAgIHJlc3VsdFt0YXJnZXRLZXldID0gdmFsLnNsaWNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFt0YXJnZXRLZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGFyZ3VtZW50c1tpXSAmJiBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFthbGxPd25LZXlzXVxuICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5jb25zdCBleHRlbmQgPSAoYSwgYiwgdGhpc0FyZywge2FsbE93bktleXN9PSB7fSkgPT4ge1xuICBmb3JFYWNoKGIsICh2YWwsIGtleSkgPT4ge1xuICAgIGlmICh0aGlzQXJnICYmIGlzRnVuY3Rpb24odmFsKSkge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9LCB7YWxsT3duS2V5c30pO1xuICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYnl0ZSBvcmRlciBtYXJrZXIuIFRoaXMgY2F0Y2hlcyBFRiBCQiBCRiAodGhlIFVURi04IEJPTSlcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCB3aXRoIEJPTVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGNvbnRlbnQgdmFsdWUgd2l0aG91dCBCT01cbiAqL1xuY29uc3Qgc3RyaXBCT00gPSAoY29udGVudCkgPT4ge1xuICBpZiAoY29udGVudC5jaGFyQ29kZUF0KDApID09PSAweEZFRkYpIHtcbiAgICBjb250ZW50ID0gY29udGVudC5zbGljZSgxKTtcbiAgfVxuICByZXR1cm4gY29udGVudDtcbn1cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge29iamVjdH0gW3Byb3BzXVxuICogQHBhcmFtIHtvYmplY3R9IFtkZXNjcmlwdG9yc11cbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuY29uc3QgaW5oZXJpdHMgPSAoY29uc3RydWN0b3IsIHN1cGVyQ29uc3RydWN0b3IsIHByb3BzLCBkZXNjcmlwdG9ycykgPT4ge1xuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ29uc3RydWN0b3IucHJvdG90eXBlLCBkZXNjcmlwdG9ycyk7XG4gIGNvbnN0cnVjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29uc3RydWN0b3IsICdzdXBlcicsIHtcbiAgICB2YWx1ZTogc3VwZXJDb25zdHJ1Y3Rvci5wcm90b3R5cGVcbiAgfSk7XG4gIHByb3BzICYmIE9iamVjdC5hc3NpZ24oY29uc3RydWN0b3IucHJvdG90eXBlLCBwcm9wcyk7XG59XG5cbi8qKlxuICogUmVzb2x2ZSBvYmplY3Qgd2l0aCBkZWVwIHByb3RvdHlwZSBjaGFpbiB0byBhIGZsYXQgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlT2JqIHNvdXJjZSBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGVzdE9ial1cbiAqIEBwYXJhbSB7RnVuY3Rpb258Qm9vbGVhbn0gW2ZpbHRlcl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtwcm9wRmlsdGVyXVxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmNvbnN0IHRvRmxhdE9iamVjdCA9IChzb3VyY2VPYmosIGRlc3RPYmosIGZpbHRlciwgcHJvcEZpbHRlcikgPT4ge1xuICBsZXQgcHJvcHM7XG4gIGxldCBpO1xuICBsZXQgcHJvcDtcbiAgY29uc3QgbWVyZ2VkID0ge307XG5cbiAgZGVzdE9iaiA9IGRlc3RPYmogfHwge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLGVxZXFlcVxuICBpZiAoc291cmNlT2JqID09IG51bGwpIHJldHVybiBkZXN0T2JqO1xuXG4gIGRvIHtcbiAgICBwcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZU9iaik7XG4gICAgaSA9IHByb3BzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tID4gMCkge1xuICAgICAgcHJvcCA9IHByb3BzW2ldO1xuICAgICAgaWYgKCghcHJvcEZpbHRlciB8fCBwcm9wRmlsdGVyKHByb3AsIHNvdXJjZU9iaiwgZGVzdE9iaikpICYmICFtZXJnZWRbcHJvcF0pIHtcbiAgICAgICAgZGVzdE9ialtwcm9wXSA9IHNvdXJjZU9ialtwcm9wXTtcbiAgICAgICAgbWVyZ2VkW3Byb3BdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgc291cmNlT2JqID0gZmlsdGVyICE9PSBmYWxzZSAmJiBnZXRQcm90b3R5cGVPZihzb3VyY2VPYmopO1xuICB9IHdoaWxlIChzb3VyY2VPYmogJiYgKCFmaWx0ZXIgfHwgZmlsdGVyKHNvdXJjZU9iaiwgZGVzdE9iaikpICYmIHNvdXJjZU9iaiAhPT0gT2JqZWN0LnByb3RvdHlwZSk7XG5cbiAgcmV0dXJuIGRlc3RPYmo7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgc3RyaW5nIGVuZHMgd2l0aCB0aGUgY2hhcmFjdGVycyBvZiBhIHNwZWNpZmllZCBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VhcmNoU3RyaW5nXG4gKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uPSAwXVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5jb25zdCBlbmRzV2l0aCA9IChzdHIsIHNlYXJjaFN0cmluZywgcG9zaXRpb24pID0+IHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHBvc2l0aW9uID4gc3RyLmxlbmd0aCkge1xuICAgIHBvc2l0aW9uID0gc3RyLmxlbmd0aDtcbiAgfVxuICBwb3NpdGlvbiAtPSBzZWFyY2hTdHJpbmcubGVuZ3RoO1xuICBjb25zdCBsYXN0SW5kZXggPSBzdHIuaW5kZXhPZihzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKTtcbiAgcmV0dXJuIGxhc3RJbmRleCAhPT0gLTEgJiYgbGFzdEluZGV4ID09PSBwb3NpdGlvbjtcbn1cblxuXG4vKipcbiAqIFJldHVybnMgbmV3IGFycmF5IGZyb20gYXJyYXkgbGlrZSBvYmplY3Qgb3IgbnVsbCBpZiBmYWlsZWRcbiAqXG4gKiBAcGFyYW0geyp9IFt0aGluZ11cbiAqXG4gKiBAcmV0dXJucyB7P0FycmF5fVxuICovXG5jb25zdCB0b0FycmF5ID0gKHRoaW5nKSA9PiB7XG4gIGlmICghdGhpbmcpIHJldHVybiBudWxsO1xuICBpZiAoaXNBcnJheSh0aGluZykpIHJldHVybiB0aGluZztcbiAgbGV0IGkgPSB0aGluZy5sZW5ndGg7XG4gIGlmICghaXNOdW1iZXIoaSkpIHJldHVybiBudWxsO1xuICBjb25zdCBhcnIgPSBuZXcgQXJyYXkoaSk7XG4gIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgYXJyW2ldID0gdGhpbmdbaV07XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxuLyoqXG4gKiBDaGVja2luZyBpZiB0aGUgVWludDhBcnJheSBleGlzdHMgYW5kIGlmIGl0IGRvZXMsIGl0IHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNoZWNrcyBpZiB0aGVcbiAqIHRoaW5nIHBhc3NlZCBpbiBpcyBhbiBpbnN0YW5jZSBvZiBVaW50OEFycmF5XG4gKlxuICogQHBhcmFtIHtUeXBlZEFycmF5fVxuICpcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbmNvbnN0IGlzVHlwZWRBcnJheSA9IChUeXBlZEFycmF5ID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgcmV0dXJuIHRoaW5nID0+IHtcbiAgICByZXR1cm4gVHlwZWRBcnJheSAmJiB0aGluZyBpbnN0YW5jZW9mIFR5cGVkQXJyYXk7XG4gIH07XG59KSh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2V0UHJvdG90eXBlT2YoVWludDhBcnJheSkpO1xuXG4vKipcbiAqIEZvciBlYWNoIGVudHJ5IGluIHRoZSBvYmplY3QsIGNhbGwgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGtleSBhbmQgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtPYmplY3Q8YW55LCBhbnk+fSBvYmogLSBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggZW50cnkuXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmNvbnN0IGZvckVhY2hFbnRyeSA9IChvYmosIGZuKSA9PiB7XG4gIGNvbnN0IGdlbmVyYXRvciA9IG9iaiAmJiBvYmpbU3ltYm9sLml0ZXJhdG9yXTtcblxuICBjb25zdCBpdGVyYXRvciA9IGdlbmVyYXRvci5jYWxsKG9iaik7XG5cbiAgbGV0IHJlc3VsdDtcblxuICB3aGlsZSAoKHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKSkgJiYgIXJlc3VsdC5kb25lKSB7XG4gICAgY29uc3QgcGFpciA9IHJlc3VsdC52YWx1ZTtcbiAgICBmbi5jYWxsKG9iaiwgcGFpclswXSwgcGFpclsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBhbmQgYSBzdHJpbmcsIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIGFsbCB0aGUgbWF0Y2hlc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWdFeHAgLSBUaGUgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIGFnYWluc3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBzZWFyY2guXG4gKlxuICogQHJldHVybnMge0FycmF5PGJvb2xlYW4+fVxuICovXG5jb25zdCBtYXRjaEFsbCA9IChyZWdFeHAsIHN0cikgPT4ge1xuICBsZXQgbWF0Y2hlcztcbiAgY29uc3QgYXJyID0gW107XG5cbiAgd2hpbGUgKChtYXRjaGVzID0gcmVnRXhwLmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcbiAgICBhcnIucHVzaChtYXRjaGVzKTtcbiAgfVxuXG4gIHJldHVybiBhcnI7XG59XG5cbi8qIENoZWNraW5nIGlmIHRoZSBraW5kT2ZUZXN0IGZ1bmN0aW9uIHJldHVybnMgdHJ1ZSB3aGVuIHBhc3NlZCBhbiBIVE1MRm9ybUVsZW1lbnQuICovXG5jb25zdCBpc0hUTUxGb3JtID0ga2luZE9mVGVzdCgnSFRNTEZvcm1FbGVtZW50Jyk7XG5cbmNvbnN0IHRvQ2FtZWxDYXNlID0gc3RyID0+IHtcbiAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1stX1xcc10oW2EtelxcZF0pKFxcdyopL2csXG4gICAgZnVuY3Rpb24gcmVwbGFjZXIobSwgcDEsIHAyKSB7XG4gICAgICByZXR1cm4gcDEudG9VcHBlckNhc2UoKSArIHAyO1xuICAgIH1cbiAgKTtcbn07XG5cbi8qIENyZWF0aW5nIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIGlmIGFuIG9iamVjdCBoYXMgYSBwcm9wZXJ0eS4gKi9cbmNvbnN0IGhhc093blByb3BlcnR5ID0gKCh7aGFzT3duUHJvcGVydHl9KSA9PiAob2JqLCBwcm9wKSA9PiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpKE9iamVjdC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgUmVnRXhwIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBSZWdFeHAgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNSZWdFeHAgPSBraW5kT2ZUZXN0KCdSZWdFeHAnKTtcblxuY29uc3QgcmVkdWNlRGVzY3JpcHRvcnMgPSAob2JqLCByZWR1Y2VyKSA9PiB7XG4gIGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKTtcbiAgY29uc3QgcmVkdWNlZERlc2NyaXB0b3JzID0ge307XG5cbiAgZm9yRWFjaChkZXNjcmlwdG9ycywgKGRlc2NyaXB0b3IsIG5hbWUpID0+IHtcbiAgICBpZiAocmVkdWNlcihkZXNjcmlwdG9yLCBuYW1lLCBvYmopICE9PSBmYWxzZSkge1xuICAgICAgcmVkdWNlZERlc2NyaXB0b3JzW25hbWVdID0gZGVzY3JpcHRvcjtcbiAgICB9XG4gIH0pO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG9iaiwgcmVkdWNlZERlc2NyaXB0b3JzKTtcbn1cblxuLyoqXG4gKiBNYWtlcyBhbGwgbWV0aG9kcyByZWFkLW9ubHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqL1xuXG5jb25zdCBmcmVlemVNZXRob2RzID0gKG9iaikgPT4ge1xuICByZWR1Y2VEZXNjcmlwdG9ycyhvYmosIChkZXNjcmlwdG9yLCBuYW1lKSA9PiB7XG4gICAgLy8gc2tpcCByZXN0cmljdGVkIHByb3BzIGluIHN0cmljdCBtb2RlXG4gICAgaWYgKGlzRnVuY3Rpb24ob2JqKSAmJiBbJ2FyZ3VtZW50cycsICdjYWxsZXInLCAnY2FsbGVlJ10uaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IG9ialtuYW1lXTtcblxuICAgIGlmICghaXNGdW5jdGlvbih2YWx1ZSkpIHJldHVybjtcblxuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGZhbHNlO1xuXG4gICAgaWYgKCd3cml0YWJsZScgaW4gZGVzY3JpcHRvcikge1xuICAgICAgZGVzY3JpcHRvci53cml0YWJsZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghZGVzY3JpcHRvci5zZXQpIHtcbiAgICAgIGRlc2NyaXB0b3Iuc2V0ID0gKCkgPT4ge1xuICAgICAgICB0aHJvdyBFcnJvcignQ2FuIG5vdCByZXdyaXRlIHJlYWQtb25seSBtZXRob2QgXFwnJyArIG5hbWUgKyAnXFwnJyk7XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IHRvT2JqZWN0U2V0ID0gKGFycmF5T3JTdHJpbmcsIGRlbGltaXRlcikgPT4ge1xuICBjb25zdCBvYmogPSB7fTtcblxuICBjb25zdCBkZWZpbmUgPSAoYXJyKSA9PiB7XG4gICAgYXJyLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgb2JqW3ZhbHVlXSA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBpc0FycmF5KGFycmF5T3JTdHJpbmcpID8gZGVmaW5lKGFycmF5T3JTdHJpbmcpIDogZGVmaW5lKFN0cmluZyhhcnJheU9yU3RyaW5nKS5zcGxpdChkZWxpbWl0ZXIpKTtcblxuICByZXR1cm4gb2JqO1xufVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgdG9GaW5pdGVOdW1iZXIgPSAodmFsdWUsIGRlZmF1bHRWYWx1ZSkgPT4ge1xuICB2YWx1ZSA9ICt2YWx1ZTtcbiAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcbn1cblxuY29uc3QgQUxQSEEgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonXG5cbmNvbnN0IERJR0lUID0gJzAxMjM0NTY3ODknO1xuXG5jb25zdCBBTFBIQUJFVCA9IHtcbiAgRElHSVQsXG4gIEFMUEhBLFxuICBBTFBIQV9ESUdJVDogQUxQSEEgKyBBTFBIQS50b1VwcGVyQ2FzZSgpICsgRElHSVRcbn1cblxuY29uc3QgZ2VuZXJhdGVTdHJpbmcgPSAoc2l6ZSA9IDE2LCBhbHBoYWJldCA9IEFMUEhBQkVULkFMUEhBX0RJR0lUKSA9PiB7XG4gIGxldCBzdHIgPSAnJztcbiAgY29uc3Qge2xlbmd0aH0gPSBhbHBoYWJldDtcbiAgd2hpbGUgKHNpemUtLSkge1xuICAgIHN0ciArPSBhbHBoYWJldFtNYXRoLnJhbmRvbSgpICogbGVuZ3RofDBdXG4gIH1cblxuICByZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIElmIHRoZSB0aGluZyBpcyBhIEZvcm1EYXRhIG9iamVjdCwgcmV0dXJuIHRydWUsIG90aGVyd2lzZSByZXR1cm4gZmFsc2UuXG4gKlxuICogQHBhcmFtIHt1bmtub3dufSB0aGluZyAtIFRoZSB0aGluZyB0byBjaGVjay5cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNTcGVjQ29tcGxpYW50Rm9ybSh0aGluZykge1xuICByZXR1cm4gISEodGhpbmcgJiYgaXNGdW5jdGlvbih0aGluZy5hcHBlbmQpICYmIHRoaW5nW1N5bWJvbC50b1N0cmluZ1RhZ10gPT09ICdGb3JtRGF0YScgJiYgdGhpbmdbU3ltYm9sLml0ZXJhdG9yXSk7XG59XG5cbmNvbnN0IHRvSlNPTk9iamVjdCA9IChvYmopID0+IHtcbiAgY29uc3Qgc3RhY2sgPSBuZXcgQXJyYXkoMTApO1xuXG4gIGNvbnN0IHZpc2l0ID0gKHNvdXJjZSwgaSkgPT4ge1xuXG4gICAgaWYgKGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIGlmIChzdGFjay5pbmRleE9mKHNvdXJjZSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmKCEoJ3RvSlNPTicgaW4gc291cmNlKSkge1xuICAgICAgICBzdGFja1tpXSA9IHNvdXJjZTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gaXNBcnJheShzb3VyY2UpID8gW10gOiB7fTtcblxuICAgICAgICBmb3JFYWNoKHNvdXJjZSwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICBjb25zdCByZWR1Y2VkVmFsdWUgPSB2aXNpdCh2YWx1ZSwgaSArIDEpO1xuICAgICAgICAgICFpc1VuZGVmaW5lZChyZWR1Y2VkVmFsdWUpICYmICh0YXJnZXRba2V5XSA9IHJlZHVjZWRWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0YWNrW2ldID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIHJldHVybiB2aXNpdChvYmosIDApO1xufVxuXG5jb25zdCBpc0FzeW5jRm4gPSBraW5kT2ZUZXN0KCdBc3luY0Z1bmN0aW9uJyk7XG5cbmNvbnN0IGlzVGhlbmFibGUgPSAodGhpbmcpID0+XG4gIHRoaW5nICYmIChpc09iamVjdCh0aGluZykgfHwgaXNGdW5jdGlvbih0aGluZykpICYmIGlzRnVuY3Rpb24odGhpbmcudGhlbikgJiYgaXNGdW5jdGlvbih0aGluZy5jYXRjaCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXIsXG4gIGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZyxcbiAgaXNOdW1iZXIsXG4gIGlzQm9vbGVhbixcbiAgaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3QsXG4gIGlzVW5kZWZpbmVkLFxuICBpc0RhdGUsXG4gIGlzRmlsZSxcbiAgaXNCbG9iLFxuICBpc1JlZ0V4cCxcbiAgaXNGdW5jdGlvbixcbiAgaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1R5cGVkQXJyYXksXG4gIGlzRmlsZUxpc3QsXG4gIGZvckVhY2gsXG4gIG1lcmdlLFxuICBleHRlbmQsXG4gIHRyaW0sXG4gIHN0cmlwQk9NLFxuICBpbmhlcml0cyxcbiAgdG9GbGF0T2JqZWN0LFxuICBraW5kT2YsXG4gIGtpbmRPZlRlc3QsXG4gIGVuZHNXaXRoLFxuICB0b0FycmF5LFxuICBmb3JFYWNoRW50cnksXG4gIG1hdGNoQWxsLFxuICBpc0hUTUxGb3JtLFxuICBoYXNPd25Qcm9wZXJ0eSxcbiAgaGFzT3duUHJvcDogaGFzT3duUHJvcGVydHksIC8vIGFuIGFsaWFzIHRvIGF2b2lkIEVTTGludCBuby1wcm90b3R5cGUtYnVpbHRpbnMgZGV0ZWN0aW9uXG4gIHJlZHVjZURlc2NyaXB0b3JzLFxuICBmcmVlemVNZXRob2RzLFxuICB0b09iamVjdFNldCxcbiAgdG9DYW1lbENhc2UsXG4gIG5vb3AsXG4gIHRvRmluaXRlTnVtYmVyLFxuICBmaW5kS2V5LFxuICBnbG9iYWw6IF9nbG9iYWwsXG4gIGlzQ29udGV4dERlZmluZWQsXG4gIEFMUEhBQkVULFxuICBnZW5lcmF0ZVN0cmluZyxcbiAgaXNTcGVjQ29tcGxpYW50Rm9ybSxcbiAgdG9KU09OT2JqZWN0LFxuICBpc0FzeW5jRm4sXG4gIGlzVGhlbmFibGVcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi9cIjsiLCIvLyBucHggcHJldHRpZXIgLS13cml0ZSBcIioqLyoucHVnXCJcbmltcG9ydCBcIi4vc2Nzcy9hcHAuc2Nzc1wiO1xuaW1wb3J0IFwiLi9jb3JlL3Jlc2l6ZXJcIjtcbmltcG9ydCBcIi4vY29yZS9tYWluXCI7XG5pbXBvcnQgXCIuL3ZpZXdzL2luZGV4LnB1Z1wiO1xuIl0sIm5hbWVzIjpbImRlZmF1bHRXaWR0aCIsImRlZmF1bHRGb250IiwibW9iaWxlRm9udCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiZGVmYXVsdEhlaWdodCIsImZTaXplIiwiZGV2aWNlIiwidlciLCJ2SCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJtb2RpZmllckRldmljZSIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiaXNNb2JpbGUiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsImZvbnRTaXplIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwib25sb2FkIiwib25yZXNpemUiLCJ1dGlscyIsImh0dHBBZGFwdGVyIiwieGhyQWRhcHRlciIsIkF4aW9zRXJyb3IiLCJrbm93bkFkYXB0ZXJzIiwiaHR0cCIsInhociIsImZvckVhY2giLCJmbiIsInZhbHVlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlIiwiZ2V0QWRhcHRlciIsImFkYXB0ZXJzIiwiaXNBcnJheSIsImxlbmd0aCIsIm5hbWVPckFkYXB0ZXIiLCJhZGFwdGVyIiwiaSIsImlzU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJFcnJvciIsImhhc093blByb3AiLCJpc0Z1bmN0aW9uIiwiVHlwZUVycm9yIiwic2V0dGxlIiwiY29va2llcyIsImJ1aWxkVVJMIiwiYnVpbGRGdWxsUGF0aCIsImlzVVJMU2FtZU9yaWdpbiIsInRyYW5zaXRpb25hbERlZmF1bHRzIiwiQ2FuY2VsZWRFcnJvciIsInBhcnNlUHJvdG9jb2wiLCJwbGF0Zm9ybSIsIkF4aW9zSGVhZGVycyIsInNwZWVkb21ldGVyIiwicHJvZ3Jlc3NFdmVudFJlZHVjZXIiLCJsaXN0ZW5lciIsImlzRG93bmxvYWRTdHJlYW0iLCJieXRlc05vdGlmaWVkIiwiX3NwZWVkb21ldGVyIiwibG9hZGVkIiwidG90YWwiLCJsZW5ndGhDb21wdXRhYmxlIiwidW5kZWZpbmVkIiwicHJvZ3Jlc3NCeXRlcyIsInJhdGUiLCJpblJhbmdlIiwiZGF0YSIsInByb2dyZXNzIiwiYnl0ZXMiLCJlc3RpbWF0ZWQiLCJldmVudCIsImlzWEhSQWRhcHRlclN1cHBvcnRlZCIsIlhNTEh0dHBSZXF1ZXN0IiwiY29uZmlnIiwiUHJvbWlzZSIsImRpc3BhdGNoWGhyUmVxdWVzdCIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0RGF0YSIsInJlcXVlc3RIZWFkZXJzIiwiZnJvbSIsImhlYWRlcnMiLCJub3JtYWxpemUiLCJyZXNwb25zZVR5cGUiLCJvbkNhbmNlbGVkIiwiZG9uZSIsImNhbmNlbFRva2VuIiwidW5zdWJzY3JpYmUiLCJzaWduYWwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNGb3JtRGF0YSIsImlzU3RhbmRhcmRCcm93c2VyRW52IiwiaXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYiLCJzZXRDb250ZW50VHlwZSIsInJlcXVlc3QiLCJhdXRoIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2V0IiwiYnRvYSIsImZ1bGxQYXRoIiwiYmFzZVVSTCIsInVybCIsIm9wZW4iLCJtZXRob2QiLCJ0b1VwcGVyQ2FzZSIsInBhcmFtcyIsInBhcmFtc1NlcmlhbGl6ZXIiLCJ0aW1lb3V0Iiwib25sb2FkZW5kIiwicmVzcG9uc2VIZWFkZXJzIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwicmVzcG9uc2VEYXRhIiwicmVzcG9uc2VUZXh0IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiX3Jlc29sdmUiLCJfcmVqZWN0IiwiZXJyIiwib25yZWFkeXN0YXRlY2hhbmdlIiwiaGFuZGxlTG9hZCIsInJlYWR5U3RhdGUiLCJyZXNwb25zZVVSTCIsImluZGV4T2YiLCJzZXRUaW1lb3V0Iiwib25hYm9ydCIsImhhbmRsZUFib3J0IiwiRUNPTk5BQk9SVEVEIiwib25lcnJvciIsImhhbmRsZUVycm9yIiwiRVJSX05FVFdPUksiLCJvbnRpbWVvdXQiLCJoYW5kbGVUaW1lb3V0IiwidGltZW91dEVycm9yTWVzc2FnZSIsInRyYW5zaXRpb25hbCIsImNsYXJpZnlUaW1lb3V0RXJyb3IiLCJFVElNRURPVVQiLCJ4c3JmVmFsdWUiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ4c3JmQ29va2llTmFtZSIsInJlYWQiLCJ4c3JmSGVhZGVyTmFtZSIsInRvSlNPTiIsInNldFJlcXVlc3RIZWFkZXIiLCJ2YWwiLCJrZXkiLCJpc1VuZGVmaW5lZCIsIm9uRG93bmxvYWRQcm9ncmVzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvblVwbG9hZFByb2dyZXNzIiwidXBsb2FkIiwiY2FuY2VsIiwidHlwZSIsImFib3J0Iiwic3Vic2NyaWJlIiwiYWJvcnRlZCIsInByb3RvY29sIiwicHJvdG9jb2xzIiwiRVJSX0JBRF9SRVFVRVNUIiwic2VuZCIsImJpbmQiLCJBeGlvcyIsIm1lcmdlQ29uZmlnIiwiZGVmYXVsdHMiLCJmb3JtRGF0YVRvSlNPTiIsIkNhbmNlbFRva2VuIiwiaXNDYW5jZWwiLCJWRVJTSU9OIiwidG9Gb3JtRGF0YSIsInNwcmVhZCIsImlzQXhpb3NFcnJvciIsIkh0dHBTdGF0dXNDb2RlIiwiY3JlYXRlSW5zdGFuY2UiLCJkZWZhdWx0Q29uZmlnIiwiY29udGV4dCIsImluc3RhbmNlIiwicHJvdG90eXBlIiwiZXh0ZW5kIiwiYWxsT3duS2V5cyIsImNyZWF0ZSIsImluc3RhbmNlQ29uZmlnIiwiYXhpb3MiLCJDYW5jZWwiLCJhbGwiLCJwcm9taXNlcyIsImZvcm1Ub0pTT04iLCJ0aGluZyIsImlzSFRNTEZvcm0iLCJGb3JtRGF0YSIsImRlZmF1bHQiLCJjb25zdHJ1Y3RvciIsImV4ZWN1dG9yIiwicmVzb2x2ZVByb21pc2UiLCJwcm9taXNlIiwicHJvbWlzZUV4ZWN1dG9yIiwidG9rZW4iLCJ0aGVuIiwiX2xpc3RlbmVycyIsIm9uZnVsZmlsbGVkIiwibWVzc2FnZSIsInJlYXNvbiIsInRocm93SWZSZXF1ZXN0ZWQiLCJwdXNoIiwiaW5kZXgiLCJzcGxpY2UiLCJzb3VyY2UiLCJjIiwiY2FsbCIsIkVSUl9DQU5DRUxFRCIsIm5hbWUiLCJpbmhlcml0cyIsIl9fQ0FOQ0VMX18iLCJJbnRlcmNlcHRvck1hbmFnZXIiLCJkaXNwYXRjaFJlcXVlc3QiLCJ2YWxpZGF0b3IiLCJ2YWxpZGF0b3JzIiwiaW50ZXJjZXB0b3JzIiwiY29uZmlnT3JVcmwiLCJhc3NlcnRPcHRpb25zIiwic2lsZW50SlNPTlBhcnNpbmciLCJib29sZWFuIiwiZm9yY2VkSlNPTlBhcnNpbmciLCJzZXJpYWxpemUiLCJlbmNvZGUiLCJmdW5jdGlvbiIsImNvbnRleHRIZWFkZXJzIiwibWVyZ2UiLCJjb21tb24iLCJjb25jYXQiLCJyZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbiIsInN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyIsInVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzIiwiaW50ZXJjZXB0b3IiLCJydW5XaGVuIiwic3luY2hyb25vdXMiLCJ1bnNoaWZ0IiwiZnVsZmlsbGVkIiwicmVqZWN0ZWQiLCJyZXNwb25zZUludGVyY2VwdG9yQ2hhaW4iLCJwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMiLCJsZW4iLCJjaGFpbiIsImFwcGx5IiwibmV3Q29uZmlnIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwiZXJyb3IiLCJnZXRVcmkiLCJmb3JFYWNoTWV0aG9kTm9EYXRhIiwiZm9yRWFjaE1ldGhvZFdpdGhEYXRhIiwiZ2VuZXJhdGVIVFRQTWV0aG9kIiwiaXNGb3JtIiwiaHR0cE1ldGhvZCIsImNvZGUiLCJjYXB0dXJlU3RhY2tUcmFjZSIsInN0YWNrIiwiZGVzY3JpcHRpb24iLCJudW1iZXIiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJ0b0pTT05PYmplY3QiLCJkZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJjdXN0b21Qcm9wcyIsImF4aW9zRXJyb3IiLCJ0b0ZsYXRPYmplY3QiLCJmaWx0ZXIiLCJvYmoiLCJwcm9wIiwiY2F1c2UiLCJhc3NpZ24iLCJwYXJzZUhlYWRlcnMiLCIkaW50ZXJuYWxzIiwiU3ltYm9sIiwibm9ybWFsaXplSGVhZGVyIiwiaGVhZGVyIiwiU3RyaW5nIiwidHJpbSIsIm5vcm1hbGl6ZVZhbHVlIiwibWFwIiwicGFyc2VUb2tlbnMiLCJzdHIiLCJ0b2tlbnMiLCJ0b2tlbnNSRSIsIm1hdGNoIiwiZXhlYyIsImlzVmFsaWRIZWFkZXJOYW1lIiwidGVzdCIsIm1hdGNoSGVhZGVyVmFsdWUiLCJpc0hlYWRlck5hbWVGaWx0ZXIiLCJpc1JlZ0V4cCIsImZvcm1hdEhlYWRlciIsInJlcGxhY2UiLCJ3IiwiY2hhciIsImJ1aWxkQWNjZXNzb3JzIiwiYWNjZXNzb3JOYW1lIiwidG9DYW1lbENhc2UiLCJtZXRob2ROYW1lIiwiYXJnMSIsImFyZzIiLCJhcmczIiwiY29uZmlndXJhYmxlIiwidmFsdWVPclJld3JpdGUiLCJyZXdyaXRlIiwic2VsZiIsInNldEhlYWRlciIsIl92YWx1ZSIsIl9oZWFkZXIiLCJfcmV3cml0ZSIsImxIZWFkZXIiLCJmaW5kS2V5Iiwic2V0SGVhZGVycyIsImlzUGxhaW5PYmplY3QiLCJnZXQiLCJwYXJzZXIiLCJoYXMiLCJtYXRjaGVyIiwiZGVsZXRlIiwiZGVsZXRlZCIsImRlbGV0ZUhlYWRlciIsImNsZWFyIiwia2V5cyIsImZvcm1hdCIsIm5vcm1hbGl6ZWQiLCJ0YXJnZXRzIiwiYXNTdHJpbmdzIiwiam9pbiIsIml0ZXJhdG9yIiwiZW50cmllcyIsInRvU3RyaW5nIiwidG9TdHJpbmdUYWciLCJmaXJzdCIsImNvbXB1dGVkIiwidGFyZ2V0IiwiYWNjZXNzb3IiLCJpbnRlcm5hbHMiLCJhY2Nlc3NvcnMiLCJkZWZpbmVBY2Nlc3NvciIsImZyZWV6ZU1ldGhvZHMiLCJoYW5kbGVycyIsInVzZSIsIm9wdGlvbnMiLCJlamVjdCIsImlkIiwiZm9yRWFjaEhhbmRsZXIiLCJoIiwiaXNBYnNvbHV0ZVVSTCIsImNvbWJpbmVVUkxzIiwicmVxdWVzdGVkVVJMIiwidHJhbnNmb3JtRGF0YSIsInRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQiLCJ0cmFuc2Zvcm1SZXF1ZXN0Iiwib25BZGFwdGVyUmVzb2x1dGlvbiIsInRyYW5zZm9ybVJlc3BvbnNlIiwib25BZGFwdGVyUmVqZWN0aW9uIiwiaGVhZGVyc1RvT2JqZWN0IiwiY29uZmlnMSIsImNvbmZpZzIiLCJnZXRNZXJnZWRWYWx1ZSIsImNhc2VsZXNzIiwic2xpY2UiLCJtZXJnZURlZXBQcm9wZXJ0aWVzIiwiYSIsImIiLCJ2YWx1ZUZyb21Db25maWcyIiwiZGVmYXVsdFRvQ29uZmlnMiIsIm1lcmdlRGlyZWN0S2V5cyIsIm1lcmdlTWFwIiwidGltZW91dE1lc3NhZ2UiLCJkZWNvbXByZXNzIiwibWF4Q29udGVudExlbmd0aCIsIm1heEJvZHlMZW5ndGgiLCJiZWZvcmVSZWRpcmVjdCIsInRyYW5zcG9ydCIsImh0dHBBZ2VudCIsImh0dHBzQWdlbnQiLCJzb2NrZXRQYXRoIiwicmVzcG9uc2VFbmNvZGluZyIsInZhbGlkYXRlU3RhdHVzIiwiY29tcHV0ZUNvbmZpZ1ZhbHVlIiwiY29uZmlnVmFsdWUiLCJFUlJfQkFEX1JFU1BPTlNFIiwiZmxvb3IiLCJmbnMiLCJ0cmFuc2Zvcm0iLCJ0b1VSTEVuY29kZWRGb3JtIiwiREVGQVVMVF9DT05URU5UX1RZUEUiLCJzdHJpbmdpZnlTYWZlbHkiLCJyYXdWYWx1ZSIsImVuY29kZXIiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJjb250ZW50VHlwZSIsImdldENvbnRlbnRUeXBlIiwiaGFzSlNPTkNvbnRlbnRUeXBlIiwiaXNPYmplY3RQYXlsb2FkIiwiaXNPYmplY3QiLCJpc0FycmF5QnVmZmVyIiwiaXNCdWZmZXIiLCJpc1N0cmVhbSIsImlzRmlsZSIsImlzQmxvYiIsImlzQXJyYXlCdWZmZXJWaWV3IiwiYnVmZmVyIiwiaXNVUkxTZWFyY2hQYXJhbXMiLCJpc0ZpbGVMaXN0IiwiZm9ybVNlcmlhbGl6ZXIiLCJfRm9ybURhdGEiLCJlbnYiLCJKU09OUmVxdWVzdGVkIiwic3RyaWN0SlNPTlBhcnNpbmciLCJjbGFzc2VzIiwiQmxvYiIsImNoYXJNYXAiLCJyZXBsYWNlciIsIkF4aW9zVVJMU2VhcmNoUGFyYW1zIiwiX3BhaXJzIiwiYXBwZW5kIiwiX2VuY29kZSIsImVhY2giLCJwYWlyIiwiQ29udGludWUiLCJTd2l0Y2hpbmdQcm90b2NvbHMiLCJQcm9jZXNzaW5nIiwiRWFybHlIaW50cyIsIk9rIiwiQ3JlYXRlZCIsIkFjY2VwdGVkIiwiTm9uQXV0aG9yaXRhdGl2ZUluZm9ybWF0aW9uIiwiTm9Db250ZW50IiwiUmVzZXRDb250ZW50IiwiUGFydGlhbENvbnRlbnQiLCJNdWx0aVN0YXR1cyIsIkFscmVhZHlSZXBvcnRlZCIsIkltVXNlZCIsIk11bHRpcGxlQ2hvaWNlcyIsIk1vdmVkUGVybWFuZW50bHkiLCJGb3VuZCIsIlNlZU90aGVyIiwiTm90TW9kaWZpZWQiLCJVc2VQcm94eSIsIlVudXNlZCIsIlRlbXBvcmFyeVJlZGlyZWN0IiwiUGVybWFuZW50UmVkaXJlY3QiLCJCYWRSZXF1ZXN0IiwiVW5hdXRob3JpemVkIiwiUGF5bWVudFJlcXVpcmVkIiwiRm9yYmlkZGVuIiwiTm90Rm91bmQiLCJNZXRob2ROb3RBbGxvd2VkIiwiTm90QWNjZXB0YWJsZSIsIlByb3h5QXV0aGVudGljYXRpb25SZXF1aXJlZCIsIlJlcXVlc3RUaW1lb3V0IiwiQ29uZmxpY3QiLCJHb25lIiwiTGVuZ3RoUmVxdWlyZWQiLCJQcmVjb25kaXRpb25GYWlsZWQiLCJQYXlsb2FkVG9vTGFyZ2UiLCJVcmlUb29Mb25nIiwiVW5zdXBwb3J0ZWRNZWRpYVR5cGUiLCJSYW5nZU5vdFNhdGlzZmlhYmxlIiwiRXhwZWN0YXRpb25GYWlsZWQiLCJJbUFUZWFwb3QiLCJNaXNkaXJlY3RlZFJlcXVlc3QiLCJVbnByb2Nlc3NhYmxlRW50aXR5IiwiTG9ja2VkIiwiRmFpbGVkRGVwZW5kZW5jeSIsIlRvb0Vhcmx5IiwiVXBncmFkZVJlcXVpcmVkIiwiUHJlY29uZGl0aW9uUmVxdWlyZWQiLCJUb29NYW55UmVxdWVzdHMiLCJSZXF1ZXN0SGVhZGVyRmllbGRzVG9vTGFyZ2UiLCJVbmF2YWlsYWJsZUZvckxlZ2FsUmVhc29ucyIsIkludGVybmFsU2VydmVyRXJyb3IiLCJOb3RJbXBsZW1lbnRlZCIsIkJhZEdhdGV3YXkiLCJTZXJ2aWNlVW5hdmFpbGFibGUiLCJHYXRld2F5VGltZW91dCIsIkh0dHBWZXJzaW9uTm90U3VwcG9ydGVkIiwiVmFyaWFudEFsc29OZWdvdGlhdGVzIiwiSW5zdWZmaWNpZW50U3RvcmFnZSIsIkxvb3BEZXRlY3RlZCIsIk5vdEV4dGVuZGVkIiwiTmV0d29ya0F1dGhlbnRpY2F0aW9uUmVxdWlyZWQiLCJ0aGlzQXJnIiwid3JhcCIsImFyZ3VtZW50cyIsInNlcmlhbGl6ZUZuIiwic2VyaWFsaXplZFBhcmFtcyIsImhhc2htYXJrSW5kZXgiLCJyZWxhdGl2ZVVSTCIsInN0YW5kYXJkQnJvd3NlckVudiIsIndyaXRlIiwiZXhwaXJlcyIsInBhdGgiLCJkb21haW4iLCJzZWN1cmUiLCJjb29raWUiLCJpc051bWJlciIsIkRhdGUiLCJ0b0dNVFN0cmluZyIsIlJlZ0V4cCIsImRlY29kZVVSSUNvbXBvbmVudCIsIm5vdyIsIm5vblN0YW5kYXJkQnJvd3NlckVudiIsInBhcnNlUHJvcFBhdGgiLCJtYXRjaEFsbCIsImFycmF5VG9PYmplY3QiLCJhcnIiLCJmb3JtRGF0YSIsImJ1aWxkUGF0aCIsImlzTnVtZXJpY0tleSIsIk51bWJlciIsImlzRmluaXRlIiwiaXNMYXN0IiwicmVzdWx0IiwiZm9yRWFjaEVudHJ5IiwicGF5bG9hZCIsIm1zaWUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ1cmxQYXJzaW5nTm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJvcmlnaW5VUkwiLCJyZXNvbHZlVVJMIiwiaHJlZiIsInNldEF0dHJpYnV0ZSIsImhvc3QiLCJzZWFyY2giLCJoYXNoIiwiaG9zdG5hbWUiLCJwb3J0IiwicGF0aG5hbWUiLCJjaGFyQXQiLCJsb2NhdGlvbiIsInJlcXVlc3RVUkwiLCJwYXJzZWQiLCJpZ25vcmVEdXBsaWNhdGVPZiIsInRvT2JqZWN0U2V0IiwicmF3SGVhZGVycyIsInNwbGl0IiwibGluZSIsInN1YnN0cmluZyIsInNhbXBsZXNDb3VudCIsIkFycmF5IiwidGltZXN0YW1wcyIsImhlYWQiLCJ0YWlsIiwiZmlyc3RTYW1wbGVUUyIsImNodW5rTGVuZ3RoIiwic3RhcnRlZEF0IiwiYnl0ZXNDb3VudCIsInBhc3NlZCIsInJvdW5kIiwiY2FsbGJhY2siLCJQbGF0Zm9ybUZvcm1EYXRhIiwiaXNWaXNpdGFibGUiLCJyZW1vdmVCcmFja2V0cyIsImVuZHNXaXRoIiwicmVuZGVyS2V5IiwiZG90cyIsImlzRmxhdEFycmF5Iiwic29tZSIsInByZWRpY2F0ZXMiLCJtZXRhVG9rZW5zIiwiaW5kZXhlcyIsImRlZmluZWQiLCJvcHRpb24iLCJ2aXNpdG9yIiwiZGVmYXVsdFZpc2l0b3IiLCJfQmxvYiIsInVzZUJsb2IiLCJpc1NwZWNDb21wbGlhbnRGb3JtIiwiY29udmVydFZhbHVlIiwiaXNEYXRlIiwidG9JU09TdHJpbmciLCJpc1R5cGVkQXJyYXkiLCJCdWZmZXIiLCJ0b0FycmF5IiwiZWwiLCJleHBvc2VkSGVscGVycyIsImJ1aWxkIiwicG9wIiwiVVJMU2VhcmNoUGFyYW1zIiwiaGVscGVycyIsImlzTm9kZSIsImRlcHJlY2F0ZWRXYXJuaW5ncyIsInZlcnNpb24iLCJmb3JtYXRNZXNzYWdlIiwib3B0IiwiZGVzYyIsIm9wdHMiLCJFUlJfREVQUkVDQVRFRCIsImNvbnNvbGUiLCJ3YXJuIiwic2NoZW1hIiwiYWxsb3dVbmtub3duIiwiRVJSX0JBRF9PUFRJT05fVkFMVUUiLCJFUlJfQkFEX09QVElPTiIsInByb2R1Y3QiLCJXb3JrZXJHbG9iYWxTY29wZSIsImltcG9ydFNjcmlwdHMiLCJpc0Jyb3dzZXIiLCJnZXRQcm90b3R5cGVPZiIsImtpbmRPZiIsImNhY2hlIiwia2luZE9mVGVzdCIsInR5cGVPZlRlc3QiLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsImlzQm9vbGVhbiIsInBpcGUiLCJraW5kIiwibCIsImdldE93blByb3BlcnR5TmFtZXMiLCJfa2V5IiwiX2dsb2JhbCIsImdsb2JhbFRoaXMiLCJnbG9iYWwiLCJpc0NvbnRleHREZWZpbmVkIiwiYXNzaWduVmFsdWUiLCJ0YXJnZXRLZXkiLCJzdHJpcEJPTSIsImNvbnRlbnQiLCJjaGFyQ29kZUF0Iiwic3VwZXJDb25zdHJ1Y3RvciIsInByb3BzIiwic291cmNlT2JqIiwiZGVzdE9iaiIsInByb3BGaWx0ZXIiLCJtZXJnZWQiLCJzZWFyY2hTdHJpbmciLCJwb3NpdGlvbiIsImxhc3RJbmRleCIsIlR5cGVkQXJyYXkiLCJVaW50OEFycmF5IiwiZ2VuZXJhdG9yIiwibmV4dCIsInJlZ0V4cCIsIm1hdGNoZXMiLCJtIiwicDEiLCJwMiIsImhhc093blByb3BlcnR5IiwicmVkdWNlRGVzY3JpcHRvcnMiLCJyZWR1Y2VyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsInJlZHVjZWREZXNjcmlwdG9ycyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJhcnJheU9yU3RyaW5nIiwiZGVsaW1pdGVyIiwiZGVmaW5lIiwibm9vcCIsInRvRmluaXRlTnVtYmVyIiwiZGVmYXVsdFZhbHVlIiwiQUxQSEEiLCJESUdJVCIsIkFMUEhBQkVUIiwiQUxQSEFfRElHSVQiLCJnZW5lcmF0ZVN0cmluZyIsInNpemUiLCJhbHBoYWJldCIsInJhbmRvbSIsInZpc2l0IiwicmVkdWNlZFZhbHVlIiwiaXNBc3luY0ZuIiwiaXNUaGVuYWJsZSIsImNhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==