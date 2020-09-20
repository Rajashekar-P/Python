function runProgram(input) {
    var count = 0;
    var string = input;
    function checkVowl(sub_string) {
        var a = false;
        var i = false;
        var o = false;
        var u = false;
        for (var j = 0; j < sub_string.length; j++) {
            if (sub_string[j] === "a") {
                a = true
            }
            if (sub_string[j] === "i") {
                i = true
            }
            if (sub_string[j] === "o") {
                o = true
            }
            if (sub_string[j] === "u") {
                u = true
            }

        }
        return a && i && o && u
    }

    for (var i = 0; i < string.length; i++) {
        var sub_string = "";
        for (var j = i; j < string.length; j++) {
            sub_string += string[j]
            if (checkVowl(sub_string)) {
                count++
            }
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