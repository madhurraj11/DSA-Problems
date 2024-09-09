var dominantIndex = function(nums) {
    let max = -Infinity;
    let smax = -Infinity;
    let maxIndex = 0;
    for(let i = 0; i< nums.length; i++){
        if(max<nums[i]){
            smax = max;
            max = nums[i];
            maxIndex = i;
        }else if(smax < nums[i]){
            smax = nums[i];
        }
    }
    if(smax*2 <= max){
        return maxIndex;
    }
    else{
        return -1;
    }

};

console.log(dominantIndex([3,6,1,0]));