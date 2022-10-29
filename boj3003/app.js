const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split(' ');

const king = 1;
const queen = 1;
const rooks = 2;
const bishops = 2;
const knights = 2;
const pawns = 8;

const a = input[0];
const b = input[1];
const c = input[2];
const d = input[3];
const e = input[4];
const f = input[5];

const da = king-a;
const db = queen-b;
const dc = rooks-c;
const dd = bishops-d;
const de = knights-e;
const df = pawns-f;

console.log(da, db, dc, dd, de, df);