function printRightTriangle(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write('* ');
        }
        console.log();
    }
}

printRightTriangle(5);

function printRightTriangleNumbers(n) {
    for (let i = 0; i < n; i++) {
        let num = 1;
        for (let j = 0; j <= i; j++) {
            process.stdout.write(num + " ");
            num++;
        }
        console.log();
    }
}

printRightTriangleNumbers(5);

function printRightTriangleAlphabets(n) {
    for (let i = 0; i < n; i++) {
        let char = 65;
        for (let j = 0; j <= i; j++) {
            process.stdout.write(String.fromCharCode(char) + " ");
            char++;
        }
        console.log();
    }
}
printRightTriangleAlphabets(5);

function printInvertedRightTriangle(n) {
    for (let i = n; i > 0; i--) {
        for(let j = 0; j < i; j++){
            process.stdout.write("* ");
        }
        console.log();
    }
}

printInvertedRightTriangle(5);

function printMirroredRightTriangle(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i + j >= n-1) {
                process.stdout.write("* ");
            } else {
                process.stdout.write("  ");
            }
        }
        console.log();
    }
}

printMirroredRightTriangle(5);

function printVShapePattern(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n * 2; j++) {
            if (i === j || i + j === n * 2 - 2) {
                process.stdout.write("*")
            }
            else process.stdout.write(" ");
        }
        console.log()
    }
}

printVShapePattern(5);

function printXShapePattern(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j || i + j === n - 1) {
                process.stdout.write("*");
            }
            else process.stdout.write(" ");
        }
        console.log();
    }
}

printXShapePattern(5);