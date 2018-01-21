var fs = require('fs');
var sander = require( 'sander' );
var util  = require('util');
var path = require ('path');
var readDir = require('readdir');
var extract = require('extract-svg-path');
var extractViewbox = require('extract-svg-viewbox');
var dirpath = './../svgs/jobs_icons/';

var normalize = require('normalize-svg-coords');



var svgsAsVariablesArr = [];
var icons$1arr = [];
var iconsPrefix = "prefix: 'fas'";

var listOfSvgFilePaths = getListOfSvgFilePaths(dirpath);
var listOfRawSvgs = getListOfRawSvgs(listOfSvgFilePaths);



function getListOfSvgFilePaths(dirpath) {
    var listOfSvgFilePaths = [];
    listOfSvgFilePaths = readDir.readSync(dirpath , ['**.svg'], readDir.ABSOLUTE_PATHS);
    console.log(listOfSvgFilePaths);
    return listOfSvgFilePaths;
}

function getListOfRawSvgs() {
    var listOfRawSvgs = [];
    for (var i = 0; i < listOfSvgFilePaths.length; i++) {
            var rawSvg = createRawSvg('');
            rawSvg.setFilePath(listOfSvgFilePaths[i]);
            console.log(rawSvg.filePath);
            listOfRawSvgs.push(rawSvg);
    }
    console.log(listOfRawSvgs);
    return listOfRawSvgs;
}


function createRawSvg (_ref) { 
    var filepath = _ref.filePath || 'empty',
        content = _ref.content || 'empty',
    rawContent = _ref.stuff || 'empty',
    content = '',
    path = '',
    prefix = '',
    iconName = '',
    icon = '',
    children = [];
    viewBox = {
        minx: 0,
        miny: 0,
        width: 44,
        height: 44,
    };
    return {
        filepath: filepath,
        content: content,
        setFilePath: function setFilePath(filePath) {
            this.filePath = filePath;
            return this;
        },
        setContent: function setFilePath(rawContent) {
            this.content = rawContent;
            return this;
        }
    };
};

var listOfSvgs = []; 
for(var i = 0; i < listOfSvgFilePaths.length; i++) {  
    listOfSvgs[i] = sander.readFileSync(`${listOfSvgFilePaths[i]}`).toString('utf8'); //reads Buffer ergo to String
    createArrayOfVariableNames(listOfSvgFilePaths, listOfSvgs[i]);
    createIcons$1(listOfSvgFilePaths, listOfSvgs[i]);
}


var allSvgs = [];
for(var i = 0; i < listOfSvgFilePaths.length; i++){ 
  allSvgs[i] = sander.readFileSync(`${listOfSvgFilePaths[i]}`).toString('utf8'); //reads Buffer ergo to String
  createArrayOfVariableNames(listOfSvgFilePaths, allSvgs[i]);
  createIcons$1(listOfSvgFilePaths, allSvgs[i]);
}

function createArrayOfVariableNames(svgFilepaths, svg){
  var svgPath = extract(svgFilepaths[i]);
      fileName = path.basename(svgFilepaths[i], path.extname(svgFilepaths[i])).replace(/-/g, "_");
      variable = `var ${fileName} =`; 
      iconName = `iconName: '${fileName}'`;
      originalViewBox = extractViewbox(svg);
  //console.log(originalViewBox);  
  var viewBox = {
    minx: 0,
    miny: 0,
    width: 44,
    height: 44,
  };

  var normalizedPath = normalize({
    viewBox: `${viewBox.minx} ${viewBox.miny} ${viewBox.width} ${viewBox.height}`,
    path: svgPath,
    asList: false
  });

  var children = '[]';
  var uniCode = "f2b9";
  var uniCodef = `${fileName.slice(1, -1)}`; //TODO n Stuff
  var icon = `icon: [${viewBox.width} , ${viewBox.height} , ${children}, "${uniCodef}", "${svgPath}"]`;
  var content = ` { ${iconsPrefix}, ${iconName}, ${icon}};`;
  svgsAsVariablesArr[i] = `${variable}${content}`;
  
}


function createIcons$1(svgFilepaths){
  var icon = path.basename(svgFilepaths[i], path.extname(svgFilepaths[i])).replace(/-/g, "_"); 
  icons$1arr[i] = `${icon}: ${icon}`;
}


var icons$1 = `var icons$1 = {\n${icons$1arr.join(',\n')}}; \n`;
var svgsAsVariablesArr = `${svgsAsVariablesArr.join('\n')} \n`;

function writeIndexFile(){
  var indexFileTemplate = "indexVirgin.js";
  var indexFileName = "indexAfter.js";
  var indexfile = sander.readFileSync(indexFileTemplate).toString().split("\n");
  indexfile.splice(100, 0, `${svgsAsVariablesArr}\n${icons$1}`);
  var indexfileContent = indexfile.join("\n");
  sander.writeFileSync(indexFileName, indexfileContent);
  sander.copyFile(indexFileName).to('../node_modules/@fortawesome/fontawesome-meinestadt/index.js');
}




writeIndexFile();