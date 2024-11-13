const input = require("readline-sync")
let n = input.question("enter the size of array ")
arr = []
let i = 0;
while (i < n) {
    arr[i] = i;
    i++;
}
console.log(arr)