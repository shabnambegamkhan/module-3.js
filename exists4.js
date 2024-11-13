// const input = require("readline-sync")
// let n = input.questionInt("enter the size of arry")
// let k = input.questionInt("enter the search of number")
// let a = []
// let i = 0;
// let c = 0;
// while (i < n) {
//     a[i] = input.questionInt("enter the number ")
//     i++;
// }

// if (a[i] == k) {
//     c++;
//     i = n;

//     console.log("yes");

// }
// else {
//     console.log("no")
// }

///////////////////////////////////////////////////////////////////////////////////       
// ********************************************************************************   
////////////////////////////////////////////////////////////////////////////////////

const input = require("readline-sync")
let n = input.questionInt("enter the size of arry = ")
let k = input.questionInt("enter the search of number = ")
let a = []
let i = 0;
let c =0;
while (i < n) {

    a[i] = parseInt(input.questionInt("enter the number = "))
i++;
}
i=0;
while(i<n){
    while(a[i]==k){
        console.log("yes")
        break;
    }
    {
        
    }
    console.log("no")
    i++;
}