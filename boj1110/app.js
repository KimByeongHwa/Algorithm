let input = require('fs').readFileSync('input.txt').toString();

let N = +input;
let sum;
let result;
let cycle = 0;

while(result == N){
    if(N<10){
        sum = N;
        result = sum*2;
        cycle++;
        N = result;
    }
    else{
        let a = parseInt(N/10);
        let b = N%10;
        sum = a+b;
        if(sum<10){
            result = b + sum;
            cycle++;
            N = result;
        }
        else{
            let sumA = parseInt(sum/10);
            let sumB = sum%10;
            result = b + sumB;
            cycle++;
            N = result;
        }
    }
}
console.log(cycle);