function runProgram(input) {
    input = Number(input)

    var sumEven = 0;
    for (var i = 0; i <= input; i++) {
        if (i % 2 == 0) {
            sumEven = sumEven + i
        }

    }
    console.log(sumEven)
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