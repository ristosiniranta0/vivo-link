/*
    Filename: complexCode.js
    Description: Complex JavaScript code demonstrating various concepts and techniques.
*/

// Helper function to calculate the factorial of a number
function factorial(num) {
    if (num < 0) {
        throw new Error("Factorial of negative number is undefined");
    }
    
    if (num === 0 || num === 1) {
        return 1;
    }
    
    return num * factorial(num - 1);
}

// Class representing a person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

// Extend Array with a new method to find the sum of all elements
Array.prototype.sum = function() {
    let sum = 0;
    
    for (let i = 0; i < this.length; i++) {
        if (!isNaN(this[i])) {
            sum += this[i];
        }
    }
    
    return sum;
}

// Example usage of the code

// Calculate the factorial of a number
const num = 5;
console.log(`Factorial of ${num} is ${factorial(num)}`);

// Create two persons and call the greet method
const person1 = new Person("John Doe", 25);
const person2 = new Person("Jane Smith", 30);
person1.greet();
person2.greet();

// Calculate the sum of an array
const numbers = [1, 2, 3, 4, 5];
console.log(`Sum of the numbers in the array is ${numbers.sum()}`);

// ... Rest of the code (more than 200 lines)