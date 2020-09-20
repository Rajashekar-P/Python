var mat1 =[
    [1,2,3],
    [5,6,7],
    [7,8,9]
];
var mat2 = [
    [2,1,2],
    [1,2,1],
    [2,1,2]
];
var output =[];
var addition=[] ;


for(var i =0;i<mat1.length;i++){
    for(var j = 0;j<mat1[i].length;j++){
      // console.log(mat1[i][j])
    }
    
}
for(var i = 0;i<mat2.length;i++){
    for(var j = 0;j<mat2[i].length;j++){
       // console.log(mat2[i][j])
        addition = mat1[i][j] + mat2[i][j];
        
        //console.log(addition)
        output.push(addition)
        
    }  
   
   
}
console.log(output)





