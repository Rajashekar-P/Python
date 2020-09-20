//var data = ["HTML","CSS","JAVA","JS","C++"];
//var data = ["Masai"];
var data = ["Quick","Brown","Fox"];

var data1 = [];

for(var i = 0;i<data.length;i++){
    if(i != data.length-1){
    data1 = data1 + data[i] + "," 
    }else {
        data1 = data1 + data[i]
    }
    //console.log(data[i])
}
console.log(data1)