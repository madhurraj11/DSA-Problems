var generateMatrix = function(n) {
    const arr = Array.from({length: n}, () => Array(n));

    let count = 1;
    let minRow = 0;
    let maxRow = n-1;
    let minCol = 0;
    let maxCol = n-1;

    while(count <= n*n){
        //minRow fixed (minCol -> maxCol)
        for(let c = minCol; c <= maxCol; c++){
            arr[minRow][c] = count
            count++;
        }
        //maxCol fixed (minRow+1 -> maxRow)
        for(let c = minRow+1; c <= maxRow; c++){
            arr[c][maxCol] = count
            count++;
        }
        //maxRow fixed (maxCol-1 -> minCol)
        for(let c = maxCol-1; c >= minCol; c--){
            arr[maxRow][c] = count
            count++;
        }
        //minCol fixed (maxRow-1 -> minRow+1)
        for(let c = maxRow-1; c >= minRow+1; c--){
            arr[c][minCol] = count
            count++;
        }

        minRow += 1;
        maxRow -= 1;
        minCol += 1;
        maxCol -= 1;
    }

    return arr;
};

console.log(generateMatrix(4));