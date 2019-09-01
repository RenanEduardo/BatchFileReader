const fse = require('fs-extra');
const chalk = require('chalk')
const readline = require('readline');
var stream = require('stream');

const startReadingFile = async (filepath) => {

    console.info(chalk.bgYellow.bold.black(`Start reading file ${filepath}...`));
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

const createDir = (outputDir) => {
    console.log(chalk.bgYellow.bold.black('Creating directory: ', outputDir));
    fse.ensureDirSync(outputDir,{ 
        mode: 0o2775
    });
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
    getLinesFromFile: getLinesFromFile,
    createDir: createDir
}
