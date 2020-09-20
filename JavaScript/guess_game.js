var guess = 22;

var predefined = 20;


if((guess == (predefined - 1)) || (guess == (predefined + 1))){
    console.log("You Won")

}else if(predefined > 20){
    if((guess == (predefined - 2)) || (guess == (predefined + 2))){
        console.log("You Won")
    }else if(guess == predefined){
        
        console.log("Draw")
    }else{
        console.log("You Loss")
    }
    
}else if(guess == predefined){
    console.log("Draw")
}else{
    console.log("You Loss")
}
