/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
    let adj = Array.from({ length: n }, () => []);
    for(let [u,v] of edges){
        adj[u].push(v);
        adj[v].push(u);
    }

    let vis = new Array(n).fill(0);

    function dfs(node, component) {
        vis[node] = 1;
        component.push(node);
        for(let neighbor of adj[node]){
            if(!vis[neighbor]){
                dfs(neighbor, component);
            }
        }
    }

    let components = [];
    for(let i=0; i<n; i++){
        if(!vis[i]){
            let component = [];
            dfs(i, component);
            components.push(component);
        }
    }

    let comp = 0;
    for(let component of components){
        const size = component.length;
        let edgesCount = 0;
        for(let node of component){
            edgesCount += adj[node].length;
        }

        if(edgesCount === size * (size - 1)) {
            comp++;
        }
    }

    return comp;
};