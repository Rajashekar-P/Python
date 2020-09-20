var state = 3;

switch(state){
    case 0:
        state = "Kerala";
        console.log("SOUTH")
        break;
    case 1 :
        state = "Gujarat";
        console.log("WEST")
        break;
    case 2:
        state = "Assam";
        console.log("EAST")
        break;
    case 3:
        state = "Haryana";
        console.log("NORTH")
        break;
    default:
        state = "INVALID";
        console.log(state)
}