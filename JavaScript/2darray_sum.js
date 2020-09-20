var matrix =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
var sum = 0;

var rows = matrix.length;
var cols = matrix[0].length;
for(var i=0;i<rows;i++){
    
    for(var j =0;j<cols;j++){
        if(i>=j && j>=i){

            sum = sum +  matrix[i][j]
            console.log(matrix[i][j])
        }
        
    }
    
    
}
console.log(sum)
