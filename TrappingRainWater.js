var trap = function(height) {
    let leftMax = new Array(height.length);
    leftMax[0] = height[0];
    for(let i = 1; i < height.length; i++){
        leftMax[i] = Math.max(leftMax[i-1], height[i]);
    }

    let rightMax = new Array(height.length);
    rightMax[height.length - 1] = height[height.length - 1];
    for(let i = height.length-2; i >= 0; i--){
        rightMax[i] = Math.max(rightMax[i+1], height[i]);
    }

    let ans = 0; 
    for(let i = 0; i < height.length; i++){
        ans += (Math.min(leftMax[i], rightMax[i])-height[i]);
    }

    return ans;
};

let height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height));