function runProgram(input){
    var number = input.split(" ");
    var unique = [];

    for(var i =0;i<number.length;i++){
       number[i] = Number(number[i])
        //console.log(number[i])
        for(var j =0;j<number.length;j++){
            if(i!=j && number[i] != number[j] ){
                //console.log(number[i])
                unique.push(number[i]);
                
            }
        }
        
            
        }
        console.log(unique)
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