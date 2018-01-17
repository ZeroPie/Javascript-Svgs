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
}

function getviewBox(result){
  var minx,miny,width,height;
  //console.log(result.attrs.viewBox);
  return result.attrs.viewBox;
}


function createArrayOfVariableNames(svgFilepaths, result){
  getviewBox(result);
  var fileName = path.basename(svgFilepaths[i], path.extname(svgFilepaths[i])).replace(/-/g, "_");
  var variableName = `var ${fileName} =`; 
  var iconName = `iconName: '${fileName}'`;
  var variableContent = `{ ${iconsPrefix} ${iconName} };`;
  //turn - into _ and remove file extension
  svgsAsVariablesArr[i] = `${variableName}${variableContent}`;
  svgsAsVariablesObj = `${variableName} ${variableContent}`;




  var svgObject = {
    prefix: 'fas',
    iconName : `iconName: '${fileName}'`,
  }
}




function createIcons$1(result){
  //turn - into _ and remove file extension
  var icon = path.basename(svgFilepaths[i], path.extname(svgFilepaths[i])).replace(/-/g, "_"); 
  icons$1arr[i] = `${icon}:${icon}`;
  //icons$1obj[icon]= icon;
}


var icons$ = `var icons$ = {${icons$1arr.toString()}};`;
var svgsAsVariablesArr = `${svgsAsVariablesArr.toString()};`;


//replace/insert stuff in index.js file
var indexfile = sander.readFileSync("testindex.js").toString().split("\n");
    //indexfile.splice(100, 0, icons$);
    indexfile.splice(100, 0, svgsAsVariablesArr);
    var indexfileContent = indexfile.join("\n");
    //console.log(indexfileContent);
    sander.writeFileSync('indexAfter.js', indexfileContent);



//experiments/debugging/testing:
//sander.writeFileSync( 'icons', 'icons$.js', icons$);
//sander.writeFileSync( 'icons', 'icons$1arr.js' , util.inspect(icons$1arr));
//sander.writeFileSync( 'icons', 'icons$1obj.js' , util.inspect(icons$1obj));
//sander.writeFileSync( 'icons', 'svgsAsJsonsObj.json', util.inspect(svgsAsJsonsObj));
//sander.writeFileSync( 'icons', 'svgsAsJsonsArray.json', util.inspect(svgsAsJsonsArray));

