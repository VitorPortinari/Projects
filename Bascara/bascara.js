("use strict")
var b = 5
var a = 1
var c = 3

delta = b*b - 4 * a * c

const bascaraposi = ((-b)+(Math.sqrt(delta)))/(2*a)
const bascaranega = ((-b)-(Math.sqrt(delta)))/(2*a)

if(delta <= 0 || a == 0 || b == 0 || c == 0 ) {
    console.log("Impossivel de resolver")
}
else{
    console.log(bascaraposi)
    console.log(bascaranega)
}