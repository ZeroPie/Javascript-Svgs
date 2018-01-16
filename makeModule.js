var fs = require('fs');
var file = './listOfSvgs.js';
var data = fs.readFileSync(file); //read existing contents into data
var fd = fs.openSync(file, 'w+');
    
    buffer = new Buffer("module.exports = ");
    fs.writeSync(fd, buffer, 0, buffer.length, 0); //write new data
    fs.writeSync(fd, data, 0, data.length, buffer.length); //append old data
    fs.close(fd)