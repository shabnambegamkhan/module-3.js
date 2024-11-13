
// const input=require("readline-sync")
// let c=input.questionInt("enter the cost of bicycle = ")
// let s=input.questionInt("enter the spend each week fron her pocket money =  ")
// let a=input.questionInt("enter the weekly pocket money = ")
// let week=0;
// let money=0;;
// while(money<s){
    
//     money+=s
//     week++;
//     if(week%7==0){
        
//         money+a
//     }
// }
// console.log(week)

////////////////////////////////////////////////


 // let cost = 1000;
// let spend =50;
// let income = 200; 
//  const savingsPerWeek = income - spend;

//   // Calculate the number of weeks needed to save enough money
//   const weeksNeeded = Math.ceil(cost / savingsPerWeek);
// console.log(weeksNeeded)

//////////////////////////DRYRUN/////////////////////////////////////////////////////////
// let i=1;
// let j=1;
// while(i<=3){
//     while(j<=3){
//         if(i==j>2){
//             break;
//         }
//         console.log(i*j)
//         j++;
//     }
//     i++;
// }

///////////////////////////////////////////////

// let s=20;
// while(s>0){
//     if(s%3){
//         if(s%5){
//             console.log(s)
//             s=s+4
//         }
//         else{
//             s=s-1;
//         }
//     }else{
//         s=s-1;
//     }
// }


///////////////////////////////////////////////
// let values = [];

// for (let i = 0; i < 10; i++) {
//     values[i] = (i + 1) * 5;
// }

// // Displaying the values
// for (let i = 0; i < values.length; i++) {
//     console.log(values[i]);
// }


///////////////////////////////////////////////////////

// const input=require("readline-sync")
// const height=5
// for(let i=1; i<=height; i++){
//     for(let j=1;j<=height-i; j++){
//       row=" "
//     }
//     for(let k=1; k<=i; k++){
//         row+=k;
//     }
//     for(let l=i-1; l>=1; l--){
//         row+=l;
//     }
//    console.log(row)
// }


//////////////////////////////////////////////////

// const input=require("readline-sync")
// const height=5;
// let i=1;
// while(i<=height){
//     let row=" "
//     let j=1
//     while(j<=height-i){
//         row=" "
//         let k=1;
//         while(k<=i){
//             row=row+k;
//             let l=i-1;
//             while(l>=1){
//                 row =row+l;
//                 console.log(row)
//                 l--;
//             }
//             k++;
//         }
//         j++;
//     }
//     i++;
// }


/////////////for knowledg//////////////////////
// let a=1;
// console.log("++a",  ++a)

// console.log("a--",  a--)

// console.log("a++",  a++)
// console.log("--a", --a)

// console.log("a",  a)


///////////////////////////////////////////////////

// let length = 5;

// let arr = [ 6, 10, 14, 20, 5];

// let i = 0;

// let j = 1;

// while (i < length - 1) {

//     let j = i;

//     let s = 0;

//     i = i + 1;

//     arr[i] = i+s % arr[i];

// }

// console.log(arr);

////////////////////////////////////////////////////


// let length = 7;

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let result = 0;

// let i = 0;

// while (i < length) {

//     if (i % 2 == 0) {

//         result = result - arr[i];

//     } else {

//         result = result * arr[i];

//     }

//     i = i + 1;

// }

// console.log(result);

/////////////////////////////////////////////////////////


// let length = 7;

// let arr = [21, 11, 31, 21, 41, 31, 11];

// let i = 0;

// let j = 1;

// while (i < length && j < length) {

//     if (arr[i] > arr[j]) {

//         arr[i] = arr[i] % arr[j];

//     }

//     i = i + 3;

//     j = j + 2;

// }

// console.log(arr[i])

/////////////////////////////////////////////////////

// arr[1,2,3,4,5]
// for(let i=0; i<Array.length; i++){
//     arr[i]=arr[i]+1;
// }
// console.log(arr)


