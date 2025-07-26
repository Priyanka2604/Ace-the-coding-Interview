/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(!node) return null;

    const nodes = new Map();

    const dfs = (node) => {
        if(nodes.has(node.val)){
            return nodes.get(node.val);
        }

        const temp = new _Node(node.val);
        nodes.set(node.val, temp);

        for(let i of node.neighbors){
            temp.neighbors.push(dfs(i));
        }

        return temp;
    }

    return dfs(node);
};