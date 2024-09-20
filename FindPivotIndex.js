var pivotIndex = function(nums) {
    
    let rsum = 0;

    for(let ele of nums){
        rsum += ele;
    }

    let lsum = 0;

    for(let i = 0; i<nums.length; i++){
        rsum -= nums[i];

        if(rsum === lsum){
            return i;
        }

        lsum += nums[i];
    }
    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]));