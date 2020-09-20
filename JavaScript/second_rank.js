var numbers = [5, 4, 3, 2, 1];

var min = numbers[0]
var found = 0;
var second = 0;

if (numbers[0] > numbers[1]) {
    found = min;
    second = numbers[1];
} else {
    found = numbers[1];
    second = min;
}

for (var i = 0; i < numbers.length; i++) {
    if (found < numbers[i]) {
        second = found
        found = numbers[i];

    }
}
console.log(second)