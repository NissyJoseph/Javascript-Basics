setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);

const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(function(num) {
    console.log("This runs immediately")
    return num * num;
});

console.log(squared); // Outputs: [1, 4, 9, 16, 25]

