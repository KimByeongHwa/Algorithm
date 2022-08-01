const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim();

let a = parseInt(input);
let b = parseInt(a-543);

console.log(b);