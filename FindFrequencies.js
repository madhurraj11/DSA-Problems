arr = [2,1,5,5,5,5,6,7,9,7,7,7];

arrObj = {};

for(let i = 0; i < arr.length; i++){
    if(arrObj[arr[i]]){
        arrObj[arr[i]]++;
    }
    else{
        arrObj[arr[i]] = 1;
    }
}
let max = -Infinity;
let element = 0;
for(let i in arrObj){
    if(arrObj[i] > max){
        max=arrObj[i];
        element = i
    }
}
console.log(element);