function sortHalf(arr) {
    let mid = Math.floor(arr.length / 2);

    let firstHalf = arr.slice(0, mid).sort((a, b) => a - b);
    let secondHalf = arr.slice(mid).sort((a, b) => b - a);

    return [...firstHalf, ...secondHalf];
}

console.log(sortHalf([2, 6, 3, 1, 5, 9, 8]));

function minAddForBalance(arr) {
    let mid = Math.floor(arr.length / 2);
    let firstSum = arr.slice(0, mid).reduce((acc, sum) => acc + sum, 0);
    let secondSum = arr.slice(mid).reduce((acc, sum) => acc + sum, 0);

    return firstSum > secondSum ? firstSum - secondSum : secondSum - firstSum;
}

console.log(minAddForBalance([1, 2, 1, 2, 1, 3]))
console.log(minAddForBalance([2, 2, 2, 2]))
console.log(minAddForBalance([2, 2, 2, 3]))

function multiplyPrevNext(arr) {
    // Write your logic here
    let first = arr[0] * arr[1];
    let last = arr[arr.length - 1] * arr[arr.length - 2]
    let newArr = [];
    newArr.push(first);
    for (let i = 1; i < arr.length - 1; i++) {
        newArr.push(arr[i - 1] * arr[i + 1]);
    }
    newArr.push(last);
    return newArr;
}

console.log(multiplyPrevNext([1, 2, 3, 4, 5]))

function  sumOfAbsDiff(arr) {
    let sum = 0n;

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        const diff = arr[i] - arr[j];
        sum += diff < 0n ? -diff : diff;
      }
    }

    return sum;
  }

console.log(sumOfAbsDiff([1n, 2n, 3n,4n, 5n]));