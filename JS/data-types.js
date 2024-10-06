//----  Variables declaration  ----//

//-- VAR --//

var a = "Front-End";
var a = "Back-End"; // value can be redeclare

console.log(a); // Back-End

//-- LET --//

let b= "2000";
// let b = 40; --output will be error. cannot redeclared,

b = "2200"; //but reassigned
console.log(b);  // 2200

//-- CONST --//

const c = 19;
//    c = 20; cannot be reassigned
console.log(c); // 19


//---- DATA TYPES ----//++

//-- NUMBER - a list of integers --//

var age = 22;
console.log(age); //22+

var phonenumber = 6379596960;
console.log(phonenumber); // 6379596960

//-- STRING --//
 
let intro = "Hi, I'm Nissy";
console.log(intro); // Hi, I'm Nissy

//-- BOOLEAN --//

let RoundEarth = true;
let FlatEarth = false;

console.log(RoundEarth); //true
console.log(FlatEarth); //false

//-- UNDEFINED -a value hasn't been assigned --//

let project;
console.log(project); // undefined

//-- NULL - indicates the absence of the value --//

 var FullStack = null;
 console.log(FullStack);  //null

 
//--- Synchronous & Asynchronous ---//

//-- Synchronous --//

console.log("Sunday");
console.log("Monday");
console.log("Tuesday");
console.log("Wednesday");
console.log("Thursday");
console.log("Friday");
console.log("Saturday");

/* output 

Sunday
Monday
Tuesday
Wednesday
Thursday
Friday
Saturday

*/

//-- Asynchronous --//

console.log("HTML");

setTimeout(function async() {
    console.log("React");
}, 2000); 

console.log("CSS");

setTimeout(function async() {
    console.log("Javascript");
}, 1000);

/* ouput

HTML
CSS
*Delayed*
Javascript
React

*/
