var longestConsecutive = function(nums) {
    const objNums = new Map();

    for(let i = 0; i<nums.length; i++){
        objNums.set(nums[i], false);
    }

    for(let key of objNums.keys()){
        if(objNums.has(key-1)===false){
            objNums.set(key,true);
        }
    }

    let max=0;

    for(let key of objNums.keys()){
        let k=1;
        if(objNums.get(key)===true){
            while(objNums.has(key+k)===true){
                k++;
            }
        }
        max=Math.max(max,k)
    }
    return max;
};

console.log(longestConsecutive([100,4,200,1,3,2]));