const input = require("readline-sync")
let a = input.question("enter")
let b = input.question("enter")
let c = input.question("enter")
let d = input.question("enter")
let max;
let min;
let max1;
let min1;
let max2;
let min2;
let max3;
let min3;
let max4;
let min4;
if (a > b) {
    max = a;
    min = b;
} else {
    max = b;
    min = a;
}
if (c > d) {
    max1 = c;
    min1 = d
} else {
    max1 = d;
    min2 = c
}
if (max > max1) {
    max2 = max;
    min2 = max1;
} else {
    max2 = max1;
    min2 = max;
}
if (min > min1) {
    max3 = min;
    min3 = min1
} else {
    max3 = min1;
    min3 = min
}
if (min2 > max3) {
    max4 = min2;
    min4 = max3;
} else {
    max4 = max3;
    min4 = min2;
}
if (min2 > min4) {
    console.log(max5 = min2)

} else {
    console.log(max5 = min4)
    
}