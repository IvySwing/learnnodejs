const fs = require('fs');
const path = require('path');

const file = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(file, function(err,list){
    for(i=0; i<list.length; i++){
        if (path.extname(list[i])=== ext){
            return console.log(list[i]);
        }else{};
    }
})