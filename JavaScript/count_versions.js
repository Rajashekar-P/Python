var major = 1;
var count = 0;
for (var i = 2009; i <= 2020; i++) {
    if (major % 2 == 1) {
        count = count + 1;
    }
    major = major + 1;

}
console.log(count)