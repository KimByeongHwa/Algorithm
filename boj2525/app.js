const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const A = +input[0].split(' ')[0];
const B = +input[0].split(' ')[1];
const C = +input[1];

let H = parseInt(C/60);
let M = parseInt(C%60);

if((B+M)<60){
    if((A+H)>=24){
        console.log((A+H)-24, B+M);
    }
    else console.log(A+H, B+M);
}
else if((B+M)>=60){
    let newH = A+H+1;
    if(newH>=24){
        console.log(newH-24, B+M-60);
    }
    else console.log(newH, B+M-60);
}