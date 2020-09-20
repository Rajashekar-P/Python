function runProgram(input){
    
    input = input.trim().split(" ")
    
 console.log(input)
 var count =0;
 var row_count =0;
for(var i = 0;i<input.length;i++){
   // input[i] = Number(input[i])
    count = input.length
    
}
for(var i= 0;i<input[0].length;i++){
      row_count =input[0].length
}

console.log("Column -" +count)
console.log(row_count)

}

   

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
read += input;
});
process.stdin.on("end", function () {
read = read.replace(/\n$/,"")
runProgram(read);
});

process.on("SIGINT", function () {
read = read.replace(/\n$/,"")
runProgram(read);
process.exit(0);
});