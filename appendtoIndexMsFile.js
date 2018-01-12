const fs = require('fs');

// add a line to a lyric file, using appendFile
fs.appendFile('./jsvgs/index.js', "var indexMS = require('./indexMS');", (err) => {  
    if (err) throw err;
    console.log('updated!');
});
