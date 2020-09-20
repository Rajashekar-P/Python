
function runProgram(input){
  
  input = input.trim().split("\n")
  var size = input[0].split(" ")
  for(var i =0;i<size.length;i++){
    size[i] = Number(size[i])
    var l = size[0]
    var w = size[1]
    

  }
 var size1 = input[1].split(" ")
 for(var j = 0;j <size1.length;j++){
   size1[j] =Number(size1[j])
   var l1 = size1[0]
   var w1 = size1[1]
   

 }

   
   
   console.log(l)
   console.log(w)
   console.log(l1)
   console.log(w1)
   if(l1<l){
     console.log("Increase length")
   }else if(w1< w){
     console.log("Increase width")
   }else if(l==l1 && w==w1){
     console.log("Upload")
   }else{
     console.log("Decrease the Size")
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
   
   