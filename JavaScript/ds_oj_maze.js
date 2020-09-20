function runProgram(input) {
var x = 0;
var y = 0;
for(var i =0;i<input.length;i++){
    if(input[i] == "L"){
        x = x - 1
    }else if(input[i] == "R"){
        x = x + 1
    }else if(input[i] == "D"){
        y = y - 1;
    }else{
        y = y + 1
    }
}
   
   
console.log(x + " " + y)

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