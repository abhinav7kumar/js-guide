const accountId = 123456;
let accountUserName = "John Doe";
var accountEmail = "john.doe@example.com";
let accountState;
accountCity = "New York";



console.log("AccountId");


accountEmail = "john.doe.updated@example.com";
accountUserName = "John Doe Updated";
accountCity = "Los Angeles";


/*
Do not use var to declare variables as it can lead to unexpected behavior due to its function scope. Instead, use let or const for better readability and maintainability of your code.
*/

console.table({ accountId, accountUserName, accountEmail, accountCity, accountState });
