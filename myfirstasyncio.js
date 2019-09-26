let fs = require('fs')

let lines = fs.readFile(process.argv[2], function(err, data){
    if (err){
        return console.log(err);
    }
    
    let count = data.toString().split('\n').length-1;
    console.log(count);
});