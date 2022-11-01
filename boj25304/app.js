const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

let X = +input[0];
let N = +input[1];

let totalPrice = 0;

for(let i=2; i<N+2; i++){
    let price = +input[i].split(' ')[0];
    let amount = +input[i].split(' ')[1];
    
    totalPrice += Number(price*amount);
}

if(X == totalPrice){
    console.log('Yes');
}
else{
    console.log('No');
}
