// Data Types in JavaScript

let name = "Abhinav";      // String
let age = 22;             // Number
let isDesigner = true;    // Boolean
let skills = ["UI", "UX", "JS"]; // Array (object)
let profile = { role: "Designer", exp: 2 }; // Object
let score = null;         // Null
let value;                // Undefined

console.log(typeof name);
console.log(typeof age);
console.log(typeof isDesigner);
console.log(typeof skills);
console.log(typeof profile);
console.log(typeof score);
console.log(typeof value);

// Variables in JavaScript

var city = "Delhi";
let country = "India";
const profession = "UI/UX Designer";

city = "Ahmedabad";      // allowed
country = "Germany";    // allowed


console.log(city);
console.log(country);
console.log(profession);


// Comparison Operators

let a = 10;
let b = "10";

console.log(a == b);   // true (value only)
console.log(a === b);  // false (value + type)
console.log(a != b);   // false
console.log(a !== b);  // true
console.log(a > 5);    // true
console.log(a <= 10);  // true


// Type Conversion

let strNumber = "25";
let convertedNumber = Number(strNumber);

let num = 100;
let convertedString = String(num);

let booleanValue = Boolean(1);

console.log(convertedNumber, typeof convertedNumber);
console.log(convertedString, typeof convertedString);
console.log(booleanValue, typeof booleanValue);

