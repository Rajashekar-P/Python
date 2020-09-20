var numbers = [13,56,78,32,21];

for(var i = 0;i < numbers.length;i++){
    
    if(numbers[0] < numbers[i]){
        numbers[0] = numbers[i]
    }
}
console.log(numbers[0])
