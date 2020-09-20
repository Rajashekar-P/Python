function runProgram(input){
    var number = input;
      
    var n = 1;
    var height = 0;
    
    var level_stone = 0;
    var total = 0;
    while(total < number){
        level_stone = level_stone + n;
        total = total + level_stone;
      //console.log(total)
        if(total > number)
        break;
        height = height + 1;
        n = n + 1;
    }
      console.log(height)
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