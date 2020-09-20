
var data = {
    names:["Nrupul","Prateek","Aman","Albert","Yogesh"],
    marks:[10,20,30,5,15],
    



    average:function(){
        var sum =0;
        for(var i = 0;i<this.marks.length;i++){
            
            return sum + this.marks[i] / this.marks.length;
           
          
        }
        
    },
    minimum:function(){

    },
    maximum:function(){

    }
};
var avg = data.average()
console.log(avg)
data.average();
data.minimum();
data.maximum();