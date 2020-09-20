function runProgram(input) {
    var array = input.split(" ")
    for (var i = 0; i < array.length; i++) {
        array[i] = Number(array[i])
        var isOdd = function (el) {
            return (el % 2 == 1)

        }

        var sum = function (ac, el) {
            return ac + el
        }

        var odd_sum = array.filter(isOdd).reduce(sum)
    }
    console.log(odd_sum)
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