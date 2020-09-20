var array = ["apple", "windows", "ubuntu"];

var snake_case = array.reduce(function (ac, ele, idx) {
    if (idx == 0) {
        return ac + ele
    } else {
        return ac + "_" + ele;
    }


}, "")
console.log(snake_case)