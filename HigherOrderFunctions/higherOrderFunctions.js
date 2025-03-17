// 1. A Function that takes another function

function applyOperation(x, y, operation) {
    return operation(x, y);
}

// We can now pass different operations
function add(a, b) { return a + b };
function multiply(a, b) { return a * b };

console.log(applyOperation(5, 3, add));
console.log(applyOperation(5, 3, multiply));


// 2. A Function that returns another functions (Closures)

function createMultiplier(factor) {
    // This returns a new function
    return function (number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));


// Function composition
function compose(f, g) {
    return function (x) {
        return f(g(x));
    };
}

const double2 = x => x * 2;
const addOne = x => x + 1;

const doubleAndAddOne = compose(addOne, double2);
console.log(doubleAndAddOne(5));


// Currying
function curry(fn) {
    return function (a) {
        return function (b) {
            return fn(a, b);
        }
    }
}

function add(a, b) {
    return a + b;
}

const curriedAdd = curry(add);
const addFive = curriedAdd(5);

console.log(addFive(3));