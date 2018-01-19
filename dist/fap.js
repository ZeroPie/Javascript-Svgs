/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	const fontawesome = __webpack_require__ (1);

	const meinestadt = __webpack_require__ (3);






/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * Font Awesome Free 5.0.2 by @fontawesome - http://fontawesome.com
	 * License - http://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
	 */
	(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.fontawesome = factory());
	}(this, (function () { 'use strict';

	var noop = function noop() {};

	var _WINDOW = {};
	var _DOCUMENT = {};
	var _MUTATION_OBSERVER$1 = null;
	var _PERFORMANCE = { mark: noop, measure: noop };

	try {
	  if (typeof window !== 'undefined') _WINDOW = window;
	  if (typeof document !== 'undefined') _DOCUMENT = document;
	  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER$1 = MutationObserver;
	  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
	} catch (e) {}

	var _ref = _WINDOW.navigator || {};
	var _ref$userAgent = _ref.userAgent;
	var userAgent = _ref$userAgent === undefined ? '' : _ref$userAgent;

	var WINDOW = _WINDOW;
	var DOCUMENT = _DOCUMENT;
	var MUTATION_OBSERVER = _MUTATION_OBSERVER$1;
	var PERFORMANCE = _PERFORMANCE;
	var IS_BROWSER = !!WINDOW.document;
	var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

	var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
	var UNITS_IN_GRID = 16;
	var DEFAULT_FAMILY_PREFIX = 'fa';
	var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
	var DATA_FA_PROCESSED = 'data-fa-processed';
	var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
	var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';

	var PRODUCTION = function () {
	  try {
	    return process.env.NODE_ENV === 'production';
	  } catch (e) {
	    return false;
	  }
	}();

	var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

	var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];

	var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
	  return n + 'x';
	})).concat(oneToTwenty.map(function (n) {
	  return 'w-' + n;
	}));

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	var defineProperty = function (obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};



	var toConsumableArray = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  } else {
	    return Array.from(arr);
	  }
	};

	var initial = WINDOW.FontAwesomeConfig || {};
	var initialKeys = Object.keys(initial);

	var _default = _extends({
	  familyPrefix: DEFAULT_FAMILY_PREFIX,
	  replacementClass: DEFAULT_REPLACEMENT_CLASS,
	  autoReplaceSvg: true,
	  autoAddCss: true,
	  autoA11y: true,
	  searchPseudoElements: false,
	  observeMutations: true,
	  keepOriginalSource: true,
	  measurePerformance: false,
	  showMissingIcons: true
	}, initial);

	if (!_default.autoReplaceSvg) _default.observeMutations = false;

	var config = _extends({}, _default);

	WINDOW.FontAwesomeConfig = config;

	function update(newConfig) {
	  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var _params$asNewDefault = params.asNewDefault,
	      asNewDefault = _params$asNewDefault === undefined ? false : _params$asNewDefault;

	  var validKeys = Object.keys(config);
	  var ok = asNewDefault ? function (k) {
	    return ~validKeys.indexOf(k) && !~initialKeys.indexOf(k);
	  } : function (k) {
	    return ~validKeys.indexOf(k);
	  };

	  Object.keys(newConfig).forEach(function (configKey) {
	    if (ok(configKey)) config[configKey] = newConfig[configKey];
	  });
	}

	function auto(value) {
	  update({
	    autoReplaceSvg: value,
	    observeMutations: value
	  });
	}

	var w = WINDOW || {};

	if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
	if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
	if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
	if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];

	var namespace = w[NAMESPACE_IDENTIFIER];

	var functions = [];
	var listener = function listener() {
	  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
	  loaded = 1;
	  functions.map(function (fn) {
	    return fn();
	  });
	};

	var loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);

	if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);

	var domready = function (fn) {
	  if (!DOCUMENT) return;
	  loaded ? setTimeout(fn, 0) : functions.push(fn);
	};

	var d = UNITS_IN_GRID;

	var meaninglessTransform = {
	  size: 16,
	  x: 0,
	  y: 0,
	  rotate: 0,
	  flipX: false,
	  flipY: false
	};

	function isReserved(name) {
	  return ~RESERVED_CLASSES.indexOf(name);
	}

	function bunker(fn) {
	  try {
	    fn();
	  } catch (e) {
	    if (!PRODUCTION) {
	      throw e;
	    }
	  }
	}

	function insertCss(css) {
	  if (!css) {
	    return;
	  }

	  if (typeof DOCUMENT.createElement === 'undefined') {
	    return;
	  }

	  var style = DOCUMENT.createElement('style');
	  style.setAttribute('type', 'text/css');
	  style.innerHTML = css;

	  var headChildren = DOCUMENT.head.childNodes;
	  var beforeChild = null;

	  for (var i = headChildren.length - 1; i > -1; i--) {
	    var child = headChildren[i];
	    var tagName = (child.tagName || '').toUpperCase();
	    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
	      beforeChild = child;
	    }
	  }

	  DOCUMENT.head.insertBefore(style, beforeChild);

	  return css;
	}

	var _uniqueId = 0;

	function nextUniqueId() {
	  _uniqueId++;

	  return _uniqueId;
	}

	function toArray(obj) {
	  var array = [];

	  for (var i = (obj || []).length >>> 0; i--;) {
	    array[i] = obj[i];
	  }

	  return array;
	}

	function classArray(node) {
	  if (node.classList) {
	    return toArray(node.classList);
	  } else {
	    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
	      return i;
	    });
	  }
	}

	function getIconName(familyPrefix, cls) {
	  var parts = cls.split('-');
	  var prefix = parts[0];
	  var iconName = parts.slice(1).join('-');

	  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
	    return iconName;
	  } else {
	    return null;
	  }
	}

	function htmlEscape(str) {
	  return ('' + str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}

	function joinAttributes(attributes) {
	  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
	    return acc + (attributeName + '="' + htmlEscape(attributes[attributeName]) + '" ');
	  }, '').trim();
	}

	function joinStyles(styles) {
	  return Object.keys(styles || {}).reduce(function (acc, styleName) {
	    return acc + (styleName + ': ' + styles[styleName] + ';');
	  }, '');
	}

	function transformIsMeaningful(transform) {
	  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
	}

	function transformForSvg(_ref) {
	  var transform = _ref.transform,
	      containerWidth = _ref.containerWidth,
	      iconWidth = _ref.iconWidth;

	  var outer = {
	    transform: 'translate(' + containerWidth / 2 + ' 256)'
	  };
	  var innerTranslate = 'translate(' + transform.x * 32 + ', ' + transform.y * 32 + ') ';
	  var innerScale = 'scale(' + transform.size / 16 * (transform.flipX ? -1 : 1) + ', ' + transform.size / 16 * (transform.flipY ? -1 : 1) + ') ';
	  var innerRotate = 'rotate(' + transform.rotate + ' 0 0)';
	  var inner = {
	    transform: innerTranslate + ' ' + innerScale + ' ' + innerRotate
	  };
	  var path = {
	    transform: 'translate(' + iconWidth / 2 * -1 + ' -256)'
	  };
	  return {
	    outer: outer,
	    inner: inner,
	    path: path
	  };
	}

	function transformForCss(_ref2) {
	  var transform = _ref2.transform,
	      _ref2$width = _ref2.width,
	      width = _ref2$width === undefined ? UNITS_IN_GRID : _ref2$width,
	      _ref2$height = _ref2.height,
	      height = _ref2$height === undefined ? UNITS_IN_GRID : _ref2$height,
	      _ref2$startCentered = _ref2.startCentered,
	      startCentered = _ref2$startCentered === undefined ? false : _ref2$startCentered;

	  var val = '';

	  if (startCentered && IS_IE) {
	    val += 'translate(' + (transform.x / d - width / 2) + 'em, ' + (transform.y / d - height / 2) + 'em) ';
	  } else if (startCentered) {
	    val += 'translate(calc(-50% + ' + transform.x / d + 'em), calc(-50% + ' + transform.y / d + 'em)) ';
	  } else {
	    val += 'translate(' + transform.x / d + 'em, ' + transform.y / d + 'em) ';
	  }

	  val += 'scale(' + transform.size / d * (transform.flipX ? -1 : 1) + ', ' + transform.size / d * (transform.flipY ? -1 : 1) + ') ';
	  val += 'rotate(' + transform.rotate + 'deg) ';

	  return val;
	}

	var ALL_SPACE = {
	  x: 0,
	  y: 0,
	  width: '100%',
	  height: '100%'
	};

	var makeIconMasking = function (_ref) {
	  var children = _ref.children,
	      attributes = _ref.attributes,
	      main = _ref.main,
	      mask = _ref.mask,
	      transform = _ref.transform;
	  var mainWidth = main.width,
	      mainPath = main.icon;
	  var maskWidth = mask.width,
	      maskPath = mask.icon;


	  var trans = transformForSvg({ transform: transform, containerWidth: maskWidth, iconWidth: mainWidth });

	  var maskRect = {
	    tag: 'rect',
	    attributes: _extends({}, ALL_SPACE, {
	      fill: 'white'
	    })
	  };
	  var maskInnerGroup = {
	    tag: 'g',
	    attributes: _extends({}, trans.inner),
	    children: [{ tag: 'path', attributes: _extends({}, mainPath.attributes, trans.path, { fill: 'black' }) }]
	  };
	  var maskOuterGroup = {
	    tag: 'g',
	    attributes: _extends({}, trans.outer),
	    children: [maskInnerGroup]
	  };
	  var maskId = 'mask-' + nextUniqueId();
	  var clipId = 'clip-' + nextUniqueId();
	  var maskTag = {
	    tag: 'mask',
	    attributes: _extends({}, ALL_SPACE, {
	      id: maskId,
	      maskUnits: 'userSpaceOnUse',
	      maskContentUnits: 'userSpaceOnUse'
	    }),
	    children: [maskRect, maskOuterGroup]
	  };
	  var defs = {
	    tag: 'defs',
	    children: [{ tag: 'clipPath', attributes: { id: clipId }, children: [maskPath] }, maskTag]
	  };

	  children.push(defs, { tag: 'rect', attributes: _extends({ fill: 'currentColor', 'clip-path': 'url(#' + clipId + ')', mask: 'url(#' + maskId + ')' }, ALL_SPACE) });

	  return {
	    children: children,
	    attributes: attributes
	  };
	};

	var makeIconStandard = function (_ref) {
	  var children = _ref.children,
	      attributes = _ref.attributes,
	      main = _ref.main,
	      transform = _ref.transform,
	      styles = _ref.styles;

	  var styleString = joinStyles(styles);

	  if (styleString.length > 0) {
	    attributes['style'] = styleString;
	  }

	  if (transformIsMeaningful(transform)) {
	    var trans = transformForSvg({ transform: transform, containerWidth: main.width, iconWidth: main.width });
	    children.push({
	      tag: 'g',
	      attributes: _extends({}, trans.outer),
	      children: [{
	        tag: 'g',
	        attributes: _extends({}, trans.inner),
	        children: [{
	          tag: main.icon.tag,
	          children: main.icon.children,
	          attributes: _extends({}, main.icon.attributes, trans.path)
	        }]
	      }]
	    });
	  } else {
	    children.push(main.icon);
	  }

	  return {
	    children: children,
	    attributes: attributes
	  };
	};

	var asIcon = function (_ref) {
	  var children = _ref.children,
	      main = _ref.main,
	      mask = _ref.mask,
	      attributes = _ref.attributes,
	      styles = _ref.styles,
	      transform = _ref.transform;

	  if (transformIsMeaningful(transform) && main.found && !mask.found) {
	    var width = main.width,
	        height = main.height;

	    var offset = {
	      x: width / height / 2,
	      y: 0.5
	    };
	    attributes['style'] = joinStyles(_extends({}, styles, {
	      'transform-origin': offset.x + transform.x / 16 + 'em ' + (offset.y + transform.y / 16) + 'em'
	    }));
	  }

	  return [{
	    tag: 'svg',
	    attributes: attributes,
	    children: children
	  }];
	};

	var asSymbol = function (_ref) {
	  var prefix = _ref.prefix,
	      iconName = _ref.iconName,
	      children = _ref.children,
	      attributes = _ref.attributes,
	      symbol = _ref.symbol;

	  var id = symbol === true ? prefix + '-' + config.familyPrefix + '-' + iconName : symbol;

	  return [{
	    tag: 'svg',
	    attributes: {
	      style: 'display: none;'
	    },
	    children: [{
	      tag: 'symbol',
	      attributes: _extends({}, attributes, { id: id }),
	      children: children
	    }]
	  }];
	};

	function makeInlineSvgAbstract(params) {
	  var _babelHelpers$extends;

	  var _params$icons = params.icons,
	      main = _params$icons.main,
	      mask = _params$icons.mask,
	      prefix = params.prefix,
	      iconName = params.iconName,
	      transform = params.transform,
	      symbol = params.symbol,
	      title = params.title,
	      extra = params.extra;

	  var _ref = mask.found ? mask : main,
	      width = _ref.width,
	      height = _ref.height;

	  var widthClass = 'fa-w-' + Math.ceil(width / height * 16);
	  var attrClass = [config.replacementClass, iconName ? config.familyPrefix + '-' + iconName : '', widthClass].concat(extra.classes).join(' ');

	  var content = {
	    children: [],
	    attributes: _extends({}, extra.attributes, (_babelHelpers$extends = {}, defineProperty(_babelHelpers$extends, DATA_FA_PROCESSED, ''), defineProperty(_babelHelpers$extends, 'data-prefix', prefix), defineProperty(_babelHelpers$extends, 'data-icon', iconName), defineProperty(_babelHelpers$extends, 'class', attrClass), defineProperty(_babelHelpers$extends, 'role', 'img'), defineProperty(_babelHelpers$extends, 'xmlns', 'http://www.w3.org/2000/svg'), defineProperty(_babelHelpers$extends, 'viewBox', '0 0 ' + width + ' ' + height), _babelHelpers$extends))
	  };

	  if (title) content.children.push({ tag: 'title', attributes: { id: content.attributes['aria-labelledby'] || 'title-' + nextUniqueId() }, children: [title] });

	  var args = _extends({}, content, {
	    prefix: prefix,
	    iconName: iconName,
	    main: main,
	    mask: mask,
	    transform: transform,
	    symbol: symbol,
	    styles: extra.styles
	  });

	  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
	      children = _ref2.children,
	      attributes = _ref2.attributes;

	  args.children = children;
	  args.attributes = attributes;

	  if (symbol) {
	    return asSymbol(args);
	  } else {
	    return asIcon(args);
	  }
	}

	function makeLayersTextAbstract(params) {
	  var _babelHelpers$extends2;

	  var content = params.content,
	      width = params.width,
	      height = params.height,
	      transform = params.transform,
	      title = params.title,
	      extra = params.extra;


	  var attributes = _extends({}, extra.attributes, title ? { 'title': title } : {}, (_babelHelpers$extends2 = {}, defineProperty(_babelHelpers$extends2, DATA_FA_PROCESSED, ''), defineProperty(_babelHelpers$extends2, 'class', extra.classes.join(' ')), _babelHelpers$extends2));

	  var styles = _extends({}, extra.styles);

	  if (transformIsMeaningful(transform)) {
	    styles['transform'] = transformForCss({ transform: transform, startCentered: true, width: width, height: height });
	    styles['-webkit-transform'] = styles['transform'];
	  }

	  var styleString = joinStyles(styles);

	  if (styleString.length > 0) {
	    attributes['style'] = styleString;
	  }

	  var val = [];

	  val.push({
	    tag: 'span',
	    attributes: attributes,
	    children: [content]
	  });

	  if (title) {
	    val.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [title] });
	  }

	  return val;
	}

	var noop$2 = function noop() {};
	var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : { mark: noop$2, measure: noop$2 };
	var preamble = 'FA "5.0.2"';

	var begin = function begin(name) {
	  p.mark(preamble + ' ' + name + ' begins');
	  return function () {
	    return end(name);
	  };
	};

	var end = function end(name) {
	  p.mark(preamble + ' ' + name + ' ends');
	  p.measure(preamble + ' ' + name, preamble + ' ' + name + ' begins', preamble + ' ' + name + ' ends');
	};

	var perf = { begin: begin, end: end };

	'use strict';

	/**
	 * Internal helper to bind a function known to have 4 arguments
	 * to a given context.
	 */
	var bindInternal4 = function bindInternal4 (func, thisContext) {
	  return function (a, b, c, d) {
	    return func.call(thisContext, a, b, c, d);
	  };
	};

	'use strict';



	/**
	 * # Reduce
	 *
	 * A fast object `.reduce()` implementation.
	 *
	 * @param  {Object}   subject      The object to reduce over.
	 * @param  {Function} fn           The reducer function.
	 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
	 * @param  {Object}   thisContext  The context for the reducer.
	 * @return {mixed}                 The final result.
	 */
	var reduce = function fastReduceObject (subject, fn, initialValue, thisContext) {
	  var keys = Object.keys(subject),
	      length = keys.length,
	      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
	      i, key, result;

	  if (initialValue === undefined) {
	    i = 1;
	    result = subject[keys[0]];
	  }
	  else {
	    i = 0;
	    result = initialValue;
	  }

	  for (; i < length; i++) {
	    key = keys[i];
	    result = iterator(result, subject[key], key, subject);
	  }

	  return result;
	};

	var styles$2 = namespace.styles;
	var shims = namespace.shims;


	var _byUnicode = {};
	var _byLigature = {};
	var _byOldName = {};

	var build = function build() {
	  var lookup = function lookup(reducer) {
	    return reduce(styles$2, function (o, style, prefix) {
	      o[prefix] = reduce(style, reducer, {});
	      return o;
	    }, {});
	  };

	  _byUnicode = lookup(function (acc, icon, iconName) {
	    acc[icon[3]] = iconName;

	    return acc;
	  });

	  _byLigature = lookup(function (acc, icon, iconName) {
	    var ligatures = icon[2];

	    acc[iconName] = iconName;

	    ligatures.forEach(function (ligature) {
	      acc[ligature] = iconName;
	    });

	    return acc;
	  });

	  var hasRegular = 'far' in styles$2;

	  _byOldName = reduce(shims, function (acc, shim) {
	    var oldName = shim[0];
	    var prefix = shim[1];
	    var iconName = shim[2];

	    if (prefix === 'far' && !hasRegular) {
	      prefix = 'fas';
	    }

	    acc[oldName] = { prefix: prefix, iconName: iconName };

	    return acc;
	  }, {});
	};

	build();

	function byUnicode(prefix, unicode) {
	  return _byUnicode[prefix][unicode];
	}

	function byLigature(prefix, ligature) {
	  return _byLigature[prefix][ligature];
	}

	function byOldName(name) {
	  return _byOldName[name] || { prefix: null, iconName: null };
	}

	var styles$1 = namespace.styles;


	var emptyCanonicalIcon = function emptyCanonicalIcon() {
	  return { prefix: null, iconName: null, rest: [] };
	};

	function getCanonicalIcon(values) {
	  return values.reduce(function (acc, cls) {
	    var iconName = getIconName(config.familyPrefix, cls);

	    if (styles$1[cls]) {
	      acc.prefix = cls;
	    } else if (iconName) {
	      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};

	      acc.iconName = shim.iconName || iconName;
	      acc.prefix = shim.prefix || acc.prefix;
	    } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
	      acc.rest.push(cls);
	    }

	    return acc;
	  }, emptyCanonicalIcon());
	}

	function iconFromMapping(mapping, prefix, iconName) {
	  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
	    return {
	      prefix: prefix,
	      iconName: iconName,
	      icon: mapping[prefix][iconName]
	    };
	  }
	}

	function toHtml(abstractNodes) {
	  var tag = abstractNodes.tag,
	      _abstractNodes$attrib = abstractNodes.attributes,
	      attributes = _abstractNodes$attrib === undefined ? {} : _abstractNodes$attrib,
	      _abstractNodes$childr = abstractNodes.children,
	      children = _abstractNodes$childr === undefined ? [] : _abstractNodes$childr;


	  if (typeof abstractNodes === 'string') {
	    return htmlEscape(abstractNodes);
	  } else {
	    return '<' + tag + ' ' + joinAttributes(attributes) + '>' + children.map(toHtml).join('') + '</' + tag + '>';
	  }
	}

	var noop$1 = function noop() {};

	function isReplaced(node) {
	  var nodeClass = node.getAttribute ? node.getAttribute('class') : null;

	  if (nodeClass) {
	    return !!~nodeClass.toString().indexOf(config.replacementClass) || ~nodeClass.toString().indexOf('fa-layers-text');
	  } else {
	    return false;
	  }
	}

	function getMutator() {
	  if (config.autoReplaceSvg === true) {
	    return mutators.replace;
	  }

	  var mutator = mutators[config.autoReplaceSvg];

	  return mutator || mutators.replace;
	}

	var mutators = {
	  replace: function replace(mutation) {
	    var node = mutation[0];
	    var abstract = mutation[1];
	    var newOuterHTML = abstract.map(function (a) {
	      return toHtml(a);
	    }).join('\n');

	    if (node.parentNode && node.outerHTML) {
	      node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? '<!-- ' + node.outerHTML + ' -->' : '');
	    } else if (node.parentNode) {
	      var newNode = document.createElement('span');
	      node.parentNode.replaceChild(newNode, node);
	      newNode.outerHTML = newOuterHTML;
	    }
	  },
	  nest: function nest(mutation) {
	    var node = mutation[0];
	    var abstract = mutation[1];

	    // If we already have a replaced node we do not want to continue nesting within it.
	    // Short-circuit to the standard replacement
	    if (~classArray(node).indexOf(config.replacementClass)) {
	      return mutators.replace(mutation);
	    }

	    var forSvg = new RegExp(config.familyPrefix + '-.*');

	    delete abstract[0].attributes.style;

	    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
	      if (cls === config.replacementClass || cls.match(forSvg)) {
	        acc.toSvg.push(cls);
	      } else {
	        acc.toNode.push(cls);
	      }

	      return acc;
	    }, { toNode: [], toSvg: [] });

	    abstract[0].attributes.class = splitClasses.toSvg.join(' ');

	    var newInnerHTML = abstract.map(function (a) {
	      return toHtml(a);
	    }).join('\n');
	    node.setAttribute('class', splitClasses.toNode.join(' '));
	    node.setAttribute(DATA_FA_PROCESSED, '');
	    node.innerHTML = newInnerHTML;
	  }
	};

	function perform(mutations, callback) {
	  var callbackFunction = typeof callback === 'function' ? callback : noop$1;

	  if (mutations.length === 0) {
	    callbackFunction();
	  } else {
	    var frame = WINDOW.requestAnimationFrame || function (op) {
	      return op();
	    };

	    frame(function () {
	      var mutator = getMutator();
	      var mark = perf.begin('mutate');

	      mutations.map(mutator);

	      mark();

	      callbackFunction();
	    });
	  }
	}

	var disabled = false;

	function disableObservation(operation) {
	  disabled = true;
	  operation();
	  disabled = false;
	}

	function observe(options) {
	  if (!MUTATION_OBSERVER) return;

	  var treeCallback = options.treeCallback,
	      nodeCallback = options.nodeCallback,
	      pseudoElementsCallback = options.pseudoElementsCallback;

	  var mo = new MUTATION_OBSERVER(function (objects) {
	    if (disabled) return;

	    toArray(objects).forEach(function (mutationRecord) {
	      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isReplaced(mutationRecord.addedNodes[0])) {
	        if (config.searchPseudoElements) {
	          pseudoElementsCallback(mutationRecord.target);
	        }

	        treeCallback(mutationRecord.target);
	      }

	      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
	        pseudoElementsCallback(mutationRecord.target.parentNode);
	      }

	      if (mutationRecord.type === 'attributes' && isReplaced(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
	        if (mutationRecord.attributeName === 'class') {
	          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
	              prefix = _getCanonicalIcon.prefix,
	              iconName = _getCanonicalIcon.iconName;

	          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
	          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
	        } else {
	          nodeCallback(mutationRecord.target);
	        }
	      }
	    });
	  });

	  if (!DOCUMENT.getElementsByTagName) return;

	  mo.observe(DOCUMENT.getElementsByTagName('body')[0], {
	    childList: true, attributes: true, characterData: true, subtree: true
	  });
	}

	var styleParser = function (node) {
	  var style = node.getAttribute('style');

	  var val = [];

	  if (style) {
	    val = style.split(';').reduce(function (acc, style) {
	      var styles = style.split(':');
	      var prop = styles[0];
	      var value = styles.slice(1);

	      if (prop && value.length > 0) {
	        acc[prop] = value.join(':').trim();
	      }

	      return acc;
	    }, {});
	  }

	  return val;
	};

	function toHex(unicode) {
	  var result = '';

	  for (var i = 0; i < unicode.length; i++) {
	    var hex = unicode.charCodeAt(i).toString(16);
	    result += ('000' + hex).slice(-4);
	  }

	  return result;
	}

	var classParser = function (node) {
	  var existingPrefix = node.getAttribute('data-prefix');
	  var existingIconName = node.getAttribute('data-icon');
	  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';

	  var val = getCanonicalIcon(classArray(node));

	  if (existingPrefix && existingIconName) {
	    val.prefix = existingPrefix;
	    val.iconName = existingIconName;
	  }

	  if (val.prefix && innerText.length > 1) {
	    val.iconName = byLigature(val.prefix, node.innerText);
	  } else if (val.prefix && innerText.length === 1) {
	    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
	  }

	  return val;
	};

	var parseTransformString = function parseTransformString(transformString) {
	  var transform = {
	    size: 16,
	    x: 0,
	    y: 0,
	    flipX: false,
	    flipY: false,
	    rotate: 0
	  };

	  if (!transformString) {
	    return transform;
	  } else {
	    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
	      var parts = n.toLowerCase().split('-');
	      var first = parts[0];
	      var rest = parts.slice(1).join('-');

	      if (first && rest === 'h') {
	        acc.flipX = true;
	        return acc;
	      }

	      if (first && rest === 'v') {
	        acc.flipY = true;
	        return acc;
	      }

	      rest = parseFloat(rest);

	      if (isNaN(rest)) {
	        return acc;
	      }

	      switch (first) {
	        case 'grow':
	          acc.size = acc.size + rest;
	          break;
	        case 'shrink':
	          acc.size = acc.size - rest;
	          break;
	        case 'left':
	          acc.x = acc.x - rest;
	          break;
	        case 'right':
	          acc.x = acc.x + rest;
	          break;
	        case 'up':
	          acc.y = acc.y - rest;
	          break;
	        case 'down':
	          acc.y = acc.y + rest;
	          break;
	        case 'rotate':
	          acc.rotate = acc.rotate + rest;
	          break;
	      }

	      return acc;
	    }, transform);
	  }
	};

	var transformParser = function (node) {
	  return parseTransformString(node.getAttribute('data-fa-transform'));
	};

	var symbolParser = function (node) {
	  var symbol = node.getAttribute('data-fa-symbol');

	  return symbol === null ? false : symbol === '' ? true : symbol;
	};

	var attributesParser = function (node) {
	  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
	    if (acc.name !== 'class' && acc.name !== 'style') {
	      acc[attr.name] = attr.value;
	    }
	    return acc;
	  }, {});

	  var title = node.getAttribute('title');

	  if (config.autoA11y) {
	    if (title) {
	      extraAttributes['aria-labelledby'] = config.replacementClass + '-title-' + nextUniqueId();
	    } else {
	      extraAttributes['aria-hidden'] = 'true';
	    }
	  }

	  return extraAttributes;
	};

	var maskParser = function (node) {
	  var mask = node.getAttribute('data-fa-mask');

	  if (!mask) {
	    return emptyCanonicalIcon();
	  } else {
	    return getCanonicalIcon(mask.split(' ').map(function (i) {
	      return i.trim();
	    }));
	  }
	};

	function parseMeta(node) {
	  var _classParser = classParser(node),
	      iconName = _classParser.iconName,
	      prefix = _classParser.prefix,
	      extraClasses = _classParser.rest;

	  var extraStyles = styleParser(node);
	  var transform = transformParser(node);
	  var symbol = symbolParser(node);
	  var extraAttributes = attributesParser(node);
	  var mask = maskParser(node);

	  return {
	    iconName: iconName,
	    title: node.getAttribute('title'),
	    prefix: prefix,
	    transform: transform,
	    symbol: symbol,
	    mask: mask,
	    extra: {
	      classes: extraClasses,
	      styles: extraStyles,
	      attributes: extraAttributes
	    }
	  };
	}

	function MissingIcon(error) {
	  this.name = 'MissingIcon';
	  this.message = error || 'Icon unavailable';
	  this.stack = new Error().stack;
	}

	MissingIcon.prototype = Object.create(Error.prototype);
	MissingIcon.prototype.constructor = MissingIcon;

	var FILL = { fill: 'currentColor' };
	var ANIMATION_BASE = {
	  attributeType: 'XML',
	  repeatCount: 'indefinite',
	  dur: '2s'
	};
	var RING = {
	  tag: 'path',
	  attributes: _extends({}, FILL, {
	    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
	  })
	};
	var OPACITY_ANIMATE = _extends({}, ANIMATION_BASE, {
	  attributeName: 'opacity'
	});
	var DOT = {
	  tag: 'circle',
	  attributes: _extends({}, FILL, {
	    cx: '256',
	    cy: '364',
	    r: '28'
	  }),
	  children: [{ tag: 'animate', attributes: _extends({}, ANIMATION_BASE, { attributeName: 'r', values: '28;14;28;28;14;28;' }) }, { tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;1;1;0;1;' }) }]
	};
	var QUESTION = {
	  tag: 'path',
	  attributes: _extends({}, FILL, {
	    opacity: '1',
	    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
	  }),
	  children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;0;0;0;1;' }) }]
	};
	var EXCLAMATION = {
	  tag: 'path',
	  attributes: _extends({}, FILL, {
	    opacity: '0',
	    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
	  }),
	  children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '0;0;1;1;0;0;' }) }]
	};

	var missing = { tag: 'g', children: [RING, DOT, QUESTION, EXCLAMATION] };

	var styles = namespace.styles;

	var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
	var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Brands)/;
	var STYLE_TO_PREFIX = {
	  'Solid': 'fas',
	  'Regular': 'far',
	  'Light': 'fal',
	  'Brands': 'fab'
	};

	function findIcon(iconName, prefix) {
	  var val = {
	    found: false,
	    width: 512,
	    height: 512,
	    icon: missing
	  };

	  if (iconName && prefix && styles[prefix] && styles[prefix][iconName]) {
	    var icon = styles[prefix][iconName];
	    var width = icon[0];
	    var height = icon[1];
	    var vectorData = icon.slice(4);

	    val = {
	      found: true,
	      width: width,
	      height: height,
	      icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
	    };
	  } else if (iconName && prefix && !config.showMissingIcons) {
	    throw new MissingIcon('Icon is missing for prefix ' + prefix + ' with icon name ' + iconName);
	  }

	  return val;
	}

	function generateSvgReplacementMutation(node, nodeMeta) {
	  var iconName = nodeMeta.iconName,
	      title = nodeMeta.title,
	      prefix = nodeMeta.prefix,
	      transform = nodeMeta.transform,
	      symbol = nodeMeta.symbol,
	      mask = nodeMeta.mask,
	      extra = nodeMeta.extra;


	  return [node, makeInlineSvgAbstract({
	    icons: {
	      main: findIcon(iconName, prefix),
	      mask: findIcon(mask.iconName, mask.prefix)
	    },
	    prefix: prefix,
	    iconName: iconName,
	    transform: transform,
	    symbol: symbol,
	    mask: mask,
	    title: title,
	    extra: extra
	  })];
	}

	function generateLayersText(node, nodeMeta) {
	  var title = nodeMeta.title,
	      transform = nodeMeta.transform,
	      extra = nodeMeta.extra;


	  var width = null;
	  var height = null;

	  if (IS_IE) {
	    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
	    var boundingClientRect = node.getBoundingClientRect();
	    width = boundingClientRect.width / computedFontSize;
	    height = boundingClientRect.height / computedFontSize;
	  }

	  if (config.autoA11y && !title) {
	    extra.attributes['aria-hidden'] = 'true';
	  }

	  return [node, makeLayersTextAbstract({
	    content: node.innerHTML,
	    width: width,
	    height: height,
	    transform: transform,
	    title: title,
	    extra: extra
	  })];
	}

	function generateMutation(node) {
	  var nodeMeta = parseMeta(node);

	  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
	    return generateLayersText(node, nodeMeta);
	  } else {
	    return generateSvgReplacementMutation(node, nodeMeta);
	  }
	}

	function remove(node) {
	  if (typeof node.remove === 'function') {
	    node.remove();
	  } else if (node && node.parentNode) {
	    node.parentNode.removeChild(node);
	  }
	}

	function searchPseudoElements(root) {
	  var end = perf.begin('searchPseudoElements');

	  disableObservation(function () {
	    toArray(root.querySelectorAll('*')).forEach(function (node) {
	      [':before', ':after'].forEach(function (pos) {
	        var styles = WINDOW.getComputedStyle(node, pos);
	        var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
	        var children = toArray(node.children);
	        var pseudoElement = children.filter(function (c) {
	          return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === pos;
	        })[0];

	        if (pseudoElement) {
	          if (pseudoElement.nextSibling && pseudoElement.nextSibling.textContent.indexOf(DATA_FA_PSEUDO_ELEMENT)) {
	            remove(pseudoElement.nextSibling);
	          }
	          remove(pseudoElement);
	          pseudoElement = null;
	        }

	        if (fontFamily && !pseudoElement) {
	          var content = styles.getPropertyValue('content');
	          var i = DOCUMENT.createElement('i');
	          i.setAttribute('class', '' + STYLE_TO_PREFIX[fontFamily[1]]);
	          i.setAttribute(DATA_FA_PSEUDO_ELEMENT, pos);
	          i.innerText = content.length === 3 ? content.substr(1, 1) : content;
	          if (pos === ':before') {
	            node.insertBefore(i, node.firstChild);
	          } else {
	            node.appendChild(i);
	          }
	        }
	      });
	    });
	  });

	  end();
	}

	function onTree(root) {
	  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	  var htmlClassList = DOCUMENT.documentElement.classList;
	  var hclAdd = function hclAdd(suffix) {
	    return htmlClassList.add(HTML_CLASS_I2SVG_BASE_CLASS + '-' + suffix);
	  };
	  var hclRemove = function hclRemove(suffix) {
	    return htmlClassList.remove(HTML_CLASS_I2SVG_BASE_CLASS + '-' + suffix);
	  };
	  var prefixes = Object.keys(styles);
	  var prefixesDomQuery = ['.' + LAYERS_TEXT_CLASSNAME + ':not([' + DATA_FA_PROCESSED + '])'].concat(prefixes.map(function (p) {
	    return '.' + p + ':not([' + DATA_FA_PROCESSED + '])';
	  })).join(', ');

	  if (prefixesDomQuery.length === 0) {
	    return;
	  }

	  var candidates = toArray(root.querySelectorAll(prefixesDomQuery));

	  if (candidates.length > 0) {
	    hclAdd('pending');
	    hclRemove('complete');
	  } else {
	    return;
	  }

	  var mark = perf.begin('onTree');

	  var mutations = candidates.reduce(function (acc, node) {
	    try {
	      var mutation = generateMutation(node);

	      if (mutation) {
	        acc.push(mutation);
	      }
	    } catch (e) {
	      if (!PRODUCTION) {
	        if (e instanceof MissingIcon) {
	          console.error(e);
	        }
	      }
	    }

	    return acc;
	  }, []);

	  mark();

	  perform(mutations, function () {
	    hclAdd('active');
	    hclAdd('complete');
	    hclRemove('pending');

	    if (typeof callback === 'function') callback();
	  });
	}

	function onNode(node) {
	  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	  var mutation = generateMutation(node);

	  if (mutation) {
	    perform([mutation], callback);
	  }
	}

	var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -12.5%;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n";

	var css = function () {
	  var dfp = DEFAULT_FAMILY_PREFIX;
	  var drc = DEFAULT_REPLACEMENT_CLASS;
	  var fp = config.familyPrefix;
	  var rc = config.replacementClass;
	  var s = baseStyles;

	  if (fp !== dfp || rc !== drc) {
	    var dPatt = new RegExp('\\.' + dfp + '\\-', 'g');
	    var rPatt = new RegExp('\\.' + drc, 'g');

	    s = s.replace(dPatt, '.' + fp + '-').replace(rPatt, '.' + rc);
	  }

	  return s;
	};

	function define(prefix, icons) {
	  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
	    var icon = icons[iconName];
	    var expanded = !!icon.icon;

	    if (expanded) {
	      acc[icon.iconName] = icon.icon;
	    } else {
	      acc[iconName] = icon;
	    }
	    return acc;
	  }, {});

	  if (typeof namespace.hooks.addPack === 'function') {
	    namespace.hooks.addPack(prefix, normalized);
	  } else {
	    namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, normalized);
	  }

	  /**
	   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
	   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
	   * for `fas` so we'll easy the upgrade process for our users by automatically defining
	   * this as well.
	   */
	  if (prefix === 'fas') {
	    define('fa', icons);
	  }
	}

	var Library = function () {
	  function Library() {
	    classCallCheck(this, Library);

	    this.definitions = {};
	  }

	  createClass(Library, [{
	    key: 'add',
	    value: function add() {
	      var _this = this;

	      for (var _len = arguments.length, definitions = Array(_len), _key = 0; _key < _len; _key++) {
	        definitions[_key] = arguments[_key];
	      }

	      var additions = definitions.reduce(this._pullDefinitions, {});

	      Object.keys(additions).forEach(function (key) {
	        _this.definitions[key] = _extends({}, _this.definitions[key] || {}, additions[key]);
	        define(key, additions[key]);
	      });
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.definitions = {};
	    }
	  }, {
	    key: '_pullDefinitions',
	    value: function _pullDefinitions(additions, definition) {
	      var normalized = definition.prefix && definition.iconName && definition.icon ? { 0: definition } : definition;

	      Object.keys(normalized).map(function (key) {
	        var _normalized$key = normalized[key],
	            prefix = _normalized$key.prefix,
	            iconName = _normalized$key.iconName,
	            icon = _normalized$key.icon;


	        if (!additions[prefix]) additions[prefix] = {};

	        additions[prefix][iconName] = icon;
	      });

	      return additions;
	    }
	  }]);
	  return Library;
	}();

	function prepIcon(icon) {
	  var width = icon[0];
	  var height = icon[1];
	  var vectorData = icon.slice(4);

	  return {
	    found: true,
	    width: width,
	    height: height,
	    icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
	  };
	}

	var _cssInserted = false;

	function ensureCss() {
	  if (!config.autoAddCss) {
	    return;
	  }

	  if (!_cssInserted) {
	    insertCss(css());
	  }

	  _cssInserted = true;
	}

	function apiObject(val, abstractCreator) {
	  Object.defineProperty(val, 'abstract', {
	    get: abstractCreator
	  });

	  Object.defineProperty(val, 'html', {
	    get: function get() {
	      return val.abstract.map(function (a) {
	        return toHtml(a);
	      });
	    }
	  });

	  Object.defineProperty(val, 'node', {
	    get: function get() {
	      if (!DOCUMENT.createElement) return;

	      var container = DOCUMENT.createElement('div');
	      container.innerHTML = val.html;
	      return container.children;
	    }
	  });

	  return val;
	}

	function findIconDefinition(params) {
	  var _params$prefix = params.prefix,
	      prefix = _params$prefix === undefined ? 'fa' : _params$prefix,
	      iconName = params.iconName;


	  if (!iconName) return;

	  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
	}

	function resolveIcons(next) {
	  return function (maybeIconDefinition) {
	    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});

	    var mask = params.mask;


	    if (mask) {
	      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
	    }

	    return next(iconDefinition, _extends({}, params, { mask: mask }));
	  };
	}

	var library = new Library();

	var api$1 = {
	  noAuto: function noAuto() {
	    auto(false);
	  },


	  dom: {
	    i2svg: function i2svg() {
	      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      ensureCss();

	      var _params$node = params.node,
	          node = _params$node === undefined ? DOCUMENT : _params$node,
	          _params$callback = params.callback,
	          callback = _params$callback === undefined ? function () {} : _params$callback;


	      if (config.searchPseudoElements) {
	        searchPseudoElements(node);
	      }

	      onTree(node, callback);
	    },

	    css: css,

	    insertCss: function insertCss$$1() {
	      insertCss(css());
	    }
	  },

	  library: library,

	  parse: {
	    transform: function transform(transformString) {
	      return parseTransformString(transformString);
	    }
	  },

	  findIconDefinition: findIconDefinition,

	  icon: resolveIcons(function (iconDefinition) {
	    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var _params$transform = params.transform,
	        transform = _params$transform === undefined ? meaninglessTransform : _params$transform,
	        _params$symbol = params.symbol,
	        symbol = _params$symbol === undefined ? false : _params$symbol,
	        _params$mask = params.mask,
	        mask = _params$mask === undefined ? null : _params$mask,
	        _params$title = params.title,
	        title = _params$title === undefined ? null : _params$title,
	        _params$classes = params.classes,
	        classes = _params$classes === undefined ? [] : _params$classes,
	        _params$attributes = params.attributes,
	        attributes = _params$attributes === undefined ? {} : _params$attributes,
	        _params$styles = params.styles,
	        styles = _params$styles === undefined ? {} : _params$styles;


	    if (!iconDefinition) return;

	    var prefix = iconDefinition.prefix,
	        iconName = iconDefinition.iconName,
	        icon = iconDefinition.icon;


	    return apiObject(_extends({ type: 'icon' }, iconDefinition), function () {
	      ensureCss();

	      if (config.autoA11y) {
	        if (title) {
	          attributes['aria-labelledby'] = config.replacementClass + '-title-' + nextUniqueId();
	        } else {
	          attributes['aria-hidden'] = 'true';
	        }
	      }

	      return makeInlineSvgAbstract({
	        icons: {
	          main: prepIcon(icon),
	          mask: mask ? prepIcon(mask.icon) : { found: false, width: null, height: null, icon: {} }
	        },
	        prefix: prefix,
	        iconName: iconName,
	        transform: _extends({}, meaninglessTransform, transform),
	        symbol: symbol,
	        title: title,
	        extra: {
	          attributes: attributes,
	          styles: styles,
	          classes: classes
	        }
	      });
	    });
	  }),

	  text: function text(content) {
	    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var _params$transform2 = params.transform,
	        transform = _params$transform2 === undefined ? meaninglessTransform : _params$transform2,
	        _params$title2 = params.title,
	        title = _params$title2 === undefined ? null : _params$title2,
	        _params$classes2 = params.classes,
	        classes = _params$classes2 === undefined ? [] : _params$classes2,
	        _params$attributes2 = params.attributes,
	        attributes = _params$attributes2 === undefined ? {} : _params$attributes2,
	        _params$styles2 = params.styles,
	        styles = _params$styles2 === undefined ? {} : _params$styles2;


	    return apiObject({ type: 'text', content: content }, function () {
	      ensureCss();

	      return makeLayersTextAbstract({
	        content: content,
	        transform: _extends({}, meaninglessTransform, transform),
	        title: title,
	        extra: {
	          attributes: attributes,
	          styles: styles,
	          classes: [config.familyPrefix + '-layers-text'].concat(toConsumableArray(classes))
	        }
	      });
	    });
	  },

	  layer: function layer(assembler) {
	    return apiObject({ type: 'layer' }, function () {
	      ensureCss();

	      var children = [];

	      assembler(function (args) {
	        Array.isArray(args) ? children = args.map(function (a) {
	          children = children.concat(a.abstract);
	        }) : children = children.concat(args.abstract);
	      });

	      return [{
	        tag: 'span',
	        attributes: { class: config.familyPrefix + '-layers' },
	        children: children
	      }];
	    });
	  }
	};

	var autoReplace = function autoReplace() {
	  if (config.autoReplaceSvg) api$1.dom.i2svg({ node: DOCUMENT });
	};

	function bootstrap() {
	  if (IS_BROWSER) {
	    if (!WINDOW.FontAwesome) {
	      WINDOW.FontAwesome = api$1;
	    }

	    domready(function () {
	      if (Object.keys(namespace.styles).length > 0) {
	        autoReplace();
	      }

	      if (config.observeMutations && typeof MutationObserver === 'function') {
	        observe({
	          treeCallback: onTree,
	          nodeCallback: onNode,
	          pseudoElementsCallback: searchPseudoElements
	        });
	      }
	    });
	  }

	  namespace.hooks = _extends({}, namespace.hooks, {

	    addPack: function addPack(prefix, icons) {
	      namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, icons);

	      build();
	      autoReplace();
	    },

	    addShims: function addShims(shims) {
	      var _namespace$shims;

	      (_namespace$shims = namespace.shims).push.apply(_namespace$shims, toConsumableArray(shims));

	      build();
	      autoReplace();
	    }
	  });
	}

	Object.defineProperty(api$1, 'config', {
	  get: function get() {
	    return config;
	  },

	  set: function set(newConfig) {
	    update(newConfig);
	  }
	});

	if (DOCUMENT) bunker(bootstrap);

	return api$1;

	})));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global['fontawesome-free-solid'] = {})));
	}(this, (function (exports) { 'use strict';

	var _WINDOW = {};
	try {
	if (typeof window !== 'undefined') _WINDOW = window;

	} catch (e) {}

	var _ref = _WINDOW.navigator || {};
	var _ref$userAgent = _ref.userAgent;
	var userAgent = _ref$userAgent === undefined ? '' : _ref$userAgent;

	var WINDOW = _WINDOW;

	var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

	var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';


	var PRODUCTION = function () {
	try {
	  return process.env.NODE_ENV === 'production';
	} catch (e) {
	  return false;
	}
	}();

	var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);



	var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
	return n + 'x';
	})).concat(oneToTwenty.map(function (n) {
	return 'w-' + n;
	}));

	function bunker(fn) {
	try {
	  fn();
	} catch (e) {
	  if (!PRODUCTION) {
	  throw e;
	  }
	}
	}

	var w = WINDOW || {};

	if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
	if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
	if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
	if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];

	var namespace = w[NAMESPACE_IDENTIFIER];

	var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
	  var source = arguments[i];

	  for (var key in source) {
	  if (Object.prototype.hasOwnProperty.call(source, key)) {
	      target[key] = source[key];
	  }
	  }
	}

	return target;
	};

	function define(prefix, icons) {
	var normalized = Object.keys(icons).reduce(function (acc, iconName) {
	  var icon = icons[iconName];
	  var expanded = !!icon.icon;

	  if (expanded) {
	  acc[icon.iconName] = icon.icon;
	  } else {
	  acc[iconName] = icon;
	  }
	  return acc;
	}, {});

	if (typeof namespace.hooks.addPack === 'function') {
	  namespace.hooks.addPack(prefix, normalized);
	} else {
	  namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, normalized);
	}

	if (prefix === 'fas') {
	  define('fa', icons);
	}
	}

	var prefix = "fas";
	var einkauf = { prefix: 'fas', iconName: 'einkauf', icon: [100 , 100 , [], "inkau", "M32.327 32.147c-1.84 0-3.353 1.514-3.353 3.354s1.514 3.354 3.353 3.354a3.369 3.369 0 0 0 3.353-3.353 3.369 3.369 0 0 0-3.353-3.353zm-17.604 0c1.84 0 3.353 1.514 3.353 3.354s-1.514 3.354-3.353 3.354a3.369 3.369 0 0 1-3.353-3.353 3.368 3.368 0 0 1 3.353-3.353zm17.604 4.703a1.369 1.369 0 0 1-1.362-1.363 1.37 1.37 0 0 1 1.362-1.362 1.37 1.37 0 0 1 1.362 1.362 1.37 1.37 0 0 1-1.363 1.363zm-17.604 0a1.368 1.368 0 0 1-1.362-1.363 1.37 1.37 0 0 1 1.363-1.362 1.37 1.37 0 0 1 1.362 1.362c0 .748-.615 1.363-1.362 1.363zM6.99 5.16a.373.373 0 0 1 .457.263l5.315 19.84a.357.357 0 0 1-.006.21.356.356 0 0 1-.007.162l-1.094 4.078h26.166c.206 0 .373.168.373.374v2.986a.374.374 0 0 1-.373.373h-1.497a4.5 4.5 0 0 0-7.998 0h-9.605a4.496 4.496 0 0 0-7.997 0H8.08a.374.374 0 0 1-.374-.373v-2.93a.345.345 0 0 1 .01-.142c0-.007.004-.014.005-.02l1.222-4.556-4.43-16.532H.372A.377.377 0 0 1 0 8.518V5.532c0-.205.168-.373.373-.373H6.99zM44 11.386a1.5 1.5 0 0 0-1.5-1.5L12.81 8.743c-.828 0-1.5.673-1.5 1.5l3.244 12.927s.673 1.5 1.5 1.5l22.058-1.463c.83 0 1.5-1.5 1.5-1.5L44 11.387z"]};
	var ms_city_badge = { prefix: 'fas', iconName: 'ms_city_badge', icon: [100 , 100 , [], "s_city_badg", "M53.91,109.22a1.5,1.5,0,0,1,1.5-1.5h0a1.51,1.51,0,0,1,1.51,1.5h0a1.5,1.5,0,0,1-1.5,1.5h0A1.51,1.51,0,0,1,53.91,109.22Zm-5.71,1a1.5,1.5,0,0,1-1.3-1.68h0a1.5,1.5,0,0,1,1.68-1.29h0a1.51,1.51,0,0,1,1.3,1.68h0a1.52,1.52,0,0,1-1.49,1.31h0Zm12.75-1.31a1.51,1.51,0,0,1,1.3-1.68h0a1.5,1.5,0,0,1,1.68,1.29h0a1.5,1.5,0,0,1-1.29,1.69h-.2A1.51,1.51,0,0,1,60.95,108.95Zm-19.86-.08A1.51,1.51,0,0,1,40,107h0A1.49,1.49,0,0,1,41.87,106h0a1.49,1.49,0,0,1,1.06,1.83h0a1.51,1.51,0,0,1-1.45,1.12h0A1.72,1.72,0,0,1,41.09,108.87Zm26.81-1.09A1.49,1.49,0,0,1,69,105.94h0A1.5,1.5,0,0,1,70.8,107h0a1.49,1.49,0,0,1-1.06,1.83h0a1.37,1.37,0,0,1-.39.06h0A1.49,1.49,0,0,1,67.9,107.78Zm-33.67-1.23a1.5,1.5,0,0,1-.81-2h0a1.5,1.5,0,0,1,2-.82h0a1.51,1.51,0,0,1,.81,2h0a1.51,1.51,0,0,1-1.39.92h0A1.66,1.66,0,0,1,34.23,106.55Zm40.4-.85a1.5,1.5,0,0,1,.81-2h0a1.5,1.5,0,0,1,2,.8h0a1.5,1.5,0,0,1-.81,2h0a1.48,1.48,0,0,1-.58.12h0A1.51,1.51,0,0,1,74.63,105.7Zm-46.9-2.35h0a1.51,1.51,0,0,1-.55-2h0a1.5,1.5,0,0,1,2.05-.55h0a1.49,1.49,0,0,1,.55,2h0a1.5,1.5,0,0,1-1.3.75h0A1.59,1.59,0,0,1,27.73,103.35Zm53.29-.6a1.5,1.5,0,0,1,.55-2.05h0a1.5,1.5,0,0,1,2,.55h0a1.49,1.49,0,0,1-.55,2h0a1.53,1.53,0,0,1-.75.2h0A1.5,1.5,0,0,1,81,102.75ZM21.71,99.33a1.51,1.51,0,0,1-.28-2.11h0a1.51,1.51,0,0,1,2.11-.27h0a1.51,1.51,0,0,1,.28,2.1h0a1.53,1.53,0,0,1-1.2.59h0A1.51,1.51,0,0,1,21.71,99.33ZM87,99a1.5,1.5,0,0,1,.27-2.1h0a1.52,1.52,0,0,1,2.11.27h0a1.51,1.51,0,0,1-.28,2.11h0a1.47,1.47,0,0,1-.91.31h0A1.47,1.47,0,0,1,87,99ZM16.27,94.56h0a1.5,1.5,0,0,1,0-2.12h0a1.5,1.5,0,0,1,2.13,0h0a1.51,1.51,0,0,1,0,2.12h0a1.53,1.53,0,0,1-1.06.44h0A1.49,1.49,0,0,1,16.27,94.56Zm76.13-.07a1.49,1.49,0,0,1,0-2.12h0a1.49,1.49,0,0,1,2.12,0h0a1.49,1.49,0,0,1,0,2.12h0a1.51,1.51,0,0,1-1.06.44h0A1.45,1.45,0,0,1,92.4,94.49ZM11.49,89.13A1.5,1.5,0,0,1,11.76,87h0a1.5,1.5,0,0,1,2.1.28h0a1.49,1.49,0,0,1-.27,2.1h0a1.47,1.47,0,0,1-.91.31h0A1.5,1.5,0,0,1,11.49,89.13Zm85.7.2a1.51,1.51,0,0,1-.28-2.11h0A1.51,1.51,0,0,1,99,86.95h0a1.5,1.5,0,0,1,.27,2.1h0a1.48,1.48,0,0,1-1.19.59h0A1.47,1.47,0,0,1,97.19,89.33ZM7.45,83.12h0a1.51,1.51,0,0,1,.55-2H8a1.51,1.51,0,0,1,2,.55h0a1.51,1.51,0,0,1-.55,2.05h0a1.53,1.53,0,0,1-.75.2h0A1.5,1.5,0,0,1,7.45,83.12Zm93.82.46a1.49,1.49,0,0,1-.55-2h0a1.51,1.51,0,0,1,2.05-.55h0a1.51,1.51,0,0,1,.55,2h0a1.48,1.48,0,0,1-1.3.75h0A1.42,1.42,0,0,1,101.27,83.58Zm-97-6.94a1.5,1.5,0,0,1,.8-2H5a1.5,1.5,0,0,1,2,.81H7a1.51,1.51,0,0,1-.81,2h0a1.5,1.5,0,0,1-.58.12h0A1.5,1.5,0,0,1,4.24,76.64Zm100.32.71a1.5,1.5,0,0,1-.81-2h0a1.51,1.51,0,0,1,2-.81h0a1.49,1.49,0,0,1,.81,2h0a1.5,1.5,0,0,1-1.38.93h0A1.5,1.5,0,0,1,104.56,77.35ZM1.9,69.79A1.5,1.5,0,0,1,3,68H3A1.49,1.49,0,0,1,4.79,69h0a1.49,1.49,0,0,1-1.05,1.84h0a1.35,1.35,0,0,1-.39,0h0A1.49,1.49,0,0,1,1.9,69.79Zm105.11,1a1.49,1.49,0,0,1-1.06-1.83h0a1.52,1.52,0,0,1,1.84-1.07h0a1.51,1.51,0,0,1,1.06,1.84h0a1.5,1.5,0,0,1-1.45,1.11h0A1.31,1.31,0,0,1,107,70.74ZM.48,62.7A1.5,1.5,0,0,1,1.77,61h0A1.5,1.5,0,0,1,3.45,62.3h0A1.51,1.51,0,0,1,2.16,64H2A1.51,1.51,0,0,1,.48,62.7Zm108.09,1.17a1.49,1.49,0,0,1-1.29-1.68h0A1.5,1.5,0,0,1,109,60.9h0a1.5,1.5,0,0,1,1.29,1.68h0a1.49,1.49,0,0,1-1.48,1.31h0ZM0,55.48A1.51,1.51,0,0,1,1.5,54h0A1.5,1.5,0,0,1,3,55.47H3A1.5,1.5,0,0,1,1.5,57h0A1.5,1.5,0,0,1,0,55.48Zm107.72-.12h0a.33.33,0,0,1,0-.1h0a.48.48,0,0,1,0-.12h0a1.5,1.5,0,0,1,1.49-1.5h0a1.49,1.49,0,0,1,1.51,1.49h0v.12h0v.11h0a1.5,1.5,0,0,1-1.5,1.5h0A1.5,1.5,0,0,1,107.72,55.36Zm-106-5.43a1.49,1.49,0,0,1-1.3-1.68h0A1.5,1.5,0,0,1,2.13,47h0a1.49,1.49,0,0,1,1.29,1.68h0A1.5,1.5,0,0,1,1.94,50h0Zm105.5-1.62h0a1.51,1.51,0,0,1,1.29-1.69h0a1.5,1.5,0,0,1,1.68,1.29h0a1.5,1.5,0,0,1-1.28,1.69h-.21A1.5,1.5,0,0,1,107.25,48.31ZM2.9,43a1.51,1.51,0,0,1-1.06-1.84h0a1.5,1.5,0,0,1,1.83-1.07h0a1.52,1.52,0,0,1,1.07,1.84h0A1.51,1.51,0,0,1,3.29,43h0A1.75,1.75,0,0,1,2.9,43Zm103-1.39a1.51,1.51,0,0,1,1.06-1.84h0a1.5,1.5,0,0,1,1.84,1.06h0a1.5,1.5,0,0,1-1.06,1.84h0a1.75,1.75,0,0,1-.39,0h0A1.51,1.51,0,0,1,105.89,41.6ZM5,36.24a1.49,1.49,0,0,1-.82-2h0a1.5,1.5,0,0,1,2-.82h0a1.5,1.5,0,0,1,.81,2h0a1.5,1.5,0,0,1-1.39.93h0A1.42,1.42,0,0,1,5,36.24Zm98.7-1.11a1.5,1.5,0,0,1,.8-2h0a1.51,1.51,0,0,1,2,.8h0a1.5,1.5,0,0,1-.81,2h0a1.47,1.47,0,0,1-.58.12h0A1.51,1.51,0,0,1,103.67,35.13ZM7.89,29.83a1.5,1.5,0,0,1-.55-2h0a1.51,1.51,0,0,1,2-.56h0a1.5,1.5,0,0,1,.55,2.05h0a1.5,1.5,0,0,1-1.3.75h0A1.48,1.48,0,0,1,7.89,29.83ZM100.62,29a1.49,1.49,0,0,1,.54-2.05h0a1.49,1.49,0,0,1,2.05.54h0a1.5,1.5,0,0,1-.54,2.05h0a1.5,1.5,0,0,1-.76.2h0A1.49,1.49,0,0,1,100.62,29Zm-89-5.15a1.49,1.49,0,0,1-.28-2.1h0a1.5,1.5,0,0,1,2.1-.28h0a1.5,1.5,0,0,1,.28,2.1h0a1.49,1.49,0,0,1-1.19.59h0A1.47,1.47,0,0,1,11.64,23.86Zm85.15-.52a1.5,1.5,0,0,1,.27-2.11h0a1.49,1.49,0,0,1,2.1.27h0a1.49,1.49,0,0,1-.27,2.1h0a1.42,1.42,0,0,1-.91.32h0A1.49,1.49,0,0,1,96.79,23.34ZM16.12,18.43a1.5,1.5,0,0,1,0-2.12h0a1.5,1.5,0,0,1,2.12,0h0a1.49,1.49,0,0,1,0,2.12h0a1.46,1.46,0,0,1-1.06.45h0A1.51,1.51,0,0,1,16.12,18.43Zm76.13-.22a1.51,1.51,0,0,1,0-2.13h0a1.5,1.5,0,0,1,2.12,0h0a1.5,1.5,0,0,1,0,2.12h0a1.53,1.53,0,0,1-1.07.44h0A1.51,1.51,0,0,1,92.25,18.21Zm-71-4.58a1.52,1.52,0,0,1,.27-2.11h0a1.51,1.51,0,0,1,2.11.27h0a1.51,1.51,0,0,1-.27,2.11h0a1.52,1.52,0,0,1-.92.31h0A1.51,1.51,0,0,1,21.27,13.63Zm65.82.08h0a1.49,1.49,0,0,1-.29-2.1h0a1.5,1.5,0,0,1,2.1-.29h0a1.52,1.52,0,0,1,.28,2.11h0A1.53,1.53,0,0,1,88,14h0A1.55,1.55,0,0,1,87.09,13.71ZM27,9.53a1.51,1.51,0,0,1,.54-2.05h0a1.51,1.51,0,0,1,2,.54h0A1.51,1.51,0,0,1,29,10.08h0a1.53,1.53,0,0,1-.75.2h0A1.51,1.51,0,0,1,27,9.53Zm54.39.39a1.49,1.49,0,0,1-.55-2h0a1.48,1.48,0,0,1,2-.55h0a1.49,1.49,0,0,1,.56,2h0a1.49,1.49,0,0,1-1.3.76h0A1.56,1.56,0,0,1,81.39,9.92ZM33.22,6.22a1.5,1.5,0,0,1,.8-2h0a1.49,1.49,0,0,1,2,.81h0a1.49,1.49,0,0,1-.8,2h0a1.5,1.5,0,0,1-.58.11h0A1.49,1.49,0,0,1,33.22,6.22Zm42,.68A1.49,1.49,0,0,1,74.42,5h0a1.5,1.5,0,0,1,2-.82h0a1.5,1.5,0,0,1,.82,2h0A1.5,1.5,0,0,1,75.81,7h0A1.46,1.46,0,0,1,75.24,6.9ZM39.81,3.75a1.51,1.51,0,0,1,1.06-1.84h0A1.51,1.51,0,0,1,42.71,3h0a1.5,1.5,0,0,1-1.06,1.84h0a1.31,1.31,0,0,1-.39,0h0A1.5,1.5,0,0,1,39.81,3.75Zm28.94,1a1.51,1.51,0,0,1-1.07-1.84h0a1.5,1.5,0,0,1,1.83-1.07h0a1.51,1.51,0,0,1,1.07,1.84h0a1.51,1.51,0,0,1-1.45,1.12h0A1.64,1.64,0,0,1,68.75,4.73ZM46.68,2.17A1.5,1.5,0,0,1,48,.49h0a1.5,1.5,0,0,1,1.68,1.29h0a1.5,1.5,0,0,1-1.29,1.68h-.2A1.49,1.49,0,0,1,46.68,2.17ZM62,3.42a1.5,1.5,0,0,1-1.3-1.68h0A1.5,1.5,0,0,1,62.41.44h0a1.51,1.51,0,0,1,1.3,1.68h0a1.51,1.51,0,0,1-1.49,1.31H62ZM53.69,1.5A1.5,1.5,0,0,1,55.19,0h0a1.5,1.5,0,0,1,1.5,1.49h0A1.5,1.5,0,0,1,55.2,3h0A1.5,1.5,0,0,1,53.69,1.5Z M55.36,102.69a47.81,47.81,0,0,1-4.92-.26l20.7,35.27,6.5-16.57,17.64,2.4-16-27.32A47,47,0,0,1,55.36,102.69Z M55.36,102.69A47,47,0,0,1,31.47,96.2l-16,27.32,17.64-2.4,6.5,16.57,20.7-35.27A47.81,47.81,0,0,1,55.36,102.69Z M55.29,6.36a49,49,0,1,0,49,49A49.05,49.05,0,0,0,55.29,6.36Zm7.51,94.38a46.08,46.08,0,0,1-7.16.61l45.64-46.14s0-.09,0-.13,0,.19,0,.29a46.17,46.17,0,0,1-.53,7ZM100.45,64.1a45.6,45.6,0,0,1-3,9.67L74.17,97.29a45.59,45.59,0,0,1-9.65,3.14ZM93.94,30.46a46,46,0,0,1,2.41,4.19L35,96.64a46,46,0,0,1-4.21-2.36ZM30,93.73a46.27,46.27,0,0,1-3.79-2.79L90.55,25.85a46.26,46.26,0,0,1,2.84,3.75ZM96.82,35.59a45.71,45.71,0,0,1,1.92,4.68L40.68,99A45.68,45.68,0,0,1,36,97.1Zm2.28,5.74a45.58,45.58,0,0,1,1.35,5.26L47,100.6a45.65,45.65,0,0,1-5.28-1.28Zm1.56,6.46a46,46,0,0,1,.59,6l-47,47.51a46.13,46.13,0,0,1-6-.52ZM65.85,10.6a45.61,45.61,0,0,1,5.07,1.5L12.2,71.45a45.59,45.59,0,0,1-1.56-5ZM10.38,65.26a45.77,45.77,0,0,1-.89-5.73L59,9.52a45.85,45.85,0,0,1,5.75.81ZM71.94,12.49a45.78,45.78,0,0,1,4.52,2.05L14.7,77a45.8,45.8,0,0,1-2.1-4.5ZM77.38,15a46.09,46.09,0,0,1,4.06,2.52L17.77,81.91a46.08,46.08,0,0,1-2.56-4ZM50.93,9.57l-1.4.16Zm-1.56.18L9.63,49.93a45.66,45.66,0,0,1,1.82-8.46l29.47-29.8A45.62,45.62,0,0,1,49.36,9.76Zm-9,2.11-1.26.45Zm-1.62.59L12.2,39.28A46.23,46.23,0,0,1,38.74,12.45ZM12.06,39.66l0-.11ZM9.62,50q-.09.74-.15,1.48C9.51,51,9.56,50.48,9.62,50Zm-.15,1.52L51,9.57c1.43-.13,2.88-.21,4.34-.21q1.19,0,2.36.06L9.39,58.21c-.06-.94-.1-1.89-.1-2.85C9.29,54.06,9.36,52.78,9.47,51.51Zm8.89,31.23L82.27,18.13a46.34,46.34,0,0,1,3.65,2.94L21.33,86.35A46.36,46.36,0,0,1,18.36,82.74ZM22,87.08,86.65,21.75a46.39,46.39,0,0,1,3.24,3.35L25.4,90.28A46.4,46.4,0,0,1,22,87.08ZM74.49,97.15c.6-.27,1.18-.56,1.76-.86Q75.39,96.73,74.49,97.15ZM76.89,96,96.11,76.53A46.31,46.31,0,0,1,76.89,96ZM97.23,74.22q-.42.94-.89,1.85Q96.81,75.16,97.23,74.22Z M55.36,92.86a37.5,37.5,0,1,1,37.5-37.5A37.54,37.54,0,0,1,55.36,92.86Z M55.36,20.36a35,35,0,1,1-35,35,35,35,0,0,1,35-35m0-5a40,40,0,1,0,40,40,40,40,0,0,0-40-40Z M55.31,20.38l-.79,0L20.32,55c0,.14,0,.27,0,.41,0,.34,0,.67,0,1l35.6-36Z M61.88,21,21,62.33c.08.39.17.77.26,1.16L63,21.25Z M68.07,22.79,22.86,68.49q.2.5.42,1L69.08,23.2Z M73.42,25.43,25.56,73.81l.55.86L74.28,26Z M78.05,28.79,29,78.41l.67.75L78.81,29.44Z M82,32.8,33,82.36l.79.62L82.68,33.58Z M85.38,37.47,37.73,85.64l.9.52L85.89,38.37C85.73,38.07,85.56,37.77,85.38,37.47Z M88,42.87,43.14,88.21l1,.36L88.37,43.9Q88.19,43.38,88,42.87Z M89.74,49.14,49.44,89.88l1.23.18L89.95,50.36C89.89,50,89.82,49.55,89.74,49.14Z M56.95,90.34c.51,0,1-.06,1.51-.11L90.19,58.16c0-.5.07-1,.09-1.51Z M69,87.58,87.65,68.76c.31-.75.59-1.51.85-2.28l-21.73,22C67.54,88.18,68.3,87.9,69,87.58Z M45.08,21.91,21.73,45.5q-.28,1-.51,1.93L47,21.38C46.35,21.54,45.71,21.71,45.08,21.91Z"]};
	var ms_dichte_hoch = { prefix: 'fas', iconName: 'ms_dichte_hoch', icon: [100 , 100 , [], "s_dichte_hoc", "M68.6,105.74H58.17A4.16,4.16,0,0,0,54,109.9v15a4.16,4.16,0,0,0,4.16,4.16h1V151a3.21,3.21,0,0,0,3.21,3.21h4.88A3.21,3.21,0,0,0,70.48,151V131.93a10.8,10.8,0,0,1-1.88-6.08ZM64.83,91a6.48,6.48,0,0,0-6.48,6.48,6.45,6.45,0,0,0,10.49,5.06,10.85,10.85,0,0,1,2.46-4.88c0-.06,0-.12,0-.17A6.48,6.48,0,0,0,64.83,91ZM179.6,105.74H169.18v20.12a10.79,10.79,0,0,1-1.88,6.08V151a3.21,3.21,0,0,0,3.21,3.21h4.88a3.21,3.21,0,0,0,3.21-3.21V129.09h1a4.16,4.16,0,0,0,4.16-4.16v-15A4.16,4.16,0,0,0,179.6,105.74ZM172.94,104a6.48,6.48,0,1,0-6.48-6.48c0,.06,0,.11,0,.17a10.82,10.82,0,0,1,2.46,4.89A6.41,6.41,0,0,0,172.94,104ZM94.36,99.73c0-.25,0-.49,0-.74H79.48a5.83,5.83,0,0,0-5.82,5.83v21a5.83,5.83,0,0,0,5.82,5.83h1.42v30.68a4.49,4.49,0,0,0,4.49,4.49h6.83a4.49,4.49,0,0,0,4.49-4.49V134.06a12.46,12.46,0,0,1-2.34-7.27ZM88.79,78.37a9.07,9.07,0,1,0,9.07,9.07A9.08,9.08,0,0,0,88.79,78.37ZM158.3,99H143.38c0,.25,0,.49,0,.74v27.06a12.46,12.46,0,0,1-2.34,7.27v28.31a4.49,4.49,0,0,0,4.49,4.49h6.83a4.49,4.49,0,0,0,4.49-4.49V131.68h1.41a5.83,5.83,0,0,0,5.83-5.83v-21A5.82,5.82,0,0,0,158.3,99Zm-27.43-6.75h-24a7.49,7.49,0,0,0-7.49,7.49v27.06a7.49,7.49,0,0,0,7.49,7.49h1.82v39.45a5.77,5.77,0,0,0,5.77,5.78h8.78a5.77,5.77,0,0,0,5.78-5.78V134.27h1.82a7.49,7.49,0,0,0,7.49-7.49V99.73A7.49,7.49,0,0,0,130.87,92.24Zm-18.32-5.06a11.66,11.66,0,1,0-5.33-9.79A11.61,11.61,0,0,0,112.55,87.18ZM149,96.51a9.09,9.09,0,1,0-6.34-2.58A9,9,0,0,0,149,96.51Z M68.6,105.74H58.17A4.16,4.16,0,0,0,54,109.9v15a4.16,4.16,0,0,0,4.16,4.16h1V151a3.21,3.21,0,0,0,3.21,3.21h4.88A3.21,3.21,0,0,0,70.48,151V131.93a10.8,10.8,0,0,1-1.88-6.08ZM64.83,91a6.48,6.48,0,0,0-6.48,6.48,6.45,6.45,0,0,0,10.49,5.06,10.85,10.85,0,0,1,2.46-4.88c0-.06,0-.12,0-.17A6.48,6.48,0,0,0,64.83,91ZM179.6,105.74H169.18v20.12a10.79,10.79,0,0,1-1.88,6.08V151a3.21,3.21,0,0,0,3.21,3.21h4.88a3.21,3.21,0,0,0,3.21-3.21V129.09h1a4.16,4.16,0,0,0,4.16-4.16v-15A4.16,4.16,0,0,0,179.6,105.74ZM172.94,104a6.48,6.48,0,1,0-6.48-6.48c0,.06,0,.11,0,.17a10.82,10.82,0,0,1,2.46,4.89A6.41,6.41,0,0,0,172.94,104ZM94.36,99.73c0-.25,0-.49,0-.74H79.48a5.83,5.83,0,0,0-5.82,5.83v21a5.83,5.83,0,0,0,5.82,5.83h1.42v30.68a4.49,4.49,0,0,0,4.49,4.49h6.83a4.49,4.49,0,0,0,4.49-4.49V134.06a12.46,12.46,0,0,1-2.34-7.27ZM88.79,78.37a9.07,9.07,0,1,0,9.07,9.07A9.08,9.08,0,0,0,88.79,78.37ZM158.3,99H143.38c0,.25,0,.49,0,.74v27.06a12.46,12.46,0,0,1-2.34,7.27v28.31a4.49,4.49,0,0,0,4.49,4.49h6.83a4.49,4.49,0,0,0,4.49-4.49V131.68h1.41a5.83,5.83,0,0,0,5.83-5.83v-21A5.82,5.82,0,0,0,158.3,99Zm-27.43-6.75h-24a7.49,7.49,0,0,0-7.49,7.49v27.06a7.49,7.49,0,0,0,7.49,7.49h1.82v39.45a5.77,5.77,0,0,0,5.77,5.78h8.78a5.77,5.77,0,0,0,5.78-5.78V134.27h1.82a7.49,7.49,0,0,0,7.49-7.49V99.73A7.49,7.49,0,0,0,130.87,92.24Zm-18.32-5.06a11.66,11.66,0,1,0-5.33-9.79A11.61,11.61,0,0,0,112.55,87.18ZM149,96.51a9.09,9.09,0,1,0-6.34-2.58A9,9,0,0,0,149,96.51Z"]};
	var ms_dichte_mittel = { prefix: 'fas', iconName: 'ms_dichte_mittel', icon: [100 , 100 , [], "s_dichte_mitte", "M94.36,99.73c0-.25,0-.49,0-.74H79.48a5.83,5.83,0,0,0-5.82,5.83v21a5.83,5.83,0,0,0,5.82,5.83h1.42v30.68a4.49,4.49,0,0,0,4.49,4.49h6.83a4.49,4.49,0,0,0,4.49-4.49V134.06a12.46,12.46,0,0,1-2.34-7.27ZM88.79,78.37a9.07,9.07,0,1,0,9.07,9.07A9.08,9.08,0,0,0,88.79,78.37ZM158.3,99H143.38c0,.25,0,.49,0,.74v27.06a12.46,12.46,0,0,1-2.34,7.27v28.31a4.49,4.49,0,0,0,4.49,4.49h6.83a4.49,4.49,0,0,0,4.49-4.49V131.68h1.41a5.83,5.83,0,0,0,5.83-5.83v-21A5.82,5.82,0,0,0,158.3,99Zm-27.43-6.75h-24a7.49,7.49,0,0,0-7.49,7.49v27.06a7.49,7.49,0,0,0,7.49,7.49h1.82v39.45a5.77,5.77,0,0,0,5.77,5.78h8.78a5.77,5.77,0,0,0,5.78-5.78V134.27h1.82a7.49,7.49,0,0,0,7.49-7.49V99.73A7.49,7.49,0,0,0,130.87,92.24Zm-18.32-5.06a11.66,11.66,0,1,0-5.33-9.79A11.61,11.61,0,0,0,112.55,87.18ZM149,96.51a9.09,9.09,0,1,0-6.34-2.58A9,9,0,0,0,149,96.51Z M94.36,99.73c0-.25,0-.49,0-.74H79.48a5.83,5.83,0,0,0-5.82,5.83v21a5.83,5.83,0,0,0,5.82,5.83h1.42v30.68a4.49,4.49,0,0,0,4.49,4.49h6.83a4.49,4.49,0,0,0,4.49-4.49V134.06a12.46,12.46,0,0,1-2.34-7.27ZM88.79,78.37a9.07,9.07,0,1,0,9.07,9.07A9.08,9.08,0,0,0,88.79,78.37ZM158.3,99H143.38c0,.25,0,.49,0,.74v27.06a12.46,12.46,0,0,1-2.34,7.27v28.31a4.49,4.49,0,0,0,4.49,4.49h6.83a4.49,4.49,0,0,0,4.49-4.49V131.68h1.41a5.83,5.83,0,0,0,5.83-5.83v-21A5.82,5.82,0,0,0,158.3,99Zm-27.43-6.75h-24a7.49,7.49,0,0,0-7.49,7.49v27.06a7.49,7.49,0,0,0,7.49,7.49h1.82v39.45a5.77,5.77,0,0,0,5.77,5.78h8.78a5.77,5.77,0,0,0,5.78-5.78V134.27h1.82a7.49,7.49,0,0,0,7.49-7.49V99.73A7.49,7.49,0,0,0,130.87,92.24Zm-18.32-5.06a11.66,11.66,0,1,0-5.33-9.79A11.61,11.61,0,0,0,112.55,87.18ZM149,96.51a9.09,9.09,0,1,0-6.34-2.58A9,9,0,0,0,149,96.51Z"]};
	var ms_firma = { prefix: 'fas', iconName: 'ms_firma', icon: [100 , 100 , [], "s_firm", "M42.5 53.7h10.6v10.7H42.5zm0-16.1h10.6v10.7H42.5zM31.9 16.1H21.3V5.4h10.6zm0 16.1H21.3V21.5h10.6zM21.3 48.3V37.6h10.6v10.7m0 16.1H21.3V53.7h10.6zM5.3 53.7H16v10.7H5.3zm0-16.1H16v10.7H5.3zm0-16.1H16v10.7H5.3zm0-16.1H16v10.7H5.3zM1 0a.92.92 0 0 0-1 .9v83.2h59.4V33.3a1 1 0 0 0-1-1.1H37.2V1.1A1 1 0 0 0 36.1 0H1.7"]};
	var ms_gewitter = { prefix: 'fas', iconName: 'ms_gewitter', icon: [100 , 100 , [], "s_gewitte", "M69.994 25.734c-1.393 0-2.738.18-4.066.407C60.703 16.864 50.445 9.85 38.004 9.85c-17.667 0-31.99 14.225-31.99 31.773 0 17.55 14.322 31.774 31.99 31.774h31.99c13.25 0 23.992-10.67 23.992-23.83 0-23.684-24.79-23.83-23.992-23.83z M73.65 59.147H59.88l11.802-19.38H52.01l-9.836 27.13h12.984l-7.082 23.255"]};
	var ms_hansestadt = { prefix: 'fas', iconName: 'ms_hansestadt', icon: [100 , 100 , [], "s_hansestad", "M29.2,28.87a44.55,44.55,0,0,1-11.83-1.95A20.72,20.72,0,0,0,12,26.21,19.42,19.42,0,0,0,.33,30a24.63,24.63,0,0,1,9.72-2,29.28,29.28,0,0,1,8.56,1.37,26.67,26.67,0,0,0,8.47,1.4,21.57,21.57,0,0,0,7.55-1.29,39,39,0,0,1-4.5-.62Z M17.6,26.09h0a52.21,52.21,0,0,0,8.58,1.75l-.85-.28a42.05,42.05,0,0,0-8.92-1.76c.4.08.79.17,1.18.28Z M23.94,23a29.14,29.14,0,0,0-7.54-1A27.28,27.28,0,0,0,0,27.34,34.58,34.58,0,0,1,13.66,24.5a41.12,41.12,0,0,1,12,1.93,37.48,37.48,0,0,0,11.9,2c6.78,0,13.55-2,18.39-6.67a29.78,29.78,0,0,1-15.41,4A62.59,62.59,0,0,1,23.94,23Z M7.44,22.18a29.32,29.32,0,0,1,9-1.39,30.32,30.32,0,0,1,7.85,1h0a62.24,62.24,0,0,0,16.3,2.69,30.44,30.44,0,0,0,9-1.27L59.84,3.44S38.18,1.25.33,19.84v5.42H.88A27.74,27.74,0,0,1,7.44,22.18ZM31.92,11.11a1.6,1.6,0,1,1-1.6,1.6A1.6,1.6,0,0,1,31.92,11.11Zm-5.07,1.6a1.6,1.6,0,1,1-1.6,1.6A1.6,1.6,0,0,1,26.85,12.71ZM22,14.31a1.6,1.6,0,1,1-1.6,1.6A1.6,1.6,0,0,1,22,14.31Z M12.88,3.2l.49,1.61a40.56,40.56,0,0,1,6.16-2A1,1,0,0,1,20,4.73a39,39,0,0,0-6,2l1.42,4.66a108.9,108.9,0,0,1,27.2-8L28.41.19s-10.56-1.33-20,3A8.9,8.9,0,0,0,12.88,3.2Z"]};
	var ms_n_gewitter = { prefix: 'fas', iconName: 'ms_n_gewitter', icon: [100 , 100 , [], "s_n_gewitte", "M66.7 27c-4.613-4.823-7.375-16.39-5.978-22-6.442.988-21.035 5.632-19.924 26 3 1.07 8.53 6.388 11.955 8l9.962 6c2.42.773 10.733 9.92 14.202 7.315 6.418-4.818 10.6-13.222 13.712-21.986C80.724 32.743 72.84 33.42 66.7 27z M62.2 41.82c-1.15 0-2.26.15-3.356.336-4.315-7.66-12.784-13.45-23.057-13.45-14.588 0-26.414 11.742-26.414 26.228s11.826 26.23 26.414 26.23H62.2c10.942 0 19.81-8.808 19.81-19.673 0-19.55-20.468-19.67-19.81-19.67z M65.22 69.404H53.85l9.744-16H47.35l-8.12 22.398h10.72L44.104 95"]};
	var ms_n_klar = { prefix: 'fas', iconName: 'ms_n_klar', icon: [100 , 100 , [], "s_n_kla", "M48.994 48.2c-6.81-6.886-4.53-23.862-2.704-31.04-8.415 1.264-31.534 9.4-30.084 35.457C17.383 67.274 28.22 79.423 42.56 82.16a37.38 37.38 0 0 0 6.992.68c18.464 0 28.044-13.442 34.308-30.717-12.936 3.09-25.796 5.246-34.866-3.923z"]};
	var ms_n_nebel = { prefix: 'fas', iconName: 'ms_n_nebel', icon: [100 , 100 , [], "s_n_nebe", "M66.57 30.424c-1.153 0-2.268.148-3.37.335-4.534-7.983-13.193-13.386-23.143-13.386-14.643 0-26.514 11.686-26.514 26.102H85.3c-2.73-7.6-10.074-13.052-18.73-13.052zM16.858 56.526h66.285c1.83 0 3.314-1.46 3.314-3.263 0-1.802-1.484-3.263-3.314-3.263H16.857c-1.83 0-3.314 1.46-3.314 3.263 0 1.802 1.484 3.263 3.314 3.263zm66.286 6.525H16.857c-1.83 0-3.314 1.462-3.314 3.264s1.484 3.263 3.314 3.263h66.285c1.83 0 3.314-1.46 3.314-3.263s-1.483-3.263-3.313-3.263zm0 13.052H16.857c-1.83 0-3.314 1.46-3.314 3.263 0 1.802 1.484 3.263 3.314 3.263h66.285c1.83 0 3.314-1.46 3.314-3.263s-1.483-3.263-3.313-3.263z"]};
	var ms_notification_bell = { prefix: 'fas', iconName: 'ms_notification_bell', icon: [100 , 100 , [], "s_notification_bel", "M27.15,39.4c-0.4,2.5 -2.6,4.4 -5.2,4.4c-2.6,0 -4.7,-1.9 -5.1,-4.4l10.3,0Zm-19.2,-8.1l28.1,0l2.5,6.7l-33.1,0l2.5,-6.7Zm16,-27.4c0.3,-0.4 0.4,-0.8 0.4,-1.3c0,-1.3 -1.1,-2.4 -2.4,-2.4c-1.3,0 -2.4,1.1 -2.4,2.4c0,0.5 0.1,0.9 0.4,1.3c-6.8,1 -12.1,6.8 -12.1,13.9l0,12.1l28.1,0l0,-12.1c0.1,-7.1 -5.2,-12.9 -12,-13.9Zm7.9,16.3c-0.8,0 -1.5,-0.7 -1.5,-1.5c0,-3.8 -2.2,-7.5 -5.3,-8.9c-0.7,-0.3 -1,-1.2 -0.7,-1.9c0.3,-0.7 1.2,-1 1.9,-0.7c4.2,1.9 7,6.6 7,11.6c0.1,0.7 -0.6,1.4 -1.4,1.4Z"]};
	var ms_regenwahrscheinlichkeit = { prefix: 'fas', iconName: 'ms_regenwahrscheinlichkeit', icon: [100 , 100 , [], "s_regenwahrscheinlichkei", "M50 23.6c-19.8 0-35.9 14.1-35.9 25.6 0-2.7 4-4.8 9-4.8s9 2.1 9 4.8c0-2.7 4-4.8 9-4.8 3 0 5.7.8 7.3 2.1v13.9h-1.6v6.4c0 1.8-1.5 3.2-3.3 3.2s-3.3-1.4-3.3-3.2-1.5-3.2-3.3-3.2-3.3 1.4-3.3 3.2c0 5.3 4.4 9.6 9.8 9.6s9.8-4.3 9.8-9.6v-6.4h-1.6V46.5c1.6-1.2 4.3-2.1 7.3-2.1 5 0 9 2.1 9 4.8 0-2.7 4-4.8 9-4.8s9 2.1 9 4.8C85.8 37.7 69.8 23.6 50 23.6z"]};
	var ms_safari_pin_icon = { prefix: 'fas', iconName: 'ms_safari_pin_icon', icon: [100 , 100 , [], "s_safari_pin_ico", "M84,35.3c0,0.4-0.3,0.7-0.7,0.7H26.7c-0.4,0-0.7-0.3-0.7-0.7V-5.3C26-5.7,26.3-6,26.7-6h56.6C83.7-6,84-5.7,84-5.3 C84-5.3,84,35.3,84,35.3z M84.4-14H25.6c-4.2,0-7.6,3.4-7.6,7.6v43.6c0,4.2,3.4,7.6,7.6,7.6h27c0.4,0,0.7,0.3,0.7,0.7v6.8c0,0.4,0.3,0.7,0.7,0.7l0,0 H56l0,0c0.4,0,0.7-0.3,0.7-0.7v-6.8c0-0.4,0.3-0.7,0.7-0.7h27c4.2,0,7.6-3.4,7.6-7.6V-6.4C92.1-10.6,88.7-14,84.4-14z M89.3,36.9 c0,2.4-2,4.4-4.4,4.4H25.7c-2.4,0-4.4-2-4.4-4.4V-6.3c0-2.4,2-4.4,4.4-4.4h59c2.4,0,4.4,2,4.4,4.4L89.3,36.9L89.3,36.9z"]};
	var ms_sonnenstunden = { prefix: 'fas', iconName: 'ms_sonnenstunden', icon: [100 , 100 , [], "s_sonnenstunde", "M50 16.03c-18.778 0-34 15.21-34 33.97 0 18.762 15.222 33.97 34 33.97S84 68.762 84 50c0-18.76-15.222-33.97-34-33.97zm0 60.954C35.108 76.984 22.992 64.88 22.992 50c0-14.878 12.116-26.983 27.008-26.983S77.01 35.122 77.01 50C77.007 64.88 64.89 76.984 50 76.984zm1.82-46.395h-4.856v20.527L64.814 66.4l3.158-3.682-16.15-13.834V30.59z"]};
	var ms_sortierfunktion_hover = { prefix: 'fas', iconName: 'ms_sortierfunktion_hover', icon: [100 , 100 , [], "s_sortierfunktion_hove", "M18.9 2H1c-.6 0-1-.4-1-1s.4-1 1-1h17.9c.6 0 1 .4 1 1s-.4 1-1 1zM19.6 9.7c-.4-.4-1-.4-1.4 0L16.8 11V4.7c0-.6-.4-1-1-1s-1 .4-1 1V11l-1.4-1.4c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l3.1 2.9c.2.2.4.3.7.3.2 0 .5-.1.7-.3l3.1-2.9c.4-.3.4-.9 0-1.3zM10.8 8.1H1c-.6 0-1-.4-1-1s.4-1 1-1h9.8c.6 0 1 .4 1 1s-.4 1-1 1zM8.5 14.3H1c-.6 0-1-.4-1-1s.4-1 1-1h7.5c.6 0 1 .4 1 1s-.4 1-1 1z"]};
	var ms_sortierfunktion = { prefix: 'fas', iconName: 'ms_sortierfunktion', icon: [100 , 100 , [], "s_sortierfunktio", "M18.9 2H1c-.6 0-1-.4-1-1s.4-1 1-1h17.9c.6 0 1 .4 1 1s-.4 1-1 1zM19.6 9.7c-.4-.4-1-.4-1.4 0L16.8 11V4.7c0-.6-.4-1-1-1s-1 .4-1 1V11l-1.4-1.4c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l3.1 2.9c.2.2.4.3.7.3.2 0 .5-.1.7-.3l3.1-2.9c.4-.3.4-.9 0-1.3zM10.8 8.1H1c-.6 0-1-.4-1-1s.4-1 1-1h9.8c.6 0 1 .4 1 1s-.4 1-1 1zM8.5 14.3H1c-.6 0-1-.4-1-1s.4-1 1-1h7.5c.6 0 1 .4 1 1s-.4 1-1 1z"]};
	var ms_t_bedeckt = { prefix: 'fas', iconName: 'ms_t_bedeckt', icon: [100 , 100 , [], "s_t_bedeck", "M77.94 46.035c-.453 0-.897.037-1.343.067-2.7-5.84-7.432-10.572-13.306-13.306.446 1.764.708 3.6.708 5.5 0 .832-.052 1.652-.14 2.462L15.575 60.635a16.35 16.35 0 0 1-6.11-2.62 18.969 18.969 0 0 0-1.383 7.112c0 10.657 8.754 19.297 19.553 19.297h19.45v-.036c.486-.025.964-.077 1.434-.15 1.02.114 2.055.186 3.106.186H78.94v-.05c10.274-.518 18.45-8.877 18.45-19.144 0-10.6-8.708-19.195-19.45-19.195z M40.977 15.577c-9.31 0-17.307 5.463-20.935 13.31-.374-.027-.746-.057-1.127-.057-9.006 0-16.306 7.205-16.306 16.092 0 8.608 6.853 15.616 15.466 16.05v.042h22.9c12.714 0 23.02-10.17 23.02-22.718.002-12.548-10.305-22.72-23.02-22.72z"]};
	var ms_t_bewoelkt = { prefix: 'fas', iconName: 'ms_t_bewoelkt', icon: [100 , 100 , [], "s_t_bewoelk", "M29.5 67.62l-4.703 4.655a3.267 3.267 0 0 0 0 4.656 3.348 3.348 0 0 0 4.704 0l4.705-4.655a3.267 3.267 0 0 0 0-4.656 3.348 3.348 0 0 0-4.704 0zm-3.09-18.624c0-1.818-1.488-3.292-3.325-3.292h-6.653c-1.837 0-3.326 1.474-3.326 3.292 0 1.818 1.49 3.292 3.326 3.292h6.653c1.837 0 3.326-1.474 3.326-3.292zm3.09-18.623a3.351 3.351 0 0 0 4.705 0 3.267 3.267 0 0 0 0-4.656L29.5 21.06a3.35 3.35 0 0 0-4.703 0 3.268 3.268 0 0 0 0 4.657l4.704 4.656zm23.522-7.714c1.837 0 3.326-1.475 3.326-3.293v-6.584c0-1.818-1.49-3.292-3.326-3.292-1.837 0-3.326 1.475-3.326 3.293v6.584c0 1.82 1.49 3.292 3.326 3.292zm23.52 7.713l4.704-4.656a3.267 3.267 0 0 0 0-4.656 3.352 3.352 0 0 0-4.704 0l-4.704 4.657a3.267 3.267 0 0 0 0 4.656 3.35 3.35 0 0 0 4.704 0zm-23.52 44.96c-1.837 0-3.326 1.474-3.326 3.292v6.584c0 1.817 1.49 3.29 3.326 3.29 1.837 0 3.326-1.473 3.326-3.29v-6.585c0-1.82-1.49-3.292-3.326-3.292zm23.52-7.714a3.348 3.348 0 0 0-4.704 0 3.266 3.266 0 0 0 0 4.655l4.704 4.656a3.348 3.348 0 0 0 4.704 0 3.266 3.266 0 0 0 0-4.655l-4.704-4.656zm13.07-21.916h-6.654c-1.837 0-3.326 1.474-3.326 3.292 0 1.818 1.49 3.292 3.326 3.292h6.653c1.838 0 3.327-1.474 3.327-3.292 0-1.818-1.49-3.292-3.326-3.292zm-36.59-16.46c-11.022 0-19.958 8.843-19.958 19.752 0 10.91 8.936 19.752 19.958 19.752 11.022 0 19.958-8.844 19.958-19.752 0-10.91-8.936-19.753-19.958-19.753z M60.284 51.004c-1.16 0-2.278.15-3.382.337-4.347-7.69-12.88-13.504-23.23-13.504-14.696 0-26.61 11.79-26.61 26.336 0 14.545 11.914 26.336 26.61 26.336h26.612c11.022 0 19.958-8.843 19.958-19.752 0-19.63-20.622-19.752-19.958-19.752z"]};
	var ms_t_schauer = { prefix: 'fas', iconName: 'ms_t_schauer', icon: [100 , 100 , [], "s_t_schaue", "M26.9 23.183c1.29 1.276 3.38 1.276 4.67 0s1.29-3.345 0-4.62L26.9 13.94a3.329 3.329 0 0 0-4.67 0 3.247 3.247 0 0 0 0 4.622l4.67 4.62zm0 36.97l-4.67 4.62a3.245 3.245 0 0 0 0 4.62 3.325 3.325 0 0 0 4.67 0l4.67-4.62a3.241 3.241 0 0 0 0-4.62 3.325 3.325 0 0 0-4.67 0zm-3.066-18.485c0-1.805-1.478-3.268-3.302-3.268H13.93c-1.825 0-3.303 1.463-3.303 3.268 0 1.804 1.478 3.268 3.302 3.268h6.602c1.824 0 3.302-1.464 3.302-3.268zm49.76-18.485l4.67-4.62a3.244 3.244 0 0 0 0-4.622 3.329 3.329 0 0 0-4.67 0l-4.668 4.622a3.241 3.241 0 0 0 0 4.62 3.325 3.325 0 0 0 4.67 0zM50.25 15.527c1.824 0 3.302-1.463 3.302-3.267V5.725c0-1.805-1.478-3.268-3.302-3.268-1.823 0-3.302 1.463-3.302 3.268v6.535c0 1.804 1.478 3.267 3.302 3.267zM86.568 38.4h-6.605c-1.824 0-3.302 1.463-3.302 3.268 0 1.804 1.48 3.268 3.303 3.268h6.604c1.824 0 3.302-1.463 3.302-3.268 0-1.805-1.48-3.268-3.303-3.268zm-36.32 29.408c-1.823 0-3.302 1.463-3.302 3.268v6.535c0 1.806 1.478 3.268 3.302 3.268s3.302-1.463 3.302-3.267v-6.534c0-1.805-1.48-3.268-3.302-3.268zm23.347-7.656a3.327 3.327 0 0 0-4.67 0 3.245 3.245 0 0 0 0 4.62l4.67 4.622a3.327 3.327 0 0 0 4.67 0 3.245 3.245 0 0 0 0-4.62l-4.67-4.622zm-23.347-38.09c-10.94 0-19.81 8.778-19.81 19.606 0 10.828 8.87 19.605 19.81 19.605s19.81-8.778 19.81-19.605c0-10.828-8.87-19.606-19.81-19.606z M74.17 48.33c-.435 0-.86.036-1.29.065.007.014-3.053-15.23-23.944-15.23-3.855 0-17.324 1.26-23.838 15.01-9.967.433-17.92 8.525-17.92 18.473 0 10.225 8.396 18.514 18.752 18.514h49.2c9.852-.496 17.69-8.565 17.69-18.416 0-10.17-8.35-18.415-18.65-18.415z M37.156 58.333c-1.824 0-3.302 1.463-3.302 3.267v26.14c0 1.806 1.478 3.27 3.302 3.27s3.302-1.464 3.302-3.27V61.6c0-1.805-1.478-3.267-3.302-3.267zm13.207 6.535c-1.823 0-3.302 1.463-3.302 3.268v26.14c0 1.805 1.48 3.268 3.303 3.268 1.824 0 3.302-1.463 3.302-3.268v-26.14c0-1.806-1.478-3.268-3.302-3.268zm13.207-6.535c-1.823 0-3.302 1.463-3.302 3.267v26.14c0 1.806 1.478 3.27 3.302 3.27s3.302-1.464 3.302-3.27V61.6c0-1.805-1.478-3.267-3.302-3.267z"]};
	var ms_t_schnee = { prefix: 'fas', iconName: 'ms_t_schnee', icon: [100 , 100 , [], "s_t_schne", "M66.572 28.062c-1.154 0-2.27.15-3.37.338-4.33-7.695-12.833-13.513-23.144-13.513-14.643 0-26.514 11.798-26.514 26.35 0 14.555 11.87 26.352 26.514 26.352h26.514c10.982 0 19.885-8.85 19.885-19.764 0-19.642-20.547-19.764-19.885-19.764z M36.912 71.937c-1.83 0-3.314 1.475-3.314 3.294s1.484 3.295 3.314 3.295 3.314-1.475 3.314-3.294-1.484-3.293-3.314-3.293zm26.514-6.588a3.305 3.305 0 0 0 3.314-3.295c0-1.82-1.484-3.294-3.314-3.294s-3.314 1.476-3.314 3.295a3.303 3.303 0 0 0 3.314 3.294zM36.912 58.76c-1.83 0-3.314 1.475-3.314 3.294 0 1.82 1.484 3.294 3.314 3.294s3.314-1.475 3.314-3.294a3.304 3.304 0 0 0-3.314-3.294zM50.17 78.525c-1.83 0-3.315 1.475-3.315 3.294 0 1.818 1.484 3.293 3.314 3.293s3.313-1.475 3.313-3.294a3.305 3.305 0 0 0-3.314-3.295zm13.256-6.588c-1.83 0-3.314 1.475-3.314 3.294s1.484 3.295 3.314 3.295 3.314-1.475 3.314-3.294-1.484-3.293-3.314-3.293zM50.17 65.35c-1.83 0-3.315 1.474-3.315 3.293 0 1.82 1.484 3.294 3.314 3.294s3.313-1.474 3.313-3.294c0-1.818-1.484-3.294-3.314-3.294z"]};
	var ms_temp = { prefix: 'fas', iconName: 'ms_temp', icon: [100 , 100 , [], "s_tem", "M59.72 57.553V30.8c0-5.3-4.352-9.6-9.718-9.6-5.37 0-9.72 4.3-9.72 9.6v26.752c-2.01 2.255-3.24 5.207-3.24 8.448 0 7.068 5.803 12.8 12.96 12.8 7.155 0 12.956-5.732 12.956-12.8 0-3.24-1.228-6.193-3.238-8.447zM50.002 72.4c-3.58 0-6.48-2.865-6.48-6.4 0-2.363 1.312-4.404 3.24-5.513V30.8c0-1.766 1.45-3.2 3.24-3.2 1.788 0 3.24 1.434 3.24 3.2v29.687c1.927 1.11 3.238 3.15 3.238 5.513 0 3.535-2.9 6.4-6.478 6.4z M51.622 61.494v-6.692c0-.885-.726-1.6-1.62-1.6a1.61 1.61 0 0 0-1.62 1.6v6.692c-1.883.66-3.24 2.42-3.24 4.507 0 2.65 2.175 4.8 4.86 4.8 2.683 0 4.858-2.15 4.858-4.8 0-2.088-1.356-3.846-3.238-4.506z"]};
	var ms_textlink = { prefix: 'fas', iconName: 'ms_textlink', icon: [100 , 100 , [], "s_textlin", "M14.4,12H0.1V0h14.3l0,0l0,0l6.7,6L14.4,12z M12.1,4c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.2,4,12.1,4z"]}; 

	var icons$1 = {
	einkauf: einkauf,
	ms_city_badge: ms_city_badge,
	ms_dichte_hoch: ms_dichte_hoch,
	ms_dichte_mittel: ms_dichte_mittel,
	ms_firma: ms_firma,
	ms_gewitter: ms_gewitter,
	ms_hansestadt: ms_hansestadt,
	ms_n_gewitter: ms_n_gewitter,
	ms_n_klar: ms_n_klar,
	ms_n_nebel: ms_n_nebel,
	ms_notification_bell: ms_notification_bell,
	ms_regenwahrscheinlichkeit: ms_regenwahrscheinlichkeit,
	ms_safari_pin_icon: ms_safari_pin_icon,
	ms_sonnenstunden: ms_sonnenstunden,
	ms_sortierfunktion_hover: ms_sortierfunktion_hover,
	ms_sortierfunktion: ms_sortierfunktion,
	ms_t_bedeckt: ms_t_bedeckt,
	ms_t_bewoelkt: ms_t_bewoelkt,
	ms_t_schauer: ms_t_schauer,
	ms_t_schnee: ms_t_schnee,
	ms_temp: ms_temp,
	ms_textlink: ms_textlink}; 







	bunker(function () {
	define('fas', icons$1);
	});

	exports['default'] = icons$1;
	exports.prefix = prefix;

	Object.defineProperty(exports, '__esModule', { value: true });

	})));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ })
/******/ ]);