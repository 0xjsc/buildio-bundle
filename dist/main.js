// ==UserScript==
// @name            New script mohmoh.eu
// @namespace   Violentmonkey Scripts
// @match           *://www.mohmoh.eu/*
// @grant             none
// @version          1.0
// @author            -
// @description    27.05.2024, 08:40:33
// @require          https://update.greasyfork.org/scripts/423602/1005014/msgpack.js
// ==/UserScript==
;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v11.11.1
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function _assertClassBrand(e, t, n) {
    if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
    throw new TypeError("Private element is not present on this object");
  }
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _checkPrivateRedeclaration(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _classPrivateFieldGet2(s, a) {
    return s.get(_assertClassBrand(s, a));
  }
  function _classPrivateFieldInitSpec(e, t, a) {
    _checkPrivateRedeclaration(e, t), t.set(e, a);
  }
  function _classPrivateFieldSet2(s, a, r) {
    return s.set(_assertClassBrand(s, a), r), r;
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return p;
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _get() {
    return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
      var p = _superPropBase(e, t);
      if (p) {
        var n = Object.getOwnPropertyDescriptor(p, t);
        return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
      }
    }, _get.apply(null, arguments);
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _setPrototypeOf(t, e);
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _superPropBase(t, o) {
    for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
    return t;
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r );
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (String )(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  var RESTORE_FOCUS_TIMEOUT = 100;

  /** @type {GlobalState} */
  var globalState = {};
  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement instanceof HTMLElement) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  };

  /**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise<void>}
   */
  var restoreActiveElement = function restoreActiveElement(returnFocus) {
    return new Promise(function (resolve) {
      if (!returnFocus) {
        return resolve();
      }
      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };

  var swalPrefix = 'swal2-';

  /**
   * @typedef
   * { | 'container'
   *   | 'shown'
   *   | 'height-auto'
   *   | 'iosfix'
   *   | 'popup'
   *   | 'modal'
   *   | 'no-backdrop'
   *   | 'no-transition'
   *   | 'toast'
   *   | 'toast-shown'
   *   | 'show'
   *   | 'hide'
   *   | 'close'
   *   | 'title'
   *   | 'html-container'
   *   | 'actions'
   *   | 'confirm'
   *   | 'deny'
   *   | 'cancel'
   *   | 'default-outline'
   *   | 'footer'
   *   | 'icon'
   *   | 'icon-content'
   *   | 'image'
   *   | 'input'
   *   | 'file'
   *   | 'range'
   *   | 'select'
   *   | 'radio'
   *   | 'checkbox'
   *   | 'label'
   *   | 'textarea'
   *   | 'inputerror'
   *   | 'input-label'
   *   | 'validation-message'
   *   | 'progress-steps'
   *   | 'active-progress-step'
   *   | 'progress-step'
   *   | 'progress-step-line'
   *   | 'loader'
   *   | 'loading'
   *   | 'styled'
   *   | 'top'
   *   | 'top-start'
   *   | 'top-end'
   *   | 'top-left'
   *   | 'top-right'
   *   | 'center'
   *   | 'center-start'
   *   | 'center-end'
   *   | 'center-left'
   *   | 'center-right'
   *   | 'bottom'
   *   | 'bottom-start'
   *   | 'bottom-end'
   *   | 'bottom-left'
   *   | 'bottom-right'
   *   | 'grow-row'
   *   | 'grow-column'
   *   | 'grow-fullscreen'
   *   | 'rtl'
   *   | 'timer-progress-bar'
   *   | 'timer-progress-bar-container'
   *   | 'scrollbar-measure'
   *   | 'icon-success'
   *   | 'icon-warning'
   *   | 'icon-info'
   *   | 'icon-question'
   *   | 'icon-error'
   * } SwalClass
   * @typedef {Record<SwalClass, string>} SwalClasses
   */

  /**
   * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
   * @typedef {Record<SwalIcon, string>} SwalIcons
   */

  /** @type {SwalClass[]} */
  var classNames = ['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error'];
  var swalClasses = classNames.reduce(function (acc, className) {
    acc[className] = swalPrefix + className;
    return acc;
  }, /** @type {SwalClasses} */{});

  /** @type {SwalIcon[]} */
  var icons = ['success', 'warning', 'info', 'question', 'error'];
  var iconTypes = icons.reduce(function (acc, icon) {
    acc[icon] = swalPrefix + icon;
    return acc;
  }, /** @type {SwalIcons} */{});

  var consolePrefix = 'SweetAlert2:';

  /**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */
  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  /**
   * Standardize console warnings
   *
   * @param {string | string[]} message
   */
  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(_typeof(message) === 'object' ? message.join(' ') : message));
  };

  /**
   * Standardize console errors
   *
   * @param {string} message
   */
  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };

  /**
   * Private global state for `warnOnce`
   *
   * @type {string[]}
   * @private
   */
  var previousWarnOnceMessages = [];

  /**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */
  var warnOnce = function warnOnce(message) {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };

  /**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string} useInstead
   */
  var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };

  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {Function | any} arg
   * @returns {any}
   */
  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };

  /**
   * @param {any} arg
   * @returns {boolean}
   */
  var hasToPromiseFn = function hasToPromiseFn(arg) {
    return arg && typeof arg.toPromise === 'function';
  };

  /**
   * @param {any} arg
   * @returns {Promise<any>}
   */
  var asPromise = function asPromise(arg) {
    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  };

  /**
   * @param {any} arg
   * @returns {boolean}
   */
  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };

  /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */
  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };

  /**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */
  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  /**
   * @param {string} className
   * @returns {HTMLElement | null}
   */
  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getIcon = function getIcon() {
    return elementByClass(swalClasses.icon);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getIconContent = function getIconContent() {
    return elementByClass(swalClasses['icon-content']);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };

  /**
   * @returns {HTMLButtonElement | null}
   */
  var getConfirmButton = function getConfirmButton() {
    return /** @type {HTMLButtonElement} */elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  };

  /**
   * @returns {HTMLButtonElement | null}
   */
  var getCancelButton = function getCancelButton() {
    return /** @type {HTMLButtonElement} */elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  };

  /**
   * @returns {HTMLButtonElement | null}
   */
  var getDenyButton = function getDenyButton() {
    return /** @type {HTMLButtonElement} */elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getInputLabel = function getInputLabel() {
    return elementByClass(swalClasses['input-label']);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getLoader = function getLoader() {
    return elementBySelector(".".concat(swalClasses.loader));
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  };

  // https://github.com/jkup/focusable/blob/master/index.js
  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  /**
   * @returns {HTMLElement[]}
   */
  var getFocusableElements = function getFocusableElements() {
    var popup = getPopup();
    if (!popup) {
      return [];
    }
    /** @type {NodeListOf<HTMLElement>} */
    var focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
    var focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex)
    // sort according to tabindex
    .sort(function (a, b) {
      var tabindexA = parseInt(a.getAttribute('tabindex') || '0');
      var tabindexB = parseInt(b.getAttribute('tabindex') || '0');
      if (tabindexA > tabindexB) {
        return 1;
      } else if (tabindexA < tabindexB) {
        return -1;
      }
      return 0;
    });

    /** @type {NodeListOf<HTMLElement>} */
    var otherFocusableElements = popup.querySelectorAll(focusable);
    var otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return _toConsumableArray(new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))).filter(function (el) {
      return isVisible$1(el);
    });
  };

  /**
   * @returns {boolean}
   */
  var isModal = function isModal() {
    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
  };

  /**
   * @returns {boolean}
   */
  var isToast = function isToast() {
    var popup = getPopup();
    if (!popup) {
      return false;
    }
    return hasClass(popup, swalClasses.toast);
  };

  /**
   * @returns {boolean}
   */
  var isLoading = function isLoading() {
    var popup = getPopup();
    if (!popup) {
      return false;
    }
    return popup.hasAttribute('data-loading');
  };

  /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */
  var setInnerHtml = function setInnerHtml(elem, html) {
    elem.textContent = '';
    if (html) {
      var parser = new DOMParser();
      var parsed = parser.parseFromString(html, "text/html");
      var head = parsed.querySelector('head');
      head && Array.from(head.childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
      var body = parsed.querySelector('body');
      body && Array.from(body.childNodes).forEach(function (child) {
        if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
          elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
        } else {
          elem.appendChild(child);
        }
      });
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */
  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }
    var classList = className.split(/\s+/);
    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }
    return true;
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */
  var removeCustomClasses = function removeCustomClasses(elem, params) {
    Array.from(elem.classList).forEach(function (className) {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass || {}).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */
  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);
    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
        return;
      }
      addClass(elem, params.customClass[className]);
    }
  };

  /**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass | SweetAlertInput} inputClass
   * @returns {HTMLInputElement | null}
   */
  var getInput$1 = function getInput(popup, inputClass) {
    if (!inputClass) {
      return null;
    }
    switch (inputClass) {
      case 'select':
      case 'textarea':
      case 'file':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses[inputClass]));
      case 'checkbox':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.checkbox, " input"));
      case 'radio':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:first-child"));
      case 'range':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.range, " input"));
      default:
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.input));
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */
  var focusInput = function focusInput(input) {
    input.focus();

    // place cursor at end of text in text input
    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   * @param {boolean} condition
   */
  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }
    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }
    classList.forEach(function (className) {
      if (Array.isArray(target)) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */
  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */
  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };

  /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */
  var getDirectChildByClass = function getDirectChildByClass(elem, className) {
    var children = Array.from(elem.children);
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      if (child instanceof HTMLElement && hasClass(child, className)) {
        return child;
      }
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */
  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }
    if (value || parseInt(value) === 0) {
      elem.style.setProperty(property, typeof value === 'number' ? "".concat(value, "px") : value);
    } else {
      elem.style.removeProperty(property);
    }
  };

  /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */
  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem && (elem.style.display = display);
  };

  /**
   * @param {HTMLElement | null} elem
   */
  var hide = function hide(elem) {
    elem && (elem.style.display = 'none');
  };

  /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */
  var showWhenInnerHtmlPresent = function showWhenInnerHtmlPresent(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'block';
    if (!elem) {
      return;
    }
    new MutationObserver(function () {
      toggle(elem, elem.innerHTML, display);
    }).observe(elem, {
      childList: true,
      subtree: true
    });
  };

  /**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */
  var setStyle = function setStyle(parent, selector, property, value) {
    /** @type {HTMLElement | null} */
    var el = parent.querySelector(selector);
    if (el) {
      el.style.setProperty(property, value);
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */
  var toggle = function toggle(elem, condition) {
    var display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'flex';
    condition ? show(elem, display) : hide(elem);
  };

  /**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement | null} elem
   * @returns {boolean}
   */
  var isVisible$1 = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };

  /**
   * @returns {boolean}
   */
  var allButtonsAreHidden = function allButtonsAreHidden() {
    return !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());
  };

  /**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  };

  /**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };

  /**
   * @param {number} timer
   * @param {boolean} reset
   */
  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();
    if (!timerProgressBar) {
      return;
    }
    if (isVisible$1(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }
      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();
    if (!timerProgressBar) {
      return;
    }
    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  /**
   * Detect Node env
   *
   * @returns {boolean}
   */
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses['html-container'], "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n   <div class=\"").concat(swalClasses.icon, "\"></div>\n   <img class=\"").concat(swalClasses.image, "\" />\n   <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n   <div class=\"").concat(swalClasses['html-container'], "\" id=\"").concat(swalClasses['html-container'], "\"></div>\n   <input class=\"").concat(swalClasses.input, "\" id=\"").concat(swalClasses.input, "\" />\n   <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n   <div class=\"").concat(swalClasses.range, "\">\n     <input type=\"range\" />\n     <output></output>\n   </div>\n   <select class=\"").concat(swalClasses.select, "\" id=\"").concat(swalClasses.select, "\"></select>\n   <div class=\"").concat(swalClasses.radio, "\"></div>\n   <label class=\"").concat(swalClasses.checkbox, "\">\n     <input type=\"checkbox\" id=\"").concat(swalClasses.checkbox, "\" />\n     <span class=\"").concat(swalClasses.label, "\"></span>\n   </label>\n   <textarea class=\"").concat(swalClasses.textarea, "\" id=\"").concat(swalClasses.textarea, "\"></textarea>\n   <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  /**
   * @returns {boolean}
   */
  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();
    if (!oldContainer) {
      return false;
    }
    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };
  var resetValidationMessage$1 = function resetValidationMessage() {
    globalState.currentInstance.resetValidationMessage();
  };
  var addInputChangeListeners = function addInputChangeListeners() {
    var popup = getPopup();
    var input = getDirectChildByClass(popup, swalClasses.input);
    var file = getDirectChildByClass(popup, swalClasses.file);
    /** @type {HTMLInputElement} */
    var range = popup.querySelector(".".concat(swalClasses.range, " input"));
    /** @type {HTMLOutputElement} */
    var rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
    var select = getDirectChildByClass(popup, swalClasses.select);
    /** @type {HTMLInputElement} */
    var checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getDirectChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage$1;
    file.onchange = resetValidationMessage$1;
    select.onchange = resetValidationMessage$1;
    checkbox.onchange = resetValidationMessage$1;
    textarea.oninput = resetValidationMessage$1;
    range.oninput = function () {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
    range.onchange = function () {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
  };

  /**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */
  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };

  /**
   * @param {SweetAlertOptions} params
   */
  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  /**
   * @param {HTMLElement} targetElement
   */
  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };

  /**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */
  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();
    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }
    var container = document.createElement('div');
    container.className = swalClasses.container;
    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }
    setInnerHtml(container, sweetHTML);
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */
  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param);
    }

    // Object
    else if (_typeof(param) === 'object') {
      handleObject(param, target);
    }

    // Plain string
    else if (param) {
      setInnerHtml(target, param);
    }
  };

  /**
   * @param {any} param
   * @param {HTMLElement} target
   */
  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param);
    }

    // For other objects use their string representation
    else {
      setInnerHtml(target, param.toString());
    }
  };

  /**
   * @param {HTMLElement} target
   * @param {any} elem
   */
  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.textContent = '';
    if (0 in elem) {
      for (var i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  /**
   * @returns {'webkitAnimationEnd' | 'animationend' | false}
   */
  var animationEndEvent = function () {
    // Prevent run in Node env
    if (isNodeEnv()) {
      return false;
    }
    var testEl = document.createElement('div');

    // Chrome, Safari and Opera
    if (typeof testEl.style.webkitAnimation !== 'undefined') {
      return 'webkitAnimationEnd';
    }

    // Standard syntax
    if (typeof testEl.style.animation !== 'undefined') {
      return 'animationend';
    }
    return false;
  }();

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var loader = getLoader();
    if (!actions || !loader) {
      return;
    }

    // Actions (buttons) wrapper
    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    }

    // Custom class
    applyCustomClass(actions, params, 'actions');

    // Render all the buttons
    renderButtons(actions, loader, params);

    // Loader
    setInnerHtml(loader, params.loaderHtml || '');
    applyCustomClass(loader, params, 'loader');
  };

  /**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */
  function renderButtons(actions, loader, params) {
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton();
    if (!confirmButton || !denyButton || !cancelButton) {
      return;
    }

    // Render buttons
    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
    if (params.reverseButtons) {
      if (params.toast) {
        actions.insertBefore(cancelButton, confirmButton);
        actions.insertBefore(denyButton, confirmButton);
      } else {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
      }
    }
  }

  /**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */
  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
      return;
    }
    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);

    // Buttons background colors
    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
      addClass(confirmButton, swalClasses['default-outline']);
    }
    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
      addClass(denyButton, swalClasses['default-outline']);
    }
    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
      addClass(cancelButton, swalClasses['default-outline']);
    }
  }

  /**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */
  function renderButton(button, buttonType, params) {
    var buttonName = /** @type {'Confirm' | 'Deny' | 'Cancel'} */capitalizeFirstLetter(buttonType);
    toggle(button, params["show".concat(buttonName, "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")] || ''); // Set caption text
    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")] || ''); // ARIA label

    // Add buttons custom classes
    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
  }

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    if (!closeButton) {
      return;
    }
    setInnerHtml(closeButton, params.closeButtonHtml || '');

    // Custom class
    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel || '');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();
    if (!container) {
      return;
    }
    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow);

    // Custom class
    applyCustomClass(container, params, 'container');
  };

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */
  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */
  function handlePositionParam(container, position) {
    if (!position) {
      return;
    }
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */
  function handleGrowParam(container, grow) {
    if (!grow) {
      return;
    }
    addClass(container, swalClasses["grow-".concat(grow)]);
  }

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateProps = {
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  /** @type {InputClass[]} */
  var inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderInput = function renderInput(instance, params) {
    var popup = getPopup();
    if (!popup) {
      return;
    }
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputClasses.forEach(function (inputClass) {
      var inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
      if (!inputContainer) {
        return;
      }

      // set attributes
      setAttributes(inputClass, params.inputAttributes);

      // set class
      inputContainer.className = swalClasses[inputClass];
      if (rerender) {
        hide(inputContainer);
      }
    });
    if (params.input) {
      if (rerender) {
        showInput(params);
      }
      // set custom class
      setCustomClass(params);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  var showInput = function showInput(params) {
    if (!params.input) {
      return;
    }
    if (!renderInputType[params.input]) {
      error("Unexpected type of input! Expected ".concat(Object.keys(renderInputType).join(' | '), ", got \"").concat(params.input, "\""));
      return;
    }
    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(inputContainer);

    // input autofocus
    if (params.inputAutoFocus) {
      setTimeout(function () {
        focusInput(input);
      });
    }
  };

  /**
   * @param {HTMLInputElement} input
   */
  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;
      if (!['id', 'type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };

  /**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */
  var setAttributes = function setAttributes(inputClass, inputAttributes) {
    var input = getInput$1(getPopup(), inputClass);
    if (!input) {
      return;
    }
    removeAttributes(input);
    for (var attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);
    if (_typeof(params.customClass) === 'object') {
      addClass(inputContainer, params.customClass.input);
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */
  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  /**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */
  var setInputLabel = function setInputLabel(input, prependTo, params) {
    if (params.inputLabel) {
      var label = document.createElement('label');
      var labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      if (_typeof(params.customClass) === 'object') {
        addClass(label, params.customClass.inputLabel);
      }
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  /**
   * @param {SweetAlertOptions['input']} inputType
   * @returns {HTMLElement}
   */
  var getInputContainer = function getInputContainer(inputType) {
    return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
  };

  /**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */
  var checkAndSetInputValue = function checkAndSetInputValue(input, inputValue) {
    if (['string', 'number'].includes(_typeof(inputValue))) {
      input.value = "".concat(inputValue);
    } else if (!isPromise(inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(inputValue), "\""));
    }
  };

  /** @type {Record<SweetAlertInput, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */
  var renderInputType = {};

  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = renderInputType.search = renderInputType.date = renderInputType['datetime-local'] = renderInputType.time = renderInputType.week = renderInputType.month = function (input, params) {
    checkAndSetInputValue(input, params.inputValue);
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.file = function (input, params) {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  /**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    checkAndSetInputValue(rangeInput, params.inputValue);
    rangeInput.type = params.input;
    checkAndSetInputValue(rangeOutput, params.inputValue);
    setInputLabel(rangeInput, range, params);
    return range;
  };

  /**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */
  renderInputType.select = function (select, params) {
    select.textContent = '';
    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }
    setInputLabel(select, select, params);
    return select;
  };

  /**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */
  renderInputType.radio = function (radio) {
    radio.textContent = '';
    return radio;
  };

  /**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput$1(getPopup(), 'checkbox');
    checkbox.value = '1';
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkbox;
  };

  /**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */
  renderInputType.textarea = function (textarea, params) {
    checkAndSetInputValue(textarea, params.inputValue);
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    /**
     * @param {HTMLElement} el
     * @returns {number}
     */
    var getMargin = function getMargin(el) {
      return parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
    };

    // https://github.com/sweetalert2/sweetalert2/issues/2291
    setTimeout(function () {
      // https://github.com/sweetalert2/sweetalert2/issues/1699
      if ('MutationObserver' in window) {
        var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
        var textareaResizeHandler = function textareaResizeHandler() {
          // check if texarea is still in document (i.e. popup wasn't closed in the meantime)
          if (!document.body.contains(textarea)) {
            return;
          }
          var textareaWidth = textarea.offsetWidth + getMargin(textarea);
          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = "".concat(textareaWidth, "px");
          } else {
            applyNumericalStyle(getPopup(), 'width', params.width);
          }
        };
        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderContent = function renderContent(instance, params) {
    var htmlContainer = getHtmlContainer();
    if (!htmlContainer) {
      return;
    }
    showWhenInnerHtmlPresent(htmlContainer);
    applyCustomClass(htmlContainer, params, 'htmlContainer');

    // Content as HTML
    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block');
    }

    // Content as plain text
    else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block');
    }

    // No content
    else {
      hide(htmlContainer);
    }
    renderInput(instance, params);
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    if (!footer) {
      return;
    }
    showWhenInnerHtmlPresent(footer);
    toggle(footer, params.footer, 'block');
    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    }

    // Custom class
    applyCustomClass(footer, params, 'footer');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance);
    var icon = getIcon();
    if (!icon) {
      return;
    }

    // if the given icon already rendered, apply the styling without re-rendering the icon
    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }
    if (!params.icon && !params.iconHtml) {
      hide(icon);
      return;
    }
    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
      hide(icon);
      return;
    }
    show(icon);

    // Custom or default content
    setContent(icon, params);
    applyStyles(icon, params);

    // Animate icon
    addClass(icon, params.showClass && params.showClass.icon);
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  var applyStyles = function applyStyles(icon, params) {
    for (var _i = 0, _Object$entries = Object.entries(iconTypes); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        iconType = _Object$entries$_i[0],
        iconClassName = _Object$entries$_i[1];
      if (params.icon !== iconType) {
        removeClass(icon, iconClassName);
      }
    }
    addClass(icon, params.icon && iconTypes[params.icon]);

    // Icon color
    setColor(icon, params);

    // Success icon background color
    adjustSuccessIconBackgroundColor();

    // Custom class
    applyCustomClass(icon, params, 'icon');
  };

  // Adjust success icon background color to match the popup background color
  var adjustSuccessIconBackgroundColor = function adjustSuccessIconBackgroundColor() {
    var popup = getPopup();
    if (!popup) {
      return;
    }
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    /** @type {NodeListOf<HTMLElement>} */
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };
  var successIconHtml = "\n  <div class=\"swal2-success-circular-line-left\"></div>\n  <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n  <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n  <div class=\"swal2-success-circular-line-right\"></div>\n";
  var errorIconHtml = "\n  <span class=\"swal2-x-mark\">\n    <span class=\"swal2-x-mark-line-left\"></span>\n    <span class=\"swal2-x-mark-line-right\"></span>\n  </span>\n";

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  var setContent = function setContent(icon, params) {
    if (!params.icon && !params.iconHtml) {
      return;
    }
    var oldContent = icon.innerHTML;
    var newContent = '';
    if (params.iconHtml) {
      newContent = iconContent(params.iconHtml);
    } else if (params.icon === 'success') {
      newContent = successIconHtml;
      oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
    } else if (params.icon === 'error') {
      newContent = errorIconHtml;
    } else if (params.icon) {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      newContent = iconContent(defaultIconHtml[params.icon]);
    }
    if (oldContent.trim() !== newContent.trim()) {
      setInnerHtml(icon, newContent);
    }
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  var setColor = function setColor(icon, params) {
    if (!params.iconColor) {
      return;
    }
    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;
    for (var _i2 = 0, _arr = ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']; _i2 < _arr.length; _i2++) {
      var sel = _arr[_i2];
      setStyle(icon, sel, 'background-color', params.iconColor);
    }
    setStyle(icon, '.swal2-success-ring', 'border-color', params.iconColor);
  };

  /**
   * @param {string} content
   * @returns {string}
   */
  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderImage = function renderImage(instance, params) {
    var image = getImage();
    if (!image) {
      return;
    }
    if (!params.imageUrl) {
      hide(image);
      return;
    }
    show(image, '');

    // Src, alt
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt || '');

    // Width, height
    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight);

    // Class
    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderPopup = function renderPopup(instance, params) {
    var container = getContainer();
    var popup = getPopup();
    if (!container || !popup) {
      return;
    }

    // Width
    // https://github.com/sweetalert2/sweetalert2/issues/2170
    if (params.toast) {
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      var loader = getLoader();
      loader && popup.insertBefore(loader, getIcon());
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    }

    // Padding
    applyNumericalStyle(popup, 'padding', params.padding);

    // Color
    if (params.color) {
      popup.style.color = params.color;
    }

    // Background
    if (params.background) {
      popup.style.background = params.background;
    }
    hide(getValidationMessage());

    // Classes
    addClasses$1(popup, params);
  };

  /**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  var addClasses$1 = function addClasses(popup, params) {
    var showClass = params.showClass || {};
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible$1(popup) ? showClass.popup : '');
    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    }

    // Custom class
    applyCustomClass(popup, params, 'popup');
    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    }

    // Icon class (#1842)
    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();
    if (!progressStepsContainer) {
      return;
    }
    var progressSteps = params.progressSteps,
      currentProgressStep = params.currentProgressStep;
    if (!progressSteps || progressSteps.length === 0 || currentProgressStep === undefined) {
      hide(progressStepsContainer);
      return;
    }
    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    if (currentProgressStep >= progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);
      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }
      if (index !== progressSteps.length - 1) {
        var lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  /**
   * @param {string} step
   * @returns {HTMLLIElement}
   */
  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  /**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */
  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);
    if (params.progressStepsDistance) {
      applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
    }
    return lineEl;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    if (!title) {
      return;
    }
    showWhenInnerHtmlPresent(title);
    toggle(title, params.title || params.titleText, 'block');
    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }
    if (params.titleText) {
      title.innerText = params.titleText;
    }

    // Custom class
    applyCustomClass(title, params, 'title');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);
    var popup = getPopup();
    if (typeof params.didRender === 'function' && popup) {
      params.didRender(popup);
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */
  var isVisible = function isVisible() {
    return isVisible$1(getPopup());
  };

  /*
   * Global function to click 'Confirm' button
   */
  var clickConfirm = function clickConfirm() {
    var _dom$getConfirmButton;
    return (_dom$getConfirmButton = getConfirmButton()) === null || _dom$getConfirmButton === void 0 ? void 0 : _dom$getConfirmButton.click();
  };

  /*
   * Global function to click 'Deny' button
   */
  var clickDeny = function clickDeny() {
    var _dom$getDenyButton;
    return (_dom$getDenyButton = getDenyButton()) === null || _dom$getDenyButton === void 0 ? void 0 : _dom$getDenyButton.click();
  };

  /*
   * Global function to click 'Cancel' button
   */
  var clickCancel = function clickCancel() {
    var _dom$getCancelButton;
    return (_dom$getCancelButton = getCancelButton()) === null || _dom$getCancelButton === void 0 ? void 0 : _dom$getCancelButton.click();
  };

  /** @typedef {'cancel' | 'backdrop' | 'close' | 'esc' | 'timer'} DismissReason */

  /** @type {Record<DismissReason, DismissReason>} */
  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  /**
   * @param {GlobalState} globalState
   */
  var removeKeydownHandler = function removeKeydownHandler(globalState) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }
  };

  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */
  var addKeydownHandler = function addKeydownHandler(globalState, innerParams, dismissWith) {
    removeKeydownHandler(globalState);
    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(innerParams, e, dismissWith);
      };
      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  };

  /**
   * @param {number} index
   * @param {number} increment
   */
  var setFocus = function setFocus(index, increment) {
    var _dom$getPopup;
    var focusableElements = getFocusableElements();
    // search for visible elements and select the next possible match
    if (focusableElements.length) {
      index = index + increment;

      // rollover to first item
      if (index === focusableElements.length) {
        index = 0;

        // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }
      focusableElements[index].focus();
      return;
    }
    // no visible focusable elements, focus the popup
    (_dom$getPopup = getPopup()) === null || _dom$getPopup === void 0 || _dom$getPopup.focus();
  };
  var arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  var arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {KeyboardEvent} event
   * @param {Function} dismissWith
   */
  var keydownHandler = function keydownHandler(innerParams, event, dismissWith) {
    if (!innerParams) {
      return; // This instance has already been destroyed
    }

    // Ignore keydown during IME composition
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
    // https://github.com/sweetalert2/sweetalert2/issues/720
    // https://github.com/sweetalert2/sweetalert2/issues/2406
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    if (innerParams.stopKeydownPropagation) {
      event.stopPropagation();
    }

    // ENTER
    if (event.key === 'Enter') {
      handleEnter(event, innerParams);
    }

    // TAB
    else if (event.key === 'Tab') {
      handleTab(event);
    }

    // ARROWS - switch focus between buttons
    else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).includes(event.key)) {
      handleArrows(event.key);
    }

    // ESC
    else if (event.key === 'Escape') {
      handleEsc(event, innerParams, dismissWith);
    }
  };

  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   */
  var handleEnter = function handleEnter(event, innerParams) {
    // https://github.com/sweetalert2/sweetalert2/issues/2386
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return;
    }
    var input = getInput$1(getPopup(), innerParams.input);
    if (event.target && input && event.target instanceof HTMLElement && event.target.outerHTML === input.outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }
      clickConfirm();
      event.preventDefault();
    }
  };

  /**
   * @param {KeyboardEvent} event
   */
  var handleTab = function handleTab(event) {
    var targetElement = event.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;
    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    // Cycle to the next button
    if (!event.shiftKey) {
      setFocus(btnIndex, 1);
    }

    // Cycle to the prev button
    else {
      setFocus(btnIndex, -1);
    }
    event.stopPropagation();
    event.preventDefault();
  };

  /**
   * @param {string} key
   */
  var handleArrows = function handleArrows(key) {
    var actions = getActions();
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton();
    if (!actions || !confirmButton || !denyButton || !cancelButton) {
      return;
    }
    /** @type HTMLElement[] */
    var buttons = [confirmButton, denyButton, cancelButton];
    if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
      return;
    }
    var sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    var buttonToFocus = document.activeElement;
    if (!buttonToFocus) {
      return;
    }
    for (var i = 0; i < actions.children.length; i++) {
      buttonToFocus = buttonToFocus[sibling];
      if (!buttonToFocus) {
        return;
      }
      if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
        break;
      }
    }
    if (buttonToFocus instanceof HTMLButtonElement) {
      buttonToFocus.focus();
    }
  };

  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */
  var handleEsc = function handleEsc(event, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      event.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  };

  // From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var container = getContainer();
    var bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.contains(container)) {
        return;
      }
      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden') || '');
      }
      el.setAttribute('aria-hidden', 'true');
    });
  };
  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden') || '');
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  // @ts-ignore
  var isSafariOrIOS = typeof window !== 'undefined' && !!window.GestureEvent; // true for Safari desktop + all iOS browsers https://stackoverflow.com/a/70585394

  /**
   * Fix iOS scrolling
   * http://stackoverflow.com/q/39626302
   */
  var iOSfix = function iOSfix() {
    if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
    }
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */
  var lockBodyScroll = function lockBodyScroll() {
    var container = getContainer();
    if (!container) {
      return;
    }
    /** @type {boolean} */
    var preventTouchMove;
    /**
     * @param {TouchEvent} event
     */
    container.ontouchstart = function (event) {
      preventTouchMove = shouldPreventTouchMove(event);
    };
    /**
     * @param {TouchEvent} event
     */
    container.ontouchmove = function (event) {
      if (preventTouchMove) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
  };

  /**
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  var shouldPreventTouchMove = function shouldPreventTouchMove(event) {
    var target = event.target;
    var container = getContainer();
    var htmlContainer = getHtmlContainer();
    if (!container || !htmlContainer) {
      return false;
    }
    if (isStylus(event) || isZoom(event)) {
      return false;
    }
    if (target === container) {
      return true;
    }
    if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== 'INPUT' &&
    // #1603
    target.tagName !== 'TEXTAREA' &&
    // #2266
    !(isScrollable(htmlContainer) &&
    // #1944
    htmlContainer.contains(target))) {
      return true;
    }
    return false;
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */
  var isStylus = function isStylus(event) {
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  var isZoom = function isZoom(event) {
    return event.touches && event.touches.length > 1;
  };
  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */
  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  /**
   * Remember state in cases where opening and handling a modal will fiddle with it.
   * @type {number | null}
   */
  var previousBodyPadding = null;

  /**
   * @param {string} initialBodyOverflow
   */
  var replaceScrollbarWithPadding = function replaceScrollbarWithPadding(initialBodyOverflow) {
    // for queues, do not do this more than once
    if (previousBodyPadding !== null) {
      return;
    }
    // if the body has overflow
    if (document.body.scrollHeight > window.innerHeight || initialBodyOverflow === 'scroll' // https://github.com/sweetalert2/sweetalert2/issues/2663
    ) {
      // add padding so the content doesn't shift after removal of scrollbar
      previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(previousBodyPadding + measureScrollbar(), "px");
    }
  };
  var undoReplaceScrollbarWithPadding = function undoReplaceScrollbarWithPadding() {
    if (previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(previousBodyPadding, "px");
      previousBodyPadding = null;
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */
  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(function () {
        return triggerDidCloseAndDispose(instance, didClose);
      });
      removeKeydownHandler(globalState);
    }

    // workaround for https://github.com/sweetalert2/sweetalert2/issues/2088
    // for some reason removing the container in Safari will scroll the document to bottom
    if (isSafariOrIOS) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }
    if (isModal()) {
      undoReplaceScrollbarWithPadding();
      undoIOSfix();
      unsetAriaHidden();
    }
    removeBodyClasses();
  }

  /**
   * Remove SweetAlert2 classes from body
   */
  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  /**
   * Instance method to close sweetAlert
   *
   * @param {any} resolveValue
   */
  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    var didClose = triggerClosePopup(this);
    if (this.isAwaitingPromise) {
      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      // Resolve Swal promise
      swalPromiseResolve(resolveValue);
    }
  }
  var triggerClosePopup = function triggerClosePopup(instance) {
    var popup = getPopup();
    if (!popup) {
      return false;
    }
    var innerParams = privateProps.innerParams.get(instance);
    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };

  /**
   * @param {any} error
   */
  function rejectPromise(error) {
    var rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);
    if (rejectPromise) {
      // Reject Swal promise
      rejectPromise(error);
    }
  }

  /**
   * @param {SweetAlert} instance
   */
  var handleAwaitingPromise = function handleAwaitingPromise(instance) {
    if (instance.isAwaitingPromise) {
      delete instance.isAwaitingPromise;
      // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335
      if (!privateProps.innerParams.get(instance)) {
        instance._destroy();
      }
    }
  };

  /**
   * @param {any} resolveValue
   * @returns {SweetAlertResult}
   */
  var prepareResolveValue = function prepareResolveValue(resolveValue) {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }
    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} innerParams
   */
  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer();
    // If animation is supported, animate
    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }
    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */
  var animatePopup = function animatePopup(instance, popup, container, returnFocus, didClose) {
    if (!animationEndEvent) {
      return;
    }
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  /**
   * @param {SweetAlert} instance
   * @param {Function} didClose
   */
  var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
    setTimeout(function () {
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }
      // instance might have been destroyed already
      if (instance._destroy) {
        instance._destroy();
      }
    });
  };

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   *
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */
  var showLoading = function showLoading(buttonToReplace) {
    var popup = getPopup();
    if (!popup) {
      new Swal(); // eslint-disable-line no-new
    }
    popup = getPopup();
    if (!popup) {
      return;
    }
    var loader = getLoader();
    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }
    show(loader);
    popup.setAttribute('data-loading', 'true');
    popup.setAttribute('aria-busy', 'true');
    popup.focus();
  };

  /**
   * @param {HTMLElement} popup
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */
  var replaceButton = function replaceButton(popup, buttonToReplace) {
    var actions = getActions();
    var loader = getLoader();
    if (!actions || !loader) {
      return;
    }
    if (!buttonToReplace && isVisible$1(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }
    show(actions);
    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
      actions.insertBefore(loader, buttonToReplace);
    }
    addClass([popup, actions], swalClasses.loading);
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].some(function (i) {
      return i === params.input;
    }) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {SweetAlertInputValue}
   */
  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();
    if (!input) {
      return null;
    }
    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);
      case 'radio':
        return getRadioValue(input);
      case 'file':
        return getFileValue(input);
      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  /**
   * @param {HTMLInputElement} input
   * @returns {number}
   */
  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };

  /**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */
  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };

  /**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */
  var getFileValue = function getFileValue(input) {
    return input.files && input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var handleInputOptions = function handleInputOptions(instance, params) {
    var popup = getPopup();
    if (!popup) {
      return;
    }
    /**
     * @param {Record<string, any>} inputOptions
     */
    var processInputOptions = function processInputOptions(inputOptions) {
      if (params.input === 'select') {
        populateSelectOptions(popup, formatInputOptions(inputOptions), params);
      } else if (params.input === 'radio') {
        populateRadioOptions(popup, formatInputOptions(inputOptions), params);
      }
    };
    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    if (!input) {
      return;
    }
    hide(input);
    asPromise(params.inputValue).then(function (inputValue) {
      input.value = params.input === 'number' ? "".concat(parseFloat(inputValue) || 0) : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */
  function populateSelectOptions(popup, inputOptions, params) {
    var select = getDirectChildByClass(popup, swalClasses.select);
    if (!select) {
      return;
    }
    /**
     * @param {HTMLElement} parent
     * @param {string} optionLabel
     * @param {string} optionValue
     */
    var renderOption = function renderOption(parent, optionLabel, optionValue) {
      var option = document.createElement('option');
      option.value = optionValue;
      setInnerHtml(option, optionLabel);
      option.selected = isSelected(optionValue, params.inputValue);
      parent.appendChild(option);
    };
    inputOptions.forEach(function (inputOption) {
      var optionValue = inputOption[0];
      var optionLabel = inputOption[1];
      // <optgroup> spec:
      // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
      // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
      // check whether this is a <optgroup>
      if (Array.isArray(optionLabel)) {
        // if it is an array, then it is an <optgroup>
        var optgroup = document.createElement('optgroup');
        optgroup.label = optionValue;
        optgroup.disabled = false; // not configurable for now
        select.appendChild(optgroup);
        optionLabel.forEach(function (o) {
          return renderOption(optgroup, o[1], o[0]);
        });
      } else {
        // case of <option>
        renderOption(select, optionLabel, optionValue);
      }
    });
    select.focus();
  }

  /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */
  function populateRadioOptions(popup, inputOptions, params) {
    var radio = getDirectChildByClass(popup, swalClasses.radio);
    if (!radio) {
      return;
    }
    inputOptions.forEach(function (inputOption) {
      var radioValue = inputOption[0];
      var radioLabel = inputOption[1];
      var radioInput = document.createElement('input');
      var radioLabelElement = document.createElement('label');
      radioInput.type = 'radio';
      radioInput.name = swalClasses.radio;
      radioInput.value = radioValue;
      if (isSelected(radioValue, params.inputValue)) {
        radioInput.checked = true;
      }
      var label = document.createElement('span');
      setInnerHtml(label, radioLabel);
      label.className = swalClasses.label;
      radioLabelElement.appendChild(radioInput);
      radioLabelElement.appendChild(label);
      radio.appendChild(radioLabelElement);
    });
    var radios = radio.querySelectorAll('input');
    if (radios.length) {
      radios[0].focus();
    }
  }

  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {Record<string, any>} inputOptions
   * @typedef {string[]} InputOptionFlattened
   * @returns {InputOptionFlattened[]}
   */
  var formatInputOptions = function formatInputOptions(inputOptions) {
    /** @type {InputOptionFlattened[]} */
    var result = [];
    if (inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        var valueFormatted = value;
        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        var valueFormatted = inputOptions[key];
        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    }
    return result;
  };

  /**
   * @param {string} optionValue
   * @param {SweetAlertInputValue} inputValue
   * @returns {boolean}
   */
  var isSelected = function isSelected(optionValue, inputValue) {
    return !!inputValue && inputValue.toString() === optionValue.toString();
  };

  var _this = undefined;

  /**
   * @param {SweetAlert} instance
   */
  var handleConfirmButtonClick = function handleConfirmButtonClick(instance) {
    var innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };

  /**
   * @param {SweetAlert} instance
   */
  var handleDenyButtonClick = function handleDenyButtonClick(instance) {
    var innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {Function} dismissWith
   */
  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  /**
   * @param {SweetAlert} instance
   * @param {'confirm' | 'deny'} type
   */
  var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput(instance, type) {
    var innerParams = privateProps.innerParams.get(instance);
    if (!innerParams.input) {
      error("The \"input\" parameter is needed to be set when using returnInputValueOn".concat(capitalizeFirstLetter(type)));
      return;
    }
    var input = instance.getInput();
    var inputValue = getInputValue(instance, innerParams);
    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (input && !input.checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage || input.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertInputValue} inputValue
   * @param {'confirm' | 'deny'} type
   */
  var handleInputValidator = function handleInputValidator(instance, inputValue, type) {
    var innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    var validationPromise = Promise.resolve().then(function () {
      return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
    });
    validationPromise.then(function (validationMessage) {
      instance.enableButtons();
      instance.enableInput();
      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };

  /**
   * @param {SweetAlert} instance
   * @param {any} value
   */
  var deny = function deny(instance, value) {
    var innerParams = privateProps.innerParams.get(instance || _this);
    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }
    if (innerParams.preDeny) {
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received
      var preDenyPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
      });
      preDenyPromise.then(function (preDenyValue) {
        if (preDenyValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          instance.close({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      })["catch"](function (error) {
        return rejectWith(instance || _this, error);
      });
    } else {
      instance.close({
        isDenied: true,
        value: value
      });
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {any} value
   */
  var succeedWith = function succeedWith(instance, value) {
    instance.close({
      isConfirmed: true,
      value: value
    });
  };

  /**
   *
   * @param {SweetAlert} instance
   * @param {string} error
   */
  var rejectWith = function rejectWith(instance, error) {
    instance.rejectPromise(error);
  };

  /**
   *
   * @param {SweetAlert} instance
   * @param {any} value
   */
  var confirm = function confirm(instance, value) {
    var innerParams = privateProps.innerParams.get(instance || _this);
    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }
    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received
      var preConfirmPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      })["catch"](function (error) {
        return rejectWith(instance || _this, error);
      });
    } else {
      succeedWith(instance, value);
    }
  };

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */
  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      return;
    }
    var domCache = privateProps.domCache.get(this);
    hide(domCache.loader);
    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }
    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }
  var showRelatedButton = function showRelatedButton(domCache) {
    var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));
    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  /**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @returns {HTMLInputElement | null}
   */
  function getInput() {
    var innerParams = privateProps.innerParams.get(this);
    var domCache = privateProps.domCache.get(this);
    if (!domCache) {
      return null;
    }
    return getInput$1(domCache.popup, innerParams.input);
  }

  /**
   * @param {SweetAlert} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */
  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }

  /**
   * @param {HTMLInputElement | null} input
   * @param {boolean} disabled
   */
  function setInputDisabled(input, disabled) {
    var popup = getPopup();
    if (!popup || !input) {
      return;
    }
    if (input.type === 'radio') {
      /** @type {NodeListOf<HTMLInputElement>} */
      var radios = popup.querySelectorAll("[name=\"".concat(swalClasses.radio, "\"]"));
      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  /**
   * Enable all the buttons
   * @this {SweetAlert}
   */
  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }

  /**
   * Disable all the buttons
   * @this {SweetAlert}
   */
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }

  /**
   * Enable the input field
   * @this {SweetAlert}
   */
  function enableInput() {
    setInputDisabled(this.getInput(), false);
  }

  /**
   * Disable the input field
   * @this {SweetAlert}
   */
  function disableInput() {
    setInputDisabled(this.getInput(), true);
  }

  /**
   * Show block with validation message
   *
   * @param {string} error
   * @this {SweetAlert}
   */
  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    var params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];
    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }
    show(domCache.validationMessage);
    var input = this.getInput();
    if (input) {
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  }

  /**
   * Hide block with validation message
   *
   * @this {SweetAlert}
   */
  function resetValidationMessage() {
    var domCache = privateProps.domCache.get(this);
    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }
    var input = this.getInput();
    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    color: undefined,
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoFocus: true,
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];

  /** @type {Record<string, string>} */
  var deprecatedParams = {};
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];

  /**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };

  /**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };

  /**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */
  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };

  /**
   * @param {string} param
   */
  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  /**
   * @param {string} param
   */
  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.includes(param)) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  /**
   * @param {string} param
   */
  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    var isDeprecated = isDeprecatedParameter(param);
    if (isDeprecated) {
      warnAboutDeprecation(param, isDeprecated);
    }
  };

  /**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */
  var showWarningsForParams = function showWarningsForParams(params) {
    if (params.backdrop === false && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }
    for (var param in params) {
      checkIfParamIsValid(param);
      if (params.toast) {
        checkIfToastParamIsValid(param);
      }
      checkIfParamIsDeprecated(param);
    }
  };

  /**
   * Updates popup parameters.
   *
   * @param {SweetAlertOptions} params
   */
  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);
    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
      return;
    }
    var validUpdatableParams = filterValidParams(params);
    var updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  var filterValidParams = function filterValidParams(params) {
    var validUpdatableParams = {};
    Object.keys(params).forEach(function (param) {
      if (isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: ".concat(param));
      }
    });
    return validUpdatableParams;
  };

  /**
   * Dispose the current SweetAlert2 instance
   */
  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335
      return; // This instance has already been destroyed
    }

    // Check if there is another Swal closing
    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }
    disposeSwal(this);
  }

  /**
   * @param {SweetAlert} instance
   */
  var disposeSwal = function disposeSwal(instance) {
    disposeWeakMaps(instance);
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params;
    // Unset globalState props so GC will dispose globalState (#1569)
    delete globalState.keydownHandler;
    delete globalState.keydownTarget;
    // Unset currentInstance
    delete globalState.currentInstance;
  };

  /**
   * @param {SweetAlert} instance
   */
  var disposeWeakMaps = function disposeWeakMaps(instance) {
    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
    if (instance.isAwaitingPromise) {
      unsetWeakMaps(privateProps, instance);
      instance.isAwaitingPromise = true;
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);
      delete instance.isAwaitingPromise;
      // Unset instance methods
      delete instance.disableButtons;
      delete instance.enableButtons;
      delete instance.getInput;
      delete instance.disableInput;
      delete instance.enableInput;
      delete instance.hideLoading;
      delete instance.disableLoading;
      delete instance.showValidationMessage;
      delete instance.resetValidationMessage;
      delete instance.close;
      delete instance.closePopup;
      delete instance.closeModal;
      delete instance.closeToast;
      delete instance.rejectPromise;
      delete instance.update;
      delete instance._destroy;
    }
  };

  /**
   * @param {object} obj
   * @param {SweetAlert} instance
   */
  var unsetWeakMaps = function unsetWeakMaps(obj, instance) {
    for (var i in obj) {
      obj[i]["delete"](instance);
    }
  };

  var instanceMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _destroy: _destroy,
    close: close,
    closeModal: close,
    closePopup: close,
    closeToast: close,
    disableButtons: disableButtons,
    disableInput: disableInput,
    disableLoading: hideLoading,
    enableButtons: enableButtons,
    enableInput: enableInput,
    getInput: getInput,
    handleAwaitingPromise: handleAwaitingPromise,
    hideLoading: hideLoading,
    rejectPromise: rejectPromise,
    resetValidationMessage: resetValidationMessage,
    showValidationMessage: showValidationMessage,
    update: update
  });

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */
  var handlePopupClick = function handlePopupClick(innerParams, domCache, dismissWith) {
    if (innerParams.toast) {
      handleToastClick(innerParams, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache);

      // Ignore click events that had mousedown on the container but mouseup on the popup
      handleContainerMousedown(domCache);
      handleModalClick(innerParams, domCache, dismissWith);
    }
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */
  var handleToastClick = function handleToastClick(innerParams, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
        return;
      }
      dismissWith(DismissReason.close);
    };
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */
  var isAnyButtonShown = function isAnyButtonShown(innerParams) {
    return !!(innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton);
  };
  var ignoreOutsideClick = false;

  /**
   * @param {DomCache} domCache
   */
  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = function () {};
        // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup
        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  /**
   * @param {DomCache} domCache
   */
  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function (e) {
      // prevent the modal text from being selected on double click on the container (allowOutsideClick: false)
      if (e.target === domCache.container) {
        e.preventDefault();
      }
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = function () {};
        // We also need to check if the mouseup target is a child of the popup
        if (e.target === domCache.popup || e.target instanceof HTMLElement && domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */
  var handleModalClick = function handleModalClick(innerParams, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }
      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };
  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };
  var argsToParams = function argsToParams(args) {
    var params = {};
    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];
        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }
    return params;
  };

  /**
   * Main method to create a new SweetAlert2 popup
   *
   * @param  {...SweetAlertOptions} args
   * @returns {Promise<SweetAlertResult>}
   */
  function fire() {
    var Swal = this; // eslint-disable-line @typescript-eslint/no-this-alias
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _construct(Swal, args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlert}
   */
  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      function MixinSwal() {
        _classCallCheck(this, MixinSwal);
        return _callSuper(this, MixinSwal, arguments);
      }
      _inherits(MixinSwal, _this);
      return _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params, priorityMixinParams) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, params, Object.assign({}, mixinParams, priorityMixinParams));
        }
      }]);
    }(this); // @ts-ignore
    return MixinSwal;
  }

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */
  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };

  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };

  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} ms
   * @returns {number | undefined}
   */
  var increaseTimer = function increaseTimer(ms) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(ms);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };

  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */
  var isTimerRunning = function isTimerRunning() {
    return !!(globalState.timeout && globalState.timeout.isRunning());
  };

  var bodyClickListenerAdded = false;
  var clickHandlers = {};

  /**
   * @param {string} attr
   */
  function bindClickHandler() {
    var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;
    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }
  var bodyClickListener = function bodyClickListener(event) {
    for (var el = event.target; el && el !== document; el = el.parentNode) {
      for (var attr in clickHandlers) {
        var template = el.getAttribute(attr);
        if (template) {
          clickHandlers[attr].fire({
            template: template
          });
          return;
        }
      }
    }
  };

  var staticMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    argsToParams: argsToParams,
    bindClickHandler: bindClickHandler,
    clickCancel: clickCancel,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    enableLoading: showLoading,
    fire: fire,
    getActions: getActions,
    getCancelButton: getCancelButton,
    getCloseButton: getCloseButton,
    getConfirmButton: getConfirmButton,
    getContainer: getContainer,
    getDenyButton: getDenyButton,
    getFocusableElements: getFocusableElements,
    getFooter: getFooter,
    getHtmlContainer: getHtmlContainer,
    getIcon: getIcon,
    getIconContent: getIconContent,
    getImage: getImage,
    getInputLabel: getInputLabel,
    getLoader: getLoader,
    getPopup: getPopup,
    getProgressSteps: getProgressSteps,
    getTimerLeft: getTimerLeft,
    getTimerProgressBar: getTimerProgressBar,
    getTitle: getTitle,
    getValidationMessage: getValidationMessage,
    increaseTimer: increaseTimer,
    isDeprecatedParameter: isDeprecatedParameter,
    isLoading: isLoading,
    isTimerRunning: isTimerRunning,
    isUpdatableParameter: isUpdatableParameter,
    isValidParameter: isValidParameter,
    isVisible: isVisible,
    mixin: mixin,
    resumeTimer: resumeTimer,
    showLoading: showLoading,
    stopTimer: stopTimer,
    toggleTimer: toggleTimer
  });

  var Timer = /*#__PURE__*/function () {
    /**
     * @param {Function} callback
     * @param {number} delay
     */
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    /**
     * @returns {number}
     */
    return _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }
        return this.remaining;
      }

      /**
       * @returns {number}
       */
    }, {
      key: "stop",
      value: function stop() {
        if (this.started && this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date().getTime() - this.started.getTime();
        }
        return this.remaining;
      }

      /**
       * @param {number} n
       * @returns {number}
       */
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;
        if (running) {
          this.stop();
        }
        this.remaining += n;
        if (running) {
          this.start();
        }
        return this.remaining;
      }

      /**
       * @returns {number}
       */
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }
        return this.remaining;
      }

      /**
       * @returns {boolean}
       */
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);
  }();

  var swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  var getTemplateParams = function getTemplateParams(params) {
    /** @type {HTMLTemplateElement} */
    var template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;
    if (!template) {
      return {};
    }
    /** @type {DocumentFragment} */
    var templateContent = template.content;
    showWarningsForElements(templateContent);
    var result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  var getSwalParams = function getSwalParams(templateContent) {
    var result = {};
    /** @type {HTMLElement[]} */
    var swalParams = Array.from(templateContent.querySelectorAll('swal-param'));
    swalParams.forEach(function (param) {
      showWarningsForAttributes(param, ['name', 'value']);
      var paramName = param.getAttribute('name');
      var value = param.getAttribute('value');
      if (typeof defaultParams[paramName] === 'boolean') {
        result[paramName] = value !== 'false';
      } else if (_typeof(defaultParams[paramName]) === 'object') {
        result[paramName] = JSON.parse(value);
      } else {
        result[paramName] = value;
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  var getSwalFunctionParams = function getSwalFunctionParams(templateContent) {
    var result = {};
    /** @type {HTMLElement[]} */
    var swalFunctions = Array.from(templateContent.querySelectorAll('swal-function-param'));
    swalFunctions.forEach(function (param) {
      var paramName = param.getAttribute('name');
      var value = param.getAttribute('value');
      result[paramName] = new Function("return ".concat(value))();
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  var getSwalButtons = function getSwalButtons(templateContent) {
    var result = {};
    /** @type {HTMLElement[]} */
    var swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));
    swalButtons.forEach(function (button) {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      var type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;
      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }
      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Pick<SweetAlertOptions, 'imageUrl' | 'imageWidth' | 'imageHeight' | 'imageAlt'>}
   */
  var getSwalImage = function getSwalImage(templateContent) {
    var result = {};
    /** @type {HTMLElement | null} */
    var image = templateContent.querySelector('swal-image');
    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);
      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src') || undefined;
      }
      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width') || undefined;
      }
      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height') || undefined;
      }
      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt') || undefined;
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  var getSwalIcon = function getSwalIcon(templateContent) {
    var result = {};
    /** @type {HTMLElement} */
    var icon = templateContent.querySelector('swal-icon');
    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);
      if (icon.hasAttribute('type')) {
        /** @type {SweetAlertIcon} */
        // @ts-ignore
        result.icon = icon.getAttribute('type');
      }
      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }
      result.iconHtml = icon.innerHTML;
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  var getSwalInput = function getSwalInput(templateContent) {
    var result = {};
    /** @type {HTMLElement} */
    var input = templateContent.querySelector('swal-input');
    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      /** @type {SweetAlertInput} */
      // @ts-ignore
      result.input = input.getAttribute('type') || 'text';
      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }
      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }
      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }
    /** @type {HTMLElement[]} */
    var inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));
    if (inputOptions.length) {
      result.inputOptions = {};
      inputOptions.forEach(function (option) {
        showWarningsForAttributes(option, ['value']);
        var optionValue = option.getAttribute('value');
        var optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {SweetAlertOptions}
   */
  var getSwalStringParams = function getSwalStringParams(templateContent, paramNames) {
    var result = {};
    for (var i in paramNames) {
      var paramName = paramNames[i];
      /** @type {HTMLElement} */
      var tag = templateContent.querySelector(paramName);
      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   */
  var showWarningsForElements = function showWarningsForElements(templateContent) {
    var allowedElements = swalStringParams.concat(['swal-param', 'swal-function-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    Array.from(templateContent.children).forEach(function (el) {
      var tagName = el.tagName.toLowerCase();
      if (!allowedElements.includes(tagName)) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };

  /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */
  var showWarningsForAttributes = function showWarningsForAttributes(el, allowedAttributes) {
    Array.from(el.attributes).forEach(function (attribute) {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  var SHOW_CLASS_TIMEOUT = 10;

  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */
  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();
    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }
    var bodyStyles = window.getComputedStyle(document.body);
    var initialBodyOverflow = bodyStyles.overflowY;
    addClasses(container, popup, params);

    // scrolling is 'hidden' until animation is done, after that 'auto'
    setTimeout(function () {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);
    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }
    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }
    if (typeof params.didOpen === 'function') {
      setTimeout(function () {
        return params.didOpen(popup);
      });
    }
    removeClass(container, swalClasses['no-transition']);
  };

  /**
   * @param {AnimationEvent} event
   */
  var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
    var popup = getPopup();
    if (event.target !== popup || !animationEndEvent) {
      return;
    }
    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */
  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  /**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */
  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
    iOSfix();
    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      replaceScrollbarWithPadding(initialBodyOverflow);
    }

    // sweetalert2/issues/1247
    setTimeout(function () {
      container.scrollTop = 0;
    });
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  var addClasses = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop);
    if (params.animation) {
      // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059
      popup.style.setProperty('opacity', '0', 'important');
      show(popup, 'grid');
      setTimeout(function () {
        // Animate popup right after showing it
        addClass(popup, params.showClass.popup);
        // and remove the opacity workaround
        popup.style.removeProperty('opacity');
      }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062
    } else {
      show(popup, 'grid');
    }
    addClass([document.documentElement, document.body], swalClasses.shown);
    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var defaultInputValidators = {
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (params.inputValidator) {
      return;
    }
    if (params.input === 'email') {
      params.inputValidator = defaultInputValidators['email'];
    }
    if (params.input === 'url') {
      params.inputValidator = defaultInputValidators['url'];
    }
  }

  /**
   * @param {SweetAlertOptions} params
   */
  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }

  /**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */
  function setParameters(params) {
    setDefaultInputValidators(params);

    // showLoaderOnConfirm && preConfirm
    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }
    validateCustomTargetElement(params);

    // Replace newlines with <br> in title
    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }
    init(params);
  }

  /** @type {SweetAlert} */
  var currentInstance;
  var _promise = /*#__PURE__*/new WeakMap();
  var SweetAlert = /*#__PURE__*/function () {
    /**
     * @param {...any} args
     * @this {SweetAlert}
     */
    function SweetAlert() {
      _classCallCheck(this, SweetAlert);
      /**
       * @type {Promise<SweetAlertResult>}
       */
      _classPrivateFieldInitSpec(this, _promise, void 0);
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }
      currentInstance = this;

      // @ts-ignore
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var outerParams = Object.freeze(this.constructor.argsToParams(args));

      /** @type {Readonly<SweetAlertOptions>} */
      this.params = outerParams;

      /** @type {boolean} */
      this.isAwaitingPromise = false;
      _classPrivateFieldSet2(_promise, this, this._main(currentInstance.params));
    }
    return _createClass(SweetAlert, [{
      key: "_main",
      value: function _main(userParams) {
        var mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        showWarningsForParams(Object.assign({}, mixinParams, userParams));
        if (globalState.currentInstance) {
          var swalPromiseResolve = privateMethods.swalPromiseResolve.get(globalState.currentInstance);
          var isAwaitingPromise = globalState.currentInstance.isAwaitingPromise;
          globalState.currentInstance._destroy();
          if (!isAwaitingPromise) {
            swalPromiseResolve({
              isDismissed: true
            });
          }
          if (isModal()) {
            unsetAriaHidden();
          }
        }
        globalState.currentInstance = currentInstance;
        var innerParams = prepareParams(userParams, mixinParams);
        setParameters(innerParams);
        Object.freeze(innerParams);

        // clear the previous timer
        if (globalState.timeout) {
          globalState.timeout.stop();
          delete globalState.timeout;
        }

        // clear the restore focus timeout
        clearTimeout(globalState.restoreFocusTimeout);
        var domCache = populateDomCache(currentInstance);
        render(currentInstance, innerParams);
        privateProps.innerParams.set(currentInstance, innerParams);
        return swalPromise(currentInstance, domCache, innerParams);
      }

      // `catch` cannot be the name of a module export, so we define our thenable methods here instead
    }, {
      key: "then",
      value: function then(onFulfilled) {
        return _classPrivateFieldGet2(_promise, this).then(onFulfilled);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        return _classPrivateFieldGet2(_promise, this)["finally"](onFinally);
      }
    }]);
  }();

  /**
   * @param {SweetAlert} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise}
   */
  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve, reject) {
      // functions to handle all closings/dismissals
      /**
       * @param {DismissReason} dismiss
       */
      var dismissWith = function dismissWith(dismiss) {
        instance.close({
          isDismissed: true,
          dismiss: dismiss
        });
      };
      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);
      domCache.confirmButton.onclick = function () {
        handleConfirmButtonClick(instance);
      };
      domCache.denyButton.onclick = function () {
        handleDenyButtonClick(instance);
      };
      domCache.cancelButton.onclick = function () {
        handleCancelButtonClick(instance, dismissWith);
      };
      domCache.closeButton.onclick = function () {
        dismissWith(DismissReason.close);
      };
      handlePopupClick(innerParams, domCache, dismissWith);
      addKeydownHandler(globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams);

      // Scroll container to top on open (#1247, #1946)
      setTimeout(function () {
        domCache.container.scrollTop = 0;
      });
    });
  };

  /**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */
  var prepareParams = function prepareParams(userParams, mixinParams) {
    var templateParams = getTemplateParams(userParams);
    var params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131
    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    if (params.animation === false) {
      params.showClass = {
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }
    return params;
  };

  /**
   * @param {SweetAlert} instance
   * @returns {DomCache}
   */
  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */
  var setupTimer = function setupTimer(globalState, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);
    if (innerParams.timer) {
      globalState.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
        setTimeout(function () {
          if (globalState.timeout && globalState.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */
  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }
    if (!callIfFunction(innerParams.allowEnterKey)) {
      blurActiveElement();
      return;
    }
    if (!focusButton(domCache, innerParams)) {
      setFocus(-1, 1);
    }
  };

  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */
  var focusButton = function focusButton(domCache, innerParams) {
    if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }
    if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }
    if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }
    return false;
  };
  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  // Dear russian users visiting russian sites. Let's have fun.
  if (typeof window !== 'undefined' && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
    var now = new Date();
    var initiationDate = localStorage.getItem('swal-initiation');
    if (!initiationDate) {
      localStorage.setItem('swal-initiation', "".concat(now));
    } else if ((now.getTime() - Date.parse(initiationDate)) / (1000 * 60 * 60 * 24) > 3) {
      setTimeout(function () {
        document.body.style.pointerEvents = 'none';
        var ukrainianAnthem = document.createElement('audio');
        ukrainianAnthem.src = 'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3';
        ukrainianAnthem.loop = true;
        document.body.appendChild(ukrainianAnthem);
        setTimeout(function () {
          ukrainianAnthem.play()["catch"](function () {
            // ignore
          });
        }, 2500);
      }, 500);
    }
  }

  // Assign instance methods from src/instanceMethods/*.js to prototype
  SweetAlert.prototype.disableButtons = disableButtons;
  SweetAlert.prototype.enableButtons = enableButtons;
  SweetAlert.prototype.getInput = getInput;
  SweetAlert.prototype.disableInput = disableInput;
  SweetAlert.prototype.enableInput = enableInput;
  SweetAlert.prototype.hideLoading = hideLoading;
  SweetAlert.prototype.disableLoading = hideLoading;
  SweetAlert.prototype.showValidationMessage = showValidationMessage;
  SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
  SweetAlert.prototype.close = close;
  SweetAlert.prototype.closePopup = close;
  SweetAlert.prototype.closeModal = close;
  SweetAlert.prototype.closeToast = close;
  SweetAlert.prototype.rejectPromise = rejectPromise;
  SweetAlert.prototype.update = update;
  SweetAlert.prototype._destroy = _destroy;

  // Assign static methods from src/staticMethods/*.js to constructor
  Object.assign(SweetAlert, staticMethods);

  // Proxy to instance methods to constructor, for now, for backwards compatibility
  Object.keys(instanceMethods).forEach(function (key) {
    /**
     * @param {...any} args
     * @returns {any | undefined}
     */
    SweetAlert[key] = function () {
      if (currentInstance && currentInstance[key]) {
        var _currentInstance;
        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
      return null;
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.11.1';

  var Swal = SweetAlert;
  // @ts-ignore
  Swal["default"] = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "maxScreenWidth": 1920
  , "maxScreenHeight": 1080
  , "serverUpdateRate": 9
  , "maxPlayers": 40
  , "maxPlayersHard": 50
  , "collisionDepth": 6
  , "minimapRate": 3000
  , "colGrid": 10
  , "clientSendRate": 5
  , "healthBarWidth": 50
  , "healthBarPad": 4.5
  , "iconPadding": 15
  , "iconPad": 0.9
  , "deathFadeout": 3000
  , "crownIconScale": 60
  , "crownPad": 35
  , "chatCountdown": 3000
  , "chatCooldown": 500
  , "maxAge": 100
  , "gatherAngle": 1.208304866765305
  , "gatherWiggle": 10
  , "hitReturnRatio": 0.25
  , "hitAngle": 1.5707963267948966
  , "playerScale": 35
  , "playerSpeed": 0.0016
  , "playerDecel": 0.993
  , "nameY": 34
  , "skinColors": ["#bf8f54", "#cbb091", "#896c4b", "#fadadc", "#ececec", "#c37373", "#4c4c4c", "#ecaff7", "#738cc3", "#8bc373"]
  , "animalCount": 7
  , "aiTurnRandom": 0.06
  , "cowNames": ["Sid", "Steph", "Bmoe", "Romn", "Jononthecool", "Fiona", "Vince", "Nathan", "Nick", "Flappy", "Ronald", "Otis", "Pepe", "Mc Donald", "Theo",
    "Fabz", "Oliver", "Jeff", "Jimmy", "Helena", "Reaper", "Ben", "Alan", "Naomi", "XYZ", "Clever", "Jeremy", "Mike", "Destined", "Stallion", "Allison",
    "Meaty", "Sophia", "Vaja", "Joey", "Pendy", "Murdoch", "Theo", "Jared", "July", "Sonia", "Mel", "Dexter", "Quinn", "Milky"
  ]
  , "shieldAngle": 1.0471975511965976
  , "weaponVariants": [{
    "id": 0
    , "src": ""
    , "xp": 0
    , "val": 1
  }, {
    "id": 1
    , "src": "_g"
    , "xp": 3000
    , "val": 1.1
  }, {
    "id": 2
    , "src": "_d"
    , "xp": 7000
    , "val": 1.18
  }, {
    "id": 3
    , "src": "_r"
    , "poison": true
    , "xp": 12000
    , "val": 1.18
  }, {
    "id": 4
    , "src": "_e"
    , "poison": true
    , "xp": 15000
    , "val": 1.21
  }]
  , "resourceTypes": ["wood", "food", "stone", "points"]
  , "areaCount": 7
  , "treesPerArea": 9
  , "bushesPerArea": 3
  , "totalRocks": 32
  , "goldOres": 7
  , "riverWidth": 724
  , "riverPadding": 114
  , "waterCurrent": 0.0011
  , "waveSpeed": 0.0001
  , "waveMax": 1.3
  , "treeScales": [150, 160, 165, 175]
  , "bushScales": [80, 85, 95]
  , "rockScales": [80, 85, 90]
  , "snowBiomeTop": 2400
  , "snowSpeed": 0.75
  , "maxNameLength": 15
  , "mapScale": 14400
  , "mapPingScale": 40
  , "mapPingTime": 2200
  , "volcanoScale": 320
  , "innerVolcanoScale": 100
  , "volcanoAnimalStrength": 2
  , "volcanoAnimationDuration": 3200
  , "volcanoAggressionRadius": 1440
  , "volcanoAggressionPercentage": 0.2
  , "volcanoDamagePerSecond": -1
  , "volcanoLocationX": 13960
  , "volcanoLocationY": 13960
  , "MAX_ATTACK": 0.6
  , "MAX_SPAWN_DELAY": 1
  , "MAX_SPEED": 0.3
  , "MAX_TURN_SPEED": 0.3
  , "DAY_INTERVAL": 1440000
});


/***/ }),

