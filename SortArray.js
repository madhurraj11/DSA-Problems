arr = [2,1,6,7,9,21,22,20,10,4,5,3];
let temp;
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length-i; j++){
        if(arr[j]>arr[j+1]){
            temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}

console.log(arr);
