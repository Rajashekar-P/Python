function runProgram(input) {
    input = input.split("\n")
    var student_1 = input[0].split(" ")
    var student_2 = input[1].split(" ")

    var sum = 0;
    var sum1 = 0;
    for (var i = 0; i < student_1.length; i++) {
        student_1[i] = Number(student_1[i])
        sum = sum + student_1[i]


    }
    for (var i = 0; i < student_2.length; i++) {
        student_2[i] = Number(student_2[i])

        sum1 = sum1 + student_2[i]

    }
    if (sum > sum1) {
        console.log("First")
    } else if(sum == sum1){
        
        console.log("Second")
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