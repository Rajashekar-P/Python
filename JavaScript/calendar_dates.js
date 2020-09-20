var year = 2021;
var stop = 0;

for(var month = 1;month<=12;month++){
    switch(month){
        case 01:
        case 03:
        case 05:
        case 07:
        case 08:
        case 10:
        case 12:
            stop = 32;
            break;
        case 04:
        case 06:
        case 09:
        case 11:
            stop =31;
            break;
        case 02:
            stop = 29;
            break;
    }
    for(var day =1; day<=31;day++){
       
        if(day == stop){
            break
        }
        console.log(year + "-"  + month + "-" + day)  
    }
   

}
