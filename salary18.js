const input = require("readline-sync")
let bs = input.questionInt("enter")

var HRA;
var DA;
var GS;

if (bs <= 10000) {
    {
        HRA = bs * 20 / 100
        DA = bs * 80 / 100
        GS = bs + HRA + DA
    }

}
else if (bs <= 20000) {
    HRA = bs * 25 / 100
    DA = bs * 90 / 100
    GS = bs + HRA + DA
}


else {
    (bs > 20000)
    HRA = bs * 30 / 100
    DA = bs * 95 / 100
    GS = bs + HRA + DA
}
{ console.log(GS) }
