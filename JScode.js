let arr=[1,2,3,5]
let a=6
let arr1=[]
for (let i=0; i<a;i++){
    if(arr[i]!==i+1){
        arr1.push(i+1);
        arr[i]=i+1;
    }
}
console.log(arr1);
console.log(arr);
