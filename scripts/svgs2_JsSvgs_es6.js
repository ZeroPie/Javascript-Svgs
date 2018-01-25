/*jshint esversion: 6 */
const sander = require( 'sander' );
const readDir = require('readdir');
const extractViewbox = require('extract-svg-viewbox');

const svgParser = (rawSvg) => {
    return Object.assign(
        canParseSvg(rawSvg), 
        canReadDirectory(), 
        canNormalizeSvg(rawSvg), 
        canCreateJavascriptSvg(rawSvg));
};

const directoryUtility = () => {
    return Object.assign({},
        canReadDirectory(),
        canCreateDirectory()
        );
};

const canReadDirectory = () => ({
    readDirectory: (directoryPath) => ({
        fileType: (fileType) => {
            let svgFilepaths = [];
            svgFilepaths = readDir.readSync(directoryPath, [`**.${fileType}`], readDir.ABSOLUTE_PATHS)
            return svgFilepaths;
        },
        //https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1
        /*
        Be careful when you return object literals. By default, JavaScript assumes you want to create a function body when you use braces, e.g., { broken: true }. If you want to use an implicit return for an object literal, you’ll need to disambiguate by wrapping the object literal in parentheses:
            const noop = () => { foo: 'bar' };
            console.log(noop()); // undefined
            const createFoo = () => ({ foo: 'bar' });
            console.log(createFoo()); // { foo: "bar" }
        */
        
        fileTypeOb: (fileType) => ({
            svgFilepaths: readDir.readSync(directoryPath, [`**.${fileType}`], readDir.ABSOLUTE_PATHS)
        })
        

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

const canCreateIndexFile = () => ({});

const canParseSvg = () => ({
    parseRawSvg: (RawSvg) => { //named functions vs arrow?=> 
        let parsedSvg = {
            name: RawSvg.name,
            filepath: RawSvg.filepath,
            //viewBox: extractViewbox(RawSvg)
        };
        return parsedSvg;
    }
});

const canCreateJavascriptSvg = () => ({

    parseSvgtoJs: (svg) => {
        rsvg = {      
            name: svg.name,
            filepath: svg.filepath,
        }
        return rsvg;
    },

    normalizeSvg: (parsedSvg) => {
        let normalizedSvg = parsedSvg;
        normalizedSvg.viewbox = '44';
        return normalizedSvg;
    }
});

const canNormalizeSvg = () => ({
    normalizeSvg: (parsedSvg) => {
        let normalizedSvg = parsedSvg;
        normalizedSvg.viewbox = '44';
        return normalizedSvg;
    }
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
}



let parsedSvg = svgParser().parseRawSvg(coolSvg);
let normalisedSvg = svgParser().normalizeSvg(coolSvg);
let listOfSvgFilepaths = directoryUtility().readDirectory('./../svgs/jobs_icons/').fileType('svg');
let dirCreated = directoryUtility().makedir().dirName('icons');;

console.log(listOfSvgFilepaths);
