var array = ["Masai","School"];
function getLower(array){
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(var i =0;i<upper.length;i++){
        if(upper[i] == array){
            return lower[i]
        }
    }
console.log(array)
}