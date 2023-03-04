const clone = require("./lib/clone");

let a = { c: 1 };
let b = clone(a); // 深拷贝

a.c = 2; // 对a的修改，不会影响到b

console.log(a.c); // 输出 2
console.log(b.c); // 输出 1
