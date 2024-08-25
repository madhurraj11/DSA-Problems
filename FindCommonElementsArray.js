arr1 = [5,7,9,10,11,3];
arr2 = [6,9,3,15,7,12];

function findCommonElements(arr1, arr2) {
    let res = [];
    let obj = new Set(arr1);
    for (let elem of arr2) {
        if (obj.has(elem)) {
            res.push(elem);
        }
    }
    return res;
}

let commonElements = findCommonElements(arr1, arr2);
console.log(commonElements);