function runProgram(input) {
    input = input.split("\n")
    var given = Number(input[0]);
    var array = input[1].split(" ")
    for (var i = 0; i < given; i++) {
        array[i] = Number(array[i]);
    }
    var maxoccur = "";
    var maxcount = "";
    for (var i = 0; i < given; i++) {
        var count = 0;
        for (var j = 0; j < given; j++) {
            if (array[i] == array[j]) {
                count = count + 1;
            }
        }
        if (maxcount == "" || count > maxcount) {
            maxoccur = array[i];
            maxcount = count;
        }
    }
    console.log(maxoccur)
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