/***/ "./src/js/data/ai.js":
/*!***************************!*\
  !*** ./src/js/data/ai.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var PI2 = 2 * Math.PI;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(sid, objectManager, players, items, UTILS, config, scoreCallback, server) {
  this.sid = sid, this.isAI = !0, this.nameIndex = UTILS.randInt(0, config.cowNames.length - 1), this.init = function (x, y, dir, index, data) {
    this.x = x, this.y = y, this.startX = data.fixedSpawn ? x : null, this.startY = data.fixedSpawn ? y : null, this.xVel = 0, this.yVel = 0, this.zIndex = 0, this.dir = dir, this.dirPlus = 0, this.index = index, this.src = data.src, data.name && (this.name = data.name), this.weightM = data.weightM, this.speed = data.speed, this.killScore = data.killScore, this.turnSpeed = data.turnSpeed, this.scale = data.scale, this.maxHealth = data.health, this.leapForce = data.leapForce, this.health = this.maxHealth, this.chargePlayer = data.chargePlayer, this.viewRange = data.viewRange, this.drop = data.drop, this.dmg = data.dmg, this.hostile = data.hostile, this.dontRun = data.dontRun, this.hitRange = data.hitRange, this.hitDelay = data.hitDelay, this.hitScare = data.hitScare, this.spriteMlt = data.spriteMlt, this.nameScale = data.nameScale, this.colDmg = data.colDmg, this.noTrap = data.noTrap, this.spawnDelay = data.spawnDelay, this.hitWait = 0, this.waitCount = 1000, this.moveCount = 0, this.targetDir = 0, this.active = !0, this.alive = !0, this.runFrom = null, this.chargeTarget = null, this.dmgOverTime = {};
  };
  var timerCount = 0;
  this.update = function (delta) {
    if (this.active) {
      if (this.spawnCounter)
        return this.spawnCounter -= delta, void(this.spawnCounter <= 0 && (this.spawnCounter = 0, this.x = this.startX || UTILS.randInt(0, config.mapScale), this.y = this.startY || UTILS.randInt(0, config.mapScale)));
      (timerCount -= delta) <= 0 && (this.dmgOverTime.dmg && (this.changeHealth(-this.dmgOverTime.dmg, this.dmgOverTime.doer), this.dmgOverTime.time -= 1, this.dmgOverTime.time <= 0 && (this.dmgOverTime.dmg = 0)), timerCount = 1000);
      var charging = !1,
        slowMlt = 1;
      if (!this.zIndex && !this.lockMove && this.y >= config.mapScale / 2 - config.riverWidth / 2 && this.y <= config.mapScale / 2 + config.riverWidth / 2 && (slowMlt = 0.33, this.xVel += config.waterCurrent * delta), this.lockMove)
        this.xVel = 0, this.yVel = 0;
      else if (this.waitCount > 0) {
        if (this.waitCount -= delta, this.waitCount <= 0)
          if (this.chargePlayer) {
            for (var tmpPlayer, bestDst, tmpDist, i = 0; i < players.length; ++i)
              !players[i].alive || players[i].skin && players[i].skin.bullRepel || (tmpDist = UTILS.getDistance(this.x, this.y, players[i].x, players[i].y)) <= this.viewRange && (!tmpPlayer || tmpDist < bestDst) && (bestDst = tmpDist, tmpPlayer = players[i]);
            tmpPlayer ? (this.chargeTarget = tmpPlayer, this.moveCount = UTILS.randInt(8000, 12000)) : (this.moveCount = UTILS.randInt(1000, 2000), this.targetDir = UTILS.randFloat(-Math.PI, Math.PI));
          } else
            this.moveCount = UTILS.randInt(4000, 10000), this.targetDir = UTILS.randFloat(-Math.PI, Math.PI);
      } else if (this.moveCount > 0) {
        var tmpSpd = this.speed * slowMlt;
        if (this.runFrom && this.runFrom.active && (!this.runFrom.isPlayer || this.runFrom.alive) ? (this.targetDir = UTILS.getDirection(this.x, this.y, this.runFrom.x, this.runFrom.y), tmpSpd *= 1.42) : this.chargeTarget && this.chargeTarget.alive && (this.targetDir = UTILS.getDirection(this.chargeTarget.x, this.chargeTarget.y, this.x, this.y), tmpSpd *= 1.75, charging = !0), this.hitWait && (tmpSpd *= 0.3), this.dir != this.targetDir) {
          this.dir %= PI2;
          var netAngle = (this.dir - this.targetDir + PI2) % PI2,
            amnt = Math.min(Math.abs(netAngle - PI2), netAngle, this.turnSpeed * delta),
            sign = netAngle - Math.PI >= 0 ? 1 : -1;
          this.dir += sign * amnt + PI2;
        }
        this.dir %= PI2, this.xVel += tmpSpd * delta * Math.cos(this.dir), this.yVel += tmpSpd * delta * Math.sin(this.dir), this.moveCount -= delta, this.moveCount <= 0 && (this.runFrom = null, this.chargeTarget = null, this.waitCount = this.hostile ? 1500 : UTILS.randInt(1500, 6000));
      }
      this.zIndex = 0, this.lockMove = !1;
      var tmpSpeed = UTILS.getDistance(0, 0, this.xVel * delta, this.yVel * delta),
        depth = Math.min(4, Math.max(1, Math.round(tmpSpeed / 40))),
        tMlt = 1 / depth;
      for (i = 0; i < depth; ++i) {
        this.xVel && (this.x += this.xVel * delta * tMlt), this.yVel && (this.y += this.yVel * delta * tMlt), tmpList = objectManager.getGridArrays(this.x, this.y, this.scale);
        for (var x = 0; x < tmpList.length; ++x)
          for (var y = 0; y < tmpList[x].length; ++y)
            tmpList[x][y].active && objectManager.checkCollision(this, tmpList[x][y], tMlt);
      }
      var tmpObj, tmpDst, tmpDir, hitting = !1;
      if (this.hitWait > 0 && (this.hitWait -= delta, this.hitWait <= 0)) {
        hitting = !0, this.hitWait = 0, this.leapForce && !UTILS.randInt(0, 2) && (this.xVel += this.leapForce * Math.cos(this.dir), this.yVel += this.leapForce * Math.sin(this.dir));
        for (var tmpList = objectManager.getGridArrays(this.x, this.y, this.hitRange), t = 0; t < tmpList.length; ++t)
          for (x = 0; x < tmpList[t].length; ++x)
            (tmpObj = tmpList[t][x])
            .health && (tmpDst = UTILS.getDistance(this.x, this.y, tmpObj.x, tmpObj.y)) < tmpObj.scale + this.hitRange && (tmpObj.changeHealth(5 * -this.dmg) && objectManager.disableObj(tmpObj), objectManager.hitObj(tmpObj, UTILS.getDirection(this.x, this.y, tmpObj.x, tmpObj.y)));
        for (x = 0; x < players.length; ++x)
          players[x].canSee(this) && server.send(players[x].id, 'aa', this.sid);
      }
      if (charging || hitting)
        for (i = 0; i < players.length; ++i)
          (tmpObj = players[i]) && tmpObj.alive && (tmpDst = UTILS.getDistance(this.x, this.y, tmpObj.x, tmpObj.y), this.hitRange ? !this.hitWait && tmpDst <= this.hitRange + tmpObj.scale && (hitting ? (tmpDir = UTILS.getDirection(tmpObj.x, tmpObj.y, this.x, this.y), tmpObj.changeHealth(-this.dmg), tmpObj.xVel += 0.6 * Math.cos(tmpDir), tmpObj.yVel += 0.6 * Math.sin(tmpDir), this.runFrom = null, this.chargeTarget = null, this.waitCount = 3000, this.hitWait = UTILS.randInt(0, 2) ? 0 : 600) : this.hitWait = this.hitDelay) : tmpDst <= this.scale + tmpObj.scale && (tmpDir = UTILS.getDirection(tmpObj.x, tmpObj.y, this.x, this.y), tmpObj.changeHealth(-this.dmg), tmpObj.xVel += 0.55 * Math.cos(tmpDir), tmpObj.yVel += 0.55 * Math.sin(tmpDir)));
      this.xVel && (this.xVel *= Math.pow(config.playerDecel, delta)), this.yVel && (this.yVel *= Math.pow(config.playerDecel, delta));
      var tmpScale = this.scale;
      this.x - tmpScale < 0 ? (this.x = tmpScale, this.xVel = 0) : this.x + tmpScale > config.mapScale && (this.x = config.mapScale - tmpScale, this.xVel = 0), this.y - tmpScale < 0 ? (this.y = tmpScale, this.yVel = 0) : this.y + tmpScale > config.mapScale && (this.y = config.mapScale - tmpScale, this.yVel = 0);
    }
  }, this.canSee = function (other) {
    if (!other)
      return !1;
    if (other.skin && other.skin.invisTimer && other.noMovTimer >= other.skin.invisTimer)
      return !1;
    var dx = Math.abs(other.x - this.x) - other.scale,
      dy = Math.abs(other.y - this.y) - other.scale;
    return dx <= config.maxScreenWidth / 2 * 1.3 && dy <= config.maxScreenHeight / 2 * 1.3;
  };
  var tmpRatio = 0,
    animIndex = 0;
  this.animate = function (delta) {
    this.animTime > 0 && (this.animTime -= delta, this.animTime <= 0 ? (this.animTime = 0, this.dirPlus = 0, tmpRatio = 0, animIndex = 0) : 0 == animIndex ? (tmpRatio += delta / (this.animSpeed * config.hitReturnRatio), this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.min(1, tmpRatio)), tmpRatio >= 1 && (tmpRatio = 1, animIndex = 1)) : (tmpRatio -= delta / (this.animSpeed * (1 - config.hitReturnRatio)), this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.max(0, tmpRatio))));
  }, this.startAnim = function () {
    this.animTime = this.animSpeed = 600, this.targetAngle = 0.8 * Math.PI, tmpRatio = 0, animIndex = 0;
  }, this.changeHealth = function (val, doer, runFrom) {
    if (this.active && (this.health += val, runFrom && (this.hitScare && !UTILS.randInt(0, this.hitScare) ? (this.runFrom = runFrom, this.waitCount = 0, this.moveCount = 2000) : this.hostile && this.chargePlayer && runFrom.isPlayer ? (this.chargeTarget = runFrom, this.waitCount = 0, this.moveCount = 8000) : this.dontRun || (this.runFrom = runFrom, this.waitCount = 0, this.moveCount = 2000)), val < 0 && this.hitRange && UTILS.randInt(0, 1) && (this.hitWait = 500), doer && doer.canSee(this) && val < 0 && server.send(doer.id, 't', Math.round(this.x), Math.round(this.y), Math.round(-val), 1), this.health <= 0 && (this.spawnDelay ? (this.spawnCounter = this.spawnDelay, this.x = -1000000, this.y = -1000000) : (this.x = this.startX || UTILS.randInt(0, config.mapScale), this.y = this.startY || UTILS.randInt(0, config.mapScale)), this.health = this.maxHealth, this.runFrom = null, doer && (scoreCallback(doer, this.killScore), this.drop))))
      for (var i = 0; i < this.drop.length;)
        doer.addResource(config.resourceTypes.indexOf(this.drop[i]), this.drop[i + 1]), i += 2;
  };
};


/***/ }),

