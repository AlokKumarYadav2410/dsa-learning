/**
 * Recursively prints natural numbers from 1 to n, separated by a space.
 * @param {number} n
 */
function printNumbers(n) {
    if (n === 1) {
        process.stdout.write(n + " ");
        return;
    }
    printNumbers(n - 1);
    process.stdout.write(n + " ");
}

/**
 * Recursively prints natural numbers from n to 1, separated by a space.
 * @param {number} n
 */
function printNumbers(n) {
    process.stdout.write(n + " ");
    if (n === 1) {
        return;
    }

    printNumbers(n - 1);
}

/**
 * Recursive function to calculate sum up to N
 * @param {number} n
 * @returns {number}
 */
function sumUpToN(n) {
    if (n === 0) {
        return 0;
    }

    return sumUpToN(n - 1) + n;
}

/**
 * Recursive function to calculate factorial of a number
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function printFactors(n) {
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) process.stdout.write(i + " ");
    }
    process.stdout.write(n + " ");

}

function sumEvenOddInRange(start, end) {
    let evenSum = 0;
    let oddSum = 0;
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) evenSum += i;
        else oddSum += i;
    }
    return [evenSum, oddSum];
}

function isPrime(n) {
    if (n <= 1) return 'Not Prime';
    if (n === 2) return 'Prime';
    if (n % 2 === 0) return 'Not Prime';

    const limit = Math.sqrt(n);

    for (let i = 3; i <= limit; i += 2) {
        if (n % i === 0) return 'Not Prime';
    }

    return 'Prime';
}

console.log(isPrime(97))

function calculatePower(a, b) {
    return a ** b
}

function isStrongNumber(n) {
    let sum = 0;
    let originalNum = n;
    while (n > 0) {
        let rem = n % 10;
        let fact = 1;
        for (let i = 1; i <= rem; i++) {
            fact *= i;
        }
        sum += fact;
        n = Math.floor(n / 10);
    }

    return originalNum == sum ? 'Yes' : 'No'
}

console.log(isStrongNumber(145))

function isAutomorphic(n) {
    let squareNum = n * n;
    while (n > 0) {
        if (n % 10 !== squareNum % 10) return 'No';
        n = Math.floor(n / 10);
        squareNum = Math.floor(squareNum / 10);
    }

    return 'Yes'
}

console.log(isAutomorphic(25))

function reverseNumber(n) {
    let reverseNumber = 0;
    while (n > 0) {
        reverseNumber = reverseNumber * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return reverseNumber;
}

class Solution {
    // A number is called a Harshad number if it is divisible by the sum of its digits.
    is_harshad(n) {
        let sum = 0;
        let originalNum = n;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }

        return originalNum % sum == 0 ? 'Harshad Number' : 'Not Harshad Number'
    }

    // A number is called abundant if the sum of its proper divisors is greater than the number itself.
    is_abundant(nStr) {
        let sum = 0;
        for (let i = 1; i <= nStr / 2; i++) {
            if (nStr % i === 0) sum += i;
        }
        return sum > nStr ? 'Yes' : 'No'
    }

    prime_factors(n) {
        if (n <= 1) return 'No prime factors';

        let arr = [];
        let i = 2;
        while (n > 1) {
            if (n % i === 0) {
                n = Math.floor(n / i);
                arr.push(i);
            }
            else i++;
        }
        return arr.join('\n')
    }

    // Sum of the sqaure of the number's digits is equal to the number itself
    is_neon(nStr) {
        let square = nStr * nStr;
        let sum = 0;
        while (square > 0) {
            sum += square % 10;
            square = Math.floor(square / 10);
        }
        return sum == nStr ? 'Yes' : 'No'
    }

    is_armstrong(nStr) {
        let sum = 0;
        let originalNum = nStr;
        let count = countDigit(nStr);
        while (nStr > 0) {
            sum += ((nStr % 10) ** count);
            nStr = Math.floor(nStr / 10);
        }

        return originalNum == sum ? 'Armstrong' : 'Not Armstrong'
    }
}

function countDigit(digit) {
    let count = 0;
    while (digit > 0) {
        count++;
        digit = Math.floor(digit / 10);
    }
    return count;
}

const solution = new Solution();
console.log(solution.is_harshad(18))
console.log(solution.is_abundant(12));
console.log('Checking prime factors of 60:')
console.log(solution.prime_factors(60));
console.log('Checking prime factors of 30:')
console.log(solution.prime_factors(30));
console.log('Checking prime factors of 0:')
console.log(solution.prime_factors(0));
console.log(solution.is_armstrong(153))