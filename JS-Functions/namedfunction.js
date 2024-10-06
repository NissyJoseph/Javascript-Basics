/*----- Named function -----*/


// Without argument/parameters and without return type
    
function myFunction() {
    console.log("Hello Everyone!");
}
myFunction();


//With argument / parameters and without return type
 
function greet(name) {
    console.log("Hello,",name,"!");
}
greet("Nissy");


//Without argument/parameters and with return type

function getGreeting() {
    return "Good Morning";
}

const greetingMessage = getGreeting();
console.log(greetingMessage);


// With argument/parameters and with return type

function add(a, b) {
    return a + b;
}

// Calling the function with arguments and storing the return value
const sum = add(5, 3);
console.log(sum);

    
    
    
    
    