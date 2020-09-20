var name = "hannah";
var output = true;

for(var i = 0;i<name.length;i++){
    if(name[i] != name[name.length-i-1]){
        output = false;
    }
}
if(output){
    console.log("YES")
}else{
    console.log("NO")
}