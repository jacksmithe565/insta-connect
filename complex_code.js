/**
 * Filename: complex_code.js
 * 
 * Description: This is a complex code example that demonstrates several advanced JavaScript concepts
 *              and techniques.
 * 
 * Note: Please note that this code is purely for demonstration purposes and may not serve any practical use.
 */

// Defining a class using the ECMAScript 6 class syntax
class ComplexCode {
  constructor() {
    this.data = [];
    this.counter = 0;
  }

  // A complex algorithm that simulates a computation process
  doComplexComputation(value) {
    const sqrt = Math.sqrt(value);

    for (let i = 2; i < sqrt; i++) {
      if (value % i === 0) {
        return false;
      }
    }

    return true;
  }

  // A recursive function that calculates the factorial of a number
  calculateFactorial(num) {
    if (num <= 1) {
      return 1;
    } else {
      return num * this.calculateFactorial(num - 1);
    }
  }

  // A method that sorts an array of objects based on a specific property
  sortArrayOfObjects(arr, prop) {
    arr.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
  }

  // A generator function that generates an infinite sequence of prime numbers
  *generatePrimeNumbers() {
    let num = 2;

    while (true) {
      if (this.doComplexComputation(num)) {
        yield num;
      }

      num++;
    }
  }

  // A higher-order function that returns a function to increment a counter
  createCounterFunction() {
    return () => {
      this.counter++;
      console.log(`Counter value: ${this.counter}`);
    };
  }

  // A callback function that logs summation of given numbers
  printSum(result) {
    console.log(`Summation result: ${result}`);
  }

  // An asynchronous function that delays execution using Promise and setTimeout
  async executeAsyncTask(num) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(num * 2), 2000);
    });

    const result = await promise;
    this.printSum(result);
  }
}

// Creating an instance of the ComplexCode class
const complexCodeInstance = new ComplexCode();

// Usage example
complexCodeInstance.data.push(5);
complexCodeInstance.data.push({ name: "John", age: 25 });
complexCodeInstance.data.push(10);
complexCodeInstance.sortArrayOfObjects(complexCodeInstance.data, "age");

for (const prime of complexCodeInstance.generatePrimeNumbers()) {
  if (prime > 1000) {
    break;
  }
  console.log(`Next prime number: ${prime}`);
}

const incrementCounter = complexCodeInstance.createCounterFunction();
incrementCounter();
incrementCounter();
incrementCounter();

complexCodeInstance.executeAsyncTask(5);