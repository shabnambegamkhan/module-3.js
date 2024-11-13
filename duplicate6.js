//  const input = require("readline-sync")
// let n = input.question("enter the size of array :")
// let arry = []
// let i = 0;
// while (i < n) {
//     arry[i] = input.question("enter the element : ")
//     i++;
//     arry.push
// }
// p = 0;
// let count=1;
// while (p < n) {
//     i++;
//     var j = p+1;
//     while (j < n) {
//         if (arry[p] == arry[j]) {
//             j++;
//             count=count +1;
//         }
//         else {
//             p++;
// }

//     }

// //    console.log( count)

//  }
//  console.log( arry[j])




const input = require("readline-sync")
let n = input.question("enter the arry of size : ")
let k = input.question("duplicate number");
arr = []
let i = 0;
while (i < n) {
    let b = input.question("enter the element : ")
    arr[i] = b;
    i++;
}
let j=0;                    
while (i < n) {
    while (j < n) {
        let j = 0;
        var count = 1;
        if (arr[j] == k) {
            count += 1;
            j++;
        }
        else {
            j++;
            count++;
        }
    }
    if (count > 1) {

}
}
console.log(arr[j])
