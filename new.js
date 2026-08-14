console.log("Hello, World!");
let a = null;
let b;
console.log(Boolean(a==b));
console.log(Boolean(a===b));
const id3 = Symbol("id");
const id4 = Symbol("id");
console.log(id3==id4);
//BIGINT is used to store large integers greater than 2^53 - 1
const a=10n;//n represent bigint
console.log(typeof(a));