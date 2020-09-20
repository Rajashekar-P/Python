
function runProgram(input){
  
    input = input.trim().split(" ")
    var l = input[0]
    var w = input[1]
    var h = input[2]
    var size;
    
    for(var i =0;i<input.length;i++){
        input[i] = Number(input[i])
        size = l * w * h;
    }
    
     
    console.log(size)
       
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
     
     