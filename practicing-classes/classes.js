// Defining a class
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullname() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Creating an instance
const john = new Person('John', 'Doe');
console.log(john.getFullname());


// Modern JS ES2022 Class Fields
class Book {
    title = '';
    author = '';
    year = 0;

    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}


// Instance Methods
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Instance method
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

    // Another instance method
    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

const Circle = new Circle(5);
console.log(Circle.calculateArea());


// Static Methods
class MethodOperations {
    static add(x, y) {
        return x + y;
    }

    static multiply(x, y) {
        return x * y;
    }
}

// Called directly on the class, not on an instance
console.log(MathOperations.add(5, 3));
console.log(MathOperations.multiply(5, 3));


// Getters and Setters
class Temperature {
    constructor(celsius) {
        this._celsius = celsius;
    }

    // Getter
    get celsius() {
        return this._celsius;
    }

    // Setter
    set celsius(value) {
        if (value < 273.15) {
            throw new Error("Temperature below absolute zero is not possible");
        }
        this._celsius = value;
    }

    // Getter that computes value
    get fahrenheit() {
        return this._celsius * 9 / 5 + 32;
    }

    // Setter that computes value
    set fahrenheit(value) {
        return this.celsius = (value - 32) * 5 / 9;
    }
}

const temp = new Temperature(25);
console.log(temp.celsius);
console.log(temp.fahrenheit);

temp.celsius = 30;
console.log(temp.fahrenheit);


// Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, bread) {
        super(name);  // Call the parent constructor
        this.bread = bread;
    }

    speak() {
        console.log(`${this.name} barks!`);
    }

    fetch() {
        console.log(`${this.name} fetches the ball!`);
    }
}

const rex = new Dog('Rex', 'German Shepherd');
rex.speak();  // "Rex barks!"
rex.fetch();  // "Rex fetches the ball"


// Private class features
class BankAccount {
    #balance = 0;  // Private field

    constructor(initialBalance) {
        if (initialBalance > 0) {
            this.#balance = initialBalance;
        }
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return true;
        }
        return false
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return true;
        }
        return false;
    }

    getBalance() {
        return this.#balance;
    }

    #calculateInterest() {  // Private method
        return this.#balance + 0.05;
    }

    applyInterest() {
        const interest = this.#calculateInterest();
        this.#balance += interest;
        return interest;
    }
}

const account = new BankAccount(100);
console.log(account.getBalance());

account.deposit(50);
console.log(account.getBalance());  // 150


// Inheritance vs Composition
// Inheritance approach:
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }

    move() {
        console.log(`Moving at ${this.speed} kmh`);
    }
}

class Car extends Vehicle {
    constructor(speed, make) {
        super(speed);
        this.make = make;
    }
}


// Composition approach
class Engine {
    start() {
        console.log("Engine started");
    }
}

class Wheels {
    rotate() {
        console.log("Wheels rotating");
    }
}

class CarComposition {
    constructor(make) {
        this.make = make;
        this.engine = new Engine();
        this.wheels = new Wheels();
    }

    start() {
        this.engine.start();
    }

    drive() {
        this.wheels.rotate();
    }
}