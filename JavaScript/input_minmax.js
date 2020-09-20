function runProgram(input){
    input = input.trim().split(" ")
   var min = input[0]
   var max = input[0]

for(var i =0;i<input.length;i++){
    input[i] = Number(input[i])
    //console.log(input[i])
    if(min>input[i]){
        min = input[i]
        
    }else if(max < input[i]){
        max = input[i]
        
    }

}
console.log("Min - " +min)
console.log("Max - " +max)
   
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