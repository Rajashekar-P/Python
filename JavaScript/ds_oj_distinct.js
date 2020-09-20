function runProgram(input) {
    var data = input;
    var output = {}
    var distinct;
    for(var i =0;i<data.length;i++){
        if(!data[i]){
            data[i] = 1;
        }else{
            data[i] = data[i] + 1;
        }
    }
    for(key in output){
        if(output[key] = 1){
            distinct = distinct + key
        }
    }
    console.log(distinct)
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