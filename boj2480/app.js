const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split(' ');

const a = input[0];
const b = input[1];
const c = input[2];

if(a==b && b==c){
    const reward = 10000+(a*1000);
    console.log(reward);
}
else if(a==b&&b!=c){
    const reward = 1000+(a*100);
    console.log(reward);
}
else if(b==c&&c!=a){
    const reward = 1000+(b*100);
    console.log(reward);
}
else if(a==c&&c!=b){
    const reward = 1000+(c*100);
    console.log(reward);
}
else{
    if(a>b&&a>c){
        const reward = a*100;
        console.log(reward);
    }
    else if (b>a&&b>c){
        const reward = b*100;
        console.log(reward);
    }
    else{
        const reward = c*100;
        console.log(reward);
    }
}