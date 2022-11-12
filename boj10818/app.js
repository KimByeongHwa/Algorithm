let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

let N = input[0];
let arr = input[1].split(' ');
let arrNum = [];
for(let i=0; i<N; i++){
    arrNum[i] = Math.floor(arr[i]);
}

let min = arrNum[0];
let max = arrNum[0];

for(let i=0; i<arrNum.length; i++){
    if(min > arrNum[i]) min = arrNum[i];
    if(max < arrNum[i]) max = arrNum[i];
}

console.log(min, max);