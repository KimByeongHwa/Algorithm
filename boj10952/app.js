let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

let count = input.length;

for(let i=0; i<count-1; i++){
    let A = +input[i].split(' ')[0];
    let B = +input[i].split(' ')[1];
    let sum = A+B;
    console.log(sum);
}
