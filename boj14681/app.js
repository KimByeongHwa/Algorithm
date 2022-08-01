const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []; // input 배열 선언

rl.on('line', function(line){
    input.push(line); // 입력받는 각 줄의 값을 input 배열에 저장
}).on('close', function(){
    // 코드 작성
    var x = parseInt(input[0]);
    var y = parseInt(input[1]);

    if( x>0 && y>0 ) console.log(1);
    else if ( x<0 && y>0) console.log(2);
    else if ( x<0 && y<0) console.log(3);
    else console.log(4);
    //
    process.exit();
})