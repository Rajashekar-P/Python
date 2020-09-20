var number = 7;
var word = "";
var result = "";

number = String(number)

console.log(number)

for(var i = 0;i <= number.length;i++){
    
    switch(number[i]){
        case "0":
            word ="Zero"
            
            break;
        case "1":
            word ="One"
            break
        case "2":
            word="Two"
            break;
        case "3":
            word="Three"
            break;
        case "4":
            word = "Four"
            break;
        case "5":
            word = "Five"
            break;
        case "6":
            word = "Six"
            break;
        case "7":
            word = "Seven"
            break;
        case "8":
            word = "Eight"
            break;
        case "9":
            word = "Nine"
           
            break;
        default:
            word = ""
            break;
            
    }
       result = result +  word + " "; 
  
      
      
}
console.log(result)





