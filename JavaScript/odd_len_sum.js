var input = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];
var len = function (el) {
    return el.length;
}

var isOdd = function (len) {
    return (len % 2 == 1);
}

var sum = function (ac, el) {
    return ac + el;
}


var output = input.map(len).filter(isOdd).reduce(sum, 0);
console.log(output)


