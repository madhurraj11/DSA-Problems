var singleNonDuplicate = function(nums) {
    if(nums.length === 1){
        return nums[0];
    }else if(nums[0] !== nums[1]){
        return nums[0];
    }else if(nums[nums.length-1] !== nums[nums.length-2]){
        return nums[nums.length-1];
    }

    let start = 0;
    let end = nums.length - 1;

    while(start<=end){
        let mid = Math.floor((start+end)/2);

        if(nums[mid] !== nums[mid-1] && nums[mid] !== nums[mid+1]){
            return nums[mid];
        }
        else if(mid%2 !== 0){
            if(nums[mid-1] === nums[mid]){
                start = mid+1
            }else{
                end = mid-1;
            }
        }else{
            if(nums[mid] === nums[mid+1]){
                start = mid+1;
            }else{
                end = mid-1;
            }
        }
    }
    return -1;
};

console.log(singleNonDuplicate([1,1,2,2,3,4,4,8,8]));