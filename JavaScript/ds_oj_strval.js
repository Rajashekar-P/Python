function runProgram(input) {
  
    var count = 0;
    for(var i =0;i<input.length;i++){
        if(input[i] == "a"){
            count = count + 1;
        }
        if(input[i] == "b"){
            count = count + 2
        }
        if(input[i] == "c"){
            count = count + 3
        }
        if(input[i] == "d"){
            count = count + 4
        }
        if(input[i] == "e"){
            count = count + 5
        }
        if(input[i] == "f"){
            count = count + 6
        }
        if(input[i] == "g"){
            count = count + 7;
        }
        if(input[i] == "h"){
            count = count + 8
        }
        if(input[i] == "i"){
            count = count + 9
        }
        if(input[i] == "j"){
            count = count + 10
        }
        if(input[i] == "k"){
            count = count + 11
        }
        if(input[i] == "l"){
            count = count + 12
        }
        if(input[i] == "m"){
            count = count + 13;
        }
        if(input[i] == "n"){
            count = count + 14
        }
        if(input[i] == "o"){
            count = count + 15
        }
        if(input[i] == "p"){
            count = count + 16
        }
        if(input[i] == "q"){
            count = count + 17
        }
        if(input[i] == "r"){
            count = count + 18
        }
        if(input[i] == "s"){
            count = count + 19
        }
        if(input[i] == "t"){
            count = count + 20
        }
        if(input[i] == "u"){
            count = count + 21
        }
        if(input[i] == "v"){
            count = count + 22
        }
        if(input[i] == "w"){
            count = count + 23
        }
        if(input[i] == "x"){
            count = count + 24
        }
        if(input[i] == "y"){
            count = count + 25
        }
        if(input[i] == "z"){
            count = count + 26
        }
    }
    console.log(count)

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