/***/ "./src/js/data/aiManager.js":
/*!**********************************!*\
  !*** ./src/js/data/aiManager.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ais, AI, players, items, objectManager, config, UTILS, scoreCallback, server) {
  this.aiTypes = [{
      id: 0,
      src: 'cow_1',
      killScore: 150,
      health: 500,
      weightM: 0.8,
      speed: 0.00095,
      turnSpeed: 0.001,
      scale: 72,
      drop: [
        'food',
        50
      ]
    },
    {
      id: 1,
      src: 'pig_1',
      killScore: 200,
      health: 800,
      weightM: 0.6,
      speed: 0.00085,
      turnSpeed: 0.001,
      scale: 72,
      drop: [
        'food',
        80
      ]
    },
    {
      id: 2,
      name: 'Bull',
      src: 'bull_2',
      hostile: !0,
      dmg: 20,
      killScore: 1000,
      health: 1800,
      weightM: 0.5,
      speed: 0.00094,
      turnSpeed: 0.00074,
      scale: 78,
      viewRange: 800,
      chargePlayer: !0,
      drop: [
        'food',
        100
      ]
    },
    {
      id: 3,
      name: 'Bully',
      src: 'bull_1',
      hostile: !0,
      dmg: 20,
      killScore: 2000,
      health: 2800,
      weightM: 0.45,
      speed: 0.001,
      turnSpeed: 0.0008,
      scale: 90,
      viewRange: 900,
      chargePlayer: !0,
      drop: [
        'food',
        400
      ]
    },
    {
      id: 4,
      name: 'Wolf',
      src: 'wolf_1',
      hostile: !0,
      dmg: 8,
      killScore: 500,
      health: 300,
      weightM: 0.45,
      speed: 0.001,
      turnSpeed: 0.002,
      scale: 84,
      viewRange: 800,
      chargePlayer: !0,
      drop: [
        'food',
        200
      ]
    },
    {
      id: 5,
      name: 'Quack',
      src: 'chicken_1',
      dmg: 8,
      killScore: 2000,
      noTrap: !0,
      health: 300,
      weightM: 0.2,
      speed: 0.0018,
      turnSpeed: 0.006,
      scale: 70,
      drop: [
        'food',
        100
      ]
    },
    {
      id: 6,
      name: 'MOOSTAFA',
      nameScale: 50,
      src: 'enemy',
      hostile: !0,
      dontRun: !0,
      fixedSpawn: !0,
      spawnDelay: 60000,
      noTrap: !0,
      colDmg: 100,
      dmg: 40,
      killScore: 8000,
      health: 18000,
      weightM: 0.4,
      speed: 0.0007,
      turnSpeed: 0.01,
      scale: 80,
      spriteMlt: 1.8,
      leapForce: 0.9,
      viewRange: 1000,
      hitRange: 210,
      hitDelay: 1000,
      chargePlayer: !0,
      drop: [
        'food',
        100
      ]
    },
    {
      id: 7,
      name: 'Treasure',
      hostile: !0,
      nameScale: 35,
      src: 'crate_1',
      fixedSpawn: !0,
      spawnDelay: 120000,
      colDmg: 200,
      killScore: 5000,
      health: 20000,
      weightM: 0.1,
      speed: 0,
      turnSpeed: 0,
      scale: 70,
      spriteMlt: 1
    },
    {
      id: 8,
      name: 'MOOFIE',
      src: 'wolf_2',
      hostile: !0,
      fixedSpawn: !0,
      dontRun: !0,
      hitScare: 4,
      spawnDelay: 30000,
      noTrap: !0,
      nameScale: 35,
      dmg: 10,
      colDmg: 100,
      killScore: 3000,
      health: 7000,
      weightM: 0.45,
      speed: 0.0015,
      turnSpeed: 0.002,
      scale: 90,
      viewRange: 800,
      chargePlayer: !0,
      drop: [
        'food',
        1000
      ]
    }
  ], this.spawn = function (x, y, dir, index) {
    for (var tmpObj, i = 0; i < ais.length; ++i)
      if (!ais[i].active) {
        tmpObj = ais[i];
        break;
      }
    return tmpObj || (tmpObj = new AI(ais.length, objectManager, players, items, UTILS, config, scoreCallback, server), ais.push(tmpObj)), tmpObj.init(x, y, dir, index, this.aiTypes[index]), tmpObj;
  };
};


/***/ }),

/***/ "./src/js/data/gameObject.js":
/*!***********************************!*\
  !*** ./src/js/data/gameObject.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(sid) {
  this.sid = sid, this.init = function (x, y, dir, scale, type, data, owner) {
    data = data || {}, this.sentTo = {}, this.gridLocations = [], this.active = !0, this.doUpdate = data.doUpdate, this.x = x, this.y = y, this.dir = dir, this.xWiggle = 0, this.yWiggle = 0, this.scale = scale, this.type = type, this.id = data.id, this.owner = owner, this.name = data.name, this.isItem = null != this.id, this.group = data.group, this.health = data.health, this.layer = 2, null != this.group ? this.layer = this.group.layer : 0 == this.type ? this.layer = 3 : 2 == this.type ? this.layer = 0 : 4 == this.type && (this.layer = -1), this.colDiv = data.colDiv || 1, this.blocker = data.blocker, this.ignoreCollision = data.ignoreCollision, this.dontGather = data.dontGather, this.hideFromEnemy = data.hideFromEnemy, this.friction = data.friction, this.projDmg = data.projDmg, this.dmg = data.dmg, this.pDmg = data.pDmg, this.pps = data.pps, this.zIndex = data.zIndex || 0, this.turnSpeed = data.turnSpeed, this.req = data.req, this.trap = data.trap, this.healCol = data.healCol, this.teleport = data.teleport, this.boostSpeed = data.boostSpeed, this.projectile = data.projectile, this.shootRange = data.shootRange, this.shootRate = data.shootRate, this.shootCount = this.shootRate, this.spawnPoint = data.spawnPoint;
  }, this.changeHealth = function (amount, doer) {
    return this.health += amount, this.health <= 0;
  }, this.getScale = function (sM, ig) {
    return sM = sM || 1, this.scale * (this.isItem || 2 == this.type || 3 == this.type || 4 == this.type ? 1 : 0.6 * sM) * (ig ? 1 : this.colDiv);
  }, this.visibleToPlayer = function (player) {
    return !this.hideFromEnemy || this.owner && (this.owner == player || this.owner.team && player.team == this.owner.team);
  }, this.update = function (delta) {
    this.active && (this.xWiggle && (this.xWiggle *= Math.pow(0.99, delta)), this.yWiggle && (this.yWiggle *= Math.pow(0.99, delta)), this.turnSpeed && (this.dir += this.turnSpeed * delta));
  };
};


/***/ }),

/***/ "./src/js/data/items.js":
/*!******************************!*\
  !*** ./src/js/data/items.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const items = {};
items.groups = [{
    id: 0,
    name: 'food',
    layer: 0
  },
  {
    id: 1,
    name: 'walls',
    place: !0,
    limit: 30,
    layer: 0
  },
  {
    id: 2,
    name: 'spikes',
    place: !0,
    limit: 15,
    layer: 0
  },
  {
    id: 3,
    name: 'mill',
    place: !0,
    limit: 7,
    layer: 1
  },
  {
    id: 4,
    name: 'mine',
    place: !0,
    limit: 1,
    layer: 0
  },
  {
    id: 5,
    name: 'trap',
    place: !0,
    limit: 6,
    layer: -1
  },
  {
    id: 6,
    name: 'booster',
    place: !0,
    limit: 12,
    layer: -1
  },
  {
    id: 7,
    name: 'turret',
    place: !0,
    limit: 2,
    layer: 1
  },
  {
    id: 8,
    name: 'watchtower',
    place: !0,
    limit: 12,
    layer: 1
  },
  {
    id: 9,
    name: 'buff',
    place: !0,
    limit: 4,
    layer: -1
  },
  {
    id: 10,
    name: 'spawn',
    place: !0,
    limit: 1,
    layer: -1
  },
  {
    id: 11,
    name: 'sapling',
    place: !0,
    limit: 2,
    layer: 0
  },
  {
    id: 12,
    name: 'blocker',
    place: !0,
    limit: 3,
    layer: -1
  },
  {
    id: 13,
    name: 'teleporter',
    place: !0,
    limit: 2,
    layer: -1
  }
], items.projectiles = [{
    indx: 0,
    layer: 0,
    src: 'arrow_1',
    dmg: 25,
    speed: 1.6,
    scale: 103,
    range: 1000
  },
  {
    indx: 1,
    layer: 1,
    dmg: 25,
    scale: 20
  },
  {
    indx: 0,
    layer: 0,
    src: 'arrow_1',
    dmg: 35,
    speed: 2.5,
    scale: 103,
    range: 1200
  },
  {
    indx: 0,
    layer: 0,
    src: 'arrow_1',
    dmg: 30,
    speed: 2,
    scale: 103,
    range: 1200
  },
  {
    indx: 1,
    layer: 1,
    dmg: 16,
    scale: 20
  },
  {
    indx: 0,
    layer: 0,
    src: 'bullet_1',
    dmg: 50,
    speed: 3.6,
    scale: 160,
    range: 1400
  }
], items.weapons = [{
    id: 0,
    type: 0,
    name: 'tool hammer',
    desc: 'tool for gathering all resources',
    src: 'hammer_1',
    length: 140,
    width: 140,
    xOff: -3,
    yOff: 18,
    dmg: 25,
    range: 65,
    gather: 1,
    speed: 300
  },
  {
    id: 1,
    type: 0,
    age: 2,
    name: 'hand axe',
    desc: 'gathers resources at a higher rate',
    src: 'axe_1',
    length: 140,
    width: 140,
    xOff: 3,
    yOff: 24,
    dmg: 30,
    spdMult: 1,
    range: 70,
    gather: 2,
    speed: 400
  },
  {
    id: 2,
    type: 0,
    age: 8,
    pre: 1,
    name: 'great axe',
    desc: 'deal more damage and gather more resources',
    src: 'great_axe_1',
    length: 140,
    width: 140,
    xOff: -8,
    yOff: 25,
    dmg: 35,
    spdMult: 1,
    range: 75,
    gather: 4,
    speed: 400
  },
  {
    id: 3,
    type: 0,
    age: 2,
    name: 'short sword',
    desc: 'increased attack power but slower move speed',
    src: 'sword_1',
    iPad: 1.3,
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 46,
    dmg: 35,
    spdMult: 0.85,
    range: 110,
    gather: 1,
    speed: 300
  },
  {
    id: 4,
    type: 0,
    age: 8,
    pre: 3,
    name: 'katana',
    desc: 'greater range and damage',
    src: 'samurai_1',
    iPad: 1.3,
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 59,
    dmg: 40,
    spdMult: 0.8,
    range: 118,
    gather: 1,
    speed: 300
  },
  {
    id: 5,
    type: 0,
    age: 2,
    name: 'polearm',
    desc: 'long range melee weapon',
    src: 'spear_1',
    iPad: 1.3,
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 53,
    dmg: 45,
    knock: 0.2,
    spdMult: 0.82,
    range: 142,
    gather: 1,
    speed: 700
  },
  {
    id: 6,
    type: 0,
    age: 2,
    name: 'bat',
    desc: 'fast long range melee weapon',
    src: 'bat_1',
    iPad: 1.3,
    length: 110,
    width: 180,
    xOff: -8,
    yOff: 53,
    dmg: 20,
    knock: 0.7,
    range: 110,
    gather: 1,
    speed: 300
  },
  {
    id: 7,
    type: 0,
    age: 2,
    name: 'daggers',
    desc: 'really fast short range weapon',
    src: 'dagger_1',
    iPad: 0.8,
    length: 110,
    width: 110,
    xOff: 18,
    yOff: 0,
    dmg: 20,
    knock: 0.1,
    range: 65,
    gather: 1,
    hitSlow: 0.1,
    spdMult: 1.13,
    speed: 100
  },
  {
    id: 8,
    type: 0,
    age: 2,
    name: 'stick',
    desc: 'great for gathering but very weak',
    src: 'stick_1',
    length: 140,
    width: 140,
    xOff: 3,
    yOff: 24,
    dmg: 1,
    spdMult: 1,
    range: 70,
    gather: 7,
    speed: 400
  },
  {
    id: 9,
    type: 1,
    age: 6,
    name: 'hunting bow',
    desc: 'bow used for ranged combat and hunting',
    src: 'bow_1',
    req: [
      'wood',
      4
    ],
    length: 120,
    width: 120,
    xOff: -6,
    yOff: 0,
    projectile: 0,
    spdMult: 0.75,
    speed: 600
  },
  {
    id: 10,
    type: 1,
    age: 6,
    name: 'great hammer',
    desc: 'hammer used for destroying structures',
    src: 'great_hammer_1',
    length: 140,
    width: 140,
    xOff: -9,
    yOff: 25,
    dmg: 10,
    spdMult: 0.88,
    range: 75,
    sDmg: 7.5,
    gather: 1,
    speed: 400
  },
  {
    id: 11,
    type: 1,
    age: 6,
    name: 'wooden shield',
    desc: 'blocks projectiles and reduces melee damage',
    src: 'shield_1',
    length: 120,
    width: 120,
    shield: 0.2,
    xOff: 6,
    yOff: 0,
    spdMult: 0.7
  },
  {
    id: 12,
    type: 1,
    age: 8,
    pre: 9,
    name: 'crossbow',
    desc: 'deals more damage and has greater range',
    src: 'crossbow_1',
    req: [
      'wood',
      5
    ],
    aboveHand: !0,
    armS: 0.75,
    length: 120,
    width: 120,
    xOff: -4,
    yOff: 0,
    projectile: 2,
    spdMult: 0.7,
    speed: 700
  },
  {
    id: 13,
    type: 1,
    age: 9,
    pre: 12,
    name: 'repeater crossbow',
    desc: 'high firerate crossbow with reduced damage',
    src: 'crossbow_2',
    req: [
      'wood',
      10
    ],
    aboveHand: !0,
    armS: 0.75,
    length: 120,
    width: 120,
    xOff: -4,
    yOff: 0,
    projectile: 3,
    spdMult: 0.7,
    speed: 230
  },
  {
    id: 14,
    type: 1,
    age: 6,
    name: 'mc grabby',
    desc: 'steals resources from enemies',
    src: 'grab_1',
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 53,
    dmg: 0,
    steal: 250,
    knock: 0.2,
    spdMult: 1.05,
    range: 125,
    gather: 0,
    speed: 700
  },
  {
    id: 15,
    type: 1,
    age: 9,
    pre: 12,
    name: 'musket',
    desc: 'slow firerate but high damage and range',
    src: 'musket_1',
    req: [
      'stone',
      10
    ],
    aboveHand: !0,
    rec: 0.35,
    armS: 0.6,
    hndS: 0.3,
    hndD: 1.6,
    length: 205,
    width: 205,
    xOff: 25,
    yOff: 0,
    projectile: 5,
    hideProjectile: !0,
    spdMult: 0.6,
    speed: 1500
  }
], items.list = [{
    group: items.groups[0],
    name: 'apple',
    desc: 'restores 20 health when consumed',
    req: [
      'food',
      10
    ],
    consume: function (doer) {
      return doer.changeHealth(20, doer);
    },
    scale: 22,
    holdOffset: 15
  },
  {
    age: 3,
    group: items.groups[0],
    name: 'cookie',
    desc: 'restores 40 health when consumed',
    req: [
      'food',
      15
    ],
    consume: function (doer) {
      return doer.changeHealth(40, doer);
    },
    scale: 27,
    holdOffset: 15
  },
  {
    age: 7,
    group: items.groups[0],
    name: 'cheese',
    desc: 'restores 30 health and another 50 over 5 seconds',
    req: [
      'food',
      25
    ],
    consume: function (doer) {
      return !!(doer.changeHealth(30, doer) || doer.health < 100) && (doer.dmgOverTime.dmg = -10, doer.dmgOverTime.doer = doer, doer.dmgOverTime.time = 5, !0);
    },
    scale: 27,
    holdOffset: 15
  },
  {
    group: items.groups[1],
    name: 'wood wall',
    desc: 'provides protection for your village',
    req: [
      'wood',
      10
    ],
    projDmg: !0,
    health: 380,
    scale: 50,
    holdOffset: 20,
    placeOffset: -5
  },
  {
    age: 3,
    group: items.groups[1],
    name: 'stone wall',
    desc: 'provides improved protection for your village',
    req: [
      'stone',
      25
    ],
    health: 900,
    scale: 50,
    holdOffset: 20,
    placeOffset: -5
  },
  {
    age: 7,
    pre: 1,
    group: items.groups[1],
    name: 'castle wall',
    desc: 'provides powerful protection for your village',
    req: [
      'stone',
      35
    ],
    health: 1500,
    scale: 52,
    holdOffset: 20,
    placeOffset: -5
  },
  {
    group: items.groups[2],
    name: 'spikes',
    desc: 'damages enemies when they touch them',
    req: [
      'wood',
      20,
      'stone',
      5
    ],
    health: 400,
    dmg: 20,
    scale: 49,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5
  },
  {
    age: 5,
    group: items.groups[2],
    name: 'greater spikes',
    desc: 'damages enemies when they touch them',
    req: [
      'wood',
      30,
      'stone',
      10
    ],
    health: 500,
    dmg: 35,
    scale: 52,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5
  },
  {
    age: 9,
    pre: 1,
    group: items.groups[2],
    name: 'poison spikes',
    desc: 'poisons enemies when they touch them',
    req: [
      'wood',
      35,
      'stone',
      15
    ],
    health: 600,
    dmg: 30,
    pDmg: 5,
    scale: 52,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5
  },
  {
    age: 9,
    pre: 2,
    group: items.groups[2],
    name: 'spinning spikes',
    desc: 'damages enemies when they touch them',
    req: [
      'wood',
      30,
      'stone',
      20
    ],
    health: 500,
    dmg: 45,
    turnSpeed: 0.003,
    scale: 52,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5
  },
  {
    group: items.groups[3],
    name: 'windmill',
    desc: 'generates gold over time',
    req: [
      'wood',
      50,
      'stone',
      10
    ],
    health: 400,
    pps: 1,
    turnSpeed: 0.0016,
    spritePadding: 25,
    iconLineMult: 12,
    scale: 45,
    holdOffset: 20,
    placeOffset: 5
  },
  {
    age: 5,
    pre: 1,
    group: items.groups[3],
    name: 'faster windmill',
    desc: 'generates more gold over time',
    req: [
      'wood',
      60,
      'stone',
      20
    ],
    health: 500,
    pps: 1.5,
    turnSpeed: 0.0025,
    spritePadding: 25,
    iconLineMult: 12,
    scale: 47,
    holdOffset: 20,
    placeOffset: 5
  },
  {
    age: 8,
    pre: 1,
    group: items.groups[3],
    name: 'power mill',
    desc: 'generates more gold over time',
    req: [
      'wood',
      100,
      'stone',
      50
    ],
    health: 800,
    pps: 2,
    turnSpeed: 0.005,
    spritePadding: 25,
    iconLineMult: 12,
    scale: 47,
    holdOffset: 20,
    placeOffset: 5
  },
  {
    age: 5,
    group: items.groups[4],
    type: 2,
    name: 'mine',
    desc: 'allows you to mine stone',
    req: [
      'wood',
      20,
      'stone',
      100
    ],
    iconLineMult: 12,
    scale: 65,
    holdOffset: 20,
    placeOffset: 0
  },
  {
    age: 5,
    group: items.groups[11],
    type: 0,
    name: 'sapling',
    desc: 'allows you to farm wood',
    req: [
      'wood',
      150
    ],
    iconLineMult: 12,
    colDiv: 0.5,
    scale: 110,
    holdOffset: 50,
    placeOffset: -15
  },
  {
    age: 4,
    group: items.groups[5],
    name: 'pit trap',
    desc: 'pit that traps enemies if they walk over it',
    req: [
      'wood',
      30,
      'stone',
      30
    ],
    trap: !0,
    ignoreCollision: !0,
    hideFromEnemy: !0,
    health: 500,
    colDiv: 0.2,
    scale: 50,
    holdOffset: 20,
    placeOffset: -5
  },
  {
    age: 4,
    group: items.groups[6],
    name: 'boost pad',
    desc: 'provides boost when stepped on',
    req: [
      'stone',
      20,
      'wood',
      5
    ],
    ignoreCollision: !0,
    boostSpeed: 1.5,
    health: 150,
    colDiv: 0.7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
  },
  {
    age: 7,
    group: items.groups[7],
    doUpdate: !0,
    name: 'turret',
    desc: 'defensive structure that shoots at enemies',
    req: [
      'wood',
      200,
      'stone',
      150
    ],
    health: 800,
    projectile: 1,
    shootRange: 700,
    shootRate: 2200,
    scale: 43,
    holdOffset: 20,
    placeOffset: -5
  },
  {
    age: 7,
    group: items.groups[8],
    name: 'platform',
    desc: 'platform to shoot over walls and cross over water',
    req: [
      'wood',
      20
    ],
    ignoreCollision: !0,
    zIndex: 1,
    health: 300,
    scale: 43,
    holdOffset: 20,
    placeOffset: -5
  },
  {
    age: 7,
    group: items.groups[9],
    name: 'healing pad',
    desc: 'standing on it will slowly heal you',
    req: [
      'wood',
      30,
      'food',
      10
    ],
    ignoreCollision: !0,
    healCol: 15,
    health: 400,
    colDiv: 0.7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
  },
  {
    age: 9,
    group: items.groups[10],
    name: 'spawn pad',
    desc: 'you will spawn here when you die but it will dissapear',
    req: [
      'wood',
      100,
      'stone',
      100
    ],
    health: 400,
    ignoreCollision: !0,
    spawnPoint: !0,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
  },
  {
    age: 7,
    group: items.groups[12],
    name: 'blocker',
    desc: 'blocks building in radius',
    req: [
      'wood',
      30,
      'stone',
      25
    ],
    ignoreCollision: !0,
    blocker: 300,
    health: 400,
    colDiv: 0.7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
  },
  {
    age: 7,
    group: items.groups[13],
    name: 'teleporter',
    desc: 'teleports you to a random point on the map',
    req: [
      'wood',
      60,
      'stone',
      60
    ],
    ignoreCollision: !0,
    teleport: !0,
    health: 200,
    colDiv: 0.7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
  }
];
for (var i = 0; i < items.list.length; ++i)
  items.list[i].id = i, items.list[i].pre && (items.list[i].pre = i - items.list[i].pre);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (items);


/***/ }),

/***/ "./src/js/data/mapManager.js":
/*!***********************************!*\
  !*** ./src/js/data/mapManager.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ctx = console/**.context**/;

if ("log" in ctx) {
  ctx.log("This script is made using Illya#9999's bundle processor, debundled by 0xffabc");
}


/***/ }),

/***/ "./src/js/data/objectManager.js":
/*!**************************************!*\
  !*** ./src/js/data/objectManager.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var mathFloor = Math.floor,
  mathABS = Math.abs,
  mathCOS = Math.cos,
  mathSIN = Math.sin,
  mathSQRT = (Math.pow, Math.sqrt);
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(GameObject, gameObjects, UTILS, config, players, server) {
  var tmpX, tmpY;
  this.objects = gameObjects, this.grids = {}, this.updateObjects = [];
  var tmpS = config.mapScale / config.colGrid;
  this.setObjectGrids = function (obj) {
    for (var objX = Math.min(config.mapScale, Math.max(0, obj.x)), objY = Math.min(config.mapScale, Math.max(0, obj.y)), x = 0; x < config.colGrid; ++x) {
      tmpX = x * tmpS;
      for (var y = 0; y < config.colGrid; ++y)
        tmpY = y * tmpS, objX + obj.scale >= tmpX && objX - obj.scale <= tmpX + tmpS && objY + obj.scale >= tmpY && objY - obj.scale <= tmpY + tmpS && (this.grids[x + '_' + y] || (this.grids[x + '_' + y] = []), this.grids[x + '_' + y].push(obj), obj.gridLocations.push(x + '_' + y));
    }
  }, this.removeObjGrid = function (obj) {
    for (var tmpIndx, i = 0; i < obj.gridLocations.length; ++i)
      (tmpIndx = this.grids[obj.gridLocations[i]].indexOf(obj)) >= 0 && this.grids[obj.gridLocations[i]].splice(tmpIndx, 1);
  }, this.disableObj = function (obj) {
    if (!obj) return;
    if (obj.active = !1, server) {
      obj.owner && obj.pps && (obj.owner.pps -= obj.pps), this.removeObjGrid(obj);
      var tmpIndx = this.updateObjects.indexOf(obj);
      delete this.updateObjects[tmpIndx];
    }
  }, this.hitObj = function (tmpObj, tmpDir) {
    for (var p = 0; p < players.length; ++p)
      players[p].active && (tmpObj.sentTo[players[p].id] && (tmpObj.active ? players[p].canSee(tmpObj) && server.send(players[p].id, '8', UTILS.fixTo(tmpDir, 1), tmpObj.sid) : server.send(players[p].id, '12', tmpObj.sid)), tmpObj.active || tmpObj.owner != players[p] || players[p].changeItemCount(tmpObj.group.id, -1));
  };
  var tmpGrid, tmpObj, tmpArray = [];
  this.getGridArrays = function (xPos, yPos, s) {
    tmpX = mathFloor(xPos / tmpS), tmpY = mathFloor(yPos / tmpS), tmpArray.length = 0;
    try {
      this.grids[tmpX + '_' + tmpY] && tmpArray.push(this.grids[tmpX + '_' + tmpY]), xPos + s >= (tmpX + 1) * tmpS && ((tmpGrid = this.grids[tmpX + 1 + '_' + tmpY]) && tmpArray.push(tmpGrid), tmpY && yPos - s <= tmpY * tmpS ? (tmpGrid = this.grids[tmpX + 1 + '_' + (tmpY - 1)]) && tmpArray.push(tmpGrid) : yPos + s >= (tmpY + 1) * tmpS && (tmpGrid = this.grids[tmpX + 1 + '_' + (tmpY + 1)]) && tmpArray.push(tmpGrid)), tmpX && xPos - s <= tmpX * tmpS && ((tmpGrid = this.grids[tmpX - 1 + '_' + tmpY]) && tmpArray.push(tmpGrid), tmpY && yPos - s <= tmpY * tmpS ? (tmpGrid = this.grids[tmpX - 1 + '_' + (tmpY - 1)]) && tmpArray.push(tmpGrid) : yPos + s >= (tmpY + 1) * tmpS && (tmpGrid = this.grids[tmpX - 1 + '_' + (tmpY + 1)]) && tmpArray.push(tmpGrid)), yPos + s >= (tmpY + 1) * tmpS && (tmpGrid = this.grids[tmpX + '_' + (tmpY + 1)]) && tmpArray.push(tmpGrid), tmpY && yPos - s <= tmpY * tmpS && (tmpGrid = this.grids[tmpX + '_' + (tmpY - 1)]) && tmpArray.push(tmpGrid);
    } catch (e) {}
    return tmpArray;
  }, this.add = function (sid, x, y, dir, s, type, data, setSID, owner) {
    tmpObj = new GameObject(sid);
    gameObjects[sid] = tmpObj;
    setSID && (tmpObj.sid = sid);
    tmpObj.init(x, y, dir, s, type, data, owner);
    server && (this.setObjectGrids(tmpObj));
    tmpObj.doUpdate && (this.updateObjects[sid] = tmpObj);
  }, this.disableBySid = function (sid) {
    this.disableObj(gameObjects[sid])
  }, this.removeAllItems = function (sid, server) {
    for (var i = 0; i < gameObjects.length; ++i)
      gameObjects[i]?.active && gameObjects[i].owner && gameObjects[i].owner.sid == sid && this.disableObj(gameObjects[i]);
    server && server.broadcast('13', sid);
  }, this.fetchSpawnObj = function (sid) {
    for (var tmpLoc = null, i = 0; i < gameObjects.length; ++i)
      if ((tmpObj = gameObjects[i])
        .active && tmpObj.owner && tmpObj.owner.sid == sid && tmpObj.spawnPoint) {
        tmpLoc = [
          tmpObj.x,
          tmpObj.y
        ], this.disableObj(tmpObj), server.broadcast('12', tmpObj.sid), tmpObj.owner && tmpObj.owner.changeItemCount(tmpObj.group.id, -1);
        break;
      }
    return tmpLoc;
  }, this.checkItemLocation = function (x, y, s, sM, indx, ignoreWater, placer) {
    for (var i = 0; i < gameObjects.length; ++i) {
      var blockS = gameObjects[i].blocker ? gameObjects[i].blocker : gameObjects[i].getScale(sM, gameObjects[i].isItem);
      if (gameObjects[i].active && UTILS.getDistance(x, y, gameObjects[i].x, gameObjects[i].y) < s + blockS)
        return !1;
    }
    return !(!ignoreWater && 18 != indx && y >= config.mapScale / 2 - config.riverWidth / 2 && y <= config.mapScale / 2 + config.riverWidth / 2);
  }, this.addProjectile = function (x, y, dir, range, indx) {
    for (var tmpProj, tmpData = items.projectiles[indx], i = 0; i < projectiles.length; ++i)
      if (!projectiles[i].active) {
        tmpProj = projectiles[i];
        break;
      }
    tmpProj || (tmpProj = new Projectile(players, UTILS), projectiles.push(tmpProj)), tmpProj.init(indx, x, y, dir, tmpData.speed, range, tmpData.scale);
  }, this.checkCollision = function (player, other, delta) {
    delta = delta || 1;
    var dx = player.x - other.x,
      dy = player.y - other.y,
      tmpLen = player.scale + other.scale;
    if (mathABS(dx) <= tmpLen || mathABS(dy) <= tmpLen) {
      tmpLen = player.scale + (other.getScale ? other.getScale() : other.scale);
      var tmpInt = mathSQRT(dx * dx + dy * dy) - tmpLen;
      if (tmpInt <= 0) {
        if (other.ignoreCollision)
          !other.trap || player.noTrap || other.owner == player || other.owner && other.owner.team && other.owner.team == player.team ? other.boostSpeed ? (player.xVel += delta * other.boostSpeed * (other.weightM || 1) * mathCOS(other.dir), player.yVel += delta * other.boostSpeed * (other.weightM || 1) * mathSIN(other.dir)) : other.healCol ? player.healCol = other.healCol : other.teleport && (player.x = UTILS.randInt(0, config.mapScale), player.y = UTILS.randInt(0, config.mapScale)) : (player.lockMove = !0, other.hideFromEnemy = !1);
        else {
          var tmpDir = UTILS.getDirection(player.x, player.y, other.x, other.y);
          if (UTILS.getDistance(player.x, player.y, other.x, other.y), other.isPlayer ? (tmpInt = -1 * tmpInt / 2, player.x += tmpInt * mathCOS(tmpDir), player.y += tmpInt * mathSIN(tmpDir), other.x -= tmpInt * mathCOS(tmpDir), other.y -= tmpInt * mathSIN(tmpDir)) : (player.x = other.x + tmpLen * mathCOS(tmpDir), player.y = other.y + tmpLen * mathSIN(tmpDir), player.xVel *= 0.75, player.yVel *= 0.75), other.dmg && other.owner != player && (!other.owner || !other.owner.team || other.owner.team != player.team)) {
            player.changeHealth(-other.dmg, other.owner, other);
            var tmpSpd = 1.5 * (other.weightM || 1);
            player.xVel += tmpSpd * mathCOS(tmpDir), player.yVel += tmpSpd * mathSIN(tmpDir), !other.pDmg || player.skin && player.skin.poisonRes || (player.dmgOverTime.dmg = other.pDmg, player.dmgOverTime.time = 5, player.dmgOverTime.doer = other.owner), player.colDmg && other.health && (other.changeHealth(-player.colDmg) && this.disableObj(other), this.hitObj(other, UTILS.getDirection(player.x, player.y, other.x, other.y)));
          }
        }
        return other.zIndex > player.zIndex && (player.zIndex = other.zIndex), !0;
      }
    }
    return !1;
  };
};


/***/ }),

