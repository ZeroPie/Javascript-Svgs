var fs = require('fs');
var sander = require( 'sander' );
var util  = require('util');
var path = require ('path');
var svgson = require('svgson');
var readDir = require('readdir');
var parse = require('parse-svg-path');
var extract = require('extract-svg-path');
var extractViewbox = require('extract-svg-viewbox')
var dirpath = './../svgs/test/';
var svgFilepaths = readDir.readSync(dirpath , ['**.svg'], readDir.ABSOLUTE_PATHS);
var normalize = require('normalize-svg-coords');
console.log(svgFilepaths);

var allSvgs = [];
var svgsAsVariablesArr = [];
var svgsAsVariablesObj = {};
var icons$1obj = {};
var icons$1arr = [];
var iconsPrefix = "prefix: 'fas'";

for(var i = 0; i < svgFilepaths.length; i++){ 
    readSVGContentIntoArray(svgFilepaths); 
    svgson(allSvgs[i], getsvgsonConfig(), (result) => { 
      chewJson(svgFilepaths,result);
    })
}

function getsvgsonConfig() {
  var svgsonConfig = {
    svgo: true,
    title: 'myFile',
    key: 'all',
    customAttrs: {
      foo: true,
    },
  }
  return svgsonConfig;
}




function chewJson(svgFilepaths, result) {
  createArrayOfVariableNames(svgFilepaths, result);
  createIcons$1(svgFilepaths, result);
}

function saveSvgsInObject(result){
  svgsAsJsonsArray.push(result);
}

function saveSvgsInArray(result){
  svgsAsJsonsObj[i] = result;
}

function readSVGContentIntoArray(svgFilepaths){
  allSvgs[i] = sander.readFileSync(`${svgFilepaths[i]}`).toString('utf8');     //reads Buffer ergo to String
  //TODO: maybe dont parse as json at all!!!!: -->>
  var viewBox = extractViewbox(allSvgs[i]);

}

function getviewBox(result){
  var minx,miny,width,height;
  //console.log(result.attrs.viewBox);
  return result.attrs.viewBox;
}


function createArrayOfVariableNames(svgFilepaths, result){
  getviewBox(result);
  var svgPath = extract(svgFilepaths[i]);
  //var svgParsedPath = parse(svgPath);
  var fileName = path.basename(svgFilepaths[i], path.extname(svgFilepaths[i])).replace(/-/g, "_");
  var variableName = `var ${fileName} =`; 
  var iconName = `iconName: '${fileName}'`;
  var originalViewBox = result.attrs.viewBox.replace(/\./g, "");
  var viewBox = {
    minx: 0,
    miny: 0,
    width: 100,
    height: 100,
  }
  var normalizedPath = normalize({
    viewBox: `${viewBox.minx} ${viewBox.miny} ${viewBox.width} ${viewBox.height}`,
    path: svgPath,
    asList: false
  })

  var children = '[]';
  var uniCode = "f2b9";
  var uniCodef = `${fileName.slice(1, -1)}`; //TODO n Stuff
  var icon = `icon: [${viewBox.width} , ${viewBox.height} , ${children}, "${uniCode}", "${svgPath}"]`;

  var content = `{ ${iconsPrefix}, ${iconName}, ${icon}};`;
  svgsAsVariablesArr[i] = `${variableName}${content}`;
  
}




function createIcons$1(result){
  var icon = path.basename(svgFilepaths[i], path.extname(svgFilepaths[i])).replace(/-/g, "_"); 
  icons$1arr[i] = `${icon}:${icon}`;
}


var icons$1 = `var icons$1 = {${icons$1arr.join(',\n')} }; \n`;
var svgsAsVariablesArr = `${svgsAsVariablesArr.join('\n')};`;

console.log(svgsAsVariablesArr);

//replace/insert stuff in index.js file
var indexfile = sander.readFileSync("testindex.js").toString().split("\n");
    
    indexfile.splice(100, 0, `${svgsAsVariablesArr} \n ${icons$1}`);
    var indexfileContent = indexfile.join("\n");
    //console.log(indexfileContent);
    sander.writeFileSync('indexAfter.js', indexfileContent);

    sander.copyFile('indexAfter.js').to('../node_modules/@fortawesome/fontawesome-meinestadt/index.js')

//experiments/debugging/testing:
//sander.writeFileSync( 'icons', 'icons$.js', icons$);
//sander.writeFileSync( 'icons', 'icons$1arr.js' , util.inspect(icons$1arr));
//sander.writeFileSync( 'icons', 'icons$1obj.js' , util.inspect(icons$1obj));
//sander.writeFileSync( 'icons', 'svgsAsJsonsObj.json', util.inspect(svgsAsJsonsObj));
//sander.writeFileSync( 'icons', 'svgsAsJsonsArray.json', util.inspect(svgsAsJsonsArray));

