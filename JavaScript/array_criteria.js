var array = [2, 4, 5, 3, 6, 8];

var isEven = function (el) {
    return (el % 2 == 0)
}
var output = array.filter(isEven)
var even_index = output.filter(function (el, idx) {
    return (idx % 2 == 0);
});


console.log(even_index)