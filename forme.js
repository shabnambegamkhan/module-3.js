// const input=require("readline-sync")
// let arr1=[5,8,8,8,5,5]
// let arr2=[]
// for(let i=0; i<arr1.length; i++){
//     if(arr1[i]==5){
//         arr2.push(arr1[i])
//     }
//     arr2.push(arr1[i])
// }
// console.log(arr2)



// let arr1 = [5, 8, 8, 8, 5, 5];
// let uniqueArr = [];
// for (let i = 0; i < arr1.length; i++) {
//     if (uniqueArr.indexOf(arr1[i]) === -1) {
//         uniqueArr.push(arr1[i]);
//     }
// }
// let arr2 = [];
// for (let i = 0; i < arr1.length; i++) {
//     if((arr2[arr2.length-1] == 5)){
//         arr2.push(uniqueArr[1]);
//     }else if((arr2[arr2.length-1] == 8)){
//         arr2.push(uniqueArr[0]);
//     }else{
//          arr2.push(arr1[i]);
//     }

// }
// console.log(arr2);



// const height = 5;
// for (let i = 1; i <= height; i++) {
//     let row = '';
//     for (let j = 1; j <= height - i; j++) {
//         row += ' ';
//     }
//     for (let k = 1; k <= i; k++) {
//         row += k;
//     }
//     for (let l = i - 1; l >= 1; l--) {
//         row += l;
//     }
//     console.log(row);
// }



// const input=require("readline-sync")
// var num1=input.questionInt("enter the number")
// var num2=input.questionInt("enter the number")
// while(num1!=num2){
//     if (num1<num2){
//         num1=num2;
//     }
//     num2=num1;
// }
// console.log(n)



/////////////////////////////// table  /////////////////////////////////////

//const input=require("readline-sync")
// let str=input.question("enter the word")
// let revers='';
// for (let i=str.length-1; i>0; i--){
//     revers+=str[i]
// }
// console.log(revers)




//const input=require("readline-sync")
// let size=input.questionInt("enter the number")
// for (let i=1; i<=size; i++){
//        let  row='';

//     for (let j=1; j<=size; j++){
//         table=i*j;
//         row+=table+"\t"

//     }
//         console.log(row)

// }



// const input=require("readline-sync")
// let n = input.questionInt("enter the size")
// let row=0;
// let table=1;
// let i=1;
//  while(i<=n){
//         row='';
//         let j=1;
//         while(j<=n){
//             table=i*j;
//             row+= table+'\t';
//             j++;

//         }
//         i++;
//  }
// console.log(row)

// const input=require("readline-sync")
// let n= input.questionInt("enter the size")
// for (let i=1; i<=n; i++){
//     row='';
//     for (let j=1; j<=n; j++){
//         table=i*j;
//         row+=table+'\t';

//     }
//     console.log(row)

// }



// const input=require("readline-sync")
// let n=input.question("enter the size of arr")
// let i=0;
// let arr=[]
// while(i<n){
//     let a=input.questionInt("enter the element")
//     arr[i]=a;
//      i++;
// }
// console.log(arr)


// const input=require("readline-sync")
// let a= input.questionInt("enter the number")
// let b=input.questionInt("enter the number")
// if(a>b)
//     {
//     console.log(a)
// }
// {
//     console.log(b)
// }

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

const input = require("readline-sync")



// const input=require("readline-sync")
// let n=input.questionInt("enter the lenght")
// let i=1;
// while(i<=n){
//     console.log(i)
//     i++;
// }


// let n=input.questionInt("enter the lenght")
// let table=1;
// let i=1;
// while(i<=n){
//     row='';
// let j=1;
//  while(j<=n){
//     table=i*j;
//     row+=table+"\t"
//     j++;
//  }
//  i++;
//  console.log(row)

// }


// let n=input.questionInt("enter the size of arr")
// let arr=[]
// let i=0;
// while(i<n){
//     let a=input.questionInt("enter the element")
//     arr[i]=a
//     i++;
// }
// console.log(arr)


// let n=input.questionInt("enter the size of array")
// let arr=[]
// let i=0;
// while(i<n){
//     let a=input.questionInt("enter the element")
//     arr[i]=a;
//     i++;
// }
// let k=0;
//     while (k<n) {
//         str="";
//         j=0;
//         while(j<k){
//             str=str+"* ";
//             j++;
//         }
//         k++;
//         console.log(str)
//         i++;
//     }

