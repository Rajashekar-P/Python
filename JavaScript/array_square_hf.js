var numbers = [2,3,5,7,9];
numbers.forEach(function(e){
    console.log(e**2)
})


var number = numbers.map(function(e){
    return (e + e);
})
console.log(number)


var num = numbers.filter(function(e){
    return (e % 3 == 0)

})
console.log(num)



var numb = numbers.reduce(function(a,c){
    console.log(a)
    return a*c;
})
console.log(numb)