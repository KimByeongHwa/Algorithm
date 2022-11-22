const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let N = Number(input[0]);

for(let i=0; i<N; i++){
    let space = '';
    let star = '*';
    for(let a=0; a<i; a++){
        star += '*';
    }
    for(let b=0; b<N-Number(star.length); b++){
        space += ' ';
    }
    // console.log(space.length);
    console.log(space + star);
}