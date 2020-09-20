function runProgram(input) {
    var number = Number(input);
    var reverse = 0;
   
    var remainder;

        while (number != 0) {
            remainder = number % 10;
            reverse = reverse * 10 + remainder;
            number = number / 10;
            
        }
      

    
    
    if (number == reverse) {
        console.log("Yes")
    } else {
        console.log("No")
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