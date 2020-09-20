var str = "HELLO";
function wordTOLower(A) {
    var b = 0;
    switch (A) {
        case "A":
            b = "a";
            break;
        case "B":
            b = "b";
            break;
        case "C":
            b = "c";
            break;
        case "D":
            b = "d";
            break;
        case "E":
            b = "e";
            break;
        case "F":
            b = "f";
            break;
        case "G":
            b = "g";
            break;
        case "H":
            b = "h";
            break;
        case "I":
            b = "i";
            break;
        case "J":
            b = "j";
            break;
        case "K":
            b = "k";
            break;
        case "L":
            b = "l";
            break;
        case "M":
            b = "m";
            break;
        case "N":
            b = "n";
            break;
        case "O":
            b = "o";
            break;
        case "P":
            b = "p";
            break;
        case "Q":
            b = "q";
            break;
        case "R":
            b = "r";
            break;
        case "S":
            b = "s";
            break;
        case "T":
            b = "t";
            break;
        case "U":
            b = "u";
            break;
        case "V":
            b = "v";
            break;
        case "W":
            b = "w";
            break;
        case "X":
            b = "x";
            break;
        case "Y":
            b = "y";
            break;
        case "Z":
            b = "z";
            break;
        default:
            b = A;
            break;
    }
    return b;
    
}
for (var i = 0; i < str.length; i++) {

    console.log(wordTOLower(str[i]));
}
