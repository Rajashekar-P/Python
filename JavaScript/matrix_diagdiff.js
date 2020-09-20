function runProgram(input) {
  
    input = input.trim().split("\n")
     
     var [n] = input[0].split(" ").map(a => parseInt(a))
   
     input.shift()
     var matrix = input.map(a => a.split(" ").map(Number))
     var diag1 = 0;
     var diag2 = 0;
     var diff;
     
     for(var i = 0;i<n;i++){
         for(var j= 0;j<n;j++){
             if(i==j){
                 
                 diag1 = diag1 + matrix[i][j];
     
             }
             if(j == n - 1 -i){
                 
                 diag2 = diag2 + matrix[i][j]
             }
         }
          diff = diag1 - diag2;
     
     }
     console.log(Math.abs(diff))
     
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