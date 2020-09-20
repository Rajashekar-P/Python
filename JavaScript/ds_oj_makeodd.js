function runProgram(input) {
    input = input.split("\n")

    var array = input[2].split(" ")
    var array1 = input[4].split(" ")
    var sum = 0;
    var sum1 = 0;
    var even = 0;
    var odd = 0;
    for (var i = 0; i < array.length; i++) {
        array[i] = Number(array[i])
        for(var j =0;j<array1.length;j++){
            sum += array[i]
            sum1 += array1[j]
        }

       
    }
  
    if (odd==0 || (even==0 && sum %2 == 0)) {
        console.log("NO")
    }else{
        console.log("YES")
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