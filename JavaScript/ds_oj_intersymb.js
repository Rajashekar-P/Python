function runProgram(input) {
  input = input.split("\n")
 
  var n = Number(input[0])
  var m = input[1]
  var sum = 0;
  console.log(n)
  console.log(m)
  
  for(var i =0;i<m.length;i++){
     
      if(m[i] == "@"){
          n = n * 10;
      }else if(m[i] == "!"){
          n = n + 2;
      }else if(m[i] == "%"){
          n = n - 5;
      }else if(m[i] == "^"){
         n = n ** 2
      }else{
          n = n + 37
      }

  }
  console.log(n)
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