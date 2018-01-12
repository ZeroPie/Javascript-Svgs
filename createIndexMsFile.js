var fs = require('fs');
var util = require('util');

var icon = require('./jsvgs/msHome.js');
var filename = icon.iconName.replace(/-/g, "");
var filepath = './jsvgs/index.js';
var content = `var ${filename} = ${util.inspect(icon)};`;

try{
    fs.writeFileSync(filepath, content, 'utf-8');
}catch (e){
    console.log("Could not write fontawesome index.js file ", e);
}
