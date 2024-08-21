arr1 = [2,1,8,5,5,7,9];
arr2 = [5,1,9,5,7,2,8];


function anagrams(arr1, arr2){
    arr1 = arr1.sort((a,b) => a-b);
    arr2 = arr2.sort((a,b) => a-b);

    if(arr1.length !== arr2.length){
        return "Not Anagrams";
    }
    else{
        for(let i = 0; i < arr1.length; i++){
            if(arr1[i]!==arr2[i]){
                return "Not Anagrams";
            }
        }
        return "Arrays are Anagrams";
    }
}

console.log(anagrams(arr1,arr2));

