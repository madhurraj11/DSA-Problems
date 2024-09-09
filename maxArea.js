var maxArea = function(height) {
    let start = 0;
    let end = height.length-1;
    let maxArea = -Infinity;
    let h = -Infinity;
    while(start<end){
        h = Math.min(height[start],height[end]);
        let w = end - start;

        let currArea = h * w;

        maxArea = Math.max(currArea, maxArea);

        if(height[start]< height[end]){
            start++;
        }else{
            end--;
        }
    }
    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));