
function runProgram(input){
  
   input = input.split("\n")
   var size = Number(input[0])
   var given = input[1].split(" ")
   
    var small = given[0];
    var large = given[0];

   for(var i =0;i<given.length;i++){
       given[i] = Number(given[i])
       if(small >= given[i]){
        small = given[i]
        
    }else if(large < given[i] ){
        large = given[i]
      
    }
     
   }
   console.log(small)
   console.log(large)
 
  
    
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
     
     