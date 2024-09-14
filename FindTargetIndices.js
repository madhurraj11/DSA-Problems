var targetIndices = function(nums, target) {
    let num = 0;
    let targetCount = 0;

    for(let ele of nums){
        if(ele === target){
            targetCount++;
        }else if (target>ele){
            num++;
        }
    }

    const res = [];
    while(targetCount > 0){
        res.push(num);
        num++;
        targetCount--;
    }

    return res;
};

console.log(targetIndices([1,4,2,3,5,3],3));