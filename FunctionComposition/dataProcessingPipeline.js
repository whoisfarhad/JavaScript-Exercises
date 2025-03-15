// Function composition utility
const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

// Individual functions for the pipeline
const filterActiveProducts = (products) => products.filter(p => p.active);

const applyDiscount = (products) => products.map(p => ({
    ...p,
    price: p.onSale ? p.price * 0.9 : p.price  // 10% discount for items on sale
}));

const calculateTax = (products) => products.map(p => ({
    ...p,
    priceWithTax: +(p.price * 1.08).toFixed(2)  // 8% tax
}));

const formatCurrency = (products) => products.map(p => ({
    ...p,
    displayPrice: `$${p.priceWithTax}`
}));

// Create processing pipeline
const processProductForDisplay = pipe(
    filterActiveProducts,
    applyDiscount,
    calculateTax,
    formatCurrency
);

// Example usage
const products = [
    { id: 1, name: "Laptop", price: 1000, active: true, onSale: true },
    { id: 2, name: "Keyboard", price: 100, active: true, onSale: false },
    { id: 3, name: "Mouse", price: 50, active: false, onSale: true },
    { id: 4, name: "Monitor", price: 300, active: true, onSale: true }
];

const displayReady = processProductForDisplay(products);
console.log(displayReady);