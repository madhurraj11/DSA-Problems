function squaresOfSortedArrays(arr){
    const sqArr = new Array(arr.length).fill(0);
    let start = 0;
    let end = arr.length-1;
    let ptr = sqArr.length-1;
    while(start <= end){
        let sqStart = arr[start]*arr[start];
        let sqEnd = arr[end]*arr[end];

        if(sqStart>sqEnd){
            sqArr[ptr] = sqStart;
            start++;
        }else{
            sqArr[ptr] = sqEnd;
            end--;
        }
        ptr--;
    }
    return sqArr;
}
const arr = [-7,-3,-1,0,2,4,5];
const res = squaresOfSortedArrays(arr);
console.log(res, arr)