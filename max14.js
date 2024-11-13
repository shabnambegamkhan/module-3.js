const input = require("readline-sync")
let a = input.questionInt("enter")
let b = input.questionInt("enter")
let c = input.questionInt("enter")

if (a > b) {
    if (a > c) {
        console.log(a)
    }
}
else {
    if (b > c) {
        console.log(b)
    }
    {
        console.log(c)
    }
}
