var odd = 0;
var limit = 50;

function isOdd(n){
    if(n % 2 == 1){
        odd = true
        return odd
    }else{
        odd = false
        return odd
    }
}
for(var i =0;i<=limit;i++){
    isOdd(i)
    if(odd == true){
        console.log(i)
    }
}
