// const input=require ("readline-sync")
// let n = input.question("enter the size of arry ;")
// let arr=[]
// let i =0;
// while(i<n){
//     let a= parseInt(input.questionInt(`enter the ${i+1} element : `))
//     arr[i]=a;
//     i++;
// }
// let j=0;
// while (j<n){
//     let str = "";
//     let p=0;
//     while(p<arr[j]){
//         str+= ">";
//         p++;
//     }
//     console.log(str);
//     j++;
// }


const input = require("readline-sync");
let n = input.question("enter the size of array: ");
let arr = [];
let i = 0;
while (i < n) {
    let a = parseInt(input.questionInt("enter the element: "));
    arr[i] = a;
    i++;
}
let j = 0;
while (j < n) {
    let str = "";
    let p = 0;
    while (p < arr[j]) {
        str += ">";
        p++;
    }
    console.log(str);
    j++;
}
