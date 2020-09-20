function runProgram(input) {
    var size = NUmber(input[0]);
    var matrix = input[1].split(" ")
    var diag1 = 0;
    var diag2 = 0;
    var diff;
    
    for(var i = 0;i<matrix.length;i++){
        for(var j= 0;j<matrix[i].length;j++){
            if(i==j){
                //console.log(matrix[i][j])
                diag1 = diag1 + matrix[i][j];
    
            }
            if(j == matrix.length - 1 -i){
                //console.log(matrix[i][j])
                diag2 = diag2 + matrix[i][j]
            }
        }
        diff = diag1 - diag2;
    
    }
    console.log(diff)
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