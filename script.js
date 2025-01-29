// Primitive Data Types.
// console.log(5)

// console.log("sajal mazumder")

// let age = 24;
// console.log(age + 10);


// let name = "Sajal Mazumder";
// console.log("hello, " + name);

// let isLoggedIn = false;
// console.log(isLoggedIn);

// let x;
// console.log(x);

// let noValue = null;
// console.log(noValue);

// let uniKey = Symbol("id_name");
// console.log(uniKey);

// let bigNumber = 12387658708736865676788390007346n
// console.log(bigNumber);

// // Non-Primitive Data Types.

// // object
// let person = {
//     name: "Sajal Mazumder",
//     age: 33,
//     sex: "Male",
// };
// console.log(person.sex);
// console.log(person.age);

// // Array
// let clss = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]
// console.log(clss[3])
// console.log(clss[8])

// // Function
// function greet() {
//     console.log( "Hello");
// }
// greet();

// // Common Mistakes

// // undefined
// let p;
// console.log(x);

// // null
// let q = null;
// console.log(q);

// // num to string
// let num = 5; 
// console.log(num.toString());

// // reference
// let arr1 = [6,7];
// let arr2 = arr1;
// arr2.push(9);
// console.log(arr1);

// // syntax and usage

// // whole number
// let glassesSold = 10;
// console.log(glassesSold);

// // Decimal number
// let pricePerGlass = 5.5;
// console.log(pricePerGlass);

// // Basic math with numbers
// let totalEarnings = glassesSold * pricePerGlass
// console.log(totalEarnings);

// // special numbers
// // infinity when divided by 0
// console.log(1 / 0);
// // NaN not a number
// console.log("cow" * 5);

// // common mistakes
// // 1. dividing by zero-- infinity, not an error
// let pq = 29;
// console.log(29/0);

// // 2. using strings and numbers--output strings, concatination.
// let rst = "10" + 45;
// console.log(rst);
// // solution--- convert strings to number before doing math
// let resst = Number("49") + 6;
// console.log(resst);

// // misinterpreting NaN
// let noRest = "text" * 5;
// console.log(noRest);

// // Syntax and Usage
// // 1. Basic strings
// let greeting = "Hello, world!"; 
// console.log(greeting);
// // 2. Single vs double quotes
// let singleQuote = 'This is a string.';
// let doubleQuote = "This is also a string.";
// console.log(singleQuote, doubleQuote);
// // 3. using backticks for templates
// let name1 = "Alice"; 
// let message = `Hello, ${name1}!`; 
// console.log(message);
// // 4. combining strings
// let firstName = "John"; 
// let lastName = "Doe"; 
// let fullName = firstName + " " + lastName; 
// console.log(fullName);

// // string length
// let text = "Hello Sajal";
// console.log(text.length);

// special characters
// let special = "He said", "This is a fun!";
// console.log(special); finding errors

// let wrong = "He said, "Oops!""; finding errors-- nested quotes


// 20-01-2025 
// js primitive data 
// number

// whole number- integers
let nmbr = 10;
console.log(nmbr);

// decimal - floating point
let floatNmbr = 10.5
console.log(floatNmbr);

// basic math with numbers
let summ = nmbr + floatNmbr;
console.log(summ);

// special numbers

// @@@ result when divide by 0 is Infinity
console.log(2/0);
// @@@ NaN ( not a number) appears when a math oparations does not make a sense
console.log("apple"+55); // it make a result when we use string + number
console.log("apple" *44); // output NaN

// concatination, result not 20, it is 155. striong + number (concatination)
let result = "15"+ 5;
console.log(result);

// string data type in js
    // 1. basic strings
let welcome = "Hello World !";
console.log(welcome);

    // 2. single vs double quotes vs back-ticks
let wellcome = 'Hello World';
console.log(wellcome);
let wellCome = `Hello World`
console.log(wellCome);

    // 3. combining strings
let fname = "John ";
let lname = "Doe";
let fullName = fname + lname;
console.log(fullName);

// string length
let special = "Hello World";
console.log(special.length);

// use backslashes() for special characters
// let speCiaL = "He said, "Javascript is fun !" " ;showing errors!

// let corect = "He said, "Oops""; nested quotes, showing error;

// changing string to numbers when needed
let reSult = Number("44") + 6; // number case sensitive. it will be Number, not number.
console.log(reSult);

// @@@ Boolean data
    // direct assignment
let me = true;
let you = false;
console.log(me, you);

    // conditions
let isSunny = true;
if (isSunny){
    console.log("lets go outside !");
    console.log(typeof isSunny);
    
    
}

    // comparison
let age = 18;
// let canVote = age >=18; true
// let canVote = age <=18; true
let canVote = age < 18;
console.log(canVote);

    // logical oparation
let isWeeckend  = true;
let hasWork = false;
console.log(isWeeckend && !hasWork);


// Truthy and falsy value
if(0){
    console.log("this won't run !"); // it is falsy value
    
}

if("text"){
    console.log("this will run !");
    
}

if(23){
    console.log("this will also run !");
    
}

//  type conversion- use boolean to convert other data types to Boolean.
// output true
console.log(Boolean("Hello"));
console.log(Boolean(2344));
// output false
console.log(Boolean(0));

// confusing assignment = with comparison ===
let isTrue = true;
if(isTrue = false);
console.log(isTrue);
console.log("this won't run !");


if (isTrue ===false);
console.log(isTrue);


// undefined in js

    // default values of uninnitialized variables
let name;
console.log(name);

    // functions without a return value
function greet(){
    console.log("Hello");
    
}
console.log(greet());

// accessing non existent object properties
let user = {age: 45};
console.log(user.year);

// accessing non existent array properties
let nmbrs = [1 , 3 , 4 , 5] 
console.log(nmbrs[6]);
console.log(typeof undefined);
console.log(typeof nmbrs);















