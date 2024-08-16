arr = [1,2,2,1,1,4,5,4,5,6,7,8,7,9,9];
newArr = [];
for(let i = 0; i < arr.length; i++){
    if(!newArr.includes(arr[i])){
        newArr.push(arr[i]);
    }
}

console.log(newArr);