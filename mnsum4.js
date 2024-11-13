const input=require("readline-sync")
let n=input.questionInt("enter the number")
let m=input.questionInt("enter the number")
let s=0;
let i=n;
while (i<=m){
     s=s+i;
    i++;
}
console.log(s)