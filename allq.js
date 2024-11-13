// const input = require("readline-sync");
// let n = input.questionInt("enter the size of arry ");
// arr=[];
// let i = 0;
// while(i<n){
//     let a = input.questionInt("enter the element ");
//     arr[i]=a;
//     i++;

// }
// console.log(arr);


//*********************************************************************************//

//  const input=require("readline-sync");
//  let n = input.questionInt("enter the size of arry :");
//  arr=[];
//  let i = 0;
//  while(i<n){
//     let a = input.questionInt("enter the element :")
//      arr[i]= a;
//      i++;
//  }
//  for (j=0; j<n; j++){
//     console.log(arr)

//  }
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz


//*********************************************************************************************//


// const input = require("readline-sync")
// let n = input.question("enter the size of arry :");
// let arr=[];
// let i = 0;
// while(i<n){
//     arr[i]=i;
//     i++;

// }
// console.log(arr);


// ************************************************************************************************


// const input=require("readline-sync")
// let n = input.questionInt("enter the size of arry :");
// let arr=[];
// let i = 0;
// while (i<n){
//     let a = input.questionInt("enter the element :");
//     arr[i]=a;
//     i++;
// }
//  i=n-1;
// while (arr[i]>0){
//     console.log(arr[i]);

//     i--;
// }

// *******************************************************************************************************

// const input=require("readline-sync")
// let n = input.question("enter the size of arry  : ");
// let k = input. question("enter the search of the number  :");
// let arr=[];
// let i = 0;
// while (i<n){
//     let a = input.questionInt("enter the element  : ");
//     arr[i] = a;
//     i++;
// }
// for (i=0; i<n; i++){
//     for (j=0; j<arr[i]; j++){
//         var getvalue=arr.includes(k);
//     }

// }
// console.log(getvalue) 

// **********************************************************************************************************

// const input = require("readline-sync")
// let n = input.questionInt("enter the size of arry  : " );
// let arr=[];
// let i =0;
// while(i<n){
//     let a = input.questionInt("enter the element  : ");
//     arr[i]=a;
//     i++;
// }
// let s1=0;
// let s2=0;
// for (j=0; j<n; j++){
//     if (arr[j]%2==0){
//         s1=s1+arr[j];
//     }
//     else{
//         s2=s2+arr[j];
//     }
// }
// console.log(s1)
// console.log(s2)

// *******************************************************************************************************



// // **************************************************************************************************

// const input = require('readline-sync');
// let n = input.questionInt("enter the size of arr : ");
// let arr = [];
// let i = 0;
// while (i < n) {
//     let a = input.questionInt("enter the element : ");
//     arr[i] = a;
//     i++;
// }
// let j = 0;
// let count = 1;
// let count1=1;
// arr1=[];

// for (let j = i + 1;  j < n;  j++) {
//     count=1;
//     for (let p=j+1; p<n; p++){
//     if (arr[j] == arr[i]) {
//         arr1.push(arr[j]);
//         if (arr[j]==j)
//          continue;
//         count1 = count + 1;
//     }
//     count++;

//     }

// }
// console.log(arr[j], '-', count1);

// // zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// // **************************************************************************************


// //FREQUENCY //

// const input=require("readline-sync")
// let n= input.questionInt("enter the size of arry")
// let arr=[]
// let i =0;
// while(i<n){
//     arr[i] = input.questionInt("enter the element")
//     i++;
// }
// let j=0;
// let p=0;
// let arry=[]
// for (let j=0; j<n; j++){
    
//     var count=1;
//     for(let p=j+1; p<n; p++){
//         if(arr[j]==arr[p]){
        
//             count++;
//         }
//         else{
//              count=1;
//         }
        

//     }
//     console.log(arr[j],"-",count, "times");
// }

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// ///////////////////////////////////////////////////
// *********************************************************************************

// const input=require("readline-sync")
// let p = input .questionInt("enter the size of arry : ")
// let n = input.question("enter the number : ")
// let q= input.questionInt("enter the size of arry : ")
// let m = input.questionInt("enter the enumber : ")
// let arr=[];
// let  i=0;
// while (i<n){
//      arr[i]=input.question("enter the element")
//      i++;
//}
// let s=0;
// for(let i=0; i<n; i++){
//     s[i]=arr[i]
// }
// for (let j=0; j<m; j++){
//     s[i]=arr[j]
// }
// console.log(s[i])

// const input=require("readline-sync")
// let n = input.question("enter the size of array : ");
// let arr=[];


// const input=require("readline-sync")
// let n = input.questionInt("enter the size of arr")
// let arr1=[];
// let i=0;
// while(i<n){
//     let a=input.questionInt("enter the element")
//     arr1[i]=a;
//      i++;
// }
// let m= input.questionInt("enter the size of arr")
//   let arr2=[];
//   let j=0;
//   while(j<m){
//     let b= input.questionInt("enter the element")
//       arr2[j]=b;
//        j++;
//   }
//   let p=0;
//   let k=0;
//   let count=1;
//   for(let p=0; p<n; p++){
//     for(let k=1; k<m; k++){
//     }
      
//   }
//   if(arr2[j]==arr1[i]){
//        count=count+1;
   
//   }
//    count++;
//   {
//   }
//   console.log(count)

// const input=require("readline-sync")
// let x=2
// let y= 6
// let z="3";
// let c=x+y+z
// console.log(c)



// let originalArray = [2, 4, 6, 1, 3, 5, 7, 9, 11];

// let newArray = [];
// let i = 0;

// while (i < 3) {
//     let j = 0;

//     while (j < 3) {
//         newArray[i * 3 + j] = originalArray[i * 3 + j] ** 2;
//         j++;
//     }

//     i++;
// }

// console.log(newArray);
