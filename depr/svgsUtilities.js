const sander = require("sander");
var readDir = require("readdir");

const svgParser = rawSvg => {
    return canParseSvg(rawSvg, canReadSvgsInDirectory());
};

const svgNormalizer = parsedSvg => {
    return Object.assign(canNormalizeSvg(parsedSvg));
};

const javascriptSvgCreator = normalisedSvg => {
    return Object.assign(canCreateJavascriptSvg(parsedSvg));
};

const javascriptSvgListCreator = ArrayofParsedSvgs => {
    return Object.assign(canCreateListOfJavascriptSvgs(parsedSvg));
};

const svgExporter = ArrayofParsedSvgs => {
    return Object.assign(canExportJavaScriptSvgsToIndexJs(parsedSvg));
};

const directoryUtility = () => {
    let state = {};
    return Object.assign(
        {},
        canReadSvgsInDirectory(rawSvg),
        canCreateDirectory()
    );
};

const canReadSvgsInDirectory = () => ({
    readSvgs: directoryPath => {
        let svgFilepaths = [];
        svgFilepaths = readDir.readSync(
            directoryPath,
            ["**.svg"],
            readDir.ABSOLUTE_PATHS
        );
        return svgFilepaths;
    }
});

const canCreateDirectory = () => ({
    makedir: () => ({
        dirName: name => {
            sander.mkdirSync(name);
        },
        dirPath: path => {
            sander.mkdirSync(path);
        }
    })
});

const canCreateIndexFile = () => ({});

const canParseSvg = () => ({
    parseRawSvg: svg => {
        //named functions vs arrow?=>
        rawSvg = {
            name: svg.name,
            filepath: svg.filepath
        };
        return rawSvg;
    }
});

const canCreateJavascriptSvg = () => ({
    parseSvgtoJs: svg => {
        rsvg = {
            name: svg.name,
            filepath: svg.filepath
        };
        return rsvg;
    },

    normalizeSvg: parsedSvg => {
        let normalizedSvg = parsedSvg;
        normalizedSvg.viewbox = "44";
        return normalizedSvg;
    }
});

const canNormalizeSvg = () => ({
    normalizeSvg: parsedSvg => {
        let normalizedSvg = parsedSvg;
        normalizedSvg.viewbox = "44";
        return normalizedSvg;
    }
});

const createSvg = ({ filePath, content }) => ({
    filePath,
    content,
    setFilePath(filePath) {
        this.filePath = filePath;
        return this;
    }
});

let coolSvg = {
    name: "midfinger",
    filepath: "/dir/some.svg",
    content: "contentino"
};

const createUser = ({ userName = "Anonymous", avatar = "anon.png" } = {}) => ({
    userName,
    avatar
});
console.log(
    // { userName: "echo", avatar: 'anon.png' }
    createUser({
        userName: "echo"
    }),
    // { userName: "Anonymous", avatar: 'anon.png' }
    createUser()
);

let parsedSvg = svgParser().parseRawSvg(coolSvg);
let normalisedSvg = svgNormalizer().normalizeSvg(coolSvg);
let listOfSvgFilepaths = directoryUtility().readSvgs("./svgs/test/");
let dirCreated = directoryUtility()
    .makedir()
    .dirName("icons");

console.log(parsedSvg);
console.log(normalisedSvg);
