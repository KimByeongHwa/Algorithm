let input = require('fs').readFileSync('input.txt').toString();

let firstN = parseInt(input);
let sum;
let newN;
let a;
let b;
let b2;
let cycle = 0;

N = firstN;
a = parseInt(N/10);     // N=26
b = parseInt(N%10);
sum = parseInt(a+b);
b2 = parseInt(sum%10);
newN = parseInt(b*10 + b2);    // newN = 68
cycle++;
// console.log(N, firstN);
if (newN === N) {
    console.log(cycle);
    return cycle;
}
while(true){
    N = newN;   // N = 68
    // console.log("while", N, newN);
    a = parseInt(N/10);
    b = parseInt(N%10);
    sum = parseInt(a+b);
    b2 = parseInt(sum%10);
    newN = parseInt(b*10 + b2); // newN = 84
    cycle++;
    if (newN === firstN) {
        console.log(cycle);
        return cycle;
    }
}