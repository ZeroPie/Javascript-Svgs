var fs = require('fs');
var path = require('path');
var svgsFilePaths = require('./svgs/svgFilePaths.js');
var parse = require('parse-svg-path');
var extract = require('extract-svg-path');
var dirpath = "node_modules/@fortawesome/fontawesome-meinestadt/";


for (let svgFilePath of svgsFilePaths) {
    var filename = path.basename(svgFilePath, path.extname(svgFilePath));
    var writeStream = fs.createWriteStream(`./jsvgs/${filename}.js`);
    writeStream.write(jsfySvg(svgFilePath));
    writeStream.on('finish', () => {  
        console.log('wrote to file');
    });
    writeStream.end(); 
}

function jsfySvg(svgFilePath) {
    var svgPath = extract(svgFilePath);
    var svgParsedPath = parse(svgPath);
    var prefix = "prefix: 'fas'";
    var iconName = "iconName: 'msHome'";
    var viewBoxX = "512";
    var viewBoxY = "512";
    var children = '[]';
    var weirdunicode = "f2b9";
    var icon = `icon: [${viewBoxX} , ${viewBoxY} , ${children}, "${weirdunicode}", "${svgPath}"] `;
    var jsifiedsvg = `module.exports = { ${prefix}, ${iconName}, ${icon}};`;
    return jsifiedsvg;
}






