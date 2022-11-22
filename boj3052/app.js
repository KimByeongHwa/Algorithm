const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let rmdArr = [];
for(let i=0; i<input.length; i++){
    rmdArr[i] = Number(input[i]%42);
}

const resultArr = rmdArr.filter((rmd, index) => {
    return rmdArr.indexOf(rmd) === index;
});

console.log(resultArr.length);