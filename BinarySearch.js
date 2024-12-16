function BinarySearch(arr,n){
    if (arr.length <=0){
        return arr;
    }

    let left = 0;
    let right = arr.length-1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if (arr[mid]===n){
            return mid;
        }

        else if (arr[mid]<n){
            left = mid+1;
        }

        else{
            right = mid-1;
        }
    }

    return `${n} is not found in the given array`;
}

let list = [2,4,8,11,12,16,20,7,1,3]
list=list.sort((a,b)=> a-b);
console.log(BinarySearch(list,3));
