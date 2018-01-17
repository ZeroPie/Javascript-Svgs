(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
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


var einkauf ={ prefix: 'fas' iconName: 'einkauf' };,var ms_city_badge ={ prefix: 'fas' iconName: 'ms_city_badge' };,var ms_dichte_hoch ={ prefix: 'fas' iconName: 'ms_dichte_hoch' };,var ms_dichte_mittel ={ prefix: 'fas' iconName: 'ms_dichte_mittel' };,var ms_firma ={ prefix: 'fas' iconName: 'ms_firma' };,var ms_gewitter ={ prefix: 'fas' iconName: 'ms_gewitter' };,var ms_hansestadt ={ prefix: 'fas' iconName: 'ms_hansestadt' };,var ms_n_gewitter ={ prefix: 'fas' iconName: 'ms_n_gewitter' };,var ms_n_klar ={ prefix: 'fas' iconName: 'ms_n_klar' };,var ms_n_nebel ={ prefix: 'fas' iconName: 'ms_n_nebel' };,var ms_notification_bell ={ prefix: 'fas' iconName: 'ms_notification_bell' };,var ms_regenwahrscheinlichkeit ={ prefix: 'fas' iconName: 'ms_regenwahrscheinlichkeit' };,var ms_safari_pin_icon ={ prefix: 'fas' iconName: 'ms_safari_pin_icon' };,var ms_sonnenstunden ={ prefix: 'fas' iconName: 'ms_sonnenstunden' };,var ms_sortierfunktion_hover ={ prefix: 'fas' iconName: 'ms_sortierfunktion_hover' };,var ms_sortierfunktion ={ prefix: 'fas' iconName: 'ms_sortierfunktion' };,var ms_t_bedeckt ={ prefix: 'fas' iconName: 'ms_t_bedeckt' };,var ms_t_bewoelkt ={ prefix: 'fas' iconName: 'ms_t_bewoelkt' };,var ms_t_schauer ={ prefix: 'fas' iconName: 'ms_t_schauer' };,var ms_t_schnee ={ prefix: 'fas' iconName: 'ms_t_schnee' };,var ms_temp ={ prefix: 'fas' iconName: 'ms_temp' };,var ms_textlink ={ prefix: 'fas' iconName: 'ms_textlink' };;
bunker(function () {
define('fas', icons$1);
});

exports['default'] = icons$1;
exports.prefix = prefix;

Object.defineProperty(exports, '__esModule', { value: true });

})));
