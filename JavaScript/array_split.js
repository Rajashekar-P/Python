var data = "Masai School";
var output = [];

var final = "";

for(var i = 0;i<data.length;i++){
    if(data[i] == " "){
      output.push(final)
      console.log(output)
      final= "";
      
      
    }else{
        final = final + data[i]
    }
    
    
}
output.push(final)

console.log(output)

