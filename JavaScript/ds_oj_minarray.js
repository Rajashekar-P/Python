function runProgram(input) {
    input = input.split("\n")

    var size = input[0].split(" ")
    var array = input[1].split(" ")
    var k = Number(size[1])

   
    var small = array[0]; 
  
    for (var i = 0; i < array.length; i++) {
        array[i] = Number(array[i])
        
        if(array[i] < small){
            small = array[i]
           console.log(k-small) 
          
        }else{
            console.log(0)
        }
        
    }
    
    console.log(step)

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