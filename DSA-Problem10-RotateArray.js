arr = [1,2,3,4,5,6,7];
k=3;

function rotateArray(arr) {
    for(let i = 0; i < k; i++){
        let temp = arr[arr.length-1];
        for(let j = arr.length-1; j > 0; j--){
            arr[j] = arr[j-1];
        }
        arr[0] = temp;
    }
    return arr;
}

console.log(rotateArray(arr, k));