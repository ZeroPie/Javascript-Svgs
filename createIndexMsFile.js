var fs = require('fs');
var util = require('util');

var icon = require('./msHome.js');
var filename = icon.iconName.replace(/-/g, "");
var filepath = 'node_modules/@fortawesome/fontawesome-meinestadt/index.js';
var content = `var ${filename} = ${util.inspect(icon)};`;

try{
    fs.writeFileSync(filepath, content, 'utf-8');
}catch (e){
    console.log("Could not write to fontawesome-meinestadt index.js file ", e);
}
