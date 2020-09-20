var a = 1984;
var b = 1987;
var c = 1981;

var present_year = 2020;

var age_a = present_year - a;
var age_b = present_year - b;
var age_c = present_year - c;

if (age_a > age_b && age_a > age_c) {
    console.log("A")
} else if (age_b > age_a && age_b > age_c) {
    console.log("B")
} else {
    console.log("C")
}

