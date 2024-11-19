var findLucky = function(arr) {
    const freq = {};
    let res = -1;
    for(let i = 0; i < arr.length; i++){
        if(freq[arr[i]]){
            freq[arr[i]]++;
        }else{
            freq[arr[i]] = 1;
        }
    }
    for(let key in freq){
        if(freq.hasOwnProperty(key)){
            if(key == freq[key]){
                res = freq[key];
            }
        }
    }

    return res;
};

console.log(findLucky([2,2,3,3,3]));
