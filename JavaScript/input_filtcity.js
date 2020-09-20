function runProgram(input){
    input = input.trim().split(" ")
 //console.log(input)
 var found = false;
 var user = [
    { name:"Yogesh", city:"Bangalore" },
    { name:"Aman", city:"Patna" },
    { name:"Rahul",city:"Patna" },
    { name:"Prateek", city:"Mumbai" },
    { name:"Sandhya", city:"Bangalore" },
    { name:"Nrupul", city:"Hyderabad" }
    
   
];
for(var key in user){
    if(input == user[key].city){
        found = true
    console.log(user[key].name)
        
    }
    
}
if(!found){
    console.log("City Not Found")
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

  