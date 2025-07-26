/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0;
    const q = [[root, 1]];

    while(q.length > 0){
        const [node, d] = q.shift();

        if(!node.left && !node.right) return d;
        if(node.left) q.push([node.left, d+1]);
        if(node.right) q.push([node.right, d+1]);
    }
};