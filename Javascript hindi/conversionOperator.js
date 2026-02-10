// ***************** Conversion Operator in JavaScript*****************

let score = 33;


console.log(typeof score); 

let scoreString = Number(score);
console.log(scoreString);

// "33" -> 33
// "33abc" -> NaN
// "True" -> 1

let isLoggedIn = "1";

let bolleanIsLoggedIn = Boolean(isLoggedIn);

console.log(bolleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false

let SumNumber = 33

let SumString = String(SumNumber);

console.log(SumString);
console.log(typeof SumString);


// *********************** Operators in JavaScript***********************

let value = 10;
let negValue = -value; // Negation
console.log(-value); 

let str1 = "Hello, ";
let str2 = "world!";
let concatenatedStr = str1 + str2;
console.log(concatenatedStr);

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
console.log(typeof gameCounter);

let a= 5;
b = a++;
console.log(a);

let x = 5;
let y = 10;

console.log(x+y); // false
console .log(x<y); // -5
