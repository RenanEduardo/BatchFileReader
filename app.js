const watch = require('watch');
const reader = require('./utility/Reader');
const writer = require('./utility/Writer');
const homedir = require('os');


const inDir = `${homedir.homedir()}/data/in/`;
const outDir = `${homedir.homedir()}/data/out/`;

const Interpreter =  require('./utility/Interpreter').Interpreter;

reader.createDir(inDir);


function processFiles() {
  var existentFiles = reader.readDir(inDir)
  if(existentFiles.length > 0) {
    console.log('Found the followings files: ',existentFiles);
    var linesFromFile = [];
    existentFiles.forEach( async (file )=> {
        let interpreter = new Interpreter(file); 
        linesFromFile = await reader.getLinesFromFile(inDir+file);
        console.log('linesFromFile', linesFromFile);
        const processedData = interpreter.processFile(file,linesFromFile);
        writer.writeFile(outDir,file,processedData)
        .then(() => {
          console.log('FILE WRITE SUCCESSFULL')
        })
        .catch(error => {
          console.error('ERROR WHILE ATEMPTING TO WRITE FILE');
          console.error(error);
        })
    });
  }else {
    console.log('No files found');
  }
}


watch.watchTree(inDir, {'interval': 3}, function (f, curr, prev) {
    if (typeof f == "object" && prev === null && curr === null) {
      reader.e 
      processFiles()
    } else if (prev === null) {
      processFiles();
    } else if (curr.nlink === 0) {
      console.log('file was removed')

    } else {
      processFiles();
     
    }
  })

