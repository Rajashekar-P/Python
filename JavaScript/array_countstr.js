var data = ["Education", 23, "false", "Transformation", "98.5", true, "A", 0];
//var data = ["Masai", false, 23, "true", -92]
var final = 0;

 for(var i = 0;i<data.length;i++){
    
     for(var j = 0;j<data[i].length;j++){
         
     
        if(data[i][j] != "a" && data[i][j] != "e" && data[i][j] != "i" && data[i][j] != "o" && data[i][j] != "u" &&
         data[i][j] != "A" &&  data[i][j] != "E" && data[i][j] != "I" && data[i][j] != "O" && data[i][j] != "U"){
         final = final + 1   
        }
        
     }
      
     
}
        
console.log(final)