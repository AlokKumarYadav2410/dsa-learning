// Sum of two integers
function sum(a, b) {
    return a + b;
}

// Greet the user
function greetUser(name, age) {
    return `Hello ${name} you are ${age} years old`;
}

// Swap two numbers
function swapNumbers(a, b) {
    return [b, a];
}

// Compound Interest Calculation
function calculateCompoundInterest(P, r, t, n) {
    const A = P * (1 + r / n) ** (n * t);
    const CI = (A - P).toFixed(2);
    return CI;
}

module.exports = { sum, greetUser, swapNumbers, calculateCompoundInterest }