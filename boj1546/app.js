const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

// let n = Number(input[0]);
let inputArr = input[1].split(' ');
let arr = [];
for(let i=0; i<inputArr.length; i++){
    arr[i] = Number(inputArr[i]);
}
// console.log(arr);

let M = arr[0];
for(let i=1; i<arr.length+1; i++){
    if(M<arr[i]){
        M = arr[i];
    }
}
// console.log(M);

let newArr = [];
for(let i=0; i<arr.length; i++){
    newArr[i] = arr[i]/M*100;
}
// console.log(newArr);

let avg = 0;
let sum = 0;
for(let i=0; i<newArr.length; i++){
    sum += newArr[i];
}
avg = sum/newArr.length;
console.log(avg);


// 1. 최댓값 M 구한다.
// 2. 모든 값에 /M을 한 새로운 배열을 생성한다. 
// 3. 배열의 모든 요소의 평균값을 구한다. FINISH!