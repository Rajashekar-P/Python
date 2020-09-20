var input = 4;
var rows = input;
for(var i =1;i<input;i++){
    for(var j = 1;j<rows-1;j++){
        console.log(" ")
    }
    for(var k =0;k<= 2*i-1;k++){
        console.log("*")
    }
    rows--
    console.log("\n")
}