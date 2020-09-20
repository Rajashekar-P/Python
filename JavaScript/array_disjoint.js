var arr1 = [1,4,6];
var arr2 = [2,5,6];

var final = true;

for(var i = 0;i< arr1.length;i++){
   // console.log(arr1[i])
    for(var j = 0; j< arr2.length;j++){
       // console.log(arr2[j])
      if(arr1[i] != arr2[j]){
        
        final = true;
    }else{
        final = false;
    }
       
    }
   
}
if(final){
    console.log("TRUE")
}else{
    console.log("FALSE")
}


