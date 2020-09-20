
function runProgram(input){
  
    input = input.split("\n")
    var size = Number(input[0])
    var given = input[1].split(" ")
    var given1 = input[2].split(" ")
    var match;
     for(var i =0;i<given.length;i++){
         given[i] = Number(given[i])
         
         for (var j =0;j<given1.length;j++){
             given1[j] = Number(given1[j])
            
             if(given[i] == given1[j]){
                 match = given[i]
             }
            
             }
         }
     

    
     console.log(given)
     console.log(given1) 
     console.log(match)
     
    }
        
                
      process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function (input) {
          read += input;
      });
      process.stdin.on("end", function () {
          read = read.replace(/\n$/,"")
         runProgram(read);
      });
      
      process.on("SIGINT", function () {
          read = read.replace(/\n$/,"")
          runProgram(read);
          process.exit(0);
      });
      
      