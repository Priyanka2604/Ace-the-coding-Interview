/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let vis = Array.from({ length: rows}, () => new Array(cols).fill(0));
    let q = [];
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if((i === 0 || i === rows-1 || j === 0 || j === cols-1) && grid[i][j] === 1){
                if(!vis[i][j]){
                    vis[i][j] = 1;
                    q.push([i,j]);
                }
            }
        }
    }

    let directions = [[-1, 0], [1,0], [0, -1], [0, 1]];

    while(q.length){
        let [r, c] = q.shift();
        for(let [dr, dc] of directions){
            let nr = r + dr, nc = c + dc;
            if(nr > 0 && nr < rows - 1 && nc > 0 && nc < cols -1 && grid[nr][nc] === 1){
                if(!vis[nr][nc]){
                    vis[nr][nc] = 1;
                    q.push([nr, nc]);
                }
            }
        }
    }

    let count = 0;
    for(let i = 1; i < rows-1; i++){
        for(let j = 1; j < cols-1; j++){
            if(!vis[i][j] && grid[i][j] === 1){
                count++;
            }
        }
    }

    return count;
};