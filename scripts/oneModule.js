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

for(var i = 0; i < svgFilepaths.length; i++){ 
    createArrayOfVariableNames(svgFilepaths);
    readSvgintoArray(svgFilepaths); 
    svgson(allSvgs[i], getsvgsonConfig(),(result) => {
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



console.log(variableNames);
console.log(svgsAsJsonsObj[2]);
console.log('');
console.log(svgsAsJsonsArray[2]);

sander.writeFileSync( 'svgsAsJsonsObj.json', util.inspect(svgsAsJsonsObj) , svgsAsJsonsObj);
sander.writeFileSync( 'svgsAsJsonsArray.json', util.inspect(svgsAsJsonsArray) , svgsAsJsonsArray);

