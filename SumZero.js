const arr = [-2,1,5,0,-3];

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - i-1; j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

let res = [];
for(let i = 0; i < arr.length-2; i++){
    let left = i+1;
    let right = arr.length-1;
    while(left < right){
        let sumZero = arr[left] + arr[i] + arr[right];
        if(sumZero === 0){
            res.push(arr[left], arr[i], arr[right]);
            left++;
            right--;
            // Optional: Skip duplicates
            while (left < right && arr[left] === arr[left - 1]) left++;
            while (left < right && arr[right] === arr[right + 1]) right--;
        }
        else if(sumZero > 0){
            right--;
        }
        else{
            left++;
        }
    }
}

console.log(res);
