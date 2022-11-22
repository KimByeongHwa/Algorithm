const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let height = Math.floor(input[1].split(' ')[0]);
let width = Math.floor(input[1].split(' ')[1]);
let customer = Math.floor(input[1].split(' ')[2]);

let hotel = Array.from(new Array(height), () => new Array(width));

hotel[0][0] = 601;
hotel[0][1] = 602;
hotel[1][0] = 501;
hotel[1][1] = 502;
hotel[2][0] = 401;
hotel[2][1] = 402;
hotel[3][0] = 301;
hotel[3][1] = 302;
hotel[4][0] = 201;
hotel[4][1] = 202;
hotel[5][0] = 101;
hotel[5][1] = 102;
console.log(hotel);
