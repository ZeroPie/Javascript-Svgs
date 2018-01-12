var fs = require('fs');
var path = require('path');
var svgsFilePaths = require('./svgs/svgFilePaths.js');
var extract = require('extract-svg-path');
var dirpath = "node_modules/@fortawesome/fontawesome-meinestadt/";

console.log(svgsFilePaths);


for (let svgFilePath of svgsFilePaths) {
    var filename = path.basename(svgFilePath).replace(/\//g, "");
    var stream = fs.createWriteStream(`./jsvgs/${filename}.js`);



}












