
// const input = require("readline-sync")
// let n = input.questionInt("enter the size of arry: ")
// let a = []
// let c = 1;
// let j = 0;
// let i = 0;
// while (i < n) {
//     b = input.question("enter the element: ")
//     a[i] = b
//     i++;
//     a.push(b)
// }
// let k=0;
// while (k < n) {
//     let j = k + 1;
//     while (j < n) {

//         if (a[j] == a[k]) {
//             c = c + 1;

//          }
        
//             j++;
         
//         }
//         k++;
        
// }
// console.log(a[j], "-" ,c)




///////ALL COUNT //////////////////////

// const input=require("readline-sync")
// let n=input.questionInt("enter the size of arr: ")
// let arr=[]
// let i=0;
// while(i<n)
// {
//     arr[i]=input.questionInt("enter the element: ")
//     i++;
// }
// console.log(arr);
// let count=0;
// let j=0;
// while(j<n){
//     let k=j+1;
//     while(k<n) {
//         if(arr[k]==arr[j])
//         {
//             count+=1;
//         }
//         count++;
//         console.log(arr[j],"-", count,"times")

//         k++;
//     }
//     {
//         count = 0

//         j++;
//     }
// }



const input = require("readline-sync")

let n = input.questionInt("enter the size of array = ")
let  arr = []
let i =0;

while(i<n){
    arr[i]= input.questionInt("enter the element = ")
    i++;
}
console.log(arr);

let j=0;
while(j<n){
    let count = 1;
    let k = j+1;
    while(k<n){
        if(arr[k]==arr[j]){
            count++;
        }
        k++;
    }
    console.log(arr[j], count,"times");
    j++;
    
}
    
