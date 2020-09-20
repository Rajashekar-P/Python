function runProgram(input) {
    input = input.split("\n")
    var array = input[1].split(" ")
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        array[i] = Number(array[i])
        sum = sum + array[i]
    }
    if (sum > 100) {
        console.log("Greater")
    } else {
        console.log("Lesser")
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