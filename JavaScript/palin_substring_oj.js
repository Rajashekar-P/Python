function runProgram(input) {
    var data = input;

    function isPalin(palin) {

        var palin_len = 1;
        var start = 0;

        for (var i = 0; i < palin.length; i++) {
            for (var j = i; j < palin.length; j++) {
               // console.log(palin[i])
                var flag = true;
                for (var k = 0; k < (j - i + 1) / 2; k++) {
                    if (palin[i + k] != palin[j - k]) {
                        flag = false;
                    }
                }
                if (flag && (j - i + 1) > palin_len) {
                    start = i;
                    palin_len = j - i + 1;
                }
            }


        }
        return palin_len;
    }
    console.log(isPalin(data))

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\r\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\r\n$/, "")
    runProgram(read);
    process.exit(0);
});