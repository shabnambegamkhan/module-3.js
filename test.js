 const input=require("readline-sync")


// let a=input.questionInt("enter the number = ")
// let b=input.questionInt("enter the number = ")
// let c=input.questionInt("enter the number = ")
// if(a=b=c){
//     console.log("all equele")
// }
// else{
//     if(a==b){
//         console.log("two equele")
//     }
//     else if(a==c){
//         console.log("two equele")
//     }
//     else if(b==c){
//         console.log("two equele")
//     }
//     else if(a>b){
//         if(a>c){
//             if(a%2==0){
//                 console.log("even")
//             }
//         }
//         if(c>a){
//             if(c>b){
//                 if(c%2==0){
//                     console.log("even")
//                 }
//             }
//         }
//     }
//     if(b==c){
//         if(b%2!==0){
//             console.log("odd")
//         }
//         if(c>b){
//             if(c%2==0){
//                 console.log("odd")
//             }
//         }
//     }
// }


// //***********even odd sum************** */

// let n=input.questionInt("enter the length = ")
// let sum1=0;
// let sum2=0;
// let i=1; 
// while(i<n){
//     if (i%2==0){
//      let  v1=i**2;
//         sum1+=v1;
//     }
//     else{
//  let v2=i**3
//     sum2+=v2;

//     }        
//     i++;

// }
// console.log(sum1)
// console.log(sum2)
// console.log(sum1+sum2)

////////////positive integer nagetive integer////////////

// let n=input.questionInt("enter the size of arr = ")
// let arr=[]
// let count=0;
// let i=0;
// while(i<n){
//     arr[i]=input.questionInt("enter the element = ")
//     i++;
// }
// let sum1=0;
// let sum2=1;
// let j=0;
// while(j<n){
//     if(arr[j]>=0){
//        sum1=sum1+arr[j];
       
//     }
//     else
//     {
//         sum2=sum2*arr[j];
        
//     }
//     j++;
// }
// console.log(sum1)
// console.log(sum2)



/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// let n=input.questionInt("enter the size of arr = ")
// let arr1=[]
// let i=0;
// while(i<n){
//     arr1[i]=input.questionInt("enter the element = ")
//     i++;
// }
// console.log(arr1)

// let m=input.questionInt("enter the size of arr = ")
// let arr2=[]
// let j=0;
// while(j<m){
//     arr2[j]=input.questionInt("enter the element = ")
//     j++;
// }
// console.log(arr2)
// let unequearry= arr1.concat(arr2);
//   unequearry.sort();
// console.log(unequearry)

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////




////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let a=input.questionInt("enter the number = ")
// let b=input.questionInt("enter the number = ")
// let c=input.questionInt("enter the number = ")
// let d=input.questionInt("enter the number = ")
//  if(a>b){
//     max1=a;
//     min1=b;
//  }else{
//     max1=b;
//     min1=a;
//  }
//  if(c>d){
//     max2=c;
//     min2=d;
//  }else{
//     max2=d;
//     min2=c;
//  }
//  if(max1>max2){
//     max3=max1;
//     min3=max2;
//  }else{
//     max3=max2;
//     min3=max1;
//  }
//  if(min1>min2){
//     max4=min1;
//     min4=min2;
//  }else{
//     max4=min2;
//     min4=max1;
//  }
//  if(min3>max4){
//   console.log(max5=min3);
//  }else{
//  console.log(max5=max4);
//  }

/////////leap year//////////////////

// let n=input.questionInt("enter the year = ")
// if(n%4==0){
//     if(n%100!=0){
//         console.log("leap year")
//     }
//     else{
//         if(n%400==0){
//             console.log("leap year")
//         }
//     }

// }
// else{
//     console.log("not leap year")
// }   

////////pelindrome///////////

// let n=input.questionInt("enter the number = ")
// let i=1;
// let sum=0;
// while(i>0){
//     r=(i%10)
//     i=Math.floor(i/10)
//     sum=sum*10+r
    
// }
// if(sum==n){
//     console.log("pelindrome")
// }
// else{
//     console.log("not pelindrome")
// }

