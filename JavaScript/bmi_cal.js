var weight = 70; //weight in kg's
var height = 152; // height in cm's


var bmi = ((weight / height / height) * 10000);
//console.log(bmi)

if (bmi < 18.5){
    console.log("You're in the underweight range")   
}else if ((bmi > 18.5) && (bmi < 24.9)){
    console.log("You're in the healthy weight range")
}else if ((bmi > 25) && (bmi < 29.9)){
    console.log("You're in the overweight range")
}else if ((bmi > 30) && (bmi < 39.9)){
    console.log("You're in the obese range")
}