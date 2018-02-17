var sander = require("sander");
var path = require("path");
var readDir = require("readdir");
var extractSvgPath = require("extract-svg-path");

function jsSvgsGenerator({
    svgsFolder: svgsFolder,
    normalize: normalize,
    viewBox: viewBox,
    prefix: prefix,
    libraryTemplate: libraryTemplate,
    libraryDestination: libraryDestination
}) {
    this.svgsFolder = svgsFolder;
    this.normalize = normalize;
    this.viewBox = viewBox;
    this.prefix = prefix;
    this.libraryTemplate = libraryTemplate;
    this.libraryDestination = libraryDestination;
    this.createSvg = function createSvg() {
        var filePath = "",
            name = "",
            svgPath = "",
            prefix = "fas",
            icon = "",
            abbreviation = "",
            children = [],
            viewBox = this.viewBox;
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
    };

    this.getListOfSvgFilePaths = function getListOfSvgFilePaths(svgsFolder) {
        var listOfSvgFilePaths = [];
        listOfSvgFilePaths = readDir.readSync(
            svgsFolder,
            ["**.svg"],
            readDir.ABSOLUTE_PATHS
        );
        return listOfSvgFilePaths;
    };

    this.getListOfSvgs = function getListOfSvgs(listOfSvgFilePaths) {
        var listOfSvgs = [];
        for (var i = 0; i < listOfSvgFilePaths.length; i++) {
            var svg = this.createSvg();
            svg.setFilePath(listOfSvgFilePaths[i]);
            svg.setPath(extractSvgPath(listOfSvgFilePaths[i]));
            svg.setName(
                path
                    .basename(
                        listOfSvgFilePaths[i],
                        path.extname(listOfSvgFilePaths[i])
                    )
                    .replace(/-/g, "_")
            );
            listOfSvgs.push(svg);
        }
        return listOfSvgs;
    };

    this.getListOfJavaScriptSvgs = function getListOfJavaScriptSvgs(
        listOfSvgs
    ) {
        var listOfJavascriptSvgs = [];
        for (var i = 0; i < listOfSvgs.length; i++) {
            var javaScriptSvg = this.transformSvgToJavascriptSvg(listOfSvgs[i]);
            listOfJavascriptSvgs.push(javaScriptSvg);
        }
        listOfJavascriptSvgs = `${listOfJavascriptSvgs.join("\n")} \n`;
        return listOfJavascriptSvgs;
    };

    this.getAllSvgsAsIcons = function getAllSvgsAsIcons(listOfSvgs) {
        var listOfIcons$1 = [];
        for (var i = 0; i < listOfSvgs.length; i++) {
            var icon = listOfSvgs[i].name;
            listOfIcons$1[i] = `${icon}: ${icon}`;
        }
        var icons$1 = `var icons$1 = {\n${listOfIcons$1.join(",\n")}}; \n`;
        return icons$1;
    };

    this.transformSvgToJavascriptSvg = function transformSvgToJavascriptSvg(
        svg
    ) {
        var javascriptSvg;
        var variable = `var ${svg.name} =`;
        var prefix = `prefix: '${svg.prefix}'` || "ms";
        var name = `iconName: '${svg.name}'` || "noName";
        var children = `${svg.children}` || "[]";
        var icon = `icon: [${svg.viewBox.width} , ${
            svg.viewBox.height
        } , ${children}, "${svg.abbreviation}", "${svg.svgPath}"]`;
        var content = ` { ${prefix}, ${name}, ${icon}};`;
        var javaScriptSvg = `${variable}${content}`;
        return javaScriptSvg;
    };

    this.createJavascriptSvgs = function createJavascriptSvgs(svgsFolder) {
        var listOfSvgFilePaths = this.getListOfSvgFilePaths(svgsFolder);
        var listOfSvgs = this.getListOfSvgs(listOfSvgFilePaths);
        var listOfJavascriptSvgs = this.getListOfJavaScriptSvgs(listOfSvgs);
        return listOfJavascriptSvgs;
    };

    this.createIconsObject = function createIconsObject(svgsFolder) {
        var listOfSvgFilePaths = this.getListOfSvgFilePaths(svgsFolder);
        var listOfSvgs = this.getListOfSvgs(listOfSvgFilePaths);
        var icons$1 = this.getAllSvgsAsIcons(listOfSvgs);
        return icons$1;
    };

    this.writeToFontAwesomeIndexFile = function writeToFontAwesomeIndexFile(
        listOfJavascriptSvgs,
        icons$1
    ) {
        var libraryTemplate = this.libraryTemplate;
        var libraryDestination = this.libraryDestination;
        var indexFile = sander
            .readFileSync(libraryTemplate)
            .toString()
            .split("\n");
        indexFile.splice(100, 0, `${listOfJavascriptSvgs}\n${icons$1}`);
        indexFile = indexFile.join("\n");
        sander.writeFileSync(libraryDestination, indexFile);
    };

    this.createIconsLibrary = function createIconsLibrary() {
        var icons = this.createIconsObject(this.svgsFolder);
        var listOfJavascriptSvgs = this.createJavascriptSvgs(this.svgsFolder);
        this.writeToFontAwesomeIndexFile(listOfJavascriptSvgs, icons);
    };
}

module.exports = jsSvgsGenerator;
