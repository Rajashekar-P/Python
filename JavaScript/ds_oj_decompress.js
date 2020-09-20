function runProgram(input) {
    var data = "";
    var numbers = "0123456789"
for(var i =0;i<input.length;i++){
    
  for(var j =0;j<numbers.length;j++){
      if(input[i] == numbers[i]){
          data = data + input[i]
      }
  }
   
}
   console.log(data)


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