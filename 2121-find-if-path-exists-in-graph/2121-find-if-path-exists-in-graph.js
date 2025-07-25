/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const graph = new Map();

    // Build adjacency list
    for (const [a, b] of edges) {
        if (!graph.has(a)) graph.set(a, []);
        if (!graph.has(b)) graph.set(b, []);
        graph.get(a).push(b);
        graph.get(b).push(a);
    }

    const visited = new Array(n).fill(false);
    const queue = [source];
    visited[source] = true;

    let head = 0;

    while (head < queue.length) {
        const node = queue[head++];
        if (node === destination) return true;

        for (const neighbor of graph.get(node)) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }

    return false;
};