const calculatePercentage = function(obtainedMarks, totalMarks) {
    return (obtainedMarks / totalMarks) * 100;
};

let obtainedMarks = 75.5;
let totalMarks = 100;
const percentage = calculatePercentage(obtainedMarks, totalMarks);
console.log(`The percentage is ${percentage}%`); // Outputs: The percentage is 12.50%
