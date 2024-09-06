function findMedianSortedArrays(arr1, arr2){
    const res = merge(arr1, arr2);
    let mid = 0;
    let median = 0;
    if(res.length%2 !== 0){
        mid = Math.floor(res.length/2);
        median = res[mid];
    }
    else{
        mid = Math.floor(res.length/2);
        median = (res[mid-1]+res[mid])/2;
    }
    return median;
}

function merge(arr1, arr2){
    const ans = [];
    let p1=0;
    let p2=0;

    while(p1<arr1.length || p2<arr2.length){
        let val1 = p1<arr1.length ? arr1[p1] : Infinity;
        let val2 = p2<arr2.length ? arr2[p2] : Infinity;

        if(val1 < val2){
            ans.push(val1);
            p1++;
        }else{
            ans.push(val2);
            p2++;
        }
    }
    return ans;
}

console.log(findMedianSortedArrays([1,2],[3,4]));