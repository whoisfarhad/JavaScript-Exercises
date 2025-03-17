// Array.map()
// Convert an array of numbers to an array of their squares
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(function (number) {
    return number * number;
});

// Arrow function version:
const squares2 = numbers.map(number => number * number);

console.log(squares);


// Array.filter()
// Get only even numbers
const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});

// Arrow function version
const evenNumbers2 = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);


// Array.reduce()
// Sum all numbers in an array
const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); // 0 is the initial value

// Arrow function version
const sum2 = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum);


// Array.forEach()
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(function (fruit, index) {
    console.log(`Fruit at index ${index} is ${fruit}`);
});

// Arrow function version
fruits.forEach((fruit, index) => console.log(`Fruit at index ${index} is ${fruit}`));