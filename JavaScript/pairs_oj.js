
function runProgram(input){
  
    var input = input.split("\n")
    var size = input[0]
    var given = input[1].split(" ")
   
    for (var i =0;i<given.length;i++){
        given[i] = Number(given[i])
        console.log(given[i])

    }
    var x = size.split(" ")
    var size1 = Number(x[0])
    var value = Number(x[1])
    var count =0;

    for(var i =0;i<size1;i++){
        for(var j =i+1;j<size1;j++){
            //console.log(size1)
            //console.log(value)
            if(given[i] + given[j] == value){
                count = count +1;
               // console.log(value)
            }
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
          read = read.replace(/\n$/,"")
         runProgram(read);
      });
      
      process.on("SIGINT", function () {
          read = read.replace(/\n$/,"")
          runProgram(read);
          process.exit(0);
      });
      
      