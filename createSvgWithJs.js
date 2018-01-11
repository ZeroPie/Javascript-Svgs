

var parse = require('parse-svg-path');
var extract = require('extract-svg-path');
var regExp = new RegExp("\\*");
var fs = require('fs');
var stream = fs.createWriteStream("node_modules/@fortawesome/fontawesome-meinestadt/msHome.js");

var path = extract(`faHome.svg`);
var svgpath = parse(path);

var prefix = "prefix: 'fas'";
var iconName = "iconName: 'mshomeJs'";
var viewBoxX = "512";
var viewBoxY = "512";
var children = '[]';
var weirdunicode = "f2b9";
var icon = `icon: [${viewBoxX} , ${viewBoxY} , ${children}, "${weirdunicode}", "${path}"] `;

var jsifiedsvg = `module.exports = { ${prefix}, ${iconName}, ${icon}};`;


stream.once('open', function(fd) {
    stream.write(jsifiedsvg);
    stream.end();
  });

 console.log(jsifiedsvg);
