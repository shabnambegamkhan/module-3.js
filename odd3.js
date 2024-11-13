const input = require("readline-sync")
let n = input.questionInt("enter")
let s = 0;
let i = 0;
while (i <= n) {
    if (i % 2 !== 0) {
        s = s + i;
    }
    
     i++;
}
{console.log(s)}
