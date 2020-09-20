function runProgram(input) {
  var data = input;
  var palin = true;
  for(var i =0;i<data.length;i++){
      if(data[i] != data[data.length-i-1]){
            palin = false
            break;
      }
  }
      

    
    
    if (palin) {
        console.log("YES")
    } else {
        console.log("NO")
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