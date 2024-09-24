var rotate = function(matrix) {
    
    for(let i = 0; i < matrix.length; i++){
        for(let j = i; j < matrix.length; j++){
            let k = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = k;
        }
    }

    for(let i = 0; i < matrix.length; i++){
        let tempArr = matrix[i];

        reverse(tempArr);
    }
    return matrix;
};

var reverse = function(arr) {
    let start = 0;
    let end = arr.length-1;

    while(start <= end){
        let k = arr[start];
        arr[start] = arr[end];
        arr[end] = k;

        start++;
        end--;
    }
}

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));