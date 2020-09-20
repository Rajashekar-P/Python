var number = "10101001";

var base = 1;
//var rem;
var decimal = 0;
for(var i = number.length -1;i>=0;i--){
   
    if(number[i] == 1){
        decimal = decimal + base;
        base = base *2
    }
}
console.log(decimal)
