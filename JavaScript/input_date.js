function runProgram(input){
    input = input.split("-")
    
  var year = input[0];
  var month = input[1];
  var date = input[2];
  var month1 ;

  for(var i =0;i<input.length;i++){
      //input[i] = Number(input[i])
  }
  switch(month){
      case "01":
          month1 = "January"
          break
      case "02":
          month1 = "February"
          break
      case "03":
          month1 = "March"
          break
      case "04":
          month1 = "April"
          break
      case "05":
          month1 = "May"
          break
      case "06":
          month1 = "June"
          break
      case "07":
          month1 = "July"
          break
      case "08":
          month1 = "August"
          break
      case "09":
          month1 = "September"
          break
      case "10":
          month1 = "October"
          break
      case "11":
          month1 = "November"
          break
      case "12":
          month1 = "December"
          break

         
  }
  month1 =  month1 +","

  
  console.log(+ date + " "+month1+" "+ year )
  }
  
  
  
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
      read += input;
  });
  process.stdin.on("end", function () {
      read = read.replace(/\n$/,"")
     runProgram(read);
  });
  
  process.on("SIGINT", function () {
      read = read.replace(/\n$/,"")
      runProgram(read);
      process.exit(0);
  });