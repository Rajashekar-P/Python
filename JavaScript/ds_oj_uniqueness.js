function runProgram(input) {
    var data = input;
    var found = 1;
    for (var i = 0; i < data.length - 1; i++) {
        for (var j = i + 1; j < data.length; j++) {
            if (data[i] == data[j]) {
                found = 0;
                break;
            }
        }
    }
    if (found == 0) {
        console.log("No")
    }
    else {
        console.log("Unique")
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