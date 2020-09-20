//var data = ["A","Array","For","Removal","B","Me","Mine"]

var data = ["A", "Quick", "Brown", "Fox", "Jumps", "Over", "A", "Lazy", "Dog"]

var final = []

for(var i = 0;i < data.length;i++){
        
        if(data[i].length >= 4){
            final.push(data[i])
            
        }
        
}
console.log(final)


