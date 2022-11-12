const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let N = Math.floor(input[0].split(' ')[0]);
let X = Math.floor(input[0].split(' ')[1]);
let A = input[1].split(' ');
// let Anum = [];
// for(let i=0; i<N; i++){
//     Anum[i] = Math.floor(A[i]);
// }

let lowA = new Array();
for(let i = 0; i<N; i++){
    if(A[i] < X){
        // lowA[i] = Math.floor(A[i]); 왜 빈값이 생기는지 모르겠음.
        lowA.push(A[i]);
    }
}

console.log(lowA.join(' '));