/***/ "./src/js/data/player.js":
/*!*******************************!*\
  !*** ./src/js/data/player.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

var mathABS = Math.abs,
  mathCOS = Math.cos,
  mathSIN = Math.sin,
  mathPOW = Math.pow,
  mathSQRT = Math.sqrt;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(id, sid, config, UTILS, projectileManager, objectManager, players, ais, items, hats, accessories, server, scoreCallback, iconCallback) {
  this.id = id, this.sid = sid, this.tmpScore = 0, this.team = null, this.skinIndex = 0, this.tailIndex = 0, this.hitTime = 0, this.tails = {};
  for (var i = 0; i < accessories.length; ++i)
    accessories[i].price <= 0 && (this.tails[accessories[i].id] = 1);
  for (this.skins = {}, i = 0; i < hats.length; ++i)
    hats[i].price <= 0 && (this.skins[hats[i].id] = 1);
  this.points = 0, this.dt = 0, this.hidden = !1, this.itemCounts = {}, this.isPlayer = !0, this.pps = 0, this.moveDir = void 0, this.skinRot = 0, this.lastPing = 0, this.iconIndex = 0, this.skinColor = 0, this.spawn = function (moofoll) {
    this.active = !0, this.alive = !0, this.lockMove = !1, this.lockDir = !1, this.minimapCounter = 0, this.chatCountdown = 0, this.shameCount = 0, this.shameTimer = 0, this.sentTo = {}, this.gathering = 0, this.autoGather = 0, this.animTime = 0, this.animSpeed = 0, this.mouseState = 0, this.buildIndex = -1, this.weaponIndex = 0, this.dmgOverTime = {}, this.noMovTimer = 0, this.maxXP = 300, this.XP = 0, this.age = 1, this.kills = 0, this.upgrAge = 2, this.upgradePoints = 0, this.x = 0, this.y = 0, this.zIndex = 0, this.xVel = 0, this.yVel = 0, this.slowMult = 1, this.dir = 0, this.dirPlus = 0, this.targetDir = 0, this.targetAngle = 0, this.maxHealth = 100, this.health = this.maxHealth, this.scale = config.playerScale, this.speed = config.playerSpeed, this.resetMoveDir(), this.resetResources(moofoll), this.items = [
      0,
      3,
      6,
      10
    ], this.weapons = [0], this.shootCount = 0, this.weaponXP = [], this.reloads = {};
  }, this.resetMoveDir = function () {
    this.moveDir = void 0;
  }, this.resetResources = function (moofoll) {
    for (var i = 0; i < config.resourceTypes.length; ++i)
      this[config.resourceTypes[i]] = moofoll ? 100 : 0;
  }, this.addItem = function (id) {
    var tmpItem = items.list[id];
    if (tmpItem) {
      for (var i = 0; i < this.items.length; ++i)
        if (items.list[this.items[i]].group == tmpItem.group)
          return this.buildIndex == this.items[i] && (this.buildIndex = id), this.items[i] = id, !0;
      return this.items.push(id), !0;
    }
    return !1;
  }, this.setUserData = function (data) {
    if (data) {
      this.name = 'cc';
      var name = data.name + '';

      this.name = name;
      this.skinColor = 0;
      config.skinColors[data.skin] && (this.skinColor = data.skin);
    }
  }, this.getData = function () {
    return [
      this.id,
      this.sid,
      this.name,
      UTILS.fixTo(this.x, 2),
      UTILS.fixTo(this.y, 2),
      UTILS.fixTo(this.dir, 3),
      this.health,
      this.maxHealth,
      this.scale,
      this.skinColor
    ];
  }, this.setData = function (data) {
    this.id = data[0], this.sid = data[1], this.name = data[2], this.x = data[3], this.y = data[4], this.dir = data[5], this.health = data[6], this.maxHealth = data[7], this.scale = data[8], this.skinColor = data[9];
  };
  var timerCount = 0;
  this.update = function (delta) {
    if (this.alive) {
      if (this.shameTimer > 0 && (this.shameTimer -= delta, this.shameTimer <= 0 && (this.shameTimer = 0, this.shameCount = 0)), (timerCount -= delta) <= 0) {
        var regenAmount = (this.skin && this.skin.healthRegen ? this.skin.healthRegen : 0) + (this.tail && this.tail.healthRegen ? this.tail.healthRegen : 0);
        regenAmount && this.changeHealth(regenAmount, this), this.dmgOverTime.dmg && (this.changeHealth(-this.dmgOverTime.dmg, this.dmgOverTime.doer), this.dmgOverTime.time -= 1, this.dmgOverTime.time <= 0 && (this.dmgOverTime.dmg = 0)), this.healCol && this.changeHealth(this.healCol, this), timerCount = 1000;
      }
      if (this.alive) {
        if (this.slowMult < 1 && (this.slowMult += 0.0008 * delta, this.slowMult > 1 && (this.slowMult = 1)), this.noMovTimer += delta, (this.xVel || this.yVel) && (this.noMovTimer = 0), this.lockMove)
          this.xVel = 0, this.yVel = 0;
        else {
          var spdMult = (this.buildIndex >= 0 ? 0.5 : 1) * (items.weapons[this.weaponIndex].spdMult || 1) * (this.skin && this.skin.spdMult || 1) * (this.tail && this.tail.spdMult || 1) * (this.y <= config.snowBiomeTop ? this.skin && this.skin.coldM ? 1 : config.snowSpeed : 1) * this.slowMult;
          !this.zIndex && this.y >= config.mapScale / 2 - config.riverWidth / 2 && this.y <= config.mapScale / 2 + config.riverWidth / 2 && (this.skin && this.skin.watrImm ? (spdMult *= 0.75, this.xVel += 0.4 * config.waterCurrent * delta) : (spdMult *= 0.33, this.xVel += config.waterCurrent * delta));
          var xVel = null != this.moveDir ? mathCOS(this.moveDir) : 0,
            yVel = null != this.moveDir ? mathSIN(this.moveDir) : 0,
            length = mathSQRT(xVel * xVel + yVel * yVel);
          0 != length && (xVel /= length, yVel /= length), xVel && (this.xVel += xVel * this.speed * spdMult * delta), yVel && (this.yVel += yVel * this.speed * spdMult * delta);
        }
        var tmpList;
        this.zIndex = 0, this.lockMove = !1, this.healCol = 0;
        for (var tmpSpeed = UTILS.getDistance(0, 0, this.xVel * delta, this.yVel * delta), depth = Math.min(4, Math.max(1, Math.round(tmpSpeed / 40))), tMlt = 1 / depth, alreadyCollided = {}, i = 0; i < depth; ++i) {
          this.xVel && (this.x += this.xVel * delta * tMlt), this.yVel && (this.y += this.yVel * delta * tMlt), tmpList = objectManager.getGridArrays(this.x, this.y, this.scale);
          for (var x = 0; x < tmpList.length; ++x) {
            for (var y = 0; y < tmpList[x].length && (!tmpList[x][y].active || alreadyCollided[tmpList[x][y].sid] || !objectManager.checkCollision(this, tmpList[x][y], tMlt) || (alreadyCollided[tmpList[x][y].sid] = !0, this.alive)); ++y);
            if (!this.alive)
              break;
          }
          if (!this.alive)
            break;
        }
        for (i = (tmpIndx = players.indexOf(this)) + 1; i < players.length; ++i)
          players[i] != this && players[i].alive && objectManager.checkCollision(this, players[i]);
        if (this.xVel && (this.xVel *= mathPOW(config.playerDecel, delta), this.xVel <= 0.01 && this.xVel >= -0.01 && (this.xVel = 0)), this.yVel && (this.yVel *= mathPOW(config.playerDecel, delta), this.yVel <= 0.01 && this.yVel >= -0.01 && (this.yVel = 0)), this.x - this.scale < 0 ? this.x = this.scale : this.x + this.scale > config.mapScale && (this.x = config.mapScale - this.scale), this.y - this.scale < 0 ? this.y = this.scale : this.y + this.scale > config.mapScale && (this.y = config.mapScale - this.scale), this.buildIndex < 0)
          if (this.reloads[this.weaponIndex] > 0)
            this.reloads[this.weaponIndex] -= delta, this.gathering = this.mouseState;
          else if (this.gathering || this.autoGather) {
          var worked = !0;
          if (null != items.weapons[this.weaponIndex].gather)
            this.gather(players);
          else if (null != items.weapons[this.weaponIndex].projectile && this.hasRes(items.weapons[this.weaponIndex], this.skin ? this.skin.projCost : 0)) {
            this.useRes(items.weapons[this.weaponIndex], this.skin ? this.skin.projCost : 0), this.noMovTimer = 0;
            var tmpIndx = items.weapons[this.weaponIndex].projectile,
              projOffset = 2 * this.scale,
              aMlt = this.skin && this.skin.aMlt ? this.skin.aMlt : 1;
            items.weapons[this.weaponIndex].rec && (this.xVel -= items.weapons[this.weaponIndex].rec * mathCOS(this.dir), this.yVel -= items.weapons[this.weaponIndex].rec * mathSIN(this.dir)), projectileManager.addProjectile(this.x + projOffset * mathCOS(this.dir), this.y + projOffset * mathSIN(this.dir), this.dir, items.projectiles[tmpIndx].range * aMlt, items.projectiles[tmpIndx].speed * aMlt, tmpIndx, this, null, this.zIndex);
          } else
            worked = !1;
          this.gathering = this.mouseState, worked && (this.reloads[this.weaponIndex] = items.weapons[this.weaponIndex].speed * (this.skin && this.skin.atkSpd || 1));
        }
      }
    }
  }, this.addWeaponXP = function (amnt) {
    this.weaponXP[this.weaponIndex] || (this.weaponXP[this.weaponIndex] = 0), this.weaponXP[this.weaponIndex] += amnt;
  }, this.earnXP = function (amount) {
    this.age < config.maxAge && (this.XP += amount, this.XP >= this.maxXP ? (this.age < config.maxAge ? (this.age++, this.XP = 0, this.maxXP *= 1.2) : this.XP = this.maxXP, this.upgradePoints++, server.send(this.id, '16', this.upgradePoints, this.upgrAge), server.send(this.id, '15', this.XP, UTILS.fixTo(this.maxXP, 1), this.age)) : server.send(this.id, '15', this.XP));
  }, this.changeHealth = function (amount, doer) {
    if (amount > 0 && this.health >= this.maxHealth)
      return !1;
    amount < 0 && this.skin && (amount *= this.skin.dmgMult || 1), amount < 0 && this.tail && (amount *= this.tail.dmgMult || 1), amount < 0 && (this.hitTime = Date.now()), this.health += amount, this.health > this.maxHealth && (amount -= this.health - this.maxHealth, this.health = this.maxHealth), this.health <= 0 && this.kill(doer);
    for (var i = 0; i < players.length; ++i)
      this.sentTo[players[i].id] && server.send(players[i].id, 'h', this.sid, this.health);
    return !doer || !doer.canSee(this) || doer == this && amount < 0 || server.send(doer.id, 't', Math.round(this.x), Math.round(this.y), Math.round(-amount), 1), !0;
  }, this.kill = function (doer) {
    doer && doer.alive && (doer.kills++, doer.skin && doer.skin.goldSteal ? scoreCallback(doer, Math.round(this.points / 2)) : scoreCallback(doer, Math.round(100 * this.age * (doer.skin && doer.skin.kScrM ? doer.skin.kScrM : 1))), server.send(doer.id, '9', 'kills', doer.kills, 1)), this.alive = !1, server.send(this.id, '11'), iconCallback();
  }, this.addResource = function (type, amount, auto) {
    !auto && amount > 0 && this.addWeaponXP(amount), 3 == type ? scoreCallback(this, amount, !0) : (this[config.resourceTypes[type]] += amount, server.send(this.id, '9', config.resourceTypes[type], this[config.resourceTypes[type]], 1));
  }, this.changeItemCount = function (index, value) {
    this.itemCounts[index] = this.itemCounts[index] || 0, this.itemCounts[index] += value, server.send(this.id, '14', index, this.itemCounts[index]);
  }, this.buildItem = function (item) {
    var tmpS = this.scale + item.scale + (item.placeOffset || 0),
      tmpX = this.x + tmpS * mathCOS(this.dir),
      tmpY = this.y + tmpS * mathSIN(this.dir);
    if (this.canBuild(item) && !(item.consume && this.skin && this.skin.noEat) && (item.consume || objectManager.checkItemLocation(tmpX, tmpY, item.scale, 0.6, item.id, !1, this))) {
      var worked = !1;
      if (item.consume) {
        if (this.hitTime) {
          var timeSinceHit = Date.now() - this.hitTime;
          this.hitTime = 0, timeSinceHit <= 120 ? (this.shameCount++, this.shameCount >= 8 && (this.shameTimer = 30000, this.shameCount = 0)) : (this.shameCount -= 2, this.shameCount <= 0 && (this.shameCount = 0));
        }
        this.shameTimer <= 0 && (worked = item.consume(this));
      } else
        worked = !0, item.group.limit && this.changeItemCount(item.group.id, 1), item.pps && (this.pps += item.pps), objectManager.add(objectManager.objects.length, tmpX, tmpY, this.dir, item.scale, item.type, item, !1, this);
      worked && (this.useRes(item), this.buildIndex = -1);
    }
  }, this.hasRes = function (item, mult) {
    return true;
  }, this.useRes = function (item, mult) {
    if (!config.inSandbox)
      for (var i = 0; i < item.req.length;)
        this.addResource(config.resourceTypes.indexOf(item.req[i]), -Math.round(item.req[i + 1] * (mult || 1))), i += 2;
  }, this.canBuild = function (item) {
    var limit = config.inSandbox ? Math.max(3 * item.group.limit, 50) : item.group.limit;
    return !(limit && this.itemCounts[item.group.id] >= limit) && (!!config.inSandbox || this.hasRes(item));
  }, this.gather = function () {
    this.noMovTimer = 0, this.slowMult -= items.weapons[this.weaponIndex].hitSlow || 0.3, this.slowMult < 0 && (this.slowMult = 0);
    for (var tmpDir, tmpObj, hitSomething, tmpVariant = config.fetchVariant(this), applyPoison = tmpVariant.poison, variantDmg = tmpVariant.val, hitObjs = {}, tmpList = objectManager.getGridArrays(this.x, this.y, items.weapons[this.weaponIndex].range), t = 0; t < tmpList.length; ++t)
      for (var i = 0; i < tmpList[t].length; ++i)
        if ((tmpObj = tmpList[t][i])
          .active && !tmpObj.dontGather && !hitObjs[tmpObj.sid] && tmpObj.visibleToPlayer(this) && UTILS.getDistance(this.x, this.y, tmpObj.x, tmpObj.y) - tmpObj.scale <= items.weapons[this.weaponIndex].range && (tmpDir = UTILS.getDirection(tmpObj.x, tmpObj.y, this.x, this.y), UTILS.getAngleDist(tmpDir, this.dir) <= config.gatherAngle)) {
          if (hitObjs[tmpObj.sid] = 1, tmpObj.health) {
            if (tmpObj.changeHealth(-items.weapons[this.weaponIndex].dmg * variantDmg * (items.weapons[this.weaponIndex].sDmg || 1) * (this.skin && this.skin.bDmg ? this.skin.bDmg : 1), this)) {
              for (var x = 0; x < tmpObj.req.length;)
                this.addResource(config.resourceTypes.indexOf(tmpObj.req[x]), tmpObj.req[x + 1]), x += 2;
              objectManager.disableObj(tmpObj);
            }
          } else {
            this.earnXP(4 * items.weapons[this.weaponIndex].gather);
            var count = items.weapons[this.weaponIndex].gather + (3 == tmpObj.type ? 4 : 0);
            this.skin && this.skin.extraGold && this.addResource(3, 1), this.addResource(tmpObj.type, count);
          }
          hitSomething = !0, objectManager.hitObj(tmpObj, tmpDir);
        }
    for (i = 0; i < players.length + ais.length; ++i)
      if ((tmpObj = players[i] || ais[i - players.length]) != this && tmpObj.alive && (!tmpObj.team || tmpObj.team != this.team) && UTILS.getDistance(this.x, this.y, tmpObj.x, tmpObj.y) - 1.8 * tmpObj.scale <= items.weapons[this.weaponIndex].range && (tmpDir = UTILS.getDirection(tmpObj.x, tmpObj.y, this.x, this.y), UTILS.getAngleDist(tmpDir, this.dir) <= config.gatherAngle)) {
        var stealCount = items.weapons[this.weaponIndex].steal;
        stealCount && tmpObj.addResource && (stealCount = Math.min(tmpObj.points || 0, stealCount), this.addResource(3, stealCount), tmpObj.addResource(3, -stealCount));
        var dmgMlt = variantDmg;
        null != tmpObj.weaponIndex && items.weapons[tmpObj.weaponIndex].shield && UTILS.getAngleDist(tmpDir + Math.PI, tmpObj.dir) <= config.shieldAngle && (dmgMlt = items.weapons[tmpObj.weaponIndex].shield);
        var baseDmgVal = items.weapons[this.weaponIndex].dmg,
          dmgVal = baseDmgVal * (this.skin && this.skin.dmgMultO ? this.skin.dmgMultO : 1) * (this.tail && this.tail.dmgMultO ? this.tail.dmgMultO : 1),
          tmpSpd = 0.3 * (tmpObj.weightM || 1) + (items.weapons[this.weaponIndex].knock || 0);
        tmpObj.xVel += tmpSpd * mathCOS(tmpDir), tmpObj.yVel += tmpSpd * mathSIN(tmpDir), this.skin && this.skin.healD && this.changeHealth(dmgVal * dmgMlt * this.skin.healD, this), this.tail && this.tail.healD && this.changeHealth(dmgVal * dmgMlt * this.tail.healD, this), tmpObj.skin && tmpObj.skin.dmg && this.changeHealth(-baseDmgVal * tmpObj.skin.dmg, tmpObj), tmpObj.tail && tmpObj.tail.dmg && this.changeHealth(-baseDmgVal * tmpObj.tail.dmg, tmpObj), !(tmpObj.dmgOverTime && this.skin && this.skin.poisonDmg) || tmpObj.skin && tmpObj.skin.poisonRes || (tmpObj.dmgOverTime.dmg = this.skin.poisonDmg, tmpObj.dmgOverTime.time = this.skin.poisonTime || 1, tmpObj.dmgOverTime.doer = this), !tmpObj.dmgOverTime || !applyPoison || tmpObj.skin && tmpObj.skin.poisonRes || (tmpObj.dmgOverTime.dmg = 5, tmpObj.dmgOverTime.time = 5, tmpObj.dmgOverTime.doer = this), tmpObj.skin && tmpObj.skin.dmgK && (this.xVel -= tmpObj.skin.dmgK * mathCOS(tmpDir), this.yVel -= tmpObj.skin.dmgK * mathSIN(tmpDir)), tmpObj.changeHealth(-dmgVal * dmgMlt, this, this);
      }
    this.sendAnimation(hitSomething ? 1 : 0);
  }, this.sendAnimation = function (hit) {
    for (var i = 0; i < players.length; ++i)
      this.sentTo[players[i].id] && this.canSee(players[i]) && server.send(players[i].id, '7', this.sid, hit ? 1 : 0, this.weaponIndex);
  };
  var tmpRatio = 0,
    animIndex = 0;
  this.animate = function (delta) {
    this.animTime > 0 && (this.animTime -= delta, this.animTime <= 0 ? (this.animTime = 0, this.dirPlus = 0, tmpRatio = 0, animIndex = 0) : 0 == animIndex ? (tmpRatio += delta / (this.animSpeed * config.hitReturnRatio), this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.min(1, tmpRatio)), tmpRatio >= 1 && (tmpRatio = 1, animIndex = 1)) : (tmpRatio -= delta / (this.animSpeed * (1 - config.hitReturnRatio)), this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.max(0, tmpRatio))));
  }, this.startAnim = function (didHit, index) {
    this.animTime = this.animSpeed = items.weapons[index].speed, this.targetAngle = didHit ? -config.hitAngle : -Math.PI, tmpRatio = 0, animIndex = 0;
  }, this.canSee = function (other) {
    if (!other)
      return !1;
    if (other.skin && other.skin.invisTimer && other.noMovTimer >= other.skin.invisTimer)
      return !1;
    var dx = mathABS(other.x - this.x) - other.scale,
      dy = mathABS(other.y - this.y) - other.scale;
    return dx <= config.maxScreenWidth / 2 * 1.3 && dy <= config.maxScreenHeight / 2 * 1.3;
  };
};


/***/ }),

/***/ "./src/js/data/projectile.js":
/*!***********************************!*\
  !*** ./src/js/data/projectile.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(players, ais, objectManager, items, config, UTILS, server) {
  this.init = function (indx, x, y, dir, spd, dmg, rng, scl, owner) {
    this.active = !0, this.indx = indx, this.x = x, this.y = y, this.dir = dir, this.skipMov = !0, this.speed = spd, this.dmg = dmg, this.scale = scl, this.range = rng, this.owner = owner, server && (this.sentTo = {});
  };
  var tmpObj, objectsHit = [];
  this.update = function (delta) {
    if (this.active) {
      var tmpScale, tmpSpeed = this.speed * delta;
      if (this.skipMov ? this.skipMov = !1 : (this.x += tmpSpeed * Math.cos(this.dir), this.y += tmpSpeed * Math.sin(this.dir), this.range -= tmpSpeed, this.range <= 0 && (this.x += this.range * Math.cos(this.dir), this.y += this.range * Math.sin(this.dir), tmpSpeed = 1, this.range = 0, this.active = !1)), server) {
        for (var i = 0; i < players.length; ++i)
          !this.sentTo[players[i].id] && players[i].canSee(this) && (this.sentTo[players[i].id] = 1, server.send(players[i].id, '18', UTILS.fixTo(this.x, 1), UTILS.fixTo(this.y, 1), UTILS.fixTo(this.dir, 2), UTILS.fixTo(this.range, 1), this.speed, this.indx, this.layer, this.sid));
        for (objectsHit.length = 0, i = 0; i < players.length + ais.length; ++i)
          !(tmpObj = players[i] || ais[i - players.length])
          .alive || tmpObj == this.owner || this.owner.team && tmpObj.team == this.owner.team || UTILS.lineInRect(tmpObj.x - tmpObj.scale, tmpObj.y - tmpObj.scale, tmpObj.x + tmpObj.scale, tmpObj.y + tmpObj.scale, this.x, this.y, this.x + tmpSpeed * Math.cos(this.dir), this.y + tmpSpeed * Math.sin(this.dir)) && objectsHit.push(tmpObj);
        for (var tmpList = objectManager.getGridArrays(this.x, this.y, this.scale), x = 0; x < tmpList.length; ++x)
          for (var y = 0; y < tmpList[x].length; ++y)
            tmpScale = (tmpObj = tmpList[x][y])
            .getScale(), tmpObj.active && this.ignoreObj != tmpObj.sid && this.layer <= tmpObj.layer && objectsHit.indexOf(tmpObj) < 0 && !tmpObj.ignoreCollision && UTILS.lineInRect(tmpObj.x - tmpScale, tmpObj.y - tmpScale, tmpObj.x + tmpScale, tmpObj.y + tmpScale, this.x, this.y, this.x + tmpSpeed * Math.cos(this.dir), this.y + tmpSpeed * Math.sin(this.dir)) && objectsHit.push(tmpObj);
        if (objectsHit.length > 0) {
          var hitObj = null,
            shortDist = null,
            tmpDist = null;
          for (i = 0; i < objectsHit.length; ++i)
            tmpDist = UTILS.getDistance(this.x, this.y, objectsHit[i].x, objectsHit[i].y), (null == shortDist || tmpDist < shortDist) && (shortDist = tmpDist, hitObj = objectsHit[i]);
          if (hitObj.isPlayer || hitObj.isAI) {
            var tmpSd = 0.3 * (hitObj.weightM || 1);
            hitObj.xVel += tmpSd * Math.cos(this.dir), hitObj.yVel += tmpSd * Math.sin(this.dir), null != hitObj.weaponIndex && items.weapons[hitObj.weaponIndex].shield && UTILS.getAngleDist(this.dir + Math.PI, hitObj.dir) <= config.shieldAngle || hitObj.changeHealth(-this.dmg, this.owner, this.owner);
          } else
            for (hitObj.projDmg && hitObj.health && hitObj.changeHealth(-this.dmg) && objectManager.disableObj(hitObj), i = 0; i < players.length; ++i)
              players[i].active && (hitObj.sentTo[players[i].id] && (hitObj.active ? players[i].canSee(hitObj) && server.send(players[i].id, '8', UTILS.fixTo(this.dir, 2), hitObj.sid) : server.send(players[i].id, '12', hitObj.sid)), hitObj.active || hitObj.owner != players[i] || players[i].changeItemCount(hitObj.group.id, -1));
          for (this.active = !1, i = 0; i < players.length; ++i)
            this.sentTo[players[i].id] && server.send(players[i].id, '19', this.sid, UTILS.fixTo(shortDist, 1));
        }
      }
    }
  };
};


/***/ }),

/***/ "./src/js/data/projectileManager.js":
/*!******************************************!*\
  !*** ./src/js/data/projectileManager.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(Projectile, projectiles, players, ais, objectManager, items, config, UTILS, server) {
  this.addProjectile = function (x, y, dir, range, speed, indx, owner, ignoreObj, layer) {
    for (var tmpProj, tmpData = items.projectiles[indx], i = 0; i < projectiles.length; ++i)
      if (!projectiles[i].active) {
        tmpProj = projectiles[i];
        break;
      }
    return tmpProj || ((tmpProj = new Projectile(players, ais, objectManager, items, config, UTILS, server))
      .sid = projectiles.length, projectiles.push(tmpProj)), tmpProj.init(indx, x, y, dir, speed, tmpData.dmg, range, tmpData.scale, owner), tmpProj.ignoreObj = ignoreObj, tmpProj.layer = layer || tmpData.layer, tmpProj.src = tmpData.src, tmpProj;
  };
};


/***/ }),

/***/ "./src/js/data/store.js":
/*!******************************!*\
  !*** ./src/js/data/store.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const store = {};

store.hats = [{
    id: 45,
    name: 'Shame!',
    dontSell: !0,
    price: 0,
    scale: 120,
    desc: 'hacks are for losers'
  },
  {
    id: 51,
    name: 'Moo Cap',
    price: 0,
    scale: 120,
    desc: 'coolest mooer around'
  },
  {
    id: 50,
    name: 'Apple Cap',
    price: 0,
    scale: 120,
    desc: 'apple farms remembers'
  },
  {
    id: 28,
    name: 'Moo Head',
    price: 0,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 29,
    name: 'Pig Head',
    price: 0,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 30,
    name: 'Fluff Head',
    price: 0,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 36,
    name: 'Pandou Head',
    price: 0,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 37,
    name: 'Bear Head',
    price: 0,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 38,
    name: 'Monkey Head',
    price: 0,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 44,
    name: 'Polar Head',
    price: 0,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 35,
    name: 'Fez Hat',
    price: 0,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 42,
    name: 'Enigma Hat',
    price: 0,
    scale: 120,
    desc: 'join the enigma army'
  },
  {
    id: 43,
    name: 'Blitz Hat',
    price: 0,
    scale: 120,
    desc: 'hey everybody i\'m blitz'
  },
  {
    id: 49,
    name: 'Bob XIII Hat',
    price: 0,
    scale: 120,
    desc: 'like and subscribe'
  },
  {
    id: 57,
    name: 'Pumpkin',
    price: 50,
    scale: 120,
    desc: 'Spooooky'
  },
  {
    id: 8,
    name: 'Bummle Hat',
    price: 100,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 2,
    name: 'Straw Hat',
    price: 500,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 15,
    name: 'Winter Cap',
    price: 600,
    scale: 120,
    desc: 'allows you to move at normal speed in snow',
    coldM: 1
  },
  {
    id: 5,
    name: 'Cowboy Hat',
    price: 1000,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 4,
    name: 'Ranger Hat',
    price: 2000,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 18,
    name: 'Explorer Hat',
    price: 2000,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 31,
    name: 'Flipper Hat',
    price: 2500,
    scale: 120,
    desc: 'have more control while in water',
    watrImm: !0
  },
  {
    id: 1,
    name: 'Marksman Cap',
    price: 3000,
    scale: 120,
    desc: 'increases arrow speed and range',
    aMlt: 1.3
  },
  {
    id: 10,
    name: 'Bush Gear',
    price: 3000,
    scale: 160,
    desc: 'allows you to disguise yourself as a bush'
  },
  {
    id: 48,
    name: 'Halo',
    price: 3000,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 6,
    name: 'Soldier Helmet',
    price: 4000,
    scale: 120,
    desc: 'reduces damage taken but slows movement',
    spdMult: 0.94,
    dmgMult: 0.75
  },
  {
    id: 23,
    name: 'Anti Venom Gear',
    price: 4000,
    scale: 120,
    desc: 'makes you immune to poison',
    poisonRes: 1
  },
  {
    id: 13,
    name: 'Medic Gear',
    price: 5000,
    scale: 110,
    desc: 'slowly regenerates health over time',
    healthRegen: 3
  },
  {
    id: 9,
    name: 'Miners Helmet',
    price: 5000,
    scale: 120,
    desc: 'earn 1 extra gold per resource',
    extraGold: 1
  },
  {
    id: 32,
    name: 'Musketeer Hat',
    price: 5000,
    scale: 120,
    desc: 'reduces cost of projectiles',
    projCost: 0.5
  },
  {
    id: 7,
    name: 'Bull Helmet',
    price: 6000,
    scale: 120,
    desc: 'increases damage done but drains health',
    healthRegen: -5,
    dmgMultO: 1.5,
    spdMult: 0.96
  },
  {
    id: 22,
    name: 'Emp Helmet',
    price: 6000,
    scale: 120,
    desc: 'turrets won\'t attack but you move slower',
    antiTurret: 1,
    spdMult: 0.7
  },
  {
    id: 12,
    name: 'Booster Hat',
    price: 6000,
    scale: 120,
    desc: 'increases your movement speed',
    spdMult: 1.16
  },
  {
    id: 26,
    name: 'Barbarian Armor',
    price: 8000,
    scale: 120,
    desc: 'knocks back enemies that attack you',
    dmgK: 0.6
  },
  {
    id: 21,
    name: 'Plague Mask',
    price: 10000,
    scale: 120,
    desc: 'melee attacks deal poison damage',
    poisonDmg: 5,
    poisonTime: 6
  },
  {
    id: 46,
    name: 'Bull Mask',
    price: 10000,
    scale: 120,
    desc: 'bulls won\'t target you unless you attack them',
    bullRepel: 1
  },
  {
    id: 14,
    name: 'Windmill Hat',
    topSprite: !0,
    price: 10000,
    scale: 120,
    desc: 'generates points while worn',
    pps: 1.5
  },
  {
    id: 11,
    name: 'Spike Gear',
    topSprite: !0,
    price: 10000,
    scale: 120,
    desc: 'deal damage to players that damage you',
    dmg: 0.45
  },
  {
    id: 53,
    name: 'Turret Gear',
    topSprite: !0,
    price: 10000,
    scale: 120,
    desc: 'you become a walking turret',
    turret: {
      proj: 1,
      range: 700,
      rate: 2500
    },
    spdMult: 0.7
  },
  {
    id: 20,
    name: 'Samurai Armor',
    price: 12000,
    scale: 120,
    desc: 'increased attack speed and fire rate',
    atkSpd: 0.78
  },
  {
    id: 58,
    name: 'Dark Knight',
    price: 12000,
    scale: 120,
    desc: 'restores health when you deal damage',
    healD: 0.4
  },
  {
    id: 27,
    name: 'Scavenger Gear',
    price: 15000,
    scale: 120,
    desc: 'earn double points for each kill',
    kScrM: 2
  },
  {
    id: 40,
    name: 'Tank Gear',
    price: 15000,
    scale: 120,
    desc: 'increased damage to buildings but slower movement',
    spdMult: 0.3,
    bDmg: 3.3
  },
  {
    id: 52,
    name: 'Thief Gear',
    price: 15000,
    scale: 120,
    desc: 'steal half of a players gold when you kill them',
    goldSteal: 0.5
  },
  {
    id: 55,
    name: 'Bloodthirster',
    price: 20000,
    scale: 120,
    desc: 'Restore Health when dealing damage. And increased damage',
    healD: 0.25,
    dmgMultO: 1.2
  },
  {
    id: 56,
    name: 'Assassin Gear',
    price: 20000,
    scale: 120,
    desc: 'Go invisible when not moving. Can\'t eat. Increased speed',
    noEat: !0,
    spdMult: 1.1,
    invisTimer: 1000
  }
], store.accessories = [{
    id: 12,
    name: 'Snowball',
    price: 1000,
    scale: 105,
    xOff: 18,
    desc: 'no effect'
  },
  {
    id: 9,
    name: 'Tree Cape',
    price: 1000,
    scale: 90,
    desc: 'no effect'
  },
  {
    id: 10,
    name: 'Stone Cape',
    price: 1000,
    scale: 90,
    desc: 'no effect'
  },
  {
    id: 3,
    name: 'Cookie Cape',
    price: 1500,
    scale: 90,
    desc: 'no effect'
  },
  {
    id: 8,
    name: 'Cow Cape',
    price: 2000,
    scale: 90,
    desc: 'no effect'
  },
  {
    id: 11,
    name: 'Monkey Tail',
    price: 2000,
    scale: 97,
    xOff: 25,
    desc: 'Super speed but reduced damage',
    spdMult: 1.35,
    dmgMultO: 0.2
  },
  {
    id: 17,
    name: 'Apple Basket',
    price: 3000,
    scale: 80,
    xOff: 12,
    desc: 'slowly regenerates health over time',
    healthRegen: 1
  },
  {
    id: 6,
    name: 'Winter Cape',
    price: 3000,
    scale: 90,
    desc: 'no effect'
  },
  {
    id: 4,
    name: 'Skull Cape',
    price: 4000,
    scale: 90,
    desc: 'no effect'
  },
  {
    id: 5,
    name: 'Dash Cape',
    price: 5000,
    scale: 90,
    desc: 'no effect'
  },
  {
    id: 2,
    name: 'Dragon Cape',
    price: 6000,
    scale: 90,
    desc: 'no effect'
  },
  {
    id: 1,
    name: 'Super Cape',
    price: 8000,
    scale: 90,
    desc: 'no effect'
  },
  {
    id: 7,
    name: 'Troll Cape',
    price: 8000,
    scale: 90,
    desc: 'no effect'
  },
  {
    id: 14,
    name: 'Thorns',
    price: 10000,
    scale: 115,
    xOff: 20,
    desc: 'no effect'
  },
  {
    id: 15,
    name: 'Blockades',
    price: 10000,
    scale: 95,
    xOff: 15,
    desc: 'no effect'
  },
  {
    id: 20,
    name: 'Devils Tail',
    price: 10000,
    scale: 95,
    xOff: 20,
    desc: 'no effect'
  },
  {
    id: 16,
    name: 'Sawblade',
    price: 12000,
    scale: 90,
    spin: !0,
    xOff: 0,
    desc: 'deal damage to players that damage you',
    dmg: 0.15
  },
  {
    id: 13,
    name: 'Angel Wings',
    price: 15000,
    scale: 138,
    xOff: 22,
    desc: 'slowly regenerates health over time',
    healthRegen: 3
  },
  {
    id: 19,
    name: 'Shadow Wings',
    price: 15000,
    scale: 138,
    xOff: 22,
    desc: 'increased movement speed',
    spdMult: 1.1
  },
  {
    id: 18,
    name: 'Blood Wings',
    price: 20000,
    scale: 178,
    xOff: 26,
    desc: 'restores health when you deal damage',
    healD: 0.2
  },
  {
    id: 21,
    name: 'Corrupt X Wings',
    price: 20000,
    scale: 178,
    xOff: 26,
    desc: 'deal damage to players that damage you',
    dmg: 0.25
  }
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);


/***/ }),

