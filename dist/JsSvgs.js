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
	    attributes: _extends({}, extra.attributes, (_babelHelpers$extends = {}, defineProperty(_babelHelpers$extends, DATA_FA_PROCESSED, ''), defineProperty(_babelHelpers$extends, 'data-prefix', prefix), defineProperty(_babelHelpers$extends, 'data-icon', iconName), defineProperty(_babelHelpers$extends, 'class', attrClass), defineProperty(_babelHelpers$extends, 'role', 'img'), defineProperty(_babelHelpers$extends, 'xmlns', 'http://www.w3.org/2000/svg'), defineProperty(_babelHelpers$extends, 'viewBox', '0 0 ' + width + ' ' + height), _babelHelpers$extends), defineProperty(_babelHelpers$extends, 'fill-rule', 'evenodd'), defineProperty(_babelHelpers$extends, 'clip-rule', 'evenodd'))
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

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * Font Awesome Free 5.0.2 by @fontawesome - http://fontawesome.com
	 * License - http://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
	 */
	(function (global, factory) {
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

	var jobs_burowesen = { prefix: 'fas', iconName: 'jobs_burowesen', icon: [44 , 44 , [], "msJSVG", "M8.467 28.686H6.443c-.028 0-.054-.004-.08-.013h-.002c-.013-.005-.026-.01-.037-.017l-.006-.003-.002-.002c-.075-.043-.126-.123-.126-.217V23.34v-.002-.012-.01h.002v-.007c.004-.032.013-.063.028-.09H4.502c-.144 0-.26-.117-.26-.26v-2.093c0-.144.116-.262.26-.262h5.896c.143 0 .26.118.26.262v2.092c0 .143-.116.26-.26.26h-1.71c.015.028.025.058.03.09v2.761h2.34c.587-.482 1.478-.58 2.258-.673 1.596-.187 3.2-.076 4.802-.076h6.32c1.772 0 3.546 0 5.32-.002.997-.002 2.477-.006 3.308.753h2.215v-2.73-.017l.002-.004v-.002-.007l.002-.007v-.01l.002-.002v-.005l.002-.007.002-.006v-.002l.002-.004v-.006l.002-.002v-.003l.007-.013.002-.002v-.003h.002v-.004l.002-.002v-.002h.002c0-.003.002-.005.003-.007h-1.708c-.143 0-.26-.117-.26-.26v-2.093c0-.144.117-.262.26-.262h5.896c.144 0 .26.118.26.262v2.092c0 .143-.115.26-.26.26H37.78l.007.017.002.005.01.024.002.012.004.018.002.013v.018l.002.013v5.093c0 .14-.113.253-.253.253h-4.071c-.328.684-1.007 1.038-1.69 1.363-2.012.867-4.4 1.467-6.997 1.713h-.69v6.24c0 .026 0 .05-.005.075 3.19.277 5.535 1.166 5.56 2.223l.093-.002c.906 0 1.64.76 1.64 1.696 0 .936-.734 1.696-1.64 1.696-.906 0-1.64-.76-1.64-1.696 0-.484.196-.92.51-1.23-1.203.183-3.31.22-5.54.227.367.312.602.785.602 1.313 0 .937-.736 1.697-1.64 1.697-.907 0-1.64-.76-1.64-1.697 0-.527.232-1 .6-1.31-2.202-.006-4.29-.04-5.524-.212.306.31.495.74.495 1.214 0 .936-.735 1.696-1.64 1.696-.905 0-1.64-.76-1.64-1.696 0-.936.735-1.696 1.64-1.696.03-1.055 2.373-1.943 5.562-2.22-.005-.024-.007-.05-.007-.074v-6.24h-.42c-2.593-.247-4.976-.846-6.99-1.71-.768-.33-1.535-.628-1.883-1.368H8.467zm17.085-4.568h-7.006c-.183 0-.332-.148-.332-.33V21.14c0-.18.15-.33.332-.33h7.006c.183 0 .33.15.33.33v2.648c0 .182-.147.33-.33.33zm-4.81-4.08c-.53 0-6.32-.326-6.32-.326-3.426-.7-2.942-3.168-2.942-3.168l1.157-13.7c.82-2.378 2.895-2.47 2.895-2.47C17.158.153 21.474.017 22.02 0V0H22.078v.002c.547.016 4.863.153 6.488.37 0 0 2.075.094 2.894 2.47l1.16 13.702s.48 2.47-2.945 3.168c0 0-5.79.326-6.32.326h-2.613z"]};
	var jobs_einkaufbeschaffung = { prefix: 'fas', iconName: 'jobs_einkaufbeschaffung', icon: [44 , 44 , [], "msJSVG", "M32.327 32.147c-1.84 0-3.353 1.514-3.353 3.354s1.514 3.354 3.353 3.354c1.84 0 3.353-1.514 3.353-3.353 0-1.84-1.514-3.353-3.353-3.353zm-17.604 0c1.84 0 3.353 1.514 3.353 3.354s-1.514 3.354-3.353 3.354c-1.84 0-3.353-1.514-3.353-3.353 0-1.84 1.513-3.353 3.353-3.353zm17.604 4.703c-.747 0-1.362-.615-1.362-1.363 0-.746.615-1.362 1.362-1.362.746 0 1.362.616 1.362 1.362 0 .748-.617 1.363-1.363 1.363zm-17.604 0c-.748 0-1.362-.615-1.362-1.363 0-.746.615-1.362 1.363-1.362.747 0 1.362.616 1.362 1.362 0 .748-.615 1.363-1.362 1.363zM6.99 5.16c.198-.054.403.064.457.263l5.315 19.84c.02.072.016.144-.006.21.01.053.008.108-.007.162l-1.094 4.078h26.166c.206 0 .373.168.373.374v2.986c0 .205-.167.373-.373.373h-1.497c-.746-1.45-2.258-2.44-3.998-2.44-1.74 0-3.252.99-4 2.44h-9.605c-.747-1.45-2.258-2.44-4-2.44-1.74 0-3.25.99-3.997 2.44H8.08c-.207 0-.374-.168-.374-.373v-2.93c-.007-.046-.003-.094.01-.142 0-.007.004-.014.005-.02l1.222-4.556-4.43-16.532H.372C.17 8.892 0 8.724 0 8.518V5.532c0-.205.168-.373.373-.373H6.99zM44 11.386c0-.83-.672-1.5-1.5-1.5L12.81 8.743c-.828 0-1.5.673-1.5 1.5l3.244 12.927s.673 1.5 1.5 1.5l22.058-1.463c.83 0 1.5-1.5 1.5-1.5L44 11.387z"]};
	var jobs_finanzdienstleistungen = { prefix: 'fas', iconName: 'jobs_finanzdienstleistungen', icon: [44 , 44 , [], "msJSVG", "M22.958 37.742l17.788-17.787c.744-.744.744-1.952 0-2.696L29.963 6.476c.745-.744 1.952-.744 2.695 0L43.44 17.26c.745.743.745 1.95 0 2.695L25.655 37.742c-.744.744-1.95.744-2.696 0zm1.303-31.29c.745-.743 1.953-.743 2.697 0L37.74 17.235c.743.744.743 1.952 0 2.696L19.952 37.72c-.744.744-1.952.744-2.695 0l-.232-.232L34.812 19.7c.744-.745.744-1.953 0-2.697l-10.55-10.55zm7.563 13.284c.743-.744.743-1.952 0-2.696L21.04 6.258c-.744-.744-1.952-.744-2.696 0L.557 24.045c-.744.744-.744 1.952 0 2.696L11.34 37.524c.743.744 1.95.744 2.696 0l17.787-17.787zm-19.79-2.004c2.294-2.295 6.02-2.295 8.316 0 2.293 2.295 2.293 6.02 0 8.317-2.297 2.293-6.023 2.293-8.318 0-2.295-2.297-2.295-6.023 0-8.318zm3.516.8l.422.666c-.438.044-.81.218-1.112.52-.413.414-.618.855-.617 1.327 0 .473.125.88.37 1.22l2.018-2.016.323.475-1.987 1.987.11.12.278.267 1.902-1.903.322.477-1.763 1.762c.475.325.932.458 1.37.397.437-.06.812-.25 1.126-.562.372-.37.563-.756.575-1.16l.612.613c-.13.36-.346.69-.645.99-1.088 1.087-2.297 1.19-3.626.312l-.455.455-.312-.485.307-.307c-.05-.044-.142-.13-.272-.26l-.12-.12-.39.386-.313-.485.346-.347c-.44-.647-.613-1.294-.515-1.942.1-.647.392-1.214.88-1.703.368-.367.757-.595 1.17-.684z"]};
	var jobs_gastgewerbetourismus = { prefix: 'fas', iconName: 'jobs_gastgewerbetourismus', icon: [44 , 44 , [], "msJSVG", "M18.203 10.998l-.876-3.27L9.01 9.96c-.847-3.166 2.137-6.75 6.76-8.296l-.218-.82c-.084-.312.234-.67.71-.797.475-.127.927.024 1.012.336l.22.82c4.777-.973 9.154.64 10.002 3.804l-8.315 2.23 1.01 3.764h13.285c.915 0 1.657.943 1.657 2.106l-2.32 28.79c0 1.162-.742 2.106-1.656 2.106H17.902c-.914 0-1.657-.944-1.657-2.106l-2.32-28.79c0-1.163.742-2.106 1.657-2.106h2.62zm14.63 1.67H20.637l2.312 8.628c.614.13 1.164.334 1.58.638 3.47 2.538 7.656-.508 7.656-.508.356 0 .647-.407.647-.908l.646-6.944c0-.5-.29-.907-.647-.907zM20.907 21.09l-2.257-8.423h-2.425c-.357 0-.647.406-.647.907l.647 6.944c0 .5.29.908.647.908 0 0 1.988-.37 4.035-.335z"]};
	var jobs_gesundheitswesen = { prefix: 'fas', iconName: 'jobs_gesundheitswesen', icon: [44 , 44 , [], "msJSVG", "M2.736 39.152c-1.21 0-2.288.117-2.627-.613H0v-.583-22.375c0-1.366 1.27-2.476 2.736-2.476h8.31v-1.38c0-3.835 3.13-6.886 6.844-6.886h7.92c3.812 0 6.843 3.15 6.843 6.887v1.38h8.603c1.564 0 2.836 1.11 2.738 2.475v3.934H44V38.54h-.124c-.332.67-1.347.612-2.62.612H2.736zm20.902-14.66v-4.946H20.36v4.947h-4.948v3.278h4.948v4.95h3.278v-4.95h4.947v-3.277h-4.947zm2.27-16.11h-7.92c-1.857 0-3.324 1.476-3.324 3.345v1.38H29.23v-1.38c0-1.87-1.465-3.344-3.323-3.344z"]};
	var jobs_handelvertriebverkauf = { prefix: 'fas', iconName: 'jobs_handelvertriebverkauf', icon: [44 , 44 , [], "msJSVG", "M42.2 44H1.8c-.464 0-.84-.376-.84-.838v-6.71c0-.463.376-.84.84-.84H42.2c.462 0 .837.377.837.84v6.71c0 .462-.375.838-.838.838zm-1.8-6.105H3.6c-.21 0-.383.172-.383.383v3.057c0 .21.172.382.383.382h36.8c.21 0 .383-.17.383-.382v-3.057c0-.21-.172-.383-.383-.383zM28.425 8.388h-5.56c-.462 0-.838-.375-.838-.838V.84c0-.464.376-.84.838-.84H37.12c.465 0 .84.376.84.84v6.71c0 .463-.375.838-.84.838h-5.528v2.99h4.223c1.25 0 2.265 1.015 2.265 2.265l2.112 18.117c0 1.25-1.015 2.264-2.265 2.264H6.073c-1.25 0-2.265-1.014-2.265-2.264L5.92 13.643c0-1.25 1.015-2.265 2.265-2.265h20.24v-2.99zm-.1 18.466h-3.17v3.167h3.17v-3.166zm6.378 0h-3.168v3.167h3.168v-3.166zm0-5.737h-3.168v3.167h3.168v-3.167zm-6.38 0h-3.167v3.167h3.168v-3.167zm-8.422-5.736H9.35v5.606H19.9V15.38zm8.424 0h-3.168v3.17h3.168v-3.17zm6.38 0H31.59v.368c0 .067-.02.13-.057.18v2.62h3.168v-3.167zm.938-13.46H24.374c-.25 0-.455.204-.455.455v3.64c0 .25.203.455.454.455h11.268c.252 0 .456-.205.456-.456v-3.64c0-.25-.204-.455-.456-.455z"]};
	var jobs_handwerkproduktion = { prefix: 'fas', iconName: 'jobs_handwerkproduktion', icon: [44 , 44 , [], "msJSVG", "M28.416 15.12c-.005-.01-.005-.013-.002-.015-.89-2.705-.333-5.846 1.73-8.035 2.098-2.225 5.118-3.02 7.885-2.29.443.128.57.7.252 1.018l-3.306 3.307c-1.208 1.208-1.24 3.21 0 4.45 1.208 1.208 3.21 1.24 4.452 0l3.306-3.306c.318-.32.89-.19 1.017.253.67 2.64 0 5.596-2.097 7.695-2.223 2.22-5.43 2.84-8.23 1.92 0 .002-.005 0-.014-.003L10.933 42.59c-.275.275-.723.275-.998 0L5.94 38.594c-.276-.276-.276-.723 0-1L28.416 15.12zm3.502 10.6l11.876 11.875c.275.276.275.723 0 1l-3.997 3.995c-.275.275-.722.275-.998 0L26.922 30.714l4.995-4.994zm-14.11-4.12l-6.57-6.57-6.09 6.088c-.273.273-.716.273-.99 0L.206 17.164c-.273-.273-.273-.716 0-.99L8.74 7.64l13.507-6.437 1.407 1.41-7.42 7.42 6.57 6.572-4.995 4.994z"]};
	var jobs_hilfstaetigkeiten = { prefix: 'fas', iconName: 'jobs_hilfstaetigkeiten', icon: [44 , 44 , [], "msJSVG", "M3.32 34.018c-.038-.182-.218-.298-.4-.26l-2.652.577c-.183.04-.3.22-.26.404l1.864 8.58c.04.183.22.3.402.26l2.65-.575c.184-.04.3-.22.26-.404L3.322 34.02zm11.954 7.035c-.002 0-.096.002-5.36 0-1.306 0-3.596 1.56-3.596 1.56l-1.74-9.19 9.318-4.464c.153-.077.383-.154.612-.154H27.52c.842 0 1.532.448 1.532 1.29 0 .842-.843 1.416-1.532 1.39-2.12-.08-6.92.006-8.138.544-1.732.766-.988 2.402.025 2.903.053.027.117.05.188.072 1.452.44 6.395-.072 6.395-.072.938-.097 1.367-.144 2.143-.306 2.177-.455 10.293-4.538 10.293-4.538.153-.077.382-.153.613-.153.84 0 1.53.688 1.53 1.53 0 .536-.23.995-.613 1.225l-10.905 7.52c-.995.61-2.067.84-3.215.84H15.274zm28.453-14.91H5c-.153 0-.276-.124-.276-.274v-2.194c0-.15.123-.274.275-.274h38.727c.15 0 .273.123.273.274v2.193c0 .15-.122.272-.273.272zM44 21.54H4.724c.27-9.713 8.82-17.656 18.324-18.943V1.56c0-.634.59-1.147 1.315-1.147s1.313.513 1.313 1.146v.895C35.304 3.61 43.728 11.72 44 21.54zM9.11 18.71c.455 0 .82-.275.912-.73 1.735-6.487 7.49-10.872 14.34-10.872.548 0 .914-.364.914-1.004 0-.457-.366-.914-.913-.914-7.49 0-14.158 5.115-16.167 12.33-.183.55.09 1.006.64 1.19h.273z"]};
	var jobs_itdatenverabeitung = { prefix: 'fas', iconName: 'jobs_itdatenverabeitung', icon: [44 , 44 , [], "msJSVG", "M16.62 37.41h-3.786c-.14 0-.257-.115-.257-.258l.776-2.908H1.69c-.932 0-1.69-.757-1.69-1.69V19.037c0-.933.758-1.69 1.69-1.69h26.074c.932 0 1.69.757 1.69 1.69v13.517c0 .933-.758 1.69-1.69 1.69H16.102l.776 2.908c0 .143-.116.258-.258.258zm25.46-.08H26.705c-.864 0-1.596-.573-1.837-1.358h4.27c1.123 0 2.034-.91 2.034-2.034V17.662c0-1.123-.91-2.035-2.034-2.035h-4.356V8.512c0-1.06.86-1.922 1.922-1.922H42.08c1.06 0 1.92.86 1.92 1.922v26.894c0 1.06-.86 1.92-1.92 1.923zM25.816 19.78H3.637c-.664 0-1.202.54-1.202 1.2V30.6c0 .663.538 1.2 1.202 1.2h22.18c.664 0 1.203-.537 1.203-1.2v-9.615c0-.662-.54-1.2-1.203-1.2zm13.596-4.832c.876 0 1.586.71 1.586 1.587 0 .874-.71 1.586-1.587 1.586-.875 0-1.586-.712-1.586-1.586 0-.876.71-1.587 1.586-1.587zM41 8.512H27.785c-.176 0-.318.142-.318.317v2.537c0 .175.142.317.318.317H41c.175 0 .317-.142.317-.317V8.83c0-.176-.142-.318-.318-.318z"]};
	var jobs_logistiklagerverkehr = { prefix: 'fas', iconName: 'jobs_logistiklagerverkehr', icon: [44 , 44 , [], "msJSVG", "M8.187 27.168c-2.53 0-4.61 2.08-4.61 4.61 0 2.53 2.08 4.61 4.61 4.61 2.53 0 4.61-2.08 4.61-4.61 0-2.53-2.08-4.61-4.61-4.61zm23.33 0c-2.528 0-4.61 2.08-4.61 4.61 0 2.53 2.082 4.61 4.61 4.61 2.53 0 4.61-2.08 4.61-4.61 0-2.53-2.08-4.61-4.61-4.61zm-23.33 6.465c-1.028 0-1.873-.845-1.873-1.872 0-1.027.845-1.872 1.873-1.872 1.027 0 1.873.845 1.873 1.873s-.846 1.873-1.873 1.873zm23.33 0c-1.027 0-1.872-.845-1.872-1.872 0-1.027.845-1.872 1.872-1.872 1.03 0 1.874.845 1.874 1.873s-.844 1.873-1.873 1.873zm-29.51-1.855h-.37C.733 31.778 0 31.103 0 30.27V18.08l5.787-4.62h8.95c.904 0 1.638.674 1.638 1.506V30.27c0 .833-.734 1.508-1.637 1.508h-.37c0-3.412-2.77-6.18-6.18-6.18-3.413 0-6.182 2.768-6.182 6.18zm23.33 0h-3.884c-1.334 0-2.417-1.083-2.417-2.416V10.028c0-1.333 1.083-2.416 2.417-2.416h20.13c1.334 0 2.416 1.083 2.416 2.416v19.334c0 1.333-1.083 2.416-2.417 2.416H37.7c0-3.412-2.77-6.18-6.183-6.18-3.41 0-6.18 2.768-6.18 6.18zM13.24 16.754H6.736c-.31 0-.61.122-.83.34L3.38 19.578c-.22.21-.344.503-.344.81v1.6H13.24v-5.236z"]};
	var jobs_management = { prefix: 'fas', iconName: 'jobs_management', icon: [44 , 44 , [], "msJSVG", "M23.68 10.01c.005.017 3.657 14.138 5.236 27.123 0 0-4.008 5.12-6.916 6.81.034.02.066.04.1.056h-.2c.034-.018.067-.037.1-.057-2.908-1.69-6.917-6.81-6.917-6.81 1.58-12.985 5.233-27.106 5.237-27.122h3.36zM22 0h-.05.05c.51.002 4.783.052 4.644.89 0 0-.247 2.568-3.063 6.62h-3.16C17.603 3.457 17.355.89 17.355.89 17.216.05 21.49 0 22 0z"]};
	var jobs_marketingwerbung = { prefix: 'fas', iconName: 'jobs_marketingwerbung', icon: [44 , 44 , [], "msJSVG", "M12.467 35.868l.404 1.73c.418 1.777 2.21 2.936 4.02 2.512l3.764-.88c1.766-.414 2.912-2.212 2.486-4.036l-.416-1.776-1.72.403.417 1.776c.21.89-.324 1.754-1.207 1.96l-3.763.882c-.883.207-1.744-.332-1.952-1.22l-.416-1.777-1.615.428zm8.1-26.003l-.57-.987c-.06-.106-.024-.24.082-.303l1.538-.888c.106-.062.242-.025.303.08l12.643 21.9c.062.105.025.24-.08.303l-1.54.888c-.106.06-.242.024-.302-.082l-.57-.986c-.02.014-.044.028-.068.042L6.148 36.125l-.07.04.098.168c.06.106.024.243-.082.303l-1.538.89c-.107.06-.242.024-.303-.082L.03 30.13c-.062-.106-.025-.243.08-.303l1.54-.89c.106-.06.242-.024.303.082l.098.168.07-.04L20.497 9.902l.07-.038zM35.617 20.3c-.137 0-.248.11-.248.25v1.99c0 .14.11.252.248.252h8.133c.138 0 .25-.113.25-.25v-1.993c0-.14-.112-.25-.25-.25H35.62zm-2.835-5.642c-.12.07-.16.22-.092.34l.997 1.727c.07.12.222.16.34.09l7.044-4.066c.12-.07.16-.222.092-.34l-.996-1.728c-.07-.12-.222-.16-.34-.09l-7.044 4.066zm-4.653-3.686c-.07.118-.03.27.09.34l1.727.997c.118.068.27.027.34-.092l4.067-7.044c.07-.118.027-.27-.09-.34l-1.728-.997c-.12-.07-.272-.028-.34.09l-4.067 7.045z"]};
	var jobs_personalwesen = { prefix: 'fas', iconName: 'jobs_personalwesen', icon: [44 , 44 , [], "msJSVG", "M43.35 39.45L31.43 27.527c2.166-2.82 3.25-6.287 3.25-10.188C34.68 7.803 26.877 0 17.34 0 7.803 0 0 7.803 0 17.34c0 9.537 7.803 17.34 17.34 17.34 3.902 0 7.37-1.3 10.188-3.252l11.92 11.922c.435.434.868.65 1.3.65.435 0 .87-.216 1.302-.433l1.3-1.3c.435-.434.435-.868.435-1.302.216-.65 0-1.082-.434-1.516zM17.34 30.56c-7.152 0-13.005-5.853-13.005-13.005 0-7.153 5.853-13.005 13.005-13.005 7.153 0 13.006 5.852 13.006 13.005 0 7.152-5.636 13.005-13.006 13.005zm6.72-5.6H10.48c0-2.324 1.622-5.553 3.958-7.016.793.878 1.77 1.478 2.832 1.478 1.06 0 2.04-.6 2.83-1.478 2.338 1.464 3.96 4.692 3.96 7.016zm-6.79-6.79c-2.236 0-4.048-3.362-4.048-5.597 0-2.235 1.812-4.047 4.048-4.047 2.235 0 4.047 1.812 4.047 4.047 0 2.235-1.812 5.596-4.047 5.596z"]};
	var jobs_rechnungswesen = { prefix: 'fas', iconName: 'jobs_rechnungswesen', icon: [44 , 44 , [], "msJSVG", "M40.56 9.843c.424-1.576-.513-3.198-2.09-3.62L15.628.103c-1.576-.424-3.198.513-3.62 2.09L3.44 34.158c-.42 1.576.516 3.198 2.092 3.62L28.376 43.9c1.575.42 3.198-.516 3.62-2.09L40.56 9.842zm-8.656 24.92l-4.28-1.146-1.15 4.284 4.282 1.148 1.148-4.284zm-6.86-1.837l-4.28-1.148-1.15 4.285 4.282 1.147 1.15-4.284zm-6.86-1.838l-4.28-1.147-1.15 4.285 4.283 1.147 1.148-4.284zm-6.86-1.838l-4.28-1.147-1.148 4.283 4.28 1.147 1.15-4.283zm22.415-1.334l-4.282-1.148-1.15 4.285 4.284 1.147 1.147-4.284zm-6.86-1.838l-4.282-1.147-1.148 4.284 4.282 1.147 1.147-4.282zm-6.86-1.838l-4.282-1.147-1.148 4.283 4.282 1.147 1.147-4.283zm-6.86-1.84l-4.282-1.146L7.73 25.54l4.28 1.146 1.15-4.285zm22.414-1.332l-4.28-1.147-1.15 4.284 4.282 1.147 1.148-4.282zm-6.86-1.838l-4.282-1.148-1.147 4.284 4.28 1.147 1.15-4.283zm-6.86-1.84l-4.28-1.146-1.148 4.285 4.28 1.146 1.15-4.285zm-6.86-1.836l-4.28-1.148-1.148 4.284 4.28 1.147 1.15-4.283zM38.61 9.736l-24.86-6.66-1.878 7.006 24.86 6.66 1.878-7.006z"]};
	var jobs_rechtsteuer = { prefix: 'fas', iconName: 'jobs_rechtsteuer', icon: [44 , 44 , [], "msJSVG", "M20.44 11.524c-.24-.237-.428-.527-.542-.85L8.52 7.623c.512-.472.83-1.138.83-1.874 0-.173-.018-.342-.05-.505L20.547 8.26c.392-.34.9-.544 1.452-.544.965 0 1.796.628 2.1 1.495l11.234 3.01c-.426.46-.685 1.066-.685 1.73 0 .244.034.48.1.702l-11.19-2.998v22.392c4.465.49 7.87 3.04 7.87 6.115H12.57c0-3.074 3.404-5.625 7.87-6.114V11.524zm17.515 17.094h-1.24c-3.39-.205-6.046-2.08-6.046-4.362h1.442l4.237-8.672c-.554-.337-.926-.945-.926-1.633 0-1.047.862-1.91 1.91-1.91s1.91.863 1.91 1.91c0 .638-.318 1.207-.805 1.555l4.266 8.732c.002.006.005.013.006.02H44c0 2.28-2.655 4.155-6.045 4.36zm-.458-12.764c-.054.004-.108.007-.163.007h-.008l-4.1 8.396H41.6l-4.103-8.402zM7.287 20.33H6.044C2.655 20.123 0 18.25 0 15.966h1.443l4.204-8.605c-.535-.34-.892-.937-.892-1.612 0-1.05.862-1.91 1.91-1.91 1.047 0 1.91.86 1.91 1.91 0 .623-.305 1.18-.774 1.53l4.237 8.668c.002.006.005.013.006.02h1.287c0 2.28-2.654 4.156-6.044 4.36zm-.42-12.68c-.065.006-.133.01-.202.01h-.05l-4.06 8.307h8.377L6.868 7.65zm30.467 7.07c-.426 0-.776-.35-.776-.777 0-.425.35-.775.776-.775.426 0 .777.35.777.775 0 .426-.35.777-.776.777zM6.5 6.5c.054.013.11.018.165.018.426 0 .776-.35.776-.775 0-.426-.35-.777-.775-.777-.426 0-.776.35-.776.777 0 .253.122.48.313.62.012 0 .026.004.038.01l.26.128z"]};
	var jobs_sozialwesen = { prefix: 'fas', iconName: 'jobs_sozialwesen', icon: [44 , 44 , [], "msJSVG", "M9.783 12.67l1.15 4.29c-3.082 2.366-5.07 6.073-5.07 10.264 0 7.195 5.862 13.058 13.058 13.058 4.913 0 9.204-2.69 11.433-6.687l1.224 4.568C28.462 41.736 23.88 44 18.79 44 9.45 44 1.824 36.377 1.824 27.036c0-6.037 3.184-11.357 7.96-14.365zm25.205 23.77c-.202.055-.41-.066-.465-.27l-3.156-11.777H16.458c-.17.004-.328-.11-.374-.28l-3.577-13.35c-2.52-.466-4.435-2.68-4.435-5.336C8.072 2.432 10.502 0 13.498 0c2.995 0 5.427 2.432 5.427 5.427 0 1.983-1.065 3.72-2.656 4.665l.893 3.338H28.2c.887.02 1.6.865 1.6 1.903 0 1.04-.713 1.884-1.6 1.904H18.185l.897 3.35h14.872c.184-.02.362.097.412.282l3.007 11.22h3.174c.066 0 .128.013.185.04.813.12 1.446 1.04 1.446 2.154 0 1.198-.73 2.17-1.632 2.17v-.013h-5.556z"]};
	var jobs_technischeberufe = { prefix: 'fas', iconName: 'jobs_technischeberufe', icon: [44 , 44 , [], "msJSVG", "M33.564 41.254c.152 0 .275.123.275.275v2.195c0 .15-.124.275-.276.275H11.446c-.15 0-.274-.124-.274-.275V41.53c0-.153.123-.276.274-.276h22.118zm-3.525-1.998H16.536L27.55 21.004l-12.17-7.408-4.62 2.667c-.138.08-.313.032-.392-.105l-.004-.008c-.047-.024-.086-.06-.113-.11L6.003 8.684c-.08-.137-.032-.313.106-.392l1.985-1.145c.137-.08.313-.032.392.105l3.038 5.263 2.868-1.656 2.495-4.32V2.867h-6.077c-.158 0-.287-.128-.287-.287V.285c0-.158.13-.287.288-.287h8.496c.054 0 .106.015.15.042h.01c.158 0 .287.13.287.287v5.476l13.48 7.783c-2.59.383-4.582 2.62-4.582 5.317 0 2.967 2.41 5.378 5.377 5.378.826 0 1.607-.187 2.307-.52l-3.54 6.132.443 3.55c.127.075-1.68 3.222-3.196 5.81zm3.985-24.36c-2.2 0-4.01 1.81-4.01 4.01 0 2.202 1.81 4.012 4.01 4.012 2.2 0 4.01-1.81 4.01-4.01 0-2.2-1.81-4.01-4.01-4.01zm0 5.625c-.894 0-1.63-.734-1.63-1.628 0-.894.736-1.63 1.63-1.63.894 0 1.63.736 1.63 1.63 0 .894-.736 1.63-1.63 1.63z"]};
	var jobs_weitereberufe = { prefix: 'fas', iconName: 'jobs_weitereberufe', icon: [44 , 44 , [], "msJSVG", "M2.737 39.152c-1.21 0-2.29.116-2.628-.613H0V15.58c0-1.367 1.27-2.477 2.737-2.478h8.31v-1.377c0-3.837 3.13-6.887 6.843-6.887h7.92c3.813 0 6.844 3.148 6.844 6.887v1.377h8.603c1.564 0 2.836 1.11 2.737 2.478v3.934H44v4.95H26.555c-.907 0-1.642.736-1.642 1.64v13.046H2.737zm28.308-4.71h-2.833c-.195 0-.353-.158-.353-.354v-2.833c0-.195.157-.354.352-.354h2.833c.197 0 .355.16.355.355v2.833c0 .196-.158.355-.355.355zm6.3 0h-2.833c-.195 0-.354-.158-.354-.354v-2.833c0-.195.16-.354.354-.354h2.834c.195 0 .354.16.354.355v2.833c0 .196-.16.355-.354.355zm6.3 0h-2.832c-.197 0-.355-.158-.355-.354v-2.833c0-.195.158-.354.355-.354h2.833c.195 0 .353.16.353.355v2.833c0 .196-.16.355-.354.355zM25.91 8.383h-7.92c-1.857 0-3.324 1.475-3.324 3.345v1.377H29.23v-1.377c0-1.87-1.465-3.345-3.322-3.345z"]}; 

	var icons$1 = {
	jobs_burowesen: jobs_burowesen,
	jobs_einkaufbeschaffung: jobs_einkaufbeschaffung,
	jobs_finanzdienstleistungen: jobs_finanzdienstleistungen,
	jobs_gastgewerbetourismus: jobs_gastgewerbetourismus,
	jobs_gesundheitswesen: jobs_gesundheitswesen,
	jobs_handelvertriebverkauf: jobs_handelvertriebverkauf,
	jobs_handwerkproduktion: jobs_handwerkproduktion,
	jobs_hilfstaetigkeiten: jobs_hilfstaetigkeiten,
	jobs_itdatenverabeitung: jobs_itdatenverabeitung,
	jobs_logistiklagerverkehr: jobs_logistiklagerverkehr,
	jobs_management: jobs_management,
	jobs_marketingwerbung: jobs_marketingwerbung,
	jobs_personalwesen: jobs_personalwesen,
	jobs_rechnungswesen: jobs_rechnungswesen,
	jobs_rechtsteuer: jobs_rechtsteuer,
	jobs_sozialwesen: jobs_sozialwesen,
	jobs_technischeberufe: jobs_technischeberufe,
	jobs_weitereberufe: jobs_weitereberufe}; 

	var prefix = "fas";


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