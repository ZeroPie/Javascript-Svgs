var readdirp = require('readdirp');
var path = require('path');
var es = require('event-stream');
var fs = require('fs');
var util = require('util');
var filepath = './svgs/svgFilePaths.js';

var svgFilePaths = [];
  var settings = {
    root: './svgs',
    entryType: 'files',
    fileFilter: [ '*.svg' ],
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
