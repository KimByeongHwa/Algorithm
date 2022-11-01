const fs = require('fs');
let input = fs.readFileSync('input.txt').toString();

let num = +input;
// let star='';

let i;
let j;

for(i=0; i<num; i++){
    let star='';
    for(j= 0; j<=i; j++){
        star += '*';
    }
    console.log(star);
}
