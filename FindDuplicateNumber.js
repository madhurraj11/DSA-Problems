var findDuplicate = function(nums) {
    let ans = 0;
    for(let i = 0; i<nums.length; i++){
        let ele = nums[i];
        ele = Math.abs(ele);

        if(nums[ele]>0){
            nums[ele] = -nums[ele];
        }else{
            ans = ele;
        }
    }

    for(let i = 0; i<nums.length;i++){
        nums[i]=Math.abs(nums[i]);
    }
    return ans;
};

console.log(findDuplicate([2,1,3,4,4]));