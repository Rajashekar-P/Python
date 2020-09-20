function runProgram(input) {
    var arr = input;
    var sum = 0;
    var min = arr[0];
    var max = 0;
    for(var i =0;i<arr.length;i++){
        arr[i] = Number(arr[i])
        sum = sum + arr[i];
        if(arr[i] < min){
            min = arr[i]
        }
        if(arr[i] > max){
            max = arr[i]
        }
    }
    console.log((sum-max) + " " + (sum-min))

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