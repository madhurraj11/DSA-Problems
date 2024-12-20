var increasingTriplet = function(nums) {
    let first = +Infinity;
    let second = +Infinity;
    let third = +Infinity;
    for(let i=0; i<nums.length; i++){

        if(first >= nums[i]){
            first = nums[i];
        }else if(second >= nums[i]){
            second = nums[i];
        }else{
            third = nums[i];
            return true;
        }
    }
    return false;
};

console.log(increasingTriplet([2,1,5,0,4,6]));
