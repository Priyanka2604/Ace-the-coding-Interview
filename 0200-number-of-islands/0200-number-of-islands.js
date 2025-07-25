/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let n = grid.length;
    let m = grid[0].length;
    let visited = Array(n).fill(0).map(() => Array(m).fill(0));
    let count = 0;
    for(let i=0; i < n; i++){
        for(let j=0; j < m; j++){
            if(!visited[i][j] && grid[i][j] === '1'){
                dfs(i, j);
                count++;
            }
        }
    }

    return count;

    function dfs(i, j){
        if(i < 0 || j < 0 || i >= n || j >= m || visited[i][j] || grid[i][j]=='0') return;
        visited[i][j] = '1';
        dfs(i, j-1);
        dfs(i, j+1);
        dfs(i-1, j);
        dfs(i+1, j);
    }
};