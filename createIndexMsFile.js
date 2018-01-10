const fs = require('fs');

var path = 'node_modules/@fortawesome/fontawesome-meinestadts/index.js';  
var buffer = new Buffer("test");

fs.open(path, 'w', function(err, fd) {  
    if (err) {
        throw 'could not open file: ' + err;
    }

    // write the contents of the buffer, from position 0 to the end, to the file descriptor returned in opening our file
    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
        if (err) throw 'error writing file: ' + err;
        fs.close(fd, function() {
            console.log('wrote the file successfully');
        });
    });
});
