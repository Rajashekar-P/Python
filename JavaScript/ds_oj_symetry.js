function runProgram(input) {
    input = input.split("\n")
    var number = Number(input[0])
    var pos = 1;
    for (var i = 0; i < number; i++) {
        var matrix = []
        var n = Number(input[pos++])
        for (var j = 0; j < n; j++) {
            var row = input[pos++].split("")
            matrix.push(row)
        }
        var hor = checkHor(n, matrix)
        var ver = checkVer(n, matrix)
        if (hor && ver) {
            console.log("BOTH")
        }
        else if (hor) {
            console.log("HORIZONTAL")
        }
        else if (ver) {
            console.log("VERTICAL")
        }
        else {
            console.log("NO")
        }
    }
    function checkHor(n, matrix) {
        for (var i = 0; i < Math.floor(n / 2); i++) {
            for (var j = 0; j < n; j++) {
                if (matrix[i][j] != matrix[n - i - 1][j]) {
                    return false
                }
            }
        }
        return true
    }
    function checkVer(n, matrix) {
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < Math.floor(n / 2); j++) {
                if (matrix[i][j] != matrix[i][n - j - 1]) {
                    return false
                }
            }
        }
        return true
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