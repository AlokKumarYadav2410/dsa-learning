function calculateSumAndMean(arr, n) {
    let sum = arr.reduce((acc, s) => acc + s, 0);
    let mean = (sum / n).toFixed(1, 0);

    return [sum, mean];
}

function findGreatestElementAndIndex(arr) {
    let max = arr[0];
    let index = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    return [max, index]
}

function findSecondGreatestElement(arr) {
    let firstGreatest = arr[1];
    let secondGreatest = arr[0];

    for (let num of arr) {
        if (num > firstGreatest) {
            secondGreatest = firstGreatest;
            firstGreatest = num;
        } else if (num > secondGreatest && num < firstGreatest) secondGreatest = num;
    }

    return secondGreatest;
}

console.log(findSecondGreatestElement([2, 96, 69, 77, 145, 20]))

function copyAndReverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]))

function leftRotateByOne(arr) {
    let first = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }

    arr[arr.length - 1] = first;
    return arr;
}

console.log(leftRotateByOne([1, 2, 3, 4, 5]))

function moveZerosToEnd(arr) {
    let i = 0;
    let j = 1;
    while (j < arr.length) {
        if (arr[j] === 1 && arr[i] === 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
        }
        else if (arr[i] === 1) {
            i++;
        }
        j++;
    }
    return arr;
}

console.log(moveZerosToEnd([1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1]))

function moveZerosInPlace(arr) {
    let i = 0, j = 1;
    while (j < arr.length) {
        if (arr[j] === 1 && arr[i] === 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
        }
        if (arr[i] === 1) i++;
        j++;
    }
    return arr;
}
