arr = [0,1,0,1,0,1,0,1,1];
let res = [];
let n = arr.length;
for(let i = 0; i < n; i++) {
    if(arr[i] == 0) {
        arr[i] = -1;
    } 
    if ((arr[i] + arr[i+1]) === 0){
        res.push([arr[i]=0, arr[i+1]]);
    }          
}

console.log(res);
