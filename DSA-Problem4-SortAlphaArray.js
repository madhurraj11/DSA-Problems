const arr = ['z', 'a', 'd', 'b', 'e'];

const bubbleSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n-1; i++){
        for (let j = 0; j < n-1-i; j++){
            if (arr[j].toLowerCase() > arr[j+1].toLowerCase()){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

let result = bubbleSort(arr);
console.log(result);

