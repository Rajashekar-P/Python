var m = [
    [1,2,3],
    [5,6,7],
    [7,8,9]
    
];


var sum = 0;

var row= m.length;
var col = m[0].length

for(var i = 0;i<row;i++){
  for(var j =0;j<col;j++){
  
    sum = sum + m[j][i]
  }
  console.log(sum)
  sum = 0;
}





