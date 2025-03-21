// Multiply the vector {x, y} by a scalar value
function vectorMultiply({ x, y }, scalar) {
    return { x: x * scalar, y: y * scalar };
}
vectorMultiply({ x: 1, y: 2 }, 2)  // => {x: 2, y: 4}

// Vector addition example 
function vectorAdd(
    {
        x: x1, y: y1  // Unpack 1st object into x1 and y1 params
    },
    {
        x: x2, y: y2 // Unpack 2nd object into x2 and y2
    }
)