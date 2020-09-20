function runProgram(input) {

    input = input.trim().split(" ")

    var str1 = input[0];
    var str2 = input[1];
    var char1 = {};
    var char2 = {};

    if (str1.length != str2.length) {
        console.log("FALSE")
    } else {
        for (var i = 0; i < str1.length; i++) {
            if (!char1[str1[i]]) {
                char1[str1[i]] = 1
            } else {
                var prev1 = char1[str1[i]];
                char1[str1[i]] = prev1 + 1;
            }
            if (!char2[str2[i]]) {
                char2[str2[i]] = 1
            } else {
                var prev2 = char2[str2[i]];
                char2[str2[i]] = prev2 + 1
            }

        }
        var anagram = true;
        for (var key in char1) {
            if (char1[key] != char2[key]) {
                anagram = false;
                break;
            }
        }
        if (anagram) {
            console.log("TRUE")
        } else {
            console.log("FALSE")
        }

    }
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