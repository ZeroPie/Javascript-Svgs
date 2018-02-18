const sander = require('sander');
const path = require('path');
const readDir = require('readdir');
const extractSvgPath = require('extract-svg-path');

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
		var filePath = '',
			name = '',
			svgPath = '',
			prefix = 'fas',
			icon = '',
			abbreviation = '',
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

	this.getListOfSvgFilePaths = svgsFolder => {
		return (listOfSvgFilePaths = readDir.readSync(
			svgsFolder,
			['**.svg'],
			readDir.ABSOLUTE_PATHS
		));
	};

	this.getListOfSvgs = listOfSvgFilePaths => {
		let listOfSvgs = [];
		for (let DatSvg of listOfSvgFilePaths) {
			let svg = this.createSvg();
			svg.setFilePath(DatSvg);
			svg.setPath(extractSvgPath(DatSvg));
			svg.setName(
				path.basename(DatSvg, path.extname(DatSvg)).replace(/-/g, '_')
			);
			listOfSvgs.push(svg);
		}
		return listOfSvgs;
	};

	this.getListOfJavaScriptSvgs = listOfSvgs => {
		let listOfJavascriptSvgs = [];
		for (let disSvg of listOfSvgs) {
			let javaScriptSvg = this.transformSvgToJavascriptSvg(disSvg);
			listOfJavascriptSvgs.push(javaScriptSvg);
		}
		listOfJavascriptSvgs = `${listOfJavascriptSvgs.join('\n')} \n`;
		return listOfJavascriptSvgs;
	};

	this.getAllSvgsAsIcons = listOfSvgs => {
		let listOfIcons$1 = [];
		for (let deezSvg of listOfSvgs) {
			listOfIcons$1.push(`${deezSvg.name}: ${deezSvg.name}`);
		}
		let icons$1 = `var icons$1 = {\n${listOfIcons$1.join(',\n')}}; \n`;
		return icons$1;
	};

	this.transformSvgToJavascriptSvg = svg => {
		let variable = `var ${svg.name} =`;
		let prefix = `prefix: '${svg.prefix}'` || 'ms';
		let name = `iconName: '${svg.name}'` || 'noName';
		let children = `${svg.children}` || '[]';
		let icon = `icon: [${svg.viewBox.width} , ${
			svg.viewBox.height
		} , ${children}, "${svg.abbreviation}", "${svg.svgPath}"]`;
		let content = ` { ${prefix}, ${name}, ${icon}};`;
		let javaScriptSvg = `${variable}${content}`;
		return javaScriptSvg;
	};

	this.createJavascriptSvgs = svgsFolder => {
		let listOfSvgFilePaths = this.getListOfSvgFilePaths(svgsFolder);
		let listOfSvgs = this.getListOfSvgs(listOfSvgFilePaths);
		let listOfJavascriptSvgs = this.getListOfJavaScriptSvgs(listOfSvgs);
		return listOfJavascriptSvgs;
	};

	this.createIconsObject = svgsFolder => {
		let listOfSvgFilePaths = this.getListOfSvgFilePaths(svgsFolder);
		let listOfSvgs = this.getListOfSvgs(listOfSvgFilePaths);
		let icons$1 = this.getAllSvgsAsIcons(listOfSvgs);
		return icons$1;
	};

	this.writeToFontAwesomeIndexFile = (listOfJavascriptSvgs, icons$1) => {
		let libraryTemplate = this.libraryTemplate;
		let libraryDestination = this.libraryDestination;
		let indexFile = sander
			.readFileSync(libraryTemplate)
			.toString()
			.split('\n');
		indexFile.splice(100, 0, `${listOfJavascriptSvgs}\n${icons$1}`);
		indexFile = indexFile.join('\n');
		sander.writeFileSync(libraryDestination, indexFile);
	};

	this.createIconsLibrary = () => {
		let icons = this.createIconsObject(this.svgsFolder);
		let listOfJavascriptSvgs = this.createJavascriptSvgs(this.svgsFolder);
		this.writeToFontAwesomeIndexFile(listOfJavascriptSvgs, icons);
	};
}

module.exports = jsSvgsGenerator;
