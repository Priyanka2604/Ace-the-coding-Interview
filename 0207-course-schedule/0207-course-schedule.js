/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    if(prerequisites.length === 0) return true;
    let adj = Array.from({ length: numCourses }, () => []);

    for(let [u, v] of prerequisites) {
        adj[u].push(v);
    }

    let vis = new Array(numCourses).fill(0);
    let pathVis = new Array(numCourses).fill(0);

    for(let i=0; i< numCourses; i++){
        if(!vis[i]){
            if(dfs(i)) return false;
        }
    }

    function dfs(node){
        vis[node] = 1;
        pathVis[node] = 1;

        for(let i of adj[node]){
            if(!vis[i] && dfs(i)){
                return true;
            }
            else if(pathVis[i]) return true;
        }
        pathVis[node] = 0;
        return false;
    }

    return true;
};