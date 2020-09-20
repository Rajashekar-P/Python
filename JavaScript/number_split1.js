var number = 9678;

for(var i = 10;number/i > 0.1; i = i*10 ){
  console.log((number%i) - (number %(i/10)))
}