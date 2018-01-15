var fs = require('fs');
var util = require('util');
var icons$ = require('./createJsOutOfSvgs.js');
var filepath = './jsSvgs/index.js';
var iconName = 'icon';

console.log(icons$[1]);

try{
    fs.writeFileSync(filepath, icons$.join("\n"), 'utf-8');
}catch (e){
    console.log("Could not write fontawesome index.js file ", e);
}

var position = 900;
var new_text = '';

fs.readFile(filepath, function read(err, data) {
    if (err) {
        throw err;
    }
    var file_content = data.toString();
    file_content = file_content.substring(position);
    var file = fs.openSync(filepath,'r+');
    var bufferedText = new Buffer(new_text+file_content);
    fs.writeSync(file, bufferedText, 0, bufferedText.length, position);
    fs.close(file);
});