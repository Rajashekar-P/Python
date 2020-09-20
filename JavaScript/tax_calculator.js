var income = 200000;

if (income < 250000){

    console.log("No Tax")
}else if ((income >= 250000) && (income < 500000)){
    var tax = ((income * 10) / 100);
    
    console.log(tax)
}else if ((income >= 500000) && (income < 1000000)){
    var tax = ((income * 20) / 100);
    
    console.log(tax)
}else{
    var tax = ((income * 30) / 100);
    
    console.log(tax)
}
