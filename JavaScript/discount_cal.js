var sale_price = 250;
var discount_rate = 10;
var max_discount = 100;
var min_purchase = 300;

var discount = ((sale_price * discount_rate) / 100);
var total = sale_price - discount;



if (sale_price < min_purchase){
    console.log("No Discount Because minimum purchase is 300")

}else if ((sale_price > min_purchase) && (discount < max_discount)){

    console.log("You have Discount and your discount is below 100")

}else if ((sale_price  > min_purchase) && (discount > max_discount)){
    console.log("you're eligible for discount but maximum disount is 100")
}