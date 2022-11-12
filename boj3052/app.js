const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let inputArr = [];
for(let i=0; i<10; i++){
    inputArr[i] = input[i];
}

let remainderArr = [];
for(let i=0; i<inputArr.length; i++){
    remainderArr[i] = inputArr[i]%42;
}
console.log('first: ', remainderArr);

//방법1. 일률적으로 이중for문을 사용하여 중복요소를 삭제한다.
for(let i=0; i<remainderArr.length; i++){
    for(let j=i+1; j<remainderArr.length; j++){
        if(remainderArr[i] === remainderArr[j]){
            remainderArr.splice(j, 1);
        }
    }
}
console.log('second: ', remainderArr);

// 방법2. 나머지가 모두 0일 때를 따로 두어 result값이 무조건 1이 나오게 한다.
// let result = 0;

// for(let i=0; i<remainderArr.length; i++){
//     if(remainderArr[i] === 0){
//         result = 1;
//     }
//     else{
//         for(let i=0; i<remainderArr.length; i++){
//             for(let j=i+1; j<remainderArr.length; j++){
//                 if(remainderArr[i] === remainderArr[j]){
//                     remainderArr.splice(j, 1);
//                 }
//             }
//         }
//         result = remainderArr.length;
//     }
// }
// console.log('second: ', remainderArr);

console.log(remainderArr.length);
// console.log(result);