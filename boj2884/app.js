const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split(' ');

const H = parseInt(input[0]);
const M = parseInt(input[1]);

if(0<=M && M<=44){
    if(H == 0){
        const hour = 23;
        const minute = 60-(45-M);
        console.log(hour, minute);
    }
    else if(0<H && H<=23){
        const hour = H-1;
        const minute = 60-(45-M);
        console.log(hour, minute);
    }
}
else if(M>=45 && M<=60){
    const minute = M-45;
    console.log(H, minute);
}