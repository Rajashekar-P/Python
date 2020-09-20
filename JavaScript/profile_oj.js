function runProgram(input){
    input = input.trim().split("\n")
    // console.log(input)

    var array1 = input[0].split(" ")
    for (var i = 0; i < array1.length; i++) {
        array1[i] = Number(array1[i])  
       
    } 
     
    var array2 = input[1].split(" ")
    for (var i = 0; i < array2.length; i++) {
        array2[i] = Number(array2[i])  
        
    } 

    if ((array2[0]>array1[0]) && ((array2[1]>array1[1]))) {
        console.log("Upload")
    }else if ((array2[0]<= array1[0]) && ((array2[1]>array1[1]))) {
        console.log("Increase Length")
    }else{
        console.log("Increase Width")
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