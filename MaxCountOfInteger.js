var maximumCount = function(nums) {
    let lastNegativeIndex = lastNegative(nums)+1;
    let firstPositiveIndex = nums.length - firstPositive(nums);
    return Math.max(lastNegativeIndex,firstPositiveIndex);
};

var lastNegative = function(nums){
    let start = 0;
    let end = nums.length - 1;
    let ans = -1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(nums[mid] < 0){
            ans = mid;
            start = mid+1;
        }else{
            end = mid-1;
        }
    }
    return ans;
}

var firstPositive = function(nums){
    let start = 0;
    let end = nums.length - 1;
    let ans = nums.length;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(nums[mid] > 0){
            ans = mid;
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return ans;
}

console.log(maximumCount([-3,-2,-1,0,0,1,2])); //output 3, there are 3 negative integers and 2 positive integers