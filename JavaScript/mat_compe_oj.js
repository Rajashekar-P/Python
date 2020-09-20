function runProgram(input){
    input = input.split("\n");
    var count =1;

    for (var i = 0; i < input.length; i++) {
        count = 1;
        for (var j = i + 1; j < input.length; j++) {
          if (input[i] == input[j]){
            count++;
            console.log(input[i]+ "-" +count + "<br>")
          }
            
        }
      
    }
    
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