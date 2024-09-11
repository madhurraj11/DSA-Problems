var findPeakElement = function(nums) {
    if(nums[0]>nums[1] || nums.length === 1){
        return 0;
    }else if(nums[nums.length - 1] > nums[nums.length - 2]){
        return (nums.length - 1);
    }else{
        let start = 1;
        let end = nums.length - 2;

        while(start <= end){
            let mid = Math.floor((start+end)/2);

            if(nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]){
                return mid;
            }else if(nums[mid]< nums[mid-1]){
                end = mid-1;
            }else{
                start = mid+1;
            }
        }
    }
    return -1;
};

console.log(findPeakElement([1,2,1,3,5,6,4]));