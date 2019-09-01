const fse = require('fs-extra')
const chalk = require('chalk');


const writeFile = async (outputDir, file, data) => {
    console.log(chalk.bgYellow.bold.black(`Start writing file on ${outputDir}`));
    fse.ensureDirSync(outputDir);
    const newFile = `${outputDir}processed_${file}`;
    fse.writeFile(newFile, data);
}

module.exports = {
    writeFile: writeFile
}