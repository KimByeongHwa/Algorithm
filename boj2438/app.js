const fs = require('fs');
let input = fs.readFileSync('input.txt').toString();

let num = +input;
let i = 0;

while(i<num){
    console.log('*'.repeat(i+1));
    i++;
}