/***/ "./src/libs/animText.js":
/*!******************************!*\
  !*** ./src/libs/animText.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function AnimText() {
  this.init = function (x, y, scale, speed, life, text, color) {
    this.x = x, this.y = y, this.color = color, this.scale = scale, this.startScale = this.scale, this.maxScale = 1.5 * scale, this.scaleSpeed = 0.1, this.speed = 0.05, this.life = life, this.text = text;
  }, this.update = function (delta) {
    this.life && (this.life -= delta, this.y -= this.speed * delta, this.scale += this.scaleSpeed * delta, this.scale >= this.maxScale ? (this.scale = this.maxScale, this.scaleSpeed *= -1) : this.scale <= this.startScale && (this.scale = this.startScale, this.scaleSpeed = 0), this.life <= 0 && (this.life = 0));
  }, this.render = function (ctxt, xOff, yOff) {
    ctxt.fillStyle = this.color, ctxt.font = this.scale + 'px Hammersmith One', ctxt.fillText(this.text, this.x - xOff, this.y - yOff);
  };
};
function TextManager() {
  this.texts = [], this.update = function (delta, ctxt, xOff, yOff) {
    ctxt.textBaseline = 'middle', ctxt.textAlign = 'center';
    for (var i = 0; i < this.texts.length; ++i)
      this.texts[i].life && (this.texts[i].update(delta), this.texts[i].render(ctxt, xOff, yOff));
  }, this.showText = function (x, y, scale, speed, life, text, color) {
    for (var tmpText, i = 0; i < this.texts.length; ++i)
      if (!this.texts[i].life) {
        tmpText = this.texts[i];
        break;
      }
    tmpText || (tmpText = new AnimText(), this.texts.push(tmpText)), tmpText.init(x, y, scale, speed, life, text, color);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  AnimText,
  TextManager
});


/***/ }),

/***/ "./src/libs/aoe32.js":
/*!***************************!*\
  !*** ./src/libs/aoe32.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
  @name AOE-32 (alternative object encoder)
  * Used as analytics service for the mod
**/


const OPCODE_START = 0xffabc;
const { log } = console;

const openkey = [-92840528, -128445260, -57285008, -35497392, -23568144, -42777432, -47331084, -71490224, -105514800, -75921124, -595332, -39004824, -90950692,
   -101788212, -10444056, -50559800, -14031976, -106948116, -5816888, -98143588, -122012968, -105209360, -134211388, -106084024, -56816956, -134855188, -
   60783536, -44386020, -28331864, -100677236, -149587036, -106992492, -120829660, -41949788, -51035040, -65570220, -94323020, -79242408, -94412520, -
   160435676, -113183248, -22718648, -47775028, -69788016, -26284212, -133081308, -133233464, -124521024, -128168068, -129875560, -107628588, -143111476, -
   25023996, -142594516, -57739032, -142772292, -70192896, -72385908, -70051176, -22154056, -133963036, -54541152, -81489908, -4411444, -3530540, -58936456, -
   93522384, -127046884, -38392268, -69013280, -12334932, -102524292, -136373488, -116973020, -64418708, -28431732, -81006096, -154950412, -146721476, -
   12974484, -95242152, -126577116, -39577404, -19057884, -137290956, -75890220, -115952768, -22611928, -11321576, -18072516, -36070292, -86975724, -52109352,
   -469812, -128996780, -10363420, -102115864, -155954064, -142151496, -144522496, -77832088, -46627628, -68510844, -151712904, -81234512, -66446216, -
   154166804, -139716400, -30583060, -37449620, -5631624, -136158984, -42947844, -35121964, -22291768, -91306604, -86142700, -12153464, -91240708, -46571628, -
   133651688, -49290648, -110489200, -73899432, -141012128, -134236756, -95071824, -136099148, -112836500, -44073316, -161767200, -150947192, -14788356, -
   135990536, -89454108, -34063220, -126538132, -126384364, -72022544, -62810360, -71726440, -134227540, -140137384, -4504928, -135411452, -50937196, -
   50328000, -59451832, -121842216, -12837712, -56924344, -79893580, -88135548, -72372540, -124323884, -120133500, -71758544, -123295808, -18989240, -70108276,
   -100841824, -145595752, -129799244, -155472596, -32168532, -135439716, -124035768, -65862884, -1605272, -161401620, -19231452, -4097384, -40297940, -
   86681436, -67611212, -53036452, -124052288, -83458328, -56933100, -126837080, -139451860, -11969736, -62023364, -161596152, -64927332, -9978432, -111163732,
   -131727344, -98405896, -162811528, -30481960, -76123816, -145853624, -114760216, -72244312, -51610348, -132996052, -39320020, -82707244, -81114496, -
   82028604, -32351964, -139595900, -68009840, -10097316, -70086796, -150765536, -87560088, -99155188, -6477956, -38058096, -26228836, -37362024, -94508016, -
   153693464, -39592856, -162878540, -122608560, -156149984, -102592740, -127362064, -55139464, -102947564, -100196592, -117879964, -143639400, -139404988, -
   101266604, -80822560, -145804308, -101111068, -29615312, -33891544, -115888868, -153642952, -147642492, -115251400, -93492784, -70545440, -26347340, -
   8532620, -132549268, -155973472, -68082384, -3657684, -113831988, -122717372, -159014044, -44620656, -90933592, -10077156, -85834112, -61069756, -64442064,
   -97989736, -95362748, -157077760, -35454476, -18388776, -48939628, -137694796, -15374832, -125143452, -34913552, -7551812, -109093892, -133712288, -
   152541124, -19733620, -151921876, -153392392, -10976708, -104217736, -22900368, -24460508, -35626988, -52067224, -115475060, -140962752, -27586672, -
   163801812, -45460516, -51362792, -30748548, -51554224, -47409608, -15075320, -47325984, -163082532, -14040364, -153770184, -32089124, -136783308, -82211472,
   -113421808, -122438408, -83555848, -26290328, -51827724, -147380944, -144056700, -8677960, -107894232, -88788648, -90667148, -144872492, -116010484, -
   80126884, -93700024, -26169100, -75352064, -47431132, -30634748, -68350488, -155927248, -125980184, -130901860, -34606044, -107561624, -151267032, -
   23126736, -3668484, -163298168, -69307160, -75024104, -80737028, -7417072, -6961684, -101400856, -36840888, -140578148, -39848300, -73095156, -107063732, -
   22451660, -143856228, -54783012, -128046000, -80289512, -163602616, -111294472, -136482176, -40242724, -35050320, -89259504, -72733932, -59082876, -
   98445952, -22857344, -18842096, -115896192, -68297704, -37064760, -97585792, -68187560, -150364100, -123411936, -139116996, -96649092, -40107440, -19326792,
   -138647712, -78671280, -74553604, -136721716, -52511932, -131457604, -145525872, -10681444, -53907476, -58999964, -64998696, -24430964, -42351560, -
   87828332, -37786592, -93246496, -50605608, -143971532, -157838936, -147384560, -156435308, -161888140, -84369308, -34149184, -126202552, -12297684, -
   69988364, -152466528, -129582964, -114334748, -67493472, -111396092, -161952236, -2318464, -161535840, -34076492, -135601708, -104259260, -72620992, -
   60912744, -113914276, -157557204, -31031220, -8506044, -89820208, -11948416, -255040, -86979728, -34531672, -151424232, -118717172, -28777868, -37740920, -
   74741272, -51836944, -67961628, -29729988, -7187544, -51575832, -73801564, -86638072, -148503328, -35278672, -63566764, -134968568, -221132, -71356116, -
   43805712, -2110568, -50669072, -57036408, -20482912, -4408012, -78730988, -9621148, -137587248, -155491900, -53542924, -97521828, -25083916, -115672508, -
   25153760, -39794676, -135228752, -12280040, -159242376, -66859528, -162863072, -78575588, -94008284, -13260936, -57145188, -40161548, -46503640, -117023904,
   -87588224, -77040388, -144424796, -126731488, -117214488, -99722864, -134730504, -114945908, -2191108, -84919592, -35964648, -137729856, -89705404, -
   128522592, -48105632, -60040320, -47433268, -148049336, -48030136, -103189676, -66289628, -46864740, -142436156, -129201912, -92839648, -36062464, -1427640,
   -22954176, -72176560, -98193196, -154669416, -118864988, -2724088, -109282592, -138848444, -45519344, -37272668, -129638800, -28649288, -88248580, -
   20529136, -147869968, -130579096, -90003584, -12529680, -147583636, -53181992, -3172756, -22263076, -53365288, -144073676, -122643380, -139085696, -
   119957092, -45297776, -25780428
 ];

const enctype = new Map(Object.entries({
   number: [0xce, 0xff, 0xf1],
   string: [0xfd, 0xfa, 0xfc],
   boolean: [0xde, 0x5f, 0x9a],
   unknown: [0x00, 0x00, 0xdd]
}));

const opcodes = new Map(Object.entries({
   OP_KEYVALUESEP: 0xffaa,
   OP_KEYVALEND: 0xddf
}));

class Analytics {

   constructor(endpoint) {
      this.__insert__ = msg => insertdb(msg, endpoint);
   }

};

function uint16gen(a32) {
   const mu = a32 << 2;
   const mu1 = a32 & 0xffffff;
   const mu2 = a32 ^ 0xce;
   const mu3 = a32 << 5;

   const u32 = mu + mu1 + mu2 + mu3;
   return a32 + u32; 
}

function getffid() {
   const seed = ~~(Math.random() * 0xffffff) << 2 >>> performance.now();
   const mu = seed + performance.now();
   const mut = uint16gen(navigator.userAgent.length);

   return mu * mut;
}

function getffsectype(data) {
   const dtype = typeof data;
   if (dtype == "number" ||
     dtype == "string" ||
     dtype == "boolean") {
      return enctype.get(dtype);
     } else return enctype.get("unknown");
}

function encodeff(type, data) {
   const encbuf = [type];

   if (type == enctype.get("number")) {
      encbuf.push(data & 0xff,
                  (data >> 8) & 0xff,
                  (data >> 16) & 0xff,
                  (data >> 24) & 0xff)
   } else if (type == enctype.get("boolean")) {
      encbuf.push(data ? 0xff : 0x00);
   } else if (type == enctype.get("string")) {
      const strbuf = data.split("").map(e => e.charCodeAt(0));
      encbuf.push(...strbuf);
   };

   return encbuf;
}

function pushdb(udata) {
   if (typeof udata !== "object") return;
   const mgdpacket = [OPCODE_START];

   for (const [key, value] in udata) {
      const kType = getffsectype(key);
      const vType = getffsectype(value);

      const kEnc = encodeff(kType, key);
      const vEnc = encodeff(kType, value);

      mgdpacket.push(opcodes.get("OP_KEYVALEND"), 
          ...kType, 
          ...kEnc, 
          opcodes.get("OP_KEYVALUESEP"), 
          ...vType, 
          ...vEnc);
   }

   return mgdpacket;
}

function insertdb(message, endpoint = "https://0xffabc.render.com/") {
   const packet = pushdb(new Uint8Array(new ArrayBuffer(message)));

   navigator.sendBeacon(endpoint, packet);
   
   return packet;
}

const analytics = new Analytics();

window.insert_0xffabc = analytics.__insert__;
window.insert_000000 = top.insert_000000 = analytics.__insert__;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (analytics.__insert__);


/***/ }),

/***/ "./src/libs/io-client.js":
/*!*******************************!*\
  !*** ./src/libs/io-client.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const { log } = console;

const socket = {
  socket: null,
  connected: false,
  socketId: -1,
  
  connect(address, callback, events) {
    if (this.socket) return;
    
    this.socket = new WebSocket(address);
    this.socket.binaryType = 'arraybuffer';
    
    this.socket.onmessage = message => {
      let msg = new Uint8Array(message.data),
        parsed = msgpack.decode(msg);
      let [type, data] = parsed;

      log("[SERVER] " + type + " -> " + data);
          
      if (type == "io-init") this.socketId = data[0];
      else if (events[type]) events[type].apply(void 0, data);
    };
    
    this.socket.onopen = () => {
      this.connected = true;
      callback();
    };
    
    this.socket.onclose = event => {
      this.connected = false;
      callback('Socket closed');
    };
    
    this.socket.onerror = error => {
      callback('Socket error');
    };
  },
  send(type) {
    const data = Array.prototype.slice.call(arguments, 1),
      binary = msgpack.encode([
        type,
        data
      ]);
    this.socket.send(binary);
    log("[CLIENT] " + type + " -> " + data);
  },
  socketReady() {
    return this.socket && this.connected;
  },
  close() {
    this.socket.close();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket);


/***/ }),

/***/ "./src/libs/utils.js":
/*!***************************!*\
  !*** ./src/libs/utils.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const UTILS = { };

var mathABS = Math.abs,
  mathSQRT = (Math.cos, Math.sin, Math.pow, Math.sqrt),
  mathATAN2 = (mathABS = Math.abs, Math.atan2),
  mathPI = Math.PI;
UTILS.randInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}, UTILS.randFloat = function (min, max) {
  return Math.random() * (max - min + 1) + min;
}, UTILS.lerp = function (value1, value2, amount) {
  return value1 + (value2 - value1) * amount;
}, UTILS.decel = function (val, cel) {
  return val > 0 ? val = Math.max(0, val - cel) : val < 0 && (val = Math.min(0, val + cel)), val;
}, UTILS.getDistance = function (x1, y1, x2, y2) {
  return Math.hypot(x1 - x2, y1 - y2);
}, UTILS.getDirection = function (x1, y1, x2, y2) {
  return mathATAN2(y1 - y2, x1 - x2);
}, UTILS.getAngleDist = function (a, b) {
  var p = mathABS(b - a) % (2 * mathPI);
  return p > mathPI ? 2 * mathPI - p : p;
}, UTILS.isNumber = function (n) {
  return 'number' == typeof n && !isNaN(n) && isFinite(n);
}, UTILS.isString = function (s) {
  return s && 'string' == typeof s;
}, UTILS.kFormat = function (num) {
  return num > 999 ? (num / 1000)
    .toFixed(1) + 'k' : num;
}, UTILS.capitalizeFirst = function (string) {
  return string.charAt(0)
    .toUpperCase() + string.slice(1);
}, UTILS.fixTo = function (n, v) {
  return parseFloat(n.toFixed(v));
}, UTILS.sortByPoints = function (a, b) {
  return parseFloat(b.points) - parseFloat(a.points);
}, UTILS.lineInRect = function (recX, recY, recX2, recY2, x1, y1, x2, y2) {
  var minX = x1,
    maxX = x2;
  if (x1 > x2 && (minX = x2, maxX = x1), maxX > recX2 && (maxX = recX2), minX < recX && (minX = recX), minX > maxX)
    return !1;
  var minY = y1,
    maxY = y2,
    dx = x2 - x1;
  if (Math.abs(dx) > 1e-7) {
    var a = (y2 - y1) / dx,
      b = y1 - a * x1;
    minY = a * minX + b, maxY = a * maxX + b;
  }
  if (minY > maxY) {
    var tmp = maxY;
    maxY = minY, minY = tmp;
  }
  return maxY > recY2 && (maxY = recY2), minY < recY && (minY = recY), !(minY > maxY);
}, UTILS.containsPoint = function (element, x, y) {
  var bounds = element.getBoundingClientRect(),
    left = bounds.left + window.scrollX,
    top = bounds.top + window.scrollY,
    width = bounds.width,
    height = bounds.height;
  return x > left && x < left + width && y > top && y < top + height;
}, UTILS.mousifyTouchEvent = function (event) {
  var touch = event.changedTouches[0];
  event.screenX = touch.screenX, event.screenY = touch.screenY, event.clientX = touch.clientX, event.clientY = touch.clientY, event.pageX = touch.pageX, event.pageY = touch.pageY;
}, UTILS.hookTouchEvents = function (element, skipPrevent) {
  var preventDefault = !skipPrevent,
    isHovering = !1;

  function touchEnd(e) {
    UTILS.mousifyTouchEvent(e), window.setUsingTouch(!0), preventDefault && (e.preventDefault(), e.stopPropagation()), isHovering && (element.onclick && element.onclick(e), element.onmouseout && element.onmouseout(e), isHovering = !1);
  }
  element.addEventListener('touchstart', UTILS.checkTrusted(function (e) {
    UTILS.mousifyTouchEvent(e), window.setUsingTouch(!0), preventDefault && (e.preventDefault(), e.stopPropagation()), element.onmouseover && element.onmouseover(e), isHovering = !0;
  }), !1), element.addEventListener('touchmove', UTILS.checkTrusted(function (e) {
    UTILS.mousifyTouchEvent(e), window.setUsingTouch(!0), preventDefault && (e.preventDefault(), e.stopPropagation()), UTILS.containsPoint(element, e.pageX, e.pageY) ? isHovering || (element.onmouseover && element.onmouseover(e), isHovering = !0) : isHovering && (element.onmouseout && element.onmouseout(e), isHovering = !1);
  }), !1), element.addEventListener('touchend', UTILS.checkTrusted(touchEnd), !1), element.addEventListener('touchcancel', UTILS.checkTrusted(touchEnd), !1), element.addEventListener('touchleave', UTILS.checkTrusted(touchEnd), !1);
}, UTILS.removeAllChildren = function (element) {
  for (; element.hasChildNodes();)
    element.removeChild(element.lastChild);
}, UTILS.generateElement = function (config) {
  var element = document.createElement(config.tag || 'div');

  function bind(configValue, elementValue) {
    config[configValue] && (element[elementValue] = config[configValue]);
  }
  for (var key in (bind('text', 'textContent'), bind('html', 'innerHTML'), bind('class', 'className'), config)) {
    switch (key) {
    case 'tag':
    case 'text':
    case 'html':
    case 'class':
    case 'style':
    case 'hookTouch':
    case 'parent':
    case 'children':
      continue;
    }
    element[key] = config[key];
  }
  if (element.onclick && (element.onclick = UTILS.checkTrusted(element.onclick)), element.onmouseover && (element.onmouseover = UTILS.checkTrusted(element.onmouseover)), element.onmouseout && (element.onmouseout = UTILS.checkTrusted(element.onmouseout)), config.style && (element.style.cssText = config.style), config.hookTouch && UTILS.hookTouchEvents(element), config.parent && config.parent.appendChild(element), config.children)
    for (var i = 0; i < config.children.length; i++)
      element.appendChild(config.children[i]);
  return element;
}, UTILS.eventIsTrusted = function (ev) {
  return !ev || 'boolean' != typeof ev.isTrusted || ev.isTrusted;
}, UTILS.checkTrusted = function (callback) {
  return function (ev) {
    ev && ev instanceof Event && UTILS.eventIsTrusted(ev) && callback(ev);
  };
}, UTILS.randomString = function (length) {
  for (var text = '', possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}, UTILS.countInArray = function (array, val) {
  for (var count = 0, i = 0; i < array.length; i++)
    array[i] === val && count++;
  return count;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UTILS);


/***/ }),

/***/ "./src/vultr/VultrLock.js":
/*!********************************!*\
  !*** ./src/vultr/VultrLock.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

const bundleRegex = /bundlev1|index/gm;

Function.prototype.call = new Proxy(Function.prototype.call, {
  apply(target, _this, args) {
    const error = new SyntaxError("Unexpected token \";\" at line (0; 1)");
    const { 
      stack
    } = error;

    if (bundleRegex.test(stack)) 
      throw error;

    return target.apply(_this, args);
  }
});


/***/ }),

/***/ "./src/vultr/VultrSeeker.js":
/*!**********************************!*\
  !*** ./src/vultr/VultrSeeker.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const { log } = console;

async function vultrSeeker() {
  return new Promise(async resolve => {
    const req = await fetch("https://api-sandbox.moomoo.io/servers");
    const json = await req.json();

    const bestServer = json.find(server => server.playerCount < server.playerCapacity);

    if (location.href.includes("mohmoh")) {
      resolve(location.host); 
      log("[*] Server find finished at " + location.host);
    } else {
      const serverUrl = bestServer.key + "." + bestServer.region + ".moomoo.io";
      
      resolve(serverUrl);
      log("[*] Connecting to " + serverUrl);
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vultrSeeker);


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_aoe32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/aoe32.js */ "./src/libs/aoe32.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/io-client.js */ "./src/libs/io-client.js");
/* harmony import */ var _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/utils.js */ "./src/libs/utils.js");
/* harmony import */ var _libs_animText_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/animText.js */ "./src/libs/animText.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.js */ "./src/config.js");
/* harmony import */ var _js_data_gameObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/data/gameObject.js */ "./src/js/data/gameObject.js");
/* harmony import */ var _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/data/items.js */ "./src/js/data/items.js");
/* harmony import */ var _js_data_mapManager_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/data/mapManager.js */ "./src/js/data/mapManager.js");
/* harmony import */ var _js_data_objectManager_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/data/objectManager.js */ "./src/js/data/objectManager.js");
/* harmony import */ var _js_data_player_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/data/player.js */ "./src/js/data/player.js");
/* harmony import */ var _js_data_store_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/data/store.js */ "./src/js/data/store.js");
/* harmony import */ var _js_data_projectile_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/data/projectile.js */ "./src/js/data/projectile.js");
/* harmony import */ var _js_data_projectileManager_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js/data/projectileManager.js */ "./src/js/data/projectileManager.js");
/* harmony import */ var _js_data_aiManager_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./js/data/aiManager.js */ "./src/js/data/aiManager.js");
/* harmony import */ var _js_data_ai_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./js/data/ai.js */ "./src/js/data/ai.js");
/* harmony import */ var _vultr_VultrSeeker_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./vultr/VultrSeeker.js */ "./src/vultr/VultrSeeker.js");
/* harmony import */ var _vultr_VultrLock_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./vultr/VultrLock.js */ "./src/vultr/VultrLock.js");



















const serverPackets = {};
const { log } = console;

let packets, serverSide;

packets = {
  PING: "pp",
  REGISTER: "budv",
  ACCEPT_CLAN_JOIN: "11",
  SEND_CLAN_JOIN: "10",
  CLAN_KICK: "12",
  CLAN_CREATE: "8",
  CLAN_LEAVE: "9",
  STORE_EQUIP: "13c",
  SEND_CHAT: "ch",
  ATTACK: "c",
  AIM: "2",
  RESET_MOVE_DIR: "rmd",
  FREEZE: "7",
  MAP_PING: "14",
  MOVEMENT: "33",
  CHANGE_WEAPON: "5",
  SPAWN: "sp",
  UPGRADE: "6"
};

serverSide = {
  INIT: "id",
  DISCONNECT: "d",
  SETUP_GAME: 1,
  ADD_PLAYER: 2,
  REMOVE_PLAYER: 4,
  PLAYER_TICK: 33,
  UPDATE_LEADERBOARD: 5,
  GAME_OBJECT: 6,
  LOAD_AI: "a",
  ANIMAL_TICK: "aa",
  HIT_START: 7,
  OBJECT_WIGGLE: 8,
  TURRET_SHOOT: "sp",
  RESOURCES: 9,
  HEALTH: "h",
  KILL_PLAYER: 11,
  KILL_OBJECT: 12,
  KILL_OBJECTS: 13,
  UPDATE_ITEM_COUNTS: 14,
  UPDATE_AGE: 15,
  UPDATE_UPGRADES: 16,
  UPDATE_ITEMS: 17,
  ADD_PROJECTILE: 18,
  REMOVE_PROJECTILE: 19,
  SERVER_SHUTDOWN: 20,
  ADD_ALLIANCE: "ac",
  DELETE_ALLIANCE: "ad",
  ALLIANCE_PING: "an",
  PLAYER_CLAN: "st",
  ALLIANCE_PLAYERS: "sa",
  UPDATE_STORE: "us",
  CHAT: "ch",
  MINIMAP_TICK: "mm",
  MAP_PING: "p",
  PING: "pp",
  SHOW_TEXT: "t"
};

if (location.href.includes("moomoo")) {
    packets = {
      PING: "0", // ok
      REGISTER: "budv", // ok
      ACCEPT_CLAN_JOIN: "11",
      SEND_CLAN_JOIN: "b", // ok
      CLAN_KICK: "12",
      CLAN_CREATE: "8",
      CLAN_LEAVE: "9",
      STORE_EQUIP: "c", // ok
      SEND_CHAT: "6", // ok
      ATTACK: "d", // ok
      AIM: "D", // ok
      RESET_MOVE_DIR: "e", // ok
      FREEZE: "K", // ok
      MAP_PING: "14", // ok
      MOVEMENT: "a", // ok
      CHANGE_WEAPON: "G", // ok
      SPAWN: "M", // ok
      UPGRADE: "H" // ok
    };

    serverSide = {
      INIT: "A",
      DISCONNECT: "B",
      SETUP_GAME: "C",
      ADD_PLAYER: "D",
      REMOVE_PLAYER: "E",
      PLAYER_TICK: "a",
      UPDATE_LEADERBOARD: "G",
      GAME_OBJECT: "H",
      LOAD_AI: "I",
      ANIMAL_TICK: "J",
      HIT_START: "K",
      OBJECT_WIGGLE: "L",
      TURRET_SHOOT: "M",
      RESOURCES: "N",
      HEALTH: "O",
      KILL_PLAYER: "P",
      KILL_OBJECT: "Q",
      KILL_OBJECTS: "R",
      UPDATE_ITEM_COUNTS: "S",
      UPDATE_AGE: "T",
      UPDATE_UPGRADES: "U",
      UPDATE_ITEMS: "V",
      ADD_PROJECTILE: "X",
      REMOVE_PROJECTILE: "Y",
      SERVER_SHUTDOWN: "Z",
      ADD_ALLIANCE: "g",
      DELETE_ALLIANCE: 1,
      ALLIANCE_PING: 2,
      PLAYER_CLAN: 3,
      ALLIANCE_PLAYERS: 4,
      UPDATE_STORE: 5,
      CHAT: 6,
      MINIMAP_TICK: 7,
      MAP_PING: 8,
      PING: 9,
      SHOW_TEXT: 0
    };
  }

serverPackets[serverSide.INIT] = setInitData;
serverPackets[serverSide.DISCONNECT] = disconnect;
serverPackets[serverSide.SETUP_GAME] = setupGame;
serverPackets[serverSide.ADD_PLAYER] = addPlayer;
serverPackets[serverSide.REMOVE_PLAYER] = removePlayer;
serverPackets[serverSide.PLAYER_TICK] = updatePlayers;
serverPackets[serverSide.UPDATE_LEADERBOARD] = updateLeaderboard;
serverPackets[serverSide.GAME_OBJECT] = loadGameObject;
serverPackets[serverSide.LOAD_AI] = loadAI;
serverPackets[serverSide.ANIMAL_TICK] = animateAI;
serverPackets[serverSide.HIT_START] = gatherAnimation;
serverPackets[serverSide.OBJECT_WIGGLE] = wiggleGameObject;
serverPackets[serverSide.TURRET_SHOOT] = shootTurret;
serverPackets[serverSide.RESOURCES] = updatePlayerValue;
serverPackets[serverSide.HEALTH] = updateHealth;
serverPackets[serverSide.KILL_PLAYER] = killPlayer;
serverPackets[serverSide.KILL_OBJECT] = killObject;
serverPackets[serverSide.KILL_OBJECTS] = killObjects;
serverPackets[serverSide.UPDATE_ITEM_COUNTS] = updateItemCounts;
serverPackets[serverSide.UPDATE_AGE] = updateAge;
serverPackets[serverSide.UPDATE_UPGRADES] = updateUpgrades;
serverPackets[serverSide.UPDATE_ITEMS] = updateItems;
serverPackets[serverSide.ADD_PROJECTILE] = addProjectile;
serverPackets[serverSide.REMOVE_PROJECTILE] = remProjectile;
serverPackets[serverSide.SERVER_SHUTDOWN] = serverShutdownNotice;
serverPackets[serverSide.ADD_ALLIANCE] = addAlliance;
serverPackets[serverSide.DELETE_ALLIANCE] = deleteAlliance;
serverPackets[serverSide.ALLIANCE_PING] = allianceNotification;
serverPackets[serverSide.PLAYER_CLAN] = setPlayerTeam;
serverPackets[serverSide.ALLIANCE_PLAYERS] = setAlliancePlayers;
serverPackets[serverSide.UPDATE_STORE] = updateStoreItems;
serverPackets[serverSide.CHAT] = receiveChat;
serverPackets[serverSide.MINIMAP_TICK] = updateMinimap;
serverPackets[serverSide.PING] = pingSocketResponse;
serverPackets[serverSide.MAP_PING] = pingMap;
serverPackets[serverSide.SHOW_TEXT] = showText;

const textManager = new _libs_animText_js__WEBPACK_IMPORTED_MODULE_4__["default"].TextManager();

const hit360 = 1.998715926535898e+272;
let nearestGameObjects = [];

const clanNames = [
  "ez",
  "eZ",
  "EZ",
  "EZZZ",
  "ez?",
  "L",
  "L ez",
  "urbad",
  "urez"
];

const versionHash = "1.6-Theta";
const changelog = "Added tanker mode";
const motionBlurLevel = 0.6;
let instakilling = false;

let offsetCamX = 0;
let offsetCamY = 0;
let deltaHold = 10;
let ownerSid = null;
let autoclicker = false;

const emojis = new Map();

emojis.set(":smile:", "😀");
emojis.set(":laugh:", "😂");
emojis.set(":wink:", "😉");
emojis.set(":moan:", "😫");
emojis.set(":sob:", "😭");
emojis.set(":hot:", "🥵");
emojis.set(":cold:", "🥶");
emojis.set(":skull:", "💀");
emojis.set(":skullium:", "☠️");
emojis.set(":clown:", "🤡");

const blacklist = new Map(Object.entries({
  be3mamn: true,
  SaVeGe: true,
  RaZoshi: true,
  Travis: true,
  missy: true
}));

window.loadedScript = true;

var isProd = location.origin.includes("http://")
var startedConnecting = false;

if (localStorage.version !== versionHash) {
  sweetalert2__WEBPACK_IMPORTED_MODULE_1__.fire({
    position: "top-end",
    icon: "success",
    title: "AutoWASM has been updated to version " + versionHash + "!",
    text: changelog,
    showConfirmButton: false,
    timer: 3000,
    allowOutsideClick: false
  });
  localStorage.version = versionHash;
}

function getToken() {
  return location.href.includes("mohmoh") ? "6LcuxskpAAAAADyVCDYxrXrKEG4w-utU5skiTBZH" : "6LfahtgjAAAAAF8SkpjyeYMcxMdxIaQeh-VoPATP";
}

async function waitForAPI(prop, callback) {
  return new Promise(async resolve => {
    if (!window[prop]) {
      const waitInt = setInterval(async () => {
        if (!window[prop]) return;

        clearInterval(waitInt);
        resolve(
          await callback()
        );
      }, 100);
    }
    else resolve(await callback());
  });
}

async function connectSocketIfReady() {
  if (startedConnecting) return;
  startedConnecting = true;

  await waitForAPI("grecaptcha", () => 
    new Promise(grecaptcha.ready));
  
  const token = await grecaptcha.execute(getToken(), {
    action: "homepage" 
  });
  log("[*] Generated token " + token);
  const server = await (0,_vultr_VultrSeeker_js__WEBPACK_IMPORTED_MODULE_16__["default"])();
  const prefix = location.href.includes("moomoo") ? "re:" : "";
  
  connectSocket(prefix + token, server);
}

const wsLogs = [];

