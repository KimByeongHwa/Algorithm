let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

let arr = [];
for(let i=0; i<9; i++){
    arr[i] = Number(input[i]);
}

let max= Number(arr[0]);
let count = 1;
for(let i=0; i<9; i++){
    if(max<arr[i]) {
        max = arr[i];
        count = i+1;
    }
}

console.log(max, `\n${count}`);

// 1. input 값을 하나의 배열로 만들고
// 2. 최댓값 선언 후 첫번 째 원소로 설정해둔다.
// 3. 반복문을 통해 최댓값 산출.
// 4. 몇번 째인지는 i값을 통해 산출.