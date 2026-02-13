function findGreatest(a, b) {
    return a > b ? a : b;
}

function checkEvenOrOdd(num) {
    return num % 2 === 0 ? `Even` : `Odd`;
}

function checkVoterEligibility(name, age) {
    return age >= 18 ? `${name} is a valid voter` : `${name} is not a valid voter`;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? 'Leap Year' : 'Not a Leap Year';
}

function calculateFinalAmount(amount) {
    let discount = 0;
    if (amount > 9000) discount = 0.2;
    else if (amount > 7000) discount = 0.1;
    else if (amount > 5000) discount = 0.05;

    return amount - (discount * amount);
}

function calculateElectricityBill(unit) {
    let amount = 0;
    if (unit > 400) {
        amount += 13 * (unit - 400);
        unit = 400;
    }
    if (unit > 200) {
        amount += 8 * (unit - 200);
        unit = 200;
    }
    if (unit > 100) {
        amount += 6 * (unit - 100);
        unit = 100;
    }

    amount += 4.2 * unit;
    return amount.toFixed(1, 0);
}

// MCQ's
let a = 5, b = 10;
let result = (a > b) ? a + b : a - b;
console.log(result); // Output: -5

let x = 0;
if (x) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
// Output: Falsy

let c = 5;
let d = "5";
if (c === d) {
    console.log("Equal");
} else {
    console.log("Not Equal");
}
// Output: Not Equal

// Assignment questions
function findGreatest(a, b, c) {
    if (a >= b && b >= c) return a;
    else if (b >= a && b >= c) return b;
    else return c;
}

function printDayName(day) {
    switch(day){
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        case 7: return 'Sunday';
        default: return 'Invalid day number';
    }
}

console.log(printDayName(8));

class Solution {
    get_movie_status(ratingStr) {
        if (ratingStr >= 4.6 && ratingStr <= 5) return 'Super Hit';
        else if (ratingStr >= 3.5) return 'Hit';
        else if (ratingStr >= 2.1) return 'Semi-hit';
        else return 'Flop';
    }
}

function checkChar(ch) {
  switch (ch) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U': return 'Vowel';
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'g':
    case 'h':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
    case 'n':
    case 'p':
    case 'q':
    case 'r':
    case 's':
    case 't':
    case 'v':
    case 'w':
    case 'x':
    case 'y':
    case 'z':
    case 'B':
    case 'C':
    case 'D':
    case 'F':
    case 'G':
    case 'H':
    case 'J':
    case 'K':
    case 'L':
    case 'M':
    case 'N':
    case 'P':
    case 'Q':
    case 'R':
    case 'S':
    case 'T':
    case 'V':
    case 'W':
    case 'X':
    case 'Y':
    case 'Z': return 'Consonant';
    default: return 'Invalid input';
  }
}

console.log(checkChar('a'));