function twoSum(arr, target){
    const ans = new Array(2);

    let start = 0;
    let end = arr.length-1;

    while(start < end){
        let sum = arr[start] + arr[end];

        if(sum === target){
            ans[0] = start+1;
            ans[1] = end+1;
            return ans;
        }else if(sum > target){
            end--;
        }else{
            start++;
        }
    }
    return ans;
}

console.log(twoSum([2,3,5,9],12));