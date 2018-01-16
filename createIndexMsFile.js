var fs = require('fs');
var msIndex = require('./msIndex');
var icons = require('./listOfSvgs.js');
var icons$1 = {}
console.log(icons);

for (icon in icons) {
    icons$1[icon] = icon.replace(/\'/, "");
}

console.log(icons$1);

try{

    /*
    fd = fs.openSync('file', 'r+')
    buf = new Buffer('somestring')
    fs.writeSync(fd, buf, 0, buf.length, 0)
    fs.close(fd)
    //fs.writeFileSync(filepath, icons.join("\n"), 'utf-8');
    */
}catch (e){
    console.log("Could not write fontawesome index.js file ", e);
}


