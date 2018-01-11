var fs = require('fs');
var svgFilePaths = require('./svgs/svgFilePaths');


for (let svgPath of svgFilePaths) {
    fs.readFile(`${svgPath}`, 'utf8', function(err, contents) {
        console.log(svgPath + contents);
    });
}


console.log('after calling readFile');