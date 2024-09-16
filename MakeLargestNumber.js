var largestNumber = function(nums) {
    let arr = new Array(nums.length);
    for(let i = 0; i<nums.length; i++){
        arr[i] = nums[i]+"";
    }
    arr.sort((s1, s2) => (s1 + s2).localeCompare(s2 + s1));

    let resStr = "";
    for(let i = arr.length-1; i>=0;i--){
        resStr += arr[i];
    }
    if(resStr.charAt(0)==='0'){
        return "0";
    }else{
        return resStr;
    }
};

console.log(largestNumber([3,30,34,5,9]));