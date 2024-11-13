// const input=require("readline-sync")
// let n = input.questionInt("enter the size of arr "-" ")
// let arr=[];
// let i = 0;
// while(i<n){
    
//        let a=input.questionInt("enter the element "-" ")
//        arr[i]=a;
//      i++;
// }
// while(j<n){
    
// }
// const input=require("readline-sync")
// let n=input.question("enter the number")
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//const input=require("readline-sync")
// let n =input.question("enter the element")
// for(let i=2; i<=10; i++){
//     for(let j=1; j<=10; j++)
//     console.log(i+ '*' + j+ '=' + i*j )
// }





// const input=require("readline-sync")
// var number = input.questionInt("enter the number")
// if (number<10){
//     console.log("num is less than 10")
// }
// else if(number>20&& number <=20){
//     console.log("num is less than 20")

// }
// else{
//     console.log("greater than 20")
//  }





// const input=require("readline-sync")
// let n=5;
// let arr=[4,2,3,5,6]
// let newarray=[]
// let i=0;
// let result=0;
// while(i<5){
//     if(i%2==0){
//         result=result+arr[i]
//     }
//     else{
//         result=result-arr[i]
//     }
//     i=i+1;
// }
// console.log(result);






// const input=require("readline-sync")
// let arr1= [2,5,6,8]
// let arr2= [1,9,3,2]
// let arr3=[]
// for (let i=0; i<arr1.length; i++){
//     for (let j=0; j<arr2.length; j++){
//         if (arr1[i]==arr2[j]){
//             arr3.push(arr1[i])
//         }
//     }
// }
// console.log(arr3)

// const input=require("readline-sync")
// const rows = 5;
// let pascalTriangle = [];
// for (let i = 0; i < rows; i++) {
//     pascalTriangle[i] = [];
//     for (let j = 0; j <= i; j++) {
//         if (j == 0 || j == i) {
//             pascalTriangle[i][j] = 1;
//         } else {
//             pascalTriangle[i][j] = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
//         }
//     }
// }
// console.log(pascalTriangle);


// const input=require("readline-sync")
// let n = 4                                       //input.questionInt("enter the element")
// //let str=0;
// for (let i=0; i<=n; i++){     
//         let str=("")
//         for (let j=0; j<=n; j++){
//         if(j==0 || j==n || i==0 ||i==n){
//             str+= ("*")
//         }
//         else{
//             str+=" "
//         }

//     }
//     console.log(str)
// }

// ****
// *  *
// *  *
// ****


//const input=require("readline-sync")
// let num1 = input.questionInt("enter the number")
// let num2 = input.questionInt("enter the number")
// let gcd=1;
//     for (let i=0; i<=num2 || i<=num1; i++){
//         if (num2%i==0){
//             if (num1%i==0){
//                 gcd=i;
//             }

//         }
//     }
// console.log(gcd)



// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= n - i; j++) {
//         row += ' ';
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         row += '*';
//     }
//     console.log(row);
// }
// for (let i = n - 1; i >= 1; i--) {
//     let row = '';
//     for (let j = 1; j <= n - i; j++) {
//         row += ' ';
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         row += '*';
//     }
//     console.log(row);
// }









