
function main(input) {
    var token = input.split('\n');
    var s = Number(token[0]);
    for(var i=0; i<s; i++) {
        iterate(token, i);
    }
}
 
function iterate(token, i) {
    var row = token[2*i+1].split(' ');
    var n = Number(row[0]);
    var r = Number(row[1]);
    var a = token[2*i+2].split(' ');
    var max = Number(a[0]);
    var count = 1;
    for(var j=1; j<n; j++) {
        var elem = Number(a[j]);
        if(elem > max) {
            count++;
            max = elem;
        }
    }
    console.log(count*r);
}
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
 
process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});
 
process.stdin.on("end", function () {
   main(stdin_input);
});
 