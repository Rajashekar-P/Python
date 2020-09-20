function runProgram(input) {
    input = input.split(" ")
    var left = Number(input[0]);
    var right = Number(input[1]);
    var k = Number(input[2]);
    var count = 0;


    for (var i = left; i <=right; i++) {
        console.log(i)
        if (i % k == 0) {
            count = count + 1;

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