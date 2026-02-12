// Swap two numbers
function swapNumbers(a, b) {
    return [b, a];
}

// Compound Interest Calculation
function calculateCompoundInterest(P, r, t, n) {
    const A = (P * (1 + r / n) ** (n * t));
    const CI = (A - P).toFixed(2);
    return CI;
}
console.log(calculateCompoundInterest(1000, 0.5, 10, 4));

function calculateTriangleArea(a, b, c) {
    let s = (a + b + c) / 2;
    let A = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return A.toFixed(2, 0);
}
console.log(calculateTriangleArea(3,4,5));

function calculateCircleProperties(r) {
    const PI = Math.PI;
    const c = (2 * PI * r).toFixed(2, 0);
    const a = (PI * r * r).toFixed(2, 0);
    return [c, a]
}
console.log(calculateCircleProperties(5.2));

/** MCQ's */
Math.min(2, 0, -3, 5, -7); // Output: -7
Math.max(-10, -5); //-5