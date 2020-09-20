function runProgram(input) {

    var input_items = input.split(" ")
    var numbers = {}
    for (var i = 0; i < input_items.length; i++) {
        if (!numbers[input_items[i]]) {
            numbers[input_items[i]] = true;
        } else {
            numbers[input_items[i]] = false;
        }
    }
    var unique = []
    for (var key in numbers) {
        if (numbers[key]) {
            unique.push(key)
        }
    }
    console.log(unique.join(" "));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});