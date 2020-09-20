function runProgram(input) {

    var output = "";
    var count = 1;
    for (var i = 1; i < input.length; i++) {
        if (input[i] == input[i - 1]) {
            count = count + 1;
        } else {
            output = output + input[i - 1] + count
            count = 1;
        }
    }
    output = output + input[input.length - 1] + count
    console.log(output)

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\r\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\r\n$/, "")
    runProgram(read);
    process.exit(0);
});