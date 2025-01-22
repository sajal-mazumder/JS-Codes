// Primitive Data Types.
console.log(5)

console.log("sajal mazumder")

let age = 24;
console.log(age + 10);


let name = "Sajal Mazumder";
console.log("hello, " + name);

let isLoggedIn = false;
console.log(isLoggedIn);

let x;
console.log(x);

let noValue = null;
console.log(noValue);

let uniKey = Symbol("id_name");
console.log(uniKey);

let bigNumber = 12387658708736865676788390007346n
console.log(bigNumber);

// Non-Primitive Data Types.

// object
let person = {
    name: "Sajal Mazumder",
    age: 33,
    sex: "Male",
};
console.log(person.sex);
console.log(person.age);

// Array
let clss = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]
console.log(clss[3])
console.log(clss[8])

// Function
function greet() {
    console.log( "Hello");
}
greet();

// Common Mistakes

// undefined
let p;
console.log(x);

// null
let q = null;
console.log(q);

// num to string
let num = 5; 
console.log(num.toString());

// reference
let arr1 = [6,7];
let arr2 = arr1;
arr2.push(9);
console.log(arr1);

// syntax and usage

// whole number
let glassesSold = 10;
console.log(glassesSold);

// Decimal number
let pricePerGlass = 5.5;
console.log(pricePerGlass);

// Basic math with numbers
let totalEarnings = glassesSold * pricePerGlass
console.log(totalEarnings);

// special numbers
// infinity when divided by 0
console.log(1 / 0);
// NaN not a number
console.log("cow" * 5);

// common mistakes
// 1. dividing by zero-- infinity, not an error
let pq = 29;
console.log(29/0);

// 2. using strings and numbers--output strings, concatination.
let rst = "10" + 45;
console.log(rst);
// solution--- convert strings to number before doing math
let resst = Number("49") + 6;
console.log(resst);

// misinterpreting NaN
let noRest = "text" * 5;
console.log(noRest);

// Syntax and Usage
// 1. Basic strings
let greeting = "Hello, world!"; 
console.log(greeting);
// 2. Single vs double quotes
let singleQuote = 'This is a string.';
let doubleQuote = "This is also a string.";
console.log(singleQuote, doubleQuote);
// 3. using backticks for templates
let name1 = "Alice"; 
let message = `Hello, ${name1}!`; 
console.log(message);
// 4. combining strings
let firstName = "John"; 
let lastName = "Doe"; 
let fullName = firstName + " " + lastName; 
console.log(fullName);

// string length
let text = "Hello Sajal";
console.log(text.length);

// special characters
// let special = "He said", "This is a fun!";
// console.log(special); finding errors

// let wrong = "He said, "Oops!""; finding errors-- nested quotes


let age1 = 18; 
let canVote = age1 >= 20; 
console.log(canVote);