const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

let T = parseInt(input[0]);

for(let i=1; i<T+1; i++){
    let a = +input[i].split(' ')[0];
    let b = +input[i].split(' ')[1];
    console.log(a+b);
}