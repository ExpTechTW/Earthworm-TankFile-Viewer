const fs = require("fs");

const buf = fs.readFileSync("./20230118_050747.00_MAN");

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

const data_buf = buf.slice(64, buf.readInt16LE(4) * Buffer.byteLength(buf) + 64);
for (let i = 0; i < buf.readInt16LE(4) * buf.readDoubleLE(24) * 4; i += 4)
	console.log(data_buf.readInt16LE(i));

// const buf = Buffer.allocUnsafe(4096);

// buf.writeInt16LE(1,0)
// buf.writeInt16LE(240,4)
// buf.writeDoubleLE(Date.now()/1000,8)
// buf.writeDoubleLE(Date.now()/1000,16)
// buf.writeDoubleLE(20.0,24)

// this.sta =buf.toString('utf-8', 32, 38 ).replace(/\0/g, ''); //7
// this.net =buf.toString('utf-8', 39, 47).replace(/\0/g, '');  //9
// this.chan =buf.toString('utf-8', 48, 51).replace(/\0/g, ''); //4
// this.loc=buf.toString('utf-8', 52, 54).replace(/\0/g, '');  //3
// this.ver=buf.toString('utf-8', 55, 56).replace(/\0/g, ''); //2

// this.quality=buf.toString('utf-8', 60, 61).replace(/\0/g, ''

// console.log(buf);