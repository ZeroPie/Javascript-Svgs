const fs = require('fs');
var dir = 'node_modules/@fortawesome/fontawesome-meinestadt/';
var dir2 = 'jsvgs';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
