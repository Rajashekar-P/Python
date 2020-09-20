var array = ["masai","school"];
var repeat = function(el){
    return el;

}
var output = array.filter(repeat).map(repeat).reduce(repeat)
console.log(output)