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