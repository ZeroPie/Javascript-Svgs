var fs = require('fs');
var util = require('util');
var icons = require('./createJsOutOfSvgs.js');
var filepath = './jsSvgs/index.js';
var iconName = 'icon';


try{
    fs.writeFileSync(filepath, icons.join("\n"), 'utf-8');
}catch (e){
    console.log("Could not write fontawesome index.js file ", e);
}


