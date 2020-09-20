function runProgram(input) {
    input = input.split(" ")
    var australia = Number(input[0]);
    var england = Number(input[1]);
    if (australia > england) {
        console.log("Australia")
    } else if (england > australia) {
        console.log("England")
    } else if (australia == england) {
        console.log("Tie")
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