const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let N = input[0];

for(let i=0; i<N; i++){
    let star = "";
    for(let j=0; j<=i; j++){
        star = star + "*";
    }
    console.log(star);
}