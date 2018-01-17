var fs = require('fs');
var path = require('path');
var readdirp = require('readdirp');
var util = require('util');
var filepath = './../svgs/svgFilePaths.js';

var svgFilePaths = [];
  var settings = {
    root: './../svgs/test',
    entryType: 'files',
    fileFilter: [ '*.svg' ],
    depth: 1
  };
  
readdirp(settings, 
  function(fileInfo) {
    svgFilePaths.push(`"${fileInfo.fullPath}"`);
  }, 
  function (err, res) {
    if(err){
        throw err;
    }
    try{
      fs.writeFileSync(filepath, `var svgFilePaths = [${svgFilePaths} ]; \nmodule.exports = svgFilePaths;`, 'utf-8');
    } catch (e){
      console.log("could not write array of svg file paths to convert", e);
    }
  } 
)
