let number = 1000;

function sumOfSquares(n){
    var sumSquares = 0;
    var squareSum = 0;
    for(var x = 1; x<=n; x++){   
      sumSquares += x**2; 
      squareSum += x;
    }
    squareSum = squareSum**2;
    console.log('The sum of the squares of the first ' + number + ' natural numbers is = ' + sumSquares);
    console.log('The square of the sum of the first ' + number + ' natural numbers is = ' + squareSum);
    return squareSum - sumSquares;
  }

console.log('The difference between the sum of the squares of the first ' + number + 
' natural numbers and the square of the sum is = ' + sumOfSquares(number));