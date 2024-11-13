const input = require("readline-sync")
let n = input.questionInt("enter the number")
let a =n;
let count = 1;
let i = 0;
if (i <= n) {
    while (a >= i) {
        a=Math.floor(a/10)
        count++;
        i++;
    }
      console.log(count)

}
