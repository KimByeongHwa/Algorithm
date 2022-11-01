const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

let N = +input[0];
let answer = '';

for(i=1; i<N+1; i++){
    let a = +input[i].split(' ')[0]
    let b = +input[i].split(' ')[1]

    answer += Number(a+b)+'\n';
}

console.log(answer);