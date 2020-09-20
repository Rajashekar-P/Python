var matrix = [
     [1,2,3],
     [4,5,6],
     [7,8,9],
     [1,2,3]
];
var rows = matrix.length;
var cols = matrix[0].length;

var trans = [];
var row = [];

for(var i = 0; i < cols;i++){
    for(var j = 0;j <rows;j++){
        
        row.push(matrix[j][i])
    }
    trans.push(row)
    row = []
}

console.log(trans)