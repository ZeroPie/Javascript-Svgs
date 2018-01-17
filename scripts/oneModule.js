var fs = require('fs');
var sander = require( 'sander' );
var util  = require('util');
var path = require ('path');
var svgson = require('svgson');
var readDir = require('readdir');
var parse = require('parse-svg-path');
var extract = require('extract-svg-path');
var dirpath = './../svgs/test/';

var svgFilepaths = readDir.readSync(dirpath , ['**.svg'], readDir.ABSOLUTE_PATHS);

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

console.log(svgFilepaths);

var allSvgs = [];
var svgsAsJsonsArray = [];
var svgsAsJsonsObj = {};
var variableNames = [];
var icons$1obj = {};
var icons$1arr = [];

for(var i = 0; i < svgFilepaths.length; i++){ 
    createArrayOfVariableNames(svgFilepaths);
    readSvgintoArray(svgFilepaths); 
    svgson(allSvgs[i], getsvgsonConfig(),(result) => {
      createIcons$1(svgFilepaths, result);
      chewJson(result);
     }
    )
}


function chewJson(result) {
  getviewBox(result);
  saveSvgsInObject(result);
  saveSvgsInArray(result);
  buildJavascriptSvg(result);
  
}

function saveSvgsInObject(result){
  svgsAsJsonsArray.push(result);
}

function saveSvgsInArray(result){
  svgsAsJsonsObj[i] = result;
}

function readSvgintoArray(svgFilepaths){
  allSvgs[i] = sander.readFileSync(`${svgFilepaths[i]}`).toString('utf8');     //reads Buffer ergo to String
}

function getviewBox(result){
  var minx,miny,width,height;
  console.log(result.attrs.viewBox);
  return result.attrs.viewBox;
}


function buildJavascriptSvg(result){

}

function createArrayOfVariableNames(svgFilepaths){
  //turn - into _ and remove file extension
  variableNames[i] = path.basename(svgFilepaths[i], path.extname(svgFilepaths[i])).replace(/-/g, "_"); 
}

function createIcons$1(result){
  //turn - into _ and remove file extension
  var icon = path.basename(svgFilepaths[i], path.extname(svgFilepaths[i])).replace(/-/g, "_"); 
  icons$1arr[i] = `${icon}:${icon}`;
  icons$1obj[icon]= icon;
}

var icons$ = `var icons$ = {${icons$1arr.toString()}};`;

//replace/insert stuff in index.js file

var indexfile = sander.readFileSync("testindex.js").toString().split("\n");
    indexfile.splice(100, 0, icons$);
    var text = indexfile.join("\n");
    console.log(text);
    fs.writeFileSync('indexAfter.js', text, function (err) {
      if (err) return console.log(err);
    });
  console.log('readFileSync complete');


sander.writeFileSync( 'icons', 'icons$.js', icons$);

//experiments/debugging/testing:
//sander.writeFileSync( 'icons', 'icons$1arr.js' , util.inspect(icons$1arr));
//sander.writeFileSync( 'icons', 'icons$1obj.js' , util.inspect(icons$1obj));
//sander.writeFileSync( 'icons', 'svgsAsJsonsObj.json', util.inspect(svgsAsJsonsObj));
//sander.writeFileSync( 'icons', 'svgsAsJsonsArray.json', util.inspect(svgsAsJsonsArray));

