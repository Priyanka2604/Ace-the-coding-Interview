/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let n = isConnected.length;

    let visited = new Array(n).fill(0);

    function dfs(node){
        visited[node] = 1;
        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (isConnected[node][neighbor] === 1 && !visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }

    let countProvinces = 0;

    for(let i=0; i<n; i++){
        if(!visited[i]){
            dfs(i);
            countProvinces++;
        }
    }

    return countProvinces;
    
};