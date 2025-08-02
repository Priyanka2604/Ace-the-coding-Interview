/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let n = isConnected.length;
    let adj = Array.from({ length:n }, () => []);

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(isConnected[i][j] === 1 && i !== j){
                adj[i].push(j);
                adj[j].push(i);
            }
        }
    }

    let visited = new Array(n).fill(0);

    function dfs(node){
        visited[node] = 1;
        for(let neighbor of adj[node]){
            if(!visited[neighbor]){
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