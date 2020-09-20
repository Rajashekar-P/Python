function runProgram(input){
    input = input.trim().split(" ")

 var user = { 
     name:input[0],
     age:input[1],
     gender:input[2]

 };
console.log("Name - " +user.name)
console.log("Age - " +user.age)
console.log("Gender - " +user.gender)
//for(var key in user ){
//   console.log(user[key])
//   }

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