const { appendFile } = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let C = Number(input[0]);

for(let i=0; i<C; i++){
    arr = input[i+1].split(' ').map(Number); // split 뒤에 .map(Number)를 붙여주면 바로 숫자로 만들 수 있다.
    let N = Number(arr[0]);
    let newArr = []; // over를 구할 때 arr을 그대로 사용하게 되면 첫 번째 요소인 '인원 수'가 점수로 들어가게 되어 버그가 발생한다.
    for(let i=0; i<arr.length-1; i++){
        newArr[i] = arr[i+1];
    }
    // console.log("this is arr: ", arr);
    // console.log("this is newArr: ", newArr);
    sum = arr.reduce( (acc, value) => acc + value) - N; 
    // console.log("this is sum: ", sum);
    avg = Number(sum/N);
    // console.log("this is avg: ", avg);
    over = newArr.filter( (value) => value>avg);
    // console.log("this is over: ", over);
    let per = over.length/(arr.length-1); 
    // console.log("this is per: ", per);
    console.log(`${(per*100).toFixed(3)}%`); 
}
