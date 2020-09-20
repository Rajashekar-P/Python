
function runProgram(input){
    var hours = Math.floor(input/60);
    var mins = input % 60;
   if (input == 60){
     console.log(hours + "hr"+ " "+"0"+ mins + "min")
   }else{
     console.log(hours +"hrs"+ " "+ mins +"mins")
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