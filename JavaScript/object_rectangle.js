var rectangle = {
    length:12,
    breadth:8,

    area:function(){
    
        console.log("Area - " + this.length * this.breadth)
    },
    perimeter:function(){
        console.log("Perimeter - " + 2 * (this.length + this.breadth))
    }
};
rectangle.area();
rectangle.perimeter();