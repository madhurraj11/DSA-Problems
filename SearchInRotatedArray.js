var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);

        if(nums[mid] === target){
            return mid;
        }else if(nums[start] <= nums[mid]){
            if((nums[start] <= target) && (target < nums[mid])){
                end = mid-1;
            }else{
                start = mid + 1;
            }
        }else{
            if((nums[end] >= target) && (target > nums[mid])){
                start = mid + 1;
            }else{
                end = mid - 1;
            }
        }
    }
    return -1;
};

console.log(search([4,6,7,9,0,1,2,3],0));