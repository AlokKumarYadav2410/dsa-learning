let arr = [2, 3, 1, 4, 5, 6, 7];
let target = 5;

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        // let mid = Math.floor((left + right) / 2);
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else right = mid - 1;
    }

    return -1;
}

console.log(binarySearch(arr, target) === -1 ? "Element not found" : "Element found at index: " + binarySearch(arr, target));