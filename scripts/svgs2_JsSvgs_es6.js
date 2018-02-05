/*jshint esversion: 6 */
const path = require('path');
const sander = require( 'sander' );
const readDir = require('readdir');
const extractViewbox = require('extract-svg-viewbox');
const extractSvgPath = require('extract-svg-path');

//Factories//
const svgParser = (rawSvg) => {
    return Object.assign(
        canReadDirectory(), 
        canCreateJavascriptSvg(rawSvg));
};

const directoryUtility = () => {
    return Object.assign({},
        canReadDirectory(),
        canCreateDirectory()
        );
};


//Methods/Capabillities//
const canReadDirectory = () => ({
    readDirectory: (directoryPath) => ({
        fileType: (fileType) => {
            let svgFilepaths = [];
            svgFilepaths = readDir.readSync(directoryPath, [`**.${fileType}`], readDir.ABSOLUTE_PATHS);
            return svgFilepaths;
        },
        fileTypeOb: (fileType) => ({
            svgFilepaths: readDir.readSync(directoryPath, [`**.${fileType}`], readDir.ABSOLUTE_PATHS)
        })
        
                //https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1
        /*
        Be careful when you return object literals. By default, JavaScript assumes you want to create a function body when you use braces, e.g., { broken: true }. If you want to use an implicit return for an object literal, you’ll need to disambiguate by wrapping the object literal in parentheses:
            const noop = () => { foo: 'bar' };
            console.log(noop()); // undefined
            const createFoo = () => ({ foo: 'bar' });
            console.log(createFoo()); // { foo: "bar" }
        */

    })
});

const canCreateDirectory = () => ({
    makedir: () => ({
        dirName: (name) => {
            sander.mkdirSync(name);
            return true;
        },
        dirPath: (path) => {
            sander.mkdirSync(path);
        }
    })
});


const canCreateJavascriptSvg = () => ({

    parseRawSvg: (rawSvg) => { //named functions vs arrow?=> 
        let parsedSvg = {
            filePath: svg,
            svgPath: extractSvgPath(rawSvg),
            viewBox: extractViewbox(rawSvg),
            name: path.basename(rawSvg, path.extname(rawSvg)).replace(/-/g, "_"),
        };
        return parsedSvg;
    },


   parseListOfSvgs: (listOfSvgFilepaths) => {
           let listOfSvgs = [];
           for (let [index,svg] of listOfSvgFilepaths.entries()) {
               let parsedSvg = {
                   filePath: svg,
                   svgPath: extractSvgPath(svg),
                   viewBox: extractViewbox(svg),
                   name: path.basename(svg, path.extname(svg)).replace(/-/g, "_"),
                };
                listOfSvgs.push(parsedSvg);
           }

       svgObjects: () => {
        return listOfSvgs;
       };

       javaScriptSvgs: () => {
        let listOfJavascriptSvgs = [];
        for (let svg of listOfSvgFilepaths) {
            let javascriptSvg;
            let leName = path.basename(svg, path.extname(svg)).replace(/-/g, "_");
            let variable = `var ${leName} =`; 
            let prefix = `prefix: '${'fa'}'` || 'ms';
            let name = `iconName: '${leName}'` || 'noName';
            let children = `${svg.children}` || '[]';
            let icon = `icon: [${svg.viewBox.width} , ${svg.viewBox.height} , ${children}, "${svg.abbreviation}", "${svg.svgPath}"]`;
            let content = ` { ${prefix}, ${name}, ${icon}};`;
            let javaScriptSvg = `${variable}${content}`;
            listOfJavascriptSvgs.push(javaScriptSvg);            
            }
       }

   },
    

});


const createSvg = ({ filePath, content }) => ({
    filePath,
    content,
    setFilePath (filePath) {
      this.filePath = filePath;
      return this;
    }
});

let coolSvg = {
    name: 'midfinger',
    filepath: '/dir/some.svg',
    content: 'contentino',
};



let listOfSvgFilepaths = directoryUtility().readDirectory('./../svgs/jobs_icons/').fileType('svg');
let listOfSvgs = svgParser().parseListOfSvgs(listOfSvgFilepaths).svgObjects();
let dirCreated = directoryUtility().makedir().dirName('icons');

console.log(listOfSvgs);


//svgParser --> implement parseListOfSvgs instead of einzeln
//normalize as external method?
