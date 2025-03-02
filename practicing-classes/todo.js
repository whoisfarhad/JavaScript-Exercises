// Summarizing everything learned for classes, in one practical example

class TodoItem {
    #completed = false;

    constructor(id, title, description = '') {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdAt = new Date();
    }

    get completed() {
        return this.#completed
    }

    toggle() {
        this.#completed = !this.#completed;
        return this.#completed;
    }

    toString() {
        return `${this.id}. [${this.#completed ? 'X' : ' '}] ${this.title}`;
    }
}

class TodoList {
    #items = [];
    #nextId = 1;

    addItem(title, description = '') {
        const item = new TodoItem(this.#nextId++, title, description);
        this.#items.push(item);
        return item;
    }

    getItem(id) {
        return this.#items.find(item => item.id === id);
    }

    toggleItem(id) {
        const item = this.getItem(id);
        if (item) {
            return item.toggle();
        }
        return null;
    }

    removeItem(id) {
        const index = this.#items.findIndex(item => item.id === id);
        if (index !== -1) {
            return this.#items.splice(index, 1)[0];
        }
        return null;
    }

    get allItems() {
        return [...this.#items];
    }

    get completedItems() {
        return this.#items.filter(item => item.completed);
    }

    get pendingItems() {
        return this.#items.filter(item => !item.completed);
    }

    toString() {
        if (this.#items.length === 0) {
            return "No todo items";
        }

        return this.#items.map(item => item.toString()).join('\n');
    }
}

// Usage
const myTodoList = new TodoList();
myTodoList.addItem("Learn JavaScript classes", "Study the syntax and features");
myTodoList.addItem("Build a project", "Apply knowledge to a real project");
myTodoList.addItem("Practice regularly");

console.log(myTodoList.toString());

myTodoList.toggleItem(1);
console.log("\nAfter completing the first task:");
console.log(myTodoList.toString());

console.log("\nPending items:", myTodoList.pendingItems.length);
console.log("\nCompleted items:", myTodoList.completedItems.length);