// add each number in the array without adding itself

// 1st approach
const arr = [2, 11, 9, 5, 12, -2];
const output = [];
for(let i=0;i<arr.length;i++){
    let sum=0;
    for(let j=0;j<arr.length;j++){
        if(arr[i]===arr[j]){
            continue;
        }
        sum = arr[j]+sum;
    }
    output.push(sum);
}

console.log(output);

// 2nd approach
const sum = arr.reduce((a,b) => a+b,0);
const result = arr.map((e) => sum - e);

console.log(result);