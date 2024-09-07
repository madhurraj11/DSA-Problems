function removeNumber(arr, val){
    let p = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== val){
            arr[p] = arr[i];
            p++
        }
    }
    
    return p;
}

console.log(removeNumber([3,2,2,3,4],2));