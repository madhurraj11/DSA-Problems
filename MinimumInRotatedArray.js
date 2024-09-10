var findMin = function(nums) {
    if(nums.length === 1 || (nums[0] < nums[nums.length-1])){
        return nums[0];
    }else{
        let start = 0;
        let end = nums.length - 1;

        while(start <= end){
            let mid = Math.floor((start+end)/2);

            if(mid !== 0 && nums[mid-1]>nums[mid]){
                return nums[mid];
            }else if(mid !== nums.length-1 && nums[mid]>nums[mid+1]){
                return nums[mid+1];
            }else if(nums[start] <= nums[mid]){
                start = mid+1;
            }else{
                end = mid-1;
            }
        }
    }
    return -1;
};

console.log(findMin([4,5,7,9,1,2]));