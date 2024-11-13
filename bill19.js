const input = require("readline-sync")
let unit = input.questionInt("enter the unit")
var B;
var SC;
var EBILL;
if (unit <= 50) {
    B = unit * 0.50
    SC = B + 20 / 100
    EBILL = B + SC
    {
        console.log(EBILL)
    }
}

else if (unit <= 150) {
        B = (50*0.50)+ (unit - 50) * 0.75
        SC = B + 20 / 100
        EBILL = B + SC
        {
            console.log(EBILL)
        }
    }

    else if (unit <= 250) {
        B = (50*0.50)+(unit-50)*0.75
        
        SC = B + 20 / 100
        EBILL = B + SC

        { console.log(EBILL) }
    }

    else {
        B = (50*0.50)+(100*0.75)+(100*1.20)+(unit-250)*1.50
        SC = B * 20 / 100
        EBILL = B + SC
    }
    console.log(EBILL)
