let arr = [2, 3, 4, 5, 6, 7]
let target = 5;

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[j] === target) {
                return j;
            }
        }
    }
    return -1;
}

console.log(linearSearch(arr, target) === -1 ? "Element not found" : "Element found at index: " + linearSearch(arr, target));
