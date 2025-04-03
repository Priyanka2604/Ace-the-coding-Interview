/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let m = matrix.length;
    let rowArr = new Array(m).fill(0);
    let colArr = new Array(matrix[0].length).fill(0);
    for(let i=0;i<m;i++){
        let n = matrix[i].length;
        for(let j=0;j<n;j++){
            if(matrix[i][j]===0){
                rowArr[i] = 1;
                colArr[j] = 1;
            }
        }
    }

    for(let i=0;i<m;i++){
        let n = matrix[i].length;
        for(let j=0;j<n;j++){
            if(rowArr[i]===1){
                matrix[i][j] = 0;
            }
            if(colArr[j]===1){
                matrix[i][j] = 0;
            }
        }
    }
};
