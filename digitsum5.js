// const input = require("readline-sync")
// let n = input.questionInt("enter the number")
// let i =0;
// let s=0;
// while(i<=n){
//     r=n%10;
//     n=Math.floor(n/10);
//     s=s+r;
//     i++;
// }
// console.log(s)

//////////////array print////////////////////////////

const input=require("readline-sync");
let n=input.questionInt("enter the size of array : ");
let arr=[];
let i=0;
while(i<n){
    let a=input.questionInt("enter the element : ");
    arr[i]=a;
    i++;
 
}
console.log(arr);

