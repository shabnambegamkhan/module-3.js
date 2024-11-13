 const input=require("readline-sync")

// let firststudent= input.questionInt("enter the number : ")
// let secondstudent= input.questionInt("enter the number : ")
// if (firststudent>secondstudent){
//     console.log("yes")
// }
// else(
//     console.log("no")
// )

////////////////////////////////////////////////////////

// var student1=input.questionInt("enter the score :")
// //var student2=input.questionInt("enter the score : ")
// if (student1>=40){
//     console.log("pass")
// }
// if(student1<40){
//     console.log("fail")
// }

///////////////////////////////////////////////////////

// let student1=input.questionInt("enter the grade for student 1 : ")
// let student2=input.questionInt("enter the grade for student 2 : ")
// if(student1>=80)
// if (student1>student2){
//     console.log("first student performed better :","A")
// }
// else{ 
//     console.log("second student performed berrer:","B")
// }
// else if(student1>=60 && student1<80){
//     if(student2<60&& student2>50){
//      console.log("first student performed better :","+b")

//     }
//     else{
//         console.log("second student performed better :","b")

//     }
// }
// else if(student1>40 && student1<50){
//     if(student2<40){
//         console.log("firsst student performed better :" , "c")
//     }
//     else{
//         console.log("fail")
//     }
//     console.log("fail")
// }





// let length = 5
// let arr=[32,2,41,22,16]
// let i=0;
// let j=1;
// let temp=0
// while(i<length-1){
//     let j=i;
//     let sum=0;
//     while(j<length){
//      sum=sum+arr[j]
//         j=j+1
//     }
//     i=i+1
//     arr[i]= sum%arr[i]
//     arr[i]=temp
//     i++;
// }
// console.log(arr)

////////////////////////////////////////

// let Array= ["hello", "bye", "how", "are", "you"]
// let i=0;
// let count=0;
// while(i<Array.length){
//     let j=0;
//      while(j<Array.length){
//         count+=0
//         j++;
//      }
//      count++;
//      i++;
// }
// console.log(count)




// function outer(){
//     let a=10;
//     let b=20;
//     let inner= function(){
//          console.log(inner, a,b)
//     }
//     return inner();
// }
// let result = outer();
// console.dir(result)
// result();




// let dress=50;
// let shoes=30;
// let handbag=25;
// total=50+30+25;
// chang=150-total
// console.log(chang)


// let item=[20,30,40,50,]
// let i=0;
// let total=0;
// while(i<item.length){
//      total =total+item[i]
//     i++;
// }
// console.log(total)



let temperatures=40
total=0;
let F=(c*9/5)+32
c=F-32*5/9
console.log(c)
