/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
    // Step 1: Build adjacency list
    let adj = Array.from({ length: n }, () => []);
    for(let [u,v] of edges){
        adj[u].push(v);
        adj[v].push(u);
    }

    // Step 2: Initialize visited array
    let vis = new Array(n).fill(0);

    // Step 3: DFS to find connected components
    function dfs(node, component) {
        vis[node] = 1;
        component.push(node);
        for(let neighbor of adj[node]){
            if(!vis[neighbor]){
                dfs(neighbor, component);
            }
        }
    }

    // Step 4: Find connected components
    let components = [];
    for(let i=0; i<n; i++){
        if(!vis[i]){
            let component = [];
            dfs(i, component);
            components.push(component);
        }
    }

    // Step 5: Validate complete components
    let completeComponents = 0;
    for(let component of components){
        const size = component.length;
        let edgesCount = 0;
        for(let node of component){
            edgesCount += adj[node].length;
        }

        // Check if the component is complete
        if(edgesCount === size * (size - 1)) {
            completeComponents++;
        }
    }

    return completeComponents;
};