function missingNumber(arr){
    let len = arr.length;

    let actualSum = (len*(len+1))/2;

    let currentSum = 0;
    for(let i = 0; i < arr.length; i++){
        currentSum += arr[i];
    }
    let ans = actualSum - currentSum;
    return ans;
}

console.log(missingNumber([3,0,1]));    