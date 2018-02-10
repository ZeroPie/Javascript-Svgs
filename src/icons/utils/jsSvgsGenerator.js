var sander = require('sander');
var util = require('util');
var path = require('path');
var readDir = require('readdir');
var extractSvgPath = require('extract-svg-path');

module.exports = {

    config: function config ({
        dirpath: dirpath,
        destinationpath:destinationpath,
    } = { //defaults:
        dirpath: 50, 
        destinationpath: 50
    }) 
    {
        console.log(dirpath, destinationpath);
        return {
            
        }
        
    },

    createSvg: function createSvg() {
        'use strict';
        var filePath = '',
            name = '',
            svgPath = '',
            prefix = 'fas',
            icon = '',
            abbreviation = 'msJSVG',
            children = [],
            viewBox = {
                minx: 0,
                miny: 0,
                width: 44,
                height: 44,
            };
        return {
            filePath: filePath,
            name: name,
            svgPath: svgPath,
            abbreviation: abbreviation,
            prefix: prefix,
            children: children,
            viewBox: viewBox,
            setFilePath: function setFilePath(filePath) {
                this.filePath = filePath;
                return this;
            },
            setPath: function setsvgPath(svgPath) {
                this.svgPath = svgPath;
                return this;
            },
            setName: function setName(name) {
                this.name = name;
                return this;
            }
    
        };
    },
    
    getListOfSvgFilePaths: function getListOfSvgFilePaths (dirpath) {
        'use strict';
        var listOfSvgFilePaths = [];
        listOfSvgFilePaths = readDir.readSync(dirpath, ['**.svg'], readDir.ABSOLUTE_PATHS);
        return listOfSvgFilePaths;
    },
    
    getListOfSvgs: function getListOfSvgs(listOfSvgFilePaths) {
        'use strict';
        var listOfSvgs = [];
        for (var i = 0; i < listOfSvgFilePaths.length; i++) {
            var svg = this.createSvg();
            svg.setFilePath(listOfSvgFilePaths[i]);
            svg.setPath(extractSvgPath(listOfSvgFilePaths[i]));
            svg.setName(path.basename(listOfSvgFilePaths[i], path.extname(listOfSvgFilePaths[i])).replace(/-/g, "_"));
            listOfSvgs.push(svg);
        }
        return listOfSvgs;
    },

    getListOfJavaScriptSvgs: function getListOfJavaScriptSvgs(listOfSvgs) {
        'use strict';
        var listOfJavascriptSvgs = [];
        for (var i = 0; i < listOfSvgs.length; i++) {
            var javaScriptSvg = this.transformSvgToJavascriptSvg(listOfSvgs[i]);
            listOfJavascriptSvgs.push(javaScriptSvg);
        }
        listOfJavascriptSvgs = `${listOfJavascriptSvgs.join('\n')} \n`;
        return listOfJavascriptSvgs;
    },
    
    getAllSvgsAsIcons: function getAllSvgsAsIcons(listOfSvgs) {
        'use strict';
        var listOfIcons$1 = [];
        for (var i = 0; i < listOfSvgs.length; i++ ) {
            var icon = listOfSvgs[i].name;
            listOfIcons$1[i] = `${icon}: ${icon}`;
        }
        var icons$1 = `var icons$1 = {\n${listOfIcons$1.join(',\n')}}; \n`;
        return icons$1;
    },
    
    transformSvgToJavascriptSvg: function transformSvgToJavascriptSvg(svg) {
        'use strict';
        var javascriptSvg;
        var variable = `var ${svg.name} =`; 
        var prefix = `prefix: '${svg.prefix}'` || 'ms';
        var name = `iconName: '${svg.name}'` || 'noName';
        var children = `${svg.children}` || '[]';
        var icon = `icon: [${svg.viewBox.width} , ${svg.viewBox.height} , ${children}, "${svg.abbreviation}", "${svg.svgPath}"]`;
        var content = ` { ${prefix}, ${name}, ${icon}};`;
        var javaScriptSvg = `${variable}${content}`;
        return javaScriptSvg;
    },

    createJavascriptSvgs: function createJavascriptSvgs(dirpath) {
        'use strict';
        var listOfSvgFilePaths = this.getListOfSvgFilePaths(dirpath);
        var listOfSvgs = this.getListOfSvgs(listOfSvgFilePaths);
        var listOfJavascriptSvgs = this.getListOfJavaScriptSvgs(listOfSvgs);
        
        return listOfJavascriptSvgs;
    },

    createIconsObject: function createIconsObject(dirpath) {
        'use strict';
        var listOfSvgFilePaths = this.getListOfSvgFilePaths(dirpath);
        var listOfSvgs = this.getListOfSvgs(listOfSvgFilePaths);
        var icons$1 = this.getAllSvgsAsIcons(listOfSvgs);

        return icons$1;
    },

    writeToFontAwesomeIndexFile: function writeToFontAwesomeIndexFile (listOfJavascriptSvgs, icons$1) {
        //indexAfter.js write and copy unnecesary --> write directly to location
        'use strict';
        var indexFileTemplate = "./src/icons/templates/libraryTemplate.js";
        var indexFileName = "./src/icons/templates/msIconsLibrary.js";
        var libraryLocation = "./src/icons/@fortawesome/fontawesome-meinestadt/index.js";
        var indexFile = sander.readFileSync(indexFileTemplate).toString().split("\n");
        indexFile.splice(100, 0, `${listOfJavascriptSvgs}\n${icons$1}`);
        var indexfileContent = indexFile.join("\n");
        sander.writeFileSync(indexFileName, indexfileContent);
        sander.copyFile(indexFileName).to(libraryLocation);
        console.log(`File created ${indexFileName} at ${libraryLocation}`);
    },

    createIconsLibrary: function createIconsLibrary(dirpath) {
        'use strict';
        var icons = this.createIconsObject(dirpath);
        var listOfJavascriptSvgs = this.createJavascriptSvgs(dirpath);
        this.writeToFontAwesomeIndexFile(listOfJavascriptSvgs,icons);
    },
        
};


