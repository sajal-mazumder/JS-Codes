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

// Non-Primitive Data Types.

// object
// let person = {
//     name: "Sajal Mazumder",
//     age: 33,
//     sex: "Male",
// };
// console.log(person.sex);
// console.log(person.age);

// Array
// let clss = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]
// console.log(clss[3])
// console.log(clss[8])

// Function
// function greet() {
//     console.log( "Hello");
// }
// greet();

// Common Mistakes

// undefined
// let p;
// console.log(x);

// null
// let q = null;
// console.log(q);

// num to string
// let num = 5; 
// console.log(num.toString());

// reference
// let arr1 = [6,7];
// let arr2 = arr1;
// arr2.push(9);
// console.log(arr1);

// syntax and usage

// whole number
// let glassesSold = 10;
// console.log(glassesSold);

// Decimal number
// let pricePerGlass = 5.5;
// console.log(pricePerGlass);

// Basic math with numbers
// let totalEarnings = glassesSold * pricePerGlass
// console.log(totalEarnings);

// special numbers
// infinity when divided by 0
// console.log(1 / 0);
// NaN not a number
// console.log("cow" * 5);

// common mistakes
// 1. dividing by zero-- infinity, not an error
// let pq = 29;
// console.log(29/0);

// 2. using strings and numbers--output strings, concatination.
// let rst = "10" + 45;
// console.log(rst);
// solution--- convert strings to number before doing math
// let resst = Number("49") + 6;
// console.log(resst);

// misinterpreting NaN
// let noRest = "text" * 5;
// console.log(noRest);

// Syntax and Usage
// 1. Basic strings
// let greeting = "Hello, world!"; 
// console.log(greeting);
// 2. Single vs double quotes
// let singleQuote = 'This is a string.';
// let doubleQuote = "This is also a string.";
// console.log(singleQuote, doubleQuote);
// 3. using backticks for templates
// let name1 = "Alice"; 
// let message = `Hello, ${name1}!`; 
// console.log(message);
// 4. combining strings
// let firstName = "John"; 
// let lastName = "Doe"; 
// let fullName = firstName + " " + lastName; 
// console.log(fullName);

// string length
// let text = "Hello Sajal";
// console.log(text.length);

// special characters
// nested quotes
// let special = "He said, 'This is a fun!'";
// console.log(special); 

// let wrong = "He said, 'Oops!'"; 


// 20-01-2025 
// js primitive data 
// number

// whole number- integers
// let nmbr = 10;
// console.log(nmbr);

// decimal - floating point
// let floatNmbr = 10.5
// console.log(floatNmbr);

// basic math with numbers
// let summ = nmbr + floatNmbr;
// console.log(summ);

// special numbers

// @@@ result when divide by 0 is Infinity
// console.log(2/0);
// @@@ NaN ( not a number) appears when a math oparations does not make a sense
// console.log("apple"+55); // it make a result when we use string + number
// console.log("apple" *44); // output NaN

// concatination, result not 20, it is 155. striong + number (concatination)
// let result = "15"+ 5;
// console.log(result);

// string data type in js
    // 1. basic strings
// let welcome = "Hello World !";
// console.log(welcome);

    // 2. single vs double quotes vs back-ticks
// let wellcome = 'Hello World';
// console.log(wellcome);
// let wellCome = `Hello World`
// console.log(wellCome);

    // 3. combining strings
// let fname = "John ";
// let lname = "Doe";
// let fullNamE = fname + lname;
// console.log(fullNamE);

// string length
// let speciAl = "Hello World";
// console.log(speciAl.length);

// use backslashes() for special characters
// let speCiaL = "He said,'Javascript is fun ! '" ;

// let corect = "He said, 'Oops'"; 

// changing string to numbers when needed
// let reSult = Number("44") + 6; // number case sensitive. it will be Number, not number.
// console.log(reSult);

// @@@ Boolean data
    // direct assignment
// let me = true;
// let you = false;
// console.log(me, you);

    // conditions
// let isSunny = true;
// if (isSunny){
//     console.log("lets go outside !");
//     console.log(typeof isSunny);
    
    
// }

    // comparison
// let age5 = 18;
// let canVote = age >=18; true
// let canVote = age <=18; true
// let canVote = age5 < 18;
// console.log(canVote);

    // logical oparation
// let isWeeckend  = true;
// let hasWork = false;
// console.log(isWeeckend && !hasWork);


// Truthy and falsy value
// if(0){
//     console.log("this won't run !"); // it is falsy value
    
// }

// if("text"){
//     console.log("this will run !");
    
// }

// if(23){
//     console.log("this will also run !");
    
// }

//  type conversion- use boolean to convert other data types to Boolean.
// output true
// console.log(Boolean("Hello"));
// console.log(Boolean(2344));
// output false
// console.log(Boolean(0));

// confusing assignment = with comparison ===
// let isTrue = true;
// if(isTrue = false);
// console.log(isTrue);
// console.log("this won't run !");


