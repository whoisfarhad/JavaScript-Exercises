// you're building an e-commerce site and need to calculate the total price of items in a shopping cart, including applying discounts and taxes:

const shoppingCart = [
    { name: 'Laptop', price: 1200, quantity: 1, discountPercent: 10 },
    { name: 'Mouse', price: 25, quantity: 2, discountPercent: 0 },
    { name: 'Keyboard', price: 85, quantity: 1, discountPercent: 5 }
];

// Calculate subtotal with quantities and discounts applied
function calculateTotal(cart) {
    const subTotal = cart.reduce((total, item) => {
        const itemPrice = item.price * item.quantity;
        const discountAmount = itmePrice * (item.discountPercent / 100);
        return total + (itemPrice - discountAmount);
    }, 0);

    // Apply tax
    const taxRate = 0.085;
    const tax = subTotal * taxRate;

    // Calculate final total
    const finalTotal = subTotal + tax;

    return {
        subTotal: subTotal.toFixed(2),
        tax: tax.toFixed(2),
        total: finalTotal.toFixed(2)
    };
}

const orderSummary = calculateTotal(shoppingCart);
console.log(orderSummary);