function maxProduct(arr){
    let max = -Infinity;
    let smax = -Infinity;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > 0){
            smax = max;
            max = arr[i];
        }
        else if(arr[i] < max && arr[i] > smax){
            smax = arr[i];
        }
    }
    return (max-1)*(smax-1);
}

console.log(maxProduct([1,2,3,4,5]));