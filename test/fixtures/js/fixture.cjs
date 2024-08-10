// https://github.com/TheRenegadeCoder/sample-programs/blob/main/archive/j/javascript/prime-number.js

// checks for prime
module.exports.isPrime = (number) => {
    if(number <= 1)
      return false

    for (let i = 2; i <= Math.sqrt(number); i++) {
      // eslint-disable-next-line eqeqeq
      if (number % i == 0) {
        return false;
      }
    }
    return number > 1;
  };
  
  const input = process.argv[2];
  let   number = Number(input)
  
  if (input !== '' && Number.isInteger(number) && number >= 0) {
        module.exports.isPrime(input) ? console.log("prime") : console.log("composite");
  } else {
            console.log("Usage: please input a non-negative integer")
  }


