let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

let N = input[0];
let arr = [];
for(let i=0; i<N; i++){
    arr[i] = Math.floor(input[1].split(' ')[i]);
}

let min = arr[0];
let max = arr[0];

for(let i=0; i<arr.length; i++){
    if(min > arr[i]) min = arr[i];
    if(max < arr[i]) max = arr[i];
}

// for(let i=0; i<arr.length; i++){
//     if(max < arr[i]) max = arr[i];
// }

console.log(min, max);
console.log(input);