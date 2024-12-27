arr = [0,1,1,2,2,3,4,5,5,5];
newArr = [];
for(let i = 0; i < arr.length; i++){
    if(!newArr.includes(arr[i])){
        newArr.push(arr[i])
    }
}

console.log(newArr, newArr.length);