// if (isTrue === false);
// console.log(isTrue);


// undefined in js

    // default values of uninnitialized variables
// let name11;
// console.log(name11);

    // functions without a return value
// function greet(){
//     console.log("Hello");
    
// }
// console.log(greet());

// accessing non existent object properties
// let user = {age: 45};
// console.log(user.year);

// accessing non existent array properties
// let nmbrs = [1 , 3 , 4 , 5] 
// console.log(nmbrs[6]);
// console.log(typeof undefined);
// console.log(typeof nmbrs);

// @@@ null
    // assigning null to a variable
// let favColor = null;
// console.log(favColor);

    // overwriting a value with null
// let userName = null;
//     userName = "John Doe";
// console.log(userName);

    // comparing with null - to check a variable is null use strict equality (===) true or false
// let score = null;
// console.log(score === null);

// null use in objects; assigning null is common in objects to indicate no value for a property;
// let persoN = { name: "John Doe", age: null};
// console.log(persoN.age);


// relying on type of null
// if (x === null){
//     console.log("it is null");
    
// }
// symbol
    // creating a symbol
// const myId = Symbol();
// console.log(myId);

    // using a symbol with description
// const iD = Symbol ("userPassword");
// console.log(iD);

    // using symbol as object key
// const muObj = {};
// const rull = Symbol ("rull");
// myObj[rull] = "value";
// console.log(myObj[rull]);




// js object

// let myName = {
//     fname: "Sajal",
//     lname: "Mazumder", 
//     religion: "Hindhu",
//     bloodGroup: "O+",
//     sex: "Male",
//     myNamee:{
//         fname: "Sajal",
//         lname: "Mazumder",
//         religion: "Hindhu",
//         sex: "Male",
//         bloodGroup: "O+"
//     }
// };

// adding new data

// myName.phoneNumber = "018520254752"

// new style console

// console.log(myName['fname']);

// replacing data
// myName.fname = "Borsa"
// 

// console.log(myName);

// js array

// const aray = ["Sajal", "Borsa", 100, null, undefined, {name: "Sajal"}];
// console.log(aray);

// aray[4] = 233;
// console.log(aray);
// console.log(aray.length);
// console.log(aray[aray.length - 1]);
// console.log(aray[aray.length -2]);
// console.log(aray[aray.length - 4]);
// console.log(aray[aray.length + 1]);
// console.log(aray[0] + 1);



// adding new data to last position by adding index number
// aray[6] = "Shubro"
// console.log(aray);

// ###### js function

// function myFunction() {
//     let x = 120;
//     console.log("me", x);  
// }

// myFunction()

// const me = 10;
// const you = 20;

// function we () {
//     console.log(me + you);
// }

// we()

// ### adding parameter (parameter)

// const nm1 = 5;
// const nm2 = 4;

// function sum (nm1, nm2) {
//     console.log(nm1 + nm2);
    
// }
// function multi(nm1, nm2) {
//     console.log(nm1 * nm2);
    
// }

// function divide (nm1, nm2) {
//     console.log(nm1 / nm2);
    
// }

// function sub(nm1, nm2) {
//     console.log(nm1 - nm2);
    
// }

// sum(20, 30)
// multi(5,4)
// divide(20, 4)
// sub(12, 10)


// #### js oparator - increment and decrement
// it was written in index file

// js assignment operator

// var ab = 12;
// var cd = 15;
// ab +=10
// console.log(WebAssembly);
// console.log(ab);
// cd -= 2;
// console.log(cd);
// cd *= 2;
// console.log(cd);
// cd /= 3
// console.log(cd);

// ab %= 2;
// console.log(ab);

// alert('hello i am from js file')

// let bd = document.getElementById('abd')
// console.log(bd);
// console.log(bd.innerHTML);
// changing inner HTML
// bd.innerHTML = "no counter";
// console.log(bd);

// ### js array 
// var a = [1, 3, 5, 2, 7, 9, 4, 6, 8];
// console.log(a.sort);
// console.log(a.sort());
// a.sort();
// console.log(a);

// a.reverse();
// a.pop();
// a.push(1);
// console.log(a);

// ### js object

// let a = {
//     sajal: 1,
//     ramesh: 2, 
//     mona: 3,
// }

// console.log(a);

// adding properties
// a.borsa = 4,
// a.subra = 5,
// console.log(a);

// deleting properties
// delete a.mona;
// console.log(a);


// nested objects
let a = {
    b: 2, 
    c: 3, 
    d:{
        D: 5,
        E: 6,
        F: 7,
        G:{
            g: 8,
            h:9
        },
        start: function(){ console.log('start')
        },
    },
    data: [2,3,4],
    math: 3>2
};

console.log(a);
// access to built in method-- finding object keys and values.
// console.log(Object.keys(a));
// console.log(Object.values(a));

// console.log(a.b);
// console.log(a['b']);



















