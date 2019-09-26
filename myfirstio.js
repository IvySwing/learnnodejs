let fs = require('fs')

let lines = fs.readFileSync(process.argv[2]);
let count = lines.toString().split('\n').length-1;

console.log(count);