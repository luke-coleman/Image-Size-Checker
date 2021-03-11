const fs = require('fs');

const uncompressedDirectory = "./uncompressed/";
const toCompressDirectory = "./toCompress/";
const lessThan100Directory = "./lessThan100/";

let filenames = [];
let needsCompressing = [];
let isFine = [];

console.log("Let's go!");

fs.readdir(uncompressedDirectory, function (err, files) {


    if (err) throw err;
  
    for (var index in files) {
      filenames.push(files[index]);
      console.log("Filename " + filenames[index]);
    }

    for(let i = 0; i < filenames.length; i++){

        if(i == 0){

        }
        else {
            let files = filenames[i];
            let fileSize = fs.statSync(uncompressedDirectory+files).size;
    
            console.log("Checking " + files);
    
            if(fileSize < 100000){
                isFine.push(files);
                console.log(files + " is less than 100KB");
            } else {
                needsCompressing.push(files);
                console.log(files + " is more than 100KB and needs compressing");
            }
        }
    }

    console.log();
    console.log(needsCompressing.length + " images are more than 100KB and need to be compressed.");
    console.log(isFine.length + " are less than 100KB and do not need compressing.");
    console.log();

    console.log("Sorting files into new folders...");
    for(var i = needsCompressing.length - 1; i >= 0; i--){
        var file = needsCompressing[i];
    
        console.log(file);
        fs.rename(uncompressedDirectory + file, toCompressDirectory + file, function(err) {
            if(err) throw err;
            console.log(file + " has been moved to " + toCompressDirectory);
        });
    }

    for(var i = isFine.length - 1; i >= 0; i--){
        var file = isFine[i];
    
        console.log(file);
        fs.rename(uncompressedDirectory + file, lessThan100Directory + file, function(err) {
            if(err) throw err;
            console.log(file + " has been moved to " + lessThan100Directory);
        });
    }

    console.log();
    console.log("All files have been moved successfully.");
});