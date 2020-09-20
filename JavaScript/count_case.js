var input = ["A", "Quick", "brown", "FOX", "Jumps", "Over", "A", "lazy", "DOG"];

var alphabets = "abcdefghijklmnopqrstuvwxyz";
var count = 0;


for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input[i].length; j++) {
        for (var k = 0; k < alphabets.length; k++) {

            if (input[i][j] == alphabets[k]) {
                count = count + 1;
            }

        }

    }

}
console.log(count)