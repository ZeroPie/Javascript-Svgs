var sander = require('sander');
var util = require('util');
var path = require('path');
var readDir = require('readdir');
var extractSvgPath = require('extract-svg-path');
var extractViewbox = require('extract-svg-viewbox');
var normalize = require('normalize-svg-coords');
var dirpath = './../svgs/jobs_icons/';


var listOfSvgFilePaths = getListOfSvgFilePaths(dirpath);
var listOfSvgs = getListOfSvgs(listOfSvgFilePaths);
var listOfJavascriptSvgs = getListOfJavaScriptSvgs(listOfSvgs);
var icons$1 = getObjectOfAllIcons$1(listOfSvgs);

writeToIndexFile();


function getListOfSvgFilePaths(dirpath) {
    var listOfSvgFilePaths = [];
    listOfSvgFilePaths = readDir.readSync(dirpath, ['**.svg'], readDir.ABSOLUTE_PATHS);
    return listOfSvgFilePaths;
}

function getListOfJavaScriptSvgs(listOfSvgs) {
    var listOfJavascriptSvgs = [];
    for (var i = 0; i < listOfSvgs.length; i++) {
        var javaScriptSvg = transformSvgToJavascriptSvg(listOfSvgs[i]);
        listOfJavascriptSvgs.push(javaScriptSvg);
    }
    listOfJavascriptSvgs = `${listOfJavascriptSvgs.join('\n')} \n`;
    console.log(listOfJavascriptSvgs);
    return listOfJavascriptSvgs;
}

function getObjectOfAllIcons$1(listOfSvgs) {
    var listOfIcons$1 = [];
    for (var i = 0; i < listOfSvgs.length; i++ ) {
        var icon = listOfSvgs[i].name;
        listOfIcons$1[i] = `${icon}: ${icon}`;
    }
    var icons$1 = `var icons$1 = {\n${listOfIcons$1.join(',\n')}}; \n`;
    return icons$1;
}

function getListOfSvgs() {
    var listOfSvgs = [];
    for (var i = 0; i < listOfSvgFilePaths.length; i++) {
        var svg = createSvg();
        svg.setFilePath(listOfSvgFilePaths[i]);
        svg.setPath(extractSvgPath(listOfSvgFilePaths[i]));
        svg.setName(path.basename(listOfSvgFilePaths[i], path.extname(listOfSvgFilePaths[i])).replace(/-/g, "_"));
        listOfSvgs.push(svg);
    }
    return listOfSvgs;
}

function createSvg() {
    var filePath = '',
        name = '',
        svgPath = '',
        prefix = 'fas',
        icon = '',
        abbreviation = 'msJSVG',
        children = [];
        viewBox = {
            minx: 0,
            miny: 0,
            width: 44,
            height: 44,
        };
    return {
        filePath: filePath,
        name: name,
        svgPath: svgPath,
        abbreviation: abbreviation,
        prefix: prefix,
        children: children,
        viewBox: viewBox,
        setFilePath: function setFilePath(filePath) {
            this.filePath = filePath;
            return this;
        },
        setPath: function setsvgPath(svgPath) {
            this.svgPath = svgPath;
            return this;
        },
        setName: function setName(name) {
            this.name = name;
            return this;
        }

    };
}

function transformSvgToJavascriptSvg(svg) {
    var javascriptSvg;
    var variable = `var ${svg.name} =`; 
    var prefix = `prefix: '${svg.prefix}'` || 'ms';
    var name = `iconName: '${svg.name}'` || 'noName';
    var children = `${svg.children}` || '[]';
    var icon = `icon: [${svg.viewBox.width} , ${svg.viewBox.height} , ${children}, "${svg.abbreviation}", "${svg.svgPath}"]`;
    var content = ` { ${prefix}, ${name}, ${icon}};`;
    var javaScriptSvg = `${variable}${content}`;
    return javaScriptSvg;
}

function writeToIndexFile () {
    var indexFileTemplate = "indexTemplate.js";
    var indexFileName = "indexAfter.js";
    var indexFile = sander.readFileSync(indexFileTemplate).toString().split("\n");
    indexFile.splice(100, 0, `${listOfJavascriptSvgs}\n${icons$1}`);
    var indexfileContent = indexFile.join("\n");
    sander.writeFileSync(indexFileName, indexfileContent);
    sander.copyFile(indexFileName).to('../icons/@fortawesome/fontawesome-meinestadt/index.js');
}






