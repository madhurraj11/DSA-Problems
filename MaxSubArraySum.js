var maxAscendingSum = function(nums) {
    
    let max = nums[0];
    let currMax = nums[0];

    for(let i = 1; i < nums.length; i++){
        if(nums[i-1] < nums[i]){
            currMax += nums[i];
        }else{
            max = Math.max(max, currMax);
            currMax = nums[i];
        }
    }
    max = Math.max(max, currMax);
    return max;
};

console.log(maxAscendingSum([10,20,30,5,10,50]));