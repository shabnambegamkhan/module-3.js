const input=require("readline-sync")
let n=input.question("enter the number")
var s = 0;
var r = 0;
let i =0;
while (i<=n){
    r=n%10;
    s=s*10+r
    n=Math.floor(n/10);
     i++;
}
console.log(s)  