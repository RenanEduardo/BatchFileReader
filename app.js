const watch = require('watch');
const reader = require('./utility/Reader');
const dir = "./input/";

const Interpreter =  require('./utility/Interpreter').Interpreter;

watch.watchTree(dir, {'interval': 3}, function (f, curr, prev) {
    if (typeof f == "object" && prev === null && curr === null) {
        var existentFiles =  reader.readDir(dir)
        console.log('Found the followings files: ',existentFiles)
        var linesFromFile = [];
        existentFiles.forEach( async (file )=> {
            let interpreter = new Interpreter(); 
            linesFromFile = await reader.getLinesFromFile(dir+file);
            console.log('linesFromFile', linesFromFile);
            interpreter.processFile(file,linesFromFile) 
        });



    } else if (prev === null) {
      // f is a new file
      console.log('Is a new file')
    } else if (curr.nlink === 0) {
        console.log('f was removed')
      // f was removed
    } else {
      // f was changed
     
    }
  })

