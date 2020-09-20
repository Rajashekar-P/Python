function runProgram(input) {
    input = input.trim().split("\n")
    var k = 3;
    var [n, m, s] = input[0].split(" ").map(a => parseInt(a))
    input.shift()
    var matrix = input.map(a => a.split(" ").map(Number))
    var count = 0;

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            //Horizontal count
            //2d product & 2dsum (replace * with +)
            if (m - j >= k) {
                if (matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] == s) {
                    count = count + 1;
                }
            }
            //Vertical count
            if (n - i >= k) {
                if (matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] == s) {
                    count = count + 1;
                }
            }
            //Diagonal down
            if (n - i >= k && m - j >= k) {
                if (matrix[i][j] * matrix[i + 1][j + 1] * matrix[i + 2][j + 2] == s) {
                    count = count + 1;
                }
            }
            //Diagonal up count
            if (i >= k - 1 && m - j >= k) {
                if (matrix[i][j] * matrix[i - 1][j + 1] * matrix[i - 2][j + 2] == s) {
                    count = count + 1;
                }
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