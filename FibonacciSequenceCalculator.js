/* 
   Filename: FibonacciSequenceCalculator.js
   Description: This program calculates the Fibonacci sequence up to a given number using recursion and memoization.
*/

// Function to calculate the Fibonacci sequence
function fibonacci(n) {
  // Object for memoization
  const memo = {};

  // Recursive helper function
  function fibHelper(num) {
    // Base cases
    if (num === 0) return 0;
    if (num === 1) return 1;

    // Check if the value has already been calculated
    if (memo.hasOwnProperty(num)) {
      return memo[num];
    } else {
      // Calculate and memoize the value
      const result = fibHelper(num - 1) + fibHelper(num - 2);
      memo[num] = result;
      return result;
    }
  }

  // Calculate the Fibonacci sequence up to n
  const sequence = [];
  for (let i = 0; i <= n; i++) {
    sequence.push(fibHelper(i));
  }

  return sequence;
}

// Example usage
const result = fibonacci(10);
console.log(result);