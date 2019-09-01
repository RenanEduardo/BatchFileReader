const fse = require('fs-extra')



const writeFile = async (outputDir, file, data) => {
    console.log(`Start writing file on ${outputDir}`);
    fse.ensureDirSync(outputDir);
    const newFile = `${outputDir}processed_${file}`;
    fse.writeFile(newFile, data);
}

module.exports = {
    writeFile: writeFile
}