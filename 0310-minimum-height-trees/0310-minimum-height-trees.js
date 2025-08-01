/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    // Base case: 1 or 2 nodes are roots.
    if(n <= 2) return [...Array(n).keys()];

    // Step 1: Build adjacency list
    const adj = Array.from({ length: n }, () => new Set());
    for(const [u, v] of edges) {
        adj[u].add(v);
        adj[v].add(u);
    }

    // Step 2: Identify initial leaves
    let leaves = [];
    for(let i=0; i<n; i++){
        if(adj[i].size === 1) leaves.push(i); // Nodes with degree 1
    }

    // Step 3: Trim leaves iteratively
    while(n > 2){ // remainingNodes = n
        n -= leaves.length; // Remove current leaves
        const newLeaves = [];

        for(const leaf of leaves) {
            const neighbor = [...adj[leaf]][0]; // // Remove leaf from its neighbor
            adj[neighbor].delete(leaf) // Remove leaf reference
            if(adj[neighbor].size === 1) newLeaves.push(neighbor); // Add new leaf
        }

        leaves = newLeaves; // Update leaves for the next iteration
    }

    // Step 4: Remaining nodes are roots
    return leaves;
};