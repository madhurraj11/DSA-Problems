// Let's some doing code
// To find the same keys with same value within the both object and get output store in new object. 

// 1st Approach
const input1 = {a:11, b:12, c:23, d:10, e: 15 }
const input2 = {a:12, e: 15, f: 6, d: 10}

let output = {};

Object.keys(input1).forEach((item) => {
    if(input1[item] === input2[item]){
        output[item]=input1[item];
    }
});

console.log(output);

// 2nd Approach
let result={};
for(let key in input1){
    if(key in input2 && input1[key] === input2[key]){
        result[key]=input1[key];
    }
}

console.log(result);


// To find the second largest number

arr1 = [2,5,6,4,7,1,3,11,11,5]
arr2 = [2,4,0,3,6,4,9,6]

function secondLargest(arr){
    let sortedArr = arr.sort((a,b) => a-b);
    console.log(sortedArr);
    
    let secondNum = Infinity;
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i] > arr[i-1]){
            secondNum = arr[i-1];
            break;
        }
    }
    return secondNum;
}

const secondNumberResult = secondLargest(arr1);
console.log(secondNumberResult);

// Rotate the array of 2 positions in left hand side

a1 = [2,4,6,-2,11,5]

function rotateArray(input){
    for(let i=0;i<2;i++){
        let temp=input[0];
        for(let j=0; j<input.length-1;j++){
            input[j]=input[j+1];
        }
        input[input.length-1] = temp;
    }
    return input;
}

const rotateArr = rotateArray(a1);
console.log(rotateArr);


function generatePattern(n) {
    const size = n*2-1;
    const matrix = Array.from({length:size}, () => Array(size).fill(0));

    for(let layer = 0; layer < n; layer++) {
        const value = n-layer;
        for(let i = layer; i < size-layer; i++){
            for (let j = layer; j < size-layer; j++){
                matrix[i][j] = value;
            }
        }
    }
    return matrix.map(row => row.join(" ")).join("\n"); // Return the final pattern string
}

// Example usage:
const size = 3; // This creates a 5x5 grid
console.log(generatePattern(size));