
const input=require("readline-sync")
// let n = input.questionInt("enter the times")
// let name = input.question("enter the name")
// let i=1;
// while(i<=n){
//     console.log(name)
//     i++;
// }

//***************even number************** */
// let n=input.questionInt("enter the size: ")
// let i=1;
// while(i<=n){
//     if (i%2==0){
//         console.log(i)
//     }
//     i++;
// }

//************sum of odd number************* */
// let n= input.questionInt("enter the size: ")
// let sum=0;
// let i=1;
// while(i<=n){
//     if (i%2!==0) {
//         sum=sum+i;
//     }
//     i++;
// }
// console.log(sum)

//****************sum m to n ************ */
// let n= input.questionInt("enter the first number: ")
// let m= input.questionInt("enter the last number: ")
// let sum =0;
// let i=n;
// while(i>=n){
//     if (i<=m) {
//         sum+=i
//        console.log(sum)
//     }
//        i++;
// }

//*********series***************** */
// let n=input.questionInt("enter the length: ")
// let sum=0;
// let i=1;
// while(i<n){
//     sum=sum+1/i
//     i++;
// }
// console.log(sum)


//********digit count *************** */

// let n=input.questionInt("enter the number: ")
// let digit=1;
// let count=1;
// let i=1;
// if (i<=n) {
//     while(digit>=1){
//         digit=Math.floor(digit/10)
//         count++;
//         i++;
//     }
//     console.log("total digit =", count)
// }


//***********digit sum*********** */
// let n=input.questionInt("enter the length: ")
// let r=0;
// let sum=0;
// // let q=0;
// let i=1;
// while(i<=n){
//      r=n%10;
//      q=Math.floor(n/10)
//      sum=sum+r;
//      i++;
// }
// console.log(sum)

//*******prime number ***************** */

// let n=input.questionInt("enter the number: ")
// let count=0;
// let i=1;
// while(i<=n){
//     if(n%i==0){
//         count+=1;
//     }else{

//     }
//     i++;
// }
// if(count==2){
//     console.log("yes")
//   }  
// else{
//     console.log("no")
// }


//**********reverse number ************* */
// let n=input.questionInt("enter the number: ")
// let a=1;
// let i=n;
// while(i<=n){
//     if(a>0){
//         console.log(a)
//         a++;
//     }
//     i++;
// }

//**********frequency**************** */

// let n=input.questionInt("enter the number: ")
// let c=1;
// let i=1;
// while(i<=n){
//      let j=i+1;
//      while(j<=n){
//         if(j==i){
//             c+=1;
//         }
//         j++;
//      }
//     i++;
// }
// console.log('number',"=", c)


//***********fector*************** */

// let n=input.questionInt("enter the number: ")
// let i=0;
// while(i<=n){
//     if(n%i==0){
//        console.log(i)
//     }
//     i++;
// }

//**********prime number ********** */

// let n=input.questionInt("enter the number: ")
// let c=0;
// let i=1;
// while(i<=n){
//     if(n%i==0){
//         c+=1;
//     }
//     else{

//     }
//     i++;
// }
// if(c==2)
// {
//     console.log('yes')
// }else{
//     console.log('no')

// }

//*********perfect number************* */
 
// let n=input.questionInt("enter the number: ")
// let sum=0;
// let i=1;
// while(i<n){
//     if(n%i==0){
//         sum+=i
//     }
//    i++;
// }
// if(sum==n){
//     console.log("yes");
// }
// else{
// console.log("no");
// }




//************************************************ARRAY******************************************

// let n=input.questionInt("enter the size of array: ")
// let arr=[];
// let i=0;
// while(i<n){
//     arr[i]=input.questionInt("enter the element: ")
//     i++;
// }
// console.log(arr);

//***************natural number*************** */
// let n=input.questionInt("enter the size of arr: ")
// let arr=[]
// let i=0;
// while(i<n){
//     arr[i]=i;
//     i++;
// }
// console.log(arr)

//***********reverse************** */
// let n=input.questionInt("enter the size of arr: ")
// let arr=[]
// let i=0;
// while(i<n){
//     let a=input.questionInt("enter the element: ")
//     arr[i]=a;
//     i++;
// }
//  i=n-1;
// while(arr[i]>0){
//     console.log(arr[i])
//     i--;
// }

//*************exiet**************** */
// let n=input.questionInt("enter the size of arr: ")
// let exietnumber=input.questionInt("enter the exiet number: ")
// let arr=[]
// let i=0;
// while(i<n){
//     arr[i]=input.questionInt("enter the element: ")
//     i++;
// }
// let j=0;
// while(j<n){
//     if(arr[j]==exietnumber){
//         console.log("exiet")
//         }
//         console.log("no")

//         {
//         }
//          j++;

//     }

//************duplicate************ */


//************duplicate***************** */

// let n=input.questionInt("enter the size of arr := ")
// let arr=[]
// let c=0;
// let i=0;
// while(i<n){
//     arr[i]=input.questionInt("enter the element :=")
//     i++;
// }
// console.log(arr)
// let unequearr=[]
// let count=0
// let j=0;
// while(j<n){
//     let k=j+1;
//     while(k<n){
//         if(arr[k]==arr[j]){
//             count+=1;
//             unequearr.push(arr[k])
//         }
//         count++;
//       k++;  
//     }
//     j++;
// }
//console.log(unequearr)

