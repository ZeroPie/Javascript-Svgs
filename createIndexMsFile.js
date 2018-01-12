var fs = require('fs');
var util = require('util');

var icons = require('./createJsOutOfSvgs.js');
var filepath = './jsvgs/index.js';

try{
    fs.writeFileSync(filepath, icons.join(""), 'utf-8');
}catch (e){
    console.log("Could not write fontawesome index.js file ", e);
}
