const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split(' ');

var a = +input[0];
var b = +input[1];
var c = +input[2];

console.log(a+b+c);