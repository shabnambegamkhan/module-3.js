const input = require("readline-sync")
let n = input.question("enter the size of array ")
let i=0;
let array=[]
while(i<n){
    let a=input.questionInt("enter the elemant")
    array[i] =a
   i++;
}
console.log(array)