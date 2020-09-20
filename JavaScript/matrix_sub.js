var matrix  = [
    [1,2,3],
    [5,6,7],
    [7,8,9]
];

var sub_matrix = [];

var start_row = 1;
var start_col = 1;
var end_row = 2;
var end_col =2;

var row = [];

for (var i = start_row;i <= end_row;i++){
    for(var j = start_col;j <= end_col;j++){
        //console.log(i +"-"+ j)
        row.push(matrix[i][j]);
        
    }
    sub_matrix.push(row)
    row = []
}
console.log(sub_matrix)
