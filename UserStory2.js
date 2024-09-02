let number = 1000;

function sumOfMultiples(n){
    var sum = 0;
    for(var x = 1; x<n; x++){
      if(x % 3 == 0 || x % 5 ==0){ 
        sum += x; 
      }
    }
    return sum;
  }
  console.log('Sum of all the multiples of 3 or 5 below ' + number + ' is = ' + sumOfMultiples(number));