const svgson = require('svgson');
const fs = require('fs');
var path = require('path');
var util = require('util');

var svgsFilePaths = require('./../svgs/svgFilePaths.js');
var listOfSvgs = {}; 
var listOfSvgsArray = [];
let writeStream = fs.createWriteStream('listOfSvgs.js');
  

for (let svgFilePath of svgsFilePaths) {
  fs.readFile(svgFilePath, 'utf-8', function(err, data) {
    console.log(svgFilePath);
    var filename = path.basename(svgFilePath, path.extname(svgFilePath)).replace(/-/g, "_");
    svgson(
      data,
      {
        svgo: true,
        title: filename,
        pathsKey: '',
        pretty: true,
        key: 'all',
      },
      
      function(result) {
        //console.log(result);
        listOfSvgs[filename] = result;
        fs.writeFile('./listOfSvgs.js', util.inspect(listOfSvgs), 'utf-8');
      }
    )
  })
}
