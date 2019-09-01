const fse = require('fs-extra');
const readline = require('readline');
var stream = require('stream');



// const formatDir = (path) => {
//     fse.emptyDir(path)
//         .then(() => {
//             console.info('Directory formatted');
//         })
//         .catch(error => {
//             console.error('An error has occurred while attempting to format directory:', error)
//         })
// }

const startReadingFile = async (filepath) => {

    console.info(`Start reading file ${filepath}...`);
    let lines = [];
    var instream = fse.createReadStream(filepath);
    var outstream = new stream;
    const readInterface = readline.createInterface({
        input: instream,
        output: outstream
    })

    for await(const line of readInterface) {
        lines.push(line);
    }

    return lines;

}

const getLinesFromFile = async (filepath) => {
    let lines = await startReadingFile(filepath);
    return lines;
}

const readDir = (filepath) => {
    return fse.readdirSync(filepath)
}

module.exports = {
    readDir: readDir,
    getLinesFromFile: getLinesFromFile
}
