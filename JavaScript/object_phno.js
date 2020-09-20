function runProgram(input){
    input = input.trim().split(" ")
 //console.log(input)
 var found = false;
 var user = [
    { name:"Ajay", number:21345 },
    { name:"RamDas", number:32146 },
    { name:"Rohith",number:23522 },
    { name:"Nihal",   number:98743 }
    
   
];
for(var key in user){
    if(input == user[key].name){
        found = true
    console.log(user[key].number)
        
    }
    
}
if(!found){
    console.log("User Not Found")
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

  





