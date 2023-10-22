/* sophisticated_calc.js */

// This code is a sophisticated calculator that can perform various mathematical operations
// It includes functions for addition, subtraction, multiplication, division, exponentiation, square root, and factorial
// It also supports error handling and validation

// Function to validate if a given input is a valid number
function isValidNumber(num) {
  return typeof num === 'number' && !isNaN(num);
}

// Function to perform addition
function add(a, b) {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    throw new Error('Invalid input. Please provide valid numbers.');
  }
  return a + b;
}

// Function to perform subtraction
function subtract(a, b) {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    throw new Error('Invalid input. Please provide valid numbers.');
  }
  return a - b;
}

// Function to perform multiplication
function multiply(a, b) {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    throw new Error('Invalid input. Please provide valid numbers.');
  }
  return a * b;
}

// Function to perform division
function divide(a, b) {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    throw new Error('Invalid input. Please provide valid numbers.');
  }
  if (b === 0) {
    throw new Error('Cannot divide by zero.');
  }
  return a / b;
}

// Function to perform exponentiation
function power(base, exponent) {
  if (!isValidNumber(base) || !isValidNumber(exponent)) {
    throw new Error('Invalid input. Please provide valid numbers.');
  }
  return Math.pow(base, exponent);
}

// Function to calculate square root
function squareRoot(num) {
  if (!isValidNumber(num)) {
    throw new Error('Invalid input. Please provide a valid number.');
  }
  if (num < 0) {
    throw new Error('Cannot calculate square root of a negative number.');
  }
  return Math.sqrt(num);
}

// Function to calculate factorial
function factorial(num) {
  if (!isValidNumber(num)) {
    throw new Error('Invalid input. Please provide a valid number.');
  }
  if (num < 0) {
    throw new Error('Cannot calculate factorial of a negative number.');
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

// Usage example
try {
  console.log(add(5, 3)); // Output: 8
  console.log(subtract(10, 4)); // Output: 6
  console.log(multiply(2, 6)); // Output: 12
  console.log(divide(15, 3)); // Output: 5
  console.log(power(2, 5)); // Output: 32
  console.log(squareRoot(25)); // Output: 5
  console.log(factorial(5)); // Output: 120
} catch (error) {
  console.log('An error occurred:', error.message);
}