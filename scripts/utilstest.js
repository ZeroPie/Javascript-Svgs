var svgUtils = require('./svgUtils');
var dirpath = './../svgs/jobs_icons/';


var listOfJavascriptSvgs = svgUtils.createJavascriptSvgs(dirpath);
var icons = svgUtils.createIconsObject(dirpath);
console.log(listOfJavascriptSvgs);
console.log(icons);

//init function with path and dir => remove params from create methods
