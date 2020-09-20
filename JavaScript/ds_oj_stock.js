function runProgram(input) {
    input = input.split("\n")
    var weeks = Number(input[0])
    var items = input[1].split(" ")
    var sum = 0;
for(var i =0;i<items.length;i++){
    items[i] = Number(items[i])
    console.log(items[i])
    if(items[i] = 1){

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