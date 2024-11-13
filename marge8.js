const input = require("readline-sync")
let m = parseInt(input.questionInt("enter the size of arry"))
let p = (input.questionInt("enter the element"))
let n = parseInt(input.questionInt("enter the size of arry"))
let q = (input.questionInt)("enter the element")
let arr = [];
let i = 0;
let s = []
let a1 = [m];
let a2 = [n]
while (i <= m) {
    s[i] = a1[i];

    i++;
}
let j = 0;
if (j <= n) {
    s[i] = a2[j]
    j++;

}
s = a1 , a2

//let ascOrder=s.sort((m,n)=>m-n)

console.log(s)
