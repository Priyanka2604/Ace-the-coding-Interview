/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = (edges) => (edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1] ? edges[0][0] : edges[0][1]);