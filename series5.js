const input = require("readline-sync")
let n = input.questionInt("enter the number")
let s = 0;
let i = 1;
while (i <= n) {
    s = s + 1 / i;
    
    i++;
}
console.log(s)