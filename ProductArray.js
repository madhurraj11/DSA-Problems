function productExceptSelf(arr){
    let n = arr.length;

    const right = new Array(n);
    let pro = 1;

    for(let i = n-1; i >= 0; i--){
        pro *= arr[i];
        right[i] = pro;
    }

    const ans = new Array(n);   

    let left = 1;

    for(let i = 0; i < n-1; i++){
        let val = left * right[i+1];

        ans[i] = val;

        left = left * arr[i];
    }
    ans[n-1] = left;
    return ans;
}

console.log(productExceptSelf([-1,1,0,3,-3]));