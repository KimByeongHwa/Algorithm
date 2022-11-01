let input = require('fs').readFileSync('input.txt').toString();

let num = +input[0];

for(let i=0; i<num; i++){
    let star='';
    let space='';
    let result='';
    for(let j=0; j<i; j++){
        space += (num-j)*' ';
       
    }
    console.log(result);
}