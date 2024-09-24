var searchMatrix = function(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;

    while(row<matrix.length && col >= 0){
        if(target === matrix[row][col]){
            return true;
        }
        else if(target > matrix[row][col]){
            row++;
        }else{
            col--;
        }
    }
    return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3));