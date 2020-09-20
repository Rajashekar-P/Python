function runProgram(input) {
    input = input.split("\n")
    var array = input[1].split(" ")
    for(var i =0;i<array.length;i++){
        array[i] = Number(array[i])
        if(array[i] >= 85){
            console.log("Beep")
        }else{
            console.log("Enter")
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