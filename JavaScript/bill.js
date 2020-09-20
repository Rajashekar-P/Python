var item1 = 80;
var item2 = 140;

var quantity1 = 6;
var quantity2 = 3;

var discount1 = 5;
var discount2 = 8;

var tip = 50;

var item1_discount = ((item1 * quantity1) * discount1) / 100;
var item2_discount = ((item2 * quantity2) * discount2) / 100;

var total1 = (item1 * quantity1) - (item1_discount);
var total2 = (item2 * quantity2) - (item2_discount);


var total = total1 + total2 + tip;

console.log("Total Restaurant Bill:" + total)


