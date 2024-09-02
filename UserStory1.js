let number = BigInt(Math.pow(2, 1000));

function sumOfDigit(num) {
    return num.toString().split("")
        .reduce((sum, digit) =>
            sum + parseInt(digit), 0);
}

console.log('Sum of the digits of the number ' +number + ' is = ' + sumOfDigit(number));