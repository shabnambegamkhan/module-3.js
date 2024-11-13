const input = require("readline-sync")
let a = input.questionInt("enter")
let b = input.questionInt("enter")

{
    a = a+b
    b= a-b
    a= a-b
}
{
    console.log(a ,b)
}
