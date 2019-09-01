const watch = require('watch');
const reader = require('./utility/Reader');
const writer = require('./utility/Writer');
const homedir = require('os');
const chalk = require('chalk');

const inDir = `${homedir.homedir()}/data/in/`;
const outDir = `${homedir.homedir()}/data/out/`;
const interval = 2;
const Interpreter =  require('./utility/Interpreter').Interpreter;



reader.createDir(inDir);


function processFiles() {
  var existentFiles = reader.readDir(inDir)
  if(existentFiles.length > 0) {
    console.log(chalk.bgYellow.bold.black('Found the followings files: ',existentFiles));
    var linesFromFile = [];
    existentFiles.forEach( async (file )=> {
        let interpreter = new Interpreter(file); 
        linesFromFile = await reader.getLinesFromFile(inDir+file);
        const processedData = interpreter.processFile(file,linesFromFile);
        writer.writeFile(outDir,file,processedData)
        .then(() => {
          console.log(chalk.bgGreen('FILE WRITE SUCCESSFULL'))
        })
        .catch(error => {
          console.error(chalk.bgRed('ERROR WHILE ATEMPTING TO WRITE FILE'));
          console.error(chalk.bgRed(error));
        })
    });
  }else {
    console.log(chalk.bgYellow.bold.black('No files found'));
   }
}


watch.watchTree(inDir, {'interval': interval}, function (f, curr, prev) {
    if (typeof f == "object" && prev === null && curr === null) {
      processFiles()
    } else if (prev === null) {
      console.log(chalk.bgYellow.bold.black('New file found, processing...'))
      processFiles();
    } else if (curr.nlink === 0) {
      console.log(chalk.bgRed.bold.black('File was removed, nothing to be done!'))
    } else {
      console.log(chalk.bgYellow.bold.black('File modified, processing...'))
      processFiles();
    }
  })

