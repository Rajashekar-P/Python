function runProgram(input) {
    input = input.split("\n")
    var data = input[1].split(" ")
    var count = 0;
    for (var i = 1; i < data.length - 1; i++) {
        data[i] = Number(data[i])

        if ((data[i] > data[i - 1]) && (data[i] > data[i + 1]))
            count = count + 1;
    }
    if (data[0] > [1]) {
        count = count + 1;
    }
    if (data[data.length - 1] > data[data.length - 2]) {
        count = count + 1;
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
    read = read.replace(/\r\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\r\n$/, "")
    runProgram(read);
    process.exit(0);
});