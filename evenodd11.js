const input = require("readline-sync")
let a = input.questionInt("enter")
let  even;
let  odd;
if (a % 2 == 0) {
    console.log("even");
}
else {
    console.log("odd");
}