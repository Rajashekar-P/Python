var input = "zyfqwxaeiou"
var alpha = "abcdefghijklmnopqrstuvwxyz";
var data = " ";

for(var i=0;i<input.length;i++){
    
    for(var j =0;j<alpha.length;j++){
        if(input[i] == alpha[j]){
            data = data + alpha[(j+1) % alpha.length];

        }
    }
}
console.log(data)
