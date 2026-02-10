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