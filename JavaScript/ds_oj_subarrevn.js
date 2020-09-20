function runProgram(input) {
    input = input.split("\n")
   
   var array = input[1].split(" ")
   var found = 0;
   for(var i =0;i<=array.length-1;i++){
    
        var sum = 0;
        for(var j =i;j<=array.length-1;j++){
            sum = sum + array[j]
            if(sum % 2 == 0){
                found++
            }
            
        }
     
   }
  console.log(found)
  
  }
      process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function (input) {
          read += input;
      });
      process.stdin.on("end", function () {
          read = read.replace(/\n$/, "")
          runProgram(read);
      });
      
      process.on("SIGINT", function () {
          read = read.replace(/\n$/, "")
          runProgram(read);
          process.exit(0);
      });