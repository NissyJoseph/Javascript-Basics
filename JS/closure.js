function closureCount() {
    let count = 0; // Private variable

    const increment = () => count++;
    const getCount = () => count;

    return { increment, getCount };
}

const counter = closureCount();
console.log(counter.getCount()); // Output: 0
counter.increment();
console.log(counter.getCount()); // Output: 1
counter.increment();
console.log(counter.getCount()); // Output: 2