//**************frequency number*********** */

// let n=input.questionInt("enter the size of arr: ")
// let arr=[]
// let i=0;
// while(i<n)
// {
//     arr[i]=input.questionInt("enter the element: ")
//     i++;
// }
// console.log(arr);
// let dup=[]
// let count=0;
// let j=0;
// while(j<n)
// {
//     let k=j+1;
//     while(k<n)
//     {
//         if(arr[k]==arr[j])
//         {
//             count+=1;
//         }
//         count++;
//         console.log(arr[j],"-", count,"times")

//         k++;
//     }

//         j++;
// }


//*************sorted array***************** */

// let n=input.questionInt("enter the size of arr  = ")
// let arr1=[]
// let i=0;
// while(i<n){
//     arr1[i]=input.questionInt("enter the element  = ")
//     i++;
// }
// console.log(arr1)

// let m=input.questionInt("enter the size of arr  = ")
// let arr2=[]
// let j=0;
// while(j<m){
//     arr2[j]=input.questionInt("enter the element  = " )
//     j++;
// }
// console.log(arr2)
// unequearr=arr1.concat(arr2)
// unequearr.sort()
// console.log(unequearr)


//*******pattern*********** */


// let n=input.questionInt("enter the size of arr = ")
// let arr=[]
// let i=0;
// while(i<n){
//     arr[i]=input.questionInt("enter the element = ")
//     i++;
// }
// let k=0;
// while(k<n){
//     let j=0;
//     str=" "
//     while(j<arr[k]){
//     str=str+">"
//     j++
// }
// console.log(str)
// k++;
// }




// let n= input.questionInt("enter the size of arr ; ")
// let arr=[];
// let i=0;
//  while(i<n){
//     arr[i]=input.questionInt("enter the element ; ")
//     i++;
//  }
//  let j=0;
//   while(j<n){
//     let k=0;
//     while(k<j+1){
//         if(arr[k]>arr[j]){
//             let temp=arr[k]
//              arr[k]= arr[j]
//              arr[j]= temp
//         }
//         k++;
//     }
//     j++;
//   }
// console.log(arr)


// let n=input.questionInt("enter the size of arr ; ")
// let arr=[]
// let i=0;
// while(i<n){
//     arr[i]=input.questionInt("enter the element ; ")
//     i++;
// }
// console.log(arr)
// let unequearr=[]
// let j=1;
// while(j<n){
//     let k=j+1;
//     let count=1;
//     while(k<n){
//         if(arr[k]==arr[j]){
//              count+=1;
//              unequearr.push(arr[j])

//         }
//         k++;
//     }
//     count++;
//     j++;

// }
// console.log(unequearr)











/////////////////////////PM///////////////REPAREING FOR THE TEST//////////////////////////////////////////////////////////







//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////fizz buzz///////////////////

// let n= input.questionInt("enter the number ; ")
// let i=0;
// while(i<=n){
//     if(i%3==0){
//         if(i%5==0){
//             console.log("fizz buzz")
//         }
//         if(i%3==0){
//             console.log("fizz")
//         }
//         else{
//             console.log("buzz")
//         }
//     }
//     i++;
// }


//\\\\\\\\\\\\anagram checker///////////////

// let arr1=input.question(" enter the size ; ")
// let arr3=[]
// let p=0;
// while(p<arr1){
//     arr3[p]=input.question("enter the name")
//     p++;
// }
// console.log(arr3)

// let arr2=input.question("enter the size ; ")
// let arr4=[]
// let q=1;
// while(q<arr4){
//     arr4[q]=input.question("enter the size ; ")
//     q++;
// }
// console.log(arr4)







/////********************************/////////////////////********************************/////////////////// */ */
// let a = 'abcd';
// let b = 'sdad';
// console.log(a[0] == b[2]);


// let n=input.questionInt("enter the length = ")
// let i=1;
// while(i<=n){
//     str="";
//     let j=1;
//     while(j<=i){
//         str=str+j+'';
//         j++;
//     }
//     i+=2;
// }
// console.log(str)

//////////////////***************************/////////////////////////**********************/////////////////////// */ *


// let n=input.questionInt("enter the number ; ")
// let sum=0;
// let i=0;
// while(n%i==0){
//     sum+=i;
//     i++;
// }
// if(sum==2){
//     console.log('prime no')
// }
// {
//     console.log('not prime no.')
// }
//************************************************************************** */

// let n=input.questionInt("enter the length ; ")
// let arr=[]
// let p=0;
// while(p<n){
//     arr[p]=input.questionInt("enter the element ; ")
//     p++;
// }
// console.log(arr)
// let unequearr=[]
// let count=1;
// let i=0;
// while(i<n){
//     let j=i+1;
//     while(j<n){
//         if(arr[i]==arr[j]){
//             count+=1;
//            unequearr.push(arr[i])

//         }
//         count++;

//         j++;
//     }
//     i++;
// }
// console.log(unequearr)



let arr=[7[268,710,68,85,98[45,231,45[[98,351,456,5]]]]]
 let arr1=arr.flat();
  arr1=
 console.log(arr1)


