function runProgram(input) {
    var n = Number(input);
    for(var i = 0;i <= n; i++){
        for(var j = 0;j < ((n-i)-1); j++){
            console.log(" ")
        }
        for(var k = 0;k < (i+1); k++){
            console.log("#")
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
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});