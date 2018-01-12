var fs = require('fs');
var path = require('path');
var svgsFilePaths = require('./svgs/svgFilePaths.js');
var parse = require('parse-svg-path');
var extract = require('extract-svg-path');
var jesusifiedSvgs = []; 

var dir = 'node_modules/@fortawesome/fontawesome-meinestadt/';
var dir2 = 'jsvgs';

if (!fs.existsSync(dir2)){
    fs.mkdirSync(dir2);
}

for (let svgFilePath of svgsFilePaths) {
    var filename = path.basename(svgFilePath, path.extname(svgFilePath));
    var writeStream = fs.createWriteStream(`./jsvgs/${filename}.js`);
        jesusifiedSvgs.push(jsfySvg(svgFilePath));
        writeStream.write(jsfySvg(svgFilePath));
        writeStream.on('finish', () => {      
            console.log(`cheese`);
        });
    writeStream.end(); 
}

//create index file:
var filepath = './jsvgs/index.js';


try{
    fs.writeFileSync(filepath, jesusifiedSvgs.join(""), 'utf-8');
}catch (e){
    console.log("Could not write fontawesome index.js file ", e);
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

module.exports = jesusifiedSvgs;




