const input = require("readline-sync")
let n = input.question("enter")
if (n % 4 == 0) {
    if (n % 100 !== 0) {
        console. log("leap year")
    }
    else {
        if (n % 400 == 0) {
            console.log("leap year")
        }
        else {
            console.log("not leap year")
        }
    }
}