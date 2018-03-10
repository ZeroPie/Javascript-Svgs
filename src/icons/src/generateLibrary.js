var javascriptSvgsGenerator = require("../utils/javascriptSvgsGenerator");

var svgsFolder = "./svgs/new";
var libraryTemplate = "./src/icons/templates/libraryTemplate.js";
var libraryDestination =
    "./src/icons/@fortawesome/fontawesome-meinestadt/index.js";

var options = {
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
    libraryDestination: libraryDestination
};

var javascriptSvgsGenerator = new javascriptSvgsGenerator(options);
javascriptSvgsGenerator.createIconsLibrary();
let javascriptSvgsArray = javascriptSvgsGenerator.getListOfJavaScriptSvgsAsArray();

console.log(javascriptSvgsArray);