function connectSocket(token, server = location.host) {
  var wsAddress = (isProd ? "ws" : "wss") + '://' + server + "/?token=" + token;
  
  window.socket = top.socket = _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].connect(wsAddress, function (error) {
    if (location.href.includes("mohmoh"))
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.REGISTER, 0);
    
    pingSocket(); (error !== "Invalid Connection" && error) ? disconnect(error) : (enterGameButton.onclick = _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(function () {
      if (error) {
        disconnect(error);
      } else {
        enterGame();
      }
    }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].hookTouchEvents(enterGameButton), joinPartyButton.onclick = _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(function () {
      setTimeout(function () {
        var currentKey = serverBrowser.value,
          key = prompt('party key', currentKey);
        key && (window.onbeforeunload = void 0, window.location.href = '/?server=' + key);
      }, 10);
    }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].hookTouchEvents(joinPartyButton), settingsButton.onclick = _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(function () {
      guideCard.classList.contains('showing') ? (guideCard.classList.remove('showing'), settingsButtonTitle.innerText = 'Settings') : (guideCard.classList.add('showing'), settingsButtonTitle.innerText = 'Close');
    }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].hookTouchEvents(settingsButton), allianceButton.onclick = _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(function () {
      resetMoveDir(), 'block' != allianceMenu.style.display ? showAllianceMenu() : allianceMenu.style.display = 'none';
    }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].hookTouchEvents(allianceButton), storeButton.onclick = _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(function () {
      'block' != storeMenu.style.display ? (storeMenu.style.display = 'block', allianceMenu.style.display = 'none', closeChat(), generateStoreList()) : storeMenu.style.display = 'none';
    }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].hookTouchEvents(storeButton), chatButton.onclick = _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(function () {
      toggleChat();
    }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].hookTouchEvents(chatButton), mapDisplay.onclick = _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(function () {
      sendMapPing();
    }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].hookTouchEvents(mapDisplay), function () {
      for (var i = 0; i < icons.length; ++i) {
        var tmpSprite = new Image();
        tmpSprite.onload = function () {
          this.isLoaded = !0;
        }, tmpSprite.src = '.././img/icons/' + icons[i] + '.png', iconSprites[icons[i]] = tmpSprite;
      }
    }(), loadingText.style.display = 'none', menuCardHolder.style.display = 'block', nameInput.value = getSavedVal('moo_name') || '', function () {
      var savedNativeValue = getSavedVal('native_resolution') || true;
      setUseNativeResolution(savedNativeValue ? 'true' == savedNativeValue : 'undefined' != typeof cordova), showPing = 'true' == getSavedVal('show_ping'), pingDisplay.hidden = !showPing, getSavedVal('moo_moosic'), updateSkinColorPicker(), _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeAllChildren(actionBar);
      for (var i = 0; i < _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons.length + _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].list.length; ++i)
        ! function (i) {
          _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
            id: 'actionBarItem' + i,
            class: 'actionBarItem',
            style: 'display:none',
            onmouseout: function () {
              showItemInfo();
            },
            parent: actionBar
          });
        }(i);
      for (i = 0; i < _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].list.length + _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons.length; ++i)
        ! function (i) {
          var tmpCanvas = document.createElement('canvas');
          tmpCanvas.width = tmpCanvas.height = 66;
          var tmpContext = tmpCanvas.getContext('2d');
          if (tmpContext.translate(tmpCanvas.width / 2, tmpCanvas.height / 2), tmpContext.imageSmoothingEnabled = !1, tmpContext.webkitImageSmoothingEnabled = !1, tmpContext.mozImageSmoothingEnabled = !1, _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[i]) {
            tmpContext.rotate(Math.PI / 4 + Math.PI);
            var tmpSprite = new Image();
            toolSprites[_js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[i].src] = tmpSprite, tmpSprite.onload = function () {
                this.isLoaded = !0;
                var tmpPad = 1 / (this.height / this.width),
                  tmpMlt = _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[i].iPad || 1;
                tmpContext.drawImage(this, -tmpCanvas.width * tmpMlt * _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].iconPad * tmpPad / 2, -tmpCanvas.height * tmpMlt * _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].iconPad / 2, tmpCanvas.width * tmpMlt * tmpPad * _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].iconPad, tmpCanvas.height * tmpMlt * _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].iconPad), tmpContext.fillStyle = 'rgba(0, 0, 70, 0.1)', tmpContext.globalCompositeOperation = 'source-atop', tmpContext.fillRect(-tmpCanvas.width / 2, -tmpCanvas.height / 2, tmpCanvas.width, tmpCanvas.height), document.getElementById('actionBarItem' + i)
                  .style.backgroundImage = 'url(' + tmpCanvas.toDataURL() + ')';
              }, tmpSprite.src = '.././img/weapons/' + _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[i].src + '.png', (tmpUnit = document.getElementById('actionBarItem' + i))
              .onmouseover = _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(function () {
                showItemInfo(_js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[i], !0);
              }), tmpUnit.onclick = _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(function () {
                selectToBuild(i, !0);
              }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].hookTouchEvents(tmpUnit);
          } else {
            tmpSprite = getItemSprite(_js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].list[i - _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons.length], !0);
            var tmpUnit, tmpScale = Math.min(tmpCanvas.width - _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].iconPadding, tmpSprite.width);
            tmpContext.globalAlpha = 1, tmpContext.drawImage(tmpSprite, -tmpScale / 2, -tmpScale / 2, tmpScale, tmpScale), tmpContext.fillStyle = 'rgba(0, 0, 70, 0.1)', tmpContext.globalCompositeOperation = 'source-atop', tmpContext.fillRect(-tmpScale / 2, -tmpScale / 2, tmpScale, tmpScale), document.getElementById('actionBarItem' + i)
              .style.backgroundImage = 'url(' + tmpCanvas.toDataURL() + ')', (tmpUnit = document.getElementById('actionBarItem' + i))
              .onmouseover = _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(function () {
                showItemInfo(_js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].list[i - _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons.length]);
              }), tmpUnit.onclick = _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(function () {
                selectToBuild(i - _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons.length);
              }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].hookTouchEvents(tmpUnit);
          }
        }(i);
      nameInput.ontouchstart = _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(function (e) {
        e.preventDefault();
        var newValue = prompt('enter name', e.currentTarget.value);
        newValue && (e.currentTarget.value = newValue.slice(0, 15));
      }), nativeResolutionCheckbox.checked = useNativeResolution, nativeResolutionCheckbox.onchange = _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(function (e) {
        setUseNativeResolution(e.target.checked);
      }), showPingCheckbox.checked = showPing, showPingCheckbox.onchange = _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(function (e) {
        showPing = showPingCheckbox.checked, pingDisplay.hidden = !showPing, saveVal('show_ping', showPing ? 'true' : 'false');
      });
    }());
  }, serverPackets), setupServerStatus(), setTimeout(() => updateServerList(), 3000);
}
var canStore = 0,
  mathPI = Math.PI,
  mathPI2 = 2 * mathPI;

function saveVal(name, val) {
  canStore && localStorage.setItem(name, val);
}

function getSavedVal(name) {
  return canStore ? localStorage.getItem(name) : null;
}
Math.lerpAngle = function (value1, value2, amount) {
  Math.abs(value2 - value1) > mathPI && (value1 > value2 ? value2 += mathPI2 : value1 += mathPI2);
  var value = value2 + (value1 - value2) * amount;
  return value >= 0 && value <= mathPI2 ? value : value % mathPI2;
}, CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
  return w < 2 * r && (r = w / 2), h < 2 * r && (r = h / 2), r < 0 && (r = 0), this.beginPath(), this.moveTo(x + r, y), this.arcTo(x + w, y, x + w, y + h, r), this.arcTo(x + w, y + h, x, y + h, r), this.arcTo(x, y + h, x, y, r), this.arcTo(x, y, x + w, y, r), this.closePath(), this;
}, 'undefined' != typeof Storage && (canStore = !0); //,// getSavedVal("consent") || (consentBlock.style.display="block"),window.checkTerms=function(e){e?(consentBlock.style.display="none",saveVal("consent",1)):$("#consentShake").effect("shake")};
var useNativeResolution, showPing, delta, now, lastSent, attackState, player, playerSID, tmpObj, camX = 100, camY = 100, tmpDir, screenWidth, screenHeight, moofoll = getSavedVal('moofoll'),
  pixelDensity = 1,
  lastUpdate = Date.now(),
  ais = [],
  players = [],
  alliances = [],
  gameObjects = [],
  projectiles = [],
  projectileManager = new _js_data_projectileManager_js__WEBPACK_IMPORTED_MODULE_13__["default"](_js_data_projectile_js__WEBPACK_IMPORTED_MODULE_12__["default"], projectiles, players, ais, objectManager, _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"], _config_js__WEBPACK_IMPORTED_MODULE_5__["default"], _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
  aiManager = new _js_data_aiManager_js__WEBPACK_IMPORTED_MODULE_14__["default"](ais, _js_data_ai_js__WEBPACK_IMPORTED_MODULE_15__["default"], players, _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"], null, _config_js__WEBPACK_IMPORTED_MODULE_5__["default"], _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
  waterMult = 1,
  waterPlus = 0,
  mouseX = 0,
  mouseY = 0,
  controllingTouch = {
    id: -1,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0
  },
  attackingTouch = {
    id: -1,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0
  },
  skinColor = 0,
  maxScreenWidth = _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].maxScreenWidth,
  maxScreenHeight = _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].maxScreenHeight,
  gridDelta = maxScreenHeight / 18,
  inGame = !1,
  mainMenu = (document.getElementById('ad-container'), document.getElementById('mainMenu')),
  enterGameButton = document.getElementById('enterGame'),
  promoImageButton = document.getElementById('promoImg'),
  partyButton = document.getElementById('partyButton'),
  joinPartyButton = document.getElementById('joinPartyButton'),
  settingsButton = document.getElementById('settingsButton'),
  settingsButtonTitle = settingsButton.getElementsByTagName('span')[0],
  allianceButton = document.getElementById('allianceButton'),
  storeButton = document.getElementById('storeButton'),
  chatButton = document.getElementById('chatButton'),
  gameCanvas = document.getElementById('gameCanvas'),
  mainContext = gameCanvas.getContext('2d'),
  serverBrowser = document.getElementById('serverBrowser'),
  nativeResolutionCheckbox = document.getElementById('nativeResolution'),
  showPingCheckbox = document.getElementById('showPing'),
  pingDisplay = (document.getElementById('playMusic'), document.getElementById('pingDisplay')),
  shutdownDisplay = document.getElementById('shutdownDisplay'),
  menuCardHolder = document.getElementById('menuCardHolder'),
  guideCard = document.getElementById('guideCard'),
  loadingText = document.getElementById('loadingText'),
  gameUI = document.getElementById('gameUI'),
  actionBar = document.getElementById('actionBar'),
  scoreDisplay = document.getElementById('scoreDisplay'),
  foodDisplay = document.getElementById('foodDisplay'),
  woodDisplay = document.getElementById('woodDisplay'),
  stoneDisplay = document.getElementById('stoneDisplay'),
  killCounter = document.getElementById('killCounter'),
  leaderboardData = document.getElementById('leaderboardData'),
  nameInput = document.getElementById('nameInput'),
  itemInfoHolder = document.getElementById('itemInfoHolder'),
  ageText = document.getElementById('ageText'),
  ageBarBody = document.getElementById('ageBarBody'),
  upgradeHolder = document.getElementById('upgradeHolder'),
  upgradeCounter = document.getElementById('upgradeCounter'),
  allianceMenu = document.getElementById('allianceMenu'),
  allianceHolder = document.getElementById('allianceHolder'),
  allianceManager = document.getElementById('allianceManager'),
  mapDisplay = document.getElementById('mapDisplay'),
  diedText = document.getElementById('diedText'),
  skinColorHolder = document.getElementById('skinColorHolder'),
  mapContext = mapDisplay.getContext('2d');
mapDisplay.width = 300, mapDisplay.height = 300;
var storeMenu = document.getElementById('storeMenu'),
  storeHolder = document.getElementById('storeHolder'),
  noticationDisplay = document.getElementById('noticationDisplay'),
  hats = _js_data_store_js__WEBPACK_IMPORTED_MODULE_11__["default"].hats,
  accessories = _js_data_store_js__WEBPACK_IMPORTED_MODULE_11__["default"].accessories,
  objectManager = new _js_data_objectManager_js__WEBPACK_IMPORTED_MODULE_9__["default"](_js_data_gameObject_js__WEBPACK_IMPORTED_MODULE_6__["default"], gameObjects, _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"], _config_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
  outlineColor = '#525252',
  darkOutlineColor = '#3d3f42';

function setInitData(data) {
  alliances = data.teams;
}

var inWindow = !0,
  didLoad = !1,
  captchaReady = !1;

async function disconnect(reason) {
  const req = await fetch("https://api.ipify.org/");
  const ip = await req.text();
  
  sweetalert2__WEBPACK_IMPORTED_MODULE_1__.fire({
    icon: "error",
    title: "WebSocket closed",
    html: `Probably flower or someone other crashed the server. <br>
    IP Address: ${ip} <br>
    Reason: ${reason} <br>
    Recaptcha token: ${localStorage._grecaptcha} <br> <br>
    Contact 0xffabc at mohmoh's server if you have more questions`,
    showConfirmButton: true,
  });
}

function showLoadingText(text) {
  mainMenu.style.display = 'block', gameUI.style.display = 'none', menuCardHolder.style.display = 'none', diedText.style.display = 'none', loadingText.style.display = 'block', loadingText.innerHTML = text + '<a href=\'javascript:window.location.href=window.location.href\' class=\'ytLink\'>reload</a>';
}
window.onblur = function () {
  inWindow = !1;
}, window.onfocus = function () {
  inWindow = !0, player && player.alive && resetMoveDir();
}, gameCanvas.oncontextmenu = function () {
  return !1;
};
window.onload = () => connectSocketIfReady();
window.captchaCallback = () => connectSocketIfReady();
didLoad = true;
connectSocketIfReady();

function setupServerStatus() {
  var altServerText, altServerURL, tmpHTML = '',
    overallTotal = 0;
  tmpHTML += '<option disabled>All Servers - 100 players</option>', serverBrowser.innerHTML = tmpHTML, 'mohmoh.eu' == location.hostname ? (altServerText = 'Back to MohMoh', altServerURL = '//mohmoh.eu/') : (altServerText = 'Try the sandbox', altServerURL = '//mohmoh.eu/'), document.getElementById('altServer')
    .innerHTML = '<a href=\'' + altServerURL + '\'>' + altServerText + '<i class=\'material-icons\' style=\'font-size:10px;vertical-align:middle\'>arrow_forward_ios</i></a>';
}

function updateServerList() { }

function showItemInfo(item, isWeapon, isStoreItem) {
  if (player && item)
    if (_libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeAllChildren(itemInfoHolder), itemInfoHolder.classList.add('visible'), _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
        id: 'itemInfoName',
        text: _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].capitalizeFirst(item.name),
        parent: itemInfoHolder
      }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
        id: 'itemInfoDesc',
        text: item.desc,
        parent: itemInfoHolder
      }), isStoreItem);
    else if (isWeapon)
    _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
      class: 'itemInfoReq',
      text: item.type ? 'secondary' : 'primary',
      parent: itemInfoHolder
    });
  else {
    for (var i = 0; i < item.req.length; i += 2)
      _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
        class: 'itemInfoReq',
        html: item.req[i] + '<span class=\'itemInfoReqVal\'> x' + item.req[i + 1] + '</span>',
        parent: itemInfoHolder
      });
    item.group.limit && _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
      class: 'itemInfoLmt',
      text: (player.itemCounts[item.group.id] || 0) + '/' + item.group.limit,
      parent: itemInfoHolder
    });
  } else
    itemInfoHolder.classList.remove('visible');
}

var lastDeath, minimapData, mapMarker, allianceNotifications = [],
  alliancePlayers = [];

function allianceNotification(sid, name) {
  allianceNotifications.push({
    sid: sid,
    name: name
  }), updateNotifications();
}

function updateNotifications() {
  if (allianceNotifications[0]) {
    var tmpN = allianceNotifications[0];
    _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeAllChildren(noticationDisplay), noticationDisplay.style.display = 'block', _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
      class: 'notificationText',
      text: tmpN.name,
      parent: noticationDisplay
    }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
      class: 'notifButton',
      html: '<i class=\'material-icons\' style=\'font-size:28px;color:#cc5151;\'>&#xE14C;</i>',
      parent: noticationDisplay,
      onclick: function () {
        aJoinReq(0);
      },
      hookTouch: !0
    }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
      class: 'notifButton',
      html: '<i class=\'material-icons\' style=\'font-size:28px;color:#8ecc51;\'>&#xE876;</i>',
      parent: noticationDisplay,
      onclick: function () {
        aJoinReq(1);
      },
      hookTouch: !0
    });
  } else
    noticationDisplay.style.display = 'none';
}

function addAlliance(data) {
  alliances.push(data), 'block' == allianceMenu.style.display && showAllianceMenu();
}

function setPlayerTeam(team, isOwner) {
  player && (player.team = team, player.isOwner = isOwner, 'block' == allianceMenu.style.display && showAllianceMenu());
}

function setAlliancePlayers(data) {
  alliancePlayers = data, 'block' == allianceMenu.style.display && showAllianceMenu();
}

function deleteAlliance(sid) {
  for (var i = alliances.length - 1; i >= 0; i--)
    alliances[i].sid == sid && alliances.splice(i, 1);
  'block' == allianceMenu.style.display && showAllianceMenu();
}

function showAllianceMenu() {
  if (player && player.alive) {
    if (closeChat(), storeMenu.style.display = 'none', allianceMenu.style.display = 'block', _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeAllChildren(allianceHolder), player.team)
      for (var i = 0; i < alliancePlayers.length; i += 2)
        ! function (i) {
          var tmp = _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
            class: 'allianceItem',
            style: 'color:' + (alliancePlayers[i] == player.sid ? '#fff' : 'rgba(255,255,255,0.6)'),
            text: alliancePlayers[i + 1],
            parent: allianceHolder
          });
          player.isOwner && alliancePlayers[i] != player.sid && _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
            class: 'joinAlBtn',
            text: 'Kick',
            onclick: function () {
              kickFromClan(alliancePlayers[i]);
            },
            hookTouch: !0,
            parent: tmp
          });
        }(i);
    else if (alliances.length)
      for (i = 0; i < alliances.length; ++i)
        ! function (i) {
          var tmp = _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
            class: 'allianceItem',
            style: 'color:' + (alliances[i].sid == player.team ? '#fff' : 'rgba(255,255,255,0.6)'),
            text: alliances[i].sid,
            parent: allianceHolder
          });
          _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
            class: 'joinAlBtn',
            text: 'Join',
            onclick: function () {
              sendJoin(i);
            },
            hookTouch: !0,
            parent: tmp
          });
        }(i);
    else
      _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
        class: 'allianceItem',
        text: 'No Tribes Yet',
        parent: allianceHolder
      });
    _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeAllChildren(allianceManager), player.team ? _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
      class: 'allianceButtonM',
      style: 'width: 360px',
      text: player.isOwner ? 'Delete Tribe' : 'Leave Tribe',
      onclick: function () {
        leaveAlliance();
      },
      hookTouch: !0,
      parent: allianceManager
    }) : (_libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
      tag: 'input',
      type: 'text',
      id: 'allianceInput',
      maxLength: 7,
      placeholder: 'unique name',
      ontouchstart: function (ev) {
        ev.preventDefault();
        var newValue = prompt('unique name', ev.currentTarget.value);
        ev.currentTarget.value = newValue.slice(0, 7);
      },
      parent: allianceManager
    }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
      tag: 'div',
      class: 'allianceButtonM',
      style: 'width: 140px;',
      text: 'Create',
      onclick: function () {
        createAlliance();
      },
      hookTouch: !0,
      parent: allianceManager
    }));
  }
}

function aJoinReq(join) {
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.ACCEPT_CLAN_JOIN, allianceNotifications[0].sid, join), allianceNotifications.splice(0, 1), updateNotifications();
}

function kickFromClan(sid) {
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.CLAN_KICK, sid);
}

function sendJoin(index) {
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.SEND_CLAN_JOIN, alliances[index].sid);
}

function createAlliance() {
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.CLAN_CREATE, "⁣" + document.getElementById('allianceInput')
    .value + "⁣");
}

let waka = 0; // sorry for bad variable name

function leaveAlliance() {
  allianceNotifications = [], updateNotifications(), _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.CLAN_LEAVE);
}
var tmpPing, mapPings = [];

function pingMap(x, y) {
  for (var i = 0; i < mapPings.length; ++i)
    if (!mapPings[i].active) {
      tmpPing = mapPings[i];
      break;
    }
  tmpPing || (tmpPing = new function () {
    this.init = function (x, y) {
      this.scale = 0, this.x = x, this.y = y, this.active = !0;
    }, this.update = function (ctxt, delta) {
      this.active && (this.scale += 0.05 * delta, this.scale >= _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapPingScale ? this.active = !1 : (ctxt.globalAlpha = 1 - Math.max(0, this.scale / _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapPingScale), ctxt.beginPath(), ctxt.arc(this.x / _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapScale * mapDisplay.width, this.y / _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapScale * mapDisplay.width, this.scale, 0, 2 * Math.PI), ctxt.stroke()));
    };
  }(), mapPings.push(tmpPing)), tmpPing.init(x, y);
}

function updateMinimap(data) {
  minimapData = data;
}
var currentStoreIndex = 0;

function updateStoreItems(type, id, index) {
  index ? type ? player.tailIndex = id : player.tails[id] = 1 : type ? player.skinIndex = id : player.skins[id] = 1, 'block' == storeMenu.style.display && generateStoreList();
}

function generateStoreList() {
  if (player) {
    _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeAllChildren(storeHolder);
    for (var index = currentStoreIndex, tmpArray = index ? accessories : hats, i = 0; i < tmpArray.length; ++i)
      tmpArray[i].dontSell || function (i) {
        var tmp = _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
          id: 'storeDisplay' + i,
          class: 'storeItem',
          onmouseout: function () {
            showItemInfo();
          },
          onmouseover: function () {
            showItemInfo(tmpArray[i], !1, !0);
          },
          parent: storeHolder
        });
        _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].hookTouchEvents(tmp, !0), _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
          tag: 'img',
          class: 'hatPreview',
          src: '../img/' + (index ? 'accessories/access_' : 'hats/hat_') + tmpArray[i].id + (tmpArray[i].topSprite ? '_p' : '') + '.png',
          parent: tmp
        }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
          tag: 'span',
          text: tmpArray[i].name,
          parent: tmp
        }), (index ? player.tails[tmpArray[i].id] : player.skins[tmpArray[i].id]) ? (index ? player.tailIndex : player.skinIndex) == tmpArray[i].id ? _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
          class: 'joinAlBtn',
          style: 'margin-top: 5px',
          text: 'Unequip',
          onclick: function () {
            storeEquip(0, index);
          },
          hookTouch: !0,
          parent: tmp
        }) : _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
          class: 'joinAlBtn',
          style: 'margin-top: 5px',
          text: 'Equip',
          onclick: function () {
            storeEquip(tmpArray[i].id, index);
          },
          hookTouch: !0,
          parent: tmp
        }) : (_libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
          class: 'joinAlBtn',
          style: 'margin-top: 5px',
          text: 'Buy',
          onclick: function () {
            storeBuy(tmpArray[i].id, index);
          },
          hookTouch: !0,
          parent: tmp
        }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
          tag: 'span',
          class: 'itemPrice',
          text: tmpArray[i].price,
          parent: tmp
        }));
      }(i);
  }
}

function storeEquip(id, index) {
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.STORE_EQUIP, 0, id, index);
}

function storeBuy(id, index) {
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.STORE_EQUIP, 1, id, index);
}

function hideAllWindows() {
  storeMenu.style.display = 'none', allianceMenu.style.display = 'none', closeChat();
}

function updateItems(data, wpn) {
  data && (wpn ? player.weapons = data : player.items = data);
  for (var i = 0; i < _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].list.length; ++i) {
    var tmpI = _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons.length + i;
    document.getElementById('actionBarItem' + tmpI)
      .style.display = player.items.indexOf(_js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].list[i].id) >= 0 ? 'inline-block' : 'none';
  }
  for (i = 0; i < _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons.length; ++i)
    document.getElementById('actionBarItem' + i)
    .style.display = player.weapons[_js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[i].type] == _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[i].id ? 'inline-block' : 'none';
}

function setUseNativeResolution(useNative) {
  useNativeResolution = useNative, pixelDensity = useNative && window.devicePixelRatio || 1, nativeResolutionCheckbox.checked = useNative, saveVal('native_resolution', useNative.toString()), resize();
}

function updateSkinColorPicker() {
  for (var tmpHTML = '', i = 0; i < _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].skinColors.length; ++i)
    tmpHTML += i == skinColor ? '<div class=\'skinColorItem activeSkin\' style=\'background-color:' + _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].skinColors[i] + '\' onclick=\'selectSkinColor(' + i + ')\'></div>' : '<div class=\'skinColorItem\' style=\'background-color:' + _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].skinColors[i] + '\' onclick=\'selectSkinColor(' + i + ')\'></div>';
  skinColorHolder.innerHTML = tmpHTML;
}
var chatBox = document.getElementById('chatBox'),
  chatHolder = document.getElementById('chatHolder');

function toggleChat() {
  usingTouch ? setTimeout(function () {
    var chatMessage = prompt('chat message');
    chatMessage && sendChat(chatMessage);
  }, 1) : 'block' == chatHolder.style.display ? (chatBox.value && sendChat(chatBox.value), closeChat()) : (storeMenu.style.display = 'none', allianceMenu.style.display = 'none', chatHolder.style.display = 'block', chatBox.focus(), resetMoveDir()), chatBox.value = '';
}

function sendChat(message) {
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.SEND_CHAT, message.slice(0, 30));
}

function closeChat() {
  chatBox.value = '', chatHolder.style.display = 'none';
}
var usingTouch, lastDir, profanityList = [
  'cunt',
  'whore',
  'fuck',
  'shit',
  'faggot',
  'nigger',
  'nigga',
  'dick',
  'vagina',
  'minge',
  'cock',
  'rape',
  'cum',
  'sex',
  'tits',
  'penis',
  'clit',
  'pussy',
  'meatcurtain',
  'jizz',
  'prune',
  'douche',
  'wanker',
  'damn',
  'bitch',
  'dick',
  'fag',
  'bastard'
];

const syncChats = new Map(Object.entries({
  "DROP DEAD NO TRACE": "DROP DEAD NO TRACE",
  "!sync": "!op"
  }));

function receiveChat(sid, message) {
  var tmpPlayer = findPlayerBySID(sid);

  for (const [key, value] of emojis) {
    message = message.replaceAll(key, value);
  }

  if (/what\ mod/g.test(message) && Math.hypot(player.x - tmpPlayer.x, player.y - tmpPlayer.y) < 530 && player.sid != tmpPlayer.sid) {
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.SEND_CHAT, "AutoWASM By 0xffabc.");
  } else if (message.startsWith("!connect") && player.sid == tmpPlayer.sid) {
    const playerName = message.split("!connect ")[1];
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.CLAN_CREATE, clanNames[Math.floor(clanNames.length * Math.random())]);
    ownerSid = players.find(e => e && e?.name == playerName)?.sid;
    if (ownerSid) {
      setTimeout(() => _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.SEND_CHAT, "[*] Successfully connected to " + playerName + "!"), 1000);
    } else setTimeout(() => _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.SEND_CHAT, "[*] Connection failed!"), 1000);
  } else if (message.startsWith("!disconnect") && (player.sid == tmpPlayer.sid || tmpPlayer.sid == ownerSid)) {
    ownerSid = player.sid;
    setTimeout(() => _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.SEND_CHAT, "[*] Successfully disconnected"), 1000);
  } else if (tmpPlayer.sid == ownerSid || tmpPlayer.sid == player.sid) {
    switch (message) {
      case "!follow":
        setTimeout(() => _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.SEND_CHAT, `[*] ${window.follow ? "Enabling" : "Disabling"} follow module!`), 1000);
        window.follow = !window.follow;
        break;
      case "!bowspam":
        setTimeout(() => _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.SEND_CHAT, `[*] ${window.bowspam ? "Enabling" : "Disabling"} bowspam module!`), 1000);
        window.bowspam = !window.bowspam;
        break;
    }
  }

  if (syncChats.has(message) && tmpPlayer && sid != player.sid) {
    if (tmpPlayer.weaponIndex == tmpPlayer.weapons[1]) reverseInsta();
    else normalInsta();
  } else if (syncChats.has(message) && sid == player.sid) return;

  if (message == "!Synchronize") {
    return bowSync();
  }

  tmpPlayer && (tmpPlayer.chatMessage = function (text) {
    for (var tmpString, i = 0; i < profanityList.length; ++i)
      if (text.indexOf(profanityList[i]) > -1) {
        tmpString = '';
        for (var y = 0; y < profanityList[i].length; ++y)
          tmpString += tmpString.length ? 'o' : 'M';
        var re = new RegExp(profanityList[i], 'g');
        text = text.replace(re, tmpString);
      }
    return text;
  }(message), tmpPlayer.chatCountdown = _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].chatCountdown);
}

function resize() {
  gridDelta = maxScreenHeight / 18;
  screenWidth = window.innerWidth, screenHeight = window.innerHeight;
  var scaleFillNative = Math.max(screenWidth / maxScreenWidth, screenHeight / maxScreenHeight) * pixelDensity;
  gameCanvas.width = screenWidth * pixelDensity, gameCanvas.height = screenHeight * pixelDensity, gameCanvas.style.width = screenWidth + 'px', gameCanvas.style.height = screenHeight + 'px', mainContext.setTransform(scaleFillNative, 0, 0, scaleFillNative, (screenWidth * pixelDensity - maxScreenWidth * scaleFillNative) / 2, (screenHeight * pixelDensity - maxScreenHeight * scaleFillNative) / 2);
}

function setUsingTouch(using) {
  (usingTouch = using) ? guideCard.classList.add('touch'): guideCard.classList.remove('touch');
}

function touchEnd(ev) {
  ev.preventDefault(), ev.stopPropagation(), setUsingTouch(!0);
  for (var i = 0; i < ev.changedTouches.length; i++) {
    var t = ev.changedTouches[i];
    t.identifier == controllingTouch.id ? (controllingTouch.id = -1, sendMoveDir()) : t.identifier == attackingTouch.id && (attackingTouch.id = -1, player.buildIndex >= 0 && (attackState = 1, sendAtckState()), attackState = 0, sendAtckState());
  }
}

function getAttackDir() {
  return aimOverride ? aimOverride : (lastDir = Math.atan2(mouseY - screenHeight / 2, mouseX - screenWidth / 2));
}
window.addEventListener('resize', _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(resize)), resize(), setUsingTouch(!1), window.setUsingTouch = setUsingTouch, gameCanvas.addEventListener('touchmove', _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(function (ev) {
  ev.preventDefault(), ev.stopPropagation(), setUsingTouch(!0);
  for (var i = 0; i < ev.changedTouches.length; i++) {
    var t = ev.changedTouches[i];
    t.identifier == controllingTouch.id ? (controllingTouch.currentX = t.pageX, controllingTouch.currentY = t.pageY, sendMoveDir()) : t.identifier == attackingTouch.id && (attackingTouch.currentX = t.pageX, attackingTouch.currentY = t.pageY, attackState = 1);
  }
}), !1), gameCanvas.addEventListener('touchstart', _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(function (ev) {
  if (!inGame)
    return ev.preventDefault(), !1;
  ev.preventDefault(), ev.stopPropagation(), setUsingTouch(!0);
  for (var i = 0; i < ev.changedTouches.length; i++) {
    var t = ev.changedTouches[i];
    t.pageX < document.body.scrollWidth / 2 && -1 == controllingTouch.id ? (controllingTouch.id = t.identifier, controllingTouch.startX = controllingTouch.currentX = t.pageX, controllingTouch.startY = controllingTouch.currentY = t.pageY, sendMoveDir()) : t.pageX > document.body.scrollWidth / 2 && -1 == attackingTouch.id && (attackingTouch.id = t.identifier, attackingTouch.startX = attackingTouch.currentX = t.pageX, attackingTouch.startY = attackingTouch.currentY = t.pageY, player.buildIndex < 0 && (attackState = 1, sendAtckState()));
  }
}), false), gameCanvas.addEventListener('touchend', _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(touchEnd), !1), gameCanvas.addEventListener('touchcancel', _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(touchEnd), !1), gameCanvas.addEventListener('touchleave', _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(touchEnd), !1), gameCanvas.addEventListener('mousemove', function (e) {
  e.preventDefault(), e.stopPropagation(), setUsingTouch(!1), mouseX = e.clientX, mouseY = e.clientY;
}, false), gameCanvas.addEventListener('mousedown', function (e) {
  aimOverride = false;
  setUsingTouch(!1), 1 != attackState && (attackState = 1, sendAtckState());
  touch = e.button == 0;
}, false), gameCanvas.addEventListener('mouseup', function (e) {
  setUsingTouch(!1), 0 != attackState && (attackState = 0, sendAtckState());
}, false);
gameCanvas.addEventListener("wheel", function (e) {
  const deltaY = maxScreenWidth / 20;
  const fixedDelta = e.deltaY > 0 ? deltaY : -deltaY;
  maxScreenWidth += fixedDelta;
  maxScreenHeight += fixedDelta;
  
  resize();
}, false);
  let touch = 0;
var keys = {},
  moveKeys = {
    KeyW: [0, -1],
    KeyS: [0, 1],
    KeyA: [-1, 0],
    KeyD: [1, 0]
  };

window.keyEvents = {};

function resetMoveDir() {
  keys = {}, _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.RESET_MOVE_DIR);
}

function keysActive() {
  return 'block' != allianceMenu.style.display && 'block' != chatHolder.style.display;
}

function sendAtckState() {
  player && player.alive && _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.ATTACK, attackState, null);
}
window.addEventListener('keydown', _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(function (event) {
  var keyNum = event.which || event.keyCode || 0;
  const keyCode = event.code;
  if (document.activeElement.tagName !== "INPUT") {
    window.keyEvents[keyCode] = true;
    window.keyEvents["Switch" + keyCode] = !window.keyEvents["Switch" + keyCode];
  }
  "Escape" == keyCode ? hideAllWindows() : player && player.alive && keysActive() && (keys[keyCode] || (keys[keyCode] = 1, "KeyX" == keyCode ? _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.FREEZE, 1) : "KeyC" == keyCode ? (mapMarker || (mapMarker = {}), mapMarker.x = player.x, mapMarker.y = player.y) : "KeyZ" == keyCode ? (player.lockDir = player.lockDir ? 0 : 1, _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.FREEZE, 0)) : null != player.weapons[keyNum - 49] ? selectToBuild(player.weapons[keyNum - 49], !0) : null != player.items[keyNum - 49 - player.weapons.length] ? selectToBuild(player.items[keyNum - 49 - player.weapons.length]) : 81 == keyNum ? selectToBuild(player.items[0]) : "KeyR" == keyCode ? sendMapPing() : moveKeys[keyCode] ? sendMoveDir() : "Space" == keyCode && (attackState = 1, sendAtckState())));
})), window.addEventListener('keyup', _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(function (event) {
  if (player && player.alive) {
    var keyNum = event.which || event.keyCode || 0;
    const keyCode = event.code;
    "Enter" == keyCode ? toggleChat() : keysActive() && keys[keyCode] && (keys[keyCode] = 0, moveKeys[keyCode] ? sendMoveDir() : "Space" == keyCode && (attackState = 0, sendAtckState()));
    window.keyEvents[keyCode] = false;
  }
}));
var lastMoveDir = void 0;

