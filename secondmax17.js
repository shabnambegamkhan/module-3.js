const input = require ("readline-sync")
let a = input. question("enter")
let b = input.question("enter")
let c = input.question("enter")
let max;
let min;
let max1;
let min1;
if(a>b){
    max=a;
    min=b
}
else{
    max=b;
    min=a;
}
if (max>c){
    max1=max;
    min1=c;
}
else{
    max1=c;
    min1=max;
}

if (min>min1){
    console.log(min);
}
{
    console.log(min1);
}