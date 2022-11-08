let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

let max= Number(input[0]);
let count;
let arr = [];

for(let i=0; i<9; i++){
    arr[i] = Number(input[i]);
}
for(let i=0; i<9; i++){
    if(max<arr[i]) {
        max = arr[i];
        count = i+1;
    }
}

console.log(max, `\n${count}`);