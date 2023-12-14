/*
Filename: sophisticated_code.js
Content: A sophisticated and elaborate JavaScript code
*/

// Utility function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  
  return true;
}

// Class representing a geometric shape
class Shape {
  constructor(color, filled) {
    this.color = color;
    this.filled = filled;
  }
  
  setColor(color) {
    this.color = color;
  }
  
  setFilled(filled) {
    this.filled = filled;
  }
  
  display() {
    console.log(`Shape color: ${this.color}`);
    console.log(`Shape filled: ${this.filled}`);
  }
}

// Subclass representing a rectangle
class Rectangle extends Shape {
  constructor(color, filled, width, height) {
    super(color, filled);
    this.width = width;
    this.height = height;
  }
  
  getArea() {
    return this.width * this.height;
  }
  
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
  
  display() {
    super.display();
    console.log(`Rectangle width: ${this.width}`);
    console.log(`Rectangle height: ${this.height}`);
    console.log(`Rectangle area: ${this.getArea()}`);
    console.log(`Rectangle perimeter: ${this.getPerimeter()}`);
  }
}

// Generate a random number between min (inclusive) and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Main code execution
console.log("Sophisticated JavaScript Code Execution Started!");

// Generate 10 random numbers and check if they are prime
console.log("Generating 10 random numbers and checking if they are prime:");
for (let i = 0; i < 10; i++) {
  const num = getRandomNumber(1, 100);
  const primeCheck = isPrime(num);
  console.log(`${num} is ${primeCheck ? 'prime' : 'not prime'}`);
}

console.log("-----------------------------------------");

// Create and display a rectangle object
const rectangle = new Rectangle("red", true, 5, 10);
console.log("Rectangle Object Information:");
rectangle.display();

console.log("-----------------------------------------");

console.log("Sophisticated JavaScript Code Execution Finished!");