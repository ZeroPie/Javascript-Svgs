const svgson = require('svgson');
const fs = require('fs');
var path = require('path');
var util = require('util');

var svgsFilePaths = require('./svgs/svgFilePaths.js');
var listOfSvgs = {}; 
let writeStream = fs.createWriteStream('listOfSvgs.js');
  

for (let svgFilePath of svgsFilePaths) {
  fs.readFile(svgFilePath, 'utf-8', function(err, data) {
    var filename = path.basename(svgFilePath, path.extname(svgFilePath)).replace(/-/g, "_");
    svgson(
      data,
      {
        svgo: true,
        title: '',
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
