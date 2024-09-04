let arr = [0,2,1,2,0];

let n = arr.length;
let left = 0;
let mid = 0;
let right = n-1;

while(mid <= right){
    if(arr[mid] === 0){
        [arr[left], arr[mid]] = [arr[mid], arr[left]];
        left += 1;
        mid += 1;
    }
    else if(arr[mid] === 1){
        mid += 1;
    }
    else{
        [arr[mid], arr[right]] = [arr[right], arr[mid]]
        right -= 1;
    }
}

console.log(arr);