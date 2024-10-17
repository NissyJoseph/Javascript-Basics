let string = "Hello";
console.log(string);

// String Length
console.log(string.length); // Output: 5

// Character at Index
console.log(string.charAt(1)); // Output: "e"

// Index of a Character
console.log("The index of 'o' is", string.indexOf("o")); // Output: 4

// Last Index of a Character
console.log(string.lastIndexOf("l")); // Output: 3

// Slice a String
console.log(string.slice(1, 4)); // Output: "ell"

// Substring
console.log(string.substring(3, 4)); // Output: "l"

// Convert to Lowercase
console.log(string.toLowerCase()); // Output: "hello"

// Convert to Uppercase
console.log(string.toUpperCase()); // Output: "HELLO"

// Trim Whitespace
let stringWithSpaces = "  Hello  ";
console.log(stringWithSpaces); // Output: "  Hello  "
console.log(string.indexOf("e")); // Output: 1
console.log(stringWithSpaces.trim()); // Output: "Hello"

// Replace a Substring
let greeting = "Hello, World!";
console.log(greeting);
console.log(greeting.replace("World", "JavaScript")); // Output: "Hello, JavaScript"

// Replace All Occurrences
console.log("Hello, World! World!".replaceAll("World", "JavaScript")); // Output: "Hello, JavaScript! JavaScript!"

// Concatenate Strings
console.log(string.concat(", ", "How are you?")); // Output: "Hello, How are you?"

// Template Literals
let name = "Nissy";
console.log(`Hello, ${name}!`); // Output: "Hello, John!"

// Split a String
let fruits = "apple,banana,orange";
console.log(fruits.split(",")); // Output: ["apple", "orange", "cherry"]

// Check if String Includes a Substring
console.log(greeting.includes("Hello")); // Output: true

// Check if String Starts with a Substring
console.log(greeting.startsWith("He")); // Output: true

// Check if String Ends with a Substring
console.log(greeting.endsWith("!")); // Output: true


