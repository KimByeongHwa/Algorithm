let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

let N = input[0];
let array = [];
for(let i=0; i<N; i++){
    array[i] = input[1].split(' ')[i]
}
let finder = input[2];
let count = 0;

for(let i=0; i<N; i++){
    if(finder === array[i]) count++;
}

console.log(count);