var array = ["Masai","School","Anyone","Can"];

var sum = array.reduce(function(ac,el){
    return ac + "-"  +el
})
console.log(sum)