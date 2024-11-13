


const input = require("readline-sync")
let n = input.question("enter the size of arry :")
let arr = [];
let sum1 = 0;
let sum2 = 0;
let i = 0;
while (i < n) {
    let a = parseInt(input.question("enter the element :"))
    arr[i] = a;
    i++;
}
for (j = 0; j < n; j++) {
    if (arr[j] % 2 == 0) {
        sum1+= arr[j];

    }
    else {
        sum2+=arr[j];

    }

}
console.log(sum1);
console.log(sum2);
