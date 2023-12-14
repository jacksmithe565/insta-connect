/* 
 * File: advanced_code.js
 * Description: This code demonstrates a complex algorithm for finding prime numbers up to a given limit using the Sieve of Eratosthenes method
 * Author: John Doe
 * Date: December 10, 2021
 */

// Function to find all prime numbers up to a given limit using Sieve of Eratosthenes
function findPrimes(limit) {
  // Create an array to store numbers from 2 to the limit
  const numbers = new Array(limit + 1).fill(true);
  
  // Eliminate multiples starting from 2 up to the square root of the limit
  const sqrtLimit = Math.sqrt(limit);
  for (let i = 2; i <= sqrtLimit; i++) {
    if (numbers[i]) {
      for (let j = i * i; j <= limit; j += i) {
        numbers[j] = false;
      }
    }
  }
  
  // Collect the prime numbers
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (numbers[i]) {
      primes.push(i);
    }
  }
  
  return primes;
}

// Generate prime numbers up to 1000
const primesUpTo1000 = findPrimes(1000);

// Print the prime numbers
console.log("Prime numbers up to 1000:");
console.log(primesUpTo1000);

// Generate prime numbers up to 10000
const primesUpTo10000 = findPrimes(10000);

// Print the prime numbers
console.log("Prime numbers up to 10000:");
console.log(primesUpTo10000);

// ... more code ...

// Generate prime numbers up to 1000000
const primesUpTo1000000 = findPrimes(1000000);

// Print the prime numbers
console.log("Prime numbers up to 1000000:");
console.log(primesUpTo1000000);

// ... more code ... (over 200 lines)