var matrix = [
    [1,2,3],
    [5,6,7],
    [7,8,9]
];

var rows = matrix.length;
var cols = matrix[0].length;

var sum = 0

for (var i = 0;i < rows;i++){
    for(var j =0;j < cols; j++){
        
        if(i <= j){
            sum = sum + matrix[i][j]
        }
    }
    
}
console.log(sum)
