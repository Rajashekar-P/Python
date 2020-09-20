var number = 64;
var i = 2;

while(i <= number){
    var prime = 0;
    if (number % i == 0 && i != number){
        prime = 1;
        break;
    }
    i++
    
   
}
if (prime==0){
    console.log(number + " is Prime")
        
    }else{
       console.log(number + " is Not prime")
    }

