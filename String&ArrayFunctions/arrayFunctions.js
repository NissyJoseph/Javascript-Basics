let arr = [1, 2, 3, 4, 5];
console.log(arr); // Output: [1, 2, 3, 4, 5]

// Array Length
console.log(arr.length); // Output: 5

// Accessing Elements
console.log(arr[0]); // Output: 1

// Adding an Element (push)
arr.push(6);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

// Removing the Last Element (pop)
let lastElement = arr.pop();
console.log(lastElement); // Output: 6
console.log(arr); // Output: [1, 2, 3, 4, 5]

// Slicing an Array (slice)
let newArr = arr.slice(1, 3); // Extracts from index 1 to 3 (not including 3)
console.log(newArr); // Output: [2, 4] (original array remains unchanged)

// Reversing an Array (reverse)
arr.reverse();
console.log(arr); // Output: [5, 4, 2, 1]

// Sorting an Array (sort)
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b); // Sorts in ascending order
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Filling an Array (fill)
let filledArray = new Array(5).fill(0);
console.log(filledArray); // Output: [0, 0, 0, 0, 0]

// Spreading an Array into Another (spread operator)
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2); // Output: [1, 2, 3, 4]

// Removing Duplicates (Set)
let duplicates = [1, 2, 2, 3, 4, 4];
let unique = [...new Set(duplicates)];
console.log(unique); // Output: [1, 2, 3, 4]

// Transforming an Array (map)
let squared = arr.map(x => x * x);
console.log(squared); // Output: [25, 16, 4, 1]

// Filtering an Array (filter)
let filtered = arr.filter(x => x > 2);
console.log(filtered); // Output: [5, 4]
