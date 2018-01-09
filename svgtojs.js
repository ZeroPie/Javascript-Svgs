var parse = require('parse-svg-path');
var extract = require('extract-svg-path');
var regExp = new RegExp("\\*");
var fs = require('fs');
var stream = fs.createWriteStream("ic_home_black_48.js");

var im = 'ic_home_black_48px'; 
var path = extract(`${im}.svg`);
var svgpath = parse(path);
console.log(path);

var prefix = "prefix: 'fas'";
var iconName = "iconName: 'address-book'";
var weirdcoordinatex = "448";
var weirdcoordinatey = "512";
var weirdarray = '[]';
var weirdunicode = "f2b9";
var icon = `icon: [${weirdcoordinatex} , ${weirdcoordinatey} , ${weirdarray}, ${weirdunicode}, "${path}"] `;

var jsifiedsvg = `module.exports = { ${prefix}, ${iconName}, ${icon} }`;


stream.once('open', function(fd) {
    stream.write(jsifiedsvg);
    stream.end();
  });


 console.log(jsifiedsvg);