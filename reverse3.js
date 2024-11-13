const input=require("readline-sync")
let n = input.question("enter the size of arry ")
let arry=[]
let i=0;
while(i<n){
    let a = input.question("enter the value")
    arry[i]=a;
    i++;
}

    i=n-1
    while (arry[i]>0){
        console.log(arry[i])
    
     i--;
    }
