// How to flatten the array

function flatten(arr){
    if(!Array.isArray(arr)){
        return arr;
    }
    const res = [];

    for(let i=0; i<arr.length; i++){
        if (typeof arr[i] === 'number'){
            res.push(arr[i]);
        }
        else{
            res.push(...flatten(arr[i]));
        }
    }
    return res;
}

// Test the function

const arr = [[1, 2, [3, 4]], 5, [6, [7, 8, [9, 10]]]];
console.log(flatten(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]