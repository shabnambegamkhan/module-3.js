const input = require("readline-sync")
let a = input.question("enter number")
let b = input.questionFloat("enter number")
let c = 0;
{
    temp = a;
    a = b;
    b = temp;
}
console.log(a, b)