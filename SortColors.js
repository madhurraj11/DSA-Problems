var sortColors = function(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length-1;

    while(mid<=high){
        if(nums[mid]===0){
            swap(nums, mid, low)
            mid++;
            low++;
        }else if(nums[mid]===2){
            swap(nums, mid, high);
            high--;
        }else{
            mid++;
        }

    }
    return nums;
};

var swap = function(nums,i,j){
    let temp;
    temp = nums[i];
    nums[i]=nums[j];
    nums[j]=temp;
    return nums;
}

console.log(sortColors([1,2,0,1,1,2,0,0]));