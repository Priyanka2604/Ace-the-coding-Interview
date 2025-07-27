/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let adj = Array.from({ length: numCourses }, () => []);
    let inDegree = new Array(numCourses).fill(0);


    for(let [u, v] of prerequisites) {
        adj[v].push(u);
        inDegree[u]++;
    }

    let q = [];
    for(let i = 0; i < numCourses; i++){
        if(inDegree[i] === 0){
            q.push(i);
        }
    }

    let topo = [];
    while(q.length){
        let curr = q.shift();
        topo.push(curr);

        for(let neighbor of adj[curr]){
            inDegree[neighbor]--;
            if(inDegree[neighbor] === 0){
                q.push(neighbor);
            }
        }
    }

    return topo.length === numCourses ? topo : [];
};