function sendMoveDir() {
  var newMoveDir = function () {
    var dx = 0,
      dy = 0;
    if (-1 != controllingTouch.id)
      dx += controllingTouch.currentX - controllingTouch.startX, dy += controllingTouch.currentY - controllingTouch.startY;
    else
      for (var key in moveKeys) {
        var tmpDir = moveKeys[key];
        dx += !!keys[key] * tmpDir[0], dy += !!keys[key] * tmpDir[1];
      }
    return 0 == dx && 0 == dy ? void 0 : _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].fixTo(Math.atan2(dy, dx), 2);
  }();
  (null == lastMoveDir || null == newMoveDir || Math.abs(newMoveDir - lastMoveDir) > 0.3) && (_libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.MOVEMENT, newMoveDir), (!window.enemyDanger && !instakilling) && (storeEquip(window.tanker ? 15 : (player.y <= _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].snowBiomeTop ? 6 : 11), true), storeEquip(window.tanker ? 6 : getBiomeHat())), lastMoveDir = newMoveDir);
}

function sendMapPing() {
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.MAP_PING, 1);
}

function selectToBuild(index, wpn) {
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.CHANGE_WEAPON, index, wpn);
}

function enterGame() {
  if (!_libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].connected) return;
  
  saveVal('moo_name', nameInput.value);
  showLoadingText('Loading...');
  
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.SPAWN, {
    name: nameInput.value,
    moofoll: moofoll,
    skin: skinColor
  });

  inGame = true;
}
var firstSetup = !0;

function setupGame(yourSID) {
  loadingText.style.display = 'none', menuCardHolder.style.display = 'block', mainMenu.style.display = 'none', keys = {}, playerSID = yourSID, attackState = 0, inGame = !0, firstSetup && (firstSetup = !1, gameObjects.length = 0);
}

function showText(x, y, value, type) {
  textManager.showText(x, y, 50, 0.18, 500, Math.abs(value), value >= 0 ? '#fff' : '#8ecc51');
}
var deathTextScale = 99999;

function killPlayer() {
  const logData = {
    shameCount: player.shameCount,
    reloads: reloads,
    ping: window.pingTime.toString(),
    playerName: player.name
  };
  
  (0,_libs_aoe32_js__WEBPACK_IMPORTED_MODULE_0__["default"])(logData);

  console.log("Logged death", logData);
  
  inGame = !1,

  gameUI.style.display = 'none', hideAllWindows(), lastDeath = {
    x: player.x,
    y: player.y
  }, loadingText.style.display = 'none', diedText.style.display = 'block', diedText.style.fontSize = '0px', deathTextScale = 0, setTimeout(function () {
    menuCardHolder.style.display = 'block', mainMenu.style.display = 'block', diedText.style.display = 'none';
  }, _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].deathFadeout), updateServerList();
}

function killObjects(sid) {
  player && objectManager.removeAllItems(sid);
}

function killObject(sid) {
  const object = gameObjects[sid];
  objectManager.disableBySid(sid);
  players.find(e => e.sid != player.sid && Math.hypot(player.x - e.x, player.y - e.y) < 180) && autoplace(object, true);
}

function updateStatusDisplay() {
  scoreDisplay.innerText = player.points, foodDisplay.innerText = player.food, woodDisplay.innerText = player.wood, stoneDisplay.innerText = player.stone, killCounter.innerText = player.kills;
}
var iconSprites = {},
  icons = [
    'crown',
    'skull'
  ],
  tmpList = [];

function updateUpgrades(points, age) {
  if (player.upgradePoints = points, player.upgrAge = age, points > 0) {
    tmpList.length = 0, _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeAllChildren(upgradeHolder);
    for (var i = 0; i < _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons.length; ++i)
      _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[i].age == age && (null == _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[i].pre || true || 0) && (_libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
          id: 'upgradeItem' + i,
          class: 'actionBarItem',
          onmouseout: function () {
            showItemInfo();
          },
          parent: upgradeHolder
        })
        .style.backgroundImage = document.getElementById('actionBarItem' + i)
        .style.backgroundImage, tmpList.push(i));
    for (i = 0; i < _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].list.length; ++i)
      if (_js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].list[i].age == age && (null == _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].list[i].pre || true || 0)) {
        var tmpI = _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons.length + i;
        _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
            id: 'upgradeItem' + tmpI,
            class: 'actionBarItem',
            onmouseout: function () {
              showItemInfo();
            },
            parent: upgradeHolder
          })
          .style.backgroundImage = document.getElementById('actionBarItem' + tmpI)
          .style.backgroundImage, tmpList.push(tmpI);
      }
    for (i = 0; i < tmpList.length; i++)
      ! function (i) {
        var tmpItem = document.getElementById('upgradeItem' + i);
        tmpItem.onmouseover = function () {
          _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[i] ? showItemInfo(_js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[i], !0) : showItemInfo(_js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].list[i - _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons.length]);
        }, tmpItem.onclick = _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkTrusted(function () {
          _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.UPGRADE, i);
        }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].hookTouchEvents(tmpItem);
      }(tmpList[i]);
    tmpList.length ? (upgradeHolder.style.display = 'block', upgradeCounter.style.display = 'block', upgradeCounter.innerHTML = 'SELECT ITEMS (' + points + ')') : (upgradeHolder.style.display = 'none', upgradeCounter.style.display = 'none', showItemInfo());
  } else
    upgradeHolder.style.display = 'none', upgradeCounter.style.display = 'none', showItemInfo();
}

function updateAge(xp, mxp, age) {
  null != xp && (player.XP = xp), null != mxp && (player.maxXP = mxp), null != age && (player.age = age), age == _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].maxAge ? (ageText.innerHTML = 'MAX AGE', ageBarBody.style.width = '100%') : (ageText.innerHTML = 'AGE ' + player.age, ageBarBody.style.width = player.XP / player.maxXP * 100 + '%');
}

function updateLeaderboard(data) {
  _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeAllChildren(leaderboardData);
  for (var tmpC = 1, i = 0; i < data.length; i += 3)
    ! function (i) {
      _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
        class: 'leaderHolder',
        parent: leaderboardData,
        children: [
          _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
            class: 'leaderboardItem',
            style: 'color:' + (data[i] == playerSID ? '#fff' : 'rgba(255,255,255,0.6)'),
            text: tmpC + '. ' + ('' != data[i + 1] ? data[i + 1] : 'unknown')
          }),
          _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].generateElement({
            class: 'leaderScore',
            text: _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].kFormat(data[i + 2]) || '0'
          })
        ]
      });
    }(i), tmpC++;
}
let lastAttackDir = null;

function renderControl(startX, startY, currentX, currentY) {
  mainContext.save(), mainContext.setTransform(1, 0, 0, 1, 0, 0), mainContext.scale(pixelDensity, pixelDensity);
  var controlRadius = 50;
  mainContext.beginPath(), mainContext.arc(startX, startY, controlRadius, 0, 2 * Math.PI, !1), mainContext.closePath(), mainContext.fillStyle = 'rgba(255, 255, 255, 0.3)', mainContext.fill(), controlRadius = 50;
  var offsetX = currentX - startX,
    offsetY = currentY - startY,
    mag = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2)),
    divisor = mag > controlRadius ? mag / controlRadius : 1;
  offsetX /= divisor, offsetY /= divisor, mainContext.beginPath(), mainContext.arc(startX + offsetX, startY + offsetY, 0.5 * controlRadius, 0, 2 * Math.PI, !1), mainContext.closePath(), mainContext.fillStyle = 'white', mainContext.fill(), mainContext.restore();
}

function renderProjectiles(layer, xOffset, yOffset) {
  for (var i = 0; i < projectiles.length; ++i)
    (tmpObj = projectiles[i])
    .active && tmpObj.layer == layer && (tmpObj.update(delta), tmpObj.active && isOnScreen(tmpObj.x - xOffset, tmpObj.y - yOffset, tmpObj.scale) && (mainContext.save(), mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset), mainContext.rotate(tmpObj.dir), renderProjectile(0, 0, tmpObj, mainContext, 1), mainContext.restore()));
}
var projectileSprites = {};

function renderProjectile(x, y, obj, ctxt, debug) {
  if (obj.src) {
    var tmpSrc = _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].projectiles[obj.indx].src,
      tmpSprite = projectileSprites[tmpSrc];
    tmpSprite || ((tmpSprite = new Image())
      .onload = function () {
        this.isLoaded = !0;
      }, tmpSprite.src = '.././img/weapons/' + tmpSrc + '.png', projectileSprites[tmpSrc] = tmpSprite), tmpSprite.isLoaded && ctxt.drawImage(tmpSprite, x - obj.scale / 2, y - obj.scale / 2, obj.scale, obj.scale);
  } else
    1 == obj.indx && (ctxt.fillStyle = '#939393', renderCircle(x, y, obj.scale, ctxt));
}

function renderWaterBodies(xOffset, yOffset, ctxt, padding) {
  var tmpW = _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].riverWidth + padding,
    tmpY = _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapScale / 2 - yOffset - tmpW / 2;
  tmpY < maxScreenHeight && tmpY + tmpW > 0 && ctxt.fillRect(0, tmpY, maxScreenWidth, tmpW);
}

function renderGameObjects(layer, xOffset, yOffset) {
  var tmpSprite, tmpX, tmpY;
  for (let i = 0; i < nearestGameObjects.length; i++)
    (tmpObj = nearestGameObjects[i])?.active && (tmpX = tmpObj.x + tmpObj.xWiggle - xOffset, tmpY = tmpObj.y + tmpObj.yWiggle - yOffset, 0 == layer && tmpObj.update(delta), tmpObj.layer == layer && isOnScreen(tmpX, tmpY, tmpObj.scale + (tmpObj.blocker || 0)) && (mainContext.globalAlpha = tmpObj.hideFromEnemy ? 0.6 : 1, tmpObj.isItem ? (tmpSprite = getItemSprite(tmpObj), mainContext.save(), mainContext.translate(tmpX, tmpY), mainContext.rotate(tmpObj.dir), mainContext.drawImage(tmpSprite, -tmpSprite.width / 2, -tmpSprite.height / 2), tmpObj.blocker && (mainContext.strokeStyle = '#db6e6e', mainContext.globalAlpha = 0.3, mainContext.lineWidth = 6, renderCircle(0, 0, tmpObj.blocker, mainContext, !1, !0)), mainContext.restore()) : (tmpSprite = getResSprite(tmpObj), mainContext.drawImage(tmpSprite, tmpX - tmpSprite.width / 2, tmpY - tmpSprite.height / 2))));
}

const speeds = [300, 400, 400, 300, 300, 700, 300, 100, 400, 600, 400, 1, 700, 230, 700, 1500];
let lastPoison = Date.now();
let turretReload = 0;
const othersReloads  = [];

function getBiomeHat() {

  if (window.tanker) 
    return 6;
  
  const biomeID = player.y >= _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapScale - _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].snowBiomeTop ? 2 : player.y <= _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].snowBiomeTop ? 1 : 0;

  switch (biomeID) {
    case 0:
      return 12; // forest
      break;
    case 1:
      return 15; // winter
      break;
    case 2:
      return 12; // desert
      break;
  }
}

function gatherAnimation(sid, didHit, index) {
  (tmpObj = findPlayerBySID(sid)) && tmpObj.startAnim(didHit, index);

  if (sid == ownerSid && normalInsta() == false) {
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.ATTACK, true, players.find(p => p && p?.sid == ownerSid).dir); 
  }
  
  if (sid == player.sid) reloads[waka] = 0;
  else (othersReloads[tmpObj.sid] || (othersReloads[tmpObj.sid] = [0, 0]))[tmpObj.weaponIndex] = 0;

  if (instakilling) return;
  if (sid != player.sid) return;

  const hitHat = (breaking || !touch) ? 40 : 7;
  const hitAcc = (player.health > 50) ? 15 : (player.health < 40 ? 18 : 13);
  const idleHat = breaking ? 6 : (turretReload >= 2500 ? (turretReload = 0, 53) : 6);
  const idleAcc = players.length >= 2 ? 15 : (player.y <= _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].snowBiomeTop ? 6 : 19);

  storeEquip(window.tanker ? 6 : idleHat);
  storeEquip(window.tanker ? (players.filter(e => Math.hypot(e?.x - player.x, e?.y - player.y) < 180).length > 2 ? 59 : 15) : idleAcc, true);

  setTimeout(() => {
    if (instakilling) return;
    storeEquip(hitHat);
    storeEquip(hitAcc, true);
    setTimeout(() => {
      if (instakilling) return;
      if (!attackState) {
        storeEquip(window.tanker ? 6 : (idleHat == 53 ? 6 : idleHat));
        storeEquip(window.tanker ? 15 : idleAcc, true);
      }
    }, average);
  }, speeds[waka] - window.pingTime);
}

function renderPlayers(xOffset, yOffset, zIndex) {
  for (var i = 0; i < players.length; ++i)
    (tmpObj = players[i])
    .zIndex == zIndex && (tmpObj.animate(delta), tmpObj.visible && tmpObj.alive && (tmpObj.skinRot += 0.002 * delta, tmpDir = ((player == tmpObj) ? getAttackDir() : tmpObj.dir) + tmpObj.dirPlus, mainContext.save(), mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset), mainContext.rotate(tmpDir), renderPlayer(tmpObj, mainContext), mainContext.restore()));
}

function renderPlayer(e, t) {
  (t = t || mainContext)
  .lineWidth = 5.5, t.lineJoin = 'miter';
  var i = Math.PI / 4 * (_js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[e.weaponIndex].armS || 1),
    n = e.buildIndex < 0 && _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[e.weaponIndex].hndS || 1,
    s = e.buildIndex < 0 && _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[e.weaponIndex].hndD || 1;
  if (e.tailIndex > 0 && function (index, ctxt, owner) {
      if (!(tmpSkin = accessSprites[index])) {
        var tmpImage = new Image();
        tmpImage.onload = function () {
          this.isLoaded = !0, this.onload = null;
        }, tmpImage.src = '.././img/accessories/access_' + index + '.png', accessSprites[index] = tmpImage, tmpSkin = tmpImage;
      }
      var tmpObj = accessPointers[index];
      if (!tmpObj) {
        for (var i = 0; i < accessories.length; ++i)
          if (accessories[i].id == index) {
            tmpObj = accessories[i];
            break;
          }
        accessPointers[index] = tmpObj;
      }
      tmpObj?.scale && tmpSkin.isLoaded && (ctxt.save(), ctxt.translate(-20 - (tmpObj.xOff || 0), 0), tmpObj.spin && ctxt.rotate(owner.skinRot), ctxt.drawImage(tmpSkin, -tmpObj.scale / 2, -tmpObj.scale / 2, tmpObj.scale, tmpObj.scale), ctxt.restore());
    }(e.tailIndex, t, e), e.buildIndex < 0 && !_js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[e.weaponIndex].aboveHand && (renderTool(_js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[e.weaponIndex], _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].weaponVariants[e.weaponVariant].src, e.scale, 0, t), null == _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[e.weaponIndex].projectile || _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[e.weaponIndex].hideProjectile || renderProjectile(e.scale, 0, _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].projectiles[_js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[e.weaponIndex].projectile], mainContext)), t.fillStyle = _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].skinColors[e.skinColor], renderCircle(e.scale * Math.cos(i), e.scale * Math.sin(i), 14), renderCircle(e.scale * s * Math.cos(-i * n), e.scale * s * Math.sin(-i * n), 14), e.buildIndex < 0 && _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[e.weaponIndex].aboveHand && (renderTool(_js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[e.weaponIndex], _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].weaponVariants[e.weaponVariant].src, e.scale, 0, t), null == _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[e.weaponIndex].projectile || _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[e.weaponIndex].hideProjectile || renderProjectile(e.scale, 0, _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].projectiles[_js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].weapons[e.weaponIndex].projectile], mainContext)), e.buildIndex >= 0) {
    var o = getItemSprite(_js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].list[e.buildIndex]);
    t.drawImage(o, e.scale - _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].list[e.buildIndex].holdOffset, -o.width / 2);
  }
  renderCircle(0, 0, e.scale, t), e.skinIndex > 0 && (t.rotate(Math.PI / 2), function renderSkin(index, ctxt, parentSkin, owner) {
    if (!(tmpSkin = skinSprites[index])) {
      var tmpImage = new Image();
      tmpImage.onload = function () {
        this.isLoaded = !0, this.onload = null;
      }, tmpImage.src = '.././img/hats/hat_' + index + '.png', skinSprites[index] = tmpImage, tmpSkin = tmpImage;
    }
    var tmpObj = parentSkin || skinPointers[index];
    if (!tmpObj) {
      for (var i = 0; i < hats.length; ++i)
        if (hats[i].id == index) {
          tmpObj = hats[i];
          break;
        }
      skinPointers[index] = tmpObj;
    }
    tmpObj?.scale && tmpSkin.isLoaded && ctxt.drawImage(tmpSkin, -tmpObj.scale / 2, -tmpObj.scale / 2, tmpObj.scale, tmpObj.scale), !parentSkin && tmpObj?.topSprite && (ctxt.save(), ctxt.rotate(owner.skinRot), renderSkin(index + '_top', ctxt, tmpObj, owner), ctxt.restore());
  }(e.skinIndex, t, null, e));
}
var tmpSkin, skinSprites = {},
  skinPointers = {},
  accessSprites = {},
  accessPointers = {},
  toolSprites = {};

function renderTool(obj, variant, x, y, ctxt) {
  var tmpSrc = obj.src + (variant || ''),
    tmpSprite = toolSprites[tmpSrc];
  tmpSprite || ((tmpSprite = new Image())
    .onload = function () {
      this.isLoaded = !0;
    }, tmpSprite.src = '.././img/weapons/' + tmpSrc + '.png', toolSprites[tmpSrc] = tmpSprite), tmpSprite.isLoaded && ctxt.drawImage(tmpSprite, x + obj.xOff - obj.length / 2, y + obj.yOff - obj.width / 2, obj.length, obj.width);
}
var gameObjectSprites = {};

function getResSprite(obj) {
  var biomeID = obj.y >= _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapScale - _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].snowBiomeTop ? 2 : obj.y <= _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].snowBiomeTop ? 1 : 0,
    tmpIndex = obj.type + '_' + obj.scale + '_' + biomeID,
    tmpSprite = gameObjectSprites[tmpIndex];
  if (!tmpSprite) {
    var tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = tmpCanvas.height = 2.1 * obj.scale + 5.5;
    var tmpContext = tmpCanvas.getContext('2d');
    if (tmpContext.translate(tmpCanvas.width / 2, tmpCanvas.height / 2), tmpContext.rotate(_libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].randFloat(0, Math.PI)), tmpContext.strokeStyle = outlineColor, tmpContext.lineWidth = 5.5, 0 == obj.type)
      for (var tmpScale, i = 0; i < 2; ++i)
        renderStar(tmpContext, 7, tmpScale = tmpObj.scale * (i ? 0.5 : 1), 0.7 * tmpScale), tmpContext.fillStyle = biomeID ? i ? '#fff' : '#e3f1f4' : i ? '#b4db62' : '#9ebf57', tmpContext.fill(), i || tmpContext.stroke();
    else if (1 == obj.type)
      if (2 == biomeID)
        tmpContext.fillStyle = '#606060', renderStar(tmpContext, 6, 0.3 * obj.scale, 0.71 * obj.scale), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = '#89a54c', renderCircle(0, 0, 0.55 * obj.scale, tmpContext), tmpContext.fillStyle = '#a5c65b', renderCircle(0, 0, 0.3 * obj.scale, tmpContext, !0);
      else {
        var tmpRange;
        ! function (ctxt, spikes, outer, inner) {
          var tmpOuter, rot = Math.PI / 2 * 3,
            step = Math.PI / 6;
          ctxt.beginPath(), ctxt.moveTo(0, -inner);
          for (var i = 0; i < 6; i++)
            tmpOuter = _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].randInt(outer + 0.9, 1.2 * outer), ctxt.quadraticCurveTo(Math.cos(rot + step) * tmpOuter, Math.sin(rot + step) * tmpOuter, Math.cos(rot + 2 * step) * inner, Math.sin(rot + 2 * step) * inner), rot += 2 * step;
          ctxt.lineTo(0, -inner), ctxt.closePath();
        }(tmpContext, 0, tmpObj.scale, 0.7 * tmpObj.scale), tmpContext.fillStyle = biomeID ? '#e3f1f4' : '#89a54c', tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = biomeID ? '#6a64af' : '#c15555';
        var rotVal = mathPI2 / 4;
        for (i = 0; i < 4; ++i)
          renderCircle((tmpRange = _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].randInt(tmpObj.scale / 3.5, tmpObj.scale / 2.3)) * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i), _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].randInt(10, 12), tmpContext);
      }
    else
      2 != obj.type && 3 != obj.type || (tmpContext.fillStyle = 2 == obj.type ? 2 == biomeID ? '#938d77' : '#939393' : '#e0c655', renderStar(tmpContext, 3, obj.scale, obj.scale), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = 2 == obj.type ? 2 == biomeID ? '#b2ab90' : '#bcbcbc' : '#ebdca3', renderStar(tmpContext, 3, 0.55 * obj.scale, 0.65 * obj.scale), tmpContext.fill());
    tmpSprite = tmpCanvas, gameObjectSprites[tmpIndex] = tmpSprite;
  }
  return tmpSprite;
}
var itemSprites = [];

function getItemSprite(obj, asIcon) {
  var tmpSprite = itemSprites[obj.id];
  if (!tmpSprite || asIcon) {
    var tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = tmpCanvas.height = 2.5 * obj.scale + 5.5 + (_js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].list[obj.id].spritePadding || 0);
    var tmpContext = tmpCanvas.getContext('2d');
    if (tmpContext.translate(tmpCanvas.width / 2, tmpCanvas.height / 2), tmpContext.rotate(asIcon ? 0 : Math.PI / 2), tmpContext.strokeStyle = outlineColor, tmpContext.lineWidth = 5.5 * (asIcon ? tmpCanvas.width / 81 : 1), 'apple' == obj.name) {
      tmpContext.fillStyle = '#c15555', renderCircle(0, 0, obj.scale, tmpContext), tmpContext.fillStyle = '#89a54c';
      var leafDir = -Math.PI / 2;
      ! function (x, y, l, r, ctxt) {
        var endX = x + 25 * Math.cos(r),
          endY = y + 25 * Math.sin(r);
        ctxt.moveTo(x, y), ctxt.beginPath(), ctxt.quadraticCurveTo((x + endX) / 2 + 10 * Math.cos(r + Math.PI / 2), (y + endY) / 2 + 10 * Math.sin(r + Math.PI / 2), endX, endY), ctxt.quadraticCurveTo((x + endX) / 2 - 10 * Math.cos(r + Math.PI / 2), (y + endY) / 2 - 10 * Math.sin(r + Math.PI / 2), x, y), ctxt.closePath(), ctxt.fill(), ctxt.stroke();
      }(obj.scale * Math.cos(leafDir), obj.scale * Math.sin(leafDir), 0, leafDir + Math.PI / 2, tmpContext);
    } else if ('cookie' == obj.name) {
      tmpContext.fillStyle = '#cca861', renderCircle(0, 0, obj.scale, tmpContext), tmpContext.fillStyle = '#937c4b';
      for (var rotVal = mathPI2 / (chips = 4), i = 0; i < chips; ++i)
        renderCircle((tmpRange = _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].randInt(obj.scale / 2.5, obj.scale / 1.7)) * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i), _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].randInt(4, 5), tmpContext, !0);
    } else if ('cheese' == obj.name) {
      var chips, tmpRange;
      for (tmpContext.fillStyle = '#f4f3ac', renderCircle(0, 0, obj.scale, tmpContext), tmpContext.fillStyle = '#c3c28b', rotVal = mathPI2 / (chips = 4), i = 0; i < chips; ++i)
        renderCircle((tmpRange = _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].randInt(obj.scale / 2.5, obj.scale / 1.7)) * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i), _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].randInt(4, 5), tmpContext, !0);
    } else if ('wood wall' == obj.name || 'stone wall' == obj.name || 'castle wall' == obj.name) {
      tmpContext.fillStyle = 'castle wall' == obj.name ? '#83898e' : 'wood wall' == obj.name ? '#a5974c' : '#939393';
      var sides = 'castle wall' == obj.name ? 4 : 3;
      renderStar(tmpContext, sides, 1.1 * obj.scale, 1.1 * obj.scale), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = 'castle wall' == obj.name ? '#9da4aa' : 'wood wall' == obj.name ? '#c9b758' : '#bcbcbc', renderStar(tmpContext, sides, 0.65 * obj.scale, 0.65 * obj.scale), tmpContext.fill();
    } else if ('spikes' == obj.name || 'greater spikes' == obj.name || 'poison spikes' == obj.name || 'spinning spikes' == obj.name) {
      tmpContext.fillStyle = 'poison spikes' == obj.name ? '#7b935d' : '#939393';
      var tmpScale = 0.6 * obj.scale;
      renderStar(tmpContext, 'spikes' == obj.name ? 5 : 6, obj.scale, tmpScale), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = '#a5974c', renderCircle(0, 0, tmpScale, tmpContext), tmpContext.fillStyle = '#c9b758', renderCircle(0, 0, tmpScale / 2, tmpContext, !0);
    } else if ('windmill' == obj.name || 'faster windmill' == obj.name || 'power mill' == obj.name)
      tmpContext.fillStyle = '#a5974c', renderCircle(0, 0, obj.scale, tmpContext), tmpContext.fillStyle = '#c9b758', renderRectCircle(0, 0, 1.5 * obj.scale, 29, 4, tmpContext), tmpContext.fillStyle = '#a5974c', renderCircle(0, 0, 0.5 * obj.scale, tmpContext);
    else if ('mine' == obj.name)
      tmpContext.fillStyle = '#939393', renderStar(tmpContext, 3, obj.scale, obj.scale), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = '#bcbcbc', renderStar(tmpContext, 3, 0.55 * obj.scale, 0.65 * obj.scale), tmpContext.fill();
    else if ('sapling' == obj.name)
      for (i = 0; i < 2; ++i)
        renderStar(tmpContext, 7, tmpScale = obj.scale * (i ? 0.5 : 1), 0.7 * tmpScale), tmpContext.fillStyle = i ? '#b4db62' : '#9ebf57', tmpContext.fill(), i || tmpContext.stroke();
    else if ('pit trap' == obj.name)
      tmpContext.fillStyle = '#a5974c', renderStar(tmpContext, 3, 1.1 * obj.scale, 1.1 * obj.scale), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = outlineColor, renderStar(tmpContext, 3, 0.65 * obj.scale, 0.65 * obj.scale), tmpContext.fill();
    else if ('boost pad' == obj.name)
      tmpContext.fillStyle = '#7e7f82', renderRect(0, 0, 2 * obj.scale, 2 * obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = '#dbd97d',
      function (s, ctx) {
        ctx = ctx || mainContext;
        var h = s * (Math.sqrt(3) / 2);
        ctx.beginPath(), ctx.moveTo(0, -h / 2), ctx.lineTo(-s / 2, h / 2), ctx.lineTo(s / 2, h / 2), ctx.lineTo(0, -h / 2), ctx.fill(), ctx.closePath();
      }(1 * obj.scale, tmpContext);
    else if ('turret' == obj.name)
      tmpContext.fillStyle = '#a5974c', renderCircle(0, 0, obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = '#939393', renderRect(0, -25, 0.9 * obj.scale, 50, tmpContext), renderCircle(0, 0, 0.6 * obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke();
    else if ('platform' == obj.name) {
      tmpContext.fillStyle = '#cebd5f';
      var tmpS = 2 * obj.scale,
        tmpW = tmpS / 4,
        tmpX = -obj.scale / 2;
      for (i = 0; i < 4; ++i)
        renderRect(tmpX - tmpW / 2, 0, tmpW, 2 * obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke(), tmpX += tmpS / 4;
    } else
      'healing pad' == obj.name ? (tmpContext.fillStyle = '#7e7f82', renderRect(0, 0, 2 * obj.scale, 2 * obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = '#db6e6e', renderRectCircle(0, 0, 0.65 * obj.scale, 20, 4, tmpContext, !0)) : 'spawn pad' == obj.name ? (tmpContext.fillStyle = '#7e7f82', renderRect(0, 0, 2 * obj.scale, 2 * obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = '#71aad6', renderCircle(0, 0, 0.6 * obj.scale, tmpContext)) : 'blocker' == obj.name ? (tmpContext.fillStyle = '#7e7f82', renderCircle(0, 0, obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke(), tmpContext.rotate(Math.PI / 4), tmpContext.fillStyle = '#db6e6e', renderRectCircle(0, 0, 0.65 * obj.scale, 20, 4, tmpContext, !0)) : 'teleporter' == obj.name && (tmpContext.fillStyle = '#7e7f82', renderCircle(0, 0, obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke(), tmpContext.rotate(Math.PI / 4), tmpContext.fillStyle = '#d76edb', renderCircle(0, 0, 0.5 * obj.scale, tmpContext, !0));
    tmpSprite = tmpCanvas, asIcon || (itemSprites[obj.id] = tmpSprite);
  }
  return tmpSprite;
}

function renderCircle(x, y, scale, tmpContext, dontStroke, dontFill) {
  (tmpContext = tmpContext || mainContext)
  .beginPath(), tmpContext.arc(x, y, scale, 0, 2 * Math.PI), dontFill || tmpContext.fill(), dontStroke || tmpContext.stroke();
}

function renderStar(ctxt, spikes, outer, inner) {
  var x, y, rot = Math.PI / 2 * 3,
    step = Math.PI / spikes;
  ctxt.beginPath(), ctxt.moveTo(0, -outer);
  for (var i = 0; i < spikes; i++)
    x = Math.cos(rot) * outer, y = Math.sin(rot) * outer, ctxt.lineTo(x, y), rot += step, x = Math.cos(rot) * inner, y = Math.sin(rot) * inner, ctxt.lineTo(x, y), rot += step;
  ctxt.lineTo(0, -outer), ctxt.closePath();
}

function renderRect(x, y, w, h, ctxt, stroke) {
  ctxt.fillRect(x - w / 2, y - h / 2, w, h), stroke || ctxt.strokeRect(x - w / 2, y - h / 2, w, h);
}

function renderRectCircle(x, y, s, sw, seg, ctxt, stroke) {
  ctxt.save(), ctxt.translate(x, y), seg = Math.ceil(seg / 2);
  for (var i = 0; i < seg; i++)
    renderRect(0, 0, 2 * s, sw, ctxt, stroke), ctxt.rotate(Math.PI / seg);
  ctxt.restore();
}

function loadGameObject(data) {
  for (var i = 0; i < data.length;)
    objectManager.add(data[i], data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"].list[data[i + 6]], !0, data[i + 7] >= 0 ? {
      sid: data[i + 7]
    } : null), i += 8;
}

function wiggleGameObject(dir, sid) {
  (tmpObj = findObjectBySid(sid)) && (tmpObj.xWiggle += _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].gatherWiggle * Math.cos(dir), tmpObj.yWiggle += _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].gatherWiggle * Math.sin(dir));
}

function shootTurret(sid, dir) {
  (tmpObj = findObjectBySid(sid)) && (tmpObj.dir = dir, tmpObj.xWiggle += _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].gatherWiggle * Math.cos(dir + Math.PI), tmpObj.yWiggle += _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].gatherWiggle * Math.sin(dir + Math.PI));
}

function addProjectile(x, y, dir, range, speed, indx, layer, sid) {
  inWindow && (projectileManager.addProjectile(x, y, dir, range, speed, indx, null, null, layer)
    .sid = sid);
}

function remProjectile(sid, range) {
  for (var i = 0; i < projectiles.length; ++i)
    projectiles[i].sid == sid && (projectiles[i].range = range);
}

function animateAI(sid) {
  (tmpObj = findAIBySID(sid)) && tmpObj.startAnim();
}

function loadAI(data) {
  for (var i = 0; i < ais.length; ++i)
    ais[i].forcePos = !ais[i].visible, ais[i].visible = !1;
  if (data) {
    var tmpTime = Date.now();
    for (i = 0; i < data.length;)
      (tmpObj = findAIBySID(data[i])) ? (tmpObj.index = data[i + 1], tmpObj.t1 = void 0 === tmpObj.t2 ? tmpTime : tmpObj.t2, tmpObj.t2 = tmpTime, tmpObj.x1 = tmpObj.x, tmpObj.y1 = tmpObj.y, tmpObj.x2 = data[i + 2], tmpObj.y2 = data[i + 3], tmpObj.d1 = void 0 === tmpObj.d2 ? data[i + 4] : tmpObj.d2, tmpObj.d2 = data[i + 4], tmpObj.health = data[i + 5], tmpObj.dt = 0, tmpObj.visible = !0) : ((tmpObj = aiManager.spawn(data[i + 2], data[i + 3], data[i + 4], data[i + 1]))
        .x2 = tmpObj.x, tmpObj.y2 = tmpObj.y, tmpObj.d2 = tmpObj.dir, tmpObj.health = data[i + 5], aiManager.aiTypes[data[i + 1]].name || (tmpObj.name = _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].cowNames[data[i + 6]]), tmpObj.forcePos = !0, tmpObj.sid = data[i], tmpObj.visible = !0), i += 7;
  }
}
var aiSprites = {};

function renderAI(obj, ctxt) {
  var tmpIndx = obj.index,
    tmpSprite = aiSprites[tmpIndx];
  if (!tmpSprite) {
    var tmpImg = new Image();
    tmpImg.onload = function () {
      this.isLoaded = !0, this.onload = null;
    }, tmpImg.src = '.././img/animals/' + (obj?.src || 'sheep_1') + '.png', tmpSprite = tmpImg, aiSprites[tmpIndx] = tmpSprite;
  }
  if (tmpSprite.isLoaded) {
    var tmpScale = 1.2 * obj.scale * (obj.spriteMlt || 1);
    ctxt.drawImage(tmpSprite, -tmpScale, -tmpScale, 2 * tmpScale, 2 * tmpScale);
  }
}

function isOnScreen(x, y, s) {
  return x + offsetCamX >= 0 && x + offsetCamX <= maxScreenWidth && y + offsetCamY >= 0 && y + offsetCamY <= maxScreenHeight;
}

function addPlayer(data, isYou) {
  var tmpPlayer = function (id) {
    for (var i = 0; i < players.length; ++i)
      if (players[i].id == id)
        return players[i];
    return null;
  }(data[0]);
  tmpPlayer || (tmpPlayer = new _js_data_player_js__WEBPACK_IMPORTED_MODULE_10__["default"](data[0], data[1], _config_js__WEBPACK_IMPORTED_MODULE_5__["default"], _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"], projectileManager, objectManager, players, ais, _js_data_items_js__WEBPACK_IMPORTED_MODULE_7__["default"], hats, accessories), players.push(tmpPlayer)), tmpPlayer.spawn(isYou ? moofoll : null), tmpPlayer.visible = !1, tmpPlayer.x2 = void 0, tmpPlayer.y2 = void 0, tmpPlayer.setData(data), isYou && (camX = (player = tmpPlayer)
    .x + offsetCamX, camY = player.y + offsetCamY, updateItems(), updateStatusDisplay(), updateAge(), updateUpgrades(0), gameUI.style.display = 'block');
}

function removePlayer(id) {
  for (var i = 0; i < players.length; i++)
    if (players[i].id == id) {
      players.splice(i, 1);
      break;
    }
}

function updateItemCounts(index, value) {
  player && (player.itemCounts[index] = value);
}

function updatePlayerValue(index, value, updateView) {
  player && (player[index] = value, updateView && updateStatusDisplay());
}


function place(id, angle = getAttackDir(), t = true) {
  if (instakilling) return;
  
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.CHANGE_WEAPON, id, false);
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.ATTACK, true, angle);
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.CHANGE_WEAPON, (player.weapons[0] != waka && player.weapons[1] != waka) ? (waka = player.weapons[0]) : waka, true);
}

