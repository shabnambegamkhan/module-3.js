const input = require("readline-sync")
let n = input.question("enter the number")
let sum = 0;
let i = 1;
while (i <n) {
    if (n % i == 0) {
        sum = sum + i;
    }
    i++;
}
 if (sum == n) 
{
    console.log("yes")
} else 
{
    console.log("no")
}
