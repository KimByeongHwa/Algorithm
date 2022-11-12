const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let arr = [];
for(let i=0; i<28; i++){
    arr[i] = Number(input[i]);
}

let sortedArr = arr.sort(function compare(a, b) {
    return a - b;
  });
// console.log(sortedArr);

let fullArr = [];
for(let i = 0; i<30; i++){
    fullArr[i] = Number(i+1);
}
// console.log(fullArr);

for(let i=0; i<sortedArr.length; i++){
    for(let j=0; j<fullArr.length; j++){
        if(sortedArr[i] === fullArr[j]){
            fullArr.splice(j, 1);
        }
    }
}
// console.log(fullArr);

// for(let i=0; i<2; i++){
//     console.log(fullArr[i]);
// }
console.log(fullArr[0]);
console.log(fullArr[1]);

// 1. input 값 arr로 배열화
// 2. arr 크기 순 정렬시키기. => sortedArr
// 3. fullArr[1~30] 에서 sortedArr 빼기
// 4. 그러면 fullArr에서 두 개의 원소만 남을 것.