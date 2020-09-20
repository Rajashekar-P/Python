function runProgram(input) {
    input = input.split("\n")
  var array = input[1].split(" ")
  var count = 1;
  for(var i = 0 ;i<array.length;i++){
    array[i] = Number(array[i])
    var curr = array[i]
    var prev = array[i-1]
    if(curr < prev){
      count++
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