var data = "There is a smallest natural number";
var count = 1;

for(var i = 0;i<data.length;i++){
    if(data[i] == ' '){
        count = count +1;
        
    }
    
}
console.log(count)