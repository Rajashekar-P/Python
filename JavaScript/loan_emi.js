var amount = 100000;

var interest_rate = 12;
var quaterly = interest_rate / 4; // did this operation because quaterly compounding

var time = 24;
var time_quaterly = time / 3; 

// compound interest formula: A = P(1 + r/100) ^ n (where r = interest_rate, n = time)

var total = (amount *( (1 + quaterly / 100)) ** time_quaterly)

console.log("Total Amount :" + total)

var emi = total / time;
console.log("Monthly EMI :" + emi)