///////////////////////////////////////////////////////

// let n=input.questionInt("enter the size of ")
// let arr=[]
// let i=1;
// while(i<=n){
//     arr.push (i)

//      console.log(arr)
//      i++;
// }

//**********avarage *********************** */

// let length = input.questionInt("enter the number")
// let avrage = 0;
// let total = 0;
// let i = 1;
// while (i < length) {
//     total= total+i
//     i++;
// }
//     avarage = total/ length;
// console.log("Avrage;" + avarage)

//************reverse***************** */

// let n= input.questionInt("enter the size of arr; ")
// let arr=[]
// let i=0;
// while (i<n) {
//     let a=input.questionInt("enter the element; ")
//     arr[i]=a;
//     i++;
// }
//   let j=n-1;
//   let revers =[]
//   while (j>=0) {
//     revers.push(arr[j])
//     j--;
//   }
//   console.log(arr)
// console.log(revers)


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// let flettenarray=[[1,2],[3,4],[5,6]]
// let uniquearray=[]
//  uniquearray.push(flettenarray)
//  console.log(uniquearray)
//  uniquearray=flettenarray.concat(flettenarray)
//  console.log(uniquearray)
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

/////////////// NUMBER COUNT ///////////////////////

// let arr=input.questionInt("enter the size of array: ")
// let  uniquearray=[]
// let  i=0;
// while(i<arr){
//   let a=input.questionInt("enter the element: ")
//   arr[i]=a;
//   i++;
// }
// let j=1;
// let count=1;

// while(j<arr){
//   if (arr[j]==arr[i]) {
//     count+=1;
//     j++;
//   }
//   i++;
// }
// console.log(count)


////////////////// duplicate ////////////////////////////////
//0riu5568///////DUPLICATE NUMBER //////////////////////////////////
.0
// let n=input.questionInt("enter the size of arr: ")
// let arr1=[];
// let i=0;
// while(i<n){
//   let a=input.questionInt("enter the element: ")
//   arr1[i]=a
//   i++;
// }
// console.log(arr1)
// let m = input.questionInt("enter the size of arr: ")
// let arr2=[]
// let j=0;
// while (j<m) {
//   let b= input.questionInt("enter the element: ")
//   arr2[j]=b
//   j++;
// }
// console.log(arr2)
// let arr=[];
// let k=0;
// while(k<n){
//   let c=0;
//   let p=0;
//   while(p<m){
//     if(arr2[p]==arr1[k]){
//           c+=1;
//       arr.push(arr2[p])

//     }
//     p++;
//   }
//   k++;

// }
// console.log(arr)




//*******************fibonnachi number*************


// let n = input.questionInt("enter the number: ")
// let a=0;
// let b=1;
// let i=1;
// while(i<=n){
//   console.log(a)
//       let s=a+b
//       a=b;
//       b=s;
//     i++;
// }

//***********flattern array********************** */

// let arr=[[1,3],[[[[7,],5]],[78,62],[123]]]
//  let arr1=arr.flat()
// console.log(arr1.flat(Infinity))


//*******************prime number**************** */


// let n = parseInt(input.questionInt("enter the element : "))
// let sum=0;
// let i=1;
// while(i<=n){
//   if(n%i==0){
//      sum+=i;
//   }
//   i++;
// }
// if (sum==2) {
//   console.log('Yes')
// }
// console.log('No')

// ************natural numbers of square************** */

// let n=input.questionInt("enter the length $: ")
// let s=1;
// let i=1;
// while (i<=n) {
//     s=i**2
//     console.log(s)

  //  i++;
// }

//**********duplicate number******************** */

// let n = input.questionInt("enter the size of array: ");
// let arr = [];
// let i = 0;
// while (i < n) {
//     let a = input.questionInt("enter the element: ");
//     arr.push(a);
//     i++;
// }

// let j = 0;
// let dup = [];
// while (j < n) {
//     let count = 0;
//     let k = 0;
//     while (k < n) {
//         if (arr[k] == arr[j]) {
//             count += 1;
//         }
//         k++;
//     }
//     if (count > 1 && !dup.includes(arr[j])) {

//       dup.push(arr[j]);
//     }
    

//     j++;
// }
// console.log(dup)




