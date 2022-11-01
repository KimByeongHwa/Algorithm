const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

let T = +input[0];

for(let i=1; i<=T; i++){
    let a = +input[i].split(' ')[0];
    let b = +input[i].split(' ')[1];
    let c = a+b;

    console.log(`Case #${i}: ${a} + ${b} = ${c}`);
}