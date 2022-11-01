const fs = require('fs');
let input = fs.readFileSync('input.txt').toString();

let n = Number(input);
let sum = 0;

for(let i=1; i<n+1; i++){
    sum += i;
}

console.log(sum);