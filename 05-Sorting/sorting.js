let arr = [8, 9, 2, 1, 3, 4, 5, 6, 7];

// Bubble Sort
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
    }
    return arr;
}

console.log(bubbleSort(arr))

// Selection sort
function selectionSort(arr){
    for(let i = 0; i < arr.length-1; i++){
        let min = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min !== i){
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr; 
}

console.log(selectionSort(arr))

// Insertion sort
function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let key = arr[i];
        let j = i-1;
        while(j>=0 && arr[j] > key){
            arr[j+1] = arr[j];
            j--
        }
        arr[j+1]=key;
    }
    return arr;
}

console.log(insertionSort(arr))