function runProgram(input) {
    input = input.split("\n")
    var luggage = input[1].split(" ")
    var handbag = input[2].split(" ")

    for (var i = 0; i < luggage.length; i++) {
        luggage[i] = Number(luggage[i])


        handbag[i] = Number(handbag[i])

        if ((luggage[i] > 15) || (handbag[i] > 7)) {
            console.log("Stop")
        } else {
            console.log("Boarding")
        }
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