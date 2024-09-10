var searchRange = function(nums, target) {
    const ans = [-1, -1];

    if(nums.length === 0){
        return ans;
    }

    ans[0] = firstOccurence(nums,target);
    ans[1] = lastOccurence(nums,target);

    return ans
};

var firstOccurence = function(nums, target){
    let start = 0;
    let end = nums.length - 1;

    let ans = -1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);

        if(nums[mid] === target){
            ans = mid;
            end = mid - 1;
        }else if(nums[mid] < target){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return ans;
}

var lastOccurence = function(nums, target){
    let start = 0;
    let end = nums.length - 1;

    let ans = -1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);

        if(nums[mid] === target){
            ans = mid;
            start = mid + 1;
        }else if(nums[mid] < target){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return ans;
}

console.log(searchRange([0,2,3,4,4,4,5,6,7,7,8,9,9], 4));