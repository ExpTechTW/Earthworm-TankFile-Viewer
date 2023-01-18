const fs = require("fs");

const buf = fs.readFileSync("C:/Users/whes1015/Downloads/earthworm/data/save/test.tank");

console.log(buf.toString("utf-8", 57, 59).replace(/\0/g, ""));
console.log(buf.readInt16LE(0));
console.log(buf.readInt16LE(4));
console.log(buf.readDoubleLE(8));
console.log(buf.readDoubleLE(16));
console.log(buf.readDoubleLE(24));
console.log(buf.toString("utf-8", 32, 38).replace(/\0/g, ""));
console.log(buf.toString("utf-8", 39, 47).replace(/\0/g, ""));
console.log(buf.toString("utf-8", 48, 51).replace(/\0/g, ""));
console.log(buf.toString("utf-8", 52, 54).replace(/\0/g, ""));
console.log(buf.toString("utf-8", 55, 56).replace(/\0/g, ""));

console.log(buf.toString("utf-8", 60, 61).replace(/\0/g, ""));

for (let i = 0; i < buf.readInt16LE(4) * 4; i += 4)
	console.log(64 + i, " ", buf.readInt16LE(64 + i));
