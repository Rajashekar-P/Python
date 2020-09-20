function runProgram(input) {
    var array = input.split(" ")
    for (var i = 0; i < array.length; i++) {
        array[i] = Number(array[i])
        var cubes = function(el){
            return el ** 3
        }
        var div = function(el){
            return el % 3 == 0
        }
        var sum = function(ac,el){
            return ac + el
        }
        
        
    }
    var cubes_sum = array.map(cubes).filter(div).reduce(sum);
    console.log(cubes_sum)     
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