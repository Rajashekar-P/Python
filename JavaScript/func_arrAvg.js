//var data = [];
//var data = [1,2,3,4,5];
var data = [-12,-39,12,41,22,44];

function average(data){
    var count =0;
    for(var i = 0;i<data.length;i++){
        
        count = count + data[i] / data.length;
       
    }
    return count;

}
console.log(average(data))