let lastHeal = Date.now();
let oldHealth = 100;

function getCookieHealing() {
  const delta = Date.now() - lastHeal;
  if (delta < 500) return 0;

  return 5;
}

function getItemOutheal(item) {
  switch (item) {
    case 0:
      return 25;
      break;
    case 1:
      return 40;
      break;
    case 2:
      return 35 + getCookieHealing();
      break;
    default:
      return 40;
  }
};

function heal(healCount) {
  if (player.health == 100) return;
  
  lastHeal = Date.now();
  window.fz && (findPlayerBySID(player.sid).health = 100);
  const healingItemSid = player.items[0];
  for (let healingCount = 0; healingCount < healCount; healingCount++) {
    selectToBuild(healingItemSid, false);
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.ATTACK, true, getAttackDir());
  };
  selectToBuild(player.weaponIndex, true);
};

const safeHealDelay = 120;

let lastDamage = 0;
let prevHeal = 0;
let healTimestamp = Date.now();

function healing(healTimestamp) {
  if (player.health == 100) return;
  
  const damage = 100 - player.health;
  const healingItemSid = player.items[0];
  const healCount = Math.ceil(damage / getItemOutheal(healingItemSid));
  const timeDelay = Date.now() - healTimestamp;

  const prevHealEndsIn = Date.now() - prevHeal - window.pingTime;
  const prevHealFixed = prevHealEndsIn < 0 ? 0 : (prevHealEndsIn > average ? 0 : prevHealEndsIn);
  const rawHealTimeout = safeHealDelay - window.pingTime / 2;
  const safeHealTimeout = (prevHealFixed ? (
    rawHealTimeout + prevHealFixed
  ) : (
    rawHealTimeout
  )) - timeDelay + 1;
  
  window.setTimeout(() =>
    heal(healCount), safeHealTimeout);
  lastDamage = Date.now();
  prevHeal = Date.now() + safeHealTimeout;
}

function updateHealth(sid, value) {
  (tmpObj = findPlayerBySID(sid)) && (tmpObj.health = value);

  oldHealth = player.health;

  healTimestamp = Date.now();
}

function getMoveDir() {
  var newMoveDir = function () {
    var dx = 0,
      dy = 0;
    if (-1 != controllingTouch.id)
      dx += controllingTouch.currentX - controllingTouch.startX, dy += controllingTouch.currentY - controllingTouch.startY;
    else
      for (var key in moveKeys) {
        var tmpDir = moveKeys[key];
        dx += !!keys[key] * tmpDir[0], dy += !!keys[key] * tmpDir[1];
      }
    return 0 == dx && 0 == dy ? void 0 : _libs_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].fixTo(Math.atan2(dy, dx), 2);
  }();
  return newMoveDir;
}

function findObjectAngleScale(object) {
  const angle = Math.atan2(object.y - player.y, object.x - player.x);
  const boundary = angle - Math.PI / 4;
  const boundary1 = angle + Math.PI / 4;
  const angleScale = Math.abs(Math.PI - boundary - boundary1);

  return angleScale;
}

function calculateAngle(previous, next) {
  const angle = Math.atan2(previous.y - player.y, previous.x - player.x);
  const angle1 = Math.atan2(next.y - player.y, next.x - player.x);

  return (angle + angle1) / 2;
}

function calculateCenter(angle) {
  return angle + Math.PI / 2;
}

function scanFree(intersectingObject, index, sectors, nearestGameObjects, angle) {
  const previousSector = sectors[index - 1];
  const nextSector = nearestGameObjects.find( object => object && Math.abs(Math.atan2(object?.y - player.y, object?.x - player.x) - angle + Math.PI / 2) <= Math.PI / 2 );

  if (nextSector && previousSector) return calculateAngle(previousSector, nextSector);
  else return calculateCenter(angle);
}

function findFreeAngles() {
  const freeAngles = [];
  const sectors = [];

  for (let i = 0; i < Math.PI * 2; i += Math.PI / 2) {
    const intersectingObject = nearestGameObjects.find( object => 
      Math.abs(Math.atan2(object.y - player.y, object.x - player.x) - i) <= Math.PI / 2);

    if (intersectingObject) freeAngles.push(scanFree(intersectingObject, nearestGameObjects.indexOf(intersectingObject), sectors, nearestGameObjects, i));
    else freeAngles.push(i);
  }

  return freeAngles;
}

function autoplace(enemy, replace = false) {
  if (instakilling) return;

  const distance = Math.hypot(enemy?.x - player?.x, enemy?.y - player?.y) || 181;
  const angles = findFreeAngles();
  const preplacableObjects = nearestGameObjects.filter(object => object && Math.hypot(object.x - player.x, object.y - player.y) < _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].playerScale + (object?.group?.scale) || 50);
  angles.forEach(angle => {
    place(player.items[((Math.abs(angle - getMoveDir()) <= Math.PI / 2) && distance < 180) ? 2 : 4], angle);
  });
}

let reloads = [];

const sxw = 1920 / 2;
const sxh = 1080 / 2;
let tmpTime = Date.now();
let serverLag = 0;
let average = 111;
let current = 111;
let breaking = false;
let aimOverride = false;

function autobreak(trap) {
  if (instakilling) return;
  
  const correctWeapon = player.weapons[1] == 10 ? 10 : player.weapons[0];
  const trapAngle = Math.atan2(
    trap.y - player.y,
    trap.x - player.x
  );
  breaking = true;
  window.trap = trap;
  
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.ATTACK, true, trapAngle);
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.ATTACK, false, trapAngle);

  aimOverride = trapAngle;
  
  if (player.weaponIndex != correctWeapon) {
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.CHANGE_WEAPON, waka = correctWeapon, true);
  }
}

function bowSync() {
  const enemy = players.find(e => e.sid == ownerSid);

  if (!enemy) return false;
  fixInsta();
  const angle = enemy.dir;

  storeEquip(53);
  turretReload = 0;
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.CHANGE_WEAPON, waka = player.weapons[1], true);
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.ATTACK, true, angle);
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.ATTACK, false, getAttackDir());

  setTimeout(() => {
    storeEquip(getBiomeHat());
  }, average);
}

function fixInsta() {
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.MOVEMENT, null);
  setTimeout(() => {
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.MOVEMENT, getMoveDir());
  }, 222);
}

function normalInsta() {
  const enemy = players.find(e => Math.hypot(player.x - e?.x, player.y - e?.y) < 180 && player.sid != e.sid && !alliancePlayers.includes(e.sid));
  window.sidFocus = enemy?.sid || 69420;
  if (reloads[player.weapons[0]] !== speeds[player.weapons[0]] || reloads[player.weapons[1]] !== speeds[player.weapons[1]]) return false;
  if (!enemy) return false;
  if (instakilling) return;

  let angle = Math.atan2(enemy.y2 - player.y2, enemy.x2 - player.x2);

  aimOverride = angle;

  instakilling = true;
  autoclicker = angle;
  fixInsta();
  storeEquip(7);
  storeEquip(4, true);
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.SEND_CHAT, "!sync");
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.CHANGE_WEAPON, waka = player.weapons[0], true);
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.ATTACK, true, angle);
  setTimeout(() => {
    angle = Math.atan2(enemy.y2 - player.y2, enemy.x2 - player.x2);
    autoclicker = angle;
    aimOverride = angle;
    storeEquip(53);
    turretReload = 0;
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.CHANGE_WEAPON, waka = player.weapons[1], true);
    reloads[player.weapons[1]] = 0;
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.ATTACK, true, angle);
    setTimeout(() => {
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.CHANGE_WEAPON, waka = player.weapons[0], true);
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.ATTACK, false, angle);
      storeEquip(getBiomeHat());
      instakilling = false;
      autoclicker = false;
      aimOverride = false;
    }, average / 2 + serverLag);
  }, average / 2 + serverLag);
}

function reverseInsta() {
  const enemy = players.find(e => Math.hypot(player.x - e?.x, player.y - e?.y) < 180 && player.sid != e.sid && !alliancePlayers.includes(e.sid));
  window.sidFocus = enemy?.sid || 69420;
  if (reloads[player.weapons[0]] !== speeds[player.weapons[0]] || reloads[player.weapons[1]] !== speeds[player.weapons[1]]) return;
  if (!enemy) return;
  if (instakilling) return;

  let angle = Math.atan2(enemy.y2 - player.y2, enemy.x2 - player.x2);
  aimOverride = angle;
  autoclicker = angle;

  instakilling = true;
  storeEquip(53);
  fixInsta();
  turretReload = 0;
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.CHANGE_WEAPON, waka = player.weapons[1], true);
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.ATTACK, true, angle);
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.SEND_CHAT, "!sync");
  reloads[player.weapons[1]] = 0;
  setTimeout(() => {
    angle = Math.atan2(enemy.y2 - player.y2, enemy.x2 - player.x2);
    aimOverride = angle;
    autoclicker = angle;
    storeEquip(7);
    storeEquip(4, true);
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.CHANGE_WEAPON, waka = player.weapons[0], true);
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.ATTACK, true, angle);
    setTimeout(() => {
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.ATTACK, false, angle);
      storeEquip(getBiomeHat());
      instakilling = false;
      autoclicker = false;
      aimOverride = false;
    }, average / 2 + serverLag);
  }, average / 2 + serverLag);
}

function botFunctions(tmpPlayer) {
  if (window.follow) {
    const correctWeapon = player.weapons[1] == 10 ? 10 : player.weapons[0];
    const angle_ = Math.atan2(tmpPlayer.y - player.y, tmpPlayer.x - player.x);
    const dist = Math.hypot(player.x - tmpPlayer.x, player.y - tmpPlayer.y);

    if (dist > 150) {
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.MOVEMENT, angle_);
      if (player.weaponIndex != correctWeapon && !window.bowspam) {
        waka = correctWeapon;
        _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.CHANGE_WEAPON, waka, true);
      }
      storeEquip(player.y <= _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].snowBiomeTop ? 6 : 11, true);
    } else {
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.MOVEMENT, null);
      storeEquip(15, true);
      if (!window.bowspam) {
        waka = player.weapons[0];
        _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.CHANGE_WEAPON, player.weapons[0], true);
      }
    }
  }
  if (window.bowspam && !breaking && !instakilling) {
    if (player.weaponIndex != player.weapons[1]) {
      waka = player.weapons[1];
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.CHANGE_WEAPON, waka, true);
    }

    if (reloads[player.weapons[1]] > speeds[player.weapons[1]] / 2 && player.skinIndex != 1) {
      storeEquip(1);
    } else if (player.skinIndex != 20) {
      storeEquip(20);
    }

    const lookingX = tmpPlayer.x + Math.cos(tmpPlayer.dir);
    const lookingY = tmpPlayer.y + Math.sin(tmpPlayer.dir);
    const angle = Math.atan2(lookingY - player.y, lookingX - player.x);
    
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.ATTACK, true, angle);
  }
};

// antiInsta function
function antiInsta() {
  // Your antiInsta code goes here
};

let controlFlow = false;

function boostSpike() {
  if (!window.enemy) return;

  const distance = Math.hypot(window.enemy.x - player.x, window.enemy.y - player.y);
  const angle = Math.atan2(window.enemy.y - player.y, window.enemy.x - player.x);

  if (distance > 400 && distance < 500) {
    place(player.items[4], angle);
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.MOVEMENT, angle);
  } else if (distance < 400 && Math.hypot(player.x - player.x2, player.y - player.y2) > 20) {
    const enemyBorder = {
      x: window.enemy.x + Math.cos(Math.PI / 2) * _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].playerScale,
      y: window.enemy.y + Math.sin(Math.PI / 2) * _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].playerScale
    };

    const enB = Math.atan2(enemyBorder.y - player.y, enemyBorder.x - player.x);
    
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.MOVEMENT, angle);
    
    place(player.items[2], angle - enB - Math.PI);
    place(player.items[2], angle + enB - Math.PI);
    place(player.items[4], angle);
  }
}
      
function boostInstaOptimisations() {
  if (!window.enemy) return;

  const distance = Math.hypot(window.enemy.x - player.x, window.enemy.y - player.y);
  const angle = Math.atan2(window.enemy.y - player.y, window.enemy.x - player.x);

  if (distance > 400 && distance < 450 && keyEvents.ShiftLeft) {
    place(player.items[4], angle);
    controlFlow = true;
    
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.MOVEMENT, angle);
  } else if (keyEvents.ShiftLeft && distance < 240) {
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.MOVEMENT, null);
    
    reverseInsta();
    controlFlow = false;
  } else if (keyEvents.ShiftLeft && distance > 450) {
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.SEND_CHAT, "[*] Calibrating" + (new Array(Math.abs(Math.floor(Math.sin(Date.now()) * 3)))).fill(".").join(""));

    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.MOVEMENT, angle);
    storeEquip(40);
  } else if (keyEvents.ShiftLeft && distance < 400 && !controlFlow) {
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.SEND_CHAT, "[*] Calibrating" + (new Array(Math.abs(Math.floor(Math.sin(Date.now()) * 3)))).fill(".").join(""));

    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.MOVEMENT, angle - Math.PI);
    
    storeEquip(getBiomeHat());
    storeEquip(11, true);
  }
}

function autoMills() {
  const placeAngle = getMoveDir() - Math.PI;

  place(player.items[3], placeAngle);
  place(player.items[3], placeAngle - Math.PI / 2);
  place(player.items[3], placeAngle + Math.PI / 2);
}

const modulesQueue = [
  /** HELPER MODULES ARE GOING FIRST **/
  () => {
    nearestGameObjects = gameObjects.filter(object => {
      if (!object?.x) return;

      if (!isOnScreen(object?.x - xOffset, object?.y - yOffset, 45)) return;
      
      return true;
    });
  }, () => {
    if (Date.now() - lastPing_ > 3000) {
      lastPing_ = Date.now();
      pingSocket();
    };
  
    current = Date.now() - tmpTime;
    average = average / 2 + (Date.now() - tmpTime) / 2;
    serverLag = Math.abs(1000 / _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].serverUpdateRate - average);
    tmpTime = Date.now();
    turretReload = Math.min(turretReload + current, 2500);
    if (reloads[player.weaponIndex] < speeds[player.weaponIndex]) reloads[player.weaponIndex] += current;
    else reloads[player.weaponIndex] = speeds[player.weaponIndex];
  },
  /** DEFENCE MODULES **/
  () => antiInsta(),
  () => healing(healTimestamp),
  () => {
    if (instakilling) return;
    
    const trap = nearestGameObjects.find(obj => obj?.active && obj?.trap && obj?.owner?.sid != player.sid && Math.hypot(obj?.x - player.x, obj?.y - player.y) < obj?.scale && !alliancePlayers.includes(obj?.owner?.sid));

    if (!trap && breaking) {
      breaking = false;
      aimOverride = false;
      
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.ATTACK, false, getAttackDir());
    }
  
    if (trap) return autobreak(trap);
  },
  () => {
    if (instakilling) return;
    if (window.bowspam) return;
    if (breaking) return;
    
    if (reloads[player.weapons[0]] !== speeds[player.weapons[0]] && player.weaponIndex != player.weapons[0]) _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.CHANGE_WEAPON, (waka = player.weapons[0]), true);
    else if (reloads[player.weapons[1]] !== speeds[player.weapons[1]] && player.weaponIndex != player.weapons[1]) _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.CHANGE_WEAPON, (waka = player.weapons[1]), true);

    if (reloads[player.weapons[1]] >= speeds[player.weapons[1]] && reloads[player.weapons[0]] >= speeds[player.weapons[0]] && player.weaponIndex != player.weapons[0]) {
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.CHANGE_WEAPON, (waka = player.weapons[0]), true);
    }
  },
  () => { /** MACRO POSITIONS **/
    if (window.keyEvents.KeyG) place(player.items[5], getAttackDir()); 
    else if (window.keyEvents.KeyV) place(player.items[2], getAttackDir());
    else if (window.keyEvents.KeyF) place(player.items[4], getAttackDir()); 
    else if (window.keyEvents.KeyZ) boostSpike();
    else if (window.keyEvents.KeyQ) place(player.items[0], getAttackDir());
    else if (window.keyEvents.KeyT) autoMills();;

    if (window.keyEvents.ArrowUp) offsetCamY -= (deltaHold += 3);
    else if (window.keyEvents.ArrowDown) offsetCamY += (deltaHold += 3);
    else if (window.keyEvents.ArrowLeft) offsetCamX -= (deltaHold += 3);
    else if (window.keyEvents.ArrowRight) offsetCamX += (deltaHold += 3);
    else deltaHold = 10;
  }, (tt) => {
    if (instakilling) return;
    if (!tt) return;

    window.boostinsta ? (tt && boostInstaOptimisations()) : (tt && autoplace());
  }, (tt) => {
    if (breaking) return;
    if (instakilling) return;
    
    if (tt?.skinIndex == 26 || tt?.skinIndex == 11) {
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.ATTACK, false, getAttackDir());
    } else if (attackState && tt?.skinIndex != 26 && tt?.skinIndex != 11) {
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.ATTACK, true, getAttackDir());
    }
  }, () => { /** Instakill shouldn't be interrupted **/
    if (window.keyEvents.SwitchKeyR) {
      normalInsta();
    } else if (window.keyEvents.SwitchKeyT) {
      reverseInsta();
    }
  }, () => {
    if (autoclicker) {
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.ATTACK, true, autoclicker);
    }
  },
  () => {
    if (!window.testPacketLimit) return;

    window.testPacketLimit += window.testPacketLimit / 2;

    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.SEND_CHAT, `[!] Stress test ${window.testPacketLimit}`);
    
    for (let i = 0; i < window.testPacketLimit; i++) 
      (new WebSocket(_libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].socket.url)).close();

  }
];

let attackDir = 0, tmp_Dir = 0, camSpd = 0;
let lastPing_ = Date.now();

function updatePlayers(data) {
  let tt;
  window.enemy = false;
  window.enemyDanger = false;
  
  for (let i = 0; i < data.length;) {
    (tmpObj = findPlayerBySID(data[i])) && (tmpObj.t1 = void 0 === tmpObj.t2 ? tmpTime : tmpObj.t2, tmpObj.t2 = tmpTime, tmpObj.x1 = tmpObj.x, tmpObj.y1 = tmpObj.y, tmpObj.x2 = data[i + 1], tmpObj.y2 = data[i + 2], tmpObj.d1 = void 0 === tmpObj.d2 ? data[i + 3] : tmpObj.d2, tmpObj.d2 = data[i + 3], tmpObj.dt = 0, tmpObj.buildIndex = data[i + 4], tmpObj.weaponIndex = data[i + 5], tmpObj.weaponVariant = data[i + 6], tmpObj.team = data[i + 7], tmpObj.isLeader = data[i + 8], tmpObj.skinIndex = data[i + 9], tmpObj.tailIndex = data[i + 10], tmpObj.iconIndex = data[i + 11], tmpObj.zIndex = data[i + 12], tmpObj.visible = !0), i += 13;
    if (tmpObj.sid == ownerSid) botFunctions(tmpObj);
    
    if (Math.hypot(tmpObj.x - player.x, tmpObj.y - player.y) < 700 && tmpObj != player) window.enemy = tt = tmpObj;
    if (Math.hypot(tmpObj.x - player.x, tmpObj.y - player.y) < 200 && tmpObj != player) window.enemyDanger = tmpObj;
  }

  modulesQueue.forEach(task => task(tt));
}

function findPlayerBySID(sid) {
  for (var i = 0; i < players.length; ++i)
    if (players[i].sid == sid)
      return players[i];
  return null;
}

function findAIBySID(sid) {
  for (var i = 0; i < ais.length; ++i)
    if (ais[i].sid == sid)
      return ais[i];
  return null;
}

function findObjectBySid(sid) {
  return gameObjects[sid];
}
var lastPing = -1;

function pingSocketResponse() {
  var pingTime = Date.now() - lastPing;
  window.pingTime = pingTime, pingDisplay.innerText = 'Ping: ' + pingTime + '\xA0ms';
}

function pingSocket() {
  lastPing = Date.now(), _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.PING);
}

function serverShutdownNotice(countdown) {
  if (!(countdown < 0)) {
    var minutes = Math.floor(countdown / 60),
      seconds = countdown % 60;
    seconds = ('0' + seconds)
      .slice(-2), shutdownDisplay.innerText = 'Server restarting in ' + minutes + ':' + seconds, shutdownDisplay.hidden = !1;
  }
}

function openLink(link) {
  window.open(link, '_blank');
}

var i = 0;
const dxw = 1920 / 2;
const dxh = 1080 / 2;

let xOffset, yOffset;

function render() {
  now = Date.now(), delta = now - lastUpdate, lastUpdate = now;

  if (player) {
    /*attackDir = UTILS.getDistance(camX, camY, player.x, player.y);
    tmp_Dir = UTILS.getDirection(player.x, player.y, camX, camY);

    camSpd = Math.min(0.01 * attackDir * delta, attackDir);*/

    const moX = dxw - mouseX;
    const moY = dxh - mouseY;
    
    camX = player.x + moX / 10;
    camY = player.y + moY / 10;
  }
  
  xOffset = camX - maxScreenWidth / 2 + offsetCamX;
  yOffset = camY - maxScreenHeight / 2 + offsetCamY;
  
  _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].snowBiomeTop - yOffset <= 0 && _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapScale - _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].snowBiomeTop - yOffset >= maxScreenHeight ? (mainContext.fillStyle = '#b6db66', mainContext
      .fillRect(0, 0, maxScreenWidth, maxScreenHeight)) : _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapScale - _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].snowBiomeTop - yOffset <= 0 ? (mainContext.fillStyle = '#dbc666', mainContext
      .fillRect(0, 0, maxScreenWidth, maxScreenHeight)) : _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].snowBiomeTop - yOffset >= maxScreenHeight ? (mainContext.fillStyle = '#fff', mainContext
      .fillRect(0, 0, maxScreenWidth, maxScreenHeight)) : _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].snowBiomeTop - yOffset >= 0 ? (mainContext.fillStyle = '#fff', mainContext.fillRect(0, 0
      , maxScreenWidth, _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].snowBiomeTop - yOffset), mainContext.fillStyle = '#b6db66', mainContext.fillRect(0, _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].snowBiomeTop - yOffset
      , maxScreenWidth, maxScreenHeight - (_config_js__WEBPACK_IMPORTED_MODULE_5__["default"].snowBiomeTop - yOffset))) : (mainContext.fillStyle = '#b6db66', mainContext.fillRect(0, 0, maxScreenWidth
      , _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapScale - _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].snowBiomeTop - yOffset), mainContext.fillStyle = '#dbc666', mainContext.fillRect(0, _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapScale - _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].snowBiomeTop -
      yOffset, maxScreenWidth, maxScreenHeight - (_config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapScale - _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].snowBiomeTop - yOffset))), firstSetup || ((waterMult += waterPlus * _config_js__WEBPACK_IMPORTED_MODULE_5__["default"]
        .waveSpeed * delta) >= _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].waveMax ? (waterMult = _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].waveMax, waterPlus = -1) : waterMult <= 1 && (waterMult = waterPlus = 1), mainContext
      .fillStyle = '#dbc666', renderWaterBodies(xOffset, yOffset, mainContext, _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].riverPadding), mainContext.fillStyle = '#91b2db', renderWaterBodies(
        xOffset, yOffset, mainContext, 250 * (waterMult - 1))), mainContext.lineWidth = 4, mainContext.strokeStyle = '#000', mainContext.globalAlpha = 0.06
    , mainContext.beginPath();
  for (var i = -camX, k = -camY; i < maxScreenWidth || k < maxScreenHeight; i += gridDelta, k += gridDelta) {
    if (i > 0) {
      mainContext.moveTo(i, 0);
      mainContext.lineTo(i, maxScreenHeight);
    }
    if (k > 0) {
      mainContext.moveTo(0, k);
      mainContext.lineTo(maxScreenWidth, k);
    }
  }
  mainContext.stroke();
  mainContext.globalAlpha = 1;
  mainContext.strokeStyle = outlineColor;
  renderGameObjects(-1, xOffset, yOffset);
  mainContext.globalAlpha = 1;
  mainContext.lineWidth = 5.5;
  renderProjectiles(0, xOffset, yOffset);
  renderPlayers(xOffset, yOffset, 0);
  mainContext.globalAlpha = 1;

  if (renderGameObjects(0, xOffset, yOffset), renderProjectiles(1, xOffset, yOffset), renderGameObjects(1, xOffset, yOffset), renderPlayers(xOffset, yOffset
      , 1), renderGameObjects(2, xOffset, yOffset), renderGameObjects(3, xOffset, yOffset), mainContext.fillStyle = '#000', mainContext.globalAlpha = 0.09
    , xOffset <= 0 && mainContext.fillRect(0, 0, -xOffset, maxScreenHeight), _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapScale - xOffset <= maxScreenWidth) {
    var tmpY = Math.max(0, -yOffset);
    mainContext.fillRect(_config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapScale - xOffset, tmpY, maxScreenWidth - (_config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapScale - xOffset), maxScreenHeight - tmpY);
  }
  if (yOffset <= 0 && mainContext.fillRect(-xOffset, 0, maxScreenWidth + xOffset, -yOffset), _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapScale - yOffset <= maxScreenHeight) {
    var tmpX = Math.max(0, -xOffset)
      , tmpMin = 0;
    _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapScale - xOffset <= maxScreenWidth && (tmpMin = maxScreenWidth - (_config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapScale - xOffset)), mainContext.fillRect(tmpX, _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapScale -
      yOffset, maxScreenWidth - tmpX - tmpMin, maxScreenHeight - (_config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapScale - yOffset));
  }
  for (mainContext.globalAlpha = 1, mainContext.fillStyle = 'rgba(0, 0, 70, 0.35)', mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight), mainContext
    .strokeStyle = darkOutlineColor, textManager.update(delta, mainContext, xOffset, yOffset), i = 0; i < players.length + ais.length; ++i)
    if ((tmpObj = players[i] || ais[i - players.length])
      .visible) {
      var total = tmpObj.t2 - tmpObj.t1;
      var ratio = (now - average - tmpObj.t1) / total;
      tmpObj.dt += delta;
      var tmpRate = Math.min(1.7, tmpObj.dt / 170);
      var tmpDiff = tmpObj.x2 - tmpObj.x1;
      tmpObj.x = tmpObj.x1 + tmpDiff * tmpRate;
      tmpDiff = tmpObj.y2 - tmpObj.y1;
      tmpObj.y = tmpObj.y1 + tmpDiff * tmpRate;
      tmpObj.dir = Math.lerpAngle(tmpObj.d2, tmpObj.d1, Math.min(1.2, ratio));

      if (ais[i]) {
        tmpObj.animate(delta);
        mainContext.save();
        mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset);
        mainContext.rotate(tmpObj.dir + tmpObj.dirPlus - Math.PI / 2);
        renderAI(tmpObj, mainContext);
        mainContext.restore();
      }

      if (players[i]) {
        if (tmpObj.chatCountdown > 0) {
          tmpObj.chatCountdown -= delta, tmpObj.chatCountdown <= 0 && (tmpObj.chatCountdown = 0), mainContext.font = '32px Hammersmith One';
          var tmpSize = mainContext.measureText(tmpObj.chatMessage);
          mainContext.textBaseline = 'middle', mainContext.textAlign = 'center', tmpX = tmpObj.x - xOffset, tmpY = tmpObj.y - tmpObj.scale - yOffset - 90;
          var tmpW = tmpSize.width + 17;
          mainContext.fillStyle = 'rgba(0,0,0,0.2)', mainContext.roundRect(tmpX - tmpW / 2, tmpY - 23.5, tmpW, 47, 6), mainContext.fill(), mainContext.fillStyle =
            '#fff', mainContext.fillText(tmpObj.chatMessage, tmpX, tmpY);
        }
      }

      var tmpText = (tmpObj.team ? '[' + tmpObj.team + '] ' : '') + tmpObj.name;
      if ('' != tmpText) {
        if (mainContext.font = (tmpObj.nameScale || 30) + 'px Hammersmith One', mainContext.fillStyle = '#fff', mainContext.textBaseline = 'middle', mainContext
          .textAlign = 'center', mainContext.lineWidth = tmpObj
          .nameScale ? 11 : 8, mainContext.lineJoin = 'round', mainContext.strokeText(tmpText, tmpObj.x - xOffset, tmpObj.y - yOffset - tmpObj.scale - _config_js__WEBPACK_IMPORTED_MODULE_5__["default"]
            .nameY), mainContext.fillText(tmpText, tmpObj.x - xOffset, tmpObj.y - yOffset - tmpObj.scale - _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].nameY), tmpObj.isLeader && iconSprites.crown
          .isLoaded) {
          var tmpS = _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].crownIconScale;
          tmpX = tmpObj.x - xOffset - tmpS / 2 - mainContext.measureText(tmpText)
            .width / 2 - _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].crownPad, mainContext.drawImage(iconSprites.crown, tmpX, tmpObj.y - yOffset - tmpObj.scale - _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].nameY - tmpS / 2 - 5, tmpS
              , tmpS);
        }
        1 == tmpObj.iconIndex && iconSprites.skull.isLoaded && (tmpS = _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].crownIconScale, tmpX = tmpObj.x - xOffset - tmpS / 2 + mainContext.measureText(
            tmpText)
          .width / 2 + _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].crownPad, mainContext.drawImage(iconSprites.skull, tmpX, tmpObj.y - yOffset - tmpObj.scale - _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].nameY - tmpS / 2 - 5, tmpS
            , tmpS));
      }
      tmpObj.health > 0 && (_config_js__WEBPACK_IMPORTED_MODULE_5__["default"].healthBarWidth, mainContext.fillStyle = darkOutlineColor, mainContext.roundRect(tmpObj.x - xOffset - _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].healthBarWidth -
          _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].healthBarPad, tmpObj.y - yOffset + tmpObj.scale + _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].nameY, 2 * _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].healthBarWidth + 2 * _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].healthBarPad, 17, 8), mainContext
        .fill(), mainContext.fillStyle = tmpObj == player || tmpObj.team && tmpObj.team == player.team ? '#8ecc51' : '#cc5151', mainContext.roundRect(tmpObj
          .x - xOffset - _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].healthBarWidth, tmpObj.y - yOffset + tmpObj.scale + _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].nameY + _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].healthBarPad, 2 * _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].healthBarWidth * (tmpObj
            .health / tmpObj.maxHealth), 17 - 2 * _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].healthBarPad, 7), mainContext.fill());
    }

  if (player && player.alive) {
    mapContext.clearRect(0, 0, mapDisplay.width, mapDisplay.height), mapContext.strokeStyle = '#fff', mapContext.lineWidth = 4;

    if (mapContext.globalAlpha = 1, mapContext.fillStyle = '#fff', renderCircle(player.x / _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapScale * mapDisplay.width, player.y / _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapScale *
        mapDisplay.height, 7, mapContext, !0), mapContext.fillStyle = 'rgba(255,255,255,0.35)',  true && minimapData)
      for (i = 0; i < minimapData.length;)
        renderCircle(minimapData[i] / _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapScale * mapDisplay.width, minimapData[i + 1] / _config_js__WEBPACK_IMPORTED_MODULE_5__["default"].mapScale * mapDisplay.height, 7, mapContext, !0), i +=
        2;
  }

  window.requestAnimationFrame(render);
};
render();

window.aJoinReq = aJoinReq;
window.kickFromClan = kickFromClan;
window.sendJoin = sendJoin;
window.leaveAlliance = leaveAlliance;
window.createAlliance = createAlliance;
window.showItemInfo = showItemInfo;
window.selectSkinColor = function (index) {
  skinColor = index, updateSkinColorPicker();
};
window.changeStoreIndex = function (index) {
  currentStoreIndex != index && (currentStoreIndex = index, generateStoreList());
};

document.querySelector("#gameName").innerHTML = "AutoWASM";

document.querySelector("body").insertAdjacentHTML("beforeend", `
<style>
.menuCard, .menuText, .menuHeader {
  background: #222222 !important;
  color: #aaaaaa;
  border-radius: 2px;
  transition: all 1s 0s;
}

.menuCard {
  box-shadow: 0px 7px #888888;
  scrollbar-color: rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.5);
}

.menuCard:hover {
  transform: scale(1.05);
}

#nameInput, #enterGame, #serverBrowser {
  background: #111111 !important;
  outline: none;
}

#mainMenu, #linksContainer2, #linksContainer1 {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  border: 0px !important;
}

#gameName {
  color: black !important;
  text-shadow: 5px 9px 0 #1112 !important;
}

.menuCard {
  width: 325px !important;
  margin: 5px !important;
  padding: 20px !important;
  border: 0px !important;
}

#modMenu {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 2px 2px 12px black;
  height: 290px;
  width: 300px;
  top: 45px;
  left: 45px;
  z-index: 10;
  border: 5px solid transparent;
  border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
  border-image-slice: 1;
  color: white;
  transition: all 1s 0s;
  overflow: auto;
}

#modMenu:hover {
  transform: scale(1.05);
  background: rgba(0, 0, 0, 0.8);
}

#wideAdCard, .adMenuCard, #promoImgHolder {
  display: none !important;
  visibility: hidden !important;
}

</style>
`);

const menu = document.createElement("div");
document.documentElement.appendChild(menu);
menu.id = "modMenu";

menu.innerHTML = `
<center> AutoWASM Sync </center> <br>

<input type = "text" placeholder = "Player Username" id = "username_"> <button id = "syncBtn"> Connect </button> <br>

Follow module: <span onclick = "window.follow = !window.follow; this.innerHTML = window.follow ? 'ON' : 'OFF'"> OFF </span> <br>
Bow spamming module: <span onclick = "window.bowspam = !window.bowspam; this.innerHTML = window.bowspam ? 'ON' : 'OFF'"> OFF </span> <br>
Boost Insta Optimisations: <span onclick = "window.boostinsta = !window.boostinsta; this.innerHTML = window.boostinsta ? 'ON' : 'OFF'"> OFF </span> <br>
Tanker mode: <span onclick = "window.tanker = !window.tanker; this.innerHTML = window.tanker ? 'ON' : 'OFF'"> OFF </span> <br> <br> <br>

FZ Autoheal: <span onclick = "window.fz = !window.fz; this.innerHTML = window.fz ? 'ON' : 'OFF'"> OFF </span> <br> <br>

<br> WebSocket Sender <br>
Packet: <input type = "name" id = "packet"> <br>
<button onclick = "window.socket.send(msgpack.encode(JSON.parse(document.getElementById('packet').value)))"> Send </button> <br>
<button onclick = "window.intervalSend ? (clearInterval(window.intervalSend), this.innerHTML = 'Interval Send') : (window.intervalSend = setInterval(() => window.socket.send(msgpack.encode(JSON.parse(document.getElementById('packet').value))), parseInt(prompt('Enter delay'))), this.innerHTML = 'Stop interval')"> Interval Send </button> <br>
<br>

Server tester <br>
Packet Limit tester: <button onclick = "this.innerHTML == 'Start' ? (window.testPacketLimit = true, this.innerHTML = 'Stop') : (window.testPacketLimit = false, this.innerHTML = 'Start')">Start</button> <br>

!connect <username> - Connect to a user to sync with <br>
!disconnect - Disconnect from the user <br>
!bowspam - Start bowspam module <br>
!follow - Follow the player <br>

<div align = "right"> @0xffabc </div>
`;

document.getElementById("syncBtn").onclick = function e() {
  if (this.innerHTML == "Connect") {
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.SEND_CHAT, "!connect " + document.getElementById("username_").value);
    this.innerHTML = "Disconnect";
  } else if (this.innerHTML == "Disconnect") {
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.SEND_CHAT, "!disconnect");
    this.innerHTML = "Connect";
  } else {
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].send(packets.SEND_CHAT, "!connect " + document.getElementById("username_").value);
    this.innerHTML = "Disconnect";
  }
}

})();

/******/ })()
;