function runProgram(input) {
    input = Number(input)
    for (var i = 1; i <= input; i++) {
        //console.log(i)
        if ((i % 5 ==0) && (i % 7 == 0)) {
            console.log("MasaiSchool")
        } else if (i % 7 == 0) {
            console.log("School")
        } else if (i % 5 == 0)  {
            console.log("Masai")
        } else {
            console.log(i)
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