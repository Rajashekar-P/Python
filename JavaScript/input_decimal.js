function runProgram(input){
  input = input.split(".")

 if(Math.floor(input) == input){
   console.log(0)
 }else{
   console.log(input[1].length-1)
 }
 

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