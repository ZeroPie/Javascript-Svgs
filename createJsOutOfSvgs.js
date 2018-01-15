var fs = require('fs');
var path = require('path');
var parse = require('parse-svg-path');
var extract = require('extract-svg-path');
var svgsFilePaths = require('./svgs/svgFilePaths.js');

var directoryOfJsSvgs = 'jsSvgs';
if (!fs.existsSync(directoryOfJsSvgs)){fs.mkdirSync(directoryOfJsSvgs);}

var javascriptSvgs = []; 
for (let svgFilePath of svgsFilePaths) {
    var filename = path.basename(svgFilePath, path.extname(svgFilePath)).replace(/-/g, "_");
        javascriptSvgs.push(svgToJavascriptVariable(svgFilePath, filename));
    var writeStream = fs.createWriteStream(`./${directoryOfJsSvgs}/${filename}.js`);
        writeStream.write(svgToJavascriptSvg(svgFilePath, filename));
        console.log(`${path.basename(svgFilePath)} => ${directoryOfJsSvgs}/${filename}.js`);
        writeStream.end(); 
}

function svgToJavascriptSvg(svgFilePath, filename) {
    var svgPath = extract(svgFilePath);
    var svgParsedPath = parse(svgPath);
    var prefix = "prefix: 'fas'";
    var iconName = `iconName: '${filename}'`;
    var viewBoxX = "512";
    var viewBoxY = "512";
    var children = '[]';
    var weirdunicode = "f2b9";
    var icon = `icon: [${viewBoxX} , ${viewBoxY} , ${children}, "${weirdunicode}", "${svgPath}"] `;
    var jsModuleSVG = `module.exports = { ${prefix}, ${iconName}, ${icon}};`;
    return jsModuleSVG;
}

function svgToJavascriptVariable(svgFilePath, filename) {
    var svgPath = extract(svgFilePath);
    var svgParsedPath = parse(svgPath);
    var prefix = "prefix: 'fas'";
    var varName = `${filename}`;
    var iconName = `iconName: '${filename}'`;
    var viewBoxX = "512";
    var viewBoxY = "512";
    var children = '[]';
    var weirdunicode = "f2b9";
    var icon = `icon: [${viewBoxX} , ${viewBoxY} , ${children}, "${weirdunicode}", "${svgPath}"] `;
    var svgAsJavascriptVariable = `var ${varName} = { ${prefix}, ${iconName}, ${icon}};`;
    return svgAsJavascriptVariable;
}

module.exports = javascriptSvgs;




