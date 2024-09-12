var maxSubArray = function(nums) {
    currSum = nums[0];
    maxSum = nums[0];

    for(let i = 1; i<nums.length; i++){
        currSum += nums[i];
        if(currSum < nums[i]){
            currSum = nums[i];
        }
        if(maxSum<currSum){
            maxSum=currSum;
        }
    }
    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));