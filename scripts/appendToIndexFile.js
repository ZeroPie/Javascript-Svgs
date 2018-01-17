var fs = require('fs');
var util = require('util')
var msIndex = require('./../msIndex');
var icons = require('./listOfSvgs.js');
var icons$1 = {}
var allJsSvgs = require('./../jsSvgs');

console.log('all svgs', allJsSvgs);

for (icon in icons) {
    icons$1[icon] = icon.replace(/\'/, "");
}

//console.log(icons$1);
//console.log(util.inspect(msIndex));

try{
    var data = fs.readFileSync('testindex.js').toString().split("\n");
        data.splice(100, 0, `var icons$1 = ${util.inspect(icons$1)}`);
    var text = data.join("\n");

    fs.writeFileSync('indexAfter.js', text, function (err) {
        if (err) return console.log(err);
      });
    console.log('readFileSync complete');
    
}catch (e){
    console.log("Could not write fontawesome index.js file ", e);
}


