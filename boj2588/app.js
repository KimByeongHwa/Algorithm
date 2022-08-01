const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

const first = parseInt(B/100);
const second = parseInt((B%100)/10);
const third = parseInt(B%10);   

const c = A * third;
const d = A * second;
const e = A * first;

const result = c + d*10 + e*100;

console.log(c);
console.log(d);
console.log(e);
console.log(result);