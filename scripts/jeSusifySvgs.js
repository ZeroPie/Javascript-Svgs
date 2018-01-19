var fs = require('fs');
var sander = require( 'sander' );
var util  = require('util');
var path = require ('path');
var svgson = require('svgson');
var readDir = require('readdir');
var extract = require('extract-svg-path');
var extractViewbox = require('extract-svg-viewbox');
var dirpath = './../svgs/test/';
var svgFilepaths = readDir.readSync(dirpath , ['**.svg'], readDir.ABSOLUTE_PATHS);
var normalize = require('normalize-svg-coords');
console.log(svgFilepaths);

var allSvgs = [];
var svgsAsVariablesArr = [];
var icons$1arr = [];
var iconsPrefix = "prefix: 'fas'";

for(var i = 0; i < svgFilepaths.length; i++){ 
    readSVGContentIntoArray(svgFilepaths); 
    svgson(allSvgs[i], getsvgsonConfig(), (svgAsJson) => { 
      chewJson(svgFilepaths, svgAsJson);
    });
}

function getsvgsonConfig() {
  var svgsonConfig = {
    svgo: true,
    title: 'myFile',
    key: 'all',
    customAttrs: {
      foo: true,
    },
  };
  return svgsonConfig;
}

function chewJson(svgFilepaths, svgAsJson) {
  createArrayOfVariableNames(svgFilepaths, svgAsJson);
  createIcons$1(svgFilepaths, svgAsJson);
}

function readSVGContentIntoArray(svgFilepaths){
  allSvgs[i] = sander.readFileSync(`${svgFilepaths[i]}`).toString('utf8');     //reads Buffer ergo to String
  //TODO: with these maybe there is no  need to parse as json at all!!!!: -->>
  var viewBox = extractViewbox(allSvgs[i]);

}

function getviewBox(svgAsJson){
  var minx,miny,width,height;
  return svgAsJson.attrs.viewBox;
}

function createArrayOfVariableNames(svgFilepaths, svgAsJson){
  var svgPath = extract(svgFilepaths[i]);
  var fileName = path.basename(svgFilepaths[i], path.extname(svgFilepaths[i])).replace(/-/g, "_");
  var variable = `var ${fileName} =`; 
  var iconName = `iconName: '${fileName}'`;
  var originalViewBox = svgAsJson.attrs.viewBox.replace(/\./g, "");
  var viewBox = {
    minx: 0,
    miny: 0,
    width: 100,
    height: 100,
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


function createIcons$1(svgAsJson){
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
