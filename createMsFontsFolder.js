const fs = require('fs');
var dir = 'node_modules/@fortawesome/fontawesome-meinestadt/';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}