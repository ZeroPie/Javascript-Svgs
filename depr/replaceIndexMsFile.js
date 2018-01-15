const fs = require('fs');

fs.readFile("./jsvgs/index.js", function(err, content) {
    if (err) throw err;
    if(content.indexOf('exports') >= 0){
        console.log(content);
    }
});

fs.appendFile('./jsvgs/index.js', "var indexMS = require('./indexMS');", (err) => {  
    if (err) throw err;
    console.log('updated!');
});

fs.appendFileSync('./jsvgs/index.js', 'sync', encoding='utf8');
