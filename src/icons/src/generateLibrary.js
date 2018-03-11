var javascriptSvgsGenerator = require("../utils/javascriptSvgsGenerator");

let svgsFolder = "./svgs/new";
let libraryTemplate = "./src/icons/templates/libraryTemplate.js";
let libraryDestination = "./src/icons/@fortawesome/fontawesome-meinestadt/index.js";
let testFileDestination = "./src/icons/test/test.html"

let options = {
    svgsFolder: svgsFolder,
    normalize: false,
    viewBox: {
        minx: 0,
        miny: 0,
        width: 44,
        height: 44
    },
    prefix: "fas",
    libraryTemplate: libraryTemplate,
    libraryDestination: libraryDestination,
    testFileDestination: testFileDestination
};

var javascriptSvgsGenerator = new javascriptSvgsGenerator(options);
javascriptSvgsGenerator.createIconsLibrary();
let javascriptSvgsArray = javascriptSvgsGenerator.getListOfJavaScriptSvgsAsArray();
javascriptSvgsGenerator.generateTestHTMLFile();


console.log(javascriptSvgsArray);