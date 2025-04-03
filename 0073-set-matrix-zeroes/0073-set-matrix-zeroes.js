/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let m = matrix.length;
    for(let i=0;i<m;i++){
        let n = matrix[i].length;
        for(let j=0;j<n;j++){
            if(matrix[i][j]===0){
                markRow(matrix,n,i);
                markCol(matrix,m,j);
            }
        }
    }

    for(let i=0;i<m;i++){
        let n = matrix[i].length;
        for(let j=0;j<n;j++){
            if(matrix[i][j]=== _){
                matrix[i][j] = 0;
            }
        }
    }
};

var markRow = function(matrix,n,i) {
    for(let j=0;j<n;j++){
        if(matrix[i][j]!==0){
            matrix[i][j] = _;
        }
    }
}

var markCol = function(matrix,n,j) {
    for(let i=0;i<n;i++){
        if(matrix[i][j]!==0){
            matrix[i][j] = _;
        }
    }
}