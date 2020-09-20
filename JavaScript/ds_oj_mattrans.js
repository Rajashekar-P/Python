function runProgram(input) {
    input = input.trim(" ").split(/[\r\n]+/)
    var matrix = [];
    for (var i = 1; i < input.length; i++) {
        matrix.push(input[i].split(" "))
    }
    var rows = matrix.length;
    var cols = matrix[0].length;
    var output = [];

    for (var i = 0; i < cols; i++) {
        output[i] = [];
        for (var j = 0; j < rows; j++) {
            output[i][j] = null;
        }
    }
    for (var i = 0; i < rows; i++) {
        var out_row = []
        for (var j = 0; j < cols; j++) {
            var current_row = i;
            var current_col = j;
            var new_row = current_col;
            var new_col = current_row;
            var element = matrix[current_row][current_col]
            output[new_row][new_col] = element;
        }
    }
    for (var i = 0; i < cols; i++) {
        console.log(output[i].join(" "))
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