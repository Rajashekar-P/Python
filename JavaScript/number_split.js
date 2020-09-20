var n = 4793; // tried with 8976,1234,4321,9855 working fine

var x = n % 10;
var y = (n % 100) - Number(x);
var z = (n % 1000) - (Number(y) + Number(x));
var a = n -(Number(z) + Number(y) + Number(x));



//This code is for 5 Digit Number split
//var b = (n % 100000) - (Number(z) + Number(y) + Number(x) + Number(a));
//console.log(b)

console.log(a)
console.log(z)
console.log(y)
console.log(x)



