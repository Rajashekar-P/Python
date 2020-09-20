var data = "instagram";
var search = "coffee";
var count = 0;
var match = false;
for(var i =0;i <data.length;i++){
    for(var j = 0;j<search.length;j++){
        if(data[i] == search[j]){
            count = 1
            for(var k =j+1;k<search.length;k++){
                if(data[i+k] == search[k]){
                    count = count + 1
                }
            }
        }
        if(count == search.length){
            match = true;
            break
        }
        count = 0
    }
   
}
if(match){
    console.log("TRUE")
}else{
    console.log("FALSE")
}


