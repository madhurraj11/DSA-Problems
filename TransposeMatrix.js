var transpose = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    const ans = Array.from({length: col}, ()=>Array(row).fill(0));
    for(let i = 0; i<row; i++){
      for(let j=0; j<col;j++){
          ans[j][i]=matrix[i][j];
      }
    }  
    return ans;
  };

  let matrix = [[1,2,3],[4,5,6],[7,8,9]];
  console.log(transpose(matrix));