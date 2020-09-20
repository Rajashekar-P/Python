var matrix = [
    [1,2,3],
    [4,5,6],
    [0,8,9]
];
for(var i = 0;i<matrix.length;i++){
    for(var j = 0;j<matrix[i].length;j++){
        for(var k = 0;k<matrix[j].length;k++){
            console.log(matrix[i][j])
            var diag = matrix[i][j][0] + matrix[i][j][1]
        }
    }
}
console.log(diag)
