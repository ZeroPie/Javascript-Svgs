var fs = require('fs');
var sander = require( 'sander' );
var util  = require('util');
var path = require ('path');
var readDir = require('readdir');
var extractSvgPath = require('extract-svg-path');
var extractViewbox = require('extract-svg-viewbox');
var dirpath = './../svgs/jobs_icons/';
var svgFilepaths = readDir.readSync(dirpath , ['**.svg'], readDir.ABSOLUTE_PATHS);
var normalize = require('normalize-svg-coords');
console.log(svgFilepaths);

var allSvgs = [];
var svgsAsVariablesArr = [];
var icons$1arr = [];

//svg object class here --> instantiate inside of getAllSvgs

var listOfSvgs = [];
listOfSvgs = getAllSvgs(svgFilepaths);

function Svg(filename, content) {
    this.filename = 'noname';
    this.content = 'content';
};

//https://medium.com/javascript-scene/why-composition-is-harder-with-classes-c3e627dcd0aa
const createSvg = ({ fileName, content}) => ({
    filename,
    content
});

const inSvg = createSvg({
    fileName: '',
    content: ''
});

for(var svg of listOfSvgs) {
    console.log(svg);
    createJsSvg(svg);
}

function getAllSvgs(svgFilepaths) {
    var listOfSvgs = []; 
    var rSvg = createSvg({
      fileName: '',
      content: ''
    });
    for (var svgFilepath of svgFilepaths) {
      rSvg.fileName = path.basename(svgFilepath, path.extname(svgFilepath)).replace(/-/g, "_");
      rSvg.content = sander.readFileSync(svgFilepath).toString('utf8') 
      listOfSvgs.push(rSvg); 
    }
    return listOfSvgs;
}

function createJsSvg(svg) {

    var jsSvg = {
        fileName: svg.fileName,
        variableName: `var ${this.fileName} =`, 
        iconName: `iconName: '${this.fileName}'`,
        viewBox: {
            minx: 0,
            miny: 0,
            width: 44,
            height: 44,
        },
        children: [],
        unicode: 'msfa',
        path: extractSvgPath(svg),
        icon: `icon: [${this.viewBox} , ${this.viewBox} , ${this.children}, "${this.uniCodef}", "${this.path}"]`,
    };

    return jsSvg;
  }


for(var i = 0; i < svgFilepaths.length; i++){ 
    allSvgs[i] = sander.readFileSync(`${svgFilepaths[i]}`).toString('utf8'); 
    createArrayOfVariableNames(svgFilepaths, allSvgs[i]);
    createIcons$1(svgFilepaths, allSvgs[i]);
}






function createArrayOfVariableNames(svgFilepaths, svg){
  var svgPath = extractSvgPath(svgFilepaths[i]);
      fileName = path.basename(svgFilepaths[i], path.extname(svgFilepaths[i])).replace(/-/g, "_");
      variable = `var ${fileName} =`; 
      iconName = `iconName: '${fileName}'`;
      originalViewBox = extractViewbox(svg);
      iconsPrefix = "prefix: 'fas'";

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
