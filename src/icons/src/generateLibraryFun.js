var jsSvgsGenerator = require('../utils/jsSvgsGeneratorFun');

var dirpath = './svgs/jobs_icons';
var libraryTemplate = "./src/icons/templates/libraryTemplate.js";
var libraryDestination = "./src/icons/@fortawesome/fontawesome-meinestadt/index.js";

var options = {
    dirpath: dirpath,
    normalize: false,
    viewBox: {
        minx: 0,
        miny: 0,
        width: 44,
        height: 44,
    },
    prefix: 'fas',
    libraryTemplate: libraryTemplate,
    libraryDestination: libraryDestination,
};

var jsSvgsGenerator = new jsSvgsGenerator(options);
console.log(jsSvgsGenerator);
jsSvgsGenerator.createIconsLibrary();