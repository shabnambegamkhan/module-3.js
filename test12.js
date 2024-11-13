const input=require("readline-sync")
let a1=input.questionInt("enter the alice number : ")
let a2=input.questionInt("enter the alice number : ")
let a3=input.questionInt("enter the alice number : ")
let b1=input.questionInt("enter the bob number : ")
let b2=input.questionInt("enter the bob number : ")
let b3=input.questionInt("enter the bob number :")
let sum1=1;
let sum2=1;
if(a1>b1 && a3>b3){
    sum1=a1+a2
    sum2=b1+b2
}
if(sum1>sum2){
    comsole.log(sum1)
}
console.log(sum2)
