const input = require("readline-sync")
let x = input.questionInt("enter")
let y = input.questionInt("enter")

{ var a = x + y }
console.log(a)

{ var b = x - y }
console.log(b)
{ var c = x * y }
console.log(c)
{ var d = x / y }
console.log(d)
{ var e = Math.floor(x / y) }

{
    console.log(e)
}