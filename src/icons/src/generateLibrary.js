let JavascriptSvgsGenerator = require("../utils/javascriptSvgsGenerator");
let svgsFolder = "./svgs/new";
let libraryTemplate = "./src/icons/templates/libraryTemplate.js";
let libraryDestination = "./src/icons/@fortawesome/fontawesome-meinestadt/index.js";
let testFileDestination = "./src/icons/test/allIconsList.html"

let options = {
    svgsFolder: svgsFolder,
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

let javascriptSvgsGenerator = new JavascriptSvgsGenerator(options);
javascriptSvgsGenerator.createIconsLibrary();
javascriptSvgsGenerator.generateTestHTMLFile();