var numbers = [34,-87,23,12,98,-2,0];//here 0 is considered as EVEN


var count = 0;

var odd_avg = 0;
var even_avg = 0;

for(var i = 0;i<numbers.length;i++){
    if(numbers[i] % 2 == 0 ){
        count = count +1;
        even_avg = even_avg + numbers[i];
       
    }else{
        
        odd_avg = odd_avg + numbers[i] ;
        
    }

    
}

console.log(odd_avg/(numbers.length-count))
console.log(even_avg/count)
