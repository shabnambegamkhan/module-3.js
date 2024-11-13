
//  ********  print  ***********

// const input=require("readline-sync")
// let n = input.question("enter the size of arry : ");
// let arr=[]
// let i = 0;
// while(i<n){
//      arr[i]=input.question("enter the element : ");
//      i++;
// }
// console.log(arr)



//********** natural number **********



// const input  = require("readline-sync")
// let n = input.questionInt("enter the size of arry : ");
// let arr=[];
// let i=0;
// while(i<n){
//     arr[i]=i;
//     i++;
// }
// console.log(arr)


//*************reverse************

// const input = require("readline-sync")
// let n = input.questionInt("enter the size of arry : ");
// let arr = [];
// let i = 0;
// while (i < n) {
//     let a = input.questionInt("enter the element : ");
//     arr[i]=a;
//     i++;
// }
// i = n - 1;
// while (arr[i] >0) {
//     console.log(arr[i])
//     i--;
// }


//*************exist**************** 

const input=require("readline-sync")
let n = parseInt(input.questionInt("enter the size of arr : "))
let k = input .questionInt("search the number : ")
let arr=[];
let  i=0;
while(i<n){
    let a =parseInt( input.questionInt("enter the element : "))
    arr[i]=a;
    i++;
}
for (let j=0; j<n-1; j++){
    if (arr[j]==k){

        console.log("yes")

    }

    {
        console.log("no") 

    }
}

//*********** sum even odd *********** */


// const input=require("readline-sync")
// let n =parseInt(input.questionInt("enter the size of arry : "));
// let arr=[]
// let i=0;
// while(i<n){
//     let a = parseInt(input.questionInt("enter the element : "));
//     arr[i]=a;
//     i++;

// }
// var sum1=0;
// var sum2=0;
//   for (let i=0; i<n; i++){
//     if(arr[i]%2==0){
//         sum1=sum1+arr[i]
//     }
//     else(
//         sum2=sum2+arr[i]
//     )
//   }
//   console.log(sum1);
//   console.log(sum2)

//***********duplicate************* */

// const input=require("readline-sync")
// let n = input.question("enter the size of arry : ")
// let arr=[];
// let  i =0;
// while(i<n){
//     let a=input.questionInt("enter the element : ")
//     arr[i]=a;
//     i++;
// }
// let j=0;
// for (let j=0; j<n; j++){
//    var count=0;
//    for (let p=j+1; p<n; p++){
//     if(arr[j]==arr[p]){
//         count+=0;
//     }

//    }

   
   
// }
// if(count>1){

// }
// console.log(arr[j])


//************frequency************* */


// const input=require("readline-sync")
// let n = input.questionInt("enter the size of arry : ");
// let arr=[];
// let  i = 0;
// while(i<n){
//      arr[i]=input.questionInt("enter the element : ");
//      i++;
// }
// let count=1;
// let j=0;
// while(j<n){
//     if (arr[j]==arr[i]){
//         count+=0;
//     }
     
//         count++
//         j++;
//         i++;
//         console.log(arr[j], "-", count)

//  }

 //*******marge*********** */

//  const input=require("readline-sync")
//  let n = input.questionInt("enter the size of arr : ");
//  let arr1= [];
//  let  i = 0;
//  while(i<n){
//     a=input.questionInt("enter the element : ");
//     arr1[i]=a;
//     i++;
//  }
//  console.log(arr1)

 
// let arr2 = [];
//  var j=0;
// let m = input.questionInt("enter the size of arr : ");
//  while(j<m){
// let b = input.questionInt("enter the element  number: ");
//     arr2[j]=b;
//     j++;
// }
// console.log(arr2)
  
//     let temp=arr1.concat(arr2)
//     temp.sort( );
//      console.log(temp)

//**********pattern********** */

// const input = require("readline-sync")
// let n = input.questionInt("enter the size of arr : ");
// let arr=[];
// let  i = 0;
// while(i<n){
//     let a=input.questionInt("enter the element : ");
//     arr[i]=a;
//     i++;
// }
// let j=0;
// while(j<n){
//     str=" ";
    
//     for(let p=0; p<arr[j]; p++){
//         str=str+">"

//     }
//     console.log(str)
//     j++;

// }
 






